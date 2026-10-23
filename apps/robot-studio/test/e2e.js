// End-to-end check with a fake Claude runtime (test/mock.js) and a fake Anthropic API.
// Run: node apps/robot-studio/test/e2e.js   (needs Playwright + Chromium; deps dir via RFS_DEPS with three@0.160.0 and an
// esbuild ESM bundle of @anthropic-ai/sdk@0.131.0 at sdk.esm.js). Screenshots go to test/out/.
const fs = require('fs');
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node-tools/node_modules/playwright')); }
const OUT = path.join(__dirname, 'out');
const DEPS = process.env.RFS_DEPS || '/tmp/claude-0/-home-user/18b54fe4-2751-531c-8f1b-327981c35797/scratchpad/deps';
fs.mkdirSync(OUT, { recursive: true });
const ROOT = path.join(__dirname, '..');
const page_html = fs.readFileSync(path.join(ROOT, 'robot-studio.html'), 'utf8');
const mock = fs.readFileSync(path.join(__dirname, 'mock.js'), 'utf8');
fs.writeFileSync(path.join(OUT, 'harness.html'), '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>' + mock + '</script></head><body>' + page_html + '</body></html>');
const shot = (n) => path.join(OUT, n + '.png');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const THREE_ESM = 'https://cdn.jsdelivr.net/npm/three@0.160.0/+esm';
function addonSource(rel) {
  const file = path.join(DEPS, 'node_modules/three/examples/jsm', rel);
  let src = fs.readFileSync(file, 'utf8');
  src = src.replace(/from\s+['"]three['"]/g, `from '${THREE_ESM}'`);
  src = src.replace(/from\s+['"](\.{1,2}\/[^'"]+)['"]/g, (m, r) => `from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/${path.posix.normalize(path.posix.join(path.posix.dirname(rel), r))}/+esm'`);
  return src;
}
async function routes(ctx) {
  await ctx.route(THREE_ESM, (r) => r.fulfill({ path: path.join(DEPS, 'node_modules/three/build/three.module.js'), contentType: 'text/javascript', headers: { 'access-control-allow-origin': '*' } }));
  await ctx.route(/three@0\.160\.0\/examples\/jsm\/(.+)\/\+esm$/, (r) => { const rel = r.request().url().match(/examples\/jsm\/(.+)\/\+esm$/)[1]; r.fulfill({ body: addonSource(rel), contentType: 'text/javascript', headers: { 'access-control-allow-origin': '*' } }); });
  await ctx.route('https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@0.131.0/+esm', (r) => r.fulfill({ path: path.join(DEPS, 'sdk.esm.js'), contentType: 'text/javascript', headers: { 'access-control-allow-origin': '*' } }));
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
}

(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
  const errors = [];
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, acceptDownloads: true });
  await routes(ctx);
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/fonts|ERR_FAILED/.test(m.text())) errors.push('console: ' + m.text()); });
  await page.goto('file://' + path.join(OUT, 'harness.html'));
  await page.waitForSelector('.world-canvas', { timeout: 30000 });
  await sleep(1500);
  await page.screenshot({ path: shot('01-lobby') });
  await page.fill('#cmdInput', 'A tiny frog runs a ferry across a puddle during a thunderstorm.');
  await page.press('#cmdInput', 'Enter');
  await sleep(300);
  console.log('IDEA IN LOBBY:', await page.inputValue('.newfilm textarea'));
  await page.click('.pick:has-text("Check key steps")');
  await page.click('details.more summary');
  await page.selectOption('details.more .field:has-text("Animation speed") select', 'turbo');
  await page.click('text=Start production!');
  await sleep(2500);
  await page.screenshot({ path: shot('02-cabin-seat') });
  await page.fill('#cmdInput', 'Please add more rain everywhere');
  await page.press('#cmdInput', 'Enter');
  await page.click('.nav-btn[data-page=studio]');
  for (let k = 0; k < 6; k++) { await sleep(1800); await page.screenshot({ path: shot('03-studio-director-' + k) }); }
  await page.waitForSelector('#reviewCard:not([hidden])', { timeout: 120000 });
  console.log('GATE 1:', await page.textContent('#reviewCard .review-head b'));
  await page.screenshot({ path: shot('04-cabin-review') });
  await page.click('#reviewCard >> text=Approve & continue');
  await page.click('.nav-btn[data-page=studio]');
  await page.click('.cam-btn[data-cam=top]');
  await sleep(1500);
  await page.screenshot({ path: shot('05-studio-top') });
  await page.selectOption('#roomSelect', 'cinematographer');
  await sleep(1500);
  await page.screenshot({ path: shot('06-room-cinematographer') });
  await page.selectOption('#roomSelect', 'music-director');
  await sleep(1200);
  await page.screenshot({ path: shot('07-room-music') });
  await page.click('.cam-btn[data-cam=director]');
  for (let k = 0; k < 10; k++) {
    try { await page.waitForSelector('#reviewCard:not([hidden])', { timeout: 300000 }); } catch (e) { console.log('no more reviews'); break; }
    const t = await page.textContent('#reviewCard .review-head b');
    console.log('GATE:', t);
    if (/Wrap/.test(t)) { await page.click('#reviewCard >> text=Approve & continue'); break; }
    await page.click('#reviewCard >> text=Approve & continue');
    await sleep(400);
    if (k === 1) { await page.click('.nav-btn[data-page=studio]'); for (let j = 0; j < 5; j++) { await sleep(2200); await page.screenshot({ path: shot('08-studio-working-' + j) }); } }
  }
  await sleep(1500);
  console.log('STATUS', await page.textContent('#progressCount'), '|', await page.textContent('#progressStage'));
  await page.click('.nav-btn[data-page=screening]');
  await sleep(400);
  await page.screenshot({ path: shot('09-screening-docs') });
  await page.click('.subtab:has-text("Boards")'); await page.selectOption('#previewSelect', 'characters'); await sleep(400);
  await page.screenshot({ path: shot('10-boards-characters') });
  await page.click('.subtab:has-text("Pictures")'); await sleep(4000);
  await page.screenshot({ path: shot('11-pictures'), fullPage: false });
  const frames = await page.$$eval('.frame-img', (els) => els.length);
  console.log('3D KEYFRAMES RENDERED:', frames);
  await page.click('.prompt-actions >> text=Code image'); await sleep(2500);
  console.log('CODE IMAGE:', await page.$$eval('.gen-out img', (els) => els.length));
  await page.click('.subtab:has-text("Previz video")'); await sleep(1500);
  await page.click('.player-controls >> text=Play'); await sleep(2600);
  await page.screenshot({ path: shot('12-previz-playing') });
  await page.click('.player-controls >> text=Stop').catch(() => {});
  await page.click('.player-controls >> text=Export video'); 
  await page.waitForFunction(() => (window.__saved || []).some((s) => /webm/.test(s.filename)), null, { timeout: 60000 }).catch(() => {});
  console.log('SAVED', JSON.stringify(await page.evaluate(() => window.__saved)));
  await page.click('.nav-btn[data-page=keys]'); await sleep(300);
  await page.screenshot({ path: shot('13-keys-claude') });
  await page.click('.nav-btn[data-page=board]'); await sleep(300);
  await page.screenshot({ path: shot('14-board') });
  console.log('NULLTEXT:', await page.evaluate(() => /\bnull\b|\bundefined\b/.test(document.querySelector('#app').innerText)));
  await page.click('.nav-btn[data-page=cabin]'); await sleep(1200);
  await page.screenshot({ path: shot('15-cabin-after') });

  // mobile
  const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await m.context().route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  await routes(m.context());
  m.on('pageerror', (e) => errors.push('mobile pageerror: ' + e.message));
  await m.goto('file://' + path.join(OUT, 'harness.html'));
  await sleep(2000);
  await m.screenshot({ path: shot('16-mobile-lobby'), fullPage: true });
  console.log('MOBILE H-OVERFLOW px:', await m.evaluate(() => document.documentElement.scrollWidth - window.innerWidth));

  // standalone copy on "your computer": no window.claude, brains from a (fake) Anthropic API key
  const sctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await routes(sctx);
  let apiCalls = 0;
  await sctx.route('https://api.anthropic.com/**', async (r) => {
    apiCalls++;
    const body = JSON.parse(r.request().postData() || '{}');
    const hdr = r.request().headers();
    const txt = '# story document\n\nA frog ferries a ladybug.\n\n```json\n{"title":"Puddle Ferry","logline":"A frog ferries a ladybug home.","beats":[{"name":"Setup","summary":"Fen waits."}],"characters":[]}\n```\n';
    const ev = (t, d) => `event: ${t}\ndata: ${JSON.stringify(d)}\n\n`;
    const sse = ev('message_start', { type: 'message_start', message: { id: 'msg_1', type: 'message', role: 'assistant', model: body.model, content: [], stop_reason: null, usage: { input_tokens: 10, output_tokens: 1 } } })
      + ev('content_block_start', { type: 'content_block_start', index: 0, content_block: { type: 'text', text: '' } })
      + txt.match(/[\s\S]{1,40}/g).map((c) => ev('content_block_delta', { type: 'content_block_delta', index: 0, delta: { type: 'text_delta', text: c } })).join('')
      + ev('content_block_stop', { type: 'content_block_stop', index: 0 })
      + ev('message_delta', { type: 'message_delta', delta: { stop_reason: 'end_turn' }, usage: { output_tokens: 50 } })
      + ev('message_stop', { type: 'message_stop' });
    if (apiCalls === 1) console.log('API REQUEST: model', body.model, '| effort', JSON.stringify(body.output_config), '| browser header', hdr['anthropic-dangerous-direct-browser-access'], '| key header', !!hdr['x-api-key']);
    await r.fulfill({ status: 200, headers: { 'content-type': 'text/event-stream', 'access-control-allow-origin': '*' }, body: sse });
  });
  const s = await sctx.newPage();
  s.on('pageerror', (e) => errors.push('standalone pageerror: ' + e.message));
  await s.goto('file://' + path.join(ROOT, 'robot-studio-standalone.html'));
  await s.waitForSelector('.key-card', { timeout: 30000 });
  await s.screenshot({ path: shot('17-standalone-keys') });
  await s.fill('.key-card:has-text("Claude brain") input[type=password]', 'sk-ant-test-key');
  await s.click('text=Save keys');
  await s.click('.nav-btn[data-page=lobby]');
  await s.fill('.newfilm textarea', 'A frog ferry in a storm');
  await s.click('.pick:has-text("Fully auto")');
  await s.click('details.more summary');
  await s.click('.choice:has-text("Story only")');
  await s.click('text=Start production!');
  await s.waitForFunction(() => /Story/.test(document.querySelector('#pipelineList') ? '' : '') || true);
  await s.waitForFunction(() => /Story[\s\S]*done/.test(document.body.innerText) && false, null, { timeout: 1 }).catch(() => {});
  for (let k = 0; k < 24 && apiCalls < 3; k++) await sleep(5000);
  await s.click('.nav-btn[data-page=board]'); await sleep(300);
  await s.screenshot({ path: shot('18-standalone-board') });
  console.log('STANDALONE API CALLS:', apiCalls, '| story status:', await s.evaluate(() => Array.from(document.querySelectorAll('.pl-row .pl-main small')).slice(0, 3).map((r) => r.innerText).join(' || ')));
  console.log('ERRORS', JSON.stringify(errors, null, 1));
  await browser.close();
})();
