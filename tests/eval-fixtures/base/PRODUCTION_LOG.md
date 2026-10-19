---
artifact: production-log
id: production-log
version: 3
status: DRAFT
owner: production-manager
depends_on: []
updated: 2026-10-19
---
# Production Log: The Two Knocks

Run mode: gated through stage 3; autonomous for stages 4 to 7 (done); **autonomous again for stages 8 to 10, the SC01 image and video prompts and the QC preflight** (user instruction 2026-10-19: "run, in autonomous mode: stage 8 storyboard ... finally a quality-control preflight of the whole package. Re-assemble the master document at the end"). Back to gated after the master document is re-assembled. No generation in either run.

## Stage status
| # | Stage | Owner | Artifact@version | Status | Updated |
|---|---|---|---|---|---|
| 0 | Brief | production-manager | brief@1 | APPROVED | 2026-10-19 |
| 1 | Story | story-writer | story@1, concepts@1 | APPROVED (GATE 1 passed; concept C1) | 2026-10-19 |
| 2 | Screenplay | screenwriter | screenplay@1 | LOCKED (GATE 2 passed) | 2026-10-19 |
| 3 | Character / world / style bibles | character-designer, production-designer, visual-style-designer | style_bible@1, CH-LAN@1, CH-MACAQUE@1, CH-AHMA@1, lineup@1, LOC-NIGHT-MARKET@1, LOC-BACK-ALLEY@1, props@1 | APPROVED (GATE 3 passed: user approved all eight design decisions as proposed) | 2026-10-19 |
| 4 | Direction | film-director, action-director (SC02) | SC01_direction@1, SC02_direction@1, SC02_action@1, SC03_direction@1, SC04_direction@1 | APPROVED (autonomy policy) | 2026-10-19 |
| 5 | Camera and lighting | cinematographer | SC01_camera@1 to SC04_camera@1 | APPROVED (autonomy policy) | 2026-10-19 |
| 6 | Continuity | script-supervisor | continuity@1 | APPROVED (autonomy policy); 0 blockers | 2026-10-19 |
| 7 | Shot records and master document | production-manager | SC01_shots@4, SC02_shots@3, SC03_shots@3, SC04_shots@4, generation_plan@2, master | REVIEW (validator 0 errors; user review requested; master re-assembled 2026-10-19) | 2026-10-19 |
| 8 | Storyboard | storyboard-artist | storyboard@1 (55 panels, sheet built) | APPROVED (autonomy policy) | 2026-10-19 |
| 9 | Paper edit | film-editor | edit_plan@2 (38 shots, 96.0 s) | APPROVED (autonomy policy) | 2026-10-19 |
| 10 | Voice, music, sound, VFX | voice-director, music-director, sound-designer, vfx-supervisor | voice@1, music@1, sfx@1, vfx_plan@1 | APPROVED (autonomy policy) | 2026-10-19 |
| 10b | Image and video prompts (references, SC01 keyframes, SC01 video) | image-prompt-engineer, video-prompt-engineer | images@1 (23 prompts), video@1 (12 records, SC01 only) | REVIEW (prompts, not approved media; nothing generated) | 2026-10-19 |
| 10c | QC preflight of the package | quality-control | QC_preflight_2026-10-19 | NOT PASSED: 6 PASS, 6 FIX (4 applied, 2 open), 3 NOT-VERIFIABLE | 2026-10-19 |
| 11-15 | Reference stills through delivery | various | - | not started (blocked: no budget) | |

## Approvals
| Date | Artifact@version | Approved by | Notes |
|---|---|---|---|
| 2026-10-19 | concept C1 | user | Selected |
| 2026-10-19 | story@1 | user | Approved, with title, name Lan and setting confirmed; saucer logic delegated to screenwriter |
| 2026-10-19 | brief@1 | user | Specs updated from the Gate 1 answers |
| 2026-10-19 | screenplay@1 | user | Approved incl. two-saucer solution and Lan's 3 lines ('Almost closing.', 'Hey!', 'Ah Ma.'); LOCKED by production-manager, user informed |
| 2026-10-19 | style_bible@1, CH-LAN@1, CH-MACAQUE@1, CH-AHMA@1, lineup@1, LOC-NIGHT-MARKET@1, LOC-BACK-ALLEY@1, props@1 | user | GATE 3: "All eight design decisions are approved as you proposed." Status set REVIEW to APPROVED. The Gate 3 assumptions are recorded as resolved below |
| 2026-10-19 | SC01_direction@1, SC02_direction@1, SC02_action@1, SC03_direction@1, SC04_direction@1 | approved_by: autonomy-policy | Stage 4. Accepted ASSUMPTIONs: customer is a faceless extra; SC02 gap is a 55 cm service path (shot as a neutral shot from inside the path); macaque taps with its left palm; Lan kneels with the tin on her thigh for the pour; pot absent in SC04 |
| 2026-10-19 | SC01_camera@1, SC02_camera@1, SC03_camera@1, SC04_camera@1 | approved_by: autonomy-policy | Stage 5. Accepted: SC03 camera sits 4 m west of the alley centre line, so the west wall is treated as flown-out (virtual) in the wide shots; no new light sources added to any set |
| 2026-10-19 | continuity@1 | approved_by: autonomy-policy | Stage 6. 0 blockers, 1 major (resolved), 7 minor (2 open). Accepted: tin LID-ON (loose, offset) is the script's 'open tin'; empty fruit twist goes back into the tin unseen |
| 2026-10-19 | storyboard@1, edit_plan@2, voice@1, music@1, sfx@1, vfx_plan@1 | approved_by: autonomy-policy | Stages 8 to 10. Accepted: the 38-shot coverage stays (user decision); the edit plan proposes no cuts; CR-E01 and CR-E02 (retime SC02 follow shots, hold SC01-SH010) are PROPOSALS, not applied; music added in post (no tool); the three dialogue lines have no cloning, voice identity not controllable in Veo; every VFX alternative is a PROPOSAL to the director, none applied |
| 2026-10-19 | (nothing LOCKED under autonomy) | - | No artifact was marked LOCKED during stages 4 to 10 |

