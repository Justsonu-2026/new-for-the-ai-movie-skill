---
artifact: production-log
id: production-log
version: 2
status: APPROVED
owner: production-manager
depends_on: [brief@2]
updated: 2026-10-19
---
# Production Log: Frog Ferry

Run mode: autonomous (stages 1-8, then independent QC preflight). Approvals below marked `approved_by: autonomy-policy`. Nothing is LOCKED except where stated. Paid generation: none (budget 0).

## Stage status
| # | Stage | Owner | Artifact@version | Status | Updated |
|---|---|---|---|---|---|
| 0 | Brief | production-manager | brief@1 | APPROVED | 2026-10-19 |
| 1 | Story | story-writer | story@1 | APPROVED | 2026-10-19 |
| 2 | Screenplay | screenwriter | screenplay@1 | LOCKED | 2026-10-19 |
| QC | Preflight 1 (independent subagent) | quality-control | 14_qc/QC_preflight_2026-10-19.md | NOT PASSED: 3 blockers, 13 FIX, 3 not verifiable (superseded by re-run below) | 2026-10-19 |
| QC | Preflight 2 (independent subagent) | quality-control | 14_qc/QC_preflight_2026-10-19_rerun.md | NOT PASSED: 0 blockers, 12 FIX, 4 not verifiable | 2026-10-19 |
| 8 | Storyboard | storyboard-artist | storyboard@3 (52 panels, 25 shots; html sheet) | APPROVED (text boards, no images) | 2026-10-19 |
| 6 | Continuity | script-supervisor | continuity@3 | APPROVED (CR-ISSUE-01..13 closed) | 2026-10-19 |
| 7 | Shot records | production-manager | 08_master/shots/SC01-SC05 v2 (25 shots, 42.0 s) | APPROVED under autonomy, validator 0 errors / 2 warnings | 2026-10-19 |
| 5 | Camera and lighting | cinematographer | SC01-SC05_camera@2 | APPROVED | 2026-10-19 |
| 4b | Animation direction | animation-director | SC01-SC04_animation@2, SC05_animation@3 (1008 f) | APPROVED | 2026-10-19 |
| 4a | Direction | film-director | SC01-SC05_direction@2 (25 shots, 42.0 s) | APPROVED | 2026-10-19 |
| 3c | World | production-designer | LOC-PUDDLE@1, props@2 | APPROVED | 2026-10-19 |
| 3b | Characters | character-designer | CH-PIP@2, CH-MO@1, CH-DROP@1 | APPROVED | 2026-10-19 |
| 3a | Style bible | visual-style-designer | style_bible@1 | APPROVED | 2026-10-19 |

## Approvals
| Date | Artifact@version | Approved by | Notes |
|---|---|---|---|
| 2026-10-19 | brief@1 | user (request) / autonomy-policy for assumptions | specs from the user's message |
| 2026-10-19 | story@1 (+concepts@1) | autonomy-policy | rubric all >=4; names Pip/Mo are working names |
| 2026-10-19 | screenplay@1 | autonomy-policy | 5 scenes, ~40 s, no dialogue. LOCKED under autonomy (user informed in final report) |
| 2026-10-19 | style_bible@1 | autonomy-policy | style frames not generated (no budget) |
| 2026-10-19 | CH-PIP@2, CH-MO@1, CH-DROP@1, lineup@1 | autonomy-policy | Pip has no clothes, 'costume' = paper finish; raindrop is faceless |
| 2026-10-19 | LOC-PUDDLE@1, props@1 | autonomy-policy | boat cream (distinct from yellow Pip); oar stowed in SC04 |
| 2026-10-19 | SC01-SC05_direction@1 | autonomy-policy | all shots static, <=3.5 s, WS-heavy for Kling image-to-video; specialist: animation-director on all scenes |
| 2026-10-19 | SC01-SC05_animation@1 | autonomy-policy | on twos, 24 fps; frame counts sum to 960 = 40 s |
| 2026-10-19 | storyboard@1 | autonomy-policy | text/placeholder boards only; Midjourney sketch prompts written, nothing generated (budget 0) |
| 2026-10-19 | 08_master/shots/SC01-SC05 | autonomy-policy | mode image-to-video for all 17 shots (derived, Kling unconfirmed); clip_length_s 5 (assumed); sound/music/vfx marked 'pending' until stage 10 |
| 2026-10-19 | SC01-SC05_camera@1 | autonomy-policy | all static, locked-off, south bank side-on, 35/50/70/85 mm; 'shallow' = soft wash |

## Decisions
| Date | Decision | Owner | Reason |
|---|---|---|---|
| 2026-10-19 | Kling 2.1 confirmed (brief@2): first-last-frame used for the 9 shots whose end state carries the story, image-to-video for the other 16; all clips 5 s; cut uses `keep` 0.5 to 0.5+duration s | production-manager | user answer; shot-record rules compiling-shot-records.md |
| 2026-10-19 | 8 shots added by the director's re-cut (17 to 25 shots, 40.0 to 42.0 s, +5%, inside the +/-10% rule) | film-director | QC-102 one primary action per shot |
| 2026-10-19 | Oar/seed hand rule: oar in the right hand, seed under the left arm, SC02-SH037 salute with the LEFT hand, oar stowed on screen at the start of SC04-SH030. Animation wins over continuity@2 (same tier as direction, more specific) | production-manager | CONFLICT between continuity@2 and animation@2, resolved, continuity@3 conformed |
| 2026-10-19 | Frame text: 20 of 50 frames sit at 300-343 words (full locks for every subject), none over the validator's 350; hex codes remain only inside the Mo and drop locks (verbatim) | production-manager | full locks for every subject (QC-105); accepted |
| 2026-10-19 | SC04 is 11.5 s vs the scene-index estimate of 9.0 s (+28%, validator warning) | film-director | climax beats get 2.5 s (QC-113); the locked screenplay is unchanged and the warning is accepted |
| 2026-10-19 | SUPERSEDED by brief@2 (Kling 2.1): plan for first-last-frame and image-to-video; native audio not relied on. Multi-reference (up to 3) is planned but untested together with a start frame: OPEN-QUESTION for the user | production-manager | Kling 2.1 confirmed |

