---
artifact: animation-plan
id: SC05_animation
version: 2
status: APPROVED
owner: animation-director
depends_on: [SC05_direction@1, CH-PIP@2, CH-MO@1, CH-DROP@1, style_bible@1]
updated: 2026-10-19
---
# SC05 Animation Plan

## Motion style rules
- Frame rate / feel: 24 fps, animated on twos (12 drawings per second) for characters; the drop and splash on ones for snap; holds are moving holds (a 1-2 px drift or blink) so Kling does not freeze them.
- Exaggeration level: cartoony; squash and stretch up to 25% on Pip's boat gags and up to 40% on the drop (volume preserved).
- Never deforms: Pip's triangular head and round black eyes (they may squint but keep their shape), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform outline; no smears wider than 3 frames.

## Shots

### SC05-SH010 (2.5 s = 60 f)
- Acting beat: arrive → notice: boat bumps; Mo's feelers lift.
- Key poses:
  - f1: Boat sliding in from the left, near the soil patch.
  - f20: Bump: boat stops with a squash and a rebound.
  - f36: Mo's feelers twitch, then rise slowly.
  - f60: Feelers fully upright, hold.
- Timing chart: f1-f20 slide with ease out; f20-f26 bump and rebound; f26-f36 hold; f36-f52 feelers rise; f52-f60 hold. (total 60 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Boat at left of the far shore, Mo on the right beside the bare soil patch, feelers drooping.
- End pose (frame text): Boat stopped on the far shore, Pip seated, Mo with feelers upright.
- Off-model risks: Mo's feelers must stay two thin lines with round dot eyes.
- Kling note: image-to-video, static camera. Generate Mo's feeler lift as a separate 2 s clip if needed.

### SC05-SH020 (3 s = 72 f)
- Acting beat: give and receive: Pip steps out and offers; Mo wraps the stem.
- Key poses:
  - f1: Pip steps off the boat onto the shore, seed in both hands.
  - f24: Pip holds the seed out toward Mo, a hopeful smile.
  - f44: Mo's feelers curl around the stem; her head tilts.
  - f72: Mo holds the seed, Pip's hands empty.
- Timing chart: f1-f20 step; f20-f28 offer anticipation; f28-f44 reach; f44-f60 grasp; f60-f72 hold. (total 72 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip on the shore beside the boat at left holding the seed with its fluff open like a parasol in both hands; Mo at right facing her.
- End pose (frame text): Mo holding the seed's stem in her feelers, its open fluff above her; Pip with empty open hands, grinning.
- Off-model risks: Contact between characters; keep a 1 cm gap or an overlap in the frame. Fallback: end frame shows the seed between them.
- Kling note: first-last-frame if available; else image-to-video with a short 3 s clip.

### SC05-SH030 (2.5 s = 60 f)
- Acting beat: act: Mo plants the stem; fluff folds shut.
- Key poses:
  - f1: Mo holds the seed, turns toward the soil.
  - f20: Seed lowered to the soil.
  - f32: Stem pushed in, a small puff of soil.
  - f48: Fluff folds shut into a ball.
  - f60: Hold: planted seed, Mo's feelers happy.
- Timing chart: f1-f20 slow turn (she is a snail); f20-f32 push; f32-f48 fluff closes; f48-f60 hold. (total 60 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Mo with the open-fluff seed beside the bare soil patch.
- End pose (frame text): The seed planted upright in the soil, closed fluff, Mo's feelers up beside it.
- Off-model risks: Fluff closing back to a ball; keep it simple.
- Kling note: image-to-video, static camera.

### SC05-SH040 (2 s = 48 f)
- Acting beat: payoff: last drop lands, sprout pops with a boing.
- Key poses:
  - f1: High angle on the soil with the planted seed.
  - f12: Drop enters from the top.
  - f20: Contact PLIP on the soil beside the seed.
  - f28: Sprout pops (stretch 40%), then bounce settle.
  - f48: Sprout standing, two round leaves.
- Timing chart: f1-f12 hold; f12-f20 fall on ones; f20-f28 pop; f28-f40 overshoot and settle; f40-f48 hold. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Soil with the planted seed (closed fluff), no sprout.
- End pose (frame text): Same soil, a bright green sprout with two round leaves beside the seed.
- Off-model risks: Sprout is a small element; fallback: composite in post.
- Kling note: image-to-video or first-last-frame.

### SC05-SH050 (2 s = 48 f)
- Acting beat: share: look at the sprout, look up, small wave.
- Key poses:
  - f1: Pip and Mo look down at the sprout.
  - f16: Both heads lift to the sky, eyes lead.
  - f32: Pip raises one hand; Mo's feelers wave.
  - f48: Wave at the sky, fade out begins.
- Timing chart: f1-f10 hold; f10-f26 look up; f26-f40 wave; f40-f48 hold into fade out. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip left, Mo right, the sprout in the middle, both looking down.
- End pose (frame text): Both looking up, Pip's hand raised in a small wave, Mo's feelers waving.
- Off-model risks: Two characters moving together; keep movement slight.
- Kling note: image-to-video; fade-out added in editing (not generated).

## Requests
- Model sheet views needed: Pip three-quarter-from-above (for POV/hands-up poses), Pip soggy and creased states; Mo three-quarter.
- Timing conflicts: none; shot frame counts equal duration × 24.

## Handoff
- Produced: SC05_animation@1 (REVIEW), 5 shots, 288 frames
- Next: film-director (approve), production-manager (compile poses into shots)
