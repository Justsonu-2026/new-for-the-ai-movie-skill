// ---------- skill text bundled at build time ----------
const SKILLDATA = JSON.parse(document.getElementById('skillData').textContent);

// ---------- the crew: one robot per skill ----------
const ROBOTS = {
  'production-manager': { name: 'Captain Clipboard', job: 'Coordinator · production manager', color: '#f6b73c', accent: '#e8590c', emoji: '📋', acc: 'headset', fx: ['📋', '✅', '📈'] },
  'story-writer': { name: 'Quill-E', job: 'Story writer', color: '#9b7bf2', accent: '#5f3dc4', emoji: '🪶', acc: 'quill', fx: ['💡', '📖', '✨'] },
  'screenwriter': { name: 'Typo', job: 'Screenwriter', color: '#38c3b4', accent: '#0b7285', emoji: '📝', acc: 'script', fx: ['💬', '📝', '⌨️'] },
  'character-designer': { name: 'Sketchy', job: 'Character designer', color: '#f783ac', accent: '#c2255c', emoji: '✏️', acc: 'sketchbook', fx: ['✏️', '👤', '💖'] },
  'production-designer': { name: 'Blueprint Bob', job: 'Production designer', color: '#ff922b', accent: '#d9480f', emoji: '📐', acc: 'hardhat', fx: ['📐', '🏠', '🧱'] },
  'visual-style-designer': { name: 'Palette Pal', job: 'Visual style designer', color: '#74c0fc', accent: '#1971c2', emoji: '🎨', acc: 'palette', fx: ['🎨', '🌈', '🖌️'] },
  'film-director': { name: 'Direktor 3000', job: 'Film director', color: '#ff6b6b', accent: '#c92a2a', emoji: '📣', acc: 'megaphone', fx: ['🎬', '📣', '⭐'] },
  'action-director': { name: 'Kaboom', job: 'Action director', color: '#fa5252', accent: '#862e9c', emoji: '🥊', acc: 'gloves', fx: ['💥', '🥊', '⚡'] },
  'animation-director': { name: 'Flipbook', job: 'Animation director', color: '#8ce99a', accent: '#2b8a3e', emoji: '🎞️', acc: 'flipbook', fx: ['🟠', '〰️', '✨'] },
  'cinematographer': { name: 'Lens Lenny', job: 'Cinematographer', color: '#4c6ef5', accent: '#1c2a6b', emoji: '🎥', acc: 'camera', fx: ['💡', '🎥', '🔆'] },
  'script-supervisor': { name: 'Continuity Kit', job: 'Script supervisor', color: '#66d9e8', accent: '#0c8599', emoji: '⏱️', acc: 'stopwatch', fx: ['⏱️', '🔍', '📌'] },
  'storyboard-artist': { name: 'Panel Pete', job: 'Storyboard artist', color: '#c0eb75', accent: '#5c940d', emoji: '🖼️', acc: 'board', fx: ['🖼️', '✏️', '➡️'] },
  'image-prompt-engineer': { name: 'Pixel Prompt', job: 'Image prompt engineer', color: '#e599f7', accent: '#9c36b5', emoji: '🪄', acc: 'wand', fx: ['🪄', '🖼️', '✨'] },
  'video-prompt-engineer': { name: 'Motion Max', job: 'Video prompt engineer', color: '#b197fc', accent: '#5f3dc4', emoji: '▶️', acc: 'filmstrip', fx: ['▶️', '🎞️', '⏩'] },
  'voice-director': { name: 'Mic Drop', job: 'Voice director', color: '#ffa8a8', accent: '#e03131', emoji: '🎙️', acc: 'mic', fx: ['🎙️', '🗣️', '💬'] },
  'music-director': { name: 'Maestro Beep', job: 'Music director', color: '#748ffc', accent: '#364fc7', emoji: '🎼', acc: 'baton', fx: ['🎵', '🎶', '🎼'] },
  'sound-designer': { name: 'Foley Fuzz', job: 'Sound designer', color: '#ffd43b', accent: '#e67700', emoji: '🎧', acc: 'headphones', fx: ['🔊', '🥥', '〰️'] },
  'vfx-supervisor': { name: 'Greenscreen Gary', job: 'VFX supervisor', color: '#51cf66', accent: '#087f5b', emoji: '✨', acc: 'goggles', fx: ['✨', '💫', '🌀'] },
  'film-editor': { name: 'Snip', job: 'Film editor', color: '#adb5bd', accent: '#495057', emoji: '✂️', acc: 'scissors', fx: ['✂️', '🎞️', '⏱️'] },
  'quality-control': { name: 'Inspector Bolt', job: 'Quality control', color: '#20c997', accent: '#087f5b', emoji: '🔍', acc: 'detective', fx: ['🔍', '✅', '❗'] },
};
const COORD = 'production-manager';

