---
artifact: master-production-document
id: master
version: 5
status: REVIEW
owner: production-manager
depends_on: [CH-DROP@1, CH-MO@1, CH-PIP@2, LOC-PUDDLE@1, QC_preflight_20261019@1, QC_preflight_rerun_20261019@1, SC01_animation@2, SC01_camera@2, SC01_direction@2, SC02_animation@2, SC02_camera@2, SC02_direction@2, SC03_animation@2, SC03_camera@2, SC03_direction@2, SC04_animation@2, SC04_camera@2, SC04_direction@2, SC05_animation@3, SC05_camera@2, SC05_direction@2, SHOTS-SC01@2, SHOTS-SC02@2, SHOTS-SC03@2, SHOTS-SC04@2, SHOTS-SC05@2, brief@2, concepts@1, continuity@3, generation_plan@2, lineup@1, production-log@2, props@2, screenplay@1, story@1, storyboard@3, style_bible@1]
updated: 2026-10-19
---

# Master Production Document: Frog Ferry (working title)

> Assembled by `assemble_master.py`. Edit the source documents, not this file, then re-assemble.

## 0. Status dashboard

| Artifact | Version | Status | Owner | File |
|---|---|---|---|---|
| CH-DROP | 1 | APPROVED | character-designer | 03_characters/CH-DROP.md |
| CH-MO | 1 | APPROVED | character-designer | 03_characters/CH-MO.md |
| CH-PIP | 2 | APPROVED | character-designer | 03_characters/CH-PIP.md |
| LOC-PUDDLE | 1 | APPROVED | production-designer | 04_world/LOC-PUDDLE.md |
| QC_preflight_20261019 | 1 | REVIEW | quality-control | 14_qc/QC_preflight_2026-10-19.md |
| QC_preflight_rerun_20261019 | 1 | REVIEW | quality-control | 14_qc/QC_preflight_2026-10-19_rerun.md |
| SC01_animation | 2 | APPROVED | animation-director | 06_direction/SC01_animation.md |
| SC01_camera | 2 | APPROVED | cinematographer | 07_camera/SC01_camera.md |
| SC01_direction | 2 | APPROVED | film-director | 06_direction/SC01_direction.md |
| SC02_animation | 2 | APPROVED | animation-director | 06_direction/SC02_animation.md |
| SC02_camera | 2 | APPROVED | cinematographer | 07_camera/SC02_camera.md |
| SC02_direction | 2 | APPROVED | film-director | 06_direction/SC02_direction.md |
| SC03_animation | 2 | APPROVED | animation-director | 06_direction/SC03_animation.md |
| SC03_camera | 2 | APPROVED | cinematographer | 07_camera/SC03_camera.md |
| SC03_direction | 2 | APPROVED | film-director | 06_direction/SC03_direction.md |
| SC04_animation | 2 | APPROVED | animation-director | 06_direction/SC04_animation.md |
| SC04_camera | 2 | APPROVED | cinematographer | 07_camera/SC04_camera.md |
| SC04_direction | 2 | APPROVED | film-director | 06_direction/SC04_direction.md |
| SC05_animation | 3 | APPROVED | animation-director | 06_direction/SC05_animation.md |
| SC05_camera | 2 | APPROVED | cinematographer | 07_camera/SC05_camera.md |
| SC05_direction | 2 | APPROVED | film-director | 06_direction/SC05_direction.md |
| SHOTS-SC01 | 2 | APPROVED | production-manager | 08_master/shots/SC01.md |
| SHOTS-SC02 | 2 | APPROVED | production-manager | 08_master/shots/SC02.md |
| SHOTS-SC03 | 2 | APPROVED | production-manager | 08_master/shots/SC03.md |
| SHOTS-SC04 | 2 | APPROVED | production-manager | 08_master/shots/SC04.md |
| SHOTS-SC05 | 2 | APPROVED | production-manager | 08_master/shots/SC05.md |
| brief | 2 | APPROVED | production-manager | 00_brief.md |
| concepts | 1 | APPROVED | story-writer | 01_story/concepts.md |
| continuity | 3 | APPROVED | script-supervisor | 07_camera/continuity.md |
| generation_plan | 2 | APPROVED | production-manager | 08_master/generation_plan.md |
| lineup | 1 | APPROVED | character-designer | 03_characters/lineup.md |
| production-log | 2 | APPROVED | production-manager | PRODUCTION_LOG.md |
| props | 2 | APPROVED | production-designer | 04_world/props.md |
| screenplay | 1 | LOCKED | screenwriter | 02_screenplay/scene_index.md |
| story | 1 | APPROVED | story-writer | 01_story/story.md |
| storyboard | 3 | APPROVED | storyboard-artist | 09_storyboard/storyboard.md |
| style_bible | 1 | APPROVED | visual-style-designer | 05_look/style_bible.md |


Validator: **0 error(s), 2 warning(s)**. Scenes: 5. Shots: 25. Planned runtime: 42.0 s.


## 1. Project specs

Source: `00_brief.md`

### Brief: Frog Ferry (working title)

#### Request
"A 40-second 2D cel-animated comedy for kids. A tiny origami frog sails a paper boat across a rain puddle to deliver a dandelion seed to a snail, and a raindrop keeps sinking her boat. 16:9, 24 fps. Video tool: Kling (I haven't confirmed its features), stills: Midjourney V7. No generation budget. Run in autonomous mode from the story all the way to the storyboard (stage 8), including animation direction, then an independent quality-control preflight."

#### Specs
| Spec | Value | Source |
|---|---|---|
| Format | short animated film | user |
| Target runtime | 40 s | user |
| Aspect ratio | 16:9 | user |
| Frame rate | 24 fps | user |
| Visual medium | 2D cel animation | user |
| Audience and rating | children, ages 3-7, G | ASSUMPTION |
| Genre and tone | slapstick comedy, warm, gentle | user (comedy, kids) + ASSUMPTION on tone |
| Dialogue language(s) | none (pantomime, vocal squeaks/sound only); English if any | ASSUMPTION |
| Image tool(s) | Midjourney V7 | user |
| Video tool(s) | Kling 2.1: image-to-video, first-last-frame (start + end frame), clip length 5 s or 10 s, up to 3 reference images. Native audio, native fps and resolution not stated (not relied on) | user (2026-10-19, brief@2) |
| Audio tool(s) | not specified | ASSUMPTION: decided at stage 10 |
| Budget or credit limit | none: no paid generation | user |
| Deadline | none given | ASSUMPTION |
| Run mode | autonomous, stages 1-8, then independent QC preflight | user |

#### Must keep
Origami frog (tiny, she/her), paper boat, rain puddle, dandelion seed delivered to a snail, a raindrop that keeps sinking the boat.

#### Must avoid
Real people, brands, copyrighted characters. Nothing scary for ages 3-7.

#### References supplied
None.

#### Open questions
- RESOLVED (brief@2): Kling 2.1 supports image-to-video and first-last-frame, 5 s or 10 s clips, up to 3 reference images. Still unstated: native audio, output fps/resolution, tier/credits (not relied on).
- OPEN-QUESTION: Confirm no-dialogue approach (ASSUMPTION).


## 2. Story

Source: `01_story/story.md`

### Story: Frog Ferry

#### Logline
Pip, a tiny origami frog, sails a paper boat across a rain puddle to give a dandelion seed to a lonely snail, but a raindrop keeps sinking her until she turns the seed's fluff into a shield.

#### Premise and theme
- Premise: Pip must cross a puddle to bring a dandelion seed to Mo the snail, who waits beside a patch of bare soil. Rain keeps dropping on her boat in the same spot.
- Theme (as an argument): Keep folding yourself back together and a small gift will arrive; the thing in your way may end up helping.
- Tone and genre: gentle slapstick, warm, no peril beyond getting wet.
- World rules: toy-scale world. Paper characters survive soaking (they go limp and refold). Nobody speaks; sounds are squeaks, plinks, paper crinkles. The dandelion seed is about as big as Pip: a stem with a round feathery fluff (pappus) that can open like a parasol.

#### Characters
| ID (proposed) | Name | Role | Want | Need | Flaw/wound | Lie they believe | Visible trait | Voice (5 words) | Arc from → to |
|---|---|---|---|---|---|---|---|---|---|
| CH-PIP | Pip | protagonist, origami frog | deliver the seed dry | to try a new way instead of the same fix | stubborn: refolds the same boat each time | "If I just refold fast enough, it will hold" | folds her soggy boat back with quick paper creases; wears a determined squint | tiny squeaks, no words | stubbornly repeating → inventive |
| CH-MO | Mo | snail, receiver | a seed to plant in her bare soil patch | to be visited | shy, slow | none | feelers droop when alone and perk up with company | slow soft hum | waiting alone → planting with a friend |
| CH-DROP | the raindrop | opposing force | nothing: it is rain, it falls in the same spot | n/a | n/a | n/a | glossy teardrop with a white highlight, falls with a "plip"; faceless | plip | nuisance → helper (flat) |

Opposing force: the raindrop, a faceless drop of rain that falls on the boat each time. It is not malicious: it is rain.

#### Structure
Chosen structure: five-beat short with a comic rule of three (two sinkings, then the answer) because 40 s needs a repeated gag that escalates, then a smart reversal.

#### Beat outline
| Beat | What happens (who does what) | Connector to next | Value before → after | Audience feels | Est. s |
|---|---|---|---|---|---|
| B1 | Pip, on the near shore, holds the seed and eyes Mo, who waits on the far shore beside a bare soil patch with drooping feelers. Pip drops her folded boat into the puddle, hops in, and paddles. | therefore | hopeful, not started → under way | cozy, charmed | 6 |
| B2 | Mid-puddle, a raindrop plips onto the boat's middle; the boat folds flat and sinks. Pip bobs up soggy, holding the seed high and dry, and in a few quick creases refolds the boat. | but | on course → sunk, then restored | giggle | 7 |
| B3 | She paddles on; ripple rings widen at her bow; a second drop hits the same spot; sinks faster. She refolds in a flash, now lopsided, and a third shadow appears above. | therefore | confident → worried | anticipation | 6 |
| B4 | Pip looks up, squints, and pops the seed's fluff open like a parasol over the boat. The third drop lands on the fluff, bounces off, and the bounce-splash pushes the boat on in a spin. | therefore | beaten → cleverly protected | delight | 9 |
| B5 | The boat glides ashore. Pip hands the seed to Mo, who sets it in the bare soil patch. A last drop falls on the planted seed and a green sprout pops up. Pip and Mo look at the sprout, then up at the drop's cloud and Pip gives a small wave. | — | undelivered, alone → delivered, together | warm, smiling | 12 |

#### Setups and payoffs
| Setup (beat) | Payoff (beat) |
|---|---|
| Fluff on the seed shown open at the top, held under Pip's arm (B1) | Fluff used as a parasol (B4) |
| Raindrop falls in the same spot, ripples ring first (B2) | Third drop bounces off fluff and propels the boat (B4) |
| Mo's bare soil patch and drooping feelers (B1) | Seed planted, feelers perk up, sprout (B5) |
| Pip refolds the boat with quick creases (B2, B3) | Boat, now creased and crooked, still floats ashore (B5) |
| Drop falls from above (B2-B4) | Last drop waters the seed (B5) |

#### Twist (if any)
- Hidden fact: the raindrop that sank the boat is the one that makes the seed grow.
- Clues: B2-B3 the drop always lands on the boat; B1 Mo's soil patch is dry and cracked.
- What it recontextualizes: the nuisance was always rain that the seed needs.
- What the protagonist does because of it: waves to the cloud.

#### Ending
- Decisive choice: Pip stops refolding and opens the seed fluff as a parasol (B4).
- Final image: Pip and Mo side by side on the shore with a tiny sprout between them in the rain; mirrors the opening of Pip alone on the shore holding the seed.

#### Runtime plan
6 + 7 + 6 + 9 + 12 = 40 s vs target 40 s.

#### Producibility notes
3 characters (raindrop is a simple shape), 1 location (puddle with near and far shore). No text. Risky: paper folding gag (give it a smear-and-pop cartoon treatment, not literal folds), the water bounce, the seed fluff shape, and the sprout pop. Each gag should be a 2-5 s clip. The snail and frog should share a frame only in B5. Rain must be sparse so there are no extra drops.

#### Rubric
| Hook | Stakes | Causality | Agency | Emotional turn | Twist fairness | Payoff | Originality | Producibility |
|---|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 5 | 4 | 4 | 5 | 4 | 5 |

#### Handoff
- Produced: story@1 (REVIEW)
- Built from: brief@1, concepts@1
- Open items: ASSUMPTION: names Pip and Mo are working names
- Conflicts: none
- Next: screenwriter (after approval); designers: Pip trait = refolding creases and squint; Mo trait = drooping feelers; drop = faceless glossy teardrop; location = puddle with near shore (leaf, pebble) and far shore (soil patch)


## 3. Screenplay

Screenplay version: **1 (LOCKED)**, file `02_screenplay/scene_index.md`.


| Scene | Heading | Purpose | Value change | Est. s |
|---|---|---|---|---|
| SC01 | EXT. PUDDLE - NEAR SHORE - DAY | Establishes want, geography and the seed. | not started -> under way | 6 |
| SC02 | EXT. PUDDLE - MID-WATER - DAY | First gag; sets the rule that the drop always lands on the boat. | on course -> sunk, then restored | 7 |
| SC03 | EXT. PUDDLE - MID-WATER - DAY | Escalates the gag and the worry. | confident -> worried | 6 |
| SC04 | EXT. PUDDLE - MID-WATER - DAY | Climax: Pip's decisive new idea. | beaten -> cleverly protected | 9 |
| SC05 | EXT. PUDDLE - FAR SHORE - DAY | Delivery, payoff of the drop turning helpful, and the closing image. | undelivered, alone -> delivered, together | 12 |


### 3.1 Full screenplay text

Source: `02_screenplay/screenplay.fountain`

```fountain
Title: Frog Ferry
Credit: Written by
Author: film-crew screenwriter
Draft date: 2026-10-19

= A tiny origami frog ferries a dandelion seed across a puddle to a snail while a raindrop keeps sinking her boat. No dialogue.

EXT. PUDDLE - NEAR SHORE - DAY #1#

Soft rain, a few drops at a time. A big grey puddle fills the frame. On its near shore, a wet green leaf and a pebble.

PIP, a thumb-sized origami frog folded from yellow paper, stands at the water's edge. A dandelion seed as tall as she is rests under her arm: a thin stem topped with a round ball of white fluff.

Across the puddle on the far shore, MO, a small snail with a swirled shell, sits beside a patch of bare dark soil. Her feelers droop.

Pip sees her. Her eyes brighten. She sets a paper boat on the water, hops in with the seed, and starts to paddle with a folded paper oar.

EXT. PUDDLE - MID-WATER - DAY #2#

The boat glides along. Ripple rings spread on the water in front of the bow.

A glossy RAINDROP falls and lands exactly on the middle of the boat. PLIP. The boat folds flat and sinks with a bloop.

Pip bobs up soggy and limp, the seed held high and dry above her head. She shakes herself, climbs onto the floating flat paper, and makes quick creases. The boat pops back into shape. She salutes the sky and paddles on.

EXT. PUDDLE - MID-WATER - DAY #3#

Ripple rings widen at the bow again. Pip glances up, relaxed.

A second drop lands on the same spot. PLIP. The boat sinks faster. Pip surfaces, scowls, and refolds in a flash. The new boat comes out lopsided and creased.

A small round shadow grows on the water beside her. Pip's ears go flat.

EXT. PUDDLE - MID-WATER - DAY #4#

Pip looks up. A third drop hangs high above, small and bright, getting bigger.

Pip squints. She holds the seed over her head and pops its fluff open like a parasol.

The drop lands on the fluff and bounces off, then bounces again, and goes splash into the water beside the boat. The splash wave spins the lopsided boat around once and sends it speeding forward. Pip holds the seed up, grinning.

EXT. PUDDLE - FAR SHORE - DAY #5#

The boat slides up onto the far shore and stops with a soft bump. Mo's feelers lift.

Pip steps out and offers the seed. Mo takes it in her feelers, tips her head, and plants its stem in the bare soil. The fluff folds shut.

One last drop falls from above and lands on the soil. PLIP. A green sprout pops up with a boing.

Mo's feelers wave. Pip and Mo look at the sprout, then up at the sky. Pip gives the sky a small wave.

FADE OUT.
```


## 4. Registries
### 4.1 Characters

| ID | Name | Role | Age | Height cm | Identity lock |
|---|---|---|---|---|---|
| CH-DROP | Plip | opposing force, faceless prop-character | not applicable | 2.5 | A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface. |
| CH-MO | Mo | receiver, snail | child-like | 4 | A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. |
| CH-PIP | Pip | protagonist, origami frog | ageless paper toy (child-like) | 4 | A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. |


### 4.2 Costumes

| ID | Character | Name | Lock |
|---|---|---|---|
| CO-DROP-01 | CH-DROP | Water finish | Glossy bright aqua water finish with a single curved white highlight, a thin darker aqua rim, flat cel color with one hard shadow tone and a thin dark-teal outline. |
| CO-MO-01 | CH-MO | Coral spiral shell | Large round spiral shell in soft coral #F2866B with one darker coral swirl line, flat cel color with a single hard shadow tone and a white highlight dot, thin dark-teal outline. |
| CO-PIP-01 | CH-PIP | Yellow paper fold | Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. |


### 4.3 Locations

| ID | Name | INT/EXT | Lock |
|---|---|---|---|
| LOC-PUDDLE | The rain puddle | EXT | A wide flat puddle of calm pale grey-blue water with soft concentric ripple rings, a glossy green leaf and a round grey pebble on the left bank, a patch of bare dark brown soil with a clump of tall grass blades on the right bank, painted watercolor background wash. |


### 4.4 Props

| ID | Name | States | Lock |
|---|---|---|---|
| PR-BOAT | Paper boat | PR-BOAT:NEW, PR-BOAT:FLAT, PR-BOAT:REFOLDED, PR-BOAT:CREASED | A small folded paper boat in matte cream paper with a flat bottom, two pointed ends, straight side walls and crisp crease lines, flat cel color with one darker cream shade tone and a thin dark-teal outline. |
| PR-OAR | Folded paper oar | PR-OAR:HELD, PR-OAR:STOWED | A small oar folded from a strip of bright yellow paper with a thin straight handle and a flat rectangular blade, crisp crease line down the middle, flat cel color with a thin dark-teal outline. |
| PR-SEED | Dandelion seed | PR-SEED:CLOSED, PR-SEED:OPEN, PR-SEED:PLANTED | A single dandelion seed with a thin pale sage-green stem, a small brown pointed seed at the bottom and a round soft feathery white fluff at the top made of fine radiating filaments, flat cel color with a thin dark-teal outline. |
| PR-SPROUT | Green sprout | PR-SPROUT:HIDDEN, PR-SPROUT:SPROUT | A tiny bright leaf-green sprout with a short thin stem and two round smooth leaves, flat cel color with one darker green shade tone and a thin dark-teal outline. |


### 4.5 Style

**Style lock:** Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.

**Aspect ratio:** 16:9


### 4.6 Full design documents


Source: `03_characters/CH-DROP.md`

#### CH-DROP — the raindrop

##### Evidence from the script
| Scene | What they do | Costume/state needs |
|---|---|---|
| SC02 | falls and lands on the boat | FALLING |
| SC03 | falls again, same spot | FALLING |
| SC04 | falls, bounces off the fluff twice, splashes | FALLING, BOUNCING |
| SC05 | last drop lands on the soil | FALLING |

##### Design rationale
- Role and personality: not malicious, a faceless force of nature played for comedy through timing; it is bigger and brighter than the ordinary rain.
- Shape language: classic teardrop, round bottom and pointed top.
- Silhouette: teardrop; stretches long when falling and squashes round when it lands.
- Color anchor: raindrop aqua #5FD0E8, shared with no one.
- Proportions: about as big as Pip's head (2.5 cm).

```yaml
record: character
id: CH-DROP
name: Plip
role: opposing force, faceless prop-character
age: "not applicable"
height_cm: 2.5
build: "teardrop shape, round bottom, pointed top, bouncy"
identity_lock: >-
  A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface.
short_lock: "one bright aqua glossy teardrop with a white highlight, plain and smooth"
face: "none; a plain smooth surface"
hair: "none"
skin: "glossy aqua water #5FD0E8, rim #3FB1CC"
eyes: "none"
silhouette: "teardrop, round bottom, pointed top"
distinguishing_features: ["white curved highlight upper left", "stretches when falling and squashes when landing"]
default_costume: CO-DROP-01
costumes: [CO-DROP-01]
expression_range: ["none: body language only (stretch, squash, bounce)"]
invariants: ["bright aqua", "teardrop", "white highlight", "no face"]
allowed_variation: ["stretched tall when falling", "squashed flat when landing", "splash crown on impact"]
reference_images: []
```

```yaml
record: costume
id: CO-DROP-01
character: CH-DROP
name: Water finish
garments: ["none: the drop is its own body"]
materials: ["glossy water"]
colors: ["#5FD0E8 aqua", "#3FB1CC rim", "#FDFCF7 highlight"]
accessories: []
condition_states:
  - {id: FALLING, description: "stretched teardrop", from: SC02}
  - {id: SPLASH, description: "squashed with a crown of smaller droplets", from: SC02}
scenes: [SC02, SC03, SC04, SC05]
identity_lock: >-
  Glossy bright aqua water finish with a single curved white highlight, a thin darker aqua rim, flat cel color with one hard shadow tone and a thin dark-teal outline.
short_lock: "glossy bright aqua water finish with one curved white highlight and a thin darker rim"
```

##### Sheets
| Sheet | Status | Notes |
|---|---|---|
| Pose | spec only | falling, landing squash, bounce, splash |

##### Handoff
- Produced: CH-DROP@1, CO-DROP-01 (REVIEW)
- Open items: ASSUMPTION: the drop has no face
- Next: animation-director (squash and stretch)


Source: `03_characters/CH-MO.md`

#### CH-MO — Mo, the snail

##### Evidence from the script
| Scene | What they do | Costume/state needs |
|---|---|---|
| SC01 | sits by bare soil, feelers droop (seen far away, small) | DROOP |
| SC05 | feelers lift, takes the seed, plants it, feelers wave | PERK |

##### Design rationale
- Role and personality: shy, gentle, slow; feelers show mood (droop alone, perk with company).
- Shape language: circles and soft curves; round shell, round body.
- Silhouette: big round shell on a low oval body with two thin feelers.
- Color anchor: shell coral #F2866B, shared with no one.
- Proportions: shell as tall as the body is long; height 4 cm (toy scale), about 2 heads tall.

```yaml
record: character
id: CH-MO
name: Mo
role: receiver, snail
age: "child-like"
height_cm: 4
build: "low soft oval body with a large round shell on its back"
identity_lock: >-
  A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline.
short_lock: "small tan snail with a big round soft-coral spiral shell and two thin feelers with round dot eyes"
face: "tiny curved smile under the feeler base, round cheeks"
hair: "none"
skin: "smooth warm tan #D9B88F with slightly lighter belly"
eyes: "two small round black dots at the tips of the feelers"
silhouette: "big round shell on a low oval body with two thin upright feelers"
distinguishing_features: ["soft-coral spiral shell", "feelers that droop or lift to show mood"]
default_costume: CO-MO-01
costumes: [CO-MO-01]
expression_range: ["drooping lonely", "feelers perking up", "happy wave", "curious head tilt"]
invariants: ["coral shell with spiral", "tan body", "two feelers with dot eyes"]
allowed_variation: ["feelers droopy or upright", "head tilt"]
reference_images: []
```

```yaml
record: costume
id: CO-MO-01
character: CH-MO
name: Coral spiral shell
garments: ["spiral shell worn on the back"]
materials: ["smooth glossy painted shell"]
colors: ["#F2866B coral", "#D96A4F darker swirl"]
accessories: []
condition_states:
  - {id: DRY, description: "plain coral shell, slightly damp shine from rain", from: SC01}
scenes: [SC01, SC05]
identity_lock: >-
  Large round spiral shell in soft coral #F2866B with one darker coral swirl line, flat cel color with a single hard shadow tone and a white highlight dot, thin dark-teal outline.
short_lock: "big round soft-coral spiral shell with one darker coral swirl line and a white highlight dot"
```

##### Sheets
| Sheet | Status | Notes |
|---|---|---|
| Turnaround | spec only | MJ V7 |
| Expression | spec only | 4 expressions |

```yaml
sheet_brief:
  id: SHEET-CH-MO-TURN
  subject: CH-MO
  layout: "character turnaround on plain pale grey-blue background, front, three-quarter, side, three-quarter back, back"
  paste: [CH-MO identity_lock, CO-MO-01 identity_lock, STYLE style_lock]
```

##### Reference image review log
| Image | Verdict | Notes |
|---|---|---|
| none yet | n/a | no generation budget |

##### Handoff
- Produced: CH-MO@1, CO-MO-01 (REVIEW)
- Built from: screenplay@1, style_bible@1
- Open items: none
- Next: production-designer


Source: `03_characters/CH-PIP.md`

#### CH-PIP — Pip, the origami frog

##### Evidence from the script
| Scene | What they do | Costume/state needs |
|---|---|---|
| SC01 | stands at the shore with the seed, sees Mo, launches the boat, hops in, paddles | DRY |
| SC02 | boat sinks; she surfaces soggy and limp, holding the seed high; refolds the boat; salutes | SOGGY (limp, darker yellow) then DRY-ish |
| SC03 | second sinking, scowls, refolds, ears flatten | SOGGY then CREASED (extra wrinkles) |
| SC04 | squints up, pops the fluff open over her head | CREASED, slightly damp |
| SC05 | steps out, hands the seed to Mo, looks up, waves | CREASED, drying |

##### Design rationale
- Role and personality: determined little helper; stubborn; the quick creases of her refolding are her visible trait.
- Shape language: triangles and clean folds (a paper frog), friendly because the head is wide and the eyes are big and round.
- Silhouette: wide triangular head, crouched wedge body, two long Z-folded back legs; reads clearly in solid black.
- Color anchor: paper yellow #FFC93C, reserved and used by no one else; the puddle is grey-blue so she pops.
- Proportions: about 1.5 heads tall (head very wide, body short). Height 4 cm (toy scale).

```yaml
record: character
id: CH-PIP
name: Pip
role: protagonist, origami frog
age: "ageless paper toy (child-like)"
height_cm: 4
build: "flat folded-paper wedge body, wide triangular head, long Z-folded back legs"
identity_lock: >-
  A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline.
short_lock: "tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs"
face: "flat triangular paper head; two large round black bead eyes on top; thin curved smile; tiny dot nostrils; two small pointed paper corners at the back of the head serve as ears (they flatten when worried)"
hair: "none"
skin: "bright yellow paper #FFC93C with darker golden folds #E0A81F; soggy state is dull mustard #C9962A"
eyes: "two large round glossy black circles with one small white highlight each"
silhouette: "wide triangle head, crouched wedge body, two bent Z-shaped back legs"
distinguishing_features: ["crisp visible crease lines across body and legs", "fold-lines get more numerous as the story goes on (creased state)"]
default_costume: CO-PIP-01
costumes: [CO-PIP-01]
expression_range: ["determined squint", "bright-eyed hope", "smug salute", "soggy scowl", "flat worried ears", "grin", "delight"]
invariants: ["yellow paper #FFC93C", "triangular head", "two large round black eyes", "Z-folded back legs"]
allowed_variation: ["limp and darker when soggy", "extra crease lines after refolding", "eye squint shape"]
reference_images: []
```

```yaml
record: costume
id: CO-PIP-01
character: CH-PIP
name: Yellow paper fold
garments: ["bare folded-paper body, no clothing"]
materials: ["matte yellow origami paper"]
colors: ["#FFC93C yellow", "#E0A81F golden shade", "#C9962A soggy mustard"]
accessories: ["none: the oar is the prop PR-OAR"]
condition_states:
  - {id: DRY, description: "stiff, bright yellow, crisp creases", from: SC01}
  - {id: SOGGY, description: "limp, dull mustard, droopy limbs, beads of water", from: SC02}
  - {id: CREASED, description: "bright again but with extra wrinkles and a slightly crooked left ear/leg fold", from: SC03}
scenes: [SC01, SC02, SC03, SC04, SC05]
identity_lock: >-
  Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners.
short_lock: "matte bright yellow origami paper with crisp creases and a darker golden belly fold"
```

##### Sheets
| Sheet | Status | Notes |
|---|---|---|
| Turnaround | spec only | MJ V7, 5 views |
| Expression | spec only | 7 expressions above |
| Pose | spec only | squint-up, parasol hold, refold crouch, salute |

```yaml
sheet_brief:
  id: SHEET-CH-PIP-TURN
  subject: CH-PIP
  layout: "character turnaround on a plain pale grey-blue background, front, three-quarter front, side, three-quarter back, back, one row, same scale, even spacing"
  paste: [CH-PIP identity_lock, CO-PIP-01 identity_lock, STYLE style_lock]
  tool_notes: "Midjourney V7: --ar 16:9; ask for a flat even pose, one row of 5 views; --no clutter is not needed since lock is positive"
```

```yaml
sheet_brief:
  id: SHEET-CH-PIP-EXPR
  subject: CH-PIP
  layout: "2 rows of 4 head-and-shoulder expressions on plain background"
  expressions: ["determined squint", "bright-eyed hope", "smug salute", "soggy scowl", "flat worried ears", "grin", "delight"]
  paste: [CH-PIP identity_lock, CO-PIP-01 identity_lock, STYLE style_lock]
```

##### Reference image review log
| Image | Verdict | Notes |
|---|---|---|
| none yet | n/a | no generation budget |

##### Handoff
- Produced: CH-PIP@2, CO-PIP-01 (REVIEW)
- Built from: screenplay@1, style_bible@1
- Open items: ASSUMPTION: Pip has no clothes; her "costume" is the paper itself. Soggy and creased states drive continuity.
- Next: script-supervisor (states), animation-director (1.5 heads proportions)


Source: `03_characters/lineup.md`

#### Lineup
Scale: Pip 4 cm, Mo 4 cm, drop 2.5 cm. Silhouettes: Pip = wide triangle plus Z legs, Mo = big round shell, drop = teardrop. Anchors: yellow / coral / aqua, all distinct. Pip and Mo share a frame only in SC05.


Source: `04_world/LOC-PUDDLE.md`

#### LOC-PUDDLE — the rain puddle

Scenes: SC01, SC02, SC03, SC04, SC05 · Story function: the obstacle to cross (threshold) · Emotion: a cozy, small, wet adventure

##### Design rationale
Everything is toy-scale: the puddle is a wide pond to a 4 cm frog. One open, flat expanse of water keeps staging simple for 2D and for AI video. Near shore on screen left, far shore on screen right, always, so travel reads as left to right. Sparse rain keeps the background quiet.

```yaml
record: location
id: LOC-PUDDLE
name: The rain puddle
int_ext: EXT
description: "A wide shallow grey-blue puddle on bare ground. Near shore (screen left): a wet green leaf and a small grey pebble. Mid-water: open water with soft ripple rings. Far shore (screen right): a patch of bare dark soil with a few grass blades behind it."
layout: "see floor plan; travel direction is screen left to screen right"
landmarks: ["L1 wet green leaf, near shore, left", "L2 round grey pebble beside the leaf", "L3 patch of bare dark soil, far shore, right", "L4 clump of tall grass blades behind the soil"]
light_sources: ["soft diffuse overcast sky overhead", "SC05 only: a pale warm glow where clouds thin, upper right"]
palette: ["puddle grey-blue #9DB8C9", "wet slate #6E8797", "leaf green #7DBB5A", "soil brown #6B4A3A"]
set_dressing: ["ripple rings on the water surface", "a few small floating rain dimples", "tiny wet pebbles at the near edge", "grass blades behind the far soil"]
identity_lock: >-
  A wide flat puddle of calm pale grey-blue water with soft concentric ripple rings, a glossy green leaf and a round grey pebble on the left bank, a patch of bare dark brown soil with a clump of tall grass blades on the right bank, painted watercolor background wash.
short_lock: "wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right"
variants:
  - {time_of_day: morning, weather: "light rain", notes: "SC01-SC04: overcast grey-blue"}
  - {time_of_day: morning, weather: "thinning rain with a pale warm glow", notes: "SC05: brighter and warmer, soil darker where wet"}
reference_images: []
```

##### Floor plan
```
  NEAR SHORE (screen LEFT)        MID-WATER (open)           FAR SHORE (screen RIGHT)
  [L2 pebble][L1 leaf]  ~~~ ripple rings ~~~~ boat path ->    [L3 soil patch]
                                                              [L4 grass blades behind]
  Camera side: viewer looks across the puddle from the south; sky above, north edge of the puddle is the background.
```

##### Set dressing by zone
| Zone | Items | Story it tells | Continuity anchor? |
|---|---|---|---|
| Near shore | leaf, pebble | Pip's launch point | yes: leaf left, pebble right of leaf |
| Mid-water | ripple rings | the drop always lands near the bow | no |
| Far shore | bare soil patch, grass | Mo's empty garden spot | yes: soil patch is where the sprout appears |

##### Plate specifications
| Plate | Camera position on plan | Height | Lens type | Time/weather | Brief |
|---|---|---|---|---|---|
| P1 wide | south bank, centered | water level, slightly above | flat side-on | morning light rain | whole puddle, both shores, empty |
| P2 far shore | south bank, right | water level | flat | morning, rain thins | soil patch and grass, empty |

##### Handoff
- Produced: LOC-PUDDLE@1 (REVIEW)
- Next: film-director (blocking), cinematographer (light sources)


Source: `04_world/props.md`

#### Prop Registry

##### Change note (v2, 2026-10-19)
- PR-OAR: scenes SC01-SC05 (visible, STOWED, in SC04-SC05); HELD = Pip's right hand, or resting across her lap / on the boat floor within reach when the hand is needed (floats on the surface during the two sinkings); STOWED from SC04-SH030 (laid on the boat floor on screen in the first frames of the shot). Closes CR-ISSUE-09. No identity_lock or short_lock text changed.

| ID | Name | Owner | Scenes | Hero? | States |
|---|---|---|---|---|---|
| PR-BOAT | Paper boat | CH-PIP | SC01-SC05 | yes | NEW, FLAT, REFOLDED, CREASED |
| PR-SEED | Dandelion seed | CH-PIP | SC01-SC05 | yes | CLOSED, OPEN, PLANTED |
| PR-OAR | Folded paper oar | CH-PIP | SC01-SC05 | no | HELD, STOWED |
| PR-SPROUT | Green sprout | CH-MO | SC05 | no | HIDDEN, SPROUT |

```yaml
record: prop
id: PR-BOAT
name: Paper boat
description: "A simple folded paper boat with a flat bottom, two pointed ends and a straight side wall, large enough for Pip to sit in."
size: "5 x 3 x 2 cm"
materials: ["matte cream origami paper"]
colors: ["#F4EBD8 cream", "#D9CDB4 fold shade", "#B7C2C9 damp grey when wet"]
owner: CH-PIP
scenes: [SC01, SC02, SC03, SC04, SC05]
states:
  - {id: PR-BOAT:NEW, description: "crisp, symmetrical, cream, dry", from: SC01, cause: "start"}
  - {id: PR-BOAT:FLAT, description: "folded flat and sunk just under the surface, soggy", from: SC02, cause: "raindrop hit"}
  - {id: PR-BOAT:REFOLDED, description: "popped back into shape, slightly damp, grey-cream", from: SC02, cause: "Pip refolds it"}
  - {id: PR-BOAT:CREASED, description: "lopsided, one side wall lower, extra crease lines, damp grey-cream", from: SC03, cause: "second refold done in a flash"}
identity_lock: >-
  A small folded paper boat in matte cream paper with a flat bottom, two pointed ends, straight side walls and crisp crease lines, flat cel color with one darker cream shade tone and a thin dark-teal outline.
short_lock: "small cream folded paper boat with pointed ends and crisp creases"
reference_images: []
```

