---
artifact: character-bible
id: CH-<SLUG>
version: 1
status: DRAFT
owner: character-designer
depends_on: [screenplay@N, style_bible@N]
updated: YYYY-MM-DD
---
# CH-<SLUG> — <Full name>

## Evidence from the script
| Scene | What they do | Costume/state needs |
|---|---|---|

## Design rationale
- Role and personality:
- Shape language:
- Silhouette:
- Color anchor(s) (hex):
- Proportions (heads, cm):

```yaml
record: character
id: CH-<SLUG>
name:
role:
age:
height_cm:
build:
identity_lock: >-
  <40-80 words, visual facts only>
short_lock: "<10-25 words: most recognizable features, for small/soft/secondary appearances>"
face:
hair:
skin:
eyes:
silhouette:
distinguishing_features: []
default_costume: CO-<SLUG>-01
costumes: [CO-<SLUG>-01]
expression_range: []
invariants: []
allowed_variation: []
reference_images: []
```

```yaml
record: costume
id: CO-<SLUG>-01
character: CH-<SLUG>
name:
garments: []
materials: []
colors: []
accessories: []
condition_states:
  - {id: BASE, description: "", from: SC01}
scenes: []
identity_lock: >-
  <25-60 words>
short_lock: "<10-25 words: most recognizable features, for small/soft/secondary appearances>"
```

## Sheets
| Sheet | Status | Notes |
|---|---|---|
| Turnaround | | |
| Expression | | |
| Pose | | |

(sheet briefs as YAML, see references/model-sheets.md section 7)

## Reference image review log
| Image | Verdict | Notes |
|---|---|---|

## Handoff
- Produced:
- Built from:
- Open items:
- Next:
