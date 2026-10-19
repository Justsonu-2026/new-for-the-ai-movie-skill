---
artifact: continuity-bible
id: continuity
version: 1
status: APPROVED
owner: script-supervisor
depends_on: [screenplay@1, SC01_direction@1, SC02_direction@1, SC03_direction@1, SC04_direction@1, SC02_action@1, SC01_camera@1, SC02_camera@1, SC03_camera@1, SC04_camera@1, CH-LAN@1, CH-MACAQUE@1, props@1, LOC-NIGHT-MARKET@1, LOC-BACK-ALLEY@1]
updated: 2026-10-19
---
# Continuity Bible: The Two Knocks

Approved under the autonomy policy (see PRODUCTION_LOG.md).

## Story timeline
| Scene | Story time | Elapsed | Weather | Notes |
|---|---|---|---|---|
| SC01 | N1, night, market open | start | dry, warm, humid haze | Steam, all stalls open |
| SC02 | N1, night | CONTINUOUS (seconds) | dry | Lights fall away toward the west |
| SC03 | N1, night | minutes after SC02 | dry, still | Only the alley lantern |
| SC04 | N1, late night | about an hour or more after SC03 (market closing) | dry | Stalls shuttered; same night, so the graze is still fresh |

## State changes (cause and starting shot)
| Item | Change | Cause | Starts at |
|---|---|---|---|
| CH-LAN costume | BASE to GRAZED (CO-LAN-01) | Crate vault in SC02 | SC02-SH050 (end) |
| CH-LAN right forearm | Red surface graze, about 12 cm, outer RIGHT forearm, no drip | Splintered slat on the 4-high crate stack | SC02-SH050 |
| CH-LAN hair | Two to three loose strands | The run and the squeeze | SC02-SH050 (increasing to SH080) |
| CH-LAN dust | Light dust on apron hem and trouser knees | Dragging over the second crate stack | SC02-SH050 |
| CH-LAN face | Flushed, sweat sheen | The run | SC02-SH020 (heaviest at SC02-SH080, fading through SC03) |
| PR-SAUCER-STALL | UPRIGHT to FACEDOWN | Lan turns it with her right hand | SC01-SH030 |
| PR-SAUCER-STALL | FACEDOWN to FACEUP (set on the counter edge) | Lan turns it for the macaque | SC04-SH020 |
| PR-TIN | SEALED, on the shelf to SEALED, in the macaque's arms | Theft | SC01-SH070 |
| PR-TIN | SEALED to OPEN | Lan's thumbs open the lid | SC03-SH070 |
| PR-TIN | OPEN to LID-ON (lid set back loosely, offset, unsealed) | Lan sets the lid back | SC03-SH100 |
| PR-FRUIT | TWISTED to POURED | Lan shakes it onto the alley saucer | SC03-SH090 |
| PR-SAUCER-ALLEY | EMPTY to FRUIT to EATEN | Lan pours; the macaque eats | SC03-SH090 / SC03-SH110 |
| PR-POT | BOILING to BOIL-OVER | Lan leaves it | SC01-SH090 |
| PR-LADLE | HELD to ABANDONED | Lan drops it | SC01-SH100 |
| Stall bulb | ON to OFF | Lan uses the east-post wall switch | SC04-SH050 |

## Per-shot states (key items only)
| Shot | Lan | Macaque / tin | Other |
|---|---|---|---|
| SC01-SH010 to SH060 | BASE, hair neat, no graze, ladle HELD then set down, tin SEALED on the shelf | on the wire from SH050 | Saucer UPRIGHT (SH010, SH020) then FACEDOWN (SH030 on); pot BOILING |
| SC01-SH070 | BASE | on the shelf with the tin SEALED | |
| SC01-SH080 to SH100 | BASE, flushed from SH100 | runs with the tin SEALED; rattle | Pot BOIL-OVER from SH090; ladle ABANDONED in SH100 |
| SC02-SH010 to SH030 | BASE becoming flushed, hair neat | tin SEALED in its arms | |
| SC02-SH040 | BASE, flushed | | Crates STACKED |
| SC02-SH050 | GRAZED from the landing | | Graze on the camera-side (right) forearm |
| SC02-SH060 | n/a (macaque only) | tin SEALED | |
| SC02-SH070 to SH110 | GRAZED, loose strands, dust, flushed | not seen | |
| SC03-SH010 to SH060 | GRAZED, flushed fading | tin SEALED on the ground, north of the stool; macaque south-west of the tin | ALLEY saucer EMPTY on the stool |
| SC03-SH070 | GRAZED | tin SEALED then OPEN at the end | |
| SC03-SH080 | | tin OPEN | Card FOLDED, spoon IN-TIN, fruit TWISTED |
| SC03-SH090 | GRAZED | | Fruit POURED; saucer FRUIT |
| SC03-SH100 | GRAZED | tin LID-ON | |
| SC03-SH110 | | | Saucer EATEN by the end |
| SC03-SH120 | GRAZED, dust on knees, seated | tin LID-ON in her lap | |
| SC04-SH010 to SH050 | GRAZED, dust, loose strands, calm | tin LID-ON on the shelf; macaque on the wire then at the saucer | STALL saucer FACEDOWN (SH010) then FACEUP (SH020 on); pot absent; stalls shuttered; stall bulb ON then OFF (SH050) |

