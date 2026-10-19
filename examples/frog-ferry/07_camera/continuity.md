---
artifact: continuity
id: continuity
version: 1
status: APPROVED
owner: script-supervisor
depends_on: [screenplay@1, SC01_direction@1, SC01_camera@1]
updated: 2026-10-19
---
# Continuity Bible: Frog Ferry

## Story timeline
| Scene | Story day | Time of day | Elapsed since previous | Weather |
|---|---|---|---|---|
| SC01 | D1 | morning | start | light rain |
| SC02 | D1 | morning | continuous | light rain |
| SC03 | D1 | morning | continuous (seconds) | light rain, slightly heavier |
| SC04 | D1 | morning | continuous | light rain |
| SC05 | D1 | morning | continuous (about 10 s of crossing) | rain thinning, pale warm glow upper right |

## State changes
| Item | From → to | Cause | Starts at shot |
|---|---|---|---|
| CH-PIP (CO-PIP-01) | DRY → SOGGY | first drop sinks the boat | SC02-SH020 |
| CH-PIP | SOGGY → DRY | she shakes off water | SC02-SH030 |
| CH-PIP | DRY → SOGGY | second drop | SC03-SH010 |
| CH-PIP | SOGGY → CREASED | quick refold leaves extra wrinkles (stays CREASED to the end) | SC03-SH020 |
| PR-BOAT | NEW → FLAT | drop 1 | SC02-SH020 |
| PR-BOAT | FLAT → REFOLDED | Pip refolds | SC02-SH030 |
| PR-BOAT | REFOLDED → FLAT | drop 2 | SC03-SH010 |
| PR-BOAT | FLAT → CREASED | second refold | SC03-SH020 |
| PR-SEED | CLOSED → OPEN | Pip pops the fluff | SC04-SH030 |
| PR-SEED | OPEN → PLANTED (fluff shut) | Mo plants it | SC05-SH030 |
| PR-OAR | HELD → STOWED | Pip needs both hands | SC04-SH030 |
| PR-SPROUT | HIDDEN → SPROUT | last drop | SC05-SH040 |

## Per-shot states (start → end)
| Shot | Pip | Boat | Seed | Oar | Mo / other |
|---|---|---|---|---|---|
| SC01-SH010 | DRY → DRY | NEW, on the bank | CLOSED, under left arm | HELD | Mo feelers drooping |
| SC01-SH020 | DRY → DRY | NEW, afloat | CLOSED | HELD | Mo off-screen right (tiny) |
| SC02-SH010 | DRY → DRY | NEW | CLOSED | HELD | — |
| SC02-SH020 | DRY → SOGGY | NEW → FLAT | CLOSED | HELD | — |
| SC02-SH030 | SOGGY → DRY | FLAT → REFOLDED | CLOSED, held high then under arm | HELD | — |
| SC03-SH010 | DRY → SOGGY | REFOLDED → FLAT | CLOSED | HELD | — |
| SC03-SH020 | SOGGY → CREASED | FLAT → CREASED | CLOSED | HELD | grey shadow lower right at the end |
| SC04-SH010 | CREASED | CREASED | CLOSED | HELD | — |
| SC04-SH020 | n/a (POV, sky) | n/a | n/a | n/a | drop only |
| SC04-SH030 | CREASED | CREASED | CLOSED → OPEN | HELD → STOWED | — |
| SC04-SH040 | CREASED | CREASED | OPEN | STOWED | — |
| SC04-SH050 | CREASED | CREASED | OPEN | STOWED | — |
| SC05-SH010 | CREASED | CREASED, beached | OPEN | STOWED | Mo feelers droop → up |
| SC05-SH020 | CREASED | CREASED | OPEN (offered), then in Mo's feelers | STOWED | Mo feelers up |
| SC05-SH030 | CREASED | CREASED | OPEN → PLANTED (fluff shut) | STOWED | — |
| SC05-SH040 | CREASED | — | PLANTED | — | sprout HIDDEN → SPROUT |
| SC05-SH050 | CREASED | CREASED | PLANTED | STOWED | feelers waving |

## Scene records

