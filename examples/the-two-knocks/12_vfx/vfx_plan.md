---
artifact: vfx-plan
id: vfx_plan
version: 1
status: APPROVED
owner: vfx-supervisor
depends_on: [SC01_shots@4, SC02_shots@3, SC03_shots@3, SC04_shots@4, style_bible@1, edit_plan@2, sfx@1]
updated: 2026-10-19
---
# VFX Plan: The Two Knocks

Nothing is generated and there is no budget. Every estimate below counts generations (images and clips), not money. They assume the retry ladder of 2 to 3 attempts per risky shot and are rough until the video-prompt-engineer fixes clip lengths. **Veo 3.1 first-last-frame clip lengths are to-verify** (the user cannot confirm them yet); each estimate that uses first-last-frame depends on that. Tools in the brief: Gemini 2.5 Flash Image for stills (including keyframe edits), Veo 3.1 for video. The user has no compositing tool named, so compositing steps (tracked overlays, blur masks, grade fades) are marked "post" and need an editor; each has a generator-only fallback.

## Classification
| Shot | Flag / risk | Native or VFX | Reason |
|---|---|---|---|
| SC01-SH020 | photo of Ah Ma stays soft (flag) | VFX (light) | see its VFX record below |
| SC01-SH030 | saucer flip, chip at 3 o'clock | VFX (keyframe edit) | see its VFX record below |
| SC01-SH050 | macaque notched left ear (identity) | Native + identity control | The notched left ear is the highest-drift item; handled by the macaque sheet and keyframes, no VFX record |
| SC01-SH070 | drop from wire, hands close on tin | VFX (risk batch) | see its VFX record below |
| SC01-SH090 | boil-over foam and steam (flag) | VFX (element fallback) | see its VFX record below |
| SC01-SH100 | boil-over, ladle drop (flag) | VFX (element fallback) | see its VFX record below |
| SC02-SH050 | graze appears (state change) | VFX (risk batch) | see its VFX record below |
| SC03-SH020 | two taps; notched ear | VFX (light) | see its VFX record below |
| SC03-SH050 | saucer chip insert | Native; keyframe controls the chip | The chip is on a static insert and the keyframe fixes it; no motion to fail |
| SC03-SH070 | lid opens | VFX (risk batch) | see its VFX record below |
| SC03-SH080 | card folded and blank (flag, [[VFX:]]) | VFX (paint-out fallback) | see its VFX record below |
| SC04-SH020 | saucer turn | VFX (keyframe edit) | see its VFX record below |
| SC04-SH030 | photo soft (flag); knocks | VFX (light) | see its VFX record below |
| SC04-SH050 | bulb out, fade to black (flag) | VFX (post fade) | see its VFX record below |
| all other shots | none flagged | Native | Single action, no state change in the clip; covered by the retry ladder. SC02-SH010 (table cloth), SC02-SH040 (crate vault) and SC02-SH070 (service path) are generation risks for the video-prompt-engineer, not VFX |

## VFX shots

