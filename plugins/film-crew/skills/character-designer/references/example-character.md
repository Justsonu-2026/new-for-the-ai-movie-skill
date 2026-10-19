# Example Character File

A complete, approved-quality character file (abridged sheet briefs). Use as a model for depth and format.

## Contents
- Header and design rationale
- `record: character` (CH-MAYA)
- `record: costume` (CO-MAYA-01) with condition states
- Sheets table and turnaround brief
- Handoff

````markdown
---
artifact: character-bible
id: CH-MAYA
version: 1
status: REVIEW
owner: character-designer
depends_on: [screenplay@2, style_bible@1]
updated: 2026-10-19
---
# CH-MAYA — Maya Okello

## Design rationale
- Role: protagonist, 17, night courier; proud, quick, refuses help.
- Shape language: triangles (sharp, restless) softened by a round face (she is still a kid).
- Silhouette: oversized mid-thigh raincoat with hood + cross-body bag = a triangle with a bump at the hip.
- Color anchor: rust-orange raincoat (#C4572A); no other character wears orange.
- Proportions: realistic, 7.5 heads; slight and wiry; walks fast, shoulders forward.

```yaml
record: character
id: CH-MAYA
name: Maya Okello
role: protagonist
age: 17
height_cm: 160
build: "slight and wiry, narrow shoulders, long legs"
identity_lock: >-
  A 17-year-old East African girl, slight and wiry, about 160 cm, oval face with high cheekbones, deep
  brown skin with warm undertones, large dark-brown almond eyes, thick straight brows, a small scar through
  the left eyebrow, short tight black curls cropped close at the sides and longer on top, small silver hoop
  in the right ear only.
face: "oval, high cheekbones, small rounded chin, full lips, straight nose with a rounded tip"
hair: "short tight black (#141012) curls, cropped close at sides, 4-5 cm on top; flattens when wet"
skin: "deep brown (#5A3825) with warm undertones; light freckles none"
eyes: "large almond, dark brown (#2B1A10)"
silhouette: "triangle: oversized raincoat flaring from shoulders, bag bump at left hip"
distinguishing_features: ["scar through LEFT eyebrow, 1 cm, vertical", "silver hoop RIGHT ear only"]
default_costume: CO-MAYA-01
costumes: [CO-MAYA-01]
expression_range: [neutral, determined, suspicious, startled, stunned, quiet relief]
invariants: ["scar side", "earring side", "hair length", "no other jewelry"]
allowed_variation: ["hair flattened and darker when wet", "hood up or down per continuity"]
reference_images:
  - {path: assets/characters/CH-MAYA_turnaround_v1.png, status: PENDING}
  - {path: assets/characters/CH-MAYA_expressions_v1.png, status: PENDING}
```

```yaml
record: costume
id: CO-MAYA-01
character: CH-MAYA
name: Night courier
garments:
  - "outer: oversized rust-orange waxed-cotton raincoat, mid-thigh, attached hood, black reflective strip across the back at shoulder-blade height, press-stud front"
  - "mid: charcoal cotton hoodie, hood worn under the raincoat"
  - "lower: black cargo trousers, side pockets"
  - "feet: scuffed white canvas high-top sneakers, black laces"
materials: ["waxed cotton (slight sheen)", "brushed cotton", "ripstop", "canvas"]
colors: ["rust-orange #C4572A", "charcoal #3A3A3C", "black #121212", "off-white #E8E4DA", "mustard #D9A520"]
accessories: ["mustard-yellow canvas messenger bag, cross-body, rests on the LEFT hip"]
condition_states:
  - {id: DRY, description: "matte waxed sheen, fabric holds its shape", from: SC01}
  - {id: SOAKED, description: "darker orange, glossy, clinging at shoulders; trouser hems dark", from: SC02}
scenes: [SC01, SC02, SC03, SC04]
identity_lock: >-
  Oversized rust-orange waxed-cotton courier raincoat reaching mid-thigh, black reflective strip across the
  back, hood attached; charcoal hoodie underneath; black cargo trousers; scuffed white high-top sneakers;
  mustard-yellow canvas messenger bag worn cross-body on the left hip.
```

## Sheets
| Sheet | Status | Brief |
|---|---|---|
| Turnaround in CO-MAYA-01 (DRY) | requested | five views, see brief below |
| Expression sheet (6) | requested | neutral, determined, suspicious, startled, stunned, quiet relief |
| Pose sheet (3) | requested | vaulting railing (SC02), hiding parcel behind back (SC03), sitting on stairs (SC04) |

```yaml
sheet: turnaround
character: CH-MAYA
costume: CO-MAYA-01
layout: "five full-body views left to right: front, three-quarter front, side, three-quarter back, back"
content: "<CH-MAYA identity_lock> <CO-MAYA-01 identity_lock>"
pose: "relaxed neutral stance, arms slightly away from body, neutral expression, mouth closed"
background: "plain light grey, no shadows"
lighting: "flat even studio light"
style: "<STYLE style_lock>"
must_match: ["scar through LEFT eyebrow", "hoop in RIGHT ear only", "bag on LEFT hip", "strip across back"]
```

## Handoff
- Produced: CH-MAYA@1, CO-MAYA-01 (REVIEW)
- For script-supervisor: CO-MAYA-01 states DRY (SC01), SOAKED (from SC02)
- For director/DP: 160 cm, shortest of the cast
- Next: user approval → image-prompt-engineer turnaround prompts
````
