// ---------- UI: pages (Lobby, Cabin, Studio, Screening, Board, Keys) ----------
const UI = (() => {
  let pendingUploads = [];
  let draft = null;
  let page = 'lobby';
  let previewSel = null;
  let previewMode = 'doc';
  let previewFollow = true;
  let screenTab = 'docs';
  let renderQueued = false;
  let animatic = null;
  let downloads = null;
  let unread = 0;
  let studioCam = 'director';
  let player = { ctl: null, busy: false, music: true };
  const generated = {};
  const P = () => Engine.project();

  // ----- toasts and modal -----
  function toast(msg, ms) {
    const t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast.tm);
    toast.tm = setTimeout(() => { t.hidden = true; }, ms || 2600);
  }
  function openModal(content, cls) {
    const m = $('#modal');
    m.className = 'modal ' + (cls || '');
    fill(m, content);
    $('#modalBack').hidden = false;
    const f = m.querySelector('input, select, textarea, button');
    if (f) f.focus();
  }
  function closeModal() { $('#modalBack').hidden = true; $('#modal').replaceChildren(); }
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); toast('Copied! 📋'); }
    catch (e) {
      const ta = h('textarea', { class: 'sr-copy' }, text);
      document.add(body, ta); ta.select();
      try { document.execCommand('copy'); toast('Copied! 📋'); } catch (e2) { toast('Copy failed; select the text manually.'); }
      ta.remove();
    }
  }

  // ----- uploads -----
  const TEXT_EXT = /\.(txt|md|markdown|json|csv|tsv|fountain|fdx|srt|vtt|yaml|yml|html?|xml|rtf)$/i;
  async function readUpload(file) {
    const u = { id: uid('up'), name: file.name, size: file.size, kind: 'other' };
    try {
      if (file.type.startsWith('image/')) {
        Object.assign(u, await downscale(file), { kind: 'image' });
      } else if (file.type.startsWith('video/')) {
        Object.assign(u, await videoFrame(file), { kind: 'video' });
      } else if (file.type.startsWith('text/') || file.type === 'application/json' || TEXT_EXT.test(file.name)) {
        u.kind = 'text';
        u.text = (await file.text()).slice(0, 60000);
      }
    } catch (e) { u.kind = 'other'; }
    return u;
  }
  async function downscale(fileOrBlob) {
    const bmp = await createImageBitmap(fileOrBlob);
    const k = Math.min(1, 1024 / Math.max(bmp.width, bmp.height));
    const c = document.createElement('canvas');
    c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
    c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
    const dataUrl = c.toDataURL('image/jpeg', 0.82);
    return { dataUrl, blob: dataUrlToBlob(dataUrl) };
  }
  function videoFrame(file) {
    return new Promise((resolve, reject) => {
      const v = document.createElement('video');
      const url = URL.createObjectURL(file);
      v.muted = true; v.preload = 'auto'; v.src = url;
      v.onloadeddata = () => { v.currentTime = Math.min(1, (v.duration || 2) / 3); };
      v.onseeked = () => {
        const c = document.createElement('canvas');
        const k = Math.min(1, 1024 / Math.max(v.videoWidth, v.videoHeight));
        c.width = Math.round(v.videoWidth * k); c.height = Math.round(v.videoHeight * k);
        c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        const dataUrl = c.toDataURL('image/jpeg', 0.82);
        resolve({ dataUrl, blob: dataUrlToBlob(dataUrl) });
      };
      v.onerror = () => { URL.revokeObjectURL(url); reject(new Error('video')); };
    });
  }
  async function addFiles(files) {
    const list = Array.from(files || []).slice(0, 12);
    if (!list.length) return;
    toast(`Unpacking ${list.length} file(s)… 📦`);
    for (const f of list) {
      if (/\.json$/i.test(f.name)) {
        try { const j = JSON.parse(await f.text()); if (j && j.robo_film_studio_project) { importProject(j); continue; } } catch (e) { /* treat as text */ }
      }
      const u = await readUpload(f);
      pendingUploads.push(u);
      W.addCrate(u.kind);
    }
    renderAttachments();
    if (page === 'lobby') renderLobby();
  }
  function renderAttachments() {
    const row = $('#attachRow');
    fill(row, ...pendingUploads.map((u) => h('span', { class: 'attach-chip' },
      u.dataUrl ? h('img', { src: u.dataUrl, alt: '' }) : h('span', { class: 'attach-ico' }, u.kind === 'text' ? '📄' : '📦'),
      h('span', { class: 'attach-name' }, u.name),
      h('button', { class: 'x', title: 'Remove', onclick: () => { pendingUploads = pendingUploads.filter((x) => x !== u); renderAttachments(); } }, '×'))));
    row.hidden = !pendingUploads.length;
  }

  // ----- command bar: you only talk to the coordinator -----
  async function send() {
    const ta = $('#cmdInput');
    const text = ta.value.trim();
    if (!text && !pendingUploads.length) return;
    const p = P();
    if (!p) {
      draft = draft || defaults();
      if (text) draft.idea = text;
      ta.value = ''; autosize();
      goPage('lobby');
      toast('Captain Clipboard wrote your pitch into the new-film card. Press 🎬 Start!');
      return;
    }
    const ups = pendingUploads;
    pendingUploads = [];
    renderAttachments();
    ta.value = '';
    autosize();
    if (ups.length) {
      p.uploads.push(...ups);
      Engine.chat('user', `📎 Uploaded ${ups.map((u) => u.name).join(', ')}`);
    }
    const images = ups.filter((u) => u.blob).map((u) => u.blob);
    await Engine.coordinatorMessage(text || 'I uploaded new reference files. Please route them to the right departments.', images);
  }
  function autosize() { const ta = $('#cmdInput'); ta.style.height = 'auto'; ta.style.height = Math.min(140, ta.scrollHeight) + 'px'; }

  // ----- lobby: a simple new-film card -----
  function defaults() {
    const prev = (() => { try { return JSON.parse(localStorage.getItem('rfs:lastSettings') || 'null'); } catch (e) { return null; } })();
    const gates = Object.fromEntries(STAGES.map((x) => [x.id, !!x.gate]));
    const base = { title: '', idea: '', runtime: 60, aspect: '16:9', medium: 'stylized 3D animation', genre: 'comedy', tone: '', language: 'English', audience: 'general', imageModel: OPTIONS.imageModel[0], videoModel: OPTIONS.videoModel[0], mode: 'auto', gates, stopAfter: null, imageMode: 'sketch', tier: 'default', depth: 'standard', chatter: true, speed: 'normal', preset: 'full', crew: Object.fromEntries(STAGE_ORDER.map((id) => [id, true])) };
    if (!prev) return base;
    return { ...base, ...prev, title: '', idea: '', stopAfter: null, imageMode: prev.imageMode === 'prompts' ? 'prompts' : 'sketch', crew: { ...base.crew, ...(prev.crew || {}) }, gates: { ...gates, ...(prev.gates || {}) } };
  }
  function field(label, control, hint) { return h('label', { class: 'field' }, h('span', { class: 'field-label' }, label), control, hint ? h('small', { class: 'field-hint' }, hint) : null); }
  function select(key, list, fmt) {
    const sel = h('select', { onchange: (e) => { draft[key] = isNaN(+e.target.value) || key !== 'runtime' ? e.target.value : +e.target.value; } });
    for (const it of list) {
      const [v, l] = Array.isArray(it) ? it : [it, fmt ? fmt(it) : it];
      sel.append(h('option', { value: v, selected: String(draft[key]) === String(v) ? true : null }, l));
    }
    return sel;
  }
  function cards(key, map, after, rerender) {
    return h('div', { class: 'choice-grid' }, ...Object.entries(map).map(([k, v]) => h('button', {
      class: 'choice' + (draft[key] === k ? ' on' : ''), type: 'button', 'aria-pressed': draft[key] === k ? 'true' : 'false',
      onclick: () => { draft[key] = k; if (after) after(k); (rerender || renderLobby)(); },
    }, h('b', {}, v.label || v), v.hint ? h('small', {}, v.hint) : null)));
  }
  function chips(key, list, rerender) {
    return h('div', { class: 'chips-row' }, ...list.map(([v, l]) => h('button', { type: 'button', class: 'pick' + (String(draft[key]) === String(v) ? ' on' : ''), 'aria-pressed': String(draft[key]) === String(v) ? 'true' : 'false', onclick: () => { draft[key] = v; (rerender || renderLobby)(); } }, l)));
  }
  function renderLobby() {
    const el = $('#page-lobby');
    draft = draft || defaults();
    const idea = h('textarea', { rows: 3, placeholder: 'e.g. A grumpy pigeon becomes the city\'s first traffic cop…', oninput: (e) => { draft.idea = e.target.value; } }, draft.idea || '');
    const crewGrid = h('div', { class: 'crew-grid' }, ...[...new Set(STAGES.map((x) => x.robot))].map((rid) => {
      const isCoord = rid === COORD;
      const stagesOf = STAGES.filter((y) => y.robot === rid);
      const on = isCoord || stagesOf.every((y) => draft.crew[y.id] !== false);
      return h('button', { type: 'button', class: 'crew-card' + (on ? ' on' : '') + (isCoord ? ' locked' : ''), 'aria-pressed': on ? 'true' : 'false', disabled: isCoord ? true : null, title: ROBOTS[rid].job,
        onclick: () => { for (const y of stagesOf) draft.crew[y.id] = !on; draft.preset = 'custom'; renderLobby(); } },
      robotAvatar(rid, 40), h('b', {}, ROBOTS[rid].name), h('small', {}, ROBOTS[rid].job), h('span', { class: 'crew-check' }, isCoord ? '★' : on ? '✓' : '+'));
    }));
    const applyPreset = (k) => { const set = new Set(PRESETS[k].stages); for (const id of STAGE_ORDER) draft.crew[id] = set.has(id); draft.preset = k; };
    const stopSel = h('select', { onchange: (e) => { draft.stopAfter = e.target.value || null; } }, h('option', { value: '' }, 'Run to the end'), ...STAGES.filter((x) => draft.crew[x.id] !== false && x.id !== 'wrap').map((x) => h('option', { value: x.id, selected: draft.stopAfter === x.id ? true : null }, `Stop after ${x.title}`)));
    const more = h('details', { class: 'more', open: draft.moreOpen ? true : null, ontoggle: (e) => { draft.moreOpen = e.target.open; } }, h('summary', {}, '⚙️ More options (genre, format, crew, stop point…)'),
      h('div', { class: 'grid3' },
        field('Genre', select('genre', OPTIONS.genre)), field('Aspect ratio', select('aspect', OPTIONS.aspect)), field('Dialogue language', select('language', OPTIONS.language)),
        field('Image tool you use', select('imageModel', OPTIONS.imageModel)), field('Video tool you use', select('videoModel', OPTIONS.videoModel)), field('Where should it stop?', stopSel),
        field('Detail level', select('depth', Object.entries(DEPTHS).map(([k, v]) => [k, `${v.label} — ${v.hint}`]))), field('Brain power', select('tier', Object.entries(TIERS))), field('Animation speed', select('speed', [['chill', '🐢 Chill'], ['normal', '🚶 Normal'], ['turbo', '🚀 Turbo']]))),
      h('h4', {}, 'Custom review stops'),
      h('label', { class: 'toggle' }, h('input', { type: 'checkbox', checked: draft.mode === 'custom' ? true : null, onchange: (e) => { draft.mode = e.target.checked ? 'custom' : 'gates'; renderLobby(); } }), ' Let me pick exactly which steps stop for my review'),
      draft.mode === 'custom' ? h('div', { class: 'gate-list' }, ...STAGES.filter((x) => draft.crew[x.id] !== false).map((x) => h('label', { class: 'toggle' }, h('input', { type: 'checkbox', checked: draft.gates[x.id] ? true : null, onchange: (e) => { draft.gates[x.id] = e.target.checked; } }), ` ${x.icon} ${x.title}`))) : null,
      h('h4', {}, 'Crew'), cards('preset', PRESETS, applyPreset, renderLobby), crewGrid,
      h('label', { class: 'toggle' }, h('input', { type: 'checkbox', checked: draft.chatter ? true : null, onchange: (e) => { draft.chatter = e.target.checked; } }), ' Show the robots\' team chatter in the chat'));
    const list = h('div', { class: 'films' }, h('p', { class: 'muted' }, 'Loading your films…'));
    const homeBtn = hasHomeCopy() ? h('button', { class: 'btn ghost', onclick: takeHome }, '📥 Take the studio home') : null;
    fill(el, h('div', { class: 'lobby' },
      h('div', { class: 'hero' }, robotAvatar(COORD, 88), h('div', {}, h('h1', {}, 'Robo Film Studio'), h('p', {}, '20 robot film-crew members, one per skill. Pitch an idea to Captain Clipboard and watch the crew make your film in 3D.'))),
      h('div', { class: 'card newfilm' },
        h('h2', {}, '🎬 New film'),
        idea,
        h('div', { class: 'dice-row' }, h('button', { class: 'btn ghost small', type: 'button', onclick: () => { draft.idea = IDEA_DICE[Math.floor(Math.random() * IDEA_DICE.length)]; renderLobby(); } }, '🎲 Surprise me'),
          h('label', { class: 'btn ghost small' }, '📎 Add references', h('input', { type: 'file', multiple: true, hidden: true, onchange: (e) => addFiles(e.target.files) })),
          pendingUploads.length ? h('span', { class: 'muted small' }, `📦 ${pendingUploads.length} file(s) ready`) : null),
        h('div', { class: 'quick' }, h('span', { class: 'q-label' }, 'Length'), chips('runtime', LENGTHS)),
        h('div', { class: 'quick' }, h('span', { class: 'q-label' }, 'Look'), chips('medium', LOOKS)),
        h('div', { class: 'quick' }, h('span', { class: 'q-label' }, 'How it runs'), chips('mode', draft.mode === 'custom' ? [...QUICK_MODES, ['custom', '🛠 Custom']] : QUICK_MODES)),
        h('label', { class: 'toggle big' }, h('input', { type: 'checkbox', checked: draft.imageMode !== 'prompts' ? true : null, onchange: (e) => { draft.imageMode = e.target.checked ? 'sketch' : 'prompts'; } }), ' 🎨 Claude makes pictures and a 3D previz video with code'),
        more,
        h('div', { class: 'start-row' }, h('button', { class: 'btn primary big', onclick: startProduction }, '🎬 Start production!'), h('small', { class: 'muted' }, Brain.mode() === 'api' ? 'Running on your computer: the robots use your Anthropic key (🔑 Keys).' : 'Robots think with Claude on your account; the first start asks you to allow it.'))),
      h('div', { class: 'card' }, h('h2', {}, '🗂 Your films'), list, h('div', { class: 'row' }, h('label', { class: 'btn ghost small' }, '📥 Import project file', h('input', { type: 'file', accept: '.json', hidden: true, onchange: (e) => addFiles(e.target.files) })), homeBtn)),
      h('div', { class: 'card' }, h('h2', {}, '🤖 Meet the crew'), h('p', { class: 'muted' }, 'Each robot runs one of the film-crew skills and has its own room. Tap one to visit.'),
        h('div', { class: 'crew-grid' }, ...Object.keys(ROBOTS).map((rid) => h('button', { class: 'crew-card on', onclick: () => visitRoom(rid) }, robotAvatar(rid, 40), h('b', {}, ROBOTS[rid].name), h('small', {}, ROBOTS[rid].job)))))));
    Store.listProjects().then((items) => {
      fill(list, items.length ? h('ul', { class: 'proj-list' }, ...items.map((x) => h('li', {}, h('div', {}, h('b', {}, x.title), h('small', {}, `${x.progress ? x.progress.done + '/' + x.progress.total + ' stages' : ''} · ${x.updated ? new Date(x.updated).toLocaleString() : ''}`)),
        h('div', { class: 'row' }, h('button', { class: 'btn small primary', onclick: () => openProject(x.id) }, 'Open'), (() => { const del = h('button', { class: 'btn small ghost', title: 'Delete', onclick: () => { if (del.dataset.armed) { Store.deleteProject(x.id).then(renderLobby); return; } del.dataset.armed = '1'; del.textContent = 'Really delete?'; del.classList.add('danger'); } }, '🗑'); return del; })())))) : h('p', { class: 'muted' }, 'No saved films yet.'));
    });
  }
  function startProduction() {
    if (Engine.isRunning()) { toast('Pause the current film first (🧭 Board).'); return; }
    if (!String(draft.idea || '').trim()) { toast('Give the crew a pitch first (or roll the dice 🎲).'); return; }
    try { const { idea, title, moreOpen, ...keep } = draft; localStorage.setItem('rfs:lastSettings', JSON.stringify(keep)); } catch (e) { /* ignore */ }
    const p = Engine.newProject({ ...draft, title: (draft.title || '').trim() }, draft.idea.trim(), pendingUploads);
    pendingUploads = [];
    renderAttachments();
    draft = null;
    W.setSpeed(SPEEDS[p.settings.speed] || 1);
    applyCrew();
    $('#chatLog').replaceChildren();
    previewSel = null;
    Engine.chat('user', `🎬 New film: ${p.settings.idea}`);
    Engine.chat(COORD, `Beep beep! Welcome to my cabin. New production: ${STAGE_ORDER.filter(Engine.enabled).length} stages, ${MODES[p.settings.mode].label} mode. Sit back — you can watch the crew on my big TV, or walk over to 🏢 Studio. Rolling! 🎬`);
    goPage('cabin');
    renderAll();
    Engine.run();
  }
  function applyCrew() {
    const p = P();
    const set = new Set();
    for (const x of STAGES) if (Engine.enabled(x.id)) set.add(x.robot);
    if (p) for (const x of STAGES) if (p.stages[x.id].status === 'skipped') { const others = STAGES.filter((y) => y.robot === x.robot && y.id !== x.id && Engine.enabled(y.id)); if (!others.length) set.delete(x.robot); }
    W.setCrew(set);
  }

  // ----- chat (in the cabin) -----
  function renderChatMsg(m) {
    const log = $('#chatLog');
    const isUser = m.from === 'user';
    const R = ROBOTS[m.from];
    const el = h('div', { class: `msg ${isUser ? 'me' : 'bot'}${m.team ? ' team' : ''}${m.error ? ' err' : ''}` },
      isUser ? null : h('div', { class: 'msg-av' }, robotAvatar(m.from, m.team ? 26 : 34)),
      h('div', { class: 'msg-body' },
        isUser ? null : h('div', { class: 'msg-name' }, R ? R.name : m.from, m.to && ROBOTS[m.to] ? h('span', { class: 'to' }, ` → ${ROBOTS[m.to].name}`) : null),
        h('div', { class: 'msg-text', html: inlineMd(m.text).replace(/\n/g, '<br>') }),
        m.review ? h('button', { class: 'btn small', onclick: () => showPreview(m.review) }, '👁 Open it') : null));
    log.append(el);
    log.scrollTop = log.scrollHeight;
  }
  function renderChat() {
    const p = P();
    $('#chatLog').replaceChildren();
    if (!p) { renderChatMsg({ from: COORD, text: 'Hi! I\'m **Captain Clipboard**. 🤖📋 Have a seat! Pitch me a film in the box at the top, or start one in the 🏠 Lobby. You only ever talk to me; I keep the other 19 robots busy.' }); return; }
    for (const m of p.chat) renderChatMsg(m);
  }
  function renderReview() {
    const card = $('#reviewCard');
    const p = P();
    const id = p && p.review;
    if (!id) { card.hidden = true; fill(card, ); return; }
    const S = STAGE[id], st = p.stages[id];
    const ta = h('textarea', { rows: 2, placeholder: 'What should change? (e.g. "make the cat braver, cut scene 3")' });
    fill(card, 
      h('div', { class: 'review-head' }, robotAvatar(S.robot, 38), h('div', {}, h('b', {}, `${S.icon} ${S.title} v${st.version} — your review`), h('small', {}, `${ROBOTS[S.robot].name} · ${st.words || 0} words`))),
      h('div', { class: 'review-excerpt' }, truncate(stripJsonBlock(st.md).replace(/^[\s\S]*?\n#/, '#').replace(/[#*`>|]/g, '').replace(/\n{2,}/g, '\n'), 420)),
      h('div', { class: 'review-actions' },
        h('button', { class: 'btn ghost', onclick: () => showPreview(id) }, '👁 Read it'),
        h('button', { class: 'btn primary', onclick: () => Engine.approve() }, '✅ Approve & continue')),
      ta,
      h('div', { class: 'review-actions' },
        h('button', { class: 'btn', onclick: () => { if (!ta.value.trim()) { toast('Write what should change first.'); return; } Engine.requestChanges(ta.value.trim()); } }, '✏️ Request changes'),
        h('button', { class: 'btn ghost', onclick: () => Engine.redo(id) }, '🔁 Redo from scratch'),
        h('button', { class: 'btn ghost', onclick: () => { p.settings.mode = 'auto'; Engine.approve(); toast('Fully auto from here 🚀'); } }, '🚀 Approve all from here')));
    card.hidden = false;
  }

  // ----- screening room -----
  function showPreview(id, mode) {
    previewSel = id;
    previewFollow = false;
    previewMode = mode || (previewMode === 'board' ? 'board' : 'doc');
    screenTab = previewMode === 'board' ? 'boards' : 'docs';
    goPage('screening');
  }
  function renderScreening() {
    const el = $('#page-screening');
    const tabs = [['docs', '📄 Documents'], ['boards', '🧩 Boards'], ['pictures', '🖼 Pictures'], ['previz', '🎬 Previz video'], ['master', '📚 Master document']];
    const body = h('div', { class: 'screen-body', id: 'previewBody' });
    fill(el, h('div', { class: 'screening' },
      h('nav', { class: 'subtabs' }, ...tabs.map(([k, l]) => h('button', { class: 'subtab' + (screenTab === k ? ' on' : ''), onclick: () => { screenTab = k; stopPlayer(); renderScreening(); } }, l))),
      ['docs', 'boards'].includes(screenTab) ? h('div', { class: 'preview-bar' }, h('select', { id: 'previewSelect', 'aria-label': 'Choose a document', onchange: (e) => { if (e.target.value === '__follow') previewFollow = true; else { previewFollow = false; previewSel = e.target.value; } renderPreview(); } })) : null,
      body));
    if (screenTab === 'docs' || screenTab === 'boards') { previewMode = screenTab === 'boards' ? 'board' : 'doc'; renderPreview(); }
    else if (screenTab === 'master') fill(body, P() ? h('div', { class: 'doc', html: renderMarkdown(assembleMaster()) }) : emptyState('📚', 'No film yet', 'Start a film in the Lobby.'));
    else if (screenTab === 'pictures') renderPictures(body);
    else renderPreviz(body);
  }
  function renderPreviewSelect() {
    const p = P();
    const sel = $('#previewSelect');
    if (!sel) return;
    fill(sel, h('option', { value: '__follow' }, '📍 Follow the live robot'), ...(p ? STAGES.filter((x) => Engine.enabled(x.id) && (p.stages[x.id].md || p.stages[x.id].liveText)).map((x) => h('option', { value: x.id, selected: !previewFollow && previewSel === x.id ? true : null }, `${statusIcon(p.stages[x.id].status)} ${x.icon} ${x.title} ${p.stages[x.id].version ? 'v' + p.stages[x.id].version : ''}`)) : []));
    if (previewFollow) sel.value = '__follow';
  }
  function statusIcon(stt) { return { done: '✅', working: '⚙️', review: '👀', error: '⚠️', stale: '🔁', skipped: '⏭', waiting: '⏳' }[stt] || '⏳'; }
  function queuePreview() { if (renderQueued) return; renderQueued = true; setTimeout(() => { renderQueued = false; renderPreview(); }, 350); }
  function renderPreview() {
    const body = $('#previewBody');
    if (!body || !['docs', 'boards'].includes(screenTab)) return;
    const p = P();
    if (!p) { fill(body, emptyState('🎬', 'No film yet', 'Start a new film and every robot\'s work shows up here, live, while they write.')); return; }
    if (previewFollow) previewSel = Engine.current() || previewSel || lastDone();
    renderPreviewSelect();
    const id = previewSel;
    if (!id || !p.stages[id]) { fill(body, emptyState('⏳', 'Nothing here yet', 'The first document appears as soon as a robot starts writing.')); return; }
    const st = p.stages[id];
    const text = st.liveText || st.md || '';
    const scroll = body.scrollTop;
    const atBottom = body.scrollHeight - body.scrollTop - body.clientHeight < 60;
    const head = h('div', { class: 'doc-head' }, robotAvatar(STAGE[id].robot, 36), h('div', {}, h('b', {}, `${STAGE[id].icon} ${STAGE[id].title}`), h('small', {}, `${ROBOTS[STAGE[id].robot].name} · ${st.liveText ? 'writing live…' : 'v' + st.version + ' · ' + (st.words || 0) + ' words'}`)),
      h('div', { class: 'doc-actions' }, h('button', { class: 'btn small ghost', onclick: () => visitRoom(STAGE[id].robot) }, '🎥 Watch room'), st.md ? h('button', { class: 'btn small ghost', onclick: () => copyText(st.md) }, '📋 Copy') : null));
    if (previewMode === 'board') fill(body, head, boardFor(id));
    else fill(body, head, h('div', { class: 'doc' + (st.liveText ? ' live' : ''), html: renderMarkdown(text) }));
    if (st.liveText && atBottom) body.scrollTop = body.scrollHeight; else body.scrollTop = scroll;
  }
  function lastDone() { const p = P(); return [...STAGE_ORDER].reverse().find((id) => p.stages[id].md) || null; }
  function emptyState(ico, title, txt) { return h('div', { class: 'empty' }, h('div', { class: 'empty-ico' }, ico), h('b', {}, title), h('p', {}, txt)); }

  const copyBtn = (text) => h('button', { class: 'btn small ghost', onclick: () => copyText(text) }, '📋');
  function sketchOf(id, key) { const st = P().stages[id]; const sk = st.sketches && st.sketches.find((x) => x.id === key); return sk ? h('div', { class: 'sketch', html: sk.svg }) : null; }
  function boardFor(id) {
    const p = P();
    const st = p.stages[id];
    const d = st.data || {};
    const wrapEl = h('div', { class: 'board' });
    const list = (arr) => Array.isArray(arr) ? arr : [];
    const sketchBtn = (sid) => h('button', { class: 'btn small', disabled: Engine.isRunning() ? true : null, onclick: () => Engine.redoSketches(sid) }, st.sketches && st.sketches.length ? '✏️ Redraw sketches' : '✏️ Draw sketches');
    switch (id) {
      case 'brief':
        add(wrapEl, h('h3', {}, d.title || p.title), d.logline_seed ? h('p', { class: 'lead' }, d.logline_seed) : null,
          section('Assumptions', list(d.assumptions).map((a) => h('li', {}, a))), section('Questions for you', list(d.questions).map((q) => h('li', {}, `${q.q} `, h('i', { class: 'muted' }, `default: ${q.default}`)))));
        break;
      case 'story':
        add(wrapEl, h('h3', {}, d.title || ''), h('p', { class: 'lead' }, d.logline || ''), d.theme ? h('p', {}, h('b', {}, 'Theme: '), d.theme) : null,
          h('div', { class: 'chips' }, ...list(d.characters).map((c) => h('span', { class: 'chip' }, `👤 ${c.name} — ${c.role}`))),
          h('div', { class: 'beats' }, ...list(d.beats).map((b, i) => h('div', { class: 'beat' }, h('span', { class: 'beat-n' }, i + 1), h('b', {}, b.name), h('p', {}, b.summary)))));
        break;
      case 'screenplay':
        add(wrapEl, h('p', { class: 'muted' }, `${list(d.scenes).length} scenes · about ${d.total_est_s || '?'} s`),
          h('div', { class: 'cards' }, ...list(d.scenes).map((x) => h('div', { class: 'card' }, h('span', { class: 'tag' }, x.id), h('b', {}, x.heading), h('p', {}, x.summary), h('small', {}, `${(x.characters || []).join(', ')} · ~${x.est_s || '?'} s`)))));
        break;
      case 'characters':
        add(wrapEl, h('div', { class: 'board-tools' }, sketchBtn('characters')), h('div', { class: 'cards' }, ...list(d.characters).map((c) => h('div', { class: 'card char' },
          sketchOf('characters', c.id), h('span', { class: 'tag' }, c.id), h('b', {}, c.name), h('small', {}, c.role),
          h('div', { class: 'dots' }, ...list(c.colors).map((col) => h('span', { class: 'dot', style: `background:${/^#[0-9a-f]{3,8}$/i.test(col) ? col : '#ccc'}`, title: col }))),
          h('div', { class: 'lock' }, h('span', {}, 'identity lock'), copyBtn(c.identity_lock || ''), h('p', {}, c.identity_lock || '')),
          h('div', { class: 'lock' }, h('span', {}, 'short lock'), copyBtn(c.short_lock || ''), h('p', {}, c.short_lock || '')),
          ...list(c.costumes).map((co) => h('div', { class: 'lock' }, h('span', {}, co.id), copyBtn(co.lock || ''), h('p', {}, co.lock || '')))))));
        break;
      case 'world':
        add(wrapEl, h('div', { class: 'board-tools' }, sketchBtn('world')), h('div', { class: 'cards' }, ...list(d.locations).map((l) => h('div', { class: 'card' }, sketchOf('world', l.id), h('span', { class: 'tag' }, l.id), h('b', {}, l.name), h('small', {}, l.time_of_day || ''),
          h('div', { class: 'dots' }, ...list(l.palette).map((col) => h('span', { class: 'dot', style: `background:${/^#[0-9a-f]{3,8}$/i.test(col) ? col : '#ccc'}` }))),
          h('div', { class: 'lock' }, h('span', {}, 'location lock'), copyBtn(l.lock || ''), h('p', {}, l.lock || ''))))),
        section('Props', list(d.props).map((x) => h('li', {}, h('b', {}, `${x.id} ${x.name}: `), x.lock || '', x.states ? h('i', { class: 'muted' }, ` states: ${x.states.join(' → ')}`) : null))));
        break;
      case 'style':
        add(wrapEl, h('p', { class: 'lead' }, d.look || ''), h('div', { class: 'palette' }, ...list(d.palette).map((c) => h('div', { class: 'swatch', style: `--c:${/^#[0-9a-f]{3,8}$/i.test(c.hex) ? c.hex : '#ccc'}` }, h('span', { class: 'sw' }), h('b', {}, c.name), h('small', {}, `${c.hex} · ${c.role}`)))),
          h('div', { class: 'lock' }, h('span', {}, 'style lock'), copyBtn(d.style_lock || ''), h('p', {}, d.style_lock || '')),
          table(['Scene', 'Hues', 'Mood'], list(d.color_script).map((r) => [r.scene, r.hues, r.mood])), d.avoid ? section('Avoid', list(d.avoid).map((x) => h('li', {}, x))) : null);
        break;
      case 'direction':
        add(wrapEl, h('p', { class: 'muted' }, `${list(d.shots).length} shots · ${d.total_s || sum(list(d.shots), 'duration_s')} s planned`), table(['Shot', 'Size', 'Angle', 'Move', 'Action', 's'], list(d.shots).map((x) => [x.id, x.size, x.angle, x.move, x.action, x.duration_s])));
        break;
      case 'master':
        add(wrapEl, h('p', { class: 'muted' }, `${list(d.shots).length} shot records`), ...list(d.shots).map((x) => h('details', { class: 'shot' },
          h('summary', {}, h('span', { class: 'tag' }, x.id), ` ${x.size || ''} · ${x.duration_s || '?'} s · ${x.mode || ''}`),
          lockRow('start_frame', x.start_frame), lockRow('end_frame', x.end_frame), lockRow('motion', x.motion), x.dialogue ? h('p', {}, h('b', {}, 'Dialogue: '), x.dialogue) : null,
          h('small', { class: 'muted' }, `clip ${x.clip_length_s || '?'} s · keep ${x.keep || '—'}`))));
        break;
      case 'storyboard': {
        const panels = list(d.panels);
        add(wrapEl, h('div', { class: 'board-tools' }, sketchBtn('storyboard'), h('button', { class: 'btn small ghost', onclick: () => { screenTab = 'previz'; renderScreening(); } }, '🎬 Previz video')),
          h('div', { class: 'sb-grid ar-' + p.settings.aspect.replace(/[:.]/g, '-') }, ...panels.map((x) => h('figure', { class: 'sb-panel' }, sketchOf('storyboard', x.id) || placeholderPanel(x.shot, x.moment), h('figcaption', {}, h('b', {}, x.shot), ` ${x.moment || ''}`, x.camera_note ? h('i', {}, ` · ${x.camera_note}`) : null, x.dialogue ? h('q', {}, x.dialogue) : null)))));
        break;
      }
      case 'edit': {
        const tl = list(d.timeline);
        const total = sum(tl, 'duration_s') || 1;
        add(wrapEl, h('p', { class: 'lead' }, `Runtime ${d.runtime_s || total} s vs target ${d.target_s || p.settings.runtime} s`),
          h('div', { class: 'timeline' }, ...tl.map((x, i) => h('span', { class: 'tl-clip', style: `flex:${Math.max(0.3, +x.duration_s || 1)};--h:${(i * 47) % 360}`, title: `${x.shot} · ${x.duration_s}s · ${x.transition || ''}` }, x.shot.replace(/^SC\d+-/, '')))),
          d.problems && d.problems.length ? section('Problems found', list(d.problems).map((x) => h('li', {}, x))) : null,
          table(['Shot', 'In', 'Out', 's', 'Transition'], tl.map((x) => [x.shot, x.in_s, x.out_s, x.duration_s, x.transition])));
        break;
      }
      case 'voice':
        add(wrapEl, section('Voices', list(d.profiles).map((x) => h('li', {}, h('b', {}, x.character + ': '), x.voice))),
          ...list(d.lines).map((x) => h('div', { class: 'vline' }, h('button', { class: 'btn small ghost', title: 'Hear a robot read it', onclick: () => speak(x.line, x.character) }, '🔊'), h('div', {}, h('b', {}, x.character), h('span', { class: 'tag' }, x.shot || ''), h('p', {}, `“${x.line}”`), h('small', { class: 'muted' }, x.delivery)))));
        break;
      case 'music':
        add(wrapEl, h('p', { class: 'lead' }, d.concept || ''), ...list(d.cues).map((x) => h('div', { class: 'card wide' }, h('span', { class: 'tag' }, x.id), h('b', {}, ` ${x.function || ''}`), h('small', {}, ` ${x.start || ''} → ${x.end || ''} · ${x.bpm || '?'} BPM · ${x.key || ''}`), h('p', {}, x.instrumentation || ''), x.prompt ? lockRow('prompt', x.prompt) : null)));
        break;
      case 'images':
      case 'video':
        add(wrapEl, ...list(d.prompts).map((x) => promptCard(id, x)));
        break;
      case 'qc': {
        const items = list(d.items);
        add(wrapEl, h('div', { class: 'verdict ' + (/READY/i.test(d.verdict || '') ? 'ok' : 'warn') }, /READY/i.test(d.verdict || '') ? '✅ READY' : '🛠 NEEDS FIXES', h('small', {}, d.summary ? ` PASS ${d.summary.pass || 0} · FIX ${d.summary.fix || 0} · REDO ${d.summary.redo || 0} · N/V ${d.summary.not_verifiable || 0}` : '')),
          items.some((x) => /FIX|REDO/i.test(x.verdict || '')) ? h('button', { class: 'btn primary', disabled: Engine.isRunning() ? true : null, onclick: () => Engine.sendQcFixes() }, '🔧 Send fixes to the crew') : null,
          table(['ID', 'Verdict', 'Target', 'Finding', 'Owner', 'Repair'], items.map((x) => [x.id, x.verdict, x.target, x.evidence || x.check, x.owner, x.repair])));
        break;
      }
      case 'wrap':
        add(wrapEl, h('h3', {}, d.headline || 'Wrap'), section('Ready now', list(d.ready).map((x) => h('li', {}, x))), section('Next steps', list(d.next_steps).map((x) => h('li', {}, x))), section('Open issues', list(d.open_issues).map((x) => h('li', {}, h('b', {}, x.owner + ': '), x.issue))));
        break;
      default:
        add(wrapEl, genericBoard(d));
    }
    if (!st.data && !st.liveText) wrapEl.prepend(h('p', { class: 'muted' }, 'No structured data in this document; see the Doc view.'));
    return wrapEl;
  }
  function sum(arr, k) { return Math.round(arr.reduce((a, x) => a + (+x[k] || 0), 0) * 10) / 10; }
  function section(title, items) { return items && items.length ? h('div', { class: 'sect' }, h('h4', {}, title), h('ul', {}, ...items)) : null; }
  function lockRow(label, text) { return h('div', { class: 'lock' }, h('span', {}, label), copyBtn(text || ''), h('p', {}, text || '')); }
  function table(head, rows) {
    if (!rows.length) return null;
    return h('div', { class: 'table-wrap' }, h('table', {}, h('thead', {}, h('tr', {}, ...head.map((x) => h('th', {}, x)))), h('tbody', {}, ...rows.map((r) => h('tr', {}, ...r.map((c) => h('td', {}, c == null ? '' : String(c))))))));
  }
  function genericBoard(d) {
    if (!d || typeof d !== 'object') return h('div');
    const out = h('div', {});
    for (const [k, v] of Object.entries(d)) {
      if (Array.isArray(v) && v.length && typeof v[0] === 'object') { const keys = Object.keys(v[0]).slice(0, 6); out.append(h('h4', {}, k), table(keys, v.map((r) => keys.map((kk) => (typeof r[kk] === 'object' ? JSON.stringify(r[kk]) : r[kk]))))); }
      else if (Array.isArray(v)) out.append(section(k, v.map((x) => h('li', {}, typeof x === 'object' ? JSON.stringify(x) : x))));
      else out.append(h('p', {}, h('b', {}, k + ': '), typeof v === 'object' ? JSON.stringify(v) : String(v)));
    }
    return out;
  }
  function placeholderPanel(shot, moment) {
    const p = P();
    const pal = ((p.stages.style.data && p.stages.style.data.palette) || []).map((x) => x.hex).filter((x) => /^#[0-9a-f]{3,8}$/i.test(x));
    const a = pal[0] || '#4c6ef5', b = pal[1] || '#f783ac';
    const ms = ((p.stages.master.data && p.stages.master.data.shots) || []).find((x) => x.id === shot) || ((p.stages.direction.data && p.stages.direction.data.shots) || []).find((x) => x.id === shot) || {};
    return h('div', { class: 'ph-panel', style: `--a:${a};--b:${b}` }, h('span', { class: 'ph-size' }, ms.size || 'SHOT'), h('span', { class: 'ph-txt' }, truncate(moment || ms.action || '', 90)));
  }

  // ----- pictures: code-made images, and real images with your keys -----
  function keyedProviders(kind) {
    const k = Keys.get(P() && P().id);
    return ['fal', 'openai', 'google'].filter((x) => k[x] && k[x].key && (kind !== 'video' || k[x].videoModel !== '-'));
  }
  function promptCard(stage, x) {
    const p = P();
    const out = h('div', { class: 'gen-out' });
    const provs = keyedProviders(stage === 'video' ? 'video' : 'image');
    const card = h('div', { class: 'card wide prompt' }, h('div', { class: 'prompt-head' }, h('span', { class: 'tag' }, x.id), h('b', {}, ` ${x.kind || x.mode || ''}`), h('small', { class: 'muted' }, ` ${x.target || x.shot || ''} ${x.clip_length_s ? '· ' + x.clip_length_s + ' s' : ''}`)),
      h('pre', { class: 'prompt-text' }, x.prompt || ''),
      h('div', { class: 'prompt-actions' }, h('button', { class: 'btn small ghost', onclick: () => copyText(x.prompt || '') }, '📋 Copy'),
        stage === 'images' ? h('button', { class: 'btn small', onclick: (e) => makeCodeImage(x, out, e.target) }, '🎨 Code image') : null,
        ...provs.map((pv) => h('button', { class: 'btn small primary', onclick: (e) => genWithKey(stage, pv, x, out, e.target) }, `${stage === 'video' ? '🎬' : '🖼️'} ${PROVIDERS[pv].label}`)),
        !provs.length ? h('button', { class: 'btn small ghost', title: 'Add an API key to generate real pictures and video', onclick: () => goPage('keys') }, '🔑 Add a key to generate') : null),
      out);
    if (generated[x.id]) showGenerated(out, generated[x.id]);
    void p;
    return card;
  }
  async function makeCodeImage(x, out, btn) {
    btn.disabled = true;
    fill(out, h('p', { class: 'muted' }, '🎨 Pixel Prompt is building the picture with code…'));
    try {
      const r = await Engine.codeImage(x.prompt || '', x.aspect || P().settings.aspect);
      generated[x.id] = { kind: 'image', url: r.url, blob: r.blob, by: 'Claude (code)' };
      showGenerated(out, generated[x.id]);
    } catch (e) { fill(out, h('p', { class: 'muted' }, '⚠️ ' + Engine.errCopy(e))); }
    finally { btn.disabled = false; }
  }
  async function genWithKey(stage, provider, x, out, btn) {
    const k = Keys.key(P().id, provider);
    btn.disabled = true;
    const robot = stage === 'video' ? 'video-prompt-engineer' : 'image-prompt-engineer';
    W.setState(robot, 'write');
    fill(out, h('p', { class: 'muted' }, `Calling ${PROVIDERS[provider].label}… (uses your credits there)`));
    try {
      const res = stage === 'video'
        ? await Gen.video(provider, k, x.prompt || '', P().settings.aspect, +x.clip_length_s || 5, (m) => fill(out, h('p', { class: 'muted' }, m)))
        : await Gen.image(provider, k, x.prompt || '', x.aspect || P().settings.aspect);
      if (!res.url) throw { code: 'provider_error', message: 'The provider answered without a file.' };
      generated[x.id] = { kind: stage === 'video' ? 'video' : 'image', url: res.url, blob: res.blob, by: PROVIDERS[provider].label };
      showGenerated(out, generated[x.id]);
      Engine.chat(robot, `${x.id} generated with ${PROVIDERS[provider].label}. 🎉`, { team: true });
    } catch (e) { fill(out, h('p', { class: 'muted' }, `⚠️ ${e.message || Engine.errCopy(e)}`), e.code === 'network_blocked' && hasHomeCopy() ? h('button', { class: 'btn small', onclick: takeHome }, '📥 Take the studio home') : null); }
    finally { btn.disabled = false; W.setState(robot, 'idle'); }
  }
  function showGenerated(out, g) {
    const media = g.kind === 'video' ? h('video', { src: g.url, controls: true, playsinline: true, class: 'gen-img' }) : h('img', { src: g.url, alt: 'Generated picture', class: 'gen-img' });
    const ext = g.kind === 'video' ? (g.blob && /mp4/.test(g.blob.type) ? 'mp4' : 'mp4') : 'png';
    fill(out, media, h('div', { class: 'row' }, h('small', { class: 'muted' }, `by ${g.by}`), g.blob ? h('button', { class: 'btn small ghost', onclick: () => save(`${slug()}-${Date.now()}.${g.kind === 'video' ? ext : 'png'}`, g.blob) }, '💾 Save') : null));
  }
  async function renderPictures(body) {
    const p = P();
    if (!p) { fill(body, emptyState('🖼', 'No film yet', 'Pictures appear here as the crew works.')); return; }
    const sk = [...(p.stages.characters.sketches || []), ...(p.stages.world.sketches || [])];
    const sbs = p.stages.storyboard.sketches || [];
    const specs = (p.stages.render.data && p.stages.render.data.shots) || [];
    const frames = h('div', { class: 'sb-grid ar-' + p.settings.aspect.replace(/[:.]/g, '-') });
    const imgPrompts = ((p.stages.images.data || {}).prompts) || [];
    fill(body,
      h('div', { class: 'pics-head' }, h('h3', {}, '🖼 Pictures'), h('p', { class: 'muted' }, 'Made by the robots with code (sketches and 3D frames), or by your image tools with your own API keys.')),
      sk.length ? h('div', {}, h('h4', {}, '✏️ Concept sketches'), h('div', { class: 'cards' }, ...sk.map((x) => h('figure', { class: 'card' }, h('div', { class: 'sketch', html: x.svg }), h('figcaption', {}, h('b', {}, x.title), ` ${x.id}`))))) : null,
      specs.length ? h('div', {}, h('h4', {}, '🎥 3D keyframes from the previz'), frames) : null,
      sbs.length ? h('div', {}, h('h4', {}, '🖼️ Storyboard panels'), h('div', { class: 'sb-grid' }, ...sbs.map((x) => h('figure', { class: 'sb-panel' }, h('div', { class: 'sketch', html: x.svg }), h('figcaption', {}, x.id))))) : null,
      imgPrompts.length ? h('div', {}, h('h4', {}, '🪄 Image prompts'), ...imgPrompts.map((x) => promptCard('images', x))) : null,
      !sk.length && !specs.length && !sbs.length && !imgPrompts.length ? emptyState('🖼', 'No pictures yet', 'Concept sketches arrive with the character and location designs; 3D keyframes with the previz.') : null);
    for (const sp of specs.slice(0, 24)) {
      const fig = h('figure', { class: 'sb-panel' }, h('div', { class: 'ph-panel loading' }, '…'), h('figcaption', {}, h('b', {}, sp.shot || ''), sp.caption ? h('q', {}, sp.caption) : null));
      frames.append(fig);
    }
    for (let i = 0; i < Math.min(24, specs.length); i++) {
      if (screenTab !== 'pictures') return;
      try {
        const blob = await Previz.still(specs[i], p.settings.aspect, 0.15);
        const url = URL.createObjectURL(blob);
        const fig = frames.children[i];
        if (fig) fig.firstChild.replaceWith(h('img', { src: url, alt: `Keyframe ${specs[i].shot}`, class: 'frame-img' }));
      } catch (e) { break; }
    }
  }

  // ----- previz video player -----
  function stopPlayer() { if (player.ctl) player.ctl.abort(); player.ctl = null; }
  function renderPreviz(body) {
    const p = P();
    if (!p) { fill(body, emptyState('🎬', 'No film yet', 'The previz video is built after the shot records.')); return; }
    const specs = (p.stages.render.data && p.stages.render.data.shots) || [];
    const vids = ((p.stages.video.data || {}).prompts) || [];
    if (!specs.length) {
      const st = p.stages.render.status;
      fill(body, emptyState('📽️', 'No previz yet', p.settings.imageMode === 'prompts' ? 'Pictures by code are off for this film. Turn them on in ⚙️ Settings and redo the “Previz video” stage.' : st === 'working' ? 'Greenscreen Gary is building the scenes right now…' : 'Greenscreen Gary builds it after the shot records are compiled.'),
        animaticItems().length ? h('div', {}, h('h4', {}, 'Meanwhile: storyboard animatic'), h('div', { id: 'animHost' })) : null,
        vids.length ? h('div', {}, h('h4', {}, '🎬 Video prompts (generate with your keys)'), ...vids.map((x) => promptCard('video', x))) : null);
      const host = $('#animHost');
      if (host) renderAnimatic(host);
      return;
    }
    const stageBox = h('div', { class: 'player-stage' });
    const status = h('div', { class: 'player-status' }, `${specs.length} shots · ${specs.reduce((a, x) => a + (+x.duration_s || 4), 0).toFixed(0)} s`);
    const strip = h('div', { class: 'shot-strip' }, ...specs.map((sp, i) => h('button', { class: 'shot-chip', title: sp.caption || '', onclick: () => playFrom(i) }, sp.shot || `#${i + 1}`)));
    const playBtn = h('button', { class: 'btn primary' }, '▶ Play');
    const recBtn = h('button', { class: 'btn' }, '⏺ Export video (.webm)');
    const musicT = h('label', { class: 'toggle' }, h('input', { type: 'checkbox', checked: player.music ? true : null, onchange: (e) => { player.music = e.target.checked; } }), ' 🎵 Music bed');
    const redoNote = h('input', { type: 'text', placeholder: 'Change for one shot, e.g. "lower camera, more rain"' });
    const redoSel = h('select', {}, ...specs.map((sp) => h('option', { value: sp.shot }, sp.shot)));
    const redoBtn = h('button', { class: 'btn small', onclick: async () => {
      redoBtn.disabled = true; status.textContent = `🔁 Greenscreen Gary is rebuilding ${redoSel.value}…`;
      try { await Engine.rerenderShot(redoSel.value, redoNote.value.trim()); status.textContent = 'Rebuilt!'; renderPreviz(body); } catch (e) { status.textContent = '⚠️ ' + Engine.errCopy(e); redoBtn.disabled = false; }
    } }, '🔁 Rebuild shot');
    const playFrom = async (start, record) => {
      stopPlayer();
      player.ctl = new AbortController();
      const ctl = player.ctl;
      await Previz.ensure(p.settings.aspect);
      stageBox.replaceChildren(Previz.canvas());
      playBtn.textContent = '⏹ Stop';
      try {
        const blob = await Previz.play(specs.slice(start || 0), {
          aspect: p.settings.aspect, signal: ctl.signal, record: !!record, music: player.music, mood: `${p.settings.genre} ${p.settings.tone || ''}`,
          titleCard: record || !start ? p.title : null, badges: !record,
          onShot: (i) => { $$('.shot-chip', strip).forEach((c, k) => c.classList.toggle('on', k === i + (start || 0))); status.textContent = `▶ ${specs[i + (start || 0)].shot}${specs[i + (start || 0)].caption ? ' — ' + specs[i + (start || 0)].caption : ''}`; },
        });
        if (blob && !ctl.signal.aborted) { status.textContent = `🎉 Video ready (${(blob.size / 1e6).toFixed(1)} MB).`; await save(`${slug()}-previz.webm`, blob); }
        else if (!ctl.signal.aborted) status.textContent = '✅ Done. Play again or export it.';
      } catch (e) { status.textContent = '⚠️ ' + (e.message || e.code || 'Playback failed'); }
      finally { playBtn.textContent = '▶ Play'; if (player.ctl === ctl) player.ctl = null; }
    };
    playBtn.onclick = () => { if (player.ctl) { stopPlayer(); return; } playFrom(0); };
    recBtn.onclick = () => { if (player.ctl) stopPlayer(); toast('Recording in real time: let it play to the end. ⏺'); playFrom(0, true); };
    fill(body,
      h('div', { class: 'player' }, stageBox, status, h('div', { class: 'player-controls' }, playBtn, recBtn, musicT), strip,
        h('div', { class: 'redo-row' }, redoSel, redoNote, redoBtn),
        h('p', { class: 'fineprint' }, 'This previz is made entirely by Claude with code: Greenscreen Gary writes a 3D scene for every shot and the studio renders it with three.js. Export records it in real time to a .webm file. For final-quality video, use the video prompts below with your own keys.')),
      vids.length ? h('div', {}, h('h4', {}, '🎬 Video prompts (generate with your keys)'), ...vids.map((x) => promptCard('video', x))) : null);
    Previz.ensure(p.settings.aspect).then(() => Previz.still(specs[0], p.settings.aspect, 0.1)).then((b) => { if (!player.ctl && stageBox.isConnected && !stageBox.firstChild) stageBox.append(h('img', { src: URL.createObjectURL(b), class: 'frame-img', alt: 'First frame' })); }).catch(() => {});
  }
  function speak(text, who) {
    try {
      if (!window.speechSynthesis) { toast('Speech isn\'t supported in this browser.'); return; }
      const u = new SpeechSynthesisUtterance(text);
      const n = [...String(who || '')].reduce((a, c) => a + c.charCodeAt(0), 0);
      u.pitch = 0.6 + (n % 10) / 9; u.rate = 1.05;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) { /* ignore */ }
  }
  function animaticItems() {
    const p = P();
    const panels = (p.stages.storyboard.data && p.stages.storyboard.data.panels) || [];
    const shots = (p.stages.master.data && p.stages.master.data.shots) || (p.stages.direction.data && p.stages.direction.data.shots) || [];
    const tl = (p.stages.edit.data && p.stages.edit.data.timeline) || [];
    const lines = (p.stages.voice.data && p.stages.voice.data.lines) || [];
    const durOf = (shot) => { const t = tl.find((x) => x.shot === shot); const s0 = shots.find((x) => x.id === shot); return +(t && t.duration_s) || +(s0 && s0.duration_s) || 3; };
    const lineOf = (shot) => { const l = lines.find((x) => x.shot === shot); if (l) return `${l.character}: ${l.line}`; const s0 = shots.find((x) => x.id === shot); return s0 && s0.dialogue && s0.dialogue !== 'none' ? s0.dialogue : ''; };
    if (panels.length) {
      const perShot = {};
      for (const x of panels) perShot[x.shot] = (perShot[x.shot] || 0) + 1;
      return panels.map((x) => ({ id: x.id, shot: x.shot, caption: x.moment || '', sketch: (p.stages.storyboard.sketches || []).find((k) => k.id === x.id), dur: durOf(x.shot) / (perShot[x.shot] || 1), line: lineOf(x.shot) }));
    }
    return shots.map((x) => ({ id: x.id, shot: x.id, caption: x.action || x.motion || '', dur: durOf(x.id), line: lineOf(x.id) }));
  }
  function renderAnimatic(body) {
    const items = animaticItems();
    if (!items.length) { fill(body, emptyState('🎞', 'No animatic yet', 'Once the director\'s shot list or the storyboard exists, you can play it here as a timed animatic.')); return; }
    if (!animatic || animatic.items.length !== items.length) animatic = { items, i: 0, playing: false, timer: null, voices: false };
    animatic.items = items;
    const stageEl = h('div', { class: 'anim-stage ar-' + P().settings.aspect.replace(/[:.]/g, '-') });
    const cap = h('div', { class: 'anim-cap' });
    const bar = h('div', { class: 'anim-bar' });
    const total = items.reduce((a, x) => a + x.dur, 0);
    const draw = () => {
      const it = animatic.items[animatic.i];
      fill(stageEl, it.sketch ? h('div', { class: 'sketch', html: it.sketch.svg }) : placeholderPanel(it.shot, it.caption), it.line ? h('div', { class: 'anim-sub' }, it.line) : null, h('span', { class: 'anim-id' }, `${it.shot} · ${it.dur.toFixed(1)} s`));
      cap.textContent = it.caption;
      const done = animatic.items.slice(0, animatic.i).reduce((a, x) => a + x.dur, 0);
      bar.style.setProperty('--p', (done / total * 100).toFixed(1) + '%');
      playBtn.textContent = animatic.playing ? '⏸ Pause' : '▶ Play';
    };
    const tick = () => {
      clearTimeout(animatic.timer);
      if (!animatic.playing) return;
      const it = animatic.items[animatic.i];
      if (animatic.voices && it.line) speak(it.line.replace(/^[^:]+:\s*/, ''), it.line.split(':')[0]);
      animatic.timer = setTimeout(() => {
        if (animatic.i < animatic.items.length - 1) { animatic.i++; draw(); tick(); } else { animatic.playing = false; draw(); }
      }, it.dur * 1000);
    };
    const playBtn = h('button', { class: 'btn primary', onclick: () => { animatic.playing = !animatic.playing; if (animatic.playing && animatic.i >= animatic.items.length - 1) animatic.i = 0; draw(); tick(); } }, '▶ Play');
    const controls = h('div', { class: 'anim-controls' },
      h('button', { class: 'btn ghost', onclick: () => { animatic.i = Math.max(0, animatic.i - 1); draw(); tick(); } }, '⏮'), playBtn,
      h('button', { class: 'btn ghost', onclick: () => { animatic.i = Math.min(animatic.items.length - 1, animatic.i + 1); draw(); tick(); } }, '⏭'),
      h('label', { class: 'toggle' }, h('input', { type: 'checkbox', checked: animatic.voices ? true : null, onchange: (e) => { animatic.voices = e.target.checked; } }), ' 🔊 Robot voices'),
      h('span', { class: 'muted' }, `${items.length} frames · ${total.toFixed(1)} s`));
    fill(body, stageEl, bar, cap, controls);
    draw();
  }
  function assembleMaster() {
    const p = P();
    const out = [`# MASTER PRODUCTION DOCUMENT — ${p.title}`, '', `Made in Robo Film Studio · ${new Date().toISOString().slice(0, 10)} · ${p.settings.runtime} s · ${p.settings.aspect} · ${p.settings.medium} · ${p.settings.genre}`, '', `Pitch: ${p.settings.idea}`, '', '## Status dashboard', '', '| Stage | Robot (skill) | Version | Status | Words |', '|---|---|---|---|---|'];
    for (const x of STAGES) {
      if (!Engine.enabled(x.id)) continue;
      const st = p.stages[x.id];
      out.push(`| ${x.icon} ${x.title} | ${ROBOTS[x.robot].name} (${x.robot}) | ${st.version ? 'v' + st.version : '—'} | ${st.status} | ${st.words || 0} |`);
    }
    const issues = allIssues();
    out.push('', '## Open issues', '', issues.length ? issues.map((x) => `- **${x.kind}** (${STAGE[x.stage].title}): ${x.text}`).join('\n') : 'None flagged.');
    if (p.crs.length) out.push('', '## Change log', '', ...p.crs.map((c) => `- ${c.id} · ${STAGE[c.stage] ? STAGE[c.stage].title : c.stage}: ${c.text}${c.impact && c.impact.length ? ` (refreshed: ${c.impact.join(', ')})` : ''}`));
    if (p.notes.length) out.push('', '## Client notes', '', ...p.notes.map((n) => `- (${n.target}) ${n.text}`));
    for (const x of STAGES) {
      const st = p.stages[x.id];
      if (!st.md || !Engine.enabled(x.id)) continue;
      out.push('', '---', '', `# ${x.icon} ${x.title} — ${ROBOTS[x.robot].name} (${x.robot}) v${st.version}`, '', stripJsonBlock(st.md));
    }
    return out.join('\n');
  }
  function allIssues() {
    const p = P();
    if (!p) return [];
    const out = [];
    for (const x of STAGES) {
      const st = p.stages[x.id];
      if (!st.md) continue;
      for (const m of markersIn(stripJsonBlock(st.md))) if (m.kind !== 'ASSUMPTION' && m.kind !== 'PROPOSAL') out.push({ ...m, stage: x.id });
    }
    return out.slice(0, 120);
  }
  function renderPipeline() {
    const p = P();
    const rc = $('#runControls');
    const list = $('#pipelineList');
    if (!p) { fill(rc, ); fill(list, h('li', { class: 'empty-li' }, 'Start a film to see the production line.')); return; }
    const running = Engine.isRunning();
    const errStage = STAGE_ORDER.find((id) => p.stages[id].status === 'error');
    const modeSel = h('select', { 'aria-label': 'Run mode', onchange: (e) => { p.settings.mode = e.target.value; Store.saveProject(p, []); renderAll(); toast(`Run mode: ${MODES[e.target.value].label}`); } }, ...Object.entries(MODES).map(([k, v]) => h('option', { value: k, selected: p.settings.mode === k ? true : null }, v.label)));
    const stopSel = h('select', { 'aria-label': 'Stop point', onchange: (e) => { p.settings.stopAfter = e.target.value || null; Store.saveProject(p, []); } }, h('option', { value: '' }, '🏁 Run to the end'), ...STAGES.filter((x) => Engine.enabled(x.id) && x.id !== 'wrap').map((x) => h('option', { value: x.id, selected: p.settings.stopAfter === x.id ? true : null }, `🛑 Stop after ${x.title}`)));
    fill(rc, 
      running ? h('button', { class: 'btn', onclick: () => Engine.pause() }, '⏸ Pause after this robot') : h('button', { class: 'btn primary', disabled: p.review ? true : null, onclick: () => Engine.run() }, errStage ? '🔁 Retry' : STAGE_ORDER.every((id) => !Engine.enabled(id) || ['done', 'skipped'].includes(p.stages[id].status)) ? '✅ All done' : '▶ Continue'),
      running ? h('button', { class: 'btn ghost', onclick: () => { Engine.stop(); toast('Stopped. ⏹'); } }, '⏹ Stop now') : null,
      modeSel, stopSel);
    fill(list, ...STAGES.map((x, i) => {
      const st = p.stages[x.id];
      const on = Engine.enabled(x.id);
      const dur = st.endedAt && st.startedAt ? Math.round((st.endedAt - st.startedAt) / 1000) + ' s' : '';
      return h('li', { class: `pl-row s-${on ? st.status : 'off'}` },
        h('span', { class: 'pl-n' }, i + 1), robotAvatar(x.robot, 30),
        h('div', { class: 'pl-main' }, h('b', {}, `${x.icon} ${x.title}`), h('small', {}, `${ROBOTS[x.robot].name} · ${on ? st.status : 'not in crew'}${st.version ? ' · v' + st.version : ''}${st.words ? ' · ' + st.words + ' words' : ''}${dur ? ' · ' + dur : ''}`), st.error ? h('small', { class: 'err-txt' }, st.error) : null),
        h('div', { class: 'pl-act' },
          st.md || st.liveText ? h('button', { class: 'btn small ghost', title: 'View', onclick: () => showPreview(x.id) }, '👁') : null,
          on && st.md && !running ? h('button', { class: 'btn small ghost', title: 'Redo', onclick: () => Engine.redo(x.id) }, '🔁') : null,
          !['brief', 'wrap'].includes(x.id) && !running && st.status !== 'done' ? h('button', { class: 'btn small ghost', title: on ? 'Remove from crew' : 'Add to crew', onclick: () => { p.settings.crew[x.id] = !on; if (st.status === 'skipped') st.status = 'waiting'; applyCrew(); renderAll(); } }, on ? '⏭' : '＋') : null));
    }));
  }
  function renderTracker() {
    const p = P();
    const tr = $('#tracker');
    if (!p) { fill(tr, h('span', { class: 'muted' }, 'The production line appears here: one stop per robot.')); return; }
    fill(tr, ...STAGES.filter((x) => Engine.enabled(x.id)).map((x, i, arr) => {
      const st = p.stages[x.id];
      return h('button', { class: `trk s-${st.status}`, title: `${x.title} — ${ROBOTS[x.robot].name}: ${st.status}`, onclick: () => (st.md || st.liveText ? showPreview(x.id) : visitRoom(x.robot)) },
        h('span', { class: 'trk-ico' }, x.icon), h('span', { class: 'trk-t' }, x.title), i < arr.length - 1 ? h('span', { class: 'trk-line' }) : null);
    }));
    const act = tr.querySelector('.s-working, .s-review');
    if (act && act.scrollIntoView) act.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reducedMotion() ? 'auto' : 'smooth' });
  }
  function renderHeader() {
    const p = P();
    $('#projectTitle').textContent = p ? p.title : 'No film yet';
    $('#btnExport').disabled = !p;
    $('#btnSettings').disabled = !p;
    $('#progressPill').hidden = !p;
    $('#cabinBadge').hidden = !unread;
    $('#cabinBadge').textContent = unread;
    if (!p) return;
    const pr = Store.progressOf(p);
    const cur = Engine.current();
    const ring = $('#ringFg');
    const Cc = 2 * Math.PI * 15;
    ring.style.strokeDasharray = `${Cc}`;
    ring.style.strokeDashoffset = `${Cc * (1 - (pr.total ? pr.done / pr.total : 0))}`;
    const order = STAGES.filter((x) => Engine.enabled(x.id));
    const idx = cur ? order.findIndex((x) => x.id === cur) + 1 : pr.done;
    $('#progressStage').textContent = cur ? `${STAGE[cur].icon} ${STAGE[cur].title}` : p.review ? `👀 Review: ${STAGE[p.review].title}` : Engine.isRunning() ? 'Walking…' : pr.done === pr.total ? '🎉 Wrapped' : '⏸ Paused';
    $('#progressCount').textContent = `Stage ${Math.max(1, idx)} of ${pr.total} · ${pr.done} done`;
    $('#onAir').classList.toggle('lit', Engine.isRunning());
    const hud = cur ? `${ROBOTS[STAGE[cur].robot].name} is working on ${STAGE[cur].title}` : p.review ? `Waiting for your review of ${STAGE[p.review].title}` : Engine.isRunning() ? 'Captain Clipboard is on the move…' : pr.done === pr.total ? 'That\'s a wrap! 🎉' : 'Line paused';
    $$('.hud-stage').forEach((e2) => { e2.textContent = hud; });
    const n = allIssues().length;
    $('#btnIssues').hidden = !n;
    $('#issueCount').textContent = n;
    W.updateBoard(STAGES.filter((x) => Engine.enabled(x.id)).map((x) => ({ id: x.id, status: p.stages[x.id].status })));
  }
  function renderLive() {
    const box = $('#liveBox');
    if (!box) return;
    const p = P(); const cur = Engine.current();
    if (!p || !cur) { box.hidden = true; return; }
    const st = p.stages[cur];
    box.hidden = false;
    fill(box, h('div', { class: 'live-head' }, robotAvatar(STAGE[cur].robot, 28), h('b', {}, `${ROBOTS[STAGE[cur].robot].name} · ${STAGE[cur].title}`), h('button', { class: 'btn small ghost', onclick: () => showPreview(cur) }, '👁 Open')),
      h('div', { class: 'live-text' }, st.liveText ? lastWords(stripJsonBlock(st.liveText), 60) + ' ▍' : 'Thinking… 💭'));
  }
  function renderAll() { renderHeader(); renderTracker(); if (page === 'board') renderPipeline(); renderReview(); renderLive(); if (page === 'screening' && ['docs', 'boards'].includes(screenTab)) renderPreview(); }

  // ----- pages and the 3D stage -----
  function goPage(pg) {
    page = pg;
    $$('.nav-btn').forEach((b) => { const on = b.dataset.page === pg; b.classList.toggle('on', on); b.setAttribute('aria-current', on ? 'page' : 'false'); });
    $$('.page').forEach((s2) => { s2.hidden = s2.id !== 'page-' + pg; });
    const stage = $('#stage3d');
    if (pg === 'cabin') { $('#slotCabin').append(stage); W.setMode('seat'); unread = 0; const log = $('#chatLog'); log.scrollTop = log.scrollHeight; }
    if (pg === 'studio') { $('#slotStudio').append(stage); setStudioCam(studioCam); }
    if (pg !== 'screening') stopPlayer();
    if (pg === 'lobby') renderLobby();
    if (pg === 'screening') renderScreening();
    if (pg === 'board') renderPipeline();
    if (pg === 'keys') renderKeys();
    renderHeader();
  }
  function setStudioCam(m, arg) {
    studioCam = m;
    if (m === 'room') { W.setMode('room', arg || roomSel()); }
    else { W.setMode(m); W.setFollow(m === 'director'); }
    $$('.cam-btn').forEach((b) => b.classList.toggle('on', b.dataset.cam === m));
    if (m !== 'room') { const s2 = $('#roomSelect'); if (s2) s2.value = ''; }
  }
  const roomSel = () => ($('#roomSelect') && $('#roomSelect').value) || COORD;
  function visitRoom(rid) { goPage('studio'); const s2 = $('#roomSelect'); if (s2) s2.value = rid; setStudioCam('room', rid); }
  function showRoomCard(info) {
    const card = $('#roomCard');
    const id = info.robot;
    if (!id || !ROBOTS[id]) { card.hidden = true; return; }
    const R = ROBOTS[id];
    const p = P();
    const stagesOf = STAGES.filter((x) => x.robot === id);
    fill(card, h('button', { class: 'x', onclick: () => { card.hidden = true; }, title: 'Close' }, '×'),
      h('div', { class: 'rc-head' }, robotAvatar(id, 56), h('div', {}, h('b', {}, R.name), h('small', {}, R.job), h('code', {}, `skill: ${id}`))),
      h('p', { class: 'rc-desc' }, truncate(SKILLDATA.skills[id].description, 230)),
      h('div', { class: 'rc-stages' }, ...stagesOf.map((x) => h('button', { class: 'chip-btn', onclick: () => { if (p && (p.stages[x.id].md || p.stages[x.id].liveText)) showPreview(x.id); else toast('Nothing written yet.'); } }, `${x.icon} ${x.title} ${p ? statusIcon(Engine.enabled(x.id) ? p.stages[x.id].status : 'skipped') : ''}`)),
        page === 'studio' ? h('button', { class: 'chip-btn', onclick: () => { visitRoom(id); card.hidden = true; } }, '🎥 Watch this room') : null));
    card.hidden = false;
  }

  // ----- keys -----
  function renderKeys() {
    const el = $('#page-keys');
    const p = P();
    const keys = JSON.parse(JSON.stringify(Keys.get(p && p.id)));
    const inClaude = Brain.mode() === 'claude';
    const asDefault = h('input', { type: 'checkbox', checked: Keys.isDefault() || !p ? true : null });
    const cards2 = Object.entries(PROVIDERS).map(([pid, pv]) => {
      keys[pid] = keys[pid] || {};
      const out = h('small', { class: 'muted' });
      const keyIn = h('input', { type: 'password', autocomplete: 'off', placeholder: 'Paste your API key', value: keys[pid].key || '', oninput: (e) => { keys[pid].key = e.target.value.trim(); } });
      const show = h('button', { class: 'btn small ghost', type: 'button', onclick: () => { keyIn.type = keyIn.type === 'password' ? 'text' : 'password'; } }, '👁');
      const fields = pv.fields.map(([f, label, def]) => field(label, h('input', { type: 'text', value: keys[pid][f] || def, oninput: (e) => { keys[pid][f] = e.target.value.trim(); } })));
      for (const [f, , def] of pv.fields) if (!keys[pid][f]) keys[pid][f] = def;
      return h('div', { class: 'card key-card' + (keys[pid].key ? ' has' : '') },
        h('div', { class: 'key-head' }, h('b', {}, pv.label), keys[pid].key ? h('span', { class: 'tag' }, '✓ key set') : null),
        h('p', { class: 'muted small' }, pv.hint, ' Get a key at ', h('code', {}, pv.link), '.'),
        h('div', { class: 'key-row' }, keyIn, show,
          h('button', { class: 'btn small', type: 'button', onclick: async () => { saveKeys(); out.textContent = 'Testing…'; try { out.textContent = '✅ ' + await Gen.test(pid, Keys.key(p && p.id, pid) || keys[pid]); } catch (e) { out.textContent = '⚠️ ' + (e.message || Engine.errCopy(e)); } } }, 'Test'),
          keys[pid].key ? h('button', { class: 'btn small ghost', type: 'button', onclick: () => { keys[pid].key = ''; saveKeys(); renderKeys(); } }, 'Remove') : null),
        fields.length ? h('div', { class: 'grid2' }, ...fields) : null, out);
    });
    function saveKeys() { Keys.set(p && p.id, keys, asDefault.checked || !p); }
    fill(el, h('div', { class: 'keys' },
      h('h2', {}, '🔑 API keys'),
      h('div', { class: 'card note ' + (inClaude ? 'warn' : 'ok') },
        inClaude
          ? [h('b', {}, 'You are inside claude.ai. '), 'Here the robots think with your Claude account, and Claude makes the pictures and the previz video with code: no keys needed. claude.ai does not let pages call outside services, so image/video keys only work when you run the studio on your own computer.', hasHomeCopy() ? h('div', { class: 'row' }, h('button', { class: 'btn primary', onclick: takeHome }, '📥 Take the studio home (.html)')) : null]
          : [h('b', {}, 'Running on your computer. '), 'The robots use your Anthropic key; image and video buttons use the providers you add. Keys are stored only in this browser, never in exports.']),
      ...cards2,
      h('label', { class: 'toggle' }, asDefault, ' Use these keys for all my films (otherwise only for this film)'),
      h('div', { class: 'row' }, h('button', { class: 'btn primary', onclick: () => { saveKeys(); toast('Keys saved in this browser 🔑'); renderKeys(); } }, '💾 Save keys')),
      h('p', { class: 'fineprint' }, 'Keys stay in this browser\'s storage for this studio only. They are not saved to your account, not shown to the robots and not included in project files. Generation calls go straight from your browser to the provider and use your credits there. The provider calls follow each provider\'s public API but have not been tested from this page; if one fails, check the model name above against the provider\'s docs.')));
  }
  function hasHomeCopy() { const e2 = document.getElementById('homeCopy'); return !!(e2 && e2.textContent.trim().length > 100); }
  async function takeHome() {
    try {
      const b64 = document.getElementById('homeCopy').textContent.trim();
      const bin = atob(b64); const arr = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
      const html = await new Response(new Blob([arr]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
      await save('robo-film-studio.html', html);
      toast('Open the saved file in Chrome or Edge on your computer, then add your keys on 🔑 Keys.', 6000);
    } catch (e) { toast('Could not prepare the file: ' + (e.message || e)); }
  }

  // ----- projects, export, settings, issues -----
  async function openProject(pid) {
    if (Engine.isRunning()) { toast('Pause the current film first.'); return; }
    const p = await Store.loadProject(pid);
    if (!p) { toast('Couldn\'t open that film.'); return; }
    loadIntoUi(p);
    closeModal();
    goPage('cabin');
    toast(`Opened "${p.title}"`);
  }
  function loadIntoUi(p) {
    Engine.setProject(p);
    W.setSpeed(SPEEDS[p.settings.speed] || 1);
    applyCrew();
    renderChat();
    previewSel = lastDone();
    previewFollow = true;
    renderAll();
  }
  function importProject(j) {
    const p = j.project;
    if (!p || !p.stages) { toast('That file isn\'t a Robo Film Studio project.'); return; }
    p.id = uid('film');
    p.uploads = (p.uploads || []).map((u) => ({ ...u, blob: u.dataUrl ? dataUrlToBlob(u.dataUrl) : null, saved: false }));
    for (const id of STAGE_ORDER) { p.stages[id] = p.stages[id] || { status: 'waiting' }; if (p.stages[id].status === 'working') p.stages[id].status = 'waiting'; }
    p.chat = p.chat || []; p.notes = p.notes || []; p.crs = p.crs || [];
    loadIntoUi(p);
    Store.saveProject(p, STAGE_ORDER);
    closeModal();
    toast(`Imported "${p.title}" 📥`);
  }
  async function save(filename, data) {
    if (!downloads) downloads = await useCap('downloads');
    if (downloads) {
      try { await downloads.save({ filename, data }); toast('Saved 💾'); } catch (e) { if (e && e.code !== 'declined') toast('Couldn\'t save: ' + (e.code || 'error')); }
      return;
    }
    if (!CL) {
      const url = URL.createObjectURL(data instanceof Blob ? data : new Blob([data]));
      const a = h('a', { href: url, download: filename });
      document.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      return;
    }
    if (typeof data === 'string') { await copyText(data); toast('Saving files isn\'t available here, so I copied it to your clipboard.'); }
    else toast('Saving files isn\'t available in this view.');
  }
  const slug = () => ((P() && P().title) || 'film').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'film';
  function openExport() {
    const p = P();
    const prompts = [...(((p.stages.images.data || {}).prompts) || []).map((x) => ['image', x.id, x.target || '', x.kind || '', x.prompt || '']), ...(((p.stages.video.data || {}).prompts) || []).map((x) => ['video', x.id, x.shot || '', x.mode || '', x.prompt || ''])];
    const csv = [['type', 'id', 'target', 'kind_or_mode', 'prompt'], ...prompts].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const specs = (p.stages.render.data && p.stages.render.data.shots) || [];
    const fountain = ((p.stages.screenplay.md || '').match(/```fountain\s*\n([\s\S]*?)```/) || [])[1];
    const item = (ico, title, sub, fn, disabled) => h('button', { class: 'export-item', disabled: disabled ? true : null, onclick: fn }, h('span', { class: 'ex-ico' }, ico), h('b', {}, title), h('small', {}, sub));
    openModal(h('div', {}, h('h2', { id: 'modalTitle' }, '📦 Export'), h('div', { class: 'export-grid' },
      item('📚', 'Master production document', 'Every department in one Markdown file (.md)', () => save(`${slug()}-MASTER_PRODUCTION_DOCUMENT.md`, assembleMaster())),
      item('🖼️', 'Storyboard sheet', 'Printable HTML with the panels and sketches', () => save(`${slug()}-storyboard.html`, storyboardHtml()), !(p.stages.storyboard.data && p.stages.storyboard.data.panels)),
      item('🪄', 'Prompt pack', `${prompts.length} image and video prompts (.csv)`, () => save(`${slug()}-prompts.csv`, csv), !prompts.length),
      item('📝', 'Screenplay', 'Fountain text (.txt)', () => save(`${slug()}-screenplay.fountain.txt`, fountain || ''), !fountain),
      item('🎬', 'Previz video', 'Claude-made 3D previz, recorded to .webm', () => { closeModal(); screenTab = 'previz'; goPage('screening'); toast('Press ⏺ Export video to record it.'); }, !specs.length),
      item('💾', 'Project file', 'Re-open or share it in Robo Film Studio (.json)', () => save(`${slug()}.robofilm.json`, JSON.stringify({ robo_film_studio_project: 1, project: { ...p, uploads: p.uploads.map(({ blob, ...u }) => u) } }))),
      item('📋', 'Copy master to clipboard', 'Paste it anywhere', () => copyText(assembleMaster()))),
    h('div', { class: 'wiz-nav' }, h('span'), h('button', { class: 'btn', onclick: closeModal }, 'Close'))));
  }
  function storyboardHtml() {
    const p = P();
    const panels = (p.stages.storyboard.data && p.stages.storyboard.data.panels) || [];
    const sk = p.stages.storyboard.sketches || [];
    const cells = panels.map((x) => { const s0 = sk.find((k) => k.id === x.id); return `<figure><div class="f">${s0 ? s0.svg : `<div class="ph">${esc(x.shot)}</div>`}</div><figcaption><b>${esc(x.id)}</b> ${esc(x.moment || '')}<br><i>${esc(x.camera_note || '')}</i>${x.dialogue ? `<br>“${esc(x.dialogue)}”` : ''}</figcaption></figure>`; }).join('');
    return `<!doctype html><html><head><meta charset="utf-8"><title>${esc(p.title)} — storyboard</title><style>body{font:13px system-ui;margin:24px;color:#222}h1{font-size:20px}.g{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}figure{margin:0;border:1px solid #ccc;border-radius:6px;padding:8px;break-inside:avoid}.f svg{width:100%;height:auto;border:1px solid #333;background:#fff}.ph{aspect-ratio:16/9;display:grid;place-items:center;background:#eee}</style></head><body><h1>${esc(p.title)} — storyboard</h1><p>${p.settings.runtime} s · ${p.settings.aspect} · ${esc(p.settings.medium)}</p><div class="g">${cells}</div></body></html>`;
  }
  function openSettings() {
    draft = JSON.parse(JSON.stringify(P().settings));
    renderSettings();
  }
  function renderSettings() {
    const p = P();
    const body = h('div', {},
      h('h2', { id: 'modalTitle' }, '⚙️ Production settings'),
      h('h4', {}, 'Run mode'), cards('mode', MODES, null, renderSettings),
      draft.mode === 'custom' ? h('div', { class: 'gate-list' }, h('b', {}, 'Stop for my review after:'), ...STAGES.filter((x) => Engine.enabled(x.id)).map((x) => h('label', { class: 'toggle' }, h('input', { type: 'checkbox', checked: draft.gates[x.id] ? true : null, onchange: (e) => { draft.gates[x.id] = e.target.checked; } }), ` ${x.icon} ${x.title}`))) : null,
      h('div', { class: 'grid2' },
        field('Brain power', select('tier', Object.entries(TIERS))),
        field('Detail level', select('depth', Object.entries(DEPTHS).map(([k, v]) => [k, `${v.label} — ${v.hint}`]))),
        field('Animation speed', select('speed', [['chill', '🐢 Chill'], ['normal', '🚶 Normal'], ['turbo', '🚀 Turbo']])),
        field('Image model', select('imageModel', OPTIONS.imageModel)), field('Video model', select('videoModel', OPTIONS.videoModel))),
      h('h4', {}, 'Pictures'), cards('imageMode', IMAGE_MODES, null, renderSettings),
      h('label', { class: 'toggle' }, h('input', { type: 'checkbox', checked: draft.chatter ? true : null, onchange: (e) => { draft.chatter = e.target.checked; } }), ' Show team chatter'),
      h('p', { class: 'fineprint' }, 'Crew changes: use ⏭ / ＋ on each row of the Pipeline tab. Format changes (runtime, medium…) are creative changes: tell Captain Clipboard in the chat so the crew updates the work.'),
      h('div', { class: 'wiz-nav' }, h('button', { class: 'btn ghost', onclick: closeModal }, 'Cancel'), h('button', { class: 'btn primary', onclick: () => {
        Object.assign(p.settings, { mode: draft.mode, gates: draft.gates, tier: draft.tier, depth: draft.depth, speed: draft.speed, imageModel: draft.imageModel, videoModel: draft.videoModel, imageMode: draft.imageMode, chatter: draft.chatter });
        W.setSpeed(SPEEDS[p.settings.speed] || 1);
        Store.saveProject(p, []);
        closeModal(); renderAll(); toast('Settings saved ⚙️');
      } }, 'Save')));
    openModal(body, 'wide');
  }
  function openIssues() {
    const list = allIssues();
    openModal(h('div', {}, h('h2', { id: 'modalTitle' }, '❓ Open questions & flags'), h('p', { class: 'muted' }, 'Lines the robots marked MISSING:, OPEN-QUESTION: or CONFLICT:. Answer one and Captain Clipboard routes it to the owner.'),
      h('ul', { class: 'issue-list' }, ...list.map((x) => h('li', {}, h('span', { class: 'marker m-' + x.kind }, x.kind), ` ${x.text} `, h('small', { class: 'muted' }, `(${STAGE[x.stage].title})`),
        h('button', { class: 'btn small ghost', onclick: () => { closeModal(); const ta = $('#cmdInput'); ta.value = `About "${x.text.slice(0, 90)}" (${STAGE[x.stage].title}): `; ta.focus(); autosize(); } }, 'Answer')))),
      h('div', { class: 'wiz-nav' }, h('span'), h('button', { class: 'btn', onclick: closeModal }, 'Close'))));
  }

  // ----- wiring -----
  function init() {
    $('#btnSend').addEventListener('click', send);
    const ta = $('#cmdInput');
    ta.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); send(); } });
    ta.addEventListener('input', autosize);
    ta.addEventListener('paste', (e) => { const files = Array.from(e.clipboardData && e.clipboardData.files || []); if (files.length) { e.preventDefault(); addFiles(files); } });
    $('#fileInput').addEventListener('change', (e) => { addFiles(e.target.files); e.target.value = ''; });
    let dragDepth = 0;
    window.addEventListener('dragenter', (e) => { if (e.dataTransfer && Array.from(e.dataTransfer.types || []).includes('Files')) { dragDepth++; document.body.classList.add('dragging'); } });
    window.addEventListener('dragleave', () => { dragDepth = Math.max(0, dragDepth - 1); if (!dragDepth) document.body.classList.remove('dragging'); });
    window.addEventListener('dragover', (e) => e.preventDefault());
    window.addEventListener('drop', (e) => { e.preventDefault(); dragDepth = 0; document.body.classList.remove('dragging'); addFiles(e.dataTransfer.files); });
    $$('.nav-btn').forEach((b) => b.addEventListener('click', () => goPage(b.dataset.page)));
    $('#previewBodyClick') && null;
    document.addEventListener('click', (e) => { const b = e.target.closest('[data-copy]'); if (b) copyText(b.closest('.codeblock').querySelector('code').textContent); });
    $('#chkChatter').addEventListener('change', (e) => document.body.classList.toggle('hide-team', !e.target.checked));
    $('#btnNew').addEventListener('click', () => { if (Engine.isRunning()) { toast('Pause the current film first (🧭 Board).'); return; } draft = defaults(); goPage('lobby'); });
    $('#btnExport').addEventListener('click', openExport);
    $('#btnSettings').addEventListener('click', openSettings);
    $('#btnIssues').addEventListener('click', openIssues);
    $('#projectTitle').addEventListener('click', () => {
      const p = P();
      if (!p) { goPage('lobby'); return; }
      const inp = h('input', { type: 'text', value: p.title, maxlength: 80 });
      openModal(h('div', {}, h('h2', { id: 'modalTitle' }, 'Rename film'), inp, h('div', { class: 'wiz-nav' }, h('button', { class: 'btn ghost', onclick: closeModal }, 'Cancel'), h('button', { class: 'btn primary', onclick: () => { p.title = inp.value.trim() || p.title; Store.saveProject(p, []); closeModal(); renderHeader(); } }, 'Save'))));
    });
    $('#modalBack').addEventListener('click', (e) => { if (e.target.id === 'modalBack') closeModal(); });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#modalBack').hidden) closeModal(); });
    $$('.cam-btn').forEach((b) => b.addEventListener('click', () => { if (b.dataset.cam === 'seat') { goPage('cabin'); return; } setStudioCam(b.dataset.cam); }));
    const rs = $('#roomSelect');
    fill(rs, h('option', { value: '' }, '🚪 Visit a room…'), h('option', { value: COORD }, '📋 Captain Clipboard\'s cabin'), ...WORKERS.map((rid) => h('option', { value: rid }, `${ROBOTS[rid].emoji} ${ROBOTS[rid].name} — ${ROBOTS[rid].job}`)));
    rs.addEventListener('change', () => { if (rs.value) setStudioCam('room', rs.value); });
    $('#btnZoomIn').addEventListener('click', () => { if (studioCam !== 'top') setStudioCam('top'); W.zoom(0.8); });
    $('#btnZoomOut').addEventListener('click', () => { if (studioCam !== 'top') setStudioCam('top'); W.zoom(1.25); });
    W.onClick(showRoomCard);

    Engine.on('chat', (m) => { renderChatMsg(m); if (page !== 'cabin' && !m.team && m.from !== 'user') { unread++; renderHeader(); if (m.from === COORD) toast(`📋 ${String(m.text).slice(0, 140)}`, 4200); } });
    Engine.on('change', () => { renderAll(); applyCrew(); });
    Engine.on('title', renderHeader);
    Engine.on('review', () => { renderReview(); if (P() && P().review && (page === 'studio' || page === 'cabin')) goPage('cabin'); });
    Engine.on('stream', (id) => { renderLive(); if (page === 'screening' && (previewFollow || previewSel === id)) queuePreview(); });
    Engine.on('needbrain', () => goPage('keys'));
    renderChat();
    renderAll();
    renderAttachments();
    goPage(Brain.mode() === 'api' && !Brain.ready() ? 'keys' : 'lobby');
  }
  return { init, toast, renderAll, goPage };
})();
