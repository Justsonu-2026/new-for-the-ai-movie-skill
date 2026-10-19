---
artifact: character-bible
id: CH-MACAQUE
version: 1
status: APPROVED
owner: character-designer
depends_on: [screenplay@1, style_bible@1, story@1]
updated: 2026-10-19
---
# CH-MACAQUE — The macaque

## Evidence from the script
| Scene | What it does | Costume/state needs |
|---|---|---|
| SC01 | Sits very still on a lantern wire watching the tin; drops onto the shelf; grabs the tin with both hands; runs along the counter with it against its chest | Notched left ear must be visible in a wide shot; hands wrap a round tin |
| SC02 | Dives under a table, runs low and straight, slips under a cart; rattling tin | Runs on four limbs with the tin held in one arm or hands; low horizontal silhouette |
| SC03 | Sits beside the tin on a stool; taps worn spots twice with one palm; looks at Lan; does not flinch; shuffles forward and eats dried fruit | Calm posture; one palm tapping; eating with fingers |
| SC04 | On the lantern wire, tilts its head, drops to the saucer | Head tilt; short drop |

## Design rationale
- Role and personality: a wild adult long-tailed macaque that is a familiar sight in the market. It is patient, deliberate and gentle, not cute or comical. It reads as a creature answering a habit, not a thief.
- Shape language: round head, low sturdy body, long curved tail; compact horizontal silhouette that is opposite to Lan's upright A-shape.
- Silhouette: low, long, tail curling in a question-mark shape; at rest, hunched with the tail hanging; the notch in the left ear shows in head-on views.
- Color anchor (hex): olive-brown fur #7A6A4F (reserved by style_bible@1). Distinct from every other color in the frame.
- Proportions: body length about 45 cm (head to rump), tail about 50 cm, about 4 kg; sits about 35 cm tall. Realistic wild animal proportions, no anthropomorphising.
- Gender: unspecified; the script calls it "it". ASSUMPTION: adult, grey-flecked muzzle to show age and familiarity.

```yaml
record: character
id: CH-MACAQUE
name: "The macaque"
role: "the 'thief'; a wild long-tailed macaque that Ah Ma used to feed"
age: "adult, about 8-10 years old"
height_cm: 35
build: "compact and sturdy, long arms, slim waist, body about 45 cm plus tail about 50 cm"
identity_lock: >-
  A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer's right when it faces the camera). Dark grey-pink hands. No collar, no clothing.
face: "bare pinkish-grey face (#B89A8A), flat nose, heavy brow ridge, grey-flecked muzzle, pale whisker tufts at the cheeks, calm watchful expression"
hair: "olive-brown fur (#7A6A4F), crown fur swept back, paler cream-grey (#CBBFA4) on chest, belly and inner limbs"
skin: "bare skin of face and palms pinkish grey-brown (#A78578), darker grey-brown palms"
eyes: "amber-brown (#7B4F2A), round, steady, wet highlight"
silhouette: "low, long, horizontal body with a long tail curving in a question mark; round head with a visible ear notch"
distinguishing_features:
  - "Small V-shaped notch in the top rim of its own LEFT ear (viewer's RIGHT when it faces camera, viewer's LEFT when seen from behind); this is the identification mark"
  - "Grey-flecked muzzle"
  - "Tail has a slight kink about 10 cm from the tip"
default_costume: CO-MACAQUE-01
costumes: [CO-MACAQUE-01]
expression_range: [watchful-still, head-tilt, intent-running, calm-looking-at-Lan, eating-content]
invariants:
  - "Notch in its own LEFT ear, always the same ear"
  - "Olive-brown fur, cream-grey underparts, grey-flecked muzzle"
  - "Single animal, never two macaques in a frame"
  - "No collar, clothing or accessories; wild, untrained, not magical"
allowed_variation:
  - "Fur slightly wet-looking or dusty in SC02-SC03"
  - "Crouch, run, sit, stand on hind legs briefly"
reference_images: []
```

```yaml
record: costume
id: CO-MACAQUE-01
character: CH-MACAQUE
name: "Natural coat"
garments: ["none; natural fur only"]
materials: ["fur"]
colors: ["olive-brown #7A6A4F", "cream-grey underparts #CBBFA4", "bare face and palms #B89A8A"]
accessories: []
condition_states:
  - {id: BASE, description: "Dry, slightly dusty fur, alert, notched left ear visible", from: SC01}
scenes: [SC01, SC02, SC03, SC04]
identity_lock: >-
  Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
```

## Sheets
| Sheet | Status | Notes |
|---|---|---|
| Turnaround | spec written, not generated | Standing on all fours on a plain surface: front, three-quarter, side, back; a close-up of the head from the front with the notched LEFT ear (viewer's right) |
| Expression | spec written, not generated | 5 head studies listed above |
| Pose | spec written, not generated | Crouched on a wire, running low, sitting beside a tin, one palm tapping, head tilt, eating with both hands |

```yaml
sheet_brief: MACAQUE-TURNAROUND
type: turnaround
subject: CH-MACAQUE, CO-MACAQUE-01
layout: "4 full-body views on plain grey: front, three-quarter, side, back, all on four limbs, same scale, plus one front head close-up that clearly shows the V-notch in its own LEFT ear (viewer's right)"
content: "<CH-MACAQUE identity_lock>"
notes: "Single macaque, no props. Realistic wildlife look, not a cartoon."
```
```yaml
sheet_brief: MACAQUE-POSES
type: pose
subject: CH-MACAQUE
layout: "6 poses: sitting still on a thin wire; running low with a round tin clutched against the chest; sitting beside a tin on a stool; one palm raised tapping the lid; head tilted watching; eating dried fruit from a saucer"
content: "<CH-MACAQUE identity_lock>"
notes: "Tin size reference to be supplied by production-designer; until then draw a plain round tin about 16 cm across."
```

## Reference image review log
| Image | Verdict | Notes |
|---|---|---|

Reference-image checklist: notch on the same ear in every view; tail kink present; single animal; no collar or clothing; hands five-fingered and animal-like, not human-like; face grey-pink with flecked muzzle; fur color stays olive-brown (not golden or grey).

## Handoff
- Produced: CH-MACAQUE@1, CO-MACAQUE-01@1 (status REVIEW)
- Built from: screenplay@1 LOCKED, story@1, style_bible@1 (REVIEW)
- Open items: ASSUMPTION: "notched left ear" means the animal's own left ear (viewer's right when facing camera); user to confirm. ASSUMPTION: animal is wild-looking, adult, sex unspecified, grey-flecked muzzle. PROPOSAL: production-designer fixes the tin to about 16 cm diameter x 10 cm tall so the macaque can hold it to its chest.
- Conflicts: none
- Next: script-supervisor (mirror rule for the notched ear), film-director (low horizontal silhouette), vfx-supervisor (animal hands on tin)
