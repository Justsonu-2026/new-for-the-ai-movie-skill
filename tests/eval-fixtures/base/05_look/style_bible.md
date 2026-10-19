---
artifact: style-bible
id: style_bible
version: 1
status: APPROVED
owner: visual-style-designer
depends_on: [brief@1, story@1, screenplay@1]
updated: 2026-10-19
---
# Style Bible: The Two Knocks

## Look statement
Photoreal digital cinema with a gentle 35 mm film feel: practical lantern and string-light glow in a warm, lived-in Southeast Asian night market, soft-focus crowds, and shallow depth of field that keeps the eye on Lan, the tin and the macaque. The look moves from busy amber warmth (numb routine) through cooler, stripped-down alley light (revelation) back to a quiet, dimmed warmth (shared grief), so colour itself carries the story from sealed to open.

```yaml
record: style
id: STYLE
medium: "photoreal live-action digital cinema with 35 mm film emulation (fine grain, soft highlight halation)"
aspect_ratio: "16:9"
palette:
  - {role: dominant, name: "Night-market umber", hex: "#2A1D17"}
  - {role: secondary, name: "Lantern amber", hex: "#E0963A"}
  - {role: secondary, name: "Steam warm white", hex: "#F1E4CF"}
  - {role: accent, name: "Chili red lantern", hex: "#B8362B"}
  - {role: warmth-safety, name: "Honey tungsten", hex: "#F2B35E"}
  - {role: cool-contrast, name: "Alley teal shadow", hex: "#1F3B3F"}
  - {role: danger, name: "Boil-over steam grey-white", hex: "#C9C2B8"}
  - {role: reserved-anchor, name: "Lan apron indigo-grey", hex: "#4A5568", reserved_for: CH-LAN}
  - {role: reserved-anchor, name: "Macaque olive-brown fur", hex: "#7A6A4F", reserved_for: CH-MACAQUE}
  - {role: reserved-anchor, name: "Tin worn-brass spots", hex: "#C9A24B", reserved_for: PR-TIN}
contrast: "Medium-high: shadows deep but never crushed to pure black (keep detail near #14100E), highlights from practical bulbs allowed to bloom softly"
texture: "Fine 35 mm-style grain, light halation on lantern bulbs, natural skin and fur texture, damp surfaces with slight sheen, no over-sharpened or plasticky AI smoothing"
lighting_philosophy: "Motivated sources only: paper lanterns, bare string-light bulbs, stall burners and steam. Warm practicals dominate; the only cool note is ambient night sky and the alley's deep teal shadows. No invented fill lights, no neon colour washes."
lens_philosophy: "Spherical prime look, shallow to medium depth of field, soft-focus background crowds, gentle natural vignette, no anamorphic streak flares, bulb bokeh round and warm."
style_lock: >-
  Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.
avoid:
  - "Clean frame: blank or blurred signage and packaging, no legible text, logos, flags, or country-identifying symbols"
  - "Sparse, soft-focus background crowd of faceless passers-by, never sharp crowd faces"
  - "Warm motivated lantern light instead of neon colour washes or teal-and-orange blockbuster grading"
  - "Natural, unretouched skin and real animal fur instead of plastic, airbrushed or cartoon rendering"
  - "One monkey and one tin in frame, with a gentle non-aggressive animal"
  - "Realistic dry or damp market ground, no heavy rain, smoke or fog banks"
reference_images: []
```

## Palette notes
| Role | Name | Hex | Where | Owner |
|---|---|---|---|---|
| dominant | Night-market umber | #2A1D17 | Shadows, awnings, timber, ground | style |
| secondary | Lantern amber | #E0963A | Lantern glow, steam backlight | style |
| secondary | Steam warm white | #F1E4CF | Steam, bowls, highlights | style |
| accent | Chili red lantern | #B8362B | A few red lanterns as depth cues, never dominant | style |
| warmth-safety | Honey tungsten | #F2B35E | Stall counter, SC04 closing light, tin glow | style |
| cool-contrast | Alley teal shadow | #1F3B3F | SC03 shadows, night sky edge | style |
| danger | Boil-over steam grey-white | #C9C2B8 | SC01 boil-over and SC02 tension haze | style |
| reserved | Lan apron indigo-grey | #4A5568 | Lan's clothing must stay near this family so she separates from amber background | CH-LAN |
| reserved | Macaque olive-brown fur | #7A6A4F | Macaque fur | CH-MACAQUE |
| reserved | Tin worn-brass spots | #C9A24B | The two worn spots on the tin lid; the only bright brass in the film | PR-TIN |

Rule: no other costume or prop uses #C9A24B-like bright brass, so the two worn spots stay the visual rhyme between SC01, SC03 and SC04.

## Color script
| Scene | Beat | Dominant | Accent | Warm/cool | Saturation | Key | Change vs previous |
|---|---|---|---|---|---|---|---|
| SC01 stall | Numb routine -> routine broken | Lantern amber + umber | Chili red lanterns, steam white | Warm | Medium-high, busy | Medium key, warm practicals, bright steam | Opening reference |
| SC02 lanes | Pursuit -> doubt -> curiosity | Umber + amber streaks in motion, grey steam haze | Chili red flashes, quick cooler pockets | Warm, drifting neutral at the end | Medium, desaturating toward the end | Mixed, uneven, darker at the lane gaps; falls quiet at the stop | Wider, darker, motion-streaked; ends with cooler hush |
| SC03 alley | Closed -> open, understanding | Alley teal shadow with one honey-amber lantern pool | Tin brass spots, saucer cream | Cool surround, warm single pool | Low surround, medium in the lantern pool | Low key, single lantern, deep shadows with detail | Biggest shift: market noise and colour fall away to one warm pool in cool dark |
| SC04 closing | Grief sealed -> grief shared | Honey tungsten + umber | Open-tin brass, saucer cream | Warm, dimmed | Medium-low, gentle | Low-medium key, dimmed lanterns, last light off | Returns to SC01 warmth but quieter and emptier, mirror of SC01 |

