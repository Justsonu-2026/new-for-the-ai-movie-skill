---
artifact: props
id: props
version: 1
status: APPROVED
owner: production-designer
depends_on: [screenplay@1, style_bible@1, CH-LAN@1, CH-MACAQUE@1, CH-AHMA@1]
updated: 2026-10-19
---
# Prop Registry

| ID | Name | Owner | Scenes | Hero? | States |
|---|---|---|---|---|---|
| PR-TIN | Ah Ma's recipe tin | CH-AHMA / CH-LAN | SC01-SC04 | yes | SEALED, OPEN, LID-ON |
| PR-SAUCER-STALL | Stall saucer | CH-LAN | SC01, SC04 | yes | UPRIGHT, FACEDOWN, FACEUP |
| PR-SAUCER-ALLEY | Alley saucer (matching chip) | CH-AHMA | SC03 | yes | EMPTY, FRUIT, EATEN |
| PR-PHOTO | Framed photo of Ah Ma | CH-LAN | SC01, SC04 | yes | STANDING |
| PR-SPOON | Wooden spoon | CH-AHMA | SC03 | no | IN-TIN |
| PR-CARD | Recipe card | CH-AHMA | SC03 | yes | FOLDED |
| PR-FRUIT | Twist of dried fruit | CH-AHMA | SC03 | no | TWISTED, POURED |
| PR-POT | Noodle stockpot | CH-LAN | SC01 | no | BOILING, BOIL-OVER |
| PR-LADLE | Ladle | CH-LAN | SC01 | no | HELD, ABANDONED |
| PR-LANTERN-ALLEY | Alley paper lantern | set | SC03 | no | LIT |
| PR-STOOL | Alley stool | set | SC03 | yes | STANDING |
| PR-CART | Hand cart | set | SC02 | no | PARKED |
| PR-CRATES | Crate stacks | set | SC02 | no | STACKED |

```yaml
record: prop
id: PR-TIN
name: "Ah Ma's recipe tin"
description: "Round dented tin with a friction-fit lid. Dark green lacquer worn at the rim and corners, small dents on the side. Two bright worn brass spots on the lid, each about 2.5 cm across and 5 cm apart, where fingers have rubbed through the lacquer. A faint dust line seals the rim while closed."
size: "16 cm diameter x 10 cm tall"
materials: ["tinplate", "dark green lacquer", "bare brass-coloured metal at worn spots"]
colors: ["lacquer dark green #2F3A33", "worn brass spots #C9A24B", "inside pale tin #B9B5AB"]
owner: CH-AHMA
scenes: [SC01, SC02, SC03, SC04]
states:
  - {id: PR-TIN:SEALED, description: "Lid on, rim dusty, sealed shut; rattles softly (soft contents) when carried", from: SC01, cause: "start"}
  - {id: PR-TIN:OPEN, description: "Lid off in Lan's hands, contents visible: folded card, wooden spoon, paper twist of dried fruit", from: SC03, cause: "Lan opens it with both thumbs"}
  - {id: PR-TIN:LID-ON, description: "Contents emptied of the fruit, lid set back on loosely and slightly offset, rim gap visible, no longer sealed", from: SC03, cause: "Lan sets the lid back before knocking"}
identity_lock: >-
  A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle.
reference_images: []
```

```yaml
record: prop
id: PR-SAUCER-STALL
name: "Stall saucer"
description: "Small cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent-shaped chip in the rim, about 1.2 cm wide, at the 3 o'clock position when upright."
size: "12 cm diameter x 1.5 cm tall"
materials: ["glazed ceramic"]
colors: ["cream glaze #E8DCC4", "rim line blue #31435C"]
owner: CH-LAN
scenes: [SC01, SC04]
states:
  - {id: PR-SAUCER-STALL:UPRIGHT, description: "Standing upright on the shelf beside the photo", from: SC01, cause: "start"}
  - {id: PR-SAUCER-STALL:FACEDOWN, description: "Turned face-down on the shelf, unglazed foot ring and blank underside visible", from: SC01, cause: "Lan turns it with her hand, irritated"}
  - {id: PR-SAUCER-STALL:FACEUP, description: "Face-up, set on the counter edge below the wire", from: SC04, cause: "Lan turns it face-up for the macaque"}
identity_lock: >-
  A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o'clock position. Plain, no pattern, no writing.
reference_images: []
```

