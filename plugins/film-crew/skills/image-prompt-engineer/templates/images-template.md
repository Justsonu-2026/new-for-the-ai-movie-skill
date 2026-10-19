---
artifact: image-prompts
id: images
version: 1
status: DRAFT
owner: image-prompt-engineer
depends_on: [style_bible@N, CH-<SLUG>@N, LOC-<SLUG>@N, props@N]
updated: YYYY-MM-DD
---
# Image Prompts: <title>

## Tool profile
```yaml
model_profile:
  name: ""
  modes: []
  max_reference_images: 0
  aspect_ratios: []
  negative_prompt_field: false
  verified_on: YYYY-MM-DD
  verified_by: ""
```

## Generation plan
| Order | Prompt ID | Target | Depends on (approved images) | Status |
|---|---|---|---|---|

## Prompts

```yaml
record: image_prompt
id: IMG-<TARGET>-01
target: ""
model: ""
prompt: >-
  ...
references:
  - {file: "", role: ""}
parameters: {aspect_ratio: "", images: 4}
must_match: []
output: assets/...
status: READY        # READY | GENERATED | APPROVED | FIX | REDO
```

## Repairs
| Original | Finding (QC ID) | Edit prompt ID | Result |
|---|---|---|---|

## Handoff
- Produced:
- Next batch:
- Open requests:
