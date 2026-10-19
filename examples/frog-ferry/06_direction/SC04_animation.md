---
artifact: animation-plan
id: SC04_animation
version: 2
status: APPROVED
owner: animation-director
depends_on: [SC04_direction@2, CH-PIP@2, CH-MO@1, CH-DROP@1, style_bible@1, props@2]
updated: 2026-10-19
---
# SC04 Animation Plan (v2)

## Change note (v2, 2026-10-19)
- Re-split to SC04_direction@2: seven shots, 11.5 s = 276 f. SH010 36, SH020 24, SH030 60 (climax), SH040 60 (climax), new SH045 36, SH050 36 (spin only), new SH055 24.
- QC-109: SH010 is a flat PROFILE facing screen right (no three-quarter).
- QC-107 / QC-106: the oar is stowed on screen at the start of SH030 (right hand lays it on the boat floor, PR-OAR:STOWED), then both hands lift the seed. Script-supervisor should record STOWED beginning SC04-SH030 f1-f8.
- Every shot has a clear start pose and end pose and is marked for Kling 2.1 first-last-frame (FLF).
- Erratum (2026-10-19, no version bump; CR-ISSUE-13): SH050 splash wave is at the RIGHT of the boat (per SC04_direction erratum); K1, K2 and the start-pose text corrected. depends_on props@1 -> props@2 (all SC0N_animation, no version bump).

## Hand and prop rule (QC-106; identical in all five plans)
- PR-OAR is in Pip's RIGHT hand (the near-camera hand: Pip faces screen right, camera on the south bank). PR-SEED:CLOSED is clamped UNDER her LEFT arm (far arm), fluff over her left shoulder, left hand free.
- Salute = LEFT hand: the left upper arm stays pinned (seed stays tucked), only forearm and hand lift to the brow. The right hand keeps the oar, laid across her lap.
- Sink: right hand lets go, oar floats flat on the surface; left arm thrusts the seed up so the fluff stays dry. Recovery: right hand scoops the oar, tucks it under the right arm while she climbs and creases, and re-grips it in the right hand as the refold finishes.
- SC04-SH030 stows the oar on the boat floor (PR-OAR:STOWED); from then both hands hold the seed.

## Motion style rules
- Feel: 24 fps; characters on twos (12 drawings/s); drop, splash, pops and impacts on ones. Moving holds only (1-2 px drift, blink, ripple creep).
- Exaggeration: cartoony. Squash and stretch: Pip and boat up to 25%, drop up to 40%, volume preserved.
- Staging: side-on profile, Pip faces screen right (QC-109). Never deforms: Pip's triangular head and round black eyes (squint with lids/brows only), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform dark-teal outline; smears at most 3 frames.
- Timing convention: segment lengths are frames and sum to the shot total; key frame numbers are 1-based.

## Shots (276 f = 11.5 s)

### SC04-SH010 (1.5 s = 36 f)
- Acting beat: perceive -> decide. Eyes track up, then head, then a determined squint.
- Key poses:
  - K1 f1: MCU, Pip in flat profile facing right, level head, worried round eyes, flat ears (seed fluff over her left shoulder, out of frame below: oar still in her right hand).
  - K2 f10: Eyes slide up (eyes lead).
  - K3 f18: Head tilts up, chin lifts, ears begin to prick.
  - K4 f28: Brows lower, lids narrow: determined squint.
  - K5 f36: Hold with a tiny nod.
- Timing chart: hold (6) + eyes lead (8) + head lifts (8) + squint (8) + hold with nod (6) = 36 f.
- Principles: eyes lead, slow in/out on the head, overlap of the ears (2 f lag).
- Lip-sync accents: none.
- Start pose (frame text): Medium close-up of Pip, tiny yellow origami frog in flat side profile facing right, head level, big round worried black eyes, ears flat, creased paper, soft overcast.
- End pose (frame text): Same medium close-up in profile facing right, chin up, eyes narrowed in a determined squint (round beads under lowered brows), ears pricked up.
- Off-model risks: squint must be lid/brow, not an eye-shape change; no three-quarter turn.
- Kling 2.1 FLF: YES. "Her eyes look up, then her head lifts and she squints with determination; profile, static camera."