## Continuity records

```yaml
record: continuity
id: CONT-SC01
scene: SC01
axis: "East-west line of the counter; camera north of the counter in the lane, looking south"
screen_direction: "East = screen left, west = screen right. Shelf, tin and bulb at screen left; pot at screen right. The macaque faces screen left (toward the tin) on the wire. Macaque and Lan both exit screen right (west)."
character_states:
  - {id: CH-LAN, costume: CO-LAN-01, state: BASE, notes: "Hair neat, no graze, broth stains on apron, sleeves rolled to the elbow. Right hand touches the tin and turns the saucer. Ends flushed, running screen right."}
  - {id: CH-MACAQUE, costume: CO-MACAQUE-01, state: BASE, notes: "Notch in its own LEFT ear. On the wire facing screen left in three-quarter, so the left (notched) ear is toward the camera. Ends running west with the tin in its arms."}
prop_states:
  - "PR-TIN:SEALED: on the shelf (east end) until SC01-SH070, then in the macaque's arms"
  - "PR-SAUCER-STALL:UPRIGHT then PR-SAUCER-STALL:FACEDOWN at SC01-SH030, on the shelf (west end)"
  - "PR-PHOTO:STANDING between the saucer and the tin; PR-POT:BOILING then PR-POT:BOIL-OVER; PR-LADLE:HELD then PR-LADLE:ABANDONED"
time_of_day: night
weather: "dry, warm, humid haze; steam"
carry_over: "none (opening scene). Leaves: Lan BASE flushed running screen right; macaque with the tin running screen right; saucer facedown; pot boiling over; ladle abandoned."
```

```yaml
record: continuity
id: CONT-SC02
scene: SC02
axis: "East-west line of travel; camera on the north side of the lane looking south and tracking west"
screen_direction: "Travel west reads screen right in every shot except SC02-SH070 (neutral: Lan moves toward a camera waiting inside the service path) and SC02-SH110 (Lan walks away from camera to the alley mouth on the south side)."
character_states:
  - {id: CH-LAN, costume: CO-LAN-01, state: GRAZED, notes: "BASE until SC02-SH050, graze appears on the outer RIGHT forearm as she lands. Then loose strands, dust on hem and knees, flushed, sweat sheen. Hand on the graze in SC02-SH080."}
  - {id: CH-MACAQUE, costume: CO-MACAQUE-01, state: BASE, notes: "Runs low, tin in one arm on the side nearest camera (its right side is toward the camera when it runs west). Slightly dusty coat. Never in a shot with Lan."}
prop_states:
  - "PR-TIN:SEALED in the macaque's arms, rattling, until it is out of sight after SC02-SH060"
  - "PR-CRATES:STACKED undamaged, 3-high stack east of the 4-high stack; PR-CART:PARKED across the lane"
time_of_day: night
weather: "dry, steam haze thinning toward the west"
carry_over: "From SC01: Lan BASE flushed, macaque with the tin, both travelling screen right. Leaves: Lan GRAZED at the alley mouth threshold; macaque and the tin already in the alley."
```

