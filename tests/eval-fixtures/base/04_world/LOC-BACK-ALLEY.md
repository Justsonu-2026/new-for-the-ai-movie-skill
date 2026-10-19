---
artifact: location
id: LOC-BACK-ALLEY
version: 1
status: APPROVED
owner: production-designer
depends_on: [screenplay@1, style_bible@1, story@1]
updated: 2026-10-19
---
# LOC-BACK-ALLEY — Ah Ma's alley

Scenes: SC03 · Story function: refuge and shrine, the place the ritual lived · Emotion: hush, then tenderness

## Design rationale
- A narrow plain alley, a few steps from the market's noise. It is the visual opposite of the stall: bare, quiet, almost empty, with one warm pool of light.
- Small and enclosed so the stool, the tin and the three figures are the only story. Plain plastered walls give a calm backdrop and no readable text.
- The stool and its saucer show someone sat here regularly; the worn seat is a clue that Ah Ma sat here every night.
- Regional Southeast Asian utility alley: plastered walls, a drainpipe, a shuttered rear door; no country-identifying features.

```yaml
record: location
id: LOC-BACK-ALLEY
name: "Back alley behind the market"
int_ext: EXT
description: "A 2.5 m wide, 10 m deep dead-end alley running north to south off the west end of the market lane, between two peeling sandy-plaster walls about 3 m high. A low wooden stool stands 7 m in from the mouth on the centre line. A single paper lantern hangs on an iron bracket from the east wall 2.2 m above the stool. The far south end is a blank wall."
layout: "see floor plan: mouth M at the north end; stool L1 on the centre line; lantern L2 on the east wall; shuttered rear door L3 on the west wall; drainpipe L4 on the east wall; blank dead end L5"
landmarks:
  - "L1 low wooden stool on the centre line"
  - "L2 round amber paper lantern on an iron bracket, east wall"
  - "L3 shuttered rear door of green-grey painted planks, west wall, 3 m south of the stool"
  - "L4 vertical grey drainpipe on the east wall"
  - "L5 blank plastered dead-end wall"
light_sources:
  - "L2 paper lantern, warm honey-amber, the only practical in the alley"
  - "Faint amber market glow from the mouth M (behind Lan as she enters)"
  - "Dark night sky above, cool teal ambient"
palette: ["alley teal shadow #1F3B3F", "honey tungsten #F2B35E", "plaster sand #8A7F6E", "umber #2A1D17", "tin brass #C9A24B"]
set_dressing:
  - "Peeling sandy plaster with damp stains, no graffiti and no writing"
  - "A coil of old rope and a dented metal bucket by the west wall near L3"
  - "Cold damp compacted concrete ground, a few leaves"
identity_lock: >-
  Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere.
variants:
  - {time_of_day: night, weather: "dry, still", notes: "SC03 only: lantern is the sole light, market noise and glow fall away behind the mouth"}
reference_images: []
```

## Floor plan
```
N ↑  (mouth faces the market lane; Lan enters from the north)
          LANE (E-W, market glow)
 =======[ M mouth, 2.5 m ]=========
 |  W wall                E wall  |
 |                         L4 drainpipe
 |                                |
 |            L2 lantern (E wall bracket, 2.2 m up, over L1)
 |            [L1 stool + ALLEY saucer on top, tin on ground in front, north of stool]
 |  L3 shuttered door             |
 |  rope + bucket                 |
 |                                |
 +--------- L5 blank dead end ----+
Stool: 7 m from M. Macaque sits beside the tin, west of the stool. Lan stops 3 m north of the stool at the edge of the light.
```

## Set dressing by zone
| Zone | Items | Story it tells | Continuity anchor? |
|---|---|---|---|
| Stool | stool, ALLEY saucer, tin in front | Ah Ma's feeding place | yes |
| Lantern | bracket and paper lantern | someone hung it for her | yes: always lit |
| West wall | rope, bucket, shuttered door | ordinary alley life | yes |

## Plate specifications
| Plate | Camera position on plan | Height | Lens type | Time/weather | Brief |
|---|---|---|---|---|---|
| AL-P1 | at the mouth M looking south | 1.5 m | normal | night | Empty alley, lantern lit over empty stool position, blank dead end |
| AL-P2 | beside the stool looking north to the mouth | 1.0 m | normal | night | Reverse: mouth with faint amber market glow, plaster walls |
| AL-P3 | at the stool, close | 0.5 m | short tele | night | Stool seat worn, wall bracket and lantern above |

## Handoff
- Produced: LOC-BACK-ALLEY@1 (REVIEW)
- Built from: screenplay@1 LOCKED, style_bible@1 (REVIEW)
- Open items: ASSUMPTION: alley runs north-south and opens onto the lane's west end, south side.
- Next: film-director, cinematographer (single lantern motivation), script-supervisor (axis)