```yaml
record: prop
id: PR-SAUCER-ALLEY
name: "Alley saucer"
description: "Twin of the stall saucer: same cream glaze, blue rim line and crescent chip at 3 o'clock, but older, with a hairline crack and darker stains from years of use."
size: "12 cm diameter x 1.5 cm tall"
materials: ["glazed ceramic"]
colors: ["cream glaze, aged #DDCFB3", "rim line blue #31435C"]
owner: CH-AHMA
scenes: [SC03]
states:
  - {id: PR-SAUCER-ALLEY:EMPTY, description: "Upright on the stool seat, empty, chip at 3 o'clock facing the camera side", from: SC03, cause: "start"}
  - {id: PR-SAUCER-ALLEY:FRUIT, description: "Dried fruit pieces poured onto it", from: SC03, cause: "Lan shakes the twist onto it"}
  - {id: PR-SAUCER-ALLEY:EATEN, description: "Fruit gone or nearly gone", from: SC03, cause: "macaque eats"}
identity_lock: >-
  A small 12 cm cream-glazed ceramic saucer, slightly aged, with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o'clock position, matching the stall saucer. Plain, no pattern, no writing.
reference_images: []
```

```yaml
record: prop
id: PR-PHOTO
name: "Framed photo of Ah Ma"
description: "Small standing photo in a plain dark-wood frame with a thin glass front. A faded color print of Ah Ma mid-laugh with one hand tapping the tin. Easel back keeps it upright on the shelf."
size: "13 x 18 cm photo, frame 1.5 cm wide"
materials: ["dark wood", "glass", "faded paper print"]
colors: ["frame dark brown #3A2A22", "print faded warm tones"]
owner: CH-LAN
scenes: [SC01, SC04]
states:
  - {id: PR-PHOTO:STANDING, description: "Standing on the shelf between the saucer and the tin, facing the lane", from: SC01, cause: "start"}
identity_lock: >-
  A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption.
reference_images: []
```

```yaml
record: prop
id: PR-SPOON
name: "Wooden spoon"
description: "Small hand-carved wooden cooking spoon, honey-brown, darkened bowl from years of use, short handle."
size: "14 cm long"
materials: ["hardwood"]
colors: ["honey wood #B07D45", "dark bowl #5C3F25"]
owner: CH-AHMA
scenes: [SC03]
states:
  - {id: PR-SPOON:IN-TIN, description: "Lying diagonally on top of the folded card in the open tin", from: SC03, cause: "revealed when the tin opens"}
identity_lock: >-
  A small 14 cm hand-carved honey-brown hardwood cooking spoon with a rounded bowl darkened by years of use and a short plain handle, smooth worn surface. No decoration, no carving, no writing.
reference_images: []
```

```yaml
record: prop
id: PR-CARD
name: "Recipe card"
description: "Stiff cream index-style card folded in thirds so no writing shows; soft worn edges, faint brown fingerprint stains."
size: "10 x 6 cm folded"
materials: ["card stock"]
colors: ["cream #E6DAC0", "stain brown #8B6B45"]
owner: CH-AHMA
scenes: [SC03]
states:
  - {id: PR-CARD:FOLDED, description: "Folded in thirds, outside blank, lying at the bottom of the tin", from: SC03, cause: "revealed when the tin opens"}
identity_lock: >-
  A stiff cream card folded in thirds into a 10 by 6 cm rectangle, soft worn edges, faint brown fingerprint stains, the outside completely blank with no writing, no lines and no printing visible.
reference_images: []
```
VFX flag: the card must stay folded or out of focus; never show handwriting.

