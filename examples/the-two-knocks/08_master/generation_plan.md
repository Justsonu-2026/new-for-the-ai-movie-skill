---
artifact: generation-plan
id: generation_plan
version: 2
status: REVIEW
owner: production-manager
depends_on: [brief@1, style_bible@1, continuity@1]
updated: 2026-10-19
---
# Generation Plan: The Two Knocks

Nothing here has been generated and no credits have been spent. There is no budget yet, so this plan is a proposal with counts only. Prompts are written by the image-prompt-engineer and video-prompt-engineer (stage 8 onward) from the compiled shot records.

## Counts (full first pass, no retries)
| Item | Count | Notes |
|---|---|---|
| Style frames | 3 | SF-01 to SF-03 in the style bible |
| Character sheets | 7 | Lan: turnaround, expressions, poses, costume BASE/GRAZED; macaque: turnaround, poses; Ah Ma photo portrait |
| Prop sheets | 3 | Tin, the two saucers, the shelf group |
| Location plates | 5 | NM-P1, NM-P2, NM-P4, AL-P1, AL-P2 |
| Keyframes | 47 | 29 image-to-video shots need a start frame; 9 first-last-frame shots need start and end |
| Video clips | 38 | 35 clips of 4 s and 3 clips of 6 s = 158 s of generation for 96 s of cut (to-verify for the nine first-last-frame clips) |
| Reserve for retries | plan 2 to 3 attempts per risky shot | See risk batch below |

## Order of generation
1. **Style frames** SF-01, SF-02, SF-03: lock the look before anything else. QC, then approve.
2. **Reference sheets**, each approved before the next group uses it: macaque turnaround (the notched left ear is the highest-drift item), Lan turnaround and costume sheet, tin sheet and saucer sheet (the chip at 3 o'clock must match), Ah Ma photo portrait and the shelf group.
3. **Location plates**: NM-P1 (stall front), NM-P2 (lane west), NM-P4 (closing), AL-P1 and AL-P2 (alley).
4. **Keyframes** in story order, SC01 first. SC04-SH010 is made from the SC01-SH010 keyframe as a reference so the mirror matches.
5. **Risk batch** (video, before the rest): SC02-SH050 (graze appears), SC01-SH090 (boil-over), SC01-SH070 (drop from wire), SC03-SH070 (lid opens), SC03-SH020 (two taps). If these hold, release the rest.
6. **Video clips** in story order, one clip per shot, generated longer than the cut and trimmed in the edit.

## Modes
| Mode | Shots |
|---|---|
| first-last-frame (9) | SC01-SH030, SC01-SH070, SC02-SH050, SC03-SH070, SC03-SH090, SC03-SH100, SC04-SH020, SC04-SH040, SC04-SH050 |
| image-to-video (29) | all other shots |

## Notes for the prompt engineers
- TO-VERIFY (user cannot confirm yet): Veo 3.1 first-last-frame clip lengths. Clip lengths of 4, 6 and 8 s are documented for Veo 3.1 in general; whether first-last-frame accepts all of them is not confirmed. The nine first-last-frame shots carry `clip_length_s` 4 (6 for SC02-SH050 and SC03-SH070) as a plan only. Every figure below that depends on it is to-verify: the 158 s of generation and the clip counts for those nine shots. Each of those shots has an image-to-video fallback (SC01-SH030 and SC01-SH070 are written in video.md).
- The compiled `start_frame` and `end_frame` text is long (350 to 830 words) because it pastes every lock verbatim. The image-prompt-engineer condenses it to the tool's limit while keeping each lock intact, and uses reference images for the rest.
- Audio: Veo native audio for the three dialogue lines, ambience and effects. Music is added in post (no music tool). The two knocks (SC02-SH100) are heard before they are seen (SC03-SH020): generate them as a matching pair.
- Reference-image roles: character sheets = identity; tin and saucer sheets = prop identity; location plates = layout; style frames = look.
