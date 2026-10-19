---
artifact: storyboard
id: storyboard
version: 3
status: APPROVED
owner: storyboard-artist
depends_on: [SC01_direction@2, SC02_direction@2, SC03_direction@2, SC04_direction@2, SC05_direction@2]
updated: 2026-10-19
---
# Storyboard: Frog Ferry

Aspect ratio: 16:9 (STYLE). Level of finish: rough (text boards; no images generated, no budget). Sheet: `09_storyboard/storyboard.html`.
Sketch prompts are for Midjourney V7 rough boards; they keep identity to silhouettes and colour anchors (yellow frog, coral-shelled snail, aqua teardrop). Finished keyframes with pasted locks are made later from the shot records.

## Change note (v3, 2026-10-19; production-manager conflict resolution)
- SC02-SH037 salute panels (P1, P2) now use the LEFT hand, left upper arm pinned, seed tucked under the left arm, oar across her lap under the right hand. SC04-SH030 start panel shows the oar being laid on the boat floor by the right hand (stow is on screen). SC04-SH050-P1 wave moved to the RIGHT of the boat (director erratum CR-ISSUE-07, consistent with SH045). depends_on re-checked against the current direction files (all @2; errata applied in place).
- Erratum (2026-10-19, no version bump; CR-ISSUE-12): end panels SB-SC02-SH020-P3 and SB-SC03-SH010-P2 now show the oar floating on the water beside the ripples (storyboard.html matched).

## Change note (v2, 2026-10-19)
Rebuilt from the director's re-cut (SC01-SC05_direction@2: 25 shots, 42.0 s, was 17 shots). New shot IDs boarded: SC01-SH025, SC02-SH035, SC02-SH037, SC03-SH025, SC04-SH045, SC04-SH055, SC05-SH025, SC05-SH055. Panel durations sum to each shot's duration; durations follow direction@2 (SC01-SH010 now 2.0 s, SC04 climax beats 2.5 s). Shots with a defined start and end state (first-last-frame suited) are boarded as start and end poses; SC02-SH020 and SC04-SH040 add a middle beat. QC-109: SC04-SH010 and SC05-SH050/SH055 are PROFILE (the earlier three-quarter wording is withdrawn). QC-108: 'paddles on' is carried by SC02-SH037 (salute) plus the opening of SC03-SH010 (Pip stroking). Hands (fixed in v3): oar in the RIGHT hand, seed under the LEFT arm, salute with the LEFT hand. The v1 panel IDs of changed shots are superseded.


## SC01 — EXT. PUDDLE - NEAR SHORE - DAY

```yaml
record: panel
id: SB-SC01-SH010-P1
shot: SC01-SH010
frame_moment: start
description: WS, eye-level. Pip stands in profile on the left bank beside the green leaf and grey pebble, seed held in her arm, folded boat at her feet, oar in hand. Tiny Mo sits far right beside the bare soil patch, feelers drooping. Light rain dimples the puddle.
composition: Pip lower-left third; Mo lower-right third; wide empty puddle between; grey sky fills the top third.
camera_notes: 'Camera static. Thin arrow: Pip''s eyeline runs right across the puddle.'
duration_s: 1.0
dialogue: none
sound: light rain patter on the puddle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, eye-level. Pip stands in profile on the left bank beside the green leaf and grey pebble, seed held in her arm, folded boat at her feet, oar in hand. Tiny Mo sits far right beside the bare soil patch, feelers drooping. Light rain dimples the puddle.
image: ''
```