```yaml
record: continuity
id: CONT-SC03
scene: SC03
axis: "North-south line from Lan (north) to the stool (south); camera on the west side of the alley, looking east, 4 m west of the centre line (west wall treated as flown-out)"
screen_direction: "North = screen left, south = screen right. Lan enters from screen left and moves screen right, the same as SC02. Lantern, drainpipe and east wall in the background."
character_states:
  - {id: CH-LAN, costume: CO-LAN-01, state: GRAZED, notes: "Graze visible on the camera-side right forearm when facing south. Loose strands, dust on knees, flushed fading. Crouches, then kneels, then sits on the cold ground at screen left of the macaque."}
  - {id: CH-MACAQUE, costume: CO-MACAQUE-01, state: BASE, notes: "Sits south-west of the tin facing north (screen left); notched left ear toward the camera. Taps with its left palm. Shuffles forward to the saucer and eats with its fingers."}
prop_states:
  - "PR-TIN:SEALED on the ground north of the stool until SC03-SH070, PR-TIN:OPEN in SC03-SH070 to SH090, PR-TIN:LID-ON from SC03-SH100 (lid set back loosely, offset)"
  - "PR-SAUCER-ALLEY:EMPTY on the stool seat with the chip at 3 o'clock toward the camera, PR-SAUCER-ALLEY:FRUIT after SC03-SH090, PR-SAUCER-ALLEY:EATEN by the end of SC03-SH110"
  - "PR-FRUIT:TWISTED in the tin, PR-FRUIT:POURED after SC03-SH090; PR-CARD:FOLDED and PR-SPOON:IN-TIN seen in SC03-SH080; PR-STOOL:STANDING; PR-LANTERN-ALLEY:LIT, steady"
time_of_day: night
weather: "dry, still"
carry_over: "From SC02: Lan GRAZED, flushed, loose strands; macaque and tin already in the alley. Leaves: Lan seated with the tin LID-ON in her lap; macaque beside her; saucer EATEN."
```

```yaml
record: continuity
id: CONT-SC04
scene: SC04
axis: "East-west line of the counter; camera at the SC01 position (north of the counter in the lane, looking south)"
screen_direction: "Same as SC01: east = screen left (shelf, east post and switch), west = screen right. Nobody exits."
character_states:
  - {id: CH-LAN, costume: CO-LAN-01, state: GRAZED, notes: "Same night, so the graze is fresh. Loose strands, dust on the apron hem. Calm. Right hand turns the saucer and knocks; reaches to the east-post switch."}
  - {id: CH-MACAQUE, costume: CO-MACAQUE-01, state: BASE, notes: "Appears on the lantern wire in SC04-SH040, tilts its head, drops to the counter edge beside the saucer. Notch on its own left ear."}
prop_states:
  - "PR-TIN:LID-ON on the shelf (east end), lid set back loosely and offset; 'open tin' in the script"
  - "PR-SAUCER-STALL:FACEDOWN at SC04-SH010, PR-SAUCER-STALL:FACEUP from SC04-SH020, set on the counter edge below the wire at the east end"
  - "PR-PHOTO:STANDING beside the tin; the pot is absent (ASSUMPTION carried from props@1)"
time_of_day: night
weather: "dry"
carry_over: "From SC03: Lan GRAZED with dust; the tin LID-ON, returned to the shelf off-screen between scenes; the macaque follows her back to the wire (off-screen). Leaves: the market dark."
```

## Coverage map (lined script)
| Screenplay beat or line | Shots |
|---|---|
| SC01 Steam, lanterns, wok; Lan ladles noodles | SC01-SH010 |
| Two fingers touch the tin without looking; photo beside | SC01-SH020 |
| Chipped saucer turned face-down | SC01-SH030 |
| Customer takes the bowl; Lan wipes the counter | SC01-SH040 |
| Macaque on the wire watches the tin | SC01-SH050 |
| "Almost closing." | SC01-SH060 (VL-SC01-001) |
| Wire dips; macaque drops; both hands on the tin | SC01-SH070 |
| Lan turns; "Hey!" | SC01-SH080 (VL-SC01-002) |
| Macaque runs along the counter; tin rattles; pot boils over | SC01-SH090 |
| Lan abandons the ladle and runs | SC01-SH100 |
| SC02 macaque dives under a table; Lan skids around it | SC02-SH010, SC02-SH020 |
| Runs low and straight; tin rattles | SC02-SH030 |
| Vaults crates, drags over a second, forearm scrapes | SC02-SH040, SC02-SH050 |
| Cart blocks; macaque slips under; Lan through the gap sideways | SC02-SH060, SC02-SH070 |
| Out the other side; macaque and rattle gone; Lan stops, hand on arm | SC02-SH080 |
| Searches lanterns and crowd; nothing | SC02-SH090 |
| Two slow metallic knocks; silence | SC02-SH100 |
| Lan follows the sound to the alley mouth | SC02-SH110 |
| SC03 noise falls away; lantern, stool, saucer; tin and macaque; Lan at the edge of the light | SC03-SH010 |
| Macaque taps Knock. Knock. and looks at her | SC03-SH020 |
| Lan stares at the worn spots and at her own two fingers | SC03-SH030 |
| She steps in; hand reaches and stops | SC03-SH040 |
| Her eyes go to the matching chip | SC03-SH050 |
| "Ah Ma." | SC03-SH060 (VL-SC03-001) |
| Crouches, lifts the tin, thumbs, it comes open | SC03-SH070 |
| Insert: open tin, card, spoon, fruit twist | SC03-SH080 |
| Shakes the fruit onto the saucer | SC03-SH090 |
| Sets the lid back and knocks twice with two knuckles | SC03-SH100 |
| The macaque shuffles forward and eats | SC03-SH110 |
| Lan sits on the ground with the open tin in her lap; almost smiles | SC03-SH120 |
| SC04 closing, dimmed lanterns, tin on the shelf by the photo | SC04-SH010 |
| Saucer turned face-up and set on the counter edge | SC04-SH020 |
| Two knocks on the lid | SC04-SH030 |
| Macaque tilts its head and drops to the saucer | SC04-SH040 |
| Lan turns off the last light | SC04-SH050 |

