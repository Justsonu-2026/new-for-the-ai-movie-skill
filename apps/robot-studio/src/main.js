// ---------- boot ----------
async function boot() {
  await Brain.init(() => (Engine.project() ? Engine.project().id : null));
  W.init(document.getElementById('stage3d'), document.getElementById('studio')).then((is3d) => { if (!is3d) UI.toast('3D could not start here, so the studio is shown as a flat map.', 5000); UI.renderAll(); });
  UI.init();
  Store.init().then(() => UI.renderAll());
  // idle life: an occasional quip from a resting robot
  setInterval(() => {
    if (document.hidden || reducedMotion() || Engine.isRunning()) return;
    const ids = Object.keys(ROBOTS).filter((id) => { const r = W.robot(id); return r && r.state === 'idle' && !r.bubble; });
    if (!ids.length) return;
    const id = ids[Math.floor(Math.random() * ids.length)];
    W.say(id, BANTER.idle[Math.floor(Math.random() * BANTER.idle.length)], { ms: 2600 });
  }, 7000);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
