// ---------- Claude-made pictures and video: scene specs (JSON written by Claude) rendered with three.js ----------
const PREVIZ_SCHEMA = `One scene spec per shot. Units are metres, y is up, the ground is y = 0, x to the right, z toward the default camera. A grown-up character is about 1.7 m tall, a small creature 0.4-0.8 m.
{
 "shot": "SC01-SH010", "duration_s": 4,
 "sky": ["#top hex", "#horizon hex"], "ground": "#hex", "fog": 0-1, "time": "day|dusk|night",
 "light": {"color": "#hex", "from": "left|right|front|back|top", "intensity": 0.4-1.6},
 "weather": "none|rain|snow|dust|sparkles|leaves",
 "objects": [ {"id": "name", "shape": "box|sphere|cylinder|cone|torus|capsule|plane|tree|house|rock|cloud|lamp|table|car|boat|water", "color": "#hex", "pos": [x,y,z], "size": [w,h,d], "rot": [x,y,z degrees], "move_to": [x,y,z] (optional), "spin": degrees per second (optional), "glow": true (optional)} ] (at most 14),
 "characters": [ {"id": "CH-ID", "name": "Name", "body": "human|blob|quad|robot", "color": "#hex", "accent": "#hex", "skin": "#hex", "height": 1.7, "hat": "none|cap|cone|bow|crown|tophat|helmet|hood", "from": [x,z], "to": [x,z], "face": "happy|sad|angry|surprised|scared|neutral|talking", "action": "idle|walk|run|jump|wave|fall|dance|sit|talk|point|cower"} ] (at most 4),
 "camera": {"from": [x,y,z], "to": [x,y,z], "look": [x,y,z], "look_to": [x,y,z], "fov": 20-70, "shake": 0-1},
 "caption": "spoken line or sound, shown as a subtitle", "title": "optional on-screen title"
}
Framing guide (camera distance from the subject): extreme close-up 0.5, close-up 1.0, medium close-up 1.6, medium 2.5, wide 7, extreme wide 15+. Lens feel: wide angle fov 60-70, normal 40, telephoto 20-25. Put the camera at about eye height (1.5) unless the shot is high or low angle.`;

