// ---------- brains (Claude) and generators (your API keys) ----------
const SDK_URL = 'https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@0.131.0/+esm';
const API_MODELS = { quick: 'claude-haiku-5-5', default: 'claude-opus-5-5', complex: 'claude-opus-5-5' };
const API_EFFORT = { quick: 'low', default: 'medium', complex: 'high' };

const PROVIDERS = {
  anthropic: { label: 'Anthropic (Claude)', hint: 'Gives the robots their brains when you run the studio on your own computer. Inside claude.ai the robots use your Claude account instead, so this key is not needed there.', link: 'console.anthropic.com', fields: [] },
  fal: { label: 'fal.ai', hint: 'One key for many image and video models (Flux, Kling, Veo, Seedance…). Put any fal model id below.', link: 'fal.ai/dashboard/keys', fields: [['imageModel', 'Image model', 'fal-ai/flux/dev'], ['videoModel', 'Video model', 'fal-ai/kling-video/v2.1/standard/text-to-video']] },
  openai: { label: 'OpenAI', hint: 'GPT Image for pictures, Sora for video.', link: 'platform.openai.com/api-keys', fields: [['imageModel', 'Image model', 'gpt-image-1'], ['videoModel', 'Video model', 'sora-2']] },
  google: { label: 'Google Gemini', hint: 'Gemini image (Nano Banana) for pictures, Veo for video.', link: 'aistudio.google.com/apikey', fields: [['imageModel', 'Image model', 'gemini-2.5-flash-image'], ['videoModel', 'Video model', 'veo-3.0-generate-001']] },
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
  const SIZE = { '16:9': ['1536x1024', 'landscape_16_9'], '9:16': ['1024x1536', 'portrait_16_9'], '1:1': ['1024x1024', 'square_hd'], '2.39:1': ['1536x1024', 'landscape_16_9'], '4:5': ['1024x1536', 'portrait_4_3'] };
  async function call(url, init) {
    let r;
    try { r = await fetch(url, init); }
    catch (e) { throw { code: 'network_blocked', message: Brain.mode() === 'claude' ? 'claude.ai blocks this page from reaching outside services. Use 📥 Take the studio home and open it on your computer — your keys work there.' : 'The request could not reach the provider (network or CORS).' }; }
    if (!r.ok) { let msg = ''; try { msg = (await r.text()).slice(0, 400); } catch (e) { /* ignore */ } throw { code: r.status === 401 || r.status === 403 ? 'bad_key' : 'provider_error', message: `${r.status}: ${msg}` }; }
    return r;
  }
  const pause = (ms, signal) => new Promise((res, rej) => { const t = setTimeout(res, ms); if (signal) signal.addEventListener('abort', () => { clearTimeout(t); rej({ code: 'cancelled' }); }, { once: true }); });
  async function image(provider, k, prompt, aspect) {
    const sz = SIZE[aspect] || SIZE['16:9'];
    if (provider === 'openai') {
      const r = await call('https://api.openai.com/v1/images/generations', { method: 'POST', headers: { Authorization: 'Bearer ' + k.key, 'Content-Type': 'application/json' }, body: JSON.stringify({ model: k.imageModel || 'gpt-image-1', prompt, size: sz[0], n: 1 }) });
      const j = await r.json(); const d = j.data && j.data[0];
      return { url: d && (d.b64_json ? 'data:image/png;base64,' + d.b64_json : d.url) };
    }
    if (provider === 'google') {
      const r = await call(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(k.imageModel || 'gemini-2.5-flash-image')}:generateContent`, { method: 'POST', headers: { 'x-goog-api-key': k.key, 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: `${prompt}\nAspect ratio ${aspect}.` }] }] }) });
      const j = await r.json();
      const part = ((((j.candidates || [])[0] || {}).content || {}).parts || []).find((p) => p.inlineData || p.inline_data);
      const d = part && (part.inlineData || part.inline_data);
      if (!d) throw { code: 'provider_error', message: 'No image in the response.' };
      return { url: `data:${d.mimeType || d.mime_type || 'image/png'};base64,${d.data}` };
    }
    if (provider === 'fal') {
      const r = await call('https://fal.run/' + (k.imageModel || 'fal-ai/flux/dev'), { method: 'POST', headers: { Authorization: 'Key ' + k.key, 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt, image_size: sz[1] }) });
      const j = await r.json();
      return { url: j.images && j.images[0] && j.images[0].url };
    }
    throw { code: 'provider_error', message: 'Unknown provider' };
  }
  async function video(provider, k, prompt, aspect, seconds, onStatus, signal) {
    if (provider === 'fal') {
      const model = k.videoModel || 'fal-ai/kling-video/v2.1/standard/text-to-video';
      const head = { Authorization: 'Key ' + k.key, 'Content-Type': 'application/json' };
      const sub = await (await call('https://queue.fal.run/' + model, { method: 'POST', headers: head, body: JSON.stringify({ prompt, aspect_ratio: aspect === '2.39:1' ? '16:9' : aspect, duration: String(seconds <= 5 ? 5 : 10) }) })).json();
      for (let k2 = 0; k2 < 120; k2++) {
        await pause(5000, signal);
        const st = await (await call(sub.status_url, { headers: head })).json();
        onStatus && onStatus(`fal: ${st.status}${st.queue_position != null ? ' · queue ' + st.queue_position : ''}`);
        if (st.status === 'COMPLETED') { const res = await (await call(sub.response_url, { headers: head })).json(); return { url: (res.video && res.video.url) || (res.videos && res.videos[0] && res.videos[0].url) }; }
        if (st.status === 'FAILED' || st.status === 'ERROR') throw { code: 'provider_error', message: 'fal reported a failure.' };
      }
      throw { code: 'provider_error', message: 'Timed out waiting for fal.' };
    }
    if (provider === 'openai') {
      const head = { Authorization: 'Bearer ' + k.key, 'Content-Type': 'application/json' };
      const size = aspect === '9:16' ? '720x1280' : '1280x720';
      const job = await (await call('https://api.openai.com/v1/videos', { method: 'POST', headers: head, body: JSON.stringify({ model: k.videoModel || 'sora-2', prompt, size, seconds: String(seconds <= 4 ? 4 : seconds <= 8 ? 8 : 12) }) })).json();
      for (let k2 = 0; k2 < 120; k2++) {
        await pause(5000, signal);
        const st = await (await call('https://api.openai.com/v1/videos/' + job.id, { headers: head })).json();
        onStatus && onStatus(`OpenAI: ${st.status}${st.progress != null ? ' ' + st.progress + '%' : ''}`);
        if (st.status === 'completed') { const blob = await (await call(`https://api.openai.com/v1/videos/${job.id}/content`, { headers: head })).blob(); return { url: URL.createObjectURL(blob), blob }; }
        if (st.status === 'failed') throw { code: 'provider_error', message: (st.error && st.error.message) || 'OpenAI reported a failure.' };
      }
      throw { code: 'provider_error', message: 'Timed out waiting for OpenAI.' };
    }
    if (provider === 'google') {
      const base = 'https://generativelanguage.googleapis.com/v1beta/';
      const head = { 'x-goog-api-key': k.key, 'Content-Type': 'application/json' };
      const op = await (await call(`${base}models/${encodeURIComponent(k.videoModel || 'veo-3.0-generate-001')}:predictLongRunning`, { method: 'POST', headers: head, body: JSON.stringify({ instances: [{ prompt }], parameters: { aspectRatio: aspect === '9:16' ? '9:16' : '16:9' } }) })).json();
      for (let k2 = 0; k2 < 120; k2++) {
        await pause(6000, signal);
        const st = await (await call(base + op.name, { headers: head })).json();
        onStatus && onStatus(st.done ? 'Google: done' : 'Google: generating…');
        if (st.error) throw { code: 'provider_error', message: st.error.message };
        if (st.done) {
          const sm = (((st.response || {}).generateVideoResponse || {}).generatedSamples || [])[0];
          const uri = sm && sm.video && sm.video.uri;
          if (!uri) throw { code: 'provider_error', message: 'No video in the response.' };
          const blob = await (await call(uri, { headers: { 'x-goog-api-key': k.key } })).blob();
          return { url: URL.createObjectURL(blob), blob };
        }
      }
      throw { code: 'provider_error', message: 'Timed out waiting for Google.' };
    }
    throw { code: 'provider_error', message: 'Unknown provider' };
  }
  async function test(provider, k) {
    if (provider === 'anthropic') { await Brain.sample('Reply with the single word: ready', { modelTier: 'quick' }); return 'Claude answered.'; }
    if (provider === 'openai') { await call('https://api.openai.com/v1/models', { headers: { Authorization: 'Bearer ' + k.key } }); return 'Key works.'; }
    if (provider === 'google') { await call('https://generativelanguage.googleapis.com/v1beta/models?pageSize=1', { headers: { 'x-goog-api-key': k.key } }); return 'Key works.'; }
    return 'fal has no free test call; it is checked on the first generation.';
  }
  return { image, video, test };
})();
