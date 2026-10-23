// ---------- the isometric studio ----------
const TW = 30, TH = 15, WALL = 26;
const iso = (gx, gy) => ({ x: (gx - gy) * TW, y: (gx + gy) * TH });
const pts = (arr) => arr.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
const up = (p, hgt) => ({ x: p.x, y: p.y - hgt });

const Studio = (() => {
  let svg, layerFloor, layerObj, layerSign, layerOver;
  const robots = {}; // id -> {el, gx, gy, home:{gx,gy}, desk, paper, bubble, room}
  const roomGeo = {};
  let speed = 1;
  let follow = true;
  const cam = { cx: 0, cy: 380, w: 1760, tcx: 0, tcy: 380, tw: 1760 };
  let walkers = []; // active tweens
  let clickCb = null;
  let boardEl = null;
  let dusty = null;
  let crateCount = 0;

  function box(gx, gy, w, d, hgt, color, extra) {
    const top = [iso(gx, gy), iso(gx + w, gy), iso(gx + w, gy + d), iso(gx, gy + d)].map((p) => up(p, hgt));
    const left = [iso(gx, gy + d), iso(gx + w, gy + d), up(iso(gx + w, gy + d), hgt), up(iso(gx, gy + d), hgt)];
    const right = [iso(gx + w, gy), iso(gx + w, gy + d), up(iso(gx + w, gy + d), hgt), up(iso(gx + w, gy), hgt)];
    const g = s('g', { class: 'box ' + (extra || '') },
      s('polygon', { points: pts(left), fill: shade(color, -0.18) }),
      s('polygon', { points: pts(right), fill: shade(color, -0.32) }),
      s('polygon', { points: pts(top), fill: color }));
    g.dataset.depth = gx + w / 2 + gy + d / 2;
    return g;
  }
  // a flat group painted onto a +gy-facing vertical face whose top-left is (gx, gy) at height hgt
  function faceGroup(gx, gy, hgt) {
    const p = up(iso(gx, gy), hgt);
    return s('g', { transform: `matrix(1,0.5,0,1,${p.x.toFixed(1)},${p.y.toFixed(1)})` });
  }
  function addObj(el, depth) {
    el.dataset.depth = depth;
    const list = layerObj.children;
    let i = list.length;
    while (i > 0 && +list[i - 1].dataset.depth > depth) i--;
    layerObj.insertBefore(el, list[i] || null);
  }
  function resort(el) {
    const d = +el.dataset.depth;
    let prev = el.previousElementSibling, next = el.nextElementSibling;
    if ((prev && +prev.dataset.depth > d) || (next && +next.dataset.depth < d)) { el.remove(); addObj(el, d); }
  }

  function drawFloors() {
    // corridor
    const c = [iso(-2, -2), iso(30, -2), iso(30, 30), iso(-2, 30)];
    layerFloor.append(s('polygon', { points: pts(c), class: 'corridor' }));
    for (let k = -2; k <= 30; k += 2) {
      layerFloor.append(s('line', { x1: iso(k, -2).x, y1: iso(k, -2).y, x2: iso(k, 30).x, y2: iso(k, 30).y, class: 'corridor-line' }));
      layerFloor.append(s('line', { x1: iso(-2, k).x, y1: iso(-2, k).y, x2: iso(30, k).x, y2: iso(30, k).y, class: 'corridor-line' }));
    }
    for (const room of ROOMS) {
      const [cx, cy] = room.cell;
      const ox = cx * 10, oy = cy * 10;
      roomGeo[room.id] = { ox, oy };
      const fl = [iso(ox, oy), iso(ox + 8, oy), iso(ox + 8, oy + 8), iso(ox, oy + 8)];
      const g = s('g', { class: 'room-floor ' + room.floor, 'data-room': room.id });
      g.append(s('polygon', { points: pts(fl), class: 'floor' }));
      for (let k = 1; k < 8; k++) {
        g.append(s('line', { x1: iso(ox + k, oy).x, y1: iso(ox + k, oy).y, x2: iso(ox + k, oy + 8).x, y2: iso(ox + k, oy + 8).y, class: 'tile' }));
        g.append(s('line', { x1: iso(ox, oy + k).x, y1: iso(ox, oy + k).y, x2: iso(ox + 8, oy + k).x, y2: iso(ox + 8, oy + k).y, class: 'tile' }));
      }
      g.append(s('polygon', { points: pts(fl), class: 'floor-glow' }));
      g.addEventListener('click', () => clickCb && clickCb({ room: room.id }));
      layerFloor.append(g);
      // back walls in 1-tile segments (door gap at tiles 3-4), depth-sorted with objects
      for (let k = 0; k < 8; k++) {
        if (k === 3 || k === 4) continue;
        const a1 = iso(ox + k, oy), a2 = iso(ox + k + 1, oy);
        const wa = s('polygon', { points: pts([a1, a2, up(a2, WALL), up(a1, WALL)]), class: 'wall wall-a ' + room.floor });
        addObj(wa, ox + k + 0.5 + oy - 0.6);
        const b1 = iso(ox, oy + k), b2 = iso(ox, oy + k + 1);
        const wb = s('polygon', { points: pts([b1, b2, up(b2, WALL), up(b1, WALL)]), class: 'wall wall-b ' + room.floor });
        addObj(wb, ox + oy + k + 0.5 - 0.6);
      }
      // wall caps
      const capA = s('polyline', { points: pts([up(iso(ox, oy), WALL), up(iso(ox + 3, oy), WALL)]), class: 'wall-cap' });
      const capA2 = s('polyline', { points: pts([up(iso(ox + 5, oy), WALL), up(iso(ox + 8, oy), WALL)]), class: 'wall-cap' });
      const capB = s('polyline', { points: pts([up(iso(ox, oy), WALL), up(iso(ox, oy + 3), WALL)]), class: 'wall-cap' });
      const capB2 = s('polyline', { points: pts([up(iso(ox, oy + 5), WALL), up(iso(ox, oy + 8), WALL)]), class: 'wall-cap' });
      addObj(capA, ox + oy + 1.4); addObj(capA2, ox + oy + 6.4); addObj(capB, ox + oy + 1.4); addObj(capB2, ox + oy + 6.4);
      // floating sign
      const sp = up(iso(ox + 4, oy + 4), 0);
      const sign = s('g', { class: 'sign', transform: `translate(${iso(ox, oy).x},${iso(ox, oy).y - WALL - 22})` },
        s('rect', { x: -78, y: -13, width: 156, height: 24, rx: 12, class: 'sign-bg ' + room.floor }),
        s('text', { x: 0, y: 4, 'text-anchor': 'middle', class: 'sign-text' }, `${room.emoji} ${room.label}`));
      sign.addEventListener('click', () => clickCb && clickCb({ room: room.id }));
      layerSign.append(sign);
      roomGeo[room.id].center = sp;
      drawDecor(room, ox, oy);
    }
  }

  function drawDecor(room, ox, oy) {
    const at = (x, y) => [ox + x, oy + y];
    for (const d of room.decor) {
      if (d === 'plant') {
        const [x, y] = at(7.1, 0.5);
        const g = s('g', {}, box(x, y, 0.6, 0.6, 12, '#c96f3b'));
        const p = up(iso(x + 0.3, y + 0.3), 18);
        g.append(s('circle', { cx: p.x - 5, cy: p.y, r: 8, fill: '#51cf66' }), s('circle', { cx: p.x + 5, cy: p.y - 3, r: 8, fill: '#40c057' }), s('circle', { cx: p.x, cy: p.y - 10, r: 7, fill: '#69db7c' }));
        addObj(g, x + y + 0.6);
      } else if (d === 'shelf') {
        const [x, y] = at(0.15, 5.2);
        const g = box(x, y, 0.7, 2.4, 44, '#b5835a');
        // books on the right (+gx) face: that face runs along gy, so it slants up-right on screen
        for (let row = 0; row < 3; row++) for (let k = 0; k < 6; k++) {
          const a = up(iso(x + 0.7, y + 0.15 + k * 0.36), 8 + row * 13);
          const b = up(iso(x + 0.7, y + 0.15 + k * 0.36 + 0.28), 8 + row * 13);
          const col = ['#e03131', '#1971c2', '#f08c00', '#2f9e44', '#9c36b5', '#fcc419'][(k + row) % 6];
          g.append(s('polygon', { points: pts([a, b, up(b, 10), up(a, 10)]), fill: col }));
        }
        addObj(g, x + y + 1.6);
      } else if (d === 'papers') {
        for (const [x, y] of [at(5.2, 6.3), at(5.9, 6.8), at(2.2, 6.9)]) {
          const p = iso(x, y);
          addObj(s('circle', { cx: p.x, cy: p.y - 3, r: 4, fill: '#f8f9fa', stroke: '#ced4da', 'stroke-width': 0.8 }), x + y);
        }
      } else if (d === 'mannequin') {
        const [x, y] = at(7, 6.2);
        const g = s('g', {}, box(x, y, 0.5, 0.5, 6, '#868e96'));
        const p = up(iso(x + 0.25, y + 0.25), 6);
        g.append(s('line', { x1: p.x, y1: p.y, x2: p.x, y2: p.y - 22, stroke: '#868e96', 'stroke-width': 2 }), s('path', { d: `M${p.x - 9},${p.y - 22} Q${p.x},${p.y - 40} ${p.x + 9},${p.y - 22} L${p.x + 6},${p.y - 34} Q${p.x},${p.y - 38} ${p.x - 6},${p.y - 34} Z`, fill: '#f783ac' }), s('circle', { cx: p.x, cy: p.y - 42, r: 5, fill: '#ced4da' }));
        addObj(g, x + y + 0.6);
      } else if (d === 'swatches') {
        const colors = ['#ff6b6b', '#fcc419', '#51cf66', '#339af0', '#cc5de8'];
        colors.forEach((col, k) => {
          const x = ox + 1.2 + k * 0.8, y = oy + 6;
          const q = [iso(x, y), iso(x + 0.7, y), iso(x + 0.7, y + 1.2), iso(x, y + 1.2)];
          layerFloor.append(s('polygon', { points: pts(q), fill: col, opacity: 0.75 }));
        });
      } else if (d === 'chair') {
        const [x, y] = at(6.6, 6.0);
        const g = s('g', {}, box(x, y, 0.9, 0.9, 14, '#495057'), box(x, y, 0.9, 0.15, 30, '#e03131'));
        const p = up(iso(x + 0.45, y + 0.1), 24);
        g.append(s('text', { x: p.x, y: p.y, 'font-size': 6, 'text-anchor': 'middle', fill: '#fff', 'font-weight': 700 }, 'DIRECTOR'));
        addObj(g, x + y + 1);
      } else if (d === 'spot') {
        const c = iso(ox + 2.5, oy + 6.2);
        layerFloor.append(s('ellipse', { cx: c.x, cy: c.y, rx: 46, ry: 22, class: 'spot-pool' }));
        const [x, y] = at(0.6, 7.2);
        const g = s('g', {}, box(x, y, 0.4, 0.4, 4, '#343a40'));
        const p = up(iso(x + 0.2, y + 0.2), 4);
        g.append(s('line', { x1: p.x, y1: p.y, x2: p.x, y2: p.y - 40, stroke: '#343a40', 'stroke-width': 2 }), s('rect', { x: p.x - 6, y: p.y - 48, width: 12, height: 9, rx: 2, fill: '#343a40' }), s('circle', { cx: p.x + 6, cy: p.y - 43.5, r: 3, fill: '#ffe066' }));
        addObj(g, x + y + 0.4);
      } else if (d === 'crates') {
        [[1.0, 5.6, '#d4a373'], [1.9, 5.6, '#c08552'], [1.4, 5.5, '#d4a373', 16]].forEach(([x, y, col, z]) => {
          const g = box(ox + x, oy + y, 0.85, 0.85, 16, col);
          if (z) g.setAttribute('transform', `translate(0 ${-z})`);
          addObj(g, ox + x + oy + y + 0.9 + (z ? 0.5 : 0));
        });
      } else if (d === 'oilbar') {
        const g = s('g', {}, box(ox + 4.5, oy + 1.0, 3, 0.9, 20, '#845ef7'));
        const p = up(iso(ox + 6, oy + 1.45), 20);
        g.append(s('text', { x: p.x, y: p.y - 14, 'text-anchor': 'middle', 'font-size': 10, class: 'neon' }, '🛢 OIL BAR'));
        for (let k = 0; k < 3; k++) { const q = up(iso(ox + 4.9 + k * 0.9, oy + 1.3), 20); g.append(s('rect', { x: q.x - 2.5, y: q.y - 7, width: 5, height: 6, rx: 1, fill: '#ffd43b' })); }
        addObj(g, ox + oy + 6.5);
      } else if (d === 'board') {
        const x = ox + 1.2, y = oy + 0.4;
        const g = s('g', {}, box(x, y, 3.6, 0.15, 52, '#f8f9fa'));
        const f = faceGroup(x, y + 0.15, 52);
        f.append(s('text', { x: 6, y: 11, 'font-size': 7.5, 'font-weight': 700, fill: '#495057' }, 'MISSION BOARD'));
        boardEl = s('g', { transform: 'translate(6 16)' });
        f.append(boardEl);
        g.append(f);
        addObj(g, x + y + 1.9);
      } else if (d === 'table') {
        const c = up(iso(ox + 5.6, oy + 5.6), 12);
        const g = s('g', {}, s('rect', { x: c.x - 3, y: c.y, width: 6, height: 12, fill: '#8d6e63' }), s('ellipse', { cx: c.x, cy: c.y, rx: 30, ry: 15, fill: '#a1887f' }), s('ellipse', { cx: c.x, cy: c.y - 1.5, rx: 30, ry: 15, fill: '#bcaaa4' }), s('text', { x: c.x, y: c.y + 3, 'text-anchor': 'middle', 'font-size': 11 }, '☕'));
        addObj(g, ox + oy + 11.2);
      } else if (d === 'tripod') {
        const p = iso(ox + 6.6, oy + 6.2);
        const g = s('g', {}, ...[-9, 0, 9].map((dx) => s('line', { x1: p.x, y1: p.y - 30, x2: p.x + dx, y2: p.y + (dx ? 0 : 4), stroke: '#343a40', 'stroke-width': 1.6 })), s('rect', { x: p.x - 10, y: p.y - 42, width: 18, height: 12, rx: 2, fill: '#212529' }), s('circle', { cx: p.x + 11, cy: p.y - 36, r: 4.5, fill: '#495057', stroke: '#212529' }), s('circle', { class: 'rec-dot', cx: p.x - 6, cy: p.y - 39, r: 1.6, fill: '#ff6b6b' }));
        addObj(g, ox + oy + 12.8);
      } else if (d === 'lightstand') {
        const p = iso(ox + 1.0, oy + 6.8);
        const g = s('g', {}, s('line', { x1: p.x, y1: p.y, x2: p.x, y2: p.y - 46, stroke: '#343a40', 'stroke-width': 2 }), s('rect', { x: p.x - 12, y: p.y - 62, width: 24, height: 17, rx: 2, fill: '#fff9db', stroke: '#495057' }));
        addObj(g, ox + oy + 7.8);
      } else if (d === 'monitor') {
        const x = ox + 5.6, y = oy + 6.0;
        const g = s('g', {}, box(x, y, 1.6, 0.9, 14, '#495057'));
        const p = up(iso(x + 0.8, y + 0.4), 14);
        g.append(s('rect', { x: p.x - 16, y: p.y - 22, width: 32, height: 19, rx: 2, fill: '#212529' }), s('rect', { class: 'screen-glow', x: p.x - 14, y: p.y - 20, width: 28, height: 15, fill: '#4dabf7' }));
        addObj(g, x + y + 1.3);
      } else if (d === 'reels') {
        const p = iso(ox + 1.6, oy + 6.6);
        const g = s('g', {}, ...[0, 1, 2].map((k) => s('ellipse', { cx: p.x, cy: p.y - k * 5, rx: 14, ry: 7, fill: k % 2 ? '#495057' : '#343a40', stroke: '#868e96', 'stroke-width': 0.8 })));
        addObj(g, ox + oy + 8.2);
      } else if (d === 'console') {
        const x = ox + 2.4, y = oy + 6.0;
        const g = s('g', {}, box(x, y, 3.2, 1.0, 12, '#343a40'));
        for (let k = 0; k < 8; k++) { const q = up(iso(x + 0.25 + k * 0.38, y + 0.5), 12); g.append(s('rect', { class: 'fader', x: q.x - 1.5, y: q.y - 4, width: 3, height: 5, fill: ['#ff6b6b', '#ffd43b', '#69db7c', '#4dabf7'][k % 4], style: `animation-delay:${k * 0.13}s` })); }
        addObj(g, x + y + 2.1);
      } else if (d === 'speaker') {
        const x = ox + 7.0, y = oy + 5.6;
        const g = s('g', {}, box(x, y, 0.8, 0.8, 34, '#212529'));
        const p = up(iso(x + 0.4, y + 0.8), 0);
        g.append(s('circle', { class: 'woofer', cx: p.x - 5, cy: p.y - 13, r: 5, fill: '#495057' }), s('circle', { cx: p.x - 5, cy: p.y - 26, r: 3, fill: '#495057' }));
        addObj(g, x + y + 0.8);
      } else if (d === 'easel') {
        const p = iso(ox + 1.4, oy + 6.4);
        const g = s('g', {}, s('line', { x1: p.x - 9, y1: p.y, x2: p.x, y2: p.y - 44, stroke: '#a0522d', 'stroke-width': 2 }), s('line', { x1: p.x + 9, y1: p.y, x2: p.x, y2: p.y - 44, stroke: '#a0522d', 'stroke-width': 2 }), s('rect', { x: p.x - 13, y: p.y - 40, width: 26, height: 20, fill: '#fff', stroke: '#495057' }), s('path', { d: `M${p.x - 10},${p.y - 24} l6,-8 l5,5 l4,-6 l5,9`, fill: 'none', stroke: '#51cf66', 'stroke-width': 1.4 }));
        addObj(g, ox + oy + 7.8);
      }
    }
  }

  function deskSpots(n) {
    if (n === 1) return [[4.4, 3.0]];
    if (n === 2) return [[2.6, 3.2], [5.6, 3.2]];
    return [[1.7, 2.6], [4.1, 3.0], [6.5, 3.4]];
  }

  function placeRobots() {
    for (const room of ROOMS) {
      const { ox, oy } = roomGeo[room.id];
      const spots = deskSpots(room.workers.length);
      room.workers.forEach((id, k) => {
        const [lx, ly] = spots[k];
        const gx = ox + lx, gy = oy + ly;
        const el = drawRobot(id);
        el.addEventListener('click', (e) => { e.stopPropagation(); clickCb && clickCb({ robot: id }); });
        const r = { id, el, gx, gy, home: { gx, gy }, room: room.id, meet: { gx: gx + 0.5, gy: gy + 2.1 } };
        robots[id] = r;
        moveTo(r, gx, gy);
        addObj(el, gx + gy);
        // desk with a paper that fills up while the robot writes
        const desk = box(gx - 0.75, gy + 0.55, 1.5, 0.75, 13, '#c08552', 'desk');
        const paperBase = up(iso(gx - 0.2, gy + 0.85), 13);
        const paper = s('g', { class: 'paper', transform: `translate(${paperBase.x.toFixed(1)} ${paperBase.y.toFixed(1)})` },
          s('polygon', { points: '0,0 14,7 6,11 -8,4', fill: '#fff', stroke: '#dee2e6', 'stroke-width': 0.6 }));
        const lines = s('g', { class: 'paper-lines' });
        for (let j = 0; j < 5; j++) lines.append(s('line', { x1: -5 + j * 1.6, y1: 3 + j * 0.8 - 0.2, x2: 5 + j * 1.6, y2: 8 + j * 0.8 - 0.2 - 4.5, stroke: '#868e96', 'stroke-width': 0.7, opacity: 0, transform: `translate(${j * 0.3} ${-j * 0.1})` }));
        paper.append(lines);
        desk.append(paper);
        r.paperLines = Array.from(lines.children);
        addObj(desk, gx + gy + 0.95);
      });
    }
    // coordinator's home is its own desk; give it a mug
    const c = robots[COORD];
    c.home = { gx: c.gx, gy: c.gy };
  }

  function moveTo(r, gx, gy) {
    r.gx = gx; r.gy = gy;
    const p = iso(gx, gy);
    r.x = p.x; r.y = p.y;
    r.el.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})${r.flip ? ' scale(-1 1)' : ''}`);
    r.el.dataset.depth = gx + gy + 0.01;
    if (r.bubble) positionBubble(r);
  }

  // ---- corridor routing (lines x,y in {-1,9,19,29}) ----
  const LINES = [-1, 9, 19, 29];
  function doorsOf(roomId) {
    const { ox, oy } = roomGeo[roomId];
    return [
      { door: [ox + 4, oy - 1], inside: [ox + 4, oy + 0.6] },
      { door: [ox - 1, oy + 4], inside: [ox + 0.6, oy + 4] },
      { door: [ox + 9, oy + 4], inside: [ox + 7.4, oy + 4] },
      { door: [ox + 4, oy + 9], inside: [ox + 4, oy + 7.4] },
    ];
  }
  function corridorPath(a, b) {
    // a and b lie on corridor lines; route through intersections (Manhattan on the grid)
    const onX = (p) => LINES.includes(p[0]);
    const onY = (p) => LINES.includes(p[1]);
    const cands = [];
    if (onX(a) && onX(b) && a[0] === b[0]) cands.push([a, b]);
    if (onY(a) && onY(b) && a[1] === b[1]) cands.push([a, b]);
    if (onX(a) && onY(b)) cands.push([a, [a[0], b[1]], b]);
    if (onY(a) && onX(b)) cands.push([a, [b[0], a[1]], b]);
    for (const L of LINES) {
      if (onX(a) && onX(b)) cands.push([a, [a[0], L], [b[0], L], b]);
      if (onY(a) && onY(b)) cands.push([a, [L, a[1]], [L, b[1]], b]);
    }
    const len = (path) => path.slice(1).reduce((acc, p, i) => acc + Math.abs(p[0] - path[i][0]) + Math.abs(p[1] - path[i][1]), 0);
    cands.sort((p, q) => len(p) - len(q));
    return cands[0] || [a, b];
  }
  function route(r, target) {
    const from = [r.gx, r.gy];
    const fromRoom = roomAt(r.gx, r.gy);
    const toRoom = roomAt(target[0], target[1]);
    if (fromRoom && fromRoom === toRoom) return [from, target];
    let best = null;
    const fromDoors = fromRoom ? doorsOf(fromRoom) : [{ door: snapToLine(from), inside: null }];
    const toDoors = toRoom ? doorsOf(toRoom) : [{ door: snapToLine(target), inside: null }];
    for (const fd of fromDoors) for (const td of toDoors) {
      const mid = corridorPath(fd.door, td.door);
      const path = [from, ...(fd.inside ? [fd.inside] : []), ...mid, ...(td.inside ? [td.inside] : []), target];
      const L = path.slice(1).reduce((acc, p, i) => acc + Math.hypot(p[0] - path[i][0], p[1] - path[i][1]), 0);
      if (!best || L < best.L) best = { path, L };
    }
    return best.path;
  }
  function snapToLine(p) {
    let best = null;
    for (const L of LINES) {
      const c1 = [L, clamp(p[1], -1, 29)], c2 = [clamp(p[0], -1, 29), L];
      for (const c of [c1, c2]) { const d = Math.hypot(c[0] - p[0], c[1] - p[1]); if (!best || d < best.d) best = { c, d }; }
    }
    return best.c;
  }
  function roomAt(gx, gy) {
    for (const room of ROOMS) { const { ox, oy } = roomGeo[room.id]; if (gx >= ox - 0.01 && gx <= ox + 8.01 && gy >= oy - 0.01 && gy <= oy + 8.01) return room.id; }
    return null;
  }

  function walk(id, target) {
    const r = robots[id];
    return new Promise((resolve) => {
      walkers = walkers.filter((w) => { if (w.r === r) { w.resolve(); return false; } return true; });
      const path = route(r, target);
      if (reducedMotion()) { moveTo(r, target[0], target[1]); resort(r.el); resolve(); return; }
      setState(id, 'walk');
      walkers.push({ r, path, seg: 0, t: 0, resolve });
    });
  }
  function stepWalkers(dt) {
    for (const w of walkers.slice()) {
      const { r, path } = w;
      let dist = dt * 5.2 * speed;
      while (dist > 0 && w.seg < path.length - 1) {
        const a = path[w.seg], b = path[w.seg + 1];
        const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 0.0001;
        const remain = L * (1 - w.t);
        if (dist >= remain) { dist -= remain; w.seg++; w.t = 0; continue; }
        w.t += dist / L;
        dist = 0;
      }
      if (w.seg >= path.length - 1) {
        const end = path[path.length - 1];
        moveTo(r, end[0], end[1]);
        resort(r.el);
        walkers.splice(walkers.indexOf(w), 1);
        setState(r.id, 'idle');
        w.resolve();
        continue;
      }
      const a = path[w.seg], b = path[w.seg + 1];
      const gx = a[0] + (b[0] - a[0]) * w.t, gy = a[1] + (b[1] - a[1]) * w.t;
      const dx = iso(b[0], b[1]).x - iso(a[0], a[1]).x;
      if (Math.abs(dx) > 0.5) r.flip = dx < 0;
      moveTo(r, gx, gy);
      resort(r.el);
    }
  }

  // ---- states, bubbles, particles ----
  const STATES = ['idle', 'walk', 'think', 'write', 'talk', 'happy', 'off', 'draw', 'listen'];
  function setState(id, st) {
    const r = robots[id];
    if (!r) return;
    for (const k of STATES) r.el.classList.remove('st-' + k);
    r.el.classList.add('st-' + st);
    r.state = st;
  }
  function wrap(text, n, maxLines) {
    const ws = String(text).split(/\s+/).filter(Boolean);
    const lines = [];
    let cur = '';
    for (const w of ws) {
      if ((cur + ' ' + w).trim().length > n) { lines.push(cur.trim()); cur = w; } else cur += ' ' + w;
    }
    if (cur.trim()) lines.push(cur.trim());
    if (lines.length > maxLines) { const keep = lines.slice(-maxLines); keep[0] = '…' + keep[0]; return keep; }
    return lines;
  }
  function say(id, text, opts) {
    const r = robots[id];
    if (!r) return;
    opts = opts || {};
    clearBubble(id);
    const lines = wrap(text, opts.width || 26, opts.lines || 3);
    const wpx = Math.max(60, Math.min(180, Math.max(...lines.map((l) => l.length)) * 5.6 + 18));
    const hpx = lines.length * 11 + 12;
    const g = s('g', { class: 'bubble ' + (opts.kind || 'speech') });
    const body = s('g', { class: 'bubble-body' });
    if (opts.kind === 'thought') {
      body.append(s('circle', { cx: 4, cy: -6, r: 2.2, class: 'b-fill' }), s('circle', { cx: 9, cy: -13, r: 3.4, class: 'b-fill' }));
    } else {
      body.append(s('path', { d: 'M-4,-12 L2,-2 L6,-12 Z', class: 'b-fill' }));
    }
    body.append(s('rect', { x: -wpx / 2, y: -12 - hpx, width: wpx, height: hpx, rx: opts.kind === 'thought' ? hpx / 2.2 : 9, class: 'b-fill b-stroke' }));
    lines.forEach((l, k) => body.append(s('text', { x: 0, y: -12 - hpx + 15 + k * 11, 'text-anchor': 'middle', class: 'b-text' }, l)));
    g.append(body);
    r.bubble = g;
    layerOver.append(g);
    positionBubble(r);
    if (opts.ms) r.bubbleTimer = setTimeout(() => { if (r.bubble === g) clearBubble(id); }, opts.ms / speed);
    return g;
  }
  function positionBubble(r) { r.bubble.setAttribute('transform', `translate(${r.x.toFixed(1)} ${(r.y - 74).toFixed(1)})`); }
  function clearBubble(id) {
    const r = robots[id];
    if (!r || !r.bubble) return;
    clearTimeout(r.bubbleTimer);
    r.bubble.remove();
    r.bubble = null;
  }
  function fx(id, glyph) {
    const r = robots[id];
    if (!r || reducedMotion()) return;
    const set = ROBOTS[id].fx;
    const t = s('text', { class: 'particle', x: r.x + (Math.random() * 30 - 15), y: r.y - 60, 'font-size': 12, 'text-anchor': 'middle' }, glyph || set[Math.floor(Math.random() * set.length)]);
    layerOver.append(t);
    setTimeout(() => t.remove(), 2200);
  }
  function setPaper(id, level) {
    const r = robots[id];
    if (!r || !r.paperLines) return;
    const n = Math.round(clamp(level, 0, 1) * r.paperLines.length);
    r.paperLines.forEach((l, k) => l.setAttribute('opacity', k < n ? 1 : 0));
  }

  // ---- camera ----
  function aspect() { const b = svg.getBoundingClientRect(); return b.width > 0 ? b.height / b.width : 0.6; }
  function applyCam() {
    const hgt = cam.w * aspect();
    svg.setAttribute('viewBox', `${(cam.cx - cam.w / 2).toFixed(1)} ${(cam.cy - hgt / 2).toFixed(1)} ${cam.w.toFixed(1)} ${hgt.toFixed(1)}`);
  }
  function lookAt(cx, cy, w, instant) {
    cam.tcx = cx; cam.tcy = cy; cam.tw = clamp(w, 380, 2000);
    if (instant || reducedMotion()) { cam.cx = cx; cam.cy = cy; cam.w = cam.tw; applyCam(); }
  }
  function focusRoom(roomId, instant) {
    const { ox, oy } = roomGeo[roomId];
    const c = iso(ox + 4, oy + 4);
    const narrow = aspect() > 0.9;
    lookAt(c.x, c.y - 30, narrow ? 560 : 640, instant);
  }
  function overview(instant) { const a = aspect(); lookAt(0, 400, a > 0.9 ? 1150 : a > 0.62 ? 1700 : 1780, instant); }
  function focusRobot(id) {
    const r = robots[id];
    if (r) lookAt(r.x, r.y - 30, 760);
  }

  let lastT = 0;
  function loop(t) {
    const dt = Math.min(0.05, (t - (lastT || t)) / 1000);
    lastT = t;
    stepWalkers(dt);
    if (follow && walkers.length) { const w = walkers.find((x) => x.r.id === COORD) || walkers[0]; lookAt(w.r.x, w.r.y - 30, 820); }
    const k = 1 - Math.pow(0.0025, dt);
    cam.cx += (cam.tcx - cam.cx) * k; cam.cy += (cam.tcy - cam.cy) * k; cam.w += (cam.tw - cam.w) * k;
    applyCam();
    stepDusty(dt);
    requestAnimationFrame(loop);
  }

  // ---- Dusty, the corridor roomba ----
  function makeDusty() {
    const el = s('g', { class: 'dusty' }, s('ellipse', { cx: 0, cy: 0, rx: 11, ry: 5.5, fill: '#495057' }), s('ellipse', { cx: 0, cy: -3, rx: 10, ry: 5, fill: '#ced4da' }), s('circle', { class: 'antenna-ball', cx: 3, cy: -5, r: 1.6, fill: '#51cf66' }));
    dusty = { el, gx: 9, gy: 9, path: [], seg: 0, t: 0, wait: 2 };
    addObj(el, 18);
    const p = iso(9, 9);
    el.setAttribute('transform', `translate(${p.x} ${p.y})`);
  }
  function stepDusty(dt) {
    if (!dusty || reducedMotion()) return;
    if (!dusty.path.length) {
      dusty.wait -= dt;
      if (dusty.wait > 0) return;
      const onX = LINES.includes(dusty.gx);
      const L = LINES[Math.floor(Math.random() * 4)];
      const tgt = onX ? [dusty.gx, L] : [L, dusty.gy];
      if (tgt[0] === dusty.gx && tgt[1] === dusty.gy) { dusty.wait = 1; return; }
      dusty.path = [[dusty.gx, dusty.gy], tgt]; dusty.t = 0;
      return;
    }
    const [a, b] = dusty.path;
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    dusty.t += (dt * 1.6) / L;
    if (dusty.t >= 1) { dusty.gx = b[0]; dusty.gy = b[1]; dusty.path = []; dusty.wait = 2 + Math.random() * 5; }
    else { dusty.gx = a[0] + (b[0] - a[0]) * dusty.t; dusty.gy = a[1] + (b[1] - a[1]) * dusty.t; }
    const p = iso(dusty.gx, dusty.gy);
    dusty.el.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
    dusty.el.dataset.depth = dusty.gx + dusty.gy;
    resort(dusty.el);
  }

  function init(svgEl) {
    svg = svgEl;
    svg.append(
      layerFloor = s('g', { class: 'layer-floor' }),
      layerObj = s('g', { class: 'layer-obj' }),
      layerSign = s('g', { class: 'layer-sign' }),
      layerOver = s('g', { class: 'layer-over' }));
    drawFloors();
    placeRobots();
    makeDusty();
    overview(true);
    // pan & zoom
    let drag = null;
    svg.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, y: e.clientY, cx: cam.tcx, cy: cam.tcy, moved: false }; });
    window.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const b = svg.getBoundingClientRect();
      const scale = cam.w / b.width;
      const dx = (e.clientX - drag.x) * scale, dy = (e.clientY - drag.y) * scale;
      if (Math.abs(dx) + Math.abs(dy) > 6 * scale) { drag.moved = true; setFollow(false); }
      if (drag.moved) lookAt(drag.cx - dx, drag.cy - dy, cam.tw, true);
    });
    window.addEventListener('pointerup', () => { drag = null; });
    svg.addEventListener('wheel', (e) => { e.preventDefault(); setFollow(false); lookAt(cam.tcx, cam.tcy, cam.tw * (e.deltaY > 0 ? 1.12 : 0.89)); }, { passive: false });
    new ResizeObserver(() => applyCam()).observe(svg);
    requestAnimationFrame(loop);
  }
  function setFollow(on) { follow = on; const b = document.getElementById('btnFollow'); if (b) b.setAttribute('aria-pressed', on ? 'true' : 'false'); }

  function setCrew(enabled) {
    for (const id of Object.keys(robots)) {
      if (id === COORD) continue;
      if (!enabled.has(id)) setState(id, 'off');
      else if (robots[id].state === 'off' || !robots[id].state) setState(id, 'idle');
    }
  }
  function updateBoard(stages) {
    if (!boardEl) return;
    boardEl.replaceChildren();
    stages.forEach((st, k) => {
      const col = k % 11, row = Math.floor(k / 11);
      const color = { done: '#40c057', working: '#fab005', review: '#4dabf7', error: '#fa5252', stale: '#ff922b', skipped: '#dee2e6' }[st.status] || '#adb5bd';
      boardEl.append(s('circle', { cx: 4 + col * 8.6, cy: 4 + row * 10, r: 3, fill: color, class: st.status === 'working' ? 'pulse' : '' }));
    });
  }
  function addCrate(label) {
    const { ox, oy } = roomGeo.dock;
    const k = crateCount++;
    const x = ox + 3.2 + (k % 3) * 1.0, y = oy + 4.6 + Math.floor(k / 3) % 3 * 1.0;
    const g = box(x, y, 0.8, 0.8, 14, '#e9c46a', 'crate');
    const p = up(iso(x + 0.4, y + 0.4), 14);
    g.append(s('text', { x: p.x, y: p.y + 2, 'font-size': 7, 'text-anchor': 'middle' }, label));
    addObj(g, x + y + 0.8);
    if (!reducedMotion()) g.classList.add('drop-in');
  }
  function spotOf(id) { return robots[id] ? robots[id].meet : null; }
  return {
    init, walk, setState, say, clearBubble, fx, setPaper, focusRoom, overview, focusRobot, setFollow,
    isFollowing: () => follow, setCrew, updateBoard, addCrate, spotOf,
    robot: (id) => robots[id], onClick: (cb) => { clickCb = cb; }, setSpeed: (v) => { speed = v; },
    zoom: (f) => { setFollow(false); lookAt(cam.tcx, cam.tcy, cam.tw * f); },
  };
})();
