// ---------- boot ----------
function boot() {
  Studio.init(document.getElementById('studio'));
  UI.init();
  Store.init().then(() => UI.renderAll());
  // idle life: an occasional quip from a resting robot
  setInterval(() => {
    if (document.hidden || reducedMotion() || Engine.isRunning()) return;
    const ids = Object.keys(ROBOTS).filter((id) => { const r = Studio.robot(id); return r && r.state === 'idle' && !r.bubble; });
    if (!ids.length) return;
    const id = ids[Math.floor(Math.random() * ids.length)];
    Studio.say(id, BANTER.idle[Math.floor(Math.random() * BANTER.idle.length)], { ms: 2600 });
  }, 9000);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
