# Model Sheets

Specifications for the reference sheets that become canon for every downstream image and video.
Conventions follow animation model-sheet practice (turnaround, expression and pose sheets; "on-model" vs
"off-model") adapted for AI generation.

## Contents
1. Sheet set per character
2. Turnaround sheet
3. Expression sheet
4. Pose sheet
5. Costume sheet
6. Lineup sheet
7. Sheet brief format
8. Drift checklist for generated sheets

## 1. Sheet set per character
| Sheet | Required when |
|---|---|
| Turnaround | always, for every character with screen time |
| Expression | character's face is seen at MCU or closer |
| Pose | character has signature physical actions |
| Costume | one per costume look (can be a turnaround in that look) |
| Hands | hands do story work (gestures, holding key props) |
| Lineup | 2+ characters |

## 2. Turnaround sheet
- Views, left to right: **front, three-quarter front, side (profile), three-quarter back, back**. Five views;
  a minimal set is front, side, back.
- Same scale and same ground line for every view; full body head to toe; feet visible.
- Neutral relaxed stance (or A-pose for 3D rigging), arms slightly away from the body so the costume reads.
- Neutral expression, mouth closed.
- Plain light-grey or white background, flat even studio lighting, no cast shadows on the background.
- No props in the hands (props get their own sheet); bags and worn accessories stay on.
- Optional: horizontal height lines across the sheet at head top, chin, shoulders, waist, knees for checking.

## 3. Expression sheet
- Head and shoulders, same angle (usually three-quarter front) and lighting in every cell.
- Grid of 6-12 cells, each labeled with the emotion **and its visible form** ("fear: eyes wide, brows up and
  pinched, mouth slightly open").
- Choose expressions from the character's actual beats in the script; always include neutral.

## 4. Pose sheet
- 3-6 full-body poses taken from actions in the script (e.g. "vaulting a railing", "hiding a parcel behind
  her back"); each labeled with the scene that needs it.
- Poses show the character's posture habit and readable silhouette.

## 5. Costume sheet
- Front and back views in the look, plus detail callouts: closures, material close-ups, damage locations.
- Condition states side by side when they matter (dry vs soaked).

## 6. Lineup sheet
- All characters side by side, front view, same scale, on one ground line, heights marked in cm.
- Used to check relative heights, silhouettes and color anchors.

## 7. Sheet brief format
A model-neutral brief the image-prompt-engineer turns into a tool-specific prompt:

```yaml
sheet: turnaround
character: CH-MAYA
costume: CO-MAYA-01
layout: "five full-body views left to right: front, three-quarter front, side, three-quarter back, back"
content: "<character lock verbatim> <costume lock verbatim>"
pose: "relaxed neutral stance, arms slightly away from body, neutral expression, mouth closed"
background: "plain light grey, no shadows"
lighting: "flat even studio light"
style: "<style lock verbatim>"
aspect_ratio: "16:9"
must_match: ["scar through LEFT eyebrow", "hoop in RIGHT ear only", "reflective strip across back"]
```

## 8. Drift checklist for generated sheets
Compare each generated image to the record, item by item:
- [ ] Face shape, eye shape and color, brows, nose, mouth match; age reads correctly
- [ ] Skin tone matches (compare against hex under neutral light)
- [ ] Hair cut, length, parting side, color match; same in every view
- [ ] Distinguishing marks present and on the **correct side** in every view
- [ ] Height/proportions consistent across views (check head-heights against the height lines)
- [ ] Costume: every layer, color, material, closure, accessory present and on the correct side
- [ ] Back view shows back details (strips, prints, hood)
- [ ] No extra items (rings, logos, text, belts) that are not in the record
- [ ] Hands: correct finger count, no fused fingers
- [ ] Background and lighting plain as specified (busy backgrounds contaminate later references)
Verdict: APPROVE when every item passes; FIX when one or two items fail (give one edit instruction per item);
REDO when the face or proportions are wrong.
