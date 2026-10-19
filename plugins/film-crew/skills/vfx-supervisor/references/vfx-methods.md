# VFX Methods

## Contents
1. What current generators often fail at
2. Method catalogue
3. Choosing a method
4. Review criteria for composites
5. Example records

## 1. What current generators often fail at
Practitioner reports and the official guides' own cautions (e.g. Sora 2's guide notes that short clips
follow instructions more reliably) point to these risk areas: readable text and logos; screens with
specific content; several recurring characters interacting; hands and fine manipulation; object
permanence (props vanishing); physics (liquids, cloth, collisions); exact match between shots (architecture,
light); long continuous takes; precise lip-sync for long lines.

## 2. Method catalogue
| Method | What it is | Use when |
|---|---|---|
| Native + retry ladder | generate the shot directly; re-roll/simplify | risk moderate and cost acceptable |
| Keyframe edit before animation | fix the still (image edit/inpaint), then image-to-video | the problem is visible in the first frame (wrong prop, extra person, text) |
| Region edit (video) | edit one region/attribute of a good take | tool supports video editing; one localized problem |
| Element + composite | generate an element separately (character on neutral background, effect element) and composite over a plate | two consistent characters in one frame; effects |
| Post 2D compositing | text, signs, screens, UI, titles, labels tracked onto the shot | any readable text or specific graphics |
| Set extension / matte painting | extend a generated or approved plate | scale beyond what the generation shows |
| Sky / weather replacement | replace sky, add rain/snow/fog elements | weather continuity across shots |
| Cleanup / paint-out | remove artifacts, extra fingers, glitches, watermarks from tools that add them where allowed | small defects in a good take |
| Retime / speed ramp | change speed, hold frames | timing off; slow-motion moments; "on twos" feel |
| Stabilize / reframe | stabilize shake, punch in, add a digital camera move | camera instruction ignored; reframing for vertical versions |
| Day-for-night / grade-based | change time of day by grading | fix time-of-day drift |
| 3D blockout / previz reference | simple 3D scene to control camera and positions; use the render as motion/structure reference | complex camera moves or choreography, where the tool accepts video reference |
| Practical-style elements | stock or generated fire, smoke, sparks, dust | effects layered over shots |

## 3. Choosing a method
1. Can the problem be fixed in the still before animating? → keyframe edit (cheapest per attempt).
2. Is it text or a graphic? → post compositing, always.
3. Is it two+ recurring characters interacting? → element + composite, or restage (PROPOSAL) so they are in
   separate shots.
4. Is it one defect in a good take? → region edit or cleanup.
5. Is it motion/camera control? → previz reference, simplify, or digital camera move in post.
Estimate generations: base attempts × expected retries (from the retry ladder) per element.

## 4. Review criteria for composites
- Edges clean (no halos), consistent motion blur and focus.
- Light direction, color and contrast match the plate and the shot record.
- Grain/noise and sharpness match the style bible's texture.
- Perspective and scale consistent with the camera spec (lens, height).
- Contact shadows and reflections where elements touch surfaces.
- Text: correct spelling, font per spec, tracked without slipping, legible for its screen time.

## 5. Example records
```yaml
record: vfx
id: VFX-SC03-SH040
shot: SC03-SH040
problem: "Label must read 'M. OKELLO, 14 KIRUI LANE' legibly in a 2 s insert; models garble text"
method: "post 2D compositing: generate the insert with a blank label, then track the text on"
elements: ["clean insert take with blank white label", "label graphic: black sans-serif, two lines, exact text above, slight ink bleed", "rain droplet overlay"]
steps: ["generate insert with 'blank white label, no text'", "QC clean take", "design label graphic", "planar-track and composite", "add droplets running over the text", "grain match"]
tools: "any compositor with planar tracking"
estimate: "insert: 2-4 generations"
fallback: "hold on Maya's reaction instead of a readable insert (PROPOSAL to film-director)"
review: ["text spelled exactly", "no slipping", "droplets pass over text", "grain matches"]
```
