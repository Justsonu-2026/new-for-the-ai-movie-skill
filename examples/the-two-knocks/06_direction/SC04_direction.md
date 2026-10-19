---
artifact: scene-direction
id: SC04_direction
version: 1
status: APPROVED
owner: film-director
depends_on: [screenplay@1, style_bible@1, LOC-NIGHT-MARKET@1, CH-LAN@1, CH-MACAQUE@1, props@1, SC01_direction@1]
updated: 2026-10-19
---
# SC04 Direction: EXT. NIGHT MARKET - LAN'S NOODLE STALL - LATER

Approved under the autonomy policy (see PRODUCTION_LOG.md).

## Must-see story facts
- Closing: lanterns dimmed, most stalls dark.
- The open tin sits on the shelf beside the photo.
- Lan turns the chipped saucer face-up and sets it on the counter edge.
- She knocks twice on the tin's lid.
- On the lantern wire the macaque tilts its head, then drops down to the saucer.
- Lan turns off the last light.

## Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Lan | To keep the ritual, now openly | Nothing: she has accepted it | Sets the saucer, knocks |
| Macaque | The ritual | Nothing | Waits on the wire, answers the knock |

- Subtext: the numb routine has become a shared one. Grief is shared, not gone.
- Turn: the drop. The ritual works.
- Audience position: same as Lan; the audience knows the knock will bring the macaque.
- Visual thesis: SC01 mirrored with the shelf now open. Same camera position, same frame, same lanterns, quieter and emptier, and this time Lan looks at the shelf. Carried by SH010 (matches SC01-SH010), SH020 and SH030 (Lan's eyes on the saucer and the tin).
- Genre playbook: drama (quiet resolution). Exception: a brief comic beat in the head tilt.

## Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | The stall at closing, the open tin | Setting | "Closing. Lanterns dimmed..." and "The open tin sits on the shelf..." |
| B2 | The saucer face-up | Lan | "Lan turns the chipped saucer face-up..." |
| B3 | The knock | Lan | "She knocks twice on the tin's lid." |
| B4 | The answer | Macaque | "On the lantern wire above, the macaque tilts its head. It drops down to the saucer." |
| B5 | Lights out | Lan | "Lan turns off the last light." |

## Blocking
Floor plan: LOC-NIGHT-MARKET, stall L1, shelf L2, wire L3, closing variant.
- Start: Lan at the shelf on the east end of the stall (screen left), facing south toward the shelf. The pot is not on the burner (ASSUMPTION carried from props: removed). The macaque is not visible.
- B2: Lan turns the STALL saucer face-up and carries it the short way to the counter edge below the wire.
- B3: she turns back to the shelf and knocks on the tin lid with two knuckles of her right hand.
- B4: the macaque appears on the wire above the counter edge, tilts its head, and drops down to the saucer.
- B5: Lan reaches to the wall switch on the east post (screen left) and switches off the bulb.
- End positions: the macaque at the saucer on the counter edge, Lan at the east post; the frame goes dark.
- Axis of action and camera side: the counter line, east to west; the camera is in the lane, north of the counter, looking south (as SC01).
- Screen direction in/out: Lan stays within the stall; nothing leaves the frame.

## Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B2 | Lan | To make room | Turns the saucer slowly, looks at its chip, sets it down on the counter edge with care |
| B3 | Lan | To call | Two even knocks with her knuckles; she waits |
| B4 | Macaque | To check, then to come | Tilts its head to one side, then drops lightly onto the counter beside the saucer |
| B5 | Lan | To close the day | Reaches to the switch without hurry; the end of her routine is not numb |

## Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC04-SH010 | WS | eye-level | static | The dimmed stall, mirror of SC01-SH010 | Closing: stalls dark, few lanterns lit; Lan at the shelf; the open tin on the shelf beside the photo; ends still | same composition as SC01-SH010: stall centre, red lanterns above, empty lane | normal | honey tungsten, dimmed | 2.5 | The mirror; the tin is open | cut |
| SC04-SH020 | CU | eye-level | static | The saucer | Lan's right hand turns the saucer face-up and sets it on the counter edge; ends with the saucer face-up, chip at 3 o'clock | saucer centre, tin soft behind | short telephoto, shallow | honey tungsten | 2.0 | Counterpart of SC01-SH030 | cut |
| SC04-SH030 | CU | eye-level | static | Lan's knuckles and the tin | She knocks twice on the tin's lid; ends with her hand resting on the lid | tin lid centre, photo soft beside | short telephoto, shallow | warm, dim | 2.0 | Counterpart of SC01-SH020: touch becomes knock | cut |
| SC04-SH040 | MS | slightly low | static | The macaque on the wire | Tilts its head, then drops to the counter edge by the saucer; ends sitting beside the saucer | wire top, saucer bottom, macaque in between | normal | warm lantern rim, dark above | 2.5 | The answer | cut |
| SC04-SH050 | WS | eye-level | static | Lan at the east post | Lan reaches for the switch on the east post and turns off the last light; ends with the frame falling to black | stall centre, macaque at the saucer, Lan at the left | normal | the stall bulb goes out, last glow in the lanterns | 2.0 | Close | cut-to-black |

Total: 11.0 s vs estimate 10 s (+10%).

## Coverage and rhythm
The first three shots repeat SC01's shelf pattern in the same order (wide, hand on tin, saucer), in a different order of action but the same frames, so the audience feels the mirror. Rhythm is slower and the holds longer than SC01. The macaque appears once, in SH040, and does not share a frame with Lan until the final wide.

## AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH010 | Matching SC01-SH010 composition | Use the SC01-SH010 keyframe as a reference image; same camera |
| SH020 | Saucer state flip (face-up) | Face-down in the start frame, face-up in the end frame (first-last-frame) |
| SH040 | Drop from a wire | Short drop; only the macaque in frame; landing at the saucer |
| SH050 | Light going out | Light change as the end frame; a fade-to-black in post if needed |

## Specialist and VFX flags
- action-director: not required.
- animation-director: not applicable.
- vfx: light-out and final fade (SH050), may be done in grade.

## Handoff
- Produced: SC04_direction@1 (APPROVED under autonomy policy), 5 shots, 11.0 s
- Built from: screenplay@1, style_bible@1, LOC-NIGHT-MARKET@1, CH-LAN@1, CH-MACAQUE@1, props@1, SC01_direction@1
- For cinematographer: same camera position as SC01; honey tungsten dimmed; SH050 the bulb is the last motivated light.
- For script-supervisor: tin OPEN (lid set back loosely, unsealed, offset); STALL saucer ends FACEUP on the counter edge; graze on right forearm; the pot is absent; the macaque is the same animal.
- Open items: ASSUMPTION: the pot is not on the burner in SC04 (props@1).
- Next: cinematographer, script-supervisor
