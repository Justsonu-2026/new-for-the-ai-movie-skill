---
artifact: image-prompts
id: images
version: 1
status: REVIEW
owner: image-prompt-engineer
depends_on: [style_bible@1, CH-LAN@1, CH-MACAQUE@1, CH-AHMA@1, props@1, LOC-NIGHT-MARKET@1, SC01_shots@4, vfx_plan@1]
updated: 2026-10-19
---
# Image Prompts: The Two Knocks

No image has been generated and no credits spent (no budget). Every prompt below is READY to paste once the user sets a budget. Scope: style frames, the reference sheets and plate that SC01 needs, and the ten SC01 start keyframes plus the two end keyframes for the first-last-frame shots. Everything else is listed under "Later" at the end.

## Tool profile
```yaml
model_profile:
  name: "Gemini 2.5 Flash Image"
  modes: [text-to-image, image-plus-text (reference images), conversational edit]
  max_reference_images: 3
  aspect_ratios: ["16:9"]
  negative_prompt_field: false
  verified_on: "not verified"
  verified_by: "NOT VERIFIED: the user named the model; the reference limit and prompt length limit are an ASSUMPTION (3 references, long prompts accepted). The Veo 3.1 guide uses this model for first/last frames [ai-model-adapters, OFFICIAL]. Check the UI before the first run."
```
- Reference limit: no keyframe prompt uses more than 3 references. If the real limit is lower, drop the references in the order: location plate, shelf group, then identity sheet, and say so in the take review.
- Prompt length: the keyframe prompts are the shot records' compiled frame text (370 to 800 words) plus a short reference preamble. The compiled text is not shortened because the real length limit is unknown; every lock stays whole. If the tool refuses long prompts, ask the character-designer and production-designer for short-form locks (the skill never truncates a lock).
- Negatives are written positively (for example "clean frame without text") because the tool has no negative field.
- Veo 3.1 first-last-frame clip lengths are TO-VERIFY. They do not change these prompts; they only change how long the clip made from the SC01-SH030 and SC01-SH070 pairs can be.

## Prompt-writing notes (decisions and fixes)
1. The shot records' frame text for SC01-SH030, SC01-SH070 and the hand-only shots (SC01-SH020, SH030, SC04-SH020, SH030) was wrong at the time of reading: it labelled the saucer FACEDOWN in the start frame with "starts UPRIGHT ... ends face-down" in the same sentence, left the tin position at "on the shelf at the start; clutched at the end" in both frames, and carried "n/a (hand only)" and "expression: out of frame" noise. The production-manager corrected them in SC01_shots@2 and SC04_shots@2 before these prompts were built; the prompts use the corrected text.
2. Hand-only shots still carry Lan's full identity lock (the lock is never shortened). The corrected frame text states "only the hand and wrist are in frame, no face and no body". If the model draws a face anyway, use the repair prompt in the Repairs table.
3. The style lock describes a night-market scene, which contradicts a plain-grey reference sheet. The sheets paste the style lock verbatim and add one "Sheet exception" sentence. PROPOSAL to the visual-style-designer: add a short sheet-style lock (film grain, natural texture, no text) so the exception sentence is not needed.
4. The shelf group: the production-designer's brief lists the shelf "from west to east saucer, photo, tin". The camera looks south from the lane, so east is frame left. The prompt therefore reads tin, photo, saucer from frame left to right, as in SC01-SH010's record.
5. NM-P1 asks for a "normal" lens; SC01-SH010 uses 28 mm. The plate uses about 35 mm; it is a layout reference, not a framing match.
6. Variants: one image per attempt (`images: 1`) because there is no budget. Increase to 2 or 4 only when the user sets one.

