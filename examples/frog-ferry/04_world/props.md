---
artifact: props
id: props
version: 1
status: APPROVED
owner: production-designer
depends_on: [screenplay@1, style_bible@1]
updated: 2026-10-19
---
# Prop Registry

| ID | Name | Owner | Scenes | Hero? | States |
|---|---|---|---|---|---|
| PR-BOAT | Paper boat | CH-PIP | SC01-SC05 | yes | NEW, FLAT, REFOLDED, CREASED |
| PR-SEED | Dandelion seed | CH-PIP | SC01-SC05 | yes | CLOSED, OPEN, PLANTED |
| PR-OAR | Folded paper oar | CH-PIP | SC01-SC03 | no | HELD, STOWED |
| PR-SPROUT | Green sprout | CH-MO | SC05 | no | HIDDEN, SPROUT |

```yaml
record: prop
id: PR-BOAT
name: Paper boat
description: "A simple folded paper boat with a flat bottom, two pointed ends and a straight side wall, large enough for Pip to sit in."
size: "5 x 3 x 2 cm"
materials: ["matte cream origami paper"]
colors: ["#F4EBD8 cream", "#D9CDB4 fold shade", "#B7C2C9 damp grey when wet"]
owner: CH-PIP
scenes: [SC01, SC02, SC03, SC04, SC05]
states:
  - {id: PR-BOAT:NEW, description: "crisp, symmetrical, cream, dry", from: SC01, cause: "start"}
  - {id: PR-BOAT:FLAT, description: "folded flat and sunk just under the surface, soggy", from: SC02, cause: "raindrop hit"}
  - {id: PR-BOAT:REFOLDED, description: "popped back into shape, slightly damp, grey-cream", from: SC02, cause: "Pip refolds it"}
  - {id: PR-BOAT:CREASED, description: "lopsided, one side wall lower, extra crease lines, damp grey-cream", from: SC03, cause: "second refold done in a flash"}
identity_lock: >-
  A small folded paper boat in matte cream paper with a flat bottom, two pointed ends, straight side walls and crisp crease lines, flat cel color with one darker cream shade tone and a thin dark-teal outline.
short_lock: "small cream folded paper boat with pointed ends and crisp creases"
reference_images: []
```

```yaml
record: prop
id: PR-SEED
name: Dandelion seed
description: "A single dandelion seed as tall as Pip: a thin pale stem with a small pointed seed at the bottom and a round feathery white fluff at the top. The fluff can fold shut into a ball or open out like a parasol."
size: "stem 4 cm, fluff 2.5 cm across"
materials: ["fine feathery filaments", "thin stem"]
colors: ["#FDFCF7 fluff white", "#B7C48A stem sage", "#8A7A5A seed brown"]
owner: CH-PIP
scenes: [SC01, SC02, SC03, SC04, SC05]
states:
  - {id: PR-SEED:CLOSED, description: "fluff a round soft ball on top of the stem, held under Pip's arm", from: SC01, cause: "start"}
  - {id: PR-SEED:OPEN, description: "fluff spread wide like a parasol, held overhead", from: SC04, cause: "Pip pops it open"}
  - {id: PR-SEED:PLANTED, description: "seed end in the soil, fluff folded shut", from: SC05, cause: "Mo plants it"}
identity_lock: >-
  A single dandelion seed with a thin pale sage-green stem, a small brown pointed seed at the bottom and a round soft feathery white fluff at the top made of fine radiating filaments, flat cel color with a thin dark-teal outline.
short_lock: "thin sage stem topped with a round feathery white dandelion fluff"
reference_images: []
```

```yaml
record: prop
id: PR-OAR
name: Folded paper oar
description: "A small oar folded from a strip of yellow paper: a thin handle and a flat rectangular blade."
size: "3 x 0.5 cm"
materials: ["yellow origami paper"]
colors: ["#FFC93C yellow", "#E0A81F shade"]
owner: CH-PIP
scenes: [SC01, SC02, SC03]
states:
  - {id: PR-OAR:HELD, description: "in Pip's hand", from: SC01, cause: "start"}
  - {id: PR-OAR:STOWED, description: "lying across the boat floor", from: SC04, cause: "Pip needs both hands for the seed"}
identity_lock: >-
  A small oar folded from a strip of bright yellow paper with a thin straight handle and a flat rectangular blade, crisp crease line down the middle, flat cel color with a thin dark-teal outline.
short_lock: "small bright yellow folded paper oar with a thin handle and a flat blade"
reference_images: []
```

```yaml
record: prop
id: PR-SPROUT
name: Green sprout
description: "A tiny sprout with a short stem and two round leaves that pops out of the soil."
size: "1.5 cm tall"
materials: ["soft plant"]
colors: ["#7DBB5A leaf green", "#5E9A3E shade"]
owner: CH-MO
scenes: [SC05]
states:
  - {id: PR-SPROUT:HIDDEN, description: "not yet visible", from: SC05, cause: "start"}
  - {id: PR-SPROUT:SPROUT, description: "two round leaves on a short stem, standing in the soil next to the planted stem", from: SC05, cause: "the last raindrop"}
identity_lock: >-
  A tiny bright leaf-green sprout with a short thin stem and two round smooth leaves, flat cel color with one darker green shade tone and a thin dark-teal outline.
short_lock: "tiny bright leaf-green sprout with a short stem and two round leaves"
reference_images: []
```

## Prop sheet briefs
- PR-BOAT: neutral pale background, 3/4 view per state, scale mark.
- PR-SEED: front view closed and open.

## Handoff
- Produced: LOC-PUDDLE@1, props@1 (REVIEW)
- For script-supervisor: PR-BOAT NEW, FLAT, REFOLDED, CREASED; PR-SEED CLOSED, OPEN, PLANTED; PR-OAR HELD, STOWED; PR-SPROUT HIDDEN, SPROUT
- ASSUMPTION: oar is stowed in SC04 (Pip needs both hands for the seed); boat color cream to stay distinct from Pip's yellow
- Next: film-director
