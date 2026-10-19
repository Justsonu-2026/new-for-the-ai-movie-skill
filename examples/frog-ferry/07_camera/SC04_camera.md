---
artifact: camera-plan
id: SC04_camera
version: 2
status: APPROVED
owner: cinematographer
depends_on: [SC04_direction@2, LOC-PUDDLE@1, style_bible@1]
updated: 2026-10-19
---
# SC04 Camera and Lighting

## Change note (v2, 2026-10-19)
- Direction@2 re-cut: new SC04-SH045 (splash) and SC04-SH055 (speed away); SH040 now covers land and bounces only (framing unchanged); SH050 covers the spin only. All static/locked-off.
- QC-109: SH010 is PROFILE facing screen right; generator wording changed from 'flat side-on face' to an explicit profile description.
- QC-111: rain defined once below; one falling drop only for SH020, SH040, SH045; SH030/SH050/SH055 state no falling beads.

**Rain definition (QC-111, defined once; all other wording refers to it):** "light rain" = faint dimples on the water surface plus faint background streaks only; NO falling beads or drops anywhere in the frame. The only thing that ever falls is the single hero drop in a drop shot, which carries the wording "one falling drop only: exactly one aqua drop falls, no other drop, bead or splash source in frame".

Color script row: grey-blue with lighter sky patch / fluff white, paper yellow / cool with white pop / brightest so far. Time/weather: morning, light rain (as defined below).
- Erratum (2026-10-19, no version bump; CR-ISSUE-13): SH050 generator wording now puts the splash wave at the RIGHT of the boat (per SC04_direction erratum).

## Lighting setups

### Setup A — Soft overcast daylight (SH050/SH055 a touch brighter per direction)
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | overcast sky dome (set source: sky) | overhead, no single direction; slight lift from camera-left sky | very soft | neutral cool ~6800 K (grey-blue) | cel shadow falls straight under objects |
| Fill | sky bounce off the puddle surface | from below, even | very soft | pale blue-grey | keeps shadow tone light, not black |
| Rim | none | — | — | — | 2D cel look uses an outline instead |
| Practicals | none | — | — | — | — |
| Atmosphere | light rain per the Rain definition: faint surface dimples and faint background streaks, no falling beads; faint wet sheen on leaf and soil | — | — | — | nothing falls through the frame except a hero drop in a drop shot |
Contrast feel: low (about 2:1). Changes during scene: none.

```
         sky (overhead dome)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

## Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC04-SH010 | A | 70 mm: flat, slightly compressed | f/4, shallow wash background | Pip's eyes | 0.03 | 0.25 | south bank centre, close | locked-off | static | none | medium close-up, Pip in strict PROFILE facing screen right (side-on, one eye visible, nose pointing right, not three-quarter, not toward camera), chin up, soft wash background, no falling beads |
| SC04-SH020 | A | 35 mm: flat, wide | f/8, deep | drop | 0.03 | 0.2 | POV looking up from Pip's seat; sky filling frame | locked-off | static | none | upward view of flat grey sky, no horizon; ONE small bright aqua drop high in the sky grows larger toward camera; one falling drop only: no other drop, bead or streak falls in the sky |
| SC04-SH030 | A | 50 mm | f/5.6 | Pip and the opening fluff | 0.03 | 0.3 | south bank centre | locked-off | static | none | medium flat side view, white fluff opens like a parasol above Pip, fluff the brightest thing in frame, nothing falling yet |
| SC04-SH040 | A | 35 mm | f/8, deep | fluff and drop | 0.03 | 0.45 | south bank centre-left | locked-off | static | none | wide flat side view, fluff upper left of centre, ONE aqua drop lands on the fluff and bounces up and down twice, Pip under the fluff; one falling drop only, no other drop or bead |
| SC04-SH045 | A | 35 mm | f/8, deep | drop and splash crown | 0.03 | 0.45 | south bank centre-left (matched to SH040) | locked-off | static | none | wide flat side view, ONE aqua drop falls into the water beside the boat, splash crown rises lower right then falls back to ripples, boat and fluff left; one falling drop only |
| SC04-SH050 | A | 35 mm | f/8, deep | boat | 0.03 | 0.45 | south bank centre | locked-off | static | none | wide flat side view, wave at right spins the boat once at centre in place, Pip under the open fluff, no falling beads |
| SC04-SH055 | A | 35 mm | f/8, deep | boat | 0.03 | 0.45 | south bank centre (matched to SH050) | locked-off | static; the boat slides, the camera does not | none | wide flat side view, boat enters centre and speeds right to the right third, Pip grinning with the seed held up, no camera pan, no falling beads |

## Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts.
- Matched pairs: wide shots in this scene share 35 mm, 0.03 m height, 0.45 m distance.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

## Proposals to the director
- none

## Handoff
- Produced: SC04_camera@2 (APPROVED), setup A, 7 shots (new: SC04-SH045, SC04-SH055)
- Open items: none
- Next: script-supervisor, production-manager
