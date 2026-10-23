// ---------- the 3D studio (three.js): a coordinator's cabin and one room per robot along a hallway ----------
const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
const RW = 8, RD = 8, HALL = 5, WH = 2.6, GAP = 0.3;
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
  'music-director': [['piano', 2.3, 0.6], ['speaker', -3.2, -3.2], ['speaker', 3.2, -3.2], ['notes', -2.6, 1.6]],
  'sound-designer': [['console', 2.3, 0.8], ['speaker', -3.2, -3.2], ['foley', -2.6, 1.6]],
  'vfx-supervisor': [['greenscreen', 0, -3.85, 0], ['bigscreen', 3.85, 0, -Math.PI / 2], ['lightstand', -3.0, 1.8]],
  'film-editor': [['bigscreen', -3.85, 0, Math.PI / 2], ['reels', 3.0, -3.0], ['reels', 3.0, 1.8], ['plant', -3.3, 3.0]],
  'quality-control': [['checkboard', 0, -3.85, 0], ['trafficlight', 3.0, 1.6], ['magnifier', -2.6, 1.6]],
};

const World = (() => {
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

  // ---------- helpers ----------
  const C = (hex) => new T.Color(hex);
  const mat = (color, extra) => new T.MeshStandardMaterial({ color, roughness: 0.75, metalness: 0.05, ...(extra || {}) });
  function mesh(geo, material, x, y, z, parent) {
    const m = new T.Mesh(geo, material);
    m.position.set(x || 0, y || 0, z || 0);
    (parent || scene).add(m);
    return m;
  }
  const boxM = (w, h, d, color, x, y, z, parent) => mesh(new T.BoxGeometry(w, h, d), mat(color), x, y, z, parent);
  function canvasTex(w, hgt, draw) {
    const c = document.createElement('canvas');
    c.width = w; c.height = hgt;
    draw(c.getContext('2d'), c);
    const t = new T.CanvasTexture(c);
    t.colorSpace = T.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }
  function emojiTex(e) {
    if (texCache[e]) return texCache[e];
    texCache[e] = canvasTex(128, 128, (g) => { g.font = '96px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(e, 64, 72); });
    return texCache[e];
  }
  function lighten(hex, k) { const c = C(hex); c.lerp(C('#ffffff'), k); return c; }
  function roomCenter(info) { return { x: info.slot * (RW + GAP) + RW / 2, z: info.side * (HALL / 2 + RD / 2) }; }
  // room-local (lx, lz) → world, door at local +z faces the hallway
  function toWorld(info, lx, lz) { const c = roomCenter(info); const s = -info.side; return { x: c.x + lx * s, z: c.z + lz * s }; }
  const roomYaw = (info) => (info.side < 0 ? 0 : Math.PI);

  // ---------- building ----------
  function floorTex(base, line) {
    return canvasTex(256, 256, (g) => {
      g.fillStyle = base; g.fillRect(0, 0, 256, 256);
      g.strokeStyle = line; g.lineWidth = 3;
      for (let k = 0; k <= 256; k += 64) { g.beginPath(); g.moveTo(k, 0); g.lineTo(k, 256); g.stroke(); g.beginPath(); g.moveTo(0, k); g.lineTo(256, k); g.stroke(); }
    });
  }
  function wall(x, z, len, rotY, color, parent, opts) {
    const g = new T.Group();
    g.position.set(x, 0, z); g.rotation.y = rotY;
    (parent || scene).add(g);
    const hgt = (opts && opts.h) || WH;
    boxM(len, hgt, 0.18, color, 0, hgt / 2, 0, g);
    boxM(len + 0.02, 0.08, 0.24, '#ffffff', 0, hgt + 0.04, 0, g);
    return g;
  }
  // front wall with a door gap and a glass band
  function frontWall(info, color, group) {
    for (const sgn of [-1, 1]) {
      const seg = (RW - 2.2) / 2;
      const cx = sgn * (1.1 + seg / 2);
      boxM(seg, 1.0, 0.18, color, cx, 0.5, RD / 2, group);
      const glass = mesh(new T.BoxGeometry(seg, 1.4, 0.06), new T.MeshStandardMaterial({ color: '#cfe8ff', transparent: true, opacity: 0.22, roughness: 0.1 }), cx, 1.7, RD / 2, group);
      glass.renderOrder = 2;
      boxM(seg, 0.08, 0.24, '#ffffff', cx, WH + 0.04, RD / 2, group);
      boxM(0.12, WH, 0.22, '#ffffff', sgn * 1.1, WH / 2, RD / 2, group);
    }
  }
  function buildRoom(id, info) {
    const R = ROBOTS[id];
    const c = roomCenter(info);
    const g = new T.Group();
    g.position.set(c.x, 0, c.z);
    g.rotation.y = roomYaw(info);
    scene.add(g);
    const wallCol = '#' + lighten(R.color, 0.55).getHexString();
    const floor = mesh(new T.PlaneGeometry(RW, RD), new T.MeshStandardMaterial({ map: floorTex('#' + lighten(R.color, 0.78).getHexString(), '#' + lighten(R.color, 0.6).getHexString()), roughness: 0.9 }), 0, 0.01, 0, g);
    floor.rotation.x = -Math.PI / 2;
    floor.userData.room = id;
    // rug
    const rug = mesh(new T.CircleGeometry(1.6, 40), mat(R.accent, { roughness: 1 }), 0.6, 0.02, 1.2, g);
    rug.rotation.x = -Math.PI / 2; rug.material.opacity = 0.35; rug.material.transparent = true;
    wall(0, -RD / 2, RW, 0, wallCol, g);
    wall(-RW / 2, 0, RD, Math.PI / 2, wallCol, g);
    wall(RW / 2, 0, RD, Math.PI / 2, wallCol, g);
    frontWall(info, wallCol, g);
    // poster with the robot's emoji on the back wall
    const poster = mesh(new T.PlaneGeometry(1.1, 1.1), new T.MeshBasicMaterial({ map: emojiTex(R.emoji), transparent: true }), -2.3, 1.75, -RD / 2 + 0.11, g);
    poster.userData.skip = true;
    // door sign facing the hallway
    const signTex = canvasTex(512, 128, (x) => {
      x.fillStyle = R.color; x.fillRect(0, 0, 512, 128);
      x.fillStyle = 'rgba(255,255,255,.9)'; x.fillRect(8, 8, 496, 112);
      x.font = '64px sans-serif'; x.textBaseline = 'middle'; x.fillText(R.emoji, 22, 66);
      x.fillStyle = '#23263a'; x.font = 'bold 44px Fredoka, Nunito, sans-serif'; x.fillText(R.name, 110, 50);
      x.font = '28px Nunito, sans-serif'; x.fillStyle = '#555'; x.fillText(R.job, 112, 94);
    });
    const sign = mesh(new T.PlaneGeometry(2.4, 0.6), new T.MeshBasicMaterial({ map: signTex }), 0, WH + 0.45, RD / 2 + 0.14, g);
    sign.userData.room = id;
    // desk with a live monitor
    const desk = new T.Group();
    desk.position.set(0, 0, -1.6);
    g.add(desk);
    boxM(2.4, 0.08, 1.0, '#b9824f', 0, 0.78, 0, desk);
    for (const [dx, dz] of [[-1.1, -0.42], [1.1, -0.42], [-1.1, 0.42], [1.1, 0.42]]) boxM(0.08, 0.78, 0.08, '#8a5a32', dx, 0.39, dz, desk);
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 256; screenCanvas.height = 160;
    const screenTex = new T.CanvasTexture(screenCanvas);
    screenTex.colorSpace = T.SRGBColorSpace;
    boxM(1.05, 0.66, 0.06, '#222633', 0, 1.2, -0.25, desk);
    // the monitor faces the robot behind the desk (local -z) and the camera can see the back; screen on both sides
    const screenFront = mesh(new T.PlaneGeometry(0.96, 0.58), new T.MeshBasicMaterial({ map: screenTex }), 0, 1.2, -0.29, desk);
    screenFront.rotation.y = Math.PI;
    const screenBack = mesh(new T.PlaneGeometry(0.96, 0.58), new T.MeshBasicMaterial({ map: screenTex }), 0, 1.2, -0.215, desk);
    boxM(0.08, 0.3, 0.08, '#222633', 0, 0.95, -0.25, desk);
    boxM(0.5, 0.03, 0.18, '#dddddd', 0.15, 0.835, 0.15, desk);
    mesh(new T.CylinderGeometry(0.06, 0.05, 0.12, 16), mat(R.accent), -0.85, 0.88, 0.2, desk);
    const paper = boxM(0.32, 0.01, 0.42, '#ffffff', -0.5, 0.83, 0.1, desk);
    paper.visible = false;
    for (const d of DECOR[id] || []) decor(d, g, R);
    // lamp
    const lamp = new T.Group(); lamp.position.set(-1.0, 0.82, -1.85); g.add(lamp);
    mesh(new T.CylinderGeometry(0.03, 0.03, 0.4, 8), mat('#555'), 0, 0.2, 0, lamp);
    const shade = mesh(new T.ConeGeometry(0.16, 0.2, 20, 1, true), new T.MeshStandardMaterial({ color: '#fff3bf', emissive: '#ffd43b', emissiveIntensity: 0.6, side: T.DoubleSide }), 0, 0.45, 0, lamp);
    rooms[id] = { g, info, screenCanvas, screenTex, paper, shade, lastScreen: '' };
    drawScreen(id, '', 0);
  }
  function decor([kind, lx, lz, rot], g, R) {
    const grp = new T.Group();
    grp.position.set(lx, 0, lz);
    grp.rotation.y = rot || 0;
    g.add(grp);
    const B = (w, h, d, col, x, y, z) => boxM(w, h, d, col, x, y, z, grp);
    const cyl = (rt, rb, h, col, x, y, z) => mesh(new T.CylinderGeometry(rt, rb, h, 20), mat(col), x, y, z, grp);
    const sph = (r, col, x, y, z) => mesh(new T.SphereGeometry(r, 20, 14), mat(col), x, y, z, grp);
    switch (kind) {
      case 'shelf': B(1.8, 2.0, 0.4, '#9c6b3f', 0, 1.0, 0); for (let r = 0; r < 4; r++) for (let k = 0; k < 7; k++) B(0.16, 0.34, 0.3, ['#e03131', '#1971c2', '#f08c00', '#2f9e44', '#9c36b5', '#fcc419', '#495057'][(k + r) % 7], -0.7 + k * 0.23, 0.3 + r * 0.48, 0.03); break;
      case 'armchair': B(1.0, 0.45, 0.9, R.accent, 0, 0.25, 0); B(1.0, 0.7, 0.2, R.accent, 0, 0.6, -0.4); B(0.18, 0.4, 0.9, R.accent, -0.45, 0.6, 0); B(0.18, 0.4, 0.9, R.accent, 0.45, 0.6, 0); break;
      case 'books': for (let k = 0; k < 5; k++) B(0.5, 0.1, 0.36, ['#e03131', '#1971c2', '#f08c00', '#2f9e44', '#9c36b5'][k], 0, 0.05 + k * 0.1, 0).rotation.y = k * 0.3; break;
      case 'pencil': { const p = cyl(0.12, 0.12, 2.0, '#fcc419', 0, 1.0, 0); const tip = mesh(new T.ConeGeometry(0.12, 0.35, 20), mat('#f1d6a8'), 0, 2.17, 0, grp); grp.rotation.z = 0.15; void p; void tip; break; }
      case 'corkboard': { B(2.6, 1.4, 0.08, '#c08552', 0, 1.6, 0); for (let k = 0; k < 9; k++) B(0.4, 0.28, 0.02, ['#fff9db', '#e7f5ff', '#ffe3e3'][k % 3], -0.9 + (k % 3) * 0.9, 1.25 + Math.floor(k / 3) * 0.38, 0.06).rotation.z = (k % 2 ? 0.08 : -0.06); break; }
      case 'cabinet': B(0.7, 1.3, 0.6, '#868e96', 0, 0.65, 0); for (let k = 0; k < 3; k++) B(0.5, 0.03, 0.02, '#495057', 0, 0.3 + k * 0.4, 0.31); break;
      case 'plant': cyl(0.25, 0.2, 0.45, '#c96f3b', 0, 0.22, 0); sph(0.38, '#40c057', 0, 0.75, 0); sph(0.28, '#69db7c', 0.18, 1.0, 0.05); sph(0.24, '#51cf66', -0.15, 1.05, -0.08); break;
      case 'mannequin': cyl(0.25, 0.3, 0.05, '#495057', 0, 0.03, 0); cyl(0.03, 0.03, 0.8, '#495057', 0, 0.45, 0); cyl(0.22, 0.28, 0.7, R.color, 0, 1.15, 0); sph(0.16, '#dee2e6', 0, 1.65, 0); break;
      case 'easel': { const l = (x, rz) => { const m = B(0.06, 1.8, 0.06, '#a0522d', x, 0.9, 0); m.rotation.z = rz; }; l(-0.35, 0.15); l(0.35, -0.15); B(1.1, 0.8, 0.04, '#ffffff', 0, 1.25, 0.08); B(0.4, 0.3, 0.01, R.color, -0.15, 1.3, 0.11); B(0.3, 0.2, 0.01, R.accent, 0.25, 1.1, 0.11); break; }
      case 'blueprint': B(1.6, 0.06, 1.0, '#a5d8ff', 0, 0.9, 0); for (const [dx, dz] of [[-0.7, -0.4], [0.7, -0.4], [-0.7, 0.4], [0.7, 0.4]]) B(0.06, 0.9, 0.06, '#495057', dx, 0.45, dz); B(1.3, 0.005, 0.8, '#1971c2', 0, 0.935, 0); break;
      case 'modelhouse': B(1.0, 0.6, 0.6, '#dee2e6', 0, 0.6, 0); B(0.06, 0.6, 0.06, '#495057', 0, 0.3, 0); { const roof = mesh(new T.ConeGeometry(0.6, 0.4, 4), mat('#e8590c'), 0, 1.1, 0, grp); roof.rotation.y = Math.PI / 4; roof.scale.set(1.2, 1, 0.8); } break;
      case 'swatches': ['#ff6b6b', '#fcc419', '#51cf66', '#339af0', '#cc5de8', '#ff922b', '#20c997'].forEach((col, k) => B(0.5, 0.9, 0.04, col, -1.65 + k * 0.55, 1.5, 0)); break;
      case 'paint': ['#e03131', '#1971c2', '#fcc419'].forEach((col, k) => cyl(0.18, 0.18, 0.3, col, k * 0.4 - 0.4, 0.15, 0)); break;
      case 'dirchair': B(0.8, 0.06, 0.6, '#212529', 0, 0.6, 0); B(0.8, 0.5, 0.05, '#c92a2a', 0, 1.0, -0.3); for (const dx of [-0.38, 0.38]) { const a = B(0.05, 0.9, 0.05, '#8a5a32', dx, 0.45, 0.2); a.rotation.x = 0.2; const b = B(0.05, 0.9, 0.05, '#8a5a32', dx, 0.45, -0.2); b.rotation.x = -0.2; } break;
      case 'spotlight': cyl(0.04, 0.04, 1.8, '#343a40', 0, 0.9, 0); { const hd = cyl(0.22, 0.14, 0.4, '#343a40', 0, 1.9, 0.1); hd.rotation.x = 1.0; const pool = mesh(new T.CircleGeometry(1.4, 32), new T.MeshBasicMaterial({ color: '#fff3bf', transparent: true, opacity: 0.35 }), 1.2, 0.03, 1.4, grp); pool.rotation.x = -Math.PI / 2; } break;
      case 'clapper': B(0.6, 0.4, 0.05, '#212529', 0, 0.85, 0); { const top = B(0.62, 0.1, 0.05, '#f8f9fa', 0, 1.1, 0); top.rotation.z = 0.25; } B(0.6, 0.8, 0.6, '#495057', 0, 0.4, 0.1); break;
      case 'bag': cyl(0.02, 0.02, 0.6, '#868e96', 0, 2.3, 0); { const bag = cyl(0.3, 0.3, 1.2, '#c92a2a', 0, 1.4, 0); bag.userData.swing = true; } break;
      case 'mat': { const m = mesh(new T.PlaneGeometry(2.4, 1.6), mat('#4c6ef5'), 0, 0.02, 0, grp); m.rotation.x = -Math.PI / 2; } break;
      case 'dummy': cyl(0.25, 0.3, 0.1, '#495057', 0, 0.05, 0); cyl(0.2, 0.25, 1.1, '#f1d6a8', 0, 0.7, 0); sph(0.2, '#f1d6a8', 0, 1.45, 0); break;
      case 'ballrig': cyl(0.03, 0.03, 1.6, '#868e96', -0.5, 0.8, 0); { const ball = sph(0.18, '#ff922b', 0.2, 0.5, 0); ball.userData.bounce = true; } break;
      case 'tripod': { for (const a of [0, 2.1, 4.2]) { const l = B(0.04, 1.4, 0.04, '#343a40', Math.sin(a) * 0.25, 0.65, Math.cos(a) * 0.25); l.rotation.set(Math.cos(a) * 0.25, 0, -Math.sin(a) * 0.25); } B(0.5, 0.35, 0.3, '#212529', 0, 1.45, 0); const lens = cyl(0.12, 0.14, 0.3, '#495057', 0, 1.45, 0.28); lens.rotation.x = Math.PI / 2; const rec = sph(0.035, '#ff6b6b', -0.18, 1.6, 0.16); rec.userData.blink = true; } break;
      case 'lightstand': cyl(0.03, 0.03, 1.9, '#343a40', 0, 0.95, 0); { const sb = B(0.7, 0.5, 0.15, '#fff9db', 0, 2.0, 0); sb.material.emissive = C('#fff3bf'); sb.material.emissiveIntensity = 0.5; } break;
      case 'track': for (const dx of [-0.25, 0.25]) B(0.05, 0.05, 3.0, '#868e96', dx, 0.03, 0); B(0.7, 0.15, 0.6, '#495057', 0, 0.12, -0.6); break;
      case 'clock': { const face = cyl(0.5, 0.5, 0.06, '#f8f9fa', 0, 1.9, 0); face.rotation.x = Math.PI / 2; const hand = B(0.04, 0.38, 0.02, '#e03131', 0, 2.05, 0.05); hand.userData.clock = true; hand.geometry.translate(0, 0.15, 0); hand.position.y = 1.9; } break;
      case 'storywall': for (let k = 0; k < 8; k++) { B(0.75, 0.45, 0.03, '#ffffff', -1.35 + (k % 4) * 0.9, 1.3 + Math.floor(k / 4) * 0.6, 0); B(0.3, 0.18, 0.01, k % 2 ? R.color : R.accent, -1.4 + (k % 4) * 0.9, 1.3 + Math.floor(k / 4) * 0.6, 0.02); } break;
      case 'framewall': for (let k = 0; k < 5; k++) { B(0.6, 0.45, 0.04, '#343a40', -1.6 + k * 0.8, 1.6 + (k % 2) * 0.3, 0); B(0.5, 0.35, 0.01, ['#ffa8a8', '#74c0fc', '#8ce99a', '#ffe066', '#e599f7'][k], -1.6 + k * 0.8, 1.6 + (k % 2) * 0.3, 0.03); } break;
      case 'bigscreen': { B(2.4, 1.4, 0.08, '#212529', 0, 1.6, 0); const sc = B(2.25, 1.25, 0.01, '#4dabf7', 0, 1.6, 0.05); sc.material.emissive = C('#4dabf7'); sc.material.emissiveIntensity = 0.6; sc.userData.glow = true; } break;
      case 'projector': B(0.5, 0.3, 0.5, '#343a40', 0, 0.95, 0); B(0.6, 0.8, 0.6, '#868e96', 0, 0.4, 0); { const l = cyl(0.1, 0.1, 0.2, '#212529', 0, 0.95, 0.3); l.rotation.x = Math.PI / 2; } break;
      case 'reels': for (let k = 0; k < 3; k++) cyl(0.4, 0.4, 0.08, k % 2 ? '#495057' : '#212529', 0, 0.05 + k * 0.09, 0); break;
      case 'booth': { const glass = mesh(new T.BoxGeometry(1.6, 2.2, 1.6), new T.MeshStandardMaterial({ color: '#a5d8ff', transparent: true, opacity: 0.2 }), 0, 1.1, 0, grp); glass.renderOrder = 2; cyl(0.03, 0.03, 1.4, '#343a40', 0, 0.7, 0); sph(0.1, '#adb5bd', 0, 1.45, 0); } break;
      case 'speaker': B(0.55, 1.1, 0.5, '#212529', 0, 0.55, 0); { const w = cyl(0.17, 0.17, 0.02, '#495057', 0, 0.4, 0.26); w.rotation.x = Math.PI / 2; w.userData.pulse = true; const tw = cyl(0.08, 0.08, 0.02, '#495057', 0, 0.85, 0.26); tw.rotation.x = Math.PI / 2; } break;
      case 'piano': B(1.6, 0.9, 0.7, '#212529', 0, 0.75, 0); B(1.5, 0.06, 0.25, '#f8f9fa', 0, 1.0, 0.4); for (let k = 0; k < 9; k++) B(0.06, 0.07, 0.15, '#212529', -0.6 + k * 0.15, 1.04, 0.36); B(1.6, 0.06, 0.3, '#212529', 0, 0.3, 0.3); break;
      case 'notes': { const n = mesh(new T.PlaneGeometry(0.6, 0.6), new T.MeshBasicMaterial({ map: emojiTex('🎵'), transparent: true, side: T.DoubleSide }), 0, 1.6, 0, grp); n.userData.float = true; } break;
      case 'console': B(1.6, 0.8, 0.8, '#343a40', 0, 0.4, 0); { const top = B(1.6, 0.05, 0.8, '#212529', 0, 0.83, 0); top.rotation.x = -0.2; for (let k = 0; k < 10; k++) { const f = B(0.05, 0.05, 0.12, ['#ff6b6b', '#ffd43b', '#69db7c', '#4dabf7'][k % 4], -0.65 + k * 0.145, 0.9, 0); f.userData.fader = k; } } break;
      case 'foley': sph(0.15, '#8d6e63', -0.2, 0.15, 0); sph(0.15, '#8d6e63', 0.15, 0.15, 0.1); B(0.6, 0.4, 0.4, '#d4a373', 0, 0.2, -0.5); break;
      case 'greenscreen': { const gs = B(4.0, 2.3, 0.04, '#2f9e44', 0, 1.2, 0); gs.material.emissive = C('#2f9e44'); gs.material.emissiveIntensity = 0.25; } break;
      case 'checkboard': B(2.4, 1.5, 0.06, '#f8f9fa', 0, 1.6, 0); for (let k = 0; k < 4; k++) { B(0.18, 0.18, 0.02, k < 3 ? '#40c057' : '#fa5252', -0.9, 2.1 - k * 0.32, 0.04); B(1.3, 0.06, 0.02, '#adb5bd', -0.05, 2.1 - k * 0.32, 0.04); } break;
      case 'trafficlight': B(0.35, 0.9, 0.3, '#212529', 0, 1.6, 0); cyl(0.04, 0.04, 1.2, '#343a40', 0, 0.6, 0); ['#fa5252', '#fab005', '#40c057'].forEach((col, k) => { const s2 = sph(0.1, col, 0, 1.88 - k * 0.27, 0.15); s2.material.emissive = C(col); s2.material.emissiveIntensity = k === 2 ? 0.9 : 0.15; }); break;
      case 'magnifier': { const ring = mesh(new T.TorusGeometry(0.35, 0.05, 12, 30), mat('#495057'), 0, 1.2, 0, grp); ring.rotation.y = 0.5; B(0.08, 0.8, 0.08, '#a0522d', 0, 0.55, 0); const lens = mesh(new T.CircleGeometry(0.33, 30), new T.MeshStandardMaterial({ color: '#a5d8ff', transparent: true, opacity: 0.35 }), 0, 1.2, 0, grp); lens.rotation.y = 0.5; } break;
      default:
    }
  }

  function buildCabin() {
    const g = new T.Group();
    scene.add(g);
    const x0 = -15, x1 = -1, z0 = -10.5, z1 = 10.5;
    const fl = mesh(new T.PlaneGeometry(x1 - x0, z1 - z0), new T.MeshStandardMaterial({ map: floorTex('#e8d5b5', '#d4bc95'), roughness: 0.85 }), (x0 + x1) / 2, 0.01, 0, g);
    fl.rotation.x = -Math.PI / 2;
    fl.userData.room = COORD;
    const rug = mesh(new T.PlaneGeometry(7, 5), mat('#f6b73c', { roughness: 1 }), -8, 0.02, 0, g); rug.rotation.x = -Math.PI / 2;
    // window wall behind the coordinator: sky and a little skyline
    const skyTex = canvasTex(1024, 256, (x, cv) => {
      const gr = x.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#74c0fc'); gr.addColorStop(1, '#ffe8cc'); x.fillStyle = gr; x.fillRect(0, 0, 1024, 256);
      x.fillStyle = '#ffffff'; for (let k = 0; k < 6; k++) { x.beginPath(); x.ellipse(80 + k * 170, 50 + (k % 2) * 25, 50, 16, 0, 0, 7); x.fill(); }
      for (let k = 0; k < 26; k++) { const hh = 60 + ((k * 53) % 120); x.fillStyle = ['#5c7cfa', '#748ffc', '#4263eb', '#91a7ff'][k % 4]; x.fillRect(k * 40, 256 - hh, 34, hh); x.fillStyle = '#fff3bf'; for (let w = 0; w < hh / 20; w++) x.fillRect(k * 40 + 6, 256 - hh + 8 + w * 20, 6, 8); }
      void cv;
    });
    const win = mesh(new T.PlaneGeometry(20, 2.0), new T.MeshBasicMaterial({ map: skyTex }), x0 + 0.12, 1.55, 0, g); win.rotation.y = Math.PI / 2;
    wall(x0, 0, 21, Math.PI / 2, '#ffe8a3', g, { h: 0.55 });
    for (let k = -4; k <= 4; k++) boxM(0.12, 2.0, 0.12, '#ffffff', x0 + 0.1, 1.55, k * 2.4, g);
    boxM(0.2, 0.15, 21, '#ffffff', x0 + 0.05, WH + 0.0, 0, g);
    wall((x0 + x1) / 2, z0, x1 - x0, 0, '#ffe8a3', g);
    wall((x0 + x1) / 2, z1, x1 - x0, 0, '#ffe8a3', g);
    // east wall with the door to the hallway
    wall(x1, -6.05, 8.9, Math.PI / 2, '#ffe8a3', g);
    wall(x1, 6.05, 8.9, Math.PI / 2, '#ffe8a3', g);
    // big desk, coordinator stands behind it (west), the client chair faces it
    const desk = new T.Group(); desk.position.set(-8.2, 0, 0); g.add(desk);
    boxM(1.4, 0.1, 3.4, '#8d5a2b', 0, 0.82, 0, desk);
    boxM(1.3, 0.78, 0.1, '#6d4520', 0, 0.39, -1.6, desk); boxM(1.3, 0.78, 0.1, '#6d4520', 0, 0.39, 1.6, desk); boxM(0.08, 0.6, 3.2, '#6d4520', 0.6, 0.45, 0, desk);
    mesh(new T.CylinderGeometry(0.08, 0.06, 0.16, 16), mat('#f6b73c'), 0.1, 0.95, 1.1, desk);
    boxM(0.5, 0.03, 0.35, '#ffffff', 0.15, 0.885, -0.6, desk).rotation.y = 0.2;
    const nameTex = canvasTex(512, 128, (x) => { x.fillStyle = '#212529'; x.fillRect(0, 0, 512, 128); x.fillStyle = '#ffd43b'; x.font = 'bold 54px Fredoka, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('📋 CAPTAIN CLIPBOARD', 256, 66); });
    const plate = mesh(new T.BoxGeometry(0.08, 0.16, 1.2), [mat('#212529'), mat('#212529'), mat('#212529'), mat('#212529'), new T.MeshBasicMaterial({ map: nameTex }), mat('#212529')], 0.55, 0.95, 0, desk);
    plate.material[0] = new T.MeshBasicMaterial({ map: nameTex });
    // client chair (where "you" sit)
    const chair = new T.Group(); chair.position.set(-5.2, 0, 0); g.add(chair);
    boxM(0.8, 0.1, 0.8, '#4c6ef5', 0, 0.5, 0, chair); boxM(0.1, 0.8, 0.8, '#4c6ef5', 0.4, 0.9, 0, chair); mesh(new T.CylinderGeometry(0.05, 0.05, 0.45, 8), mat('#495057'), 0, 0.25, 0, chair);
    // the big TV behind the coordinator shows the live director feed
    tvTarget = new T.WebGLRenderTarget(640, 360);
    tvTarget.texture.colorSpace = T.SRGBColorSpace;
    boxM(0.12, 1.75, 3.05, '#111318', x0 + 0.35, 1.75, 0, g);
    tvMat = new T.MeshBasicMaterial({ map: tvTarget.texture });
    const tv = mesh(new T.PlaneGeometry(2.9, 1.63), tvMat, x0 + 0.42, 1.75, 0, g); tv.rotation.y = Math.PI / 2; tvMesh = tv;
    const liveTex = canvasTex(256, 64, (x) => { x.fillStyle = '#e03131'; x.fillRect(0, 0, 256, 64); x.fillStyle = '#fff'; x.font = 'bold 40px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('● LIVE FEED', 128, 34); });
    const live = mesh(new T.PlaneGeometry(0.8, 0.2), new T.MeshBasicMaterial({ map: liveTex }), x0 + 0.43, 2.75, 0, g); live.rotation.y = Math.PI / 2;
    // mission board (stage progress) on the north wall
    boardCanvas = document.createElement('canvas'); boardCanvas.width = 1024; boardCanvas.height = 512;
    boardTex = new T.CanvasTexture(boardCanvas); boardTex.colorSpace = T.SRGBColorSpace;
    boxM(4.2, 2.1, 0.08, '#ffffff', -8.2, 1.55, z0 + 0.15, g);
    mesh(new T.PlaneGeometry(4.0, 2.0), new T.MeshBasicMaterial({ map: boardTex }), -8.2, 1.55, z0 + 0.2, g);
    drawBoard();
    // cosy bits
    const sofa = new T.Group(); sofa.position.set(-11.5, 0, 7.6); g.add(sofa);
    boxM(3.0, 0.45, 1.0, '#e8590c', 0, 0.3, 0, sofa); boxM(3.0, 0.7, 0.25, '#e8590c', 0, 0.7, 0.4, sofa); boxM(0.3, 0.55, 1.0, '#d9480f', -1.45, 0.5, 0, sofa); boxM(0.3, 0.55, 1.0, '#d9480f', 1.45, 0.5, 0, sofa);
    for (const [x, z] of [[-14, -9.5], [-2, -9.5], [-2, 9.5], [-14, 4.5]]) { const p = new T.Group(); p.position.set(x, 0, z); g.add(p); decor(['plant', 0, 0], p, ROBOTS[COORD]); }
    const coffee = new T.Group(); coffee.position.set(-3.2, 0, -9.6); g.add(coffee);
    boxM(1.4, 0.95, 0.6, '#495057', 0, 0.48, 0, coffee); boxM(0.5, 0.6, 0.4, '#212529', 0, 1.25, 0, coffee); mesh(new T.CylinderGeometry(0.07, 0.06, 0.14, 12), mat('#ffffff'), 0.35, 1.03, 0.1, coffee);
    const oilTex = canvasTex(256, 64, (x) => { x.fillStyle = '#845ef7'; x.fillRect(0, 0, 256, 64); x.fillStyle = '#fff'; x.font = 'bold 36px sans-serif'; x.textAlign = 'center'; x.fillText('🛢 OIL BAR', 128, 44); });
    mesh(new T.PlaneGeometry(1.2, 0.3), new T.MeshBasicMaterial({ map: oilTex }), 0, 1.85, 0.21, coffee);
    // trophy shelf
    const shelf = new T.Group(); shelf.position.set(-12.5, 0, -9.9); g.add(shelf);
    boxM(2.4, 1.6, 0.4, '#9c6b3f', 0, 0.8, 0, shelf);
    for (let k = 0; k < 3; k++) { const cup = mesh(new T.CylinderGeometry(0.14, 0.08, 0.3, 16), new T.MeshStandardMaterial({ color: '#fcc419', metalness: 0.8, roughness: 0.25 }), -0.7 + k * 0.7, 1.75, 0, shelf); cup.userData.trophy = true; }
    rooms[COORD] = { g, info: null };
  }

  function buildHallway() {
    const len = 10 * (RW + GAP) + 1;
    const fl = mesh(new T.PlaneGeometry(len, HALL), new T.MeshStandardMaterial({ map: floorTex('#d9d2c5', '#c9c0b0'), roughness: 0.9 }), len / 2 - 1, 0.005, 0);
    fl.rotation.x = -Math.PI / 2;
    const runner = mesh(new T.PlaneGeometry(len - 1, 1.4), mat('#c92a2a', { roughness: 1 }), len / 2 - 0.5, 0.012, 0); runner.rotation.x = -Math.PI / 2;
    const ground = mesh(new T.PlaneGeometry(400, 400), new T.MeshStandardMaterial({ color: '#b2d8a4', roughness: 1 }), 40, -0.02, 0); ground.rotation.x = -Math.PI / 2;
    wall(len - 0.9, 0, HALL, Math.PI / 2, '#ffffff');
    for (let k = 0; k < 10; k++) {
      const x = k * (RW + GAP) + RW / 2;
      const lamp = mesh(new T.CylinderGeometry(0.35, 0.35, 0.05, 20), new T.MeshStandardMaterial({ color: '#fff9db', emissive: '#fff3bf', emissiveIntensity: 0.8 }), x + 2, 0.02, 0);
      void lamp;
    }
    const logoTex = canvasTex(1024, 256, (x) => { x.fillStyle = 'rgba(0,0,0,0)'; x.clearRect(0, 0, 1024, 256); x.fillStyle = '#ffd43b'; x.font = 'bold 120px Fredoka, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('🎬 ROBO FILM STUDIO', 512, 128); });
    const logo = mesh(new T.PlaneGeometry(4.4, 1.1), new T.MeshBasicMaterial({ map: logoTex, transparent: true }), 1.6, 0.03, 0); logo.rotation.x = -Math.PI / 2; logo.rotation.z = -Math.PI / 2;
    // the screening room at the far end of the south side
    const info = SCREENING, c = roomCenter(info);
    const g = new T.Group(); g.position.set(c.x, 0, c.z); g.rotation.y = roomYaw(info); scene.add(g);
    const sfl = mesh(new T.PlaneGeometry(RW, RD), mat('#5f3dc4'), 0, 0.01, 0, g); sfl.rotation.x = -Math.PI / 2;
    wall(0, -RD / 2, RW, 0, '#3b2a7a', g); wall(-RW / 2, 0, RD, Math.PI / 2, '#3b2a7a', g); wall(RW / 2, 0, RD, Math.PI / 2, '#3b2a7a', g); frontWall(info, '#3b2a7a', g);
    const scr = boxM(6.0, 2.0, 0.05, '#f8f9fa', 0, 1.5, -RD / 2 + 0.15, g); scr.material.emissive = C('#e5dbff'); scr.material.emissiveIntensity = 0.4;
    for (let r = 0; r < 2; r++) for (let k = 0; k < 4; k++) { boxM(0.8, 0.45, 0.8, '#c92a2a', -2.4 + k * 1.6, 0.25, 0.6 + r * 1.6, g); boxM(0.8, 0.6, 0.15, '#c92a2a', -2.4 + k * 1.6, 0.7, 0.95 + r * 1.6, g); }
    const sTex = canvasTex(512, 128, (x) => { x.fillStyle = '#5f3dc4'; x.fillRect(0, 0, 512, 128); x.fillStyle = '#fff'; x.font = 'bold 50px Fredoka, sans-serif'; x.textBaseline = 'middle'; x.fillText('🍿 Screening Room', 30, 66); });
    mesh(new T.PlaneGeometry(2.4, 0.6), new T.MeshBasicMaterial({ map: sTex }), 0, WH + 0.45, RD / 2 + 0.14, g);
    // Dusty the roomba
    const d = new T.Group(); scene.add(d);
    mesh(new T.CylinderGeometry(0.3, 0.32, 0.12, 24), mat('#ced4da'), 0, 0.08, 0, d);
    const led = mesh(new T.SphereGeometry(0.05, 10, 8), new T.MeshStandardMaterial({ color: '#51cf66', emissive: '#51cf66' }), 0.12, 0.16, 0.12, d);
    led.userData.blink = true;
    dusty = { g: d, x: 2, tx: 20, wait: 0 };
  }

  function drawBoard() {
    if (!boardCanvas) return;
    const x = boardCanvas.getContext('2d');
    x.fillStyle = '#ffffff'; x.fillRect(0, 0, 1024, 512);
    x.fillStyle = '#212529'; x.font = 'bold 54px Fredoka, sans-serif'; x.fillText('MISSION BOARD', 40, 70);
    const n = boardStages.length;
    const done = boardStages.filter((s2) => s2.status === 'done').length;
    x.font = '34px Nunito, sans-serif'; x.fillStyle = '#495057'; x.fillText(n ? `${done} of ${n} stages done` : 'Waiting for a pitch…', 40, 120);
    boardStages.forEach((s2, k) => {
      const cx = 70 + (k % 11) * 88, cy = 210 + Math.floor(k / 11) * 120;
      x.beginPath(); x.arc(cx, cy, 30, 0, 7);
      x.fillStyle = { done: '#40c057', working: '#fab005', review: '#4dabf7', error: '#fa5252', stale: '#ff922b', skipped: '#dee2e6' }[s2.status] || '#e9ecef'; x.fill();
      x.font = '30px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(STAGE[s2.id].icon, cx, cy + 2); x.textAlign = 'left'; x.textBaseline = 'alphabetic';
    });
    boardTex.needsUpdate = true;
  }
  function drawScreen(id, text, level) {
    const r = rooms[id];
    if (!r || !r.screenCanvas) return;
    const x = r.screenCanvas.getContext('2d');
    const R = ROBOTS[id];
    x.fillStyle = '#1f2433'; x.fillRect(0, 0, 256, 160);
    x.fillStyle = R.color; x.fillRect(0, 0, 256, 22);
    x.fillStyle = '#1f2433'; x.font = 'bold 14px sans-serif'; x.fillText(`${R.emoji} ${R.name}`, 8, 16);
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
      case 'headset': add(new T.TorusGeometry(0.36, 0.035, 8, 24, Math.PI), '#2b2d42', 0, 0.05, 0, head).rotation.z = 0; add(new T.SphereGeometry(0.09, 12, 10), '#2b2d42', -0.36, 0.0, 0, head); add(new T.SphereGeometry(0.09, 12, 10), '#2b2d42', 0.36, 0.0, 0, head); add(new T.BoxGeometry(0.22, 0.3, 0.03), '#a0522d', 0, -0.05, 0.08, hl); add(new T.BoxGeometry(0.18, 0.22, 0.01), '#ffffff', 0, -0.05, 0.1, hl); break;
      case 'quill': { add(new T.SphereGeometry(0.3, 16, 8), R.accent, 0.05, 0.3, 0, head).scale.set(1.1, 0.35, 1.1); const q = add(new T.ConeGeometry(0.06, 0.5, 8), '#ffffff', 0, 0.2, 0.05, hr); q.rotation.x = 0.4; break; }
      case 'script': add(new T.BoxGeometry(0.24, 0.32, 0.03), '#ffffff', 0, -0.02, 0.08, hr).rotation.z = 0.2; { const p = add(new T.CylinderGeometry(0.025, 0.025, 0.35, 8), '#fcc419', 0.33, 0.22, 0, head); p.rotation.z = -0.9; } break;
      case 'sketchbook': add(new T.BoxGeometry(0.3, 0.38, 0.04), '#ffffff', 0, -0.05, 0.08, hl); add(new T.ConeGeometry(0.08, 0.2, 4), R.accent, 0.22, 0.32, 0, head).rotation.z = -0.6; add(new T.ConeGeometry(0.08, 0.2, 4), R.accent, 0.38, 0.3, 0, head).rotation.z = 0.6; break;
      case 'hardhat': add(new T.SphereGeometry(0.34, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), '#ffd43b', 0, 0.12, 0, head); add(new T.CylinderGeometry(0.42, 0.42, 0.03, 24), '#fab005', 0, 0.13, 0, head); { const roll = add(new T.CylinderGeometry(0.06, 0.06, 0.5, 12), '#a5d8ff', 0, 0.1, 0.05, hr); roll.rotation.x = 1.0; } break;
      case 'palette': add(new T.SphereGeometry(0.3, 16, 8), '#e03131', -0.05, 0.3, 0, head).scale.set(1.1, 0.35, 1.1); { const pal = add(new T.CylinderGeometry(0.2, 0.2, 0.03, 20), '#f1d6a8', 0, 0, 0.1, hl); pal.rotation.x = Math.PI / 2; } break;
      case 'megaphone': { add(new T.CylinderGeometry(0.33, 0.33, 0.12, 20), '#2b2d42', 0, 0.3, 0, head); const m = add(new T.ConeGeometry(0.14, 0.4, 16, 1, true), '#f8f9fa', 0, 0.15, 0.1, hr, { side: T.DoubleSide }); m.rotation.x = -1.2; break; }
      case 'gloves': b.handL.scale.setScalar(1.8); b.handR.scale.setScalar(1.8); b.handL.material = mat('#e03131'); b.handR.material = mat('#e03131'); add(new T.TorusGeometry(0.33, 0.04, 8, 24), '#e03131', 0, 0.12, 0, head).rotation.x = Math.PI / 2; break;
      case 'flipbook': add(new T.BoxGeometry(0.28, 0.2, 0.06), '#fff3bf', 0, -0.03, 0.08, hl); { const ball = add(new T.SphereGeometry(0.08, 12, 10), '#ff922b', 0.4, 0.4, 0, head); ball.userData.bounce = true; } break;
      case 'camera': add(new T.BoxGeometry(0.34, 0.24, 0.2), '#2b2d42', 0, 0.05, 0.05, hr); { const l = add(new T.CylinderGeometry(0.08, 0.09, 0.16, 12), '#495057', 0, 0.05, 0.22, hr); l.rotation.x = Math.PI / 2; } { const cap = add(new T.SphereGeometry(0.31, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), R.accent, 0, 0.16, 0, head); void cap; } break;
      case 'stopwatch': add(new T.CylinderGeometry(0.09, 0.09, 0.04, 16), '#f8f9fa', 0, 0, 0.08, hr).rotation.x = Math.PI / 2; for (const sx of [-0.13, 0.13]) add(new T.TorusGeometry(0.08, 0.015, 6, 16), '#2b2d42', sx, 0.02, 0.36, head); break;
      case 'board': add(new T.BoxGeometry(0.45, 0.32, 0.03), '#ffffff', 0.05, 0.1, 0.1, hr); break;
      case 'wand': { const hat = add(new T.ConeGeometry(0.28, 0.6, 20), '#5f3dc4', 0, 0.48, 0, head); void hat; add(new T.CylinderGeometry(0.015, 0.015, 0.45, 6), '#2b2d42', 0, 0.15, 0.05, hr).rotation.x = 0.5; const st = add(new T.OctahedronGeometry(0.07), '#fcc419', 0, 0.36, 0.17, hr, { emissive: '#fcc419', emissiveIntensity: 0.6 }); st.userData.spin = true; break; }
      case 'filmstrip': add(new T.TorusGeometry(0.33, 0.05, 8, 24), '#2b2d42', 0, 0.62, 0, b.body).rotation.x = Math.PI / 2; add(new T.CylinderGeometry(0.12, 0.12, 0.03, 3), '#ffffff', 0, 0, 0.1, hr).rotation.x = Math.PI / 2; break;
      case 'mic': add(new T.CylinderGeometry(0.03, 0.025, 0.25, 8), '#2b2d42', 0, 0.1, 0.05, hr); add(new T.SphereGeometry(0.07, 12, 10), '#adb5bd', 0, 0.25, 0.05, hr); add(new T.BoxGeometry(0.2, 0.08, 0.04), '#2b2d42', 0, 0.68, 0.33, b.body); break;
      case 'baton': add(new T.CylinderGeometry(0.01, 0.015, 0.45, 6), '#f8f9fa', 0, 0.2, 0.05, hr).rotation.x = 0.6; add(new T.BoxGeometry(0.2, 0.08, 0.04), '#2b2d42', 0, 0.68, 0.33, b.body); add(new T.SphereGeometry(0.3, 16, 8), '#e9ecef', 0.1, 0.25, -0.05, head).scale.set(1.1, 0.4, 1.0); break;
      case 'headphones': add(new T.TorusGeometry(0.38, 0.04, 8, 24, Math.PI), '#2b2d42', 0, 0.05, 0, head); add(new T.CylinderGeometry(0.13, 0.13, 0.08, 16), R.accent, -0.39, 0, 0, head).rotation.z = Math.PI / 2; add(new T.CylinderGeometry(0.13, 0.13, 0.08, 16), R.accent, 0.39, 0, 0, head).rotation.z = Math.PI / 2; break;
      case 'goggles': add(new T.TorusGeometry(0.34, 0.03, 8, 24), '#2b2d42', 0, 0.15, 0, head).rotation.x = Math.PI / 2; for (const sx of [-0.12, 0.12]) add(new T.CylinderGeometry(0.1, 0.1, 0.06, 16), '#96f2d7', sx, 0.2, 0.3, head, { emissive: '#63e6be', emissiveIntensity: 0.3 }).rotation.x = Math.PI / 2; break;
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
    // legs
    const legL = new T.Group(); legL.position.set(-0.15, 0.42, 0); body.add(legL);
    const legR = new T.Group(); legR.position.set(0.15, 0.42, 0); body.add(legR);
    for (const L of [legL, legR]) { mesh(new T.CapsuleGeometry(0.08, 0.22, 4, 10), mat(shade2(0.3)), 0, -0.18, 0, L); mesh(new T.SphereGeometry(0.12, 14, 10), mat('#2b2d42'), 0, -0.36, 0.04, L).scale.set(1, 0.6, 1.4); }
    // torso
    const torso = mesh(new T.CapsuleGeometry(0.3, 0.32, 6, 18), mat(R.color), 0, 0.82, 0, body);
    torso.scale.set(1, 1, 0.82);
    const belly = mesh(new T.CircleGeometry(0.17, 24), mat('#' + lighten(R.color, 0.55).getHexString()), 0, 0.82, 0.25, body);
    const emo = mesh(new T.PlaneGeometry(0.22, 0.22), new T.MeshBasicMaterial({ map: emojiTex(R.emoji), transparent: true }), 0, 0.82, 0.26, body);
    void belly; void emo;
    // arms
    const mkArm = (sx) => { const a = new T.Group(); a.position.set(sx * 0.36, 1.02, 0); body.add(a); mesh(new T.CapsuleGeometry(0.065, 0.28, 4, 10), mat(shade2(0.15)), 0, -0.2, 0, a); const hand = mesh(new T.SphereGeometry(0.095, 14, 10), mat(shade2(0.25)), 0, -0.42, 0, a); const handG = new T.Group(); handG.position.set(0, -0.42, 0); a.add(handG); return { a, hand, handG }; };
    const L = mkArm(-1), Rr = mkArm(1);
    // head
    const head = new T.Group(); head.position.set(0, 1.42, 0); body.add(head);
    const skull = mesh(new T.SphereGeometry(0.34, 24, 18), mat(R.color), 0, 0, 0, head); skull.scale.set(1.12, 0.9, 0.95);
    const face = mesh(new T.SphereGeometry(0.3, 24, 18, -Math.PI / 2.6, Math.PI / 1.3, Math.PI / 3.2, Math.PI / 2.6), new T.MeshStandardMaterial({ color: '#1f2433', roughness: 0.3 }), 0, -0.01, 0.035, head);
    face.scale.set(1.1, 0.95, 1.02);
    const eyeMat = new T.MeshBasicMaterial({ color: '#c5f6fa' });
    const eyes = [-0.1, 0.1].map((sx) => { const e = mesh(new T.CapsuleGeometry(0.035, 0.05, 4, 8), eyeMat, sx, 0.03, 0.31, head); return e; });
    const mouth = mesh(new T.TorusGeometry(0.05, 0.012, 6, 12, Math.PI), eyeMat, 0, -0.08, 0.305, head); mouth.rotation.z = Math.PI;
    for (const sx of [-0.21, 0.21]) mesh(new T.CircleGeometry(0.04, 12), new T.MeshBasicMaterial({ color: '#ff8787', transparent: true, opacity: 0.6 }), sx, -0.07, 0.29, head);
    mesh(new T.CylinderGeometry(0.015, 0.015, 0.18, 6), mat(shade2(0.35)), 0, 0.37, 0, head);
    const ball = mesh(new T.SphereGeometry(0.06, 12, 10), new T.MeshStandardMaterial({ color: R.accent, emissive: R.accent, emissiveIntensity: 0.2 }), 0, 0.48, 0, head);
    // blob shadow
    const sh = mesh(new T.CircleGeometry(0.42, 24), new T.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.18, depthWrite: false }), 0, 0.015, 0, g);
    sh.rotation.x = -Math.PI / 2;
    const parts = { body, legL, legR, armL: L.a, armR: Rr.a, handL: L.hand, handR: Rr.hand, head, eyes, mouth, ball };
    makeAcc(R.acc, R, { head, handL: L.hand, handR: Rr.hand, body });
    const zzz = mesh(new T.PlaneGeometry(0.4, 0.4), new T.MeshBasicMaterial({ map: emojiTex('💤'), transparent: true, depthWrite: false }), 0.35, 1.95, 0, g);
    zzz.visible = false;
    const thinkSprite = new T.Sprite(new T.SpriteMaterial({ map: emojiTex('💭'), transparent: true, depthWrite: false }));
    thinkSprite.scale.set(0.45, 0.45, 1); thinkSprite.position.set(0.45, 2.05, 0); thinkSprite.visible = false; g.add(thinkSprite);
    g.traverse((o) => { o.userData.bot = id; });
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
    if (!animated) { animated = []; scene.traverse((o) => { const u = o.userData; if (u.blink || u.pulse || u.fader != null || u.float || u.clock || u.glow || u.swing || u.trophy) animated.push(o); }); }
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
    }
    // the feed camera always follows the director's shot; the main camera depends on the view
    const fp = shotPose(t);
    steer(feedCam, fp, dt, fp.lerp, shot.fresh);
    if (mode === 'director') steer(cam, fp, dt, fp.lerp, shot.fresh);
    else if (mode === 'seat') steer(cam, seatPose(t), dt, 5, false);
    else if (mode === 'top') steer(cam, topPose(), dt, 6, false);
    else steer(cam, roomPose(t), dt, 3, false);
    shot.fresh = false;
    if (mode === 'seat' && t - lastTv > 0.08) {
      lastTv = t;
      tvMesh.visible = false;
      renderer.setRenderTarget(tvTarget);
      renderer.render(scene, feedCam);
      renderer.setRenderTarget(null);
      tvMesh.visible = true;
    }
    renderer.render(scene, cam);
    updateOverlay();
  }
  function resize() {
    const w = canvas.clientWidth || 800, hgt = canvas.clientHeight || 450;
    renderer.setSize(w, hgt, false);
    cam.aspect = w / hgt; cam.updateProjectionMatrix();
  }

  async function init(container) {
    try { T = await import(THREE_URL); } catch (e) { console.warn('three.js failed to load', e); return false; }
    try {
      canvas = document.createElement('canvas');
      canvas.className = 'world-canvas';
      container.prepend(canvas);
      renderer = new T.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
      renderer.outputColorSpace = T.SRGBColorSpace;
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
    } catch (e) { console.warn('WebGL unavailable', e); if (canvas) canvas.remove(); return false; }
    overlay = h('div', { class: 'w-overlay' });
    flashEl = h('div', { class: 'w-flash' });
    container.append(overlay, flashEl);
    scene = new T.Scene();
    scene.background = C('#bfe3ff');
    scene.fog = new T.Fog('#bfe3ff', 60, 160);
    cam = new T.PerspectiveCamera(50, 16 / 9, 0.1, 400);
    feedCam = new T.PerspectiveCamera(50, 16 / 9, 0.1, 400);
    scene.add(new T.HemisphereLight('#ffffff', '#b8a68f', 1.6));
    const sun = new T.DirectionalLight('#fff4e0', 1.4); sun.position.set(20, 40, 25); scene.add(sun);
    clock = new T.Clock();
    buildCabin();
    buildHallway();
    for (const id of WORKERS) buildRoom(id, ROOM3D[id]);
    for (const id of Object.keys(ROBOTS)) bots[id] = makeBot(id);
    place(bots[COORD], COORD_HOME.x, COORD_HOME.z, COORD_HOME.h);
    for (const id of WORKERS) { const d = deskSpot(id); const p = toWorld(ROOM3D[id], (Math.random() - 0.5) * 4, 1 + Math.random() * 2); place(bots[id], p.x, p.z, d.h); }
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