All 3 dialogue lines and all action beats are covered. No shot adds a story event. Uncovered lines: none.

## Continuity report
| ID | Severity | Sources | Issue | Owner | Status |
|---|---|---|---|---|---|
| CR-01 | MAJOR | SC02_direction@1 (SH070 follow, camera on the north side), LOC-NIGHT-MARKET@1 (gap L6 on the north side) | The camera cannot see the gap from the north side of the lane; moving it to the south side would flip travel to screen left and cross the line | film-director, cinematographer | RESOLVED: SH070 is a neutral shot taken from inside the service path ahead of Lan; direction, action plan and camera updated before approval |
| CR-02 | MINOR | screenplay@1 (SC03 'open tin' in her lap after the lid is set back) vs props@1 (LID-ON) | The script calls it 'the open tin' while the lid is back on. Treated as LID-ON, loosely set, unsealed | production-designer, screenwriter | ACCEPTED as recorded in props@1; user to confirm (ASSUMPTION already open) |
| CR-03 | MINOR | LOC-NIGHT-MARKET@1 | Wire height written as 2.4 m and as 70 cm above a 140 cm shelf (2.1 m) | production-designer | OPEN; no shot depends on it |
| CR-04 | MINOR | SC01_direction@1 SH090 | The macaque runs west along the counter toward the pot where Lan stands. Block it along the far (lane) edge of the counter; Lan has just turned from the pot and is not in reach | film-director | ACCEPTED; blocking note for the video prompt |
| CR-05 | MINOR | screenplay@1 SC03 | Where the empty fruit twist goes after the pour is not stated | screenwriter | OPEN; ASSUMPTION: Lan drops it into the tin when she sets the lid back; not shown |
| CR-06 | MINOR | SC03_camera@1 | Camera 4 m west of the alley centre line implies the west wall is flown-out; the identity lock says the alley is 2.5 m wide | production-designer | ACCEPTED; wide shots show the east wall only |
| CR-08 | MINOR | SC01_direction@1 (SH020 'photo left edge'), props@1 (shelf order west to east: saucer, photo, tin) | Seen from the north, east is screen left, so the order left to right is tin, photo, saucer; the photo is right of the tin, not left | film-director | RESOLVED: SC01_direction corrected before approval; SH020 hand enters from the right |
| CR-07 | MINOR | SC04_direction@1 | The macaque must follow Lan back to the wire between SC03 and SC04 (off-screen) | none | ACCEPTED; implied by the ritual |

Cuts checked: all 37 cut points across scenes. Light direction, screen direction, props and costume state agree across each cut after CR-01. Blockers: 0. Major: 1 (resolved). Minor: 7 (2 open, none blocks assembly).

## Handoff
- Produced: continuity@1 (APPROVED under autonomy policy): 4 continuity records, 38 shots covered, 3 of 3 lines covered
- Built from: screenplay@1, the four direction and camera documents, SC02_action@1, bibles@1, props@1
- Open items: CR-03 (wire height) and CR-05 (fruit twist) are open and minor; CR-02 depends on the user's confirmation of the ASSUMPTION about the tin lid
- Conflicts: none unresolved
- Next: production-manager compiles shot records
