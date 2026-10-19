# Production Schema

The data contract shared by all film-crew skills: IDs, record formats, controlled vocabulary and asset
names. Records are YAML blocks inside Markdown files, so documents stay readable for people and
parseable by `validate_production.py`. The canonical copy lives in `shared/production-schema.md`.

## Contents
1. Record blocks
2. ID conventions
3. Record types and required fields
4. The shot record (full)
5. Controlled vocabulary
6. Asset naming
7. Validation rules

## 1. Record blocks

A record is a fenced code block tagged `yaml` whose first key is `record:`.

````markdown
```yaml
record: prop
id: PR-PARCEL
name: The parcel
```
````

Prose may surround records freely. Only blocks starting with `record:` are parsed. One record per block.
Never write `TBD`, `TODO`, `?`, or an empty value in a required field: write `MISSING: <what is needed>`.

## 2. ID conventions

IDs are permanent. Never reuse or renumber an ID; retire it by setting `status: SUPERSEDED`.

| Thing | Pattern | Example |
|---|---|---|
| Character | `CH-<SLUG>` | `CH-MAYA` |
| Costume look | `CO-<CHARSLUG>-<NN>` | `CO-MAYA-01` |
| Location | `LOC-<SLUG>` | `LOC-ROOFTOP` |
| Prop | `PR-<SLUG>` | `PR-PARCEL` |
| Prop state | `<PROP>:<STATE>` | `PR-PARCEL:WET` |
| Scene | `SC<NN>` | `SC03` |
| Shot | `SC<NN>-SH<NNN>`, numbered in tens | `SC03-SH020`; insert later as `SC03-SH025` |
| Storyboard panel | `SB-<SHOT>-P<N>` | `SB-SC03-SH020-P1` |
| Voice line | `VL-SC<NN>-<NNN>` | `VL-SC03-004` |
| Music cue | `M<NN>` (songs `SONG-<SLUG>`) | `M03`, `SONG-RAIN` |
| Sound cue | `SFX-SC<NN>-<NNN>` | `SFX-SC03-012` |
| VFX shot | `VFX-<SHOT>` | `VFX-SC03-SH020` |
| Image prompt | `IMG-<TARGET>-<NN>` | `IMG-SC03-SH020-START-01`, `IMG-CH-MAYA-TURN-01` |
| Video prompt | `VID-<SHOT>-<NN>` | `VID-SC03-SH020-01` |
| Change request | `CR-<NNN>` | `CR-007` |
| QC item | `QC-<NNN>` | `QC-031` |

SLUGs are uppercase ASCII letters, digits and hyphens.

## 3. Record types and required fields

Required fields are listed; add any other useful fields.

| record | Owner | Required fields |
|---|---|---|
| `character` | character-designer | id, name, role, age, height_cm, build, identity_lock, face, hair, skin, eyes, silhouette, distinguishing_features, default_costume, costumes, expression_range |
| `costume` | character-designer | id, character, name, garments, materials, colors, accessories, condition_states, identity_lock |
| `location` | production-designer | id, name, int_ext, description, layout, landmarks, light_sources, palette, set_dressing, identity_lock |
| `prop` | production-designer | id, name, description, size, materials, colors, states, identity_lock |
| `style` | visual-style-designer | id (`STYLE`), medium, aspect_ratio, palette, contrast, texture, lighting_philosophy, lens_philosophy, style_lock, avoid |
| `scene` | screenwriter | id, heading, location, time_of_day, characters, summary, purpose, value_change, est_duration_s |
| `shot` | production-manager (compiled) | see section 4 |
| `panel` | storyboard-artist | id, shot, frame_moment, description, composition, camera_notes, duration_s |
| `continuity` | script-supervisor | id (`CONT-SC<NN>`), scene, axis, screen_direction, character_states, prop_states, time_of_day, weather, carry_over |
| `image_prompt` | image-prompt-engineer | id, target, model, prompt, references, parameters |
| `video_prompt` | video-prompt-engineer | id, shot, model, mode, prompt, references, clip_length_s, parameters |
| `voice_line` | voice-director | id, shot, character, line, delivery, timing |
| `music_cue` | music-director | id, start, end, function, description |
| `sfx_cue` | sound-designer | id, shot, sound, sync_point, layer |
| `vfx` | vfx-supervisor | id, shot, problem, method, elements |
| `qc_item` | quality-control | id, target, check, verdict, evidence |