## Decisions
| Date | Decision | Owner | Reason |
|---|---|---|---|
| 2026-10-19 | Run mode: gated | user | Stated in request |
| 2026-10-19 | Targets: Veo 3.1 (video), Gemini 2.5 Flash Image (stills) | user | Stated in request, model confirmed at Gate 1 |
| 2026-10-19 | Title 'The Two Knocks'; protagonist Lan; Southeast Asian night market | user | Gate 1 |
| 2026-10-19 | Saucer object logic resolved by screenwriter | user | Gate 1 delegation |
| 2026-10-19 | Setting stays regional Southeast Asia: no specific country, no country-identifying flags, scripts, brands or landmarks | user | Gate 2 answer to open question |
| 2026-10-19 | Two-saucer resolution and Lan's 3 lines approved | user | Gate 2 |
| 2026-10-19 | No generation budget yet; no music tool (music added in post) | user | Gate 1; restated at stages 4 to 7: no generation was run |
| 2026-10-19 | Autonomous mode for stages 4 to 7 only | user | Request |
| 2026-10-19 | Screen-direction plan: camera north of the lane looking south, travel west reads screen right; alley camera on the west side, north = screen left | film-director | Keeps one direction through SC01 to SC03; SC04 repeats SC01's camera |
| 2026-10-19 | SC02-SH070 shot from inside the service path as a neutral shot | film-director, cinematographer | Continuity CR-01: the camera on the north side cannot see a north-side gap and a south-side camera would cross the line |
| 2026-10-19 | Shot count 38 (target brief said roughly 15 to 25); planned runtime 96.0 s of 90 s (+6.7%, inside the 81 to 99 s range) | film-director | Each shot carries one action, which Veo needs. **User decision 2026-10-19: keep the 38-shot coverage.** The paper edit (stage 9) proposes no cuts |
| 2026-10-19 | Still no generation budget: nothing generated | user | Restated in the stage 8 to QC request |
| 2026-10-19 | Veo 3.1 first-last-frame clip lengths are TO-VERIFY (the user cannot confirm yet) | user | Marked in the nine first-last-frame shot records, generation_plan, images, video, vfx and edit plans |
| 2026-10-19 | Shot records SC01_shots@2 and SC04_shots@2: frame text corrected (saucer and tin states in SC01-SH030 and SH070, hand-only noise in SC01 and SC04); @3 and @4: sound, music and VFX fields filled from the plans; @4/@3: first-last-frame length notes | production-manager | Found while writing the image prompts. Shot records were REVIEW, so no change request was needed |
| 2026-10-19 | Department templates (READY, PLANNED, HOLD) conflict with the validator statuses: records carry status REVIEW and a separate `gen_state` field | production-manager | Validator accepts only lifecycle statuses |
| 2026-10-19 | Shot records compiled with status REVIEW, not APPROVED | production-manager | The user wants to review the master document |
| 2026-10-19 | Music and sound fields marked "pending" in shot records | production-manager | Superseded: filled from sfx@1 and music@1 at stage 10 |

## Change requests
```yaml
# none (the CR-01 fix was applied before the stage 4 and 5 documents were approved, so no change request was needed)
```

