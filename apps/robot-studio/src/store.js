// ---------- capabilities and saving ----------
const CL = (window.claude && typeof window.claude.use === 'function') ? window.claude : null;
const useCap = (name) => (CL ? CL.use(name).catch(() => null) : Promise.resolve(null));

const Store = (() => {
  let db = null, uid = null, mode = 'memory';
  const memory = {};
  const chains = {};
  const serial = (key, fn) => (chains[key] = (chains[key] || Promise.resolve()).then(fn, fn));

  async function init() {
    const [dbNs, userNs] = await Promise.all([useCap('db'), useCap('user')]);
    if (dbNs && userNs) {
      try { uid = await userNs.id(); } catch (e) { uid = null; }
      if (uid) { db = dbNs; mode = 'db'; return mode; }
    }
    try { localStorage.setItem('rfs:probe', '1'); localStorage.removeItem('rfs:probe'); mode = 'local'; } catch (e) { mode = 'memory'; }
    return mode;
  }
  const base = () => db.doc(`data/users/${uid}/studio`);
  const projRef = (pid) => base().collection('projects').doc(pid);

  function metaOf(p) {
    const stages = {};
    for (const [k, v] of Object.entries(p.stages)) {
      stages[k] = { status: v.status, version: v.version || 0, startedAt: v.startedAt || null, endedAt: v.endedAt || null, words: v.words || 0, error: v.error || null, revisionOf: v.revisionOf || null };
    }
    return {
      id: p.id, title: p.title, created: p.created, updated: Date.now(), settings: p.settings, stages,
      chat: p.chat.slice(-80).map((m) => ({ ...m, text: String(m.text).slice(0, 4000) })),
      notes: p.notes.slice(-60), crs: p.crs.slice(-40), uploads: p.uploads.map((u) => ({ id: u.id, name: u.name, kind: u.kind, size: u.size })),
      progress: progressOf(p),
    };
  }
  function progressOf(p) {
    const on = STAGE_ORDER.filter((id) => p.stages[id] && p.stages[id].status !== 'skipped' && p.settings.crew[id] !== false);
    const done = on.filter((id) => p.stages[id].status === 'done').length;
    return { done, total: on.length };
  }

  async function saveProject(p, stageIds) {
    const meta = metaOf(p);
    if (mode === 'db') {
      const jobs = [serial('meta:' + p.id, () => projRef(p.id).set(meta))];
      for (const sid of stageIds || []) {
        const st = p.stages[sid];
        jobs.push(serial('st:' + p.id + sid, () => projRef(p.id).collection('stages').doc(sid).set({ md: String(st.md || '').slice(0, 200000), data: st.data || null })));
        if (st.sketches) jobs.push(serial('sk:' + p.id + sid, () => projRef(p.id).collection('sketches').doc(sid).set({ list: st.sketches.slice(0, 40) })));
      }
      for (const u of p.uploads) if (!u.saved) {
        u.saved = true;
        jobs.push(serial('up:' + u.id, () => projRef(p.id).collection('uploads').doc(u.id).set({ name: u.name, kind: u.kind, size: u.size || 0, text: u.text || null, dataUrl: u.dataUrl || null })));
      }
      await Promise.allSettled(jobs);
      return;
    }
    const full = { ...meta, stageData: {}, uploadData: p.uploads };
    for (const [k, v] of Object.entries(p.stages)) full.stageData[k] = { md: v.md || '', data: v.data || null, sketches: v.sketches || null };
    if (mode === 'local') {
      try {
        localStorage.setItem('rfs:p:' + p.id, JSON.stringify(full));
        const idx = JSON.parse(localStorage.getItem('rfs:index') || '{}');
        idx[p.id] = { id: p.id, title: p.title, updated: meta.updated, progress: meta.progress };
        localStorage.setItem('rfs:index', JSON.stringify(idx));
        return;
      } catch (e) { /* quota: fall through to memory */ }
    }
    memory[p.id] = full;
  }

  async function listProjects() {
    if (mode === 'db') {
      try {
        const snap = await base().collection('projects').orderBy('updated', 'desc').limit(30).get();
        return snap.docs.map((d) => { const v = d.data(); return { id: d.id, title: v.title, updated: v.updated, progress: v.progress }; });
      } catch (e) { return []; }
    }
    if (mode === 'local') {
      try { return Object.values(JSON.parse(localStorage.getItem('rfs:index') || '{}')).sort((a, b) => b.updated - a.updated); } catch (e) { return []; }
    }
    return Object.values(memory).map((v) => ({ id: v.id, title: v.title, updated: v.updated, progress: v.progress }));
  }

  async function loadProject(pid) {
    let meta, stageData = {}, uploads = [];
    if (mode === 'db') {
      const snap = await projRef(pid).get();
      if (!snap.exists) return null;
      meta = snap.data();
      const [st, sk, up] = await Promise.all(['stages', 'sketches', 'uploads'].map((c) => projRef(pid).collection(c).get().catch(() => ({ docs: [] }))));
      for (const d of st.docs) stageData[d.id] = { ...(stageData[d.id] || {}), ...d.data() };
      for (const d of sk.docs) stageData[d.id] = { ...(stageData[d.id] || {}), sketches: d.data().list };
      uploads = up.docs.map((d) => ({ id: d.id, ...d.data(), saved: true }));
    } else {
      let full = memory[pid];
      if (!full && mode === 'local') { try { full = JSON.parse(localStorage.getItem('rfs:p:' + pid) || 'null'); } catch (e) { full = null; } }
      if (!full) return null;
      meta = full; stageData = full.stageData || {}; uploads = full.uploadData || [];
    }
    const p = JSON.parse(JSON.stringify(meta));
    for (const id of STAGE_ORDER) {
      p.stages[id] = { ...(p.stages[id] || { status: 'waiting' }), ...(stageData[id] || {}) };
      if (p.stages[id].status === 'working') p.stages[id].status = 'waiting';
    }
    p.uploads = uploads.map((u) => ({ ...u, blob: u.dataUrl ? dataUrlToBlob(u.dataUrl) : null }));
    p.chat = p.chat || []; p.notes = p.notes || []; p.crs = p.crs || [];
    return p;
  }

  async function deleteProject(pid) {
    if (mode === 'db') {
      const ref = projRef(pid);
      for (const c of ['stages', 'sketches', 'uploads']) {
        const snap = await ref.collection(c).get().catch(() => ({ docs: [] }));
        await Promise.allSettled(snap.docs.map((d) => ref.collection(c).doc(d.id).delete()));
      }
      await ref.delete().catch(() => {});
      return;
    }
    delete memory[pid];
    if (mode === 'local') {
      try {
        localStorage.removeItem('rfs:p:' + pid);
        const idx = JSON.parse(localStorage.getItem('rfs:index') || '{}');
        delete idx[pid];
        localStorage.setItem('rfs:index', JSON.stringify(idx));
      } catch (e) { /* ignore */ }
    }
  }
  return { init, saveProject, listProjects, loadProject, deleteProject, progressOf, mode: () => mode };
})();

function dataUrlToBlob(url) {
  try {
    const [head, b64] = url.split(',');
    const mime = (head.match(/data:([^;]+)/) || [])[1] || 'image/jpeg';
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return new Blob([arr], { type: mime });
  } catch (e) { return null; }
}
