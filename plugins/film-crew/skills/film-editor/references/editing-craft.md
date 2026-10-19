# Editing Craft

## Contents
1. Murch's rule of six
2. Pacing and rhythm
3. Cut types
4. Coverage the edit needs
5. Selecting usable seconds from AI takes
6. Runtime reduction order
7. Post-production order

## 1. Murch's rule of six
Walter Murch (*In the Blink of an Eye*) ranks what makes a cut work, in order of importance: **emotion**
(he weights it highest, over half), **story**, **rhythm**, **eye-trace** (where the viewer's eye is
before and after the cut), **two-dimensional plane of the screen** (screen direction/axis) and
**three-dimensional space** (spatial continuity). When they conflict, give up the lower ones first: a cut
that is emotionally right but breaks spatial continuity is usually better than the reverse.

## 2. Pacing and rhythm
- **Average shot length (ASL)** per scene shows its energy: action and comedy beats are often short;
  drama and dread often long. Compute it per scene from the paper edit and check it fits each scene's job.
- Vary rhythm: acceleration into climaxes, a release after them.
- Hold on emotional reactions long enough to land; cut before a moment becomes slack.
- Cut on movement or on a change in a look; cutting on stillness is noticed.
- Eye-trace: put the next shot's focal point near where the previous shot left the viewer's eye, unless
  the jolt is intended.

## 3. Cut types
| Cut | Use |
|---|---|
| Straight cut | default |
| Cut on action | continuity: start the move in shot A, finish in B |
| Match cut | link two ideas by shape, motion or composition |
| Jump cut | deliberate discontinuity, time compression, unease |
| J-cut | incoming audio leads the picture (draws forward) |
| L-cut | outgoing audio trails over the next picture (lingers) |
| Smash cut | abrupt contrast in tone or volume |
| Dissolve | time passing, memory, gentle transitions |
| Fade to/from black | beginnings, endings, large time jumps |

## 4. Coverage the edit needs
- An establishing or re-establishing shot when geography matters.
- Reaction shots at turns (the listener matters).
- Cutaways/inserts to compress time or bridge continuity problems.
- Enough size variation to avoid jump cuts (or a 30°+ angle change).
Raise missing coverage in the paper edit — before generation is cheapest.

## 5. Selecting usable seconds from AI takes
- Skip settling frames at the start and drift/morph at the end of generated clips; that is why clips are
  generated with 1-2 s of handles.
- Prefer the take with the best performance and identity over the "prettiest" one.
- Check continuity at the in/out points against neighbouring shots (positions, props, light).
- Note any frames needing cleanup for the vfx-supervisor rather than cutting around story content.

## 6. Runtime reduction order
1. Remove shots that repeat a job another shot does.
2. Trim entrances, exits and travel (enter late, leave early).
3. Tighten pauses that don't carry emotion.
4. Propose dialogue trims to the screenwriter (CR).
5. Propose merging or cutting scenes (CR to story owners) — last resort.

## 7. Post-production order
Picture lock → conform (replace any proxies/upscales with final-quality takes) → color grade (style bible
intent per scene, shot matching) → final sound mix (stems) → titles and subtitles → exports per platform
(aspect variants, loudness spec) → QC of masters.
