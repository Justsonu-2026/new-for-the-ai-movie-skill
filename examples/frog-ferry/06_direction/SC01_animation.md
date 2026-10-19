---
artifact: animation-plan
id: SC01_animation
version: 2
status: APPROVED
owner: animation-director
depends_on: [SC01_direction@2, CH-PIP@2, CH-MO@1, CH-DROP@1, style_bible@1, props@2]
updated: 2026-10-19
---
# SC01 Animation Plan (v2)

## Change note (v2, 2026-10-19)
- Re-split to SC01_direction@2: SH010 3.0 -> 2.0 s (48 f), SH020 3.0 -> 2.0 s (48 f, launch only), new SH025 (36 f, paddle off). Scene = 132 f = 5.5 s.
- QC-106 hand rule applied (below). Pip faces screen right in every shot, so the camera (south bank) sees her RIGHT side: the oar hand is the near hand, the seed arm is the far arm.
- QC-108: the launch is now animated: Pip slides the boat off the bank with the oar blade (oar stays in the right hand), then hops in.
- Every shot has a clear start pose and end pose and is marked for Kling 2.1 first-last-frame (FLF).

## Hand and prop rule (QC-106; same text in all five plans)
- PR-OAR is in Pip's RIGHT hand (near-camera hand) whenever it is in play (PR-OAR:HELD).
- PR-SEED (CLOSED) is clamped UNDER Pip's LEFT arm (far-side arm), stem along her flank, fluff peeking over/behind her left shoulder. The left hand stays free below the seed.
- Salute (SC02-SH037) is the LEFT hand: the left upper arm stays pinned to the body so the seed stays tucked; only the forearm and hand lift to the brow. The right hand keeps the oar, laid across her lap.
- Sinking (SC02-SH020, SC03-SH010): the right hand lets go, the oar floats flat on the surface; the left arm thrusts the seed up so the fluff stays above water. Recovery: the right hand scoops the oar and tucks it under the right arm while she climbs/creases, and it is back in the right hand at the end of the refold (SC02-SH035, SC03-SH020).
- SC04-SH030 stows the oar (PR-OAR:STOWED) on the boat floor with the right hand before both hands lift the seed.
- Seed holds with both hands (SC04 onward) are not exceptions: left/right are only needed while the seed is under the arm.

## Motion style rules
- Feel: 24 fps; characters animated on twos (12 drawings/s); drop, splash, pops and impacts on ones. Moving holds only (1-2 px drift, blink, ripple creep) so Kling does not freeze.
- Exaggeration: cartoony. Squash and stretch: Pip and boat up to 25%, drop up to 40%, volume preserved.
- Staging: side-on profile; Pip faces screen right in all shots (QC-109). No three-quarter poses.
- Never deforms: Pip's triangular head and round black eyes (squint with lids/brows only), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform dark-teal outline; smears at most 3 frames.
- Timing convention: segment lengths are in frames and sum to the shot total. Frame numbers in key poses are 1-based; the last key is on the final frame.

## Shots (132 f = 5.5 s)

### SC01-SH010 (2.0 s = 48 f)
- Acting beat: perceive -> hope. Pip is calm, then sees Mo (eyes first, then head, then body), brightens, a small hope bounce.
- Key poses:
  - K1 f1: Pip stands upright on the left bank in profile facing right, weight on both back legs, seed clamped under her left arm (fluff behind her shoulder), oar in her right hand hanging at her side, folded boat at her feet; calm eyes level; Mo tiny and far right, feelers drooping.
  - K2 f14: Only the eyes have moved: black beads slide right toward the far shore.
  - K3 f26: Head follows, chin lifts; line of action tilts up and right.
  - K4 f32: Anticipation squash on the back legs.
  - K5 f40: Small hop stretch, eyes widen and brighten.
  - K6 f48: Pip tall, chin up, bright eyes on Mo; seed and oar unchanged.
