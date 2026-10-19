# Image Prompting

## Contents
1. Prompt structure
2. Recipes per image type
3. Reference images and roles
4. Edit prompts
5. Failure → fix table
6. Worked example

## 1. Prompt structure
Natural sentences in this order (each part from its owner document):
1. **Image type and framing:** "Cinematic still, medium close-up from a high angle, 50 mm lens, shallow
   depth of field" / "Character turnaround sheet, five full-body views".
2. **Subject:** identity lock verbatim, costume lock verbatim, current state (wet, torn), pose, expression
   in visible terms, position in frame.
3. **Props:** lock verbatim, state, where they are.
4. **Setting:** location lock verbatim, area, foreground/midground/background.
5. **Light:** sources, directions, quality, colors; time of day; weather.
6. **Palette anchors:** 3-5 named colors.
7. **Style lock** verbatim.
8. **Parameters** in the tool's syntax (aspect ratio, number of images, seed, reference flags).

Write descriptive sentences, not tag lists. Keep camera-motion words out of stills.

## 2. Recipes per image type
**Character turnaround:** "Character turnaround sheet of one character, five full-body views arranged left
to right: front, three-quarter front, side profile, three-quarter back, back. Same scale and ground line in
every view, head to toe visible. [character lock] [costume lock]. Relaxed neutral stance, arms slightly
away from the body, neutral expression, mouth closed. Plain light-grey background, flat even studio
lighting, no shadows. [style lock]." Aspect 16:9 or wider.

**Expression sheet:** "Expression sheet, a 3x2 grid of head-and-shoulders portraits of the same character,
identical three-quarter angle and lighting in every cell: [list each expression with its visible form].
[character lock]. Plain light-grey background. [style lock]."

**Costume sheet:** front and back full body in the look + close-up callouts of closures/material/damage.

**Prop sheet:** "Product-style reference sheet of a single object on a plain light-grey background, flat
light: front, back and side views, [prop lock], [state description]."

**Location plate:** "Empty [location lock], seen from [camera position on plan], camera height [m],
[lens feel], [time of day], [weather], [light sources], no people. [style lock]."

**Style frame:** from the style-frame brief, like a keyframe.

**Keyframe:** the shot record's `start_frame` or `end_frame` text, which already follows section 1 order;
add parameters and references.

**Storyboard panel:** "Rough greyscale storyboard sketch, pencil lines and simple tones, [aspect] frame:
[panel composition]." (Locks only for clean boards.)

## 3. Reference images and roles
Name each reference and what it controls; the model otherwise guesses which features to copy:
- identity (face, hair, body) · costume · prop appearance · location/layout · style/look · pose · composition.
Rules: one role per reference where possible; front-view references for faces (profile views break more
often); do not give two references that conflict (two different faces for one character). Use only as many
references as the tool allows; prioritize identity > location > style.

## 4. Edit prompts
Edit = change one thing, protect the rest:
"Keep everything in the image exactly the same — the person's face, hair, clothing, pose, the background,
the lighting and the framing. Change only: [the one fix]."
One fix per pass for anything identity-related. Re-run QC after each edit.

## 5. Failure → fix table
| Failure | First fix | Second fix |
|---|---|---|
| Face differs from sheet | add/strengthen identity reference; lock verbatim | edit with "keep pose, change face to match reference" |
| Mirror-flip of a mark/accessory | edit prompt naming the side ("on her LEFT eyebrow, viewer's right") | regenerate with the turnaround front view as reference |
| Costume detail drift | costume reference + lock verbatim | edit only the detail |
| Wrong composition | put framing and positions first in the prompt; simplify background | use the storyboard panel as composition reference |
| Extra people/objects | describe the space as empty except named subjects | tool's negative field (if any) for "extra people" |
| Garbled text | remove text from the prompt | add in post (VFX) |
| Hands malformed | change pose so hands are simpler/partly hidden | edit the hands only |
| Style drift | style lock verbatim + approved style frame as reference | reduce competing style words |

## 6. Worked example
Shot record SC03-SH020 `start_frame` (abridged) → prompt record:
```yaml
record: image_prompt
id: IMG-SC03-SH020-START-01
target: "SC03-SH020 start_frame"
model: "model-neutral (tool not confirmed)"
prompt: >-
  Cinematic still, medium close-up from a high angle, 50 mm lens, camera looking down from 1.9 m, shallow
  depth of field. <CH-MAYA identity_lock verbatim> <CO-MAYA-01 identity_lock verbatim>, hood down, jacket
  soaked dark at the shoulders, a fresh scrape on her left knuckles. She stands on the left third of the
  frame, three-quarter toward frame right, head bowed, holding <PR-PARCEL identity_lock verbatim> face down
  at chest height, the brown paper wet and dark. <LOC-STAIRWELL identity_lock verbatim>: rusted railing
  soft in the lower-left foreground, cracked window behind her with a blurred pink neon sign outside. Hard
  pink neon light from the window at frame right, cool blue rim light from a caged bulb at frame left, deep
  shadows, rain streaks on the glass. Palette: magenta, cold blue, wet black. <STYLE style_lock verbatim>
references:
  - {file: assets/characters/CH-MAYA_turnaround_v2.png, role: "face, hair and body of the girl"}
  - {file: assets/characters/CO-MAYA-01_costume_v1.png, role: "raincoat and bag"}
  - {file: assets/world/LOC-STAIRWELL_plate_night_v1.png, role: "stairwell layout, window and railing"}
parameters: {aspect_ratio: "2.39:1", images: 4}
must_match: ["scar LEFT eyebrow", "hoop RIGHT ear", "bag LEFT hip", "parcel label face down", "neon from frame right"]
output: assets/keyframes/SC03-SH020_start_v1.png
status: READY
```
(In a real record, the `<...>` placeholders are replaced by the full lock text.)