`identity_lock` / `style_lock` are short fixed paragraphs (character: 40-80 words; costume, location,
prop: 25-60 words; style: 30-70 words) that are pasted **verbatim** into every image or video prompt that
shows the thing. Paraphrasing a lock is the most common cause of identity drift. Characters, costumes,
locations and props also carry a `short_lock` (10-25 words, owned by the same designer) used verbatim when
the thing is small, soft-focus or secondary in a shot. Locks describe what is present ("bare neck",
"blank walls"), never "no ...".

## 4. The shot record (full)

The production-manager compiles one shot record per shot from the approved department documents. Every
field below is required unless marked optional. Each value comes from the department that owns it.

```yaml
record: shot
id: SC03-SH020
scene: SC03
status: REVIEW
version: 1
depends_on: [screenplay@3, SC03_direction@2, SC03_camera@1, continuity@2, style_bible@1]
purpose: "Maya sees the address on the parcel is her own"   # story function, one sentence
screenplay_ref: "SC03, action line 4 to dialogue 'That's my street.'"
duration_s: 4.0                      # length in the cut
characters:
  - id: CH-MAYA
    costume: CO-MAYA-01
    costume_state: "hood down, jacket soaked dark at shoulders"
    position: "frame left third, midground, 1.5 m from camera"
    facing: "three-quarter to camera right, head bowed to parcel"
    action: "turns the parcel over in both hands; thumb wipes rain off the label"
    expression_start: "brows pinched, mouth closed"
    expression_end: "eyes widen, lips part"
    eyeline: "down to label in her hands"
props:
  - id: PR-PARCEL
    state: PR-PARCEL:WET
    position: "in Maya's hands at chest height"
location:
  id: LOC-STAIRWELL
  area: "top landing, by the cracked window"
  time_of_day: night
  weather: "rain outside the window"
frame:
  foreground: "out-of-focus rusted railing, lower frame left"
  midground: "Maya with parcel"
  background: "cracked window, blurred pink neon sign outside"
  composition: "Maya on left third, label at frame centre, headroom tight"
camera:
  shot_size: MCU
  angle: high
  height_m: 1.9
  position: "two steps above her on the stairs, looking down"
  lens_mm: 50
  aperture: "f/2"
  depth_of_field: shallow
  focus: "label, then rack to Maya's eyes at 2.5 s"
  movement: static
  support: tripod
lighting:
  key: "pink neon through window, camera right, high, hard"
  fill: "none; shadow side falls to near black"
  rim: "cool blue from stairwell bulb behind, camera left"
  practicals: "neon sign outside window; caged bulb on wall"
  shadows: "hard window-frame shadow across her chest"
  palette: ["magenta #D63A8A", "cold blue #3A5CD6", "wet black #101216"]
screen_direction: "Maya faces camera right; axis Maya-window, camera stays on stair side"
start_state: "Maya holds the parcel face down; label not visible"
end_state: "label faces camera, readable; Maya's eyes lifted toward the window"
action_timeline:
  - "0.0-1.5 s: turns the parcel over"
  - "1.5-2.5 s: thumb wipes the label"
  - "2.5-4.0 s: focus racks to her eyes; she looks up"
dialogue:
  - {line_id: VL-SC03-004, character: CH-MAYA, text: "That's my street.", timing: "3.0-3.8 s", delivery: "barely audible"}
sound: "rain on window, distant traffic hiss, paper crinkle on the wipe (sfx-cues in 11_sound/sfx.md)"
music: "M02 continues under; no new cue"
vfx: none                            # or VFX-SC03-SH020
transition_in: "cut from SC03-SH010 (wide)"
transition_out: "cut on her look-up to SC03-SH030 (her POV of window)"
continuity:
  - "Parcel tape torn at one corner since SC02-SH040"
  - "Left hand has a fresh scrape on the knuckles since SC02"
generation:
  mode: first-last-frame              # see vocabulary
  start_frame: "<self-contained still description of the first frame, including identity locks>"
  end_frame: "<self-contained still description of the last frame>"
  motion: "<only what changes between the two frames, in time order>"
  clip_length_s: 5                    # generate longer than duration_s, trim in edit
  keep: "0.5-4.5 s"                   # the part of the clip used in the cut (motion is timed in clip time)
  risks: ["text legibility on label: add label in post if unreadable (see VFX)"]
```

