---
artifact: generation-plan
id: generation_plan
version: 2
status: APPROVED
owner: production-manager
depends_on: [brief@2]
updated: 2026-10-19
---
# Generation plan (production-manager) - v2

Budget is 0, so nothing has been generated and nothing is queued to run. This plan fixes the order for when the user decides to generate. Basis: brief@2, Kling 2.1 (image-to-video, first-last-frame, clips of 5 s or 10 s, up to 3 reference images), Midjourney V7 for stills. The film is 25 shots, 42.0 s. Every shot has one primary action and one end state (QC-102).

## Rules for every Kling shot
- Every clip is generated at 5 s (the shortest length; 10 s is never needed). The cut uses 1.0-2.5 s of it: `keep` in the shot record names the range (start at 0.5 s, after a 0.5 s lead-in hold). Motion text is timed in clip time.
- If Kling spreads the action over the whole 5 s instead of the 0.5 s lead-in window, keep the action and retime it in the edit (speed-up = action span / cut duration). This is the film-editor's call and is checked against the on-twos cel feel.
- Camera is static and locked-off in every shot. Do not ask Kling for camera moves.
- Reference images (max 3 per clip): 1) the approved character or prop sheet for the shot's subject (Pip front/side, Mo side, boat or seed sheet), 2) the LOC-PUDDLE plate, 3) the style frame. Roles are stated in the video prompt. Never more than 3.
- Start and end frames are generated keyframes. In image-to-video the `end_frame` is a QC target only and is not submitted or counted in credits. In first-last-frame both frames are submitted.

## Order (each step feeds the next)
1. Style frames SF-01 and SF-02, Midjourney V7 with the STYLE lock. Approve the look first.
2. Character sheets: CH-PIP (turnaround and expressions; add the side view with the left forearm raised for the salute, and the SOGGY and CREASED states), CH-MO (side view), CH-DROP (falling, squash, splash). Use `--oref` with the approved front view only if the user's plan has it.
3. Location plates for LOC-PUDDLE (wide and far shore), prop sheets for PR-BOAT (NEW, FLAT, REFOLDED, CREASED), PR-SEED (CLOSED, OPEN, PLANTED), PR-OAR, PR-SPROUT.
4. Keyframes in shot order from each shot's `start_frame`, and `end_frame` for the first-last-frame shots. Test one compact Midjourney prompt first (locks, one state sentence, `--ar 16:9 --v 7`; palette in colour words) before the rest.
5. Video, one Kling clip per shot, 2 takes for the shots marked risky.

## Mode per shot
| Shot | Dur | Mode | Why / fallback |
|---|---|---|---|
| SC01-SH010 | 2.0 | image-to-video | still pose with a head lift |
| SC01-SH020 | 2.0 | first-last-frame | boat placed on the water and Pip boards (end state carries the beat) |
| SC01-SH025 | 1.5 | image-to-video | chain: start frame = end frame of SC01-SH020 |
| SC02-SH010 | 1.5 | image-to-video | |
| SC02-SH020 | 2.0 | first-last-frame | drop hits and the boat is gone (riskiest of SC02; fallback: two clips, hit then sink, and a cross-dissolve) |
| SC02-SH030 | 1.5 | image-to-video | surface and shake; droplets are the risk (post cleanup) |
| SC02-SH035 | 1.5 | first-last-frame | flat paper to popped boat (fallback: cross-dissolve between the two keyframes) |
| SC02-SH037 | 1.5 | image-to-video | chain: start frame = end frame of SC02-SH035; left-hand salute with the seed tucked is the risk |
| SC03-SH010 | 2.0 | first-last-frame | same gag, faster; matched framing to SC02-SH020 |
| SC03-SH020 | 1.5 | first-last-frame | refold to the lopsided boat |
| SC03-SH025 | 1.5 | image-to-video | chain from SC03-SH020; the shadow grows (not a falling object) |
| SC04-SH010 | 1.5 | image-to-video | strict profile |
| SC04-SH020 | 1.0 | image-to-video | sky POV, drop grows |
| SC04-SH030 | 2.5 | first-last-frame | closed fluff to open parasol: the film's hero shot; 3 takes; the oar is laid down in the first 0.3 s |
| SC04-SH040 | 2.5 | image-to-video | two bounces; riskiest of SC04; fallback: two 1 s clips, one per bounce |
| SC04-SH045 | 1.5 | image-to-video | splash crown; fallback: composite the crown in post |
| SC04-SH050 | 1.5 | image-to-video | one spin; fallback: smear crossfade |
| SC04-SH055 | 1.0 | image-to-video | chain from SC04-SH050 |
| SC05-SH010 | 2.0 | image-to-video | bump and rebound |
| SC05-SH020 | 1.5 | image-to-video | the offer |
| SC05-SH025 | 1.5 | first-last-frame | seed passes from Pip's hands to Mo's feelers |
| SC05-SH030 | 1.5 | first-last-frame | fluff folds shut as the stem goes in |
| SC05-SH040 | 2.5 | first-last-frame | sprout appears from nothing; fallback: composite the sprout in post |
| SC05-SH050 | 1.5 | image-to-video | profile two-shot |
| SC05-SH055 | 1.5 | image-to-video | chain from SC05-SH050 |

First-last-frame: 9 shots. Image-to-video: 16 shots.

## Chaining
Where one continuous action is split across shots with identical framing (SC01-SH020 to SH025, SC02-SH030 to SH035 to SH037, SC03-SH020 to SH025, SC04-SH050 to SH055, SC05-SH020 to SH025, SC05-SH050 to SH055), the approved last frame of clip N is exported as the start frame for clip N+1 and the QC check is that clip N's last frame matches shot N+1's start frame. Cuts between different framings do not chain.

## Credits estimate
Unknown until the Kling tier and credit price are confirmed. Count: 25 shots x about 2 takes = about 50 Kling clips of 5 s; at most 34 Midjourney keyframes (25 start frames and 9 end frames for first-last-frame shots, fewer where chained frames are reused); about 12 sheets and plates. Ask before starting any of it.

## Questions that change this plan
Kling 2.1 native output frame rate and resolution; credit price per 5 s clip and tier; whether the watermark is removed; whether Midjourney `--oref` and `--sref` are on the user's plan. A conform step (retime to 24 fps, step to twos, trim) is part of the film-editor's plan, not a generation step.
