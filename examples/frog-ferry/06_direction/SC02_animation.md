---
artifact: animation-plan
id: SC02_animation
version: 2
status: APPROVED
owner: animation-director
depends_on: [SC02_direction@2, CH-PIP@2, CH-MO@1, CH-DROP@1, style_bible@1, props@2]
updated: 2026-10-19
---
# SC02 Animation Plan (v2)

## Change note (v2, 2026-10-19)
- Re-split to SC02_direction@2: five shots, 8.0 s = 192 f. SH010 36 f, SH020 48 f (kept as one gag), SH030 36 f (surface, shake, climb), new SH035 36 f (refold, pop), new SH037 36 f (salute).
- QC-106: oar and seed hands fixed (rule below); oar floats during the sink and is back in the right hand at the end of SH035; salute is the LEFT hand with the seed tucked.
- QC-108 accepted deviation: paddling resumes in SC03-SH010; SH037 ends on the salute.
- Proposal to the director (no change made): SH020 end frame adds the floating oar and the dry seed tip above the ripples (director text says "ripples and the boat gone"). Fallback if rejected: ripples only, oar and seed arrive in SH030 start frame.
- Every shot has a clear start pose and end pose and is marked for Kling 2.1 first-last-frame (FLF).

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

## Shots (192 f = 8.0 s)

### SC02-SH010 (1.5 s = 36 f)
- Acting beat: act. Steady, calm paddling; this is the set-up for the joke.
- Key poses:
  - K1 f1: Boat left of centre, Pip seated, oar (right hand) dipping on the near side, chin up; seed under left arm, rings ahead of the bow.
  - K2 f18: Second stroke, rings spread wider ahead of the bow.
  - K3 f36: Boat at centre, Pip mid-stroke, small smile.
- Timing chart: stroke 1 (18) + stroke 2 (18) = 36 f; ripple creep as moving hold.
- Principles: arcs on the oar, ease-out glide, ears lag 2 f.
- Lip-sync accents: none.
- Start pose (frame text): Cream boat left of centre, Pip seated in profile facing right with the yellow oar in her right hand dipping into the water, closed seed under her left arm, ripple rings ahead of the bow, empty grey sky above.
- End pose (frame text): Boat at the centre of the frame, Pip mid-stroke with a small smile, oar in her right hand, seed under left arm, wider rings ahead of the bow, empty grey sky above.
- Off-model risks: none significant; keep the sky empty (the drop must not appear early).
- Kling 2.1 FLF: YES. "Boat glides right at a steady speed, two strokes; static camera." Generate 5 s, use 1.5 s.

### SC02-SH020 (2.0 s = 48 f)
- Acting beat: react. The drop hits, the boat folds, Pip sinks. One cause-and-effect gag.
- Key poses:
  - K1 f1: Drop at the top of frame, stretched 40%, directly above the boat's middle; boat intact, Pip seated.
  - K2 f16: Contact: drop squashes flat on the boat.
  - K3 f20: PLIP: boat folds down the middle (V), Pip's eyes pop wide; right hand lets go of the oar, left arm shoots up with the seed.
  - K4 f30: Boat flat just under the surface; Pip sinking, head and eyes above water; oar flips out and lands flat on the surface; seed held up.
  - K5 f42: Pip gone under; oar floating flat; seed stem and fluff tip held above the surface; bubbles.
  - K6 f48: Ripples settle; same elements, moving hold.
- Timing chart: fall on ones with acceleration (16) + contact hold (4) + collapse (10) + sink (12) + settle (6) = 48 f.
- Principles: stretch to squash on the drop, anticipation in Pip's pop-eyes, follow-through of the oar (spins once, then settles), overlap of ripples.
- Lip-sync accents: none.
- Start pose (frame text): Cream boat intact with Pip seated in profile facing right (oar in her right hand, closed seed under her left arm) at the centre of the puddle; one aqua teardrop at the top of the frame directly above the boat.
- End pose (frame text): Puddle surface with expanding ripple rings and a few bubbles where the boat was; a yellow paper oar floating flat on the surface; the tip of a closed white dandelion seed on its thin stem sticking up just above the water; no boat, no Pip visible.
- Off-model risks: drop size or shape change; boat vanishing instead of folding. Fallback: two clips (hit, then sink).
- Kling 2.1 FLF: YES. "The aqua drop falls straight onto the boat's middle, the boat flattens and sinks, the oar floats free, ripples spread; static camera."

