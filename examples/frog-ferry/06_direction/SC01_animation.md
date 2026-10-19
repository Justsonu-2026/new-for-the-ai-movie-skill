---
artifact: animation-plan
id: SC01_animation
version: 1
status: APPROVED
owner: animation-director
depends_on: [SC01_direction@1, CH-PIP@2, CH-MO@1, CH-DROP@1, style_bible@1]
updated: 2026-10-19
---
# SC01 Animation Plan

## Motion style rules
- Frame rate / feel: 24 fps, animated on twos (12 drawings per second) for characters; the drop and splash on ones for snap; holds are moving holds (a 1-2 px drift or blink) so Kling does not freeze them.
- Exaggeration level: cartoony; squash and stretch up to 25% on Pip's boat gags and up to 40% on the drop (volume preserved).
- Never deforms: Pip's triangular head and round black eyes (they may squint but keep their shape), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform outline; no smears wider than 3 frames.

## Shots

### SC01-SH010 (3 s = 72 f)
- Acting beat: perceive → think → act: Pip sees Mo (eyes lead, then head), brightens, a small hope bounce.
- Key poses:
  - f1: Pip stands on the left bank in a calm upright crouch, weight on both back legs, head level looking at the viewer-side water, seed held closed under her left arm; Mo far right, feelers drooping.
  - f30: Eyes snap to the far shore first; head follows, chin lifts; line of action tilts up and to the right.
  - f56: Anticipation: tiny squash down on the back legs (2 f) then a small up-stretch; eyes widen and brighten.
  - f72: Pip tall, chin up, eyes bright, gazing right; hold with a blink at f66.
- Timing chart: f1-f24 hold (blink f18); f24-f36 eyes lead; f36-f52 head and body follow (ease in/out); f52-f60 squash; f60-f68 stretch; f68-f72 settle. (total 72 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip seated upright on the left bank, closed-fluff seed tucked under her arm, calm face, looking slightly down at the water; Mo tiny at the far right with drooping feelers.
- End pose (frame text): Pip stretched tall, chin up, wide bright eyes, looking toward the far right shore; Mo tiny at far right, feelers still drooping.
- Off-model risks: Mo is a tiny shape; if Kling morphs her, composite a still Mo layer.
- Kling note: image-to-video from SH010 start frame (or first-last-frame if available): 'Pip's eyes move first to the far shore, then her head lifts; slow small bounce; Mo stays still; static camera.'

### SC01-SH020 (3 s = 72 f)
- Acting beat: decide → act: Pip drops the boat, hops in, paddles away.
- Key poses:
  - f1: Pip on the bank holding the cream boat at the water's edge; seed under arm.
  - f14: Anticipation: crouch (squash) with boat lowered.
  - f28: Pip leaps (stretch) in an arc into the floating boat; arc peaks mid-air, boat dips on landing (squash on the boat).
  - f44: Seated; the oar dips on the left: paddle stroke 1.
  - f72: Seated, paddling, boat moving right into the water; rings behind.
- Timing chart: f1-f10 hold; f10-f16 squash; f16-f30 jump on ones; f30-f38 landing squash and settle; f38-f72 two paddle cycles of 17 f each; boat drifts right 1/4 of the frame. (total 72 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip crouched at the left bank, cream paper boat afloat beside her, seed under arm, oar in hand.
- End pose (frame text): Pip seated in the cream boat, oar in the water, boat a quarter of the way into the puddle heading right, ripples behind.
- Off-model risks: Boarding jump may morph the boat; fallback: start frame with Pip already in the boat and the shore sliding past.
- Kling note: image-to-video: 'Pip hops into the boat and paddles away to the right; static camera.' Ask Kling for short clips (3 s). Overlap-generate 4 s and trim.

## Requests
- Model sheet views needed: Pip three-quarter-from-above (for POV/hands-up poses), Pip soggy and creased states; Mo three-quarter.
- Timing conflicts: none; shot frame counts equal duration × 24.

## Handoff
- Produced: SC01_animation@1 (REVIEW), 2 shots, 144 frames
- Next: film-director (approve), production-manager (compile poses into shots)
