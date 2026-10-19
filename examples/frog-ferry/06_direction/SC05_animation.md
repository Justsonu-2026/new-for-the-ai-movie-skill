---
artifact: animation-plan
id: SC05_animation
version: 3
status: APPROVED
owner: animation-director
depends_on: [SC05_direction@2, CH-PIP@2, CH-MO@1, CH-DROP@1, style_bible@1, props@2]
updated: 2026-10-19
---
# SC05 Animation Plan (v3; the 'v2' requested for the scene set)

## Change note (v3, 2026-10-19)
- The file already carried version 2 (an earlier unreviewed revision against SC05_direction@1). This re-cut to SC05_direction@2 therefore takes version 3 so the number only rises. Flagged for production-manager.
- Re-split: seven shots, 12.0 s = 288 f. SH010 48 f, SH020 36 f (offer), new SH025 36 f (take), SH030 36 f, SH040 60 f (payoff), SH050 36 f (look up, Mo waves), new SH055 36 f (Pip waves, fade out).
- QC-109: SH050/SH055 are PROFILE, Pip and Mo facing each other across the sprout.
- QC-106: oar STOWED in the beached boat; Pip's hands hold the OPEN seed (CR-002) and are empty after SH025. The wave in SH055 is the RIGHT (near-camera) hand, so the gesture reads in silhouette; it is not a salute.
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
- Scene tone: slowest and warmest. Mo moves like a snail: slow eases, long holds, her feelers are two thin lines with round dot eyes.

## Shots (288 f = 12.0 s)

### SC05-SH010 (2.0 s = 48 f)
- Acting beat: arrive -> notice. The boat slides in and bumps; Mo's feelers lift.
- Key poses:
  - K1 f1: Boat at the left of the far shore, Pip seated holding the open fluff seed overhead in both hands, Mo on the right beside the bare soil patch, feelers drooping.
  - K2 f17: Bump: boat stops with a squash.
  - K3 f23: Rebound and settle.
  - K4 f33: Mo's feelers twitch.
  - K5 f45: Feelers rise.
  - K6 f48: Feelers upright, hold.
- Timing chart: slide, ease-out (16) + bump and rebound (6) + settle (6) + feeler twitch (4) + rise (12) + hold (4) = 48 f.
- Principles: overshoot and settle, feelers lag the head by 2 f, anticipation (twitch).
- Lip-sync accents: none.
- Start pose (frame text): Far shore: the creased cream boat at the left edge with Pip seated in profile facing right holding the open fluff seed overhead in both hands, yellow oar lying on the boat floor; Mo at the right beside the bare soil patch, facing left, feelers drooping.
- End pose (frame text): Boat stopped at the shore, Pip seated with the open seed overhead, Mo with her feelers upright, bare soil patch beside her.
- Off-model risks: Mo's feelers must remain two thin lines with dot eyes; if Mo morphs, hold a still Mo layer and animate the feelers separately.
- Kling 2.1 FLF: YES. "The boat slides onto the shore and bumps to a stop; Mo's feelers lift; static camera."

### SC05-SH020 (1.5 s = 36 f)
- Acting beat: give. Pip steps out and offers the seed.
- Key poses:
  - K1 f1: Pip seated in the boat at the left, seed OPEN overhead in both hands.
  - K2 f13: Hop onto the shore.
  - K3 f21: Seed lowered from overhead, fluff tilts forward.
  - K4 f29: Arms extending toward Mo, hopeful smile.
  - K5 f36: Arms fully extended, seed offered; Mo still holds her feelers back.
- Timing chart: hop out (12) + lower the seed (8) + extend arms (8) + hold (8) = 36 f.
- Principles: anticipation before the hop, arcs on the arms, follow-through of the fluff.
- Lip-sync accents: none.
- Start pose (frame text): Two-shot: Pip seated in the boat at left in profile facing right, holding the open fluff seed overhead in both hands; Mo at right facing left with her feelers up, shy.
- End pose (frame text): Two-shot: Pip standing on the shore in profile facing right, both arms extended holding the open fluff seed toward Mo, hopeful grin; Mo at right facing left, feelers drawn back, a gap between them.
- Off-model risks: no contact yet; keep a clear gap. Pip's hands are on the stem, not the fluff.
- Kling 2.1 FLF: YES. "She hops out and holds the seed out to Mo; static camera."

### SC05-SH025 (1.5 s = 36 f)
- Acting beat: take. Mo hesitates, reaches and takes the seed in her feelers.
- Key poses:
  - K1 f1: End of SH020: seed offered.
  - K2 f7: Mo's feelers twitch forward, back (hesitation).
  - K3 f17: Feelers reach slowly to the stem.
  - K4 f25: Feelers curl around the stem, head tilts.
  - K5 f31: Pip's hands release.
  - K6 f36: Mo holds the seed; Pip's hands are empty and open.
- Timing chart: hesitation (6) + reach (10) + wrap (8) + release (6) + hold (6) = 36 f.
- Principles: slow in/out on the reach, anticipation (the twitch), overlap (head tilt follows the feelers).
- Lip-sync accents: none.
- Start pose (frame text): identical to SC05-SH020 end pose.
- End pose (frame text): Two-shot: Mo holding the dandelion seed's stem in her curled feelers, its open fluff above her, head tilted; Pip standing at left in profile with empty open hands, grinning.
- Off-model risks: contact between characters; the feelers wrap the stem below the fluff, leave a visible gap to Pip's hands.
- Kling 2.1 FLF: YES (seed in Pip's hands -> in Mo's feelers). "Mo reaches out and takes the seed with her feelers; static camera."