## Generation plan
| Order | Prompt ID | Target | Depends on (approved images) | Status |
|---|---|---|---|---|
| 1 | IMG-SF-01 | Style frame SF-01 (SC01) | none (text only) | READY |
| 2 | IMG-SF-02 | Style frame SF-02 (SC03) | none (text only) | READY |
| 3 | IMG-SF-03 | Style frame SF-03 (SC04) | none (text only) | READY |
| 4 | IMG-CH-MACAQUE-TURNAROUND | Macaque turnaround sheet (MACAQUE-TURNAROUND) | SF-01..03 approved (look) | READY |
| 5 | IMG-CH-LAN-TURNAROUND | Lan turnaround sheet, costume BASE (LAN-TURNAROUND) | macaque turnaround approved (order only); SF approved | READY |
| 6 | IMG-PR-TIN-SHEET | Tin prop sheet (TIN-SHEET) | SF approved | READY |
| 7 | IMG-PR-SAUCERS-SHEET | Saucers prop sheet (SAUCERS-SHEET) | SF approved | READY |
| 8 | IMG-CH-AHMA-PHOTO | Ah Ma photo portrait (AHMA-PHOTO) | IMG-PR-TIN-SHEET approved | READY |
| 9 | IMG-PR-SHELF-GROUP | Shelf group sheet (SHELF-GROUP) | tin sheet, saucers sheet, Ah Ma portrait approved | READY |
| 10 | IMG-CH-MACAQUE-POSES | Macaque pose sheet (MACAQUE-POSES) | macaque turnaround, tin sheet approved | READY |
| 11 | IMG-LOC-NM-P1 | Location plate NM-P1 stall front | SF approved | READY |
| 12 | IMG-SC01-SH010-START | SC01-SH010 start keyframe (image-to-video) | CH-LAN_turnaround_v1.png; LOC-NIGHT-MARKET_plate_NM-P1_v1.png; PR-TIN_shelfgroup_v1.png | READY |
| 14 | IMG-SC01-SH020-START | SC01-SH020 start keyframe (image-to-video) | CH-LAN_turnaround_v1.png; PR-TIN_sheet_v1.png; PR-TIN_shelfgroup_v1.png | READY |
| 16 | IMG-SC01-SH030-START | SC01-SH030 start keyframe (first-last-frame) | CH-LAN_turnaround_v1.png; PR-SAUCER-STALL_sheet_v1.png; PR-TIN_shelfgroup_v1.png | READY |
| 17 | IMG-SC01-SH030-END | SC01-SH030 end keyframe (first-last-frame) | SC01-SH030_start_v1.png; CH-LAN_turnaround_v1.png; PR-SAUCER-STALL_sheet_v1.png | READY |
| 18 | IMG-SC01-SH040-START | SC01-SH040 start keyframe (image-to-video) | CH-LAN_turnaround_v1.png; LOC-NIGHT-MARKET_plate_NM-P1_v1.png | READY |
| 20 | IMG-SC01-SH050-START | SC01-SH050 start keyframe (image-to-video) | CH-MACAQUE_turnaround_v1.png; LOC-NIGHT-MARKET_plate_NM-P1_v1.png | READY |
| 22 | IMG-SC01-SH060-START | SC01-SH060 start keyframe (image-to-video) | CH-LAN_turnaround_v1.png; LOC-NIGHT-MARKET_plate_NM-P1_v1.png | READY |
| 24 | IMG-SC01-SH070-START | SC01-SH070 start keyframe (first-last-frame) | CH-MACAQUE_turnaround_v1.png; PR-TIN_shelfgroup_v1.png; CH-LAN_turnaround_v1.png | READY |
| 25 | IMG-SC01-SH070-END | SC01-SH070 end keyframe (first-last-frame) | SC01-SH070_start_v1.png; CH-MACAQUE_turnaround_v1.png; PR-TIN_shelfgroup_v1.png | READY |
| 26 | IMG-SC01-SH080-START | SC01-SH080 start keyframe (image-to-video) | CH-LAN_turnaround_v1.png; LOC-NIGHT-MARKET_plate_NM-P1_v1.png | READY |
| 28 | IMG-SC01-SH090-START | SC01-SH090 start keyframe (image-to-video) | CH-MACAQUE_turnaround_v1.png; PR-TIN_sheet_v1.png; LOC-NIGHT-MARKET_plate_NM-P1_v1.png | READY |
| 30 | IMG-SC01-SH100-START | SC01-SH100 start keyframe (image-to-video) | CH-LAN_turnaround_v1.png; LOC-NIGHT-MARKET_plate_NM-P1_v1.png | READY |

Order within the keyframes: story order, each start frame before its end frame; the end frame uses the start frame as Image 1. The risk batch (SC01-SH070) is the first keyframe pair to run so a failed macaque drop shows up early.

## Prompts
```yaml
record: image_prompt
id: IMG-SF-01
target: Style frame SF-01 (SC01)
model: Gemini 2.5 Flash Image
prompt: 'Cinematic still, medium close-up, eye-level, 85 mm lens, shallow depth of field. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Lan walks past her shelf without looking at it and touches the lid of the tin with two fingers of her right hand; her face is soft and turned away, tired and numb. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED, on the plank shelf, lid up toward camera, the two brass spots catching light. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption. The photo stands beside the tin, soft and out of focus with no readable detail. Lit by warm amber string-light bulbs and honey tungsten on the counter, with warm-white steam backlight behind. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references: []
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- 'look test only: warm amber, umber shadows, steam backlight'
- Lan reads as indigo-grey apron against amber
- tin has exactly two brass spots; photo has no readable detail
- no text, logos or flags
output: assets/styleframes/SF-01_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SF-02
target: Style frame SF-02 (SC03)
model: Gemini 2.5 Flash Image
prompt: 'Cinematic still, wide shot, eye-level, 35 mm lens, shallow depth of field. Night, a narrow back alley lit only by one honey-amber paper lantern high on a plastered wall, deep teal shadows with detail kept near #14100E. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. The macaque sits beside a low wooden stool and raises its left palm to tap the lid of the tin on the ground. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED, on the ground, lid up with the two brass spots. A small 12 cm cream-glazed ceramic saucer, slightly aged, with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position, matching the stall saucer. Plain, no pattern, no writing. The saucer stands on the stool seat. A low four-legged hardwood stool, 28 cm tall, seat worn into a shallow dish, legs slightly splayed, dark honey-brown with pale wear marks. Plain, no paint. A round 30 cm amber paper lantern with thin bamboo ribs, hung from an iron wall bracket by a short wire. Plain, no characters, no pattern. Lan stands small at the left edge of the lantern light, a still figure in an indigo-grey apron. Palette: alley teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references: []
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- 'look test only: single warm lantern pool in cool teal dark'
- one macaque with the notch in its own left ear
- tin with two brass spots; saucer chip at 3 o'clock
- Lan small at the frame edge, apron indigo-grey
output: assets/styleframes/SF-02_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SF-03
target: Style frame SF-03 (SC04)
model: Gemini 2.5 Flash Image
prompt: 'Cinematic still, medium wide shot, eye-level, 35 mm lens, shallow depth of field. A noodle stall at closing time under dimmed warm lanterns, honey tungsten on the plank shelf, the last bulb about to go off. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Lan stands at the counter with her right hand lowering from the lid of the tin after knocking twice; a red graze is visible on her outer right forearm. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State LID-ON, the lid set loosely and offset on the shelf. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. State FACEUP, set on the counter edge. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing. The macaque drops short from the lantern wire toward the saucer. Palette: honey tungsten #F2B35E, umber #2A1D17, brass #C9A24B, steam white #F1E4CF. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references: []
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- 'look test only: quiet honey warmth, dimmed lanterns'
- graze on the RIGHT forearm
- saucer face-up with the chip at 3 o'clock
- one macaque with a notch in its left ear
output: assets/styleframes/SF-03_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-CH-MACAQUE-TURNAROUND
target: Macaque turnaround sheet (MACAQUE-TURNAROUND)
model: Gemini 2.5 Flash Image
prompt: 'Wildlife reference sheet of one animal. Four full-body views arranged left to right, each on all four limbs at the same scale and ground line: front, three-quarter front, side, back; plus one larger head close-up of the front view that clearly shows the small V-shaped notch in the animal''s own LEFT ear, which is on the viewer''s right when it faces the camera. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Calm neutral standing pose, mouth closed, no props. Single animal, realistic wild animal proportions and look, not a cartoon. Sheet exception: ignore the market setting of the style description; the background is plain neutral mid-grey and the light is flat, even and shadowless, with the same film grain and natural texture. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references: []
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- one animal only
- V-notch in its own LEFT ear in every view (viewer's right in the front view, viewer's left from behind)
- olive-brown fur, cream-grey underparts, grey-flecked muzzle
- tail kink about 10 cm from the tip
- no collar or clothing; hands animal-like with five fingers
output: assets/characters/CH-MACAQUE_turnaround_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-CH-LAN-TURNAROUND
target: Lan turnaround sheet, costume BASE (LAN-TURNAROUND)
model: Gemini 2.5 Flash Image
prompt: 'Character turnaround sheet of one woman. Five full-body views arranged left to right at the same scale and ground line, head to toe visible: front, three-quarter front, side profile, three-quarter back, back. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition BASE: hair neat in the low knot with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Relaxed neutral stance, arms slightly away from the body, neutral expression, mouth closed, nothing in her hands. The low hair knot is visible in the side and back views. Sheet exception: ignore the market setting of the style description; the background is plain neutral mid-grey and the light is flat, even and shadowless, with the same film grain and natural texture. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references: []
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- same face in all five views
- low knot of black hair at the nape visible in side and back
- apron indigo-grey (#4A5568 family), no print or text
- sleeves rolled to the same height, forearms unmarked (no graze yet)
- five fingers on each hand, no jewelry
output: assets/characters/CH-LAN_turnaround_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-PR-TIN-SHEET
target: Tin prop sheet (TIN-SHEET)
model: Gemini 2.5 Flash Image
prompt: 'Product-style reference sheet of one object on a plain neutral mid-grey ground, flat even light. Views: top view showing the lid with its two brass spots, front view, side view, and one open view showing a folded cream card, a small wooden spoon and a closed paper twist inside. Include a 16 cm scale bar without text. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. A stiff cream card folded in thirds into a 10 by 6 cm rectangle, soft worn edges, faint brown fingerprint stains, the outside completely blank with no writing, no lines and no printing visible. A small 14 cm hand-carved honey-brown hardwood cooking spoon with a rounded bowl darkened by years of use and a short plain handle, smooth worn surface. No decoration, no carving, no writing. A small 8 cm twist of waxed brown paper, closed at the top, holding about a dozen chewy amber-brown dried fruit slices, each about 3 cm wide, that spill out when opened. Plain paper, no printing. Shown in the states SEALED (lid on) and OPEN (lid lifted off beside it). Sheet exception: ignore the market setting of the style description; the background is plain neutral mid-grey and the light is flat, even and shadowless, with the same film grain and natural texture. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references: []
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- exactly two bright worn brass spots side by side on the lid
- dark green lacquer worn at rim and corners
- no label, no handle, no writing
- card folded and blank outside
- scale reads 16 cm across and 10 cm tall
output: assets/world/PR-TIN_sheet_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-PR-SAUCERS-SHEET
target: Saucers prop sheet (SAUCERS-SHEET)
model: Gemini 2.5 Flash Image
prompt: 'Product-style reference sheet of two matching ceramic saucers side by side on a plain neutral mid-grey ground, flat even light. On the left the stall saucer in three states: standing upright, lying face-down showing the blank unglazed foot ring, lying face-up. On the right the alley saucer standing upright. The chip at the 3 o''clock position is clearly visible on every upright and face-up saucer. The two saucers must be clearly twins with the same chip shape and position. Include a 12 cm scale bar without text. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. A small 12 cm cream-glazed ceramic saucer, slightly aged, with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position, matching the stall saucer. Plain, no pattern, no writing. Sheet exception: ignore the market setting of the style description; the background is plain neutral mid-grey and the light is flat, even and shadowless, with the same film grain and natural texture. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references: []
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- crescent chip at 3 o'clock in the same place on both saucers
- cream glaze, thin dark-blue line around the rim
- face-down saucer shows a blank foot ring
- no pattern or writing
output: assets/world/PR-SAUCER-STALL_sheet_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-CH-AHMA-PHOTO
target: Ah Ma photo portrait (AHMA-PHOTO)
model: Gemini 2.5 Flash Image
prompt: 'Single head-and-shoulders portrait, flat front lighting, in the look of a faded warm colour print with soft film grain, a plain wall behind, no frame. Ah Ma, a Southeast Asian woman in her mid 70s, round face with deep laugh lines, mid-laugh with eyes crinkled nearly shut and a wide open smile, silver-white hair pulled back in a low bun, warm light-tan weathered skin, pale blue-grey collarless cotton blouse. Her right hand taps the lid of a dented round tin. Faded color photograph look. Pale blue-grey collarless short-sleeve washed cotton blouse, thin plain gold hoop earrings, silver-white hair pulled back in a low bun, shown in a faded print. No patterns, no text, no badge, no other jewelry. The tin lid and her right hand are visible at the bottom of the frame, her hand tapping the lid. No writing and no date stamp anywhere. Tin as in the attached tin sheet. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/world/PR-TIN_sheet_v1.png
  role: 'prop appearance: the tin (dark green lacquer, two brass spots on the lid)'
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- mid-laugh, eyes crinkled nearly shut
- silver-white low bun, pale blue-grey collarless blouse, thin gold hoop earrings
- tin matches the tin sheet
- no writing, no date stamp
output: assets/characters/CH-AHMA_portrait_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-PR-SHELF-GROUP
target: Shelf group sheet (SHELF-GROUP)
model: Gemini 2.5 Flash Image
prompt: 'Front view of a plank shelf on a timber post against a blank wall, seen from the lane side (north), straight on at eye level, flat even light, shallow depth of field. Three objects stand on the plank from frame left to right: the tin, then the framed photo, then the saucer (this is west to east reversed by the camera, which looks south). A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption. The photograph shows a laughing elderly woman tapping a tin, with no writing. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. State UPRIGHT, chip at 3 o''clock facing frame right. Use the attached sheets for the exact objects. Sheet exception: ignore the market setting of the style description; the background is plain neutral mid-grey and the light is flat, even and shadowless, with the same film grain and natural texture. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/world/PR-TIN_sheet_v1.png
  role: 'prop appearance: tin'
- file: assets/world/PR-SAUCER-STALL_sheet_v1.png
  role: 'prop appearance: saucer and chip'
- file: assets/characters/CH-AHMA_portrait_v1.png
  role: the picture inside the frame
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- 'order left to right: tin, photo, saucer'
- photo shows the Ah Ma portrait, soft, no text
- chip on the saucer faces frame right (3 o'clock)
- tin lid shows two brass spots
output: assets/world/PR-TIN_shelfgroup_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-CH-MACAQUE-POSES
target: Macaque pose sheet (MACAQUE-POSES)
model: Gemini 2.5 Flash Image
prompt: 'Reference sheet of one animal in six poses, same scale, plain neutral mid-grey background, flat even light: sitting still on a thin wire; running low with a round tin clutched against the chest; sitting beside a tin on a low stool; one palm raised tapping the tin lid; head tilted watching; eating dried fruit from a saucer with its fingers. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. The tin is as in the attached tin sheet. Sheet exception: ignore the market setting of the style description; the background is plain neutral mid-grey and the light is flat, even and shadowless, with the same film grain and natural texture. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/characters/CH-MACAQUE_turnaround_v1.png
  role: 'identity: face, ear notch, fur, tail kink'
- file: assets/world/PR-TIN_sheet_v1.png
  role: 'prop appearance: the tin'
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- one animal in each pose
- notch in the own LEFT ear in every pose
- tin size 16 cm, two brass spots
- hands animal-like, five fingers
output: assets/characters/CH-MACAQUE_poses_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-LOC-NM-P1
target: Location plate NM-P1 stall front
model: Gemini 2.5 Flash Image
prompt: 'Cinematic still of an empty location, no people. Camera in the lane, 4.5 m north of the counter on the stall''s centre line, looking south, 1.5 m high, a normal lens of about 35 mm, night, dry warm humid haze. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: Lan''s stall front: the empty counter with blank bowls, a bare shelf plank on the rear post at frame left with nothing on it, the lantern wire above with three red lanterns; the stockpot burner is at the counter''s west end, frame right, cold and empty. Sparse soft-focus background lane with no readable signs and no people. Lit by a warm 2700 K tungsten stall bulb on the east post (frame left), string-light bulbs and the three chili-red lanterns. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references: []
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- no people, no animals
- shelf empty (props are added in the keyframes)
- three red lanterns above the stall
- sign boards blank and unlettered
- east post and bulb at frame left
output: assets/world/LOC-NIGHT-MARKET_plate_NM-P1_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH010-START
target: SC01-SH010 start keyframe (image-to-video)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: identity: Lan''s face, hair, apron and shoes; Image 2: location layout: stall, counter, wire and lanterns; Image 3: prop appearance and order: tin, photo, saucer on the shelf. Keep the identities from the references and the written locks below. Wide shot, eye-level angle, 28 mm lens at f/4, camera 1.5 m high, medium-deep depth of field, 28 mm wide: the whole stall in one frame, red lanterns at the top, background shoppers soft. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: centre of frame behind the counter, midground, about 4.5 m from camera, full figure; toward camera, head bowed to the bowl; standing behind the counter with the ladle in her right hand over an empty bowl; expression: slack, neutral, eyes down. A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label. State BOILING: on the burner at the counter''s west end, frame right of Lan, steaming. A 35 cm long steel ladle with a deep round bowl, slightly dented, and a plain straight brown wooden handle with a hole at the end. No decoration, no writing. State HELD: in Lan''s right hand over the bowl. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED: on the shelf behind Lan at frame left, small. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption. State STANDING: on the shelf between the tin and the saucer. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. State UPRIGHT: on the shelf at the west end, frame right of the photo. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: Lan''s stall front: counter, shelf on the rear post at frame left, lantern wire above. Foreground: out-of-focus counter edge with blank bowls, lower frame. Midground: Lan at the counter, pot at frame right, shelf with tin, photo and saucer at frame left. Background: soft-focus lane, a few faceless shoppers, string-light bulbs. Composition: stall centred, red lantern cluster and wire across the top third. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/characters/CH-LAN_turnaround_v1.png
  role: 'identity: Lan''s face, hair, apron and shoes'
- file: assets/world/LOC-NIGHT-MARKET_plate_NM-P1_v1.png
  role: 'location layout: stall, counter, wire and lanterns'
- file: assets/world/PR-TIN_shelfgroup_v1.png
  role: 'prop appearance and order: tin, photo, saucer on the shelf'
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- Lan centred behind the counter, ladle over an EMPTY bowl in her RIGHT hand
- pot on the burner at frame right, boiling, steaming
- shelf at frame left, order tin, photo, saucer; saucer upright, chip at 3 o'clock
- forearms unmarked, hair neat
- three red lanterns across the top third, no readable signs
output: assets/keyframes/SC01-SH010_start_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH020-START
target: SC01-SH020 start keyframe (image-to-video)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: skin tone and right hand/wrist only; Image 2: prop appearance: the tin; Image 3: the photo, soft, at the right edge. Keep the identities from the references and the written locks below. Close-up, eye-level angle, 85 mm lens at f/2, camera 1.4 m high, shallow depth of field, 85 mm, tight and compressed, razor-thin focus on the brass spots, creamy amber background. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: only her right hand and wrist enter from the lower right of frame; body out of frame; only the hand and wrist are in frame, no face and no body; her right hand entering from the lower right, two fingers extended, a hand''s width from the lid. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED: frame centre on the shelf, lid facing up toward camera, the two brass spots catching light. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption. State STANDING: soft and out of focus at the right edge of frame. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the shelf on the rear post, east end. Foreground: none. Midground: the tin lid, centre. Background: soft photo frame at the right edge, steam and warm bokeh behind. Composition: tin lid centre, photo soft at the right edge (from the north the shelf reads tin, photo, saucer left to right). Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/characters/CH-LAN_turnaround_v1.png
  role: skin tone and right hand/wrist only
- file: assets/world/PR-TIN_sheet_v1.png
  role: 'prop appearance: the tin'
- file: assets/world/PR-TIN_shelfgroup_v1.png
  role: the photo, soft, at the right edge
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- two fingers of her RIGHT hand a hand's width from the lid; no face, no body
- tin lid with exactly two brass spots at centre
- photo soft at the right edge, no readable detail
output: assets/keyframes/SC01-SH020_start_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH030-START
target: SC01-SH030 start keyframe (first-last-frame)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: skin tone and right hand/wrist only; Image 2: prop appearance: the saucer and its chip; Image 3: the photo, soft, at the left. Keep the identities from the references and the written locks below. Close-up, eye-level angle, 85 mm lens at f/2, camera 1.4 m high, shallow depth of field, 85 mm close, shallow focus, saucer chip crisp, warm blur behind. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: only her right hand and wrist enter from the lower right; body out of frame; only the hand and wrist are in frame, no face and no body; her right hand reaching the upright saucer. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. State UPRIGHT: frame centre on the shelf, standing on its rim with the chip at 3 o''clock visible. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption. State STANDING: soft behind at frame left. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the shelf on the rear post, west end. Foreground: none. Midground: the saucer, centre. Background: soft photo frame at the left, warm bokeh. Composition: saucer centre, photo soft at its left. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/characters/CH-LAN_turnaround_v1.png
  role: skin tone and right hand/wrist only
- file: assets/world/PR-SAUCER-STALL_sheet_v1.png
  role: 'prop appearance: the saucer and its chip'
- file: assets/world/PR-TIN_shelfgroup_v1.png
  role: the photo, soft, at the left
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- 'START: saucer upright, chip at 3 o''clock, hand arriving from the right'
- 'END: saucer face-down, blank foot ring showing'
- photo soft at the left; same saucer in both frames
- hand only, no face
output: assets/keyframes/SC01-SH030_start_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH030-END
target: SC01-SH030 end keyframe (first-last-frame)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: the start keyframe of the same shot: keep identities, set, light and framing; only the planned change; Image 2: skin tone and right hand/wrist only; Image 3: prop appearance: the saucer and its chip. Keep the identities from the references and the written locks below. Close-up, eye-level angle, 85 mm lens at f/2, camera 1.4 m high, shallow depth of field, 85 mm close, shallow focus, saucer chip crisp, warm blur behind. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: only her right hand and wrist enter from the lower right; body out of frame; only the hand and wrist are in frame, no face and no body; her hand withdrawing, fingers curling away from the face-down saucer. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. State FACEDOWN: frame centre on the shelf, lying face-down with the blank unglazed foot ring showing. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption. State STANDING: soft behind at frame left. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the shelf on the rear post, west end. Foreground: none. Midground: the saucer, centre. Background: soft photo frame at the left, warm bokeh. Composition: saucer centre, photo soft at its left. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/keyframes/SC01-SH030_start_v1.png
  role: 'the start keyframe of the same shot: keep identities, set, light and framing; only the planned change'
- file: assets/characters/CH-LAN_turnaround_v1.png
  role: skin tone and right hand/wrist only
- file: assets/world/PR-SAUCER-STALL_sheet_v1.png
  role: 'prop appearance: the saucer and its chip'
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- 'START: saucer upright, chip at 3 o''clock, hand arriving from the right'
- 'END: saucer face-down, blank foot ring showing'
- photo soft at the left; same saucer in both frames
- hand only, no face
output: assets/keyframes/SC01-SH030_end_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH040-START
target: SC01-SH040 start keyframe (image-to-video)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: identity: Lan''s face, hair, apron and shoes; Image 2: location layout: stall, counter, wire and lanterns. Keep the identities from the references and the written locks below. Medium shot, eye-level angle, 50 mm lens at f/2.8, camera 1.4 m high, shallow-medium depth of field, 50 mm natural perspective, Lan sharp, customer soft and faceless. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: centre-right behind the counter, midground, waist-up; toward camera, head down; wiping the counter with eyes down while a faceless customer at frame left holds the bowl; expression: tight mouth, eyes down. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: stall counter, lane side. Foreground: out-of-focus counter edge. Midground: Lan at the counter; a faceless soft-focus customer in a plain dark shirt at frame left. Background: soft-focus lane lights and steam. Composition: Lan centre-right, customer left and soft. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/characters/CH-LAN_turnaround_v1.png
  role: 'identity: Lan''s face, hair, apron and shoes'
- file: assets/world/LOC-NIGHT-MARKET_plate_NM-P1_v1.png
  role: 'location layout: stall, counter, wire and lanterns'
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- Lan waist-up at centre-right, eyes down, wiping
- faceless soft customer in a plain dark shirt at frame left holding the bowl
- no readable text
output: assets/keyframes/SC01-SH040_start_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH050-START
target: SC01-SH050 start keyframe (image-to-video)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: identity: the macaque''s face, ear notch, fur and tail; Image 2: location: the lantern wire and red paper lanterns, out of focus. Keep the identities from the references and the written locks below. Close-up, low angle, 135 mm lens at f/2.8, camera 1.0 m high, shallow depth of field, 135 mm long lens, compressed, macaque isolated against round warm bokeh, low looking-up angle. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state BASE: dry, slightly dusty fur. Position: upper right of frame, seated on the lantern wire, head and shoulders; three-quarter, facing frame left, notched LEFT ear toward the camera at the right side of its head; seated on the wire looking down-left, eyes just settling; expression: watchful, still. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the lantern wire above the shelf, looking up from the lane. Foreground: none. Midground: the macaque on the wire. Background: soft red and amber paper lanterns as round bokeh, dark night above. Composition: macaque upper right, empty dark at left to give the eyeline room. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/characters/CH-MACAQUE_turnaround_v1.png
  role: 'identity: the macaque''s face, ear notch, fur and tail'
- file: assets/world/LOC-NIGHT-MARKET_plate_NM-P1_v1.png
  role: 'location: the lantern wire and red paper lanterns, out of focus'
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- one macaque on the wire at upper right, three-quarter facing frame left
- notch in its own LEFT ear toward camera at the right side of its head
- red and amber paper lanterns as round bokeh
- empty dark at frame left for the eyeline
output: assets/keyframes/SC01-SH050_start_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH060-START
target: SC01-SH060 start keyframe (image-to-video)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: identity: Lan''s face, hair, apron and shoes; Image 2: location layout: stall, counter, wire and lanterns. Keep the identities from the references and the written locks below. Medium shot, eye-level angle, 50 mm lens at f/2.8, camera 1.5 m high, shallow-medium depth of field, 50 mm, Lan sharp at screen right of centre, blurred shelf at the left edge. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: frame right of centre behind the counter, midground, waist-up; turned toward the pot at frame right, three-quarter to camera; ladle over the pot, mouth closed, eyes on the pot; expression: tired, flat, mouth closed. A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label. State BOILING: frame right on the burner, steaming. A 35 cm long steel ladle with a deep round bowl, slightly dented, and a plain straight brown wooden handle with a hole at the end. No decoration, no writing. State HELD: in Lan''s right hand over the pot. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the west end of the counter, at the pot. Foreground: none. Midground: Lan and the pot. Background: the shelf blurred at the left edge, lane lights soft. Composition: Lan right of centre, pot right, shelf out of focus at the left edge. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/characters/CH-LAN_turnaround_v1.png
  role: 'identity: Lan''s face, hair, apron and shoes'
- file: assets/world/LOC-NIGHT-MARKET_plate_NM-P1_v1.png
  role: 'location layout: stall, counter, wire and lanterns'
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- Lan at frame right of centre turned toward the pot, ladle over it, mouth closed
- shelf blurred at frame left
- forearms unmarked
output: assets/keyframes/SC01-SH060_start_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH070-START
target: SC01-SH070 start keyframe (first-last-frame)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: identity: the macaque''s face, ear notch, fur and tail; Image 2: prop appearance and order: tin, photo, saucer on the shelf; Image 3: Lan seen small from behind. Keep the identities from the references and the written locks below. Wide shot, low angle, 35 mm lens at f/4, camera 1.2 m high, medium-deep depth of field, 35 mm, slight low angle, shelf left and Lan small at right, red lanterns top. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state BASE: dry, slightly dusty fur. Position: frame left, dropping from the wire onto the shelf; three-quarter, facing frame right, notched LEFT ear on the far side of its head; crouched on the lantern wire above the shelf, weight forward, the wire dipping; expression: intent, calm. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: small, frame right at the pot, about 2.5 m from the shelf, full figure, back turned to the shelf; away from the shelf toward the pot; standing at the pot with her back to the shelf; expression: neutral, eyes on the pot. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED: on the shelf at frame left, lid up with the two brass spots. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption. State STANDING: on the shelf between tin and saucer. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. State FACEDOWN: on the shelf at the west end, face-down. A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label. State BOILING: frame right on the burner, steaming. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the shelf on the rear post and the wire above, with the pot at the counter''s west end. Foreground: out-of-focus counter edge, lower frame. Midground: shelf at frame left, Lan small at frame right. Background: soft-focus lane, red lanterns on the wire above. Composition: shelf left, Lan right, red lantern cluster at the top. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/characters/CH-MACAQUE_turnaround_v1.png
  role: 'identity: the macaque''s face, ear notch, fur and tail'
- file: assets/world/PR-TIN_shelfgroup_v1.png
  role: 'prop appearance and order: tin, photo, saucer on the shelf'
- file: assets/characters/CH-LAN_turnaround_v1.png
  role: Lan seen small from behind
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- 'START: macaque crouched on the wire above the shelf, wire dipping, notch ear on the far side'
- 'END: macaque crouched on the shelf, both hands closed on the tin'
- Lan small at the pot at frame right with her back turned
- saucer face-down on the shelf at the west end
- shelf order tin, photo, saucer
output: assets/keyframes/SC01-SH070_start_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH070-END
target: SC01-SH070 end keyframe (first-last-frame)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: the start keyframe of the same shot: keep identities, set, light and framing; only the planned change; Image 2: identity: the macaque''s face, ear notch, fur and tail; Image 3: prop appearance and order: tin, photo, saucer on the shelf. Keep the identities from the references and the written locks below. Wide shot, low angle, 35 mm lens at f/4, camera 1.2 m high, medium-deep depth of field, 35 mm, slight low angle, shelf left and Lan small at right, red lanterns top. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state BASE: dry, slightly dusty fur. Position: frame left, dropping from the wire onto the shelf; three-quarter, facing frame right, notched LEFT ear on the far side of its head; crouched on the shelf with both hands closed round the tin; expression: intent, tin clutched. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: small, frame right at the pot, about 2.5 m from the shelf, full figure, back turned to the shelf; away from the shelf toward the pot; still standing at the pot with her back to the shelf; expression: neutral, eyes on the pot. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED: clutched in the macaque''s two hands against its chest. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption. State STANDING: on the shelf between tin and saucer. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. State FACEDOWN: on the shelf at the west end, face-down. A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label. State BOILING: frame right on the burner, steaming. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the shelf on the rear post and the wire above, with the pot at the counter''s west end. Foreground: out-of-focus counter edge, lower frame. Midground: shelf at frame left, Lan small at frame right. Background: soft-focus lane, red lanterns on the wire above. Composition: shelf left, Lan right, red lantern cluster at the top. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/keyframes/SC01-SH070_start_v1.png
  role: 'the start keyframe of the same shot: keep identities, set, light and framing; only the planned change'
- file: assets/characters/CH-MACAQUE_turnaround_v1.png
  role: 'identity: the macaque''s face, ear notch, fur and tail'
- file: assets/world/PR-TIN_shelfgroup_v1.png
  role: 'prop appearance and order: tin, photo, saucer on the shelf'
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- 'START: macaque crouched on the wire above the shelf, wire dipping, notch ear on the far side'
- 'END: macaque crouched on the shelf, both hands closed on the tin'
- Lan small at the pot at frame right with her back turned
- saucer face-down on the shelf at the west end
- shelf order tin, photo, saucer
output: assets/keyframes/SC01-SH070_end_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH080-START
target: SC01-SH080 start keyframe (image-to-video)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: identity: Lan''s face, hair, apron and shoes; Image 2: location layout: stall, counter, wire and lanterns. Keep the identities from the references and the written locks below. Medium shot, eye-level angle, 50 mm lens at f/2.8, camera 1.5 m high, shallow-medium depth of field, 50 mm, slightly handheld energy, Lan''s open mouth and extended arm. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: centre behind the counter, midground, waist-up; spinning to face frame left toward the shelf; half-turned from the pot with the ladle in her right hand; expression: startled. A 35 cm long steel ladle with a deep round bowl, slightly dented, and a plain straight brown wooden handle with a hole at the end. No decoration, no writing. State HELD: in Lan''s right hand. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: behind the counter, facing the shelf. Foreground: none. Midground: Lan. Background: the shelf blurred at the left, lane lights soft. Composition: Lan centre, shelf out of focus at the left. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/characters/CH-LAN_turnaround_v1.png
  role: 'identity: Lan''s face, hair, apron and shoes'
- file: assets/world/LOC-NIGHT-MARKET_plate_NM-P1_v1.png
  role: 'location layout: stall, counter, wire and lanterns'
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- Lan half-turned, ladle in her RIGHT hand, startled
- 'START: half-turned from the pot, mouth closed or just opening, arm not yet out'
- shelf blurred at frame left
output: assets/keyframes/SC01-SH080_start_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH090-START
target: SC01-SH090 start keyframe (image-to-video)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: identity: the macaque''s face, ear notch, fur and tail; Image 2: prop appearance: the tin; Image 3: location: counter and lane edge. Keep the identities from the references and the written locks below. Wide shot, eye-level angle, 35 mm lens at f/4, camera 1.1 m high, medium depth of field, 35 mm tracking beside the macaque, tin clutched to its chest, steam boiling over at the right. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state BASE: dry, slightly dusty fur. Position: lower third of frame, running on the counter top along the lane edge; side view, running toward frame right, its right side toward the camera; running on the counter at frame left of centre with the tin against its chest; expression: intent. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED: clutched to the macaque''s chest, on its camera side. A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label. State BOIL-OVER: frame right on the burner, foamy broth spilling over the rim, heavy steam. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the counter top, running east to west toward the pot. Foreground: out-of-focus counter edge, lower frame. Midground: the macaque on the counter, the pot boiling over at frame right. Background: soft lane lights and steam. Composition: counter along the lower third, pot at frame right. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/characters/CH-MACAQUE_turnaround_v1.png
  role: 'identity: the macaque''s face, ear notch, fur and tail'
- file: assets/world/PR-TIN_sheet_v1.png
  role: 'prop appearance: the tin'
- file: assets/world/LOC-NIGHT-MARKET_plate_NM-P1_v1.png
  role: 'location: counter and lane edge'
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- macaque running on the counter, its right side to camera, tin on its camera side against its chest
- pot at frame right with foam spilling over the rim and heavy steam
- lower-third counter line
- one macaque only
output: assets/keyframes/SC01-SH090_start_v1.png
status: REVIEW
gen_state: READY
```

```yaml
record: image_prompt
id: IMG-SC01-SH100-START
target: SC01-SH100 start keyframe (image-to-video)
model: Gemini 2.5 Flash Image
prompt: 'Create one cinematic still, 16:9. Reference images: Image 1: identity: Lan''s face, hair, apron and shoes; Image 2: location layout: stall, counter, wire and lanterns. Keep the identities from the references and the written locks below. Medium shot, eye-level angle, 35 mm lens at f/4, camera 1.4 m high, medium depth of field, 35 mm, boil-over foam and heavy steam foreground right, Lan running out of frame right. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE, flushed: hair neat, a few small broth stains on the apron front, flushed cheeks and a light sweat sheen, forearms unmarked. Position: centre, behind the counter at the pot, waist-up becoming full as she moves; turning to run toward frame right; the ladle leaving her right hand beside the foaming pot; expression: startled, jaw set. A 35 cm long steel ladle with a deep round bowl, slightly dented, and a plain straight brown wooden handle with a hole at the end. No decoration, no writing. State ABANDONED: on the counter beside the pot. A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label. State BOIL-OVER: foreground right, foam spilling, heavy steam. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the pot end of the counter. Foreground: foam and steam, foreground right. Midground: Lan at the counter beside the pot. Background: soft lane lights. Composition: pot foreground right, Lan centre. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
references:
- file: assets/characters/CH-LAN_turnaround_v1.png
  role: 'identity: Lan''s face, hair, apron and shoes'
- file: assets/world/LOC-NIGHT-MARKET_plate_NM-P1_v1.png
  role: 'location layout: stall, counter, wire and lanterns'
parameters:
  aspect_ratio: '16:9'
  images: 1
must_match:
- ladle leaving Lan's right hand beside the foaming pot
- foam and steam at foreground right
- Lan turning toward frame right to run
- one ladle
output: assets/keyframes/SC01-SH100_start_v1.png
status: REVIEW
gen_state: READY
```

## Repairs
Edit prompts for the likely failures. Each changes one thing and says what stays.
| Original | Finding | Edit prompt ID | Prompt |
|---|---|---|---|
| IMG-SC01-SH020-START | a face appears in a hand-only frame | EDIT-SC01-SH020-A | "Keep the hand, wrist, tin lid, shelf, photo, lighting and composition exactly the same. Remove the face and body: only the right hand and wrist are visible entering from the lower right." |
| IMG-SC01-SH030-START | saucer chip missing or on the wrong side | EDIT-SC01-SH030-A | "Keep everything exactly the same. Make the saucer's single small crescent chip appear in the rim at the 3 o'clock position." |
| IMG-SC01-SH050-START | the notch is in the wrong ear | EDIT-SC01-SH050-A | "Keep the macaque's pose, face, fur, the wire, the lanterns and the lighting exactly the same. Move the small V-shaped notch to the macaque's own left ear, the one on the right side of its head in this image." |
| IMG-SC01-SH090-START | no foam at the pot | EDIT-SC01-SH090-A | "Keep the macaque, the tin, the counter and the lighting exactly the same. Make broth foam spill over the pot rim at frame right, with heavy warm-white steam." |
| IMG-SC01-SH010-START | readable letters on a sign | EDIT-SC01-SH010-A | "Keep everything exactly the same. Make every sign board blank and unlettered." |

## Later (no prompt yet)
Needed from SC02 on, not for SC01: LAN-EXPRESSIONS, LAN-POSES, Lan costume sheet with the GRAZED state and the graze close-up, MACAQUE expressions, location plates NM-P2 (lane west), NM-P3 (shelf close), NM-P4 (closing), AL-P1 and AL-P2 (alley), props PR-POT, PR-LADLE, PR-STOOL, PR-CART, PR-CRATES, PR-LANTERN-ALLEY sheets as needed, and the SC02 to SC04 keyframes. Counts and order are in `08_master/generation_plan.md`.

## Handoff
- Produced: images@1 (REVIEW): 23 prompts (3 style frames, 7 sheets, 1 plate, 12 SC01 keyframes: 10 start, 2 end)
- Next batch to run (needs the user's budget): IMG-SF-01 to SF-03, then the sheets in order. 12 SC01 keyframes follow after the sheets are approved. Minimum attempts for this scope at one image per attempt: 23; plan 2 to 3 attempts for the macaque and risk shots, so roughly 40 to 60. This is a count, not a budget.
- Open requests: short-form locks only if the tool rejects long prompts; sheet-style lock (PROPOSAL); confirm the reference-image limit in the UI
- Conflicts: none open; the frame-text fixes were applied to SC01_shots@2 and SC04_shots@2