## Texture, lens character, composition tendencies
- Texture: fine grain, soft halation on bulbs, damp market ground with slight sheen; fur and skin natural.
- Lens: spherical, natural softness, round bokeh, mild vignette; no flare streaks.
- Composition: Lan and the macaque always separated from the background by light or colour (apron indigo-grey vs amber; fur olive vs umber). Foreground lantern or steam elements may frame the subject but never block it. Prefer a few large readable shapes over cluttered detail.
- Motion feel (for Veo): natural handheld energy in SC01 and SC02, steadier and still in SC03 and SC04.

## Graphics, titles and subtitles
- No in-world readable signage: signs blurred, abstract shapes or unlettered; this also avoids naming a country.
- Title card: plain warm-white (#F1E4CF) lettering on umber (#2A1D17), simple serif or humanist face, added in post; no logo.
- Subtitles (if used): warm-white, lower third, no outline-glow effects.

## Grading intent per scene (for post)
| Scene | Intent |
|---|---|
| SC01 | Warm, slightly lifted blacks, amber highlights, steam bright but not clipped. |
| SC02 | Same warmth but slightly lower exposure and a little more contrast; let lane gaps fall off darker. Last shot cools slightly. |
| SC03 | Teal-leaning shadows, one honey pool at the lantern, skin and brass spots protected; lowest saturation outside the pool. |
| SC04 | Return to honey warmth at lower brightness; highlights soft; final frame falls to umber black. |

## Style frames
| ID | Scene | Moment | Status | Approved file |
|---|---|---|---|---|
| SF-01 | SC01 | Lan's two fingers on the tin lid at the shelf, photo beside it, steam behind | brief written; not generated | none |
| SF-02 | SC03 | Macaque taps the tin on the stool under the lone lantern; Lan at the edge of the light | brief written; not generated | none |
| SF-03 | SC04 | Open tin on the shelf, saucer face-up, macaque dropping from the wire | brief written; not generated | none |

```yaml
style_frame: SF-01
scene: SC01
moment: "Lan, passing the shelf without looking, touches the dented tin's worn lid spots with two fingers; framed photo of Ah Ma beside it"
content: "Lan (30s, indigo-grey apron, tired and quick), dented tin with two bright brass-worn spots, framed photo with blurred unreadable detail, chipped saucer; character and prop locks to be pasted verbatim once approved"
light: "warm amber string-light bulbs and steam backlight, honey tungsten on the counter"
palette: ["night-market umber #2A1D17", "lantern amber #E0963A", "steam warm white #F1E4CF", "chili red #B8362B"]
style: "<STYLE style_lock>"
aspect_ratio: "16:9"
```
```yaml
style_frame: SF-02
scene: SC03
moment: "Macaque lifts one palm to tap the tin on a low wooden stool under a single paper lantern; Lan stops at the edge of the light"
content: "Macaque (notched left ear), tin, chipped saucer on stool, Lan at the edge of frame; locks to be pasted verbatim once approved"
light: "single honey-amber paper lantern overhead as the only light, alley teal shadows"
palette: ["alley teal #1F3B3F", "honey tungsten #F2B35E", "brass #C9A24B", "umber #2A1D17"]
style: "<STYLE style_lock>"
aspect_ratio: "16:9"
```
```yaml
style_frame: SF-03
scene: SC04
moment: "Lan's hand lowering from knocking twice on the open tin; the macaque drops from the lantern wire toward the face-up saucer"
content: "Lan, open tin on the shelf, framed photo, face-up chipped saucer, macaque mid-drop (short); locks to be pasted verbatim once approved"
light: "dimmed warm lanterns, last bulb about to go off, honey tungsten on the shelf"
palette: ["honey tungsten #F2B35E", "umber #2A1D17", "brass #C9A24B", "steam white #F1E4CF"]
style: "<STYLE style_lock>"
aspect_ratio: "16:9"
```

## Checks
- Style lock: 62 words (limit 30-70).
- Aspect ratio 16:9 matches the brief; Veo 3.1 and Gemini 2.5 Flash Image both support 16:9.
- All 4 scenes in the scene index have a color-script row.
- Avoid list: 6 items.

## Handoff
- Produced: style_bible@1 / STYLE (status REVIEW)
- Built from: brief@1, story@1, screenplay@1
- Reserved anchors: CH-LAN apron indigo-grey #4A5568; CH-MACAQUE olive-brown fur #7A6A4F; PR-TIN worn brass #C9A24B
- Takes by department: character-designer / production-designer (palette anchors, rule that no other brass equals the tin spots); cinematographer (lighting philosophy, color script); prompt engineers (style_lock verbatim); film-editor (grading intent)
- Style frames: SF-01..SF-03 briefs written, not generated (no generation budget yet)
- Open items: OPEN-QUESTION: style frames cost generations; user to confirm whether to generate them after the budget is set. ASSUMPTION: "35 mm film emulation" (grain and halation) is the intended photoreal flavour; brief only says photoreal live action.
- Conflicts: none
- Next: character-designer and production-designer may proceed in parallel using this look; production-manager to present Gate 3 once all three are REVIEW