// ---------- the studio floor: 3x3 rooms, the production office in the middle ----------
const ROOMS = [
  { id: 'writers', label: "Writers' Room", emoji: '✍️', cell: [0, 0], floor: 'f-violet', workers: ['story-writer', 'screenwriter'], decor: ['shelf', 'plant', 'papers'] },
  { id: 'design', label: 'Design Lab', emoji: '🎨', cell: [1, 0], floor: 'f-pink', workers: ['character-designer', 'production-designer', 'visual-style-designer'], decor: ['mannequin', 'swatches'] },
  { id: 'direction', label: "Director's Stage", emoji: '🎬', cell: [2, 0], floor: 'f-red', workers: ['film-director', 'action-director', 'animation-director'], decor: ['chair', 'spot'] },
  { id: 'dock', label: 'Loading Dock & Oil Bar', emoji: '📦', cell: [0, 1], floor: 'f-sand', workers: [], decor: ['crates', 'oilbar', 'plant'] },
  { id: 'office', label: 'Production Office', emoji: '📋', cell: [1, 1], floor: 'f-gold', workers: ['production-manager'], decor: ['board', 'plant', 'table'] },
  { id: 'camera', label: 'Camera Dept', emoji: '🎥', cell: [2, 1], floor: 'f-blue', workers: ['cinematographer', 'script-supervisor'], decor: ['tripod', 'lightstand'] },
  { id: 'post', label: 'Post House', emoji: '✂️', cell: [0, 2], floor: 'f-slate', workers: ['vfx-supervisor', 'film-editor', 'quality-control'], decor: ['monitor', 'reels'] },
  { id: 'sound', label: 'Sound Stage', emoji: '🎧', cell: [1, 2], floor: 'f-amber', workers: ['voice-director', 'music-director', 'sound-designer'], decor: ['console', 'speaker'] },
  { id: 'prompts', label: 'Art & Prompt Studio', emoji: '🪄', cell: [2, 2], floor: 'f-lime', workers: ['storyboard-artist', 'image-prompt-engineer', 'video-prompt-engineer'], decor: ['monitor', 'easel'] },
];
const ROOM_OF = {};
for (const r of ROOMS) for (const w of r.workers) ROOM_OF[w] = r.id;

