---
artifact: continuity
id: continuity
version: 3
status: APPROVED
owner: script-supervisor
depends_on: [screenplay@1, SC01_direction@2, SC02_direction@2, SC03_direction@2, SC04_direction@2, SC05_direction@2, SC01_camera@2, SC02_camera@2, SC03_camera@2, SC04_camera@2, SC05_camera@2, SC01_animation@2, SC02_animation@2, SC03_animation@2, SC04_animation@2, SC05_animation@3, props@2, CH-PIP@2]
updated: 2026-10-19
---
# Continuity Bible: Frog Ferry

## Change note (v3, 2026-10-19; production-manager conflict resolution, animation wins over continuity@2)
- Hand and oar rules replaced: oar in the RIGHT hand, seed under the LEFT arm; the SC02-SH037 salute is the LEFT hand (left upper arm pinned, seed stays tucked, right hand lays the oar across her lap); during both sinkings the oar FLOATS on the surface (not lost under water); the oar is stowed ON SCREEN at the start of SC04-SH030 (right hand lays it on the boat floor in frames 1-8, then both hands lift the seed). SC04-SH010 still shows HELD (REST); STOWED from SC04-SH030 to the end.
- Closed: CR-ISSUE-07 (wave at the right, director erratum), CR-ISSUE-08 (head tilt is part of the take, director erratum), CR-ISSUE-09 (props@2), CR-ISSUE-10. New: CR-ISSUE-11 (closed, this resolution), 12 and 13 (open, see log).
- depends_on updated to the current versions: five direction@2, five camera@2, SC01-SC04_animation@2, SC05_animation@3, props@2. Direction errata for SC04/SC05 are in place without a version bump.

## Change note (v2, 2026-10-19)
- Re-cut to direction@2: 25 shots, 42.0 s (SC01 5.5, SC02 8.0, SC03 5.0, SC04 11.5, SC05 12.0). New shot IDs mapped: SC01-SH025, SC02-SH035, SC02-SH037, SC03-SH025, SC04-SH045, SC04-SH055, SC05-SH025, SC05-SH055. State-change starts that moved: PR-BOAT FLAT -> REFOLDED now SC02-SH035; Pip SOGGY -> CREASED stays SC03-SH020.
- Coverage map refreshed. QC-108: the launch beat is now in SC01-SH010 (boat at her feet) + SC01-SH020 (set on water, hop in); "paddles on" is an ACCEPTED DEVIATION, shown at the start of SC03-SH010 (CR-ISSUE-06).
- QC-106 closed: one oar/seed hand rule (see Hand and oar rules; revised in v3). QC-107 closed: oar STOWED from the start of SC04-SH030 (on screen, v3). QC-112 closed: depends_on covers all five direction@2 and camera@2 files plus animation by current version; status mismatch fixed (this document is APPROVED).
- CR-ISSUE-02, 04, 05 closed with explicit decisions. New: CR-ISSUE-06 to 09.
- Animation docs: depends_on entries were bumped to the published animation versions in v3 (stale-dependency note resolved).

## Story timeline
| Scene | Story day | Time of day | Elapsed since previous | Weather |
|---|---|---|---|---|
| SC01 | D1 | morning | start | light rain |
| SC02 | D1 | morning | continuous | light rain |
| SC03 | D1 | morning | continuous (seconds) | light rain, slightly heavier |
| SC04 | D1 | morning | continuous | light rain |
| SC05 | D1 | morning | continuous (about 10 s of crossing) | rain thinning, pale warm glow upper right |

