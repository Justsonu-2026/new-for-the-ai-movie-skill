# Example Location and Prop

````markdown
---
artifact: location
id: LOC-ROOFTOP
version: 1
status: REVIEW
owner: production-designer
depends_on: [screenplay@2, style_bible@1]
updated: 2026-10-19
---
# LOC-ROOFTOP — Tenement rooftop

Story function: exposure and escape — the city below, nowhere to hide, the only way out is a jump.

```yaml
record: location
id: LOC-ROOFTOP
name: Tenement rooftop, Kileleshwa block
int_ext: EXT
description: "Flat tar roof of a five-storey 1970s concrete tenement, 12 x 8 m, low parapets, crowded with rusted AC units, a water tower and laundry lines."
layout: "see floor plan: roof door D1 in south-west corner; water tower L1 north-west; neon sign L2 north-east facing the street; 1.5 m gap to the neighbouring roof on the east side"
landmarks:
  - "L1 rusted cylindrical water tower on steel legs, NW corner"
  - "L2 pink neon sign frame 'NURU LODGE', back of letters visible from the roof, NE corner"
  - "L3 neighbour roof's tall red-and-white antenna, east, beyond the gap"
  - "L4 laundry lines with white sheets between posts, south side"
light_sources:
  - "L2 neon sign: magenta, flickers every few seconds, lights the north half"
  - "D1 stairwell door: cold fluorescent spill when open"
  - "city glow: sodium-orange haze in the sky to the north"
palette: ["wet black tar #121417", "rust #8A4B2A", "magenta neon #D63A8A", "sodium haze #C98A3B"]
set_dressing:
  - "rusted AC units, cables taped to the parapet"
  - "plastic chairs stacked by D1, an ashtray tin"
  - "puddles in tar dips (night-rain variant)"
identity_lock: >-
  Flat black tar rooftop of a five-storey concrete tenement, low grey parapets, rusted air-conditioning
  units and taped cables, a rusted cylindrical water tower on steel legs, the back of a large pink neon sign
  frame, white sheets on laundry lines, a tall red-and-white antenna on the neighbouring roof.
variants:
  - {time_of_day: night, weather: "steady rain", notes: "puddles, reflections of neon, sheets heavy and wet"}
reference_images: []
```

## Floor plan
```
              N ↑   (street side)
 +----------------------------------+
 | L1 water tower       L2 neon sign|
 |   [AC]  [AC]                     |      gap 1.5 m → L3 antenna roof
 |              [skylight]          |
 D1 roof door      [AC]             |
 +----------------------------------+
   L4 laundry lines (south)
```
````

```yaml
record: prop
id: PR-PARCEL
name: The parcel
description: "Shoebox-sized parcel wrapped in brown paper, clear tape at the seams, white printed label on the top face."
size: "30 x 20 x 12 cm"
materials: ["brown kraft paper", "clear packing tape", "white paper label"]
colors: ["kraft brown #A57A4E", "label white #F2F0EA"]
states:
  - {id: PR-PARCEL:DRY, description: "crisp corners, label legible", from: SC01}
  - {id: PR-PARCEL:WET, description: "darkened soft paper, rounded corners, label ink slightly run", from: SC02}
identity_lock: >-
  A shoebox-sized parcel wrapped in brown kraft paper, clear packing tape along the seams, a white printed
  address label on the top face.
```
