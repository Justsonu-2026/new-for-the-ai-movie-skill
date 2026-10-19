# Principles and Timing

## Contents
1. The twelve principles (checklist)
2. Frames and frame rates
3. Timing chart format
4. Spacing and easing
5. Holds
6. Lip-sync
7. AI animation notes

## 1. The twelve principles (checklist)
From Frank Thomas and Ollie Johnston, *The Illusion of Life: Disney Animation* (1981):
1. **Squash and stretch** — volume stays constant while shape deforms; shows weight and flexibility.
2. **Anticipation** — a preparatory move opposite to the main action.
3. **Staging** — present the idea clearly.
4. **Straight ahead and pose to pose** — for AI keyframe workflows, pose to pose (keys first) is the default.
5. **Follow-through and overlapping action** — loose parts keep moving after the body stops; parts move at different rates.
6. **Slow in and slow out** — more frames near the keys, fewer in the middle.
7. **Arcs** — natural motion follows curved paths.
8. **Secondary action** — supporting actions that add life without stealing focus.
9. **Timing** — the number of frames gives weight, mood and personality.
10. **Exaggeration** — push the idea, within the style rules.
11. **Solid drawing** — volume and form in 3D space (on-model construction).
12. **Appeal** — a character the audience wants to watch.

## 2. Frames and frame rates
- Film standard 24 fps. 1 s = 24 frames.
- **On ones:** a new pose every frame (smooth). **On twos:** every 2 frames (12 per second; classic
  hand-drawn and many anime action scenes). **On threes / limited animation:** stylized, economical.
- Mixed: on twos for most motion, ones for fast camera moves or very fast action.

## 3. Timing chart format
```
SC02-SH030 (3.0 s = 72 f @ 24 fps), style: on twos
K1  f1   crouched behind AC unit, weight on left foot, eyes right (listening)
     hold (moving) f1-f16: breathing, eyes dart right at f10
K2  f17  anticipation: sinks lower, head dips, right hand presses the roof
B   f21  breakdown: push off, spine straightening
K3  f27  sprint start: body leaned forward 30°, left arm forward, right leg extended back
     f27-f72: run cycle, 8-frame stride on twos, exits frame left at f70
settle: hood flaps continue 4 f after each footfall (follow-through)
```

## 4. Spacing and easing
Spacing is how far the drawing/pose moves between frames. Close spacing = slow; wide spacing = fast. Ease
in and out of keys unless the action is mechanical or a hit (impacts start fast, no ease).

## 5. Holds
A **dead hold** (frozen) reads as a stopped image; use rarely. A **moving hold** keeps a little life:
breathing, a slight drift, blinking. Hold long enough for the audience to read a key pose (often 8-12 frames
minimum for an important pose).

## 6. Lip-sync
- Mark accented syllables and the mouth shape at each.
- Closed shapes (M, B, P) and wide vowels (A, O) matter most; small sounds can be skipped in stylized work.
- Head and body accents on stressed words make dialogue feel spoken, not just mouthed.
- Mouth shapes may lead the sound by a frame or two to read in sync; confirm in the edit.

## 7. AI animation notes
Video models interpolate the in-betweens themselves; your controls are the start and end keyframes, the
text description of the motion, and sometimes motion references. Practical consequences:
- Define the **end pose** precisely (it is the end_frame for first-last-frame mode).
- Keep each generated clip to one key change (K1 → K2) or one cycle; chain clips at holds.
- Strong squash and stretch and extreme poses can break identity in generation; push exaggeration through
  timing and posing more than deformation unless the style is very cartoony.
- Frame-rate feel (on twos) may not be directly controllable; it can be approximated in post by
  frame-holding; note the intent for the film-editor.