```yaml
record: continuity
id: CONT-SC01
scene: SC01
axis: "near shore (left) to far shore (right); camera on the south bank, side-on, for the whole film"
screen_direction: "Pip faces screen right and travels left to right; Mo faces screen left; Pip and boat exit toward screen right"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: DRY, hair: "none", injuries: "none", props_carried: "PR-SEED:CLOSED under left arm; PR-OAR:HELD in right hand", end_position: "seated in the boat, a quarter of the way across, heading right"}
  - {id: CH-MO, costume: CO-MO-01, costume_state: DRY, hair: "none", injuries: "none", props_carried: "none", end_position: "far shore right beside the soil patch, feelers drooping"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:NEW", location: "afloat in the puddle"}
  - {id: PR-SEED, state: "PR-SEED:CLOSED", location: "in Pip's keeping"}
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "Pip's hand"}
time_of_day: morning
weather: "light rain"
carry_over: "none (first scene)"
```

```yaml
record: continuity
id: CONT-SC02
scene: SC02
axis: "left to right travel; camera on the south bank"
screen_direction: "boat travels left to right; enters from the left, exits right"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: SOGGY, hair: "none", injuries: "none", props_carried: "PR-SEED:CLOSED; PR-OAR:HELD", end_position: "seated in the refolded boat at centre-right, saluting; state DRY after shaking"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:REFOLDED", location: "afloat, centre-right"}
  - {id: PR-SEED, state: "PR-SEED:CLOSED", location: "under Pip's arm"}
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "Pip's hand"}
time_of_day: morning
weather: "light rain"
carry_over: "from SC01: boat NEW afloat, Pip DRY, heading right"
```

```yaml
record: continuity
id: CONT-SC03
scene: SC03
axis: "left to right travel; camera on the south bank"
screen_direction: "boat continues screen right; shadow appears lower right of the boat"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:CLOSED; PR-OAR:HELD", end_position: "seated in the lopsided boat, ears flat"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:CREASED", location: "afloat, centre-right"}
  - {id: PR-SEED, state: "PR-SEED:CLOSED", location: "under Pip's arm"}
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "Pip's hand"}
time_of_day: morning
weather: "light rain, slightly heavier"
carry_over: "from SC02: boat REFOLDED, Pip DRY"
```

```yaml
record: continuity
id: CONT-SC04
scene: SC04
axis: "left to right travel; camera on the south bank"
screen_direction: "boat exits screen right at speed"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:OPEN overhead in both hands; PR-OAR:STOWED lies in the boat", end_position: "seated in the boat at the right third, grinning"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:CREASED", location: "afloat, moving right"}
  - {id: PR-SEED, state: "PR-SEED:OPEN", location: "overhead in Pip's hands"}
  - {id: PR-OAR, state: "PR-OAR:STOWED", location: "across the boat floor"}
time_of_day: morning
weather: "light rain; one large hero drop"
carry_over: "from SC03: boat CREASED, Pip CREASED, ears flat"
```

```yaml
record: continuity
id: CONT-SC05
scene: SC05
axis: "Pip (left) to Mo (right) facing each other; camera on the south bank"
screen_direction: "boat arrives from the left; Pip steps out to the right; Pip left of the sprout, Mo right; both end looking up"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:OPEN offered to Mo, then empty hands", end_position: "on the far shore left of the sprout, waving at the sky"}
  - {id: CH-MO, costume: CO-MO-01, costume_state: DRY, hair: "none", injuries: "none", props_carried: "PR-SEED, then plants it", end_position: "right of the sprout, feelers waving"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:CREASED", location: "beached on the far shore, left"}
  - {id: PR-SEED, state: "PR-SEED:PLANTED", location: "in the soil patch, fluff shut"}
  - {id: PR-OAR, state: "PR-OAR:STOWED", location: "in the beached boat"}
  - {id: PR-SPROUT, state: "PR-SPROUT:SPROUT", location: "in the soil beside the planted seed"}
time_of_day: morning
weather: "rain thinning, pale warm glow upper right"
carry_over: "from SC04: boat CREASED, Pip CREASED, seed OPEN, oar STOWED"
```

