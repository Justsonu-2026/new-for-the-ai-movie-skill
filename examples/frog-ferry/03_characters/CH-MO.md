---
artifact: character-bible
id: CH-MO
version: 1
status: APPROVED
owner: character-designer
depends_on: [screenplay@1, style_bible@1]
updated: 2026-10-19
---
# CH-MO — Mo, the snail

## Evidence from the script
| Scene | What they do | Costume/state needs |
|---|---|---|
| SC01 | sits by bare soil, feelers droop (seen far away, small) | DROOP |
| SC05 | feelers lift, takes the seed, plants it, feelers wave | PERK |

## Design rationale
- Role and personality: shy, gentle, slow; feelers show mood (droop alone, perk with company).
- Shape language: circles and soft curves; round shell, round body.
- Silhouette: big round shell on a low oval body with two thin feelers.
- Color anchor: shell coral #F2866B, shared with no one.
- Proportions: shell as tall as the body is long; height 4 cm (toy scale), about 2 heads tall.

```yaml
record: character
id: CH-MO
name: Mo
role: receiver, snail
age: "child-like"
height_cm: 4
build: "low soft oval body with a large round shell on its back"
identity_lock: >-
  A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline.
short_lock: "small tan snail with a big round soft-coral spiral shell and two thin feelers with round dot eyes"
face: "tiny curved smile under the feeler base, round cheeks"
hair: "none"
skin: "smooth warm tan #D9B88F with slightly lighter belly"
eyes: "two small round black dots at the tips of the feelers"
silhouette: "big round shell on a low oval body with two thin upright feelers"
distinguishing_features: ["soft-coral spiral shell", "feelers that droop or lift to show mood"]
default_costume: CO-MO-01
costumes: [CO-MO-01]
expression_range: ["drooping lonely", "feelers perking up", "happy wave", "curious head tilt"]
invariants: ["coral shell with spiral", "tan body", "two feelers with dot eyes"]
allowed_variation: ["feelers droopy or upright", "head tilt"]
reference_images: []
```

```yaml
record: costume
id: CO-MO-01
character: CH-MO
name: Coral spiral shell
garments: ["spiral shell worn on the back"]
materials: ["smooth glossy painted shell"]
colors: ["#F2866B coral", "#D96A4F darker swirl"]
accessories: []
condition_states:
  - {id: DRY, description: "plain coral shell, slightly damp shine from rain", from: SC01}
scenes: [SC01, SC05]
identity_lock: >-
  Large round spiral shell in soft coral #F2866B with one darker coral swirl line, flat cel color with a single hard shadow tone and a white highlight dot, thin dark-teal outline.
short_lock: "big round soft-coral spiral shell with one darker coral swirl line and a white highlight dot"
```

## Sheets
| Sheet | Status | Notes |
|---|---|---|
| Turnaround | spec only | MJ V7 |
| Expression | spec only | 4 expressions |

```yaml
sheet_brief:
  id: SHEET-CH-MO-TURN
  subject: CH-MO
  layout: "character turnaround on plain pale grey-blue background, front, three-quarter, side, three-quarter back, back"
  paste: [CH-MO identity_lock, CO-MO-01 identity_lock, STYLE style_lock]
```

## Reference image review log
| Image | Verdict | Notes |
|---|---|---|
| none yet | n/a | no generation budget |

## Handoff
- Produced: CH-MO@1, CO-MO-01 (REVIEW)
- Built from: screenplay@1, style_bible@1
- Open items: none
- Next: production-designer