```yaml
record: panel
id: SB-SC01-SH010-P2
shot: SC01-SH010
frame_moment: end
description: 'WS, same framing. Pip has looked across at Mo: head up, eyes bright, small hop-ready stance; boat still at her feet. Mo unchanged, feelers drooping.'
composition: Same as the previous panel; Pip's head on the upper third line.
camera_notes: 'Camera static. Thin arrow: eyeline to Mo.'
duration_s: 1.0
dialogue: none
sound: light rain patter on the puddle
transition_out: cut to SC01-SH020
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, same framing. Pip has looked across at Mo: head up, eyes bright, small hop-ready stance; boat still at her feet. Mo unchanged, feelers drooping.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH020-P1
shot: SC01-SH020
frame_moment: start
description: WS, eye-level. Pip at the left-centre water's edge in profile facing right, lowering the boat onto the water in front of her; leaf and pebble lower left.
composition: Pip left-centre; boat at the water line; water open to the right.
camera_notes: 'Camera static. Thin arrow: boat goes down to the water.'
duration_s: 1.0
dialogue: none
sound: small splash and paper crinkle as the boat meets the water
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, eye-level. Pip at the left-centre water's edge in profile facing right, lowering the boat onto the water in front of her; leaf and pebble lower left.
image: ''
```

```yaml
record: panel
id: SB-SC01-SH020-P2
shot: SC01-SH020
frame_moment: end
description: WS. Pip seated in the afloat boat at the water's edge, oar in hand, facing right.
composition: Pip left-centre on the lower third line; water to the right.
camera_notes: 'Camera static. Thin arrow: none (settled).'
duration_s: 1.0
dialogue: none
sound: small splash and paper crinkle as the boat meets the water
transition_out: cut to SC01-SH025
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Pip seated in the afloat boat at the water's edge, oar in hand, facing right.
image: ''
```

```yaml
record: panel
id: SB-SC01-SH025-P1
shot: SC01-SH025
frame_moment: start
description: WS. Pip seated in the boat at the water's edge, oar raised to dip, facing right.
composition: Boat left-centre; empty water to the right.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: paddle dips; soft ripple
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Pip seated in the boat at the water's edge, oar raised to dip, facing right.
image: ''
```

```yaml
record: panel
id: SB-SC01-SH025-P2
shot: SC01-SH025
frame_moment: end
description: WS. The boat a quarter of the way into the puddle, Pip seated and paddling, ripple rings behind the stern.
composition: Boat left-centre to centre-left on the lower third line; empty water right.
camera_notes: 'Camera static. Thin arrow: boat moves right.'
duration_s: 0.75
dialogue: none
sound: paddle dips; soft ripple
transition_out: cut to SC02-SH010
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat a quarter of the way into the puddle, Pip seated and paddling, ripple rings behind the stern.
image: ''
```


## SC02 — EXT. PUDDLE - MID-WATER - DAY

