---
artifact: camera-plan
id: SC03_camera
version: 1
status: APPROVED
owner: cinematographer
depends_on: [SC03_direction@1, LOC-PUDDLE@1, style_bible@1]
updated: 2026-10-19
---
# SC03 Camera and Lighting

Color script row: wet slate / paper yellow / coolest / lower saturation, slightly darker. Time/weather: morning, light rain.

## Lighting setups

### Setup B — Darker overcast (cloud thickening)
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | overcast sky dome, a darker patch moving in from the right | overhead, slightly dimmer on the right | very soft | cool ~7200 K (slate) | cel shadow tone one step darker (#4B5D6B) |
| Fill | sky bounce off the puddle | from below, even, lower level | very soft | grey-blue | — |
| Rim | none | — | — | — | — |
| Practicals | none | — | — | — | — |
| Atmosphere | light rain, a little heavier | — | — | — | small round shadow on the water appears at the end |
Contrast feel: low-medium (about 2.5:1). Changes during scene: dims slightly over the scene, the shadow grows.

```
         sky (overhead dome)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

## Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC03-SH010 | B | 35 mm: flat, deep | f/8, deep | drop and boat | 0.03 | 0.45 | south bank centre, same as SC02-SH020 | locked-off | static | none | wide flat side view identical in framing to the previous gag, slightly darker overcast |
| SC03-SH020 | B | 50 mm | f/5.6, deep | Pip, shadow at lower right sharp | 0.03 | 0.3 | south bank centre-left, closer | locked-off | static | none | medium flat side view, Pip centre-left, small soft grey shadow on the water lower right |

## Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts.
- Matched pairs: SC03-SH010 uses the same lens, height and distance as SC02-SH020.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

## Proposals to the director
- none

## Handoff
- Produced: SC03_camera@1 (REVIEW), setup B, 2 shots
- Next: script-supervisor, production-manager