## QC preflight 2026-10-19 (independent)
Validator 0/0, but verdict NOT PASSED. Blockers: QC-101 (5 s clips vs 1.5-3.5 s motion timing), QC-102 (4-5 actions in one clip in SC02-SH030, SC03-SH020, SC04-SH040, SC05-SH020), QC-103 (end states need first-last-frame; plain image-to-video cannot hold them). Verified by the production-manager: QC-104 (seed lock missing from the SC04-SH030 end frame) and the 5 s clip length. Nothing fixed yet; stages 7-8 stay APPROVED-under-autonomy but should be re-opened once the user answers the Kling questions.

## Preflight re-run (2026-10-19, after the director's re-cut)
RESULT (14_qc/QC_preflight_2026-10-19_rerun.md): NOT PASSED, 0 blockers, 12 FIX (QC-302 SC02-SH030 still packs 4 actions; QC-303 chaining mismatches at joins; QC-305 props missing from some frame text), 4 NOT-VERIFIABLE. QC-301/306/315 need user answers on Kling behaviour. Open for the next round.

Actions taken on QC-101..113: 101 (clip/keep policy, 5 s clips, keep range, retime note), 102 (director re-cut 17 to 25 shots), 103 (first-last-frame for end-state shots, chaining rule in the generation plan), 104/105 (locks rebuilt as their own clauses, full locks for subjects), 106/107 (hand and oar rules fixed), 108 (launch beat added, 'paddles on' accepted deviation CR-ISSUE-06), 109 (profile), 110 (compact frame text, hex removed from frame text), 111 (rain defined once, one-drop wording), 112 (dependencies and statuses), 113 (climax beats 2.5 s). The independent re-run result is in 14_qc/.

## Change requests
```yaml
id: CR-001
requested_by: production-manager (found while compiling SC04-SH030 frame text)
target: CH-PIP@1 (CO-PIP-01 identity_lock)
change: "Remove 'a small folded paper oar held in one hand when paddling' from the costume lock; the oar is the prop PR-OAR (state HELD/STOWED)"
reason: "The lock would put a held oar in every frame, contradicting PR-OAR:STOWED in SC04-SC05"
impact: [CH-PIP@2 dependants re-pointed: direction, animation, camera, continuity, shot records]
status: APPLIED
```
```yaml
id: CR-003
requested_by: quality-control (QC-102, QC-108, QC-109, QC-113)
target: SC01-SC05_direction@1
change: "Re-cut packed shots: one primary action and one end state per shot; add launch beat; profile staging; climax beats 2.5 s"
reason: "Independent preflight blockers"
impact: [SC01-SC05_direction@2, SC01-SC05_camera@2, SC01-SC05_animation@2/3, continuity@3, storyboard@3, props@2, shot records v2, generation_plan v2, master]
status: APPLIED
```
```yaml
id: CR-002
requested_by: script-supervisor
target: SC05_animation@1
change: "Hand-off starts with the fluff OPEN (PR-SEED:OPEN), closing only when Mo plants it"
reason: "Screenplay SC05 and props@1: the fluff folds shut on planting"
impact: [SC05_animation@2, SC05 shot records]
status: APPLIED
```

## Open assumptions (must be confirmed before LOCK)
| Marker | File | Text | Status |
|---|---|---|---|
| ASSUMPTION | 00_brief.md | Audience 3-7, G | open |
| ASSUMPTION | 00_brief.md | No spoken dialogue | open |
| OPEN-QUESTION | 00_brief.md | Kling version/features | RESOLVED (brief@2: Kling 2.1) |
| ASSUMPTION | 05_look/style_bible.md | style frames SF-01/SF-02 briefed but not generated (no budget) | open |
| ASSUMPTION | 08_master/shots | Kling 2.1 native fps, resolution, tier and credits unknown; conform to 24 fps and twos is planned in the edit | open |
| ASSUMPTION | 07_camera/continuity.md | oar stays with Pip through the sinkings (CR-ISSUE-04); Pip counts as DRY after shaking (CR-ISSUE-02) | open |
| ASSUMPTION | 01_story/story.md | names Pip and Mo are working names | open |

## Open questions for the user
- Kling 2.1 native output fps/resolution, tier and credit price; whether Midjourney --oref/--sref is on the plan.
- Confirm no-dialogue and audience (ASSUMPTIONs in the brief).

## Generation spend
| Date | Tool | Items | Credits/cost | Notes |
|---|---|---|---|---|
| none | | | 0 | no budget |

- 2026-10-19 (production-manager, autonomous): recompiled start_frame/end_frame of 50 lock warnings across SC01-SC05 shots by inserting the missing costume/prop/location locks verbatim from the owner records (short locks, full for the lead character costume where within 300 words; secondary characters swapped to short locks where needed for length). No creative content changed. Validator: 53 -> 3 warnings, 0 errors.
