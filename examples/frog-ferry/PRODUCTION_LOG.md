---
artifact: production-log
id: production-log
version: 1
status: APPROVED
owner: production-manager
depends_on: [brief@1]
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
| QC | Preflight (independent subagent) | quality-control | 14_qc/QC_preflight_2026-10-19.md | NOT PASSED: 3 blockers, 13 FIX, 3 not verifiable | 2026-10-19 |
| 8 | Storyboard | storyboard-artist | storyboard@1 (31 panels, 17 shots; html sheet built) | APPROVED (text boards, no images) | 2026-10-19 |
| 6 | Continuity | script-supervisor | continuity@1 | APPROVED (1 MAJOR fixed, 4 MINOR) | 2026-10-19 |
| 7 | Shot records | production-manager | 08_master/shots/SC01-SC05 (17 shots, 40.0 s) | APPROVED, validator 0 errors / 0 warnings | 2026-10-19 |
| 5 | Camera and lighting | cinematographer | SC01-SC05_camera@1 | APPROVED | 2026-10-19 |
| 4b | Animation direction | animation-director | SC01-SC05_animation@1 (960 f) | APPROVED | 2026-10-19 |
| 4a | Direction | film-director | SC01-SC05_direction@1 (17 shots, 40.0 s) | APPROVED | 2026-10-19 |
| 3c | World | production-designer | LOC-PUDDLE@1, props@1 | APPROVED | 2026-10-19 |
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
| 2026-10-19 | Plan for lowest-common-denominator Kling: image-to-video, short clips, no reliance on native audio or multi-reference | production-manager | Kling features unconfirmed |

## QC preflight 2026-10-19 (independent)
Validator 0/0, but verdict NOT PASSED. Blockers: QC-101 (5 s clips vs 1.5-3.5 s motion timing), QC-102 (4-5 actions in one clip in SC02-SH030, SC03-SH020, SC04-SH040, SC05-SH020), QC-103 (end states need first-last-frame; plain image-to-video cannot hold them). Verified by the production-manager: QC-104 (seed lock missing from the SC04-SH030 end frame) and the 5 s clip length. Nothing fixed yet; stages 7-8 stay APPROVED-under-autonomy but should be re-opened once the user answers the Kling questions.

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
| OPEN-QUESTION | 00_brief.md | Kling version/features | open |
| ASSUMPTION | 05_look/style_bible.md | style frames SF-01/SF-02 briefed but not generated (no budget) | open |
| ASSUMPTION | 08_master/shots | Kling clip length 5 s and image-to-video only | open |
| ASSUMPTION | 07_camera/continuity.md | oar stays with Pip through the sinkings (CR-ISSUE-04); Pip counts as DRY after shaking (CR-ISSUE-02) | open |
| ASSUMPTION | 01_story/story.md | names Pip and Mo are working names | open |

## Open questions for the user
- Kling version and features.

## Generation spend
| Date | Tool | Items | Credits/cost | Notes |
|---|---|---|---|---|
| none | | | 0 | no budget |
