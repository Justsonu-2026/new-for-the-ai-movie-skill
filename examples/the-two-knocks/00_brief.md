---
artifact: brief
id: brief
version: 1
status: APPROVED
owner: production-manager
depends_on: []
updated: 2026-10-19
---
# Brief: The Two Knocks

## Request
"A street-food vendor at a night market chases a monkey that stole her late grandmother's recipe tin, and discovers why it took it. About 90 seconds, 16:9, photoreal live action look. I'll use Veo 3.1 for video and a Gemini image model for stills. Gated mode."

## Specs
| Spec | Value | Source |
|---|---|---|
| Format | short film | ASSUMPTION |
| Target runtime | 90 s (acceptable range 81-99 s, ±10%) | user |
| Aspect ratio | 16:9 | user |
| Frame rate | 24 fps | ASSUMPTION (default) |
| Visual medium | photoreal live-action | user |
| Audience and rating | General audience, family-safe (no violence, no peril beyond a chase) | ASSUMPTION |
| Genre and tone | Warm magical-realist adventure / emotional discovery | ASSUMPTION (inferred from idea) |
| Dialogue language(s) | English, minimal dialogue (visual storytelling favored) | ASSUMPTION |
| Image tool(s) | Gemini 2.5 Flash Image | user |
| Video tool(s) | Veo 3.1 (clips of 4 / 6 / 8 s; native audio; image-to-video and first-last-frame supported) | user |
| Audio tool(s) | Veo 3.1 native audio for dialogue/SFX/ambience; no music tool, music added in post | user |
| Budget or credit limit | none yet; no paid generation until user gives a go-ahead and a budget | user |
| Deadline | none stated | ASSUMPTION |
| Run mode | gated | user |

## Production implications (from specs)
- 90 s at Veo clip lengths of 4-8 s means roughly 15-25 shots; keep shot count sized to that.
- A real monkey in photoreal: animal motion and a hand-held tin prop are the highest-risk elements for identity drift. Story should keep the monkey and tin visible in few simultaneous-interaction shots.
- Night market: dense background crowds and signage text are risky in AI video; favor shallow depth of field, few readable signs.

## Must keep
- Street-food vendor (a woman) at a night market
- A monkey steals her late grandmother's recipe tin
- She chases it
- She discovers why it took it (the reason is the story's reveal)

## Must avoid
- Real people, real brands, trademarked logos
- Animal harm or cruelty

## References supplied
None.

## Open questions
- OPEN-QUESTION: Budget/credit limit for image and video generation (needed before stage 11; none set, no spend).
- Resolved 2026-10-19: image model = Gemini 2.5 Flash Image; setting = Southeast Asian night market; no music tool (music in post).
