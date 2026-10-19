# Generation plan (production-manager)

No generation budget, so nothing has been generated and nothing is queued to run. This plan fixes the order for when the user decides to generate. Kling's version and features are unconfirmed, so every shot is planned as plain image-to-video from a start frame, with first-last-frame as an upgrade where marked.

## Order (each step feeds the next)
1. Style frames SF-01 (SC01) and SF-02 (SC05), Midjourney V7, using the STYLE lock. Approve the look first.
2. Character sheets: CH-PIP (turnaround + 7 expressions), CH-MO (turnaround), CH-DROP (falling / squash / splash poses). Midjourney V7 `--oref` with the approved front view for later views; check identity drift against the locks.
3. Location plates for LOC-PUDDLE: P1 wide, P2 far shore.
4. Prop sheets: PR-BOAT (NEW, FLAT, REFOLDED, CREASED), PR-SEED (CLOSED, OPEN, PLANTED), PR-SPROUT.
5. Keyframes, in shot order, from each shot's `start_frame` (and `end_frame` where the mode is first-last-frame). 34 stills for 17 shots.
6. Video: one image-to-video clip per shot (5 s assumed), 2-3 takes for the risky shots below.

## Mode per shot
| Shot | Mode | Upgrade or fallback |
|---|---|---|
| SC01-SH010, SC01-SH020, SC02-SH010 | image-to-video | none |
| SC02-SH020, SC03-SH010 | image-to-video | first-last-frame if supported; fallback: two clips (hit, sink) |
| SC02-SH030, SC03-SH020 | image-to-video | two clips each (surface + shake/refold, then pop + salute / shadow + ears) |
| SC04-SH010, SC04-SH020 | image-to-video | easy |
| SC04-SH030 | image-to-video | first-last-frame preferred (fluff ball to parasol) |
| SC04-SH040 | image-to-video | riskiest: 3 takes; fallback 1 s clips per bounce |
| SC04-SH050 | image-to-video | fallback: 180 degree turn then slide, or smear crossfade |
| SC05-SH010, SC05-SH030, SC05-SH050 | image-to-video | none |
| SC05-SH020 | image-to-video | first-last-frame preferred (seed hand-off) |
| SC05-SH040 | image-to-video | fallback: composite the sprout in post |

## Credits estimate
Unknown until the Kling plan is confirmed. Count: 17 shots x about 2 takes = about 34 video generations, plus about 34 keyframes and about 12 sheets/plates in Midjourney. Ask before starting any of it.

## Questions that change this plan
Kling version; image-to-video and first-last-frame availability; clip lengths (5 s assumed); native audio (not planned for); whether Midjourney V7 `--oref` is available on the user's plan.