// ---------- the pipeline: production-manager's stage order ----------
// needs: upstream stages whose documents go into the prompt. gate: paused for review in "key gates" mode.
const STAGES = [
  { id: 'brief', robot: 'production-manager', title: 'Project brief', icon: '📋', needs: [], gate: false, files: ['templates/brief.md'], shared: [] },
  { id: 'story', robot: 'story-writer', title: 'Story', icon: '📖', needs: ['brief'], gate: true, files: ['references/story-craft.md', 'templates/concepts-template.md', 'templates/story-template.md'], shared: [] },
  { id: 'screenplay', robot: 'screenwriter', title: 'Screenplay', icon: '📝', needs: ['brief', 'story'], gate: true, files: ['references/screenplay-format.md', 'templates/scene-index-template.md'], shared: ['production-schema.md'] },
  { id: 'characters', robot: 'character-designer', title: 'Characters', icon: '👤', needs: ['brief', 'story', 'screenplay'], gate: false, files: ['references/identity-locks.md', 'templates/character-template.md'], shared: ['production-schema.md'], sketch: 'characters' },
  { id: 'world', robot: 'production-designer', title: 'Locations & props', icon: '🏠', needs: ['brief', 'story', 'screenplay'], gate: false, files: ['references/environment-design.md', 'templates/location-template.md', 'templates/props-template.md'], shared: ['production-schema.md'], sketch: 'locations' },
  { id: 'style', robot: 'visual-style-designer', title: 'Visual style', icon: '🎨', needs: ['brief', 'story', 'screenplay', 'characters', 'world'], gate: true, files: ['references/color-and-look.md', 'templates/style-bible-template.md'], shared: ['production-schema.md'] },
  { id: 'direction', robot: 'film-director', title: 'Direction & shot list', icon: '🎬', needs: ['brief', 'screenplay', 'characters', 'world', 'style'], gate: false, files: ['references/genre-playbooks.md', 'references/shot-grammar.md', 'templates/scene-direction-template.md'], shared: [] },
  { id: 'action', robot: 'action-director', title: 'Action & stunts', icon: '🥊', needs: ['brief', 'screenplay', 'direction', 'world'], gate: false, files: ['references/fight-choreography.md', 'templates/action-plan-template.md'], shared: [], optional: 'action' },
  { id: 'animation', robot: 'animation-director', title: 'Animation acting', icon: '🎞️', needs: ['brief', 'direction', 'characters', 'style'], gate: false, files: ['references/principles-and-timing.md', 'templates/animation-plan-template.md'], shared: [], optional: 'animation' },
  { id: 'camera', robot: 'cinematographer', title: 'Camera & lighting', icon: '🎥', needs: ['brief', 'direction', 'action', 'animation', 'world', 'style'], gate: false, files: ['references/lighting.md', 'templates/camera-template.md'], shared: [] },
  { id: 'continuity', robot: 'script-supervisor', title: 'Continuity', icon: '⏱️', needs: ['screenplay', 'direction', 'action', 'characters', 'world', 'camera'], gate: false, files: ['references/continuity-checklist.md', 'templates/continuity-template.md'], shared: ['production-schema.md'] },
  { id: 'master', robot: 'production-manager', title: 'Shot records & master', icon: '📚', needs: ['brief', 'screenplay', 'characters', 'world', 'style', 'direction', 'action', 'animation', 'camera', 'continuity'], gate: true, files: ['references/compiling-shot-records.md'], shared: ['production-schema.md'] },
  { id: 'storyboard', robot: 'storyboard-artist', title: 'Storyboard', icon: '🖼️', needs: ['master', 'style'], gate: false, files: ['references/storyboard-conventions.md', 'templates/storyboard-template.md'], shared: [], sketch: 'panels' },
  { id: 'edit', robot: 'film-editor', title: 'Paper edit', icon: '✂️', needs: ['brief', 'screenplay', 'master', 'storyboard'], gate: false, files: ['references/editing-craft.md', 'templates/edit-plan-template.md'], shared: [] },
  { id: 'voice', robot: 'voice-director', title: 'Voices', icon: '🎙️', needs: ['brief', 'screenplay', 'characters', 'master'], gate: false, files: ['references/voice-performance.md', 'templates/voice-template.md'], shared: [] },
  { id: 'music', robot: 'music-director', title: 'Music', icon: '🎼', needs: ['brief', 'story', 'style', 'master', 'edit'], gate: false, files: ['references/scoring-and-spotting.md', 'templates/music-template.md'], shared: [] },
  { id: 'sound', robot: 'sound-designer', title: 'Sound design', icon: '🔊', needs: ['brief', 'world', 'master', 'edit'], gate: false, files: ['references/sound-design-craft.md', 'templates/sfx-template.md'], shared: [] },
  { id: 'vfx', robot: 'vfx-supervisor', title: 'VFX plan', icon: '✨', needs: ['brief', 'style', 'master'], gate: false, files: ['references/vfx-methods.md', 'templates/vfx-template.md'], shared: [] },
  { id: 'images', robot: 'image-prompt-engineer', title: 'Image prompts', icon: '🪄', needs: ['brief', 'characters', 'world', 'style', 'master'], gate: false, files: ['references/image-prompting.md', 'templates/images-template.md'], shared: ['ai-model-adapters.md'] },
  { id: 'video', robot: 'video-prompt-engineer', title: 'Video prompts', icon: '▶️', needs: ['brief', 'master', 'images', 'voice', 'sound'], gate: false, files: ['references/video-prompting.md', 'templates/video-template.md'], shared: ['ai-model-adapters.md'] },
  { id: 'render', robot: 'vfx-supervisor', title: 'Previz video (code)', icon: '📽️', needs: ['brief', 'characters', 'world', 'style', 'master'], gate: false, files: [], shared: [] },
  { id: 'qc', robot: 'quality-control', title: 'QC preflight', icon: '🔍', needs: ['brief', 'screenplay', 'characters', 'style', 'master', 'images', 'video'], gate: false, files: ['references/qc-rubrics.md', 'templates/qc-report-template.md'], shared: ['ai-model-adapters.md'] },
  { id: 'wrap', robot: 'production-manager', title: 'Wrap & master document', icon: '🏁', needs: ['brief', 'qc'], gate: true, files: ['templates/master-production-document.md'], shared: [] },
];
const STAGE = Object.fromEntries(STAGES.map((s) => [s.id, s]));
const STAGE_ORDER = STAGES.map((s) => s.id);

