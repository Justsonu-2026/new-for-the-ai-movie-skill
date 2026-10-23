// ---------- the 3D studio (three.js): a coordinator's cabin and one room per robot along a hallway ----------
const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/+esm';
const THREE_ADDON = (p) => `https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/${p}/+esm`;
const RW = 8, RD = 8, HALL = 5, WH = 3.0, GAP = 0.3;
const WORKERS = STAGES.map((x) => x.robot).filter((r, i, a) => r !== COORD && a.indexOf(r) === i);
// pipeline order alternates north/south down the hallway
const ROOM3D = {};
WORKERS.forEach((id, k) => { ROOM3D[id] = { side: k % 2 ? 1 : -1, slot: Math.floor(k / 2) }; });
const SCREENING = { side: 1, slot: 9 };

// job-themed furniture for each robot's room, in room-local coords (door at +z, back wall at -z)
const DECOR = {
  'story-writer': [['shelf', -3.4, -1.5, Math.PI / 2], ['shelf', -3.4, 1.0, Math.PI / 2], ['armchair', 2.6, 1.6, -2.4], ['books', 2.9, -3.2], ['pencil', 3.1, 2.8]],
  'screenwriter': [['corkboard', 0, -3.85, 0], ['cabinet', 3.3, -3.2], ['books', -3.0, 2.8], ['plant', -3.2, -3.2]],
  'character-designer': [['mannequin', -2.8, -2.6], ['mannequin', -2.8, 0.2], ['easel', 2.7, 1.2, -0.8], ['plant', 3.3, -3.3]],
  'production-designer': [['blueprint', 2.6, 1.0], ['modelhouse', -2.4, 0.8], ['shelf', 3.4, -2.0, -Math.PI / 2], ['plant', -3.3, -3.3]],
  'visual-style-designer': [['swatches', 0, -3.85, 0], ['easel', -2.6, 1.0, 0.7], ['paint', 2.8, 1.8], ['plant', 3.3, -3.3]],
  'film-director': [['dirchair', 2.4, 1.2, -2.6], ['spotlight', -3.0, -3.0], ['clapper', -2.6, 2.4], ['plant', 3.3, -3.3]],
  'action-director': [['bag', 2.6, 0.8], ['mat', -1.8, 1.4], ['dummy', -2.9, -1.6], ['plant', 3.3, -3.3]],
  'animation-director': [['easel', -2.6, 0.6, 0.7], ['ballrig', 2.4, 1.0], ['shelf', 3.4, -2.0, -Math.PI / 2]],
  'cinematographer': [['tripod', 2.4, 1.2, -2.4], ['lightstand', -2.9, 1.8], ['lightstand', -3.0, -2.8], ['track', 0.6, 2.6]],
  'script-supervisor': [['clock', 0, -3.85, 0], ['cabinet', -3.3, -3.0], ['cabinet', -3.3, -1.8], ['corkboard', 3.85, 0, -Math.PI / 2]],
  'storyboard-artist': [['storywall', 0, -3.85, 0], ['easel', 2.6, 1.0, -0.7], ['plant', -3.3, -3.3]],
  'image-prompt-engineer': [['framewall', 0, -3.85, 0], ['bigscreen', 3.85, 0, -Math.PI / 2], ['plant', -3.3, -3.3]],
  'video-prompt-engineer': [['projector', -2.4, 1.2], ['bigscreen', 3.85, 0, -Math.PI / 2], ['reels', -3.0, -3.0]],
  'voice-director': [['booth', -2.4, 0.4], ['speaker', 3.2, -3.2], ['plant', 3.3, 2.6]],
  'music-director': [['piano', 2.3, 0.6], ['speaker', -3.2, -3.2], ['speaker', 3.2, -3.2], ['notes', -2.4, -2.6]],
  'sound-designer': [['console', 2.3, 0.8], ['speaker', -3.2, -3.2], ['foley', -2.6, 1.6]],
  'vfx-supervisor': [['greenscreen', 0, -3.85, 0], ['bigscreen', 3.85, 0, -Math.PI / 2], ['lightstand', -3.0, 1.8]],
  'film-editor': [['bigscreen', -3.85, 0, Math.PI / 2], ['reels', 3.0, -3.0], ['reels', 3.0, 1.8], ['plant', -3.3, 3.0]],
  'quality-control': [['checkboard', 0, -3.85, 0], ['trafficlight', 3.0, 1.6], ['magnifier', -2.6, 1.6]],
};

