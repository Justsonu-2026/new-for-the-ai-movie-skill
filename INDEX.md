# Film Crew — Master Index

Twenty skills, one production. This index gives each skill's purpose, inputs, outputs, dependencies and
place in the pipeline. Shared rules: [shared/crew-protocol.md](shared/crew-protocol.md) (folders,
statuses, ownership, change requests) and [shared/production-schema.md](shared/production-schema.md)
(IDs, record formats, the shot record). Why the crew is split this way: [docs/DESIGN.md](docs/DESIGN.md).

## Pipeline at a glance

| Stage | Skill(s) | Main output | Gate |
|---|---|---|---|
| 0 Brief | production-manager | `00_brief.md`, `PRODUCTION_LOG.md` | specs recorded |
| 1 Story | story-writer | `01_story/story.md` | story approved |
| 2 Screenplay | screenwriter | `02_screenplay/screenplay.fountain` + scene records | screenplay locked |
| 3 Design | character-designer · production-designer · visual-style-designer | character, world, style bibles | bibles approved |
| 4 Direction | film-director (+ action-director, animation-director) | `06_direction/SC<NN>_*.md` | direction approved |
| 5 Camera | cinematographer | `07_camera/SC<NN>_camera.md` | camera approved |
| 6 Continuity | script-supervisor | `07_camera/continuity.md` | no blockers |
| 7 Master document | production-manager | shot records + `MASTER_PRODUCTION_DOCUMENT.md` | validator 0 errors |
| 8 Storyboard | storyboard-artist | `09_storyboard/storyboard.md` + `.html` | storyboard approved |
| 9 Paper edit | film-editor | `13_edit/edit_plan.md` | runtime confirmed |
| 10 Sound, VFX | voice-director · music-director · sound-designer · vfx-supervisor | `11_sound/*`, `12_vfx/vfx_plan.md` | plans approved |
| 11-13 Generation | image-prompt-engineer → video-prompt-engineer, each checked by quality-control | `10_prompts/*`, assets | every item PASS |
| 14 Assembly | film-editor | cut list, EDL, rough cut | cut approved |
| 15 Final QC | quality-control | `14_qc/QC_final_*.md` | delivery checklist PASS |

## Skills

### production-manager — central coordinator
- **Purpose:** runs departments in order, tracks versions and approvals, detects conflicts and stale work,
  requests missing information, applies change requests, compiles complete shot records and assembles the
  master production document.
- **Inputs:** user idea/brief; every department document.
- **Outputs:** brief, production log, `08_master/shots/SC<NN>.md`, `MASTER_PRODUCTION_DOCUMENT.md`.
- **Depends on:** all departments (routes to them). Scripts: `validate_production.py`, `assemble_master.py`.

### story-writer — story development
- **Purpose:** turns a simple idea into several concepts, then a complete story (characters' want, need,
  flaw and arc, conflict, causal beats, fair twists, earned ending) sized for the runtime and AI production.
- **Inputs:** idea, brief. **Outputs:** `01_story/concepts.md`, `01_story/story.md`.
- **Depends on:** nothing. **Feeds:** screenwriter, designers.

### screenwriter — story refinement and screenplay
- **Purpose:** diagnoses and strengthens a story, decides who speaks, what happens and what the audience
  sees per scene, writes the screenplay in Fountain with natural dialogue, justifies every change.
- **Inputs:** story (or any draft). **Outputs:** `screenplay.fountain`, `scene_index.md` (scene records).
- **Depends on:** story-writer (optional). **Feeds:** every later department.

### character-designer — character design and model sheets
- **Purpose:** designs characters and costume looks, writes identity locks, specifies turnaround,
  expression, pose, costume and lineup sheets, reviews generated sheets for drift.
- **Inputs:** screenplay, story, style bible. **Outputs:** `03_characters/CH-<SLUG>.md`, `lineup.md`.
- **Feeds:** director, cinematographer, script supervisor, prompt engineers, QC.

### production-designer — locations, environments, props
- **Purpose:** designs locations with floor plans, landmarks and light sources; props with every state;
  set dressing; location plate and prop sheet specs.
- **Inputs:** screenplay, style bible. **Outputs:** `04_world/LOC-<SLUG>.md`, `04_world/props.md`.
- **Feeds:** director (blocking), cinematographer (sources), script supervisor (states), prompt engineers.

### visual-style-designer — look, palette, color script
- **Purpose:** defines medium, palette with roles, color script per scene, lighting and lens philosophy,
  texture, style lock and style-frame briefs.
- **Inputs:** brief, story/screenplay. **Outputs:** `05_look/style_bible.md`.
- **Feeds:** all design and camera work, prompt engineers, editor (grade intent).

### film-director — direction and shot breakdown
- **Purpose:** scene analysis, visual thesis, blocking with axis, playable performance notes, shot list
  (size, angle, movement intent, composition, lens feel, light mood, duration, transitions); genre playbooks
  for drama, comedy, horror, romance, thriller.