// ---------- setup choices ----------
const OPTIONS = {
  runtime: [[15, '15 s · teaser'], [30, '30 s · ad / reel'], [60, '60 s · short'], [90, '90 s'], [180, '3 min'], [300, '5 min']],
  aspect: ['16:9', '9:16', '1:1', '2.39:1', '4:5'],
  medium: ['photoreal live action', 'stylized 3D animation', '2D cel animation', 'anime', 'stop-motion / claymation', 'pixel art', 'watercolor illustration'],
  genre: ['drama', 'comedy', 'horror', 'romance', 'thriller', 'action', 'sci-fi', 'fantasy', 'mystery', 'music video', 'commercial / ad', 'documentary style'],
  imageModel: ['Nano Banana / Gemini image', 'GPT Image', 'Midjourney', 'Flux', 'Seedream', 'Higgsfield Soul', 'Imagen', 'not decided'],
  videoModel: ['Veo 3.1', 'Kling', 'Seedance', 'Runway', 'Sora', 'Hailuo / MiniMax', 'Higgsfield', 'not decided'],
  language: ['English', 'Hindi', 'Hinglish', 'Spanish', 'French', 'Japanese', 'no dialogue'],
};
const PRESETS = {
  full: { label: '🌟 Full crew', hint: 'All 20 robots. Specialists join only when the film needs them.', stages: STAGE_ORDER },
  lean: { label: '⚡ Lean & fast', hint: 'Story to prompts with the core team.', stages: ['brief', 'story', 'screenplay', 'characters', 'world', 'style', 'direction', 'camera', 'master', 'storyboard', 'images', 'video', 'qc', 'wrap'] },
  story: { label: '📖 Story only', hint: 'Brief, story and screenplay.', stages: ['brief', 'story', 'screenplay', 'wrap'] },
  design: { label: '🎨 Look & design', hint: 'Story plus characters, world and style bibles.', stages: ['brief', 'story', 'screenplay', 'characters', 'world', 'style', 'wrap'] },
  previz: { label: '🖼️ Previz', hint: 'Through direction, camera, shot records and storyboard.', stages: ['brief', 'story', 'screenplay', 'characters', 'world', 'style', 'direction', 'action', 'animation', 'camera', 'continuity', 'master', 'storyboard', 'edit', 'wrap'] },
};
const MODES = {
  gates: { label: '🚦 Key gates', hint: 'Runs on its own, stops for you at Story, Screenplay, Style, Master and Wrap.' },
  every: { label: '🔍 Every step', hint: 'Stops after every robot so you can check each one.' },
  auto: { label: '🚀 Fully auto', hint: 'Never stops. Comment any time and the coordinator folds it in.' },
  custom: { label: '🛠 Custom', hint: 'You tick exactly which stages stop for review.' },
};
const IMAGE_MODES = {
  prompts: { label: '📝 Prompts only', hint: 'Robots write ready-to-paste prompts for your image and video tools. Nothing extra is spent.' },
  sketch: { label: '🎨 Claude makes pictures & video', hint: 'Claude draws concept sketches and storyboard panels, then builds a 3D previz video of every shot with code. Uses more Claude usage.' },
};
const TIERS = { quick: '⚡ Fast', default: '⚖️ Balanced', complex: '🧠 Best' };
const DEPTHS = {
  short: { label: 'Short', hint: 'Tight documents, fastest.', words: 'Keep the document tight: about 350-700 words before the JSON block. Cover every required section briefly; use tables and lists.' },
  standard: { label: 'Standard', hint: 'Balanced detail.', words: 'Aim for about 800-1600 words before the JSON block. Cover every required section.' },
  detailed: { label: 'Detailed', hint: 'Full production depth, slower.', words: 'Write at full production depth as the skill requires (up to about 3500 words before the JSON block).' },
};
const SPEEDS = { chill: 0.6, normal: 1, turbo: 2 };
const LENGTHS = [[30, '30 sec'], [60, '1 min'], [120, '2 min'], [300, '5 min']];
const LOOKS = [['photoreal live action', '🎥 Live action'], ['stylized 3D animation', '🧸 3D cartoon'], ['anime', '✏️ 2D anime'], ['stop-motion / claymation', '🧱 Claymation']];
const QUICK_MODES = [['auto', '🚀 Fully auto'], ['gates', '🚦 Check key steps'], ['every', '🔍 Check every step']];