Rules for the compiled shot record:
- `start_frame` and `end_frame` are complete still descriptions a person could draw without the rest
  of the document: who, wearing what, where in frame, doing what, lit how, from which camera. Paste the
  full lock for each in-focus primary subject and the `short_lock` for background or soft-focus elements;
  always paste the style lock. Target 150-300 words per frame text (the validator warns above 350): long
  prompts dilute what matters and may exceed tool limits.
- `motion` states one primary subject action and at most one camera move, with an end state, timed in
  clip time over the whole `clip_length_s` (holds before and after the action), with `keep` naming the
  range used in the cut.
- Every ID referenced must exist as a record. Every value must trace to an owner document; otherwise use
  `MISSING:` and route the request to the owner.

## 5. Controlled vocabulary

**Shot sizes:** EWS (extreme wide), WS (wide), FS (full: head to toe), MWS (medium wide: knees up),
MS (medium: waist up), MCU (medium close-up: chest up), CU (close-up: face), ECU (extreme close-up:
part of face), INSERT (object detail), TWO-SHOT, OTS (over the shoulder), POV.

**Angles:** eye-level, low, high, overhead (top-down), worm's-eye, dutch (canted), profile, frontal.

**Camera movement:** static, pan-left, pan-right, tilt-up, tilt-down, dolly-in (push-in), dolly-out
(pull-out), truck-left, truck-right, pedestal-up, pedestal-down, crane-up, crane-down, arc-left,
arc-right, follow, lead, handheld, zoom-in, zoom-out, rack-focus. Combine at most two, e.g.
`dolly-in + rack-focus`.

**Support:** tripod, dolly, slider, crane/jib, steadicam/gimbal, handheld, drone, car-mount, locked-off.

**Transitions:** cut, match-cut, jump-cut, J-cut (audio leads), L-cut (audio trails), dissolve,
fade-in, fade-out, smash-cut, whip-pan, wipe, cut-on-action, cut-to-black.

**Generation modes:** text-to-image, image-edit, text-to-video, image-to-video (start frame),
first-last-frame, reference-to-video (identity references), video-extend, video-edit, lip-sync,
text-to-speech, music-generation, sfx-generation.

**Time of day:** dawn, morning, midday, afternoon, golden-hour, dusk (blue hour), night, pre-dawn.

## 6. Asset naming

```
assets/characters/CH-MAYA_turnaround_v1.png
assets/characters/CH-MAYA_expressions_v1.png
assets/characters/CO-MAYA-01_costume_v1.png
assets/world/LOC-ROOFTOP_plate_dusk_v2.png
assets/world/PR-PARCEL_sheet_v1.png
assets/storyboard/SB-SC03-SH020-P1_v1.png
assets/keyframes/SC03-SH020_start_v3.png
assets/keyframes/SC03-SH020_end_v3.png
assets/video/SC03-SH020_take02.mp4
assets/audio/VL-SC03-004_take01.wav
assets/audio/M02_v1.wav
```

The approved file for each slot is recorded in the asset registry inside the master document. Never
overwrite an approved asset; write a new version.

## 7. Validation rules

`validate_production.py <project>` checks, and reports each failure with file and record ID:
1. Every record block parses as YAML and has `record` and `id`.
2. IDs are unique and match the patterns in section 2.
3. Required fields are present and not empty, `TBD`, `TODO` or `?`.
4. Every ID mentioned in a record resolves to an existing record.
5. Shots: `duration_s` > 0; `camera.shot_size` and `camera.movement` use the controlled vocabulary;
   `generation.mode` is a known mode; video modes have `start_state`, `end_state` and `motion`.
6. Scenes: the sum of shot durations is within ±25% of the scene's `est_duration_s` (warning).
7. Continuity: within one scene, a character keeps one costume unless a shot declares `costume_change: true`.
8. Staleness: every `depends_on` entry `name@N` matches the current `version` of that artifact (warning).
9. Locks (warnings): word counts, character lock without the name or garments, style lock without an aspect
   ratio, no "no ..." phrasing; frame texts over 350 words.
10. Counts of `MISSING:`, `ASSUMPTION:`, `CONFLICT:` and `OPEN-QUESTION:` markers per file (report).