- **Inputs:** locked screenplay, bibles. **Outputs:** `06_direction/SC<NN>_direction.md`.
- **Feeds:** cinematographer, specialists, script supervisor, production-manager.

### action-director — fights, chases, stunts
- **Purpose:** choreography in phrases (action → reaction → consequence), momentum, geography, chase
  routes, shot mapping, injury/damage continuity, AI-execution limits.
- **Inputs:** director's scene plan, bibles, floor plan. **Outputs:** `06_direction/SC<NN>_action.md`.

### animation-director — animation acting and timing
- **Purpose:** key poses with frame numbers, timing charts, holds, principles of animation, lip-sync
  accents, start/end poses for AI keyframes.
- **Inputs:** director's plan, model sheets, style. **Outputs:** `06_direction/SC<NN>_animation.md`.

### cinematographer — camera and lighting
- **Purpose:** lens (mm), aperture/DOF, focus plan, camera height/position/support, movement execution,
  motivated lighting setups with directions, color temperatures and ratios, generator-friendly wording.
- **Inputs:** direction, locations, style. **Outputs:** `07_camera/SC<NN>_camera.md`.

### script-supervisor — continuity
- **Purpose:** story timeline, per-scene continuity records (costume/prop states, injuries, axis, screen
  direction, time, weather), coverage map (screenplay → shots), continuity report; media continuity checks.
- **Inputs:** screenplay, bibles, direction, camera. **Outputs:** `07_camera/continuity.md`.

### storyboard-artist — storyboards
- **Purpose:** panels per shot (start/end for moves), composition on the thirds grid, arrow notation,
  continuity between panels, sketch prompts, printable HTML storyboard sheet.
- **Inputs:** compiled shot records. **Outputs:** `09_storyboard/storyboard.md`, `storyboard.html`.
- **Script:** `build_storyboard.py`.

### image-prompt-engineer — still-image prompts
- **Purpose:** prompts for sheets, plates, style frames, panels and start/end keyframes; locks verbatim;
  reference roles; generation order; edit prompts for fixes.
- **Inputs:** bibles, shot records, tool profile. **Outputs:** `10_prompts/images.md`.

### video-prompt-engineer — video prompts
- **Purpose:** mode per shot, motion budget, timed beats with end states, model syntax for dialogue and
  audio, clip lengths with trim handles, chaining/extend plans, retry ladders.
- **Inputs:** shot records, approved keyframes, tool profile. **Outputs:** `10_prompts/video.md`.

### voice-director — voice casting and performance
- **Purpose:** voice profiles, pronunciation guide, line-by-line delivery with timing windows, TTS scripts,
  take review.
- **Inputs:** screenplay, characters, shot timings. **Outputs:** `11_sound/voice.md`.

### music-director — score, themes and songs
- **Purpose:** spotting, themes, cue specs with hit points, original songs (structure, lyrics, prosody),
  AI music prompts.
- **Inputs:** screenplay, style, timings. **Outputs:** `11_sound/music.md`.

### sound-designer — effects, ambience, mix intent
- **Purpose:** ambience beds, sync cues and Foley per shot, off-screen sound, bridges, silence, mix
  priorities, stems and loudness targets, SFX prompts.
- **Inputs:** shot records, locations. **Outputs:** `11_sound/sfx.md`.

### vfx-supervisor — VFX planning
- **Purpose:** classifies risky shots, picks methods (keyframe edit, composite, post text, cleanup, previz),
  elements, steps, estimates, fallbacks and review criteria.
- **Inputs:** shot records with risks, tools. **Outputs:** `12_vfx/vfx_plan.md`.

### film-editor — paper edit and assembly
- **Purpose:** pacing and runtime before generation; take selection, cut list, transitions, J/L cuts,
  music sync after generation; CMX3600 EDL and ffmpeg rough-cut script; post order.
- **Inputs:** shot records; generated takes. **Outputs:** `13_edit/edit_plan.md`, `cutlist.csv`, `cut.edl`.
- **Script:** `build_cut.py`.

### quality-control — independent checks
- **Purpose:** preflight of the master document, review of sheets, keyframes, clips, audio and the final
  cut against approved specs with PASS/FIX/REDO verdicts and evidence; delivery checklist.
- **Inputs:** targets + specs. **Outputs:** `14_qc/QC_<stage>_<date>.md`.
- **Scripts:** `validate_production.py`, `inspect_media.py` (ffmpeg).

## Dependency graph

```
story-writer → screenwriter → {character-designer, production-designer, visual-style-designer}
  → film-director (+ action-director / animation-director) → cinematographer → script-supervisor
  → production-manager (shot records, master document)
  → storyboard-artist, film-editor (paper edit), voice/music/sound, vfx-supervisor
  → image-prompt-engineer → [generate] → quality-control
  → video-prompt-engineer → [generate] → quality-control
  → film-editor (assembly) → quality-control (final)
production-manager coordinates every arrow and owns approvals and change requests.
```