### SC04-SH020 (1.0 s = 24 f)
- Acting beat: the threat. The drop grows as it falls toward camera.
- Key poses:
  - K1 f1: One tiny aqua drop at centre-top of a flat grey sky.
  - K2 f16: Slight wobble, about 15% of frame.
  - K3 f24: One large glossy drop, big and close, centre.
- Timing chart: accelerating scale 5% -> 30% over 24 f in one move (ease in); wobble at f16.
- Principles: acceleration (spacing widens), stretch on the way down.
- Lip-sync accents: none.
- Start pose (frame text): Flat grey-blue overcast sky, one tiny aqua teardrop at the centre-top, nothing else.
- End pose (frame text): Same sky, one large glossy aqua teardrop at the centre, big and close, nothing else.
- Off-model risks: one clean teardrop only; no extra drops.
- Kling 2.1 FLF: YES (easy). "The single drop falls toward the camera and grows; static camera."

### SC04-SH030 (2.5 s = 60 f)  CLIMAX BEAT 1
- Acting beat: decide -> act. She stows the oar, lifts the seed with both hands, squeezes, and the fluff pops open like a parasol.
- Key poses:
  - K1 f1: Pip seated in the creased lopsided boat, profile facing right, oar in her right hand, closed seed under her left arm, squint.
  - K2 f8: Oar laid across the boat floor (STOWED), right hand free.
  - K3 f22: Both hands on the stem, seed lifted overhead, ball intact.
  - K4 f30: Anticipation: fluff ball squeezed small, Pip crouches 10%.
  - K5 f36: POP: fluff bursts wide like a parasol (on ones).
  - K6 f50: Overshoot 10% then settle, gentle bob.
  - K7 f60: Pip under the open fluff, both hands on the stem, eyes wide and braced.
- Timing chart: stow oar (8) + lift seed (14) + squeeze (8) + burst on ones (6) + overshoot and settle (14) + moving hold (10) = 60 f.
- Principles: anticipation (squeeze), squash/stretch on the fluff, overlap (filaments lag), staging with the white fluff the brightest shape.
- Lip-sync accents: none.
- Start pose (frame text): Pip in profile facing right seated in the lopsided creased cream boat, yellow oar in her right hand, closed white dandelion seed tucked under her left arm, determined squint, soft overcast.
- End pose (frame text): Pip seated in the boat in profile facing right, yellow oar lying on the boat floor, both hands holding the stem of the dandelion seed overhead, its fluff fully open and spread like a white parasol above her, eyes wide and braced.
- Off-model risks: fluff ball -> parasol transformation (PR-SEED:CLOSED start, PR-SEED:OPEN end keyframes); oar must not reappear in her hand.
- Kling 2.1 FLF: YES, the ideal case (two clear states). "She lifts the seed overhead and the fluff pops open like a parasol; static camera."

### SC04-SH040 (2.5 s = 60 f)  CLIMAX BEAT 2
- Acting beat: brace. The drop lands on the fluff and bounces twice.
- Key poses:
  - K1 f1: Pip braced under the open fluff, drop above it at the top of frame.
  - K2 f21: Contact 1: drop squashes on the fluff, fluff dips, Pip's knees flex.
  - K3 f29: Bounce 1 apex: drop stretches up.
  - K4 f39: Contact 2: smaller squash.
  - K5 f47: Bounce 2 apex: smaller pop.
  - K6 f60: Drop rises slowly off the fluff, fluff bobbing, Pip still under it, eyes tracking up.
- Timing chart: hold (6) + fall on ones (14) + contact (4) + up (8) + down (6) + contact 2 (4) + up 2 (8) + slow rise (10) = 60 f.
- Principles: squash/stretch, decreasing amplitude on the second bounce, follow-through (fluff dips and rebounds, 2 f lag).
- Lip-sync accents: none.
- Start pose (frame text): Pip under the open white fluff parasol in the lopsided boat, both hands on the stem, braced; one aqua drop directly above the fluff near the top of the frame; oar on the boat floor.
- End pose (frame text): Same composition, the aqua drop a short way above the fluff after its second bounce, rising; the fluff still open and slightly dipped; Pip braced under it.
- Off-model risks: riskiest motion; generate 3 takes; fallback is one bounce per clip or hand-keyed frames.
- Kling 2.1 FLF: YES (start: drop high; end: drop just above the fluff). "The drop lands on the fluff and bounces twice; static camera, Pip stays still."

