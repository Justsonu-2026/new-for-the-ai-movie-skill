# Storyboard Conventions

## Contents
1. What a panel contains
2. Numbering
3. Arrow notation
4. When to add panels
5. Composition description
6. Levels of finish
7. Sheet layout
8. Example panels

## 1. What a panel contains
Each panel represents one shot (or one moment of a shot) and shows what the camera sees, with notes
beside or below it: shot number, size/angle, camera movement, action, dialogue, sound, duration,
transition. Shot numbers must match the shot list.

## 2. Numbering
Scene first, then shot, then panel: `SB-SC03-SH020-P1`. Displayed as "SC03 / SH020 / P1". When the shot
list inserts SH025, its panels are `SB-SC03-SH025-P1`.

## 3. Arrow notation
| Mark | Meaning |
|---|---|
| Thick arrow at the frame edge, labeled | camera movement (PAN L/R, TILT U/D, TRUCK L/R, PUSH IN, PULL OUT, CRANE UP/DOWN) |
| Inner frame drawn inside the panel + arrows from corners | push-in/zoom: inner frame = end framing |
| Thin arrow inside the frame | subject or object movement, start → end position |
| Dotted line | camera path for complex moves (arc, crane) |
| Dashed box | the end framing of a move |
| Lightning/zig-zag | impact or shake |
| "SFX:" note | sync sound |
For text-only boards, write the arrows in words in `camera_notes`: "PUSH IN → end frame MCU (dashed box)".

## 4. When to add panels
- Camera moves: start and end panels (more for complex paths).
- Reveals: before and after.
- Actions: key pose of the action and its end state.
- Dialogue shots: one panel unless the framing changes.
- Cut-on-action pairs: the last panel of the outgoing shot and first of the incoming show matching phases.

## 5. Composition description
Use the thirds grid and layers so a panel can be drawn or generated without guessing:
- "Frame 2.39:1. Maya MCU on the left vertical third, three-quarter to frame right, eyes on the upper third
  line, looking down at the parcel held at chest height centered low. Foreground: soft railing lower left.
  Background: cracked window upper right with blurred pink neon. Shadow side: her left (frame left)."
Include headroom and looking room choices when they carry meaning.

## 6. Levels of finish
- **Thumbnails:** tiny, for the director's planning; shapes and arrows.
- **Rough boards (default):** greyscale sketches, silhouettes, clear staging; for internal production.
- **Clean/presentation boards:** closer to final look (style-consistent, identity locks), for client or
  stakeholder sign-off.
- **Animatic:** boards timed to durations with temp sound (the film-editor can assemble one from panels).

## 7. Sheet layout
- 3 panels per row (2 for 2.39:1 wide frames if detail matters), panel frame at the film's aspect ratio.
- Caption under each panel: ID, size/angle, movement, duration; then action, dialogue, SFX, transition.
- Group by scene with the scene heading as a section title.
- Print-friendly: white background, black frame lines, page breaks between scenes.

## 8. Example panels
```yaml
record: panel
id: SB-SC03-SH050-P1
shot: SC03-SH050
frame_moment: start
description: "CU Maya, still, eyes fixed on the label below frame; door edge soft at frame right"
composition: "Maya centered, eyes on upper third line; door frame soft vertical at right edge; dark background"
camera_notes: "PUSH IN (slow) → see P2 end frame"
duration_s: 4
dialogue: "MR. ADEBAYO (O.S.): You want to come in out of the wet?"
sound: "rain on skylight"
transition_out: "—"
sketch_prompt: "rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: close-up of a teenage girl with short cropped curls, centered, eyes looking down out of frame, a soft vertical door edge at frame right, dark background"
image: ""
```
```yaml
record: panel
id: SB-SC03-SH050-P2
shot: SC03-SH050
frame_moment: end
description: "Tighter CU, Maya's eyes lift to frame left; she begins to turn toward the stairs"
composition: "eyes on upper third, face fills frame, head turning frame left"
camera_notes: "end of PUSH IN; cut on the turn"
duration_s: 4
dialogue: ""
sound: "rain"
transition_out: "cut on action to SC03-SH060"
sketch_prompt: "rough greyscale storyboard sketch, pencil lines, 16:9 frame: tight close-up of the same girl, eyes lifting toward frame left, head beginning to turn left"
image: ""
```