## Hand and oar rules (fixed for all departments)
1. Screen direction: Pip faces screen right and travels left to right. With the camera on the south bank, her RIGHT side is the camera-near side and her LEFT side is the far side.
2. Oar: always the RIGHT hand when it is in a hand (paddling, bobbing up after a sink, re-gripping). Never the left hand.
3. Seed (CLOSED): always tucked under her LEFT arm when not raised. When "held high" in SC02-SH030 and SC03-SH020 (start) it is raised by the left arm only; at the end of SC02-SH030 it is still high, in SC02-SH035 it goes back under the left arm.
4. Salute (SC02-SH037): the LEFT hand. The left upper arm stays pinned to the body so the seed stays tucked under it; only the left forearm and hand lift to the brow. The right hand lays the oar across her lap (PR-OAR:HELD, position REST) and keeps hold of it. The far-side (left) arm salutes, so the forearm must clear the head line to read in silhouette. (Decision: animation@2 wins over continuity@2 on the hand, same precedence tier as direction and more specific.)
5. Oar positions while HELD: HAND (right hand), REST (across her lap or on the boat floor within reach, right hand still on it) or, during recovery only, TUCK (under her right arm while she climbs or creases). FLOAT (on the water surface) applies only while she is under or just surfacing from a sinking. It goes to REST whenever the right hand is needed free (SC02-SH037 salute pose, SC03-SH025 hold).
6. Oar sink rule: during a sinking (SC02-SH020, SC03-SH010) the right hand lets go at the fold and the oar FLOATS flat on the water surface; it is never lost or carried away, and the seed tip stays above the water (left arm). Recovery: SC02-SH030 (right hand scoops it and tucks it under the right arm) then SC02-SH035 (re-gripped in the right hand as the refold finishes); SC03-SH020 likewise (start FLOAT, scoop and TUCK, re-gripped by the end).
7. Oar STOWED (lying across the boat floor, not in her keeping) starts ON SCREEN in the first frames of SC04-SH030 (frames 1-8, the first 0.3 s): her right hand lays it on the boat floor, then both hands lift the seed. SC04-SH010 therefore shows the oar still HELD (REST), and the SC04-SH020 sky POV shows nothing of it. STOWED stays to the end of the film (SC04-SH030 to SC05-SH055); the oar remains in the beached boat in SC05 and Pip never touches it again.
8. Seed OPEN (SC04-SH030 to SC05-SH025): held in both hands (overhead in SC04, offered at chest height in SC05). Never under the arm once open.
9. Pip is DRY after she shakes (see CR-ISSUE-02): the boat stays damp grey-cream, Pip is bright yellow. No new Pip state exists or is needed. Flying droplets in SC02-SH030 are a transient effect, not a state.

## State changes
| Item | From → to | Cause | Starts at shot |
|---|---|---|---|
| CH-PIP (CO-PIP-01) | DRY → SOGGY | first drop sinks the boat | SC02-SH020 (end, underwater) |
| CH-PIP | SOGGY → DRY | she shakes off water | SC02-SH030 (during the shake) |
| CH-PIP | DRY → SOGGY | second drop | SC03-SH010 (end, underwater) |
| CH-PIP | SOGGY → CREASED | quick refold leaves extra wrinkles (stays CREASED to the end) | SC03-SH020 |
| PR-BOAT | NEW → FLAT | drop 1 | SC02-SH020 |
| PR-BOAT | FLAT → REFOLDED | Pip refolds | SC02-SH035 |
| PR-BOAT | REFOLDED → FLAT | drop 2 | SC03-SH010 |
| PR-BOAT | FLAT → CREASED | second refold | SC03-SH020 |
| PR-SEED | CLOSED → OPEN | Pip pops the fluff | SC04-SH030 |
| PR-SEED | OPEN → PLANTED (fluff shut) | Mo plants it | SC05-SH030 |
| PR-OAR | HELD (HAND) → HELD (FLOAT) | right hand lets go at the fold; oar floats on the surface | SC02-SH020 |
| PR-OAR | HELD (FLOAT) → HELD (TUCK) → HELD (HAND) | right hand scoops it (SH030), re-grips it as the refold finishes | SC02-SH030 → SC02-SH035 (end) |
| PR-OAR | HELD (HAND) → HELD (REST) | right hand lays it across her lap for the left-hand salute | SC02-SH037 (start) |
| PR-OAR | HELD (REST) → HELD (HAND) | paddling resumes | SC03-SH010 (start) |
| PR-OAR | HELD (HAND) → HELD (FLOAT) | right hand lets go; oar floats on the surface | SC03-SH010 (end) |
| PR-OAR | HELD (FLOAT) → HELD (TUCK) → HELD (HAND) → HELD (REST) | scooped and re-gripped (SH020), then across her lap as she settles | SC03-SH020 → SC03-SH025 |
| PR-OAR | HELD (REST) → STOWED | Pip needs both hands for the seed; right hand lays the oar on the boat floor, ON SCREEN | SC04-SH030 (frames 1-8) |
| PR-SPROUT | HIDDEN → SPROUT | last drop | SC05-SH040 |