```yaml
record: prop
id: PR-FRUIT
name: "Twist of dried fruit"
description: "Waxed brown paper twisted shut at the top around about a dozen dried fruit slices, amber-brown and chewy."
size: "twist 8 cm tall; slices about 3 cm"
materials: ["waxed paper", "dried fruit"]
colors: ["paper brown #9A7448", "fruit amber-brown #A8602B"]
owner: CH-AHMA
scenes: [SC03]
states:
  - {id: PR-FRUIT:TWISTED, description: "Closed paper twist in the tin", from: SC03, cause: "revealed when the tin opens"}
  - {id: PR-FRUIT:POURED, description: "Twist opened, slices on the alley saucer", from: SC03, cause: "Lan shakes it onto the saucer"}
identity_lock: >-
  A small 8 cm twist of waxed brown paper, closed at the top, holding about a dozen chewy amber-brown dried fruit slices, each about 3 cm wide, that spill out when opened. Plain paper, no printing.
reference_images: []
```

```yaml
record: prop
id: PR-POT
name: "Noodle stockpot"
description: "Wide dented aluminium stockpot with soot on the base and two riveted handles, standing on a gas burner at the west end of the counter."
size: "40 cm diameter x 30 cm tall"
materials: ["aluminium"]
colors: ["dull aluminium #A3A5A5", "soot #2A2523"]
owner: CH-LAN
scenes: [SC01]
states:
  - {id: PR-POT:BOILING, description: "Rolling boil, steam rising, lid off", from: SC01, cause: "start"}
  - {id: PR-POT:BOIL-OVER, description: "Foamy broth rises over the rim and spills down the sides, heavy steam", from: SC01, cause: "Lan leaves it unattended while chasing"}
identity_lock: >-
  A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label.
reference_images: []
```

```yaml
record: prop
id: PR-LADLE
name: "Ladle"
description: "Long steel ladle with a wooden handle."
size: "35 cm long"
materials: ["steel", "wood"]
colors: ["steel #B5B8B8", "handle brown #6B4A2E"]
owner: CH-LAN
scenes: [SC01]
states:
  - {id: PR-LADLE:HELD, description: "In Lan's hand at the pot", from: SC01, cause: "start"}
  - {id: PR-LADLE:ABANDONED, description: "Dropped on the counter beside the pot as Lan runs", from: SC01, cause: "Lan abandons it"}
identity_lock: >-
  A 35 cm long steel ladle with a deep round bowl, slightly dented, and a plain straight brown wooden handle with a hole at the end. No decoration, no writing.
reference_images: []
```

```yaml
record: prop
id: PR-LANTERN-ALLEY
name: "Alley paper lantern"
description: "Round paper lantern with visible thin bamboo ribs, hung from an iron wall bracket by a short wire; a single warm bulb inside."
size: "30 cm diameter"
materials: ["paper", "bamboo", "iron"]
colors: ["amber paper #E0963A", "iron black #1E1C1B"]
owner: set
scenes: [SC03]
states:
  - {id: PR-LANTERN-ALLEY:LIT, description: "Glowing warm amber, steady, no flicker", from: SC03, cause: "start"}
identity_lock: >-
  A round 30 cm amber paper lantern with thin bamboo ribs, hung from an iron wall bracket by a short wire. Plain, no characters, no pattern.
reference_images: []
```

```yaml
record: prop
id: PR-STOOL
name: "Alley stool"
description: "Low four-legged wooden stool, seat dished by years of sitting, legs slightly splayed, dark honey-brown with pale wear marks."
size: "30 cm wide x 28 cm tall"
materials: ["hardwood"]
colors: ["honey-brown #8A5A33", "wear pale #C29C70"]
owner: set
scenes: [SC03]
states:
  - {id: PR-STOOL:STANDING, description: "On the alley centre line with the alley saucer on its seat", from: SC03, cause: "start"}
identity_lock: >-
  A low four-legged hardwood stool, 28 cm tall, seat worn into a shallow dish, legs slightly splayed, dark honey-brown with pale wear marks. Plain, no paint.
reference_images: []
```

