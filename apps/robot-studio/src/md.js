// ---------- helpers ----------
const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const uid = (p) => (p || 'id') + '-' + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const words = (s) => (String(s || '').trim().match(/\S+/g) || []).length;
const reducedMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function h(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k === 'html') e.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) if (kid != null && kid !== false) e.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
  return e;
}
// append/replace children, skipping null/false slots (DOM append would print "null")
const keep = (kids) => kids.flat().filter((k) => k != null && k !== false);
function add(el, ...kids) { el.append(...keep(kids)); return el; }
function fill(el, ...kids) { el.replaceChildren(...keep(kids)); return el; }
function truncate(s, n) { s = String(s || ''); return s.length > n ? s.slice(0, n) + `\n…[truncated ${s.length - n} characters]` : s; }
function lastWords(s, n) { const w = String(s || '').replace(/[#*_`>|\-]+/g, ' ').trim().split(/\s+/); return w.slice(-n).join(' '); }

// ---------- tiny, safe markdown renderer (escapes everything first) ----------
function inlineMd(s) {
  let t = esc(s);
  const codes = [];
  t = t.replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return `\u0000${codes.length - 1}\u0000`; });
  t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
       .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
       .replace(/(^|\W)_([^_\n]+)_(?=\W|$)/g, '$1<em>$2</em>')
       .replace(/~~([^~]+)~~/g, '<del>$1</del>');
  t = t.replace(/\b(MISSING|ASSUMPTION|PROPOSAL|CONFLICT|OPEN-QUESTION)(:)/g, '<span class="marker m-$1">$1</span>$2');
  t = t.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[+i]}</code>`);
  return t;
}
function renderMarkdown(src) {
  const lines = String(src || '').replace(/\r/g, '').split('\n');
  const out = [];
  let i = 0;
  const para = [];
  const flush = () => { if (para.length) { out.push(`<p>${inlineMd(para.join(' '))}</p>`); para.length = 0; } };
  while (i < lines.length) {
    const line = lines[i];
    const fence = line.match(/^\s*(```|~~~)\s*([\w+-]*)/);
    if (fence) {
      flush();
      const lang = fence[2] || '';
      const buf = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith(fence[1])) { buf.push(lines[i]); i++; }
      i++;
      if (lang === 'svg') { out.push(`<div class="md-svg">${sanitizeSvg(buf.join('\n'))}</div>`); continue; }
      out.push(`<div class="codeblock"><div class="code-head"><span>${esc(lang || 'text')}</span><button class="copy-btn" data-copy>Copy</button></div><pre><code>${esc(buf.join('\n'))}</code></pre></div>`);
      continue;
    }
    if (/^\s*$/.test(line)) { flush(); i++; continue; }
    const hd = line.match(/^(#{1,6})\s+(.*)$/);
    if (hd) { flush(); const lv = Math.min(6, hd[1].length + 1); out.push(`<h${lv}>${inlineMd(hd[2])}</h${lv}>`); i++; continue; }
    if (/^\s*(---|\*\*\*|___)\s*$/.test(line)) { flush(); out.push('<hr>'); i++; continue; }
    if (/^\s*\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1])) {
      flush();
      const row = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const head = row(line);
      i += 2;
      const body = [];
      while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) { body.push(row(lines[i])); i++; }
      out.push(`<div class="table-wrap"><table><thead><tr>${head.map((c) => `<th>${inlineMd(c)}</th>`).join('')}</tr></thead><tbody>${body.map((r) => `<tr>${r.map((c) => `<td>${inlineMd(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^\s*>/.test(line)) {
      flush();
      const buf = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) { buf.push(lines[i].replace(/^\s*>\s?/, '')); i++; }
      out.push(`<blockquote>${renderMarkdown(buf.join('\n'))}</blockquote>`);
      continue;
    }
    const li = line.match(/^(\s*)([-*+]|\d+[.)])\s+(.*)$/);
    if (li) {
      flush();
      const ordered = /\d/.test(li[2]);
      const items = [];
      while (i < lines.length) {
        const m = lines[i].match(/^(\s*)([-*+]|\d+[.)])\s+(.*)$/);
        if (m) { items.push(m[3]); i++; continue; }
        if (/^\s{2,}\S/.test(lines[i]) && items.length) { items[items.length - 1] += ' ' + lines[i].trim(); i++; continue; }
        break;
      }
      const tag = ordered ? 'ol' : 'ul';
      out.push(`<${tag}>${items.map((t) => {
        const box = t.match(/^\[( |x|X)\]\s+(.*)$/);
        return box ? `<li class="task"><span class="box">${box[1].trim() ? '☑' : '☐'}</span> ${inlineMd(box[2])}</li>` : `<li>${inlineMd(t)}</li>`;
      }).join('')}</${tag}>`);
      continue;
    }
    para.push(line.trim());
    i++;
  }
  flush();
  return out.join('\n');
}

// ---------- SVG sanitizer for robot-drawn sketches ----------
const SVG_TAGS = new Set(['svg', 'g', 'path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon', 'text', 'tspan', 'defs', 'lineargradient', 'radialgradient', 'stop', 'title', 'clippath', 'pattern']);
const SVG_ATTRS = new Set(['viewbox', 'width', 'height', 'x', 'y', 'x1', 'y1', 'x2', 'y2', 'cx', 'cy', 'r', 'rx', 'ry', 'd', 'points', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-dasharray', 'opacity', 'fill-opacity', 'stroke-opacity', 'transform', 'font-size', 'font-family', 'font-weight', 'text-anchor', 'dominant-baseline', 'id', 'offset', 'stop-color', 'stop-opacity', 'gradientunits', 'gradienttransform', 'fx', 'fy', 'clip-path', 'patternunits', 'xmlns', 'preserveaspectratio', 'letter-spacing', 'font-style']);
function sanitizeSvg(src) {
  const m = String(src || '').match(/<svg[\s\S]*<\/svg>/i);
  if (!m) return '';
  let doc;
  try { doc = new DOMParser().parseFromString(m[0], 'image/svg+xml'); } catch (e) { return ''; }
  const root = doc.documentElement;
  if (!root || root.nodeName.toLowerCase() !== 'svg' || doc.querySelector('parsererror')) return '';
  const walk = (node) => {
    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === 3) continue;
      if (child.nodeType !== 1 || !SVG_TAGS.has(child.nodeName.toLowerCase())) { child.remove(); continue; }
      clean(child);
      walk(child);
    }
  };
  const clean = (el) => {
    for (const a of Array.from(el.attributes)) {
      const n = a.name.toLowerCase();
      const v = a.value;
      if (!SVG_ATTRS.has(n) || /javascript:|data:|expression\(/i.test(v) || (/url\(/i.test(v) && !/^url\(#[\w-]+\)$/i.test(v.trim()))) el.removeAttribute(a.name);
    }
  };
  clean(root);
  walk(root);
  if (!root.getAttribute('viewBox')) root.setAttribute('viewBox', `0 0 ${parseFloat(root.getAttribute('width')) || 320} ${parseFloat(root.getAttribute('height')) || 180}`);
  root.removeAttribute('width');
  root.removeAttribute('height');
  root.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  return new XMLSerializer().serializeToString(root);
}

// ---------- JSON block extraction ----------
function extractJsonBlock(text) {
  const fences = [...String(text || '').matchAll(/```json\s*\n([\s\S]*?)```/g)];
  for (let k = fences.length - 1; k >= 0; k--) {
    try { return JSON.parse(fences[k][1]); } catch (e) { /* try previous */ }
  }
  const s = String(text || '');
  const a = s.lastIndexOf('```json');
  if (a >= 0) { try { return JSON.parse(s.slice(a + 7).replace(/```[\s\S]*$/, '')); } catch (e) { /* ignore */ } }
  return null;
}
function stripJsonBlock(text) { return String(text || '').replace(/```json\s*\n[\s\S]*?(```|$)\s*$/, '').trim(); }
function markersIn(text) {
  const out = [];
  for (const line of String(text || '').split('\n')) {
    const m = line.match(/\b(MISSING|OPEN-QUESTION|CONFLICT|PROPOSAL|ASSUMPTION):\s*(.+)/);
    if (m) out.push({ kind: m[1], text: m[2].replace(/[*_`|]+/g, '').trim().slice(0, 300) });
  }
  return out;
}