## Per-shot states (start → end)
Oar column: HAND = right hand; REST = across lap / boat floor within reach (still HELD); TUCK = under the right arm during recovery; FLOAT = on the water surface during a sinking; STOWED = lying across the boat floor. Seed "arm" = tucked under the LEFT arm.

| Shot | Pip | Boat | Seed | Oar | Mo / other |
|---|---|---|---|---|---|
| SC01-SH010 | DRY → DRY; standing on the near bank | NEW, on the bank at her feet | CLOSED, under left arm | HELD, HAND | Mo tiny at far right, feelers drooping |
| SC01-SH020 | DRY → DRY; standing → seated in the boat | NEW, at her feet → afloat at the water's edge | CLOSED, under left arm | HELD: laid in the boat as she sets it down (REST) → HAND when seated | Mo off-screen right (tiny) |
| SC01-SH025 | DRY → DRY; seated, paddling | NEW, afloat, moves to 1/4 into the puddle, heading right | CLOSED, under left arm | HELD, HAND | — |
| SC02-SH010 | DRY → DRY; seated, paddling | NEW, centre-left → centre | CLOSED, under left arm | HELD, HAND | ripple rings ahead of the bow |
| SC02-SH020 | DRY → SOGGY (underwater at the end) | NEW → FLAT, gone under | CLOSED, left arm thrusts it up; the tip stays above the water at the end | HELD: HAND → FLOAT (floating flat on the surface at the end) | drop falls from top of frame |
| SC02-SH030 | SOGGY → DRY (shake mid-shot); bobs up, ends standing on the flat paper | FLAT, floating flat paper | CLOSED, raised high by the left arm; stays high at the end | HELD: FLOAT → TUCK (scooped by the right hand, tucked under the right arm) | droplets fly during the shake |
| SC02-SH035 | DRY → DRY; ends seated in the popped boat | FLAT → REFOLDED (damp grey-cream) | CLOSED, back under left arm | HELD: TUCK (under the right arm while she creases) → HAND (right hand re-grips it as the pop finishes) | — |
| SC02-SH037 | DRY → DRY; seated, salute held | REFOLDED | CLOSED, under left arm (left upper arm pinned) | HELD: HAND → REST (right hand lays it across her lap, still holding it) | LEFT hand at the brow (salute) |
| SC03-SH010 | DRY → SOGGY (underwater at the end) | REFOLDED → FLAT, gone under | CLOSED, under left arm | HELD: starts HAND (stroking, paddles on) → FLOAT at the end (floating on the surface, ripples around) | rings widen at the bow; drop 2 on the same spot |
| SC03-SH020 | SOGGY → CREASED; head above water, scowling → seated in the lopsided boat | FLAT → CREASED | CLOSED: raised by the left arm at the start, under left arm at the end | HELD: FLOAT → TUCK → HAND (re-gripped by the end) | — |
| SC03-SH025 | CREASED → CREASED, ears flat at the end | CREASED | CLOSED, under left arm | HELD, REST (across lap, right hand on it) | grey round shadow grows lower right of the boat |
| SC04-SH010 | CREASED → CREASED; profile facing screen right, squint | CREASED | CLOSED, under left arm | HELD, REST | — |
| SC04-SH020 | n/a (POV, sky) | n/a | n/a | HELD (REST), unchanged; not visible | drop only |
| SC04-SH030 | CREASED → CREASED | CREASED | CLOSED, under left arm at the start → OPEN, raised in both hands | HELD (REST) → STOWED: the right hand lays it on the boat floor in frames 1-8 (first 0.3 s), on screen; then both hands lift the seed | — |
| SC04-SH040 | CREASED → CREASED; under the open fluff | CREASED | OPEN, overhead in both hands | STOWED | drop lands on the fluff, two bounces, ends rising |
| SC04-SH045 | CREASED (under the fluff) | CREASED | OPEN | STOWED | drop falls into water beside the boat; splash crown; ends in ripples |
| SC04-SH050 | CREASED | CREASED, spins once, ends facing right | OPEN | STOWED | splash wave at the RIGHT of the boat, consistent with SH045 (CR-ISSUE-07, closed) |
| SC04-SH055 | CREASED → CREASED, grinning | CREASED, moves right, ends at the right third | OPEN, held up in both hands | STOWED | — |
| SC05-SH010 | CREASED (seated) | CREASED, slides onto the far shore, beached at the left | OPEN, in both hands | STOWED | Mo feelers droop → up |
| SC05-SH020 | CREASED; steps out, ends standing on shore left of Mo, arms extended | CREASED, beached | OPEN, offered in both hands | STOWED (in the boat) | Mo feelers up and held back |
| SC05-SH025 | CREASED | CREASED, beached | OPEN → in Mo's feelers | STOWED | Mo takes the seed with her feelers with a small head tilt (part of the take, CR-ISSUE-08 closed) |
| SC05-SH030 | CREASED (out of focus/edge or absent) | CREASED | OPEN → PLANTED (fluff shut) | STOWED | Mo plants the stem |
| SC05-SH040 | not in frame | not in frame | PLANTED | not in frame | high insert; sprout HIDDEN → SPROUT |
| SC05-SH050 | CREASED; profile facing right, looks from sprout to sky | CREASED, beached | PLANTED | STOWED | Mo profile facing left; feelers wave; both end looking up |
| SC05-SH055 | CREASED; one-hand wave, hand is the RIGHT (camera-near) | CREASED, beached | PLANTED | STOWED | fade out |

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
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "Pip's right hand"}
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
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: DRY, hair: "none", injuries: "none", props_carried: "PR-SEED:CLOSED under left arm; PR-OAR:HELD in right hand (floats on the surface after the sink, tucked under the right arm in SH030, re-gripped in SH035, REST across lap during the salute)", end_position: "seated in the refolded boat at centre-right, saluting with the LEFT hand; state DRY after shaking"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:REFOLDED", location: "afloat, centre-right"}
  - {id: PR-SEED, state: "PR-SEED:CLOSED", location: "under Pip's arm"}
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "floats after the SH020 sink; right hand from the end of SH035; REST across the lap during the SH037 salute (left-hand salute)"}
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
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:CLOSED under left arm; PR-OAR:HELD (REST across lap at the end)", end_position: "seated in the lopsided boat, ears flat"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:CREASED", location: "afloat, centre-right"}
  - {id: PR-SEED, state: "PR-SEED:CLOSED", location: "under Pip's arm"}
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "right hand at the start of SH010; floats after the SH010 sink; re-gripped by the end of SH020; REST across the lap in SH025"}
time_of_day: morning
weather: "light rain, slightly heavier"
carry_over: "from SC02: boat REFOLDED, Pip DRY, oar REST across lap (back in the right hand at the start of SH010)"
```

```yaml
record: continuity
id: CONT-SC04
scene: SC04
axis: "left to right travel; camera on the south bank"
screen_direction: "boat exits screen right at speed"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:OPEN overhead in both hands; PR-OAR:STOWED lies across the boat floor, laid there on screen by the right hand in the first frames of SH030", end_position: "seated in the boat at the right third, grinning"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:CREASED", location: "afloat, moving right"}
  - {id: PR-SEED, state: "PR-SEED:OPEN", location: "overhead in Pip's hands"}
  - {id: PR-OAR, state: "PR-OAR:STOWED", location: "across the boat floor"}
