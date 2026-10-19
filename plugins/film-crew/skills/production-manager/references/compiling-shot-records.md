# Compiling Shot Records

How the production-manager turns approved department documents into complete shot records
(`record: shot`, production-schema section 4) without adding or losing decisions.

## Contents
1. Field sources
2. Writing start_frame, end_frame and motion
3. Worked example
4. Common compilation errors

## 1. Field sources

| Field | Source (owner) | If absent |
|---|---|---|
| id, scene, purpose, duration_s, shot_size, angle, movement intent | director shot list | request from film-director |
| screenplay_ref, dialogue text | screenplay (screenwriter) | request from screenwriter |
| characters[].position / facing / action / expressions / eyeline | direction blocking + performance notes | request from film-director |
| characters[].costume / costume_state, props[].state | continuity record (script-supervisor) | request from script-supervisor |
| fight moves, impacts, reactions | action-director document | request from action-director |
| key poses, timing (animation) | animation-director document | request from animation-director |
| location.id / area | direction + location file | request from production-designer |
| frame.foreground / midground / background | director composition + location set dressing | request from film-director |
| camera.lens_mm / aperture / depth_of_field / height / position / support / focus | camera document (cinematographer) | request from cinematographer |
| lighting.* | camera document lighting setup; palette from style bible color script | request from cinematographer |
| screen_direction | continuity record | request from script-supervisor |
| sound, music | sfx.md / music.md if done; else the screenplay's sound cues | `MISSING:` is acceptable before stage 10 only if marked "pending sound plan" |
| vfx | vfx plan if done; else `none` only if the director flagged no VFX | request from vfx-supervisor |
| transition_in / out | director shot list; editor's paper edit overrides after approval | derive in = previous out |
| generation.mode | video-prompt-engineer's plan if done; else default by table in ai-model-adapters section 5 (mark `derived`) | — |
| generation.start_frame / end_frame / motion | **you compose** from the fields above (section 2) | — |
| generation.clip_length_s | duration_s + 1 s rounded up to the tool's nearest allowed length | — |

## 2. Writing start_frame, end_frame and motion

These three fields are the bridge to image and video models. They must stand alone: someone who reads only
this text can draw the frame.

**start_frame / end_frame** — one paragraph each, in this order:
1. Camera: shot size, angle, lens, height, depth of field.
2. Each character: identity lock **verbatim**, costume lock **verbatim** plus the current costume state,
   position in frame (thirds, foreground/mid/background, distance), facing, pose, expression.
3. Props: lock verbatim + state + where they are.
4. Location: location lock verbatim + the area + what is in foreground/midground/background.
5. Light: key direction and quality, fill, rim, practicals, shadows; time of day; weather.
6. Palette anchors (3-5 named colors) and the style lock verbatim.

Describe only what is visible in that single instant. No sounds, no "then", no camera motion, no emotions
without their visible form ("eyes wide, lips parted", not "shocked").

**motion** — what changes between the two frames, in time order, with seconds:
- one primary subject action, broken into beats with an end state;
- at most one camera move (plus a focus pull if needed), with start and end;
- at most one environmental motion (rain, smoke, crowd);
- dialogue timing if spoken.

## 3. Worked example

Director's shot list row:
`SC03-SH020 | MCU | high | static | Maya turns the parcel over, reads the label, looks up | 4 s | purpose: she
realises it is her own address | cut on look-up to SH030`

Camera doc: `50 mm, f/2, shallow, camera 1.9 m, two steps above her, tripod; focus label → her eyes at 2.5 s;
key pink neon camera right high hard; rim cool blue bulb camera left; no fill.`

Continuity: `CO-MAYA-01 hood down, shoulders soaked; PR-PARCEL:WET, tape torn one corner; knuckle scrape left
hand; faces camera right.`

Compiled `start_frame` (locks shortened here as `<CH-MAYA lock>` for space; in a real record paste them in full):
> Medium close-up from a high angle, 50 mm lens, camera 1.9 m high looking down, shallow depth of field.
> `<CH-MAYA lock>` `<CO-MAYA-01 lock>`, hood down, jacket soaked dark at the shoulders, a fresh scrape on the
> left knuckles. She stands on the left third of frame in the midground, three-quarter to camera right, head
> bowed, holding `<PR-PARCEL lock>` face down at chest height, its brown paper wet and dark, tape torn at one
> corner. `<LOC-STAIRWELL lock>`: top landing, rusted railing out of focus in the lower-left foreground, a
> cracked window behind her with a blurred pink neon sign outside. Hard pink neon key from the window at
> camera right, high; cool blue rim from a caged bulb at camera left; no fill, shadow side near black; hard
> window-frame shadow across her chest. Night, rain outside. Palette: magenta, cold blue, wet black.
> `<STYLE lock>`

Compiled `motion`:
> 0-1.5 s: Maya turns the parcel over with both hands so the label faces camera. 1.5-2.5 s: her right thumb
> wipes rain off the label. 2.5-4 s: focus racks from the label to her eyes; she lifts her eyes to the window
> and holds. Camera static. Rain streaks run down the window glass. At 3.0 s she says quietly, "That's my street."

## 4. Common compilation errors
- Paraphrasing a lock ("a young woman with dark hair") instead of pasting it verbatim.
- Copying the director's emotional intent ("she is devastated") into frame text instead of the visible form.
- Two primary actions in one shot ("she reads the label and runs downstairs") — return to the director.
- Light direction flipping between shots of the same setup without motivation — CONFLICT to cinematographer.
- A prop in a state it has not reached yet (parcel opened before the opening scene) — CONFLICT to continuity.
- end_frame that cannot be reached from start_frame within the duration — return to the director.