```yaml
record: prop
id: PR-CART
name: "Hand cart"
description: "Two-wheel wooden hand cart with a flat bed, two long handles and bagged goods under a plain cloth. The bed sits 40 cm above the ground, leaving a gap the macaque can slip under."
size: "120 x 70 cm bed, 90 cm high at the handles"
materials: ["wood", "iron", "rubber tyres"]
colors: ["weathered wood #6F5A44", "cloth sand #B7A98E"]
owner: set
scenes: [SC02]
states:
  - {id: PR-CART:PARKED, description: "Blocking the lane across its width", from: SC02, cause: "start"}
identity_lock: >-
  A two-wheel wooden hand cart, 120 by 70 cm flat bed raised 40 cm off the ground, two long handles, bagged goods under a plain sand-coloured cloth. No writing, no painted marks.
reference_images: []
```

```yaml
record: prop
id: PR-CRATES
name: "Crate stacks"
description: "Two stacks of slatted wooden crates: one three high (90 cm), one four high (120 cm). The top front-right edge of the taller stack has a rough splintered slat (the source of Lan's graze)."
size: "each crate 50 x 35 x 30 cm"
materials: ["pale weathered wood"]
colors: ["pale wood #B79B73"]
owner: set
scenes: [SC02]
states:
  - {id: PR-CRATES:STACKED, description: "Both stacks standing in the lane", from: SC02, cause: "start"}
identity_lock: >-
  Slatted pale wooden crates, each 50 by 35 by 30 cm, in one stack three high and one four high, the taller stack with a rough splintered slat at its top edge. No stencils, no writing.
reference_images: []
```

## Set dressing vs props
Set dressing only (no record): market bowls and racks, produce, string lights, folding round table with grey cloth, bucket and rope in the alley, other stalls' goods, wire of lanterns across the lane (red cluster above Lan's stall), drainpipe.

## Prop sheet briefs
```yaml
sheet_brief: TIN-SHEET
type: prop
subject: PR-TIN
layout: "neutral grey ground; top view with the two brass spots, front, side, and an open view showing folded card, spoon and paper twist; scale rule of 16 cm"
content: "<PR-TIN identity_lock>"
states: [SEALED, OPEN, LID-ON]
```
```yaml
sheet_brief: SAUCERS-SHEET
type: prop
subject: PR-SAUCER-STALL and PR-SAUCER-ALLEY
layout: "side by side: stall saucer upright, face-down, face-up; alley saucer upright; chip at 3 o'clock visible; neutral grey ground; scale rule of 12 cm"
content: "<PR-SAUCER-STALL identity_lock> <PR-SAUCER-ALLEY identity_lock>"
notes: "The two saucers must be clearly twins; same chip shape and position."
```
```yaml
sheet_brief: SHELF-GROUP
type: prop
subject: PR-PHOTO + PR-TIN + PR-SAUCER-STALL
layout: "front view of the shelf group: from west to east saucer, photo, tin on a plank shelf, blank wall behind; photo face shows a laughing elderly woman without writing"
```

## Handoff
- Produced: props@1 (REVIEW): 13 props
- For script-supervisor: state lists above. Shelf order west to east: saucer, photo, tin. SC03 ends with the tin LID-ON; SC04 "open tin" means the lid is on loosely and offset (unsealed) since the script sets the lid back in SC03. Pot is not shown in SC04 (ASSUMPTION: removed or lidded).
- For vfx-supervisor: recipe card never readable; photo face holds in close-ups; pot boil-over FX; macaque hands on tin.
- Open items: ASSUMPTION: tin colour dark green and sizes as above (user gave 16 x 10 cm). ASSUMPTION: saucer chip at 3 o'clock.
- Conflicts: none
- Next: cinematographer, script-supervisor, prompt engineers
