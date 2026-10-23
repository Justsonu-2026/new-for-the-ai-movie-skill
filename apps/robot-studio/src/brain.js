// ---------- brains (Claude) and generators (your API keys) ----------
const SDK_URL = 'https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@0.131.0/+esm';
const API_MODELS = { quick: 'claude-haiku-5-5', default: 'claude-opus-5-5', complex: 'claude-opus-5-5' };
const API_EFFORT = { quick: 'low', default: 'medium', complex: 'high' };

const PROVIDERS = {
  magnific: { label: 'Magnific', hint: 'Makes real pictures and video for your film with your Magnific API key (Business or Enterprise plan; create the key in Magnific → Settings → API Keys).', link: 'magnific.com', fields: [['imageModel', 'Image model', 'mystic', ['mystic', 'text-to-image/seedream-v4', 'text-to-image/flux-dev']], ['videoModel', 'Video model', 'text-to-video/wan-v2-6-720p', ['text-to-video/wan-v2-6-720p', 'text-to-video/veo-3-1-lite', 'video/kling-v3-pro']]] },
  anthropic: { label: 'Claude brain (Anthropic key)', hint: 'Only needed when you run the studio file on your own computer: it gives the robots their brains there. Inside claude.ai the robots use your Claude account.', link: 'console.anthropic.com', fields: [], apiOnly: true },
};

const Keys = (() => {
  const read = (k) => { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } };
  const write = (k, v) => { try { if (v) localStorage.setItem(k, JSON.stringify(v)); else localStorage.removeItem(k); } catch (e) { /* storage blocked */ } };
  // keys live only in this browser: per film, with an optional default for every film; never saved to the account or exports
  function get(pid) {
    const own = pid ? read('rfs:keys:' + pid) : null;
    return own || read('rfs:keys:default') || {};
  }
  function set(pid, obj, asDefault) {
    if (pid) write('rfs:keys:' + pid, obj);
    if (asDefault) write('rfs:keys:default', obj);
  }
  function key(pid, provider) { const k = get(pid)[provider]; return k && k.key ? k : null; }
  return { get, set, key, isDefault: () => !!read('rfs:keys:default') };
})();