```yaml
record: vfx
id: VFX-SC01-SH020
shot: SC01-SH020
problem: The photo of Ah Ma sits soft at the frame edge; a generated photo may show readable faces, writing or a different woman than the laughing elderly woman tapping a tin.
method: Native generation from a keyframe with the photo already defocused, plus a post defocus on the photo region if needed.
elements:
- keyframe with the photo at the right edge out of focus
- photo prop sheet (reference)
steps:
- Make the keyframe in Gemini 2.5 Flash Image with the photo as a soft blur
- Generate the clip image-to-video
- If photo detail sharpens in motion, add a tracked blur mask over the photo region in post
tools: image tool + video tool; 2D compositing (blur mask) only if needed
estimate: 1 extra generation (2 attempts) per shot
fallback: 'PROPOSAL: Move the photo further out of frame (a PROPOSAL to the film-director; this is a camera/framing change)'
review:
- photo reads as a soft rectangle with warm colours, no readable detail
- tin lid and two brass spots stay sharp
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC01-SH030
shot: SC01-SH030
problem: 'The saucer flips face-down in the frame. Object turning in a hand is a weak spot: the saucer may change shape, lose the chip at 3 o''clock, or end with the wrong face.'
method: Native first-last-frame generation between a keyframe of the upright saucer and a keyframe of it face-down; keyframe edits to fix the chip.
elements:
- 'start keyframe: saucer UPRIGHT, chip at 3 o''clock'
- 'end keyframe: saucer FACEDOWN, foot ring showing'
- saucer prop sheet
steps:
- Generate and approve both keyframes (the chip is visible only in the start frame)
- Run first-last-frame; clip length TO-VERIFY
- Check the saucer is the same size and glaze at both ends
tools: image tool (keyframe edit), video tool first-last-frame
estimate: 3 to 5 extra generations (keyframes and 2 to 3 clip attempts)
fallback: 'PROPOSAL: Split into an upright insert and a face-down insert joined by a cut on the hand (PROPOSAL to the film-director)'
review:
- chip at 3 o'clock before the turn
- same saucer after the turn
- no extra fingers
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC01-SH070
shot: SC01-SH070
problem: 'The macaque drops from the wire onto the shelf and grips the tin: fast animal motion, hands closing on a prop, wire dip.'
method: Native first-last-frame (wire to shelf); the start keyframe has the macaque crouched on the wire, the end keyframe has it on the shelf with the tin in both hands. Risk batch item.
elements:
- macaque turnaround (ear and face)
- start and end keyframes
- tin sheet
steps:
- Lock the macaque's notched left ear in both keyframes
- Run first-last-frame in the risk batch
- 'Check the tin: two brass spots, dark green, lid on'
tools: image tool, video tool first-last-frame
estimate: 4 to 6 extra generations (risk batch)
fallback: 'PROPOSAL: Cover the drop with a cut: wire dip insert then the macaque already holding the tin (PROPOSAL to the film-director, changes the shot list, so not applied)'
review:
- one macaque, notched left ear visible when facing right
- tin unchanged and intact
- Lan still turned away at the pot
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC01-SH090
shot: SC01-SH090
problem: 'The pot boils over and the macaque runs on a counter: foam and steam are hard to keep stable, and the macaque and the foam move at the same time.'
method: Native image-to-video from a keyframe where the pot already foams at the right edge; steam as a reusable element if the native steam fails.
elements:
- start keyframe with the foam at the pot rim
- reusable element ELM-STEAM-FOAM
steps:
- Make the keyframe with the pot half-foaming and steam at frame right
- Generate; accept steam that rises, reject foam that clips through the camera
- If the foam is unusable, generate ELM-STEAM-FOAM on the pot plate and composite it onto the macaque take
tools: image tool, video tool; 2D compositing for the fallback
estimate: 3 to 4 extra generations
fallback: 'PROPOSAL: Show the boil-over only as steam rising (less foam) in the keyframe (PROPOSAL to the film-director)'
review:
- foam and steam stay at frame right and spill over the rim
- the macaque keeps the tin on its camera side
- no extra macaque
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC01-SH100
shot: SC01-SH100
problem: 'Same boil-over foam and steam in the foreground right, while Lan drops the ladle and runs: hand release is a weak spot.'
method: Native image-to-video; reuse ELM-STEAM-FOAM as in SC01-SH090; the ladle drop is carried by audio.
elements:
- ELM-STEAM-FOAM
- start keyframe with the ladle leaving her hand
steps:
- Match the foam state from the end of SC01-SH090
- Generate; accept a ladle that falls to the counter
- If the hand release is wrong, trim before the release and let the sound carry the drop
tools: image tool, video tool
estimate: 2 to 3 extra generations
fallback: 'PROPOSAL: Start with the ladle already on the counter (PROPOSAL to the film-director)'
review:
- pot state BOIL-OVER matches SC01-SH090
- ladle ends on the counter, one ladle only
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC02-SH050
shot: SC02-SH050
problem: 'The graze appears on the right forearm during the shot: a state change inside a clip, and Veo may show the graze from the start or not at all.'
method: First-last-frame with a start frame without graze and an end frame with the graze; if the graze does not appear, add it with a tracked 2D overlay in post.
elements:
- 'start keyframe: forearm unmarked'
- 'end keyframe: forearm with the red graze (right forearm, outer side)'
- graze overlay (generated still, tracked)
steps:
- Generate both keyframes; the graze is made once by a keyframe edit on the end frame
- Run first-last-frame; clip length TO-VERIFY (this shot has `clip_length_s` 6 in the records)
- If the graze is early or missing, generate a graze plate and track it onto the forearm from the moment of the slat contact
tools: image tool (keyframe edit), video tool, 2D compositing (tracking)
estimate: 4 to 6 extra generations; the compositing path adds 1 element
fallback: 'PROPOSAL: Cut to an insert of the forearm for the graze (PROPOSAL to the film-director; adds a shot, so not applied)'
review:
- no graze before the slat contact
- graze is red, right forearm, outer side
- the same graze position as SC02-SH080 and SC03-SH090
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC03-SH020
shot: SC03-SH020
problem: The macaque taps the lid twice with its left palm; the count and the palm hit may be wrong (one, three, or a fist).
method: Native image-to-video; the tap sound is rebuilt in post, so the picture only needs two clear palm movements.
elements:
- macaque turnaround
- tin sheet
- 'start keyframe: palm raised above the lid'
steps:
- Generate with the palm taps described as two slow slaps
- Choose the take with two palm contacts; trim the rest
- Audio is replaced in post (sfx.md SFX-SC03-003)
tools: video tool; audio tool or library in post
estimate: 2 to 3 extra generations
fallback: 'PROPOSAL: Show one tap in picture and place the second by sound (PROPOSAL to the film-director)'
review:
- two palm contacts on the lid
- notched left ear visible at the frame edge
- two brass spots on the lid
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC03-SH070
shot: SC03-SH070
problem: 'The lid comes open under her thumbs: opening a friction-fit lid is a weak spot; the tin may change size or the lid may float.'
method: Native first-last-frame between a keyframe of the sealed tin in her hands and a keyframe of the lid lifted a hand's width. Risk batch item.
elements:
- start and end keyframes
- tin sheet (lid with two brass spots)
steps:
- Generate and approve both keyframes
- Run first-last-frame; clip length TO-VERIFY (records say 6 s)
- Check the tin keeps its size and the brass spots
tools: image tool, video tool first-last-frame
estimate: 4 to 6 extra generations (risk batch)
fallback: 'PROPOSAL: Start with the lid already lifted and use SC03-SH080 for the contents (PROPOSAL to the film-director)'
review:
- lid lifts, not floats
- both thumbs on the lid
- the tin has no label or writing
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC03-SH080
shot: SC03-SH080
problem: The recipe card must stay folded and blank, and the paper must carry no writing; image models like to add handwriting.
method: Native image-to-video from a keyframe with the card folded, outside blank; paint out any writing in post.
elements:
- 'keyframe: overhead tin with card, spoon, fruit twist'
- prop sheet for the card
steps:
- Make the keyframe with the folded card and a blank outer face
- Generate; reject any take with readable marks
- If the marks are faint, paint them out with a tracked patch or blur
tools: image tool, video tool; 2D compositing
estimate: 2 to 3 extra generations
fallback: 'PROPOSAL: Defocus the card slightly in the keyframe (PROPOSAL to the film-director/cinematographer)'
review:
- card folded and blank
- spoon, card and twist are all present
- no writing anywhere in the tin
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC04-SH020
shot: SC04-SH020
problem: The saucer turns face-up and is set on the counter edge, the mirror of SC01-SH030; same risk of changing the chip or the shape.
method: Native first-last-frame between face-down and face-up keyframes; reuse the saucer approvals from SC01-SH030.
elements:
- 'start keyframe: saucer FACEDOWN'
- 'end keyframe: saucer FACEUP, chip at 3 o''clock'
- saucer prop sheet
steps:
- Reuse the SC01-SH030 keyframes for the saucer look
- Run first-last-frame; clip length TO-VERIFY
- Check the chip is at 3 o'clock at the end
tools: image tool, video tool first-last-frame
estimate: 3 to 5 extra generations
fallback: 'PROPOSAL: Split into face-down and face-up inserts (PROPOSAL to the film-director)'
review:
- chip at 3 o'clock at the end
- saucer matches SC01-SH030
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC04-SH030
shot: SC04-SH030
problem: Two knocks with the knuckles, and the photo must stay soft at the right edge.
method: Native image-to-video; photo handled as in SC01-SH020; the knock sound is rebuilt in post.
elements:
- keyframe with the soft photo
- tin sheet
steps:
- Generate with two slow knuckle knocks
- Choose the take with two contacts
- Audio from sfx.md SFX-SC04-003
tools: image tool, video tool
estimate: 2 to 3 extra generations
fallback: 'PROPOSAL: Hand rests on the lid for the whole shot and the sound carries the knocks (PROPOSAL)'
review:
- two knuckle contacts
- photo soft
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC04-SH050
shot: SC04-SH050
problem: The bulb goes out and the frame falls to black over the last 0.5 s; a model often keeps the bulb lit or cuts the lights too early, and the "fade" is an editing effect.
method: First-last-frame from the lit wide to a nearly black frame with two silhouettes; the last 0.5 s fade to black is applied by the editor in post so the timing is exact.
elements:
- start keyframe (same wide as SC04-SH010)
- 'end keyframe: nearly black, last red-lantern glow, two silhouettes'
steps:
- Approve the end keyframe first
- Run first-last-frame; clip length TO-VERIFY
- If the bulb does not go out, grade down with an animated exposure drop on the stall area, then the editor's fade to black
tools: image tool, video tool first-last-frame; grade/editor fade
estimate: 3 to 4 extra generations
fallback: 'PROPOSAL: Film ends on a cut to black after a held lit frame (PROPOSAL to the film-director)'
review:
- bulb off at the end
- two silhouettes, the macaque on the counter
- black by 96.0 s
status: REVIEW
gen_state: PLANNED
```