```yaml
record: panel
id: SB-SC02-SH010-P1
shot: SC02-SH010
frame_moment: start
description: WS. The boat left of centre, Pip seated paddling, chin up; ripple rings spread ahead of the bow; empty sky above.
composition: Boat left of centre on the lower third line; top half empty for the drop.
camera_notes: 'Camera static. Thin arrow: boat glides right.'
duration_s: 0.75
dialogue: none
sound: paddle dips; ripples spreading
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat left of centre, Pip seated paddling, chin up; ripple rings spread ahead of the bow; empty sky above.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH010-P2
shot: SC02-SH010
frame_moment: end
description: WS. The boat at centre, Pip paddling; rings widening ahead of the bow.
composition: Boat at the centre; sky above clear.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: paddle dips; ripples spreading
transition_out: cut to SC02-SH020
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat at centre, Pip paddling; rings widening ahead of the bow.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH020-P1
shot: SC02-SH020
frame_moment: start
description: WS. The aqua drop, the brightest thing in frame, at the top of frame above the boat; the intact boat at centre with Pip seated, unaware.
composition: Drop on the vertical centre line in the top third; boat on the lower third line.
camera_notes: 'Camera static. Thick arrow: drop falls straight down.'
duration_s: 0.75
dialogue: none
sound: rising whistle of the falling drop, a plop and wet crunch on the hit, gurgle as the boat sinks
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The aqua drop, the brightest thing in frame, at the top of frame above the boat; the intact boat at centre with Pip seated, unaware.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH020-P2
shot: SC02-SH020
frame_moment: mid
description: WS. The drop lands on the middle of the boat; the boat is folding flat under it, Pip's eyes popped wide.
composition: Drop and boat on the centre line; splash spikes at the hit.
camera_notes: Camera static.
duration_s: 0.5
dialogue: none
sound: rising whistle of the falling drop, a plop and wet crunch on the hit, gurgle as the boat sinks
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The drop lands on the middle of the boat; the boat is folding flat under it, Pip's eyes popped wide.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH020-P3
shot: SC02-SH020
frame_moment: end
description: WS. Ripples only on the water where the boat was, oar floating on the water beside them; boat gone, no Pip visible.
composition: Concentric ripples at the centre; empty grey sky above.
camera_notes: Camera static. Cut on the sink.
duration_s: 0.75
dialogue: none
sound: rising whistle of the falling drop, a plop and wet crunch on the hit, gurgle as the boat sinks
transition_out: cut on the sink to SC02-SH030
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Ripples only on the water where the boat was, oar floating on the water beside them; boat gone, no Pip visible.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH030-P1
shot: SC02-SH030
frame_moment: start
description: MS, eye-level. Pip's head bobs up beside the floating flat paper, ears limp, soggy, seed held high and dry above her.
composition: Pip at centre; seed at the top of frame; flat paper below her.
camera_notes: 'Camera static. Thin arrow: Pip rises.'
duration_s: 0.75
dialogue: none
sound: bloop as she surfaces; shake and flick of droplets
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS, eye-level. Pip's head bobs up beside the floating flat paper, ears limp, soggy, seed held high and dry above her.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH030-P2
shot: SC02-SH030
frame_moment: end
description: MS. Pip on the flat paper, shaking herself, droplets flying, seed still high.
composition: Pip centre; seed top of frame; flat paper beneath her.
camera_notes: 'Camera static. Small arrows: droplets fly outward.'
duration_s: 0.75
dialogue: none
sound: bloop as she surfaces; shake and flick of droplets
transition_out: cut to SC02-SH035
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip on the flat paper, shaking herself, droplets flying, seed still high.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH035-P1
shot: SC02-SH035
frame_moment: start
description: MS. Pip on the flat paper making quick crease motions with her hands, soggy ears.
composition: Pip centre; flat paper around her.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: quick crease flicks, then a pop
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip on the flat paper making quick crease motions with her hands, soggy ears.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH035-P2
shot: SC02-SH035
frame_moment: end
description: MS. The boat popped back into shape around Pip, who is seated in it; smear lines of the pop fading.
composition: Pip centre; boat popped around her.
camera_notes: 'Camera static. Small arrows: paper pops up and out.'
duration_s: 0.75
dialogue: none
sound: quick crease flicks, then a pop
transition_out: cut to SC02-SH037
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. The boat popped back into shape around Pip, who is seated in it; smear lines of the pop fading.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH037-P1
shot: SC02-SH037
frame_moment: start
description: MS. Pip seated in the popped boat, chin up, her LEFT forearm and hand rising to her brow (left upper arm pinned, closed seed tucked under the left arm), yellow oar lying across her lap under her right hand, sky above.
composition: Pip centre; sky above her.
camera_notes: 'Camera static. Thin arrow: hand rises to the brow.'
duration_s: 0.75
dialogue: none
sound: soft stubborn 'hup' of a salute (no dialogue)
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip seated in the popped boat, chin up, her LEFT forearm and hand rising to her brow (left upper arm pinned, closed seed tucked under the left arm), yellow oar lying across her lap under her right hand, sky above.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH037-P2
shot: SC02-SH037
frame_moment: end
description: 'MS. Held salute with the LEFT hand at the brow, left upper arm pinned with the seed tucked under it, oar across her lap under the right hand, boat ready to go, proud face.'
composition: Pip centre; hand on the upper third line.
camera_notes: Camera static. Hold.
duration_s: 0.75
dialogue: none
sound: soft stubborn 'hup' of a salute (no dialogue)
transition_out: cut to SC03-SH010
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Held salute with the LEFT hand at the brow, left upper arm pinned with the seed tucked under it, oar across her lap under the right hand, boat ready to go, proud face.'
image: ''
```


