// ---------- cute cartoon robots, drawn in SVG (feet at 0,0) ----------
const SVGNS = 'http://www.w3.org/2000/svg';
function s(tag, attrs, ...kids) {
  const e = document.createElementNS(SVGNS, tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) if (v != null) e.setAttribute(k, v);
  for (const k of kids.flat()) if (k) e.append(k.nodeType ? k : document.createTextNode(String(k)));
  return e;
}
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const f = (c) => clamp(Math.round(amt < 0 ? c * (1 + amt) : c + (255 - c) * amt), 0, 255);
  r = f(r); g = f(g); b = f(b);
  return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
const INK = '#2b2d42';

// accessories: [behind-head, on-head, left-hand, right-hand, chest]
function accessory(kind, c, a) {
  const g = { head: [], left: [], right: [], chest: [] };
  const line = (x1, y1, x2, y2, col, w) => s('line', { x1, y1, x2, y2, stroke: col, 'stroke-width': w || 2, 'stroke-linecap': 'round' });
  switch (kind) {
    case 'headset':
      g.head.push(s('path', { d: 'M-16,-47 Q-17,-66 0,-66 Q17,-66 16,-47', fill: 'none', stroke: INK, 'stroke-width': 2.6 }),
        s('rect', { x: -19, y: -51, width: 5, height: 9, rx: 2, fill: INK }), s('rect', { x: 14, y: -51, width: 5, height: 9, rx: 2, fill: INK }),
        s('path', { d: 'M-17,-44 Q-14,-36 -6,-37', fill: 'none', stroke: INK, 'stroke-width': 1.8 }), s('circle', { cx: -5, cy: -37, r: 2, fill: a }),
        s('path', { d: 'M-15,-58 L15,-58 L12,-64 L-12,-64 Z', fill: 'none' }));
      g.left.push(s('rect', { x: -32, y: -27, width: 12, height: 15, rx: 1.5, fill: '#a0522d' }), s('rect', { x: -30.5, y: -24.5, width: 9, height: 11, fill: '#fff' }),
        line(-29, -21, -23, -21, '#adb5bd', 1), line(-29, -18, -23, -18, '#adb5bd', 1), line(-29, -15, -25, -15, '#adb5bd', 1), s('rect', { x: -28, y: -28.5, width: 5, height: 3, rx: 1, fill: '#868e96' }));
      break;
    case 'quill':
      g.head.push(s('ellipse', { cx: 3, cy: -59, rx: 13, ry: 4.5, fill: a }), s('circle', { cx: 3, cy: -63.5, r: 2, fill: a }));
      g.right.push(s('path', { d: 'M19,-14 C25,-28 33,-36 30,-47 C24,-38 21,-28 19,-14 Z', fill: '#fff', stroke: a, 'stroke-width': 1.2 }), line(19, -14, 27, -38, a, 0.8));
      break;
    case 'script':
      g.head.push(line(11, -55, 21, -63, '#fcc419', 3.2), line(20, -62, 22, -64, '#f783ac', 3.2));
      g.right.push(s('rect', { x: 14, y: -26, width: 12, height: 15, rx: 1, fill: '#fff', stroke: '#adb5bd', 'stroke-width': 0.8, transform: 'rotate(8 20 -18)' }),
        line(16, -22, 23, -21, '#868e96', 0.8), line(16, -19, 23, -18, '#868e96', 0.8), line(16, -16, 21, -15, '#868e96', 0.8));
      break;
    case 'sketchbook':
      g.head.push(s('path', { d: 'M9,-60 l7,-5 l0,9 z M9,-60 l-6,-5 l0,9 z', fill: a }), s('circle', { cx: 9, cy: -60, r: 2, fill: shade(a, -0.2) }));
      g.left.push(s('rect', { x: -33, y: -29, width: 14, height: 17, rx: 1.5, fill: '#fff', stroke: a, 'stroke-width': 1.2 }), s('path', { d: 'M-30,-17 q3,-8 6,-2 q2,-6 3,1', fill: 'none', stroke: INK, 'stroke-width': 0.9 }), s('circle', { cx: -26, cy: -24, r: 2.4, fill: 'none', stroke: INK, 'stroke-width': 0.9 }));
      g.right.push(line(18, -15, 25, -27, '#fcc419', 2.6), line(24, -26, 26, -29, INK, 1.4));
      break;
    case 'hardhat':
      g.head.push(s('path', { d: 'M-15,-56 Q-14,-72 0,-72 Q14,-72 15,-56 Z', fill: '#ffd43b', stroke: '#e67700', 'stroke-width': 1 }), s('rect', { x: -19, y: -57.5, width: 38, height: 3.5, rx: 1.7, fill: '#fab005' }), s('rect', { x: -2, y: -72, width: 4, height: 15, fill: '#fab005' }));
      g.right.push(s('rect', { x: 15, y: -36, width: 6, height: 24, rx: 3, fill: '#a5d8ff', stroke: '#1971c2', 'stroke-width': 1, transform: 'rotate(-25 18 -24)' }), s('ellipse', { cx: 13, cy: -35, rx: 3, ry: 2, fill: '#1971c2', transform: 'rotate(-25 18 -24)' }));
      break;
    case 'palette':
      g.head.push(s('ellipse', { cx: -3, cy: -59, rx: 13, ry: 4.5, fill: '#e03131' }), s('circle', { cx: -3, cy: -63.5, r: 2, fill: '#e03131' }));
      g.left.push(s('path', { d: 'M-34,-20 C-36,-32 -18,-34 -18,-24 C-18,-20 -24,-22 -24,-17 C-24,-12 -32,-12 -34,-20 Z', fill: '#f1d6a8', stroke: '#a0522d', 'stroke-width': 1 }),
        ...[['#e03131', -30, -25], ['#1971c2', -25, -28], ['#fab005', -21, -26], ['#2f9e44', -30, -19]].map(([f, x, y]) => s('circle', { cx: x, cy: y, r: 1.8, fill: f })));
      g.right.push(line(18, -14, 24, -32, '#a0522d', 2), s('ellipse', { cx: 24.5, cy: -33.5, rx: 1.8, ry: 3, fill: '#1971c2', transform: 'rotate(18 24.5 -33.5)' }));
      break;
    case 'megaphone':
      g.head.push(s('path', { d: 'M-14,-56 Q-14,-66 0,-66 Q14,-66 14,-56 Z', fill: INK }), s('circle', { cx: 0, cy: -67, r: 1.8, fill: INK }));
      g.right.push(s('path', { d: 'M17,-20 L33,-30 L33,-10 Z', fill: '#f8f9fa', stroke: a, 'stroke-width': 1.4, 'stroke-linejoin': 'round' }), s('rect', { x: 14, y: -23, width: 5, height: 6, rx: 1, fill: a }));
      g.chest.push(s('path', { d: 'M-8,-34 L0,-30 L8,-34 L6,-27 L0,-29 L-6,-27 Z', fill: a }));
      break;
    case 'gloves':
      g.head.push(s('rect', { x: -15.5, y: -56, width: 31, height: 4.5, fill: '#e03131' }), s('path', { d: 'M15,-55 l7,3 l-6,2 l6,4 l-8,-3 z', fill: '#e03131' }));
      g.left.push(s('circle', { cx: -19, cy: -14, r: 5.5, fill: '#e03131', stroke: '#a61e4d', 'stroke-width': 1 }));
      g.right.push(s('circle', { cx: 19, cy: -14, r: 5.5, fill: '#e03131', stroke: '#a61e4d', 'stroke-width': 1 }));
      break;
    case 'flipbook':
      g.head.push(s('path', { d: 'M-4,-58 q4,-10 8,0', fill: 'none', stroke: a, 'stroke-width': 2.4, 'stroke-linecap': 'round' }));
      g.left.push(s('rect', { x: -32, y: -26, width: 13, height: 10, rx: 1, fill: '#fff3bf', stroke: '#f08c00', 'stroke-width': 1 }), line(-32, -21, -19, -21, '#f08c00', 0.6));
      g.right.push(s('circle', { class: 'bounce-ball', cx: 24, cy: -30, r: 3.5, fill: '#ff922b' }));
      break;
    case 'camera':
      g.head.push(s('path', { d: 'M-14,-56 Q-14,-68 0,-68 Q14,-68 14,-56 Z', fill: a }), s('rect', { x: -20, y: -58, width: 10, height: 3, rx: 1.5, fill: a }));
      g.right.push(s('rect', { x: 8, y: -46, width: 20, height: 13, rx: 2.5, fill: INK }), s('circle', { cx: 30, cy: -39.5, r: 5.5, fill: '#495057', stroke: INK, 'stroke-width': 1.5 }), s('circle', { cx: 30, cy: -39.5, r: 2.4, fill: '#74c0fc' }), s('circle', { class: 'rec-dot', cx: 12, cy: -43, r: 1.4, fill: '#ff6b6b' }));
      break;
    case 'stopwatch':
      g.head.push(s('circle', { cx: -5, cy: -47, r: 4.5, fill: 'none', stroke: INK, 'stroke-width': 1.3 }), s('circle', { cx: 5, cy: -47, r: 4.5, fill: 'none', stroke: INK, 'stroke-width': 1.3 }), line(-0.5, -47, 0.5, -47, INK, 1.3));
      g.right.push(s('circle', { cx: 21, cy: -16, r: 5, fill: '#f8f9fa', stroke: INK, 'stroke-width': 1.3 }), s('rect', { x: 20, y: -23, width: 2, height: 2.5, fill: INK }), s('line', { class: 'sw-hand', x1: 21, y1: -16, x2: 21, y2: -19.5, stroke: '#e03131', 'stroke-width': 1.1 }));
      g.left.push(s('rect', { x: -31, y: -25, width: 11, height: 13, rx: 1, fill: '#fff9db', stroke: '#868e96', 'stroke-width': 0.8 }));
      break;
    case 'board':
      g.right.push(s('rect', { x: 13, y: -38, width: 22, height: 16, rx: 1.5, fill: '#fff', stroke: INK, 'stroke-width': 1.2 }), line(24, -38, 24, -22, INK, 0.8), line(13, -30, 35, -30, INK, 0.8),
        s('circle', { cx: 18, cy: -34, r: 1.5, fill: '#868e96' }), s('path', { d: 'M27,-27 l4,-2 l0,4 z', fill: '#868e96' }));
      g.head.push(line(-12, -57, 12, -57, a, 0));
      break;
    case 'wand':
      g.head.push(s('path', { d: 'M-12,-56 L2,-80 L13,-56 Z', fill: '#5f3dc4' }), s('text', { x: 0, y: -62, 'font-size': 7, 'text-anchor': 'middle', fill: '#ffd43b' }, '★'));
      g.right.push(line(18, -14, 27, -32, INK, 2), s('text', { class: 'wand-star', x: 28, y: -31, 'font-size': 10, 'text-anchor': 'middle', fill: '#fcc419' }, '★'));
      break;
    case 'filmstrip':
      g.chest.push(s('rect', { x: -14, y: -36, width: 28, height: 6, fill: INK }), ...[-10, -5, 0, 5, 10].map((x) => s('rect', { x: x - 1.2, y: -34.5, width: 2.4, height: 3, fill: '#fff' })));
      g.right.push(s('circle', { cx: 22, cy: -18, r: 6, fill: a }), s('path', { d: 'M20,-21 L25,-18 L20,-15 Z', fill: '#fff' }));
      break;
    case 'mic':
      g.chest.push(s('path', { d: 'M-6,-34 L0,-31 L6,-34 L6,-28 L0,-31 L-6,-28 Z', fill: INK }));
      g.right.push(s('rect', { x: 18, y: -24, width: 3.5, height: 11, rx: 1, fill: INK, transform: 'rotate(-20 20 -18)' }), s('circle', { cx: 22.5, cy: -27, r: 4, fill: '#adb5bd', stroke: INK, 'stroke-width': 1 }));
      break;
    case 'baton':
      g.head.push(s('path', { d: 'M-15,-55 C-16,-70 8,-74 15,-58 C8,-64 -4,-66 -15,-55 Z', fill: '#e9ecef', stroke: '#adb5bd', 'stroke-width': 0.8 }));
      g.chest.push(s('path', { d: 'M-6,-34 L0,-31 L6,-34 L6,-28 L0,-31 L-6,-28 Z', fill: INK }));
      g.right.push(line(18, -14, 30, -34, '#f8f9fa', 1.6), s('circle', { cx: 18, cy: -14, r: 1.6, fill: '#a0522d' }));
      break;
    case 'headphones':
      g.head.push(s('path', { d: 'M-17,-46 Q-18,-68 0,-68 Q18,-68 17,-46', fill: 'none', stroke: INK, 'stroke-width': 3 }), s('rect', { x: -21, y: -53, width: 7, height: 12, rx: 3, fill: a }), s('rect', { x: 14, y: -53, width: 7, height: 12, rx: 3, fill: a }));
      g.left.push(line(-19, -14, -30, -60, '#868e96', 1.6), s('ellipse', { cx: -31, cy: -63, rx: 4, ry: 6, fill: '#ced4da', stroke: '#868e96', 'stroke-width': 0.8 }));
      break;
    case 'goggles':
      g.head.push(s('rect', { x: -16, y: -59, width: 32, height: 3, fill: INK }), s('circle', { cx: -6, cy: -58, r: 4.5, fill: '#96f2d7', stroke: INK, 'stroke-width': 1.5 }), s('circle', { cx: 6, cy: -58, r: 4.5, fill: '#96f2d7', stroke: INK, 'stroke-width': 1.5 }));
      g.right.push(s('text', { class: 'wand-star', x: 24, y: -20, 'font-size': 10, 'text-anchor': 'middle', fill: '#fab005' }, '✦'));
      break;
    case 'scissors':
      g.head.push(s('path', { d: 'M-15,-55 L15,-55 L18,-51 L-18,-51 Z', fill: '#69db7c', opacity: 0.85 }));
      g.left.push(s('circle', { cx: -24, cy: -18, r: 6, fill: INK }), ...[0, 72, 144, 216, 288].map((d) => s('circle', { cx: -24 + 3.2 * Math.cos(d * Math.PI / 180), cy: -18 + 3.2 * Math.sin(d * Math.PI / 180), r: 1, fill: '#adb5bd' })));
      g.right.push(s('circle', { cx: 18, cy: -12, r: 2.4, fill: 'none', stroke: '#e03131', 'stroke-width': 1.4 }), s('circle', { cx: 22, cy: -12, r: 2.4, fill: 'none', stroke: '#e03131', 'stroke-width': 1.4 }), line(19, -14, 27, -27, '#ced4da', 1.6), line(21, -14, 23, -28, '#ced4da', 1.6));
      break;
    case 'detective':
      g.head.push(s('path', { d: 'M-15,-56 Q-15,-69 0,-69 Q15,-69 15,-56 Z', fill: '#a0522d' }), s('path', { d: 'M-21,-56 L21,-56 L17,-53 L-17,-53 Z', fill: '#8b4513' }), s('path', { d: 'M0,-69 l0,-3', stroke: '#8b4513', 'stroke-width': 2 }));
      g.right.push(line(18, -14, 24, -24, '#a0522d', 2.4), s('circle', { cx: 26.5, cy: -28.5, r: 5.5, fill: 'rgba(165,216,255,.55)', stroke: INK, 'stroke-width': 1.6 }));
      break;
    default:
  }
  return g;
}