time_of_day: morning
weather: "light rain; one large hero drop"
carry_over: "from SC03: boat CREASED, Pip CREASED, ears flat, oar REST across lap"
```

```yaml
record: continuity
id: CONT-SC05
scene: SC05
axis: "Pip (left) to Mo (right) facing each other; camera on the south bank"
screen_direction: "boat arrives from the left; Pip steps out to the right; Pip left of the sprout, Mo right; both end looking up"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:OPEN in both hands, offered to Mo, then empty hands; oar STOWED in the boat", end_position: "on the far shore left of the sprout, waving at the sky"}
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
| SC01 sets the boat on the water, hops in | SC01-SH010 (boat at her feet), SC01-SH020 | launch beat now shown (QC-108) |
| SC01 starts to paddle with the oar | SC01-SH025 | |
| SC02 boat glides, ripple rings at the bow | SC02-SH010 | |
| SC02 drop lands on the boat, boat folds and sinks | SC02-SH020 | one cause-and-effect gag |
| SC02 Pip bobs up soggy, seed held high | SC02-SH030 | |
| SC02 shakes herself | SC02-SH030 | |
| SC02 climbs onto the floating flat paper | SC02-SH030 (end state: Pip on the paper) | |
| SC02 makes quick creases, boat pops back | SC02-SH035 | |
| SC02 salutes the sky | SC02-SH037 | |
| SC02 "and paddles on" | SC03-SH010 (start: Pip stroking), SC02-SH037 (salute, boat ready) | ACCEPTED DEVIATION CR-ISSUE-06: a continuing state, shown at the start of SC03-SH010 |
| SC03 rings widen, Pip glances up relaxed | SC03-SH010 | start state |
| SC03 second drop on the same spot, sinks faster | SC03-SH010 | |
| SC03 Pip surfaces, scowls | SC03-SH020 | surfacing is in the start frame |
| SC03 refolds in a flash, lopsided and creased | SC03-SH020 | |
| SC03 small round shadow grows beside her | SC03-SH025 | |
| SC03 Pip's ears go flat | SC03-SH025 | |
| SC04 Pip looks up | SC04-SH010 | |
| SC04 third drop hangs high, small, getting bigger | SC04-SH020 | |
| SC04 Pip squints | SC04-SH010 | |
| SC04 holds the seed over her head, pops the fluff open | SC04-SH030 | oar stowed on screen in frames 1-8 first |
| SC04 drop lands on the fluff, bounces, bounces again | SC04-SH040 | |
| SC04 splash into the water beside the boat | SC04-SH045 | |
| SC04 splash wave spins the lopsided boat once | SC04-SH050 | |
| SC04 sends it speeding forward; Pip holds the seed up, grinning | SC04-SH055 | |
| SC05 boat slides onto the far shore, soft bump | SC05-SH010 | |
| SC05 Mo's feelers lift | SC05-SH010 | trailing end state |
| SC05 Pip steps out and offers the seed | SC05-SH020 | |
| SC05 Mo takes it in her feelers | SC05-SH025 | |
| SC05 Mo tips her head | SC05-SH025 | part of the take (director erratum on direction@2; CR-ISSUE-08 closed) |
| SC05 plants its stem in the bare soil; fluff folds shut | SC05-SH030 | |
| SC05 last drop lands on the soil; sprout pops with a boing | SC05-SH040 | |
| SC05 Mo's feelers wave | SC05-SH050 | |
| SC05 both look at the sprout, then up | SC05-SH050 | looking at the sprout is the start state |
| SC05 Pip gives the sky a small wave | SC05-SH055 | |
| SC05 FADE OUT | SC05-SH055 | editing transition |