## Global notes (no per-shot record)
- **Title card:** the style bible asks for plain warm-white lettering (#F1E4CF) on umber (#2A1D17), simple serif or humanist face, added in post, no logo. The shot list has no title shot and the screenplay gives no title text position. Method: motion graphics in post; never generated. OPEN-QUESTION: is there a title card, and where (open or end)? It would change the 96.0 s timeline.
- **Readable text:** every sign board is blank and unlettered (location lock). If any generated clip shows letters, paint out or blur in post, or regenerate. Check SC01 and SC02 backgrounds first.
- **Background shoppers:** faceless and soft. If a face resolves in a background figure, blur or regenerate; do not let an extra stand in sharp focus.
- **Macaque identity:** keep the macaque sheet as a reference in every macaque shot. Take selection should favour clips where the notched left ear is visible and on the correct side (listed per shot in the shot records). A drifted ear cannot be fixed in post at this budget; the fix is a retake.
- **Prop identity:** tin with exactly two brass spots on the lid; saucer chip at 3 o'clock. Check on every tin and saucer shot (SC01-SH010, SH020, SH030, SH070; SC03-SH010, SH040, SH050 to SH100; SC04-SH010 to SH050).
- **West wall (SC03):** the wall is flown out (virtual) in the wide shots; no VFX needed, but a generated clip must not invent a lit west wall.

## Reusable elements
| Element | Spec | Used in |
|---|---|---|
| ELM-STEAM-FOAM | Foam spilling over a dented steel stockpot rim on a low flame, warm-white steam, 4 s, locked off, on the pot plate NM-P1 | SC01-SH090, SC01-SH100 |
| ELM-GRAZE | Red graze on the outer right forearm, about 10 cm long, matched to Lan's skin tone, still image with alpha, tracked | SC02-SH050 (fallback) |
| ELM-FADE | Animated exposure drop to black over the last 0.5 s (editor/grade) | SC04-SH050 |
| ELM-TITLE | Title card per the style bible, added in post | pending OPEN-QUESTION |

## Shot record updates (for production-manager)
The `vfx` field in these shot records should change from `none` to the VFX ID:
| Shot | vfx field → |
|---|---|

| SC01-SH020 | VFX-SC01-SH020 |
| SC01-SH030 | VFX-SC01-SH030 |
| SC01-SH070 | VFX-SC01-SH070 |
| SC01-SH090 | VFX-SC01-SH090 |
| SC01-SH100 | VFX-SC01-SH100 |
| SC02-SH050 | VFX-SC02-SH050 |
| SC03-SH020 | VFX-SC03-SH020 |
| SC03-SH070 | VFX-SC03-SH070 |
| SC03-SH080 | VFX-SC03-SH080 |
| SC04-SH020 | VFX-SC04-SH020 |
| SC04-SH030 | VFX-SC04-SH030 |
| SC04-SH050 | VFX-SC04-SH050 |

## Totals
- VFX shots: 12. By method: first-last-frame with a state change (keyframe edits): 6 (SC01-SH030, SC01-SH070, SC02-SH050, SC03-SH070, SC04-SH020, SC04-SH050); element fallback (steam and foam): 2 (SC01-SH090, SC01-SH100); defocus or paint-out fallback: 3 (SC01-SH020, SC03-SH080, SC04-SH030); native with a retake for count: 1 (SC03-SH020).
- Estimated extra generations (on top of one pass per shot): about 33 to 50 across the 12 records, mostly the risk batch (SC01-SH070, SC02-SH050, SC03-SH070) and the first-last-frame shots. They depend on the first-last-frame length (to-verify) and are not a budget.
- Tools needed that the brief does not name: a compositor or editor with tracking, masks and an exposure fade (needed for the fallbacks only).

## Handoff
- Produced: vfx_plan@1 (REVIEW): 12 VFX records, 4 reusable elements, global notes
- Proposals to the director (none applied; each is a PROPOSAL in its record): cut around SC01-SH070, show the boil-over as steam only, one tap in picture for SC03-SH020, graze insert for SC02-SH050, split saucer turns into inserts, end on a held frame for SC04-SH050
- Open items: OPEN-QUESTION title card; first-last-frame clip lengths to-verify; no compositor named
- Conflicts: none
- Next: image/video prompt engineers (elements, keyframes), quality-control (review criteria)