const World = (() => {
  let RoundedBox = null, composer = null, bloom = null, sun = null, hd = true;
  let T = null, renderer, scene, cam, feedCam, tvTarget, tvMat, clock, root, overlay, canvas;
  let speed = 1, ready = false, mode = 'seat', follow = true;
  const bots = {};
  const rooms = {};
  const texCache = {};
  const particles = [];
  let boardTex = null, boardCanvas = null, boardStages = [];
  let shot = { type: 'cabin', a: null, b: null, t0: 0, room: null };
  let topView = { x: 38, z: 0, h: 72 };
  let roomView = COORD;
  let clickCb = null;
  let flashEl = null;
  let dusty = null;
  let lastTv = 0;
  let crates = 0;
  let animated = null;
  let tvMesh = null;
  let modeFresh = false;

  // ---------- helpers ----------
  const C = (hex) => new T.Color(hex);
  const matCache = {};
  // glossy toy-like plastic for most things; the room environment map gives soft reflections
  const mat = (color, extra) => {
    const key = !extra && typeof color === 'string' ? color : null;
    if (key && matCache[key]) return matCache[key];
    const m = new T.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.05, envMapIntensity: 0.7, ...(extra || {}) });
    if (key) matCache[key] = m;
    return m;
  };
  const glow = (color, k) => new T.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: k || 2.2, roughness: 0.4 });
  function mesh(geo, material, x, y, z, parent) {
    const m = new T.Mesh(geo, material);
    m.position.set(x || 0, y || 0, z || 0);
    (parent || scene).add(m);
    return m;
  }
  // rounded boxes everywhere (falls back to sharp boxes if the add-on failed to load)
  function boxGeo(w, h, d) {
    if (!RoundedBox) return new T.BoxGeometry(w, h, d);
    const r = Math.min(0.06, w / 4, h / 4, d / 4);
    return r < 0.012 ? new T.BoxGeometry(w, h, d) : new RoundedBox(w, h, d, 2, r);
  }
  const boxM = (w, h, d, color, x, y, z, parent) => mesh(boxGeo(w, h, d), typeof color === 'string' ? mat(color) : color, x, y, z, parent);
  function canvasTex(w, hgt, draw, repeat) {
    const c = document.createElement('canvas');
    c.width = w; c.height = hgt;
    draw(c.getContext('2d'), c);
    const t = new T.CanvasTexture(c);
    t.colorSpace = T.SRGBColorSpace;
    t.anisotropy = 8;
    if (repeat) { t.wrapS = t.wrapT = T.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
    return t;
  }
  function emojiTex(e) {
    if (texCache[e]) return texCache[e];
    texCache[e] = canvasTex(128, 128, (g) => { g.font = '96px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(e, 64, 72); });
    return texCache[e];
  }
  function lighten(hex, k) { const c = C(hex); c.lerp(C('#ffffff'), k); return c; }
  const hexOf = (c) => '#' + c.getHexString();
  const darken = (hex, k) => hexOf(C(hex).lerp(C('#1a1020'), k));
  function roomCenter(info) { return { x: info.slot * (RW + GAP) + RW / 2, z: info.side * (HALL / 2 + RD / 2) }; }
  // room-local (lx, lz) → world, door at local +z faces the hallway
  function toWorld(info, lx, lz) { const c = roomCenter(info); const s = -info.side; return { x: c.x + lx * s, z: c.z + lz * s }; }
  const roomYaw = (info) => (info.side < 0 ? 0 : Math.PI);

  // ---------- procedural textures ----------
  const seeded = (n) => { let s2 = n; return () => ((s2 = (s2 * 16807) % 2147483647) / 2147483647); };
  function woodTex(base, rep, seed) {
    const rnd = seeded(seed || 7);
    return canvasTex(512, 512, (g) => {
      const rows = 8, hh = 512 / rows;
      for (let r = 0; r < rows; r++) {
        let x = -rnd() * 300;
        while (x < 512) {
          const len = 180 + rnd() * 220;
          const tone = C(base).offsetHSL(0, (rnd() - 0.5) * 0.06, (rnd() - 0.5) * 0.1);
          g.fillStyle = hexOf(tone); g.fillRect(x, r * hh, len, hh);
          g.strokeStyle = 'rgba(60,30,10,.18)'; g.lineWidth = 1;
          for (let k = 0; k < 5; k++) { g.beginPath(); const y = r * hh + 6 + rnd() * (hh - 12); g.moveTo(x, y); g.bezierCurveTo(x + len * 0.3, y + (rnd() - 0.5) * 8, x + len * 0.7, y + (rnd() - 0.5) * 8, x + len, y); g.stroke(); }
          g.fillStyle = 'rgba(40,20,5,.55)'; g.fillRect(x, r * hh, 2, hh);
          x += len;
        }
        g.fillStyle = 'rgba(40,20,5,.5)'; g.fillRect(0, r * hh, 512, 2);
      }
    }, rep || [2, 2]);
  }
  function herringboneTex() {
    return canvasTex(512, 512, (g) => {
      g.fillStyle = '#8a5a35'; g.fillRect(0, 0, 512, 512);
      const rnd = seeded(3);
      for (let y = -64; y < 576; y += 32) for (let x = -64; x < 576; x += 64) {
        for (const dir of [1, -1]) {
          g.save(); g.translate(x + (dir < 0 ? 32 : 0), y); g.rotate(dir * Math.PI / 4);
          g.fillStyle = hexOf(C('#a86f43').offsetHSL(0, 0, (rnd() - 0.5) * 0.12)); g.fillRect(0, 0, 64, 16);
          g.strokeStyle = 'rgba(50,25,10,.45)'; g.strokeRect(0, 0, 64, 16); g.restore();
        }
      }
    }, [4, 6]);
  }
  const PATTERNS = ['stripes', 'dots', 'chevron', 'diamonds', 'waves', 'stars', 'checks', 'leaves'];
  function wallpaperTex(pattern, bg, fg) {
    return canvasTex(256, 256, (g) => {
      g.fillStyle = bg; g.fillRect(0, 0, 256, 256);
      g.fillStyle = fg; g.strokeStyle = fg; g.lineWidth = 6;
      if (pattern === 'stripes') for (let x = 0; x < 256; x += 64) g.fillRect(x, 0, 22, 256);
      if (pattern === 'dots') for (let y = 0; y < 256; y += 64) for (let x = 0; x < 256; x += 64) { g.beginPath(); g.arc(x + 32 + ((y / 64) % 2) * 32, y + 32, 9, 0, 7); g.fill(); }
      if (pattern === 'chevron') for (let y = 0; y < 256; y += 64) { g.beginPath(); for (let x = 0; x <= 256; x += 64) { g.lineTo(x, y + 40); g.lineTo(x + 32, y + 12); } g.stroke(); }
      if (pattern === 'diamonds') for (let y = 0; y < 256; y += 64) for (let x = 0; x < 256; x += 64) { g.beginPath(); g.moveTo(x + 32, y + 10); g.lineTo(x + 54, y + 32); g.lineTo(x + 32, y + 54); g.lineTo(x + 10, y + 32); g.closePath(); g.globalAlpha = 0.8; g.fill(); g.globalAlpha = 1; }
      if (pattern === 'waves') for (let y = 0; y < 256; y += 42) { g.beginPath(); for (let x = 0; x <= 256; x += 4) g.lineTo(x, y + 20 + Math.sin((x / 256) * Math.PI * 4) * 10); g.stroke(); }
      if (pattern === 'stars') { g.font = '34px sans-serif'; g.textAlign = 'center'; for (let y = 0; y < 256; y += 64) for (let x = 0; x < 256; x += 64) g.fillText('✦', x + 32 + ((y / 64) % 2) * 32, y + 44); }
      if (pattern === 'checks') { g.globalAlpha = 0.55; for (let y = 0; y < 256; y += 32) for (let x = (y / 32) % 2 * 32; x < 256; x += 64) g.fillRect(x, y, 32, 32); g.globalAlpha = 1; }
      if (pattern === 'leaves') for (let y = 0; y < 256; y += 64) for (let x = 0; x < 256; x += 64) { g.beginPath(); g.ellipse(x + 32, y + 32, 9, 20, ((x + y) / 64) % 2 ? 0.7 : -0.7, 0, 7); g.fill(); }
    }, [3, 1.2]);
  }
  function rugTex(c1, c2) {
    return canvasTex(256, 256, (g) => {
      g.clearRect(0, 0, 256, 256);
      [c1, c2, c1, c2, c1].forEach((col, k) => { g.beginPath(); g.arc(128, 128, 126 - k * 22, 0, 7); g.fillStyle = col; g.fill(); });
      g.strokeStyle = 'rgba(255,255,255,.35)'; g.lineWidth = 3; for (let k = 0; k < 24; k++) { g.beginPath(); g.moveTo(128, 128); g.lineTo(128 + Math.cos(k / 24 * 6.283) * 120, 128 + Math.sin(k / 24 * 6.283) * 120); g.stroke(); }
    });
  }
  function carpetTex() {
    return canvasTex(256, 256, (g) => {
      g.fillStyle = '#7a1f2b'; g.fillRect(0, 0, 256, 256);
      g.fillStyle = '#e8b04a'; g.fillRect(0, 0, 256, 14); g.fillRect(0, 242, 256, 14);
      g.fillStyle = '#5c1520'; for (let x = 0; x < 256; x += 32) { g.beginPath(); g.moveTo(x + 16, 60); g.lineTo(x + 32, 128); g.lineTo(x + 16, 196); g.lineTo(x, 128); g.closePath(); g.fill(); }
      g.fillStyle = '#e8b04a'; for (let x = 0; x < 256; x += 32) { g.beginPath(); g.arc(x + 16, 128, 4, 0, 7); g.fill(); }
    }, [12, 1]);
  }
  function nightSkyTex(city) {
    return canvasTex(512, 256, (g) => {
      const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#0b1030'); gr.addColorStop(0.7, '#3b2a6b'); gr.addColorStop(1, '#ff8a5c'); g.fillStyle = gr; g.fillRect(0, 0, 512, 256);
      g.fillStyle = '#fff'; const rnd = seeded(11); for (let k = 0; k < 70; k++) g.fillRect(rnd() * 512, rnd() * 140, 1.5, 1.5);
      g.beginPath(); g.arc(420, 50, 18, 0, 7); g.fillStyle = '#fff6d5'; g.fill();
      if (city) for (let k = 0; k < 24; k++) { const hh = 50 + ((k * 53) % 110); g.fillStyle = ['#141a3a', '#1b2350', '#10142e'][k % 3]; g.fillRect(k * 22, 256 - hh, 20, hh); g.fillStyle = '#ffd36b'; for (let w = 0; w < hh / 14; w++) if (rnd() > 0.4) g.fillRect(k * 22 + 4 + (w % 2) * 8, 256 - hh + 6 + w * 12, 4, 5); }
    });
  }
  function posterTex(emoji, title, c1, c2) {
    return canvasTex(256, 360, (g) => {
      const gr = g.createLinearGradient(0, 0, 256, 360); gr.addColorStop(0, c1); gr.addColorStop(1, c2); g.fillStyle = gr; g.fillRect(0, 0, 256, 360);
      g.strokeStyle = 'rgba(255,255,255,.6)'; g.lineWidth = 6; g.strokeRect(12, 12, 232, 336);
      g.font = '120px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(emoji, 128, 150);
      g.fillStyle = '#fff'; g.font = 'bold 30px Fredoka, sans-serif'; g.fillText(title, 128, 280);
      g.font = '16px Nunito, sans-serif'; g.fillText('A ROBO FILM STUDIO PICTURE', 128, 318);
    });
  }

  // ---------- building ----------
  // a wall segment whose local +z faces the room interior: wallpaper inside, paint outside, wainscot, rails and molding
  function wallSeg(parent, x, z, len, rotY, inner, outer, opts) {
    opts = opts || {};
    const g = new T.Group();
    g.position.set(x, 0, z); g.rotation.y = rotY;
    parent.add(g);
    const H = opts.h || WH;
    const edge = mat('#cdbda5');
    const body = mesh(new T.BoxGeometry(len, H, 0.18), [edge, edge, edge, edge, inner, outer], 0, H / 2, 0, g);
    body.userData.wall = true;
    if (!opts.plain) {
      mesh(new T.BoxGeometry(len, 1.0, 0.03), opts.wainscot || mat('#5b3a29'), 0, 0.5, 0.105, g);
      mesh(new T.BoxGeometry(len, 0.06, 0.06), mat('#d6c4a8'), 0, 1.0, 0.12, g);
      mesh(new T.BoxGeometry(len, 0.14, 0.05), mat('#3b2418'), 0, 0.07, 0.12, g);
    }
    mesh(new T.BoxGeometry(len + 0.02, 0.1, 0.3), mat('#b9a68a'), 0, H + 0.05, 0, g);
    if (opts.outerTrim) mesh(new T.BoxGeometry(len, 0.14, 0.05), mat('#3b2418'), 0, 0.07, -0.12, g);
    return g;
  }
  function windowOn(parent, x, y, z, rotY, w, h2, tex) {
    const g = new T.Group(); g.position.set(x, y, z); g.rotation.y = rotY; parent.add(g);
    mesh(new T.PlaneGeometry(w, h2), new T.MeshBasicMaterial({ map: tex }), 0, 0, 0.11, g);
    const fr = mat('#f3e7d3');
    mesh(new T.BoxGeometry(w + 0.16, 0.1, 0.12), fr, 0, h2 / 2, 0.14, g); mesh(new T.BoxGeometry(w + 0.16, 0.12, 0.2), fr, 0, -h2 / 2, 0.16, g);
    mesh(new T.BoxGeometry(0.1, h2, 0.12), fr, -w / 2, 0, 0.14, g); mesh(new T.BoxGeometry(0.1, h2, 0.12), fr, w / 2, 0, 0.14, g); mesh(new T.BoxGeometry(0.05, h2, 0.08), fr, 0, 0, 0.14, g);
    return g;
  }
  function pendant(parent, x, y, z, color) {
    mesh(new T.CylinderGeometry(0.01, 0.01, 0.9, 6), mat('#2b2b2b'), x, y + 0.45, z, parent);
    const shade = mesh(new T.ConeGeometry(0.42, 0.36, 28, 1, true), mat(color, { side: T.DoubleSide, roughness: 0.4 }), x, y, z, parent);
    mesh(new T.SphereGeometry(0.11, 16, 12), glow('#ffe6a8', 3.2), x, y - 0.14, z, parent);
    return shade;
  }
  function poster(parent, x, y, z, rotY, emoji, title, c1, c2, scale) {
    const s2 = scale || 1;
    const p = mesh(new T.PlaneGeometry(0.85 * s2, 1.2 * s2), new T.MeshStandardMaterial({ map: posterTex(emoji, title, c1, c2), roughness: 0.6 }), x, y, z, parent);
    p.rotation.y = rotY;
    const f = mesh(new T.BoxGeometry(0.93 * s2, 1.28 * s2, 0.03), mat('#2b1d14'), x, y, z, parent); f.rotation.y = rotY; f.translateZ(-0.02);
    return p;
  }
  function plant(parent, x, z, s2) {
    const g = new T.Group(); g.position.set(x, 0, z); g.scale.setScalar(s2 || 1); parent.add(g);
    mesh(new T.CylinderGeometry(0.26, 0.2, 0.45, 20), mat('#d9774b'), 0, 0.22, 0, g);
    mesh(new T.CylinderGeometry(0.24, 0.24, 0.04, 20), mat('#4a2f1f'), 0, 0.44, 0, g);
    const leaf = mat('#3fa34d'), leaf2 = mat('#5cc46a');
    for (let k = 0; k < 9; k++) { const a = k / 9 * Math.PI * 2; const l = mesh(new T.SphereGeometry(0.2, 10, 8), k % 2 ? leaf : leaf2, Math.cos(a) * 0.18, 0.75 + (k % 3) * 0.12, Math.sin(a) * 0.18, g); l.scale.set(0.45, 1.3, 0.25); l.rotation.set(Math.sin(a) * 0.6, a, Math.cos(a) * 0.6); }
    return g;
  }
  function officeChair(parent, x, z, rot, color) {
    const g = new T.Group(); g.position.set(x, 0, z); g.rotation.y = rot || 0; parent.add(g);
    for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2; const leg = mesh(new T.BoxGeometry(0.05, 0.04, 0.32), mat('#2b2d42'), Math.sin(a) * 0.15, 0.06, Math.cos(a) * 0.15, g); leg.rotation.y = a; mesh(new T.SphereGeometry(0.04, 8, 6), mat('#111'), Math.sin(a) * 0.3, 0.04, Math.cos(a) * 0.3, g); }
    mesh(new T.CylinderGeometry(0.035, 0.035, 0.4, 8), mat('#555'), 0, 0.28, 0, g);
    boxM(0.5, 0.1, 0.48, color, 0, 0.5, 0, g);
    boxM(0.48, 0.55, 0.08, color, 0, 0.85, -0.23, g);
    return g;
  }
  function buildRoom(id, info) {
    const R = ROBOTS[id];
    const k = WORKERS.indexOf(id);
    const c = roomCenter(info);
    const g = new T.Group();
    g.position.set(c.x, 0, c.z);
    g.rotation.y = roomYaw(info);
    scene.add(g);
    // floor
    const floor = mesh(new T.PlaneGeometry(RW, RD), new T.MeshStandardMaterial({ map: woodTex(['#b07a4f', '#9c6b45', '#c08a5a', '#8d5f3e'][k % 4], [2, 2], k + 3), roughness: 0.55, envMapIntensity: 0.6 }), 0, 0.01, 0, g);
    floor.rotation.x = -Math.PI / 2; floor.userData.room = id; floor.userData.floor = true;
    const rug = mesh(new T.CircleGeometry(1.7, 48), new T.MeshStandardMaterial({ map: rugTex(darken(R.accent, 0.15), darken(R.color, 0.25)), roughness: 1, envMapIntensity: 0.3 }), 0.4, 0.02, 1.0, g);
    rug.rotation.x = -Math.PI / 2; rug.userData.floor = true;
    // walls: wallpaper in the robot's colours, darker wainscot, white trims
    const paper = new T.MeshStandardMaterial({ map: wallpaperTex(PATTERNS[k % PATTERNS.length], hexOf(lighten(R.color, 0.62)), hexOf(lighten(R.color, 0.32))), roughness: 0.85, envMapIntensity: 0.4 });
    const outside = mat('#cbb89c', { roughness: 0.9 });
    const hallSide = mat('#d9c7aa', { roughness: 0.9 });
    const wains = mat(darken(R.accent, 0.35), { roughness: 0.6 });
    wallSeg(g, 0, -RD / 2, RW, 0, paper, outside, { wainscot: wains });
    wallSeg(g, -RW / 2, 0, RD, Math.PI / 2, paper, outside, { wainscot: wains });
    wallSeg(g, RW / 2, 0, RD, -Math.PI / 2, paper, outside, { wainscot: wains });
    const seg = (RW - 2.2) / 2;
    for (const sgn of [-1, 1]) wallSeg(g, sgn * (1.1 + seg / 2), RD / 2, seg, Math.PI, paper, hallSide, { wainscot: wains, outerTrim: true });
    // lintel and door frame
    boxM(2.4, WH - 2.45, 0.22, '#cdbda5', 0, 2.45 + (WH - 2.45) / 2, RD / 2, g);
    for (const sgn of [-1, 1]) boxM(0.12, 2.45, 0.28, '#6b4430', sgn * 1.1, 1.225, RD / 2, g);
    boxM(2.32, 0.12, 0.28, '#6b4430', 0, 2.45, RD / 2, g);
    // window on the outside wall, posters, a pendant lamp
    windowOn(g, 2.2, 1.85, -RD / 2, 0, 1.7, 1.15, nightSkyTex(false));
    poster(g, -2.4, 1.85, -RD / 2 + 0.13, 0, R.emoji, R.name.toUpperCase(), R.color, R.accent);
    const lampShade = pendant(g, 0.3, WH - 0.2, 0.2, R.accent);
    // glowing door sign facing the hallway
    const signTex = canvasTex(512, 128, (x) => {
      const gr = x.createLinearGradient(0, 0, 512, 0); gr.addColorStop(0, R.color); gr.addColorStop(1, R.accent); x.fillStyle = gr; x.fillRect(0, 0, 512, 128);
      x.fillStyle = 'rgba(20,16,40,.82)'; x.fillRect(8, 8, 496, 112);
      x.font = '64px "Apple Color Emoji","Segoe UI Emoji",sans-serif'; x.textBaseline = 'middle'; x.fillText(R.emoji, 22, 66);
      x.fillStyle = '#ffffff'; x.font = 'bold 46px Fredoka, Nunito, sans-serif'; x.fillText(R.name, 110, 50);
      x.font = '28px Nunito, sans-serif'; x.fillStyle = hexOf(lighten(R.color, 0.4)); x.fillText(R.job, 112, 94);
    });
    const signBox = boxM(2.5, 0.68, 0.08, '#1d1730', 0, WH + 0.5, RD / 2 + 0.05, g);
    void signBox;
    const sign = mesh(new T.PlaneGeometry(2.4, 0.6), new T.MeshStandardMaterial({ map: signTex, emissive: '#ffffff', emissiveMap: signTex, emissiveIntensity: 0.9 }), 0, WH + 0.5, RD / 2 + 0.1, g);
    sign.userData.room = id;
    // wall sconces in the hallway
    for (const sgn of [-1, 1]) { const sc = mesh(new T.SphereGeometry(0.11, 14, 10), glow('#ffd38a', 2.6), sgn * 2.6, 2.1, RD / 2 + 0.16, g); sc.scale.set(1, 1.3, 0.6); }
    // desk with drawers, a live monitor, keyboard, mug and a desk lamp
    const desk = new T.Group();
    desk.position.set(0, 0, -1.6);
    g.add(desk);
    boxM(2.4, 0.08, 1.0, '#a8744a', 0, 0.78, 0, desk);
    boxM(0.55, 0.74, 0.92, darken(R.accent, 0.2), 0.88, 0.37, 0, desk);
    for (let d = 0; d < 3; d++) { boxM(0.5, 0.2, 0.02, darken(R.accent, 0.05), 0.88, 0.18 + d * 0.24, 0.47, desk); boxM(0.14, 0.025, 0.03, '#d9d9d9', 0.88, 0.2 + d * 0.24, 0.49, desk); }
    for (const [dx, dz] of [[-1.12, -0.42], [-1.12, 0.42]]) boxM(0.07, 0.74, 0.07, '#6b4430', dx, 0.37, dz, desk);
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 256; screenCanvas.height = 160;
    const screenTex = new T.CanvasTexture(screenCanvas);
    screenTex.colorSpace = T.SRGBColorSpace;
    boxM(1.1, 0.7, 0.07, '#1d1f2b', 0, 1.22, -0.25, desk);
    const scrMat = new T.MeshStandardMaterial({ map: screenTex, emissive: '#ffffff', emissiveMap: screenTex, emissiveIntensity: 0.85 });
    const screenFront = mesh(new T.PlaneGeometry(1.0, 0.6), scrMat, 0, 1.22, -0.29, desk); screenFront.rotation.y = Math.PI;
    mesh(new T.PlaneGeometry(1.0, 0.6), scrMat, 0, 1.22, -0.21, desk);
    boxM(0.08, 0.3, 0.08, '#1d1f2b', 0, 0.96, -0.25, desk); boxM(0.36, 0.03, 0.22, '#1d1f2b', 0, 0.83, -0.25, desk);
    boxM(0.55, 0.03, 0.18, '#e9ecef', 0.1, 0.835, 0.12, desk);
    mesh(new T.CylinderGeometry(0.06, 0.05, 0.12, 16), mat(R.accent), -0.85, 0.88, 0.22, desk);
    const paperSheet = boxM(0.32, 0.012, 0.42, '#ffffff', -0.5, 0.83, 0.1, desk);
    paperSheet.visible = false;
    const dl = new T.Group(); dl.position.set(-1.0, 0.82, -0.2); desk.add(dl);
    mesh(new T.CylinderGeometry(0.1, 0.12, 0.03, 16), mat('#2b2d42'), 0, 0.015, 0, dl);
    const arm = mesh(new T.CylinderGeometry(0.015, 0.015, 0.45, 8), mat('#2b2d42'), 0.06, 0.24, 0, dl); arm.rotation.z = -0.3;
    const head = mesh(new T.ConeGeometry(0.11, 0.16, 16, 1, true), mat(R.color, { side: T.DoubleSide }), 0.15, 0.44, 0, dl); head.rotation.z = 0.8;
    mesh(new T.SphereGeometry(0.04, 10, 8), glow('#fff3c4', 2.5), 0.17, 0.4, 0, dl);
    officeChair(g, -1.3, -2.75, 0.5, R.color);
    for (const d of DECOR[id] || []) decor(d, g, R);
    rooms[id] = { g, info, screenCanvas, screenTex, paper: paperSheet, shade: lampShade, lastScreen: '' };
    drawScreen(id, '', 0);
  }
  function decor([kind, lx, lz, rot], g, R) {
    const grp = new T.Group();
    grp.position.set(lx, 0, lz);
    grp.rotation.y = rot || 0;
    g.add(grp);
    const B = (w, h, d, col, x, y, z) => boxM(w, h, d, col, x, y, z, grp);
    const cyl = (rt, rb, h, col, x, y, z) => mesh(new T.CylinderGeometry(rt, rb, h, 24), mat(col), x, y, z, grp);
    const sph = (r, col, x, y, z) => mesh(new T.SphereGeometry(r, 20, 14), mat(col), x, y, z, grp);
    switch (kind) {
      case 'shelf': B(1.8, 2.0, 0.42, '#8a5a35', 0, 1.0, 0); for (let r = 0; r < 4; r++) { B(1.7, 0.04, 0.38, '#6b4430', 0, 0.12 + r * 0.48, 0.02); for (let k = 0; k < 7; k++) B(0.16, 0.32 + (k % 3) * 0.04, 0.28, ['#c92a2a', '#1971c2', '#e8890c', '#2f9e44', '#862e9c', '#f2b705', '#495057'][(k + r) % 7], -0.7 + k * 0.23, 0.3 + r * 0.48, 0.05); } break;
      case 'armchair': B(1.0, 0.45, 0.9, R.accent, 0, 0.25, 0); B(1.0, 0.75, 0.22, R.accent, 0, 0.62, -0.38); B(0.2, 0.42, 0.9, darken(R.accent, 0.2), -0.45, 0.6, 0); B(0.2, 0.42, 0.9, darken(R.accent, 0.2), 0.45, 0.6, 0); B(0.7, 0.12, 0.6, lighten(R.accent, 0.3).getStyle(), 0, 0.52, 0.05); break;
      case 'books': for (let k = 0; k < 5; k++) B(0.5, 0.1, 0.36, ['#c92a2a', '#1971c2', '#e8890c', '#2f9e44', '#862e9c'][k], 0, 0.05 + k * 0.1, 0).rotation.y = k * 0.3; break;
      case 'pencil': cyl(0.12, 0.12, 2.0, '#f2b705', 0, 1.0, 0); mesh(new T.ConeGeometry(0.12, 0.35, 20), mat('#f1d6a8'), 0, 2.17, 0, grp); cyl(0.125, 0.125, 0.18, '#ff8fab', 0, 0.09, 0); grp.rotation.z = 0.15; break;
      case 'corkboard': { B(2.6, 1.4, 0.08, '#b07a4f', 0, 1.75, 0); for (let k = 0; k < 9; k++) { const n = B(0.4, 0.28, 0.02, ['#fff3bf', '#d0ebff', '#ffe3e3'][k % 3], -0.9 + (k % 3) * 0.9, 1.4 + Math.floor(k / 3) * 0.38, 0.06); n.rotation.z = (k % 2 ? 0.08 : -0.06); sph(0.025, '#e03131', -0.9 + (k % 3) * 0.9, 1.52 + Math.floor(k / 3) * 0.38, 0.08); } break; }
      case 'cabinet': B(0.7, 1.3, 0.6, '#7d8597', 0, 0.65, 0); for (let k = 0; k < 3; k++) B(0.5, 0.03, 0.02, '#343a40', 0, 0.3 + k * 0.4, 0.31); break;
      case 'plant': plant(grp, 0, 0, 1); break;
      case 'mannequin': cyl(0.25, 0.3, 0.05, '#343a40', 0, 0.03, 0); cyl(0.03, 0.03, 0.8, '#343a40', 0, 0.45, 0); { const t = cyl(0.22, 0.28, 0.7, R.color, 0, 1.15, 0); t.scale.z = 0.7; } sph(0.16, '#e9ecef', 0, 1.65, 0); cyl(0.3, 0.12, 0.35, R.accent, 0, 0.9, 0); break;
      case 'easel': { const l = (x, rz) => { const m = B(0.06, 1.8, 0.06, '#8a5a35', x, 0.9, 0); m.rotation.z = rz; }; l(-0.35, 0.15); l(0.35, -0.15); B(1.1, 0.8, 0.04, '#fffaf0', 0, 1.25, 0.08); B(0.4, 0.3, 0.01, R.color, -0.15, 1.3, 0.11); B(0.3, 0.2, 0.01, R.accent, 0.25, 1.1, 0.11); break; }
      case 'blueprint': B(1.6, 0.06, 1.0, '#a5d8ff', 0, 0.9, 0); for (const [dx, dz] of [[-0.7, -0.4], [0.7, -0.4], [-0.7, 0.4], [0.7, 0.4]]) B(0.06, 0.9, 0.06, '#495057', dx, 0.45, dz); B(1.3, 0.005, 0.8, '#1c64c4', 0, 0.935, 0); break;
      case 'modelhouse': B(1.0, 0.6, 0.6, '#e9ecef', 0, 0.6, 0); B(0.06, 0.6, 0.06, '#495057', 0, 0.3, 0); { const roof = mesh(new T.ConeGeometry(0.6, 0.4, 4), mat('#e8590c'), 0, 1.1, 0, grp); roof.rotation.y = Math.PI / 4; roof.scale.set(1.2, 1, 0.8); } break;
      case 'swatches': ['#ff6b6b', '#fcc419', '#51cf66', '#339af0', '#cc5de8', '#ff922b', '#20c997'].forEach((col, k) => B(0.5, 0.9, 0.04, col, -1.65 + k * 0.55, 1.75, 0)); break;
      case 'paint': ['#e03131', '#1971c2', '#fcc419'].forEach((col, k) => cyl(0.18, 0.18, 0.3, col, k * 0.4 - 0.4, 0.15, 0)); break;
      case 'dirchair': B(0.8, 0.06, 0.6, '#212529', 0, 0.6, 0); B(0.8, 0.5, 0.05, '#c92a2a', 0, 1.0, -0.3); for (const dx of [-0.38, 0.38]) { const a = B(0.05, 0.9, 0.05, '#8a5a35', dx, 0.45, 0.2); a.rotation.x = 0.2; const b = B(0.05, 0.9, 0.05, '#8a5a35', dx, 0.45, -0.2); b.rotation.x = -0.2; } break;
      case 'spotlight': cyl(0.04, 0.04, 1.8, '#343a40', 0, 0.9, 0); { const hd = cyl(0.22, 0.14, 0.4, '#343a40', 0, 1.9, 0.1); hd.rotation.x = 1.0; mesh(new T.CircleGeometry(0.13, 20), glow('#fff3bf', 3), 0, 1.78, 0.28, grp).rotation.x = 1.0 - Math.PI / 2; const pool = mesh(new T.CircleGeometry(1.4, 32), new T.MeshBasicMaterial({ color: '#fff3bf', transparent: true, opacity: 0.22, depthWrite: false }), 1.2, 0.03, 1.4, grp); pool.rotation.x = -Math.PI / 2; pool.userData.noShadow = true; } break;
      case 'clapper': B(0.6, 0.4, 0.05, '#212529', 0, 0.85, 0); { const top = B(0.62, 0.1, 0.05, '#f8f9fa', 0, 1.1, 0); top.rotation.z = 0.25; } B(0.6, 0.8, 0.6, '#495057', 0, 0.4, 0.1); break;
      case 'bag': cyl(0.02, 0.02, 0.6, '#868e96', 0, 2.3, 0); { const bag = cyl(0.3, 0.3, 1.2, '#c92a2a', 0, 1.4, 0); bag.userData.swing = true; } break;
      case 'mat': { const m = mesh(new T.PlaneGeometry(2.4, 1.6), mat('#3b5bdb'), 0, 0.025, 0, grp); m.rotation.x = -Math.PI / 2; } break;
      case 'dummy': cyl(0.25, 0.3, 0.1, '#495057', 0, 0.05, 0); cyl(0.2, 0.25, 1.1, '#e0b88a', 0, 0.7, 0); sph(0.2, '#e0b88a', 0, 1.45, 0); break;
      case 'ballrig': cyl(0.03, 0.03, 1.6, '#868e96', -0.5, 0.8, 0); { const ball = sph(0.18, '#ff922b', 0.2, 0.5, 0); ball.userData.bounce = true; } break;
      case 'tripod': { for (const a of [0, 2.1, 4.2]) { const l = B(0.04, 1.4, 0.04, '#343a40', Math.sin(a) * 0.25, 0.65, Math.cos(a) * 0.25); l.rotation.set(Math.cos(a) * 0.25, 0, -Math.sin(a) * 0.25); } B(0.5, 0.35, 0.3, '#212529', 0, 1.45, 0); const lens = cyl(0.12, 0.14, 0.3, '#495057', 0, 1.45, 0.28); lens.rotation.x = Math.PI / 2; const rec = mesh(new T.SphereGeometry(0.035, 10, 8), glow('#ff4d4d', 3), -0.18, 1.6, 0.16, grp); rec.userData.blink = true; } break;
      case 'lightstand': cyl(0.03, 0.03, 1.9, '#343a40', 0, 0.95, 0); B(0.74, 0.54, 0.16, '#2b2d42', 0, 2.0, -0.02); boxM(0.66, 0.46, 0.02, glow('#ffe7b8', 0.55), 0, 2.0, 0.07, grp); break;
      case 'track': for (const dx of [-0.25, 0.25]) B(0.05, 0.05, 3.0, '#868e96', dx, 0.03, 0); B(0.7, 0.15, 0.6, '#495057', 0, 0.12, -0.6); break;
      case 'clock': { const face = cyl(0.5, 0.5, 0.06, '#fffaf0', 0, 1.95, 0); face.rotation.x = Math.PI / 2; const rim = mesh(new T.TorusGeometry(0.5, 0.04, 10, 40), mat('#2b2d42'), 0, 1.95, 0.02, grp); void rim; const hand = B(0.04, 0.38, 0.02, '#e03131', 0, 1.95, 0.05); hand.userData.clock = true; hand.geometry.translate(0, 0.15, 0); } break;
      case 'storywall': for (let k = 0; k < 8; k++) { B(0.75, 0.45, 0.03, '#fffaf0', -1.35 + (k % 4) * 0.9, 1.45 + Math.floor(k / 4) * 0.6, 0); B(0.3, 0.18, 0.01, k % 2 ? R.color : R.accent, -1.4 + (k % 4) * 0.9, 1.45 + Math.floor(k / 4) * 0.6, 0.02); } break;
      case 'framewall': for (let k = 0; k < 5; k++) { B(0.6, 0.45, 0.04, '#2b2d42', -1.6 + k * 0.8, 1.75 + (k % 2) * 0.3, 0); B(0.5, 0.35, 0.01, ['#ffa8a8', '#74c0fc', '#8ce99a', '#ffe066', '#e599f7'][k], -1.6 + k * 0.8, 1.75 + (k % 2) * 0.3, 0.03); } break;
      case 'bigscreen': { B(2.4, 1.4, 0.08, '#1d1f2b', 0, 1.7, 0); const sc = boxM(2.25, 1.25, 0.01, glow('#4dabf7', 0.9), 0, 1.7, 0.05, grp); sc.userData.glow = true; } break;
      case 'projector': B(0.5, 0.3, 0.5, '#343a40', 0, 0.95, 0); B(0.6, 0.8, 0.6, '#868e96', 0, 0.4, 0); { const l = mesh(new T.CylinderGeometry(0.1, 0.1, 0.2, 16), glow('#fff3bf', 2), 0, 0.95, 0.3, grp); l.rotation.x = Math.PI / 2; } break;
      case 'reels': for (let k = 0; k < 3; k++) cyl(0.4, 0.4, 0.08, k % 2 ? '#495057' : '#212529', 0, 0.05 + k * 0.09, 0); break;
      case 'booth': { const glass = mesh(new T.BoxGeometry(1.6, 2.2, 1.6), new T.MeshStandardMaterial({ color: '#a5d8ff', transparent: true, opacity: 0.18, roughness: 0.05 }), 0, 1.1, 0, grp); glass.renderOrder = 2; glass.userData.noShadow = true; B(1.7, 0.08, 1.7, '#2b2d42', 0, 2.24, 0); cyl(0.03, 0.03, 1.4, '#343a40', 0, 0.7, 0); sph(0.1, '#adb5bd', 0, 1.45, 0); } break;
      case 'speaker': B(0.55, 1.1, 0.5, '#1d1f2b', 0, 0.55, 0); { const w = cyl(0.17, 0.17, 0.02, '#495057', 0, 0.4, 0.26); w.rotation.x = Math.PI / 2; w.userData.pulse = true; const tw = cyl(0.08, 0.08, 0.02, '#495057', 0, 0.85, 0.26); tw.rotation.x = Math.PI / 2; } break;
      case 'piano': B(1.6, 0.9, 0.7, '#14141c', 0, 0.75, 0); B(1.5, 0.06, 0.25, '#f8f9fa', 0, 1.0, 0.4); for (let k = 0; k < 9; k++) B(0.06, 0.07, 0.15, '#14141c', -0.6 + k * 0.15, 1.04, 0.36); B(1.6, 0.06, 0.3, '#14141c', 0, 0.3, 0.3); B(0.7, 0.45, 0.35, '#14141c', 0, 0.23, 1.0); break;
      case 'notes': { const n = mesh(new T.PlaneGeometry(0.6, 0.6), new T.MeshBasicMaterial({ map: emojiTex('🎵'), transparent: true, side: T.DoubleSide }), 0, 1.6, 0, grp); n.userData.float = true; n.userData.noShadow = true; } break;
      case 'console': B(1.6, 0.8, 0.8, '#343a40', 0, 0.4, 0); { const top = B(1.6, 0.05, 0.8, '#212529', 0, 0.83, 0); top.rotation.x = -0.2; for (let k = 0; k < 10; k++) { const f = mesh(new T.BoxGeometry(0.05, 0.05, 0.12), glow(['#ff6b6b', '#ffd43b', '#69db7c', '#4dabf7'][k % 4], 1.5), -0.65 + k * 0.145, 0.9, 0, grp); f.userData.fader = k; } } break;
      case 'foley': sph(0.15, '#8d6e63', -0.2, 0.15, 0); sph(0.15, '#8d6e63', 0.15, 0.15, 0.1); B(0.6, 0.4, 0.4, '#d4a373', 0, 0.2, -0.5); break;
      case 'greenscreen': boxM(4.0, 2.4, 0.04, glow('#2f9e44', 0.35), 0, 1.3, 0, grp); break;
      case 'checkboard': B(2.4, 1.5, 0.06, '#fffaf0', 0, 1.75, 0); for (let k = 0; k < 4; k++) { boxM(0.18, 0.18, 0.02, glow(k < 3 ? '#40c057' : '#fa5252', 0.8), -0.9, 2.25 - k * 0.32, 0.04, grp); B(1.3, 0.06, 0.02, '#adb5bd', -0.05, 2.25 - k * 0.32, 0.04); } break;
      case 'trafficlight': B(0.35, 0.9, 0.3, '#212529', 0, 1.6, 0); cyl(0.04, 0.04, 1.2, '#343a40', 0, 0.6, 0); ['#fa5252', '#fab005', '#40c057'].forEach((col, k) => mesh(new T.SphereGeometry(0.1, 14, 10), glow(col, k === 2 ? 2.5 : 0.25), 0, 1.88 - k * 0.27, 0.15, grp)); break;
      case 'magnifier': { const ring = mesh(new T.TorusGeometry(0.35, 0.05, 12, 30), mat('#495057'), 0, 1.2, 0, grp); ring.rotation.y = 0.5; B(0.08, 0.8, 0.08, '#8a5a35', 0, 0.55, 0); const lens = mesh(new T.CircleGeometry(0.33, 30), new T.MeshStandardMaterial({ color: '#a5d8ff', transparent: true, opacity: 0.35 }), 0, 1.2, 0, grp); lens.rotation.y = 0.5; lens.userData.noShadow = true; } break;
      default:
    }
  }

  function buildCabin() {
    const g = new T.Group();
    scene.add(g);
    const x0 = -15, x1 = -1, z0 = -10.5, z1 = 10.5;
    const fl = mesh(new T.PlaneGeometry(x1 - x0, z1 - z0), new T.MeshStandardMaterial({ map: herringboneTex(), roughness: 0.45, envMapIntensity: 0.8 }), (x0 + x1) / 2, 0.01, 0, g);
    fl.rotation.x = -Math.PI / 2; fl.userData.room = COORD; fl.userData.floor = true;
    const rug = mesh(new T.PlaneGeometry(7, 5), new T.MeshStandardMaterial({ map: canvasTex(256, 256, (x) => { x.fillStyle = '#7b2d26'; x.fillRect(0, 0, 256, 256); x.strokeStyle = '#e8b04a'; x.lineWidth = 10; x.strokeRect(14, 14, 228, 228); x.lineWidth = 3; x.strokeRect(34, 34, 188, 188); x.fillStyle = '#e8b04a'; x.font = '90px serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('✦', 128, 132); }), roughness: 1 }), -8, 0.02, 0, g);
    rug.rotation.x = -Math.PI / 2; rug.userData.floor = true;
    const paper = new T.MeshStandardMaterial({ map: wallpaperTex('diamonds', '#2d2a4a', '#3c3863'), roughness: 0.85 });
    const outside = mat('#cbb89c');
    const wains = mat('#4a2d1f');
    wallSeg(g, (x0 + x1) / 2, z0, x1 - x0, 0, paper, outside, { wainscot: wains });
    wallSeg(g, (x0 + x1) / 2, z1, x1 - x0, Math.PI, paper, outside, { wainscot: wains });
    wallSeg(g, x1, -6.05, 8.9, -Math.PI / 2, paper, mat('#d9c7aa'), { wainscot: wains, outerTrim: true });
    wallSeg(g, x1, 6.05, 8.9, -Math.PI / 2, paper, mat('#d9c7aa'), { wainscot: wains, outerTrim: true });
    boxM(0.24, WH - 2.45, 3.4, '#cdbda5', x1, 2.45 + (WH - 2.45) / 2, 0, g);
    for (const sgn of [-1, 1]) boxM(0.28, 2.45, 0.12, '#6b4430', x1, 1.225, sgn * 1.6, g);
    // the big city window behind the coordinator
    wallSeg(g, x0, 0, 21, Math.PI / 2, paper, outside, { h: 0.7, wainscot: wains, plain: true });
    const city = mesh(new T.PlaneGeometry(21, WH - 0.7), new T.MeshBasicMaterial({ map: nightSkyTex(true) }), x0 - 0.05, 0.7 + (WH - 0.7) / 2, 0, g);
    city.rotation.y = Math.PI / 2;
    for (let k = -4; k <= 4; k++) boxM(0.14, WH - 0.7, 0.14, '#cdbda5', x0 + 0.02, 0.7 + (WH - 0.7) / 2, k * 2.4, g);
    boxM(0.3, 0.16, 21, '#cdbda5', x0 + 0.05, WH, 0, g);
    // executive desk, chair, coffee and nameplate
    const desk = new T.Group(); desk.position.set(-8.2, 0, 0); g.add(desk);
    boxM(1.5, 0.1, 3.6, '#5c3a22', 0, 0.84, 0, desk);
    boxM(1.3, 0.8, 0.12, '#4a2d1f', 0, 0.4, -1.65, desk); boxM(1.3, 0.8, 0.12, '#4a2d1f', 0, 0.4, 1.65, desk); boxM(0.1, 0.62, 3.3, '#4a2d1f', 0.62, 0.47, 0, desk);
    boxM(0.06, 0.4, 3.0, '#7a4b2c', 0.67, 0.5, 0, desk);
    mesh(new T.CylinderGeometry(0.08, 0.06, 0.16, 16), mat('#f6b73c'), 0.1, 0.97, 1.2, desk);
    boxM(0.5, 0.03, 0.35, '#ffffff', 0.15, 0.905, -0.6, desk).rotation.y = 0.2;
    const lampG = new T.Group(); lampG.position.set(-0.2, 0.89, -1.3); desk.add(lampG);
    mesh(new T.CylinderGeometry(0.12, 0.14, 0.04, 16), mat('#c9a227', { metalness: 0.7, roughness: 0.3 }), 0, 0.02, 0, lampG);
    mesh(new T.CylinderGeometry(0.02, 0.02, 0.45, 8), mat('#c9a227', { metalness: 0.7, roughness: 0.3 }), 0, 0.25, 0, lampG);
    mesh(new T.CylinderGeometry(0.1, 0.2, 0.22, 20, 1, true), mat('#2f9e44', { side: T.DoubleSide }), 0, 0.5, 0, lampG);
    mesh(new T.SphereGeometry(0.06, 12, 10), glow('#fff1c1', 2.6), 0, 0.45, 0, lampG);
    const nameTex = canvasTex(512, 128, (x) => { x.fillStyle = '#1d1730'; x.fillRect(0, 0, 512, 128); x.fillStyle = '#ffd43b'; x.font = 'bold 54px Fredoka, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('CAPTAIN CLIPBOARD', 256, 66); });
    const plate = mesh(new T.BoxGeometry(0.08, 0.16, 1.4), [new T.MeshStandardMaterial({ map: nameTex, emissive: '#ffffff', emissiveMap: nameTex, emissiveIntensity: 0.5 }), mat('#1d1730'), mat('#1d1730'), mat('#1d1730'), mat('#1d1730'), mat('#1d1730')], 0.58, 0.97, 0, desk);
    void plate;
    const exec = officeChair(g, -9.9, 0, Math.PI / 2, '#3b2a5e'); exec.scale.setScalar(1.25);
    // the client chair ("you")
    const chair = new T.Group(); chair.position.set(-5.2, 0, 0); g.add(chair);
    boxM(0.85, 0.12, 0.85, '#4263eb', 0, 0.5, 0, chair); boxM(0.12, 0.85, 0.85, '#4263eb', 0.42, 0.95, 0, chair); mesh(new T.CylinderGeometry(0.05, 0.05, 0.45, 8), mat('#495057'), 0, 0.25, 0, chair);
    // the big TV with the live director feed
    tvTarget = new T.WebGLRenderTarget(640, 360);
    tvTarget.texture.colorSpace = T.SRGBColorSpace;
    boxM(0.14, 1.8, 3.1, '#0d0f16', x0 + 0.35, 1.85, 0, g);
    tvMat = new T.MeshBasicMaterial({ map: tvTarget.texture });
    const tv = mesh(new T.PlaneGeometry(2.9, 1.63), tvMat, x0 + 0.43, 1.85, 0, g); tv.rotation.y = Math.PI / 2; tvMesh = tv; tv.userData.noShadow = true;
    const liveTex = canvasTex(256, 64, (x) => { x.fillStyle = '#e03131'; x.fillRect(0, 0, 256, 64); x.fillStyle = '#fff'; x.font = 'bold 40px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('● LIVE FEED', 128, 34); });
    const live = mesh(new T.PlaneGeometry(0.8, 0.2), new T.MeshStandardMaterial({ map: liveTex, emissive: '#ffffff', emissiveMap: liveTex, emissiveIntensity: 1.2 }), x0 + 0.44, 2.88, 0, g); live.rotation.y = Math.PI / 2; live.userData.blink2 = true;
    // mission board (stage progress) on the north wall
    boardCanvas = document.createElement('canvas'); boardCanvas.width = 1024; boardCanvas.height = 512;
    boardTex = new T.CanvasTexture(boardCanvas); boardTex.colorSpace = T.SRGBColorSpace;
    boxM(4.3, 2.2, 0.08, '#cdbda5', -8.2, 1.75, z0 + 0.17, g);
    mesh(new T.PlaneGeometry(4.0, 2.0), new T.MeshStandardMaterial({ map: boardTex, emissive: '#ffffff', emissiveMap: boardTex, emissiveIntensity: 0.25 }), -8.2, 1.75, z0 + 0.23, g);
    drawBoard();
    // a sofa corner, a bookcase, trophies, plants, posters, pendants and the oil bar
    const sofa = new T.Group(); sofa.position.set(-11.5, 0, 8.6); sofa.rotation.y = Math.PI; g.add(sofa);
    boxM(3.0, 0.45, 1.0, '#c2410c', 0, 0.3, 0, sofa); boxM(3.0, 0.75, 0.25, '#c2410c', 0, 0.75, -0.4, sofa); boxM(0.3, 0.6, 1.0, '#9a3412', -1.45, 0.5, 0, sofa); boxM(0.3, 0.6, 1.0, '#9a3412', 1.45, 0.5, 0, sofa);
    for (const dx of [-0.9, 0, 0.9]) boxM(0.8, 0.14, 0.75, '#ea580c', dx, 0.6, 0.05, sofa);
    boxM(1.6, 0.4, 0.8, '#5c3a22', -11.5, 0.2, 6.8, g);
    for (const [x, z] of [[-14.2, -9.7], [-2.0, -9.6], [-2.0, 9.6], [-14.2, 9.7], [-6.5, 9.6]]) plant(g, x, z, 1.2);
    const shelf = new T.Group(); shelf.position.set(-12.5, 0, -10.05); g.add(shelf);
    boxM(2.6, 1.7, 0.42, '#5c3a22', 0, 0.85, 0, shelf);
    for (let k = 0; k < 3; k++) { const cup = mesh(new T.CylinderGeometry(0.15, 0.08, 0.32, 18), new T.MeshStandardMaterial({ color: '#f2c94c', metalness: 0.9, roughness: 0.2 }), -0.8 + k * 0.8, 1.86, 0, shelf); cup.userData.trophy = true; mesh(new T.CylinderGeometry(0.1, 0.12, 0.08, 14), mat('#2b2d42'), -0.8 + k * 0.8, 1.74, 0, shelf); }
    poster(g, -4.5, 1.85, z0 + 0.13, 0, '🎬', 'NOW SHOWING', '#6d28d9', '#db2777');
    poster(g, -12.2, 1.85, z1 - 0.13, Math.PI, '🏆', 'BEST ROBOTS', '#b45309', '#7c2d12');
    poster(g, -4.5, 1.85, z1 - 0.13, Math.PI, '🤖', 'ROBO CREW', '#0e7490', '#1e3a8a');
    for (const [x, z] of [[-12.6, -6.5], [-12.6, 6.5], [-3.6, -6.5], [-3.6, 6.5]]) pendant(g, x, WH - 0.25, z, '#f6b73c');
    const coffee = new T.Group(); coffee.position.set(-3.2, 0, -9.85); g.add(coffee);
    boxM(1.6, 0.95, 0.6, '#3b2a5e', 0, 0.48, 0, coffee); boxM(0.5, 0.6, 0.4, '#1d1f2b', 0, 1.25, 0, coffee); mesh(new T.CylinderGeometry(0.07, 0.06, 0.14, 12), mat('#ffffff'), 0.35, 1.03, 0.1, coffee);
    const oilTex = canvasTex(256, 64, (x) => { x.fillStyle = '#7c3aed'; x.fillRect(0, 0, 256, 64); x.fillStyle = '#fff'; x.font = 'bold 36px sans-serif'; x.textAlign = 'center'; x.fillText('🛢 OIL BAR', 128, 44); });
    mesh(new T.PlaneGeometry(1.2, 0.3), new T.MeshStandardMaterial({ map: oilTex, emissive: '#ffffff', emissiveMap: oilTex, emissiveIntensity: 1.3 }), 0, 1.95, 0.25, coffee);
    rooms[COORD] = { g, info: null };
  }

  function neonSign(text, w, color) {
    const tex = canvasTex(1024, 192, (x) => { x.clearRect(0, 0, 1024, 192); x.font = 'bold 110px Fredoka, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.shadowColor = color; x.shadowBlur = 30; x.fillStyle = '#ffffff'; x.fillText(text, 512, 100); x.shadowBlur = 0; x.strokeStyle = color; x.lineWidth = 6; x.strokeText(text, 512, 100); });
    return new T.Mesh(new T.PlaneGeometry(w, w * 0.1875), new T.MeshStandardMaterial({ map: tex, emissive: '#ffffff', emissiveMap: tex, emissiveIntensity: 2.2, transparent: true, depthWrite: false }));
  }
  function buildHallway() {
    const len = 10 * (RW + GAP) + 1;
    const fl = mesh(new T.PlaneGeometry(len, HALL), new T.MeshStandardMaterial({ map: woodTex('#6d4a35', [len / 6, 1], 99), roughness: 0.5, envMapIntensity: 0.7 }), len / 2 - 1, 0.005, 0);
    fl.rotation.x = -Math.PI / 2; fl.userData.floor = true;
    const runner = mesh(new T.PlaneGeometry(len - 1, 1.8), new T.MeshStandardMaterial({ map: carpetTex(), roughness: 1 }), len / 2 - 0.5, 0.012, 0); runner.rotation.x = -Math.PI / 2; runner.userData.floor = true;
    const ground = mesh(new T.PlaneGeometry(500, 500), new T.MeshStandardMaterial({ color: '#1f2b3a', roughness: 1 }), 40, -0.02, 0); ground.rotation.x = -Math.PI / 2; ground.userData.floor = true;
    // end wall and a neon studio sign over the cabin door
    wallSeg(scene, len - 0.9, 0, HALL, -Math.PI / 2, mat('#2d2a4a'), mat('#cbb89c'), { wainscot: mat('#4a2d1f') });
    poster(scene, len - 1.03, 1.85, 0, -Math.PI / 2, '🍿', 'SCREENING ►', '#9d174d', '#4c1d95', 1.3);
    const neon = neonSign('ROBO FILM STUDIO', 4.6, '#ff4fa3'); neon.position.set(-0.86, WH + 0.75, 0); neon.rotation.y = Math.PI / 2; scene.add(neon); neon.userData.noShadow = true; neon.userData.neon = true;
    // benches, plants and a water cooler along the hallway
    for (let k = 0; k < 10; k++) {
      const x = k * (RW + GAP) + RW;
      if (k % 3 === 1) { const b = new T.Group(); b.position.set(x + 0.15, 0, -1.85); scene.add(b); boxM(1.4, 0.08, 0.45, '#8a5a35', 0, 0.45, 0, b); for (const dx of [-0.6, 0.6]) boxM(0.08, 0.45, 0.4, '#2b2d42', dx, 0.22, 0, b); }
      if (k % 3 === 2) plant(scene, x + 0.15, 1.9, 0.9);
    }
    const cooler = new T.Group(); cooler.position.set(len - 2.2, 0, 1.9); scene.add(cooler);
    boxM(0.5, 1.0, 0.5, '#e9ecef', 0, 0.5, 0, cooler);
    mesh(new T.CylinderGeometry(0.2, 0.2, 0.5, 18), new T.MeshStandardMaterial({ color: '#74c0fc', transparent: true, opacity: 0.6, roughness: 0.05 }), 0, 1.25, 0, cooler);
    // the screening room at the far end of the south side
    const info = SCREENING, c = roomCenter(info);
    const g = new T.Group(); g.position.set(c.x, 0, c.z); g.rotation.y = roomYaw(info); scene.add(g);
    const sfl = mesh(new T.PlaneGeometry(RW, RD), new T.MeshStandardMaterial({ map: carpetTex(), roughness: 1 }), 0, 0.01, 0, g); sfl.rotation.x = -Math.PI / 2; sfl.userData.floor = true;
    const velvet = mat('#4c1d95', { roughness: 0.9 });
    wallSeg(g, 0, -RD / 2, RW, 0, velvet, mat('#cbb89c'), { wainscot: mat('#2e1065') });
    wallSeg(g, -RW / 2, 0, RD, Math.PI / 2, velvet, mat('#cbb89c'), { wainscot: mat('#2e1065') });
    wallSeg(g, RW / 2, 0, RD, -Math.PI / 2, velvet, mat('#cbb89c'), { wainscot: mat('#2e1065') });
    const seg = (RW - 2.2) / 2;
    for (const sgn of [-1, 1]) wallSeg(g, sgn * (1.1 + seg / 2), RD / 2, seg, Math.PI, velvet, mat('#d9c7aa'), { wainscot: mat('#2e1065'), outerTrim: true });
    boxM(2.4, WH - 2.45, 0.22, '#cdbda5', 0, 2.45 + (WH - 2.45) / 2, RD / 2, g);
    boxM(6.2, 2.2, 0.06, glow('#ede9fe', 0.6), 0, 1.6, -RD / 2 + 0.16, g);
    for (let r = 0; r < 2; r++) for (let k = 0; k < 4; k++) { boxM(0.8, 0.45, 0.8, '#b91c1c', -2.4 + k * 1.6, 0.25, 0.8 + r * 1.6, g); boxM(0.8, 0.65, 0.16, '#991b1b', -2.4 + k * 1.6, 0.72, 1.15 + r * 1.6, g); }
    const sn = neonSign('🍿 SCREENING', 2.6, '#a78bfa'); sn.position.set(0, WH + 0.5, RD / 2 + 0.12); g.add(sn); sn.userData.noShadow = true;
    // Dusty the roomba
    const d = new T.Group(); scene.add(d);
    mesh(new T.CylinderGeometry(0.3, 0.32, 0.12, 24), mat('#ced4da', { metalness: 0.3, roughness: 0.3 }), 0, 0.08, 0, d);
    const led = mesh(new T.SphereGeometry(0.05, 10, 8), glow('#51cf66', 3), 0.12, 0.16, 0.12, d);
    led.userData.blink = true;
    dusty = { g: d, x: 2, tx: 20, wait: 0 };
    // stars over the night sky
    const n = 600, pos = new Float32Array(n * 3); const rnd = seeded(5);
    for (let i = 0; i < n; i++) { const a = rnd() * Math.PI * 2, r = 120 + rnd() * 60; pos[i * 3] = 40 + Math.cos(a) * r; pos[i * 3 + 1] = 25 + rnd() * 70; pos[i * 3 + 2] = Math.sin(a) * r; }
    const sg = new T.BufferGeometry(); sg.setAttribute('position', new T.BufferAttribute(pos, 3));
    scene.add(new T.Points(sg, new T.PointsMaterial({ color: '#ffffff', size: 0.6, sizeAttenuation: true, fog: false })));
  }

  function drawBoard() {
    if (!boardCanvas) return;
    const x = boardCanvas.getContext('2d');
    x.fillStyle = '#16142b'; x.fillRect(0, 0, 1024, 512);
    x.fillStyle = '#ffd43b'; x.font = 'bold 54px Fredoka, sans-serif'; x.fillText('MISSION BOARD', 40, 70);
    const n = boardStages.length;
    const done = boardStages.filter((s2) => s2.status === 'done').length;
    x.font = '34px Nunito, sans-serif'; x.fillStyle = '#c9c4ff'; x.fillText(n ? `${done} of ${n} stages done` : 'Waiting for a pitch…', 40, 120);
    boardStages.forEach((s2, k) => {
      const cx = 70 + (k % 11) * 88, cy = 210 + Math.floor(k / 11) * 120;
      x.beginPath(); x.arc(cx, cy, 32, 0, 7);
      x.fillStyle = { done: '#40c057', working: '#fab005', review: '#4dabf7', error: '#fa5252', stale: '#ff922b', skipped: '#3a3a55' }[s2.status] || '#2a2848'; x.fill();
      x.font = '30px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(STAGE[s2.id].icon, cx, cy + 2); x.textAlign = 'left'; x.textBaseline = 'alphabetic';
    });
    boardTex.needsUpdate = true;
  }
  function drawScreen(id, text, level) {
    const r = rooms[id];
    if (!r || !r.screenCanvas) return;
    const x = r.screenCanvas.getContext('2d');
    const R = ROBOTS[id];
    x.fillStyle = '#121626'; x.fillRect(0, 0, 256, 160);
    x.fillStyle = R.color; x.fillRect(0, 0, 256, 22);
    x.fillStyle = '#121626'; x.font = 'bold 14px sans-serif'; x.fillText(`${R.emoji} ${R.name}`, 8, 16);
    if (!text) { x.fillStyle = '#69db7c'; x.font = '15px monospace'; x.fillText('> ready_', 10, 50); }
    else {
      x.fillStyle = '#c5f6fa'; x.font = '13px monospace';
      const words2 = text.split(/\s+/);
      const lines = []; let cur = '';
      for (const w of words2) { if ((cur + ' ' + w).length > 30) { lines.push(cur); cur = w; } else cur += (cur ? ' ' : '') + w; }
      lines.push(cur);
      lines.slice(-7).forEach((l, k) => x.fillText(l, 8, 42 + k * 16));
    }
    x.fillStyle = '#343a40'; x.fillRect(8, 148, 240, 6);
    x.fillStyle = '#69db7c'; x.fillRect(8, 148, 240 * clamp(level || 0, 0, 1), 6);
    r.screenTex.needsUpdate = true;
  }

  // ---------- robots ----------
  function makeAcc(kind, R, b) {
    const add = (geo, color, x, y, z, parent, extra) => mesh(geo, mat(color, extra), x, y, z, parent);
    const head = b.head, hr = b.handR, hl = b.handL;
    switch (kind) {
      case 'headset': add(new T.TorusGeometry(0.36, 0.035, 8, 24, Math.PI), '#2b2d42', 0, 0.05, 0, head); add(new T.SphereGeometry(0.09, 12, 10), '#2b2d42', -0.36, 0.0, 0, head); add(new T.SphereGeometry(0.09, 12, 10), '#2b2d42', 0.36, 0.0, 0, head); add(new T.BoxGeometry(0.22, 0.3, 0.03), '#a0522d', 0, -0.05, 0.08, hl); add(new T.BoxGeometry(0.18, 0.22, 0.01), '#ffffff', 0, -0.05, 0.1, hl); break;
      case 'quill': { add(new T.SphereGeometry(0.3, 16, 8), R.accent, 0.05, 0.3, 0, head).scale.set(1.1, 0.35, 1.1); const q = add(new T.ConeGeometry(0.06, 0.5, 8), '#ffffff', 0, 0.2, 0.05, hr); q.rotation.x = 0.4; break; }
      case 'script': add(new T.BoxGeometry(0.24, 0.32, 0.03), '#ffffff', 0, -0.02, 0.08, hr).rotation.z = 0.2; { const p = add(new T.CylinderGeometry(0.025, 0.025, 0.35, 8), '#fcc419', 0.33, 0.22, 0, head); p.rotation.z = -0.9; } break;
      case 'sketchbook': add(new T.BoxGeometry(0.3, 0.38, 0.04), '#ffffff', 0, -0.05, 0.08, hl); add(new T.ConeGeometry(0.08, 0.2, 4), R.accent, 0.22, 0.32, 0, head).rotation.z = -0.6; add(new T.ConeGeometry(0.08, 0.2, 4), R.accent, 0.38, 0.3, 0, head).rotation.z = 0.6; break;
      case 'hardhat': add(new T.SphereGeometry(0.34, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), '#ffd43b', 0, 0.12, 0, head); add(new T.CylinderGeometry(0.42, 0.42, 0.03, 24), '#fab005', 0, 0.13, 0, head); { const roll = add(new T.CylinderGeometry(0.06, 0.06, 0.5, 12), '#a5d8ff', 0, 0.1, 0.05, hr); roll.rotation.x = 1.0; } break;
      case 'palette': add(new T.SphereGeometry(0.3, 16, 8), '#e03131', -0.05, 0.3, 0, head).scale.set(1.1, 0.35, 1.1); { const pal = add(new T.CylinderGeometry(0.2, 0.2, 0.03, 20), '#f1d6a8', 0, 0, 0.1, hl); pal.rotation.x = Math.PI / 2; } break;
      case 'megaphone': { add(new T.CylinderGeometry(0.33, 0.33, 0.12, 20), '#2b2d42', 0, 0.3, 0, head); const m = add(new T.ConeGeometry(0.14, 0.4, 16, 1, true), '#f8f9fa', 0, 0.15, 0.1, hr, { side: T.DoubleSide }); m.rotation.x = -1.2; break; }
      case 'gloves': b.handL.scale.setScalar(1.8); b.handR.scale.setScalar(1.8); b.handL.material = mat('#e03131'); b.handR.material = mat('#e03131'); add(new T.TorusGeometry(0.33, 0.04, 8, 24), '#e03131', 0, 0.12, 0, head).rotation.x = Math.PI / 2; break;
      case 'flipbook': add(new T.BoxGeometry(0.28, 0.2, 0.06), '#fff3bf', 0, -0.03, 0.08, hl); { const ball = add(new T.SphereGeometry(0.08, 12, 10), '#ff922b', 0.4, 0.4, 0, head); ball.userData.bounce = true; } break;
      case 'camera': add(new T.BoxGeometry(0.34, 0.24, 0.2), '#2b2d42', 0, 0.05, 0.05, hr); { const l = add(new T.CylinderGeometry(0.08, 0.09, 0.16, 12), '#495057', 0, 0.05, 0.22, hr); l.rotation.x = Math.PI / 2; } add(new T.SphereGeometry(0.31, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), R.accent, 0, 0.16, 0, head); break;
      case 'stopwatch': add(new T.CylinderGeometry(0.09, 0.09, 0.04, 16), '#f8f9fa', 0, 0, 0.08, hr).rotation.x = Math.PI / 2; for (const sx of [-0.13, 0.13]) add(new T.TorusGeometry(0.08, 0.015, 6, 16), '#2b2d42', sx, 0.02, 0.36, head); break;
      case 'board': add(new T.BoxGeometry(0.45, 0.32, 0.03), '#ffffff', 0.05, 0.1, 0.1, hr); break;
      case 'wand': { add(new T.ConeGeometry(0.28, 0.6, 20), '#5f3dc4', 0, 0.48, 0, head); add(new T.CylinderGeometry(0.015, 0.015, 0.45, 6), '#2b2d42', 0, 0.15, 0.05, hr).rotation.x = 0.5; const st = mesh(new T.OctahedronGeometry(0.07), glow('#fcc419', 2.5), 0, 0.36, 0.17, hr); st.userData.spin = true; break; }
      case 'filmstrip': add(new T.TorusGeometry(0.33, 0.05, 8, 24), '#2b2d42', 0, 0.62, 0, b.body).rotation.x = Math.PI / 2; add(new T.CylinderGeometry(0.12, 0.12, 0.03, 3), '#ffffff', 0, 0, 0.1, hr).rotation.x = Math.PI / 2; break;
      case 'mic': add(new T.CylinderGeometry(0.03, 0.025, 0.25, 8), '#2b2d42', 0, 0.1, 0.05, hr); add(new T.SphereGeometry(0.07, 12, 10), '#adb5bd', 0, 0.25, 0.05, hr); add(new T.BoxGeometry(0.2, 0.08, 0.04), '#2b2d42', 0, 0.68, 0.33, b.body); break;
      case 'baton': add(new T.CylinderGeometry(0.01, 0.015, 0.45, 6), '#f8f9fa', 0, 0.2, 0.05, hr).rotation.x = 0.6; add(new T.BoxGeometry(0.2, 0.08, 0.04), '#2b2d42', 0, 0.68, 0.33, b.body); add(new T.SphereGeometry(0.3, 16, 8), '#e9ecef', 0.1, 0.25, -0.05, head).scale.set(1.1, 0.4, 1.0); break;
      case 'headphones': add(new T.TorusGeometry(0.38, 0.04, 8, 24, Math.PI), '#2b2d42', 0, 0.05, 0, head); add(new T.CylinderGeometry(0.13, 0.13, 0.08, 16), R.accent, -0.39, 0, 0, head).rotation.z = Math.PI / 2; add(new T.CylinderGeometry(0.13, 0.13, 0.08, 16), R.accent, 0.39, 0, 0, head).rotation.z = Math.PI / 2; break;
      case 'goggles': add(new T.TorusGeometry(0.34, 0.03, 8, 24), '#2b2d42', 0, 0.15, 0, head).rotation.x = Math.PI / 2; for (const sx of [-0.12, 0.12]) mesh(new T.CylinderGeometry(0.1, 0.1, 0.06, 16), glow('#63e6be', 0.9), sx, 0.2, 0.3, head).rotation.x = Math.PI / 2; break;
      case 'scissors': add(new T.TorusGeometry(0.05, 0.015, 6, 12), '#e03131', -0.04, 0, 0.06, hr); add(new T.TorusGeometry(0.05, 0.015, 6, 12), '#e03131', 0.04, 0, 0.06, hr); add(new T.BoxGeometry(0.03, 0.25, 0.01), '#ced4da', 0, 0.15, 0.06, hr); add(new T.CylinderGeometry(0.15, 0.15, 0.04, 16), '#2b2d42', 0, 0, 0.08, hl).rotation.x = Math.PI / 2; break;
      case 'detective': add(new T.SphereGeometry(0.34, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), '#a0522d', 0, 0.14, 0, head); add(new T.CylinderGeometry(0.44, 0.44, 0.03, 20), '#8b4513', 0, 0.14, 0, head); add(new T.TorusGeometry(0.1, 0.02, 8, 20), '#2b2d42', 0, 0.22, 0.05, hr); add(new T.CylinderGeometry(0.02, 0.02, 0.2, 6), '#a0522d', 0, 0.06, 0.05, hr); break;
      default:
    }
  }
  function makeBot(id) {
    const R = ROBOTS[id];
    const g = new T.Group();
    const body = new T.Group(); g.add(body);
    const shade2 = (k) => '#' + C(R.color).lerp(C('#000000'), k).getHexString();
    // shiny toy plastic
    const plastic = (col) => new T.MeshPhysicalMaterial({ color: col, roughness: 0.32, metalness: 0.05, clearcoat: 0.8, clearcoatRoughness: 0.2, envMapIntensity: 0.9 });
    const legL = new T.Group(); legL.position.set(-0.15, 0.42, 0); body.add(legL);
    const legR = new T.Group(); legR.position.set(0.15, 0.42, 0); body.add(legR);
    for (const L of [legL, legR]) { mesh(new T.CapsuleGeometry(0.08, 0.22, 4, 10), plastic(shade2(0.3)), 0, -0.18, 0, L); mesh(new T.SphereGeometry(0.12, 14, 10), plastic('#2b2d42'), 0, -0.36, 0.04, L).scale.set(1, 0.6, 1.4); }
    const torso = mesh(new T.CapsuleGeometry(0.3, 0.32, 6, 18), plastic(R.color), 0, 0.82, 0, body);
    torso.scale.set(1, 1, 0.82);
    mesh(new T.CircleGeometry(0.17, 24), plastic(hexOf(lighten(R.color, 0.55))), 0, 0.82, 0.25, body);
    mesh(new T.PlaneGeometry(0.22, 0.22), new T.MeshBasicMaterial({ map: emojiTex(R.emoji), transparent: true }), 0, 0.82, 0.26, body);
    const mkArm = (sx) => { const a = new T.Group(); a.position.set(sx * 0.36, 1.02, 0); body.add(a); mesh(new T.CapsuleGeometry(0.065, 0.28, 4, 10), plastic(shade2(0.15)), 0, -0.2, 0, a); const hand = mesh(new T.SphereGeometry(0.095, 14, 10), plastic(shade2(0.25)), 0, -0.42, 0, a); return { a, hand }; };
    const L = mkArm(-1), Rr = mkArm(1);
    const head = new T.Group(); head.position.set(0, 1.42, 0); body.add(head);
    const skull = mesh(new T.SphereGeometry(0.34, 28, 20), plastic(R.color), 0, 0, 0, head); skull.scale.set(1.12, 0.9, 0.95);
    const face = mesh(new T.SphereGeometry(0.3, 24, 18, -Math.PI / 2.6, Math.PI / 1.3, Math.PI / 3.2, Math.PI / 2.6), new T.MeshPhysicalMaterial({ color: '#141826', roughness: 0.15, clearcoat: 1 }), 0, -0.01, 0.035, head);
    face.scale.set(1.1, 0.95, 1.02);
    const eyeMat = new T.MeshStandardMaterial({ color: '#9ff3ff', emissive: '#7ae7ff', emissiveIntensity: 2.4 });
    const eyes = [-0.1, 0.1].map((sx) => mesh(new T.CapsuleGeometry(0.035, 0.05, 4, 8), eyeMat, sx, 0.03, 0.31, head));
    const mouth = mesh(new T.TorusGeometry(0.05, 0.012, 6, 12, Math.PI), eyeMat, 0, -0.08, 0.305, head); mouth.rotation.z = Math.PI;
    for (const sx of [-0.21, 0.21]) mesh(new T.CircleGeometry(0.04, 12), new T.MeshBasicMaterial({ color: '#ff8787', transparent: true, opacity: 0.6 }), sx, -0.07, 0.29, head);
    mesh(new T.CylinderGeometry(0.015, 0.015, 0.18, 6), plastic(shade2(0.35)), 0, 0.37, 0, head);
    const ball = mesh(new T.SphereGeometry(0.06, 12, 10), new T.MeshStandardMaterial({ color: R.accent, emissive: R.accent, emissiveIntensity: 0.3 }), 0, 0.48, 0, head);
    const sh = mesh(new T.CircleGeometry(0.42, 24), new T.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.22, depthWrite: false }), 0, 0.015, 0, g);
    sh.rotation.x = -Math.PI / 2; sh.userData.noShadow = true; sh.userData.blob = true;
    const parts = { body, legL, legR, armL: L.a, armR: Rr.a, handL: L.hand, handR: Rr.hand, head, eyes, mouth, ball };
    makeAcc(R.acc, R, { head, handL: L.hand, handR: Rr.hand, body });
    const zzz = mesh(new T.PlaneGeometry(0.4, 0.4), new T.MeshBasicMaterial({ map: emojiTex('💤'), transparent: true, depthWrite: false }), 0.35, 1.95, 0, g);
    zzz.visible = false; zzz.userData.noShadow = true;
    const thinkSprite = new T.Sprite(new T.SpriteMaterial({ map: emojiTex('💭'), transparent: true, depthWrite: false }));
    thinkSprite.scale.set(0.45, 0.45, 1); thinkSprite.position.set(0.45, 2.05, 0); thinkSprite.visible = false; g.add(thinkSprite);
    g.traverse((o) => { o.userData.bot = id; if (o.isMesh && !o.userData.noShadow) o.castShadow = true; });
    scene.add(g);
    return { id, g, parts, zzz, thinkSprite, x: 0, z: 0, heading: 0, targetHeading: 0, state: 'idle', path: [], phase: Math.random() * 6, busy: false, wait: Math.random() * 3, blink: 2 + Math.random() * 3, idleAct: null, jump: 0, bubble: null, bubbleUntil: 0, room: null, resolve: null, sleep: false };
  }

  function place(b, x, z, heading) { b.x = x; b.z = z; b.g.position.set(x, 0, z); if (heading != null) { b.heading = heading; b.targetHeading = heading; } }

  // ---------- navigation ----------
  function deskSpot(id) { const info = ROOM3D[id]; const p = toWorld(info, 0, -2.45); return { x: p.x, z: p.z, h: roomYaw(info) }; }
  function meetSpot(id) { const info = ROOM3D[id]; const p = toWorld(info, 1.15, -0.55); return { x: p.x, z: p.z, h: roomYaw(info) + Math.PI + 0.5 }; }
  const COORD_HOME = { x: -9.4, z: 0, h: Math.PI / 2 };
  function roomOfPoint(x, z) {
    if (x < -1) return COORD;
    if (Math.abs(z) <= HALL / 2) return null;
    for (const id of WORKERS) { const c = roomCenter(ROOM3D[id]); if (Math.abs(x - c.x) < RW / 2 && Math.abs(z - c.z) < RD / 2) return id; }
    return null;
  }
  function exitPath(room, from) {
    if (room === COORD) return [[from.x, from.z], [-9.7, 2.6], [-6.4, 2.6], [-3.2, 1.0], [0.2, 0]];
    if (!room) return [[from.x, from.z]];
    const info = ROOM3D[room];
    const din = toWorld(info, 0, 3.0), dout = toWorld(info, 0, RD / 2 + 1.1);
    return [[from.x, from.z], [din.x, din.z], [dout.x, dout.z]];
  }
  function routeTo(b, tx, tz) {
    const fromRoom = roomOfPoint(b.x, b.z), toRoom = roomOfPoint(tx, tz);
    if (fromRoom && fromRoom === toRoom) return [[b.x, b.z], [tx, tz]];
    const out = exitPath(fromRoom, b);
    const into = exitPath(toRoom, { x: tx, z: tz }).reverse();
    into[into.length - 1] = [tx, tz];
    return [...out, ...into];
  }
  function walkTo(b, tx, tz, heading) {
    return new Promise((resolve) => {
      if (b.resolve) b.resolve();
      b.path = routeTo(b, tx, tz).slice(1);
      b.endHeading = heading;
      b.resolve = resolve;
      if (reducedMotion()) { place(b, tx, tz, heading); b.path = []; b.resolve = null; resolve(); }
    });
  }

  // ---------- per-frame animation ----------
  function animBot(b, dt, t) {
    const P = b.parts;
    let moving = false;
    if (b.path.length) {
      const [tx, tz] = b.path[0];
      const dx = tx - b.x, dz = tz - b.z, dist = Math.hypot(dx, dz);
      const step = dt * 2.4 * speed * (b.id === COORD ? 1.25 : 0.85);
      if (dist <= step) { b.x = tx; b.z = tz; b.path.shift(); }
      else { b.x += (dx / dist) * step; b.z += (dz / dist) * step; b.targetHeading = Math.atan2(dx, dz); }
      moving = true;
      if (!b.path.length) { if (b.endHeading != null) b.targetHeading = b.endHeading; const r = b.resolve; b.resolve = null; if (r) r(); }
    }
    let dh = b.targetHeading - b.heading;
    while (dh > Math.PI) dh -= Math.PI * 2;
    while (dh < -Math.PI) dh += Math.PI * 2;
    b.heading += dh * Math.min(1, dt * 8);
    b.g.position.set(b.x, 0, b.z);
    b.g.rotation.y = b.heading;
    // reset pose
    P.armL.rotation.set(0, 0, 0.12); P.armR.rotation.set(0, 0, -0.12); P.legL.rotation.set(0, 0, 0); P.legR.rotation.set(0, 0, 0);
    P.head.rotation.set(0, 0, 0); P.body.position.y = 0; P.body.rotation.set(0, 0, 0); P.mouth.scale.y = 1;
    const st = moving ? 'walk' : b.state;
    if (st === 'walk') {
      b.phase += dt * 9 * speed;
      const s2 = Math.sin(b.phase);
      P.legL.rotation.x = s2 * 0.7; P.legR.rotation.x = -s2 * 0.7;
      P.armL.rotation.x = -s2 * 0.6; P.armR.rotation.x = s2 * 0.6;
      P.body.position.y = Math.abs(Math.cos(b.phase)) * 0.06;
      P.body.rotation.z = s2 * 0.04;
    } else if (st === 'write') {
      P.armL.rotation.x = -1.15 + Math.sin(t * 17) * 0.12; P.armR.rotation.x = -1.15 + Math.sin(t * 17 + 1.6) * 0.12;
      P.head.rotation.x = 0.22 + Math.sin(t * 2) * 0.05; P.body.position.y = Math.sin(t * 3) * 0.01;
    } else if (st === 'draw') {
      P.armR.rotation.x = -1.3 + Math.sin(t * 5) * 0.35; P.armR.rotation.z = -0.2 + Math.cos(t * 5) * 0.3; P.armL.rotation.x = -0.6;
      P.head.rotation.z = Math.sin(t * 1.3) * 0.15; P.head.rotation.x = 0.15;
    } else if (st === 'think') {
      P.armR.rotation.x = -2.25; P.armR.rotation.z = 0.35; P.armL.rotation.x = -0.4; P.armL.rotation.z = 0.5;
      P.head.rotation.z = Math.sin(t * 1.4) * 0.18; P.head.rotation.x = -0.1; P.head.rotation.y = Math.sin(t * 0.7) * 0.3;
    } else if (st === 'talk') {
      P.armL.rotation.x = -0.6 + Math.sin(t * 4) * 0.4; P.armL.rotation.z = 0.4; P.armR.rotation.x = -0.4 + Math.sin(t * 3.3 + 1) * 0.35;
      P.mouth.scale.y = 1 + Math.abs(Math.sin(t * 14)) * 2.2; P.head.rotation.x = Math.sin(t * 5) * 0.06;
    } else if (st === 'listen') {
      P.head.rotation.z = 0.2; P.armL.rotation.x = -0.3;
    } else if (st === 'happy') {
      P.body.position.y = Math.abs(Math.sin(t * 7)) * 0.35; P.armL.rotation.z = 2.6; P.armR.rotation.z = -2.6; P.body.rotation.y = Math.sin(t * 7) * 0.3;
    } else if (st === 'off') {
      P.head.rotation.x = 0.45; P.body.position.y = -0.03; P.armL.rotation.x = -0.2; P.armR.rotation.x = -0.2;
    } else {
      // idle with little personality acts
      P.body.position.y = Math.sin(t * 2 + b.phase) * 0.012;
      P.head.rotation.y = Math.sin(t * 0.6 + b.phase) * 0.35;
      if (b.idleAct) {
        const k = b.idleAct.t / b.idleAct.d;
        if (b.idleAct.kind === 'wave') { P.armR.rotation.z = -2.5; P.armR.rotation.x = Math.sin(t * 10) * 0.3; }
        else if (b.idleAct.kind === 'stretch') { P.armL.rotation.z = 2.8 * Math.sin(k * Math.PI); P.armR.rotation.z = -2.8 * Math.sin(k * Math.PI); }
        else if (b.idleAct.kind === 'look') { P.head.rotation.y = Math.sin(k * Math.PI * 2) * 0.9; }
        else if (b.idleAct.kind === 'hop') { P.body.position.y = Math.abs(Math.sin(k * Math.PI * 3)) * 0.2; }
        else if (b.idleAct.kind === 'spin') { P.body.rotation.y = k * Math.PI * 2; }
        b.idleAct.t += dt;
        if (b.idleAct.t >= b.idleAct.d) b.idleAct = null;
      }
    }
    // blink
    b.blink -= dt;
    const closed = b.state === 'off' || b.state === 'happy' ? 0.25 : b.blink < 0.12 ? 0.15 : 1;
    if (b.blink < 0) b.blink = 2.5 + Math.random() * 3;
    for (const e of P.eyes) e.scale.y = closed;
    const working = ['write', 'draw', 'think'].includes(b.state);
    P.ball.material.emissiveIntensity = working ? 0.6 + Math.sin(t * 8) * 0.4 : 0.15;
    b.zzz.visible = b.state === 'off';
    if (b.zzz.visible) { b.zzz.position.y = 1.95 + Math.sin(t * 2) * 0.08; b.zzz.material.opacity = 0.6 + Math.sin(t * 2) * 0.3; }
    b.thinkSprite.visible = b.state === 'think';
    if (b.thinkSprite.visible) b.thinkSprite.position.y = 2.1 + Math.sin(t * 3) * 0.05;
    if (!b.anim) { b.anim = []; b.g.traverse((o) => { if (o.userData.bounce || o.userData.spin) b.anim.push(o); }); }
    for (const o of b.anim) { if (o.userData.bounce) o.position.y = 0.4 + Math.abs(Math.sin(t * 5)) * 0.25; if (o.userData.spin) o.rotation.y = t * 3; }
  }
  // independent life: workers wander their rooms, look around, peek into the hallway
  function brain(b, dt) {
    if (b.id === COORD || b.busy || b.path.length || b.state === 'off') return;
    b.wait -= dt;
    if (b.wait > 0) {
      if (!b.idleAct && Math.random() < dt * 0.25) b.idleAct = { kind: ['wave', 'stretch', 'look', 'hop', 'spin', 'look'][Math.floor(Math.random() * 6)], t: 0, d: 1.6 };
      return;
    }
    const info = ROOM3D[b.id];
    const r = Math.random();
    let lx, lz;
    if (r < 0.35) { const d = deskSpot(b.id); walkTo(b, d.x, d.z, d.h); b.wait = 3 + Math.random() * 5; return; }
    if (r < 0.45) { const p = toWorld(info, (Math.random() - 0.5) * 1.5, RD / 2 + 0.9); walkTo(b, p.x, p.z, null).then(() => { b.wait = 1.5; }); b.wait = 3; return; }
    lx = (Math.random() - 0.5) * 4.2; lz = -0.2 + Math.random() * 3.0;
    const p = toWorld(info, lx, lz);
    walkTo(b, p.x, p.z, null);
    b.wait = 2 + Math.random() * 5;
  }

  // ---------- camera direction ----------
  const v3 = (x, y, z) => new T.Vector3(x, y, z);
  const camPos = () => cam.position;
  function seatPose(t) { return { pos: v3(-4.7 + Math.sin(t * 0.4) * 0.03, 1.62 + Math.sin(t * 0.9) * 0.015, Math.sin(t * 0.3) * 0.05), look: v3(-9.6, 1.42, 0) }; }
  function shotPose(t) {
    const b = shot.a && bots[shot.a] ? bots[shot.a] : bots[COORD];
    if (['two', 'close', 'screen', 'wide'].includes(shot.type) && !ROOM3D[shot.type === 'two' ? shot.room : shot.a]) shot.type = 'cabin';
    const head = (bb) => v3(bb.x, 1.4, bb.z);
    switch (shot.type) {
      case 'track': {
        const back = v3(-Math.sin(b.heading) * 3.6, 2.3, -Math.cos(b.heading) * 3.6);
        const side = v3(Math.cos(b.heading) * 1.4, 0, -Math.sin(b.heading) * 1.4);
        return { pos: head(b).add(back).add(side), look: head(b).add(v3(Math.sin(b.heading) * 2, -0.2, Math.cos(b.heading) * 2)), lerp: 3 };
      }
      case 'two': {
        const info = ROOM3D[shot.room]; const p = toWorld(info, -2.9, 2.8);
        const a = bots[shot.a], c2 = bots[shot.b] || a;
        return { pos: v3(p.x, 2.0, p.z), look: v3((a.x + c2.x) / 2, 1.25, (a.z + c2.z) / 2), lerp: 4 };
      }
      case 'close': {
        const ang = (t - shot.t0) * 0.18 + roomYaw(ROOM3D[shot.a]) - 0.6;
        return { pos: v3(b.x + Math.sin(ang) * 2.5, 1.7, b.z + Math.cos(ang) * 2.5), look: v3(b.x, 1.2, b.z), lerp: 6 };
      }
      case 'screen': {
        const info = ROOM3D[shot.a]; const p = toWorld(info, 0.75, -0.8); const q = toWorld(info, 0, -1.85);
        return { pos: v3(p.x, 1.45, p.z), look: v3(q.x, 1.2, q.z), lerp: 6 };
      }
      case 'wide': {
        const info = ROOM3D[shot.a]; const p = toWorld(info, 3.3, 3.4); const q = toWorld(info, -0.6, -1.4);
        return { pos: v3(p.x, 3.2, p.z), look: v3(q.x, 0.9, q.z), lerp: 4 };
      }
      default: {
        // a side angle inside the cabin
        return { pos: v3(-5.6, 2.2, 3.6), look: v3(-8.6, 1.1, -0.5), lerp: 4 };
      }
    }
  }
  function cut(type, a, b2, room) {
    const same = shot.type === type && shot.a === a && shot.room === room;
    shot = { type, a, b: b2, room, t0: clock.elapsedTime, fresh: !same };
    if (!same && mode === 'director' && flashEl && !reducedMotion()) { flashEl.classList.remove('flash'); void flashEl.offsetWidth; flashEl.classList.add('flash'); }
  }
  function topPose() { return { pos: v3(topView.x, topView.h, topView.z + topView.h * 0.42), look: v3(topView.x, 0, topView.z) }; }
  function roomPose(t) {
    if (roomView === COORD) return { pos: v3(-2.4, 3.6, 7.5), look: v3(-8.5, 0.9, -1) };
    const info = ROOM3D[roomView]; const p = toWorld(info, -2.9 + Math.sin(t * 0.15) * 0.4, 3.3); const q = toWorld(info, 0.4, -1.6);
    return { pos: v3(p.x, 2.25, p.z), look: v3(q.x, 0.95, q.z) };
  }
  const lookTmp = { cur: null };
  function steer(c, pose, dt, lerpK, snap) {
    if (!lookTmp[c.uuid]) lookTmp[c.uuid] = pose.look.clone();
    const L = lookTmp[c.uuid];
    if (snap || reducedMotion()) { c.position.copy(pose.pos); L.copy(pose.look); }
    else { const k = 1 - Math.exp(-dt * (lerpK || 4)); c.position.lerp(pose.pos, k); L.lerp(pose.look, k); }
    c.lookAt(L);
  }

  // ---------- overlay: bubbles and name tags ----------
  function overlayFor(b) {
    if (!b.tag) {
      b.tag = h('div', { class: 'w-tag' }, ROBOTS[b.id].name);
      b.bub = h('div', { class: 'w-bubble', hidden: true });
      overlay.append(b.tag, b.bub);
    }
  }
  function visibleRoom() {
    if (mode === 'seat') return COORD;
    if (mode === 'room') return roomView;
    if (mode === 'director') return shot.type === 'track' ? null : shot.room || COORD;
    return '*';
  }
  function updateOverlay() {
    const W = canvas.clientWidth, H = canvas.clientHeight;
    const vr = visibleRoom();
    const tmp = new T.Vector3();
    for (const b of Object.values(bots)) {
      overlayFor(b);
      const inRoom = roomOfPoint(b.x, b.z);
      let show = vr === '*' || inRoom === vr || (mode === 'director' && shot.type === 'track' && b.id === shot.a);
      if (mode === 'director' && shot.type === 'track') show = show || Math.hypot(b.x - bots[shot.a].x, b.z - bots[shot.a].z) < 6;
      tmp.set(b.x, 2.15, b.z).project(cam);
      const on = show && tmp.z < 1 && Math.abs(tmp.x) < 1.1 && Math.abs(tmp.y) < 1.1;
      const sx = (tmp.x * 0.5 + 0.5) * W, sy = (-tmp.y * 0.5 + 0.5) * H;
      b.tag.style.transform = `translate(${sx.toFixed(0)}px, ${(sy - 6).toFixed(0)}px) translate(-50%, -100%)`;
      b.tag.hidden = !(on && (mode === 'top' || mode === 'room'));
      const hasB = b.bubbleText && performance.now() < b.bubbleUntil;
      b.bub.hidden = !(on && hasB);
      if (!b.bub.hidden) b.bub.style.transform = `translate(${sx.toFixed(0)}px, ${(sy - (mode === 'top' ? 22 : 10)).toFixed(0)}px) translate(-50%, -100%)`;
    }
  }

  // ---------- particles ----------
  function spawn(id, glyph) {
    const b = bots[id];
    if (!b || reducedMotion()) return;
    const set = ROBOTS[id].fx;
    const sp = new T.Sprite(new T.SpriteMaterial({ map: emojiTex(glyph || set[Math.floor(Math.random() * set.length)]), transparent: true, depthWrite: false }));
    sp.scale.set(0.35, 0.35, 1);
    sp.position.set(b.x + (Math.random() - 0.5) * 0.6, 1.9, b.z + (Math.random() - 0.5) * 0.6);
    scene.add(sp);
    particles.push({ sp, life: 2.2 });
  }

  // ---------- main loop ----------
  function frame() {
    try { frameInner(); } catch (e) { if (!frame.warned) { frame.warned = true; console.warn('3D frame error', e); } }
  }
  function frameInner() {
    const dt = Math.min(0.05, clock.getDelta());
    const t = clock.elapsedTime;
    for (const b of Object.values(bots)) { brain(b, dt); animBot(b, dt, t); }
    for (let k = particles.length - 1; k >= 0; k--) {
      const p = particles[k]; p.life -= dt; p.sp.position.y += dt * 0.6; p.sp.material.opacity = Math.max(0, p.life / 2.2);
      if (p.life <= 0) { scene.remove(p.sp); p.sp.material.dispose(); particles.splice(k, 1); }
    }
    if (dusty && !reducedMotion()) {
      if (dusty.wait > 0) dusty.wait -= dt;
      else { const d = dusty.tx - dusty.x; const st = Math.sign(d) * Math.min(Math.abs(d), dt * 1.2); dusty.x += st; dusty.g.rotation.y = d > 0 ? Math.PI / 2 : -Math.PI / 2; if (Math.abs(d) < 0.01) { dusty.tx = 1 + Math.random() * 80; dusty.wait = 1 + Math.random() * 4; } }
      dusty.g.position.set(dusty.x, 0, 0.9 * Math.sin(dusty.x * 0.3));
    }
    if (!animated) { animated = []; scene.traverse((o) => { const u = o.userData; if (u.blink || u.blink2 || u.pulse || u.fader != null || u.float || u.clock || u.glow || u.swing || u.trophy) animated.push(o); }); }
    for (const o of animated) {
      const u = o.userData;
      if (u.blink) o.visible = Math.floor(t * 2) % 2 === 0;
      if (u.pulse) o.scale.setScalar(1 + Math.abs(Math.sin(t * 9)) * 0.15);
      if (u.fader != null) o.position.y = 0.9 + Math.sin(t * 3 + u.fader) * 0.03;
      if (u.float) o.position.y = 1.6 + Math.sin(t * 2) * 0.1;
      if (u.clock) o.rotation.z = -t * 0.5;
      if (u.glow) o.material.emissiveIntensity = 0.45 + Math.sin(t * 1.5) * 0.15;
      if (u.swing) o.rotation.z = Math.sin(t * 2.2) * 0.12;
      if (u.trophy) o.rotation.y = t;
      if (u.blink2) o.material.emissiveIntensity = 0.6 + (Math.sin(t * 4) > 0 ? 0.8 : 0);
    }
    // the feed camera always follows the director's shot; the main camera depends on the view
    const fp = shotPose(t);
    steer(feedCam, fp, dt, fp.lerp, shot.fresh);
    if (mode === 'director') steer(cam, fp, dt, fp.lerp, shot.fresh);
    else if (mode === 'seat') steer(cam, seatPose(t), dt, 5, modeFresh);
    else if (mode === 'top') steer(cam, topPose(), dt, 6, modeFresh);
    else steer(cam, roomPose(t), dt, 3, modeFresh);
    if (modeFresh && mode !== 'director' && flashEl && !reducedMotion()) { flashEl.classList.remove('flash'); void flashEl.offsetWidth; flashEl.classList.add('flash'); }
    modeFresh = false;
    shot.fresh = false;
    if (mode === 'seat' && t - lastTv > 0.08) {
      lastTv = t;
      tvMesh.visible = false;
      renderer.setRenderTarget(tvTarget);
      renderer.render(scene, feedCam);
      renderer.setRenderTarget(null);
      tvMesh.visible = true;
    }
    // the sun's shadow box follows what the camera is looking at
    const L = lookTmp[cam.uuid];
    if (L && sun) { sun.target.position.set(L.x, 0, L.z); sun.position.set(L.x + 12, 30, L.z + 14); }
    if (composer && hd) composer.render(); else renderer.render(scene, cam);
    updateOverlay();
  }
  function setHd(on) {
    hd = on;
    try { localStorage.setItem('rfs:hd', on ? '1' : '0'); } catch (e) { /* ignore */ }
    if (renderer) { renderer.shadowMap.enabled = on; renderer.setPixelRatio(on ? Math.min(2, window.devicePixelRatio || 1) : 1); scene && scene.traverse((o) => { if (o.material && o.isMesh) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach((m) => { m.needsUpdate = true; }); } }); resize(); }
  }
  function resize() {
    const w = canvas.clientWidth || 800, hgt = canvas.clientHeight || 450;
    renderer.setSize(w, hgt, false);
    if (composer) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, hgt); }
    cam.aspect = w / hgt; cam.updateProjectionMatrix();
  }

  async function init(container) {
    try { T = await import(THREE_URL); } catch (e) { console.warn('three.js failed to load', e); return false; }
    // optional add-ons: rounded furniture, soft studio reflections, glow; the studio still works without them
    const addon = (p) => import(THREE_ADDON(p)).catch((e) => { console.warn('three add-on failed', p, e); return {}; });
    const [rb, re, ec, rp, ub, op] = await Promise.all(['geometries/RoundedBoxGeometry.js', 'environments/RoomEnvironment.js', 'postprocessing/EffectComposer.js', 'postprocessing/RenderPass.js', 'postprocessing/UnrealBloomPass.js', 'postprocessing/OutputPass.js'].map(addon));
    RoundedBox = rb.RoundedBoxGeometry || null;
    try { hd = localStorage.getItem('rfs:hd') !== '0'; } catch (e) { hd = true; }
    try {
      canvas = document.createElement('canvas');
      canvas.className = 'world-canvas';
      container.prepend(canvas);
      renderer = new T.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
      renderer.outputColorSpace = T.SRGBColorSpace;
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.92;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = T.PCFSoftShadowMap;
    } catch (e) { console.warn('WebGL unavailable', e); if (canvas) canvas.remove(); return false; }
    overlay = h('div', { class: 'w-overlay' });
    flashEl = h('div', { class: 'w-flash' });
    container.append(overlay, flashEl);
    scene = new T.Scene();
    scene.background = C('#141432');
    scene.fog = new T.Fog('#141432', 70, 190);
    if (re.RoomEnvironment) { const pm = new T.PMREMGenerator(renderer); scene.environment = pm.fromScene(new re.RoomEnvironment(renderer), 0.04).texture; }
    cam = new T.PerspectiveCamera(50, 16 / 9, 0.1, 400);
    feedCam = new T.PerspectiveCamera(50, 16 / 9, 0.1, 400);
    scene.add(new T.HemisphereLight('#ffe9d2', '#3a2f55', 0.7));
    sun = new T.DirectionalLight('#ffe2bd', 1.35);
    sun.position.set(12, 30, 14);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 80 });
    sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.03;
    scene.add(sun, sun.target);
    if (ec.EffectComposer && rp.RenderPass && ub.UnrealBloomPass && op.OutputPass) {
      composer = new ec.EffectComposer(renderer);
      composer.addPass(new rp.RenderPass(scene, cam));
      bloom = new ub.UnrealBloomPass(new T.Vector2(800, 450), 0.38, 0.35, 0.93);
      composer.addPass(bloom);
      composer.addPass(new op.OutputPass());
    }
    clock = new T.Clock();
    buildCabin();
    buildHallway();
    for (const id of WORKERS) buildRoom(id, ROOM3D[id]);
    for (const id of Object.keys(ROBOTS)) bots[id] = makeBot(id);
    place(bots[COORD], COORD_HOME.x, COORD_HOME.z, COORD_HOME.h);
    for (const id of WORKERS) { const d = deskSpot(id); const p = toWorld(ROOM3D[id], (Math.random() - 0.5) * 4, 1 + Math.random() * 2); place(bots[id], p.x, p.z, d.h); }
    scene.traverse((o) => { if (!o.isMesh) return; o.receiveShadow = true; if (!o.userData.floor && !o.userData.noShadow && !(o.material && o.material.transparent)) o.castShadow = true; });
    setHd(hd);
    // clicks: pick a robot or a room
    const ray = new T.Raycaster(); const ndc = new T.Vector2();
    let down = null;
    canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, tx: topView.x, tz: topView.z, moved: false }; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', (e) => {
      if (!down || mode !== 'top') return;
      const dx = e.clientX - down.x, dy = e.clientY - down.y;
      if (Math.abs(dx) + Math.abs(dy) > 5) down.moved = true;
      const k = topView.h / (canvas.clientHeight || 500) * 1.1;
      topView.x = clamp(down.tx - dx * k, -16, 90); topView.z = clamp(down.tz - dy * k, -20, 20);
    });
    canvas.addEventListener('pointerup', (e) => {
      if (!down) return;
      const moved = down.moved; down = null;
      if (moved) return;
      const r = canvas.getBoundingClientRect();
      ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(ndc, cam);
      const hit = ray.intersectObjects(scene.children, true).find((x) => x.object.userData.bot || x.object.userData.room);
      if (!hit) return;
      const u = hit.object.userData;
      if (clickCb) clickCb(u.bot ? { robot: u.bot } : { robot: u.room === COORD ? COORD : u.room });
    });
    canvas.addEventListener('wheel', (e) => { if (mode !== 'top') return; e.preventDefault(); topView.h = clamp(topView.h * (e.deltaY > 0 ? 1.12 : 0.9), 12, 110); }, { passive: false });
    new ResizeObserver(resize).observe(canvas);
    resize();
    ready = true;
    renderer.setAnimationLoop(frame);
    return true;
  }

  // ---------- API used by the engine and UI ----------
  function setState(id, st) {
    const b = bots[id]; if (!b) return;
    b.state = st;
    if (id === COORD) return;
    if (['write', 'think', 'draw'].includes(st)) {
      b.busy = true;
      const d = deskSpot(id);
      if (Math.hypot(b.x - d.x, b.z - d.z) > 0.3 && !b.path.length) walkTo(b, d.x, d.z, d.h);
      else b.targetHeading = d.h;
      rooms[id] && (rooms[id].paper.visible = true);
    } else if (st === 'talk' || st === 'listen' || st === 'happy') {
      b.busy = true;
      if (st === 'talk' && bots[COORD] && roomOfPoint(bots[COORD].x, bots[COORD].z) === id) b.targetHeading = Math.atan2(bots[COORD].x - b.x, bots[COORD].z - b.z);
    } else if (st === 'off') { b.busy = true; const d = deskSpot(id); walkTo(b, d.x, d.z, d.h); }
    else { b.busy = false; b.wait = 2 + Math.random() * 3; }
  }
  function say(id, text, opts) {
    const b = bots[id]; if (!b) return;
    overlayFor(b);
    opts = opts || {};
    b.bubbleText = text;
    b.bub.className = 'w-bubble' + (opts.kind === 'thought' ? ' thought' : '');
    b.bub.textContent = text;
    b.bubbleUntil = performance.now() + (opts.ms ? opts.ms / speed : 600000);
  }
  function clearBubble(id) { const b = bots[id]; if (b) b.bubbleUntil = 0; }
  // a newer walk supersedes an older one; only the latest walk may cut the camera when it arrives
  async function goToRobot(id, target) {
    const b = bots[id], m = meetSpot(target);
    const tok = (b.walkTok = (b.walkTok || 0) + 1);
    if (follow) cut('track', id, null, null);
    await walkTo(b, m.x, m.z, Math.atan2(bots[target].x - m.x, bots[target].z - m.z));
    if (follow && b.walkTok === tok) cut('two', id, target, target);
  }
  async function goHome(id) {
    const b = bots[id];
    const tok = (b.walkTok = (b.walkTok || 0) + 1);
    if (follow && mode === 'director') cut('track', id, null, null);
    await walkTo(b, COORD_HOME.x, COORD_HOME.z, COORD_HOME.h);
    if (follow && b.walkTok === tok) cut('cabin', COORD, null, COORD);
  }
  function event(name, data) {
    if (!ready || !follow) return;
    if (name === 'work' && data.robot === COORD) { clearTimeout(event.alt); cut('cabin', COORD, null, COORD); return; }
    if (name === 'work') { cut('close', data.robot, null, data.robot); clearTimeout(event.alt); const alt = () => { if (shot.a !== data.robot || !['close', 'wide', 'screen'].includes(shot.type)) return; const next = { close: 'screen', screen: 'wide', wide: 'close' }[shot.type]; cut(next, data.robot, null, data.robot); event.alt = setTimeout(alt, 6500); }; event.alt = setTimeout(alt, 6500); }
    if (name === 'cabin') { clearTimeout(event.alt); cut('cabin', COORD, null, COORD); }
  }
  function setMode(m, arg) {
    if (m !== mode || arg) modeFresh = true;
    mode = m;
    if (m === 'room' && arg) roomView = arg;
    if (m === 'top' && arg) { const c = arg === COORD ? { x: -8, z: 0 } : roomCenter(ROOM3D[arg]); topView.x = c.x; topView.z = c.z; topView.h = 28; }
    shot.fresh = true;
  }
  return {
    init, ready: () => ready, setState, say, clearBubble, goToRobot, goHome, event, setMode, mode: () => mode,
    fx: (id, g) => spawn(id, g),
    setPaper: (id, level, text) => { const r = rooms[id]; if (!r) return; const key = (text || '').slice(-120) + '|' + Math.round(level * 20); if (key !== r.lastScreen) { r.lastScreen = key; drawScreen(id, text || '', level); } },
    setCrew: (set) => { for (const id of WORKERS) { const b = bots[id]; if (!b) continue; if (!set.has(id)) setState(id, 'off'); else if (b.state === 'off') setState(id, 'idle'); } },
    updateBoard: (stages) => { boardStages = stages; drawBoard(); },
    addCrate: () => { if (!ready) return; const k = crates++; const box = boxM(0.6, 0.6, 0.6, '#e9c46a', -13.5 + (k % 4) * 0.7, 0.3 + Math.floor(k / 4) * 0.6, -6 + 0.0, scene); void box; },
    robot: (id) => bots[id] ? { state: bots[id].state, bubble: performance.now() < bots[id].bubbleUntil } : null,
    isFollowing: () => follow, setFollow: (on) => { follow = on; },
    hd: () => hd, setHd: (on) => setHd(on),
    focusRobot: (id) => setMode(id === COORD ? 'seat' : 'room', id),
    onClick: (cb) => { clickCb = cb; }, setSpeed: (v) => { speed = v; },
    zoom: (f) => { topView.h = clamp(topView.h * f, 12, 110); },
  };
})();

// ---------- facade: the 3D world when it loads, the 2D map otherwise ----------
const W = (() => {
  let use3d = false, inited = false;
  let speed = 1, click = null;
  const pick = () => (use3d ? World : Studio2D);
  const api = {};
  // calls made before the world is ready are dropped (walks resolve at once)
  for (const k of ['setState', 'say', 'clearBubble', 'fx', 'setCrew', 'updateBoard', 'addCrate', 'robot', 'isFollowing', 'setFollow', 'zoom']) api[k] = (...a) => (inited ? pick()[k](...a) : (k === 'isFollowing' ? true : null));
  api.onClick = (cb) => { click = cb; if (inited) pick().onClick(cb); };
  api.setSpeed = (v) => { speed = v; if (inited) pick().setSpeed(v); };
  api.setPaper = (id, level, text) => (!inited ? null : use3d ? World.setPaper(id, level, text) : Studio2D.setPaper(id, level));
  api.goToRobot = (id, target) => (!inited ? Promise.resolve() : use3d ? World.goToRobot(id, target) : Studio2D.walk(id, [Studio2D.spotOf(target).gx, Studio2D.spotOf(target).gy]).then(() => Studio2D.isFollowing() && Studio2D.focusRoom(ROOM_OF[target])));
  api.goHome = (id) => (!inited ? Promise.resolve() : use3d ? World.goHome(id) : Studio2D.walk(id, [Studio2D.robot(id).home.gx, Studio2D.robot(id).home.gy]));
  api.event = (n, d) => { if (inited && use3d) World.event(n, d); };
  api.setMode = (m, arg) => { if (!inited) return; if (use3d) World.setMode(m, arg); else if (m === 'top') Studio2D.overview(); else if (arg) Studio2D.focusRoom(ROOM_OF[arg] || 'office'); };
  api.is3d = () => use3d;
  api.hd = () => (use3d ? World.hd() : false);
  api.setHd = (on) => { if (use3d) World.setHd(on); };
  api.init = async (container, svg) => {
    use3d = await World.init(container);
    if (!use3d) { svg.hidden = false; Studio2D.init(svg); }
    inited = true;
    pick().setSpeed(speed);
    if (click) pick().onClick(click);
    return use3d;
  };
  return api;
})();