### SC05-SH030 (1.5 s = 36 f)
- Acting beat: act. Mo plants the stem; the fluff folds shut.
- Key poses:
  - K1 f1: Mo holding the open seed, beginning to turn toward the soil.
  - K2 f11: Seed lowered to the soil.
  - K3 f19: Stem pushed in, small soil puff.
  - K4 f27: Fluff folds shut into a ball.
  - K5 f36: Planted closed seed, Mo's feelers happy and up.
- Timing chart: turn (10) + lower (8) + push in, puff (6) + fluff closes (8) + hold (4) = 36 f.
- Principles: slow Mo timing, squash on the push, overlap.
- Lip-sync accents: none.
- Start pose (frame text): Mo holding the open-fluff seed beside the bare soil patch, soil centre.
- End pose (frame text): The seed planted upright in the soil patch, fluff folded shut into a ball (PR-SEED:PLANTED), Mo's feelers up beside it.
- Off-model risks: fluff closing back to a ball; keep it simple.
- Kling 2.1 FLF: YES. "Mo plants the stem in the soil and the fluff folds shut; static camera."

### SC05-SH040 (2.5 s = 60 f)  CLIMAX PAYOFF
- Acting beat: payoff. The last drop lands; the sprout pops with a boing.
- Key poses:
  - K1 f1: High angle, soil with the planted closed seed, no sprout.
  - K2 f9: Drop enters from the top.
  - K3 f17: Contact, PLIP beside the seed.
  - K4 f19: Pause 2 f (anticipation).
  - K5 f27: Sprout pops up, stretch 40%.
  - K6 f41: Overshoot and boing settle (3 decaying bobs).
  - K7 f60: Sprout standing, two round leaves, gentle leaf bob.
- Timing chart: hold (8) + fall on ones (8) + contact (2) + pop (8) + overshoot and settle (14) + moving hold (20) = 60 f.
- Principles: squash and stretch, overshoot, decaying oscillation, staging (the sprout the only saturated green).
- Lip-sync accents: none.
- Start pose (frame text): Overhead close view of the bare brown soil with the planted closed dandelion seed, no sprout.
- End pose (frame text): Same view, a bright leaf-green sprout with a short stem and two round leaves standing in the soil beside the seed.
- Off-model risks: small element; fallback: composite the sprout in post.
- Kling 2.1 FLF: YES. "One drop lands beside the seed and a green sprout pops up with a bounce; static camera."

### SC05-SH050 (1.5 s = 36 f)
- Acting beat: share. Both look from the sprout up at the sky; Mo's feelers wave.
- Key poses:
  - K1 f1: Profile two-shot: Pip left facing right, Mo right facing left, sprout centre between, both looking down at it, smiling.
  - K2 f9: Eyes lift first.
  - K3 f15: Heads tilt up.
  - K4 f25: Both looking up; Mo's feelers wave (2 waves).
  - K5 f36: Hold, feelers still waving gently.
- Timing chart: hold (8) + eyes lead (6) + heads tilt (10) + feeler wave (12) = 36 f.
- Principles: eyes lead, overlap, arcs on the feelers; slight movement only.
- Lip-sync accents: none.
- Start pose (frame text): Flat side-on medium wide: Pip at left in profile facing right, Mo at right in profile facing left, a small green sprout and planted seed between them; both look down at it, smiling; warm bright light.
- End pose (frame text): Same composition, both heads tilted up looking at the sky, Mo's feelers raised and waving, Pip's hands at her sides.
- Off-model risks: keep both in profile; two characters moving at once: keep the motion slight.
- Kling 2.1 FLF: YES. "They look up from the sprout at the sky and Mo's feelers wave; static camera."

### SC05-SH055 (1.5 s = 36 f)
- Acting beat: close. Pip waves at the sky; fade out.
- Key poses:
  - K1 f1: Both looking up (= SH050 end).
  - K2 f5: Anticipation: Pip's right hand dips slightly.
  - K3 f13: Hand up, wave begins.
  - K4 f27: Third wave, then hold; fade out begins (in the edit, f24 onward).
  - K5 f36: Pip's hand up mid-wave, Mo still, warm light; end of fade.
- Timing chart: raise hand (8) + three waves (16) + hold (12) = 36 f.
- Principles: anticipation, arc on the wave, moving hold on Mo's feelers.
- Lip-sync accents: none.
- Start pose (frame text): identical to SC05-SH050 end pose.
- End pose (frame text): Same composition: Pip's right hand raised in a small wave at the sky, Mo looking up with gently swaying feelers, sprout between them, warm bright light.
- Off-model risks: the wave is the near (right) hand only; keep the profile.
- Kling 2.1 FLF: YES. "She gives the sky a small wave; static camera." Fade out in the edit, not generated.

## Requests
- Model sheet views: Mo side-on (feelers up, reaching, waving), Pip side-on arms extended.
- Timing conflicts: none. 48 + 36 + 36 + 36 + 60 + 36 + 36 = 288 f = 12.0 s.

## Handoff
- Produced: SC05_animation@3 (APPROVED), 7 shots, 288 f
- Next: production-manager (compile frames)
