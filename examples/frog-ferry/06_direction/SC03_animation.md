---
artifact: animation-plan
id: SC03_animation
version: 1
status: APPROVED
owner: animation-director
depends_on: [SC03_direction@1, CH-PIP@2, CH-MO@1, CH-DROP@1, style_bible@1]
updated: 2026-10-19
---
# SC03 Animation Plan

## Motion style rules
- Frame rate / feel: 24 fps, animated on twos (12 drawings per second) for characters; the drop and splash on ones for snap; holds are moving holds (a 1-2 px drift or blink) so Kling does not freeze them.
- Exaggeration level: cartoony; squash and stretch up to 25% on Pip's boat gags and up to 40% on the drop (volume preserved).
- Never deforms: Pip's triangular head and round black eyes (they may squint but keep their shape), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform outline; no smears wider than 3 frames.

## Shots

### SC03-SH010 (2.5 s = 60 f)
- Acting beat: perceive → hit: faster repeat; Pip looks up relaxed, then eyes pop; the sink is quicker than SC02.
- Key poses:
  - f1: Boat at centre, Pip seated, ripple rings at the bow, head tilted up with a relaxed smile.
  - f14: Aqua drop enters from the top, stretched.
  - f22: Contact, drop squashes; boat folds and sinks at double speed.
  - f42: Ripples only.
- Timing chart: f1-f14 relaxed hold with blink; f14-f22 fall on ones; f22-f30 impact and collapse (faster than SC02); f30-f60 ripples settle. (total 60 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Same framing as SC02-SH020 start: boat intact centre, drop at the top; ripple rings ahead of the bow.
- End pose (frame text): Ripples only, same as SC02-SH020 end, slightly more rings.
- Off-model risks: Framing drift from SC02-SH020; reuse that start frame as the base.
- Kling note: image-to-video, static camera, 'the drop hits the same spot and the boat sinks fast.'

### SC03-SH020 (3.5 s = 84 f)
- Acting beat: react → act → dread: scowl, flash refold, shadow arrives, ears flatten.
- Key poses:
  - f1: Pip's soggy head breaks the surface, scowling, brows down, cheeks puffed.
  - f18: Fast refold motion (quicker than SC02), blurred creases.
  - f36: Lopsided creased boat pops up, one side wall lower; Pip seated.
  - f54: A small round grey shadow grows on the water lower-right; Pip's eyes slide to it.
  - f84: Ears flat against her head, mouth a small worried line; hold.
- Timing chart: f1-f10 emerge; f10-f30 refold in half the frames of SC02; f30-f40 pop; f40-f60 shadow grows (ease in); f60-f72 eye-lead look; f72-f84 ears flatten and hold. (total 84 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip's soggy scowling head at the surface, seed raised, cream paper floating flat.
- End pose (frame text): Pip seated in the lopsided creased boat, flat ears, worried line mouth, a small round shadow on the water at lower right.
- Off-model risks: Lopsided boat consistency (PR-BOAT:CREASED); shadow may become a drop. Keep it a plain soft grey ellipse.
- Kling note: Two clips if needed: surfacing+refold, then shadow+ears. Static camera.

## Requests
- Model sheet views needed: Pip three-quarter-from-above (for POV/hands-up poses), Pip soggy and creased states; Mo three-quarter.
- Timing conflicts: none; shot frame counts equal duration × 24.

## Handoff
- Produced: SC03_animation@1 (REVIEW), 2 shots, 144 frames
- Next: film-director (approve), production-manager (compile poses into shots)