## SC03 — EXT. PUDDLE - MID-WATER - DAY

```yaml
record: panel
id: SB-SC03-SH010-P1
shot: SC03-SH010
frame_moment: start
description: WS, same framing as SC02-SH020. Pip stroking the oar in the boat at centre-right, rings widening at the bow, glancing up relaxed; the second drop enters at the top of frame above the same spot.
composition: Boat centre-right on the lower third line; drop at the top of frame.
camera_notes: 'Camera static. Thick arrow: drop falls.'
duration_s: 1.0
dialogue: none
sound: rising whistle, plop, faster gurgle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, same framing as SC02-SH020. Pip stroking the oar in the boat at centre-right, rings widening at the bow, glancing up relaxed; the second drop enters at the top of frame above the same spot.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH010-P2
shot: SC03-SH010
frame_moment: end
description: WS. Ripples only where the boat sank, oar floating on the water beside them; the boat gone; grey sky slightly darker.
composition: Ripples at the centre-right; empty sky above.
camera_notes: Camera static.
duration_s: 1.0
dialogue: none
sound: rising whistle, plop, faster gurgle
transition_out: cut to SC03-SH020
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Ripples only where the boat sank, oar floating on the water beside them; the boat gone; grey sky slightly darker.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH020-P1
shot: SC03-SH020
frame_moment: start
description: MS, eye-level. Pip's head already above the water, soggy and scowling, hands starting a fast refold.
composition: Pip centre-left.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: fast crease flicks, a snappy pop
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS, eye-level. Pip's head already above the water, soggy and scowling, hands starting a fast refold.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH020-P2
shot: SC03-SH020
frame_moment: end
description: MS. Pip seated in the lopsided, creased boat, scowl held.
composition: Pip centre-left; lopsided boat around her.
camera_notes: 'Camera static. Small arrows: pop.'
duration_s: 0.75
dialogue: none
sound: fast crease flicks, a snappy pop
transition_out: cut to SC03-SH025
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip seated in the lopsided, creased boat, scowl held.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH025-P1
shot: SC03-SH025
frame_moment: start
description: MS. Pip seated in the lopsided boat; a small round shadow just appearing on the water at the lower right of the boat; her eyes turning toward it.
composition: Pip centre-left; small shadow lower right.
camera_notes: 'Camera static. Thin arrow: eyeline to the shadow.'
duration_s: 0.75
dialogue: none
sound: low soft rumble as the shadow grows
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip seated in the lopsided boat; a small round shadow just appearing on the water at the lower right of the boat; her eyes turning toward it.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH025-P2
shot: SC03-SH025
frame_moment: end
description: MS. The shadow is larger; Pip's ears are flat; eyes fixed on it.
composition: Pip centre-left; shadow lower right, larger.
camera_notes: 'Camera static. Thin arrow: ears drop.'
duration_s: 0.75
dialogue: none
sound: low soft rumble as the shadow grows
transition_out: cut to SC04-SH010
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. The shadow is larger; Pip's ears are flat; eyes fixed on it.
image: ''
```


## SC04 — EXT. PUDDLE - MID-WATER - DAY

