---
artifact: character-bible
id: CH-PIP
version: 2
status: APPROVED
owner: character-designer
depends_on: [screenplay@1, style_bible@1]
updated: 2026-10-19
---
# CH-PIP — Pip, the origami frog

## Evidence from the script
| Scene | What they do | Costume/state needs |
|---|---|---|
| SC01 | stands at the shore with the seed, sees Mo, launches the boat, hops in, paddles | DRY |
| SC02 | boat sinks; she surfaces soggy and limp, holding the seed high; refolds the boat; salutes | SOGGY (limp, darker yellow) then DRY-ish |
| SC03 | second sinking, scowls, refolds, ears flatten | SOGGY then CREASED (extra wrinkles) |
| SC04 | squints up, pops the fluff open over her head | CREASED, slightly damp |
| SC05 | steps out, hands the seed to Mo, looks up, waves | CREASED, drying |

## Design rationale
- Role and personality: determined little helper; stubborn; the quick creases of her refolding are her visible trait.
- Shape language: triangles and clean folds (a paper frog), friendly because the head is wide and the eyes are big and round.
- Silhouette: wide triangular head, crouched wedge body, two long Z-folded back legs; reads clearly in solid black.
- Color anchor: paper yellow #FFC93C, reserved and used by no one else; the puddle is grey-blue so she pops.
- Proportions: about 1.5 heads tall (head very wide, body short). Height 4 cm (toy scale).

```yaml
record: character
id: CH-PIP
name: Pip
role: protagonist, origami frog
age: "ageless paper toy (child-like)"
height_cm: 4
build: "flat folded-paper wedge body, wide triangular head, long Z-folded back legs"
identity_lock: >-
  A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline.
short_lock: "tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs"
face: "flat triangular paper head; two large round black bead eyes on top; thin curved smile; tiny dot nostrils; two small pointed paper corners at the back of the head serve as ears (they flatten when worried)"
hair: "none"
skin: "bright yellow paper #FFC93C with darker golden folds #E0A81F; soggy state is dull mustard #C9962A"
eyes: "two large round glossy black circles with one small white highlight each"
silhouette: "wide triangle head, crouched wedge body, two bent Z-shaped back legs"
distinguishing_features: ["crisp visible crease lines across body and legs", "fold-lines get more numerous as the story goes on (creased state)"]
default_costume: CO-PIP-01
costumes: [CO-PIP-01]
expression_range: ["determined squint", "bright-eyed hope", "smug salute", "soggy scowl", "flat worried ears", "grin", "delight"]
invariants: ["yellow paper #FFC93C", "triangular head", "two large round black eyes", "Z-folded back legs"]
allowed_variation: ["limp and darker when soggy", "extra crease lines after refolding", "eye squint shape"]
reference_images: []
```

```yaml
record: costume
id: CO-PIP-01
character: CH-PIP
name: Yellow paper fold
garments: ["bare folded-paper body, no clothing"]
materials: ["matte yellow origami paper"]
colors: ["#FFC93C yellow", "#E0A81F golden shade", "#C9962A soggy mustard"]
accessories: ["none: the oar is the prop PR-OAR"]
condition_states:
  - {id: DRY, description: "stiff, bright yellow, crisp creases", from: SC01}
  - {id: SOGGY, description: "limp, dull mustard, droopy limbs, beads of water", from: SC02}
  - {id: CREASED, description: "bright again but with extra wrinkles and a slightly crooked left ear/leg fold", from: SC03}
scenes: [SC01, SC02, SC03, SC04, SC05]
identity_lock: >-
  Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners.
short_lock: "matte bright yellow origami paper with crisp creases and a darker golden belly fold"
```

## Sheets
| Sheet | Status | Notes |
|---|---|---|
| Turnaround | spec only | MJ V7, 5 views |
| Expression | spec only | 7 expressions above |
| Pose | spec only | squint-up, parasol hold, refold crouch, salute |

```yaml
sheet_brief:
  id: SHEET-CH-PIP-TURN
  subject: CH-PIP
  layout: "character turnaround on a plain pale grey-blue background, front, three-quarter front, side, three-quarter back, back, one row, same scale, even spacing"
  paste: [CH-PIP identity_lock, CO-PIP-01 identity_lock, STYLE style_lock]
  tool_notes: "Midjourney V7: --ar 16:9; ask for a flat even pose, one row of 5 views; --no clutter is not needed since lock is positive"
```

```yaml
sheet_brief:
  id: SHEET-CH-PIP-EXPR
  subject: CH-PIP
  layout: "2 rows of 4 head-and-shoulder expressions on plain background"
  expressions: ["determined squint", "bright-eyed hope", "smug salute", "soggy scowl", "flat worried ears", "grin", "delight"]
  paste: [CH-PIP identity_lock, CO-PIP-01 identity_lock, STYLE style_lock]
```

## Reference image review log
| Image | Verdict | Notes |
|---|---|---|
| none yet | n/a | no generation budget |

## Handoff
- Produced: CH-PIP@2, CO-PIP-01 (REVIEW)
- Built from: screenplay@1, style_bible@1
- Open items: ASSUMPTION: Pip has no clothes; her "costume" is the paper itself. Soggy and creased states drive continuity.
- Next: script-supervisor (states), animation-director (1.5 heads proportions)
