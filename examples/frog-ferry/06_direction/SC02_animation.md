---
artifact: animation-plan
id: SC02_animation
version: 1
status: APPROVED
owner: animation-director
depends_on: [SC02_direction@1, CH-PIP@2, CH-MO@1, CH-DROP@1, style_bible@1]
updated: 2026-10-19
---
# SC02 Animation Plan

## Motion style rules
- Frame rate / feel: 24 fps, animated on twos (12 drawings per second) for characters; the drop and splash on ones for snap; holds are moving holds (a 1-2 px drift or blink) so Kling does not freeze them.
- Exaggeration level: cartoony; squash and stretch up to 25% on Pip's boat gags and up to 40% on the drop (volume preserved).
- Never deforms: Pip's triangular head and round black eyes (they may squint but keep their shape), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform outline; no smears wider than 3 frames.

## Shots

### SC02-SH010 (1.5 s = 36 f)
- Acting beat: act: steady paddling; calm confidence (that is the setup for the joke).
- Key poses:
  - f1: Seated, oar in left stroke, chin up.
  - f18: Oar in right stroke, ripple rings spread ahead of the bow.
  - f36: Boat centred in frame, Pip smiling.
- Timing chart: two paddle strokes of 18 f; moving hold in the ripples. (total 36 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Boat left of centre, Pip seated paddling, ripple rings ahead of the bow, empty grey sky above.
- End pose (frame text): Boat at centre of frame, Pip mid-stroke, rings widening.
- Off-model risks: none significant
- Kling note: image-to-video, static camera; 'boat glides right at steady speed'.

### SC02-SH020 (2 s = 48 f)
- Acting beat: react: the hit. Drop arrives, boat folds, sinks.
- Key poses:
  - f1: Drop at top of frame, stretched tall (stretch 40%), boat intact.
  - f18: Drop reaches the boat: contact frame, drop squashes flat (squash).
  - f22: PLIP: boat folds down the middle (V shape), Pip's eyes pop wide.
  - f34: Boat flat just under the surface, Pip sinking, only her head and eyes above the water.
  - f48: Ripples only, a few bubbles.
- Timing chart: f1-f18 fall on ones with acceleration (spacing widens); f18-f22 impact hold 4 f; f22-f34 collapse; f34-f48 sink and settle. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Intact boat with Pip seated centre; aqua teardrop at the top of frame directly above the boat's middle.
- End pose (frame text): Empty puddle with expanding ripple rings and a few bubbles where the boat was.
- Off-model risks: Drop changing size or shape; boat vanishing is easier than folding. Fallback: two clips (hit, then sink).
- Kling note: first-last-frame if available, otherwise image-to-video: 'the aqua drop falls straight down onto the boat's middle; the boat flattens and sinks; ripples spread; static camera.'

### SC02-SH030 (3.5 s = 84 f)
- Acting beat: perceive → decide → act → proud: Pip pops up, holds the seed high, refolds, salutes.
- Key poses:
  - f1: Pip's head and the raised closed-fluff seed break the surface, soggy limp mustard, flat ears, water streaming.
  - f20: Shake: head and body wring side to side; droplets fly.
  - f36: Pip climbs onto the flat floating cream paper, hands busy making quick fold motions.
  - f54: Boat pops into shape (stretch up 25%, then settle), Pip in it.
  - f68: Anticipation lean, then a crisp salute (hand to head) to the sky; chin up.
  - f84: Hold the salute, smug; oar back in hand.
- Timing chart: f1-f12 emerge; f12-f30 shake (overlap: ears lag 2 f); f30-f50 fold motions on ones; f50-f58 pop and settle; f58-f70 salute anticipation and hit; f70-f84 moving hold. (total 84 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip's head and the closed seed held high above the water at the centre, boat not visible, ripples around.
- End pose (frame text): Pip seated in the repopped cream boat, bright yellow again, right hand in a salute, oar held in the other hand, seed under arm.
- Off-model risks: Folding paper: render as a cartoon pop, not literal folds; keep the seed dry-looking (white fluff stays clean).
- Kling note: Likely two clips: (a) surfacing and shaking, (b) refold-pop and salute. Image-to-video, static camera.

## Requests
- Model sheet views needed: Pip three-quarter-from-above (for POV/hands-up poses), Pip soggy and creased states; Mo three-quarter.
- Timing conflicts: none; shot frame counts equal duration × 24.

## Handoff
- Produced: SC02_animation@1 (REVIEW), 3 shots, 168 frames
- Next: film-director (approve), production-manager (compile poses into shots)
