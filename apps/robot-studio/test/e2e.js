// End-to-end check with a fake Claude runtime (test/mock.js). Run: node apps/robot-studio/test/e2e.js
// Needs Playwright with Chromium. Screenshots go to test/out/.
const fs = require('fs');
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node-tools/node_modules/playwright')); }
const OUT = path.join(__dirname, 'out');
fs.mkdirSync(OUT, { recursive: true });
const page_html = fs.readFileSync(path.join(__dirname, '..', 'robot-studio.html'), 'utf8');
const mock = fs.readFileSync(path.join(__dirname, 'mock.js'), 'utf8');
fs.writeFileSync(path.join(OUT, 'harness.html'), '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>' + mock + '</script></head><body>' + page_html + '</body></html>');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await page.goto('file://' + path.join(OUT, 'harness.html'));
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT, 'shot-01-welcome.png') });
  await page.fill('#cmdInput', 'A tiny frog runs a ferry across a puddle during a thunderstorm.');
  await page.press('#cmdInput', 'Enter');
  await page.waitForSelector('.wizard');
  await page.screenshot({ path: path.join(OUT, 'shot-02-wizard1.png') });
  await page.click('text=Next →'); await page.screenshot({ path: path.join(OUT, 'shot-03-wizard2.png') });
  await page.click('text=Next →'); await page.screenshot({ path: path.join(OUT, 'shot-04-wizard3.png') });
  await page.click('text=Next →');
  await page.click('text=Code sketches');
  await page.selectOption('.wiz-body .grid2:nth-of-type(2) label:nth-child(2) select', 'turbo').catch(()=>{});
  await page.screenshot({ path: path.join(OUT, 'shot-05-wizard4.png') });
  console.log('NULLTEXT wizard:', await page.evaluate(() => /\bnull\b/.test(document.querySelector('.wiz-body').innerText)));
  await page.click('text=Start production!');
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(OUT, 'shot-06-running.png') });
  // mid-run comment
  await page.fill('#cmdInput', 'Please add more rain everywhere');
  await page.press('#cmdInput', 'Enter');
  await page.waitForSelector('#reviewCard:not([hidden])', { timeout: 60000 });
  await page.screenshot({ path: path.join(OUT, 'shot-07-review-story.png') });
  const review1 = await page.textContent('#reviewCard');
  console.log('REVIEW1:', review1.slice(0, 80));
  // check prompt contents
  const calls = await page.evaluate(() => window.__calls.map((c) => ({ len: c.input.length, head: c.input.slice(0, 90), hasSkill: /<skill name=/.test(c.input), notes: /more rain everywhere/.test(c.input), imgs: c.images })));
  console.log('CALLS', JSON.stringify(calls, null, 0));
  // request change at gate
  await page.fill('#reviewCard textarea', 'Make Dot a beetle instead');
  await page.click('text=Request changes');
  await page.waitForSelector('#reviewCard:not([hidden])', { timeout: 60000 });
  const lastStory = await page.evaluate(() => window.__calls.filter((c) => /story-writer/.test(c.input)).pop().input);
  console.log('REVISION PROMPT has prev version:', /your_previous_version/.test(lastStory), 'has change:', /beetle/.test(lastStory));
  await page.click('#reviewCard >> text=Approve & continue');
  for (let k = 0; k < 8; k++) {
    try { await page.waitForSelector('#reviewCard:not([hidden])', { timeout: 90000 }); } catch (e) { console.log('no more reviews'); break; }
    const t = await page.textContent('#reviewCard .review-head b');
    console.log('GATE:', t);
    if (/style/i.test(t)) {
      await page.click('.tab[data-tab=preview]');
      await page.selectOption('#previewSelect', 'characters');
      await page.click('.seg-btn[data-mode=board]');
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(OUT, 'shot-08-board-characters.png') });
      await page.click('.tab[data-tab=chat]');
    }
    if (/Wrap/.test(t)) { await page.click('#reviewCard >> text=Approve & continue'); break; }
    await page.click('#reviewCard >> text=Approve & continue');
    await page.waitForTimeout(300);
  }
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(OUT, 'shot-09-wrapped.png') });
  const status = await page.evaluate(() => document.querySelector('#progressCount').textContent + ' | ' + document.querySelector('#progressStage').textContent);
  console.log('STATUS', status);
  // change request after wrap via chat
  await page.fill('#cmdInput', 'Make Fen braver please');
  await page.press('#cmdInput', 'Enter');
  await page.waitForTimeout(1500);
  const chatTail = await page.evaluate(() => Array.from(document.querySelectorAll('.msg-text')).slice(-4).map((e) => e.textContent).join(' || '));
  console.log('CHAT TAIL', chatTail);
  await page.waitForSelector('#reviewCard:not([hidden])', { timeout: 90000 }).catch(() => console.log('no review after CR'));
  console.log('AFTER CR GATE:', await page.textContent('#reviewCard .review-head b').catch(() => 'none'));
  // previews
  await page.click('.tab[data-tab=preview]');
  await page.selectOption('#previewSelect', 'storyboard');
  await page.click('.seg-btn[data-mode=board]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(OUT, 'shot-10-storyboard.png') });
  const svgSafe = await page.evaluate(() => { const s = document.querySelector('.sketch'); return s ? { script: !!s.querySelector('script'), onclick: !!s.querySelector('[onclick]') } : null; });
  console.log('SVG SANITIZED', JSON.stringify(svgSafe));
  await page.click('.seg-btn[data-mode=animatic]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(OUT, 'shot-11-animatic.png') });
  await page.click('.seg-btn[data-mode=master]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(OUT, 'shot-12-master.png') });
  await page.selectOption('#previewSelect', 'qc');
  await page.click('.seg-btn[data-mode=board]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(OUT, 'shot-13-qc.png') });
  await page.click('.tab[data-tab=pipeline]');
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(OUT, 'shot-14-pipeline.png') });
  console.log('NULLTEXT page:', await page.evaluate(() => /\bnull\b/.test(document.body.innerText)));
  await page.click('#btnExport');
  await page.click('.export-item:has-text("Master production document")');
  await page.waitForTimeout(300);
  console.log('SAVED', JSON.stringify(await page.evaluate(() => window.__saved)));
  await page.keyboard.press('Escape');
  await page.click('#btnSettings'); await page.waitForTimeout(200); await page.screenshot({ path: path.join(OUT, 'shot-15-settings.png') });
  await page.click('.modal .choice:has-text("Fully auto")'); await page.waitForTimeout(100);
  await page.click('.modal >> text=Save');
  await page.click('#btnProjects'); await page.waitForTimeout(400); await page.screenshot({ path: path.join(OUT, 'shot-16-projects.png') });
  await page.keyboard.press('Escape');
  // click a robot
  await page.click('.tab[data-tab=chat]');
  await page.click('#btnOverview'); await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(OUT, 'shot-17-overview.png') });
  // mobile
  const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  m.on('pageerror', (e) => errors.push('mobile pageerror: ' + e.message));
  await m.goto('file://' + path.join(OUT, 'harness.html'));
  await m.waitForTimeout(800);
  await m.screenshot({ path: path.join(OUT, 'shot-18-mobile.png'), fullPage: true });
  const overflow = await m.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  console.log('MOBILE H-OVERFLOW px:', overflow);
  console.log('ERRORS', JSON.stringify(errors, null, 1));
  await browser.close();
})();
