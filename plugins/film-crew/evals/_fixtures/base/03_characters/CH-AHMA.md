---
artifact: character-bible
id: CH-AHMA
version: 1
status: APPROVED
owner: character-designer
depends_on: [screenplay@1, style_bible@1, story@1]
updated: 2026-10-19
---
# CH-AHMA — Ah Ma (Lan's late grandmother)

## Evidence from the script
| Scene | What they do | Costume/state needs |
|---|---|---|
| SC01 | Appears only in the framed photo on the shelf beside the tin: mid-laugh, one hand tapping the same tin | Face readable in a close shot without any text; photo must look like a real, slightly faded print |

She never speaks and never appears in person. This file designs her as she looks in the photograph; CH-AHMA is a "photo-only" character. The framed photo prop is owned by the production-designer.

## Design rationale
- Role and personality: warm, amused, patient; the opposite of Lan's numbness. Her laugh is the emotional counterweight in the film.
- Shape language: round, soft, relaxed shapes; open posture.
- Silhouette: small round shoulders and a low silver bun, seen only in head-and-shoulders.
- Color anchor (hex): soft pale blue-grey blouse #A9B6BE, which does not clash with the amber background and does not touch Lan's indigo-grey.
- Proportions: head and shoulders only; about 150 cm if ever described.

```yaml
record: character
id: CH-AHMA
name: "Ah Ma"
role: "Lan's late grandmother, seen only in a framed photograph"
age: "mid 70s"
height_cm: 150
build: "small, round-shouldered, sturdy"
identity_lock: >-
  Ah Ma, a Southeast Asian woman in her mid 70s, round face with deep laugh lines, mid-laugh with eyes crinkled nearly shut and a wide open smile, silver-white hair pulled back in a low bun, warm light-tan weathered skin, pale blue-grey collarless cotton blouse. Her right hand taps the lid of a dented round tin. Faded color photograph look.
face: "round face, deep laugh lines at eyes and mouth, high soft cheeks, small nose, wide open smile with a few gaps in the teeth, eyes crinkled nearly shut"
hair: "silver-white (#D9D6D0), pulled back in a low bun, flyaways at the temples"
skin: "light-tan weathered (#C79C78), age spots on hands, lines"
eyes: "dark brown, almost closed in the laugh"
silhouette: "small and round, low bun, shoulders curved forward over the tin"
distinguishing_features:
  - "Right hand tapping the tin lid, fingers relaxed and slightly curled"
  - "Thin plain gold hoop earrings; no other jewelry"
default_costume: CO-AHMA-01
costumes: [CO-AHMA-01]
expression_range: [mid-laugh]
invariants:
  - "Mid-laugh expression with eyes crinkled shut"
  - "Right hand on the dented tin lid"
  - "Faded color photo, no text or date stamp on it"
allowed_variation:
  - "Photo crop: head and shoulders or waist up"
reference_images: []
```

```yaml
record: costume
id: CO-AHMA-01
character: CH-AHMA
name: "Photo blouse"
garments: ["pale blue-grey collarless cotton blouse, short sleeves"]
materials: ["soft washed cotton"]
colors: ["blouse pale blue-grey #A9B6BE"]
accessories: ["thin plain gold hoop earrings"]
condition_states:
  - {id: PHOTO, description: "As seen in the faded framed photograph, never changes", from: SC01}
scenes: [SC01]
identity_lock: >-
  Pale blue-grey collarless short-sleeve washed cotton blouse, thin plain gold hoop earrings, silver-white hair pulled back in a low bun, shown in a faded print. No patterns, no text, no badge, no other jewelry.
```

## Sheets
| Sheet | Status | Notes |
|---|---|---|
| Photo portrait | spec written, not generated | One head-and-shoulders portrait as a faded print, mid-laugh, hand tapping the tin |
| Turnaround | not required | Appears only in the photo |

```yaml
sheet_brief: AHMA-PHOTO
type: portrait
subject: CH-AHMA, CO-AHMA-01
layout: "single head-and-shoulders portrait, flat front lighting, faded warm color print look with soft grain, plain wall behind, no frame; tin lid and her right hand visible at the bottom of the frame"
content: "<CH-AHMA identity_lock> <CO-AHMA-01 identity_lock>"
notes: "No writing, no date stamp. The tin must match the production-designer's tin sheet once approved."
```

## Reference image review log
| Image | Verdict | Notes |
|---|---|---|

Reference-image checklist: laughing, eyes crinkled; low silver bun; right hand on the tin; faded print look; no text; she does not resemble Lan so closely that the photo reads as Lan.

## Handoff
- Produced: CH-AHMA@1, CO-AHMA-01@1 (status REVIEW)
- Built from: screenplay@1 LOCKED, story@1, style_bible@1 (REVIEW)
- Open items: ASSUMPTION: age mid 70s ("70s" in the script); the photo uses one still of her. ASSUMPTION: a family resemblance to Lan (round face, same brow) is hinted but not identical.
- Conflicts: none
- Next: production-designer (frame and photo-print look), vfx-supervisor (photo is a small, mostly out-of-focus prop, but her face must hold in SC01 closeups)