### SC04-SH045 (1.5 s = 36 f)
- Acting beat: the splash. Drop falls beside the boat; crown rises and falls.
- Key poses:
  - K1 f1: Drop just above the water to the right of the boat; boat and open fluff at left.
  - K2 f9: Impact into the water.
  - K3 f19: Splash crown at its peak.
  - K4 f27: Crown collapsing.
  - K5 f36: Ripples only, boat and fluff at left.
- Timing chart: fall on ones (8) + impact (2) + crown rises (8) + crown falls (8) + ripples (10) = 36 f.
- Principles: overlap (droplets lag), arcs on droplets, ease-out on the rings.
- Lip-sync accents: none.
- Start pose (frame text): Wide view: lopsided boat with Pip under the open fluff at left, one aqua drop in the air just above the water to the right of the boat.
- End pose (frame text): Same wide view, drop gone, calm expanding ripple rings beside the boat at lower right, Pip under the open fluff.
- Off-model risks: the splash crown may be too complex; composite it as an element if needed.
- Kling 2.1 FLF: YES. "The drop falls into the water beside the boat; a splash crown rises and falls back to ripples; static camera."

### SC04-SH050 (1.5 s = 36 f)
- Acting beat: surprise. The wave spins the boat once.
- Key poses:
  - K1 f1: Boat at centre, Pip under the open fluff, wave arriving from the right.
  - K2 f7: Wave lifts the boat's right side; the boat begins to turn.
  - K3 f16: Mid-spin (90 degrees through the turn), Pip counter-leans, fluff lags.
  - K4 f25: Spin completing.
  - K5 f36: Boat facing right again, spin finished, fluff bobbing.
- Timing chart: wave arrives (6) + anticipation tilt (6) + spin ease in/out (18) + settle facing right (6) = 36 f.
- Principles: slow in/out on the spin, overlapping fluff, arcs on rotation.
- Lip-sync accents: none.
- Start pose (frame text): Lopsided cream boat at the centre, Pip under the open white fluff in profile facing right, a small wave at the right edge of the boat.
- End pose (frame text): Same boat at the centre, facing right again, Pip under the open fluff, grin starting, ripples around.
- Off-model risks: 360-degree spin breaks identity; fallback: turntable 180 plus smear and a hop, or a smear-frame crossfade.
- Kling 2.1 FLF: YES (start and end look nearly the same, so give the prompt the spin: "the boat spins once in place"). Fallback: two clips.

### SC04-SH055 (1.0 s = 24 f)
- Acting beat: enjoy. The boat speeds forward; Pip grins.
- Key poses:
  - K1 f1: Boat at centre, facing right (= SH050 end).
  - K2 f5: Stern dips (anticipation), Pip leans back.
  - K3 f17: Boat accelerating right, Pip grinning, fluff trailing.
  - K4 f24: Boat at the right third of the frame, fast, the wake behind.
- Timing chart: anticipation (4) + accelerate (12) + overshoot and glide (8) = 24 f.
- Principles: anticipation, ease-in, follow-through of the fluff and wake.
- Lip-sync accents: none.
- Start pose (frame text): identical to SC04-SH050 end pose.
- End pose (frame text): Boat at the right third of the frame moving right, Pip grinning, seed held overhead with the open fluff, wake behind.
- Off-model risks: lateral slide only; no extra turns.
- Kling 2.1 FLF: YES. "The boat zips forward to the right; static camera."

## Requests
- Model sheet views: Pip side-on, creased state, both hands overhead; Pip squint (profile).
- Timing conflicts: none. 36 + 24 + 60 + 60 + 36 + 36 + 24 = 276 f = 11.5 s.

## Handoff
- Produced: SC04_animation@2 (APPROVED), 7 shots, 276 f
- Next: production-manager (compile frames), script-supervisor (oar STOWED at SC04-SH030 f1-f8)
