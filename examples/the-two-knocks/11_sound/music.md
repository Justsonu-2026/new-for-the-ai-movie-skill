---
artifact: music-plan
id: music
version: 1
status: APPROVED
owner: music-director
depends_on: [screenplay@1, style_bible@1, edit_plan@2, sfx@1, voice@1]
updated: 2026-10-19
---
# Music Plan: The Two Knocks

There is no music tool and no budget. Nothing is composed or generated. This is the spotting and cue sheet for music added in post later (a composer, a library licensed for the film, or a music tool when one exists). Times are on the 96.0 s paper-edit timeline (edit_plan@1) and are anchored to shot IDs so they re-time with the cut. If CR-E01 (trim four SC02 shots by 0.5 s each) is accepted, every time after SC02-SH040 moves 2.0 s earlier and the cue lengths shorten by the same amount.

## Concept
- Role of music: the film is told by image, hands and a sound (the knock). Music enters only to carry the chase and, afterwards, the tenderness of the alley and the close. It never speaks over the story's quiet turns.
- Palette: small, close and handmade, no orchestra and no synths: a plucked string instrument, soft tuned wood percussion (marimba or wood-block feel), a low bowed sustained note, a hand drum played with fingers. No named culture is claimed; the setting is deliberately regional.
- Rules (what music never does): it never covers the knock, the three lines or the tin's rattle; it never plays under SC01's routine (the market is the music there); it never announces the reveal before the image shows it; no vocals and no lyrics; no riser or sting.

## Themes
| Theme | Idea/character | Description (contour, mode, rhythm) | Instrument | Transformations |
|---|---|---|---|---|
| T1 "Two Knocks" | The ritual, the grandmother, the tin | Two notes of equal length, falling a minor third, a short rest, then a rising step to a warmer note that does not resolve fully (open fifth). It mirrors the knock's rhythm: tok... tok. Mode: D dorian | plucked string | Chase: only its rhythm, as muted wood taps with no pitch (the ritual in pieces). Alley: the full melody, slow, with the answer note. Close: the same two notes, once, then the answer arrives and rings out |
| T2 "Chase" | Lan's drive and the macaque's speed | Short repeating figure in 2 bars, off-beat accents, a steady pulse; no melody to speak of | wood percussion, hand drum, pizzicato string | Strips down to the pulse alone, then stops dead at SC02-SH070. Does not return |

## Spotting
| Scene | Moment | Music / none / source | Function | Reason |
|---|---|---|---|---|
| SC01 | SH010 to SH080 (0.0 to 19.0 s) | none (source: market ambience only) | Show the numb routine | The market is already full of sound; music would soften the numbness. The tin touch, the saucer, the line and "Hey!" all need a bare bed |
| SC01 | SH090 to SH100 (19.0 to 23.5 s) | score M01 begins at SH090 | Chase starts | The pot boils over; the world speeds up |
| SC02 | SH010 to SH070 (23.5 to 44.0 s) | score M01 continues | Drive, comedy of the squeeze | Keeps pace; ends at the apron squeeze button |
| SC02 | SH080 to SH100 (44.0 to 52.5 s) | none | Loss, breath, the two knocks | Silence is the loss; the knocks are the event and must be heard alone |
| SC02 | SH110 (52.5 to 55.5 s) | M02 begins in the last 0.5 s | Lead into the alley | A low held note rides the J-cut from lane to alley |
| SC03 | SH010 to SH050 (55.5 to 68.0 s) | M02 held note only (soft), no melody | Hush | The tin sits in the light; the macaque taps; let the ritual speak by itself |
| SC03 | SH060 (68.0 to 70.0 s) | none | The whispered "Ah Ma." | The line is barely audible: nothing may sit near it |
| SC03 | SH070 to SH090 (70.0 to 77.5 s) | M03 the theme T1, first full statement | Tenderness: she chooses to open the tin | She acts; the music follows her hands, it does not lead |
| SC03 | SH100 (77.5 to 79.5 s) | none (music steps out for the two knocks) | The knock is Lan's now | The knock is the strongest sound; nothing under it |
| SC03 | SH110 to SH120 (79.5 to 85.0 s) | M03 resumes, warmer, answer note arrives | Rest, closure | The macaque eats; she sits; the answer to the question the theme asked |
| SC04 | SH010 to SH020 (85.0 to 89.5 s) | none | The quiet lane | The stall is shuttered; the lane itself is the bed |
| SC04 | SH030 (89.5 to 91.5 s) | none (the two knocks, bare) | The ritual repeated | Same as SC03-SH100 |
| SC04 | SH040 to SH050 (91.5 to 96.0 s) | M04 | Close | Two plucked notes, the answer, then the ring into black |

