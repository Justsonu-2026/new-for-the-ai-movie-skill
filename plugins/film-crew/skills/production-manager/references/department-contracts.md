# Department Contracts

What each department needs, produces, and must satisfy before handoff. Use this to route work, to check a
returned deliverable, and to perform a step yourself when that department's skill is not installed.

## Contents
- Story and script: story-writer, screenwriter
- Design: character-designer, production-designer, visual-style-designer
- Direction: film-director, action-director, animation-director
- Camera and continuity: cinematographer, script-supervisor
- Visualization: storyboard-artist, image-prompt-engineer, video-prompt-engineer
- Sound: voice-director, music-director, sound-designer
- Post: vfx-supervisor, film-editor, quality-control

## story-writer
- **Needs:** idea or premise; brief (runtime, audience, genre, tone, medium).
- **Produces:** `01_story/concepts.md` (2-5 distinct concepts when the idea is open), `01_story/story.md`
  (logline, premise, theme, characters with want/need/flaw/arc, beat outline with turning points, ending).
- **Done when:** one concept chosen; every beat causes the next; protagonist makes the decisive choice;
  ending pays off the setup; runtime fits the beat count.

## screenwriter
- **Needs:** approved `story.md` (or a user's existing story/script to refine); brief.
- **Produces:** `02_screenplay/screenplay.fountain` (pure Fountain, title page first),
  `02_screenplay/scene_index.md` carrying the artifact header `id: screenplay` (one version for both
  files) and one `record: scene` per scene (purpose, value change, duration, scene card).
- **Done when:** every scene turns a value; every line is speakable and fits the shot time; nothing in the
  action lines is unfilmable (thoughts, backstory) unless shown; changes from the source story are listed
  with reasons.

## character-designer
- **Needs:** approved screenplay (or story), style bible if available.
- **Produces:** `03_characters/CH-<SLUG>.md` with `record: character` and `record: costume` blocks,
  turnaround and expression sheet specs, identity locks, reference-image checklist.
- **Done when:** every speaking/recurring character has a record; each costume look used in the script has
  a costume record and the scenes it appears in; silhouettes distinguishable; locks 40-80 words.

## production-designer
- **Needs:** approved screenplay, style bible if available.
- **Produces:** `04_world/LOC-<SLUG>.md` (`record: location`, layout with landmarks and compass/screen
  references, light sources), `04_world/props.md` (`record: prop` with states).
- **Done when:** every scripted location and story-relevant prop has a record; every prop state change in
  the script is listed as a state; layouts allow the blocking the script needs.

## visual-style-designer
- **Needs:** brief, approved story/screenplay; optional reference images.
- **Produces:** `05_look/style_bible.md` (`record: style`, palette with hex, color script per scene,
  lighting and lens philosophy, texture, style lock, avoid list).
- **Done when:** a style lock of 30-70 words exists; each scene has a color script entry tied to its
  emotional beat; aspect ratio matches the brief.

## film-director
- **Needs:** locked screenplay, approved bibles and style bible.
- **Produces:** `06_direction/SC<NN>_direction.md` per scene: dramatic analysis, visual thesis, blocking
  (start positions, moves, end positions), performance notes, shot list (IDs, size, angle, movement intent,
  subject, action with end state, duration, purpose, transitions), coverage rationale.
- **Done when:** every beat is covered; every shot has a story function; screen direction plan stated;
  durations sum to the scene estimate.

## action-director
- **Needs:** the director's plan for an action scene; character bibles; location layout.
- **Produces:** `06_direction/SC<NN>_action.md`: geography, objectives, phrase-by-phrase choreography
  (attack, defence, reaction, consequence), beat-to-shot mapping, safety-free AI notes (what models fail at).
- **Done when:** every move has a clear cause and effect, screen direction is held, each phrase maps to
  shots, injuries/damage feed continuity.

## animation-director
- **Needs:** director's plan, character bibles (with proportions), style bible.
- **Produces:** `06_direction/SC<NN>_animation.md`: acting choices, key poses (extremes), timing per shot in
  frames, holds, anticipation/overshoot notes, lip-sync emphasis, model-sheet adherence notes.
- **Done when:** each shot has key poses and timing; poses read in silhouette; timing fits the shot duration.

## cinematographer
- **Needs:** director's shot list, location files, style bible.
- **Produces:** `07_camera/SC<NN>_camera.md`: per shot lens (mm), aperture/DOF, camera height and position,
  support, movement execution, focus plan; per scene lighting setup (key, fill, rim, practicals, color
  temperature, ratio) consistent with the color script.
- **Done when:** every shot has camera and lighting values; light direction is consistent within a scene
  unless motivated; nothing contradicts the director's size/angle.

## script-supervisor
- **Needs:** screenplay, bibles, direction and camera documents.
- **Produces:** `07_camera/continuity.md`: one `record: continuity` per scene (axis, screen direction,
  character and prop states, time, weather, carry-over), and a continuity report of violations.
- **Done when:** every state change has a cause in the script; every shot pair across a cut is checked.

## storyboard-artist
- **Needs:** compiled shot records (or direction + camera documents).
- **Produces:** `09_storyboard/storyboard.md` with `record: panel` blocks, sketch prompts, and
  `09_storyboard/storyboard.html` sheet (built by its script).
- **Done when:** every shot has at least one panel (two for moves or reveals: start and end); panels match
  shot size, angle and screen direction; no invented action.

## image-prompt-engineer
- **Needs:** bibles, style bible, compiled shot records, the user's image tool profile.
- **Produces:** `10_prompts/images.md` with `record: image_prompt` blocks in generation order (character
  sheets, costume sheets, location plates, prop sheets, then keyframes).
- **Done when:** every prompt pastes the relevant locks verbatim, names its reference images and their
  roles, and uses only features the tool supports.

## video-prompt-engineer
- **Needs:** compiled shot records, approved keyframes/references, the user's video tool profile.
- **Produces:** `10_prompts/video.md` with `record: video_prompt` blocks, one or more per shot, plus a retry
  ladder per risky shot.
- **Done when:** each prompt has one primary action, at most one camera move, an end state, model-correct
  syntax, clip length ≥ shot duration.

## voice-director
- **Needs:** screenplay, character bibles, shot records (for timing).
- **Produces:** `11_sound/voice.md`: voice profile per character, `record: voice_line` per line with delivery
  and timing, TTS-ready scripts for the user's tool.
- **Done when:** every line has a delivery note and fits its shot timing.

## music-director
- **Needs:** screenplay, style bible, edit plan or shot timings.
- **Produces:** `11_sound/music.md`: spotting notes, themes, `record: music_cue` per cue, song lyrics and
  structure when songs are required, generation prompts.
- **Done when:** every cue has a dramatic function, start/end and hit points.

## sound-designer
- **Needs:** shot records, location files.
- **Produces:** `11_sound/sfx.md`: ambience bed per scene, `record: sfx_cue` per sync sound, Foley list,
  mix intent.
- **Done when:** every on-screen sound-making action has a cue; every scene has an ambience bed.

## vfx-supervisor
- **Needs:** shot records, style bible, model profiles.
- **Produces:** `12_vfx/vfx_plan.md` with `record: vfx` per shot that needs work beyond direct generation.
- **Done when:** every text/screen/logo, compositing need and known model weakness has a method.

## film-editor
- **Needs:** shot records (paper edit) or generated takes (assembly).
- **Produces:** `13_edit/edit_plan.md`: sequence order, durations, cut points, transitions, audio overlaps
  (J/L cuts), pacing notes, change requests for shots to add, cut or retime.
- **Done when:** the total matches the target runtime; every cut has a reason.

## quality-control
- **Needs:** the artifact or media to check and its approved specs.
- **Produces:** `14_qc/QC_<stage>_<date>.md` with `record: qc_item` per finding, verdict PASS / FIX / REDO,
  repair instructions routed to the owner.
- **Done when:** every target has a verdict with evidence; nothing marked PASS without being checked.