```yaml
record: panel
id: SB-SC04-SH010-P1
shot: SC04-SH010
frame_moment: start
description: MCU, eye-level. Pip in PROFILE facing screen right, ears flat, chin lifting, eyes tracking upward.
composition: Pip centre in side-on profile; eyes on the upper third line.
camera_notes: 'Camera static. Thin arrow: eyeline up.'
duration_s: 0.75
dialogue: none
sound: rain patter
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MCU, eye-level. Pip in PROFILE facing screen right, ears flat, chin lifting, eyes tracking upward.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH010-P2
shot: SC04-SH010
frame_moment: end
description: 'MCU. Pip still in profile facing right: determined squint, chin up.'
composition: Same as the previous panel.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: rain patter
transition_out: cut to SC04-SH020
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MCU. Pip still in profile facing right: determined squint, chin up.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH020-P1
shot: SC04-SH020
frame_moment: start
description: POV looking up, low angle. One small bright aqua drop high in a grey sky.
composition: Drop at the centre, small; grey sky around.
camera_notes: Camera static.
duration_s: 0.5
dialogue: none
sound: faint rising whistle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; POV looking up, low angle. One small bright aqua drop high in a grey sky.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH020-P2
shot: SC04-SH020
frame_moment: end
description: POV. The drop is big and close, glossy, slightly stretched tall, filling about a third of the frame height.
composition: Drop at the centre, large.
camera_notes: 'Camera static. Thick arrow: drop grows toward camera.'
duration_s: 0.5
dialogue: none
sound: faint rising whistle
transition_out: cut to SC04-SH030
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; POV. The drop is big and close, glossy, slightly stretched tall, filling about a third of the frame height.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH030-P1
shot: SC04-SH030
frame_moment: start
description: "MS, eye-level. Start of the shot: Pip seated in the lopsided boat at lower centre, her RIGHT hand laying the yellow oar on the boat floor (first frames), closed seed still tucked under the left arm, squint; she then lifts the seed overhead in both hands, fluff still a closed ball."
composition: Pip lower centre; seed in the upper centre.
camera_notes: 'Camera static. Thin arrow: right hand lowers the oar to the boat floor, then both hands raise the seed.'
duration_s: 1.25
dialogue: none
sound: a soft poof as the fluff opens
transition_out: none (continues in the next panel of this shot)
sketch_prompt: "rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS, eye-level. Start of the shot: Pip seated in the lopsided boat at lower centre, her RIGHT hand laying the yellow oar on the boat floor (first frames), closed seed still tucked under the left arm, squint; she then lifts the seed overhead in both hands, fluff still a closed ball."
image: ''
```