```yaml
record: prop
id: PR-SEED
name: Dandelion seed
description: "A single dandelion seed as tall as Pip: a thin pale stem with a small pointed seed at the bottom and a round feathery white fluff at the top. The fluff can fold shut into a ball or open out like a parasol."
size: "stem 4 cm, fluff 2.5 cm across"
materials: ["fine feathery filaments", "thin stem"]
colors: ["#FDFCF7 fluff white", "#B7C48A stem sage", "#8A7A5A seed brown"]
owner: CH-PIP
scenes: [SC01, SC02, SC03, SC04, SC05]
states:
  - {id: PR-SEED:CLOSED, description: "fluff a round soft ball on top of the stem, held under Pip's arm", from: SC01, cause: "start"}
  - {id: PR-SEED:OPEN, description: "fluff spread wide like a parasol, held overhead", from: SC04, cause: "Pip pops it open"}
  - {id: PR-SEED:PLANTED, description: "seed end in the soil, fluff folded shut", from: SC05, cause: "Mo plants it"}
identity_lock: >-
  A single dandelion seed with a thin pale sage-green stem, a small brown pointed seed at the bottom and a round soft feathery white fluff at the top made of fine radiating filaments, flat cel color with a thin dark-teal outline.
short_lock: "thin sage stem topped with a round feathery white dandelion fluff"
reference_images: []
```

```yaml
record: prop
id: PR-OAR
name: Folded paper oar
description: "A small oar folded from a strip of yellow paper: a thin handle and a flat rectangular blade."
size: "3 x 0.5 cm"
materials: ["yellow origami paper"]
colors: ["#FFC93C yellow", "#E0A81F shade"]
owner: CH-PIP
scenes: [SC01, SC02, SC03, SC04, SC05]
states:
  - {id: PR-OAR:HELD, description: "in Pip's right hand, or resting across her lap / on the boat floor within reach when the hand is needed; floats on the surface while the boat is sunk", from: SC01, cause: "start"}
  - {id: PR-OAR:STOWED, description: "lying across the boat floor, not in her keeping (laid there on screen by her right hand at the start of SC04-SH030)", from: SC04-SH030, cause: "Pip needs both hands for the seed"}
identity_lock: >-
  A small oar folded from a strip of bright yellow paper with a thin straight handle and a flat rectangular blade, crisp crease line down the middle, flat cel color with a thin dark-teal outline.
short_lock: "small bright yellow folded paper oar with a thin handle and a flat blade"
reference_images: []
```

```yaml
record: prop
id: PR-SPROUT
name: Green sprout
description: "A tiny sprout with a short stem and two round leaves that pops out of the soil."
size: "1.5 cm tall"
materials: ["soft plant"]
colors: ["#7DBB5A leaf green", "#5E9A3E shade"]
owner: CH-MO
scenes: [SC05]
states:
  - {id: PR-SPROUT:HIDDEN, description: "not yet visible", from: SC05, cause: "start"}
  - {id: PR-SPROUT:SPROUT, description: "two round leaves on a short stem, standing in the soil next to the planted stem", from: SC05, cause: "the last raindrop"}
identity_lock: >-
  A tiny bright leaf-green sprout with a short thin stem and two round smooth leaves, flat cel color with one darker green shade tone and a thin dark-teal outline.
short_lock: "tiny bright leaf-green sprout with a short stem and two round leaves"
reference_images: []
```

##### Prop sheet briefs
- PR-BOAT: neutral pale background, 3/4 view per state, scale mark.
- PR-SEED: front view closed and open.

##### Handoff
- Produced: LOC-PUDDLE@1, props@2 (APPROVED; v2 = PR-OAR scenes/state wording only)
- For script-supervisor: PR-BOAT NEW, FLAT, REFOLDED, CREASED; PR-SEED CLOSED, OPEN, PLANTED; PR-OAR HELD, STOWED; PR-SPROUT HIDDEN, SPROUT
- ASSUMPTION: oar is stowed from SC04-SH030, on screen (Pip needs both hands for the seed); boat color cream to stay distinct from Pip's yellow
- Next: film-director


Source: `05_look/style_bible.md`

#### Style Bible: Frog Ferry

##### Look statement
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

##### Color script
| Scene | Beat | Dominant | Accent | Warm/cool | Saturation | Key | Change vs previous |
|---|---|---|---|---|---|---|---|
| SC01 | hopeful start | puddle grey-blue #9DB8C9 | paper yellow, shell coral | cool with warm accents | medium | medium-soft | baseline |
| SC02 | first splash gag | grey-blue, a little brighter | paper yellow, raindrop aqua | cool | medium | medium | drop aqua enters |
| SC03 | worry | wet slate #6E8797 | paper yellow | coolest | lower | slightly darker | cloud shadow moves in, darker slate |
| SC04 | clever answer | grey-blue, a patch of lighter sky | fluff white, paper yellow | cool, with white pop | high on the fluff | brightest so far | fluff white hero pop |
| SC05 | delivered, warm | leaf green and soil brown | shell coral, paper yellow, sprout green | warmest | highest | bright, soft pale sun glow | clouds thin, warm bounce light |

##### Texture, lens character, composition tendencies
Flat cel fills, steady line weight, faint paper grain, background washes soft and quiet. Flat side-on staging with simple foreground, midground and background layers. Characters occupy clear shapes against calm backgrounds with plenty of negative space.

##### Graphics, titles and subtitles
No on-screen text in the film. A simple end card is out of scope for this 40 s piece.

##### Grading intent per scene (for post)
| Scene | Intent |
|---|---|
| SC01 | soft cool grey, warm yellow stays pure |
| SC02 | same, aqua drop slightly lifted |
| SC03 | gently cooler and darker, saturation down 10% |
| SC04 | lift highlights so the white fluff glows |
| SC05 | warm up whites, saturation up |

##### Style frames
| ID | Scene | Moment | Status | Approved file |
|---|---|---|---|---|
| SF-01 | SC01 | Pip at the near shore with the seed, puddle and far shore behind | brief written, not generated (no budget) | none |
| SF-02 | SC05 | Pip and Mo with the sprout, warm light | brief written, not generated (no budget) | none |

##### Handoff
- Produced: style_bible@1 / STYLE (REVIEW)
- Reserved anchors: CH-PIP #FFC93C, CH-MO #F2866B, CH-DROP #5FD0E8
- Open items: ASSUMPTION: style frames not generated (no generation budget); the Midjourney V7 look test is deferred to the user
- Next: character-designer, production-designer (palette), cinematographer (lighting philosophy)


## 5. Scene breakdown

| Scene | Heading | Time | Characters | Costumes | Props (state) | Est. s | Planned s | Shots | VFX |
|---|---|---|---|---|---|---|---|---|---|
| SC01 | EXT. PUDDLE - NEAR SHORE - DAY | morning | CH-MO, CH-PIP | CO-MO-01, CO-PIP-01 | PR-BOAT:NEW, PR-OAR:HELD, PR-SEED:CLOSED | 6 | 5.5 | 3 | 0 |
| SC02 | EXT. PUDDLE - MID-WATER - DAY | morning | CH-DROP, CH-PIP | CO-DROP-01, CO-PIP-01 | PR-BOAT:FLAT, PR-BOAT:NEW, PR-BOAT:REFOLDED, PR-OAR:HELD, PR-SEED:CLOSED | 7 | 8.0 | 5 | 4 |
| SC03 | EXT. PUDDLE - MID-WATER - DAY | morning | CH-DROP, CH-PIP | CO-DROP-01, CO-PIP-01 | PR-BOAT:CREASED, PR-BOAT:FLAT, PR-BOAT:REFOLDED, PR-OAR:HELD, PR-SEED:CLOSED | 6 | 5.0 | 3 | 0 |
| SC04 | EXT. PUDDLE - MID-WATER - DAY | morning | CH-DROP, CH-PIP | CO-DROP-01, CO-PIP-01 | PR-BOAT:CREASED, PR-OAR:STOWED, PR-SEED:CLOSED, PR-SEED:OPEN | 9 | 11.5 | 7 | 2 |
| SC05 | EXT. PUDDLE - FAR SHORE - DAY | morning | CH-DROP, CH-MO, CH-PIP | CO-DROP-01, CO-MO-01, CO-PIP-01 | PR-BOAT:CREASED, PR-OAR:STOWED, PR-SEED:OPEN, PR-SEED:PLANTED, PR-SPROUT:SPROUT | 12 | 12.0 | 7 | 1 |


## 6. Scenes


### SC01 — EXT. PUDDLE - NEAR SHORE - DAY


#### Direction
Source: `06_direction/SC01_direction.md`

##### SC01 Direction — EXT. PUDDLE - NEAR SHORE - DAY

###### Must-see story facts
- Pip stands on the near shore holding the closed-fluff seed.
- Mo waits on the far shore beside the bare soil patch with drooping feelers.
- Pip sees her and brightens; Pip puts the boat on the water, boards it and paddles off.

###### Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Pip | to bring the seed to Mo | the whole puddle | she boards the boat and paddles |
| Mo | company (a seed to plant) | shyness, slowness | waits |

- Subtext: Mo is lonely; Pip is going to fix that.
- Turn: not started → under way (Pip decides and sets off).
- Audience position: same as Pip.
- Visual thesis: the world is wide and the heroes tiny: Pip on the left bank, Mo on the right bank, the whole empty puddle between them — carried by SH010.
- Genre playbook: comedy (frame the joke whole, static camera, high-key); this scene is warm setup.

###### Change note (v2, 2026-10-19; change request from production-manager)
- QC-102 review: SH020 packed set-on-water + hop in + paddle; split into SH020 (set on water, hop in) and new SH025 (paddle off). SH010 trimmed 3.0 -> 2.0 s.
- QC-108: the launch beat now appears: SH010 ends with the boat at Pip's feet, SH020 places it on the water. No story event added.
- Camera is static in all shots; IDs unchanged, SH025 is new.

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | Pip sees Mo across the puddle | Pip | action 1-4 |
| B2 | Pip launches and paddles off | Pip | action 5 (SH020 launch, SH025 paddle) |

###### Blocking
Floor plan: LOC-PUDDLE
- Start positions: Pip on the near shore left, standing beside leaf L1 and pebble L2, facing screen right, seed under her arm. Mo on the far shore right by soil patch L3, facing screen left, tiny.
- Moves: B2 Pip sets the boat on the water in front of her, hops in, sits, and paddles right.
- End positions: boat 1/4 into the puddle, moving right.
- Axis of action and camera side: the bank-to-bank line, left to right; camera stays on the south bank, side-on, for the whole film.
- Screen direction in/out: Pip and boat travel screen left → right. Exit to SC02 continues screen right.

###### Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Pip | to spot | head turns right, eyes widen, small hop |
| B1 | Mo | to wait | feelers droop, head low |
| B2 | Pip | to set off | SH020: drops boat on the water, hops in; SH025: oar dips left-right |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01-SH010 | WS | eye-level | static | Pip and Mo across the puddle | Pip, holding the seed and with the folded boat at her feet on the bank, looks across the puddle at tiny Mo; ends with Pip's eyes bright and head up | Pip lower-left third, Mo lower-right third, wide empty puddle between | flat, deep | soft overcast, light rain | 2.0 s | establish want and geography | cut |
| SC01-SH020 | WS | eye-level | static | Pip and boat | Pip sets the boat on the water and hops in; ends with Pip seated in the afloat boat at the water's edge, oar in hand | Pip left-center, water to the right | flat, deep | soft overcast | 2.0 s | the launch (boat placed, Pip boards) | cut |
| SC01-SH025 | WS | eye-level | static | Pip and boat | Pip paddles the boat away from the bank; ends with the boat 1/4 into the puddle, moving right | boat left-center, empty water to the right | flat, deep | soft overcast | 1.5 s | she sets off | cut |

Total: 5.5 s vs estimate 6 s (-8%, within +-15%). Version 2 re-cut: one primary action per shot.

###### Coverage and rhythm
Three wide static shots: a held look, the launch (boat on water, hop in), the paddle off. Each is 2.0 s or less of real motion.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH010 | Mo tiny and far | Mo uses short_lock; both are flat shapes; if Mo drifts, comp her in post |
| SH020 | placing the boat plus boarding | start frame: boat in Pip's hands at the water line; end frame: seated and afloat; FLF-suited (end state defined) |
| SH025 | paddle cycle, boat travel | start frame = SH020 end frame; one steady paddle stroke pair; end frame boat 1/4 into puddle |

###### Specialist and VFX flags
- action-director: none
- animation-director: yes (hop, boarding, paddle cycle)
- vfx: none

###### Handoff
- Produced: SC01_direction@2 (APPROVED under autonomy), 3 shots, 5.5 s
- Built from: screenplay@1, style_bible@1, LOC-PUDDLE@1, CH-PIP@2, CH-MO@1
- Open items: none
- Next: cinematographer, script-supervisor


#### Animation plan
Source: `06_direction/SC01_animation.md`

##### SC01 Animation Plan (v2)

###### Change note (v2, 2026-10-19)
- Re-split to SC01_direction@2: SH010 3.0 -> 2.0 s (48 f), SH020 3.0 -> 2.0 s (48 f, launch only), new SH025 (36 f, paddle off). Scene = 132 f = 5.5 s.
- QC-106 hand rule applied (below). Pip faces screen right in every shot, so the camera (south bank) sees her RIGHT side: the oar hand is the near hand, the seed arm is the far arm.
- QC-108: the launch is now animated: Pip slides the boat off the bank with the oar blade (oar stays in the right hand), then hops in.
- Every shot has a clear start pose and end pose and is marked for Kling 2.1 first-last-frame (FLF).

###### Hand and prop rule (QC-106; same text in all five plans)
- PR-OAR is in Pip's RIGHT hand (near-camera hand) whenever it is in play (PR-OAR:HELD).
- PR-SEED (CLOSED) is clamped UNDER Pip's LEFT arm (far-side arm), stem along her flank, fluff peeking over/behind her left shoulder. The left hand stays free below the seed.
- Salute (SC02-SH037) is the LEFT hand: the left upper arm stays pinned to the body so the seed stays tucked; only the forearm and hand lift to the brow. The right hand keeps the oar, laid across her lap.
- Sinking (SC02-SH020, SC03-SH010): the right hand lets go, the oar floats flat on the surface; the left arm thrusts the seed up so the fluff stays above water. Recovery: the right hand scoops the oar and tucks it under the right arm while she climbs/creases, and it is back in the right hand at the end of the refold (SC02-SH035, SC03-SH020).
- SC04-SH030 stows the oar (PR-OAR:STOWED) on the boat floor with the right hand before both hands lift the seed.
- Seed holds with both hands (SC04 onward) are not exceptions: left/right are only needed while the seed is under the arm.

###### Motion style rules
- Feel: 24 fps; characters animated on twos (12 drawings/s); drop, splash, pops and impacts on ones. Moving holds only (1-2 px drift, blink, ripple creep) so Kling does not freeze.
- Exaggeration: cartoony. Squash and stretch: Pip and boat up to 25%, drop up to 40%, volume preserved.
- Staging: side-on profile; Pip faces screen right in all shots (QC-109). No three-quarter poses.
- Never deforms: Pip's triangular head and round black eyes (squint with lids/brows only), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform dark-teal outline; smears at most 3 frames.
- Timing convention: segment lengths are in frames and sum to the shot total. Frame numbers in key poses are 1-based; the last key is on the final frame.

###### Shots (132 f = 5.5 s)

####### SC01-SH010 (2.0 s = 48 f)
- Acting beat: perceive -> hope. Pip is calm, then sees Mo (eyes first, then head, then body), brightens, a small hope bounce.
- Key poses:
  - K1 f1: Pip stands upright on the left bank in profile facing right, weight on both back legs, seed clamped under her left arm (fluff behind her shoulder), oar in her right hand hanging at her side, folded boat at her feet; calm eyes level; Mo tiny and far right, feelers drooping.
  - K2 f14: Only the eyes have moved: black beads slide right toward the far shore.
  - K3 f26: Head follows, chin lifts; line of action tilts up and right.
  - K4 f32: Anticipation squash on the back legs.
  - K5 f40: Small hop stretch, eyes widen and brighten.
  - K6 f48: Pip tall, chin up, bright eyes on Mo; seed and oar unchanged.
- Timing chart: hold with blink f8 (12) + eyes lead (8) + head and body, ease in/out (10) + squash (4) + hop stretch (8) + settle (6) = 48 f.
- Principles: anticipation (squash), overlap (ears lag 2 f, seed fluff lags the body 2 f), slow in/out on the head, appeal in the straight-up silhouette.
- Lip-sync accents: none.
- Start pose (frame text): Pip, tiny yellow origami frog in side profile facing right on the left bank, standing calm and upright, closed dandelion seed clamped under her left arm, yellow paper oar held in her right hand, cream folded boat on the bank at her feet, eyes level; far right shore: tiny Mo with drooping feelers.
- End pose (frame text): Same position, Pip stretched tall with chin up and wide bright eyes looking toward the far right shore; seed still under left arm, oar in right hand; Mo unchanged.
- Off-model risks: Mo is a speck (short_lock; composite a still Mo layer if she drifts). Keep the seed under the far arm (do not let it swap to the near hand).
- Kling 2.1 FLF: YES. Clear start (calm, eyes level) and end (tall, bright). Prompt: "her eyes move first, then her head lifts, a small hopeful bounce; Mo stays still; static camera." Generate 5 s, use the first 2.0 s.

####### SC01-SH020 (2.0 s = 48 f)
- Acting beat: decide -> act. Pip slides the boat off the bank with the oar blade, crouches, hops in.
- Key poses:
  - K1 f1: Crouched at the water's edge, oar blade hooked on the boat's bow, boat half over the bank edge; seed under left arm.
  - K2 f9: The boat slides onto the water with a small ring; the oar is still in her right hand.
  - K3 f20: Anticipation squash, deep crouch.
  - K4 f28: Leap apex, full stretch, arc over the water toward the boat.
  - K5 f38: Landing, boat dips (boat squash 20%), Pip squashes.
  - K6 f48: Pip seated in the afloat boat at the water's edge, oar in right hand, seed under left arm, rings.
- Timing chart: push (8) + boat slides and settles (6) + anticipation (6) + leap on ones (10) + landing squash (8) + settle (10) = 48 f.
- Principles: anticipation, arc on the jump, squash on the landing, overshoot of the boat bob, the oar and fluff lag the body.
- Lip-sync accents: none.
- Start pose (frame text): Pip crouched on the bank in profile facing right, oar in her right hand with the blade resting on the bow of the cream paper boat that sits half over the water's edge, closed seed under her left arm.
- End pose (frame text): Pip seated upright in the cream paper boat afloat at the bank's edge, profile facing right, yellow oar in her right hand, closed seed under her left arm, small rings around the hull, water to the right.
- Off-model risks: boat shape during the board (fallback: start frame with Pip in the boat and the shore sliding past); the oar must not jump to the left hand.
- Kling 2.1 FLF: YES (start = crouched on the bank, end = seated afloat). Prompt: "she nudges the boat onto the water with the oar, hops in and sits; static camera." Fallback: two clips (slide, hop).

####### SC01-SH025 (1.5 s = 36 f)
- Acting beat: act. A steady paddle pair; confidence.
- Key poses:
  - K1 f1: Seated in the afloat boat (= SH020 end), oar raised ready in the right hand.
  - K2 f10: Stroke 1: blade dips on the near side, boat starts to move right.
  - K3 f22: Stroke 2: blade dips again, boat has speed.
  - K4 f36: Boat one quarter into the puddle, gliding right, rings behind.
- Timing chart: ready (4) + stroke 1 (12) + stroke 2 (12) + glide/settle (8) = 36 f.
- Principles: arcs on the oar, ease-out on the glide, rings lag the hull.
- Lip-sync accents: none.
- Start pose (frame text): identical to SC01-SH020 end pose.
- End pose (frame text): Pip seated in the cream boat, oar in her right hand mid-stroke, boat a quarter of the way into the puddle, heading right, small rings behind, left shore behind her.
- Off-model risks: paddle cycle may morph; ask for two strokes only. Boat must keep pointed ends.
- Kling 2.1 FLF: YES (start frame = SH020 end frame; end frame defined). Prompt: "she paddles twice, the boat glides right; static camera."

###### Requests
- Model sheet views: Pip soggy and creased states; Pip left-forearm-raised (salute with seed tucked) side-on; Mo side-on.
- Timing conflicts: none. 48 + 48 + 36 = 132 f = 5.5 s.

###### Handoff
- Produced: SC01_animation@2 (APPROVED), 3 shots, 132 f
- Next: production-manager (compile start/end frames), cinematographer


#### Camera and lighting
Source: `07_camera/SC01_camera.md`

##### SC01 Camera and Lighting

###### Change note (v2, 2026-10-19)
- Direction@2 re-cut: new SC01-SH025 (paddle off) added; SH010 trimmed to 2.0 s, SH020 reframed as the launch. Camera stays static/locked-off in every shot; lenses, height and distance unchanged.
- QC-111: rain defined once below; SH010 wording now says no falling beads.

**Rain definition (QC-111, defined once; all other wording refers to it):** "light rain" = faint dimples on the water surface plus faint background streaks only; NO falling beads or drops anywhere in the frame. The only thing that ever falls is the single hero drop in a drop shot, which carries the wording "one falling drop only: exactly one aqua drop falls, no other drop, bead or splash source in frame".

Color script row: dominant puddle grey-blue / accent paper yellow, shell coral / cool with warm accents / medium-soft. Time/weather: morning, light rain (as defined below).

###### Lighting setups

####### Setup A — Soft overcast daylight
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | overcast sky dome (set source: sky) | overhead, no single direction; slight lift from camera-left sky | very soft | neutral cool ~6800 K (grey-blue) | cel shadow falls straight under objects |
| Fill | sky bounce off the puddle surface | from below, even | very soft | pale blue-grey | keeps shadow tone light, not black |
| Rim | none | — | — | — | 2D cel look uses an outline instead |
| Practicals | none | — | — | — | — |
| Atmosphere | light rain per the Rain definition: faint surface dimples and faint background streaks, no falling beads; faint wet sheen on leaf and soil | — | — | — | nothing falls through the frame except a hero drop in a drop shot |
Contrast feel: low (about 2:1). Changes during scene: none.

```
         sky (overhead dome)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01-SH010 | A | 35 mm: flat, deep, wide | f/8, deep; background is a soft watercolor wash, not optical blur | whole frame sharp; Pip, boat at her feet and far shore readable | 0.03 | 0.45 | south bank centre, side-on, at water level | locked-off | static | none (locked, held) | wide flat 2D side view, whole puddle visible, everything crisp, no zoom; light rain = faint surface dimples and faint background streaks, no falling beads |
| SC01-SH020 | A | 35 mm: flat, deep, wide | f/8, deep | Pip and boat | 0.03 | 0.45 | south bank, slightly left, same as SH010 | locked-off | static | none | wide flat side view, Pip sets the boat on the water and hops in, Pip and boat on the left half, water to the right |
| SC01-SH025 | A | 35 mm: flat, deep, wide | f/8, deep | boat tracked by depth only (no focus pull); boat and empty water both sharp | 0.03 | 0.45 | south bank, same as SH020 (matched) | locked-off | static; the boat moves, the camera does not | none (locked, held) | wide flat side view, boat paddles away left-center to the quarter point of the puddle moving right, empty water to the right, camera does not pan |

###### Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts.
- Matched pairs: SH010, SH020 and SH025 share 35 mm, 0.03 m height, 0.45 m distance.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

###### Proposals to the director
- none

###### Handoff
- Produced: SC01_camera@2 (APPROVED), setup A, 3 shots (new: SC01-SH025)
- Open items: none
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC01` in section 11.


#### Shot records
Source: `08_master/shots/SC01.md`

##### Shot records SC01

Recompiled (v2) from approved department documents under brief@2 (Kling 2.1: image-to-video, first-last-frame, 5 s or 10 s clips, up to 3 reference images) after the director's re-cut of packed shots (QC-102). Rules: one primary action and one end state per shot; full locks for the shot's subjects, short locks for secondary props, speck-size characters and the location; palette in colour words; `motion` is timed in clip time with a 0.5 s lead-in and a hold to 5 s; `keep` names the part used in the cut; `clip_length_s` is 5 (duration + 1 s rounded up to a Kling length). Mode is first-last-frame where the end state carries the story, else image-to-video. Sound, music and VFX carry over from the v1 records until the stage 10 plans.

###### SC01-SH010

```yaml
record: shot
id: SC01-SH010
scene: SC01
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC01_direction@2
- SC01_animation@2
- SC01_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
- CH-MO@1
purpose: 'Establish Pip''s want and the geography: a tiny frog on the near bank looks across the puddle at Mo'
screenplay_ref: SC01, action lines 1-2
duration_s: 2.0
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY
  position: lower-left third, standing on the near bank
  facing: profile, facing screen right
  action: looks across the puddle, then lifts her head with bright eyes
  expression_start: calm smile
  expression_end: bright-eyed hope
  eyeline: across the puddle to Mo
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: lower-right third, tiny, far bank
  facing: profile, facing screen left
  action: stays still, feelers drooping
  expression_start: drooping lonely
  expression_end: drooping lonely
  eyeline: toward the near bank
props:
- id: PR-BOAT
  state: PR-BOAT:NEW
  position: on the bank at Pip's feet
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: under Pip's left arm
- id: PR-OAR
  state: PR-OAR:HELD
  position: in Pip's right hand
location:
  id: LOC-PUDDLE
  area: near bank (left) looking across the puddle
  time_of_day: morning
  weather: light rain
frame:
  foreground: near bank with leaf and pebble
  midground: Pip and the boat at her feet
  background: wide empty puddle, Mo on the far bank
  composition: Pip lower-left third, Mo lower-right third, wide empty puddle between
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.03
  position: south bank centre, side-on, water level, 0.45 m from subject
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout, soft watercolor background wash)'
  focus: whole frame sharp; Pip and far shore both readable
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: Pip faces screen right; Mo faces screen left
start_state: Pip stands on the left bank in profile facing screen right, the closed seed tucked under her left arm, the oar in her right hand, a new crisp cream boat on the bank at her feet; paper dry; calm smile, eyes on the far shore. Mo is a tiny speck at the right bank with drooping feelers. A wide empty stretch of puddle lies between them
end_state: Pip stands in the same place, a little taller, head up and eyes bright with hope, still looking across the puddle at Mo; boat still at her feet, seed under her left arm, oar in her right hand
action_timeline:
- '0-0.7 s: Pip stands calm, eyes on the far shore'
- '0.7-1.4 s: her eyes brighten and her head lifts'
- '1.4-2 s: a tiny squash then stretch; she ends tall and hopeful'
dialogue: []
sound: 'light rain patter on the puddle; a tiny hopeful squeak from Pip (screenplay cue: rain)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: fade-in
transition_out: cut to SC01-SH020
continuity:
- Boat NEW at her feet
- Pip DRY
- Seed CLOSED under left arm; oar HELD in right hand
generation:
  mode: image-to-video
  start_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Small tan snail with a big round soft-coral spiral shell and two thin feelers with round dot eyes. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip stands on the left bank in profile facing screen right, the closed seed tucked under her left arm, the oar in her right hand, a new crisp cream boat on the bank at her feet; paper dry; calm smile, eyes on the far shore. Mo is a tiny speck at the right bank with drooping feelers. A wide empty stretch of puddle lies between them. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Small tan snail with a big round soft-coral spiral shell and two thin feelers with round dot eyes. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip stands in the same place, a little taller, head up and eyes bright with hope, still looking across the puddle at Mo; boat still at her feet, seed under her left arm, oar in her right hand. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.2 s: Pip stands calm, eyes on the far shore. 1.2-1.9 s: her eyes brighten and her head lifts. 1.9-2.5 s: a tiny squash then stretch; she ends tall and hopeful. 2.5-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2.5 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 2 s action and retime it in the edit (speed-up = clip action span / 2 s)'
  - 'Mo is tiny and may morph: use the short lock; fallback composite a still Mo layer'
```

###### SC01-SH020

```yaml
record: shot
id: SC01-SH020
scene: SC01
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC01_direction@2
- SC01_animation@2
- SC01_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: 'The launch: Pip sets the boat on the water and hops in'
screenplay_ref: SC01, action line 4
duration_s: 2.0
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY
  position: left-centre, at the water's edge, then seated in the boat
  facing: profile, facing screen right
  action: sets the boat on the water and hops in
  expression_start: eager smile
  expression_end: eager smile
  eyeline: forward right
props:
- id: PR-BOAT
  state: PR-BOAT:NEW
  position: held at the surface, then afloat under Pip
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: under Pip's left arm
- id: PR-OAR
  state: PR-OAR:HELD
  position: laid in the boat, then in Pip's right hand
location:
  id: LOC-PUDDLE
  area: near bank, water's edge
  time_of_day: morning
  weather: light rain
frame:
  foreground: near bank edge
  midground: Pip and boat
  background: open puddle to the right
  composition: Pip left-centre, water to the right
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.03
  position: south bank slightly left, same as SC01-SH010, water level, 0.45 m from subject
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout)'
  focus: Pip and boat
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: travel left to right; Pip faces screen right
start_state: Pip stands at the water's edge on the left in profile facing screen right, one hand lowering the new cream boat toward the surface; the closed seed is tucked under her left arm and the oar rests in the boat; paper dry; eager smile
end_state: Pip sits in the new cream boat, now afloat at the water's edge on the left, in profile facing screen right, the oar in her right hand and the closed seed tucked under her left arm; paper dry; eager smile; small ripple rings around the hull
action_timeline:
- '0-0.8 s: Pip lowers the boat onto the water'
- '0.8-1.4 s: she hops in; the boat dips'
- '1.4-2 s: the boat settles, rings spread, she takes the oar'
dialogue: []
sound: 'small splash and paper crinkle as the boat lands; paddle dips (screenplay: paddle)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC01-SH010
transition_out: cut to SC01-SH025
continuity:
- Boat NEW, set afloat this shot
- Oar laid in the boat then HAND
- Seed CLOSED under left arm
generation:
  mode: first-last-frame
  start_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip stands at the water''s edge on the left in profile facing screen right, one hand lowering the new cream boat toward the surface; the closed seed is tucked under her left arm and the oar rests in the boat; paper dry; eager smile. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip sits in the new cream boat, now afloat at the water''s edge on the left, in profile facing screen right, the oar in her right hand and the closed seed tucked under her left arm; paper dry; eager smile; small ripple rings around the hull. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.3 s: Pip lowers the boat onto the water. 1.3-1.9 s: she hops in; the boat dips. 1.9-2.5 s: the boat settles, rings spread, she takes the oar. 2.5-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2.5 s
  risks:
  - 'first-last-frame: the end frame must be a generated and approved keyframe; if the model skips the beat between the frames, split the action or retime'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 2 s action and retime it in the edit (speed-up = clip action span / 2 s)'
  - 'boarding jump may morph the boat: fallback is a start frame with Pip already seated and the shore sliding away'
```

###### SC01-SH025

```yaml
record: shot
id: SC01-SH025
scene: SC01
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC01_direction@2
- SC01_animation@2
- SC01_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: 'She sets off: Pip paddles the boat away from the bank'
screenplay_ref: SC01, action line 4 (paddles)
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY
  position: left-centre, seated in the boat, moving right
  facing: profile, facing screen right
  action: paddles the boat away from the bank
  expression_start: eager smile
  expression_end: eager smile
  eyeline: forward right
props:
- id: PR-BOAT
  state: PR-BOAT:NEW
  position: afloat under Pip, moving right
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: under Pip's left arm
- id: PR-OAR
  state: PR-OAR:HELD
  position: in Pip's right hand, in the water
location:
  id: LOC-PUDDLE
  area: near bank to a quarter of the way across
  time_of_day: morning
  weather: light rain
frame:
  foreground: near bank edge
  midground: boat with Pip
  background: empty puddle to the right
  composition: boat left-centre, empty water to the right
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.03
  position: south bank slightly left, same as SC01-SH010, water level, 0.45 m from subject
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout)'
  focus: Pip and boat
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: travel left to right; Pip faces screen right
start_state: Pip sits in the new cream boat afloat at the water's edge on the left in profile facing screen right, the oar blade in the water in her right hand, the closed seed tucked under her left arm; paper dry; eager smile
end_state: The same boat and Pip a quarter of the way into the puddle, still facing screen right, oar mid-stroke in her right hand, ripple rings behind the stern; empty water ahead; paper dry; eager smile
action_timeline:
- '0-0.75 s: first paddle stroke, the boat leaves the bank'
- '0.75-1.5 s: second stroke, the boat glides to a quarter of the way across'
dialogue: []
sound: 'small splash and paper crinkle as the boat lands; paddle dips (screenplay: paddle)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC01-SH020
transition_out: cut to SC02-SH010
continuity:
- Boat NEW afloat
- Oar HAND (right)
- Seed CLOSED under left arm
generation:
  mode: image-to-video
  start_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip sits in the new cream boat afloat at the water''s edge on the left in profile facing screen right, the oar blade in the water in her right hand, the closed seed tucked under her left arm; paper dry; eager smile. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same boat and Pip a quarter of the way into the puddle, still facing screen right, oar mid-stroke in her right hand, ripple rings behind the stern; empty water ahead; paper dry; eager smile. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.25 s: first paddle stroke, the boat leaves the bank. 1.25-2 s: second stroke, the boat glides to a quarter of the way across. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - 'boarding jump may morph the boat: fallback is a start frame with Pip already seated and the shore sliding away'
```


### SC02 — EXT. PUDDLE - MID-WATER - DAY


#### Direction
Source: `06_direction/SC02_direction.md`

##### SC02 Direction — EXT. PUDDLE - MID-WATER - DAY

###### Must-see story facts
- The boat glides; ripple rings spread in front of the bow.
- A raindrop lands on the middle of the boat; the boat folds flat and sinks.
- Pip bobs up soggy with the seed held high and dry; she refolds the boat in a few creases, salutes the sky and paddles on.

###### Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Pip | to cross dry | the drop | refolds quickly |
| Raindrop | nothing (it is rain) | none | falls |

- Subtext: Pip is sure this is a one-off.
- Turn: on course → sunk, then restored.
- Audience position: ahead of Pip (we see the drop coming).
- Visual thesis: the joke framed whole: drop above, boat below, in one wide frame so cause and effect are seen at once — carried by SH020.
- Genre playbook: comedy (static wide for the gag, reaction after the laugh).

###### Change note (v2, 2026-10-19; change request from production-manager)
- QC-102: SH030 (surface+shake | refold+pop+salute) split into SH030 (surface, shake), new SH035 (refold, pop) and new SH037 (salute). Refold and salute are separate actions, so a three-way split. SH020 reviewed and kept: drop fall, hit and sink are one cause-and-effect gag (one primary action: the boat is hit and sinks) with a defined end state, suited to first-last-frame.
- QC-108 ('paddles on'): ACCEPTED DEVIATION. The screenplay's 'paddles on' is a continuing state, not an event. SH037 ends in the salute; paddling visibly resumes in the opening of SC03-SH010 (Pip is stroking as the rings widen). No shot is added; script-supervisor should map 'paddles on' to SC02-SH037 (salute) + SC03-SH010 (paddling resumed). The climb onto the flat paper is carried by the SH030 end state (Pip on the paper).
- Camera static throughout; SH035 and SH037 are new IDs.
- Erratum (2026-10-19, no version bump; CR-ISSUE-12): SH020 end state adds the oar floating flat on the surface beside the ripples (as already planned in SC02_animation).

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | glide | Pip | action 1 |
| B2 | the drop hits and the boat sinks | drop | action 2 |
| B3 | Pip resurfaces, refolds, salutes | Pip | action 3 (SH030 surface/shake, SH035 refold, SH037 salute; paddles on in SC03-SH010) |

###### Blocking
Floor plan: LOC-PUDDLE, mid-water.
- Start positions: boat left of center, Pip seated, oar in hand.
- Moves: boat glides right; drop falls from the top of frame onto the boat's middle; boat folds; Pip comes up where it sank; the refolded boat pops up around her.
- End positions: boat centre-right, Pip seated and saluting.
- Axis and camera side: same as SC01, camera on the south bank.
- Screen direction in/out: in from the left (continuing SC01), out to the right.

###### Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Pip | to paddle | steady oar strokes, chin up |
| B2 | Pip | to be hit | eyes pop wide, boat folds under her |
| B3 | Pip | to recover | SH030: head pops up, limp ears, seed raised high, shake; SH035: quick fold crease motions; SH037: a proud salute |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC02-SH010 | WS | eye-level | static | boat | Pip paddles; ripple rings spread ahead of the bow; ends with the boat at center | boat left of center, empty sky above for the drop | flat, deep | soft overcast | 1.5 s | set up the drop's target | cut |
| SC02-SH020 | WS | eye-level | static | drop and boat | the aqua drop falls from the top of frame onto the middle of the boat; the boat folds flat and sinks (one cause-and-effect gag in one frame); ends with ripples and the boat gone, the oar floating flat on the surface beside the ripples | drop path and boat in one frame | flat, deep | soft overcast, drop is the brightest thing | 2.0 s | the gag | cut on the sink |
| SC02-SH030 | MS | eye-level | static | Pip | Pip bobs up soggy beside the floating flat paper, seed held high and dry, and shakes herself so droplets fly; ends with Pip on the flat paper, seed still high | Pip centre, seed top of frame, flat paper below her | flat | soft overcast | 1.5 s | the surfacing and shake | cut |
| SC02-SH035 | MS | eye-level | static | Pip and boat | Pip makes quick creases and the boat pops back into shape around her; ends with Pip seated in the popped boat | Pip centre, boat popped around her | flat | soft overcast | 1.5 s | the refold | cut |
| SC02-SH037 | MS | eye-level | static | Pip | Pip salutes the sky; ends in a held salute, oar across her lap, boat ready to go | Pip centre, sky above | flat | soft overcast | 1.5 s | her stubborn optimism | cut |

Total: 8.0 s vs estimate 7 s (+14%, within +-15%). Version 2 re-cut: one primary action per shot.

###### Coverage and rhythm
Set-up (1.5 s), gag (2 s), then the recovery in three short beats (1.5 s each; was one 3.5 s hold). The cut comes on the sink so the laugh lands in the next shot.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH020 | a falling drop hitting a boat that folds | start frame boat intact, end frame ripples only; two-clip fallback: drop-hit clip and sink clip |
| SH030 | surfacing, shake with droplets | start frame: head at the surface; end frame: Pip on the flat paper, seed high |
| SH035 | refolding paper | cartoon pop-and-smear (not literal folds); start = flat paper with Pip on it, end = popped boat; VFX/post fallback: cross-dissolve between a flat boat frame and a popped boat frame |
| SH037 | salute | one hand to brow; start frame already seated in the popped boat; salute is the only motion |

###### Specialist and VFX flags
- action-director: none
- animation-director: yes (squash and stretch, fold gag, salute)
- vfx: possible post cleanup of the boat pop

###### Handoff
- Produced: SC02_direction@2 (APPROVED under autonomy), 5 shots, 8.0 s
- Open items: QC-108 accepted deviation (paddles on carried by SC03-SH010 opening) needs script-supervisor map update
- Next: cinematographer, script-supervisor


#### Animation plan
Source: `06_direction/SC02_animation.md`

##### SC02 Animation Plan (v2)

###### Change note (v2, 2026-10-19)
- Re-split to SC02_direction@2: five shots, 8.0 s = 192 f. SH010 36 f, SH020 48 f (kept as one gag), SH030 36 f (surface, shake, climb), new SH035 36 f (refold, pop), new SH037 36 f (salute).
- QC-106: oar and seed hands fixed (rule below); oar floats during the sink and is back in the right hand at the end of SH035; salute is the LEFT hand with the seed tucked.
- QC-108 accepted deviation: paddling resumes in SC03-SH010; SH037 ends on the salute.
- Proposal to the director (no change made): SH020 end frame adds the floating oar and the dry seed tip above the ripples (director text says "ripples and the boat gone"). Fallback if rejected: ripples only, oar and seed arrive in SH030 start frame.
- Every shot has a clear start pose and end pose and is marked for Kling 2.1 first-last-frame (FLF).

###### Hand and prop rule (QC-106; identical in all five plans)
- PR-OAR is in Pip's RIGHT hand (the near-camera hand: Pip faces screen right, camera on the south bank). PR-SEED:CLOSED is clamped UNDER her LEFT arm (far arm), fluff over her left shoulder, left hand free.
- Salute = LEFT hand: the left upper arm stays pinned (seed stays tucked), only forearm and hand lift to the brow. The right hand keeps the oar, laid across her lap.
- Sink: right hand lets go, oar floats flat on the surface; left arm thrusts the seed up so the fluff stays dry. Recovery: right hand scoops the oar, tucks it under the right arm while she climbs and creases, and re-grips it in the right hand as the refold finishes.
- SC04-SH030 stows the oar on the boat floor (PR-OAR:STOWED); from then both hands hold the seed.

###### Motion style rules
- Feel: 24 fps; characters on twos (12 drawings/s); drop, splash, pops and impacts on ones. Moving holds only (1-2 px drift, blink, ripple creep).
- Exaggeration: cartoony. Squash and stretch: Pip and boat up to 25%, drop up to 40%, volume preserved.
- Staging: side-on profile, Pip faces screen right (QC-109). Never deforms: Pip's triangular head and round black eyes (squint with lids/brows only), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform dark-teal outline; smears at most 3 frames.
- Timing convention: segment lengths are frames and sum to the shot total; key frame numbers are 1-based.

###### Shots (192 f = 8.0 s)

####### SC02-SH010 (1.5 s = 36 f)
- Acting beat: act. Steady, calm paddling; this is the set-up for the joke.
- Key poses:
  - K1 f1: Boat left of centre, Pip seated, oar (right hand) dipping on the near side, chin up; seed under left arm, rings ahead of the bow.
  - K2 f18: Second stroke, rings spread wider ahead of the bow.
  - K3 f36: Boat at centre, Pip mid-stroke, small smile.
- Timing chart: stroke 1 (18) + stroke 2 (18) = 36 f; ripple creep as moving hold.
- Principles: arcs on the oar, ease-out glide, ears lag 2 f.
- Lip-sync accents: none.
- Start pose (frame text): Cream boat left of centre, Pip seated in profile facing right with the yellow oar in her right hand dipping into the water, closed seed under her left arm, ripple rings ahead of the bow, empty grey sky above.
- End pose (frame text): Boat at the centre of the frame, Pip mid-stroke with a small smile, oar in her right hand, seed under left arm, wider rings ahead of the bow, empty grey sky above.
- Off-model risks: none significant; keep the sky empty (the drop must not appear early).
- Kling 2.1 FLF: YES. "Boat glides right at a steady speed, two strokes; static camera." Generate 5 s, use 1.5 s.

####### SC02-SH020 (2.0 s = 48 f)
- Acting beat: react. The drop hits, the boat folds, Pip sinks. One cause-and-effect gag.
- Key poses:
  - K1 f1: Drop at the top of frame, stretched 40%, directly above the boat's middle; boat intact, Pip seated.
  - K2 f16: Contact: drop squashes flat on the boat.
  - K3 f20: PLIP: boat folds down the middle (V), Pip's eyes pop wide; right hand lets go of the oar, left arm shoots up with the seed.
  - K4 f30: Boat flat just under the surface; Pip sinking, head and eyes above water; oar flips out and lands flat on the surface; seed held up.
  - K5 f42: Pip gone under; oar floating flat; seed stem and fluff tip held above the surface; bubbles.
  - K6 f48: Ripples settle; same elements, moving hold.
- Timing chart: fall on ones with acceleration (16) + contact hold (4) + collapse (10) + sink (12) + settle (6) = 48 f.
- Principles: stretch to squash on the drop, anticipation in Pip's pop-eyes, follow-through of the oar (spins once, then settles), overlap of ripples.
- Lip-sync accents: none.
- Start pose (frame text): Cream boat intact with Pip seated in profile facing right (oar in her right hand, closed seed under her left arm) at the centre of the puddle; one aqua teardrop at the top of the frame directly above the boat.
- End pose (frame text): Puddle surface with expanding ripple rings and a few bubbles where the boat was; a yellow paper oar floating flat on the surface; the tip of a closed white dandelion seed on its thin stem sticking up just above the water; no boat, no Pip visible.
- Off-model risks: drop size or shape change; boat vanishing instead of folding. Fallback: two clips (hit, then sink).
- Kling 2.1 FLF: YES. "The aqua drop falls straight onto the boat's middle, the boat flattens and sinks, the oar floats free, ripples spread; static camera."

####### SC02-SH030 (1.5 s = 36 f)
- Acting beat: recover. Pip surfaces soggy, holds the seed high, shakes, climbs onto the paper, grabs the oar.
- Key poses:
  - K1 f1: Pip's soggy head (limp ears, dull mustard) breaks the surface beside the flat floating paper; left arm up with the seed held high and dry; oar floating to her right.
  - K2 f8: Head and shoulders clear, water streaming, eyes blink open.
  - K3 f15: Shake: body wrings left-right, droplets fly, seed held steady.
  - K4 f26: Climbing onto the flat paper.
  - K5 f36: Pip upright on the flat paper, left hand holding the seed high, right hand has scooped the oar and tucked it under the right arm.
- Timing chart: emerge (8) + shake on ones (14) + climb (8) + oar scoop and tuck (6) = 36 f.
- Principles: follow-through (ears and droplets lag), arcs on the shake, anticipation lean before the climb.
- Lip-sync accents: none.
- Start pose (frame text): Pip's soggy mustard-yellow head and her raised left arm holding the closed white seed high break the water surface, profile facing right, flat cream paper floating beside her, yellow oar floating nearby, ripples around.
- End pose (frame text): Pip kneeling upright on the flat floating cream paper in profile facing right, dripping, left arm raised holding the closed seed high, the yellow oar tucked under her right arm, ears limp.
- Off-model risks: soggy state (limp, darker); keep the seed clean white. Do not swap the arms.
- Kling 2.1 FLF: YES (start at the surface, end on the paper). "She bobs up, shakes off the water, climbs onto the paper and grabs the oar; static camera."

####### SC02-SH035 (1.5 s = 36 f)
- Acting beat: act. Quick creases, the boat pops back.
- Key poses:
  - K1 f1: Pip on the flat paper, seed raised in her left hand, oar tucked under her right arm.
  - K2 f7: She lowers the seed and tucks it under her left arm; hands free.
  - K3 f14: Crease motions, hands darting at the paper (4 quick creases, on ones).
  - K4 f21: Anticipation: paper tilts, a pause of 2 f.
  - K5 f27: POP: boat stretches up 25% around her.
  - K6 f36: Boat settles; Pip seated in the boat, colour brighter, right hand has taken the oar back, seed under left arm.
- Timing chart: lower the seed (6) + creases (14) + pop (6) + overshoot, settle and re-grip (10) = 36 f.
- Principles: anticipation before the pop, overshoot and settle on the boat, secondary action in the damp droplets.
- Lip-sync accents: none.
- Start pose (frame text): same as SC02-SH030 end pose.
- End pose (frame text): Pip seated in the popped cream boat (slightly damp, grey-cream), profile facing right, yellow oar gripped in her right hand, closed seed under her left arm, her yellow colour back to bright, chin up.
- Off-model risks: render the fold as a cartoon pop and smear, not literal origami folds; fallback: cross-dissolve between a flat-paper frame and a popped-boat frame.
- Kling 2.1 FLF: YES (flat paper -> popped boat). Prompt: "she makes quick creases and the boat pops up around her; static camera."

####### SC02-SH037 (1.5 s = 36 f)
- Acting beat: proud. Pip salutes the sky, stubbornly optimistic.
- Key poses:
  - K1 f1: Seated in the boat, oar in right hand, seed under left arm, chin up (= SH035 end).
  - K2 f6: Anticipation: chin tucks, right hand lays the oar across her lap (still gripping), left upper arm pins the seed.
  - K3 f14: Left forearm raised, hand snaps to the brow (arc), eyes up to the sky.
  - K4 f36: Held salute, smug; moving hold with a blink at f26.
- Timing chart: anticipation (6) + raise and hit (8) + moving hold with settle (22) = 36 f.
- Principles: anticipation, overshoot on the hand (1 f past the brow, settle), ears lag.
- Lip-sync accents: none.
- Start pose (frame text): identical to SC02-SH035 end pose.
- End pose (frame text): Pip seated in the boat in profile facing right, her left hand raised to her brow in a salute, left upper arm tight against her body keeping the closed seed tucked under it, yellow oar lying across her lap held in her right hand, chin up, smug smile.
- Off-model risks: the salute is by the far arm; keep the forearm above the head line so it reads in silhouette; do not let the model raise the right (oar) hand or drop the oar.
- Kling 2.1 FLF: YES. "She salutes the sky with her left hand; the only motion is the salute; static camera."

###### Requests
- Model sheet views: Pip soggy and creased states; Pip side-on with the left forearm raised in a salute and the seed tucked; Pip side-on kneeling on flat paper.
- Timing conflicts: none. 36 + 48 + 36 + 36 + 36 = 192 f = 8.0 s.

###### Handoff
- Produced: SC02_animation@2 (APPROVED), 5 shots, 192 f
- Next: production-manager (compile frames), script-supervisor (close CR-ISSUE-04/QC-106)


#### Camera and lighting
Source: `07_camera/SC02_camera.md`

##### SC02 Camera and Lighting

###### Change note (v2, 2026-10-19)
- Direction@2 re-cut: SH030 split; new SC02-SH035 (refold) and SC02-SH037 (salute). Medium shots share the SH030 setup (50 mm, 0.3 m). Camera static/locked-off throughout.
- QC-111: rain defined once below; drop shot SH020 now says one falling drop only; SH010 and SH030-SH037 state no falling beads.

**Rain definition (QC-111, defined once; all other wording refers to it):** "light rain" = faint dimples on the water surface plus faint background streaks only; NO falling beads or drops anywhere in the frame. The only thing that ever falls is the single hero drop in a drop shot, which carries the wording "one falling drop only: exactly one aqua drop falls, no other drop, bead or splash source in frame".

Color script row: grey-blue, brighter / paper yellow, raindrop aqua / cool / medium. Time/weather: morning, light rain (as defined below).
- Erratum (2026-10-19, no version bump; CR-ISSUE-12): SH020 generator wording adds "oar floating on the water".

###### Lighting setups

####### Setup A — Soft overcast daylight
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | overcast sky dome (set source: sky) | overhead, no single direction; slight lift from camera-left sky | very soft | neutral cool ~6800 K (grey-blue) | cel shadow falls straight under objects |
| Fill | sky bounce off the puddle surface | from below, even | very soft | pale blue-grey | keeps shadow tone light, not black |
| Rim | none | — | — | — | 2D cel look uses an outline instead |
| Practicals | none | — | — | — | — |
| Atmosphere | light rain per the Rain definition: faint surface dimples and faint background streaks, no falling beads; faint wet sheen on leaf and soil | — | — | — | nothing falls through the frame except a hero drop in a drop shot |
Contrast feel: low (about 2:1). Changes during scene: none.

```
         sky (overhead dome)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC02-SH010 | A | 35 mm: flat, deep | f/8, deep | boat at centre | 0.03 | 0.45 | south bank centre, over mid-water | locked-off | static | none | wide flat side view of mid-water, boat gliding, rings ahead of the bow, empty sky above with nothing falling (rain = faint surface dimples only) |
| SC02-SH020 | A | 35 mm: flat, deep | f/8, deep | drop and boat equally sharp | 0.03 | 0.45 | south bank centre, same as SH010 | locked-off | static | none | wide flat side view, ONE aqua drop falls from the top of frame onto the middle of the boat, both sharp; one falling drop only: no other drop or bead falls, same landing spot every time; at the end, oar floating on the water beside the ripples |
| SC02-SH030 | A | 50 mm: flat, slightly closer | f/5.6, deep | Pip and the seed | 0.03 | 0.3 | south bank centre, closer | locked-off | static | none | medium flat side view, Pip centred, seed raised at the top of frame, shake droplets fly off Pip only (not rain), no falling beads |
| SC02-SH035 | A | 50 mm: flat, slightly closer | f/5.6, deep | Pip and the boat as it pops | 0.03 | 0.3 | south bank centre, closer (matched to SH030) | locked-off | static | none | medium flat side view, Pip centred making quick creases, boat pops back into shape around her, no camera move |
| SC02-SH037 | A | 50 mm: flat, slightly closer | f/5.6, deep | Pip, salute hand to brow | 0.03 | 0.3 | south bank centre, closer (matched to SH030/SH035) | locked-off | static | none | medium flat side view, Pip centred in the popped boat, one hand salutes the sky, empty grey sky above, nothing falling |

###### Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts.
- Matched pairs: SH030, SH035 and SH037 share 50 mm, 0.03 m, 0.3 m; wide shots in this scene share 35 mm, 0.03 m height, 0.45 m distance.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

###### Proposals to the director
- none

###### Handoff
- Produced: SC02_camera@2 (APPROVED), setup A, 5 shots (new: SC02-SH035, SC02-SH037)
- Open items: none
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC02` in section 11.


#### Shot records
Source: `08_master/shots/SC02.md`

##### Shot records SC02

Recompiled (v2) from approved department documents under brief@2 (Kling 2.1: image-to-video, first-last-frame, 5 s or 10 s clips, up to 3 reference images) after the director's re-cut of packed shots (QC-102). Rules: one primary action and one end state per shot; full locks for the shot's subjects, short locks for secondary props, speck-size characters and the location; palette in colour words; `motion` is timed in clip time with a 0.5 s lead-in and a hold to 5 s; `keep` names the part used in the cut; `clip_length_s` is 5 (duration + 1 s rounded up to a Kling length). Mode is first-last-frame where the end state carries the story, else image-to-video. Sound, music and VFX carry over from the v1 records until the stage 10 plans.

###### SC02-SH010

```yaml
record: shot
id: SC02-SH010
scene: SC02
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC02_direction@2
- SC02_animation@2
- SC02_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: The boat glides and ripple rings spread ahead of the bow, setting the drop's target
screenplay_ref: SC02, action line 1
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY
  position: centre-left, seated in the boat
  facing: profile, facing screen right
  action: paddles steadily
  expression_start: calm smile, chin up
  expression_end: calm smile, chin up
  eyeline: forward right
props:
- id: PR-BOAT
  state: PR-BOAT:NEW
  position: mid-water, left of centre then centre
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: under Pip's left arm
- id: PR-OAR
  state: PR-OAR:HELD
  position: in Pip's right hand, in the water
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: ripple rings on the water at lower right
  midground: boat with Pip
  background: grey sky and distant soft shore
  composition: boat left of centre, empty grey sky above for the drop
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.03
  position: south bank centre over mid-water, water level, 0.45 m
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout)'
  focus: boat at centre
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: travel left to right; Pip faces screen right
start_state: Pip sits in profile facing screen right in the new cream boat left of centre on open mid-water, oar in the water in her right hand, the closed seed under her left arm; paper dry; calm smile, chin up. Soft ripple rings ahead of the bow; empty flat grey sky above
end_state: The same boat at the centre of the frame on mid-water, Pip mid-stroke with the oar in the water in her right hand, calm smile, chin up; wider ripple rings ahead of the bow; empty flat grey sky above
action_timeline:
- '0-0.75 s: first paddle stroke'
- '0.75-1.5 s: second stroke, the boat reaches the centre, rings widen'
dialogue: []
sound: 'soft paddle dips, rain patter (screenplay: boat glides)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC01-SH025
transition_out: cut to SC02-SH020
continuity:
- Boat NEW
- Pip DRY
- Oar HAND (right)
generation:
  mode: image-to-video
  start_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip sits in profile facing screen right in the new cream boat left of centre on open mid-water, oar in the water in her right hand, the closed seed under her left arm; paper dry; calm smile, chin up. Soft ripple rings ahead of the bow; empty flat grey sky above. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same boat at the centre of the frame on mid-water, Pip mid-stroke with the oar in the water in her right hand, calm smile, chin up; wider ripple rings ahead of the bow; empty flat grey sky above. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.25 s: first paddle stroke. 1.25-2 s: second stroke, the boat reaches the centre, rings widen. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
```

###### SC02-SH020

```yaml
record: shot
id: SC02-SH020
scene: SC02
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC02_direction@2
- SC02_animation@2
- SC02_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-DROP@1
- CH-PIP@2
purpose: A raindrop lands on the middle of the boat; the boat folds flat and sinks
screenplay_ref: SC02, action line 2
duration_s: 2.0
characters:
- id: CH-DROP
  costume: CO-DROP-01
  costume_state: FALLING
  position: top centre, directly above the boat's middle
  facing: no face; falling straight down
  action: falls onto the boat's middle and splashes into the water
  expression_start: n/a (faceless), stretched tall
  expression_end: n/a (faceless), splashed away
  eyeline: n/a
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY
  position: centre, seated in the boat, then underwater
  facing: profile, facing screen right
  action: eyes pop wide as the boat folds under her and she sinks
  expression_start: calm smile
  expression_end: eyes wide, underwater
  eyeline: up at the drop
props:
- id: PR-BOAT
  state: PR-BOAT:NEW
  position: centre, then FLAT and sunk
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: left arm thrusts it up; the tip stays above the water
- id: PR-OAR
  state: PR-OAR:HELD
  position: right hand lets go; floats flat on the surface
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: ripple rings
  midground: the drop's path, the boat and Pip
  background: grey sky and distant shore
  composition: drop path and boat in one frame, same landing spot every time
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.03
  position: south bank centre, same as SC02-SH010, water level, 0.45 m
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout)'
  focus: drop and boat equally sharp
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: drop falls straight down; boat at centre
start_state: 'Wide frame: the single aqua drop hangs high at the top centre of the grey sky directly above the middle of the boat. Pip sits in profile facing screen right in the new cream boat at the centre of the water, calm smile, paper dry, the closed seed tucked under her left arm, the oar in her right hand'
end_state: Empty water at the centre of the frame with wide ripple rings and a few bubbles where the boat sank; the tip of the dandelion fluff just above the surface; the small yellow paper oar floating flat on the water beside the ripples; the drop is gone; flat grey sky above
action_timeline:
- '0-0.7 s: the drop falls'
- '0.7-0.9 s: it lands on the boat''s middle'
- '0.9-1.4 s: the boat folds flat'
- '1.4-2 s: boat and Pip sink; ripples spread, the oar floats on the surface'
dialogue: []
sound: PLIP on contact, then a bloop as the boat sinks (screenplay cues)
music: none specified yet (music plan is stage 10)
vfx: 'pending VFX plan (stage 10): director flagged possible two-clip split of hit and sink'
transition_in: cut from SC02-SH010
transition_out: cut to SC02-SH030
continuity:
- Boat NEW -> FLAT
- Pip DRY -> SOGGY (underwater)
- Oar HAND -> FLOAT
- Seed tip stays above the water
generation:
  mode: first-last-frame
  start_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. One bright aqua glossy teardrop with a white highlight, plain and smooth. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Wide frame: the single aqua drop hangs high at the top centre of the grey sky directly above the middle of the boat. Pip sits in profile facing screen right in the new cream boat at the centre of the water, calm smile, paper dry, the closed seed tucked under her left arm, the oar in her right hand. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, one falling aqua drop only. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. One bright aqua glossy teardrop with a white highlight, plain and smooth. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Empty water at the centre of the frame with wide ripple rings and a few bubbles where the boat sank; the tip of the dandelion fluff just above the surface; the small yellow paper oar floating flat on the water beside the ripples; the drop is gone; flat grey sky above. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, one falling aqua drop only. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.2 s: the drop falls. 1.2-1.4 s: it lands on the boat''s middle. 1.4-1.9 s: the boat folds flat. 1.9-2.5 s: boat and Pip sink; ripples spread, the oar floats on the surface. 2.5-5 s: holds the end pose. Environment: faint water dimples, one falling aqua drop only.'
  clip_length_s: 5
  keep: 0.5-2.5 s
  risks:
  - 'first-last-frame: the end frame must be a generated and approved keyframe; if the model skips the beat between the frames, split the action or retime'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 2 s action and retime it in the edit (speed-up = clip action span / 2 s)'
  - 'drop size or shape drift; boat folding is hard: fallback two clips (hit, then sink)'
  - upgrade to first-last-frame if the Kling plan supports it
```

###### SC02-SH030

```yaml
record: shot
id: SC02-SH030
scene: SC02
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC02_direction@2
- SC02_animation@2
- SC02_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: Pip surfaces and shakes herself off, the seed held high and dry
screenplay_ref: SC02, action line 3 (surfaces)
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: SOGGY
  position: centre, head at the water, then standing on the flat paper
  facing: profile, facing screen right
  action: bobs up, then shakes herself so droplets fly
  expression_start: soggy scowl
  expression_end: steady, determined look
  eyeline: forward right
props:
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: raised high in Pip's left arm
- id: PR-BOAT
  state: PR-BOAT:FLAT
  position: floating flat beside and under her
- id: PR-OAR
  state: PR-OAR:HELD
  position: floating, then tucked under Pip's right arm
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: water surface
  midground: Pip with the flat paper
  background: grey sky and distant shore
  composition: Pip centre, seed at the top of frame, flat paper below
camera:
  shot_size: MS
  angle: eye-level
  height_m: 0.03
  position: south bank centre, closer, water level, 0.30 m
  lens_mm: 50
  aperture: f/5.6
  depth_of_field: 'deep (2D: sharp, soft wash behind)'
  focus: Pip and the seed
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: Pip faces screen right
start_state: Pip's soggy head breaks the surface at the centre, in profile facing screen right, the closed seed raised high above her in her left arm with its fluff dry; paper soaked, limp and dull mustard, droopy limbs; the flat cream paper floats beside her and the yellow oar floats on the surface; soggy scowl
end_state: Pip stands on the flat floating cream paper at the centre, in profile facing screen right, the closed seed still held high in her left arm, the oar scooped under her right arm; paper bright yellow again and dry, tiny water droplets flying off her; steady look
action_timeline:
- '0-0.5 s: her head breaks the surface, seed held high'
- '0.5-1.5 s: she shakes; droplets fly off her, paper turns bright again; the oar scooped under her arm'
dialogue: []
sound: water drips, paper crinkle and a pop as the boat refolds, a tiny proud squeak
music: none specified yet (music plan is stage 10)
vfx: 'pending VFX plan (stage 10): director flagged possible post cleanup of the boat pop'
transition_in: cut from SC02-SH020
transition_out: cut to SC02-SH035
continuity:
- Pip SOGGY -> DRY (during the shake)
- Boat FLAT
- Oar FLOAT -> TUCK
- Seed raised in the left arm
generation:
  mode: image-to-video
  start_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Thin sage stem topped with a round feathery white dandelion fluff. Small cream folded paper boat with pointed ends and crisp creases. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip''s soggy head breaks the surface at the centre, in profile facing screen right, the closed seed raised high above her in her left arm with its fluff dry; paper soaked, limp and dull mustard, droopy limbs; the flat cream paper floats beside her and the yellow oar floats on the surface; soggy scowl. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Thin sage stem topped with a round feathery white dandelion fluff. Small cream folded paper boat with pointed ends and crisp creases. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip stands on the flat floating cream paper at the centre, in profile facing screen right, the closed seed still held high in her left arm, the oar scooped under her right arm; paper bright yellow again and dry, tiny water droplets flying off her; steady look. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1 s: her head breaks the surface, seed held high. 1-2 s: she shakes; droplets fly off her, paper turns bright again; the oar scooped under her arm. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - paper refold is a cartoon pop, not literal origami
  - 'likely two clips: surfacing and shake, then refold and salute'
```

###### SC02-SH035

```yaml
record: shot
id: SC02-SH035
scene: SC02
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC02_direction@2
- SC02_animation@2
- SC02_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: Quick creases pop the boat back into shape around her
screenplay_ref: SC02, action line 3 (refolds)
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY
  position: centre, standing on the paper then seated in the boat
  facing: profile, facing screen right
  action: makes quick creases; the boat pops into shape around her
  expression_start: focused look
  expression_end: relieved smile
  eyeline: down at the paper, then forward
props:
- id: PR-BOAT
  state: PR-BOAT:FLAT
  position: flat, then PR-BOAT:REFOLDED
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: raised, then back under the left arm
- id: PR-OAR
  state: PR-OAR:HELD
  position: tucked, then in Pip's right hand
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: water surface
  midground: Pip and the boat as it pops
  background: grey sky and distant shore
  composition: Pip centre, boat popped around her
camera:
  shot_size: MS
  angle: eye-level
  height_m: 0.03
  position: south bank centre, closer, water level, 0.30 m
  lens_mm: 50
  aperture: f/5.6
  depth_of_field: 'deep (2D: sharp, soft wash behind)'
  focus: Pip and the seed
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: Pip faces screen right
start_state: Pip stands on the flat cream paper floating on the water at the centre, in profile facing screen right, the closed seed raised in her left arm, the oar tucked under her right arm; paper bright yellow and dry; focused look
end_state: Pip sits in the cream boat popped back into shape, slightly damp and grey-cream, at the centre in profile facing screen right, the closed seed tucked under her left arm, the oar gripped in her right hand; paper bright yellow and dry; relieved smile
action_timeline:
- '0-0.8 s: quick crease motions with both hands'
- '0.8-1.5 s: the boat pops into shape around her; she re-grips the oar'
dialogue: []
sound: water drips, paper crinkle and a pop as the boat refolds, a tiny proud squeak
music: none specified yet (music plan is stage 10)
vfx: 'pending VFX plan (stage 10): director flagged possible post cleanup of the boat pop'
transition_in: cut from SC02-SH030
transition_out: cut to SC02-SH037
continuity:
- Boat FLAT -> REFOLDED
- Oar TUCK -> HAND
- Seed back under left arm
generation:
  mode: first-last-frame
  start_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip stands on the flat cream paper floating on the water at the centre, in profile facing screen right, the closed seed raised in her left arm, the oar tucked under her right arm; paper bright yellow and dry; focused look. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip sits in the cream boat popped back into shape, slightly damp and grey-cream, at the centre in profile facing screen right, the closed seed tucked under her left arm, the oar gripped in her right hand; paper bright yellow and dry; relieved smile. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.3 s: quick crease motions with both hands. 1.3-2 s: the boat pops into shape around her; she re-grips the oar. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'first-last-frame: the end frame must be a generated and approved keyframe; if the model skips the beat between the frames, split the action or retime'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - paper refold is a cartoon pop, not literal origami
  - 'likely two clips: surfacing and shake, then refold and salute'
```

###### SC02-SH037

```yaml
record: shot
id: SC02-SH037
scene: SC02
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC02_direction@2
- SC02_animation@2
- SC02_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: 'Her stubborn optimism: a proud salute to the sky'
screenplay_ref: SC02, action line 3 (salutes)
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY
  position: centre, seated in the boat
  facing: profile, facing screen right
  action: salutes the sky with her left hand
  expression_start: proud smile, chin up
  expression_end: smug salute
  eyeline: up at the sky
props:
- id: PR-BOAT
  state: PR-BOAT:REFOLDED
  position: under Pip, afloat
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: under Pip's left upper arm
- id: PR-OAR
  state: PR-OAR:HELD
  position: across her lap under her right hand
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: water surface
  midground: Pip in the boat
  background: empty grey sky and distant shore
  composition: Pip centre, empty sky above
camera:
  shot_size: MS
  angle: eye-level
  height_m: 0.03
  position: south bank centre, closer, water level, 0.30 m
  lens_mm: 50
  aperture: f/5.6
  depth_of_field: 'deep (2D: sharp, soft wash behind)'
  focus: Pip and the seed
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: Pip faces screen right
start_state: Pip sits in the popped cream boat, slightly damp and grey-cream, at the centre in profile facing screen right, the closed seed tucked under her left arm, the oar gripped in her right hand; paper bright yellow and dry; proud smile, chin up; empty grey sky above
end_state: The same pose held, with Pip's left forearm and hand raised to her brow in a salute while her left upper arm stays pinned to hold the seed, the oar laid across her lap under her right hand; proud smug smile, chin up
action_timeline:
- '0-0.6 s: she settles, the right hand lays the oar across her lap'
- '0.6-1.5 s: the left hand rises to her brow in a salute and holds'
dialogue: []
sound: water drips, paper crinkle and a pop as the boat refolds, a tiny proud squeak
music: none specified yet (music plan is stage 10)
vfx: 'pending VFX plan (stage 10): director flagged possible post cleanup of the boat pop'
transition_in: cut from SC02-SH035
transition_out: cut to SC03-SH010
continuity:
- Oar HAND -> REST (across lap)
- Salute with LEFT hand
- Boat REFOLDED
generation:
  mode: image-to-video
  start_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip sits in the popped cream boat, slightly damp and grey-cream, at the centre in profile facing screen right, the closed seed tucked under her left arm, the oar gripped in her right hand; paper bright yellow and dry; proud smile, chin up; empty grey sky above. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same pose held, with Pip''s left forearm and hand raised to her brow in a salute while her left upper arm stays pinned to hold the seed, the oar laid across her lap under her right hand; proud smug smile, chin up. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.1 s: she settles, the right hand lays the oar across her lap. 1.1-2 s: the left hand rises to her brow in a salute and holds. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - paper refold is a cartoon pop, not literal origami
  - 'likely two clips: surfacing and shake, then refold and salute'
```


### SC03 — EXT. PUDDLE - MID-WATER - DAY


#### Direction
Source: `06_direction/SC03_direction.md`

##### SC03 Direction — EXT. PUDDLE - MID-WATER - DAY

###### Must-see story facts
- Ripple rings widen at the bow; Pip glances up, relaxed.
- A second drop lands on the same spot; the boat sinks faster.
- Pip surfaces, scowls, refolds in a flash; the new boat is lopsided and creased.
- A small round shadow grows on the water beside her; her ears go flat.

###### Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Pip | to cross dry | the drop again | refold faster |

- Subtext: the same fix will not work forever.
- Turn: confident → worried.
- Audience position: ahead of Pip.
- Visual thesis: the same frame as SC02-SH020, repeated and faster (rule of three) — carried by SH010.
- Genre playbook: comedy (rule of three: setup, reinforce, subvert next scene).

###### Change note (v2, 2026-10-19; change request from production-manager)
- QC-102: SH020 (surface+scowl+refold | shadow+ears) split into SH020 (scowl and refold; the surfacing is in the start frame) and new SH025 (shadow grows, ears flat). SH010 reviewed and kept as one gag (the second hit and sink); the glance is the start state.
- QC-108: Pip is visibly paddling at the start of SH010, which carries SC02's 'paddles on'.
- Camera static; SH025 is a new ID.
- Erratum (2026-10-19, no version bump; CR-ISSUE-12): SH010 end state adds the oar floating flat on the surface beside the ripples (as already planned in SC03_animation).

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | second hit, faster sink | drop | action 1-2 |
| B2 | refold, lopsided, shadow, ears flat | Pip | action 2-3 (SH020 refold, SH025 shadow/ears) |

###### Blocking
Floor plan: LOC-PUDDLE, mid-water.
- Start positions: boat centre-right, Pip seated, relaxed.
- Moves: boat sinks at the same spot; Pip surfaces; lopsided boat pops up; a round shadow appears on the water at the right of the boat.
- End positions: Pip seated in the lopsided boat, ears flat, shadow beside.
- Axis and camera side: same as SC01.
- Screen direction in/out: boat is moving right; continues right.

###### Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Pip | to glance up | head tilts up, relaxed smile, then eyes pop |
| B2 | Pip | to refold | SH020: scowl, fast crease motions; SH025: eyes follow the shadow, ears sag flat |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC03-SH010 | WS | eye-level | static | drop and boat | Pip strokes the oar as rings widen at the bow and glances up relaxed (start state); the second drop lands on the same spot and the boat sinks fast; ends with ripples only, the oar floating flat on the surface beside them | same framing as SC02-SH020 | flat, deep | slightly darker overcast | 2.0 s | the gag repeats, faster; paddling has resumed | cut |
| SC03-SH020 | MS | eye-level | static | Pip | Pip, head already above water and scowling, refolds in a flash; ends with her seated in the lopsided creased boat | Pip centre-left | flat | darker slate overcast | 1.5 s | she refolds, faster and angrier | cut |
| SC03-SH025 | MS | eye-level | static | Pip and shadow | a small round shadow grows on the water at the right of the boat; Pip's eyes follow it; ends with her ears flat | Pip centre-left, shadow lower-right | flat | darker slate overcast | 1.5 s | escalation and worry; the hinge into SC04 | cut |

Total: 5.0 s vs estimate 6 s (-17%; explained: the repeat gag is deliberately faster, and 1 s was given to the SC04 climax beats). Version 2 re-cut: one primary action per shot.

###### Coverage and rhythm
SH010 repeats SC02's gag faster; SH020 is the angry refold; SH025 is the reaction. The shadow is the hinge into SC04.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH010 | repeats SC02-SH020; model may change framing | reuse the same start-frame composition from SC02-SH020 as reference |
| SH020 | lopsided boat state | start frame head at surface scowling; PR-BOAT:CREASED is the end frame |
| SH025 | shadow grows, ears flatten | start = end of SH020 plus tiny shadow; end frame: bigger shadow, ears flat; no camera move |

###### Specialist and VFX flags
- action-director: none
- animation-director: yes (faster, snappier refold, ears drop)
- vfx: none

###### Handoff
- Produced: SC03_direction@2 (APPROVED under autonomy), 3 shots, 5.0 s
- Open items: none
- Next: cinematographer, script-supervisor


#### Animation plan
Source: `06_direction/SC03_animation.md`

##### SC03 Animation Plan (v2)

###### Change note (v2, 2026-10-19)
- Re-split to SC03_direction@2: SH010 2.0 s (48 f), SH020 1.5 s (36 f), new SH025 1.5 s (36 f). Scene = 120 f = 5.0 s.
- Paddling is visible at the start of SH010 (QC-108). QC-106 hand rule applied: oar floats at the sink, is scooped by the right hand in SH020 and is in her right hand at the end; seed under the left arm.
- Every shot has a clear start pose and end pose and is marked for Kling 2.1 first-last-frame (FLF).

###### Hand and prop rule (QC-106; identical in all five plans)
- PR-OAR is in Pip's RIGHT hand (the near-camera hand: Pip faces screen right, camera on the south bank). PR-SEED:CLOSED is clamped UNDER her LEFT arm (far arm), fluff over her left shoulder, left hand free.
- Salute = LEFT hand: the left upper arm stays pinned (seed stays tucked), only forearm and hand lift to the brow. The right hand keeps the oar, laid across her lap.
- Sink: right hand lets go, oar floats flat on the surface; left arm thrusts the seed up so the fluff stays dry. Recovery: right hand scoops the oar, tucks it under the right arm while she climbs and creases, and re-grips it in the right hand as the refold finishes.
- SC04-SH030 stows the oar on the boat floor (PR-OAR:STOWED); from then both hands hold the seed.

###### Motion style rules
- Feel: 24 fps; characters on twos (12 drawings/s); drop, splash, pops and impacts on ones. Moving holds only (1-2 px drift, blink, ripple creep).
- Exaggeration: cartoony. Squash and stretch: Pip and boat up to 25%, drop up to 40%, volume preserved.
- Staging: side-on profile, Pip faces screen right (QC-109). Never deforms: Pip's triangular head and round black eyes (squint with lids/brows only), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform dark-teal outline; smears at most 3 frames.
- Timing convention: segment lengths are frames and sum to the shot total; key frame numbers are 1-based.
- Scene tone: faster, snappier than SC02 (the repeat), then a held dread.

###### Shots (120 f = 5.0 s)

####### SC03-SH010 (2.0 s = 48 f)
- Acting beat: relaxed -> hit. Pip strokes and glances up relaxed; eyes pop; the second sink is faster than SC02.
- Key poses:
  - K1 f1: Boat at the same centre spot as SC02-SH020, Pip stroking, relaxed smile, rings at the bow, seed under left arm, oar in right hand.
  - K2 f13: Pip glances up (eyes then head), still relaxed.
  - K3 f21: Drop enters from the top, stretched.
  - K4 f29: Contact, drop squashes; Pip's eyes pop.
  - K5 f35: Boat folds and sinks at double speed; oar jerks out of her right hand; left arm thrusts the seed up.
  - K6 f48: Ripples, floating oar, dry seed tip above the water.
- Timing chart: stroke and glance (12 + 8) + fall on ones (8) + contact and fold (4) + fast sink (10) + settle (6) = 48 f.
- Principles: repetition with a faster rhythm; anticipation is the relaxed glance; follow-through of the oar.
- Lip-sync accents: none.
- Start pose (frame text): Same framing as SC02-SH020 start: cream boat (slightly damp) at the centre of the puddle, Pip seated in profile facing right mid-stroke with the oar in her right hand and the seed under her left arm, relaxed smile; ripple rings at the bow; slightly darker overcast sky; no drop yet.
- End pose (frame text): Same framing as the end of SC02-SH020: puddle with ripple rings and a few bubbles, yellow oar floating flat, the tip of the closed white seed above the surface; no boat, no Pip.
- Off-model risks: framing drift from SC02-SH020 (reuse its start frame as reference).
- Kling 2.1 FLF: YES. "The drop hits the same spot, the boat folds and sinks fast, the oar floats free; static camera."

####### SC03-SH020 (1.5 s = 36 f)
- Acting beat: react -> act. Scowl, flash refold, lopsided boat.
- Key poses:
  - K1 f1: Pip's soggy head already above water, scowling (brows down, cheeks puffed), left arm up with the seed, flat paper and floating oar beside her.
  - K2 f6: Right hand snags the oar and tucks it under her right arm as she hauls onto the paper.
  - K3 f12: Blurred crease motions (half the frames of SC02).
  - K4 f24: POP: lopsided boat, one side wall lower, extra crease lines; stretch is uneven.
  - K5 f36: Pip seated in the lopsided creased boat, oar regripped in her right hand, seed tucked under left arm, scowl easing.
- Timing chart: scowl, snag and haul (8) + refold (12) + pop (6) + settle and re-grip (10) = 36 f.
- Principles: snappier timing, overshoot, exaggeration of the angry brows.
- Lip-sync accents: none.
- Start pose (frame text): Pip's soggy scowling head at the water surface in profile facing right, left arm raised holding the closed seed, flat cream paper floating beside her, yellow oar floating, ripples.
- End pose (frame text): Pip seated in the lopsided creased cream boat in profile facing right, yellow oar in her right hand, closed seed under her left arm, scowl easing, crooked left-ear fold visible.
- Off-model risks: lopsided boat (PR-BOAT:CREASED) must stay a recognisable boat; keep the seed white.
- Kling 2.1 FLF: YES. "She scowls, refolds in a flash, a lopsided boat pops up; static camera."

####### SC03-SH025 (1.5 s = 36 f)
- Acting beat: perceive -> dread. A shadow grows; eyes follow it; ears sag.
- Key poses:
  - K1 f1: Seated (= SH020 end), tiny round shadow on the water at lower right.
  - K2 f7: Eyes lead to the shadow.
  - K3 f20: Head turns slightly toward the shadow, shadow is larger.
  - K4 f28: Ears flatten against the head, mouth a small worried line.
  - K5 f36: Hold, shadow bigger still.
- Timing chart: hold (6) + eyes lead (8) + head turn (6) + ears flatten, lag 2 f (8) + moving hold (8) = 36 f.
- Principles: eyes lead, overlap on the ears, slow-in on the shadow.
- Lip-sync accents: none.
- Start pose (frame text): identical to SC03-SH020 end pose with a very small soft grey ellipse on the water at lower right.
- End pose (frame text): Pip seated in the lopsided creased boat in profile, ears flat against her head, small worried mouth line, oar across her lap in her right hand, seed under left arm, a larger soft grey round shadow on the water to the lower right of the boat.
- Off-model risks: the shadow must remain a plain soft grey ellipse (not a drop).
- Kling 2.1 FLF: YES. "A round shadow slowly grows beside the boat; her eyes follow it and her ears flatten; static camera."

###### Requests
- Model sheet views: Pip creased state side-on, Pip flat-ears side-on.
- Timing conflicts: none. 48 + 36 + 36 = 120 f = 5.0 s.

###### Handoff
- Produced: SC03_animation@2 (APPROVED), 3 shots, 120 f
- Next: production-manager (compile frames)


#### Camera and lighting
Source: `07_camera/SC03_camera.md`

##### SC03 Camera and Lighting

###### Change note (v2, 2026-10-19)
- Direction@2 re-cut: SH020 split; the shadow beat moves to new SC03-SH025. SH020 now frames the refold (Pip centre-left); SH025 carries the shadow at lower right. Both 50 mm, 0.3 m. Static/locked-off.
- QC-111: rain defined once below; the SH010 drop shot says one falling drop only; Setup B atmosphere no longer says 'a little heavier' (no extra falling drops).

**Rain definition (QC-111, defined once; all other wording refers to it):** "light rain" = faint dimples on the water surface plus faint background streaks only; NO falling beads or drops anywhere in the frame. The only thing that ever falls is the single hero drop in a drop shot, which carries the wording "one falling drop only: exactly one aqua drop falls, no other drop, bead or splash source in frame".

Color script row: wet slate / paper yellow / coolest / lower saturation, slightly darker. Time/weather: morning, light rain (as defined below).
- Erratum (2026-10-19, no version bump; CR-ISSUE-12): SH010 generator wording adds "oar floating on the water".

###### Lighting setups

