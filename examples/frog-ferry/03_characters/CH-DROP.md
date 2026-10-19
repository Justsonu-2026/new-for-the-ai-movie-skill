---
artifact: character-bible
id: CH-DROP
version: 1
status: APPROVED
owner: character-designer
depends_on: [screenplay@1, style_bible@1]
updated: 2026-10-19
---
# CH-DROP — the raindrop

## Evidence from the script
| Scene | What they do | Costume/state needs |
|---|---|---|
| SC02 | falls and lands on the boat | FALLING |
| SC03 | falls again, same spot | FALLING |
| SC04 | falls, bounces off the fluff twice, splashes | FALLING, BOUNCING |
| SC05 | last drop lands on the soil | FALLING |

## Design rationale
- Role and personality: not malicious, a faceless force of nature played for comedy through timing; it is bigger and brighter than the ordinary rain.
- Shape language: classic teardrop, round bottom and pointed top.
- Silhouette: teardrop; stretches long when falling and squashes round when it lands.
- Color anchor: raindrop aqua #5FD0E8, shared with no one.
- Proportions: about as big as Pip's head (2.5 cm).

```yaml
record: character
id: CH-DROP
name: Plip
role: opposing force, faceless prop-character
age: "not applicable"
height_cm: 2.5
build: "teardrop shape, round bottom, pointed top, bouncy"
identity_lock: >-
  A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface.
short_lock: "one bright aqua glossy teardrop with a white highlight, plain and smooth"
face: "none; a plain smooth surface"
hair: "none"
skin: "glossy aqua water #5FD0E8, rim #3FB1CC"
eyes: "none"
silhouette: "teardrop, round bottom, pointed top"
distinguishing_features: ["white curved highlight upper left", "stretches when falling and squashes when landing"]
default_costume: CO-DROP-01
costumes: [CO-DROP-01]
expression_range: ["none: body language only (stretch, squash, bounce)"]
invariants: ["bright aqua", "teardrop", "white highlight", "no face"]
allowed_variation: ["stretched tall when falling", "squashed flat when landing", "splash crown on impact"]
reference_images: []
```

```yaml
record: costume
id: CO-DROP-01
character: CH-DROP
name: Water finish
garments: ["none: the drop is its own body"]
materials: ["glossy water"]
colors: ["#5FD0E8 aqua", "#3FB1CC rim", "#FDFCF7 highlight"]
accessories: []
condition_states:
  - {id: FALLING, description: "stretched teardrop", from: SC02}
  - {id: SPLASH, description: "squashed with a crown of smaller droplets", from: SC02}
scenes: [SC02, SC03, SC04, SC05]
identity_lock: >-
  Glossy bright aqua water finish with a single curved white highlight, a thin darker aqua rim, flat cel color with one hard shadow tone and a thin dark-teal outline.
short_lock: "glossy bright aqua water finish with one curved white highlight and a thin darker rim"
```

## Sheets
| Sheet | Status | Notes |
|---|---|---|
| Pose | spec only | falling, landing squash, bounce, splash |

## Handoff
- Produced: CH-DROP@1, CO-DROP-01 (REVIEW)
- Open items: ASSUMPTION: the drop has no face
- Next: animation-director (squash and stretch)