const Brain = (() => {
  let sampleFn = null;
  let mode = null;
  let Sdk = null;
  let pidFn = () => null;
  async function init(getPid) {
    pidFn = getPid || pidFn;
    sampleFn = await useCap('sample');
    mode = sampleFn ? 'claude' : 'api';
    return mode;
  }
  const ready = () => mode === 'claude' || !!Keys.key(pidFn(), 'anthropic');
  async function client() {
    const k = Keys.key(pidFn(), 'anthropic');
    if (!k) throw { code: 'no_brain', message: 'Add an Anthropic API key on the 🔑 Keys page.' };
    if (!Sdk) {
      try { const m = await import(SDK_URL); Sdk = m.default || m.Anthropic; }
      catch (e) { throw { code: 'network_blocked', message: 'Could not load the Anthropic SDK.' }; }
    }
    return new Sdk({ apiKey: k.key, dangerouslyAllowBrowser: true });
  }
  async function toBase64(blob) {
    const buf = new Uint8Array(await blob.arrayBuffer());
    let s2 = '';
    for (let i = 0; i < buf.length; i += 0x8000) s2 += String.fromCharCode.apply(null, buf.subarray(i, i + 0x8000));
    return btoa(s2);
  }
  function mapError(e) {
    if (e && e.code) return e;
    const status = e && e.status;
    if (e && e.name === 'AbortError') return { code: 'cancelled' };
    if (status === 401 || status === 403) return { code: 'bad_key', message: 'The Anthropic key was rejected.' };
    if (status === 429) return { code: 'rate_limited' };
    if (status === 400) return { code: 'invalid_request', message: String(e.message || '').slice(0, 300) };
    if (status >= 500) return { code: 'upstream_error' };
    return { code: 'network_blocked', message: String((e && e.message) || e).slice(0, 200) };
  }
  async function apiSample(input, opts) {
    const c = await client();
    const tier = opts.modelTier || 'default';
    const model = API_MODELS[tier];
    const imgs = opts.images ? Array.from(opts.images) : [];
    const turns = typeof input === 'string' ? [{ role: 'user', content: input }] : input;
    const messages = [];
    for (const t of turns) {
      const last = messages[messages.length - 1];
      if (last && last.role === t.role) last.content += '\n\n' + t.content; else messages.push({ role: t.role, content: t.content });
    }
    if (imgs.length) {
      const lastUser = messages[messages.length - 1];
      const blocks = [];
      for (const b of imgs) blocks.push({ type: 'image', source: { type: 'base64', media_type: b.type || 'image/jpeg', data: await toBase64(b) } });
      blocks.push({ type: 'text', text: lastUser.content });
      lastUser.content = blocks;
    }
    const body = { model, max_tokens: 32000, messages, output_config: { effort: API_EFFORT[tier] } };
    if (model !== 'claude-haiku-5-5') { body.betas = ['server-side-fallback-2026-07-01']; body.fallbacks = 'default'; }
    let text = '';
    try {
      const stream = c.beta.messages.stream(body, { signal: opts.signal });
      for await (const ev of stream) {
        if (ev.type === 'content_block_delta' && ev.delta.type === 'text_delta') {
          text += ev.delta.text;
          if (opts.onText) opts.onText({ text, delta: ev.delta.text });
        }
      }
      const fin = await stream.finalMessage();
      if (fin.stop_reason === 'refusal') throw { code: 'refused' };
      if (!text.trim()) throw { code: 'empty_completion' };
      return { text, truncated: fin.stop_reason === 'max_tokens', modelTierApplied: tier };
    } catch (e) { const m = mapError(e); if (text) m.text = text; throw m; }
  }
  async function sample(input, opts) {
    opts = opts || {};
    if (mode === 'claude') return sampleFn(input, opts);
    return apiSample(input, opts);
  }
  async function json(input, opts) {
    if (mode === 'claude') return sampleFn.json(input, opts);
    const { text } = await apiSample(input, opts || {});
    const parsed = extractJsonBlock(text) || (() => { const a = text.indexOf('{'), b = text.lastIndexOf('}'); try { return JSON.parse(text.slice(a, b + 1)); } catch (e) { return null; } })();
    if (!parsed) throw { code: 'invalid_json', text };
    return parsed;
  }
  async function limits() {
    if (mode === 'claude') return sampleFn.limits ? sampleFn.limits().catch(() => null) : null;
    return { maxPromptBytes: 900000, images: { maxCount: 8, mediaTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'] } };
  }
  return { init, ready, sample, json, limits, mode: () => mode };
})();

// ---------- image and video generation with the user's own keys ----------
const Gen = (() => {
  const MAG = 'https://api.magnific.com/v1/ai/';
  const ASPECT = { '16:9': 'widescreen_16_9', '9:16': 'social_story_9_16', '1:1': 'square_1_1', '2.39:1': 'smartphone_horizontal_20_9', '4:5': 'social_post_4_5' };
  async function call(url, init) {
    let r;
    try { r = await fetch(url, init); }
    catch (e) { throw { code: 'network_blocked', message: Brain.mode() === 'claude' ? 'claude.ai blocks this page from reaching outside services. Use 📥 Take the studio home and open it on your computer — your Magnific key works there.' : 'The request could not reach Magnific (network, or Magnific does not accept calls from a browser page).' }; }
    if (!r.ok) { let msg = ''; try { msg = (await r.text()).slice(0, 400); } catch (e) { /* ignore */ } throw { code: r.status === 401 || r.status === 403 ? 'bad_key' : 'provider_error', message: `Magnific ${r.status}: ${msg}` }; }
    return r;
  }
  const pause = (ms, signal) => new Promise((res, rej) => { const t = setTimeout(res, ms); if (signal) signal.addEventListener('abort', () => { clearTimeout(t); rej({ code: 'cancelled' }); }, { once: true }); });
  const clean = (path) => String(path || '').trim().replace(/^https?:\/\/[^/]+/, '').replace(/^\/?v1\/ai\//, '').replace(/^\/+|\/+$/g, '');
  const first = (d) => {
    const gen = d && (d.generated || d.images || d.videos || d.result) || [];
    const f = Array.isArray(gen) ? gen[0] : gen;
    if (!f) return null;
    if (typeof f === 'string') return f;
    return f.url || (f.base64 ? 'data:image/png;base64,' + f.base64 : null);
  };
  // Magnific runs every generation as a task: create it, then poll GET <model path>/<task id> until COMPLETED
  async function magnific(kind, k, prompt, aspect, seconds, onStatus, signal) {
    const path = clean(kind === 'video' ? k.videoModel || 'text-to-video/wan-v2-6-720p' : k.imageModel || 'mystic');
    const head = { 'x-magnific-api-key': k.key, 'Content-Type': 'application/json' };
    const body = { prompt, aspect_ratio: ASPECT[aspect] || 'widescreen_16_9' };
    if (kind === 'video') body.duration = seconds <= 5 ? '5' : '10';
    const sub = await (await call(MAG + path, { method: 'POST', headers: head, body: JSON.stringify(body) })).json();
    const d = sub.data || sub;
    if (first(d)) return { url: first(d) };
    const id = d.task_id || d.id;
    if (!id) throw { code: 'provider_error', message: 'Magnific did not return a task id.' };
    for (let n = 0; n < 150; n++) {
      await pause(kind === 'video' ? 5000 : 3000, signal);
      const st = await (await call(`${MAG}${path}/${encodeURIComponent(id)}`, { headers: head })).json();
      const dd = st.data || st;
      onStatus && onStatus(`Magnific: ${String(dd.status || 'working').toLowerCase().replace(/_/g, ' ')}…`);
      if (/COMPLETED|SUCCEEDED|DONE/i.test(dd.status || '')) { const u = first(dd); if (!u) throw { code: 'provider_error', message: 'Magnific finished without a file.' }; return { url: u }; }
      if (/FAILED|ERROR|CANCEL/i.test(dd.status || '')) throw { code: 'provider_error', message: 'Magnific reported the task as ' + dd.status + '.' };
    }
    throw { code: 'provider_error', message: 'Timed out waiting for Magnific.' };
  }
  const image = (provider, k, prompt, aspect) => magnific('image', k, prompt, aspect, 0);
  const video = (provider, k, prompt, aspect, seconds, onStatus, signal) => magnific('video', k, prompt, aspect, seconds, onStatus, signal);
  async function test(provider, k) {
    if (provider === 'anthropic') { await Brain.sample('Reply with the single word: ready', { modelTier: 'quick' }); return 'Claude answered.'; }
    await call(MAG + clean(k.imageModel || 'mystic'), { headers: { 'x-magnific-api-key': k.key } });
    return 'Magnific accepted the key.';
  }
  return { image, video, test };
})();