```yaml
record: panel
id: SB-SC04-SH030-P2
shot: SC04-SH030
frame_moment: end
description: MS. The fluff fully open like a parasol above Pip, the brightest white in the frame; she grips the stem, braced.
composition: Fluff upper centre; Pip lower centre.
camera_notes: 'Camera static. Thin arrows: fluff bursts outward.'
duration_s: 1.25
dialogue: none
sound: a soft poof as the fluff opens
transition_out: cut to SC04-SH040
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. The fluff fully open like a parasol above Pip, the brightest white in the frame; she grips the stem, braced.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH040-P1
shot: SC04-SH040
frame_moment: start
description: WS, eye-level. The drop lands on the open fluff above the boat; Pip under the fluff, braced.
composition: Fluff upper centre-left; boat below.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: two springy boings on the fluff
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, eye-level. The drop lands on the open fluff above the boat; Pip under the fluff, braced.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH040-P2
shot: SC04-SH040
frame_moment: mid
description: 'WS. First bounce: the drop springs up off the fluff and drops back down onto it for the second.'
composition: Fluff upper centre-left; drop above it.
camera_notes: 'Camera static. Thin arrows: up and down bounce.'
duration_s: 1.0
dialogue: none
sound: two springy boings on the fluff
transition_out: none (continues in the next panel of this shot)
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. First bounce: the drop springs up off the fluff and drops back down onto it for the second.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH040-P3
shot: SC04-SH040
frame_moment: end
description: WS. After the second bounce the drop rises off the fluff; Pip still under the fluff.
composition: Drop above the fluff, upper centre-left.
camera_notes: 'Camera static. Thin arrow: drop rises.'
duration_s: 0.75
dialogue: none
sound: two springy boings on the fluff
transition_out: cut to SC04-SH045
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. After the second bounce the drop rises off the fluff; Pip still under the fluff.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH045-P1
shot: SC04-SH045
frame_moment: start
description: WS. The drop falls into the water beside the boat and a splash crown rises at the lower right; boat and open fluff at left.
composition: Splash lower right; boat and fluff left.
camera_notes: 'Camera static. Thin arrow: crown rises.'
duration_s: 0.75
dialogue: none
sound: plop and splash, then a trickle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The drop falls into the water beside the boat and a splash crown rises at the lower right; boat and open fluff at left.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH045-P2
shot: SC04-SH045
frame_moment: end
description: WS. The crown has fallen back to ripples beside the boat; boat and fluff at left.
composition: Ripples lower right; boat and fluff left.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: plop and splash, then a trickle
transition_out: cut to SC04-SH050
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The crown has fallen back to ripples beside the boat; boat and fluff at left.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH050-P1
shot: SC04-SH050
frame_moment: start
description: WS. The splash wave at the right of the boat; the lopsided boat at centre, Pip under the open fluff, starting to turn.
composition: Boat at the centre; wave at right.
camera_notes: 'Camera static. Thin circular arrow: boat spins once.'
duration_s: 0.75
dialogue: none
sound: whoosh of the spin
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The splash wave at the right of the boat; the lopsided boat at centre, Pip under the open fluff, starting to turn.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH050-P2
shot: SC04-SH050
frame_moment: end
description: 'WS. Spin finished: the boat faces right at centre, Pip under the open fluff.'
composition: Boat at the centre, facing right.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: whoosh of the spin
transition_out: cut to SC04-SH055
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Spin finished: the boat faces right at centre, Pip under the open fluff.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH055-P1
shot: SC04-SH055
frame_moment: start
description: WS. The boat entering at the centre, Pip grinning with the seed held up, fluff open.
composition: Boat at the centre.
camera_notes: 'Camera static. Thick arrow: boat slides right.'
duration_s: 0.5
dialogue: none
sound: whoosh of speed; Pip's giggle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat entering at the centre, Pip grinning with the seed held up, fluff open.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH055-P2
shot: SC04-SH055
frame_moment: end
description: WS. The boat at the right third of the frame, Pip grinning, seed held up.
composition: Boat at the right third.
camera_notes: Camera static. Boat exits right.
duration_s: 0.5
dialogue: none
sound: whoosh of speed; Pip's giggle
transition_out: cut to SC05-SH010
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat at the right third of the frame, Pip grinning, seed held up.
image: ''
```


## SC05 — EXT. PUDDLE - FAR SHORE - DAY

