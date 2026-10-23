// ---------- the production engine ----------
const Engine = (() => {
  let sample = null;
  let samplePromise = null;
  let P = null;
  let running = false;
  let pauseReq = false;
  let ctl = null;
  let currentStage = null;
  const listeners = {};
  const on = (ev, fn) => (listeners[ev] = listeners[ev] || []).push(fn);
  const emit = (ev, ...a) => (listeners[ev] || []).forEach((fn) => { try { fn(...a); } catch (e) { console.error(e); } });

  // `sample` is the brain: Claude in claude.ai, or the Anthropic API with the user's key elsewhere
  function getSample() {
    if (!samplePromise) samplePromise = Brain.init(() => (P ? P.id : null)).then(() => (sample = Brain));
    return samplePromise.then(() => (Brain.ready() ? Brain : null));
  }

  // ----- project -----
  function newProject(settings, idea, uploads) {
    const stages = {};
    for (const id of STAGE_ORDER) stages[id] = { status: 'waiting', version: 0, md: '', data: null };
    P = {
      id: uid('film'), title: settings.title || 'Untitled film', created: Date.now(), settings: { ...settings, idea },
      stages, chat: [], notes: [], crs: [], uploads: uploads || [],
    };
    return P;
  }
  const project = () => P;
  function setProject(p) { stop(); P = p; emit('change'); }
  const enabled = (id) => id === 'brief' || id === 'wrap' || P.settings.crew[id] !== false;
  const animated = () => !/live action/i.test(P.settings.medium || '');
  function needsReview(id) {
    const m = P.settings.mode;
    if (m === 'auto') return false;
    if (m === 'every') return true;
    if (m === 'custom') return !!(P.settings.gates || {})[id];
    return STAGE[id].gate;
  }
  function downstreamOf(id) {
    const out = new Set();
    const visit = (x) => { for (const s2 of STAGES) if (s2.needs.includes(x) && !out.has(s2.id)) { out.add(s2.id); visit(s2.id); } };
    visit(id);
    if (id !== 'wrap') out.add('wrap');
    return [...out];
  }

  // ----- chat -----
  function chat(from, text, extra) {
    const m = { id: uid('m'), from, text, ts: Date.now(), ...(extra || {}) };
    if (P) P.chat.push(m);
    emit('chat', m);
    return m;
  }
  const banter = (list, vars) => { let t = list[Math.floor(Math.random() * list.length)]; for (const [k, v] of Object.entries(vars || {})) t = t.split('{' + k + '}').join(v); return t; };

  // ----- prompt assembly -----
  const LIMITS = { short: 7000, standard: 12000, detailed: 20000 };
  function upstreamLimit(id) { const base = LIMITS[P.settings.depth] || 12000; return id === 'master' ? base * 3 : base; }
  function settingsBlock() {
    const st = P.settings;
    const crew = STAGE_ORDER.filter(enabled).map((id) => `${id} (${ROBOTS[STAGE[id].robot].name}, ${STAGE[id].robot})`).join('; ');
    return [
      '<project_brief_settings>',
      `Pitch from the client: ${st.idea || '(none)'}`,
      `Working title: ${P.title}`,
      `Runtime target: ${st.runtime} seconds · Aspect ratio: ${st.aspect} · Visual medium: ${st.medium} · Genre: ${st.genre}${st.tone ? ' · Tone: ' + st.tone : ''}`,
      `Dialogue language: ${st.language} · Audience: ${st.audience || 'general'}`,
      `Target image model: ${st.imageModel} · Target video model: ${st.videoModel}`,
      `Run mode: ${MODES[st.mode].label.replace(/^\S+\s/, '')} · Crew in use: ${crew}`,
      `Pictures: ${(IMAGE_MODES[st.imageMode] || IMAGE_MODES.sketch).label.replace(/^\S+\s/, '')}`,
      '</project_brief_settings>',
    ].join('\n');
  }
  function textUploads(limitEach, total) {
    let used = 0;
    const out = [];
    for (const u of P.uploads) {
      if (u.kind === 'text' && u.text) {
        const t = truncate(u.text, Math.min(limitEach, total - used));
        used += t.length;
        out.push(`<client_upload name="${esc(u.name)}">\n${t}\n</client_upload>`);
        if (used >= total) break;
      } else if (u.kind === 'image' || u.kind === 'video') out.push(`<client_upload name="${esc(u.name)}" kind="${u.kind === 'video' ? 'video frame' : 'image'}">attached as an image to this message</client_upload>`);
      else out.push(`<client_upload name="${esc(u.name)}">(file type that cannot be read in the browser; only its name is known)</client_upload>`);
    }
    return out.join('\n');
  }
  function imagesFor(id) {
    if (!['brief', 'story', 'characters', 'world', 'style', 'storyboard'].includes(id)) return [];
    return P.uploads.filter((u) => u.blob && (u.kind === 'image' || u.kind === 'video')).map((u) => u.blob);
  }
  function notesFor(id) {
    return P.notes.filter((n) => n.target === 'all' || n.target === id);
  }

  const JSON_SHAPES = {
    brief: '{"title": string, "logline_seed": string, "assumptions": [string], "questions": [{"q": string, "default": string}]}',
    story: '{"title": string, "logline": string, "theme": string, "characters": [{"name": string, "role": string, "want": string}], "beats": [{"name": string, "summary": string}], "ending": string}',
    screenplay: '{"scenes": [{"id": "SC01", "heading": string, "summary": string, "characters": [string], "est_s": number}], "total_est_s": number}',
    characters: '{"characters": [{"id": "CH-SLUG", "name": string, "role": string, "identity_lock": string, "short_lock": string, "costumes": [{"id": "CO-SLUG-01", "lock": string}], "colors": ["#hex"], "silhouette": string}]}',
    world: '{"locations": [{"id": "LOC-SLUG", "name": string, "lock": string, "short_lock": string, "time_of_day": string, "palette": ["#hex"]}], "props": [{"id": "PR-SLUG", "name": string, "lock": string, "states": [string]}]}',
    style: '{"look": string, "style_lock": string, "palette": [{"role": string, "name": string, "hex": "#hex"}], "color_script": [{"scene": "SC01", "hues": string, "mood": string}], "avoid": [string]}',
    direction: '{"shots": [{"id": "SC01-SH010", "scene": "SC01", "size": string, "angle": string, "move": string, "subject": string, "action": string, "duration_s": number, "purpose": string, "transition_out": string}], "needs_action": ["SC02"], "total_s": number}',
    action: '{"scenes": ["SC02"], "phrases": [{"id": string, "shots": ["SC02-SH020"], "moves": string}], "continuity": [string], "new_shots": [{"id": string, "after": string, "action": string, "duration_s": number}]}',
    animation: '{"style_rules": [string], "shots": [{"id": string, "key_poses": [string], "timing": string}]}',
    camera: '{"setups": [{"id": string, "scene": "SC01", "key": string, "fill": string, "rim": string, "practicals": string}], "shots": [{"id": string, "lens_mm": number, "aperture": string, "height_m": number, "support": string, "movement": string, "focus": string}]}',
    continuity: '{"issues": [{"id": string, "severity": "BLOCKER|MAJOR|MINOR", "issue": string, "owner": string}], "states": [{"scene": "SC01", "notes": string}]}',
    master: '{"shots": [{"id": "SC01-SH010", "scene": "SC01", "duration_s": number, "size": string, "characters": [string], "start_frame": string, "end_frame": string, "motion": string, "mode": string, "clip_length_s": number, "keep": string, "dialogue": string}]}',
    storyboard: '{"panels": [{"id": "SB-SC01-SH010-P1", "shot": "SC01-SH010", "moment": string, "composition": string, "camera_note": string, "duration_s": number, "dialogue": string, "sketch_prompt": string}]}',
    edit: '{"timeline": [{"shot": string, "in_s": number, "out_s": number, "duration_s": number, "transition": string, "note": string}], "runtime_s": number, "target_s": number, "problems": [string]}',
    voice: '{"profiles": [{"character": string, "voice": string}], "lines": [{"id": "VL-SC01-010", "shot": string, "character": string, "line": string, "delivery": string}]}',
    music: '{"concept": string, "cues": [{"id": "M01", "start": string, "end": string, "function": string, "bpm": number, "key": string, "instrumentation": string, "prompt": string}]}',
    sound: '{"ambiences": [{"scene": "SC01", "bed": string}], "cues": [{"id": "SFX-SC01-010", "shot": string, "sound": string, "sync": string, "layer": string}]}',
    vfx: '{"shots": [{"id": "VFX-SC01-SH010", "shot": string, "problem": string, "method": string, "risk": string, "fallback": string}]}',
    images: '{"prompts": [{"id": "IMG-...", "target": string, "kind": "character sheet|location|prop|keyframe start|keyframe end|style frame", "prompt": string, "aspect": string, "references": [string]}]}',
    video: '{"prompts": [{"id": "VID-...", "shot": string, "mode": string, "prompt": string, "clip_length_s": number, "keep": string, "audio": string}]}',
    qc: '{"verdict": "READY|NEEDS FIXES", "summary": {"pass": number, "fix": number, "redo": number, "not_verifiable": number}, "items": [{"id": "QC-001", "target": string, "check": string, "verdict": "PASS|FIX|REDO|NOT-VERIFIABLE", "evidence": string, "owner": string, "owner_stage": string, "repair": string}]}',
    wrap: '{"headline": string, "ready": [string], "next_steps": [string], "open_issues": [{"owner": string, "issue": string}]}',
  };
  const FRAME_WORDS = { short: '70-120', standard: '120-200', detailed: '150-300' };

  function taskFor(id, extra) {
    const st = P.settings;
    switch (id) {
      case 'brief': return 'Open the production. Write `00_brief.md` from the pitch, the uploads and the studio settings above: specs and constraints, run mode, crew in use, an ASSUMPTION: line for every value the client did not give, and at most 5 OPEN-QUESTION: lines (each with the default you will use). Propose a short working title. Then a short PRODUCTION_LOG start (stages planned for this crew).';
      case 'story': return `Write the story. If the pitch leaves the story open, first give 3 compact concepts (concepts.md) that differ in a real way, pick the strongest for a ${st.runtime} s ${st.genre} film and say why; then the developed story.md for it, sized to the runtime.`;
      case 'screenplay': return 'Write the screenplay: the full Fountain script in one fenced ```fountain block (title page first), then scene_index.md with one `record: scene` YAML block per scene. Match the runtime target.';
      case 'characters': return 'Write the character bible for every character in the screenplay: design rationale, `record: character` with identity_lock and short_lock (follow the lock rules exactly), one `record: costume` per look, sheet specifications and model-neutral sheet briefs. Use any uploaded reference images as client references.';
      case 'world': return 'Write the world bible: one location section with `record: location` (lock and short_lock) for every location in the screenplay, then props.md with one `record: prop` per story prop and all of its states.';
      case 'style': return 'Write the style bible: look statement, `record: style` with style_lock (no location, no aspect ratio in the lock), master palette with hex, a color script row per scene, texture/lens/composition tendencies, and grading intent.';
      case 'direction': return `Direct every scene using the ${st.genre} genre playbook: scene analysis, beat map, blocking, performance notes, and one shot-list row per shot (IDs SC<NN>-SH<NNN> in tens). Shot durations must sum to about ${st.runtime} s. Flag every scene that needs the action-director (fights, chases, stunts) in needs_action.${animated() ? ' The medium is animation, so flag the animation-director for every scene.' : ''}`;
      case 'action': return `Choreograph the action for the flagged scenes (${(extra && extra.scenes || []).join(', ') || 'any physical set piece'}): story of the action, geography, numbered phrases (action → reaction → consequence), shot mapping to the director's IDs, continuity output, AI-execution notes.`;
      case 'animation': return `Plan the animation acting for every shot in the ${st.medium} medium: motion style rules, per-shot acting beats, key poses with timing, holds, start and end pose descriptions as frame text, and off-model risks.`;
      case 'camera': return 'Write the camera and lighting plan for every scene: lighting setups (sources, key/fill/rim/practicals, quality, color temperature), and per shot lens (mm), aperture/depth of field, focus plan, camera height, support, movement execution. Respect the location plans and the style bible.';
      case 'continuity': return 'Run the continuity pass: story timeline, one `record: continuity` per scene (axis, screen direction, character states with costume IDs, prop states, time of day), a coverage map (every scripted beat and line → shot IDs), and a continuity report with BLOCKER/MAJOR/MINOR issues and owners.';
      case 'master': return `Compile the complete \`record: shot\` YAML block for every shot of scene ${extra.scene} only (shots: ${extra.shots.join(', ') || 'from the director\'s list'}), following compiling-shot-records: pull every field from its owner; start_frame and end_frame ${FRAME_WORDS[st.depth]} words each with identity, costume, prop and location locks pasted verbatim (full locks for in-focus subjects, short locks for the rest); motion in clip time with keep ranges; generation mode and clip_length_s for ${st.videoModel}. Any field without a source is MISSING: <what, from whom>. Do not write other scenes.`;
      case 'storyboard': return 'Write storyboard.md: per scene, one `record: panel` per panel (1-2 panels per shot, ID SB-<SHOT>-P<N>) with frame moment, description, composition, camera notes (arrows), duration, dialogue/sound, transition and a short sketch_prompt.';
      case 'edit': return `Make the paper edit: a timeline table of every shot with in/out and duration, runtime vs the ${st.runtime} s target, rhythm analysis per scene, problems found and change requests, transitions with reasons, J/L audio overlaps, music sync points, and post order.`;
      case 'voice': return 'Direct the voices: a voice profile per speaking character (no celebrity names), a pronunciation guide, one `record: voice_line` per dialogue line with delivery and timing, and a TTS script per character.';
      case 'music': return 'Write the music plan: concept, themes, spotting notes, one `record: music_cue` per cue with timing, function, tempo, key, instrumentation, dynamics and in/out, plus a generation prompt per cue.';
      case 'sound': return 'Write the sound design plan: sonic concept, ambience bed per scene, one `record: sfx_cue` per sync sound, bridges and silences, mix intent per scene, and generation prompts.';
      case 'vfx': return 'Write the VFX plan: one `record: vfx` per shot that needs effects (problem, method, elements, steps, risk, fallback, review criteria) and reusable elements. If no shot needs VFX, say so and list only cleanup checks.';
      case 'images': return `Write the image prompts for ${st.imageModel}: tool profile, generation plan in order (character sheets and location references first, then keyframes), and one \`record: image_prompt\` per image with prompt, references with roles, parameters (${st.aspect}), must_match checklist and output name. Cover every character sheet, every location, and the start (and end, where needed) keyframe of every shot.`;
      case 'video': return `Write the video prompts for ${st.videoModel}: tool profile, one \`record: video_prompt\` per shot with mode, prompt (motion in clip time), references with roles, clip_length_s, trim/keep, audio plan, risks and a retry ladder, plus a chaining plan for continuous actions.`;
      case 'qc': return 'Run an independent QC preflight of the documents above (you did not write any of them): check story/screenplay coverage, lock rules and lock presence in frame texts, continuity, runtime math, prompt completeness for the target tools, and give one `record: qc_item` per finding with verdict, evidence, owner, the owner stage id (one of: ' + STAGE_ORDER.join(', ') + ') and a repair instruction. Label it independent.';
      case 'wrap': return 'Wrap the production: a status dashboard (stage, version, status), what is ready to generate now and in what order, the open issues grouped by owner (from MISSING:/OPEN-QUESTION:/CONFLICT: lines and the QC report), and the next steps for the client. Keep it short and practical.';
      default: return '';
    }
  }

  function buildPrompt(id, extra) {
    const S = STAGE[id], R = ROBOTS[S.robot], sk = SKILLDATA.skills[S.robot];
    const depth = P.settings.depth;
    const parts = [];
    const auto = P.settings.mode === 'auto';
    parts.push(`You are ${R.name}, the ${R.job} robot in Robo Film Studio: a browser app where a crew of AI film-department robots plans a film together, coordinated by Captain Clipboard (the production-manager). You are running the "${S.robot}" skill. Its full instructions follow in <skill>. Follow its craft rules, quality bar, ownership rules, markers (MISSING:, ASSUMPTION:, PROPOSAL:, CONFLICT:, OPEN-QUESTION:) and record formats.

How this studio differs from a project folder (these rules override the skill where they conflict):
- There is no file system, no scripts, no validator run and no subagents. Never claim you wrote, ran or validated files. Write your whole deliverable as one Markdown document in your reply; where the skill names files, give each one as a "## <file name>" section.
- The upstream documents below are the departments' current approved work. Build only on them; never change another department's decision: raise PROPOSAL: or CONFLICT: lines for its owner instead.
- Do not stop to ask questions. ${auto ? 'The client chose fully automatic mode: make the best choice, mark it ASSUMPTION:, and continue.' : 'The client reviews at gates: make the best choice, mark it ASSUMPTION:, and list real questions as OPEN-QUESTION: lines; the coordinator routes them.'}
- Client notes are the client's direction and outrank your own preferences; apply each one and say where.
- Length: ${DEPTHS[depth].words}
- Start with the artifact header the crew protocol describes (id, version, status REVIEW, depends_on with the upstream versions given). End with the handoff block, then ONE fenced \`\`\`json block with exactly this shape (no comments): ${JSON_SHAPES[id]}`);
    parts.push(`<skill name="${S.robot}">\n${sk.body}\n</skill>`);
    for (const f of S.files) {
      if (depth === 'short' && f.startsWith('references/') && id !== 'master') continue;
      if (sk.files[f]) parts.push(`<skill_file path="${f}">\n${sk.files[f]}\n</skill_file>`);
    }
    if (depth === 'detailed') parts.push(`<shared_file name="crew-protocol.md">\n${SKILLDATA.shared['crew-protocol.md']}\n</shared_file>`);
    for (const f of S.shared) if (depth !== 'short' || f === 'production-schema.md') parts.push(`<shared_file name="${f}">\n${SKILLDATA.shared[f]}\n</shared_file>`);
    parts.push(settingsBlock());
    const lim = upstreamLimit(id);
    for (const n of S.needs) {
      const st = P.stages[n];
      if (!st || !st.md || !enabled(n)) continue;
      parts.push(`<upstream department="${n}" owner="${STAGE[n].robot}" version="v${st.version}" status="${st.status === 'done' ? 'APPROVED' : st.status.toUpperCase()}">\n${truncate(st.md, n === 'master' && id !== 'storyboard' ? lim * 1.5 : lim)}\n</upstream>`);
    }
    if (['brief', 'story', 'screenplay', 'characters', 'world', 'style'].includes(id) && P.uploads.length) parts.push(textUploads(6000, 18000));
    const notes = notesFor(id);
    if (notes.length) parts.push('<client_notes>\n' + notes.map((n) => `- (${n.target === 'all' ? 'for everyone' : 'for you'}) ${n.text}`).join('\n') + '\n</client_notes>');
    if (extra && extra.revise) {
      parts.push(`<your_previous_version version="v${P.stages[id].version}">\n${truncate(P.stages[id].md, 30000)}\n</your_previous_version>`);
      parts.push(`This is a revision (change request ${extra.cr || ''}). Apply: ${extra.revise}\nKeep everything else as it was unless the change forces it; record what changed in a short "Changes in this version" list; bump the version.`);
    }
    parts.push(`Your task now: ${taskFor(id, extra)}`);
    return parts.join('\n\n');
  }

  // ----- running a stage -----
  const sleepS = (ms) => sleep(ms / (SPEEDS[P.settings.speed] || 1));
  async function handoffAnimation(id, revising) {
    const robot = STAGE[id].robot;
    const R = ROBOTS[robot];
    if (robot === COORD) {
      await W.goHome(COORD);
      W.event('cabin');
      W.say(COORD, revising ? 'Revision time! Let me rework this…' : `My turn: ${TASK_LINES[id]}.`, { ms: 2600 });
      return;
    }
    W.say(COORD, `Off to ${R.name}'s room!`, { ms: 1800 });
    await W.goToRobot(COORD, robot);
    const line = revising ? `${R.name}, the client asked for a change: ${revising.slice(0, 80)}` : banter(BANTER.handoff, { name: R.name, task: TASK_LINES[id] });
    W.setState(COORD, 'talk');
    W.say(COORD, line, { ms: 2600, lines: 4 });
    if (P.settings.chatter) chat(COORD, line, { team: true, to: robot });
    await sleepS(1500);
    W.setState(COORD, 'idle');
    const ack = banter(BANTER.ack);
    W.setState(robot, 'talk');
    W.say(robot, ack, { ms: 1800 });
    if (P.settings.chatter) chat(robot, ack, { team: true });
    await sleepS(1100);
  }
  async function collectAnimation(id) {
    const robot = STAGE[id].robot;
    W.setState(robot, 'happy');
    const line = banter(BANTER.done);
    W.say(robot, line, { ms: 2200 });
    for (let k = 0; k < 4; k++) W.fx(robot);
    if (P.settings.chatter) chat(robot, line, { team: true });
    if (robot !== COORD) {
        await W.goToRobot(COORD, robot);
      W.say(COORD, banter(BANTER.collect, { name: ROBOTS[robot].name }), { ms: 1800 });
      await sleepS(900);
      const home = W.goHome(COORD);
      // before a review the Captain brings the work back to the cabin and hands it to you
      if (needsReview(id) || P.settings.stopAfter === id || id === 'wrap') await home;
    }
    setTimeout(() => { if (W.robot(robot).state === 'happy') W.setState(robot, 'idle'); }, 2600);
  }

  async function callClaude(input, opts, onLive) {
    if (!(await getSample())) throw { code: Brain.mode() === 'api' ? 'no_brain' : 'unavailable', message: 'No brain available' };
    ctl = new AbortController();
    const myCtl = ctl;
    const res = await Brain.sample(input, {
      modelTier: P.settings.tier, cache: false, signal: myCtl.signal,
      ...(opts.images && opts.images.length ? { images: opts.images } : {}),
      onText: ({ text }) => onLive && onLive(text),
    });
    return res;
  }

  async function runStage(id, extra) {
    const S = STAGE[id];
    const st = P.stages[id];
    const robot = S.robot;
    currentStage = id;
    st.status = 'working';
    st.startedAt = Date.now();
    st.error = null;
    st.notesAt = P.notes.length;
    emit('change');
    const revising = extra && extra.revise;
    await handoffAnimation(id, revising);
    W.setState(robot, 'think');
    W.event('work', { robot });
    W.say(robot, 'Thinking…', { kind: 'thought' });
    let fxTimer = setInterval(() => W.fx(robot), 1300 / (SPEEDS[P.settings.speed] || 1));
    let lastBubble = 0;
    const live = (text) => {
      if (W.robot(robot).state !== 'write') W.setState(robot, 'write');
      st.liveText = text;
      st.words = words(text);
      W.setPaper(robot, Math.min(1, text.length / 6000), lastWords(stripJsonBlock(text), 40));
      const now = Date.now();
      if (now - lastBubble > 900) { lastBubble = now; W.say(robot, lastWords(stripJsonBlock(text), 9) || '…', { kind: 'thought', width: 28 }); }
      emit('stream', id);
    };
    try {
      let md = '';
      let data = null;
      if (id === 'master') ({ md, data } = await runMaster(live));
      else if (id === 'render') ({ md, data } = await runRender(live));
      else {
        const input = buildPrompt(id, extra);
        const images = imagesFor(id);
        const limits = images.length && sample && sample.limits ? await sample.limits().catch(() => null) : null;
        const imgs = limits && limits.images ? images.slice(0, limits.images.maxCount) : [];
        const res = await callClaude(input, { images: imgs }, live);
        md = res.text;
        data = extractJsonBlock(md);
        if (res.truncated) md += '\n\n> ⚠️ This answer was cut short by the length limit. Try the Short depth or redo this stage.';
      }
      st.md = md;
      st.data = data;
      st.liveText = null;
      st.version = (st.version || 0) + 1;
      st.words = words(stripJsonBlock(md));
      if (id === 'brief' && data && data.title && (!P.settings.title || P.title === 'Untitled film')) { P.title = String(data.title).slice(0, 80); emit('title'); }
      if (S.sketch && P.settings.imageMode !== 'prompts') {
        W.setState(robot, 'draw');
        W.say(robot, 'Now the fun part: drawing! ✏️', { kind: 'thought' });
        try { await runSketches(id); } catch (e) { if (e && e.code === 'cancelled') throw e; chat(COORD, `The sketches for ${S.title} didn't come out (${e.code || 'error'}). The document is fine; you can retry the sketches from the Preview tab.`); }
      }
      st.endedAt = Date.now();
      const late = P.notes.slice(st.notesAt).filter((n) => n.target === id || n.target === 'all');
      st.status = 'done';
      const lateCR = P.crs.filter((c) => c.ts > st.startedAt && c.stage !== id && downstreamOf(c.stage).includes(id));
      if (lateCR.length) {
        st.status = 'stale';
        st.revisionNote = `Upstream change ${lateCR.map((c) => c.id).join(', ')} arrived while you worked: ${lateCR.map((c) => c.text).join(' / ')}. Update your document to match the new upstream versions.`;
        st.revisionCR = lateCR[0].id;
      }
      clearInterval(fxTimer);
      W.clearBubble(robot);
      W.setPaper(robot, 1);
      emit('change');
      Store.saveProject(P, [id]);
      await collectAnimation(id);
      if (id === 'brief' && data && Array.isArray(data.questions) && data.questions.length && P.settings.mode !== 'auto') {
        chat(COORD, 'Quick questions from the brief (I\'ll use the defaults unless you tell me otherwise):\n' + data.questions.slice(0, 5).map((q) => `• ${q.q} — default: ${q.default}`).join('\n'));
      }
      if (late.length && id !== 'wrap') {
        const cr = newCR(id, late.map((n) => n.text).join(' / '));
        chat(COORD, `Notes arrived while ${ROBOTS[robot].name} was working, so I'll have it revise now (${cr.id}).`);
        return { revise: late.map((n) => n.text).join(' / '), cr: cr.id };
      }
      return { ok: true };
    } catch (e) {
      clearInterval(fxTimer);
      W.clearBubble(robot);
      st.liveText = null;
      st.status = st.md ? 'done' : 'waiting';
      if (e && e.code === 'cancelled') { st.status = st.version ? 'done' : 'waiting'; emit('change'); W.setState(robot, 'idle'); return { cancelled: true }; }
      st.status = 'error';
      st.error = errCopy(e);
      W.setState(robot, 'idle');
      W.say(robot, 'Uh-oh… 🔧', { ms: 3000 });
      chat(COORD, `${ROBOTS[robot].name} hit a snag on ${S.title}: ${st.error} I've paused the line. Press Retry in the Pipeline tab when you're ready.`, { error: true });
      emit('change');
      return { error: true, code: e && e.code };
    } finally {
      ctl = null;
      currentStage = null;
    }
  }

  function errCopy(e) {
    const c = e && e.code;
    return ({
      not_granted: 'Claude access for this page was declined, so the robots can\'t think. Allow it to continue.',
      sampling_disabled: 'Claude isn\'t available for this account here.',
      rate_limited: 'We hit a usage or rate limit. Wait a bit, then retry.',
      session_expired: 'Your session expired. Sign in again, then retry.',
      refused: 'Claude declined this request. Try rewording the pitch or the notes.',
      prompt_too_large: 'The context got too big. Switch Detail to Short in Settings, then retry.',
      empty_completion: 'The answer came back empty. Retry, or ask for less.',
      image_rejected: 'One of the uploaded images was rejected. Remove it and retry.',
      images_unavailable: 'Images can\'t be sent from this view. Remove image uploads and retry.',
      unavailable: 'Claude isn\'t reachable from this view. Open the studio in claude.ai.',
      upstream_error: 'The brain-link dropped (a temporary connection problem).',
      no_brain: 'The robots have no brain here yet: add your Anthropic API key on the 🔑 Keys page (or open the studio inside claude.ai).',
      bad_key: 'Your Anthropic API key was rejected. Check it on the 🔑 Keys page.',
      network_blocked: 'The request could not reach Claude from this page (network blocked).',
      invalid_request: 'The request was rejected as malformed. Try again, or switch Detail to Short.',
    })[c] || `Something went wrong (${c || 'unknown'}).`;
  }

  // master: compile shot records scene by scene
  async function runMaster(live) {
    const scenes = (P.stages.screenplay.data && P.stages.screenplay.data.scenes) || [];
    const shots = (P.stages.direction.data && P.stages.direction.data.shots) || [];
    const sceneIds = scenes.length ? scenes.map((x) => x.id) : [...new Set(shots.map((x) => x.scene))];
    if (!sceneIds.length) sceneIds.push('ALL');
    let md = `# Shot records — compiled by Captain Clipboard\n\n`;
    const all = [];
    for (let k = 0; k < sceneIds.length; k++) {
      const sc = sceneIds[k];
      const scShots = shots.filter((x) => x.scene === sc).map((x) => x.id);
      W.say(COORD, `Compiling ${sc} (${k + 1}/${sceneIds.length})…`, { kind: 'thought' });
      const head = md + `\n## ${sc}\n\n`;
      const res = await callClaude(buildPrompt('master', { scene: sc, shots: scShots }), {}, (t) => live(head + t));
      md = head + stripJsonBlock(res.text) + '\n';
      const d = extractJsonBlock(res.text);
      if (d && Array.isArray(d.shots)) all.push(...d.shots);
    }
    md += '\n```json\n' + JSON.stringify({ shots: all }) + '\n```\n';
    return { md, data: { shots: all } };
  }

  // ----- sketches (Claude draws SVG) -----
  async function runSketches(id) {
    const st = P.stages[id];
    const pal = (P.stages.style.data && P.stages.style.data.palette || []).map((p) => p.hex).filter(Boolean).slice(0, 6).join(', ');
    let items = [];
    if (id === 'characters') items = ((st.data && st.data.characters) || []).map((c) => ({ id: c.id, title: c.name, desc: `${c.identity_lock || ''} Costume: ${(c.costumes && c.costumes[0] && c.costumes[0].lock) || ''}. Silhouette: ${c.silhouette || ''}. Colors: ${(c.colors || []).join(', ')}` }));
    if (id === 'world') items = ((st.data && st.data.locations) || []).map((l) => ({ id: l.id, title: l.name, desc: `${l.lock || ''} Time: ${l.time_of_day || ''}. Colors: ${(l.palette || []).join(', ')}` }));
    if (id === 'storyboard') items = ((st.data && st.data.panels) || []).map((p) => ({ id: p.id, title: p.shot, desc: `${p.moment || ''}. Composition: ${p.composition || ''}. Camera: ${p.camera_note || ''}. ${p.sketch_prompt || ''}` }));
    items = items.slice(0, id === 'storyboard' ? 36 : 8);
    if (!items.length) return;
    st.sketches = [];
    const batch = id === 'storyboard' ? 6 : 4;
    const kind = { characters: 'character concept sketch (full body, front three-quarter view, with the name as a small caption)', world: 'location concept sketch (establishing view)', storyboard: `storyboard panel at ${P.settings.aspect} (rough, readable staging; draw the frame edge; arrows for camera or subject movement)` }[id];
    for (let k = 0; k < items.length; k += batch) {
      const group = items.slice(k, k + batch);
      const prompt = `You are ${ROBOTS[STAGE[id].robot].name}, drawing quick concept sketches as SVG for a film in the "${P.settings.medium}" medium. Draw one ${kind} for each item below.
Rules: clean, simple line art with a few flat fills; viewBox "0 0 320 ${id === 'storyboard' ? (P.settings.aspect === '9:16' ? 568 : P.settings.aspect === '1:1' ? 320 : 180) : 240}"; only basic shapes (path, rect, circle, ellipse, line, polyline, polygon, text, g); no images, no scripts, no external references, no filters; at most 2.5 KB per SVG.${pal ? ' Use this palette where it helps: ' + pal + '.' : ''}
Output format, nothing else: for each item a line "### <id>" followed by one fenced \`\`\`svg block.

${group.map((g) => `- ${g.id} — ${g.title}: ${truncate(g.desc, 700)}`).join('\n')}`;
      const res = await callClaude(prompt, {}, (text) => {
        parseSketches(text, group, st);
        W.setPaper(STAGE[id].robot, Math.min(1, (k + group.length * 0.5) / items.length));
        emit('stream', id);
      });
      parseSketches(res.text, group, st);
      emit('stream', id);
    }
  }
  function parseSketches(text, group, st) {
    const re = /###\s*([^\n]+)\n+```svg\s*\n([\s\S]*?)```/g;
    let m;
    while ((m = re.exec(text))) {
      const sid = m[1].trim();
      const svgClean = sanitizeSvg(m[2]);
      if (!svgClean) continue;
      const g = group.find((x) => sid.includes(x.id)) || { id: sid, title: sid };
      const ex = st.sketches.find((x) => x.id === g.id);
      if (ex) ex.svg = svgClean; else st.sketches.push({ id: g.id, title: g.title, svg: svgClean });
    }
  }
  async function redoSketches(id) {
    if (running) return chat(COORD, 'The crew is busy right now; I\'ll queue sketches after this stage. (Pause first if you want them now.)');
    const robot = STAGE[id].robot;
    running = true;
    emit('change');
    W.setState(robot, 'draw');
    try { await runSketches(id); Store.saveProject(P, [id]); chat(robot, 'Fresh sketches, hot off the plotter! ✏️'); }
    catch (e) { if (!(e && e.code === 'cancelled')) chat(COORD, 'Sketching failed: ' + errCopy(e)); }
    finally { running = false; W.setState(robot, 'idle'); emit('change'); }
  }

  // ----- pipeline -----
  function nextStage() {
    for (const id of STAGE_ORDER) {
      if (!enabled(id)) continue;
      const st = P.stages[id];
      if (st.status === 'done' || st.status === 'skipped') continue;
      return id;
    }
    return null;
  }
  function shouldSkip(id) {
    if (id === 'action') {
      const flagged = (P.stages.direction.data && P.stages.direction.data.needs_action) || [];
      if (!flagged.length && !/action/i.test(P.settings.genre)) return BANTER.skip.action;
      return null;
    }
    if (id === 'animation' && !animated()) return BANTER.skip.animation;
    if (id === 'render' && P.settings.imageMode === 'prompts') return 'Pictures by code are off for this film, Gary. Feet up! 🦶';
    return null;
  }
  async function run() {
    if (running || !P) return;
    if (!(await getSample())) { chat(COORD, Brain.mode() === 'api' ? 'My crew needs a brain! Add your Anthropic API key on the 🔑 Keys page, then press ▶ Continue.' : 'I can\'t reach Claude from this view, so the robots can\'t think yet. Open this studio inside claude.ai and press Start again.', { error: true }); emit('needbrain'); return; }
    running = true;
    pauseReq = false;
    emit('change');
    let pending = null;
    try {
      while (!pauseReq) {
        const id = pending ? pending.id : nextStage();
        if (!id) { finish(); break; }
        const S = STAGE[id];
        if (!pending) {
          const skip = shouldSkip(id);
          if (skip) {
            P.stages[id].status = 'skipped';
            chat(COORD, skip, { team: true });
            W.say(COORD, skip, { ms: 2600, lines: 4 });
            W.setState(S.robot, 'off');
            emit('change');
            continue;
          }
        }
        const st = P.stages[id];
        let extra = pending ? pending.extra : null;
        if (!extra && st.revisionNote && st.md) extra = { revise: st.revisionNote, cr: st.revisionCR };
        if (id === 'action') extra = { ...(extra || {}), scenes: (P.stages.direction.data && P.stages.direction.data.needs_action) || [] };
        const r = await runStage(id, extra);
        if (r.ok) { st.revisionNote = null; st.revisionCR = null; }
        if (r.error || r.cancelled) break;
        if (r.revise) { pending = { id, extra: { revise: r.revise, cr: r.cr } }; continue; }
        pending = null;
        if (needsReview(id)) { gate(id); break; }
        if (P.settings.stopAfter === id) {
          chat(COORD, `We've reached the stop you set (after ${S.title}). Press ▶ Continue when you want the crew to keep going.`);
          W.say(COORD, 'Stop point reached! 🛑', { ms: 3000 });
          P.settings.stopAfter = null;
          break;
        }
      }
    } finally {
      running = false;
      pauseReq = false;
      Store.saveProject(P, []);
      emit('change');
    }
  }
  function gate(id) {
    P.stages[id].status = 'review';
    P.review = id;
    const S = STAGE[id];
    W.event('cabin');
    W.say(COORD, `Boss, ${S.title} is ready for your eyes! 👀`, { ms: 4000 });
    chat(COORD, `${S.icon} ${S.title} v${P.stages[id].version} is ready for your review. Approve it, ask for changes, or have it redone.`, { review: id });
    emit('review', id);
  }
  function approve() {
    const id = P.review;
    if (!id) return;
    P.stages[id].status = 'done';
    P.review = null;
    chat('user', `✅ Approved ${STAGE[id].title}.`);
    W.say(COORD, 'Approved! Rolling on… 🎬', { ms: 2000 });
    emit('review', null);
    if (id === 'wrap') { finish(); return; }
    run();
  }
  function requestChanges(text) {
    const id = P.review;
    if (!id) return;
    const cr = newCR(id, text);
    P.stages[id].status = 'waiting';
    P.stages[id].revisionNote = text;
    P.stages[id].revisionCR = cr.id;
    P.review = null;
    chat('user', `✏️ Changes for ${STAGE[id].title}: ${text}`);
    chat(COORD, `Got it. ${cr.id} logged; sending it back to ${ROBOTS[STAGE[id].robot].name}.`);
    emit('review', null);
    run();
  }
  function redo(id) {
    if (running) { chat(COORD, 'Let me pause the line first; press redo again in a moment.'); pause(); return; }
    P.stages[id].status = 'waiting';
    P.stages[id].revisionNote = null;
    if (P.review === id) { P.review = null; emit('review', null); }
    chat(COORD, `Redoing ${STAGE[id].title} from scratch.`);
    run();
  }
  function retry() { run(); }
  function pause() {
    if (!running) return;
    pauseReq = true;
    chat(COORD, 'Pausing after the current robot finishes. ⏸');
    emit('change');
  }
  function stop() { pauseReq = true; if (ctl) ctl.abort(); }
  function finish() {
    if (P.stages.wrap.status === 'review') return;
    const pr = Store.progressOf(P);
    chat(COORD, `🎉 That's a wrap! ${pr.done}/${pr.total} stages done. Export the master production document from 📦 Export, or keep giving notes and I'll send changes through the crew.`);
    W.say(COORD, "That's a wrap! 🎉", { ms: 4000 });
    const crew = new Set(STAGES.filter((x) => P.stages[x.id].status === 'done').map((x) => x.robot));
    for (const r of crew) {
      W.setState(r, 'happy');
      setTimeout(() => { if (W.robot(r).state === 'happy') W.setState(r, 'idle'); }, 3500);
    }
    emit('wrap');
  }

  function newCR(stageId, text) {
    const cr = { id: 'CR-' + String(P.crs.length + 1).padStart(3, '0'), stage: stageId, text, ts: Date.now(), impact: downstreamOf(stageId).filter((x) => P.stages[x].status === 'done') };
    P.crs.push(cr);
    return cr;
  }
  // a change to finished work: the owner revises, everything built on it becomes stale
  function applyChange(stageId, text) {
    if (!STAGE[stageId]) stageId = 'story';
    const st = P.stages[stageId];
    if (st.status !== 'done' && st.status !== 'review') {
      P.notes.push({ id: uid('n'), target: stageId, text, ts: Date.now() });
      return { queued: true };
    }
    const cr = newCR(stageId, text);
    st.status = 'stale';
    st.revisionNote = text;
    st.revisionCR = cr.id;
    for (const d of cr.impact) {
      if (P.stages[d].status !== 'done') continue;
      P.stages[d].status = 'stale';
      P.stages[d].revisionNote = `Upstream change ${cr.id} in ${STAGE[stageId].title}: "${text}". Update your document so it matches the new upstream versions; keep what still holds.`;
      P.stages[d].revisionCR = cr.id;
    }
    if (P.review) { P.stages[P.review].status = 'stale'; P.review = null; emit('review', null); }
    return { cr };
  }

  // ----- the coordinator chat -----
  let chatBusy = false;
  async function coordinatorMessage(text, images) {
    chat('user', text);
    W.setState(COORD, 'listen');
    W.say(COORD, 'Hmm, let me think… 🤔', { kind: 'thought' });
    if (!(await getSample())) {
      P.notes.push({ id: uid('n'), target: 'all', text, ts: Date.now() });
      W.clearBubble(COORD);
      chat(COORD, 'Noted! I\'ll pass that to the whole crew. (I can\'t think out loud in this view, so I saved it as a note for everyone.)');
      return;
    }
    if (chatBusy) { P.notes.push({ id: uid('n'), target: 'all', text, ts: Date.now() }); chat(COORD, 'Noted for the whole crew! 📝'); return; }
    chatBusy = true;
    const status = STAGE_ORDER.map((id) => `${id}: ${enabled(id) ? P.stages[id].status : 'not in crew'}${P.stages[id].version ? ' v' + P.stages[id].version : ''}`).join(', ');
    const summaries = STAGE_ORDER.filter((id) => P.stages[id].md).map((id) => `[${id}] ${truncate(stripJsonBlock(P.stages[id].md).replace(/\s+/g, ' '), 500)}`).join('\n');
    const recent = P.chat.filter((m) => !m.team).slice(-10).map((m) => `${m.from === 'user' ? 'Client' : ROBOTS[m.from] ? ROBOTS[m.from].name : m.from}: ${String(m.text).slice(0, 400)}`).join('\n');
    const input = `You are Captain Clipboard, the coordinator robot (production-manager skill) of Robo Film Studio, a crew of AI film-department robots. The client talks only to you. Personality: cheerful, a bit funny, robot-flavoured, and brief (1-3 sentences unless they asked a question that needs more).

Ownership (who changes what): story → story; dialogue/scenes → screenplay; character looks → characters; locations/props → world; palette/look → style; blocking/shots → direction; fights → action; animation acting → animation; lenses/light → camera; continuity → continuity; shot records → master; storyboard → storyboard; timing/cut → edit; voices → voice; music → music; sound → sound; effects → vfx; image prompts → images; video prompts → video; QC → qc.

Project: "${P.title}". Settings: ${P.settings.runtime}s, ${P.settings.aspect}, ${P.settings.medium}, ${P.settings.genre}. Run mode: ${P.settings.mode}. Line is ${running ? 'RUNNING (current stage: ' + (currentStage || '?') + ')' : 'PAUSED/IDLE'}. ${P.review ? 'Waiting for the client to review: ' + P.review + '.' : ''}
Stage status: ${status}
Finished work (excerpts):
${summaries || '(nothing yet)'}
Recent chat:
${recent || '(none)'}

Client's new message: """${text}"""${images && images.length ? `\n(${images.length} image(s) attached; describe what you see briefly if relevant.)` : ''}

Decide what to do. Reply with only JSON:
{"reply": "what you say to the client", "actions": [ ... ]}
Action objects (use zero or more):
- {"type": "note", "stage": "all" | "<stage id not yet done>", "text": "direction for upcoming work"}
- {"type": "change", "stage": "<stage id that is done, the owner of the decision>", "text": "exactly what to change"}
- {"type": "approve"} (client approves the stage under review)
- {"type": "revise_review", "text": "changes for the stage under review"}
- {"type": "pause"} | {"type": "resume"}
- {"type": "skip", "stage": "<stage id>"} | {"type": "redo", "stage": "<stage id>"}
- {"type": "mode", "value": "gates" | "every" | "auto"}
- {"type": "stop_after", "stage": "<stage id>" | null}
Questions and chit-chat need no action. Stage ids: ${STAGE_ORDER.join(', ')}.`;
    try {
      const out = await sample.json(input, { modelTier: 'quick', cache: false, ...(images && images.length ? { images } : {}) });
      W.clearBubble(COORD);
      W.setState(COORD, 'talk');
      const reply = String(out && out.reply || 'Beep! Noted.');
      chat(COORD, reply);
      W.say(COORD, reply, { ms: 3500, lines: 4 });
      setTimeout(() => W.setState(COORD, 'idle'), 1800);
      applyActions(Array.isArray(out && out.actions) ? out.actions : []);
    } catch (e) {
      W.clearBubble(COORD);
      W.setState(COORD, 'idle');
      P.notes.push({ id: uid('n'), target: 'all', text, ts: Date.now() });
      chat(COORD, `My chat circuits glitched (${errCopy(e)}) — but I saved your message as a note for the whole crew.`);
      emit('change');
    } finally { chatBusy = false; }
  }
  function applyActions(actions) {
    let resume = false;
    for (const a of actions) {
      const stg = a.stage && STAGE[a.stage] ? a.stage : null;
      switch (a.type) {
        case 'note': P.notes.push({ id: uid('n'), target: stg || 'all', text: String(a.text || '').slice(0, 1000), ts: Date.now() }); chat(COORD, `📝 Note added for ${stg ? STAGE[stg].title : 'the whole crew'}.`, { team: true }); break;
        case 'change': {
          const r = applyChange(stg || 'story', String(a.text || ''));
          if (r.cr) { chat(COORD, `🔁 ${r.cr.id}: ${STAGE[r.cr.stage].title} will be revised; ${r.cr.impact.length} later stage(s) marked stale and will be refreshed.`, { team: true }); resume = true; }
          else chat(COORD, `📝 That stage hasn't run yet, so I added it as a note for ${STAGE[stg || 'story'].title}.`, { team: true });
          break;
        }
        case 'approve': if (P.review) { approve(); } break;
        case 'revise_review': if (P.review) requestChanges(String(a.text || '')); break;
        case 'pause': pause(); break;
        case 'resume': resume = true; break;
        case 'skip': if (stg && !['brief', 'wrap'].includes(stg)) { P.settings.crew[stg] = false; chat(COORD, `⏭ ${STAGE[stg].title} is off the schedule.`, { team: true }); } break;
        case 'redo': if (stg) { P.stages[stg].status = 'waiting'; resume = true; } break;
        case 'mode': if (MODES[a.value]) { P.settings.mode = a.value; chat(COORD, `Run mode is now ${MODES[a.value].label}.`, { team: true }); } break;
        case 'stop_after': P.settings.stopAfter = stg; chat(COORD, stg ? `🛑 I'll stop after ${STAGE[stg].title}.` : 'No stop point; running to the end.', { team: true }); break;
        default:
      }
    }
    emit('change');
    if (resume && !running && !P.review) run();
  }

  // ----- QC follow-up: send findings back to their owners -----
  function sendQcFixes() {
    const items = ((P.stages.qc.data && P.stages.qc.data.items) || []).filter((x) => /FIX|REDO/i.test(x.verdict || ''));
    const byStage = {};
    for (const it of items) {
      const sid = STAGE[it.owner_stage] ? it.owner_stage : null;
      if (!sid) continue;
      (byStage[sid] = byStage[sid] || []).push(`${it.id}: ${it.repair || it.check}`);
    }
    const ids = Object.keys(byStage);
    if (!ids.length) { chat(COORD, 'QC found nothing I can route to a department. 🎉'); return; }
    for (const sid of ids) applyChange(sid, 'QC repair instructions: ' + byStage[sid].join('; '));
    chat(COORD, `🔧 Sent ${items.length} QC finding(s) to ${ids.map((x) => ROBOTS[STAGE[x].robot].name).join(', ')}. Everything built on their work will be refreshed.`);
    emit('change');
    run();
  }

  // ----- Claude-made pictures and video: scene specs rendered with three.js -----
  function previzContext() {
    const pal = ((P.stages.style.data && P.stages.style.data.palette) || []).map((x) => `${x.name} ${x.hex} (${x.role})`).join('; ');
    const chars = ((P.stages.characters.data && P.stages.characters.data.characters) || []).map((c) => `${c.id} ${c.name}: ${truncate(c.short_lock || c.identity_lock || '', 160)}; colors ${(c.colors || []).join(', ')}`).join('\n');
    const locs = ((P.stages.world.data && P.stages.world.data.locations) || []).map((l) => `${l.id} ${l.name}: ${truncate(l.short_lock || l.lock || '', 160)}; palette ${(l.palette || []).join(', ')}`).join('\n');
    return `Film: "${P.title}" · ${P.settings.medium} · ${P.settings.genre} · ${P.settings.aspect}\nStyle: ${truncate((P.stages.style.data && P.stages.style.data.style_lock) || '', 300)}\nPalette: ${pal || 'choose one that fits'}\nCharacters:\n${chars || '(from the shots)'}\nLocations:\n${locs || '(from the shots)'}`;
  }
  function parseSpecs(text) {
    const d = extractJsonBlock(text) || (() => { const a2 = text.indexOf('{'), b2 = text.lastIndexOf('}'); try { return JSON.parse(text.slice(a2, b2 + 1)); } catch (e) { return null; } })();
    return d && Array.isArray(d.shots) ? d.shots : [];
  }
  async function runRender(live) {
    const shots = ((P.stages.master.data && P.stages.master.data.shots) || (P.stages.direction.data && P.stages.direction.data.shots) || []).slice(0, 40);
    if (!shots.length) return { md: 'No shots to build yet.', data: { shots: [] } };
    let md = '# Previz scene code — built by Greenscreen Gary\n\nEach shot below is a scene spec that Robo Film Studio renders in 3D (see the Screening room).\n';
    const specs = [];
    for (let k = 0; k < shots.length; k += 5) {
      const group = shots.slice(k, k + 5);
      W.say('vfx-supervisor', `Building shots ${k + 1}-${k + group.length} of ${shots.length}…`, { kind: 'thought' });
      const prompt = `You are ${ROBOTS['vfx-supervisor'].name}, the VFX supervisor robot (vfx-supervisor skill) in Robo Film Studio. You build the 3D previz: for each shot below, write one scene spec that a three.js renderer turns into a short animated clip. Match the shot's framing, camera height and movement, the characters' positions and action, the location and the light. Use the palette and the characters' colors so every shot of a character looks the same.

${Previz.schema}

${previzContext()}

Shots:
${group.map((x) => `- ${x.id}: ${x.size || ''} ${x.angle || ''} ${x.move || ''}; ${x.duration_s || 4} s; action: ${truncate(x.action || x.motion || '', 300)}; start: ${truncate(x.start_frame || '', 350)}; dialogue: ${x.dialogue || 'none'}`).join('\n')}

Reply with only JSON: {"shots": [one spec per shot, same order]}.`;
      const head = md + `\n## Shots ${k + 1}-${k + group.length}\n\n`;
      const res = await callClaude(prompt, {}, (t) => live(head + '```json\n' + t + '\n```'));
      const got = parseSpecs(res.text);
      got.forEach((g, i) => { if (!g.shot && group[i]) g.shot = group[i].id; });
      specs.push(...got);
      md = head + got.map((g) => `- **${g.shot}** · ${g.duration_s || '?'} s · ${(g.characters || []).length} character(s), ${(g.objects || []).length} object(s)${g.caption ? ` · “${g.caption}”` : ''}`).join('\n') + '\n';
      emit('stream', 'render');
    }
    md += '\n```json\n' + JSON.stringify({ shots: specs }) + '\n```\n';
    return { md, data: { shots: specs } };
  }
  async function rerenderShot(shotId, note) {
    if (!(await getSample())) throw { code: 'no_brain' };
    const st = P.stages.render;
    const shots = (P.stages.master.data && P.stages.master.data.shots) || (P.stages.direction.data && P.stages.direction.data.shots) || [];
    const x = shots.find((y) => y.id === shotId) || { id: shotId };
    const prev = ((st.data && st.data.shots) || []).find((y) => y.shot === shotId);
    W.setState('vfx-supervisor', 'think');
    try {
      const spec = await Brain.json(`You are the VFX supervisor robot. Rewrite the 3D previz scene spec for shot ${shotId}.\n\n${Previz.schema}\n\n${previzContext()}\n\nShot: ${x.size || ''} ${x.angle || ''} ${x.move || ''}; ${x.duration_s || 4} s; action: ${x.action || x.motion || ''}; dialogue: ${x.dialogue || 'none'}\n${prev ? 'Previous spec: ' + JSON.stringify(prev) : ''}\n${note ? 'Change requested: ' + note : ''}\n\nReply with only the JSON spec object.`, { modelTier: P.settings.tier, cache: false });
      spec.shot = shotId;
      st.data = st.data || { shots: [] };
      const i = st.data.shots.findIndex((y) => y.shot === shotId);
      if (i >= 0) st.data.shots[i] = spec; else st.data.shots.push(spec);
      Store.saveProject(P, ['render']);
      return spec;
    } finally { W.setState('vfx-supervisor', 'idle'); }
  }
  async function codeImage(promptText, aspect) {
    if (!(await getSample())) throw { code: 'no_brain' };
    W.setState('image-prompt-engineer', 'draw');
    try {
      const spec = await Brain.json(`You are Pixel Prompt, the image prompt engineer robot. Turn this image prompt into one 3D scene spec that a three.js renderer draws as a still picture (it is shown at its first moment, so put everything in its starting place).\n\n${Previz.schema}\n\n${previzContext()}\n\nImage prompt: ${promptText}\n\nReply with only the JSON spec object.`, { modelTier: P.settings.tier, cache: false });
      const blob = await Previz.still(spec, aspect, 0);
      return { spec, blob, url: URL.createObjectURL(blob) };
    } finally { W.setState('image-prompt-engineer', 'idle'); }
  }

  return {
    on, emit, getSample, newProject, project, setProject, run, pause, stop, approve, requestChanges, redo, retry,
    coordinatorMessage, applyChange, sendQcFixes, redoSketches, rerenderShot, codeImage, enabled, downstreamOf,
    isRunning: () => running, current: () => currentStage, buildPrompt, chat, errCopy,
  };
})();
