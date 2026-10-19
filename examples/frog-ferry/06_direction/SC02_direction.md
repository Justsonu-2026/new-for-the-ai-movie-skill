---
artifact: scene-direction
id: SC02_direction
version: 2
status: APPROVED
owner: film-director
depends_on: [screenplay@1, style_bible@1, LOC-PUDDLE@1, CH-PIP@2, CH-MO@1, CH-DROP@1]
updated: 2026-10-19
---
# SC02 Direction — EXT. PUDDLE - MID-WATER - DAY

## Must-see story facts
- The boat glides; ripple rings spread in front of the bow.
- A raindrop lands on the middle of the boat; the boat folds flat and sinks.
- Pip bobs up soggy with the seed held high and dry; she refolds the boat in a few creases, salutes the sky and paddles on.

## Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Pip | to cross dry | the drop | refolds quickly |
| Raindrop | nothing (it is rain) | none | falls |

- Subtext: Pip is sure this is a one-off.
- Turn: on course → sunk, then restored.
- Audience position: ahead of Pip (we see the drop coming).
- Visual thesis: the joke framed whole: drop above, boat below, in one wide frame so cause and effect are seen at once — carried by SH020.
- Genre playbook: comedy (static wide for the gag, reaction after the laugh).

## Change note (v2, 2026-10-19; change request from production-manager)
- QC-102: SH030 (surface+shake | refold+pop+salute) split into SH030 (surface, shake), new SH035 (refold, pop) and new SH037 (salute). Refold and salute are separate actions, so a three-way split. SH020 reviewed and kept: drop fall, hit and sink are one cause-and-effect gag (one primary action: the boat is hit and sinks) with a defined end state, suited to first-last-frame.
- QC-108 ('paddles on'): ACCEPTED DEVIATION. The screenplay's 'paddles on' is a continuing state, not an event. SH037 ends in the salute; paddling visibly resumes in the opening of SC03-SH010 (Pip is stroking as the rings widen). No shot is added; script-supervisor should map 'paddles on' to SC02-SH037 (salute) + SC03-SH010 (paddling resumed). The climb onto the flat paper is carried by the SH030 end state (Pip on the paper).
- Camera static throughout; SH035 and SH037 are new IDs.
- Erratum (2026-10-19, no version bump; CR-ISSUE-12): SH020 end state adds the oar floating flat on the surface beside the ripples (as already planned in SC02_animation).

## Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | glide | Pip | action 1 |
| B2 | the drop hits and the boat sinks | drop | action 2 |
| B3 | Pip resurfaces, refolds, salutes | Pip | action 3 (SH030 surface/shake, SH035 refold, SH037 salute; paddles on in SC03-SH010) |

## Blocking
Floor plan: LOC-PUDDLE, mid-water.
- Start positions: boat left of center, Pip seated, oar in hand.
- Moves: boat glides right; drop falls from the top of frame onto the boat's middle; boat folds; Pip comes up where it sank; the refolded boat pops up around her.
- End positions: boat centre-right, Pip seated and saluting.
- Axis and camera side: same as SC01, camera on the south bank.
- Screen direction in/out: in from the left (continuing SC01), out to the right.

## Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Pip | to paddle | steady oar strokes, chin up |
| B2 | Pip | to be hit | eyes pop wide, boat folds under her |
| B3 | Pip | to recover | SH030: head pops up, limp ears, seed raised high, shake; SH035: quick fold crease motions; SH037: a proud salute |

## Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC02-SH010 | WS | eye-level | static | boat | Pip paddles; ripple rings spread ahead of the bow; ends with the boat at center | boat left of center, empty sky above for the drop | flat, deep | soft overcast | 1.5 s | set up the drop's target | cut |
| SC02-SH020 | WS | eye-level | static | drop and boat | the aqua drop falls from the top of frame onto the middle of the boat; the boat folds flat and sinks (one cause-and-effect gag in one frame); ends with ripples and the boat gone, the oar floating flat on the surface beside the ripples | drop path and boat in one frame | flat, deep | soft overcast, drop is the brightest thing | 2.0 s | the gag | cut on the sink |
| SC02-SH030 | MS | eye-level | static | Pip | Pip bobs up soggy beside the floating flat paper, seed held high and dry, and shakes herself so droplets fly; ends with Pip on the flat paper, seed still high | Pip centre, seed top of frame, flat paper below her | flat | soft overcast | 1.5 s | the surfacing and shake | cut |
| SC02-SH035 | MS | eye-level | static | Pip and boat | Pip makes quick creases and the boat pops back into shape around her; ends with Pip seated in the popped boat | Pip centre, boat popped around her | flat | soft overcast | 1.5 s | the refold | cut |
| SC02-SH037 | MS | eye-level | static | Pip | Pip salutes the sky; ends in a held salute, oar across her lap, boat ready to go | Pip centre, sky above | flat | soft overcast | 1.5 s | her stubborn optimism | cut |

Total: 8.0 s vs estimate 7 s (+14%, within +-15%). Version 2 re-cut: one primary action per shot.

## Coverage and rhythm
Set-up (1.5 s), gag (2 s), then the recovery in three short beats (1.5 s each; was one 3.5 s hold). The cut comes on the sink so the laugh lands in the next shot.

## AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH020 | a falling drop hitting a boat that folds | start frame boat intact, end frame ripples only; two-clip fallback: drop-hit clip and sink clip |
| SH030 | surfacing, shake with droplets | start frame: head at the surface; end frame: Pip on the flat paper, seed high |
| SH035 | refolding paper | cartoon pop-and-smear (not literal folds); start = flat paper with Pip on it, end = popped boat; VFX/post fallback: cross-dissolve between a flat boat frame and a popped boat frame |
| SH037 | salute | one hand to brow; start frame already seated in the popped boat; salute is the only motion |

## Specialist and VFX flags
- action-director: none
- animation-director: yes (squash and stretch, fold gag, salute)
- vfx: possible post cleanup of the boat pop

## Handoff
- Produced: SC02_direction@2 (APPROVED under autonomy), 5 shots, 8.0 s
- Open items: QC-108 accepted deviation (paddles on carried by SC03-SH010 opening) needs script-supervisor map update
- Next: cinematographer, script-supervisor