### SC02-SH030 (1.5 s = 36 f)
- Acting beat: recover. Pip surfaces soggy, holds the seed high, shakes, climbs onto the paper, grabs the oar.
- Key poses:
  - K1 f1: Pip's soggy head (limp ears, dull mustard) breaks the surface beside the flat floating paper; left arm up with the seed held high and dry; oar floating to her right.
  - K2 f8: Head and shoulders clear, water streaming, eyes blink open.
  - K3 f15: Shake: body wrings left-right, droplets fly, seed held steady.
  - K4 f26: Climbing onto the flat paper.
  - K5 f36: Pip upright on the flat paper, left hand holding the seed high, right hand has scooped the oar and tucked it under the right arm.
- Timing chart: emerge (8) + shake on ones (14) + climb (8) + oar scoop and tuck (6) = 36 f.
- Principles: follow-through (ears and droplets lag), arcs on the shake, anticipation lean before the climb.
- Lip-sync accents: none.
- Start pose (frame text): Pip's soggy mustard-yellow head and her raised left arm holding the closed white seed high break the water surface, profile facing right, flat cream paper floating beside her, yellow oar floating nearby, ripples around.
- End pose (frame text): Pip kneeling upright on the flat floating cream paper in profile facing right, dripping, left arm raised holding the closed seed high, the yellow oar tucked under her right arm, ears limp.
- Off-model risks: soggy state (limp, darker); keep the seed clean white. Do not swap the arms.
- Kling 2.1 FLF: YES (start at the surface, end on the paper). "She bobs up, shakes off the water, climbs onto the paper and grabs the oar; static camera."

### SC02-SH035 (1.5 s = 36 f)
- Acting beat: act. Quick creases, the boat pops back.
- Key poses:
  - K1 f1: Pip on the flat paper, seed raised in her left hand, oar tucked under her right arm.
  - K2 f7: She lowers the seed and tucks it under her left arm; hands free.
  - K3 f14: Crease motions, hands darting at the paper (4 quick creases, on ones).
  - K4 f21: Anticipation: paper tilts, a pause of 2 f.
  - K5 f27: POP: boat stretches up 25% around her.
  - K6 f36: Boat settles; Pip seated in the boat, colour brighter, right hand has taken the oar back, seed under left arm.
- Timing chart: lower the seed (6) + creases (14) + pop (6) + overshoot, settle and re-grip (10) = 36 f.
- Principles: anticipation before the pop, overshoot and settle on the boat, secondary action in the damp droplets.
- Lip-sync accents: none.
- Start pose (frame text): same as SC02-SH030 end pose.
- End pose (frame text): Pip seated in the popped cream boat (slightly damp, grey-cream), profile facing right, yellow oar gripped in her right hand, closed seed under her left arm, her yellow colour back to bright, chin up.
- Off-model risks: render the fold as a cartoon pop and smear, not literal origami folds; fallback: cross-dissolve between a flat-paper frame and a popped-boat frame.
- Kling 2.1 FLF: YES (flat paper -> popped boat). Prompt: "she makes quick creases and the boat pops up around her; static camera."

### SC02-SH037 (1.5 s = 36 f)
- Acting beat: proud. Pip salutes the sky, stubbornly optimistic.
- Key poses:
  - K1 f1: Seated in the boat, oar in right hand, seed under left arm, chin up (= SH035 end).
  - K2 f6: Anticipation: chin tucks, right hand lays the oar across her lap (still gripping), left upper arm pins the seed.
  - K3 f14: Left forearm raised, hand snaps to the brow (arc), eyes up to the sky.
  - K4 f36: Held salute, smug; moving hold with a blink at f26.
- Timing chart: anticipation (6) + raise and hit (8) + moving hold with settle (22) = 36 f.
- Principles: anticipation, overshoot on the hand (1 f past the brow, settle), ears lag.
- Lip-sync accents: none.
- Start pose (frame text): identical to SC02-SH035 end pose.
- End pose (frame text): Pip seated in the boat in profile facing right, her left hand raised to her brow in a salute, left upper arm tight against her body keeping the closed seed tucked under it, yellow oar lying across her lap held in her right hand, chin up, smug smile.
- Off-model risks: the salute is by the far arm; keep the forearm above the head line so it reads in silhouette; do not let the model raise the right (oar) hand or drop the oar.
- Kling 2.1 FLF: YES. "She salutes the sky with her left hand; the only motion is the salute; static camera."

## Requests
- Model sheet views: Pip soggy and creased states; Pip side-on with the left forearm raised in a salute and the seed tucked; Pip side-on kneeling on flat paper.
- Timing conflicts: none. 36 + 48 + 36 + 36 + 36 = 192 f = 8.0 s.

## Handoff
- Produced: SC02_animation@2 (APPROVED), 5 shots, 192 f
- Next: production-manager (compile frames), script-supervisor (close CR-ISSUE-04/QC-106)