```yaml
record: panel
id: SB-SC05-SH010-P1
shot: SC05-SH010
frame_moment: start
description: WS, eye-level. The boat sliding in from the left toward the far shore; Mo and the bare soil patch at the right, her feelers drooping; pale warm glow at upper right.
composition: Boat left; Mo and soil right.
camera_notes: 'Camera static. Thin arrow: boat slides right.'
duration_s: 1.0
dialogue: none
sound: a soft bump of the boat on the shore; Mo's feelers rustle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, eye-level. The boat sliding in from the left toward the far shore; Mo and the bare soil patch at the right, her feelers drooping; pale warm glow at upper right.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH010-P2
shot: SC05-SH010
frame_moment: end
description: WS. The boat stopped at the shore, Pip seated; Mo's feelers lifted.
composition: Boat left; Mo right with feelers up.
camera_notes: 'Camera static. Thin arrow: feelers lift.'
duration_s: 1.0
dialogue: none
sound: a soft bump of the boat on the shore; Mo's feelers rustle
transition_out: cut to SC05-SH020
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat stopped at the shore, Pip seated; Mo's feelers lifted.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH020-P1
shot: SC05-SH020
frame_moment: start
description: MS. Pip stepping out of the boat toward Mo, the seed held in both hands; Mo right, feelers held back.
composition: 'Two-shot: Pip left, Mo right.'
camera_notes: 'Camera static. Thin arrow: Pip steps right.'
duration_s: 0.75
dialogue: none
sound: soft step onto the soil
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip stepping out of the boat toward Mo, the seed held in both hands; Mo right, feelers held back.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH020-P2
shot: SC05-SH020
frame_moment: end
description: MS. Pip's arms extended, offering the seed with a grin; Mo still holding her feelers back.
composition: Pip left, Mo right; seed between them.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: soft step onto the soil
transition_out: cut to SC05-SH025
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip's arms extended, offering the seed with a grin; Mo still holding her feelers back.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH025-P1
shot: SC05-SH025
frame_moment: start
description: MS. Pip's arms extended with the seed; Mo's feelers reaching toward it.
composition: Pip left, Mo right; seed between.
camera_notes: 'Camera static. Thin arrows: feelers reach.'
duration_s: 0.75
dialogue: none
sound: soft feeler rustle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip's arms extended with the seed; Mo's feelers reaching toward it.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH025-P2
shot: SC05-SH025
frame_moment: end
description: MS. Mo holding the seed in her feelers, head tilted; Pip's hands empty.
composition: Pip left, Mo right.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: soft feeler rustle
transition_out: cut to SC05-SH030
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Mo holding the seed in her feelers, head tilted; Pip's hands empty.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH030-P1
shot: SC05-SH030
frame_moment: start
description: MS. Mo at right with the seed in her feelers, stem pointing down to the soil patch at centre.
composition: Mo right; soil centre.
camera_notes: 'Camera static. Thin arrow: stem pushes down.'
duration_s: 0.75
dialogue: none
sound: soft squelch of soil, a small fold-shut puff
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Mo at right with the seed in her feelers, stem pointing down to the soil patch at centre.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH030-P2
shot: SC05-SH030
frame_moment: end
description: MS. The seed standing planted in the soil, fluff folded shut; Mo beside it.
composition: Mo right; planted seed centre.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: soft squelch of soil, a small fold-shut puff
transition_out: cut to SC05-SH040
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. The seed standing planted in the soil, fluff folded shut; Mo beside it.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH040-P1
shot: SC05-SH040
frame_moment: start
description: INSERT, high angle. The planted seed in the soil at centre; one last aqua drop falling toward the soil beside it; warm glow.
composition: Soil and seed centre; drop at the top.
camera_notes: 'Camera static. Thin arrow: drop falls.'
duration_s: 1.25
dialogue: none
sound: a plip on the soil, then a rubbery boing
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; INSERT, high angle. The planted seed in the soil at centre; one last aqua drop falling toward the soil beside it; warm glow.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH040-P2
shot: SC05-SH040
frame_moment: end
description: INSERT. A green sprout standing up fully beside the seed, soil dimpled where the drop landed.
composition: Sprout centre.
camera_notes: 'Camera static. Small arrows: sprout pops up.'
duration_s: 1.25
dialogue: none
sound: a plip on the soil, then a rubbery boing
transition_out: cut to SC05-SH050
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; INSERT. A green sprout standing up fully beside the seed, soil dimpled where the drop landed.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH050-P1
shot: SC05-SH050
frame_moment: start
description: MWS, eye-level. Pip at left facing right and Mo at right facing left in PROFILE, the sprout between them, both looking down at it.
composition: Pip left, sprout centre, Mo right; side-on.
camera_notes: 'Camera static. Thin arrows: heads tilt up.'
duration_s: 0.75
dialogue: none
sound: soft warm hum; feeler flutter
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MWS, eye-level. Pip at left facing right and Mo at right facing left in PROFILE, the sprout between them, both looking down at it.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH050-P2
shot: SC05-SH050
frame_moment: end
description: MWS. Both heads tilted up to the sky, Mo's feelers waving, in profile.
composition: Same positions; eyelines up.
camera_notes: 'Camera static. Thin arrows: eyelines up; feelers wave.'
duration_s: 0.75
dialogue: none
sound: soft warm hum; feeler flutter
transition_out: cut to SC05-SH055
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MWS. Both heads tilted up to the sky, Mo's feelers waving, in profile.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH055-P1
shot: SC05-SH055
frame_moment: start
description: MWS. Same positions in PROFILE, both looking up; Pip beginning to raise one hand.
composition: Same as the previous shot.
camera_notes: 'Camera static. Thin arrow: hand rises.'
duration_s: 0.75
dialogue: none
sound: gentle warm hum, ends on a plip
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MWS. Same positions in PROFILE, both looking up; Pip beginning to raise one hand.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH055-P2
shot: SC05-SH055
frame_moment: end
description: MWS. Pip's hand raised in a small wave to the sky; Mo and the sprout beside her. Fade out after this frame.
composition: Same positions; Pip's hand on the upper third line.
camera_notes: Camera static. FADE OUT after this frame.
duration_s: 0.75
dialogue: none
sound: gentle warm hum, ends on a plip
transition_out: fade-out (end of film)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MWS. Pip's hand raised in a small wave to the sky; Mo and the sprout beside her. Fade out after this frame.
image: ''
```


