---
artifact: animation-plan
id: SC04_animation
version: 1
status: APPROVED
owner: animation-director
depends_on: [SC04_direction@1, CH-PIP@2, CH-MO@1, CH-DROP@1, style_bible@1]
updated: 2026-10-19
---
# SC04 Animation Plan

## Motion style rules
- Frame rate / feel: 24 fps, animated on twos (12 drawings per second) for characters; the drop and splash on ones for snap; holds are moving holds (a 1-2 px drift or blink) so Kling does not freeze them.
- Exaggeration level: cartoony; squash and stretch up to 25% on Pip's boat gags and up to 40% on the drop (volume preserved).
- Never deforms: Pip's triangular head and round black eyes (they may squint but keep their shape), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform outline; no smears wider than 3 frames.

## Shots

### SC04-SH010 (2 s = 48 f)
- Acting beat: perceive → decide: Pip's eyes track up, brows lower, squint.
- Key poses:
  - f1: MCU: Pip's face level, relaxed worried eyes.
  - f16: Eyes lead up, then head tilts up.
  - f34: Brows lower, eyes narrow to a determined squint.
  - f48: Hold the squint with a tiny nod.
- Timing chart: f1-f10 hold; f10-f22 eyes lead; f22-f32 head; f32-f40 squint; f40-f48 hold. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): MCU Pip, level head, round worried black eyes, flat ears.
- End pose (frame text): MCU Pip, chin up, narrowed determined eyes, ears pricked up.
- Off-model risks: Squint shape must stay round-eyed; do the squint with the brow/lid, not an eye-shape change.
- Kling note: image-to-video: 'Pip's eyes look up, then she squints with determination; static camera.'

### SC04-SH020 (1.5 s = 36 f)
- Acting beat: the threat: drop grows as it falls toward camera.
- Key poses:
  - f1: Tiny aqua drop high in a flat grey sky.
  - f36: The drop fills a third of the frame, stretched and shiny.
- Timing chart: scale from 5% to 30% over 36 f with acceleration; one slight wobble at f24. (total 36 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Flat grey-blue sky with one tiny aqua drop at the centre-top.
- End pose (frame text): Same sky with one large glossy aqua drop at the centre, nearly filling the frame's middle.
- Off-model risks: Drop must stay a single clean teardrop; no extra drops.
- Kling note: image-to-video: 'the single drop falls toward the camera and grows larger'. Easy shot.

### SC04-SH030 (1.5 s = 36 f)
- Acting beat: decide → act: lift and pop the fluff.
- Key poses:
  - f1: Pip seated, both hands lifting the closed seed.
  - f14: Seed overhead, fluff ball squeezed (anticipation).
  - f22: POP: fluff bursts out wide, spread like a parasol.
  - f36: Settle: fluff gently bobbing, Pip under it.
- Timing chart: f1-f12 lift; f12-f16 squeeze; f16-f22 burst on ones; f22-f36 settle with overshoot 10%. (total 36 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip seated in the creased boat, holding the closed fluff seed above her head.
- End pose (frame text): Pip seated, the open fluff spread like a parasol above her, stem in both hands.
- Off-model risks: Fluff state change; keyframe both states (PR-SEED:CLOSED start, PR-SEED:OPEN end).
- Kling note: Prefer first-last-frame (if Kling supports it); otherwise image-to-video from the start frame with the open-fluff end described.

### SC04-SH040 (2 s = 48 f)
- Acting beat: brace → bounce: drop hits the fluff and bounces twice, splashes by the boat.
- Key poses:
  - f1: Drop at the top above the open fluff.
  - f12: Contact: drop squashes on the fluff, fluff dips.
  - f18: Bounce 1: drop pops up (stretch).
  - f26: Down again, second squash.
  - f32: Bounce 2: smaller pop.
  - f40: Drop falls beside the boat and splashes, crown of tiny droplets.
  - f48: Crown fades to ripples.
- Timing chart: on ones for the bounces; f1-f12 fall; f12-f18 first bounce; f18-f26 second; f26-f40 splash; f40-f48 ripple settle. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip under the open fluff in the creased boat, aqua drop directly above the fluff.
- End pose (frame text): Splash crown beside the boat on the water, drop gone, fluff stays open above Pip.
- Off-model risks: Drop bounces are the riskiest motion; fallback: shorter 2 s clips of one bounce each, or frame-by-frame hold.
- Kling note: image-to-video with a short clip, static camera; generate 3 takes.

### SC04-SH050 (2 s = 48 f)
- Acting beat: enjoy: splash wave spins the boat once and sends it forward.
- Key poses:
  - f1: Boat at centre, calm.
  - f12: Wave lifts the left side; the boat begins to spin (rotation 90°).
  - f28: Boat completes a 360° spin, Pip grinning under the fluff.
  - f48: Boat leaves frame at the right third, speed lines.
- Timing chart: f1-f10 hold; f10-f30 spin (ease in, ease out); f30-f48 acceleration right. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Boat at centre, Pip under the open fluff, splash crown on the left.
- End pose (frame text): Boat at the right third heading off right, Pip grinning, fluff open above.
- Off-model risks: Spin may break the boat's identity; 360° is hard. Fallback: a 180° spin plus a hop forward, or a crossfade smear frame.
- Kling note: image-to-video: 'the boat spins once then speeds right'. If it fails, request 'turn around and slide'.

## Requests
- Model sheet views needed: Pip three-quarter-from-above (for POV/hands-up poses), Pip soggy and creased states; Mo three-quarter.
- Timing conflicts: none; shot frame counts equal duration × 24.

## Handoff
- Produced: SC04_animation@1 (REVIEW), 5 shots, 216 frames
- Next: film-director (approve), production-manager (compile poses into shots)