- Timing chart: hold with blink f8 (12) + eyes lead (8) + head and body, ease in/out (10) + squash (4) + hop stretch (8) + settle (6) = 48 f.
- Principles: anticipation (squash), overlap (ears lag 2 f, seed fluff lags the body 2 f), slow in/out on the head, appeal in the straight-up silhouette.
- Lip-sync accents: none.
- Start pose (frame text): Pip, tiny yellow origami frog in side profile facing right on the left bank, standing calm and upright, closed dandelion seed clamped under her left arm, yellow paper oar held in her right hand, cream folded boat on the bank at her feet, eyes level; far right shore: tiny Mo with drooping feelers.
- End pose (frame text): Same position, Pip stretched tall with chin up and wide bright eyes looking toward the far right shore; seed still under left arm, oar in right hand; Mo unchanged.
- Off-model risks: Mo is a speck (short_lock; composite a still Mo layer if she drifts). Keep the seed under the far arm (do not let it swap to the near hand).
- Kling 2.1 FLF: YES. Clear start (calm, eyes level) and end (tall, bright). Prompt: "her eyes move first, then her head lifts, a small hopeful bounce; Mo stays still; static camera." Generate 5 s, use the first 2.0 s.

### SC01-SH020 (2.0 s = 48 f)
- Acting beat: decide -> act. Pip slides the boat off the bank with the oar blade, crouches, hops in.
- Key poses:
  - K1 f1: Crouched at the water's edge, oar blade hooked on the boat's bow, boat half over the bank edge; seed under left arm.
  - K2 f9: The boat slides onto the water with a small ring; the oar is still in her right hand.
  - K3 f20: Anticipation squash, deep crouch.
  - K4 f28: Leap apex, full stretch, arc over the water toward the boat.
  - K5 f38: Landing, boat dips (boat squash 20%), Pip squashes.
  - K6 f48: Pip seated in the afloat boat at the water's edge, oar in right hand, seed under left arm, rings.
- Timing chart: push (8) + boat slides and settles (6) + anticipation (6) + leap on ones (10) + landing squash (8) + settle (10) = 48 f.
- Principles: anticipation, arc on the jump, squash on the landing, overshoot of the boat bob, the oar and fluff lag the body.
- Lip-sync accents: none.
- Start pose (frame text): Pip crouched on the bank in profile facing right, oar in her right hand with the blade resting on the bow of the cream paper boat that sits half over the water's edge, closed seed under her left arm.
- End pose (frame text): Pip seated upright in the cream paper boat afloat at the bank's edge, profile facing right, yellow oar in her right hand, closed seed under her left arm, small rings around the hull, water to the right.
- Off-model risks: boat shape during the board (fallback: start frame with Pip in the boat and the shore sliding past); the oar must not jump to the left hand.
- Kling 2.1 FLF: YES (start = crouched on the bank, end = seated afloat). Prompt: "she nudges the boat onto the water with the oar, hops in and sits; static camera." Fallback: two clips (slide, hop).

### SC01-SH025 (1.5 s = 36 f)
- Acting beat: act. A steady paddle pair; confidence.
- Key poses:
  - K1 f1: Seated in the afloat boat (= SH020 end), oar raised ready in the right hand.
  - K2 f10: Stroke 1: blade dips on the near side, boat starts to move right.
  - K3 f22: Stroke 2: blade dips again, boat has speed.
  - K4 f36: Boat one quarter into the puddle, gliding right, rings behind.
- Timing chart: ready (4) + stroke 1 (12) + stroke 2 (12) + glide/settle (8) = 36 f.
- Principles: arcs on the oar, ease-out on the glide, rings lag the hull.
- Lip-sync accents: none.
- Start pose (frame text): identical to SC01-SH020 end pose.
- End pose (frame text): Pip seated in the cream boat, oar in her right hand mid-stroke, boat a quarter of the way into the puddle, heading right, small rings behind, left shore behind her.
- Off-model risks: paddle cycle may morph; ask for two strokes only. Boat must keep pointed ends.
- Kling 2.1 FLF: YES (start frame = SH020 end frame; end frame defined). Prompt: "she paddles twice, the boat glides right; static camera."

## Requests
- Model sheet views: Pip soggy and creased states; Pip left-forearm-raised (salute with seed tucked) side-on; Mo side-on.
- Timing conflicts: none. 48 + 48 + 36 = 132 f = 5.5 s.

## Handoff
- Produced: SC01_animation@2 (APPROVED), 3 shots, 132 f
- Next: production-manager (compile start/end frames), cinematographer