const IDEA_DICE = [
  'A lonely lighthouse robot falls in love with a passing satellite.',
  'A grandmother secretly runs the best street-food stall in a cyberpunk Mumbai.',
  "A cat burglar's cat is the real burglar.",
  'Two rival ice-cream vans battle for the last summer day.',
  'A tiny frog runs a ferry across a puddle during a thunderstorm.',
  "A ghost tries to get a five-star review for the haunted house it runs as an Airbnb.",
  'An astronaut finds a sticky note on the Moon that says "back in 5 minutes".',
];

// ---------- coordinator banter (team chatter) ----------
const BANTER = {
  handoff: [
    'Bzzt! {name}, you\'re up: {task}.',
    '{name}! Fresh assignment, still warm from the printer: {task}.',
    'Okay {name}, the client is counting on you. {task}.',
    'Beep boop, {name}. {task}. No pressure. (Some pressure.)',
  ],
  ack: ['On it, Captain! 🫡', 'Spinning up my creativity gyros…', 'Hold my oil can.', 'Ooh, a good one. Let me think…', 'Calibrating genius sensors… done.'],
  done: ['Done! Fresh off the assembly line. ✨', 'Finished! I may have over-polished it.', 'All yours, Captain. 🎁', 'Ta-da! Handle with care, it\'s still warm.'],
  collect: ['Lovely work, {name}! Taking it to the office.', 'Got it, {name}. Filing it under "brilliant".', 'Thanks {name}! Back to HQ.'],
  idle: ['*sips oil*', '*hums the Jaws theme*', '*polishes antenna*', 'Is it lunch? I run on electricity.', '*reorganizes pixels*'],
  skip: {
    action: 'No fights or chases in this one, Kaboom. Take five. 🥊',
    animation: 'Live action this time, Flipbook. Your flipbook can rest. 📕',
  },
};

const TASK_LINES = {
  brief: 'write the project brief from the pitch',
  story: 'develop the story',
  screenplay: 'turn the story into a screenplay',
  characters: 'design the characters with identity locks',
  world: 'design the locations and props',
  style: 'set the visual style and palette',
  direction: 'direct every scene and make the shot list',
  action: 'choreograph the action',
  animation: 'plan the animation acting',
  camera: 'plan lenses, camera moves and lighting',
  continuity: 'run the continuity pass',
  master: 'compile the shot records',
  storyboard: 'draw the storyboard',
  edit: 'make the paper edit',
  voice: 'direct the voices',
  music: 'spot and plan the music',
  sound: 'design the sound',
  vfx: 'plan the VFX',
  images: 'write the image prompts',
  video: 'write the video prompts',
  qc: 'run an independent QC preflight',
  render: 'build the 3D previz video with code',
  wrap: 'wrap and assemble the master document',
};
