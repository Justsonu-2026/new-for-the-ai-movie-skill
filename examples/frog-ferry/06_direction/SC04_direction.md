---
artifact: scene-direction
id: SC04_direction
version: 1
status: APPROVED
owner: film-director
depends_on: [screenplay@1, style_bible@1, LOC-PUDDLE@1, CH-PIP@2, CH-MO@1, CH-DROP@1]
updated: 2026-10-19
---
# SC04 Direction — EXT. PUDDLE - MID-WATER - DAY

## Must-see story facts
- Pip looks up; a third drop high above, small and bright, getting bigger.
- Pip squints, holds the seed over her head and pops its fluff open like a parasol.
- The drop lands on the fluff, bounces twice, splashes beside the boat.
- The splash wave spins the lopsided boat once and sends it speeding forward; Pip grins holding the seed up.

## Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Pip | to cross dry | the third drop | shield the seed with its own fluff |
| Raindrop | nothing | the fluff | bounces |

- Subtext: Pip has stopped repeating herself and tried something new.
- Turn: beaten → cleverly protected (the decisive choice).
- Audience position: same as Pip, then ahead.
- Visual thesis: the white fluff is the brightest thing in the frame and Pip is tiny under it — carried by SH030-SH050.
- Genre playbook: comedy (subvert the rule of three; hold on the payoff).

## Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | Pip sees the third drop | Pip | action 1 |
| B2 | Pip opens the fluff | Pip | action 2 |
| B3 | bounce and splash | drop | action 3 |
| B4 | boat spins and speeds forward | splash | action 3 |

## Blocking
Floor plan: LOC-PUDDLE, mid-water.
- Start positions: Pip seated in the lopsided boat, seed under her arm, centre-right of frame.
- Moves: she lifts the seed overhead and the fluff opens; drop hits and bounces; boat spins once and shoots right.
- End positions: boat moving right at speed, Pip seated, seed overhead, grinning.
- Axis and camera side: same as SC01.
- Screen direction in/out: boat exits screen right.

## Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Pip | to spot | chin up, eyes follow the drop |
| B2 | Pip | to decide | squint, both hands lift the seed overhead |
| B3 | Pip | to brace | eyes wide, hold still under the fluff |
| B4 | Pip | to enjoy | grin as boat spins |

## Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC04-SH010 | MCU | eye-level | static | Pip | Pip looks up, eyes tracking, then squints; ends in a determined squint | Pip centre, chin up | flat | soft overcast | 2.0 s | she sees it and decides | cut |
| SC04-SH020 | POV | low | static | sky above Pip | one small bright aqua drop high in a grey sky grows larger as it falls toward camera; ends big and close | drop centre, grey sky | flat | soft overcast | 1.5 s | the threat | cut |
| SC04-SH030 | MS | eye-level | static | Pip and seed | Pip lifts the seed and the fluff pops open like a parasol over her; ends with the open fluff above her | Pip lower centre, fluff upper centre | flat | soft overcast, fluff white pops | 1.5 s | the decisive choice | cut |
| SC04-SH040 | WS | eye-level | static | drop, fluff, boat | the drop hits the open fluff, bounces up and down twice, then splashes into the water beside the boat; ends with a splash crown beside the boat | fluff upper center-left, splash lower right | flat, deep | soft overcast | 2.0 s | the payoff | cut |
| SC04-SH050 | WS | eye-level | static | boat | the splash wave spins the boat once and sends it speeding right, Pip grinning under the open fluff; ends with the boat at the right of the frame | boat enters center, exits to right third | flat, deep | slightly brighter overcast | 2.0 s | reward and momentum | cut |

Total: 9.0 s vs estimate 9 s.

## Coverage and rhythm
The only scene with cutting: five short shots for the comic climax. The reaction (SH010) comes before the idea (SH030), and the cause and effect of the bounce is held in one wide frame (SH040).

## AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH030 | fluff transforms from ball to parasol | keyframe both states (PR-SEED:CLOSED start, PR-SEED:OPEN end) |
| SH040 | drop bouncing on fluff | simple motion: two vertical bounces; fallback: split into two clips or hand-animate bounce |
| SH050 | boat spin and travel | boat spin is one rotation; if Kling fails, use a smear-frame crossfade |

## Specialist and VFX flags
- action-director: none
- animation-director: yes (parasol pop, bounces, spin)
- vfx: splash crown on SH040 may need a composited element

## Handoff
- Produced: SC04_direction@1 (REVIEW), 5 shots, 9.0 s
- Open items: none
- Next: cinematographer, script-supervisor