####### Setup B — Darker overcast (cloud thickening)
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | overcast sky dome, a darker patch moving in from the right | overhead, slightly dimmer on the right | very soft | cool ~7200 K (slate) | cel shadow tone one step darker (#4B5D6B) |
| Fill | sky bounce off the puddle | from below, even, lower level | very soft | grey-blue | — |
| Rim | none | — | — | — | — |
| Practicals | none | — | — | — | — |
| Atmosphere | light rain per the Rain definition, slightly more dimples and streaks, still no falling beads | — | — | — | small round shadow on the water appears at the end |
Contrast feel: low-medium (about 2.5:1). Changes during scene: dims slightly over the scene, the shadow grows.

```
         sky (overhead dome)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC03-SH010 | B | 35 mm: flat, deep | f/8, deep | drop and boat | 0.03 | 0.45 | south bank centre, same as SC02-SH020 | locked-off | static | none | wide flat side view identical in framing to the previous gag, slightly darker overcast; Pip strokes the oar at the start; ONE aqua drop lands on the same spot as before; one falling drop only, no other drop or bead falls; at the end, oar floating on the water beside the ripples |
| SC03-SH020 | B | 50 mm | f/5.6, deep | Pip's scowl and the lopsided boat | 0.03 | 0.3 | south bank centre-left, closer | locked-off | static | none | medium flat side view, Pip centre-left scowling, head above water, refolding fast into a lopsided creased boat, nothing falling |
| SC03-SH025 | B | 50 mm | f/5.6, deep | Pip's eyes, then the shadow at lower right (both sharp, no pull) | 0.03 | 0.3 | south bank centre-left, closer (matched to SH020) | locked-off | static | none | medium flat side view, Pip centre-left, small soft grey round shadow grows on the water lower right, Pip's ears sag flat; the shadow is a ground shadow, not a falling object, no drop yet in frame |

###### Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts.
- Matched pairs: SH020 and SH025 share 50 mm, 0.03 m, 0.3 m, centre-left position. SC03-SH010 uses the same lens, height and distance as SC02-SH020.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

###### Proposals to the director
- none

###### Handoff
- Produced: SC03_camera@2 (APPROVED), setup B, 3 shots (new: SC03-SH025)
- Open items: none
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC03` in section 11.


#### Shot records
Source: `08_master/shots/SC03.md`

##### Shot records SC03

Recompiled (v2) from approved department documents under brief@2 (Kling 2.1: image-to-video, first-last-frame, 5 s or 10 s clips, up to 3 reference images) after the director's re-cut of packed shots (QC-102). Rules: one primary action and one end state per shot; full locks for the shot's subjects, short locks for secondary props, speck-size characters and the location; palette in colour words; `motion` is timed in clip time with a 0.5 s lead-in and a hold to 5 s; `keep` names the part used in the cut; `clip_length_s` is 5 (duration + 1 s rounded up to a Kling length). Mode is first-last-frame where the end state carries the story, else image-to-video. Sound, music and VFX carry over from the v1 records until the stage 10 plans.

###### SC03-SH010

```yaml
record: shot
id: SC03-SH010
scene: SC03
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC03_direction@2
- SC03_animation@2
- SC03_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-DROP@1
- CH-PIP@2
purpose: 'The gag repeats, faster: paddling resumes and the second drop sinks the boat on the same spot'
screenplay_ref: SC03, action line 1; SC02 'paddles on'
duration_s: 2.0
characters:
- id: CH-DROP
  costume: CO-DROP-01
  costume_state: FALLING
  position: top centre, directly above the boat's middle
  facing: no face; falling straight down
  action: falls onto the same spot and splashes away
  expression_start: n/a (faceless), stretched tall
  expression_end: n/a (faceless), splashed away
  eyeline: n/a
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY
  position: centre, seated in the boat, then underwater
  facing: profile, facing screen right
  action: strokes the oar, glances up, then the boat folds under her and she sinks
  expression_start: relaxed glance
  expression_end: eyes wide, underwater
  eyeline: up
props:
- id: PR-BOAT
  state: PR-BOAT:REFOLDED
  position: centre, then FLAT and sunk
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: tip stays above the water
- id: PR-OAR
  state: PR-OAR:HELD
  position: in Pip's right hand, then floating flat on the surface
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: ripple rings
  midground: the drop's path, the boat and Pip
  background: dark slate sky and distant shore
  composition: same framing as SC02-SH020
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.03
  position: south bank centre, same as SC02-SH020, water level, 0.45 m
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout)'
  focus: drop and boat
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, darker toward the right, very soft, ~7200 K'
  fill: none; dim blue-grey bounce from the water, ~2.5:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: slate cel shadow tone (#4B5D6B) under objects
  palette:
  - 'wet slate #6E8797'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: drop falls straight down; boat at centre
start_state: 'Wide frame: the single aqua drop hangs high at the top centre of the sky directly above the middle of the boat, the same spot as before. Pip sits in profile facing screen right in the popped cream boat at the centre, stroking the oar in her right hand, the closed seed tucked under her left arm; relaxed glance up; paper dry; ripple rings at the bow'
end_state: Empty water at the centre with ripple rings and a few bubbles where the boat sank; the tip of the dandelion fluff just above the surface; the small yellow paper oar floating flat on the water beside the ripples; the drop is gone; flat dark slate sky above
action_timeline:
- '0-0.5 s: Pip strokes, glances up relaxed'
- '0.5-0.8 s: the drop enters from the top'
- '0.8-1.1 s: it lands on the same spot'
- '1.1-2 s: the boat folds and sinks fast; the oar floats; ripples settle'
dialogue: []
sound: PLIP, a quicker bloop (screenplay cue)
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC02-SH037
transition_out: cut to SC03-SH020
continuity:
- Boat REFOLDED -> FLAT
- Pip DRY -> SOGGY (underwater)
- Oar HAND -> FLOAT
generation:
  mode: first-last-frame
  start_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. One bright aqua glossy teardrop with a white highlight, plain and smooth. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Wide frame: the single aqua drop hangs high at the top centre of the sky directly above the middle of the boat, the same spot as before. Pip sits in profile facing screen right in the popped cream boat at the centre, stroking the oar in her right hand, the closed seed tucked under her left arm; relaxed glance up; paper dry; ripple rings at the bow. Darker slate overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, one falling aqua drop only. Palette: slate grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. One bright aqua glossy teardrop with a white highlight, plain and smooth. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Empty water at the centre with ripple rings and a few bubbles where the boat sank; the tip of the dandelion fluff just above the surface; the small yellow paper oar floating flat on the water beside the ripples; the drop is gone; flat dark slate sky above. Darker slate overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, one falling aqua drop only. Palette: slate grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1 s: Pip strokes, glances up relaxed. 1-1.3 s: the drop enters from the top. 1.3-1.6 s: it lands on the same spot. 1.6-2.5 s: the boat folds and sinks fast; the oar floats; ripples settle. 2.5-5 s: holds the end pose. Environment: faint water dimples, one falling aqua drop only.'
  clip_length_s: 5
  keep: 0.5-2.5 s
  risks:
  - 'first-last-frame: the end frame must be a generated and approved keyframe; if the model skips the beat between the frames, split the action or retime'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 2 s action and retime it in the edit (speed-up = clip action span / 2 s)'
  - 'same framing as SC02-SH020: reuse its start frame as base'
  - upgrade to first-last-frame if supported
```

###### SC03-SH020

```yaml
record: shot
id: SC03-SH020
scene: SC03
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC03_direction@2
- SC03_animation@2
- SC03_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: She refolds in a flash, faster and angrier
screenplay_ref: SC03, action line 2 (refolds)
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: SOGGY
  position: centre-left, head at the water then seated in the boat
  facing: profile, facing screen right
  action: scoops the oar and refolds the boat in a flash
  expression_start: soggy scowl
  expression_end: angry scowl
  eyeline: forward right
props:
- id: PR-BOAT
  state: PR-BOAT:FLAT
  position: flat, then PR-BOAT:CREASED
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: raised, then under the left arm
- id: PR-OAR
  state: PR-OAR:HELD
  position: floating, then in Pip's right hand
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: water surface
  midground: Pip with the boat
  background: dark slate sky and distant shore
  composition: Pip centre-left
camera:
  shot_size: MS
  angle: eye-level
  height_m: 0.03
  position: south bank centre-left, closer, water level, 0.30 m
  lens_mm: 50
  aperture: f/5.6
  depth_of_field: 'deep (2D: sharp, soft wash behind)'
  focus: Pip; the shadow at lower right sharp
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, darker toward the right, very soft, ~7200 K'
  fill: none; dim blue-grey bounce from the water, ~2.5:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: slate cel shadow tone (#4B5D6B) under objects
  palette:
  - 'wet slate #6E8797'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: Pip faces screen right
start_state: Pip's soggy scowling head is above the water left of centre, in profile facing screen right, the closed seed raised in her left arm; paper soaked, limp and dull mustard, droopy limbs, beads of water; flat soggy cream paper floats beside her and the yellow oar floats on the surface
end_state: Pip sits in a lopsided cream boat, one side wall lower, extra crease lines, damp grey-cream, left of centre in profile facing screen right, the oar gripped in her right hand, the closed seed tucked under her left arm; paper bright yellow with extra wrinkles and a slightly crooked left ear and leg fold; scowl
action_timeline:
- '0-0.4 s: she scowls and scoops the oar'
- '0.4-1.1 s: a fast refold with quick creases'
- '1.1-1.5 s: the lopsided boat pops up around her'
dialogue: []
sound: 'quick crinkle and pop, a low worried hum (screenplay: ears go flat)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC03-SH010
transition_out: cut to SC03-SH025
continuity:
- Pip SOGGY -> CREASED
- Boat FLAT -> CREASED
- Oar FLOAT -> TUCK -> HAND
generation:
  mode: first-last-frame
  start_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small folded paper boat in matte cream paper with a flat bottom, two pointed ends, straight side walls and crisp crease lines, flat cel color with one darker cream shade tone and a thin dark-teal outline. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip''s soggy scowling head is above the water left of centre, in profile facing screen right, the closed seed raised in her left arm; paper soaked, limp and dull mustard, droopy limbs, beads of water; flat soggy cream paper floats beside her and the yellow oar floats on the surface. Darker slate overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: slate grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small folded paper boat in matte cream paper with a flat bottom, two pointed ends, straight side walls and crisp crease lines, flat cel color with one darker cream shade tone and a thin dark-teal outline. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip sits in a lopsided cream boat, one side wall lower, extra crease lines, damp grey-cream, left of centre in profile facing screen right, the oar gripped in her right hand, the closed seed tucked under her left arm; paper bright yellow with extra wrinkles and a slightly crooked left ear and leg fold; scowl. Darker slate overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: slate grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-0.9 s: she scowls and scoops the oar. 0.9-1.6 s: a fast refold with quick creases. 1.6-2 s: the lopsided boat pops up around her. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'first-last-frame: the end frame must be a generated and approved keyframe; if the model skips the beat between the frames, split the action or retime'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - lopsided boat must stay consistent (PR-BOAT:CREASED)
  - shadow must stay a plain grey ellipse
```

###### SC03-SH025

```yaml
record: shot
id: SC03-SH025
scene: SC03
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC03_direction@2
- SC03_animation@2
- SC03_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: 'Escalation and worry: a shadow grows on the water and Pip''s ears flatten'
screenplay_ref: SC03, action line 3
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: centre-left, seated in the boat
  facing: profile, facing screen right
  action: her eyes follow a growing shadow and her ears flatten
  expression_start: scowl
  expression_end: flat worried ears
  eyeline: down right to the shadow
props:
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: under Pip, afloat
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: under Pip's left arm
- id: PR-OAR
  state: PR-OAR:HELD
  position: across her lap under her right hand
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: water surface with the shadow at lower right
  midground: Pip in the boat
  background: dark slate sky and distant shore
  composition: Pip centre-left, shadow lower right
camera:
  shot_size: MS
  angle: eye-level
  height_m: 0.03
  position: south bank centre-left, closer, water level, 0.30 m
  lens_mm: 50
  aperture: f/5.6
  depth_of_field: 'deep (2D: sharp, soft wash behind)'
  focus: Pip; the shadow at lower right sharp
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, darker toward the right, very soft, ~7200 K'
  fill: none; dim blue-grey bounce from the water, ~2.5:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: slate cel shadow tone (#4B5D6B) under objects
  palette:
  - 'wet slate #6E8797'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: Pip faces screen right
start_state: Pip sits in the lopsided creased cream boat left of centre in profile facing screen right, the closed seed under her left arm, the oar across her lap under her right hand; paper bright yellow with extra wrinkles and a slightly crooked left ear and leg fold; scowl; the water at the lower right is plain and empty
end_state: The same pose with a small soft grey round shadow on the water at the lower right of the boat, Pip's eyes turned toward it and her ears flat and worried; no object in the sky
action_timeline:
- '0-1 s: a small round shadow grows on the water at the lower right; her eyes follow it'
- '1-1.5 s: her ears flatten; hold'
dialogue: []
sound: 'quick crinkle and pop, a low worried hum (screenplay: ears go flat)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC03-SH020
transition_out: cut to SC04-SH010
continuity:
- Pip CREASED
- Oar REST (across lap)
- Shadow is a ground shadow, no drop in frame
generation:
  mode: image-to-video
  start_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip sits in the lopsided creased cream boat left of centre in profile facing screen right, the closed seed under her left arm, the oar across her lap under her right hand; paper bright yellow with extra wrinkles and a slightly crooked left ear and leg fold; scowl; the water at the lower right is plain and empty. Darker slate overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: slate grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same pose with a small soft grey round shadow on the water at the lower right of the boat, Pip''s eyes turned toward it and her ears flat and worried; no object in the sky. Darker slate overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: slate grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.5 s: a small round shadow grows on the water at the lower right; her eyes follow it. 1.5-2 s: her ears flatten; hold. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - lopsided boat must stay consistent (PR-BOAT:CREASED)
  - shadow must stay a plain grey ellipse
```


### SC04 — EXT. PUDDLE - MID-WATER - DAY


#### Direction
Source: `06_direction/SC04_direction.md`

##### SC04 Direction — EXT. PUDDLE - MID-WATER - DAY

###### Must-see story facts
- Pip looks up; a third drop high above, small and bright, getting bigger.
- Pip squints, holds the seed over her head and pops its fluff open like a parasol.
- The drop lands on the fluff, bounces twice, splashes beside the boat.
- The splash wave spins the lopsided boat once and sends it speeding forward; Pip grins holding the seed up.

###### Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Pip | to cross dry | the third drop | shield the seed with its own fluff |
| Raindrop | nothing | the fluff | bounces |

- Subtext: Pip has stopped repeating herself and tried something new.
- Turn: beaten → cleverly protected (the decisive choice).
- Audience position: same as Pip, then ahead.
- Visual thesis: the white fluff is the brightest thing in the frame and Pip is tiny under it — carried by SH030-SH055.
- Genre playbook: comedy (subvert the rule of three; hold on the payoff).

###### Change note (v2, 2026-10-19; change request from production-manager)
- QC-102: SH040 (fall+land+bounces | splash crown/fade) split into SH040 (land and two bounces) and new SH045 (fall in, splash crown, ripples). SH050 (spin+accelerate) split into SH050 (spin once) and new SH055 (speed away). SH030 kept as one action (the pop; ball to parasol), suited to first-last-frame.
- QC-109: SH010 is PROFILE facing screen right (flat side-on), matching the camera wording and the film's side-on staging; the shot record and storyboard (which say three-quarter) must change to profile.
- QC-113: climax beats get 2.5 s each (SH030 transformation, SH040 bounce gag); time taken from SH010/SH020 and the old holds. Cuts: bounce gag is 4.0 s together with SH045 splash.
- Camera static; SH045 and SH055 are new IDs.
- Erratum (2026-10-19, no version bump; CR-ISSUE-07, production-manager conflict resolution): SH050 start state puts the splash wave at the RIGHT of the boat, consistent with SH045 (splash lower right), so the spin happens as the wave reaches the boat (composition 'wave at right'). SH030: the oar stow is the first 0.3 s of the shot (Pip's right hand lays the oar on the boat floor, then both hands lift the seed); SH010 still shows the oar HELD (REST).

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | Pip sees the third drop | Pip | action 1 |
| B2 | Pip opens the fluff | Pip | action 2 |
| B3 | bounce and splash | drop | action 3 (SH040 bounces, SH045 splash) |
| B4 | boat spins and speeds forward | splash | action 3 (SH050 spin, SH055 speed; Pip grins, seed held up) |

###### Blocking
Floor plan: LOC-PUDDLE, mid-water.
- Start positions: Pip seated in the lopsided boat, seed under her arm, centre-right of frame.
- Moves: she lifts the seed overhead and the fluff opens; drop hits and bounces; boat spins once and shoots right.
- End positions: boat moving right at speed, Pip seated, seed overhead, grinning.
- Axis and camera side: same as SC01.
- Screen direction in/out: boat exits screen right.

###### Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Pip | to spot | chin up, eyes follow the drop |
| B2 | Pip | to decide | squint, both hands lift the seed overhead |
| B3 | Pip | to brace | eyes wide, hold still under the fluff |
| B4 | Pip | to enjoy | grin as boat spins (SH050) and speeds (SH055) |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC04-SH010 | MCU | eye-level | static | Pip (PROFILE, facing screen right) | Pip looks up, eyes tracking, then squints; ends in a determined squint, chin up, still in profile | Pip centre in side-on profile, chin up | flat | soft overcast | 1.5 s | she sees it and decides | cut |
| SC04-SH020 | POV | low | static | sky above Pip | one small bright aqua drop high in a grey sky grows larger as it falls toward camera; ends big and close | drop centre, grey sky | flat | soft overcast | 1.0 s | the threat | cut |
| SC04-SH030 | MS | eye-level | static | Pip and seed | in the first 0.3 s Pip's right hand lays the oar on the boat floor (PR-OAR:STOWED), then she lifts the seed with both hands and the fluff pops open like a parasol over her; ends with the open fluff above her | Pip lower centre, fluff upper centre | flat | soft overcast, fluff white pops | 2.5 s | the decisive choice (transformation, climax beat) | cut |
| SC04-SH040 | WS | eye-level | static | drop, fluff, boat | the drop lands on the open fluff and bounces up and down twice; ends with the drop rising off the fluff after the second bounce, Pip still under the fluff | fluff upper center-left, boat below | flat, deep | soft overcast | 2.5 s | the landing/bounce gag (climax beat) | cut |
| SC04-SH045 | WS | eye-level | static | drop and water beside boat | the drop falls into the water beside the boat and a splash crown rises, then falls back to ripples; ends with ripples beside the boat | splash lower right, boat and fluff left | flat, deep | soft overcast | 1.5 s | the splash | cut |
| SC04-SH050 | WS | eye-level | static | boat | the splash wave spins the lopsided boat once, Pip under the open fluff; ends with the boat facing right, spin finished | boat centre, wave at right (arriving from the right) | flat, deep | slightly brighter overcast | 1.5 s | the spin | cut |
| SC04-SH055 | WS | eye-level | static | boat | the boat speeds forward and right, Pip grinning with the seed held up; ends with the boat at the right third of the frame | boat enters centre, exits to right third | flat, deep | slightly brighter overcast | 1.0 s | reward and momentum | cut |

Total: 11.5 s vs estimate 9 s (+28%; explained: the two climax beats here get 2.5 s each and compound shots were split; compensated by SC01/SC03 trims, film total 42.0 s). Version 2 re-cut: one primary action per shot.

###### Coverage and rhythm
The only scene with cutting: seven shots for the comic climax. The reaction (SH010) comes before the idea (SH030); the transformation (2.5 s) and the bounce (2.5 s) are held longest; the splash, spin and exit are quick beats.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH030 | fluff transforms from ball to parasol | keyframe both states (PR-SEED:CLOSED start, PR-SEED:OPEN end) |
| SH010 | profile face, eyes tracking | profile keeps identity simple; no turn |
| SH040 | drop bouncing on fluff | one motion only: two vertical bounces; end frame drop above the fluff; fallback: hand-animate the bounce |
| SH045 | splash crown appearing and fading | start = drop just above water; end = ripples; fallback: composite the crown element |
| SH050 | boat spin | one rotation, no travel; if Kling fails, use a smear-frame crossfade |
| SH055 | travel and exit | start = SH050 end frame; simple lateral slide right |

###### Specialist and VFX flags
- action-director: none
- animation-director: yes (parasol pop, bounces, spin)
- vfx: splash crown on SH045 may need a composited element

###### Handoff
- Produced: SC04_direction@2 (APPROVED under autonomy), 7 shots, 11.5 s
- Open items: shot record and storyboard for SH010 must change to profile
- Next: cinematographer, script-supervisor


#### Animation plan
Source: `06_direction/SC04_animation.md`

##### SC04 Animation Plan (v2)

###### Change note (v2, 2026-10-19)
- Re-split to SC04_direction@2: seven shots, 11.5 s = 276 f. SH010 36, SH020 24, SH030 60 (climax), SH040 60 (climax), new SH045 36, SH050 36 (spin only), new SH055 24.
- QC-109: SH010 is a flat PROFILE facing screen right (no three-quarter).
- QC-107 / QC-106: the oar is stowed on screen at the start of SH030 (right hand lays it on the boat floor, PR-OAR:STOWED), then both hands lift the seed. Script-supervisor should record STOWED beginning SC04-SH030 f1-f8.
- Every shot has a clear start pose and end pose and is marked for Kling 2.1 first-last-frame (FLF).
- Erratum (2026-10-19, no version bump; CR-ISSUE-13): SH050 splash wave is at the RIGHT of the boat (per SC04_direction erratum); K1, K2 and the start-pose text corrected. depends_on props@1 -> props@2 (all SC0N_animation, no version bump).

###### Hand and prop rule (QC-106; identical in all five plans)
- PR-OAR is in Pip's RIGHT hand (the near-camera hand: Pip faces screen right, camera on the south bank). PR-SEED:CLOSED is clamped UNDER her LEFT arm (far arm), fluff over her left shoulder, left hand free.
- Salute = LEFT hand: the left upper arm stays pinned (seed stays tucked), only forearm and hand lift to the brow. The right hand keeps the oar, laid across her lap.
- Sink: right hand lets go, oar floats flat on the surface; left arm thrusts the seed up so the fluff stays dry. Recovery: right hand scoops the oar, tucks it under the right arm while she climbs and creases, and re-grips it in the right hand as the refold finishes.
- SC04-SH030 stows the oar on the boat floor (PR-OAR:STOWED); from then both hands hold the seed.

###### Motion style rules
- Feel: 24 fps; characters on twos (12 drawings/s); drop, splash, pops and impacts on ones. Moving holds only (1-2 px drift, blink, ripple creep).
- Exaggeration: cartoony. Squash and stretch: Pip and boat up to 25%, drop up to 40%, volume preserved.
- Staging: side-on profile, Pip faces screen right (QC-109). Never deforms: Pip's triangular head and round black eyes (squint with lids/brows only), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform dark-teal outline; smears at most 3 frames.
- Timing convention: segment lengths are frames and sum to the shot total; key frame numbers are 1-based.

###### Shots (276 f = 11.5 s)

####### SC04-SH010 (1.5 s = 36 f)
- Acting beat: perceive -> decide. Eyes track up, then head, then a determined squint.
- Key poses:
  - K1 f1: MCU, Pip in flat profile facing right, level head, worried round eyes, flat ears (seed fluff over her left shoulder, out of frame below: oar still in her right hand).
  - K2 f10: Eyes slide up (eyes lead).
  - K3 f18: Head tilts up, chin lifts, ears begin to prick.
  - K4 f28: Brows lower, lids narrow: determined squint.
  - K5 f36: Hold with a tiny nod.
- Timing chart: hold (6) + eyes lead (8) + head lifts (8) + squint (8) + hold with nod (6) = 36 f.
- Principles: eyes lead, slow in/out on the head, overlap of the ears (2 f lag).
- Lip-sync accents: none.
- Start pose (frame text): Medium close-up of Pip, tiny yellow origami frog in flat side profile facing right, head level, big round worried black eyes, ears flat, creased paper, soft overcast.
- End pose (frame text): Same medium close-up in profile facing right, chin up, eyes narrowed in a determined squint (round beads under lowered brows), ears pricked up.
- Off-model risks: squint must be lid/brow, not an eye-shape change; no three-quarter turn.
- Kling 2.1 FLF: YES. "Her eyes look up, then her head lifts and she squints with determination; profile, static camera."

####### SC04-SH020 (1.0 s = 24 f)
- Acting beat: the threat. The drop grows as it falls toward camera.
- Key poses:
  - K1 f1: One tiny aqua drop at centre-top of a flat grey sky.
  - K2 f16: Slight wobble, about 15% of frame.
  - K3 f24: One large glossy drop, big and close, centre.
- Timing chart: accelerating scale 5% -> 30% over 24 f in one move (ease in); wobble at f16.
- Principles: acceleration (spacing widens), stretch on the way down.
- Lip-sync accents: none.
- Start pose (frame text): Flat grey-blue overcast sky, one tiny aqua teardrop at the centre-top, nothing else.
- End pose (frame text): Same sky, one large glossy aqua teardrop at the centre, big and close, nothing else.
- Off-model risks: one clean teardrop only; no extra drops.
- Kling 2.1 FLF: YES (easy). "The single drop falls toward the camera and grows; static camera."

####### SC04-SH030 (2.5 s = 60 f)  CLIMAX BEAT 1
- Acting beat: decide -> act. She stows the oar, lifts the seed with both hands, squeezes, and the fluff pops open like a parasol.
- Key poses:
  - K1 f1: Pip seated in the creased lopsided boat, profile facing right, oar in her right hand, closed seed under her left arm, squint.
  - K2 f8: Oar laid across the boat floor (STOWED), right hand free.
  - K3 f22: Both hands on the stem, seed lifted overhead, ball intact.
  - K4 f30: Anticipation: fluff ball squeezed small, Pip crouches 10%.
  - K5 f36: POP: fluff bursts wide like a parasol (on ones).
  - K6 f50: Overshoot 10% then settle, gentle bob.
  - K7 f60: Pip under the open fluff, both hands on the stem, eyes wide and braced.
- Timing chart: stow oar (8) + lift seed (14) + squeeze (8) + burst on ones (6) + overshoot and settle (14) + moving hold (10) = 60 f.
- Principles: anticipation (squeeze), squash/stretch on the fluff, overlap (filaments lag), staging with the white fluff the brightest shape.
- Lip-sync accents: none.
- Start pose (frame text): Pip in profile facing right seated in the lopsided creased cream boat, yellow oar in her right hand, closed white dandelion seed tucked under her left arm, determined squint, soft overcast.
- End pose (frame text): Pip seated in the boat in profile facing right, yellow oar lying on the boat floor, both hands holding the stem of the dandelion seed overhead, its fluff fully open and spread like a white parasol above her, eyes wide and braced.
- Off-model risks: fluff ball -> parasol transformation (PR-SEED:CLOSED start, PR-SEED:OPEN end keyframes); oar must not reappear in her hand.
- Kling 2.1 FLF: YES, the ideal case (two clear states). "She lifts the seed overhead and the fluff pops open like a parasol; static camera."

####### SC04-SH040 (2.5 s = 60 f)  CLIMAX BEAT 2
- Acting beat: brace. The drop lands on the fluff and bounces twice.
- Key poses:
  - K1 f1: Pip braced under the open fluff, drop above it at the top of frame.
  - K2 f21: Contact 1: drop squashes on the fluff, fluff dips, Pip's knees flex.
  - K3 f29: Bounce 1 apex: drop stretches up.
  - K4 f39: Contact 2: smaller squash.
  - K5 f47: Bounce 2 apex: smaller pop.
  - K6 f60: Drop rises slowly off the fluff, fluff bobbing, Pip still under it, eyes tracking up.
- Timing chart: hold (6) + fall on ones (14) + contact (4) + up (8) + down (6) + contact 2 (4) + up 2 (8) + slow rise (10) = 60 f.
- Principles: squash/stretch, decreasing amplitude on the second bounce, follow-through (fluff dips and rebounds, 2 f lag).
- Lip-sync accents: none.
- Start pose (frame text): Pip under the open white fluff parasol in the lopsided boat, both hands on the stem, braced; one aqua drop directly above the fluff near the top of the frame; oar on the boat floor.
- End pose (frame text): Same composition, the aqua drop a short way above the fluff after its second bounce, rising; the fluff still open and slightly dipped; Pip braced under it.
- Off-model risks: riskiest motion; generate 3 takes; fallback is one bounce per clip or hand-keyed frames.
- Kling 2.1 FLF: YES (start: drop high; end: drop just above the fluff). "The drop lands on the fluff and bounces twice; static camera, Pip stays still."

####### SC04-SH045 (1.5 s = 36 f)
- Acting beat: the splash. Drop falls beside the boat; crown rises and falls.
- Key poses:
  - K1 f1: Drop just above the water to the right of the boat; boat and open fluff at left.
  - K2 f9: Impact into the water.
  - K3 f19: Splash crown at its peak.
  - K4 f27: Crown collapsing.
  - K5 f36: Ripples only, boat and fluff at left.
- Timing chart: fall on ones (8) + impact (2) + crown rises (8) + crown falls (8) + ripples (10) = 36 f.
- Principles: overlap (droplets lag), arcs on droplets, ease-out on the rings.
- Lip-sync accents: none.
- Start pose (frame text): Wide view: lopsided boat with Pip under the open fluff at left, one aqua drop in the air just above the water to the right of the boat.
- End pose (frame text): Same wide view, drop gone, calm expanding ripple rings beside the boat at lower right, Pip under the open fluff.
- Off-model risks: the splash crown may be too complex; composite it as an element if needed.
- Kling 2.1 FLF: YES. "The drop falls into the water beside the boat; a splash crown rises and falls back to ripples; static camera."

####### SC04-SH050 (1.5 s = 36 f)
- Acting beat: surprise. The wave spins the boat once.
- Key poses:
  - K1 f1: Boat at centre, Pip under the open fluff, wave arriving from the right.
  - K2 f7: Wave lifts the boat's right side; the boat begins to turn.
  - K3 f16: Mid-spin (90 degrees through the turn), Pip counter-leans, fluff lags.
  - K4 f25: Spin completing.
  - K5 f36: Boat facing right again, spin finished, fluff bobbing.
- Timing chart: wave arrives (6) + anticipation tilt (6) + spin ease in/out (18) + settle facing right (6) = 36 f.
- Principles: slow in/out on the spin, overlapping fluff, arcs on rotation.
- Lip-sync accents: none.
- Start pose (frame text): Lopsided cream boat at the centre, Pip under the open white fluff in profile facing right, a small wave at the right edge of the boat.
- End pose (frame text): Same boat at the centre, facing right again, Pip under the open fluff, grin starting, ripples around.
- Off-model risks: 360-degree spin breaks identity; fallback: turntable 180 plus smear and a hop, or a smear-frame crossfade.
- Kling 2.1 FLF: YES (start and end look nearly the same, so give the prompt the spin: "the boat spins once in place"). Fallback: two clips.

####### SC04-SH055 (1.0 s = 24 f)
- Acting beat: enjoy. The boat speeds forward; Pip grins.
- Key poses:
  - K1 f1: Boat at centre, facing right (= SH050 end).
  - K2 f5: Stern dips (anticipation), Pip leans back.
  - K3 f17: Boat accelerating right, Pip grinning, fluff trailing.
  - K4 f24: Boat at the right third of the frame, fast, the wake behind.
- Timing chart: anticipation (4) + accelerate (12) + overshoot and glide (8) = 24 f.
- Principles: anticipation, ease-in, follow-through of the fluff and wake.
- Lip-sync accents: none.
- Start pose (frame text): identical to SC04-SH050 end pose.
- End pose (frame text): Boat at the right third of the frame moving right, Pip grinning, seed held overhead with the open fluff, wake behind.
- Off-model risks: lateral slide only; no extra turns.
- Kling 2.1 FLF: YES. "The boat zips forward to the right; static camera."

###### Requests
- Model sheet views: Pip side-on, creased state, both hands overhead; Pip squint (profile).
- Timing conflicts: none. 36 + 24 + 60 + 60 + 36 + 36 + 24 = 276 f = 11.5 s.

###### Handoff
- Produced: SC04_animation@2 (APPROVED), 7 shots, 276 f
- Next: production-manager (compile frames), script-supervisor (oar STOWED at SC04-SH030 f1-f8)


#### Camera and lighting
Source: `07_camera/SC04_camera.md`

##### SC04 Camera and Lighting

###### Change note (v2, 2026-10-19)
- Direction@2 re-cut: new SC04-SH045 (splash) and SC04-SH055 (speed away); SH040 now covers land and bounces only (framing unchanged); SH050 covers the spin only. All static/locked-off.
- QC-109: SH010 is PROFILE facing screen right; generator wording changed from 'flat side-on face' to an explicit profile description.
- QC-111: rain defined once below; one falling drop only for SH020, SH040, SH045; SH030/SH050/SH055 state no falling beads.

**Rain definition (QC-111, defined once; all other wording refers to it):** "light rain" = faint dimples on the water surface plus faint background streaks only; NO falling beads or drops anywhere in the frame. The only thing that ever falls is the single hero drop in a drop shot, which carries the wording "one falling drop only: exactly one aqua drop falls, no other drop, bead or splash source in frame".

Color script row: grey-blue with lighter sky patch / fluff white, paper yellow / cool with white pop / brightest so far. Time/weather: morning, light rain (as defined below).
- Erratum (2026-10-19, no version bump; CR-ISSUE-13): SH050 generator wording now puts the splash wave at the RIGHT of the boat (per SC04_direction erratum).

###### Lighting setups

####### Setup A — Soft overcast daylight (SH050/SH055 a touch brighter per direction)
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | overcast sky dome (set source: sky) | overhead, no single direction; slight lift from camera-left sky | very soft | neutral cool ~6800 K (grey-blue) | cel shadow falls straight under objects |
| Fill | sky bounce off the puddle surface | from below, even | very soft | pale blue-grey | keeps shadow tone light, not black |
| Rim | none | — | — | — | 2D cel look uses an outline instead |
| Practicals | none | — | — | — | — |
| Atmosphere | light rain per the Rain definition: faint surface dimples and faint background streaks, no falling beads; faint wet sheen on leaf and soil | — | — | — | nothing falls through the frame except a hero drop in a drop shot |
Contrast feel: low (about 2:1). Changes during scene: none.

```
         sky (overhead dome)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC04-SH010 | A | 70 mm: flat, slightly compressed | f/4, shallow wash background | Pip's eyes | 0.03 | 0.25 | south bank centre, close | locked-off | static | none | medium close-up, Pip in strict PROFILE facing screen right (side-on, one eye visible, nose pointing right, not three-quarter, not toward camera), chin up, soft wash background, no falling beads |
| SC04-SH020 | A | 35 mm: flat, wide | f/8, deep | drop | 0.03 | 0.2 | POV looking up from Pip's seat; sky filling frame | locked-off | static | none | upward view of flat grey sky, no horizon; ONE small bright aqua drop high in the sky grows larger toward camera; one falling drop only: no other drop, bead or streak falls in the sky |
| SC04-SH030 | A | 50 mm | f/5.6 | Pip and the opening fluff | 0.03 | 0.3 | south bank centre | locked-off | static | none | medium flat side view, white fluff opens like a parasol above Pip, fluff the brightest thing in frame, nothing falling yet |
| SC04-SH040 | A | 35 mm | f/8, deep | fluff and drop | 0.03 | 0.45 | south bank centre-left | locked-off | static | none | wide flat side view, fluff upper left of centre, ONE aqua drop lands on the fluff and bounces up and down twice, Pip under the fluff; one falling drop only, no other drop or bead |
| SC04-SH045 | A | 35 mm | f/8, deep | drop and splash crown | 0.03 | 0.45 | south bank centre-left (matched to SH040) | locked-off | static | none | wide flat side view, ONE aqua drop falls into the water beside the boat, splash crown rises lower right then falls back to ripples, boat and fluff left; one falling drop only |
| SC04-SH050 | A | 35 mm | f/8, deep | boat | 0.03 | 0.45 | south bank centre | locked-off | static | none | wide flat side view, wave at right spins the boat once at centre in place, Pip under the open fluff, no falling beads |
| SC04-SH055 | A | 35 mm | f/8, deep | boat | 0.03 | 0.45 | south bank centre (matched to SH050) | locked-off | static; the boat slides, the camera does not | none | wide flat side view, boat enters centre and speeds right to the right third, Pip grinning with the seed held up, no camera pan, no falling beads |

###### Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts.
- Matched pairs: wide shots in this scene share 35 mm, 0.03 m height, 0.45 m distance.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

###### Proposals to the director
- none

###### Handoff
- Produced: SC04_camera@2 (APPROVED), setup A, 7 shots (new: SC04-SH045, SC04-SH055)
- Open items: none
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC04` in section 11.


#### Shot records
Source: `08_master/shots/SC04.md`

##### Shot records SC04

Recompiled (v2) from approved department documents under brief@2 (Kling 2.1: image-to-video, first-last-frame, 5 s or 10 s clips, up to 3 reference images) after the director's re-cut of packed shots (QC-102). Rules: one primary action and one end state per shot; full locks for the shot's subjects, short locks for secondary props, speck-size characters and the location; palette in colour words; `motion` is timed in clip time with a 0.5 s lead-in and a hold to 5 s; `keep` names the part used in the cut; `clip_length_s` is 5 (duration + 1 s rounded up to a Kling length). Mode is first-last-frame where the end state carries the story, else image-to-video. Sound, music and VFX carry over from the v1 records until the stage 10 plans.

###### SC04-SH010

```yaml
record: shot
id: SC04-SH010
scene: SC04
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC04_direction@2
- SC04_animation@2
- SC04_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: 'She sees it and decides: worry turns to determination'
screenplay_ref: SC04, action line 1
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: centre, chest up
  facing: strict profile, facing screen right
  action: looks up, eyes leading, then squints
  expression_start: flat worried ears
  expression_end: determined squint
  eyeline: up and right
props:
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: under Pip, lower frame, mostly out of frame
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: none
  midground: Pip in profile
  background: soft watercolor wash
  composition: Pip centre in side-on profile, chin up
camera:
  shot_size: MCU
  angle: eye-level
  height_m: 0.03
  position: south bank centre, close, water level, 0.25 m
  lens_mm: 70
  aperture: f/4
  depth_of_field: 'shallow (2D: sharp face, softer wash behind)'
  focus: Pip's eyes
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: Pip faces screen right
start_state: Pip sits in the lopsided creased cream boat in strict profile facing screen right, chest up, at the centre of the frame; paper bright yellow with extra wrinkles and a slightly crooked left ear and leg fold; worried round eyes, ears flat; soft watercolor wash behind
end_state: The same profile view, chin up, eyes narrowed in a determined squint, ears pricked up
action_timeline:
- '0-0.3 s: hold'
- '0.3-0.9 s: eyes lead up, head tilts up'
- '0.9-1.5 s: brows lower into a squint, tiny nod'
dialogue: []
sound: a quiet pause; one rain plip nearby
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC03-SH025
transition_out: cut to SC04-SH020
continuity:
- Pip CREASED
- Seed CLOSED under left arm (off-frame)
- Oar HELD, REST (off-frame)
generation:
  mode: image-to-video
  start_frame: 'medium close-up at water level, eye-level, 70 mm lens, camera 0.03 m high, soft wash behind. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip sits in the lopsided creased cream boat in strict profile facing screen right, chest up, at the centre of the frame; paper bright yellow with extra wrinkles and a slightly crooked left ear and leg fold; worried round eyes, ears flat; soft watercolor wash behind. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'medium close-up at water level, eye-level, 70 mm lens, camera 0.03 m high, soft wash behind. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same profile view, chin up, eyes narrowed in a determined squint, ears pricked up. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-0.8 s: hold. 0.8-1.4 s: eyes lead up, head tilts up. 1.4-2 s: brows lower into a squint, tiny nod. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - keep the squint on the lid, not an eye-shape change
```

###### SC04-SH020

```yaml
record: shot
id: SC04-SH020
scene: SC04
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC04_direction@2
- SC04_animation@2
- SC04_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-DROP@1
purpose: 'The threat: a drop falls toward camera'
screenplay_ref: SC04, action line 2
duration_s: 1.0
characters:
- id: CH-DROP
  costume: CO-DROP-01
  costume_state: FALLING
  position: centre of the sky, growing
  facing: no face; falling toward camera
  action: accelerates and grows toward the camera
  expression_start: n/a (faceless), small
  expression_end: n/a (faceless), large and close
  eyeline: n/a
props: []
location:
  id: LOC-PUDDLE
  area: sky above Pip
  time_of_day: morning
  weather: light rain
frame:
  foreground: none
  midground: the drop
  background: flat grey sky
  composition: drop centre, grey sky
camera:
  shot_size: POV
  angle: low
  height_m: 0.03
  position: Pip's seat looking straight up at the sky, 0.20 m
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout)'
  focus: the drop
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: drop falls toward camera
start_state: 'Upward point-of-view from Pip''s seat: a flat grey sky filling the frame with no horizon, one small bright aqua drop high at the centre of the sky'
end_state: The same flat grey sky with the drop large, glossy and close, filling the centre of the frame
action_timeline:
- '0-0.7 s: the drop accelerates toward camera and grows'
- '0.7-1 s: it looms large and wobbles once'
dialogue: []
sound: 'a rising whistle-like rain hiss (screenplay: drop getting bigger)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC04-SH010
transition_out: cut to SC04-SH030
continuity:
- Drop only
- Oar HELD, REST (not visible)
generation:
  mode: image-to-video
  start_frame: 'point-of-view shot at water level, low, 35 mm lens, camera 0.03 m high. A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface. Glossy bright aqua water finish with a single curved white highlight, a thin darker aqua rim, flat cel color with one hard shadow tone and a thin dark-teal outline. Upward point-of-view from Pip''s seat: a flat grey sky filling the frame with no horizon, one small bright aqua drop high at the centre of the sky. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, one falling aqua drop only. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'point-of-view shot at water level, low, 35 mm lens, camera 0.03 m high. A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface. Glossy bright aqua water finish with a single curved white highlight, a thin darker aqua rim, flat cel color with one hard shadow tone and a thin dark-teal outline. The same flat grey sky with the drop large, glossy and close, filling the centre of the frame. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, one falling aqua drop only. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.2 s: the drop accelerates toward camera and grows. 1.2-1.5 s: it looms large and wobbles once. 1.5-5 s: holds the end pose. Environment: faint water dimples, one falling aqua drop only.'
  clip_length_s: 5
  keep: 0.5-1.5 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1 s action and retime it in the edit (speed-up = clip action span / 1 s)'
  - keep a single clean drop, no extra drops
  - easy shot
```

###### SC04-SH030

```yaml
record: shot
id: SC04-SH030
scene: SC04
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC04_direction@2
- SC04_animation@2
- SC04_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: 'The decisive choice: the closed fluff pops open like a parasol (transformation)'
screenplay_ref: SC04, action line 3
duration_s: 2.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: lower centre, seated in the boat
  facing: profile, facing screen right
  action: lays the oar on the boat floor, lifts the seed overhead and the fluff pops open
  expression_start: determined squint
  expression_end: confident grin under the fluff
  eyeline: up at the drop
props:
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: under the left arm, then overhead in both hands, becoming OPEN
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: under Pip, lopsided
- id: PR-OAR
  state: PR-OAR:STOWED
  position: laid across the boat floor in the first 0.3 s
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: none
  midground: Pip and the opening fluff
  background: grey sky and distant shore
  composition: Pip lower centre, fluff upper centre
camera:
  shot_size: MS
  angle: eye-level
  height_m: 0.03
  position: south bank centre, water level, 0.30 m
  lens_mm: 50
  aperture: f/5.6
  depth_of_field: 'deep (2D: sharp, soft wash behind)'
  focus: Pip and the fluff
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: Pip faces screen right
start_state: Pip sits at lower centre in the lopsided creased cream boat in profile facing screen right, the yellow oar across her lap under her right hand, the closed seed under her left arm; paper bright yellow with extra wrinkles and a slightly crooked left ear and leg fold; determined squint. The seed's fluff is a closed round ball
end_state: Pip sits at lower centre in the same boat in profile facing screen right, both hands gripping the stem of the seed raised above her head, its white fluff fully open and spread wide like a parasol and the brightest white in the frame; the oar lies across the boat floor; confident grin
action_timeline:
- '0-0.3 s: her right hand lays the oar on the boat floor'
- '0.3-1 s: both hands lift the seed overhead'
- '1-1.5 s: she squeezes the fluff'
- '1.5-2.5 s: it bursts open like a parasol, settles and bobs'
dialogue: []
sound: 'a soft poof as the fluff opens (screenplay: pops open)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC04-SH020
transition_out: cut to SC04-SH040
continuity:
- Oar REST -> STOWED (on screen)
- Seed CLOSED -> OPEN
- Pip CREASED
generation:
  mode: first-last-frame
  start_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A single dandelion seed with a thin pale sage-green stem, a small brown pointed seed at the bottom and a round soft feathery white fluff at the top made of fine radiating filaments, flat cel color with a thin dark-teal outline. Small cream folded paper boat with pointed ends and crisp creases. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip sits at lower centre in the lopsided creased cream boat in profile facing screen right, the yellow oar across her lap under her right hand, the closed seed under her left arm; paper bright yellow with extra wrinkles and a slightly crooked left ear and leg fold; determined squint. The seed''s fluff is a closed round ball. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A single dandelion seed with a thin pale sage-green stem, a small brown pointed seed at the bottom and a round soft feathery white fluff at the top made of fine radiating filaments, flat cel color with a thin dark-teal outline. Small cream folded paper boat with pointed ends and crisp creases. Small bright yellow folded paper oar with a thin handle and a flat blade. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip sits at lower centre in the same boat in profile facing screen right, both hands gripping the stem of the seed raised above her head, its white fluff fully open and spread wide like a parasol and the brightest white in the frame; the oar lies across the boat floor; confident grin. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-0.8 s: her right hand lays the oar on the boat floor. 0.8-1.5 s: both hands lift the seed overhead. 1.5-2 s: she squeezes the fluff. 2-3 s: it bursts open like a parasol, settles and bobs. 3-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-3 s
  risks:
  - 'first-last-frame: the end frame must be a generated and approved keyframe; if the model skips the beat between the frames, split the action or retime'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 2.5 s action and retime it in the edit (speed-up = clip action span / 2.5 s)'
  - 'fluff ball-to-parasol transformation: both states keyframed; prefer first-last-frame if Kling supports it'
```

###### SC04-SH040

```yaml
record: shot
id: SC04-SH040
scene: SC04
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC04_direction@2
- SC04_animation@2
- SC04_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-DROP@1
- CH-PIP@2
purpose: 'The landing gag: the drop lands on the open fluff and bounces twice'
screenplay_ref: SC04, action line 4
duration_s: 2.5
characters:
- id: CH-DROP
  costume: CO-DROP-01
  costume_state: FALLING
  position: above the fluff, upper left of centre
  facing: no face; bouncing
  action: lands on the fluff and bounces up and down twice
  expression_start: n/a (faceless), stretched tall
  expression_end: n/a (faceless), rising
  eyeline: n/a
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: centre, seated in the boat under the fluff
  facing: profile, facing screen right
  action: holds the seed steady as the fluff dips and rebounds
  expression_start: confident grin
  expression_end: surprised delight
  eyeline: up at the fluff
props:
- id: PR-SEED
  state: PR-SEED:OPEN
  position: overhead in both hands, dipping and rebounding
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: under Pip, lopsided
- id: PR-OAR
  state: PR-OAR:STOWED
  position: across the boat floor
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: ripple rings
  midground: fluff, drop and boat
  background: grey sky and distant shore
  composition: fluff upper centre-left, boat below
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.03
  position: south bank centre-left, water level, 0.45 m
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout)'
  focus: fluff, drop and boat
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: Pip faces screen right
start_state: 'Wide frame: Pip sits in profile facing screen right in the lopsided creased cream boat at the centre, both hands gripping the seed whose white fluff is fully open overhead like a parasol, upper left of centre; the single aqua drop hangs just above the fluff; paper bright yellow with extra wrinkles; confident grin; the oar lies across the boat floor'
end_state: The same wide frame; the single aqua drop rising off the top of the open fluff after its second bounce, the fluff back at its resting height, Pip still under it with her grin and both hands on the stem
action_timeline:
- '0-0.7 s: the drop falls onto the fluff; the fluff dips'
- '0.7-1.5 s: first bounce up and back down'
- '1.5-2.5 s: second bounce; the drop rises off the fluff'
dialogue: []
sound: 'a boing on each bounce, then a splash (screenplay cue: bounces, splash)'
music: none specified yet (music plan is stage 10)
vfx: 'pending VFX plan (stage 10): director flagged the splash crown as a possible composited element'
transition_in: cut from SC04-SH030
transition_out: cut to SC04-SH045
continuity:
- Seed OPEN
- Oar STOWED
- Pip CREASED
generation:
  mode: image-to-video
  start_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface. Thin sage stem topped with a round feathery white dandelion fluff. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Wide frame: Pip sits in profile facing screen right in the lopsided creased cream boat at the centre, both hands gripping the seed whose white fluff is fully open overhead like a parasol, upper left of centre; the single aqua drop hangs just above the fluff; paper bright yellow with extra wrinkles; confident grin; the oar lies across the boat floor. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, one falling aqua drop only. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface. Thin sage stem topped with a round feathery white dandelion fluff. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same wide frame; the single aqua drop rising off the top of the open fluff after its second bounce, the fluff back at its resting height, Pip still under it with her grin and both hands on the stem. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, one falling aqua drop only. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.2 s: the drop falls onto the fluff; the fluff dips. 1.2-2 s: first bounce up and back down. 2-3 s: second bounce; the drop rises off the fluff. 3-5 s: holds the end pose. Environment: faint water dimples, one falling aqua drop only.'
  clip_length_s: 5
  keep: 0.5-3 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 2.5 s action and retime it in the edit (speed-up = clip action span / 2.5 s)'
  - 'drop bouncing on the fluff is the riskiest motion: generate 3 takes; fallback two 1 s clips'
  - the splash crown may need compositing
```

###### SC04-SH045

```yaml
record: shot
id: SC04-SH045
scene: SC04
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC04_direction@2
- SC04_animation@2
- SC04_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-DROP@1
- CH-PIP@2
purpose: 'The splash: the drop falls into the water beside the boat'
screenplay_ref: SC04, action line 4 (splash)
duration_s: 1.5
characters:
- id: CH-DROP
  costume: CO-DROP-01
  costume_state: SPLASH
  position: lower right of the boat, at the water
  facing: no face; falling into the water
  action: falls into the water; a splash crown rises and falls back to ripples
  expression_start: n/a (faceless), falling
  expression_end: n/a (faceless), gone into ripples
  eyeline: n/a
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: left, seated in the boat under the fluff
  facing: profile, facing screen right
  action: holds the seed up and watches
  expression_start: grin
  expression_end: grin
  eyeline: down right to the splash
props:
- id: PR-SEED
  state: PR-SEED:OPEN
  position: overhead in both hands
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: left, lopsided
- id: PR-OAR
  state: PR-OAR:STOWED
  position: across the boat floor
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: splash at the lower right
  midground: boat and fluff on the left
  background: grey sky and distant shore
  composition: splash lower right, boat and fluff left
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.03
  position: south bank centre-left, water level, 0.45 m
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout)'
  focus: fluff, drop and boat
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: Pip faces screen right
start_state: 'Wide frame: Pip in profile facing screen right in the lopsided creased cream boat on the left of the frame under the open white fluff held in both hands; the single aqua drop in the air beside the boat at the lower right, just above the water'
end_state: The same wide frame; the water at the lower right of the boat showing only soft ripple rings where the drop fell; Pip and the open fluff unchanged on the left
action_timeline:
- '0-0.5 s: the drop falls into the water'
- '0.5-1 s: a splash crown rises'
- '1-1.5 s: the crown falls back to ripples'
dialogue: []
sound: 'a boing on each bounce, then a splash (screenplay cue: bounces, splash)'
music: none specified yet (music plan is stage 10)
vfx: 'pending VFX plan (stage 10): director flagged the splash crown as a possible composited element'
transition_in: cut from SC04-SH040
transition_out: cut to SC04-SH050
continuity:
- Seed OPEN
- Oar STOWED
generation:
  mode: image-to-video
  start_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. One bright aqua glossy teardrop with a white highlight, plain and smooth. Thin sage stem topped with a round feathery white dandelion fluff. Tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs. Small cream folded paper boat with pointed ends and crisp creases. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Wide frame: Pip in profile facing screen right in the lopsided creased cream boat on the left of the frame under the open white fluff held in both hands; the single aqua drop in the air beside the boat at the lower right, just above the water. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, one falling aqua drop only. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. One bright aqua glossy teardrop with a white highlight, plain and smooth. Thin sage stem topped with a round feathery white dandelion fluff. Tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs. Small cream folded paper boat with pointed ends and crisp creases. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same wide frame; the water at the lower right of the boat showing only soft ripple rings where the drop fell; Pip and the open fluff unchanged on the left. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, one falling aqua drop only. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1 s: the drop falls into the water. 1-1.5 s: a splash crown rises. 1.5-2 s: the crown falls back to ripples. 2-5 s: holds the end pose. Environment: faint water dimples, one falling aqua drop only.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - 'drop bouncing on the fluff is the riskiest motion: generate 3 takes; fallback two 1 s clips'
  - the splash crown may need compositing
```

###### SC04-SH050

```yaml
record: shot
id: SC04-SH050
scene: SC04
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC04_direction@2
- SC04_animation@2
- SC04_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: The splash wave spins the boat once
screenplay_ref: SC04, action line 5
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: centre, seated in the boat
  facing: profile, facing screen right
  action: rides the boat as it spins once
  expression_start: confident grin
  expression_end: dizzy grin
  eyeline: forward right
props:
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: centre, spinning once in place
- id: PR-SEED
  state: PR-SEED:OPEN
  position: overhead in both hands
- id: PR-OAR
  state: PR-OAR:STOWED
  position: across the boat floor
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: wave ripples at the right
  midground: boat with Pip
  background: grey sky and distant shore
  composition: boat centre, wave at right
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.03
  position: south bank centre, water level, 0.45 m
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout)'
  focus: boat
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: boat ends facing screen right
start_state: The lopsided creased cream boat at the centre of the frame in profile facing screen right with Pip seated in it, both hands holding the stem of the seed whose white fluff is open overhead like a parasol; a low splash wave of ripples arriving from the right; paper bright yellow with extra wrinkles; confident grin
end_state: The same boat after one full turn, again facing screen right at the centre, Pip still under the open fluff with her grin; the wave has passed and soft ripples remain at the right
action_timeline:
- '0-0.4 s: the wave arrives from the right'
- '0.4-1.5 s: the boat spins once in place and ends facing right'
dialogue: []
sound: 'a whoosh of water and a happy squeak (screenplay: speeding forward)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC04-SH045
transition_out: cut to SC04-SH055
continuity:
- Seed OPEN
- Oar STOWED
- Boat ends facing right
generation:
  mode: image-to-video
  start_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small folded paper boat in matte cream paper with a flat bottom, two pointed ends, straight side walls and crisp crease lines, flat cel color with one darker cream shade tone and a thin dark-teal outline. Thin sage stem topped with a round feathery white dandelion fluff. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The lopsided creased cream boat at the centre of the frame in profile facing screen right with Pip seated in it, both hands holding the stem of the seed whose white fluff is open overhead like a parasol; a low splash wave of ripples arriving from the right; paper bright yellow with extra wrinkles; confident grin. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small folded paper boat in matte cream paper with a flat bottom, two pointed ends, straight side walls and crisp crease lines, flat cel color with one darker cream shade tone and a thin dark-teal outline. Thin sage stem topped with a round feathery white dandelion fluff. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same boat after one full turn, again facing screen right at the centre, Pip still under the open fluff with her grin; the wave has passed and soft ripples remain at the right. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-0.9 s: the wave arrives from the right. 0.9-2 s: the boat spins once in place and ends facing right. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - 'a full 360 degree spin may break the boat: fallback a 180 degree turn then a slide, or a smear-frame crossfade'
```

###### SC04-SH055

```yaml
record: shot
id: SC04-SH055
scene: SC04
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC04_direction@2
- SC04_animation@2
- SC04_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
purpose: 'Reward and momentum: the boat speeds off to the right'
screenplay_ref: SC04, action line 5 (speeds away)
duration_s: 1.0
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: centre, moving to the right third
  facing: profile, facing screen right
  action: rides the boat as it speeds forward, grinning
  expression_start: confident grin
  expression_end: delighted grin
  eyeline: forward right
props:
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: speeding right
- id: PR-SEED
  state: PR-SEED:OPEN
  position: held up in both hands
- id: PR-OAR
  state: PR-OAR:STOWED
  position: across the boat floor
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: ripple trail
  midground: boat with Pip
  background: grey sky and distant shore
  composition: boat enters centre, exits to the right third
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.03
  position: south bank centre, water level, 0.45 m
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout)'
  focus: boat
  movement: static
  support: locked-off
lighting:
  key: 'key: overcast sky dome, overhead, very soft, ~6800 K'
  fill: none; pale blue-grey bounce from the water, ~2:1
  rim: none; 2D cel outline instead
  practicals: none
  shadows: one hard-edged cel shadow tone directly under objects
  palette:
  - 'puddle grey-blue #9DB8C9'
  - 'paper yellow #FFC93C'
  - 'outline dark teal #1F3A48'
screen_direction: travel left to right
start_state: The lopsided creased cream boat at the centre of the frame in profile facing screen right, Pip grinning under the open white fluff held overhead in both hands, soft ripples behind
end_state: The same boat and Pip at the right third of the frame, still facing screen right, Pip grinning with the open fluff held up, a trail of ripples behind the stern
action_timeline:
- '0-1 s: the boat accelerates from the centre to the right third'
dialogue: []
sound: 'a whoosh of water and a happy squeak (screenplay: speeding forward)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC04-SH050
transition_out: cut to SC05-SH010
continuity:
- Seed OPEN
- Oar STOWED
generation:
  mode: image-to-video
  start_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The lopsided creased cream boat at the centre of the frame in profile facing screen right, Pip grinning under the open white fluff held overhead in both hands, soft ripples behind. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same boat and Pip at the right third of the frame, still facing screen right, Pip grinning with the open fluff held up, a trail of ripples behind the stern. Soft overcast light from above, one hard-edged cel shadow tone, morning, faint water dimples, no falling beads. Palette: grey-blue, paper yellow, dark teal outline. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.5 s: the boat accelerates from the centre to the right third. 1.5-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-1.5 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1 s action and retime it in the edit (speed-up = clip action span / 1 s)'
  - 'a full 360 degree spin may break the boat: fallback a 180 degree turn then a slide, or a smear-frame crossfade'
```


### SC05 — EXT. PUDDLE - FAR SHORE - DAY


#### Direction
Source: `06_direction/SC05_direction.md`

##### SC05 Direction — EXT. PUDDLE - FAR SHORE - DAY

###### Must-see story facts
- The boat slides onto the far shore and bumps; Mo's feelers lift.
- Pip steps out and offers the seed; Mo takes it with her feelers and plants the stem in the bare soil; the fluff folds shut.
- A last drop lands on the soil; a green sprout pops up with a boing.
- Mo waves her feelers; Pip and Mo look at the sprout, then up at the sky; Pip waves at the sky. Fade out.

###### Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Pip | to hand over the seed | none left | offers it |
| Mo | company, a seed | shyness | takes, plants |
| Raindrop | nothing | none | falls on the seed |

- Subtext: the nuisance was helping.
- Turn: undelivered, alone → delivered, together.
- Audience position: ahead on the sprout.
- Visual thesis: the left and right halves of the film finally join in one frame — carried by SH025 and SH050/SH055.
- Genre playbook: comedy resolving to warmth (reaction shot at the end, warm light).

###### Change note (v2, 2026-10-19; change request from production-manager)
- QC-102: SH020 (offer | take) split into SH020 (offer) and new SH025 (take). SH050 packed look at sprout, look up and wave; split into SH050 (look up, Mo's feelers wave) and new SH055 (Pip's wave, fade out). SH010 reviewed and kept (boat arrival is the primary action; Mo's feelers lifting is a trailing end-state reaction). SH030 reviewed and kept (plant; the fluff folding is its settling consequence). SH040 reviewed and kept (drop and sprout are one cause-and-effect payoff, suited to first-last-frame).
- QC-109: SH050/SH055 are PROFILE, Pip and Mo facing each other across the sprout; no three-quarter keyframe is needed and the 'both facing the camera' wording is withdrawn (also in Blocking below). Shot record and storyboard must change to profile.
- QC-113: sprout payoff SH040 2.5 s; time taken from SH010 (2.5 -> 2.0) and SH030 (2.5 -> 1.5); the 2-shot hand-off stays 3.0 s total and the closing pair is 3.0 s total.
- Camera static; SH025 and SH055 are new IDs.
- Erratum (2026-10-19, no version bump; CR-ISSUE-08, production-manager conflict resolution): the SH025 'take' includes Mo's small head tilt as the screenplay says (the tilt is part of the take, not a trailing end state).

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | arrival | Pip | action 1 |
| B2 | the hand-off | Pip and Mo | action 2 (SH020 offer, SH025 take) |
| B3 | planting | Mo | action 2 |
| B4 | the last drop and the sprout | drop | action 3 |
| B5 | looks up and waves | Pip and Mo | action 4 (SH050 look, Mo waves; SH055 Pip waves) |

###### Blocking
Floor plan: LOC-PUDDLE, far shore.
- Start positions: Mo on the far shore right of center beside soil patch L3, facing screen left, feelers drooping. Boat arrives from the left.
- Moves: Pip steps out to the right; Mo reaches out with her feelers; Mo carries the stem to the soil and plants it.
- End positions: Pip left of the sprout, Mo right of it, in profile facing each other across the sprout (side-on, like the whole film), then looking up.
- Axis and camera side: same as SC01; Pip left and Mo right, facing each other, so the axis is Pip-Mo, left to right.
- Screen direction in/out: boat arrives from the left (continuing). Scene ends on FADE OUT.

###### Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Mo | to notice | feelers lift |
| B2 | Pip | to give | holds the seed out with both hands, grin |
| B2 | Mo | to receive | feelers wrap the stem, head tilts |
| B3 | Mo | to plant | stem pushed into the soil |
| B5 | Pip, Mo | to share the moment | SH050: heads tilt up, feelers wave; SH055: Pip lifts a hand to the sky |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC05-SH010 | WS | eye-level | static | boat and Mo | the boat slides onto the far shore and bumps to a stop; Mo's feelers lift as a trailing reaction; ends with the boat stopped and Mo's feelers up | boat left, Mo and soil right | flat, deep | soft overcast, a pale warm glow upper right | 2.0 s | arrival | cut |
| SC05-SH020 | MS | eye-level | static | Pip and Mo | Pip steps out and holds the seed out toward Mo; ends with Pip's arms extended, seed offered, Mo still holding her feelers back | two-shot: Pip left, Mo right | flat | warm soft light | 1.5 s | the offer | cut |
| SC05-SH025 | MS | eye-level | static | Pip and Mo | Mo reaches and takes the seed in her feelers with a small head tilt; ends with Mo holding the seed | two-shot: Pip left, Mo right | flat | warm soft light | 1.5 s | the take (the want is met) | cut |
| SC05-SH030 | MS | eye-level | static | Mo and soil | Mo plants the stem in the soil patch; the fluff folds shut as it settles; ends with the seed standing planted | Mo right, soil centre | flat | warm soft light | 1.5 s | planting | cut |
| SC05-SH040 | INSERT | high | static | planted seed and soil | one last drop falls onto the soil beside the seed; a green sprout pops up with a boing; ends with the sprout standing | soil centre | flat | warm glow | 2.5 s | the payoff: the drop helps (climax beat) | cut |
| SC05-SH050 | MWS | eye-level | static | Pip and Mo (PROFILE, facing each other across the sprout) | Pip and Mo tilt their heads from the sprout up to the sky while Mo's feelers wave; ends with both looking up | Pip left facing right, sprout centre, Mo right facing left, side-on | flat | warmest, brightest | 1.5 s | shared wonder | cut |
| SC05-SH055 | MWS | eye-level | static | Pip and Mo (PROFILE) | Pip gives the sky a small wave with one hand; ends on the wave, fade out | same as SH050 | flat | warmest, brightest | 1.5 s | closing image mirrors the opening | fade-out |

Total: 12.0 s vs estimate 12 s (SH010 2.0 + SH020 1.5 + SH025 1.5 + SH030 1.5 + SH040 2.5 + SH050 1.5 + SH055 1.5). Version 2 re-cut: one primary action per shot.

###### Coverage and rhythm
Slowest scene: the audience breathes. The two-shot (SH020, SH025) puts the two characters together for the first time; SH040 is the joke's turn into warmth; SH050/SH055 close on the final image.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH020 | Pip steps out and offers | seed in Pip's hands, end frame arms extended; no contact |
| SH025 | seed hand-off, contact | start = SH020 end frame; end frame has the seed in Mo's feelers; FLF-suited |
| SH030 | fluff closes; planting | keyframe PR-SEED:PLANTED as the end frame |
| SH040 | sprout pop is a small effect | end frame has the sprout fully shown; fallback: composite the sprout in post |
| SH050 | two characters looking up, feelers wave | slow, simple head tilt in profile |
| SH055 | one hand wave | wave is one hand; fade-out in the edit |

###### Specialist and VFX flags
- action-director: none
- animation-director: yes (hand-off, boing, wave)
- vfx: sprout pop possibly composited

###### Handoff
- Produced: SC05_direction@2 (APPROVED under autonomy), 7 shots, 12.0 s
- Open items: shot record and storyboard for SH050 must change to profile
- Next: cinematographer, script-supervisor


#### Animation plan
Source: `06_direction/SC05_animation.md`

##### SC05 Animation Plan (v3; the 'v2' requested for the scene set)

###### Change note (v3, 2026-10-19)
- The file already carried version 2 (an earlier unreviewed revision against SC05_direction@1). This re-cut to SC05_direction@2 therefore takes version 3 so the number only rises. Flagged for production-manager.
- Re-split: seven shots, 12.0 s = 288 f. SH010 48 f, SH020 36 f (offer), new SH025 36 f (take), SH030 36 f, SH040 60 f (payoff), SH050 36 f (look up, Mo waves), new SH055 36 f (Pip waves, fade out).
- QC-109: SH050/SH055 are PROFILE, Pip and Mo facing each other across the sprout.
- QC-106: oar STOWED in the beached boat; Pip's hands hold the OPEN seed (CR-002) and are empty after SH025. The wave in SH055 is the RIGHT (near-camera) hand, so the gesture reads in silhouette; it is not a salute.
- Every shot has a clear start pose and end pose and is marked for Kling 2.1 first-last-frame (FLF).

###### Hand and prop rule (QC-106; identical in all five plans)
- PR-OAR is in Pip's RIGHT hand (the near-camera hand: Pip faces screen right, camera on the south bank). PR-SEED:CLOSED is clamped UNDER her LEFT arm (far arm), fluff over her left shoulder, left hand free.
- Salute = LEFT hand: the left upper arm stays pinned (seed stays tucked), only forearm and hand lift to the brow. The right hand keeps the oar, laid across her lap.
- Sink: right hand lets go, oar floats flat on the surface; left arm thrusts the seed up so the fluff stays dry. Recovery: right hand scoops the oar, tucks it under the right arm while she climbs and creases, and re-grips it in the right hand as the refold finishes.
- SC04-SH030 stows the oar on the boat floor (PR-OAR:STOWED); from then both hands hold the seed.

###### Motion style rules
- Feel: 24 fps; characters on twos (12 drawings/s); drop, splash, pops and impacts on ones. Moving holds only (1-2 px drift, blink, ripple creep).
- Exaggeration: cartoony. Squash and stretch: Pip and boat up to 25%, drop up to 40%, volume preserved.
- Staging: side-on profile, Pip faces screen right (QC-109). Never deforms: Pip's triangular head and round black eyes (squint with lids/brows only), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform dark-teal outline; smears at most 3 frames.
- Timing convention: segment lengths are frames and sum to the shot total; key frame numbers are 1-based.
- Scene tone: slowest and warmest. Mo moves like a snail: slow eases, long holds, her feelers are two thin lines with round dot eyes.

###### Shots (288 f = 12.0 s)

####### SC05-SH010 (2.0 s = 48 f)
- Acting beat: arrive -> notice. The boat slides in and bumps; Mo's feelers lift.
- Key poses:
  - K1 f1: Boat at the left of the far shore, Pip seated holding the open fluff seed overhead in both hands, Mo on the right beside the bare soil patch, feelers drooping.
  - K2 f17: Bump: boat stops with a squash.
  - K3 f23: Rebound and settle.
  - K4 f33: Mo's feelers twitch.
  - K5 f45: Feelers rise.
  - K6 f48: Feelers upright, hold.
- Timing chart: slide, ease-out (16) + bump and rebound (6) + settle (6) + feeler twitch (4) + rise (12) + hold (4) = 48 f.
- Principles: overshoot and settle, feelers lag the head by 2 f, anticipation (twitch).
- Lip-sync accents: none.
- Start pose (frame text): Far shore: the creased cream boat at the left edge with Pip seated in profile facing right holding the open fluff seed overhead in both hands, yellow oar lying on the boat floor; Mo at the right beside the bare soil patch, facing left, feelers drooping.
- End pose (frame text): Boat stopped at the shore, Pip seated with the open seed overhead, Mo with her feelers upright, bare soil patch beside her.
- Off-model risks: Mo's feelers must remain two thin lines with dot eyes; if Mo morphs, hold a still Mo layer and animate the feelers separately.
- Kling 2.1 FLF: YES. "The boat slides onto the shore and bumps to a stop; Mo's feelers lift; static camera."

####### SC05-SH020 (1.5 s = 36 f)
- Acting beat: give. Pip steps out and offers the seed.
- Key poses:
  - K1 f1: Pip seated in the boat at the left, seed OPEN overhead in both hands.
  - K2 f13: Hop onto the shore.
  - K3 f21: Seed lowered from overhead, fluff tilts forward.
  - K4 f29: Arms extending toward Mo, hopeful smile.
  - K5 f36: Arms fully extended, seed offered; Mo still holds her feelers back.
- Timing chart: hop out (12) + lower the seed (8) + extend arms (8) + hold (8) = 36 f.
- Principles: anticipation before the hop, arcs on the arms, follow-through of the fluff.
- Lip-sync accents: none.
- Start pose (frame text): Two-shot: Pip seated in the boat at left in profile facing right, holding the open fluff seed overhead in both hands; Mo at right facing left with her feelers up, shy.
- End pose (frame text): Two-shot: Pip standing on the shore in profile facing right, both arms extended holding the open fluff seed toward Mo, hopeful grin; Mo at right facing left, feelers drawn back, a gap between them.
- Off-model risks: no contact yet; keep a clear gap. Pip's hands are on the stem, not the fluff.
- Kling 2.1 FLF: YES. "She hops out and holds the seed out to Mo; static camera."

####### SC05-SH025 (1.5 s = 36 f)
- Acting beat: take. Mo hesitates, reaches and takes the seed in her feelers.
- Key poses:
  - K1 f1: End of SH020: seed offered.
  - K2 f7: Mo's feelers twitch forward, back (hesitation).
  - K3 f17: Feelers reach slowly to the stem.
  - K4 f25: Feelers curl around the stem, head tilts.
  - K5 f31: Pip's hands release.
  - K6 f36: Mo holds the seed; Pip's hands are empty and open.
- Timing chart: hesitation (6) + reach (10) + wrap (8) + release (6) + hold (6) = 36 f.
- Principles: slow in/out on the reach, anticipation (the twitch), overlap (head tilt follows the feelers).
- Lip-sync accents: none.
- Start pose (frame text): identical to SC05-SH020 end pose.
- End pose (frame text): Two-shot: Mo holding the dandelion seed's stem in her curled feelers, its open fluff above her, head tilted; Pip standing at left in profile with empty open hands, grinning.
- Off-model risks: contact between characters; the feelers wrap the stem below the fluff, leave a visible gap to Pip's hands.
- Kling 2.1 FLF: YES (seed in Pip's hands -> in Mo's feelers). "Mo reaches out and takes the seed with her feelers; static camera."

####### SC05-SH030 (1.5 s = 36 f)
- Acting beat: act. Mo plants the stem; the fluff folds shut.
- Key poses:
  - K1 f1: Mo holding the open seed, beginning to turn toward the soil.
  - K2 f11: Seed lowered to the soil.
  - K3 f19: Stem pushed in, small soil puff.
  - K4 f27: Fluff folds shut into a ball.
  - K5 f36: Planted closed seed, Mo's feelers happy and up.
- Timing chart: turn (10) + lower (8) + push in, puff (6) + fluff closes (8) + hold (4) = 36 f.
- Principles: slow Mo timing, squash on the push, overlap.
- Lip-sync accents: none.
- Start pose (frame text): Mo holding the open-fluff seed beside the bare soil patch, soil centre.
- End pose (frame text): The seed planted upright in the soil patch, fluff folded shut into a ball (PR-SEED:PLANTED), Mo's feelers up beside it.
- Off-model risks: fluff closing back to a ball; keep it simple.
- Kling 2.1 FLF: YES. "Mo plants the stem in the soil and the fluff folds shut; static camera."

####### SC05-SH040 (2.5 s = 60 f)  CLIMAX PAYOFF
- Acting beat: payoff. The last drop lands; the sprout pops with a boing.
- Key poses:
  - K1 f1: High angle, soil with the planted closed seed, no sprout.
  - K2 f9: Drop enters from the top.
  - K3 f17: Contact, PLIP beside the seed.
  - K4 f19: Pause 2 f (anticipation).
  - K5 f27: Sprout pops up, stretch 40%.
  - K6 f41: Overshoot and boing settle (3 decaying bobs).
  - K7 f60: Sprout standing, two round leaves, gentle leaf bob.
- Timing chart: hold (8) + fall on ones (8) + contact (2) + pop (8) + overshoot and settle (14) + moving hold (20) = 60 f.
- Principles: squash and stretch, overshoot, decaying oscillation, staging (the sprout the only saturated green).
- Lip-sync accents: none.
- Start pose (frame text): Overhead close view of the bare brown soil with the planted closed dandelion seed, no sprout.
- End pose (frame text): Same view, a bright leaf-green sprout with a short stem and two round leaves standing in the soil beside the seed.
- Off-model risks: small element; fallback: composite the sprout in post.
- Kling 2.1 FLF: YES. "One drop lands beside the seed and a green sprout pops up with a bounce; static camera."

####### SC05-SH050 (1.5 s = 36 f)
- Acting beat: share. Both look from the sprout up at the sky; Mo's feelers wave.
- Key poses:
  - K1 f1: Profile two-shot: Pip left facing right, Mo right facing left, sprout centre between, both looking down at it, smiling.
  - K2 f9: Eyes lift first.
  - K3 f15: Heads tilt up.
  - K4 f25: Both looking up; Mo's feelers wave (2 waves).
  - K5 f36: Hold, feelers still waving gently.
- Timing chart: hold (8) + eyes lead (6) + heads tilt (10) + feeler wave (12) = 36 f.
- Principles: eyes lead, overlap, arcs on the feelers; slight movement only.
- Lip-sync accents: none.
- Start pose (frame text): Flat side-on medium wide: Pip at left in profile facing right, Mo at right in profile facing left, a small green sprout and planted seed between them; both look down at it, smiling; warm bright light.
- End pose (frame text): Same composition, both heads tilted up looking at the sky, Mo's feelers raised and waving, Pip's hands at her sides.
- Off-model risks: keep both in profile; two characters moving at once: keep the motion slight.
- Kling 2.1 FLF: YES. "They look up from the sprout at the sky and Mo's feelers wave; static camera."

####### SC05-SH055 (1.5 s = 36 f)
- Acting beat: close. Pip waves at the sky; fade out.
- Key poses:
  - K1 f1: Both looking up (= SH050 end).
  - K2 f5: Anticipation: Pip's right hand dips slightly.
  - K3 f13: Hand up, wave begins.
  - K4 f27: Third wave, then hold; fade out begins (in the edit, f24 onward).
  - K5 f36: Pip's hand up mid-wave, Mo still, warm light; end of fade.
- Timing chart: raise hand (8) + three waves (16) + hold (12) = 36 f.
- Principles: anticipation, arc on the wave, moving hold on Mo's feelers.
- Lip-sync accents: none.
- Start pose (frame text): identical to SC05-SH050 end pose.
- End pose (frame text): Same composition: Pip's right hand raised in a small wave at the sky, Mo looking up with gently swaying feelers, sprout between them, warm bright light.
- Off-model risks: the wave is the near (right) hand only; keep the profile.
- Kling 2.1 FLF: YES. "She gives the sky a small wave; static camera." Fade out in the edit, not generated.

###### Requests
- Model sheet views: Mo side-on (feelers up, reaching, waving), Pip side-on arms extended.
- Timing conflicts: none. 48 + 36 + 36 + 36 + 60 + 36 + 36 = 288 f = 12.0 s.

###### Handoff
- Produced: SC05_animation@3 (APPROVED), 7 shots, 288 f
- Next: production-manager (compile frames)


#### Camera and lighting
Source: `07_camera/SC05_camera.md`

##### SC05 Camera and Lighting

###### Change note (v2, 2026-10-19)
- Direction@2 re-cut: new SC05-SH025 (take) and SC05-SH055 (Pip's wave, fade out). All static/locked-off.
- QC-109: SH050 and SH055 are PROFILE, Pip left facing right and Mo right facing left across the sprout; 'three subjects in a row' wording replaced; neither faces the camera.
- QC-111: rain defined once below; SH040 says one falling drop only; Setup C atmosphere 'rain thinning to a few drops' replaced (no falling beads).

**Rain definition (QC-111, defined once; all other wording refers to it):** "light rain" = faint dimples on the water surface plus faint background streaks only; NO falling beads or drops anywhere in the frame. The only thing that ever falls is the single hero drop in a drop shot, which carries the wording "one falling drop only: exactly one aqua drop falls, no other drop, bead or splash source in frame".

Color script row: leaf green and soil brown / shell coral, paper yellow, sprout green / warmest / highest. Time/weather: morning, light rain (as defined below).

###### Lighting setups

####### Setup C — Clearing overcast with a pale warm glow
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | sky dome with a thinning patch of cloud | upper right of frame, high, soft | very soft | warm-neutral ~5600 K | long soft cel shadow falls to the lower left |
| Fill | sky bounce off the puddle and soil | from below, even | very soft | pale blue-grey | — |
| Rim | soft warm edge from the glow | upper right behind the characters | soft | warm ~4800 K | a faint warm edge on Mo's shell and Pip's right side |
| Practicals | none | — | — | — | — |
| Atmosphere | rain thinning: fewer dimples and streaks per the Rain definition, no falling beads; a faint warm haze at the upper right | — | — | — | soil darker where wet |
Contrast feel: low (about 2:1) but warmer and brighter. Changes during scene: glow grows toward the fade-out.

```
         sky (overhead dome, glow upper right)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC05-SH010 | C | 35 mm | f/8, deep | boat and Mo | 0.03 | 0.45 | south bank, right of centre, far shore in view | locked-off | static | none | wide flat side view of the far shore, boat slides in from the left and bumps to a stop, Mo and soil right, Mo's feelers lift, nothing falling |
| SC05-SH020 | C | 50 mm | f/5.6 | Pip and Mo equally sharp | 0.03 | 0.3 | south bank, far shore | locked-off | static | none | medium two-shot, Pip left, Mo right, both sharp |
| SC05-SH025 | C | 50 mm | f/5.6 | Pip, Mo and the seed between them equally sharp | 0.03 | 0.3 | south bank, far shore (matched to SH020) | locked-off | static | none | medium two-shot, Pip left, Mo right, Mo's feelers take the seed from Pip, both sharp, no camera move |
| SC05-SH030 | C | 50 mm | f/5.6 | Mo and soil | 0.03 | 0.3 | south bank, far shore, right | locked-off | static | none | medium flat side view, Mo and soil patch |
| SC05-SH040 | C | 85 mm: flat, slightly compressed | f/4, soft wash background | soil and sprout | 0.1 | 0.25 | slightly above the soil patch, looking down 30 degrees | locked-off | static | none | close view down on the soil, ONE aqua drop falls onto the soil beside the planted seed, a green sprout pops up with a boing; one falling drop only, no other drop or bead |
| SC05-SH050 | C | 50 mm | f/5.6 | Pip, sprout, Mo | 0.03 | 0.4 | south bank, far shore, centred | locked-off | static | none | medium wide flat side view in strict PROFILE: Pip left facing right, sprout centre, Mo right facing left, facing each other across the sprout, neither facing the camera; heads tilt up, Mo's feelers wave; warm glow upper right; no falling beads |
| SC05-SH055 | C | 50 mm | f/5.6 | Pip, sprout, Mo (matched to SH050) | 0.03 | 0.4 | south bank, far shore, centred (same as SH050) | locked-off | static | none (fade-out is an edit, not a camera move) | same framing as SH050: profile Pip left facing right, sprout centre, Mo right facing left; Pip gives the sky a small one-hand wave; warm glow upper right, brightest; no falling beads |

###### Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts. SC05 glow is upper right in every shot.
- Matched pairs: SH020/SH025 share 50 mm, 0.3 m; SH050/SH055 share 50 mm, 0.4 m; wide shots in this scene share 35 mm, 0.03 m height, 0.45 m distance.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

###### Proposals to the director
- none

###### Handoff
- Produced: SC05_camera@2 (APPROVED), setup C, 7 shots (new: SC05-SH025, SC05-SH055)
- Open items: none
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC05` in section 11.


#### Shot records
Source: `08_master/shots/SC05.md`

##### Shot records SC05

Recompiled (v2) from approved department documents under brief@2 (Kling 2.1: image-to-video, first-last-frame, 5 s or 10 s clips, up to 3 reference images) after the director's re-cut of packed shots (QC-102). Rules: one primary action and one end state per shot; full locks for the shot's subjects, short locks for secondary props, speck-size characters and the location; palette in colour words; `motion` is timed in clip time with a 0.5 s lead-in and a hold to 5 s; `keep` names the part used in the cut; `clip_length_s` is 5 (duration + 1 s rounded up to a Kling length). Mode is first-last-frame where the end state carries the story, else image-to-video. Sound, music and VFX carry over from the v1 records until the stage 10 plans.

###### SC05-SH010

```yaml
record: shot
id: SC05-SH010
scene: SC05
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC05_direction@2
- SC05_animation@3
- SC05_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
- CH-MO@1
purpose: 'Arrival: the boat bumps onto the far shore and Mo''s feelers lift'
screenplay_ref: SC05, action line 1
duration_s: 2.0
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: left, seated in the boat
  facing: profile, facing screen right
  action: arrives and bumps to a stop
  expression_start: eager smile
  expression_end: happy smile
  eyeline: at Mo
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: right, beside the soil patch
  facing: profile, facing screen left
  action: feelers rise as the boat arrives
  expression_start: drooping lonely
  expression_end: feelers perking up
  eyeline: at the boat
props:
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: slides in, beached at the left
- id: PR-SEED
  state: PR-SEED:OPEN
  position: in Pip's hands
- id: PR-OAR
  state: PR-OAR:STOWED
  position: in the boat
location:
  id: LOC-PUDDLE
  area: far shore, soil patch
  time_of_day: morning
  weather: rain thinning, pale warm glow upper right
frame:
  foreground: far shore edge
  midground: boat, Pip and Mo
  background: soft grass wash
  composition: boat left, Mo and soil right
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.03
  position: south bank right of centre, far shore in view, water level, 0.45 m
  lens_mm: 35
  aperture: f/8
  depth_of_field: 'deep (2D: sharp throughout)'
  focus: boat and Mo
  movement: static
  support: locked-off
lighting:
  key: 'key: soft pale warm glow from the sky, upper right, high, ~5600 K'
  fill: pale blue-grey bounce from water and soil, ~2:1
  rim: soft warm edge from the upper right behind subjects, ~4800 K
  practicals: none
  shadows: long soft cel shadow falling to the lower left
  palette:
  - 'leaf green #7DBB5A'
  - 'shell coral #F2866B'
  - 'paper yellow #FFC93C'
  - 'soil brown #6B4A3A'
screen_direction: Pip faces screen right; Mo faces screen left
start_state: 'Wide frame of the far shore: the lopsided creased cream boat enters from the left with Pip seated in profile facing screen right, holding the seed with its white fluff open in both hands; paper bright yellow with extra wrinkles; Mo sits at the right beside the bare brown soil patch, her feelers drooping'
end_state: The boat stopped on the far shore at the left of Mo, Pip seated in it with the open-fluff seed in both hands, smiling; Mo's feelers upright and bright
action_timeline:
- '0-0.8 s: the boat slides in from the left'
- '0.8-1.1 s: it bumps, squashes and rebounds to a stop'
- '1.1-2 s: Mo''s feelers rise'
dialogue: []
sound: 'soft bump of paper on the bank (screenplay: soft bump), a happy hum from Mo'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC04-SH055
transition_out: cut to SC05-SH020
continuity:
- Seed OPEN
- Oar STOWED
- Mo feelers droop -> up
generation:
  mode: image-to-video
  start_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Wide frame of the far shore: the lopsided creased cream boat enters from the left with Pip seated in profile facing screen right, holding the seed with its white fluff open in both hands; paper bright yellow with extra wrinkles; Mo sits at the right beside the bare brown soil patch, her feelers drooping. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'wide shot at water level, eye-level, 35 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. Small cream folded paper boat with pointed ends and crisp creases. Thin sage stem topped with a round feathery white dandelion fluff. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The boat stopped on the far shore at the left of Mo, Pip seated in it with the open-fluff seed in both hands, smiling; Mo''s feelers upright and bright. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.3 s: the boat slides in from the left. 1.3-1.6 s: it bumps, squashes and rebounds to a stop. 1.6-2.5 s: Mo''s feelers rise. 2.5-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2.5 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 2 s action and retime it in the edit (speed-up = clip action span / 2 s)'
  - Mo's feelers must stay two thin lines with dot eyes
  - generate Mo's feeler lift as a separate 2 s clip if needed
```

###### SC05-SH020

```yaml
record: shot
id: SC05-SH020
scene: SC05
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC05_direction@2
- SC05_animation@3
- SC05_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
- CH-MO@1
purpose: 'The offer: Pip steps out and holds the seed out to Mo'
screenplay_ref: SC05, action line 2 (offers)
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: left, stepping out of the boat onto the shore
  facing: profile, facing screen right
  action: steps out and holds the seed out toward Mo
  expression_start: eager smile
  expression_end: hopeful smile
  eyeline: at Mo
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: right
  facing: profile, facing screen left
  action: watches, feelers held back
  expression_start: feelers perking up
  expression_end: curious
  eyeline: at the seed
props:
- id: PR-SEED
  state: PR-SEED:OPEN
  position: held out in both of Pip's hands
- id: PR-OAR
  state: PR-OAR:STOWED
  position: in the boat
location:
  id: LOC-PUDDLE
  area: far shore, soil patch
  time_of_day: morning
  weather: rain thinning, pale warm glow upper right
frame:
  foreground: none
  midground: Pip and Mo
  background: soft grass wash
  composition: two-shot, Pip left, Mo right
camera:
  shot_size: TWO-SHOT
  angle: eye-level
  height_m: 0.03
  position: south bank, far shore, centred, water level, 0.30 m
  lens_mm: 50
  aperture: f/5.6
  depth_of_field: 'deep (2D: both sharp)'
  focus: Pip and Mo equally sharp
  movement: static
  support: locked-off
lighting:
  key: 'key: soft pale warm glow from the sky, upper right, high, ~5600 K'
  fill: pale blue-grey bounce from water and soil, ~2:1
  rim: soft warm edge from the upper right behind subjects, ~4800 K
  practicals: none
  shadows: long soft cel shadow falling to the lower left
  palette:
  - 'leaf green #7DBB5A'
  - 'shell coral #F2866B'
  - 'paper yellow #FFC93C'
  - 'soil brown #6B4A3A'
screen_direction: Pip faces screen right; Mo faces screen left
start_state: 'Two-shot: Pip sits in the beached creased cream boat at the left in profile facing screen right, both hands holding the seed with its white fluff open against her chest; Mo at the right in profile facing screen left, feelers upright; paper bright yellow with extra wrinkles'
end_state: Pip stands on the shore at the left of Mo in profile facing screen right, both arms extended holding the open-fluff seed out toward Mo; Mo still holds her feelers back; a gap between the seed and Mo's feelers
action_timeline:
- '0-0.7 s: Pip steps off the boat'
- '0.7-1.5 s: she holds the seed out toward Mo and holds'
dialogue: []
sound: a soft happy squeak from Pip and a low hum from Mo
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC05-SH010
transition_out: cut to SC05-SH025
continuity:
- Seed OPEN offered
- Oar STOWED in boat
generation:
  mode: image-to-video
  start_frame: 'TWO-SHOT at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. Thin sage stem topped with a round feathery white dandelion fluff. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Two-shot: Pip sits in the beached creased cream boat at the left in profile facing screen right, both hands holding the seed with its white fluff open against her chest; Mo at the right in profile facing screen left, feelers upright; paper bright yellow with extra wrinkles. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'TWO-SHOT at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. Thin sage stem topped with a round feathery white dandelion fluff. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Pip stands on the shore at the left of Mo in profile facing screen right, both arms extended holding the open-fluff seed out toward Mo; Mo still holds her feelers back; a gap between the seed and Mo''s feelers. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.2 s: Pip steps off the boat. 1.2-2 s: she holds the seed out toward Mo and holds. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - 'contact between two characters: end frame shows the seed already in Mo''s feelers'
  - prefer first-last-frame if supported
```

###### SC05-SH025

```yaml
record: shot
id: SC05-SH025
scene: SC05
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC05_direction@2
- SC05_animation@3
- SC05_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
- CH-MO@1
purpose: 'The take: the want is met as Mo takes the seed'
screenplay_ref: SC05, action line 2 (takes)
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: left, standing on the shore
  facing: profile, facing screen right
  action: lets go of the seed
  expression_start: hopeful smile
  expression_end: relieved smile
  eyeline: at the seed
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: right
  facing: profile, facing screen left
  action: reaches and takes the seed in her feelers with a small head tilt
  expression_start: curious
  expression_end: happy, head tilted
  eyeline: at the seed
props:
- id: PR-SEED
  state: PR-SEED:OPEN
  position: from Pip's hands into Mo's feelers
- id: PR-OAR
  state: PR-OAR:STOWED
  position: in the boat, out of frame
location:
  id: LOC-PUDDLE
  area: far shore, soil patch
  time_of_day: morning
  weather: rain thinning, pale warm glow upper right
frame:
  foreground: none
  midground: Pip, Mo and the seed between them
  background: soft grass wash
  composition: two-shot, Pip left, Mo right
camera:
  shot_size: TWO-SHOT
  angle: eye-level
  height_m: 0.03
  position: south bank, far shore, centred, water level, 0.30 m
  lens_mm: 50
  aperture: f/5.6
  depth_of_field: 'deep (2D: both sharp)'
  focus: Pip and Mo equally sharp
  movement: static
  support: locked-off
lighting:
  key: 'key: soft pale warm glow from the sky, upper right, high, ~5600 K'
  fill: pale blue-grey bounce from water and soil, ~2:1
  rim: soft warm edge from the upper right behind subjects, ~4800 K
  practicals: none
  shadows: long soft cel shadow falling to the lower left
  palette:
  - 'leaf green #7DBB5A'
  - 'shell coral #F2866B'
  - 'paper yellow #FFC93C'
  - 'soil brown #6B4A3A'
screen_direction: Pip faces screen right; Mo faces screen left
start_state: 'Two-shot: Pip stands on the shore at the left in profile facing screen right, both arms extended holding the open-fluff seed out toward Mo; Mo at the right in profile facing screen left, feelers raised toward the seed; paper bright yellow with extra wrinkles'
end_state: 'Two-shot: Mo''s feelers curled around the stem of the open-fluff seed, her head tilted slightly, smiling; Pip at the left with her hands now empty and open, smiling'
action_timeline:
- '0-0.7 s: Mo''s feelers reach and curl around the stem'
- '0.7-1.5 s: she takes the seed with a small head tilt and holds'
dialogue: []
sound: a soft happy squeak from Pip and a low hum from Mo
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC05-SH020
transition_out: cut to SC05-SH030
continuity:
- Seed OPEN -> in Mo's feelers
- Oar STOWED
generation:
  mode: first-last-frame
  start_frame: 'TWO-SHOT at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. Thin sage stem topped with a round feathery white dandelion fluff. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Two-shot: Pip stands on the shore at the left in profile facing screen right, both arms extended holding the open-fluff seed out toward Mo; Mo at the right in profile facing screen left, feelers raised toward the seed; paper bright yellow with extra wrinkles. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'TWO-SHOT at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. Thin sage stem topped with a round feathery white dandelion fluff. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Two-shot: Mo''s feelers curled around the stem of the open-fluff seed, her head tilted slightly, smiling; Pip at the left with her hands now empty and open, smiling. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1.2 s: Mo''s feelers reach and curl around the stem. 1.2-2 s: she takes the seed with a small head tilt and holds. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'first-last-frame: the end frame must be a generated and approved keyframe; if the model skips the beat between the frames, split the action or retime'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - 'contact between two characters: end frame shows the seed already in Mo''s feelers'
  - prefer first-last-frame if supported
```

###### SC05-SH030

```yaml
record: shot
id: SC05-SH030
scene: SC05
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC05_direction@2
- SC05_animation@3
- SC05_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-MO@1
purpose: 'Planting: the fluff folds shut as the stem goes in the soil'
screenplay_ref: SC05, action line 3 (plants)
duration_s: 1.5
characters:
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: right, beside the soil patch
  facing: profile, facing screen left
  action: lowers the seed and pushes the stem into the soil
  expression_start: content
  expression_end: proud smile
  eyeline: down at the soil
props:
- id: PR-SEED
  state: PR-SEED:OPEN
  position: held, then PR-SEED:PLANTED in the soil, fluff shut
location:
  id: LOC-PUDDLE
  area: far shore, soil patch
  time_of_day: morning
  weather: rain thinning, pale warm glow upper right
frame:
  foreground: none
  midground: Mo and the soil patch
  background: soft grass wash
  composition: Mo right, soil centre
camera:
  shot_size: MS
  angle: eye-level
  height_m: 0.03
  position: south bank, far shore, right, water level, 0.30 m
  lens_mm: 50
  aperture: f/5.6
  depth_of_field: 'deep (2D: sharp, soft wash behind)'
  focus: Mo and the soil
  movement: static
  support: locked-off
lighting:
  key: 'key: soft pale warm glow from the sky, upper right, high, ~5600 K'
  fill: pale blue-grey bounce from water and soil, ~2:1
  rim: soft warm edge from the upper right behind subjects, ~4800 K
  practicals: none
  shadows: long soft cel shadow falling to the lower left
  palette:
  - 'leaf green #7DBB5A'
  - 'shell coral #F2866B'
  - 'paper yellow #FFC93C'
  - 'soil brown #6B4A3A'
screen_direction: Mo faces screen left
start_state: Mo at the right of the soil patch in profile facing screen left, her feelers holding the stem of the dandelion seed upright with its white fluff spread open like a parasol, beside the bare brown soil patch
end_state: The seed standing planted upright in the soil, its white fluff folded shut into a soft round ball, a small puff of soil beside the stem, Mo smiling beside it
action_timeline:
- '0-0.5 s: Mo turns toward the soil and lowers the seed'
- '0.5-1.5 s: she pushes the stem in; a small puff of soil; the fluff folds shut'
dialogue: []
sound: a soft thump of soil, a poof as the fluff folds
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC05-SH025
transition_out: cut to SC05-SH040
continuity:
- Seed OPEN -> PLANTED (fluff shut)
generation:
  mode: first-last-frame
  start_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. A single dandelion seed with a thin pale sage-green stem, a small brown pointed seed at the bottom and a round soft feathery white fluff at the top made of fine radiating filaments, flat cel color with a thin dark-teal outline. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Mo at the right of the soil patch in profile facing screen left, her feelers holding the stem of the dandelion seed upright with its white fluff spread open like a parasol, beside the bare brown soil patch. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'medium shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. A single dandelion seed with a thin pale sage-green stem, a small brown pointed seed at the bottom and a round soft feathery white fluff at the top made of fine radiating filaments, flat cel color with a thin dark-teal outline. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The seed standing planted upright in the soil, its white fluff folded shut into a soft round ball, a small puff of soil beside the stem, Mo smiling beside it. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1 s: Mo turns toward the soil and lowers the seed. 1-2 s: she pushes the stem in; a small puff of soil; the fluff folds shut. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'first-last-frame: the end frame must be a generated and approved keyframe; if the model skips the beat between the frames, split the action or retime'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - 'fluff closing back to a ball: keep it simple'
```

###### SC05-SH040

```yaml
record: shot
id: SC05-SH040
scene: SC05
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC05_direction@2
- SC05_animation@3
- SC05_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-DROP@1
purpose: 'The payoff: the last drop falls and a green sprout pops up'
screenplay_ref: SC05, action line 3 (sprout)
duration_s: 2.5
characters:
- id: CH-DROP
  costume: CO-DROP-01
  costume_state: FALLING
  position: above the soil, centre-right
  facing: no face; falling
  action: falls onto the soil beside the seed
  expression_start: n/a (faceless), stretched
  expression_end: n/a (faceless), gone into the soil
  eyeline: n/a
props:
- id: PR-SEED
  state: PR-SEED:PLANTED
  position: upright in the soil, centre-left
- id: PR-SPROUT
  state: PR-SPROUT:SPROUT
  position: hidden, then standing beside the seed
location:
  id: LOC-PUDDLE
  area: far shore, soil patch
  time_of_day: morning
  weather: rain thinning, pale warm glow upper right
frame:
  foreground: none
  midground: planted seed and soil
  background: soft grass wash
  composition: soil centre, seed centre-left, sprout appears centre-right
camera:
  shot_size: INSERT
  angle: high
  height_m: 0.1
  position: slightly above the soil patch looking down about 30 degrees, 0.25 m
  lens_mm: 85
  aperture: f/4
  depth_of_field: 'shallow (2D: sharp soil, soft wash behind)'
  focus: soil and sprout
  movement: static
  support: locked-off
lighting:
  key: 'key: soft pale warm glow from the sky, upper right, high, ~5600 K'
  fill: pale blue-grey bounce from water and soil, ~2:1
  rim: soft warm edge from the upper right behind subjects, ~4800 K
  practicals: none
  shadows: long soft cel shadow falling to the lower left
  palette:
  - 'leaf green #7DBB5A'
  - 'shell coral #F2866B'
  - 'paper yellow #FFC93C'
  - 'soil brown #6B4A3A'
screen_direction: n/a (insert)
start_state: 'Close view looking down at 30 degrees on the bare brown soil patch: the dandelion seed planted upright at the centre-left, its white fluff folded shut into a ball, no sprout; the single aqua drop in the air just above the soil to its right'
end_state: 'The same close view of the soil: the planted seed with its closed fluff at the centre-left, and beside it at the centre-right a tiny bright leaf-green sprout standing tall, with a darker green shade tone; the drop is gone'
action_timeline:
- '0-0.5 s: hold'
- '0.5-0.9 s: the drop falls in beside the seed'
- '0.9-1.6 s: the sprout pops up and overshoots'
- '1.6-2.5 s: it settles; hold'
dialogue: []
sound: 'a plip and a boing (screenplay: boing)'
music: none specified yet (music plan is stage 10)
vfx: 'pending VFX plan (stage 10): director flagged the sprout pop as possibly composited'
transition_in: cut from SC05-SH030
transition_out: cut to SC05-SH050
continuity:
- Seed PLANTED
- Sprout HIDDEN -> SPROUT
generation:
  mode: first-last-frame
  start_frame: 'close insert shot at high, 85 mm lens, camera 0.1 m high, soft wash behind. A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface. A single dandelion seed with a thin pale sage-green stem, a small brown pointed seed at the bottom and a round soft feathery white fluff at the top made of fine radiating filaments, flat cel color with a thin dark-teal outline. A tiny bright leaf-green sprout with a short thin stem and two round smooth leaves, flat cel color with one darker green shade tone and a thin dark-teal outline. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Close view looking down at 30 degrees on the bare brown soil patch: the dandelion seed planted upright at the centre-left, its white fluff folded shut into a ball, no sprout; the single aqua drop in the air just above the soil to its right. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, one falling aqua drop only. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'close insert shot at high, 85 mm lens, camera 0.1 m high, soft wash behind. A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface. A single dandelion seed with a thin pale sage-green stem, a small brown pointed seed at the bottom and a round soft feathery white fluff at the top made of fine radiating filaments, flat cel color with a thin dark-teal outline. A tiny bright leaf-green sprout with a short thin stem and two round smooth leaves, flat cel color with one darker green shade tone and a thin dark-teal outline. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same close view of the soil: the planted seed with its closed fluff at the centre-left, and beside it at the centre-right a tiny bright leaf-green sprout standing tall, with a darker green shade tone; the drop is gone. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, one falling aqua drop only. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1 s: hold. 1-1.4 s: the drop falls in beside the seed. 1.4-2.1 s: the sprout pops up and overshoots. 2.1-3 s: it settles; hold. 3-5 s: holds the end pose. Environment: faint water dimples, one falling aqua drop only.'
  clip_length_s: 5
  keep: 0.5-3 s
  risks:
  - 'first-last-frame: the end frame must be a generated and approved keyframe; if the model skips the beat between the frames, split the action or retime'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 2.5 s action and retime it in the edit (speed-up = clip action span / 2.5 s)'
  - 'the sprout pop is small: fallback composite it in post'
```

###### SC05-SH050

```yaml
record: shot
id: SC05-SH050
scene: SC05
status: APPROVED
version: 2
depends_on:
- screenplay@1
- SC05_direction@2
- SC05_animation@3
- SC05_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
- CH-MO@1
purpose: 'Shared wonder: Pip and Mo look from the sprout up to the sky'
screenplay_ref: SC05, action line 4
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: left of the sprout, standing
  facing: strict profile, facing screen right
  action: tilts her head up to the sky
  expression_start: delight
  expression_end: delight
  eyeline: up at the sky
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: right of the sprout
  facing: strict profile, facing screen left
  action: looks up and waves her feelers
  expression_start: curious head tilt
  expression_end: happy wave
  eyeline: up at the sky
props:
- id: PR-SPROUT
  state: PR-SPROUT:SPROUT
  position: centre between them
- id: PR-SEED
  state: PR-SEED:PLANTED
  position: beside the sprout
location:
  id: LOC-PUDDLE
  area: far shore, soil patch
  time_of_day: morning
  weather: rain thinning, pale warm glow upper right
frame:
  foreground: none
  midground: Pip, sprout, Mo
  background: soft grass wash with warm glow at the upper right
  composition: Pip left facing right, sprout centre, Mo right facing left, side-on
camera:
  shot_size: MWS
  angle: eye-level
  height_m: 0.03
  position: south bank, far shore, centred, water level, 0.40 m
  lens_mm: 50
  aperture: f/5.6
  depth_of_field: 'deep (2D: all sharp)'
  focus: Pip, sprout and Mo
  movement: static
  support: locked-off
lighting:
  key: 'key: soft pale warm glow from the sky, upper right, high, ~5600 K'
  fill: pale blue-grey bounce from water and soil, ~2:1
  rim: soft warm edge from the upper right behind subjects, ~4800 K
  practicals: none
  shadows: long soft cel shadow falling to the lower left
  palette:
  - 'leaf green #7DBB5A'
  - 'shell coral #F2866B'
  - 'paper yellow #FFC93C'
  - 'soil brown #6B4A3A'
screen_direction: Pip faces screen right; Mo faces screen left
start_state: 'Medium wide in strict profile: Pip at the left facing screen right and Mo at the right facing screen left, facing each other across a tiny green sprout standing in the soil at the centre, both looking down at the sprout; paper bright yellow with extra wrinkles'
end_state: The same profile composition, both now looking up at the sky with heads tilted back, Mo's feelers waving, the sprout still at the centre
action_timeline:
- '0-0.4 s: hold'
- '0.4-1.1 s: both look up, eyes first'
- '1.1-1.5 s: Mo''s feelers wave'
dialogue: []
sound: 'soft rain and a gentle warm hum, ends on a plip (screenplay: closing image)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC05-SH040
transition_out: cut to SC05-SH055
continuity:
- Seed PLANTED
- Sprout SPROUT
generation:
  mode: image-to-video
  start_frame: 'medium wide shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. Tiny bright leaf-green sprout with a short stem and two round leaves. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Medium wide in strict profile: Pip at the left facing screen right and Mo at the right facing screen left, facing each other across a tiny green sprout standing in the soil at the centre, both looking down at the sprout; paper bright yellow with extra wrinkles. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'medium wide shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. Tiny bright leaf-green sprout with a short stem and two round leaves. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same profile composition, both now looking up at the sky with heads tilted back, Mo''s feelers waving, the sprout still at the centre. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-0.9 s: hold. 0.9-1.6 s: both look up, eyes first. 1.6-2 s: Mo''s feelers wave. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - 'two characters moving together: keep movement slight'
```

###### SC05-SH055

```yaml
record: shot
id: SC05-SH055
scene: SC05
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC05_direction@2
- SC05_animation@3
- SC05_camera@2
- continuity@3
- style_bible@1
- props@2
- LOC-PUDDLE@1
- CH-PIP@2
- CH-MO@1
purpose: 'Closing image mirrors the opening: Pip gives the sky a small wave and the film fades out'
screenplay_ref: SC05, action line 4 (closing)
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: left of the sprout, standing
  facing: strict profile, facing screen right
  action: gives the sky a small wave with her right hand
  expression_start: delight
  expression_end: happy wave
  eyeline: up at the sky
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: right of the sprout
  facing: strict profile, facing screen left
  action: sways her feelers
  expression_start: happy wave
  expression_end: happy wave
  eyeline: up at the sky
props:
- id: PR-SPROUT
  state: PR-SPROUT:SPROUT
  position: centre between them
- id: PR-SEED
  state: PR-SEED:PLANTED
  position: beside the sprout
location:
  id: LOC-PUDDLE
  area: far shore, soil patch
  time_of_day: morning
  weather: rain thinning, pale warm glow upper right
frame:
  foreground: none
  midground: Pip, sprout, Mo
  background: soft grass wash with warm glow at the upper right
  composition: same as SC05-SH050
camera:
  shot_size: MWS
  angle: eye-level
  height_m: 0.03
  position: south bank, far shore, centred, water level, 0.40 m
  lens_mm: 50
  aperture: f/5.6
  depth_of_field: 'deep (2D: all sharp)'
  focus: Pip, sprout and Mo
  movement: static
  support: locked-off
lighting:
  key: 'key: soft pale warm glow from the sky, upper right, high, ~5600 K'
  fill: pale blue-grey bounce from water and soil, ~2:1
  rim: soft warm edge from the upper right behind subjects, ~4800 K
  practicals: none
  shadows: long soft cel shadow falling to the lower left
  palette:
  - 'leaf green #7DBB5A'
  - 'shell coral #F2866B'
  - 'paper yellow #FFC93C'
  - 'soil brown #6B4A3A'
screen_direction: Pip faces screen right; Mo faces screen left
start_state: 'Medium wide in strict profile: Pip at the left facing screen right and Mo at the right facing screen left, a tiny green sprout between them, both looking up at the sky; warm bright glow at the upper right; paper bright yellow with extra wrinkles'
end_state: The same composition with Pip's near hand (her right) raised in a small wave to the sky and Mo's feelers swaying, both smiling, the sprout at the centre
action_timeline:
- '0-0.5 s: hold looking up'
- '0.5-1.5 s: Pip''s hand rises in a small wave and holds into the fade-out'
dialogue: []
sound: 'soft rain and a gentle warm hum, ends on a plip (screenplay: closing image)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC05-SH050
transition_out: fade-out
continuity:
- Seed PLANTED
- Sprout SPROUT
generation:
  mode: image-to-video
  start_frame: 'medium wide shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. Tiny bright leaf-green sprout with a short stem and two round leaves. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Medium wide in strict profile: Pip at the left facing screen right and Mo at the right facing screen left, a tiny green sprout between them, both looking up at the sky; warm bright glow at the upper right; paper bright yellow with extra wrinkles. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'medium wide shot at water level, eye-level, 50 mm lens, camera 0.03 m high. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. Tiny bright leaf-green sprout with a short stem and two round leaves. Wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. The same composition with Pip''s near hand (her right) raised in a small wave to the sky and Mo''s feelers swaying, both smiling, the sprout at the centre. Soft pale warm glow from the upper right, one soft cel shadow tone to the lower left, morning, faint water dimples, no falling beads. Palette: leaf green, coral, paper yellow, soil brown. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: holds the start pose. 0.5-1 s: hold looking up. 1-2 s: Pip''s hand rises in a small wave and holds into the fade-out. 2-5 s: holds the end pose. Environment: faint water dimples, no falling beads.'
  clip_length_s: 5
  keep: 0.5-2 s
  risks:
  - 'image-to-video: the end_frame is a QC target only and is not submitted; check the end state in review'
  - 'Kling may spread the action over the full 5 s clip: if so, keep the 1.5 s action and retime it in the edit (speed-up = clip action span / 1.5 s)'
  - 'two characters moving together: keep movement slight'
```


## 7. Generation plan

_Not produced yet: `10_prompts/images.md` — image-prompt-engineer._


_Not produced yet: `10_prompts/video.md` — video-prompt-engineer._


## 8. Storyboard
Source: `09_storyboard/storyboard.md`

### Storyboard: Frog Ferry

Aspect ratio: 16:9 (STYLE). Level of finish: rough (text boards; no images generated, no budget). Sheet: `09_storyboard/storyboard.html`.
Sketch prompts are for Midjourney V7 rough boards; they keep identity to silhouettes and colour anchors (yellow frog, coral-shelled snail, aqua teardrop). Finished keyframes with pasted locks are made later from the shot records.

#### Change note (v3, 2026-10-19; production-manager conflict resolution)
- SC02-SH037 salute panels (P1, P2) now use the LEFT hand, left upper arm pinned, seed tucked under the left arm, oar across her lap under the right hand. SC04-SH030 start panel shows the oar being laid on the boat floor by the right hand (stow is on screen). SC04-SH050-P1 wave moved to the RIGHT of the boat (director erratum CR-ISSUE-07, consistent with SH045). depends_on re-checked against the current direction files (all @2; errata applied in place).
- Erratum (2026-10-19, no version bump; CR-ISSUE-12): end panels SB-SC02-SH020-P3 and SB-SC03-SH010-P2 now show the oar floating on the water beside the ripples (storyboard.html matched).

#### Change note (v2, 2026-10-19)
Rebuilt from the director's re-cut (SC01-SC05_direction@2: 25 shots, 42.0 s, was 17 shots). New shot IDs boarded: SC01-SH025, SC02-SH035, SC02-SH037, SC03-SH025, SC04-SH045, SC04-SH055, SC05-SH025, SC05-SH055. Panel durations sum to each shot's duration; durations follow direction@2 (SC01-SH010 now 2.0 s, SC04 climax beats 2.5 s). Shots with a defined start and end state (first-last-frame suited) are boarded as start and end poses; SC02-SH020 and SC04-SH040 add a middle beat. QC-109: SC04-SH010 and SC05-SH050/SH055 are PROFILE (the earlier three-quarter wording is withdrawn). QC-108: 'paddles on' is carried by SC02-SH037 (salute) plus the opening of SC03-SH010 (Pip stroking). Hands (fixed in v3): oar in the RIGHT hand, seed under the LEFT arm, salute with the LEFT hand. The v1 panel IDs of changed shots are superseded.


#### SC01 — EXT. PUDDLE - NEAR SHORE - DAY

```yaml
record: panel
id: SB-SC01-SH010-P1
shot: SC01-SH010
frame_moment: start
description: WS, eye-level. Pip stands in profile on the left bank beside the green leaf and grey pebble, seed held in her arm, folded boat at her feet, oar in hand. Tiny Mo sits far right beside the bare soil patch, feelers drooping. Light rain dimples the puddle.
composition: Pip lower-left third; Mo lower-right third; wide empty puddle between; grey sky fills the top third.
camera_notes: 'Camera static. Thin arrow: Pip''s eyeline runs right across the puddle.'
duration_s: 1.0
dialogue: none
sound: light rain patter on the puddle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, eye-level. Pip stands in profile on the left bank beside the green leaf and grey pebble, seed held in her arm, folded boat at her feet, oar in hand. Tiny Mo sits far right beside the bare soil patch, feelers drooping. Light rain dimples the puddle.
image: ''
```

```yaml
record: panel
id: SB-SC01-SH010-P2
shot: SC01-SH010
frame_moment: end
description: 'WS, same framing. Pip has looked across at Mo: head up, eyes bright, small hop-ready stance; boat still at her feet. Mo unchanged, feelers drooping.'
composition: Same as the previous panel; Pip's head on the upper third line.
camera_notes: 'Camera static. Thin arrow: eyeline to Mo.'
duration_s: 1.0
dialogue: none
sound: light rain patter on the puddle
transition_out: cut to SC01-SH020
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, same framing. Pip has looked across at Mo: head up, eyes bright, small hop-ready stance; boat still at her feet. Mo unchanged, feelers drooping.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH020-P1
shot: SC01-SH020
frame_moment: start
description: WS, eye-level. Pip at the left-centre water's edge in profile facing right, lowering the boat onto the water in front of her; leaf and pebble lower left.
composition: Pip left-centre; boat at the water line; water open to the right.
camera_notes: 'Camera static. Thin arrow: boat goes down to the water.'
duration_s: 1.0
dialogue: none
sound: small splash and paper crinkle as the boat meets the water
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, eye-level. Pip at the left-centre water's edge in profile facing right, lowering the boat onto the water in front of her; leaf and pebble lower left.
image: ''
```

```yaml
record: panel
id: SB-SC01-SH020-P2
shot: SC01-SH020
frame_moment: end
description: WS. Pip seated in the afloat boat at the water's edge, oar in hand, facing right.
composition: Pip left-centre on the lower third line; water to the right.
camera_notes: 'Camera static. Thin arrow: none (settled).'
duration_s: 1.0
dialogue: none
sound: small splash and paper crinkle as the boat meets the water
transition_out: cut to SC01-SH025
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Pip seated in the afloat boat at the water's edge, oar in hand, facing right.
image: ''
```

```yaml
record: panel
id: SB-SC01-SH025-P1
shot: SC01-SH025
frame_moment: start
description: WS. Pip seated in the boat at the water's edge, oar raised to dip, facing right.
composition: Boat left-centre; empty water to the right.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: paddle dips; soft ripple
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Pip seated in the boat at the water's edge, oar raised to dip, facing right.
image: ''
```

```yaml
record: panel
id: SB-SC01-SH025-P2
shot: SC01-SH025
frame_moment: end
description: WS. The boat a quarter of the way into the puddle, Pip seated and paddling, ripple rings behind the stern.
composition: Boat left-centre to centre-left on the lower third line; empty water right.
camera_notes: 'Camera static. Thin arrow: boat moves right.'
duration_s: 0.75
dialogue: none
sound: paddle dips; soft ripple
transition_out: cut to SC02-SH010
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat a quarter of the way into the puddle, Pip seated and paddling, ripple rings behind the stern.
image: ''
```


#### SC02 — EXT. PUDDLE - MID-WATER - DAY

```yaml
record: panel
id: SB-SC02-SH010-P1
shot: SC02-SH010
frame_moment: start
description: WS. The boat left of centre, Pip seated paddling, chin up; ripple rings spread ahead of the bow; empty sky above.
composition: Boat left of centre on the lower third line; top half empty for the drop.
camera_notes: 'Camera static. Thin arrow: boat glides right.'
duration_s: 0.75
dialogue: none
sound: paddle dips; ripples spreading
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat left of centre, Pip seated paddling, chin up; ripple rings spread ahead of the bow; empty sky above.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH010-P2
shot: SC02-SH010
frame_moment: end
description: WS. The boat at centre, Pip paddling; rings widening ahead of the bow.
composition: Boat at the centre; sky above clear.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: paddle dips; ripples spreading
transition_out: cut to SC02-SH020
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat at centre, Pip paddling; rings widening ahead of the bow.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH020-P1
shot: SC02-SH020
frame_moment: start
description: WS. The aqua drop, the brightest thing in frame, at the top of frame above the boat; the intact boat at centre with Pip seated, unaware.
composition: Drop on the vertical centre line in the top third; boat on the lower third line.
camera_notes: 'Camera static. Thick arrow: drop falls straight down.'
duration_s: 0.75
dialogue: none
sound: rising whistle of the falling drop, a plop and wet crunch on the hit, gurgle as the boat sinks
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The aqua drop, the brightest thing in frame, at the top of frame above the boat; the intact boat at centre with Pip seated, unaware.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH020-P2
shot: SC02-SH020
frame_moment: mid
description: WS. The drop lands on the middle of the boat; the boat is folding flat under it, Pip's eyes popped wide.
composition: Drop and boat on the centre line; splash spikes at the hit.
camera_notes: Camera static.
duration_s: 0.5
dialogue: none
sound: rising whistle of the falling drop, a plop and wet crunch on the hit, gurgle as the boat sinks
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The drop lands on the middle of the boat; the boat is folding flat under it, Pip's eyes popped wide.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH020-P3
shot: SC02-SH020
frame_moment: end
description: WS. Ripples only on the water where the boat was, oar floating on the water beside them; boat gone, no Pip visible.
composition: Concentric ripples at the centre; empty grey sky above.
camera_notes: Camera static. Cut on the sink.
duration_s: 0.75
dialogue: none
sound: rising whistle of the falling drop, a plop and wet crunch on the hit, gurgle as the boat sinks
transition_out: cut on the sink to SC02-SH030
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Ripples only on the water where the boat was, oar floating on the water beside them; boat gone, no Pip visible.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH030-P1
shot: SC02-SH030
frame_moment: start
description: MS, eye-level. Pip's head bobs up beside the floating flat paper, ears limp, soggy, seed held high and dry above her.
composition: Pip at centre; seed at the top of frame; flat paper below her.
camera_notes: 'Camera static. Thin arrow: Pip rises.'
duration_s: 0.75
dialogue: none
sound: bloop as she surfaces; shake and flick of droplets
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS, eye-level. Pip's head bobs up beside the floating flat paper, ears limp, soggy, seed held high and dry above her.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH030-P2
shot: SC02-SH030
frame_moment: end
description: MS. Pip on the flat paper, shaking herself, droplets flying, seed still high.
composition: Pip centre; seed top of frame; flat paper beneath her.
camera_notes: 'Camera static. Small arrows: droplets fly outward.'
duration_s: 0.75
dialogue: none
sound: bloop as she surfaces; shake and flick of droplets
transition_out: cut to SC02-SH035
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip on the flat paper, shaking herself, droplets flying, seed still high.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH035-P1
shot: SC02-SH035
frame_moment: start
description: MS. Pip on the flat paper making quick crease motions with her hands, soggy ears.
composition: Pip centre; flat paper around her.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: quick crease flicks, then a pop
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip on the flat paper making quick crease motions with her hands, soggy ears.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH035-P2
shot: SC02-SH035
frame_moment: end
description: MS. The boat popped back into shape around Pip, who is seated in it; smear lines of the pop fading.
composition: Pip centre; boat popped around her.
camera_notes: 'Camera static. Small arrows: paper pops up and out.'
duration_s: 0.75
dialogue: none
sound: quick crease flicks, then a pop
transition_out: cut to SC02-SH037
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. The boat popped back into shape around Pip, who is seated in it; smear lines of the pop fading.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH037-P1
shot: SC02-SH037
frame_moment: start
description: MS. Pip seated in the popped boat, chin up, her LEFT forearm and hand rising to her brow (left upper arm pinned, closed seed tucked under the left arm), yellow oar lying across her lap under her right hand, sky above.
composition: Pip centre; sky above her.
camera_notes: 'Camera static. Thin arrow: hand rises to the brow.'
duration_s: 0.75
dialogue: none
sound: soft stubborn 'hup' of a salute (no dialogue)
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip seated in the popped boat, chin up, her LEFT forearm and hand rising to her brow (left upper arm pinned, closed seed tucked under the left arm), yellow oar lying across her lap under her right hand, sky above.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH037-P2
shot: SC02-SH037
frame_moment: end
description: 'MS. Held salute with the LEFT hand at the brow, left upper arm pinned with the seed tucked under it, oar across her lap under the right hand, boat ready to go, proud face.'
composition: Pip centre; hand on the upper third line.
camera_notes: Camera static. Hold.
duration_s: 0.75
dialogue: none
sound: soft stubborn 'hup' of a salute (no dialogue)
transition_out: cut to SC03-SH010
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Held salute with the LEFT hand at the brow, left upper arm pinned with the seed tucked under it, oar across her lap under the right hand, boat ready to go, proud face.'
image: ''
```


#### SC03 — EXT. PUDDLE - MID-WATER - DAY

```yaml
record: panel
id: SB-SC03-SH010-P1
shot: SC03-SH010
frame_moment: start
description: WS, same framing as SC02-SH020. Pip stroking the oar in the boat at centre-right, rings widening at the bow, glancing up relaxed; the second drop enters at the top of frame above the same spot.
composition: Boat centre-right on the lower third line; drop at the top of frame.
camera_notes: 'Camera static. Thick arrow: drop falls.'
duration_s: 1.0
dialogue: none
sound: rising whistle, plop, faster gurgle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, same framing as SC02-SH020. Pip stroking the oar in the boat at centre-right, rings widening at the bow, glancing up relaxed; the second drop enters at the top of frame above the same spot.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH010-P2
shot: SC03-SH010
frame_moment: end
description: WS. Ripples only where the boat sank, oar floating on the water beside them; the boat gone; grey sky slightly darker.
composition: Ripples at the centre-right; empty sky above.
camera_notes: Camera static.
duration_s: 1.0
dialogue: none
sound: rising whistle, plop, faster gurgle
transition_out: cut to SC03-SH020
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Ripples only where the boat sank, oar floating on the water beside them; the boat gone; grey sky slightly darker.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH020-P1
shot: SC03-SH020
frame_moment: start
description: MS, eye-level. Pip's head already above the water, soggy and scowling, hands starting a fast refold.
composition: Pip centre-left.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: fast crease flicks, a snappy pop
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS, eye-level. Pip's head already above the water, soggy and scowling, hands starting a fast refold.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH020-P2
shot: SC03-SH020
frame_moment: end
description: MS. Pip seated in the lopsided, creased boat, scowl held.
composition: Pip centre-left; lopsided boat around her.
camera_notes: 'Camera static. Small arrows: pop.'
duration_s: 0.75
dialogue: none
sound: fast crease flicks, a snappy pop
transition_out: cut to SC03-SH025
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip seated in the lopsided, creased boat, scowl held.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH025-P1
shot: SC03-SH025
frame_moment: start
description: MS. Pip seated in the lopsided boat; a small round shadow just appearing on the water at the lower right of the boat; her eyes turning toward it.
composition: Pip centre-left; small shadow lower right.
camera_notes: 'Camera static. Thin arrow: eyeline to the shadow.'
duration_s: 0.75
dialogue: none
sound: low soft rumble as the shadow grows
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip seated in the lopsided boat; a small round shadow just appearing on the water at the lower right of the boat; her eyes turning toward it.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH025-P2
shot: SC03-SH025
frame_moment: end
description: MS. The shadow is larger; Pip's ears are flat; eyes fixed on it.
composition: Pip centre-left; shadow lower right, larger.
camera_notes: 'Camera static. Thin arrow: ears drop.'
duration_s: 0.75
dialogue: none
sound: low soft rumble as the shadow grows
transition_out: cut to SC04-SH010
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. The shadow is larger; Pip's ears are flat; eyes fixed on it.
image: ''
```


#### SC04 — EXT. PUDDLE - MID-WATER - DAY

```yaml
record: panel
id: SB-SC04-SH010-P1
shot: SC04-SH010
frame_moment: start
description: MCU, eye-level. Pip in PROFILE facing screen right, ears flat, chin lifting, eyes tracking upward.
composition: Pip centre in side-on profile; eyes on the upper third line.
camera_notes: 'Camera static. Thin arrow: eyeline up.'
duration_s: 0.75
dialogue: none
sound: rain patter
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MCU, eye-level. Pip in PROFILE facing screen right, ears flat, chin lifting, eyes tracking upward.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH010-P2
shot: SC04-SH010
frame_moment: end
description: 'MCU. Pip still in profile facing right: determined squint, chin up.'
composition: Same as the previous panel.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: rain patter
transition_out: cut to SC04-SH020
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MCU. Pip still in profile facing right: determined squint, chin up.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH020-P1
shot: SC04-SH020
frame_moment: start
description: POV looking up, low angle. One small bright aqua drop high in a grey sky.
composition: Drop at the centre, small; grey sky around.
camera_notes: Camera static.
duration_s: 0.5
dialogue: none
sound: faint rising whistle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; POV looking up, low angle. One small bright aqua drop high in a grey sky.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH020-P2
shot: SC04-SH020
frame_moment: end
description: POV. The drop is big and close, glossy, slightly stretched tall, filling about a third of the frame height.
composition: Drop at the centre, large.
camera_notes: 'Camera static. Thick arrow: drop grows toward camera.'
duration_s: 0.5
dialogue: none
sound: faint rising whistle
transition_out: cut to SC04-SH030
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; POV. The drop is big and close, glossy, slightly stretched tall, filling about a third of the frame height.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH030-P1
shot: SC04-SH030
frame_moment: start
description: "MS, eye-level. Start of the shot: Pip seated in the lopsided boat at lower centre, her RIGHT hand laying the yellow oar on the boat floor (first frames), closed seed still tucked under the left arm, squint; she then lifts the seed overhead in both hands, fluff still a closed ball."
composition: Pip lower centre; seed in the upper centre.
camera_notes: 'Camera static. Thin arrow: right hand lowers the oar to the boat floor, then both hands raise the seed.'
duration_s: 1.25
dialogue: none
sound: a soft poof as the fluff opens
transition_out: none (continues in the next panel of this shot)
sketch_prompt: "rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS, eye-level. Start of the shot: Pip seated in the lopsided boat at lower centre, her RIGHT hand laying the yellow oar on the boat floor (first frames), closed seed still tucked under the left arm, squint; she then lifts the seed overhead in both hands, fluff still a closed ball."
image: ''
```

```yaml
record: panel
id: SB-SC04-SH030-P2
shot: SC04-SH030
frame_moment: end
description: MS. The fluff fully open like a parasol above Pip, the brightest white in the frame; she grips the stem, braced.
composition: Fluff upper centre; Pip lower centre.
camera_notes: 'Camera static. Thin arrows: fluff bursts outward.'
duration_s: 1.25
dialogue: none
sound: a soft poof as the fluff opens
transition_out: cut to SC04-SH040
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. The fluff fully open like a parasol above Pip, the brightest white in the frame; she grips the stem, braced.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH040-P1
shot: SC04-SH040
frame_moment: start
description: WS, eye-level. The drop lands on the open fluff above the boat; Pip under the fluff, braced.
composition: Fluff upper centre-left; boat below.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: two springy boings on the fluff
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, eye-level. The drop lands on the open fluff above the boat; Pip under the fluff, braced.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH040-P2
shot: SC04-SH040
frame_moment: mid
description: 'WS. First bounce: the drop springs up off the fluff and drops back down onto it for the second.'
composition: Fluff upper centre-left; drop above it.
camera_notes: 'Camera static. Thin arrows: up and down bounce.'
duration_s: 1.0
dialogue: none
sound: two springy boings on the fluff
transition_out: none (continues in the next panel of this shot)
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. First bounce: the drop springs up off the fluff and drops back down onto it for the second.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH040-P3
shot: SC04-SH040
frame_moment: end
description: WS. After the second bounce the drop rises off the fluff; Pip still under the fluff.
composition: Drop above the fluff, upper centre-left.
camera_notes: 'Camera static. Thin arrow: drop rises.'
duration_s: 0.75
dialogue: none
sound: two springy boings on the fluff
transition_out: cut to SC04-SH045
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. After the second bounce the drop rises off the fluff; Pip still under the fluff.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH045-P1
shot: SC04-SH045
frame_moment: start
description: WS. The drop falls into the water beside the boat and a splash crown rises at the lower right; boat and open fluff at left.
composition: Splash lower right; boat and fluff left.
camera_notes: 'Camera static. Thin arrow: crown rises.'
duration_s: 0.75
dialogue: none
sound: plop and splash, then a trickle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The drop falls into the water beside the boat and a splash crown rises at the lower right; boat and open fluff at left.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH045-P2
shot: SC04-SH045
frame_moment: end
description: WS. The crown has fallen back to ripples beside the boat; boat and fluff at left.
composition: Ripples lower right; boat and fluff left.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: plop and splash, then a trickle
transition_out: cut to SC04-SH050
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The crown has fallen back to ripples beside the boat; boat and fluff at left.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH050-P1
shot: SC04-SH050
frame_moment: start
description: WS. The splash wave at the right of the boat; the lopsided boat at centre, Pip under the open fluff, starting to turn.
composition: Boat at the centre; wave at right.
camera_notes: 'Camera static. Thin circular arrow: boat spins once.'
duration_s: 0.75
dialogue: none
sound: whoosh of the spin
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The splash wave at the right of the boat; the lopsided boat at centre, Pip under the open fluff, starting to turn.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH050-P2
shot: SC04-SH050
frame_moment: end
description: 'WS. Spin finished: the boat faces right at centre, Pip under the open fluff.'
composition: Boat at the centre, facing right.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: whoosh of the spin
transition_out: cut to SC04-SH055
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Spin finished: the boat faces right at centre, Pip under the open fluff.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH055-P1
shot: SC04-SH055
frame_moment: start
description: WS. The boat entering at the centre, Pip grinning with the seed held up, fluff open.
composition: Boat at the centre.
camera_notes: 'Camera static. Thick arrow: boat slides right.'
duration_s: 0.5
dialogue: none
sound: whoosh of speed; Pip's giggle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat entering at the centre, Pip grinning with the seed held up, fluff open.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH055-P2
shot: SC04-SH055
frame_moment: end
description: WS. The boat at the right third of the frame, Pip grinning, seed held up.
composition: Boat at the right third.
camera_notes: Camera static. Boat exits right.
duration_s: 0.5
dialogue: none
sound: whoosh of speed; Pip's giggle
transition_out: cut to SC05-SH010
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat at the right third of the frame, Pip grinning, seed held up.
image: ''
```


#### SC05 — EXT. PUDDLE - FAR SHORE - DAY

```yaml
record: panel
id: SB-SC05-SH010-P1
shot: SC05-SH010
frame_moment: start
description: WS, eye-level. The boat sliding in from the left toward the far shore; Mo and the bare soil patch at the right, her feelers drooping; pale warm glow at upper right.
composition: Boat left; Mo and soil right.
camera_notes: 'Camera static. Thin arrow: boat slides right.'
duration_s: 1.0
dialogue: none
sound: a soft bump of the boat on the shore; Mo's feelers rustle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, eye-level. The boat sliding in from the left toward the far shore; Mo and the bare soil patch at the right, her feelers drooping; pale warm glow at upper right.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH010-P2
shot: SC05-SH010
frame_moment: end
description: WS. The boat stopped at the shore, Pip seated; Mo's feelers lifted.
composition: Boat left; Mo right with feelers up.
camera_notes: 'Camera static. Thin arrow: feelers lift.'
duration_s: 1.0
dialogue: none
sound: a soft bump of the boat on the shore; Mo's feelers rustle
transition_out: cut to SC05-SH020
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat stopped at the shore, Pip seated; Mo's feelers lifted.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH020-P1
shot: SC05-SH020
frame_moment: start
description: MS. Pip stepping out of the boat toward Mo, the seed held in both hands; Mo right, feelers held back.
composition: 'Two-shot: Pip left, Mo right.'
camera_notes: 'Camera static. Thin arrow: Pip steps right.'
duration_s: 0.75
dialogue: none
sound: soft step onto the soil
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip stepping out of the boat toward Mo, the seed held in both hands; Mo right, feelers held back.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH020-P2
shot: SC05-SH020
frame_moment: end
description: MS. Pip's arms extended, offering the seed with a grin; Mo still holding her feelers back.
composition: Pip left, Mo right; seed between them.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: soft step onto the soil
transition_out: cut to SC05-SH025
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip's arms extended, offering the seed with a grin; Mo still holding her feelers back.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH025-P1
shot: SC05-SH025
frame_moment: start
description: MS. Pip's arms extended with the seed; Mo's feelers reaching toward it.
composition: Pip left, Mo right; seed between.
camera_notes: 'Camera static. Thin arrows: feelers reach.'
duration_s: 0.75
dialogue: none
sound: soft feeler rustle
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip's arms extended with the seed; Mo's feelers reaching toward it.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH025-P2
shot: SC05-SH025
frame_moment: end
description: MS. Mo holding the seed in her feelers, head tilted; Pip's hands empty.
composition: Pip left, Mo right.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: soft feeler rustle
transition_out: cut to SC05-SH030
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Mo holding the seed in her feelers, head tilted; Pip's hands empty.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH030-P1
shot: SC05-SH030
frame_moment: start
description: MS. Mo at right with the seed in her feelers, stem pointing down to the soil patch at centre.
composition: Mo right; soil centre.
camera_notes: 'Camera static. Thin arrow: stem pushes down.'
duration_s: 0.75
dialogue: none
sound: soft squelch of soil, a small fold-shut puff
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Mo at right with the seed in her feelers, stem pointing down to the soil patch at centre.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH030-P2
shot: SC05-SH030
frame_moment: end
description: MS. The seed standing planted in the soil, fluff folded shut; Mo beside it.
composition: Mo right; planted seed centre.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: soft squelch of soil, a small fold-shut puff
transition_out: cut to SC05-SH040
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. The seed standing planted in the soil, fluff folded shut; Mo beside it.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH040-P1
shot: SC05-SH040
frame_moment: start
description: INSERT, high angle. The planted seed in the soil at centre; one last aqua drop falling toward the soil beside it; warm glow.
composition: Soil and seed centre; drop at the top.
camera_notes: 'Camera static. Thin arrow: drop falls.'
duration_s: 1.25
dialogue: none
sound: a plip on the soil, then a rubbery boing
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; INSERT, high angle. The planted seed in the soil at centre; one last aqua drop falling toward the soil beside it; warm glow.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH040-P2
shot: SC05-SH040
frame_moment: end
description: INSERT. A green sprout standing up fully beside the seed, soil dimpled where the drop landed.
composition: Sprout centre.
camera_notes: 'Camera static. Small arrows: sprout pops up.'
duration_s: 1.25
dialogue: none
sound: a plip on the soil, then a rubbery boing
transition_out: cut to SC05-SH050
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; INSERT. A green sprout standing up fully beside the seed, soil dimpled where the drop landed.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH050-P1
shot: SC05-SH050
frame_moment: start
description: MWS, eye-level. Pip at left facing right and Mo at right facing left in PROFILE, the sprout between them, both looking down at it.
composition: Pip left, sprout centre, Mo right; side-on.
camera_notes: 'Camera static. Thin arrows: heads tilt up.'
duration_s: 0.75
dialogue: none
sound: soft warm hum; feeler flutter
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MWS, eye-level. Pip at left facing right and Mo at right facing left in PROFILE, the sprout between them, both looking down at it.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH050-P2
shot: SC05-SH050
frame_moment: end
description: MWS. Both heads tilted up to the sky, Mo's feelers waving, in profile.
composition: Same positions; eyelines up.
camera_notes: 'Camera static. Thin arrows: eyelines up; feelers wave.'
duration_s: 0.75
dialogue: none
sound: soft warm hum; feeler flutter
transition_out: cut to SC05-SH055
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MWS. Both heads tilted up to the sky, Mo's feelers waving, in profile.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH055-P1
shot: SC05-SH055
frame_moment: start
description: MWS. Same positions in PROFILE, both looking up; Pip beginning to raise one hand.
composition: Same as the previous shot.
camera_notes: 'Camera static. Thin arrow: hand rises.'
duration_s: 0.75
dialogue: none
sound: gentle warm hum, ends on a plip
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MWS. Same positions in PROFILE, both looking up; Pip beginning to raise one hand.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH055-P2
shot: SC05-SH055
frame_moment: end
description: MWS. Pip's hand raised in a small wave to the sky; Mo and the sprout beside her. Fade out after this frame.
composition: Same positions; Pip's hand on the upper third line.
camera_notes: Camera static. FADE OUT after this frame.
duration_s: 0.75
dialogue: none
sound: gentle warm hum, ends on a plip
transition_out: fade-out (end of film)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MWS. Pip's hand raised in a small wave to the sky; Mo and the sprout beside her. Fade out after this frame.
image: ''
```


#### Continuity check log
| Cut | Check | Result |
|---|---|---|
| SC01-SH010 → SH020 → SH025 | axis, positions, props | PASS: Pip left of frame facing right; boat at her feet (SH010), on the water (SH020), underway (SH025); oar in hand from SH020. |
| SC01-SH025 → SC02-SH010 | travel direction | PASS: boat moves right and enters SC02 left of centre. |
| SC02-SH010 → SH020 | framing | PASS: boat left of centre to centre; drop path above the boat. |
| SC02-SH020 → SH030 | state | PASS: boat gone, ripples only → Pip surfaces centre, soggy, seed high and dry. |
| SC02-SH030 → SH035 → SH037 | state | PASS: Pip on flat paper → popped boat → seated, salute held, oar across lap. Salute is the LEFT hand (continuity@3), seed tucked, oar across lap. |
| SC02-SH037 → SC03-SH010 | state, light | PASS: seated in the refolded boat; SC03 opens with Pip stroking (QC-108); sky a step darker. |
| SC03-SH010 → SH020 → SH025 | state | PASS: boat gone → Pip surfaced scowling → lopsided creased boat; shadow lower right in SH025. |
| SC03-SH025 → SC04-SH010 | Pip state | PASS: ears flat in both; SC04-SH010 is PROFILE facing right, matching the side-on staging. |
| SC04-SH010 → SH020 → SH030 | eyeline | PASS: upward eyeline cuts to the sky POV, then to the seed lift. |
| SC04-SH030 → SH040 → SH045 | fluff, drop | PASS: fluff OPEN throughout; drop rises off the fluff (SH040 end) then falls into the water (SH045). |
| SC04-SH045 → SH050 → SH055 | boat position | PASS: boat left in SH045, centre spin in SH050, exits right third in SH055. |
| SC04-SH055 → SC05-SH010 | direction | PASS: boat exits right; arrives from the left on the far shore. |
| SC05-SH010 → SH020 → SH025 → SH030 | positions, seed | PASS: boat left, Mo right; seed in Pip's hands → offered → in Mo's feelers → planted, fluff shut. |
| SC05-SH030 → SH040 → SH050 → SH055 | sprout, profile | PASS: seed planted, sprout appears in SH040; SH050/SH055 in PROFILE, Pip left facing right, Mo right facing left; no camera-facing pose. |

#### Conflicts raised
None. Notes: hands settled in continuity@3 (left-hand salute, seed under the left arm, oar in the right hand and stowed on screen at the start of SC04-SH030). SC05-SH020 says 'both hands' for the seed, so no seed-under-arm is drawn there.

#### Handoff
- Produced: storyboard@3 (52 panels: SC01 6, SC02 11, SC03 6, SC04 15, SC05 14; 25 shots, 42.0 s)
- Conflicts raised: none
- Panels with approved images: none (no generation budget)
- Next: re-run camera/continuity alignment, then image-prompt-engineer and film-editor


## 9. Audio


_Not produced yet: `11_sound/voice.md` — voice-director._


_Not produced yet: `11_sound/music.md` — music-director._


_Not produced yet: `11_sound/sfx.md` — sound-designer._


## 10. VFX and edit

_Not produced yet: `12_vfx/vfx_plan.md` — vfx-supervisor._


_Not produced yet: `13_edit/edit_plan.md` — film-editor._


## 11. Continuity tracker
Source: `07_camera/continuity.md`

### Continuity Bible: Frog Ferry

#### Change note (v3, 2026-10-19; production-manager conflict resolution, animation wins over continuity@2)
- Hand and oar rules replaced: oar in the RIGHT hand, seed under the LEFT arm; the SC02-SH037 salute is the LEFT hand (left upper arm pinned, seed stays tucked, right hand lays the oar across her lap); during both sinkings the oar FLOATS on the surface (not lost under water); the oar is stowed ON SCREEN at the start of SC04-SH030 (right hand lays it on the boat floor in frames 1-8, then both hands lift the seed). SC04-SH010 still shows HELD (REST); STOWED from SC04-SH030 to the end.
- Closed: CR-ISSUE-07 (wave at the right, director erratum), CR-ISSUE-08 (head tilt is part of the take, director erratum), CR-ISSUE-09 (props@2), CR-ISSUE-10. New: CR-ISSUE-11 (closed, this resolution), 12 and 13 (open, see log).
- depends_on updated to the current versions: five direction@2, five camera@2, SC01-SC04_animation@2, SC05_animation@3, props@2. Direction errata for SC04/SC05 are in place without a version bump.

#### Change note (v2, 2026-10-19)
- Re-cut to direction@2: 25 shots, 42.0 s (SC01 5.5, SC02 8.0, SC03 5.0, SC04 11.5, SC05 12.0). New shot IDs mapped: SC01-SH025, SC02-SH035, SC02-SH037, SC03-SH025, SC04-SH045, SC04-SH055, SC05-SH025, SC05-SH055. State-change starts that moved: PR-BOAT FLAT -> REFOLDED now SC02-SH035; Pip SOGGY -> CREASED stays SC03-SH020.
- Coverage map refreshed. QC-108: the launch beat is now in SC01-SH010 (boat at her feet) + SC01-SH020 (set on water, hop in); "paddles on" is an ACCEPTED DEVIATION, shown at the start of SC03-SH010 (CR-ISSUE-06).
- QC-106 closed: one oar/seed hand rule (see Hand and oar rules; revised in v3). QC-107 closed: oar STOWED from the start of SC04-SH030 (on screen, v3). QC-112 closed: depends_on covers all five direction@2 and camera@2 files plus animation by current version; status mismatch fixed (this document is APPROVED).
- CR-ISSUE-02, 04, 05 closed with explicit decisions. New: CR-ISSUE-06 to 09.
- Animation docs: depends_on entries were bumped to the published animation versions in v3 (stale-dependency note resolved).

#### Story timeline
| Scene | Story day | Time of day | Elapsed since previous | Weather |
|---|---|---|---|---|
| SC01 | D1 | morning | start | light rain |
| SC02 | D1 | morning | continuous | light rain |
| SC03 | D1 | morning | continuous (seconds) | light rain, slightly heavier |
| SC04 | D1 | morning | continuous | light rain |
| SC05 | D1 | morning | continuous (about 10 s of crossing) | rain thinning, pale warm glow upper right |

#### Hand and oar rules (fixed for all departments)
1. Screen direction: Pip faces screen right and travels left to right. With the camera on the south bank, her RIGHT side is the camera-near side and her LEFT side is the far side.
2. Oar: always the RIGHT hand when it is in a hand (paddling, bobbing up after a sink, re-gripping). Never the left hand.
3. Seed (CLOSED): always tucked under her LEFT arm when not raised. When "held high" in SC02-SH030 and SC03-SH020 (start) it is raised by the left arm only; at the end of SC02-SH030 it is still high, in SC02-SH035 it goes back under the left arm.
4. Salute (SC02-SH037): the LEFT hand. The left upper arm stays pinned to the body so the seed stays tucked under it; only the left forearm and hand lift to the brow. The right hand lays the oar across her lap (PR-OAR:HELD, position REST) and keeps hold of it. The far-side (left) arm salutes, so the forearm must clear the head line to read in silhouette. (Decision: animation@2 wins over continuity@2 on the hand, same precedence tier as direction and more specific.)
5. Oar positions while HELD: HAND (right hand), REST (across her lap or on the boat floor within reach, right hand still on it) or, during recovery only, TUCK (under her right arm while she climbs or creases). FLOAT (on the water surface) applies only while she is under or just surfacing from a sinking. It goes to REST whenever the right hand is needed free (SC02-SH037 salute pose, SC03-SH025 hold).
6. Oar sink rule: during a sinking (SC02-SH020, SC03-SH010) the right hand lets go at the fold and the oar FLOATS flat on the water surface; it is never lost or carried away, and the seed tip stays above the water (left arm). Recovery: SC02-SH030 (right hand scoops it and tucks it under the right arm) then SC02-SH035 (re-gripped in the right hand as the refold finishes); SC03-SH020 likewise (start FLOAT, scoop and TUCK, re-gripped by the end).
7. Oar STOWED (lying across the boat floor, not in her keeping) starts ON SCREEN in the first frames of SC04-SH030 (frames 1-8, the first 0.3 s): her right hand lays it on the boat floor, then both hands lift the seed. SC04-SH010 therefore shows the oar still HELD (REST), and the SC04-SH020 sky POV shows nothing of it. STOWED stays to the end of the film (SC04-SH030 to SC05-SH055); the oar remains in the beached boat in SC05 and Pip never touches it again.
8. Seed OPEN (SC04-SH030 to SC05-SH025): held in both hands (overhead in SC04, offered at chest height in SC05). Never under the arm once open.
9. Pip is DRY after she shakes (see CR-ISSUE-02): the boat stays damp grey-cream, Pip is bright yellow. No new Pip state exists or is needed. Flying droplets in SC02-SH030 are a transient effect, not a state.

#### State changes
| Item | From → to | Cause | Starts at shot |
|---|---|---|---|
| CH-PIP (CO-PIP-01) | DRY → SOGGY | first drop sinks the boat | SC02-SH020 (end, underwater) |
| CH-PIP | SOGGY → DRY | she shakes off water | SC02-SH030 (during the shake) |
| CH-PIP | DRY → SOGGY | second drop | SC03-SH010 (end, underwater) |
| CH-PIP | SOGGY → CREASED | quick refold leaves extra wrinkles (stays CREASED to the end) | SC03-SH020 |
| PR-BOAT | NEW → FLAT | drop 1 | SC02-SH020 |
| PR-BOAT | FLAT → REFOLDED | Pip refolds | SC02-SH035 |
| PR-BOAT | REFOLDED → FLAT | drop 2 | SC03-SH010 |
| PR-BOAT | FLAT → CREASED | second refold | SC03-SH020 |
| PR-SEED | CLOSED → OPEN | Pip pops the fluff | SC04-SH030 |
| PR-SEED | OPEN → PLANTED (fluff shut) | Mo plants it | SC05-SH030 |
| PR-OAR | HELD (HAND) → HELD (FLOAT) | right hand lets go at the fold; oar floats on the surface | SC02-SH020 |
| PR-OAR | HELD (FLOAT) → HELD (TUCK) → HELD (HAND) | right hand scoops it (SH030), re-grips it as the refold finishes | SC02-SH030 → SC02-SH035 (end) |
| PR-OAR | HELD (HAND) → HELD (REST) | right hand lays it across her lap for the left-hand salute | SC02-SH037 (start) |
| PR-OAR | HELD (REST) → HELD (HAND) | paddling resumes | SC03-SH010 (start) |
| PR-OAR | HELD (HAND) → HELD (FLOAT) | right hand lets go; oar floats on the surface | SC03-SH010 (end) |
| PR-OAR | HELD (FLOAT) → HELD (TUCK) → HELD (HAND) → HELD (REST) | scooped and re-gripped (SH020), then across her lap as she settles | SC03-SH020 → SC03-SH025 |
| PR-OAR | HELD (REST) → STOWED | Pip needs both hands for the seed; right hand lays the oar on the boat floor, ON SCREEN | SC04-SH030 (frames 1-8) |
| PR-SPROUT | HIDDEN → SPROUT | last drop | SC05-SH040 |

#### Per-shot states (start → end)
Oar column: HAND = right hand; REST = across lap / boat floor within reach (still HELD); TUCK = under the right arm during recovery; FLOAT = on the water surface during a sinking; STOWED = lying across the boat floor. Seed "arm" = tucked under the LEFT arm.

| Shot | Pip | Boat | Seed | Oar | Mo / other |
|---|---|---|---|---|---|
| SC01-SH010 | DRY → DRY; standing on the near bank | NEW, on the bank at her feet | CLOSED, under left arm | HELD, HAND | Mo tiny at far right, feelers drooping |
| SC01-SH020 | DRY → DRY; standing → seated in the boat | NEW, at her feet → afloat at the water's edge | CLOSED, under left arm | HELD: laid in the boat as she sets it down (REST) → HAND when seated | Mo off-screen right (tiny) |
| SC01-SH025 | DRY → DRY; seated, paddling | NEW, afloat, moves to 1/4 into the puddle, heading right | CLOSED, under left arm | HELD, HAND | — |
| SC02-SH010 | DRY → DRY; seated, paddling | NEW, centre-left → centre | CLOSED, under left arm | HELD, HAND | ripple rings ahead of the bow |
| SC02-SH020 | DRY → SOGGY (underwater at the end) | NEW → FLAT, gone under | CLOSED, left arm thrusts it up; the tip stays above the water at the end | HELD: HAND → FLOAT (floating flat on the surface at the end) | drop falls from top of frame |
| SC02-SH030 | SOGGY → DRY (shake mid-shot); bobs up, ends standing on the flat paper | FLAT, floating flat paper | CLOSED, raised high by the left arm; stays high at the end | HELD: FLOAT → TUCK (scooped by the right hand, tucked under the right arm) | droplets fly during the shake |
| SC02-SH035 | DRY → DRY; ends seated in the popped boat | FLAT → REFOLDED (damp grey-cream) | CLOSED, back under left arm | HELD: TUCK (under the right arm while she creases) → HAND (right hand re-grips it as the pop finishes) | — |
| SC02-SH037 | DRY → DRY; seated, salute held | REFOLDED | CLOSED, under left arm (left upper arm pinned) | HELD: HAND → REST (right hand lays it across her lap, still holding it) | LEFT hand at the brow (salute) |
| SC03-SH010 | DRY → SOGGY (underwater at the end) | REFOLDED → FLAT, gone under | CLOSED, under left arm | HELD: starts HAND (stroking, paddles on) → FLOAT at the end (floating on the surface, ripples around) | rings widen at the bow; drop 2 on the same spot |
| SC03-SH020 | SOGGY → CREASED; head above water, scowling → seated in the lopsided boat | FLAT → CREASED | CLOSED: raised by the left arm at the start, under left arm at the end | HELD: FLOAT → TUCK → HAND (re-gripped by the end) | — |
| SC03-SH025 | CREASED → CREASED, ears flat at the end | CREASED | CLOSED, under left arm | HELD, REST (across lap, right hand on it) | grey round shadow grows lower right of the boat |
| SC04-SH010 | CREASED → CREASED; profile facing screen right, squint | CREASED | CLOSED, under left arm | HELD, REST | — |
| SC04-SH020 | n/a (POV, sky) | n/a | n/a | HELD (REST), unchanged; not visible | drop only |
| SC04-SH030 | CREASED → CREASED | CREASED | CLOSED, under left arm at the start → OPEN, raised in both hands | HELD (REST) → STOWED: the right hand lays it on the boat floor in frames 1-8 (first 0.3 s), on screen; then both hands lift the seed | — |
| SC04-SH040 | CREASED → CREASED; under the open fluff | CREASED | OPEN, overhead in both hands | STOWED | drop lands on the fluff, two bounces, ends rising |
| SC04-SH045 | CREASED (under the fluff) | CREASED | OPEN | STOWED | drop falls into water beside the boat; splash crown; ends in ripples |
| SC04-SH050 | CREASED | CREASED, spins once, ends facing right | OPEN | STOWED | splash wave at the RIGHT of the boat, consistent with SH045 (CR-ISSUE-07, closed) |
| SC04-SH055 | CREASED → CREASED, grinning | CREASED, moves right, ends at the right third | OPEN, held up in both hands | STOWED | — |
| SC05-SH010 | CREASED (seated) | CREASED, slides onto the far shore, beached at the left | OPEN, in both hands | STOWED | Mo feelers droop → up |
| SC05-SH020 | CREASED; steps out, ends standing on shore left of Mo, arms extended | CREASED, beached | OPEN, offered in both hands | STOWED (in the boat) | Mo feelers up and held back |
| SC05-SH025 | CREASED | CREASED, beached | OPEN → in Mo's feelers | STOWED | Mo takes the seed with her feelers with a small head tilt (part of the take, CR-ISSUE-08 closed) |
| SC05-SH030 | CREASED (out of focus/edge or absent) | CREASED | OPEN → PLANTED (fluff shut) | STOWED | Mo plants the stem |
| SC05-SH040 | not in frame | not in frame | PLANTED | not in frame | high insert; sprout HIDDEN → SPROUT |
| SC05-SH050 | CREASED; profile facing right, looks from sprout to sky | CREASED, beached | PLANTED | STOWED | Mo profile facing left; feelers wave; both end looking up |
| SC05-SH055 | CREASED; one-hand wave, hand is the RIGHT (camera-near) | CREASED, beached | PLANTED | STOWED | fade out |

#### Scene records

```yaml
record: continuity
id: CONT-SC01
scene: SC01
axis: "near shore (left) to far shore (right); camera on the south bank, side-on, for the whole film"
screen_direction: "Pip faces screen right and travels left to right; Mo faces screen left; Pip and boat exit toward screen right"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: DRY, hair: "none", injuries: "none", props_carried: "PR-SEED:CLOSED under left arm; PR-OAR:HELD in right hand", end_position: "seated in the boat, a quarter of the way across, heading right"}
  - {id: CH-MO, costume: CO-MO-01, costume_state: DRY, hair: "none", injuries: "none", props_carried: "none", end_position: "far shore right beside the soil patch, feelers drooping"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:NEW", location: "afloat in the puddle"}
  - {id: PR-SEED, state: "PR-SEED:CLOSED", location: "in Pip's keeping"}
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "Pip's right hand"}
time_of_day: morning
weather: "light rain"
carry_over: "none (first scene)"
```

```yaml
record: continuity
id: CONT-SC02
scene: SC02
axis: "left to right travel; camera on the south bank"
screen_direction: "boat travels left to right; enters from the left, exits right"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: DRY, hair: "none", injuries: "none", props_carried: "PR-SEED:CLOSED under left arm; PR-OAR:HELD in right hand (floats on the surface after the sink, tucked under the right arm in SH030, re-gripped in SH035, REST across lap during the salute)", end_position: "seated in the refolded boat at centre-right, saluting with the LEFT hand; state DRY after shaking"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:REFOLDED", location: "afloat, centre-right"}
  - {id: PR-SEED, state: "PR-SEED:CLOSED", location: "under Pip's arm"}
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "floats after the SH020 sink; right hand from the end of SH035; REST across the lap during the SH037 salute (left-hand salute)"}
time_of_day: morning
weather: "light rain"
carry_over: "from SC01: boat NEW afloat, Pip DRY, heading right"
```

```yaml
record: continuity
id: CONT-SC03
scene: SC03
axis: "left to right travel; camera on the south bank"
screen_direction: "boat continues screen right; shadow appears lower right of the boat"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:CLOSED under left arm; PR-OAR:HELD (REST across lap at the end)", end_position: "seated in the lopsided boat, ears flat"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:CREASED", location: "afloat, centre-right"}
  - {id: PR-SEED, state: "PR-SEED:CLOSED", location: "under Pip's arm"}
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "right hand at the start of SH010; floats after the SH010 sink; re-gripped by the end of SH020; REST across the lap in SH025"}
time_of_day: morning
weather: "light rain, slightly heavier"
carry_over: "from SC02: boat REFOLDED, Pip DRY, oar REST across lap (back in the right hand at the start of SH010)"
```

```yaml
record: continuity
id: CONT-SC04
scene: SC04
axis: "left to right travel; camera on the south bank"
screen_direction: "boat exits screen right at speed"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:OPEN overhead in both hands; PR-OAR:STOWED lies across the boat floor, laid there on screen by the right hand in the first frames of SH030", end_position: "seated in the boat at the right third, grinning"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:CREASED", location: "afloat, moving right"}
  - {id: PR-SEED, state: "PR-SEED:OPEN", location: "overhead in Pip's hands"}
  - {id: PR-OAR, state: "PR-OAR:STOWED", location: "across the boat floor"}
time_of_day: morning
weather: "light rain; one large hero drop"
carry_over: "from SC03: boat CREASED, Pip CREASED, ears flat, oar REST across lap"
```

```yaml
record: continuity
id: CONT-SC05
scene: SC05
axis: "Pip (left) to Mo (right) facing each other; camera on the south bank"
screen_direction: "boat arrives from the left; Pip steps out to the right; Pip left of the sprout, Mo right; both end looking up"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:OPEN in both hands, offered to Mo, then empty hands; oar STOWED in the boat", end_position: "on the far shore left of the sprout, waving at the sky"}
  - {id: CH-MO, costume: CO-MO-01, costume_state: DRY, hair: "none", injuries: "none", props_carried: "PR-SEED, then plants it", end_position: "right of the sprout, feelers waving"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:CREASED", location: "beached on the far shore, left"}
  - {id: PR-SEED, state: "PR-SEED:PLANTED", location: "in the soil patch, fluff shut"}
  - {id: PR-OAR, state: "PR-OAR:STOWED", location: "in the beached boat"}
  - {id: PR-SPROUT, state: "PR-SPROUT:SPROUT", location: "in the soil beside the planted seed"}
time_of_day: morning
weather: "rain thinning, pale warm glow upper right"
carry_over: "from SC04: boat CREASED, Pip CREASED, seed OPEN, oar STOWED"
```

#### Coverage map
| Screenplay element (scene, beat/line) | Covered by shots | Note |
|---|---|---|
| SC01 puddle, rain, leaf, pebble | SC01-SH010 | |
| SC01 Pip with the seed | SC01-SH010 | |
| SC01 Mo, bare soil, drooping feelers | SC01-SH010 | Mo tiny at far right |
| SC01 Pip sees Mo, brightens | SC01-SH010 | |
| SC01 sets the boat on the water, hops in | SC01-SH010 (boat at her feet), SC01-SH020 | launch beat now shown (QC-108) |
| SC01 starts to paddle with the oar | SC01-SH025 | |
| SC02 boat glides, ripple rings at the bow | SC02-SH010 | |
| SC02 drop lands on the boat, boat folds and sinks | SC02-SH020 | one cause-and-effect gag |
| SC02 Pip bobs up soggy, seed held high | SC02-SH030 | |
| SC02 shakes herself | SC02-SH030 | |
| SC02 climbs onto the floating flat paper | SC02-SH030 (end state: Pip on the paper) | |
| SC02 makes quick creases, boat pops back | SC02-SH035 | |
| SC02 salutes the sky | SC02-SH037 | |
| SC02 "and paddles on" | SC03-SH010 (start: Pip stroking), SC02-SH037 (salute, boat ready) | ACCEPTED DEVIATION CR-ISSUE-06: a continuing state, shown at the start of SC03-SH010 |
| SC03 rings widen, Pip glances up relaxed | SC03-SH010 | start state |
| SC03 second drop on the same spot, sinks faster | SC03-SH010 | |
| SC03 Pip surfaces, scowls | SC03-SH020 | surfacing is in the start frame |
| SC03 refolds in a flash, lopsided and creased | SC03-SH020 | |
| SC03 small round shadow grows beside her | SC03-SH025 | |
| SC03 Pip's ears go flat | SC03-SH025 | |
| SC04 Pip looks up | SC04-SH010 | |
| SC04 third drop hangs high, small, getting bigger | SC04-SH020 | |
| SC04 Pip squints | SC04-SH010 | |
| SC04 holds the seed over her head, pops the fluff open | SC04-SH030 | oar stowed on screen in frames 1-8 first |
| SC04 drop lands on the fluff, bounces, bounces again | SC04-SH040 | |
| SC04 splash into the water beside the boat | SC04-SH045 | |
| SC04 splash wave spins the lopsided boat once | SC04-SH050 | |
| SC04 sends it speeding forward; Pip holds the seed up, grinning | SC04-SH055 | |
| SC05 boat slides onto the far shore, soft bump | SC05-SH010 | |
| SC05 Mo's feelers lift | SC05-SH010 | trailing end state |
| SC05 Pip steps out and offers the seed | SC05-SH020 | |
| SC05 Mo takes it in her feelers | SC05-SH025 | |
| SC05 Mo tips her head | SC05-SH025 | part of the take (director erratum on direction@2; CR-ISSUE-08 closed) |
| SC05 plants its stem in the bare soil; fluff folds shut | SC05-SH030 | |
| SC05 last drop lands on the soil; sprout pops with a boing | SC05-SH040 | |
| SC05 Mo's feelers wave | SC05-SH050 | |
| SC05 both look at the sprout, then up | SC05-SH050 | looking at the sprout is the start state |
| SC05 Pip gives the sky a small wave | SC05-SH055 | |
| SC05 FADE OUT | SC05-SH055 | editing transition |

No dialogue lines in the film. 0 uncovered beats. 0 shots add story events. 25 shots / 42.0 s.

#### Cut-by-cut checks (new and changed cuts)
- SC01-SH010 to SH020: boat at her feet to boat afloat; Pip left in both; oar HAND to laid in the boat; no axis change.
- SC01-SH020 to SH025: start frame of SH025 equals the SH020 end frame (seated, afloat, oar in right hand).
- SC02-SH030 to SH035: Pip on the flat paper, seed high to seed tucked under the left arm, oar tucked under the right arm, then re-gripped in the right hand; same position centre.
- SC02-SH035 to SH037: seated in the popped boat; oar in the right hand, then laid across her lap; the left hand does the salute; boat REFOLDED.
- SC02-SH037 to SC03-SH010: salute to paddling resumed; oar REST to HAND (the picking-up happens at the cut; accepted).
- SC03-SH020 to SH025: seated in the creased boat, Pip centre-left in both; shadow added lower right.
- SC04-SH020 to SH030: sky POV to Pip with the oar HELD (REST) at the start frame; her right hand lays it on the boat floor (STOWED by frame 8); seed CLOSED under the left arm, then lifted in both hands (OPEN at the end).
- SC04-SH040 to SH045 to SH050 to SH055: fluff OPEN, Pip under it, boat CREASED throughout; the wave is at the RIGHT of the boat in SH045 and SH050 (CR-ISSUE-07 closed).
- SC05-SH020 to SH025: same two-shot, Pip left, Mo right; seed from Pip's hands to Mo's feelers.
- SC05-SH050 to SH055: same composition; Pip's wave hand is the RIGHT (camera-near) hand.

#### Continuity report
| ID | Severity | Where | Issue | Sources | Owner | Status |
|---|---|---|---|---|---|---|
| CR-ISSUE-01 | MAJOR | SC05-SH020/SH030 | Animation started the hand-off with a closed seed while PR-SEED stays OPEN from SC04-SH030 until Mo plants it. | screenplay@1 (SC05), props@1 vs SC05_animation@1 | animation-director | CLOSED, fixed in SC05_animation@2 (seed OPEN in SH020 start pose, closes in SH030) |
| CR-ISSUE-02 | MINOR | SC02-SH030/SH035 end | CO-PIP-01 has DRY/SOGGY/CREASED only; SC02_animation@1 says "bright yellow again". | CH-PIP@2 vs SC02_animation@1 | character-designer | CLOSED, decision: Pip is DRY after the shake (bright #FFC93C, crisp creases). The boat alone stays damp. No new state. Optional request to character-designer: a note in CH-PIP that "DRY-ish" in SC02 means DRY; no DAMP state is needed. |
| CR-ISSUE-03 | MINOR | SC01-SH010 | Scene card said Pip and Mo do not share a shot; direction puts tiny Mo in the wide. | scene_index@1 vs SC01_direction@2 | film-director | CLOSED, accepted: wide establishing is the point; Mo uses the short lock |
| CR-ISSUE-04 | MINOR | SC02-SC04 | Oar unaccounted for in the sinkings. | props@1 | production-designer | CLOSED, decision: Hand and oar rules 5 and 6 (v3: oar floats on the surface during the sinkings and is scooped by the right hand; REST when the hand is needed) |
| CR-ISSUE-05 | MINOR | SC04-SH030 | PR-OAR:STOWED start (props says from SC04). | props@1, QC-107 | production-designer | CLOSED, decision (revised v3): STOWED starts in the first frames of SC04-SH030, ON SCREEN (right hand lays it on the boat floor); SC04-SH010 shows the oar in REST. Props "from: SC04" is consistent. |
| CR-ISSUE-06 | MINOR | SC02 "paddles on" | Screenplay "paddles on" has no own shot after the salute. | screenplay@1 SC02 vs SC02_direction@2 | film-director | CLOSED, ACCEPTED DEVIATION (QC-108): shown as paddling at the start of SC03-SH010. |
| CR-ISSUE-07 | MINOR | SC04-SH045 to SH050 | SH045 puts the splash lower right of the boat; SH050 composition put the wave at the left of the boat. | SC04_direction@2 | film-director | CLOSED, director erratum on SC04_direction@2 (no version bump): SH050 start state has the wave at the RIGHT, so the spin happens as the wave reaches the boat. SC04_animation@2 and SC04_camera@2 still say left: see CR-ISSUE-13. |
| CR-ISSUE-08 | MINOR | SC05-SH025 | Screenplay "tips her head" was not named in the direction. | screenplay@1 vs SC05_direction@2 | film-director / animation-director | CLOSED, director erratum on SC05_direction@2 (no version bump): the SH025 take includes Mo's small head tilt. SC05_animation@3 already has the head tilt (K4 f25). |
| CR-ISSUE-09 | MINOR | props.md | PR-OAR scenes, HELD description and STOWED start wording. | props@1 | production-designer | CLOSED, props@2: scenes SC01-SC05; HELD = right hand or REST across the lap / boat floor; STOWED from SC04-SH030 (on screen). |
| CR-ISSUE-10 | MINOR | animation / storyboard | Hand and oar conflict between continuity@2 (right-hand salute, off-screen stow) and the animation files (left-hand salute, floating oar, on-screen stow); SC01_animation boat-at-feet wording. | SC01-SC05_animation, storyboard@2 | production-manager | CLOSED, resolved in continuity@3 in favour of the animation files; storyboard@3 updated (left-hand salute, oar laid on the boat floor at the start of SC04-SH030). |
| CR-ISSUE-11 | MINOR | hand/oar rules | continuity@2 (right-hand salute, oar under water, off-screen stow) vs the animation files (left-hand salute, oar floats, on-screen stow); same precedence tier, animation more specific. | continuity@2 vs SC01-SC05_animation | production-manager | CLOSED, animation wins; see Hand and oar rules 2 to 7 (v3). |
| CR-ISSUE-12 | MINOR | SC02-SH020, SC03-SH010 | The floating oar (and the dry seed tip) at the end of the sinkings is not in the direction text ("ripples and the boat gone" / "ripples only"); SC02_animation proposes it to the director, SC02/SC03 camera and storyboard show ripples only. | SC02_direction@2, SC03_direction@2, SC02/SC03_camera@2, storyboard@3 | film-director, cinematographer | OPEN: the floating oar is a decision of this change; direction end states and the camera/storyboard wording should add "oar floats on the surface". |
| CR-ISSUE-13 | MINOR | SC04-SH050 | SC04_animation@2 (K1, start pose) and SC04_camera@2 (SH050) still put the wave at the LEFT. | SC04_animation@2, SC04_camera@2 vs SC04_direction@2 erratum | animation-director, cinematographer | OPEN, REQUEST: change to wave at the right (not edited by this resolution). |

No BLOCKER. Open: CR-ISSUE-12, 13 (MINOR). Axis: held everywhere (travel left to right, Pip left of Mo in SC05). SC04-SH020 is a sky POV and SC05-SH040 is a high-angle insert on the soil: neither crosses the axis. SC04-SH010, SC05-SH050 and SC05-SH055 are profiles consistent with the axis (Pip facing right, Mo facing left).

#### Handoff
- Produced: continuity@3 (APPROVED)
- BLOCKER 0 / MAJOR 0 open (1 fixed) / MINOR 2 open (CR-ISSUE-12, 13), 11 closed
- Uncovered lines: none (the "paddles on" deviation is accepted)
- Requests: film-director and cinematographer (CR-ISSUE-12); animation-director and cinematographer (CR-ISSUE-13); others: none
- Next: production-manager (re-compile shot records to 25 shots)


## 12. Open issues

| Where | Marker | Text |
|---|---|---|
| 00_brief.md:28 | ASSUMPTION | decided at stage 10 \| |
| 00_brief.md:44 | OPEN-QUESTION | Confirm no-dialogue approach (ASSUMPTION). |
| 04_world/props.md:108 | ASSUMPTION | oar is stowed from SC04-SH030, on screen (Pip needs both hands for the seed); boat color cream to stay distinct from Pip's yellow |
| 05_look/style_bible.md:80 | ASSUMPTION | style frames not generated (no generation budget); the Midjourney V7 look test is deferred to the user |
| 01_story/story.md:75 | ASSUMPTION | names Pip and Mo are working names |
| 03_characters/CH-DROP.md:77 | ASSUMPTION | the drop has no face |
| 03_characters/CH-PIP.md:105 | ASSUMPTION | Pip has no clothes; her "costume" is the paper itself. Soggy and creased states drive continuity. |
