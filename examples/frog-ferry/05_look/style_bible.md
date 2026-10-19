---
artifact: style-bible
id: style_bible
version: 1
status: APPROVED
owner: visual-style-designer
depends_on: [brief@2, screenplay@1]
updated: 2026-10-19
---
# Style Bible: Frog Ferry

## Look statement
A hand-painted 2D cel look: clean outlines, flat fills with one hard shadow tone, and soft watercolor-wash backgrounds on a gentle rainy-day palette of grey-blue with bright yellow, coral and leaf green accents. Flat shapes and a small palette hold up best in AI image and video generation, and a bright rainy day keeps the comedy cozy for ages 3-7.

```yaml
record: style
id: STYLE
medium: "hand-painted 2D cel animation, outlined characters over watercolor-wash backgrounds"
aspect_ratio: "16:9"
palette:
  - {role: dominant, name: "puddle grey-blue", hex: "#9DB8C9"}
  - {role: secondary, name: "wet slate", hex: "#6E8797"}
  - {role: accent, name: "leaf green", hex: "#7DBB5A"}
  - {role: danger, name: "storm slate shadow", hex: "#4B5D6B"}
  - {role: reserved-anchor, name: "paper yellow", hex: "#FFC93C", reserved_for: CH-PIP}
  - {role: reserved-anchor, name: "shell coral", hex: "#F2866B", reserved_for: CH-MO}
  - {role: reserved-anchor, name: "raindrop aqua", hex: "#5FD0E8", reserved_for: CH-DROP}
  - {role: ink, name: "outline dark teal", hex: "#1F3A48"}
  - {role: highlight, name: "fluff white", hex: "#FDFCF7"}
  - {role: earth, name: "soil brown", hex: "#6B4A3A"}
contrast: "gentle; mid-value backgrounds, characters one step brighter than the background so they pop"
texture: "flat cel fills, uniform 3 px dark-teal outline weight, faint paper grain, soft watercolor edges on backgrounds, no gradients on characters"
lighting_philosophy: "even soft overcast daylight; one hard-edged cel shadow tone under objects; brightness opens up as the story resolves; no hard directional sun until SC05"
lens_philosophy: "flat 2D staging, as if shot on a multiplane camera; no lens distortion; shallow focus is a soft background wash, not optical blur"
style_lock: >-
  Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.
avoid:
  - "clean frame without text, logos or watermarks"
  - "flat 2D shading instead of 3D rendering, glossy plastic or photoreal textures"
  - "only the named characters in frame, with no extra frogs, snails or creatures"
  - "sparse light rain with a few small drops, the one hero raindrop clearly larger and brighter than any other"
  - "soft friendly shapes without sharp teeth, scary faces or dark shadows"
  - "uniform line weight without sketchy or varying strokes"
reference_images: []
```

## Color script
| Scene | Beat | Dominant | Accent | Warm/cool | Saturation | Key | Change vs previous |
|---|---|---|---|---|---|---|---|
| SC01 | hopeful start | puddle grey-blue #9DB8C9 | paper yellow, shell coral | cool with warm accents | medium | medium-soft | baseline |
| SC02 | first splash gag | grey-blue, a little brighter | paper yellow, raindrop aqua | cool | medium | medium | drop aqua enters |
| SC03 | worry | wet slate #6E8797 | paper yellow | coolest | lower | slightly darker | cloud shadow moves in, darker slate |
| SC04 | clever answer | grey-blue, a patch of lighter sky | fluff white, paper yellow | cool, with white pop | high on the fluff | brightest so far | fluff white hero pop |
| SC05 | delivered, warm | leaf green and soil brown | shell coral, paper yellow, sprout green | warmest | highest | bright, soft pale sun glow | clouds thin, warm bounce light |

## Texture, lens character, composition tendencies
Flat cel fills, steady line weight, faint paper grain, background washes soft and quiet. Flat side-on staging with simple foreground, midground and background layers. Characters occupy clear shapes against calm backgrounds with plenty of negative space.

## Graphics, titles and subtitles
No on-screen text in the film. A simple end card is out of scope for this 40 s piece.

## Grading intent per scene (for post)
| Scene | Intent |
|---|---|
| SC01 | soft cool grey, warm yellow stays pure |
| SC02 | same, aqua drop slightly lifted |
| SC03 | gently cooler and darker, saturation down 10% |
| SC04 | lift highlights so the white fluff glows |
| SC05 | warm up whites, saturation up |

## Style frames
| ID | Scene | Moment | Status | Approved file |
|---|---|---|---|---|
| SF-01 | SC01 | Pip at the near shore with the seed, puddle and far shore behind | brief written, not generated (no budget) | none |
| SF-02 | SC05 | Pip and Mo with the sprout, warm light | brief written, not generated (no budget) | none |

## Handoff
- Produced: style_bible@1 / STYLE (REVIEW)
- Reserved anchors: CH-PIP #FFC93C, CH-MO #F2866B, CH-DROP #5FD0E8
- Open items: ASSUMPTION: style frames not generated (no generation budget); the Midjourney V7 look test is deferred to the user
- Next: character-designer, production-designer (palette), cinematographer (lighting philosophy)
