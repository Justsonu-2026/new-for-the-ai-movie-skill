# Video Prompting

## Contents
1. The motion budget
2. Writing action as timed beats
3. Prompt shapes per mode
4. Dialogue and audio
5. Chaining, extending, multi-shot
6. Failure → fix table
7. Worked example (three models)

## 1. The motion budget
Per generated clip: **1 primary subject action** (with an end state) + **≤ 1 camera move** (a focus pull may
accompany it) + **≤ 1 environmental motion** (rain, smoke, crowd drift). This follows the official guides:
Sora 2 — "Each shot should have one clear camera move and one clear subject action"; Veo 3.1's examples use
one camera behavior per shot. A static camera is often the best choice for performance shots.

## 2. Writing action as timed beats
Write counts and seconds, not vague verbs (Sora 2: "takes four steps to the window, pauses, and pulls the
curtain in the final second"):
- 0-1.5 s: turns the parcel over with both hands.
- 1.5-2.5 s: thumb wipes the label.
- 2.5-4 s: lifts her eyes to the window and holds.
End states are mandatory ("…and holds", "…stops at the railing"). Without one, models drift or loop.
Write behavior, not emotion: "eyes widen, lips part" — not "she is shocked".

## 3. Prompt shapes per mode
**Image-to-video (start frame supplied):** camera behavior → action beats → end state → environment motion →
audio. Don't re-describe the image; describing it again can fight the input. Example: "The camera remains
still. She turns the parcel over with both hands, wipes the label with her thumb, then lifts her eyes to
the window and holds. Rain streaks run down the glass behind her."

**First-last-frame:** describe the transition between the two frames: the camera path and the subject's
change, with timing, plus audio (Veo 3.1 workflow: "Describe the transition and audio").

**Reference-to-video (ingredients/elements):** name the references by role and compose the full shot:
"Using the provided images for the girl, her raincoat and the stairwell, create a medium close-up from a
high angle: …" (pattern from Veo 3.1's ingredients example).

**Text-to-video:** full description in the order camera → subject (locks verbatim) → action → setting →
light → palette → style lock → audio. Best for establishing shots without recurring identity.

**Extend:** describe only what happens next, continuing motion and light from the end of the clip.

## 4. Dialogue and audio
- Use the screenplay line exactly. Keep lines short enough for the clip (Sora 2: a 4 s shot holds one or
  two short exchanges).
- Veo 3.1 syntax: `The girl says quietly, "That's my street."` · `SFX: paper crinkles` · `Ambient noise:
  steady rain on glass`.
- Sora 2: dialogue in a block below the prose with consistent speaker labels; background sound as a line.
- Other tools: follow the adapter file; if unconfirmed, generate silent video and add audio in post.
- State "no music" or "diegetic sound only" when the score is added in post.

## 5. Chaining, extending, multi-shot
- **Chaining:** use the approved last frame of take N as the start frame of the next shot when action is
  continuous; each hop risks drift — QC each hop against the character sheet, not against the previous frame.
- **Extending:** for one continuous take longer than the tool's clip length (Sora 2 extensions use the whole
  clip as context; check other tools).
- **Multi-shot in one generation** (Veo timestamp prompting, other tools' shot labels): only when the tool
  supports it and the director's shots are preserved one-to-one; write each block with its own camera,
  action, light and timing.

## 6. Failure → fix table
| Failure | Fix (one at a time) |
|---|---|
| Slideshow / almost no motion | name the action with stronger verbs and timing; add a gentle camera move |
| Too much motion / chaos | lock the camera; remove environmental motion; slow the beat |
| Identity morphs mid-clip | shorter clip; less head turning; start frame closer to the face; first-last-frame |
| Action incomplete | shorten the action; state the end state earlier and explicitly |
| Unwanted camera move | "The camera remains still, locked off" (positive phrasing) |
| Extra people appear | describe the space as empty except the named subjects |
| Hands/props glitch | simplify the grip; keep the prop large; shorter action |
| Wrong speaker lip-syncs | one speaker per clip; name the speaker and their position |
| Speed wrong | give seconds per beat; "in slow motion" / "at a natural pace" |

## 7. Worked example (three models)
Shot SC03-SH020, 4 s in the cut, start keyframe approved, static camera, rack focus at 2.5 s, line at 3.0 s.

**Model-neutral (image-to-video):**
> The camera remains still. 0-1.5 s: she turns the parcel over with both hands so the label faces up.
> 1.5-2.5 s: her right thumb wipes rain from the label. 2.5-4 s: focus shifts from the label to her eyes as
> she lifts them toward the window and holds. Rain streaks run down the window glass behind her. At about
> 3 s she says quietly, "That's my street." Diegetic sound only: rain on glass, paper crinkle. No music.

**Veo 3.1 (image-to-video, 6 s clip, keep 0.5-4.5 s):**
> The camera stays locked off. She turns the parcel over with both hands, wipes the rain from the label with
> her thumb, then the focus shifts from the label to her eyes as she looks up toward the window and holds.
> Rain runs down the glass behind her. She says quietly, "That's my street." SFX: wet paper crinkles under
> her thumb. Ambient noise: steady rain on glass, distant traffic.

**Sora 2 (input_reference = start keyframe, seconds "8", trim to 4 s):**
> Same shot continues from the reference image; the camera does not move.
> Cinematography: medium close-up, high angle, locked-off; shallow depth of field, focus racks from the
> label to her eyes at 2.5 s.
> Actions:
> - She turns the parcel over with both hands.
> - Her thumb wipes rain off the label.
> - She lifts her eyes to the window and holds.
> Dialogue:
> - Girl (barely audible): "That's my street."
> Background Sound: steady rain on glass, wet paper crinkle. No music.
