---
artifact: location
id: LOC-NIGHT-MARKET
version: 1
status: APPROVED
owner: production-designer
depends_on: [screenplay@1, style_bible@1, story@1]
updated: 2026-10-19
---
# LOC-NIGHT-MARKET — Lan's noodle stall and the market lanes

Scenes: SC01, SC02, SC04 · Story function: routine and loss kept busy (stall), obstacle course (lanes), emptied and quiet mirror (closing) · Emotion: warm but numb → hectic → tender and still

## Design rationale
- A covered open-air lane of timber-frame food stalls under a taut wire of paper lanterns and bare bulbs. It is compact (about 3 m wide) so the chase reads as tight and dense, and the lantern wire gives the macaque a believable perch directly above the stall.
- The stall is deliberately small and orderly: one counter, one shelf. The shelf is the emotional centre: tin, photo, saucer together.
- Condition: worn, tidy, lived in for decades; damp swept concrete ground, patched corrugated roofs, faded canvas awnings. Regional Southeast Asian night market; no country-specific architecture, no flags, no scripts.
- Signage: every sign board is blank, painted over, or abstract shapes (no letters, no logos). This avoids readable text and keeps the country unnamed.
- The lane runs east to west; the chase travels west, ending at the dark alley mouth, so the geography itself pulls Lan from light to quiet.

```yaml
record: location
id: LOC-NIGHT-MARKET
name: "Night market lane and Lan's noodle stall"
int_ext: EXT
description: "A 3 m wide covered lane of timber-frame food stalls under corrugated-metal and faded canvas roofs. Lan's stall sits at the east end on the south side of the lane, facing north. Counter 3 m long, 90 cm high; a plank shelf at 140 cm on the rear post holds the tin, photo and saucer. A taut steel wire strung with paper lanterns and bare bulbs crosses the lane about 2.4 m high and passes 70 cm above the shelf. West of the stall the lane runs past a round table, two stacks of wooden crates, a hand cart and a narrow gap between two stalls, ending in an unlit stretch with the alley mouth on its south side."
layout: "see floor plan: stall L1 east end south side; shelf L2 on stall rear post; lantern wire L3 crossing the lane; crate stacks L4; hand cart L5; stall gap L6; alley mouth L7 at the west end, south side"
landmarks:
  - "L1 Lan's stall: wide aluminium stockpot and wok burner at the counter's west end, bare bulb with a wall switch on the east post"
  - "L2 plank shelf at 140 cm holding tin, framed photo and saucer, directly under the lantern wire"
  - "L3 lantern wire with a cluster of three round chili-red paper lanterns above the stall (the only red lanterns in the market)"
  - "L4 two stacks of slatted wooden crates (3 high and 4 high)"
  - "L5 two-wheel wooden hand cart bed at 40 cm, blocking the lane"
  - "L6 55 cm gap between two stalls leading to a short service path"
  - "L7 dark arch-shaped alley mouth between two plain plastered walls, no lights"
light_sources:
  - "String-light bulbs, warm tungsten, along the lane wires"
  - "Paper lanterns in amber, three chili-red lanterns above Lan's stall"
  - "Stall bulb over the counter, switched by a wall switch on the east post"
  - "Gas burner flame (orange) and pot steam, which backlights from the stall"
  - "Other stalls' bulbs and lanterns as a distant amber glow; the west end of the lane is the dimmest"
palette: ["night-market umber #2A1D17", "lantern amber #E0963A", "steam warm white #F1E4CF", "chili red #B8362B", "honey tungsten #F2B35E"]
set_dressing:
  - "Wire racks of blank bowls and chopstick tins at the stall; blank painted sign boards (no letters)"
  - "Neighbouring stalls with piles of produce under bulbs, faceless sparse extras kept soft"
  - "Folding round table with a plain grey cloth hanging to 15 cm above the ground (the macaque dives under it)"
  - "Damp swept concrete ground, a few puddles near the cart"
identity_lock: >-
  Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner.
variants:
  - {time_of_day: night, weather: "dry, warm, humid haze", notes: "SC01 and SC02: all stalls open, lanterns and bulbs on, steam from pots, sparse soft-focus shoppers"}
  - {time_of_day: "late night closing", weather: "dry", notes: "SC04: most stalls shuttered with roll-down corrugated shutters, lane empty, only Lan's stall bulb and a few lanterns lit, then the stall bulb switched off at the end"}
reference_images: []
```

## Floor plan
```
N ↑  (lane runs E-W; stall faces north onto the lane)
W end                                                                      E end
 .....unlit..................lane (3 m wide)...............................
 [L7 ALLEY MOUTH (south side)]
                    N side stalls: blank boards, produce   [L6 GAP]  (service path, rejoins lane west of L5)
 ==============================================================================
 (west)   L5 cart   L4b crates(4)  L4a crates(3)   TABLE      L1 LAN'S STALL (east end)
          [bed 40 cm]                                          counter 3 m, pot at west end
                                                                shelf L2 on rear post, wire L3 above
 ==============================================================================
 S side: stall rears and back walls
Chase direction in SC02: east → west (stall → table → crates → cart → gap → alley mouth).
Stall interior: Lan stands behind the counter facing north; pot at the counter's west end; shelf on the rear post behind her, to her right when she faces the lane.
```

## Set dressing by zone
| Zone | Items | Story it tells | Continuity anchor? |
|---|---|---|---|
| Stall counter | pot, wok burner, bowls, cloth, ladle | daily work done by habit | pot position at west end |
| Shelf | tin, framed photo, STALL saucer | the shrine she does not look at | yes: order west to east: saucer, photo, tin (see props.md) |
| Wire above | three red lanterns, bulbs | where the macaque waits | red cluster directly above shelf |
| Lane | table, crates, cart, gap | obstacle course | order east to west fixed |
| West end | unlit stretch, alley mouth | the quiet place | alley mouth south side |

## Plate specifications
| Plate | Camera position on plan | Height | Lens type | Time/weather | Brief |
|---|---|---|---|---|---|
| NM-P1 stall front | in the lane, north of the stall, looking south | 1.5 m | normal | night | Empty stall, counter, shelf with props out of frame or blank; red lanterns above; sparse soft background |
| NM-P2 lane west | at the stall looking west along the lane | 1.5 m | normal to short tele | night | Table, crates, cart in order; the dark alley mouth glimpsed at the far end |
| NM-P3 shelf close | behind the counter, looking north to the lane is not needed; close on shelf | 1.4 m | short tele | night | Empty shelf plank, wall post, wire overhead |
| NM-P4 closing | as NM-P1 | 1.5 m | normal | late night closing | Shuttered stalls, dimmed lanterns, empty lane |

## Handoff
- Produced: LOC-NIGHT-MARKET@1 (REVIEW)
- Built from: screenplay@1 LOCKED, style_bible@1 (REVIEW)
- Open items: ASSUMPTION: the lane runs east-west and the chase goes west; script-supervisor to confirm the axis. ASSUMPTION: the stall bulb has a wall switch (needed for "turns off the last light"). OPEN-QUESTION: none.
- VFX flags: blank signs only; crowd extras kept sparse and soft-focus.
- Next: film-director (blocking on the plan), cinematographer (light sources), script-supervisor (axis, order of obstacles)