## Cues

```yaml
record: music_cue
id: M01
start: "SC01-SH090 +0.0 s (19.0 s)"
end: "SC02-SH070 end (44.0 s)"
function: "Drive the chase from the boil-over to the squeeze; comedy and cost, not menace"
description: "Hand drum and wood percussion pulse with a pizzicato two-bar figure; a plucked string adds a short answering fill after each bar; no melody; T1's rhythm appears once as muted taps in the last bar of SC02-SH060"
tempo_bpm: 128
key: "D dorian (mostly unpitched percussion; the string stays on D, F, A)"
meter: "4/4 (bar = 1.875 s)"
instrumentation: [hand drum, wood percussion, pizzicato string, plucked string]
dynamics: "Enters at mp on the boil-over, builds to mf by SC02-SH040, holds, drops to p under SC02-SH060, stops on a button at the end of SC02-SH070"
hit_points:
  - "SC01-SH090 +1.2 s (20.2 s): boil-over surge, first accent"
  - "SC02-SH040 end (35.5 s): landing of the vault, a bar-end accent"
  - "SC02-SH050 +2.6 s (38.1 s): the graze and her hiss; the percussion drops out for one beat, then returns lighter"
  - "SC02-SH070 end (44.0 s): hard button as she gets through the gap, then silence"
in_out: "Hard start on the boil-over; hard button ending, no tail"
leaves_room_for: "tin rattle, footsteps, Lan's hiss (SFX-SC02), 'Hey!' sits before the cue (19.0 s) and is not covered"
source_or_score: score
prompt: "UNUSED, no music tool. Instrumental, 128 BPM, D dorian: hand drum and wood percussion with a short pizzicato string figure, light and playful, no melody, 25 seconds, hard stop ending, no vocals."
status: REVIEW
gen_state: PLANNED
```

```yaml
record: music_cue
id: M02
start: "SC02-SH110 +2.5 s (55.0 s)"
end: "SC03-SH050 end (68.0 s)"
function: "Carry the move from lane to alley and hold the hush"
description: "A single low bowed note on D, very soft, with a faint harmonic shimmer; no rhythm and no melody. It rises from nothing on the J-cut and stays until the whisper"
tempo_bpm: 0
key: "D (drone)"
meter: "free"
instrumentation: [low bowed string]
dynamics: "ppp rising to pp over 3 s, then flat; fades fully out by the end of SC03-SH050 so the whisper is bare"
hit_points: ["none; stays clear of the palm taps at SC03-SH020 +0.4 s (59.4 s)"]
in_out: "Fade in on the J-cut; fade out over 1.5 s ending at SC03-SH050 end"
leaves_room_for: "alley room tone, the palm taps (SFX-SC03), her breath"
source_or_score: score
prompt: "UNUSED, no music tool. A single very soft low bowed string note on D, no vibrato, no rhythm, 13 seconds, slow fade in and out."
status: REVIEW
gen_state: PLANNED
```