## Continuity check log
| Cut | Check | Result |
|---|---|---|
| SC01-SH010 → SH020 → SH025 | axis, positions, props | PASS: Pip left of frame facing right; boat at her feet (SH010), on the water (SH020), underway (SH025); oar in hand from SH020. |
| SC01-SH025 → SC02-SH010 | travel direction | PASS: boat moves right and enters SC02 left of centre. |
| SC02-SH010 → SH020 | framing | PASS: boat left of centre to centre; drop path above the boat. |
| SC02-SH020 → SH030 | state | PASS: boat gone, ripples only → Pip surfaces centre, soggy, seed high and dry. |
| SC02-SH030 → SH035 → SH037 | state | PASS: Pip on flat paper → popped boat → seated, salute held, oar across lap. Salute is the LEFT hand (continuity@3), seed tucked, oar across lap. |
| SC02-SH037 → SC03-SH010 | state, light | PASS: seated in the refolded boat; SC03 opens with Pip stroking (QC-108); sky a step darker. |
| SC03-SH010 → SH020 → SH025 | state | PASS: boat gone → Pip surfaced scowling → lopsided creased boat; shadow lower right in SH025. |
| SC03-SH025 → SC04-SH010 | Pip state | PASS: ears flat in both; SC04-SH010 is PROFILE facing right, matching the side-on staging. |
| SC04-SH010 → SH020 → SH030 | eyeline | PASS: upward eyeline cuts to the sky POV, then to the seed lift. |
| SC04-SH030 → SH040 → SH045 | fluff, drop | PASS: fluff OPEN throughout; drop rises off the fluff (SH040 end) then falls into the water (SH045). |
| SC04-SH045 → SH050 → SH055 | boat position | PASS: boat left in SH045, centre spin in SH050, exits right third in SH055. |
| SC04-SH055 → SC05-SH010 | direction | PASS: boat exits right; arrives from the left on the far shore. |
| SC05-SH010 → SH020 → SH025 → SH030 | positions, seed | PASS: boat left, Mo right; seed in Pip's hands → offered → in Mo's feelers → planted, fluff shut. |
| SC05-SH030 → SH040 → SH050 → SH055 | sprout, profile | PASS: seed planted, sprout appears in SH040; SH050/SH055 in PROFILE, Pip left facing right, Mo right facing left; no camera-facing pose. |

## Conflicts raised
None. Notes: hands settled in continuity@3 (left-hand salute, seed under the left arm, oar in the right hand and stowed on screen at the start of SC04-SH030). SC05-SH020 says 'both hands' for the seed, so no seed-under-arm is drawn there.

## Handoff
- Produced: storyboard@3 (52 panels: SC01 6, SC02 11, SC03 6, SC04 15, SC05 14; 25 shots, 42.0 s)
- Conflicts raised: none
- Panels with approved images: none (no generation budget)
- Next: re-run camera/continuity alignment, then image-prompt-engineer and film-editor
