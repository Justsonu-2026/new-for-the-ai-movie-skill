---
artifact: scene-direction
id: SC01_direction
version: 2
status: APPROVED
owner: film-director
depends_on: [screenplay@1, style_bible@1, LOC-PUDDLE@1, CH-PIP@2, CH-MO@1, CH-DROP@1]
updated: 2026-10-19
---
# SC01 Direction — EXT. PUDDLE - NEAR SHORE - DAY

## Must-see story facts
- Pip stands on the near shore holding the closed-fluff seed.
- Mo waits on the far shore beside the bare soil patch with drooping feelers.
- Pip sees her and brightens; Pip puts the boat on the water, boards it and paddles off.

## Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Pip | to bring the seed to Mo | the whole puddle | she boards the boat and paddles |
| Mo | company (a seed to plant) | shyness, slowness | waits |

- Subtext: Mo is lonely; Pip is going to fix that.
- Turn: not started → under way (Pip decides and sets off).
- Audience position: same as Pip.
- Visual thesis: the world is wide and the heroes tiny: Pip on the left bank, Mo on the right bank, the whole empty puddle between them — carried by SH010.
- Genre playbook: comedy (frame the joke whole, static camera, high-key); this scene is warm setup.

## Change note (v2, 2026-10-19; change request from production-manager)
- QC-102 review: SH020 packed set-on-water + hop in + paddle; split into SH020 (set on water, hop in) and new SH025 (paddle off). SH010 trimmed 3.0 -> 2.0 s.
- QC-108: the launch beat now appears: SH010 ends with the boat at Pip's feet, SH020 places it on the water. No story event added.
- Camera is static in all shots; IDs unchanged, SH025 is new.

## Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | Pip sees Mo across the puddle | Pip | action 1-4 |
| B2 | Pip launches and paddles off | Pip | action 5 (SH020 launch, SH025 paddle) |

## Blocking
Floor plan: LOC-PUDDLE
- Start positions: Pip on the near shore left, standing beside leaf L1 and pebble L2, facing screen right, seed under her arm. Mo on the far shore right by soil patch L3, facing screen left, tiny.
- Moves: B2 Pip sets the boat on the water in front of her, hops in, sits, and paddles right.
- End positions: boat 1/4 into the puddle, moving right.
- Axis of action and camera side: the bank-to-bank line, left to right; camera stays on the south bank, side-on, for the whole film.
- Screen direction in/out: Pip and boat travel screen left → right. Exit to SC02 continues screen right.

## Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Pip | to spot | head turns right, eyes widen, small hop |
| B1 | Mo | to wait | feelers droop, head low |
| B2 | Pip | to set off | SH020: drops boat on the water, hops in; SH025: oar dips left-right |

## Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01-SH010 | WS | eye-level | static | Pip and Mo across the puddle | Pip, holding the seed and with the folded boat at her feet on the bank, looks across the puddle at tiny Mo; ends with Pip's eyes bright and head up | Pip lower-left third, Mo lower-right third, wide empty puddle between | flat, deep | soft overcast, light rain | 2.0 s | establish want and geography | cut |
| SC01-SH020 | WS | eye-level | static | Pip and boat | Pip sets the boat on the water and hops in; ends with Pip seated in the afloat boat at the water's edge, oar in hand | Pip left-center, water to the right | flat, deep | soft overcast | 2.0 s | the launch (boat placed, Pip boards) | cut |
| SC01-SH025 | WS | eye-level | static | Pip and boat | Pip paddles the boat away from the bank; ends with the boat 1/4 into the puddle, moving right | boat left-center, empty water to the right | flat, deep | soft overcast | 1.5 s | she sets off | cut |

Total: 5.5 s vs estimate 6 s (-8%, within +-15%). Version 2 re-cut: one primary action per shot.

## Coverage and rhythm
Three wide static shots: a held look, the launch (boat on water, hop in), the paddle off. Each is 2.0 s or less of real motion.

## AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH010 | Mo tiny and far | Mo uses short_lock; both are flat shapes; if Mo drifts, comp her in post |
| SH020 | placing the boat plus boarding | start frame: boat in Pip's hands at the water line; end frame: seated and afloat; FLF-suited (end state defined) |
| SH025 | paddle cycle, boat travel | start frame = SH020 end frame; one steady paddle stroke pair; end frame boat 1/4 into puddle |

## Specialist and VFX flags
- action-director: none
- animation-director: yes (hop, boarding, paddle cycle)
- vfx: none

## Handoff
- Produced: SC01_direction@2 (APPROVED under autonomy), 3 shots, 5.5 s
- Built from: screenplay@1, style_bible@1, LOC-PUDDLE@1, CH-PIP@2, CH-MO@1
- Open items: none
- Next: cinematographer, script-supervisor