No dialogue lines in the film. 0 uncovered beats. 0 shots add story events. 25 shots / 42.0 s.

## Cut-by-cut checks (new and changed cuts)
- SC01-SH010 to SH020: boat at her feet to boat afloat; Pip left in both; oar HAND to laid in the boat; no axis change.
- SC01-SH020 to SH025: start frame of SH025 equals the SH020 end frame (seated, afloat, oar in right hand).
- SC02-SH030 to SH035: Pip on the flat paper, seed high to seed tucked under the left arm, oar tucked under the right arm, then re-gripped in the right hand; same position centre.
- SC02-SH035 to SH037: seated in the popped boat; oar in the right hand, then laid across her lap; the left hand does the salute; boat REFOLDED.
- SC02-SH037 to SC03-SH010: salute to paddling resumed; oar REST to HAND (the picking-up happens at the cut; accepted).
- SC03-SH020 to SH025: seated in the creased boat, Pip centre-left in both; shadow added lower right.
- SC04-SH020 to SH030: sky POV to Pip with the oar HELD (REST) at the start frame; her right hand lays it on the boat floor (STOWED by frame 8); seed CLOSED under the left arm, then lifted in both hands (OPEN at the end).
- SC04-SH040 to SH045 to SH050 to SH055: fluff OPEN, Pip under it, boat CREASED throughout; the wave is at the RIGHT of the boat in SH045 and SH050 (CR-ISSUE-07 closed).
- SC05-SH020 to SH025: same two-shot, Pip left, Mo right; seed from Pip's hands to Mo's feelers.
- SC05-SH050 to SH055: same composition; Pip's wave hand is the RIGHT (camera-near) hand.

