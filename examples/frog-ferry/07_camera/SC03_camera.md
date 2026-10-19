---
artifact: camera-plan
id: SC03_camera
version: 2
status: APPROVED
owner: cinematographer
depends_on: [SC03_direction@2, LOC-PUDDLE@1, style_bible@1]
updated: 2026-10-19
---
# SC03 Camera and Lighting

## Change note (v2, 2026-10-19)
- Direction@2 re-cut: SH020 split; the shadow beat moves to new SC03-SH025. SH020 now frames the refold (Pip centre-left); SH025 carries the shadow at lower right. Both 50 mm, 0.3 m. Static/locked-off.
- QC-111: rain defined once below; the SH010 drop shot says one falling drop only; Setup B atmosphere no longer says 'a little heavier' (no extra falling drops).

**Rain definition (QC-111, defined once; all other wording refers to it):** "light rain" = faint dimples on the water surface plus faint background streaks only; NO falling beads or drops anywhere in the frame. The only thing that ever falls is the single hero drop in a drop shot, which carries the wording "one falling drop only: exactly one aqua drop falls, no other drop, bead or splash source in frame".

Color script row: wet slate / paper yellow / coolest / lower saturation, slightly darker. Time/weather: morning, light rain (as defined below).
- Erratum (2026-10-19, no version bump; CR-ISSUE-12): SH010 generator wording adds "oar floating on the water".

## Lighting setups

### Setup B — Darker overcast (cloud thickening)
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | overcast sky dome, a darker patch moving in from the right | overhead, slightly dimmer on the right | very soft | cool ~7200 K (slate) | cel shadow tone one step darker (#4B5D6B) |
| Fill | sky bounce off the puddle | from below, even, lower level | very soft | grey-blue | — |
| Rim | none | — | — | — | — |
| Practicals | none | — | — | — | — |
| Atmosphere | light rain per the Rain definition, slightly more dimples and streaks, still no falling beads | — | — | — | small round shadow on the water appears at the end |
Contrast feel: low-medium (about 2.5:1). Changes during scene: dims slightly over the scene, the shadow grows.

```
         sky (overhead dome)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

## Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC03-SH010 | B | 35 mm: flat, deep | f/8, deep | drop and boat | 0.03 | 0.45 | south bank centre, same as SC02-SH020 | locked-off | static | none | wide flat side view identical in framing to the previous gag, slightly darker overcast; Pip strokes the oar at the start; ONE aqua drop lands on the same spot as before; one falling drop only, no other drop or bead falls; at the end, oar floating on the water beside the ripples |
| SC03-SH020 | B | 50 mm | f/5.6, deep | Pip's scowl and the lopsided boat | 0.03 | 0.3 | south bank centre-left, closer | locked-off | static | none | medium flat side view, Pip centre-left scowling, head above water, refolding fast into a lopsided creased boat, nothing falling |
| SC03-SH025 | B | 50 mm | f/5.6, deep | Pip's eyes, then the shadow at lower right (both sharp, no pull) | 0.03 | 0.3 | south bank centre-left, closer (matched to SH020) | locked-off | static | none | medium flat side view, Pip centre-left, small soft grey round shadow grows on the water lower right, Pip's ears sag flat; the shadow is a ground shadow, not a falling object, no drop yet in frame |

## Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts.
- Matched pairs: SH020 and SH025 share 50 mm, 0.03 m, 0.3 m, centre-left position. SC03-SH010 uses the same lens, height and distance as SC02-SH020.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

## Proposals to the director
- none

## Handoff
- Produced: SC03_camera@2 (APPROVED), setup B, 3 shots (new: SC03-SH025)
- Open items: none
- Next: script-supervisor, production-manager