function drawRobot(id) {
  const R = ROBOTS[id];
  const c = R.color, a = R.accent;
  const root = s('g', { class: 'robot st-idle', 'data-robot': id });
  const acc = accessory(R.acc, c, a);
  const armL = s('g', { class: 'arm arm-l' }, s('path', { d: 'M-12,-28 Q-19,-24 -19,-15', fill: 'none', stroke: shade(c, -0.3), 'stroke-width': 3.2, 'stroke-linecap': 'round' }), s('circle', { cx: -19, cy: -14, r: 3, fill: shade(c, -0.15) }), ...acc.left);
  const armR = s('g', { class: 'arm arm-r' }, s('path', { d: 'M12,-28 Q19,-24 19,-15', fill: 'none', stroke: shade(c, -0.3), 'stroke-width': 3.2, 'stroke-linecap': 'round' }), s('circle', { cx: 19, cy: -14, r: 3, fill: shade(c, -0.15) }), ...acc.right);
  const eyes = s('g', { class: 'eyes' },
    s('rect', { class: 'eye', x: -7.5, y: -50, width: 4.5, height: 6, rx: 2.2, fill: '#c5f6fa' }),
    s('rect', { class: 'eye', x: 3, y: -50, width: 4.5, height: 6, rx: 2.2, fill: '#c5f6fa' }));
  const head = s('g', { class: 'head' },
    s('line', { x1: 0, y1: -58, x2: 0, y2: -66, stroke: shade(c, -0.35), 'stroke-width': 1.8 }),
    s('circle', { class: 'antenna-ball', cx: 0, cy: -67.5, r: 3, fill: a }),
    s('rect', { x: -15, y: -59, width: 30, height: 24, rx: 10, fill: c, stroke: shade(c, -0.25), 'stroke-width': 1.2 }),
    s('rect', { x: -11.5, y: -54.5, width: 23, height: 15, rx: 6, fill: '#1f2433' }),
    eyes,
    s('path', { class: 'mouth', d: 'M-3.5,-43 Q0,-40.5 3.5,-43', fill: 'none', stroke: '#c5f6fa', 'stroke-width': 1.3, 'stroke-linecap': 'round' }),
    s('circle', { cx: -12.5, cy: -42, r: 1.8, fill: '#ff8787', opacity: 0.55 }), s('circle', { cx: 12.5, cy: -42, r: 1.8, fill: '#ff8787', opacity: 0.55 }),
    ...acc.head);
  const body = s('g', { class: 'body' },
    s('rect', { x: -13, y: -36, width: 26, height: 25, rx: 9, fill: c, stroke: shade(c, -0.25), 'stroke-width': 1.2 }),
    s('rect', { x: -8, y: -29, width: 16, height: 13, rx: 5, fill: shade(c, 0.45) }),
    s('text', { x: 0, y: -19.5, 'font-size': 8.5, 'text-anchor': 'middle', class: 'belly' }, R.emoji),
    ...acc.chest);
  const legs = s('g', { class: 'legs' },
    s('rect', { class: 'leg leg-l', x: -8.5, y: -12, width: 6, height: 10, rx: 2.5, fill: shade(c, -0.3) }),
    s('rect', { class: 'leg leg-r', x: 2.5, y: -12, width: 6, height: 10, rx: 2.5, fill: shade(c, -0.3) }),
    s('ellipse', { class: 'leg leg-l', cx: -5.5, cy: -2, rx: 5, ry: 2.6, fill: INK }),
    s('ellipse', { class: 'leg leg-r', cx: 5.5, cy: -2, rx: 5, ry: 2.6, fill: INK }));
  root.append(
    s('ellipse', { class: 'shadow', cx: 0, cy: 0, rx: 15, ry: 5 }),
    s('g', { class: 'bob' }, legs, armL, body, armR, head),
    s('g', { class: 'zzz' }, s('text', { x: 14, y: -64, 'font-size': 9 }, 'z'), s('text', { x: 20, y: -72, 'font-size': 7 }, 'z')),
  );
  return root;
}

// small standalone avatar (for cards and chat)
function robotAvatar(id, size) {
  const svg = s('svg', { viewBox: '-36 -80 72 84', width: size || 40, height: size || 40, class: 'avatar', 'aria-hidden': 'true' });
  const r = drawRobot(id);
  r.classList.add('static');
  svg.append(r);
  return svg;
}
