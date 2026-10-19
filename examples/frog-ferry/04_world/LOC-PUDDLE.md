---
artifact: location
id: LOC-PUDDLE
version: 1
status: APPROVED
owner: production-designer
depends_on: [screenplay@1, style_bible@1]
updated: 2026-10-19
---
# LOC-PUDDLE — the rain puddle

Scenes: SC01, SC02, SC03, SC04, SC05 · Story function: the obstacle to cross (threshold) · Emotion: a cozy, small, wet adventure

## Design rationale
Everything is toy-scale: the puddle is a wide pond to a 4 cm frog. One open, flat expanse of water keeps staging simple for 2D and for AI video. Near shore on screen left, far shore on screen right, always, so travel reads as left to right. Sparse rain keeps the background quiet.

```yaml
record: location
id: LOC-PUDDLE
name: The rain puddle
int_ext: EXT
description: "A wide shallow grey-blue puddle on bare ground. Near shore (screen left): a wet green leaf and a small grey pebble. Mid-water: open water with soft ripple rings. Far shore (screen right): a patch of bare dark soil with a few grass blades behind it."
layout: "see floor plan; travel direction is screen left to screen right"
landmarks: ["L1 wet green leaf, near shore, left", "L2 round grey pebble beside the leaf", "L3 patch of bare dark soil, far shore, right", "L4 clump of tall grass blades behind the soil"]
light_sources: ["soft diffuse overcast sky overhead", "SC05 only: a pale warm glow where clouds thin, upper right"]
palette: ["puddle grey-blue #9DB8C9", "wet slate #6E8797", "leaf green #7DBB5A", "soil brown #6B4A3A"]
set_dressing: ["ripple rings on the water surface", "a few small floating rain dimples", "tiny wet pebbles at the near edge", "grass blades behind the far soil"]
identity_lock: >-
  A wide flat puddle of calm pale grey-blue water with soft concentric ripple rings, a glossy green leaf and a round grey pebble on the left bank, a patch of bare dark brown soil with a clump of tall grass blades on the right bank, painted watercolor background wash.
short_lock: "wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right"
variants:
  - {time_of_day: morning, weather: "light rain", notes: "SC01-SC04: overcast grey-blue"}
  - {time_of_day: morning, weather: "thinning rain with a pale warm glow", notes: "SC05: brighter and warmer, soil darker where wet"}
reference_images: []
```

## Floor plan
```
  NEAR SHORE (screen LEFT)        MID-WATER (open)           FAR SHORE (screen RIGHT)
  [L2 pebble][L1 leaf]  ~~~ ripple rings ~~~~ boat path ->    [L3 soil patch]
                                                              [L4 grass blades behind]
  Camera side: viewer looks across the puddle from the south; sky above, north edge of the puddle is the background.
```

## Set dressing by zone
| Zone | Items | Story it tells | Continuity anchor? |
|---|---|---|---|
| Near shore | leaf, pebble | Pip's launch point | yes: leaf left, pebble right of leaf |
| Mid-water | ripple rings | the drop always lands near the bow | no |
| Far shore | bare soil patch, grass | Mo's empty garden spot | yes: soil patch is where the sprout appears |

## Plate specifications
| Plate | Camera position on plan | Height | Lens type | Time/weather | Brief |
|---|---|---|---|---|---|
| P1 wide | south bank, centered | water level, slightly above | flat side-on | morning light rain | whole puddle, both shores, empty |
| P2 far shore | south bank, right | water level | flat | morning, rain thins | soil patch and grass, empty |

## Handoff
- Produced: LOC-PUDDLE@1 (REVIEW)
- Next: film-director (blocking), cinematographer (light sources)
