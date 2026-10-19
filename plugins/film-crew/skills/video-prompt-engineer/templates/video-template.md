---
artifact: video-prompts
id: video
version: 1
status: DRAFT
owner: video-prompt-engineer
depends_on: [master@N, images@N]
updated: YYYY-MM-DD
---
# Video Prompts: <title>

## Tool profile
```yaml
model_profile:
  name: ""
  modes: []
  clip_lengths_s: []
  aspect_ratios: []
  max_reference_images: 0
  native_audio: false
  multi_shot: false
  negative_prompt_field: false
  verified_on: YYYY-MM-DD
  verified_by: ""
```

## Shot plan
| Shot | Dur (cut) | Mode | Clip length | Keep | Start ref | End ref | Audio | Risk |
|---|---|---|---|---|---|---|---|---|

## Prompts

```yaml
record: video_prompt
id: VID-SC<NN>-SH<NNN>-01
shot: SC<NN>-SH<NNN>
model: ""
mode: image-to-video
prompt: >-
  ...
references:
  - {file: assets/keyframes/SC<NN>-SH<NNN>_start_v1.png, role: "start frame"}
clip_length_s: 6
parameters: {aspect_ratio: ""}
trim: "keep 0.5-4.5 s"
audio: "generated: dialogue + SFX; music in post"
risks: []
retry_ladder: ["re-roll", "lock camera", "shorten action", "first-last-frame"]
status: READY
```

## Chaining and extensions
| From take | To shot | Frame used | Notes |
|---|---|---|---|

## Handoff
- Produced:
- For film-editor: splits/extensions:
- Next:
