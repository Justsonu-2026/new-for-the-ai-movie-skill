---
artifact: character-bible
id: CH-LAN
version: 1
status: APPROVED
owner: character-designer
depends_on: [screenplay@1, style_bible@1, story@1]
updated: 2026-10-19
---
# CH-LAN — Lan

## Evidence from the script
| Scene | What they do | Costume/state needs |
|---|---|---|
| SC01 | Ladles noodles at the stall, touches tin lid with two fingers without looking, turns saucer face-down, speaks "Almost closing.", turns and shouts "Hey!", drops the ladle and runs | Apron with broth stains; sleeves must stay out of the pot and allow reach to the shelf; shoes that run |
| SC02 | Skids around a table, vaults two crate stacks, scrapes forearm on a crate edge, squeezes sideways through a stall gap, stops breathing hard with hand on scraped arm | Graze appears mid-scene; apron and clothes must survive sideways squeeze and vaulting; hair may loosen |
| SC03 | Walks to alley edge, hand reaches then stops short, speaks "Ah Ma." barely audible, crouches, lifts and opens the tin with both thumbs, shakes fruit, knocks twice with knuckles, sits on cold ground | Graze visible on right forearm (the knocking hand); crouch and sit-on-ground friendly clothing |
| SC04 | Sets tin on shelf, turns saucer face-up, knocks twice, turns off the last light | Same graze, dusty apron, loosened strand of hair |

## Design rationale
- Role and personality: tired, quick, practical noodle vendor in her 30s who works on habit to avoid feeling. Everything about her is functional and unadorned.
- Shape language: soft rounded shapes and a slightly forward, hurried posture; the apron gives a clear trapezoid torso shape that reads fast in a crowd.
- Silhouette: slim figure, apron with a bib and waist ties, low knot of hair at the nape, rolled sleeves. Reads as a compact "A" shape in solid black, distinct from the macaque's low, horizontal shape.
- Color anchor (hex): apron indigo-grey #4A5568 (reserved by style_bible@1). It separates her from the amber and umber market background.
- Proportions: about 7 heads tall, 160 cm. Slightly small beside market props so the stall, shelf and tin read as hers.
- Respectful note: no country-specific garment, headwear or pattern; clothing is the plain working wear common across the region (cotton, apron, loose trousers).

```yaml
record: character
id: CH-LAN
name: "Lan"
role: "protagonist; noodle-stall vendor"
age: "early 30s"
height_cm: 160
build: "slim, wiry from daily work, narrow shoulders, short forearms with capable hands"
identity_lock: >-
  Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup.
face: "oval face, soft cheekbones, narrow chin; dark brown almond eyes with slight under-eye shadow; straight thick brows; small straight nose; full relaxed mouth that rests slightly downturned"
hair: "straight black hair (#1B1614), shoulder length, worn in a low knot at the nape with a plain dark elastic; two short strands always frame the face; loosens by SC02 end"
skin: "warm medium tan (#B98862), natural texture with faint sweat sheen near the stove, no makeup"
eyes: "dark brown (#3A2A22), almond-shaped, slightly tired lids"
silhouette: "compact A-shape: bib apron with waist ties, rolled sleeves, small knot at nape, forward-leaning hurried stance"
distinguishing_features:
  - "A small old burn mark on the back of her LEFT hand (cooking scar), subtle"
  - "From SC02 onward: a red surface graze on the outer RIGHT forearm, about 12 cm long, no blood drips"
default_costume: CO-LAN-01
costumes: [CO-LAN-01]
expression_range: [numb-neutral, irritated, startled-shout, determined-breathless, searching-doubt, stunned-recognition, tender-almost-smile]
invariants:
  - "Low knot of black hair at the nape"
  - "Indigo-grey apron over off-white shirt with sleeves rolled to the elbow"
  - "Right forearm graze after the crate vault in SC02, never before, never on the left arm"
  - "No jewelry, no glasses, no makeup"
allowed_variation:
  - "Two to three loose hair strands from SC02 onward"
  - "Sweat sheen and flushed cheeks after the chase"
  - "Dust on apron and knees in SC03-SC04"
reference_images: []
```