```yaml
record: music_cue
id: M03
start: "SC03-SH070 +0.0 s (70.0 s)"
end: "SC03-SH120 end (85.0 s), with a rest over SC03-SH100 (77.5 to 79.5 s)"
function: "Tenderness: Lan opens the tin and sits with the macaque. First full statement of T1"
description: "Plucked string plays T1 slowly, two falling notes, rest, the answer note; a soft low bowed pedal underneath; at SC03-SH090 the melody thins to the first two notes only. It stops completely for SC03-SH100's two knocks (the only bare stretch), then returns with the answer note in a warmer register while the macaque eats, and settles on an open fifth"
tempo_bpm: 66
key: "D dorian, answer ends on A (open fifth D-A)"
meter: "free time, felt in 4/4 (bar = 3.6 s)"
instrumentation: [plucked string, low bowed string, very soft hand drum on one beat only at the resolution]
dynamics: "p throughout, pp at the lid opening (SC03-SH070 +2.6 s), silent 77.5 to 79.5 s, p to mp at the answer note (SC03-SH110), decays to pp by 85.0 s"
hit_points:
  - "SC03-SH070 +2.6 s (72.6 s): the lid comes free, a held note rather than an accent"
  - "SC03-SH090 end (77.5 s): the phrase ends on the last fruit slice and the music is silent from here to 79.9 s"
  - "SC03-SH110 start (79.5 s): the cue resumes after the second knock's ring (0.4 s L-cut trails, so resume at 79.9 s)"
  - "SC03-SH120 end (85.0 s): the final decay ends as the scene changes"
in_out: "Fade-in over 1.0 s under the lid opening; drops out before the knock (decay of the last note ends at 77.5 s); returns at 79.9 s; fades out over 2.0 s ending 85.0 s"
leaves_room_for: "the lid pop, the saucer patter, the two knocks (bare), the chewing"
source_or_score: score
prompt: "UNUSED, no music tool. Slow, tender, instrumental, 66 BPM, D dorian: a plucked string plays a two-note falling figure then a rising answer, over a very soft low bowed drone, 15 seconds, pause in the middle for 2 seconds, gentle fade at the end, no vocals."
status: REVIEW
gen_state: PLANNED
```

```yaml
record: music_cue
id: M04
start: "SC04-SH040 +0.0 s (91.5 s)"
end: "SC04-SH050 end (96.0 s)"
function: "Close: the ritual is Lan's now and the macaque answers"
description: "The same plucked string plays the two falling notes of T1 once, then the answer note as the macaque sits, resolving to the open fifth on the bulb's click; the low note rings through the fade to black"
tempo_bpm: 60
key: "D dorian, ends on D-A open fifth"
meter: "free"
instrumentation: [plucked string, low bowed string]
dynamics: "p, then pp; the final note rings out into the 0.5 s of black"
hit_points:
  - "SC04-SH040 +0.0 s (91.5 s): first falling note, after the second knock's tail (0.2 s)"
  - "SC04-SH050 +0.6 s (94.6 s): the answer note lands with the switch click (SFX-SC04-005)"
  - "96.0 s: ring decays into black"
in_out: "Soft start after the knock; long ring into the black, no button"
leaves_room_for: "the macaque's landing (SFX-SC04-004), the switch click, the final ambience held into black"
source_or_score: score
prompt: "UNUSED, no music tool. Instrumental, 60 BPM, D dorian: a plucked string plays a two-note falling figure and a single rising answer note, with a low bowed drone, 4.5 seconds, the last note rings out and fades."
status: REVIEW
gen_state: PLANNED
```

## Songs
None. The story has no song and the screenplay has no lyrics. No vocal cue is planned.

## Stems for the mix
Plucked strings, bowed strings, percussion each as a separate stem; a single music stem is enough for the 96 s deliverable. Provide M01, M02, M03 and M04 as separate files with 1 s of handle where they fade, so the film-editor can lengthen or shorten a cue at a bar line. The sound-designer sets the level of music under effects (see sfx.md mix intent).

## Review log
| Cue | Version | Verdict | Notes |
|---|---|---|---|
| (no music exists) | | | Review checks on arrival: tempo and key as written, hits at the listed shot anchors, silent over the knocks and lines, no vocals, no artist imitation, rights recorded |

## Handoff
- Produced: music@1 (REVIEW), 4 cues, 0 songs, silence marked at SC01-SH010 to SH080, SC02-SH080 to SH100, SC03-SH060, SC03-SH100, SC04-SH010 to SH030
- Re-time after assembly: all cues (anchored to shot IDs); M01 hit points move -2.0 s from SC02-SH040 if CR-E01 is accepted
- Open items: no music source (tool, composer or licensed library) chosen; rights not yet recorded
- Conflicts: none. Refinements to the edit plan's proposals: M02 enters at 55.0 s (not 54.5 s) and the theme enters at 70.0 s after the whispered line, not under it (69.0 s)
- Next: sound-designer (mix), film-editor (assembly), vfx-supervisor