## Open assumptions (must be confirmed before LOCK)
| Marker | File | Text | Status |
|---|---|---|---|
| ASSUMPTION | 00_brief.md | Format = short film; 24 fps | open |
| ASSUMPTION | 00_brief.md | Family-safe general audience rating | open |
| ASSUMPTION | 00_brief.md | English, minimal dialogue | open |
| ASSUMPTION | 00_brief.md | Warm magical-realist adventure tone | open |
| ASSUMPTION | 00_brief.md | Veo native audio only; music in post (user: no music tool) | resolved |
| ASSUMPTION | 01_story/story.md | Southeast Asian night market; protagonist named Lan | resolved (user confirmed) |
| ASSUMPTION | 01_story/story.md | Macaque is wild, untrained, non-magical | open |
| ASSUMPTION | 03_characters/CH-LAN.md | Lan early 30s; graze on RIGHT forearm (knocking hand) from SC02 | resolved (Gate 3) |
| ASSUMPTION | 03_characters/CH-MACAQUE.md | 'Notched left ear' = animal's own left (viewer's right facing camera); adult, sex unspecified | resolved (Gate 3) |
| ASSUMPTION | 03_characters/CH-AHMA.md | Mid 70s, photo only, loose family resemblance to Lan | resolved (Gate 3) |
| ASSUMPTION | 04_world/ | Lane runs E-W, chase goes west; alley N-S off the lane's west end; stall bulb has a wall switch; tin dark green, saucer chip at 3 o'clock; SC04 'open tin' = lid set back loosely | resolved (Gate 3) |
| ASSUMPTION | 05_look/style_bible.md | 35 mm film emulation (grain, halation) as the photoreal flavour | resolved (Gate 3) |
| ASSUMPTION | 06_direction/SC01_direction.md | Customer is an unnamed, faceless extra | accepted under autonomy, open for user |
| ASSUMPTION | 06_direction/SC02_action.md | The gap (L6) is a 55 cm service path behind the north-side stalls, about 4 m long, a gimbal operator fits | accepted under autonomy, open for user |
| ASSUMPTION | 06_direction/SC03_direction.md | The macaque taps with its left (camera-side) palm; Lan kneels with the tin on her thigh for the pour and the knock | accepted under autonomy, open for user |
| ASSUMPTION | 06_direction/SC04_direction.md | Pot is not on the burner in SC04 | accepted under autonomy, open for user |
| ASSUMPTION | 07_camera/SC03_camera.md | Alley camera 4 m west of the centre line, west wall flown-out (virtual) | accepted under autonomy, open for user |
| ASSUMPTION | 07_camera/continuity.md | Empty fruit twist goes back into the tin unseen; the macaque follows Lan back to the wire between SC03 and SC04 | accepted under autonomy, open for user |
| TO-VERIFY | 08_master/generation_plan.md | Veo 3.1 first-last-frame clip lengths (planned 4 s, 6 s for SC02-SH050 and SC03-SH070) | open: user cannot confirm yet |
| ASSUMPTION | 10_prompts/images.md | Gemini 2.5 Flash Image accepts 3 reference images and 370 to 850 word prompts | open (user checks the UI) |
| ASSUMPTION | 10_prompts/video.md | Veo 3.1 accepts 3 references; image-to-video clips of 4 s; native dialogue and effects | open (user checks the UI) |
| ASSUMPTION | 11_sound/voice.md | Lan's three lines are synthetic voices from Veo; voice identity differs between clips at worst | open |
| ASSUMPTION | 11_sound/sfx.md | Delivery loudness -14 LUFS, true peak -1 dBTP (placeholder; platform not named) | open |
| ASSUMPTION | 11_sound/music.md | Music is added in post from an unnamed source (composer, licensed library or future tool); D dorian palette of plucked string, bowed drone, wood percussion | open |

## Open questions for the user
- Budget/credit limit for generation (needed before stage 11; none will be spent before then). **Blocks all generation.**
- Check the tools' UIs: reference-image limit and prompt length for Gemini 2.5 Flash Image; reference limit and first-last-frame clip lengths for Veo 3.1 (QC-007)
- (resolved 2026-10-19) Shot count: keep the 38-shot coverage
- Delivery platform and loudness target (sfx.md)
- Title card: is there one, at the start or end? It would add time to the 96.0 s timeline (vfx_plan)
- Music source: composer, licensed library or a tool later (music.md)
- If the three Lan lines differ in voice between clips: accept the best take, or fund a replacement pass (voice.md)
- Minor open items: wire height 2.1 m vs 2.4 m (production-designer, QC-005, affects the NM-P1 plate); macaque position relative to the stool in SC03 (film-director, QC-006); where the empty fruit twist goes (screenwriter)
- Optional proposals from the editor and VFX supervisor awaiting the film-director: CR-E01 (trim four SC02 follow shots by 0.5 s each), CR-E02 (hold SC01-SH010 for 3.5 s), and the VFX fallbacks (cut around the macaque drop, graze insert, etc.)

## Generation spend
| Date | Tool | Items | Credits/cost | Notes |
|---|---|---|---|---|
| (none) | | | 0 | No paid generation has been run |