```yaml
record: costume
id: CO-LAN-01
character: CH-LAN
name: "Stall working clothes"
garments:
  - "Cotton bib apron, indigo-grey, waist ties knotted at the back, a single front pocket"
  - "Collarless long-sleeve shirt, off-white, sleeves rolled to just below the elbows"
  - "Loose straight trousers, charcoal"
  - "Dark canvas slip-on shoes, flat rubber sole"
materials: ["washed cotton apron", "soft cotton shirt", "cotton-blend trousers", "canvas and rubber"]
colors:
  - "apron indigo-grey #4A5568"
  - "shirt off-white #D8CDB9"
  - "trousers charcoal #2E2B2A"
  - "shoes dark #1F1D1C"
accessories: ["plain dark hair elastic", "a folded cloth tucked in apron tie"]
condition_states:
  - {id: BASE, description: "Clean cotton with a few small broth stains on the apron front, hair neat", from: SC01}
  - {id: GRAZED, description: "Red graze on the outer right forearm, two loose hair strands, light dust on apron hem and trouser knees, flushed face", from: SC02}
scenes: [SC01, SC02, SC03, SC04]
identity_lock: >-
  Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment.
```

## Sheets
| Sheet | Status | Notes |
|---|---|---|
| Turnaround | spec written, not generated | 5 views, neutral stance, BASE state; arms slightly away from the body to show the apron and sleeves |
| Expression | spec written, not generated | 7 expressions above, head and shoulders, same lighting |
| Pose | spec written, not generated | Passing the shelf with two fingers out; mid-run; crouched with tin; sitting on the ground |
| Costume | spec written, not generated | BASE and GRAZED states, graze close-up on the RIGHT outer forearm |

```yaml
sheet_brief: LAN-TURNAROUND
type: turnaround
subject: CH-LAN, CO-LAN-01 state BASE
layout: "5 full-body views left to right (front, three-quarter front, side, three-quarter back, back) on plain neutral grey, equal scale, feet aligned, even soft light"
content: "<CH-LAN identity_lock> <CO-LAN-01 identity_lock>"
notes: "Same face in every view. Keep hair knot visible in side and back views."
```
```yaml
sheet_brief: LAN-EXPRESSIONS
type: expression
subject: CH-LAN
layout: "7 head-and-shoulder panels: numb-neutral, irritated (looking at saucer), startled shout, determined breathless, searching doubt, stunned recognition, tender almost-smile; plain grey background"
content: "<CH-LAN identity_lock>"
```
```yaml
sheet_brief: LAN-POSES
type: pose
subject: CH-LAN
layout: "4 poses: passing a shelf with two fingers outstretched without looking; mid-run with a ladle dropped; crouched holding a small round tin in both hands; sitting on the ground with the open tin in her lap. Add a GRAZED forearm close-up (right outer arm)"
content: "<CH-LAN identity_lock> <CO-LAN-01 identity_lock>"
```

## Reference image review log
| Image | Verdict | Notes |
|---|---|---|

Reference-image checklist (to run when sheets exist): knot of hair at the nape in all views; apron stays indigo-grey with no print or logo; sleeves rolled the same height; graze on the RIGHT forearm only after SC02; no jewelry; hands have five fingers; no text on clothing.

## Handoff
- Produced: CH-LAN@1, CO-LAN-01@1 (status REVIEW)
- Built from: screenplay@1 LOCKED, story@1, style_bible@1 (REVIEW)
- Open items: OPEN-QUESTION: user to confirm the graze is on Lan's RIGHT forearm (chosen so it shows on her knocking hand). ASSUMPTION: age early 30s ("30s" in the script). ASSUMPTION: skin and features follow a general Southeast Asian presentation with no specific country.
- Conflicts: none
- Next: script-supervisor (states BASE -> GRAZED at SC02 crate vault), voice-director (Lan: low, quiet, brisk), cinematographer and director (160 cm, right-forearm graze)
