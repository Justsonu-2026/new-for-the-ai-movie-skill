---
artifact: scene-direction
id: SC03_direction
version: 1
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

## Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | second hit, faster sink | drop | action 1-2 |
| B2 | refold, lopsided, shadow, ears flat | Pip | action 2-3 |

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
| B2 | Pip | to refold | scowl, fast crease motions, ears sag flat |

## Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC03-SH010 | WS | eye-level | static | drop and boat | rings widen at the bow; Pip glances up; the second drop lands on the same spot and the boat sinks fast; ends with ripples only | same framing as SC02-SH020 | flat, deep | slightly darker overcast | 2.5 s | the gag repeats, faster | cut |
| SC03-SH020 | MS | eye-level | static | Pip | Pip surfaces, scowls and refolds into a lopsided creased boat; a small round shadow grows on the water at right; ends with her ears flat | Pip centre-left, shadow lower-right | flat | darker slate overcast | 3.5 s | escalation and worry | cut |

Total: 6.0 s vs estimate 6 s.

## Coverage and rhythm
The first shot is a tighter version of SC02's beat; the second is the reaction. The shadow is the hinge into SC04.

## AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH010 | repeats SC02-SH020; model may change framing | reuse the same start-frame composition from SC02-SH020 as reference |
| SH020 | lopsided boat state | PR-BOAT:CREASED is a still key frame in the end frame |

## Specialist and VFX flags
- action-director: none
- animation-director: yes (faster, snappier refold, ears drop)
- vfx: none

## Handoff
- Produced: SC03_direction@1 (REVIEW), 2 shots, 6.0 s
- Open items: none
- Next: cinematographer, script-supervisor