## Continuity report
| ID | Severity | Where | Issue | Sources | Owner | Status |
|---|---|---|---|---|---|---|
| CR-ISSUE-01 | MAJOR | SC05-SH020/SH030 | Animation started the hand-off with a closed seed while PR-SEED stays OPEN from SC04-SH030 until Mo plants it. | screenplay@1 (SC05), props@1 vs SC05_animation@1 | animation-director | CLOSED, fixed in SC05_animation@2 (seed OPEN in SH020 start pose, closes in SH030) |
| CR-ISSUE-02 | MINOR | SC02-SH030/SH035 end | CO-PIP-01 has DRY/SOGGY/CREASED only; SC02_animation@1 says "bright yellow again". | CH-PIP@2 vs SC02_animation@1 | character-designer | CLOSED, decision: Pip is DRY after the shake (bright #FFC93C, crisp creases). The boat alone stays damp. No new state. Optional request to character-designer: a note in CH-PIP that "DRY-ish" in SC02 means DRY; no DAMP state is needed. |
| CR-ISSUE-03 | MINOR | SC01-SH010 | Scene card said Pip and Mo do not share a shot; direction puts tiny Mo in the wide. | scene_index@1 vs SC01_direction@2 | film-director | CLOSED, accepted: wide establishing is the point; Mo uses the short lock |
| CR-ISSUE-04 | MINOR | SC02-SC04 | Oar unaccounted for in the sinkings. | props@1 | production-designer | CLOSED, decision: Hand and oar rules 5 and 6 (v3: oar floats on the surface during the sinkings and is scooped by the right hand; REST when the hand is needed) |
| CR-ISSUE-05 | MINOR | SC04-SH030 | PR-OAR:STOWED start (props says from SC04). | props@1, QC-107 | production-designer | CLOSED, decision (revised v3): STOWED starts in the first frames of SC04-SH030, ON SCREEN (right hand lays it on the boat floor); SC04-SH010 shows the oar in REST. Props "from: SC04" is consistent. |
| CR-ISSUE-06 | MINOR | SC02 "paddles on" | Screenplay "paddles on" has no own shot after the salute. | screenplay@1 SC02 vs SC02_direction@2 | film-director | CLOSED, ACCEPTED DEVIATION (QC-108): shown as paddling at the start of SC03-SH010. |
| CR-ISSUE-07 | MINOR | SC04-SH045 to SH050 | SH045 puts the splash lower right of the boat; SH050 composition put the wave at the left of the boat. | SC04_direction@2 | film-director | CLOSED, director erratum on SC04_direction@2 (no version bump): SH050 start state has the wave at the RIGHT, so the spin happens as the wave reaches the boat. SC04_animation@2 and SC04_camera@2 still say left: see CR-ISSUE-13. |
| CR-ISSUE-08 | MINOR | SC05-SH025 | Screenplay "tips her head" was not named in the direction. | screenplay@1 vs SC05_direction@2 | film-director / animation-director | CLOSED, director erratum on SC05_direction@2 (no version bump): the SH025 take includes Mo's small head tilt. SC05_animation@3 already has the head tilt (K4 f25). |
| CR-ISSUE-09 | MINOR | props.md | PR-OAR scenes, HELD description and STOWED start wording. | props@1 | production-designer | CLOSED, props@2: scenes SC01-SC05; HELD = right hand or REST across the lap / boat floor; STOWED from SC04-SH030 (on screen). |
| CR-ISSUE-10 | MINOR | animation / storyboard | Hand and oar conflict between continuity@2 (right-hand salute, off-screen stow) and the animation files (left-hand salute, floating oar, on-screen stow); SC01_animation boat-at-feet wording. | SC01-SC05_animation, storyboard@2 | production-manager | CLOSED, resolved in continuity@3 in favour of the animation files; storyboard@3 updated (left-hand salute, oar laid on the boat floor at the start of SC04-SH030). |
| CR-ISSUE-11 | MINOR | hand/oar rules | continuity@2 (right-hand salute, oar under water, off-screen stow) vs the animation files (left-hand salute, oar floats, on-screen stow); same precedence tier, animation more specific. | continuity@2 vs SC01-SC05_animation | production-manager | CLOSED, animation wins; see Hand and oar rules 2 to 7 (v3). |
| CR-ISSUE-12 | MINOR | SC02-SH020, SC03-SH010 | The floating oar (and the dry seed tip) at the end of the sinkings is not in the direction text ("ripples and the boat gone" / "ripples only"); SC02_animation proposes it to the director, SC02/SC03 camera and storyboard show ripples only. | SC02_direction@2, SC03_direction@2, SC02/SC03_camera@2, storyboard@3 | film-director, cinematographer | OPEN: the floating oar is a decision of this change; direction end states and the camera/storyboard wording should add "oar floats on the surface". |
| CR-ISSUE-13 | MINOR | SC04-SH050 | SC04_animation@2 (K1, start pose) and SC04_camera@2 (SH050) still put the wave at the LEFT. | SC04_animation@2, SC04_camera@2 vs SC04_direction@2 erratum | animation-director, cinematographer | OPEN, REQUEST: change to wave at the right (not edited by this resolution). |

No BLOCKER. Open: CR-ISSUE-12, 13 (MINOR). Axis: held everywhere (travel left to right, Pip left of Mo in SC05). SC04-SH020 is a sky POV and SC05-SH040 is a high-angle insert on the soil: neither crosses the axis. SC04-SH010, SC05-SH050 and SC05-SH055 are profiles consistent with the axis (Pip facing right, Mo facing left).

## Handoff
- Produced: continuity@3 (APPROVED)
- BLOCKER 0 / MAJOR 0 open (1 fixed) / MINOR 2 open (CR-ISSUE-12, 13), 11 closed
- Uncovered lines: none (the "paddles on" deviation is accepted)
- Requests: film-director and cinematographer (CR-ISSUE-12); animation-director and cinematographer (CR-ISSUE-13); others: none
- Next: production-manager (re-compile shot records to 25 shots)