## Coverage map
| Screenplay element (scene, beat/line) | Covered by shots | Note |
|---|---|---|
| SC01 puddle, rain, leaf, pebble | SC01-SH010 | |
| SC01 Pip with the seed | SC01-SH010 | |
| SC01 Mo, bare soil, drooping feelers | SC01-SH010 | Mo tiny at far right |
| SC01 Pip sees Mo, brightens | SC01-SH010 | |
| SC01 sets the boat on the water, hops in, paddles | SC01-SH020 | |
| SC02 boat glides, ripple rings at the bow | SC02-SH010 | |
| SC02 drop lands on the boat, boat folds and sinks | SC02-SH020 | |
| SC02 Pip bobs up with the seed held high | SC02-SH030 | |
| SC02 shakes, refolds, boat pops, salutes, paddles on | SC02-SH030 | "paddles on" is carried into SC03-SH010 |
| SC03 rings widen, Pip glances up | SC03-SH010 | |
| SC03 second drop on the same spot, sinks faster | SC03-SH010 | |
| SC03 Pip surfaces, scowls, refolds lopsided | SC03-SH020 | |
| SC03 small round shadow, ears flat | SC03-SH020 | |
| SC04 Pip looks up, third drop above, growing | SC04-SH010, SC04-SH020 | |
| SC04 Pip squints, pops the fluff open | SC04-SH010, SC04-SH030 | |
| SC04 drop lands on the fluff, bounces, splash beside the boat | SC04-SH040 | |
| SC04 splash wave spins the boat, speeds forward, Pip grins | SC04-SH050 | |
| SC05 boat slides ashore, bump, Mo's feelers lift | SC05-SH010 | |
| SC05 Pip steps out, offers the seed; Mo takes it | SC05-SH020 | |
| SC05 Mo plants the stem; the fluff folds shut | SC05-SH030 | |
| SC05 last drop; sprout pops | SC05-SH040 | |
| SC05 Mo's feelers wave; both look at the sprout, then up; Pip waves; FADE OUT | SC05-SH050 | fade-out is an editing transition |

No dialogue lines in the film. 0 uncovered beats. 0 shots add story events.

## Continuity report
| ID | Severity | Where | Issue | Sources | Owner | Status |
|---|---|---|---|---|---|---|
| CR-ISSUE-01 | MAJOR | SC05-SH020/SH030 | CONFLICT: SC05_animation@1 starts the hand-off with a *closed* seed, but PR-SEED stays OPEN from SC04-SH030 and the screenplay says the fluff folds shut only when Mo plants it (SC05 action 2). | screenplay@1 (SC05), props@1, SC04/SC05 shots vs SC05_animation@1 | animation-director | FIXED in SC05_animation@2 (seed OPEN in SH020 start pose, closes in SH030) |
| CR-ISSUE-02 | MINOR | SC02-SH030 end | SC02_animation@1 end pose says "bright yellow again"; CO-PIP-01 has no damp-recovered state, only DRY/SOGGY/CREASED. | CH-PIP@2 vs SC02_animation@1 | character-designer | OPEN, proposal: treat as DRY (shaken off) |
| CR-ISSUE-03 | MINOR | SC01-SH010 | scene card said Pip and Mo do not share a shot; direction puts tiny Mo in the wide. | scene_index@1 production_flags vs SC01_direction@1 | film-director | accepted: wide establishing is the point; Mo uses the short lock |
| CR-ISSUE-04 | MINOR | SC02-SC04 | PR-OAR: sunk boat and the oar are not described; assumed Pip keeps the oar throughout. | props@1 | production-designer | OPEN, ASSUMPTION |
| CR-ISSUE-05 | MINOR | SC04-SH030 | PR-OAR:STOWED begins at SH030 (props says from SC04). | props@1 | production-designer | accepted |

No BLOCKER. Axis: held everywhere (travel left to right, Pip left of Mo in SC05). SC05-SH040 is a high-angle insert on the soil: it does not cross the axis.

## Handoff
- Produced: continuity@1 (REVIEW)
- BLOCKER 0 / MAJOR 1 (fixed) / MINOR 4
- Uncovered lines: none
- Next: production-manager (compile shot records)