const Previz = (() => {
  let T = null, renderer = null, glCanvas = null, out = null, octx = null;
  let W = 960, H = 540;
  const DIM = { '16:9': [960, 540], '9:16': [540, 960], '1:1': [720, 720], '2.39:1': [1032, 432], '4:5': [640, 800] };
  async function ensure(aspect) {
    if (!T) T = await import(THREE_URL);
    [W, H] = DIM[aspect] || DIM['16:9'];
    if (!renderer) {
      glCanvas = document.createElement('canvas');
      renderer = new T.WebGLRenderer({ canvas: glCanvas, antialias: true, preserveDrawingBuffer: true });
      renderer.outputColorSpace = T.SRGBColorSpace;
      renderer.toneMapping = T.ACESFilmicToneMapping;
      out = document.createElement('canvas');
      out.className = 'previz-canvas';
      octx = out.getContext('2d');
    }
    renderer.setPixelRatio(1);
    renderer.setSize(W, H, false);
    out.width = W; out.height = H;
    return out;
  }
  // ---------- coercion of model-written values ----------
  const num = (v, d, lo, hi) => { const n = Number(v); return Number.isFinite(n) ? Math.min(hi == null ? 1e9 : hi, Math.max(lo == null ? -1e9 : lo, n)) : d; };
  const vec = (v, d) => (Array.isArray(v) ? d.map((x, i) => num(v[i], x, -500, 500)) : d.slice());
  const col = (v, d) => (typeof v === 'string' && /^#[0-9a-f]{3,8}$/i.test(v.trim()) ? v.trim() : d);
  const deg = (x) => (x * Math.PI) / 180;
  const ease = (k) => k * k * (3 - 2 * k);

  function skyTexture(top, bottom, night) {
    const c = document.createElement('canvas'); c.width = 16; c.height = 256;
    const g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, top); gr.addColorStop(1, bottom); g.fillStyle = gr; g.fillRect(0, 0, 16, 256);
    if (night) { g.fillStyle = '#fff'; for (let k = 0; k < 20; k++) g.fillRect(Math.random() * 16, Math.random() * 120, 1, 1); }
    const t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; return t;
  }
  const M = (c, extra) => new T.MeshStandardMaterial({ color: c, roughness: 0.7, ...(extra || {}) });
  function prim(shape, c, size, glow) {
    const [w, hh, d] = size;
    const m = M(c, glow ? { emissive: c, emissiveIntensity: 0.8 } : null);
    const g = new T.Group();
    const add = (geo, mm, x, y, z) => { const me = new T.Mesh(geo, mm || m); me.position.set(x || 0, y || 0, z || 0); g.add(me); return me; };
    switch (shape) {
      case 'sphere': add(new T.SphereGeometry(0.5, 24, 16), m, 0, 0.5, 0).scale.set(w, hh, d); break;
      case 'cylinder': add(new T.CylinderGeometry(0.5, 0.5, 1, 24), m, 0, 0.5, 0).scale.set(w, hh, d); break;
      case 'cone': add(new T.ConeGeometry(0.5, 1, 24), m, 0, 0.5, 0).scale.set(w, hh, d); break;
      case 'torus': add(new T.TorusGeometry(0.4, 0.1, 12, 32), m, 0, 0.5, 0).scale.set(w, hh, d); break;
      case 'capsule': add(new T.CapsuleGeometry(0.3, 0.4, 6, 16), m, 0, 0.5, 0).scale.set(w, hh, d); break;
      case 'plane': { const p = add(new T.PlaneGeometry(1, 1), m, 0, 0.01, 0); p.rotation.x = -Math.PI / 2; p.scale.set(w, d, 1); break; }
      case 'water': { const p = add(new T.PlaneGeometry(1, 1, 24, 24), new T.MeshStandardMaterial({ color: c, roughness: 0.15, metalness: 0.2, transparent: true, opacity: 0.85 }), 0, 0.02, 0); p.rotation.x = -Math.PI / 2; p.scale.set(w, d, 1); p.userData.water = true; break; }
      case 'tree': add(new T.CylinderGeometry(0.08, 0.12, 1, 10), M('#8d6e63'), 0, 0.5 * hh * 0.4, 0).scale.set(w, hh * 0.4, d); add(new T.ConeGeometry(0.5, 1, 14), m, 0, hh * 0.4 + hh * 0.3, 0).scale.set(w, hh * 0.6, d); break;
      case 'house': add(new T.BoxGeometry(1, 1, 1), m, 0, hh * 0.35, 0).scale.set(w, hh * 0.7, d); { const r = add(new T.ConeGeometry(0.75, 1, 4), M('#c92a2a'), 0, hh * 0.7 + hh * 0.15, 0); r.rotation.y = Math.PI / 4; r.scale.set(w, hh * 0.3, d); } add(new T.BoxGeometry(0.25, 0.4, 0.02), M('#5c3d2e'), 0, 0.2 * hh, d / 2 + 0.01).scale.set(w, hh, 1); break;
      case 'rock': add(new T.DodecahedronGeometry(0.5, 0), m, 0, 0.35, 0).scale.set(w, hh, d); break;
      case 'cloud': for (const [x, y, r] of [[-0.3, 0, 0.35], [0, 0.1, 0.45], [0.35, 0, 0.32]]) add(new T.SphereGeometry(r, 16, 12), M(c || '#ffffff'), x * w, y * hh, 0).scale.set(w, hh, d); break;
      case 'lamp': add(new T.CylinderGeometry(0.03, 0.03, 1, 8), M('#343a40'), 0, hh / 2, 0).scale.set(1, hh, 1); add(new T.SphereGeometry(0.15, 12, 10), new T.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 1.2 }), 0, hh, 0); break;
      case 'table': add(new T.BoxGeometry(1, 0.06, 1), m, 0, hh, 0).scale.set(w, 1, d); for (const [x, z] of [[-0.45, -0.45], [0.45, -0.45], [-0.45, 0.45], [0.45, 0.45]]) add(new T.BoxGeometry(0.05, 1, 0.05), m, x * w, hh / 2, z * d).scale.set(1, hh, 1); break;
      case 'car': add(new T.BoxGeometry(1, 0.4, 0.5), m, 0, 0.35 * hh, 0).scale.set(w, hh, d); add(new T.BoxGeometry(0.55, 0.3, 0.45), M('#dee2e6'), -0.05 * w, 0.7 * hh, 0).scale.set(w, hh, d); for (const [x, z] of [[-0.32, -0.26], [0.32, -0.26], [-0.32, 0.26], [0.32, 0.26]]) { const wh = add(new T.CylinderGeometry(0.13, 0.13, 0.08, 16), M('#212529'), x * w, 0.13 * hh, z * d); wh.rotation.x = Math.PI / 2; } break;
      case 'boat': { const hull = add(new T.CylinderGeometry(0.5, 0.3, 0.3, 4, 1), m, 0, 0.15 * hh, 0); hull.rotation.y = Math.PI / 4; hull.scale.set(w, hh, d); add(new T.CylinderGeometry(0.02, 0.02, 1, 6), M('#8d6e63'), 0, 0.6 * hh, 0).scale.set(1, hh, 1); break; }
      default: add(new T.BoxGeometry(1, 1, 1), m, 0, hh / 2, 0).scale.set(w, hh, d);
    }
    return g;
  }
  function character(spec) {
    const c = col(spec.color, '#4c6ef5'), a = col(spec.accent, '#fcc419'), skin = col(spec.skin, '#ffd8a8');
    const hgt = num(spec.height, 1.7, 0.2, 6);
    const kind = ['human', 'blob', 'quad', 'robot'].includes(spec.body) ? spec.body : 'human';
    const root = new T.Group();
    const s2 = hgt / 1.7;
    const rig = new T.Group(); rig.scale.setScalar(kind === 'human' || kind === 'robot' ? s2 : hgt / 0.9); root.add(rig);
    const parts = {};
    const add = (geo, color, x, y, z, parent) => { const m = new T.Mesh(geo, M(color)); m.position.set(x, y, z); (parent || rig).add(m); return m; };
    if (kind === 'quad') {
      add(new T.CapsuleGeometry(0.22, 0.45, 6, 14), c, 0, 0.45, 0).rotation.z = Math.PI / 2;
      parts.legs = [[-0.22, -0.12], [-0.22, 0.12], [0.22, -0.12], [0.22, 0.12]].map(([x, z]) => { const g = new T.Group(); g.position.set(x, 0.35, z); rig.add(g); add(new T.CapsuleGeometry(0.05, 0.22, 4, 8), c, 0, -0.15, 0, g); return g; });
      parts.head = new T.Group(); parts.head.position.set(0.42, 0.62, 0); rig.add(parts.head);
      add(new T.SphereGeometry(0.17, 16, 12), c, 0, 0, 0, parts.head);
      root.userData.faceDir = 'x';
    } else if (kind === 'blob') {
      add(new T.SphereGeometry(0.4, 24, 16), c, 0, 0.38, 0).scale.set(1, 0.85, 0.9);
      add(new T.SphereGeometry(0.22, 16, 12), a, 0, 0.3, 0.18).scale.set(1, 0.7, 0.6);
      parts.head = new T.Group(); parts.head.position.set(0, 0.55, 0); rig.add(parts.head);
      parts.legs = [-0.18, 0.18].map((x) => { const g = new T.Group(); g.position.set(x, 0.1, 0.05); rig.add(g); add(new T.SphereGeometry(0.1, 10, 8), c, 0, -0.05, 0.05, g).scale.set(1, 0.5, 1.6); return g; });
    } else {
      parts.legs = [-0.12, 0.12].map((x) => { const g = new T.Group(); g.position.set(x, 0.85, 0); rig.add(g); add(new T.CapsuleGeometry(0.07, 0.6, 4, 10), kind === 'robot' ? '#868e96' : '#343a40', 0, -0.42, 0, g); add(new T.SphereGeometry(0.09, 10, 8), '#212529', 0, -0.8, 0.05, g).scale.set(1, 0.6, 1.5); return g; });
      add(new T.CapsuleGeometry(0.2, 0.42, 6, 14), c, 0, 1.15, 0).scale.set(1, 1, 0.75);
      parts.arms = [-0.27, 0.27].map((x) => { const g = new T.Group(); g.position.set(x, 1.38, 0); rig.add(g); add(new T.CapsuleGeometry(0.055, 0.42, 4, 8), c, 0, -0.27, 0, g); add(new T.SphereGeometry(0.07, 10, 8), kind === 'robot' ? '#adb5bd' : skin, 0, -0.55, 0, g); return g; });
      parts.head = new T.Group(); parts.head.position.set(0, 1.6, 0); rig.add(parts.head);
      if (kind === 'robot') add(new T.BoxGeometry(0.34, 0.3, 0.3), '#adb5bd', 0, 0.02, 0, parts.head); else add(new T.SphereGeometry(0.17, 20, 16), skin, 0, 0, 0, parts.head);
    }
    // face (on +z, or +x for four-legged)
    const face = new T.Group(); parts.head.add(face);
    if (root.userData.faceDir === 'x') face.rotation.y = Math.PI / 2;
    const r = kind === 'blob' ? 0.2 : 0.165;
    for (const sx of [-0.06, 0.06]) { add(new T.SphereGeometry(0.035, 10, 8), '#ffffff', sx, 0.03, r - 0.01, face); add(new T.SphereGeometry(0.018, 8, 6), '#111111', sx, 0.03, r + 0.017, face); }
    const mood = spec.face || 'neutral';
    const mouthGeo = mood === 'surprised' || mood === 'scared' || mood === 'talking' ? new T.TorusGeometry(0.025, 0.008, 6, 12) : new T.TorusGeometry(0.04, 0.008, 6, 12, Math.PI);
    parts.mouth = add(mouthGeo, '#5c1a1a', 0, -0.06, r - 0.005, face);
    if (mood === 'happy' || mood === 'neutral') parts.mouth.rotation.z = Math.PI;
    if (mood === 'neutral') parts.mouth.scale.y = 0.3;
    if (mood === 'angry') for (const sx of [-1, 1]) { const b = add(new T.BoxGeometry(0.05, 0.01, 0.01), '#111111', sx * 0.06, 0.08, r, face); b.rotation.z = sx * 0.4; }
    const hat = spec.hat || 'none';
    const hy = kind === 'blob' ? 0.22 : 0.15;
    if (hat === 'cap') { add(new T.SphereGeometry(0.17, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), a, 0, hy - 0.04, 0, parts.head); add(new T.BoxGeometry(0.16, 0.02, 0.12), a, 0, hy - 0.03, 0.15, parts.head); }
    if (hat === 'cone') add(new T.ConeGeometry(0.12, 0.3, 16), a, 0, hy + 0.12, 0, parts.head);
    if (hat === 'tophat') { add(new T.CylinderGeometry(0.11, 0.11, 0.22, 16), '#212529', 0, hy + 0.1, 0, parts.head); add(new T.CylinderGeometry(0.18, 0.18, 0.02, 16), '#212529', 0, hy, 0, parts.head); }
    if (hat === 'crown') add(new T.CylinderGeometry(0.12, 0.12, 0.08, 8, 1, true), '#fcc419', 0, hy + 0.02, 0, parts.head);
    if (hat === 'bow') { add(new T.ConeGeometry(0.05, 0.1, 8), a, -0.06, hy + 0.02, 0, parts.head).rotation.z = 1.4; add(new T.ConeGeometry(0.05, 0.1, 8), a, 0.06, hy + 0.02, 0, parts.head).rotation.z = -1.4; }
    if (hat === 'helmet') add(new T.SphereGeometry(0.2, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), a, 0, hy - 0.08, 0, parts.head);
    if (hat === 'hood') add(new T.SphereGeometry(0.21, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.6), a, 0, 0.0, -0.03, parts.head);
    const sh = new T.Mesh(new T.CircleGeometry(0.35 * (kind === 'human' || kind === 'robot' ? s2 : hgt / 0.9), 20), new T.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.22, depthWrite: false }));
    sh.rotation.x = -Math.PI / 2; sh.position.y = 0.01; root.add(sh);
    return { root, rig, parts, kind };
  }
  function animateChar(ch, spec, k, tsec) {
    const action = spec.action || 'idle';
    const from = vec(spec.from, [0, 0]), to = vec(spec.to, from);
    const moving = ['walk', 'run'].includes(action) || (from[0] !== to[0] || from[1] !== to[1]);
    const e = moving ? k : 0;
    const x = from[0] + (to[0] - from[0]) * e, z = from[1] + (to[1] - from[1]) * e;
    ch.root.position.set(x, 0, z);
    const dx = to[0] - from[0], dz = to[1] - from[1];
    if (moving && Math.hypot(dx, dz) > 0.01) ch.root.rotation.y = Math.atan2(dx, dz) - (ch.root.userData.faceDir === 'x' ? Math.PI / 2 : 0);
    else ch.root.rotation.y = num(spec.turn, 0) * Math.PI / 180;
    const P = ch.parts, sp = action === 'run' ? 14 : 8;
    const sw = Math.sin(tsec * sp);
    ch.rig.position.y = 0; ch.rig.rotation.set(0, 0, 0);
    if (P.legs) P.legs.forEach((l, i) => { l.rotation.x = moving ? sw * (i % 2 ? -0.7 : 0.7) : 0; });
    if (P.arms) P.arms.forEach((a, i) => { a.rotation.set(moving ? sw * (i ? 0.6 : -0.6) : 0, 0, i ? -0.1 : 0.1); });
    if (moving) ch.rig.position.y = Math.abs(Math.cos(tsec * sp)) * 0.05;
    if (action === 'jump') ch.rig.position.y = Math.abs(Math.sin(tsec * 4)) * 0.6;
    if (action === 'wave' && P.arms) { P.arms[1].rotation.z = -2.6; P.arms[1].rotation.x = Math.sin(tsec * 10) * 0.3; }
    if (action === 'point' && P.arms) { P.arms[1].rotation.x = -1.5; }
    if (action === 'dance') { ch.rig.rotation.y = Math.sin(tsec * 4) * 0.5; ch.rig.position.y = Math.abs(Math.sin(tsec * 8)) * 0.12; if (P.arms) { P.arms[0].rotation.z = 2.2 + Math.sin(tsec * 8) * 0.4; P.arms[1].rotation.z = -2.2 - Math.sin(tsec * 8) * 0.4; } }
    if (action === 'fall') { ch.rig.rotation.x = -Math.min(1.5, k * 3); }
    if (action === 'sit') { ch.rig.position.y = -0.35; if (P.legs) P.legs.forEach((l) => { l.rotation.x = -1.4; }); }
    if (action === 'cower') { ch.rig.rotation.x = 0.3; ch.rig.position.y = -0.1; if (P.arms) P.arms.forEach((a, i) => { a.rotation.x = -2.0; a.rotation.z = i ? 0.4 : -0.4; }); }
    if (action === 'talk' || spec.face === 'talking') { if (P.mouth) P.mouth.scale.y = 0.5 + Math.abs(Math.sin(tsec * 12)); if (P.head) P.head.rotation.x = Math.sin(tsec * 4) * 0.06; }
    if (action === 'idle') ch.rig.position.y = Math.sin(tsec * 2) * 0.01;
  }
  function weatherSystem(kind) {
    if (!['rain', 'snow', 'dust', 'sparkles', 'leaves'].includes(kind)) return null;
    const n = kind === 'rain' ? 1500 : 500;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { pos[i * 3] = (Math.random() - 0.5) * 30; pos[i * 3 + 1] = Math.random() * 12; pos[i * 3 + 2] = (Math.random() - 0.5) * 30; }
    const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.BufferAttribute(pos, 3));
    const color = { rain: '#a5d8ff', snow: '#ffffff', dust: '#d4a373', sparkles: '#ffe066', leaves: '#e8590c' }[kind];
    const pts = new T.Points(geo, new T.PointsMaterial({ color, size: kind === 'rain' ? 0.05 : 0.09, transparent: true, opacity: 0.85 }));
    pts.userData = { kind, speed: { rain: 14, snow: 1.2, dust: 0.4, sparkles: 0.6, leaves: 1.5 }[kind] };
    return pts;
  }
  function build(spec) {
    const scene = new T.Scene();
    const time = spec.time || 'day';
    const sky = Array.isArray(spec.sky) ? spec.sky : [];
    const top = col(sky[0], time === 'night' ? '#0b1026' : time === 'dusk' ? '#5f3dc4' : '#4dabf7');
    const bottom = col(sky[1], time === 'night' ? '#2b2f5a' : time === 'dusk' ? '#ff922b' : '#e7f5ff');
    scene.background = skyTexture(top, bottom, time === 'night');
    const fog = num(spec.fog, 0.15, 0, 1);
    if (fog > 0.02) scene.fog = new T.Fog(bottom, 6 + (1 - fog) * 60, 30 + (1 - fog) * 140);
    const light = spec.light || {};
    const lc = col(light.color, time === 'night' ? '#91a7ff' : time === 'dusk' ? '#ffa94d' : '#fff4e0');
    const li = num(light.intensity, 1.1, 0.1, 3);
    scene.add(new T.HemisphereLight(time === 'night' ? '#3b5bdb' : '#ffffff', col(spec.ground, '#8ce99a'), time === 'night' ? 0.5 : 1.0));
    const sun = new T.DirectionalLight(lc, li * 1.6);
    const dir = { left: [-8, 6, 3], right: [8, 6, 3], front: [0, 6, 9], back: [0, 6, -9], top: [0.5, 12, 0.5] }[light.from] || [6, 9, 6];
    sun.position.set(...dir); scene.add(sun);
    const ground = new T.Mesh(new T.PlaneGeometry(300, 300), M(col(spec.ground, '#8ce99a'), { roughness: 1 }));
    ground.rotation.x = -Math.PI / 2; scene.add(ground);
    const movers = [];
    for (const o of (Array.isArray(spec.objects) ? spec.objects : []).slice(0, 18)) {
      const size = vec(o.size, [1, 1, 1]).map((x) => Math.max(0.02, Math.abs(x)));
      const g = prim(String(o.shape || 'box'), col(o.color, '#adb5bd'), size, !!o.glow);
      const p = vec(o.pos, [0, 0, 0]);
      g.position.set(...p);
      const r = vec(o.rot, [0, 0, 0]); g.rotation.set(deg(r[0]), deg(r[1]), deg(r[2]));
      scene.add(g);
      if (o.glow) { const pl = new T.PointLight(col(o.color, '#ffd43b'), 1.5, 8); pl.position.set(p[0], p[1] + size[1], p[2]); scene.add(pl); }
      movers.push({ g, from: p, to: o.move_to ? vec(o.move_to, p) : null, spin: num(o.spin, 0, -720, 720) });
    }
    const chars = (Array.isArray(spec.characters) ? spec.characters : []).slice(0, 5).map((cs) => { const ch = character(cs); scene.add(ch.root); return { ch, cs }; });
    const wx = weatherSystem(spec.weather);
    if (wx) scene.add(wx);
    const cs = spec.camera || {};
    const camera = new T.PerspectiveCamera(num(cs.fov, 40, 10, 90), W / H, 0.05, 500);
    const cFrom = vec(cs.from, [0, 1.6, 6]), cTo = vec(cs.to, cFrom), lFrom = vec(cs.look, [0, 1.1, 0]), lTo = vec(cs.look_to, lFrom);
    const shake = num(cs.shake, 0, 0, 1);
    function update(k, tsec) {
      const e = ease(k);
      camera.position.set(cFrom[0] + (cTo[0] - cFrom[0]) * e, cFrom[1] + (cTo[1] - cFrom[1]) * e, cFrom[2] + (cTo[2] - cFrom[2]) * e);
      if (shake) camera.position.add(new T.Vector3(Math.sin(tsec * 37) * 0.03 * shake, Math.sin(tsec * 41) * 0.03 * shake, 0));
      camera.lookAt(lFrom[0] + (lTo[0] - lFrom[0]) * e, lFrom[1] + (lTo[1] - lFrom[1]) * e, lFrom[2] + (lTo[2] - lFrom[2]) * e);
      for (const m of movers) {
        if (m.to) m.g.position.set(m.from[0] + (m.to[0] - m.from[0]) * e, m.from[1] + (m.to[1] - m.from[1]) * e, m.from[2] + (m.to[2] - m.from[2]) * e);
        if (m.spin) m.g.rotation.y = deg(m.spin) * tsec;
        m.g.traverse((x) => { if (x.userData.water) x.position.y = 0.02 + Math.sin(tsec * 2) * 0.01; });
      }
      for (const { ch, cs: c2 } of chars) animateChar(ch, c2, e, tsec);
      if (wx) {
        const arr = wx.geometry.attributes.position.array;
        for (let i = 1; i < arr.length; i += 3) { arr[i] -= wx.userData.speed * 0.033; if (arr[i] < 0) arr[i] = 12; if (wx.userData.kind === 'leaves' || wx.userData.kind === 'dust') arr[i - 1] += 0.01; }
        wx.geometry.attributes.position.needsUpdate = true;
      }
    }
    return { scene, camera, update, duration: num(spec.duration_s, 4, 1, 12), caption: String(spec.caption || ''), title: String(spec.title || ''), shot: String(spec.shot || '') };
  }
  function composite(s2, k, opts) {
    renderer.render(s2.scene, s2.camera);
    octx.drawImage(glCanvas, 0, 0, W, H);
    const fs = Math.round(H / 22);
    if (s2.caption && s2.caption !== 'none') {
      octx.font = `700 ${fs}px Nunito, sans-serif`; octx.textAlign = 'center'; octx.textBaseline = 'bottom';
      const lines = wrapText(s2.caption, W * 0.86, octx);
      lines.slice(-2).forEach((l, i, arr) => { const y = H - fs * 0.9 - (arr.length - 1 - i) * fs * 1.25; octx.lineWidth = fs / 4; octx.strokeStyle = 'rgba(0,0,0,.85)'; octx.strokeText(l, W / 2, y); octx.fillStyle = '#fff'; octx.fillText(l, W / 2, y); });
    }
    if (s2.title && k < 0.85) { octx.globalAlpha = Math.min(1, (0.85 - k) * 4); octx.font = `700 ${fs * 1.6}px Fredoka, sans-serif`; octx.textAlign = 'center'; octx.textBaseline = 'middle'; octx.fillStyle = '#fff'; octx.strokeStyle = 'rgba(0,0,0,.7)'; octx.lineWidth = fs / 3; octx.strokeText(s2.title, W / 2, H * 0.2); octx.fillText(s2.title, W / 2, H * 0.2); octx.globalAlpha = 1; }
    if (opts && opts.badge) { octx.font = `600 ${Math.round(fs * 0.6)}px JetBrains Mono, monospace`; octx.textAlign = 'left'; octx.textBaseline = 'top'; octx.fillStyle = 'rgba(0,0,0,.5)'; octx.fillRect(8, 8, octx.measureText(opts.badge).width + 12, fs * 0.9); octx.fillStyle = '#fff'; octx.fillText(opts.badge, 14, 12); }
  }
  function wrapText(text, maxW, ctx) {
    const ws = text.split(/\s+/); const lines = []; let cur = '';
    for (const w of ws) { const t2 = cur ? cur + ' ' + w : w; if (ctx.measureText(t2).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t2; }
    if (cur) lines.push(cur);
    return lines;
  }
  function card(title, sub, k) {
    const gr = octx.createLinearGradient(0, 0, W, H); gr.addColorStop(0, '#6c5ce7'); gr.addColorStop(1, '#ff6b4a');
    octx.fillStyle = gr; octx.fillRect(0, 0, W, H);
    octx.globalAlpha = Math.min(1, k * 3, (1 - k) * 3);
    octx.fillStyle = '#fff'; octx.textAlign = 'center'; octx.textBaseline = 'middle';
    octx.font = `700 ${Math.round(H / 10)}px Fredoka, sans-serif`; octx.fillText(title, W / 2, H * 0.45);
    octx.font = `600 ${Math.round(H / 26)}px Nunito, sans-serif`; octx.fillText(sub, W / 2, H * 0.6);
    octx.globalAlpha = 1;
  }
  // a tiny generated music bed (so exported films are not silent)
  function musicBed(mood) {
    try {
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      const dest = ac.createMediaStreamDestination();
      const master = ac.createGain(); master.gain.value = 0.06; master.connect(dest); master.connect(ac.destination);
      const chords = /sad|dark|night|horror|thriller/i.test(mood) ? [[220, 261.6, 329.6], [174.6, 220, 261.6], [196, 246.9, 293.7], [164.8, 207.7, 246.9]] : [[261.6, 329.6, 392], [220, 261.6, 329.6], [174.6, 220, 261.6], [196, 246.9, 293.7]];
      let i = 0;
      const play = () => { const t0 = ac.currentTime; for (const f of chords[i++ % chords.length]) { const o = ac.createOscillator(); const g = ac.createGain(); o.type = 'triangle'; o.frequency.value = f; g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(1, t0 + 0.4); g.gain.linearRampToValueAtTime(0, t0 + 2.4); o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + 2.5); } };
      play();
      const timer = setInterval(play, 2000);
      return { stream: dest.stream, stop: () => { clearInterval(timer); setTimeout(() => ac.close(), 600); } };
    } catch (e) { return null; }
  }
  // play a list of specs in real time on the visible canvas; optionally record to webm
  async function play(specs, opts) {
    opts = opts || {};
    await ensure(opts.aspect);
    const shots = specs.map(build);
    let rec = null, chunks = [], music = null;
    if (opts.record) {
      const stream = out.captureStream(30);
      if (opts.music) { music = musicBed(opts.mood || ''); if (music) for (const tr of music.stream.getAudioTracks()) stream.addTrack(tr); }
      const mime = ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'].find((m) => window.MediaRecorder && MediaRecorder.isTypeSupported(m));
      if (!mime) throw { code: 'no_recorder', message: 'This browser cannot record video.' };
      rec = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 5_000_000 });
      rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
      rec.start(250);
    } else if (opts.music) music = musicBed(opts.mood || '');
    const seq = [];
    if (opts.titleCard) seq.push({ card: true, title: opts.titleCard, sub: opts.subCard || 'Previz by Robo Film Studio', duration: 2.4 });
    shots.forEach((s2, i) => seq.push({ shot: s2, i, duration: s2.duration }));
    if (opts.titleCard) seq.push({ card: true, title: 'The End', sub: 'Made with Claude in Robo Film Studio', duration: 2 });
    try {
      for (const item of seq) {
        if (opts.signal && opts.signal.aborted) break;
        opts.onShot && item.shot && opts.onShot(item.i);
        await new Promise((resolve) => {
          const t0 = performance.now();
          const step = () => {
            if (opts.signal && opts.signal.aborted) return resolve();
            const tsec = (performance.now() - t0) / 1000;
            const k = Math.min(1, tsec / item.duration);
            if (item.card) card(item.title, item.sub, k);
            else { item.shot.update(k, tsec); composite(item.shot, k, { badge: opts.badges ? item.shot.shot : null }); }
            opts.onProgress && opts.onProgress(item, k);
            if (k >= 1) return resolve();
            requestAnimationFrame(step);
          };
          step();
        });
      }
    } finally {
      if (music) music.stop();
    }
    if (rec) {
      await new Promise((r) => { rec.onstop = r; rec.stop(); });
      return new Blob(chunks, { type: 'video/webm' });
    }
    return null;
  }
  async function still(spec, aspect, at) {
    await ensure(aspect);
    const s2 = build(spec);
    s2.update(at == null ? 0 : at, (at || 0) * s2.duration);
    composite(s2, at || 0);
    return new Promise((res) => out.toBlob((b) => res(b), 'image/png'));
  }
  return { ensure, play, still, canvas: () => out, schema: PREVIZ_SCHEMA };
})();
