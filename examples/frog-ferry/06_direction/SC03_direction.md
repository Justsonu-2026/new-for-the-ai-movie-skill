---
artifact: scene-direction
id: SC03_direction
version: 2
status: APPROVED
owner: film-director
depends_on: [screenplay@1, style_bible@1, LOC-PUDDLE@1, CH-PIP@2, CH-MO@1, CH-DROP@1]
updated: 2026-10-19
---
# SC03 Direction — EXT. PUDDLE - MID-WATER - DAY

## Must-see story facts
- Ripple rings widen at the bow; Pip glances up, relaxed.
- A second drop lands on the same spot; the boat sinks faster.
- Pip surfaces, scowls, refolds in a flash; the new boat is lopsided and creased.
- A small round shadow grows on the water beside her; her ears go flat.

## Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Pip | to cross dry | the drop again | refold faster |

- Subtext: the same fix will not work forever.
- Turn: confident → worried.
- Audience position: ahead of Pip.
- Visual thesis: the same frame as SC02-SH020, repeated and faster (rule of three) — carried by SH010.
- Genre playbook: comedy (rule of three: setup, reinforce, subvert next scene).

## Change note (v2, 2026-10-19; change request from production-manager)
- QC-102: SH020 (surface+scowl+refold | shadow+ears) split into SH020 (scowl and refold; the surfacing is in the start frame) and new SH025 (shadow grows, ears flat). SH010 reviewed and kept as one gag (the second hit and sink); the glance is the start state.
- QC-108: Pip is visibly paddling at the start of SH010, which carries SC02's 'paddles on'.
- Camera static; SH025 is a new ID.
- Erratum (2026-10-19, no version bump; CR-ISSUE-12): SH010 end state adds the oar floating flat on the surface beside the ripples (as already planned in SC03_animation).

## Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | second hit, faster sink | drop | action 1-2 |
| B2 | refold, lopsided, shadow, ears flat | Pip | action 2-3 (SH020 refold, SH025 shadow/ears) |

## Blocking
Floor plan: LOC-PUDDLE, mid-water.
- Start positions: boat centre-right, Pip seated, relaxed.
- Moves: boat sinks at the same spot; Pip surfaces; lopsided boat pops up; a round shadow appears on the water at the right of the boat.
- End positions: Pip seated in the lopsided boat, ears flat, shadow beside.
- Axis and camera side: same as SC01.
- Screen direction in/out: boat is moving right; continues right.

## Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Pip | to glance up | head tilts up, relaxed smile, then eyes pop |
| B2 | Pip | to refold | SH020: scowl, fast crease motions; SH025: eyes follow the shadow, ears sag flat |

## Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC03-SH010 | WS | eye-level | static | drop and boat | Pip strokes the oar as rings widen at the bow and glances up relaxed (start state); the second drop lands on the same spot and the boat sinks fast; ends with ripples only, the oar floating flat on the surface beside them | same framing as SC02-SH020 | flat, deep | slightly darker overcast | 2.0 s | the gag repeats, faster; paddling has resumed | cut |
| SC03-SH020 | MS | eye-level | static | Pip | Pip, head already above water and scowling, refolds in a flash; ends with her seated in the lopsided creased boat | Pip centre-left | flat | darker slate overcast | 1.5 s | she refolds, faster and angrier | cut |
| SC03-SH025 | MS | eye-level | static | Pip and shadow | a small round shadow grows on the water at the right of the boat; Pip's eyes follow it; ends with her ears flat | Pip centre-left, shadow lower-right | flat | darker slate overcast | 1.5 s | escalation and worry; the hinge into SC04 | cut |

Total: 5.0 s vs estimate 6 s (-17%; explained: the repeat gag is deliberately faster, and 1 s was given to the SC04 climax beats). Version 2 re-cut: one primary action per shot.

## Coverage and rhythm
SH010 repeats SC02's gag faster; SH020 is the angry refold; SH025 is the reaction. The shadow is the hinge into SC04.

## AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH010 | repeats SC02-SH020; model may change framing | reuse the same start-frame composition from SC02-SH020 as reference |
| SH020 | lopsided boat state | start frame head at surface scowling; PR-BOAT:CREASED is the end frame |
| SH025 | shadow grows, ears flatten | start = end of SH020 plus tiny shadow; end frame: bigger shadow, ears flat; no camera move |

## Specialist and VFX flags
- action-director: none
- animation-director: yes (faster, snappier refold, ears drop)
- vfx: none

## Handoff
- Produced: SC03_direction@2 (APPROVED under autonomy), 3 shots, 5.0 s
- Open items: none
- Next: cinematographer, script-supervisor
