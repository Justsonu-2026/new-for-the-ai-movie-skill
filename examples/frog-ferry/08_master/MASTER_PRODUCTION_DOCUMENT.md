---
artifact: master-production-document
id: master
version: 2
status: REVIEW
owner: production-manager
depends_on: [CH-DROP@1, CH-MO@1, CH-PIP@2, LOC-PUDDLE@1, SC01_animation@1, SC01_camera@1, SC01_direction@1, SC02_animation@1, SC02_camera@1, SC02_direction@1, SC03_animation@1, SC03_camera@1, SC03_direction@1, SC04_animation@1, SC04_camera@1, SC04_direction@1, SC05_animation@2, SC05_camera@1, SC05_direction@1, SHOTS-SC01@1, SHOTS-SC02@1, SHOTS-SC03@1, SHOTS-SC04@1, SHOTS-SC05@1, brief@1, concepts@1, continuity@1, lineup@1, production-log@1, props@1, screenplay@1, story@1, storyboard@1, style_bible@1]
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
| SC01_animation | 1 | APPROVED | animation-director | 06_direction/SC01_animation.md |
| SC01_camera | 1 | APPROVED | cinematographer | 07_camera/SC01_camera.md |
| SC01_direction | 1 | APPROVED | film-director | 06_direction/SC01_direction.md |
| SC02_animation | 1 | APPROVED | animation-director | 06_direction/SC02_animation.md |
| SC02_camera | 1 | APPROVED | cinematographer | 07_camera/SC02_camera.md |
| SC02_direction | 1 | APPROVED | film-director | 06_direction/SC02_direction.md |
| SC03_animation | 1 | APPROVED | animation-director | 06_direction/SC03_animation.md |
| SC03_camera | 1 | APPROVED | cinematographer | 07_camera/SC03_camera.md |
| SC03_direction | 1 | APPROVED | film-director | 06_direction/SC03_direction.md |
| SC04_animation | 1 | APPROVED | animation-director | 06_direction/SC04_animation.md |
| SC04_camera | 1 | APPROVED | cinematographer | 07_camera/SC04_camera.md |
| SC04_direction | 1 | APPROVED | film-director | 06_direction/SC04_direction.md |
| SC05_animation | 2 | APPROVED | animation-director | 06_direction/SC05_animation.md |
| SC05_camera | 1 | APPROVED | cinematographer | 07_camera/SC05_camera.md |
| SC05_direction | 1 | APPROVED | film-director | 06_direction/SC05_direction.md |
| SHOTS-SC01 | 1 | APPROVED | production-manager | 08_master/shots/SC01.md |
| SHOTS-SC02 | 1 | APPROVED | production-manager | 08_master/shots/SC02.md |
| SHOTS-SC03 | 1 | APPROVED | production-manager | 08_master/shots/SC03.md |
| SHOTS-SC04 | 1 | APPROVED | production-manager | 08_master/shots/SC04.md |
| SHOTS-SC05 | 1 | APPROVED | production-manager | 08_master/shots/SC05.md |
| brief | 1 | APPROVED | production-manager | 00_brief.md |
| concepts | 1 | APPROVED | story-writer | 01_story/concepts.md |
| continuity | 1 | APPROVED | script-supervisor | 07_camera/continuity.md |
| lineup | 1 | APPROVED | character-designer | 03_characters/lineup.md |
| production-log | 1 | APPROVED | production-manager | PRODUCTION_LOG.md |
| props | 1 | APPROVED | production-designer | 04_world/props.md |
| screenplay | 1 | LOCKED | screenwriter | 02_screenplay/scene_index.md |
| story | 1 | APPROVED | story-writer | 01_story/story.md |
| storyboard | 1 | APPROVED | storyboard-artist | 09_storyboard/storyboard.md |
| style_bible | 1 | APPROVED | visual-style-designer | 05_look/style_bible.md |


Validator: **0 error(s), 0 warning(s)**. Scenes: 5. Shots: 17. Planned runtime: 40.0 s.


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
| Video tool(s) | Kling, version and features UNCONFIRMED | user |
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
- OPEN-QUESTION: Which Kling version and which modes does the user's plan support (image-to-video, first-last-frame, multi-reference, native audio, max clip length)? Plans must work with plain image-to-video until confirmed.
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

| ID | Name | Owner | Scenes | Hero? | States |
|---|---|---|---|---|---|
| PR-BOAT | Paper boat | CH-PIP | SC01-SC05 | yes | NEW, FLAT, REFOLDED, CREASED |
| PR-SEED | Dandelion seed | CH-PIP | SC01-SC05 | yes | CLOSED, OPEN, PLANTED |
| PR-OAR | Folded paper oar | CH-PIP | SC01-SC03 | no | HELD, STOWED |
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
scenes: [SC01, SC02, SC03]
states:
  - {id: PR-OAR:HELD, description: "in Pip's hand", from: SC01, cause: "start"}
  - {id: PR-OAR:STOWED, description: "lying across the boat floor", from: SC04, cause: "Pip needs both hands for the seed"}
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
- Produced: LOC-PUDDLE@1, props@1 (REVIEW)
- For script-supervisor: PR-BOAT NEW, FLAT, REFOLDED, CREASED; PR-SEED CLOSED, OPEN, PLANTED; PR-OAR HELD, STOWED; PR-SPROUT HIDDEN, SPROUT
- ASSUMPTION: oar is stowed in SC04 (Pip needs both hands for the seed); boat color cream to stay distinct from Pip's yellow
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
| SC01 | EXT. PUDDLE - NEAR SHORE - DAY | morning | CH-MO, CH-PIP | CO-MO-01, CO-PIP-01 | PR-BOAT:NEW, PR-OAR:HELD, PR-SEED:CLOSED | 6 | 6.0 | 2 | 0 |
| SC02 | EXT. PUDDLE - MID-WATER - DAY | morning | CH-DROP, CH-PIP | CO-DROP-01, CO-PIP-01 | PR-BOAT:FLAT, PR-BOAT:NEW, PR-OAR:HELD, PR-SEED:CLOSED | 7 | 7.0 | 3 | 2 |
| SC03 | EXT. PUDDLE - MID-WATER - DAY | morning | CH-DROP, CH-PIP | CO-DROP-01, CO-PIP-01 | PR-BOAT:CREASED, PR-BOAT:REFOLDED, PR-OAR:HELD, PR-SEED:CLOSED | 6 | 6.0 | 2 | 0 |
| SC04 | EXT. PUDDLE - MID-WATER - DAY | morning | CH-DROP, CH-PIP | CO-DROP-01, CO-PIP-01 | PR-BOAT:CREASED, PR-OAR:STOWED, PR-SEED:CLOSED, PR-SEED:OPEN | 9 | 9.0 | 5 | 1 |
| SC05 | EXT. PUDDLE - FAR SHORE - DAY | morning | CH-DROP, CH-MO, CH-PIP | CO-DROP-01, CO-MO-01, CO-PIP-01 | PR-BOAT:CREASED, PR-OAR:STOWED, PR-SEED:OPEN, PR-SEED:PLANTED, PR-SPROUT:HIDDEN, PR-SPROUT:SPROUT | 12 | 12.0 | 5 | 1 |


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

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | Pip sees Mo across the puddle | Pip | action 1-4 |
| B2 | Pip launches and paddles off | Pip | action 5 |

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
| B2 | Pip | to set off | drops boat, hops in, oar dips left-right |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01-SH010 | WS | eye-level | static | Pip and Mo across the puddle | Pip looks across the puddle at tiny Mo; ends with Pip's eyes bright and head up | Pip lower-left third, Mo lower-right third, wide empty puddle between | flat, deep | soft overcast, light rain | 3.0 s | establish want and geography | cut |
| SC01-SH020 | WS | eye-level | static | Pip and boat | Pip sets the boat on the water, hops in and paddles; ends with boat afloat and moving right | Pip left-center, water to the right | flat, deep | soft overcast | 3.0 s | she sets off | cut |

Total: 6.0 s vs estimate 6 s.

###### Coverage and rhythm
Two wide static shots; the first is a held look, the second the launch.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH010 | Mo tiny and far | Mo uses short_lock; both are flat shapes; if Mo drifts, comp her in post |
| SH020 | boarding the boat plus paddling | start frame has Pip already beside the boat; end frame has her seated; keep to 3 s |

###### Specialist and VFX flags
- action-director: none
- animation-director: yes (hop, boarding, paddle cycle)
- vfx: none

###### Handoff
- Produced: SC01_direction@1 (REVIEW), 2 shots, 6.0 s
- Built from: screenplay@1, style_bible@1, LOC-PUDDLE@1, CH-PIP@2, CH-MO@1
- Open items: none
- Next: cinematographer, script-supervisor


#### Animation plan
Source: `06_direction/SC01_animation.md`

##### SC01 Animation Plan

###### Motion style rules
- Frame rate / feel: 24 fps, animated on twos (12 drawings per second) for characters; the drop and splash on ones for snap; holds are moving holds (a 1-2 px drift or blink) so Kling does not freeze them.
- Exaggeration level: cartoony; squash and stretch up to 25% on Pip's boat gags and up to 40% on the drop (volume preserved).
- Never deforms: Pip's triangular head and round black eyes (they may squint but keep their shape), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform outline; no smears wider than 3 frames.

###### Shots

####### SC01-SH010 (3 s = 72 f)
- Acting beat: perceive → think → act: Pip sees Mo (eyes lead, then head), brightens, a small hope bounce.
- Key poses:
  - f1: Pip stands on the left bank in a calm upright crouch, weight on both back legs, head level looking at the viewer-side water, seed held closed under her left arm; Mo far right, feelers drooping.
  - f30: Eyes snap to the far shore first; head follows, chin lifts; line of action tilts up and to the right.
  - f56: Anticipation: tiny squash down on the back legs (2 f) then a small up-stretch; eyes widen and brighten.
  - f72: Pip tall, chin up, eyes bright, gazing right; hold with a blink at f66.
- Timing chart: f1-f24 hold (blink f18); f24-f36 eyes lead; f36-f52 head and body follow (ease in/out); f52-f60 squash; f60-f68 stretch; f68-f72 settle. (total 72 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip seated upright on the left bank, closed-fluff seed tucked under her arm, calm face, looking slightly down at the water; Mo tiny at the far right with drooping feelers.
- End pose (frame text): Pip stretched tall, chin up, wide bright eyes, looking toward the far right shore; Mo tiny at far right, feelers still drooping.
- Off-model risks: Mo is a tiny shape; if Kling morphs her, composite a still Mo layer.
- Kling note: image-to-video from SH010 start frame (or first-last-frame if available): 'Pip's eyes move first to the far shore, then her head lifts; slow small bounce; Mo stays still; static camera.'

####### SC01-SH020 (3 s = 72 f)
- Acting beat: decide → act: Pip drops the boat, hops in, paddles away.
- Key poses:
  - f1: Pip on the bank holding the cream boat at the water's edge; seed under arm.
  - f14: Anticipation: crouch (squash) with boat lowered.
  - f28: Pip leaps (stretch) in an arc into the floating boat; arc peaks mid-air, boat dips on landing (squash on the boat).
  - f44: Seated; the oar dips on the left: paddle stroke 1.
  - f72: Seated, paddling, boat moving right into the water; rings behind.
- Timing chart: f1-f10 hold; f10-f16 squash; f16-f30 jump on ones; f30-f38 landing squash and settle; f38-f72 two paddle cycles of 17 f each; boat drifts right 1/4 of the frame. (total 72 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip crouched at the left bank, cream paper boat afloat beside her, seed under arm, oar in hand.
- End pose (frame text): Pip seated in the cream boat, oar in the water, boat a quarter of the way into the puddle heading right, ripples behind.
- Off-model risks: Boarding jump may morph the boat; fallback: start frame with Pip already in the boat and the shore sliding past.
- Kling note: image-to-video: 'Pip hops into the boat and paddles away to the right; static camera.' Ask Kling for short clips (3 s). Overlap-generate 4 s and trim.

###### Requests
- Model sheet views needed: Pip three-quarter-from-above (for POV/hands-up poses), Pip soggy and creased states; Mo three-quarter.
- Timing conflicts: none; shot frame counts equal duration × 24.

###### Handoff
- Produced: SC01_animation@1 (REVIEW), 2 shots, 144 frames
- Next: film-director (approve), production-manager (compile poses into shots)


#### Camera and lighting
Source: `07_camera/SC01_camera.md`

##### SC01 Camera and Lighting

Color script row: dominant puddle grey-blue / accent paper yellow, shell coral / cool with warm accents / medium-soft. Time/weather: morning, light rain.

###### Lighting setups

####### Setup A — Soft overcast daylight
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | overcast sky dome (set source: sky) | overhead, no single direction; slight lift from camera-left sky | very soft | neutral cool ~6800 K (grey-blue) | cel shadow falls straight under objects |
| Fill | sky bounce off the puddle surface | from below, even | very soft | pale blue-grey | keeps shadow tone light, not black |
| Rim | none | — | — | — | 2D cel look uses an outline instead |
| Practicals | none | — | — | — | — |
| Atmosphere | light rain: sparse thin streaks, faint wet sheen on leaf and soil | — | — | — | a few small rain dimples on the water |
Contrast feel: low (about 2:1). Changes during scene: none.

```
         sky (overhead dome)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01-SH010 | A | 35 mm: flat, deep, wide | f/8, deep; background is a soft watercolor wash, not optical blur | whole frame sharp; Pip and far shore both readable | 0.03 | 0.45 | south bank centre, side-on, at water level | locked-off | static | none (locked, held) | wide flat 2D side view, whole puddle visible, everything crisp, no zoom |
| SC01-SH020 | A | 35 mm: flat, deep, wide | f/8, deep | Pip and boat | 0.03 | 0.45 | south bank, slightly left, same as SH010 | locked-off | static | none | wide flat side view, Pip and boat on the left half, water to the right |

###### Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts.
- Matched pairs: wide shots in this scene share 35 mm, 0.03 m height, 0.45 m distance.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

###### Proposals to the director
- none

###### Handoff
- Produced: SC01_camera@1 (REVIEW), setup A, 2 shots
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC01` in section 11.


#### Shot records
Source: `08_master/shots/SC01.md`

##### Shot records SC01

Compiled from approved department documents. `generation.mode` is derived (image-to-video baseline) because Kling features are unconfirmed; `clip_length_s` is derived (5 s assumed for Kling).

###### SC01-SH010

```yaml
record: shot
id: SC01-SH010
scene: SC01
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC01_direction@1
- SC01_animation@1
- SC01_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: Pip, holding the seed, sees Mo across the puddle and brightens
screenplay_ref: SC01, action lines 1-4
duration_s: 3.0
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY
  position: lower-left third, standing on the near-shore bank beside the leaf and pebble
  facing: profile, facing screen right
  action: stands upright, eyes move to the far shore, head lifts, a small hope bounce
  expression_start: calm closed smile, eyes looking at the water
  expression_end: eyes wide and bright, chin up
  eyeline: across the puddle to Mo at screen right
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: lower-right third, tiny, on the far shore beside the soil patch
  facing: profile, facing screen left
  action: sits with feelers drooping
  expression_start: feelers drooping, small smile
  expression_end: feelers drooping, small smile
  eyeline: down at the soil
props:
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: tucked under Pip's left arm
- id: PR-BOAT
  state: PR-BOAT:NEW
  position: on the bank beside Pip's feet
- id: PR-OAR
  state: PR-OAR:HELD
  position: in Pip's right hand
location:
  id: LOC-PUDDLE
  area: 'whole puddle: near shore (leaf, pebble) left, far shore (soil patch, grass) right'
  time_of_day: morning
  weather: light rain
frame:
  foreground: wet green leaf and grey pebble on the left bank edge
  midground: Pip on the left bank; open puddle water
  background: far shore with tiny Mo, bare brown soil patch and grass blades
  composition: Pip lower-left third, Mo lower-right third, wide empty puddle between them, grey sky above
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
screen_direction: Pip faces screen right (travel direction is left to right); Mo faces screen left; camera on the south bank
start_state: Pip stands on the left bank with the closed seed under her arm, looking down at the water; Mo droops far right
end_state: Pip's head is up and eyes bright, looking at Mo across the puddle
action_timeline:
- '0.0-1.0 s: Pip stands calm, blinks'
- '1.0-2.0 s: her eyes move to the far shore, then her head lifts'
- '2.0-3.0 s: tiny squash then stretch, ends tall with bright eyes'
dialogue: []
sound: 'light rain patter on the puddle; a tiny hopeful squeak from Pip (screenplay cue: rain)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from black (film start)
transition_out: cut to SC01-SH020
continuity:
- Pip DRY, boat NEW on the bank, seed CLOSED, oar HELD
- Mo's feelers drooping
generation:
  mode: image-to-video
  start_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. matte bright yellow origami paper with crisp creases and a darker golden belly fold State DRY. Pip stands in profile facing screen right on the left bank in the lower-left third, upright, calm closed smile, eyes on the water, a thin sage stem topped with a round feathery white dandelion fluff tucked under her left arm, a small cream folded paper boat with pointed ends and crisp creases at her feet, a small bright yellow folded paper oar with a thin handle and a flat blade in her right hand. Far right in the lower-right third, tiny: small tan snail with a big round soft-coral spiral shell and two thin feelers with round dot eyes, feelers drooping, beside a patch of bare dark brown soil. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. matte bright yellow origami paper with crisp creases and a darker golden belly fold State DRY. Pip stands in profile facing screen right on the left bank in the lower-left third, stretched tall, chin up, eyes wide and bright looking across the puddle, a thin sage stem topped with a round feathery white dandelion fluff under her left arm, a small cream folded paper boat with pointed ends and crisp creases at her feet, a small bright yellow folded paper oar with a thin handle and a flat blade in her right hand. Far right in the lower-right third, tiny: small tan snail with a big round soft-coral spiral shell and two thin feelers with round dot eyes, feelers still drooping, beside a patch of bare dark brown soil. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-1 s: Pip stands calm and blinks. 1-2 s: her eyes move first to the far shore, then her head lifts. 2-3 s: a small squash down and stretch up; she ends tall with bright eyes. Light rain dimples the puddle. Mo stays still.'
  clip_length_s: 5
  risks:
  - 'Mo is tiny and may morph: use the short lock; fallback composite a still Mo layer'
  - 'Kling features unconfirmed: image-to-video baseline'
```

###### SC01-SH020

```yaml
record: shot
id: SC01-SH020
scene: SC01
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC01_direction@1
- SC01_animation@1
- SC01_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: Pip launches the boat, hops in and paddles off
screenplay_ref: SC01, action line 5
duration_s: 3.0
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY
  position: left-centre, at the water's edge, then seated in the boat
  facing: profile, facing screen right
  action: hops into the boat and paddles away to the right
  expression_start: bright-eyed hope, small crouch
  expression_end: determined smile, chin up
  eyeline: forward, toward the far shore
props:
- id: PR-BOAT
  state: PR-BOAT:NEW
  position: afloat beside the bank, then carrying Pip
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: under Pip's arm
- id: PR-OAR
  state: PR-OAR:HELD
  position: in the water at her side
location:
  id: LOC-PUDDLE
  area: near shore, left of the puddle
  time_of_day: morning
  weather: light rain
frame:
  foreground: wet green leaf and grey pebble at lower left
  midground: Pip and the boat at the water's edge
  background: open puddle water, far shore at right
  composition: Pip left-centre, open water to the right for travel
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
screen_direction: travel left to right; Pip faces screen right; camera on the south bank
start_state: Pip crouched at the left bank beside the afloat boat, oar in hand
end_state: Pip seated in the boat paddling, a quarter of the way into the puddle heading right
action_timeline:
- '0.0-0.5 s: Pip crouches'
- '0.5-1.3 s: she leaps in an arc into the boat, boat dips'
- '1.3-3.0 s: two paddle strokes, boat drifts right'
dialogue: []
sound: 'small splash and paper crinkle as the boat lands; paddle dips (screenplay: paddle)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC01-SH010
transition_out: cut to SC02-SH010
continuity:
- boat NEW afloat
- Pip DRY
- travel direction left to right
generation:
  mode: image-to-video
  start_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. State DRY. Pip crouches on the left bank in profile facing screen right, left-centre of frame, one hand holding a small bright yellow folded paper oar with a thin handle and a flat blade, a thin sage stem topped with a round feathery white dandelion fluff under her arm, beside a small cream folded paper boat with pointed ends and crisp creases afloat at the water''s edge. The wet green leaf and grey pebble sit at the lower left. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. State DRY. Pip sits in profile facing screen right in a small cream folded paper boat with pointed ends and crisp creases afloat about a quarter of the way into the puddle, centre-left of frame, her oar dipping in the water, a thin sage stem topped with a round feathery white dandelion fluff under her arm, chin up, determined smile; small ripple rings spread behind the boat. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: Pip crouches. 0.5-1.3 s: she leaps in an arc into the boat, which dips and settles. 1.3-3 s: she paddles two strokes and the boat drifts right. Light rain on the water.'
  clip_length_s: 5
  risks:
  - 'boarding jump may morph the boat: fallback is a start frame with Pip already seated and the shore sliding away'
  - Kling features unconfirmed
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

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | glide | Pip | action 1 |
| B2 | the drop hits and the boat sinks | drop | action 2 |
| B3 | Pip resurfaces, refolds, salutes | Pip | action 3 |

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
| B3 | Pip | to recover | head pops up, limp ears, seed raised high, quick fold crease motions, a proud salute |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC02-SH010 | WS | eye-level | static | boat | Pip paddles; ripple rings spread ahead of the bow; ends with the boat at center | boat left of center, empty sky above for the drop | flat, deep | soft overcast | 1.5 s | set up the drop's target | cut |
| SC02-SH020 | WS | eye-level | static | drop and boat | the aqua drop falls from the top of frame onto the middle of the boat; the boat folds flat and sinks; ends with ripples and the boat gone | drop path and boat in one frame | flat, deep | soft overcast, drop is the brightest thing | 2.0 s | the gag | cut on the sink |
| SC02-SH030 | MS | eye-level | static | Pip | Pip bobs up with the seed held high, refolds the boat with quick creases, salutes; ends in a seated salute in the popped boat | Pip centre, seed top of frame | flat | soft overcast | 3.5 s | the recovery and her stubborn optimism | cut |

Total: 7.0 s vs estimate 7 s.

###### Coverage and rhythm
Slow set-up (1.5 s), fast gag (2 s), longer recovery (3.5 s). The cut comes on the sink so the laugh lands in the next shot.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH020 | a falling drop hitting a boat that folds | start frame boat intact, end frame ripples only; two-clip fallback: drop-hit clip and sink clip |
| SH030 | refolding paper, salute | cartoon pop-and-smear (not literal folds); VFX/post fallback: cross-dissolve between a flat boat frame and a popped boat frame |

###### Specialist and VFX flags
- action-director: none
- animation-director: yes (squash and stretch, fold gag, salute)
- vfx: possible post cleanup of the boat pop

###### Handoff
- Produced: SC02_direction@1 (REVIEW), 3 shots, 7.0 s
- Open items: none
- Next: cinematographer, script-supervisor


#### Animation plan
Source: `06_direction/SC02_animation.md`

##### SC02 Animation Plan

###### Motion style rules
- Frame rate / feel: 24 fps, animated on twos (12 drawings per second) for characters; the drop and splash on ones for snap; holds are moving holds (a 1-2 px drift or blink) so Kling does not freeze them.
- Exaggeration level: cartoony; squash and stretch up to 25% on Pip's boat gags and up to 40% on the drop (volume preserved).
- Never deforms: Pip's triangular head and round black eyes (they may squint but keep their shape), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform outline; no smears wider than 3 frames.

###### Shots

####### SC02-SH010 (1.5 s = 36 f)
- Acting beat: act: steady paddling; calm confidence (that is the setup for the joke).
- Key poses:
  - f1: Seated, oar in left stroke, chin up.
  - f18: Oar in right stroke, ripple rings spread ahead of the bow.
  - f36: Boat centred in frame, Pip smiling.
- Timing chart: two paddle strokes of 18 f; moving hold in the ripples. (total 36 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Boat left of centre, Pip seated paddling, ripple rings ahead of the bow, empty grey sky above.
- End pose (frame text): Boat at centre of frame, Pip mid-stroke, rings widening.
- Off-model risks: none significant
- Kling note: image-to-video, static camera; 'boat glides right at steady speed'.

####### SC02-SH020 (2 s = 48 f)
- Acting beat: react: the hit. Drop arrives, boat folds, sinks.
- Key poses:
  - f1: Drop at top of frame, stretched tall (stretch 40%), boat intact.
  - f18: Drop reaches the boat: contact frame, drop squashes flat (squash).
  - f22: PLIP: boat folds down the middle (V shape), Pip's eyes pop wide.
  - f34: Boat flat just under the surface, Pip sinking, only her head and eyes above the water.
  - f48: Ripples only, a few bubbles.
- Timing chart: f1-f18 fall on ones with acceleration (spacing widens); f18-f22 impact hold 4 f; f22-f34 collapse; f34-f48 sink and settle. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Intact boat with Pip seated centre; aqua teardrop at the top of frame directly above the boat's middle.
- End pose (frame text): Empty puddle with expanding ripple rings and a few bubbles where the boat was.
- Off-model risks: Drop changing size or shape; boat vanishing is easier than folding. Fallback: two clips (hit, then sink).
- Kling note: first-last-frame if available, otherwise image-to-video: 'the aqua drop falls straight down onto the boat's middle; the boat flattens and sinks; ripples spread; static camera.'

####### SC02-SH030 (3.5 s = 84 f)
- Acting beat: perceive → decide → act → proud: Pip pops up, holds the seed high, refolds, salutes.
- Key poses:
  - f1: Pip's head and the raised closed-fluff seed break the surface, soggy limp mustard, flat ears, water streaming.
  - f20: Shake: head and body wring side to side; droplets fly.
  - f36: Pip climbs onto the flat floating cream paper, hands busy making quick fold motions.
  - f54: Boat pops into shape (stretch up 25%, then settle), Pip in it.
  - f68: Anticipation lean, then a crisp salute (hand to head) to the sky; chin up.
  - f84: Hold the salute, smug; oar back in hand.
- Timing chart: f1-f12 emerge; f12-f30 shake (overlap: ears lag 2 f); f30-f50 fold motions on ones; f50-f58 pop and settle; f58-f70 salute anticipation and hit; f70-f84 moving hold. (total 84 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip's head and the closed seed held high above the water at the centre, boat not visible, ripples around.
- End pose (frame text): Pip seated in the repopped cream boat, bright yellow again, right hand in a salute, oar held in the other hand, seed under arm.
- Off-model risks: Folding paper: render as a cartoon pop, not literal folds; keep the seed dry-looking (white fluff stays clean).
- Kling note: Likely two clips: (a) surfacing and shaking, (b) refold-pop and salute. Image-to-video, static camera.

###### Requests
- Model sheet views needed: Pip three-quarter-from-above (for POV/hands-up poses), Pip soggy and creased states; Mo three-quarter.
- Timing conflicts: none; shot frame counts equal duration × 24.

###### Handoff
- Produced: SC02_animation@1 (REVIEW), 3 shots, 168 frames
- Next: film-director (approve), production-manager (compile poses into shots)


#### Camera and lighting
Source: `07_camera/SC02_camera.md`

##### SC02 Camera and Lighting

Color script row: grey-blue, brighter / paper yellow, raindrop aqua / cool / medium. Time/weather: morning, light rain.

###### Lighting setups

####### Setup A — Soft overcast daylight
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | overcast sky dome (set source: sky) | overhead, no single direction; slight lift from camera-left sky | very soft | neutral cool ~6800 K (grey-blue) | cel shadow falls straight under objects |
| Fill | sky bounce off the puddle surface | from below, even | very soft | pale blue-grey | keeps shadow tone light, not black |
| Rim | none | — | — | — | 2D cel look uses an outline instead |
| Practicals | none | — | — | — | — |
| Atmosphere | light rain: sparse thin streaks, faint wet sheen on leaf and soil | — | — | — | a few small rain dimples on the water |
Contrast feel: low (about 2:1). Changes during scene: none.

```
         sky (overhead dome)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC02-SH010 | A | 35 mm: flat, deep | f/8, deep | boat at centre | 0.03 | 0.45 | south bank centre, over mid-water | locked-off | static | none | wide flat side view of mid-water, boat gliding, rings ahead of the bow, empty sky above |
| SC02-SH020 | A | 35 mm: flat, deep | f/8, deep | drop and boat equally sharp | 0.03 | 0.45 | south bank centre, same as SH010 | locked-off | static | none | wide flat side view, aqua drop above the boat, both sharp |
| SC02-SH030 | A | 50 mm: flat, slightly closer | f/5.6, deep | Pip and the seed | 0.03 | 0.3 | south bank centre, closer | locked-off | static | none | medium flat side view, Pip centred, seed raised at the top of frame |

###### Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts.
- Matched pairs: wide shots in this scene share 35 mm, 0.03 m height, 0.45 m distance.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

###### Proposals to the director
- none

###### Handoff
- Produced: SC02_camera@1 (REVIEW), setup A, 3 shots
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC02` in section 11.


#### Shot records
Source: `08_master/shots/SC02.md`

##### Shot records SC02

Compiled from approved department documents. `generation.mode` is derived (image-to-video baseline) because Kling features are unconfirmed; `clip_length_s` is derived (5 s assumed for Kling).

###### SC02-SH010

```yaml
record: shot
id: SC02-SH010
scene: SC02
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC02_direction@1
- SC02_animation@1
- SC02_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
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
  position: mid-water, left of centre
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: under Pip's arm
- id: PR-OAR
  state: PR-OAR:HELD
  position: in the water
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
start_state: boat left of centre, Pip mid-stroke
end_state: boat at the centre of frame, ripple rings ahead of the bow
action_timeline:
- '0.0-0.75 s: first paddle stroke'
- '0.75-1.5 s: second stroke, rings widen'
dialogue: []
sound: 'soft paddle dips, rain patter (screenplay: boat glides)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC01-SH020
transition_out: cut to SC02-SH020
continuity:
- boat NEW
- Pip DRY
generation:
  mode: image-to-video
  start_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. State DRY. Pip sits in profile facing screen right in a small cream folded paper boat with pointed ends and crisp creases left of centre on open mid-water, oar in the water, a thin sage stem topped with a round feathery white dandelion fluff under her arm, calm smile, chin up. Soft ripple rings spread on the water ahead of the bow; empty flat grey sky above. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. State DRY. Pip sits in profile facing screen right in a small cream folded paper boat with pointed ends and crisp creases at the centre of the frame on open mid-water, oar mid-stroke, a thin sage stem topped with a round feathery white dandelion fluff under her arm, calm smile, chin up. Wider ripple rings spread on the water ahead of the bow; empty flat grey sky above. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.75 s: Pip paddles one stroke. 0.75-1.5 s: second stroke; the boat reaches the centre of the frame while ripple rings widen ahead of its bow.'
  clip_length_s: 5
  risks:
  - generate 5 s and trim to 1.5 s
  - Kling features unconfirmed
```

###### SC02-SH020

```yaml
record: shot
id: SC02-SH020
scene: SC02
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC02_direction@1
- SC02_animation@1
- SC02_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: A raindrop lands on the middle of the boat; the boat folds flat and sinks
screenplay_ref: SC02, action line 2
duration_s: 2.0
characters:
- id: CH-DROP
  costume: CO-DROP-01
  costume_state: FALLING
  position: top centre, directly above the boat's middle
  facing: no face; falling straight down
  action: falls and lands on the boat's middle, squashing flat
  expression_start: n/a (faceless), stretched tall
  expression_end: n/a (faceless), splashed into the water
  eyeline: n/a
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY
  position: centre, seated in the boat
  facing: profile, facing screen right
  action: eyes pop wide as the boat folds under her and she sinks
  expression_start: calm smile
  expression_end: eyes wide, only her head above the water
  eyeline: up toward the drop
props:
- id: PR-BOAT
  state: PR-BOAT:NEW
  position: centre, mid-water
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: held up in Pip's hands
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: ripple rings on the water
  midground: boat and Pip
  background: flat grey sky with the falling drop
  composition: drop path and boat in one frame, boat at centre, drop at top centre
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
screen_direction: boat faces screen right; the drop falls straight down
start_state: intact boat with Pip centre, the drop at the top of the frame above the boat's middle
end_state: empty water with expanding ripple rings and a few bubbles where the boat was
action_timeline:
- '0.0-0.75 s: the drop falls'
- '0.75-0.9 s: contact PLIP'
- '0.9-1.4 s: the boat folds flat'
- '1.4-2.0 s: boat and Pip sink, ripples spread'
dialogue: []
sound: PLIP on contact, then a bloop as the boat sinks (screenplay cues)
music: none specified yet (music plan is stage 10)
vfx: 'pending VFX plan (stage 10): director flagged possible two-clip split of hit and sink'
transition_in: cut from SC02-SH010
transition_out: cut on the sink to SC02-SH030
continuity:
- boat NEW → FLAT
- Pip DRY → SOGGY
generation:
  mode: image-to-video
  start_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. At the top centre of frame, directly above the boat''s middle: A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface. stretched tall, falling. Below: tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs, matte bright yellow origami paper with crisp creases and a darker golden belly fold, State DRY, sits in profile facing screen right at the centre in a small cream folded paper boat with pointed ends and crisp creases on open mid-water, calm smile, a thin sage stem topped with a round feathery white dandelion fluff under her arm. Ripple rings on the water. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. Open mid-water at the centre of frame with wide concentric ripple rings and three small bubbles where a boat sank; nothing floats on the surface; flat grey sky above with no drop. Faint cream paper shape visible just under the water. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.75 s: the aqua drop falls straight down toward the boat''s middle. 0.75-0.9 s: it lands and squashes flat. 0.9-1.4 s: the boat folds in the middle and flattens; Pip''s eyes pop. 1.4-2 s: boat and Pip slip under; ripple rings spread. Light rain.'
  clip_length_s: 5
  risks:
  - 'drop size or shape drift; boat folding is hard: fallback two clips (hit, then sink)'
  - upgrade to first-last-frame if the Kling plan supports it
```

###### SC02-SH030

```yaml
record: shot
id: SC02-SH030
scene: SC02
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC02_direction@1
- SC02_animation@1
- SC02_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: Pip bobs up with the dry seed, refolds the boat and salutes the sky
screenplay_ref: SC02, action line 3
duration_s: 3.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: SOGGY → DRY
  position: centre of frame
  facing: three-quarter facing screen right
  action: surfaces, shakes herself, refolds the boat with quick creases, salutes
  expression_start: soggy flat ears, wide eyes
  expression_end: proud smile, salute
  eyeline: up at the sky
props:
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: held high above her head, then under her arm
- id: PR-BOAT
  state: PR-BOAT:FLAT
  position: floating flat under her, then popped up
- id: PR-OAR
  state: PR-OAR:HELD
  position: in her left hand
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: ripple rings
  midground: Pip and the boat
  background: soft grey water and sky
  composition: Pip centre, seed at the top of the frame
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
start_state: Pip's soggy head and the closed seed held high above the surface, the flat boat under her
end_state: Pip seated in the refolded boat, right hand in a salute, seed under her arm
action_timeline:
- '0.0-0.5 s: head breaks the surface, seed held high'
- '0.5-1.25 s: shakes, droplets fly'
- '1.25-2.1 s: quick fold motions, boat pops into shape'
- '2.1-3.5 s: lean in, then salute, hold'
dialogue: []
sound: water drips, paper crinkle and a pop as the boat refolds, a tiny proud squeak
music: none specified yet (music plan is stage 10)
vfx: 'pending VFX plan (stage 10): director flagged possible post cleanup of the boat pop'
transition_in: cut on the sink from SC02-SH020
transition_out: cut to SC03-SH010
continuity:
- Pip SOGGY then DRY
- boat FLAT → REFOLDED
- seed stays CLOSED and dry-looking
generation:
  mode: image-to-video
  start_frame: 'A medium shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. State SOGGY: limp, dull mustard, flat ears, droplets on her. Pip''s head and shoulders break the water''s surface at the centre of frame in three-quarter view facing screen right, both arms holding a thin sage stem topped with a round feathery white dandelion fluff high above her head, wide eyes; a flat cream paper shape floats under her. Ripple rings spread. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A medium shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. State DRY. Pip sits at the centre in a small cream folded paper boat with pointed ends and crisp creases (state REFOLDED, slightly damp grey-cream) in three-quarter view facing screen right, her right hand raised in a salute to the sky, proud smile, a thin sage stem topped with a round feathery white dandelion fluff under her left arm, a small bright yellow folded paper oar with a thin handle and a flat blade in that hand. Ripple rings around the boat. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: Pip''s head and the raised seed break the surface. 0.5-1.25 s: she shakes side to side, droplets fly. 1.25-2.1 s: quick fold gestures; the boat pops into shape. 2.1-3.5 s: she leans in, salutes the sky and holds. Light rain.'
  clip_length_s: 5
  risks:
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

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | second hit, faster sink | drop | action 1-2 |
| B2 | refold, lopsided, shadow, ears flat | Pip | action 2-3 |

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
| B2 | Pip | to refold | scowl, fast crease motions, ears sag flat |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC03-SH010 | WS | eye-level | static | drop and boat | rings widen at the bow; Pip glances up; the second drop lands on the same spot and the boat sinks fast; ends with ripples only | same framing as SC02-SH020 | flat, deep | slightly darker overcast | 2.5 s | the gag repeats, faster | cut |
| SC03-SH020 | MS | eye-level | static | Pip | Pip surfaces, scowls and refolds into a lopsided creased boat; a small round shadow grows on the water at right; ends with her ears flat | Pip centre-left, shadow lower-right | flat | darker slate overcast | 3.5 s | escalation and worry | cut |

Total: 6.0 s vs estimate 6 s.

###### Coverage and rhythm
The first shot is a tighter version of SC02's beat; the second is the reaction. The shadow is the hinge into SC04.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH010 | repeats SC02-SH020; model may change framing | reuse the same start-frame composition from SC02-SH020 as reference |
| SH020 | lopsided boat state | PR-BOAT:CREASED is a still key frame in the end frame |

###### Specialist and VFX flags
- action-director: none
- animation-director: yes (faster, snappier refold, ears drop)
- vfx: none

###### Handoff
- Produced: SC03_direction@1 (REVIEW), 2 shots, 6.0 s
- Open items: none
- Next: cinematographer, script-supervisor


#### Animation plan
Source: `06_direction/SC03_animation.md`

##### SC03 Animation Plan

###### Motion style rules
- Frame rate / feel: 24 fps, animated on twos (12 drawings per second) for characters; the drop and splash on ones for snap; holds are moving holds (a 1-2 px drift or blink) so Kling does not freeze them.
- Exaggeration level: cartoony; squash and stretch up to 25% on Pip's boat gags and up to 40% on the drop (volume preserved).
- Never deforms: Pip's triangular head and round black eyes (they may squint but keep their shape), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform outline; no smears wider than 3 frames.

###### Shots

####### SC03-SH010 (2.5 s = 60 f)
- Acting beat: perceive → hit: faster repeat; Pip looks up relaxed, then eyes pop; the sink is quicker than SC02.
- Key poses:
  - f1: Boat at centre, Pip seated, ripple rings at the bow, head tilted up with a relaxed smile.
  - f14: Aqua drop enters from the top, stretched.
  - f22: Contact, drop squashes; boat folds and sinks at double speed.
  - f42: Ripples only.
- Timing chart: f1-f14 relaxed hold with blink; f14-f22 fall on ones; f22-f30 impact and collapse (faster than SC02); f30-f60 ripples settle. (total 60 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Same framing as SC02-SH020 start: boat intact centre, drop at the top; ripple rings ahead of the bow.
- End pose (frame text): Ripples only, same as SC02-SH020 end, slightly more rings.
- Off-model risks: Framing drift from SC02-SH020; reuse that start frame as the base.
- Kling note: image-to-video, static camera, 'the drop hits the same spot and the boat sinks fast.'

####### SC03-SH020 (3.5 s = 84 f)
- Acting beat: react → act → dread: scowl, flash refold, shadow arrives, ears flatten.
- Key poses:
  - f1: Pip's soggy head breaks the surface, scowling, brows down, cheeks puffed.
  - f18: Fast refold motion (quicker than SC02), blurred creases.
  - f36: Lopsided creased boat pops up, one side wall lower; Pip seated.
  - f54: A small round grey shadow grows on the water lower-right; Pip's eyes slide to it.
  - f84: Ears flat against her head, mouth a small worried line; hold.
- Timing chart: f1-f10 emerge; f10-f30 refold in half the frames of SC02; f30-f40 pop; f40-f60 shadow grows (ease in); f60-f72 eye-lead look; f72-f84 ears flatten and hold. (total 84 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip's soggy scowling head at the surface, seed raised, cream paper floating flat.
- End pose (frame text): Pip seated in the lopsided creased boat, flat ears, worried line mouth, a small round shadow on the water at lower right.
- Off-model risks: Lopsided boat consistency (PR-BOAT:CREASED); shadow may become a drop. Keep it a plain soft grey ellipse.
- Kling note: Two clips if needed: surfacing+refold, then shadow+ears. Static camera.

###### Requests
- Model sheet views needed: Pip three-quarter-from-above (for POV/hands-up poses), Pip soggy and creased states; Mo three-quarter.
- Timing conflicts: none; shot frame counts equal duration × 24.

###### Handoff
- Produced: SC03_animation@1 (REVIEW), 2 shots, 144 frames
- Next: film-director (approve), production-manager (compile poses into shots)


#### Camera and lighting
Source: `07_camera/SC03_camera.md`

##### SC03 Camera and Lighting

Color script row: wet slate / paper yellow / coolest / lower saturation, slightly darker. Time/weather: morning, light rain.

###### Lighting setups

####### Setup B — Darker overcast (cloud thickening)
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | overcast sky dome, a darker patch moving in from the right | overhead, slightly dimmer on the right | very soft | cool ~7200 K (slate) | cel shadow tone one step darker (#4B5D6B) |
| Fill | sky bounce off the puddle | from below, even, lower level | very soft | grey-blue | — |
| Rim | none | — | — | — | — |
| Practicals | none | — | — | — | — |
| Atmosphere | light rain, a little heavier | — | — | — | small round shadow on the water appears at the end |
Contrast feel: low-medium (about 2.5:1). Changes during scene: dims slightly over the scene, the shadow grows.

```
         sky (overhead dome)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC03-SH010 | B | 35 mm: flat, deep | f/8, deep | drop and boat | 0.03 | 0.45 | south bank centre, same as SC02-SH020 | locked-off | static | none | wide flat side view identical in framing to the previous gag, slightly darker overcast |
| SC03-SH020 | B | 50 mm | f/5.6, deep | Pip, shadow at lower right sharp | 0.03 | 0.3 | south bank centre-left, closer | locked-off | static | none | medium flat side view, Pip centre-left, small soft grey shadow on the water lower right |

###### Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts.
- Matched pairs: SC03-SH010 uses the same lens, height and distance as SC02-SH020.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

###### Proposals to the director
- none

###### Handoff
- Produced: SC03_camera@1 (REVIEW), setup B, 2 shots
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC03` in section 11.


#### Shot records
Source: `08_master/shots/SC03.md`

##### Shot records SC03

Compiled from approved department documents. `generation.mode` is derived (image-to-video baseline) because Kling features are unconfirmed; `clip_length_s` is derived (5 s assumed for Kling).

###### SC03-SH010

```yaml
record: shot
id: SC03-SH010
scene: SC03
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC03_direction@1
- SC03_animation@1
- SC03_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: A second drop hits the same spot and the boat sinks faster
screenplay_ref: SC03, action lines 1-2
duration_s: 2.5
characters:
- id: CH-DROP
  costume: CO-DROP-01
  costume_state: FALLING
  position: top centre above the boat's middle
  facing: no face; falling straight down
  action: falls onto the same spot
  expression_start: n/a (faceless)
  expression_end: n/a (faceless), splashed
  eyeline: n/a
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: DRY → SOGGY
  position: centre, seated in the boat
  facing: profile, facing screen right
  action: glances up relaxed, eyes pop as the boat sinks fast
  expression_start: relaxed smile, head tilted up
  expression_end: eyes wide, head just above water
  eyeline: up at the drop
props:
- id: PR-BOAT
  state: PR-BOAT:REFOLDED
  position: centre, mid-water
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: under Pip's arm
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: ripple rings
  midground: boat and Pip
  background: grey sky with the drop
  composition: identical framing to SC02-SH020; boat centre, drop top centre
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
screen_direction: boat faces screen right
start_state: refolded boat with Pip centre, ripple rings at the bow, relaxed
end_state: empty water with ripple rings where the boat was
action_timeline:
- '0.0-0.6 s: rings widen, Pip glances up relaxed'
- '0.6-0.9 s: the drop enters from the top'
- '0.9-1.25 s: contact'
- '1.25-2.5 s: fast sink, ripples settle'
dialogue: []
sound: PLIP, a quicker bloop (screenplay cue)
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC02-SH030
transition_out: cut to SC03-SH020
continuity:
- boat REFOLDED → FLAT
- Pip DRY → SOGGY
- darker overcast than SC02
generation:
  mode: image-to-video
  start_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. At the top centre of frame: A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface. stretched tall, falling. Below it: tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs, matte bright yellow origami paper with crisp creases and a darker golden belly fold, State DRY, sits in profile facing screen right at the centre in a small cream folded paper boat with pointed ends and crisp creases (slightly damp grey-cream), head tilted up with a relaxed smile, a thin sage stem topped with a round feathery white dandelion fluff under her arm. Ripple rings on the water ahead of the bow. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by darker overcast daylight, the sky dimmer toward the right, slate-grey cel shadow tone, light rain, morning. Palette: wet slate #6E8797, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. Open mid-water at the centre of frame with concentric ripple rings and a few bubbles where a boat sank; nothing floats on the surface; flat grey sky above with no drop. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by darker overcast daylight, the sky dimmer toward the right, slate-grey cel shadow tone, light rain, morning. Palette: wet slate #6E8797, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.6 s: ripple rings widen at the bow and Pip glances up relaxed. 0.6-0.9 s: the aqua drop enters from the top. 0.9-1.25 s: it lands on the same spot. 1.25-2.5 s: the boat folds and sinks faster than before; ripples settle.'
  clip_length_s: 5
  risks:
  - 'same framing as SC02-SH020: reuse its start frame as base'
  - upgrade to first-last-frame if supported
```

###### SC03-SH020

```yaml
record: shot
id: SC03-SH020
scene: SC03
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC03_direction@1
- SC03_animation@1
- SC03_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: Pip scowls, refolds a lopsided boat, and a shadow warns of a third drop
screenplay_ref: SC03, action lines 2-3
duration_s: 3.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: SOGGY → CREASED
  position: centre-left of frame
  facing: three-quarter facing screen right
  action: surfaces, scowls, refolds in a flash; ears flatten as a shadow grows
  expression_start: scowl, brows down, puffed cheeks
  expression_end: 'worried: ears flat, small worried mouth line'
  eyeline: toward the shadow at lower right
props:
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: under Pip, lopsided
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: under Pip's arm
- id: PR-OAR
  state: PR-OAR:HELD
  position: in her hand
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: ripple rings
  midground: Pip and the lopsided boat
  background: grey water; a small round soft grey shadow on the water at lower right
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
start_state: Pip's soggy scowling head at the surface, flat cream paper floating under her
end_state: Pip seated in the lopsided creased boat, ears flat, a small round grey shadow on the water at lower right
action_timeline:
- '0.0-0.4 s: emerges, scowls'
- '0.4-1.25 s: a fast refold'
- '1.25-1.65 s: lopsided boat pops up'
- '1.65-3.0 s: shadow grows at lower right, her eyes follow'
- '3.0-3.5 s: ears flatten, hold'
dialogue: []
sound: 'quick crinkle and pop, a low worried hum (screenplay: ears go flat)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC03-SH010
transition_out: cut to SC04-SH010
continuity:
- Pip SOGGY → CREASED
- boat FLAT → CREASED (lopsided)
- shadow is a plain soft grey ellipse, not a second drop
generation:
  mode: image-to-video
  start_frame: 'A medium shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. State SOGGY: limp and dull mustard, droplets on her. Pip''s head and shoulders break the water''s surface at centre-left in three-quarter view facing screen right, brows down in a scowl, puffed cheeks, a thin sage stem topped with a round feathery white dandelion fluff held up in one arm; a flat cream paper shape floats under her. Ripple rings spread. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by darker overcast daylight, the sky dimmer toward the right, slate-grey cel shadow tone, light rain, morning. Palette: wet slate #6E8797, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A medium shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. State CREASED: bright again with extra wrinkles. Pip sits at centre-left in three-quarter view facing screen right in a small cream folded paper boat with pointed ends and crisp creases that is lopsided, one side wall lower, extra crease lines (state CREASED), ears flat against her head, a small worried mouth line, a thin sage stem topped with a round feathery white dandelion fluff under her arm. A small round soft grey shadow lies on the water at the lower right. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by darker overcast daylight, the sky dimmer toward the right, slate-grey cel shadow tone, light rain, morning. Palette: wet slate #6E8797, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.4 s: Pip emerges and scowls. 0.4-1.25 s: a fast refold, quicker than before. 1.25-1.65 s: the lopsided boat pops up. 1.65-3 s: a small round shadow grows on the water at lower right and her eyes slide to it. 3-3.5 s: her ears flatten; hold.'
  clip_length_s: 5
  risks:
  - lopsided boat must stay consistent (PR-BOAT:CREASED)
  - shadow must stay a plain grey ellipse
  - likely two clips
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
- Visual thesis: the white fluff is the brightest thing in the frame and Pip is tiny under it — carried by SH030-SH050.
- Genre playbook: comedy (subvert the rule of three; hold on the payoff).

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | Pip sees the third drop | Pip | action 1 |
| B2 | Pip opens the fluff | Pip | action 2 |
| B3 | bounce and splash | drop | action 3 |
| B4 | boat spins and speeds forward | splash | action 3 |

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
| B4 | Pip | to enjoy | grin as boat spins |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC04-SH010 | MCU | eye-level | static | Pip | Pip looks up, eyes tracking, then squints; ends in a determined squint | Pip centre, chin up | flat | soft overcast | 2.0 s | she sees it and decides | cut |
| SC04-SH020 | POV | low | static | sky above Pip | one small bright aqua drop high in a grey sky grows larger as it falls toward camera; ends big and close | drop centre, grey sky | flat | soft overcast | 1.5 s | the threat | cut |
| SC04-SH030 | MS | eye-level | static | Pip and seed | Pip lifts the seed and the fluff pops open like a parasol over her; ends with the open fluff above her | Pip lower centre, fluff upper centre | flat | soft overcast, fluff white pops | 1.5 s | the decisive choice | cut |
| SC04-SH040 | WS | eye-level | static | drop, fluff, boat | the drop hits the open fluff, bounces up and down twice, then splashes into the water beside the boat; ends with a splash crown beside the boat | fluff upper center-left, splash lower right | flat, deep | soft overcast | 2.0 s | the payoff | cut |
| SC04-SH050 | WS | eye-level | static | boat | the splash wave spins the boat once and sends it speeding right, Pip grinning under the open fluff; ends with the boat at the right of the frame | boat enters center, exits to right third | flat, deep | slightly brighter overcast | 2.0 s | reward and momentum | cut |

Total: 9.0 s vs estimate 9 s.

###### Coverage and rhythm
The only scene with cutting: five short shots for the comic climax. The reaction (SH010) comes before the idea (SH030), and the cause and effect of the bounce is held in one wide frame (SH040).

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH030 | fluff transforms from ball to parasol | keyframe both states (PR-SEED:CLOSED start, PR-SEED:OPEN end) |
| SH040 | drop bouncing on fluff | simple motion: two vertical bounces; fallback: split into two clips or hand-animate bounce |
| SH050 | boat spin and travel | boat spin is one rotation; if Kling fails, use a smear-frame crossfade |

###### Specialist and VFX flags
- action-director: none
- animation-director: yes (parasol pop, bounces, spin)
- vfx: splash crown on SH040 may need a composited element

###### Handoff
- Produced: SC04_direction@1 (REVIEW), 5 shots, 9.0 s
- Open items: none
- Next: cinematographer, script-supervisor


#### Animation plan
Source: `06_direction/SC04_animation.md`

##### SC04 Animation Plan

###### Motion style rules
- Frame rate / feel: 24 fps, animated on twos (12 drawings per second) for characters; the drop and splash on ones for snap; holds are moving holds (a 1-2 px drift or blink) so Kling does not freeze them.
- Exaggeration level: cartoony; squash and stretch up to 25% on Pip's boat gags and up to 40% on the drop (volume preserved).
- Never deforms: Pip's triangular head and round black eyes (they may squint but keep their shape), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform outline; no smears wider than 3 frames.

###### Shots

####### SC04-SH010 (2 s = 48 f)
- Acting beat: perceive → decide: Pip's eyes track up, brows lower, squint.
- Key poses:
  - f1: MCU: Pip's face level, relaxed worried eyes.
  - f16: Eyes lead up, then head tilts up.
  - f34: Brows lower, eyes narrow to a determined squint.
  - f48: Hold the squint with a tiny nod.
- Timing chart: f1-f10 hold; f10-f22 eyes lead; f22-f32 head; f32-f40 squint; f40-f48 hold. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): MCU Pip, level head, round worried black eyes, flat ears.
- End pose (frame text): MCU Pip, chin up, narrowed determined eyes, ears pricked up.
- Off-model risks: Squint shape must stay round-eyed; do the squint with the brow/lid, not an eye-shape change.
- Kling note: image-to-video: 'Pip's eyes look up, then she squints with determination; static camera.'

####### SC04-SH020 (1.5 s = 36 f)
- Acting beat: the threat: drop grows as it falls toward camera.
- Key poses:
  - f1: Tiny aqua drop high in a flat grey sky.
  - f36: The drop fills a third of the frame, stretched and shiny.
- Timing chart: scale from 5% to 30% over 36 f with acceleration; one slight wobble at f24. (total 36 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Flat grey-blue sky with one tiny aqua drop at the centre-top.
- End pose (frame text): Same sky with one large glossy aqua drop at the centre, nearly filling the frame's middle.
- Off-model risks: Drop must stay a single clean teardrop; no extra drops.
- Kling note: image-to-video: 'the single drop falls toward the camera and grows larger'. Easy shot.

####### SC04-SH030 (1.5 s = 36 f)
- Acting beat: decide → act: lift and pop the fluff.
- Key poses:
  - f1: Pip seated, both hands lifting the closed seed.
  - f14: Seed overhead, fluff ball squeezed (anticipation).
  - f22: POP: fluff bursts out wide, spread like a parasol.
  - f36: Settle: fluff gently bobbing, Pip under it.
- Timing chart: f1-f12 lift; f12-f16 squeeze; f16-f22 burst on ones; f22-f36 settle with overshoot 10%. (total 36 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip seated in the creased boat, holding the closed fluff seed above her head.
- End pose (frame text): Pip seated, the open fluff spread like a parasol above her, stem in both hands.
- Off-model risks: Fluff state change; keyframe both states (PR-SEED:CLOSED start, PR-SEED:OPEN end).
- Kling note: Prefer first-last-frame (if Kling supports it); otherwise image-to-video from the start frame with the open-fluff end described.

####### SC04-SH040 (2 s = 48 f)
- Acting beat: brace → bounce: drop hits the fluff and bounces twice, splashes by the boat.
- Key poses:
  - f1: Drop at the top above the open fluff.
  - f12: Contact: drop squashes on the fluff, fluff dips.
  - f18: Bounce 1: drop pops up (stretch).
  - f26: Down again, second squash.
  - f32: Bounce 2: smaller pop.
  - f40: Drop falls beside the boat and splashes, crown of tiny droplets.
  - f48: Crown fades to ripples.
- Timing chart: on ones for the bounces; f1-f12 fall; f12-f18 first bounce; f18-f26 second; f26-f40 splash; f40-f48 ripple settle. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip under the open fluff in the creased boat, aqua drop directly above the fluff.
- End pose (frame text): Splash crown beside the boat on the water, drop gone, fluff stays open above Pip.
- Off-model risks: Drop bounces are the riskiest motion; fallback: shorter 2 s clips of one bounce each, or frame-by-frame hold.
- Kling note: image-to-video with a short clip, static camera; generate 3 takes.

####### SC04-SH050 (2 s = 48 f)
- Acting beat: enjoy: splash wave spins the boat once and sends it forward.
- Key poses:
  - f1: Boat at centre, calm.
  - f12: Wave lifts the left side; the boat begins to spin (rotation 90°).
  - f28: Boat completes a 360° spin, Pip grinning under the fluff.
  - f48: Boat leaves frame at the right third, speed lines.
- Timing chart: f1-f10 hold; f10-f30 spin (ease in, ease out); f30-f48 acceleration right. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Boat at centre, Pip under the open fluff, splash crown on the left.
- End pose (frame text): Boat at the right third heading off right, Pip grinning, fluff open above.
- Off-model risks: Spin may break the boat's identity; 360° is hard. Fallback: a 180° spin plus a hop forward, or a crossfade smear frame.
- Kling note: image-to-video: 'the boat spins once then speeds right'. If it fails, request 'turn around and slide'.

###### Requests
- Model sheet views needed: Pip three-quarter-from-above (for POV/hands-up poses), Pip soggy and creased states; Mo three-quarter.
- Timing conflicts: none; shot frame counts equal duration × 24.

###### Handoff
- Produced: SC04_animation@1 (REVIEW), 5 shots, 216 frames
- Next: film-director (approve), production-manager (compile poses into shots)


#### Camera and lighting
Source: `07_camera/SC04_camera.md`

##### SC04 Camera and Lighting

Color script row: grey-blue with lighter sky patch / fluff white, paper yellow / cool with white pop / brightest so far. Time/weather: morning, light rain.

###### Lighting setups

####### Setup A — Soft overcast daylight
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | overcast sky dome (set source: sky) | overhead, no single direction; slight lift from camera-left sky | very soft | neutral cool ~6800 K (grey-blue) | cel shadow falls straight under objects |
| Fill | sky bounce off the puddle surface | from below, even | very soft | pale blue-grey | keeps shadow tone light, not black |
| Rim | none | — | — | — | 2D cel look uses an outline instead |
| Practicals | none | — | — | — | — |
| Atmosphere | light rain: sparse thin streaks, faint wet sheen on leaf and soil | — | — | — | a few small rain dimples on the water |
Contrast feel: low (about 2:1). Changes during scene: none.

```
         sky (overhead dome)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC04-SH010 | A | 70 mm: flat, slightly compressed | f/4, shallow wash background | Pip's eyes | 0.03 | 0.25 | south bank centre, close | locked-off | static | none | medium close-up, flat side-on face, soft wash background |
| SC04-SH020 | A | 35 mm: flat, wide | f/8, deep | drop | 0.03 | 0.2 | POV looking up from Pip's seat; sky filling frame | locked-off | static | none | upward view of flat grey sky with a drop growing; no horizon |
| SC04-SH030 | A | 50 mm | f/5.6 | Pip and the opening fluff | 0.03 | 0.3 | south bank centre | locked-off | static | none | medium flat side view, white fluff opens above Pip |
| SC04-SH040 | A | 35 mm | f/8, deep | fluff and drop | 0.03 | 0.45 | south bank centre-left | locked-off | static | none | wide flat side view, fluff upper left of centre, splash lower right, both sharp |
| SC04-SH050 | A | 35 mm | f/8, deep | boat | 0.03 | 0.45 | south bank centre | locked-off | static | none | wide flat side view, boat spinning at centre then moving right |

###### Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts.
- Matched pairs: wide shots in this scene share 35 mm, 0.03 m height, 0.45 m distance.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

###### Proposals to the director
- none

###### Handoff
- Produced: SC04_camera@1 (REVIEW), setup A, 5 shots
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC04` in section 11.


#### Shot records
Source: `08_master/shots/SC04.md`

##### Shot records SC04

Compiled from approved department documents. `generation.mode` is derived (image-to-video baseline) because Kling features are unconfirmed; `clip_length_s` is derived (5 s assumed for Kling).

###### SC04-SH010

```yaml
record: shot
id: SC04-SH010
scene: SC04
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC04_direction@1
- SC04_animation@1
- SC04_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: Pip looks up at the third drop and decides
screenplay_ref: SC04, action line 1
duration_s: 2.0
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: centre of frame, chest up
  facing: three-quarter facing screen right
  action: looks up with her eyes first, then her head, then squints
  expression_start: 'worried: round eyes, ears flat'
  expression_end: determined squint, ears pricked up
  eyeline: up and to the right at the drop
props: []
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: none
  midground: Pip's head and shoulders
  background: soft grey-blue wash
  composition: Pip centre, chin lifting, headroom for the upward look
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
start_state: Pip's face level, worried round eyes, ears flat
end_state: chin up, narrowed determined eyes, ears pricked up
action_timeline:
- '0.0-0.4 s: hold'
- '0.4-0.9 s: eyes lead up'
- '0.9-1.3 s: head tilts up'
- '1.3-1.7 s: brows lower into a squint'
- '1.7-2.0 s: tiny nod'
dialogue: []
sound: a quiet pause; one rain plip nearby
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC03-SH020
transition_out: cut to SC04-SH020
continuity:
- Pip CREASED
- ears flat at start
generation:
  mode: image-to-video
  start_frame: 'A medium close-up at water level, eye-level, 70 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. State CREASED: bright yellow with extra wrinkles. Pip''s head and shoulders fill the centre of frame in three-quarter view facing screen right, head level, round worried black eyes, ears flat against her head, small worried mouth line. Behind her a soft grey-blue wash with faint ripple rings. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A medium close-up at water level, eye-level, 70 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. Matte bright yellow origami paper with crisp straight creases and darker golden-yellow shaded folds; surface bare of clothing, flat cel color, thin dark-teal outline, soft rounded fold corners. State CREASED: bright yellow with extra wrinkles. Pip''s head and shoulders fill the centre of frame in three-quarter view facing screen right, chin lifted, eyes narrowed in a determined squint with the eyelids lowered, ears pricked up, mouth in a firm line. Behind her a soft grey-blue wash with faint ripple rings. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.4 s: hold. 0.4-0.9 s: her eyes move up first. 0.9-1.3 s: her head tilts up. 1.3-1.7 s: brows lower into a determined squint and ears prick up. 1.7-2 s: a tiny nod.'
  clip_length_s: 5
  risks:
  - keep the squint on the lid, not an eye-shape change
```

###### SC04-SH020

```yaml
record: shot
id: SC04-SH020
scene: SC04
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC04_direction@1
- SC04_animation@1
- SC04_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: The third drop, small and bright, grows as it falls toward Pip
screenplay_ref: SC04, action line 1
duration_s: 1.5
characters:
- id: CH-DROP
  costume: CO-DROP-01
  costume_state: FALLING
  position: centre-top of frame, growing
  facing: no face; falling toward camera
  action: falls toward the camera and grows larger
  expression_start: n/a (faceless), tiny
  expression_end: n/a (faceless), large
  eyeline: n/a
props: []
location:
  id: LOC-PUDDLE
  area: sky above mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: none
  midground: none
  background: flat grey-blue sky
  composition: drop at centre; no horizon
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
screen_direction: n/a (looking up)
start_state: a tiny aqua drop high in a flat grey sky
end_state: the drop large and glossy filling the centre of the frame
action_timeline:
- '0.0-1.0 s: the drop accelerates toward camera and grows'
- '1.0-1.5 s: it looms large, wobbles once'
dialogue: []
sound: 'a rising whistle-like rain hiss (screenplay: drop getting bigger)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC04-SH010
transition_out: cut to SC04-SH030
continuity:
- shows only the one hero drop, no other drops
generation:
  mode: image-to-video
  start_frame: 'A point-of-view shot looking straight up, 35 mm flat lens, flat grey-blue sky filling the frame with no horizon. At the centre-top: one bright aqua glossy teardrop with a white highlight, plain and smooth, tiny, about five percent of the frame height. Soft watercolor wash sky with a faint paper grain. Lit by soft overcast daylight, light rain, morning. Palette: puddle grey-blue #9DB8C9, raindrop aqua #5FD0E8, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A point-of-view shot looking straight up, 35 mm flat lens, flat grey-blue sky filling the frame with no horizon. At the centre: A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface., large, filling about a third of the frame height, stretched slightly tall. Soft watercolor wash sky with a faint paper grain. Lit by soft overcast daylight, light rain, morning. Palette: puddle grey-blue #9DB8C9, raindrop aqua #5FD0E8, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-1 s: the single aqua drop falls toward camera, accelerating and growing from tiny to a third of the frame height. 1-1.5 s: it wobbles once and looms large.'
  clip_length_s: 5
  risks:
  - keep a single clean drop, no extra drops
  - easy shot
```

###### SC04-SH030

```yaml
record: shot
id: SC04-SH030
scene: SC04
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC04_direction@1
- SC04_animation@1
- SC04_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: 'Pip''s decisive new idea: she pops the seed''s fluff open like a parasol'
screenplay_ref: SC04, action line 2
duration_s: 1.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: lower centre, seated in the boat
  facing: three-quarter facing screen right
  action: lifts the seed overhead and the fluff pops open
  expression_start: determined squint
  expression_end: confident grin under the fluff
  eyeline: up at the drop
props:
- id: PR-SEED
  state: PR-SEED:CLOSED
  position: in both hands overhead, becoming OPEN
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: under Pip, lopsided
- id: PR-OAR
  state: PR-OAR:STOWED
  position: lies across the boat floor
location:
  id: LOC-PUDDLE
  area: mid-water
  time_of_day: morning
  weather: light rain
frame:
  foreground: none
  midground: Pip in the boat with the seed
  background: soft grey-blue wash
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
start_state: Pip lifting the closed fluff seed with both hands above her head
end_state: the fluff fully open above Pip like a parasol, stem in both hands
action_timeline:
- '0.0-0.5 s: lifts the seed'
- '0.5-0.65 s: squeezes the fluff'
- '0.65-0.9 s: fluff bursts open'
- '0.9-1.5 s: settles, bobbing gently'
dialogue: []
sound: 'a soft poof as the fluff opens (screenplay: pops open)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC04-SH020
transition_out: cut to SC04-SH040
continuity:
- PR-SEED CLOSED → OPEN
- PR-OAR HELD → STOWED
- boat CREASED
generation:
  mode: image-to-video
  start_frame: 'A medium shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. matte bright yellow origami paper with crisp creases and a darker golden belly fold State CREASED. Pip sits at lower centre in three-quarter view facing screen right in a small cream folded paper boat with pointed ends and crisp creases (lopsided, creased), a small bright yellow folded paper oar with a thin handle and a flat blade on the boat floor, both arms raised holding the A single dandelion seed with a thin pale sage-green stem, a small brown pointed seed at the bottom and a round soft feathery white fluff at the top made of fine radiating filaments, flat cel color with a thin dark-teal outline. Its fluff is still a closed ball just above her head. Determined squint. Faint ripple rings. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A medium shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. matte bright yellow origami paper with crisp creases and a darker golden belly fold State CREASED. Pip sits at lower centre in three-quarter view facing screen right in a small cream folded paper boat with pointed ends and crisp creases (lopsided, creased), a small bright yellow folded paper oar with a thin handle and a flat blade on the boat floor, both hands gripping the stem of a dandelion seed whose white fluff is fully open and spread wide like a parasol above her head, the brightest white in the frame. Confident grin. Faint ripple rings. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: Pip lifts the closed-fluff seed over her head. 0.5-0.65 s: the fluff squeezes. 0.65-0.9 s: the fluff bursts open like a parasol. 0.9-1.5 s: it settles and bobs gently above her.'
  clip_length_s: 5
  risks:
  - 'fluff ball-to-parasol transformation: both states keyframed; prefer first-last-frame if Kling supports it'
```

###### SC04-SH040

```yaml
record: shot
id: SC04-SH040
scene: SC04
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC04_direction@1
- SC04_animation@1
- SC04_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: The drop bounces off the fluff and splashes beside the boat
screenplay_ref: SC04, action line 3
duration_s: 2.0
characters:
- id: CH-DROP
  costume: CO-DROP-01
  costume_state: FALLING
  position: top, above the open fluff, then bouncing, then splashing at lower right beside the boat
  facing: no face
  action: lands on the fluff, bounces twice, then splashes into the water beside the boat
  expression_start: n/a (faceless)
  expression_end: n/a (faceless), splash crown
  eyeline: n/a
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: centre-left, seated in the boat under the fluff
  facing: three-quarter facing screen right
  action: holds still under the open fluff, bracing
  expression_start: eyes wide, brace
  expression_end: eyes wide, then a relieved smile
  eyeline: up at the drop
props:
- id: PR-SEED
  state: PR-SEED:OPEN
  position: overhead in Pip's hands
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: centre-left
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
  midground: boat, Pip and fluff
  background: grey sky
  composition: fluff upper left of centre, splash lower right
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
screen_direction: boat faces screen right
start_state: Pip under the open fluff in the creased boat, the drop directly above the fluff
end_state: a splash crown of tiny droplets on the water beside the boat, the drop gone, the fluff still open above Pip
action_timeline:
- '0.0-0.5 s: the drop falls'
- '0.5-0.75 s: lands on the fluff, fluff dips'
- '0.75-1.1 s: bounces up and down twice'
- '1.1-1.65 s: falls beside the boat, splash crown'
- '1.65-2.0 s: crown fades to ripples'
dialogue: []
sound: 'a boing on each bounce, then a splash (screenplay cue: bounces, splash)'
music: none specified yet (music plan is stage 10)
vfx: 'pending VFX plan (stage 10): director flagged the splash crown as a possible composited element'
transition_in: cut from SC04-SH030
transition_out: cut to SC04-SH050
continuity:
- PR-SEED OPEN
- boat CREASED
- only the one hero drop
generation:
  mode: image-to-video
  start_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs, matte bright yellow origami paper with crisp creases and a darker golden belly fold, State CREASED, sits at centre-left in a small cream folded paper boat with pointed ends and crisp creases (lopsided) holding a thin sage stem topped with a round feathery white dandelion fluff whose fluff is open wide like a parasol above her, a small bright yellow folded paper oar with a thin handle and a flat blade on the boat floor. Directly above the open fluff, high in the frame: A single glossy teardrop-shaped drop of water in bright aqua #5FD0E8: round at the bottom and pointed at the top, one curved white highlight on the upper left, a slightly darker aqua rim and shadow tone at the lower right, thin dark-teal outline, a plain smooth featureless surface. stretched tall, falling. Ripple rings on the water. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs, matte bright yellow origami paper with crisp creases and a darker golden belly fold, State CREASED, sits at centre-left in a small cream folded paper boat with pointed ends and crisp creases (lopsided) holding a thin sage stem topped with a round feathery white dandelion fluff whose fluff is open wide like a parasol above her, a small bright yellow folded paper oar with a thin handle and a flat blade on the boat floor. At the lower right beside the boat, a splash crown of small aqua droplets rising from the water with wide ripple rings; the sky above is empty. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: the drop falls onto the open fluff. 0.5-0.75 s: it lands and the fluff dips. 0.75-1.1 s: the drop bounces up and down twice. 1.1-1.65 s: it drops into the water beside the boat in a splash crown. 1.65-2 s: the crown fades to ripples. Pip holds still under the fluff.'
  clip_length_s: 5
  risks:
  - 'drop bouncing on the fluff is the riskiest motion: generate 3 takes; fallback two 1 s clips'
  - the splash crown may need compositing
```

###### SC04-SH050

```yaml
record: shot
id: SC04-SH050
scene: SC04
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC04_direction@1
- SC04_animation@1
- SC04_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: The splash wave spins the boat and sends it speeding forward
screenplay_ref: SC04, action line 3
duration_s: 2.0
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: centre, seated in the boat under the open fluff
  facing: starts three-quarter right, spins with the boat, ends facing screen right
  action: grins as the boat spins once and speeds forward
  expression_start: relieved smile
  expression_end: big grin
  eyeline: forward right
props:
- id: PR-SEED
  state: PR-SEED:OPEN
  position: overhead in Pip's hands
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: spinning at centre, then speeding right
- id: PR-OAR
  state: PR-OAR:STOWED
  position: across the boat floor
location:
  id: LOC-PUDDLE
  area: mid-water, moving toward the far shore
  time_of_day: morning
  weather: light rain
frame:
  foreground: splash ripples
  midground: boat with Pip
  background: grey sky, far shore at right
  composition: boat at centre, then the right third
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
screen_direction: boat ends moving left to right, Pip faces screen right
start_state: boat at centre, Pip under the open fluff, splash ripples on the left
end_state: boat at the right third of frame heading right, Pip grinning, fluff open above
action_timeline:
- '0.0-0.4 s: hold'
- '0.4-1.25 s: the wave spins the boat once'
- '1.25-2.0 s: boat accelerates right'
dialogue: []
sound: 'a whoosh of water and a happy squeak (screenplay: speeding forward)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC04-SH040
transition_out: cut to SC05-SH010
continuity:
- PR-SEED OPEN
- boat CREASED
- travel left to right
generation:
  mode: image-to-video
  start_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs, matte bright yellow origami paper with crisp creases and a darker golden belly fold, State CREASED, sits at the centre in a small cream folded paper boat with pointed ends and crisp creases (lopsided) holding a thin sage stem topped with a round feathery white dandelion fluff whose fluff is open wide above her, a small bright yellow folded paper oar with a thin handle and a flat blade on the boat floor, relieved smile. Small splash ripples on the water at the left. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs, matte bright yellow origami paper with crisp creases and a darker golden belly fold, State CREASED, sits in a small cream folded paper boat with pointed ends and crisp creases (lopsided) at the right third of the frame heading right, holding a thin sage stem topped with a round feathery white dandelion fluff whose fluff is open wide above her, a small bright yellow folded paper oar with a thin handle and a flat blade on the boat floor, big grin; a small V-shaped wake trails behind the boat. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by soft overcast daylight from the sky overhead, very soft pale blue-grey fill bouncing off the water, one hard-edged cel shadow tone under objects, light rain, morning. Palette: puddle grey-blue #9DB8C9, paper yellow #FFC93C, outline dark teal #1F3A48. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.4 s: the boat sits at centre. 0.4-1.25 s: the splash wave spins the boat once around. 1.25-2 s: it accelerates right to the right third of the frame, Pip grinning under the open fluff.'
  clip_length_s: 5
  risks:
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
- Visual thesis: the left and right halves of the film finally join in one frame — carried by SH020 and SH050.
- Genre playbook: comedy resolving to warmth (reaction shot at the end, warm light).

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | arrival | Pip | action 1 |
| B2 | the hand-off | Pip and Mo | action 2 |
| B3 | planting | Mo | action 2 |
| B4 | the last drop and the sprout | drop | action 3 |
| B5 | looks up and waves | Pip and Mo | action 4 |

###### Blocking
Floor plan: LOC-PUDDLE, far shore.
- Start positions: Mo on the far shore right of center beside soil patch L3, facing screen left, feelers drooping. Boat arrives from the left.
- Moves: Pip steps out to the right; Mo reaches out with her feelers; Mo carries the stem to the soil and plants it.
- End positions: Pip left of the sprout, Mo right of it, both facing the camera and looking up.
- Axis and camera side: same as SC01; Pip left and Mo right, facing each other, so the axis is Pip-Mo, left to right.
- Screen direction in/out: boat arrives from the left (continuing). Scene ends on FADE OUT.

###### Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Mo | to notice | feelers lift |
| B2 | Pip | to give | holds the seed out with both hands, grin |
| B2 | Mo | to receive | feelers wrap the stem, head tilts |
| B3 | Mo | to plant | stem pushed into the soil |
| B5 | Pip, Mo | to share the moment | feelers wave; Pip lifts a hand to the sky |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC05-SH010 | WS | eye-level | static | boat and Mo | the boat slides onto the far shore and bumps to a stop; Mo's feelers lift; ends with the boat stopped and Mo's feelers up | boat left, Mo and soil right | flat, deep | soft overcast, a pale warm glow upper right | 2.5 s | arrival | cut |
| SC05-SH020 | MS | eye-level | static | Pip and Mo | Pip steps out and holds the seed out; Mo takes it in her feelers; ends with Mo holding the seed | two-shot: Pip left, Mo right | flat | warm soft light | 3.0 s | the hand-off (the want is met) | cut |
| SC05-SH030 | MS | eye-level | static | Mo and soil | Mo plants the stem in the soil patch; the fluff folds shut; ends with the seed standing planted | Mo right, soil centre | flat | warm soft light | 2.5 s | planting | cut |
| SC05-SH040 | INSERT | high | static | planted seed and soil | one last drop falls onto the soil beside the seed; a green sprout pops up with a boing; ends with the sprout standing | soil centre | flat | warm glow | 2.0 s | the payoff: the drop helps | cut |
| SC05-SH050 | MWS | eye-level | static | Pip and Mo | Pip and Mo look at the sprout, then up; Pip gives the sky a small wave; ends on the wave, fade out | Pip left, sprout centre, Mo right | flat | warmest, brightest | 2.0 s | closing image mirrors the opening | fade-out |

Total: 12.0 s vs estimate 12 s.

###### Coverage and rhythm
Slowest scene: the audience breathes. The two-shot (SH020) puts the two characters together for the first time; SH040 is the joke's turn into warmth; SH050 closes on the final image.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH020 | seed hand-off between two characters in contact | seed is already near Mo's feelers at the start frame; the end frame has the seed in her feelers |
| SH030 | fluff closes; planting | keyframe PR-SEED:PLANTED as the end frame |
| SH040 | sprout pop is a small effect | end frame has the sprout fully shown; fallback: composite the sprout in post |
| SH050 | two characters, looking up and a wave | slow, simple head tilt; wave is one hand |

###### Specialist and VFX flags
- action-director: none
- animation-director: yes (hand-off, boing, wave)
- vfx: sprout pop possibly composited

###### Handoff
- Produced: SC05_direction@1 (REVIEW), 5 shots, 12.0 s
- Open items: none
- Next: cinematographer, script-supervisor


#### Animation plan
Source: `06_direction/SC05_animation.md`

##### SC05 Animation Plan

###### Motion style rules
- Frame rate / feel: 24 fps, animated on twos (12 drawings per second) for characters; the drop and splash on ones for snap; holds are moving holds (a 1-2 px drift or blink) so Kling does not freeze them.
- Exaggeration level: cartoony; squash and stretch up to 25% on Pip's boat gags and up to 40% on the drop (volume preserved).
- Never deforms: Pip's triangular head and round black eyes (they may squint but keep their shape), Mo's spiral shell, the seed's stem length.
- Style: flat cel fills, uniform outline; no smears wider than 3 frames.

###### Shots

####### SC05-SH010 (2.5 s = 60 f)
- Acting beat: arrive → notice: boat bumps; Mo's feelers lift.
- Key poses:
  - f1: Boat sliding in from the left, near the soil patch.
  - f20: Bump: boat stops with a squash and a rebound.
  - f36: Mo's feelers twitch, then rise slowly.
  - f60: Feelers fully upright, hold.
- Timing chart: f1-f20 slide with ease out; f20-f26 bump and rebound; f26-f36 hold; f36-f52 feelers rise; f52-f60 hold. (total 60 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Boat at left of the far shore, Mo on the right beside the bare soil patch, feelers drooping.
- End pose (frame text): Boat stopped on the far shore, Pip seated, Mo with feelers upright.
- Off-model risks: Mo's feelers must stay two thin lines with round dot eyes.
- Kling note: image-to-video, static camera. Generate Mo's feeler lift as a separate 2 s clip if needed.

####### SC05-SH020 (3 s = 72 f)
- Acting beat: give and receive: Pip steps out and offers; Mo wraps the stem.
- Key poses:
  - f1: Pip steps off the boat onto the shore, seed in both hands.
  - f24: Pip holds the seed out toward Mo, a hopeful smile.
  - f44: Mo's feelers curl around the stem; her head tilts.
  - f72: Mo holds the seed, Pip's hands empty.
- Timing chart: f1-f20 step; f20-f28 offer anticipation; f28-f44 reach; f44-f60 grasp; f60-f72 hold. (total 72 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip on the shore beside the boat at left holding the seed with its fluff open like a parasol in both hands; Mo at right facing her.
- End pose (frame text): Mo holding the seed's stem in her feelers, its open fluff above her; Pip with empty open hands, grinning.
- Off-model risks: Contact between characters; keep a 1 cm gap or an overlap in the frame. Fallback: end frame shows the seed between them.
- Kling note: first-last-frame if available; else image-to-video with a short 3 s clip.

####### SC05-SH030 (2.5 s = 60 f)
- Acting beat: act: Mo plants the stem; fluff folds shut.
- Key poses:
  - f1: Mo holds the seed, turns toward the soil.
  - f20: Seed lowered to the soil.
  - f32: Stem pushed in, a small puff of soil.
  - f48: Fluff folds shut into a ball.
  - f60: Hold: planted seed, Mo's feelers happy.
- Timing chart: f1-f20 slow turn (she is a snail); f20-f32 push; f32-f48 fluff closes; f48-f60 hold. (total 60 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Mo with the open-fluff seed beside the bare soil patch.
- End pose (frame text): The seed planted upright in the soil, closed fluff, Mo's feelers up beside it.
- Off-model risks: Fluff closing back to a ball; keep it simple.
- Kling note: image-to-video, static camera.

####### SC05-SH040 (2 s = 48 f)
- Acting beat: payoff: last drop lands, sprout pops with a boing.
- Key poses:
  - f1: High angle on the soil with the planted seed.
  - f12: Drop enters from the top.
  - f20: Contact PLIP on the soil beside the seed.
  - f28: Sprout pops (stretch 40%), then bounce settle.
  - f48: Sprout standing, two round leaves.
- Timing chart: f1-f12 hold; f12-f20 fall on ones; f20-f28 pop; f28-f40 overshoot and settle; f40-f48 hold. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Soil with the planted seed (closed fluff), no sprout.
- End pose (frame text): Same soil, a bright green sprout with two round leaves beside the seed.
- Off-model risks: Sprout is a small element; fallback: composite in post.
- Kling note: image-to-video or first-last-frame.

####### SC05-SH050 (2 s = 48 f)
- Acting beat: share: look at the sprout, look up, small wave.
- Key poses:
  - f1: Pip and Mo look down at the sprout.
  - f16: Both heads lift to the sky, eyes lead.
  - f32: Pip raises one hand; Mo's feelers wave.
  - f48: Wave at the sky, fade out begins.
- Timing chart: f1-f10 hold; f10-f26 look up; f26-f40 wave; f40-f48 hold into fade out. (total 48 f)
- Principles: anticipation before each major move, overshoot and settle after stops, arcs on jumps and swings, ears and feelers lag by 2 f.
- Lip-sync accents: none (no dialogue)
- Start pose (frame text): Pip left, Mo right, the sprout in the middle, both looking down.
- End pose (frame text): Both looking up, Pip's hand raised in a small wave, Mo's feelers waving.
- Off-model risks: Two characters moving together; keep movement slight.
- Kling note: image-to-video; fade-out added in editing (not generated).

###### Requests
- Model sheet views needed: Pip three-quarter-from-above (for POV/hands-up poses), Pip soggy and creased states; Mo three-quarter.
- Timing conflicts: none; shot frame counts equal duration × 24.

###### Handoff
- Produced: SC05_animation@1 (REVIEW), 5 shots, 288 frames
- Next: film-director (approve), production-manager (compile poses into shots)


#### Camera and lighting
Source: `07_camera/SC05_camera.md`

##### SC05 Camera and Lighting

Color script row: leaf green and soil brown / shell coral, paper yellow, sprout green / warmest / highest. Time/weather: morning, light rain.

###### Lighting setups

####### Setup C — Clearing overcast with a pale warm glow
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | sky dome with a thinning patch of cloud | upper right of frame, high, soft | very soft | warm-neutral ~5600 K | long soft cel shadow falls to the lower left |
| Fill | sky bounce off the puddle and soil | from below, even | very soft | pale blue-grey | — |
| Rim | soft warm edge from the glow | upper right behind the characters | soft | warm ~4800 K | a faint warm edge on Mo's shell and Pip's right side |
| Practicals | none | — | — | — | — |
| Atmosphere | rain thinning to a few drops, a faint warm haze at the upper right | — | — | — | soil darker where wet |
Contrast feel: low (about 2:1) but warmer and brighter. Changes during scene: glow grows toward the fade-out.

```
         sky (overhead dome, glow upper right)
   NEAR SHORE ~~~~~~ puddle ~~~~~~ FAR SHORE
                     ^ camera (south bank, side-on, water level)
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement execution | Motion feel | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC05-SH010 | C | 35 mm | f/8, deep | boat and Mo | 0.03 | 0.45 | south bank, right of centre, far shore in view | locked-off | static | none | wide flat side view of the far shore, boat arriving from the left, Mo and soil right |
| SC05-SH020 | C | 50 mm | f/5.6 | Pip and Mo equally sharp | 0.03 | 0.3 | south bank, far shore | locked-off | static | none | medium two-shot, Pip left, Mo right, both sharp |
| SC05-SH030 | C | 50 mm | f/5.6 | Mo and soil | 0.03 | 0.3 | south bank, far shore, right | locked-off | static | none | medium flat side view, Mo and soil patch |
| SC05-SH040 | C | 85 mm: flat, slightly compressed | f/4, soft wash background | soil and sprout | 0.1 | 0.25 | slightly above the soil patch, looking down 30 degrees | locked-off | static | none | close view down on the soil, one drop falling, sprout popping |
| SC05-SH050 | C | 50 mm | f/5.6 | Pip, sprout, Mo | 0.03 | 0.4 | south bank, far shore, centred | locked-off | static | none | medium wide flat side view, three subjects in a row, warm glow upper right |

###### Consistency notes
- Key side per setup: overhead dome; no directional key, so no flip across cuts. SC05 glow is upper right in every shot.
- Matched pairs: wide shots in this scene share 35 mm, 0.03 m height, 0.45 m distance.
- Eyeline heights: camera at water level (0.03 m = Pip eye height 3 cm); all 2D flat side-on.
- Depth of field: this is 2D; "shallow" means a softer background wash, not optical blur.

###### Proposals to the director
- none

###### Handoff
- Produced: SC05_camera@1 (REVIEW), setup C, 5 shots
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC05` in section 11.


#### Shot records
Source: `08_master/shots/SC05.md`

##### Shot records SC05

Compiled from approved department documents. `generation.mode` is derived (image-to-video baseline) because Kling features are unconfirmed; `clip_length_s` is derived (5 s assumed for Kling).

###### SC05-SH010

```yaml
record: shot
id: SC05-SH010
scene: SC05
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC05_direction@1
- SC05_animation@2
- SC05_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: The boat arrives on the far shore and Mo's feelers lift
screenplay_ref: SC05, action line 1
duration_s: 2.5
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: left-centre, seated in the boat
  facing: profile, facing screen right
  action: arrives, bumps to a stop, holds the open-fluff seed
  expression_start: big grin
  expression_end: happy, eyes on Mo
  eyeline: to Mo
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: right of centre beside the soil patch
  facing: profile, facing screen left
  action: feelers rise as the boat bumps ashore
  expression_start: feelers drooping
  expression_end: feelers upright, small smile
  eyeline: to Pip
props:
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: sliding onto the far shore from the left
- id: PR-SEED
  state: PR-SEED:OPEN
  position: held overhead by Pip
- id: PR-OAR
  state: PR-OAR:STOWED
  position: across the boat floor
location:
  id: LOC-PUDDLE
  area: far shore
  time_of_day: morning
  weather: rain thinning, pale warm glow upper right
frame:
  foreground: wet bank edge
  midground: boat landing left, Mo and the soil patch right
  background: grass blades and a pale warm glow upper right
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
screen_direction: boat arrives from screen left; Pip faces right; Mo faces left
start_state: boat sliding in from the left toward the far shore, Mo's feelers drooping
end_state: boat stopped on the far shore, Mo's feelers upright
action_timeline:
- '0.0-0.8 s: boat slides in'
- '0.8-1.1 s: bump, squash and rebound'
- '1.1-1.5 s: hold'
- '1.5-2.2 s: Mo''s feelers rise'
- '2.2-2.5 s: hold'
dialogue: []
sound: 'soft bump of paper on the bank (screenplay: soft bump), a happy hum from Mo'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC04-SH050
transition_out: cut to SC05-SH020
continuity:
- boat CREASED beached
- seed OPEN
- oar STOWED
- light brighter, warm glow upper right
generation:
  mode: image-to-video
  start_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs, matte bright yellow origami paper with crisp creases and a darker golden belly fold, State CREASED, sits in a small cream folded paper boat with pointed ends and crisp creases (lopsided) sliding in from the left toward the far shore, a thin sage stem topped with a round feathery white dandelion fluff with its fluff open above her. At right of centre: A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. big round soft-coral spiral shell with one darker coral swirl line and a white highlight dot Mo sits in profile facing screen left beside a patch of bare dark brown soil with grass blades behind, feelers drooping. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by clearing overcast with a pale warm glow from the upper right, a soft warm edge light on the right side of subjects, long soft cel shadow falling to the lower left, rain thinning, morning. Palette: leaf green #7DBB5A, shell coral #F2866B, paper yellow #FFC93C. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A wide shot at water level, eye-level, 35 mm flat lens, everything sharp, soft watercolor background wash. tiny bright yellow origami frog, wide triangular head, two big round black eyes, crisp crease lines, long Z-folded back legs, matte bright yellow origami paper with crisp creases and a darker golden belly fold, State CREASED, sits in a small cream folded paper boat with pointed ends and crisp creases (lopsided) stopped on the far-shore bank at left-centre, a thin sage stem topped with a round feathery white dandelion fluff with its fluff open above her, happy. At right of centre: A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. big round soft-coral spiral shell with one darker coral swirl line and a white highlight dot Mo sits in profile facing screen left beside a patch of bare dark brown soil with grass blades behind, both feelers upright, small smile. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by clearing overcast with a pale warm glow from the upper right, a soft warm edge light on the right side of subjects, long soft cel shadow falling to the lower left, rain thinning, morning. Palette: leaf green #7DBB5A, shell coral #F2866B, paper yellow #FFC93C. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.8 s: the boat slides in from the left. 0.8-1.1 s: it bumps the bank, squashes and rebounds. 1.1-1.5 s: hold. 1.5-2.2 s: Mo''s feelers rise slowly until upright. A faint warm glow brightens at the upper right.'
  clip_length_s: 5
  risks:
  - Mo's feelers must stay two thin lines with dot eyes
  - generate Mo's feeler lift as a separate 2 s clip if needed
```

###### SC05-SH020

```yaml
record: shot
id: SC05-SH020
scene: SC05
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC05_direction@1
- SC05_animation@2
- SC05_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: 'Pip offers the seed and Mo takes it: the want is met'
screenplay_ref: SC05, action line 2 (first part)
duration_s: 3.0
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: left of centre, standing on the far shore
  facing: profile, facing screen right
  action: steps out and holds the open-fluff seed toward Mo
  expression_start: hopeful smile
  expression_end: big grin, empty hands
  eyeline: to Mo
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: right of centre
  facing: profile, facing screen left
  action: reaches out and takes the stem in her feelers, head tilts
  expression_start: feelers up, curious
  expression_end: holding the seed, head tilted, happy
  eyeline: to Pip then the seed
props:
- id: PR-SEED
  state: PR-SEED:OPEN
  position: between them, then in Mo's feelers
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: beached at far left
location:
  id: LOC-PUDDLE
  area: far shore
  time_of_day: morning
  weather: rain thinning, pale warm glow upper right
frame:
  foreground: wet bank
  midground: Pip and Mo facing each other
  background: grass blades, pale warm glow upper right
  composition: 'two-shot: Pip left, Mo right, seed between'
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
screen_direction: Pip left facing right, Mo right facing left; axis Pip-Mo
start_state: Pip holds the open-fluff seed out toward Mo, a gap between them
end_state: Mo holds the seed's stem in her feelers; Pip's hands are empty
action_timeline:
- '0.0-0.8 s: Pip steps off the boat'
- '0.8-1.2 s: offers the seed'
- '1.2-1.8 s: Mo''s feelers reach and curl around the stem'
- '1.8-2.5 s: Mo takes it'
- '2.5-3.0 s: hold'
dialogue: []
sound: a soft happy squeak from Pip and a low hum from Mo
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC05-SH010
transition_out: cut to SC05-SH030
continuity:
- seed OPEN, now in Mo's feelers
- Pip CREASED
- oar STOWED in the boat
generation:
  mode: image-to-video
  start_frame: 'A medium two-shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. matte bright yellow origami paper with crisp creases and a darker golden belly fold State CREASED. Pip stands on the far shore left of centre in profile facing screen right, both hands holding out a thin sage stem topped with a round feathery white dandelion fluff whose fluff is open, hopeful smile. small tan snail with a big round soft-coral spiral shell and two thin feelers with round dot eyes, big round soft-coral spiral shell with one darker coral swirl line and a white highlight dot, sits at right of centre in profile facing screen left, feelers upright, a small gap between them. A small cream folded paper boat with pointed ends and crisp creases is beached at far left. Bare dark soil and grass blades behind. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by clearing overcast with a pale warm glow from the upper right, a soft warm edge light on the right side of subjects, long soft cel shadow falling to the lower left, rain thinning, morning. Palette: leaf green #7DBB5A, shell coral #F2866B, paper yellow #FFC93C. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A medium two-shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. matte bright yellow origami paper with crisp creases and a darker golden belly fold State CREASED. Pip stands on the far shore left of centre in profile facing screen right, empty open hands, big grin. small tan snail with a big round soft-coral spiral shell and two thin feelers with round dot eyes, big round soft-coral spiral shell with one darker coral swirl line and a white highlight dot, sits at right of centre in profile facing screen left, her feelers curled around the stem of a thin sage stem topped with a round feathery white dandelion fluff with its fluff open above her, head tilted, happy. A small cream folded paper boat with pointed ends and crisp creases is beached at far left. Bare dark soil and grass blades behind. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by clearing overcast with a pale warm glow from the upper right, a soft warm edge light on the right side of subjects, long soft cel shadow falling to the lower left, rain thinning, morning. Palette: leaf green #7DBB5A, shell coral #F2866B, paper yellow #FFC93C. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.8 s: Pip steps off the boat. 0.8-1.2 s: she holds the seed out to Mo. 1.2-1.8 s: Mo''s feelers reach and curl around the stem. 1.8-2.5 s: Mo takes the seed and tilts her head. 2.5-3 s: hold. A warm glow at the upper right.'
  clip_length_s: 5
  risks:
  - 'contact between two characters: end frame shows the seed already in Mo''s feelers'
  - prefer first-last-frame if supported
```

###### SC05-SH030

```yaml
record: shot
id: SC05-SH030
scene: SC05
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC05_direction@1
- SC05_animation@2
- SC05_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: Mo plants the seed and the fluff folds shut
screenplay_ref: SC05, action line 2 (second part)
duration_s: 2.5
characters:
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: right of centre
  facing: profile, facing screen left
  action: lowers the seed to the soil and pushes the stem in
  expression_start: happy
  expression_end: feelers up, content
  eyeline: down at the soil
props:
- id: PR-SEED
  state: PR-SEED:OPEN
  position: in Mo's feelers, then planted PLANTED
location:
  id: LOC-PUDDLE
  area: far shore, soil patch
  time_of_day: morning
  weather: rain thinning, pale warm glow upper right
frame:
  foreground: wet bank
  midground: Mo and the soil patch
  background: grass blades, warm glow
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
screen_direction: Mo faces screen left toward the soil
start_state: Mo holds the open-fluff seed beside the bare soil
end_state: the seed stands planted in the soil, its fluff folded shut into a ball, Mo's feelers up beside it
action_timeline:
- '0.0-0.8 s: Mo turns toward the soil'
- '0.8-1.3 s: lowers the seed'
- '1.3-2.0 s: pushes the stem in, a small puff of soil; fluff folds shut'
- '2.0-2.5 s: hold'
dialogue: []
sound: a soft thump of soil, a poof as the fluff folds
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC05-SH020
transition_out: cut to SC05-SH040
continuity:
- PR-SEED OPEN → PLANTED, fluff shut
generation:
  mode: image-to-video
  start_frame: 'A medium shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. big round soft-coral spiral shell with one darker coral swirl line and a white highlight dot Mo sits right of centre in profile facing screen left holding the thin sage stem topped with a round feathery white dandelion fluff (its fluff open) in her feelers just above a patch of bare dark brown soil at the centre, grass blades behind. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by clearing overcast with a pale warm glow from the upper right, a soft warm edge light on the right side of subjects, long soft cel shadow falling to the lower left, rain thinning, morning. Palette: leaf green #7DBB5A, shell coral #F2866B, paper yellow #FFC93C. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A medium shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A small snail with a soft smooth warm-tan body #D9B88F, a low rounded oval shape ending in a short blunt tail, a large round spiral shell on its back in soft coral #F2866B with a darker coral swirl line, two long thin feelers topped with small round black dot eyes, a small curved smile, thin dark-teal outline. big round soft-coral spiral shell with one darker coral swirl line and a white highlight dot Mo sits right of centre in profile facing screen left, both feelers upright. At the centre a dandelion seed stands planted upright in the patch of bare dark brown soil, its stem pushed in and its white fluff folded shut into a round ball; a tiny puff of soil beside it. Grass blades behind. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by clearing overcast with a pale warm glow from the upper right, a soft warm edge light on the right side of subjects, long soft cel shadow falling to the lower left, rain thinning, morning. Palette: leaf green #7DBB5A, shell coral #F2866B, paper yellow #FFC93C. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.8 s: Mo turns toward the soil. 0.8-1.3 s: she lowers the seed. 1.3-2 s: she pushes the stem into the soil in a small puff and the fluff folds shut. 2-2.5 s: hold with her feelers up.'
  clip_length_s: 5
  risks:
  - 'fluff closing back to a ball: keep it simple'
```

###### SC05-SH040

```yaml
record: shot
id: SC05-SH040
scene: SC05
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC05_direction@1
- SC05_animation@2
- SC05_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: 'The last drop lands and a sprout pops up: the nuisance becomes the helper'
screenplay_ref: SC05, action line 3
duration_s: 2.0
characters:
- id: CH-DROP
  costume: CO-DROP-01
  costume_state: FALLING
  position: top centre, then landing on the soil beside the seed
  facing: no face
  action: falls and lands on the soil beside the planted seed
  expression_start: n/a (faceless)
  expression_end: n/a (faceless), soaked into the soil
  eyeline: n/a
props:
- id: PR-SEED
  state: PR-SEED:PLANTED
  position: upright in the soil at centre
- id: PR-SPROUT
  state: PR-SPROUT:HIDDEN
  position: pops up beside the seed (becomes PR-SPROUT:SPROUT)
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
start_state: the planted seed with a closed fluff in bare soil, no sprout
end_state: a bright green sprout with two round leaves stands beside the seed
action_timeline:
- '0.0-0.5 s: hold'
- '0.5-0.85 s: the drop falls in'
- '0.85-1.15 s: PLIP on the soil'
- '1.15-1.65 s: the sprout pops up and overshoots'
- '1.65-2.0 s: settle, hold'
dialogue: []
sound: 'a plip and a boing (screenplay: boing)'
music: none specified yet (music plan is stage 10)
vfx: 'pending VFX plan (stage 10): director flagged the sprout pop as possibly composited'
transition_in: cut from SC05-SH030
transition_out: cut to SC05-SH050
continuity:
- PR-SPROUT HIDDEN → SPROUT
- seed PLANTED
generation:
  mode: image-to-video
  start_frame: 'A close-up insert from slightly above, looking down about 30 degrees, 85 mm flat lens, soft watercolor background wash. A patch of bare dark brown soil at the centre with a dandelion seed standing planted in it, its white fluff folded shut into a round ball. At the top centre: one bright aqua glossy teardrop with a white highlight, plain and smooth, falling. No sprout yet. Lit by clearing overcast with a pale warm glow from the upper right. Palette: soil brown #6B4A3A, leaf green #7DBB5A, raindrop aqua #5FD0E8. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.. Lit by clearing overcast with a pale warm glow from the upper right, a soft warm edge light on the right side of subjects, long soft cel shadow falling to the lower left, rain thinning, morning. Palette: leaf green #7DBB5A, shell coral #F2866B, paper yellow #FFC93C. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A close-up insert from slightly above, looking down about 30 degrees, 85 mm flat lens, soft watercolor background wash. A patch of bare dark brown soil at the centre, wet where a drop landed, with a dandelion seed standing planted in it, its white fluff folded shut into a round ball, and beside it A tiny bright leaf-green sprout with a short thin stem and two round smooth leaves, flat cel color with one darker green shade tone and a thin dark-teal outline. It stands centre-right. Lit by clearing overcast with a pale warm glow from the upper right. Palette: soil brown #6B4A3A, leaf green #7DBB5A, raindrop aqua #5FD0E8. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.. Lit by clearing overcast with a pale warm glow from the upper right, a soft warm edge light on the right side of subjects, long soft cel shadow falling to the lower left, rain thinning, morning. Palette: leaf green #7DBB5A, shell coral #F2866B, paper yellow #FFC93C. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.5 s: hold on the planted seed. 0.5-0.85 s: the aqua drop falls in from the top. 0.85-1.15 s: it lands on the soil beside the seed. 1.15-1.65 s: a green sprout pops up with a boing and overshoots. 1.65-2 s: settles.'
  clip_length_s: 5
  risks:
  - 'the sprout pop is small: fallback composite it in post'
```

###### SC05-SH050

```yaml
record: shot
id: SC05-SH050
scene: SC05
status: APPROVED
version: 1
depends_on:
- screenplay@1
- SC05_direction@1
- SC05_animation@2
- SC05_camera@1
- continuity@1
- style_bible@1
- CH-PIP@2
- LOC-PUDDLE@1
- props@1
purpose: Pip and Mo look at the sprout, then up; Pip waves at the sky
screenplay_ref: SC05, action line 4
duration_s: 2.0
characters:
- id: CH-PIP
  costume: CO-PIP-01
  costume_state: CREASED
  position: left of the sprout
  facing: three-quarter toward camera
  action: looks at the sprout, then up, then waves at the sky
  expression_start: happy, looking down
  expression_end: waving, looking up
  eyeline: down at the sprout, then up at the sky
- id: CH-MO
  costume: CO-MO-01
  costume_state: DRY
  position: right of the sprout
  facing: three-quarter toward camera
  action: looks at the sprout, then up, feelers waving
  expression_start: happy, looking down
  expression_end: feelers waving, looking up
  eyeline: down at the sprout, then up
props:
- id: PR-SPROUT
  state: PR-SPROUT:SPROUT
  position: centre between them
- id: PR-SEED
  state: PR-SEED:PLANTED
  position: beside the sprout
- id: PR-BOAT
  state: PR-BOAT:CREASED
  position: beached at far left
location:
  id: LOC-PUDDLE
  area: far shore, soil patch
  time_of_day: morning
  weather: rain thinning, pale warm glow upper right
frame:
  foreground: wet bank
  midground: Pip, sprout and Mo in a row
  background: grass blades, pale warm glow upper right
  composition: Pip left, sprout centre, Mo right
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
screen_direction: Pip left, Mo right, both facing camera and the sprout
start_state: Pip and Mo look down at the sprout
end_state: both look up at the sky; Pip's hand raised in a small wave, Mo's feelers waving
action_timeline:
- '0.0-0.4 s: hold'
- '0.4-1.1 s: both look up, eyes first'
- '1.1-1.7 s: Pip waves, Mo''s feelers wave'
- '1.7-2.0 s: hold into the fade-out'
dialogue: []
sound: 'soft rain and a gentle warm hum, ends on a plip (screenplay: closing image)'
music: none specified yet (music plan is stage 10)
vfx: none
transition_in: cut from SC05-SH040
transition_out: fade-out (end of film)
continuity:
- sprout SPROUT
- seed PLANTED
- Pip CREASED
- mirrors the opening of Pip alone on the shore
generation:
  mode: image-to-video
  start_frame: 'A medium wide shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. matte bright yellow origami paper with crisp creases and a darker golden belly fold State CREASED. Pip stands left of centre in three-quarter view toward camera, looking down at a tiny bright leaf-green sprout with a short stem and two round leaves at the centre beside a planted dandelion seed with its fluff shut, happy. small tan snail with a big round soft-coral spiral shell and two thin feelers with round dot eyes, big round soft-coral spiral shell with one darker coral swirl line and a white highlight dot, sits right of centre in three-quarter view looking down at the sprout, feelers upright. A small cream folded paper boat with pointed ends and crisp creases is beached at far left. Grass blades behind, a pale warm glow at the upper right. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by clearing overcast with a pale warm glow from the upper right, a soft warm edge light on the right side of subjects, long soft cel shadow falling to the lower left, rain thinning, morning. Palette: leaf green #7DBB5A, shell coral #F2866B, paper yellow #FFC93C. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  end_frame: 'A medium wide shot at water level, eye-level, 50 mm flat lens, soft watercolor background wash. A thumb-sized origami frog folded from one sheet of bright yellow paper: a wide flat triangular head with two large round black bead eyes set on top, a thin curved smile line, a short wedge-shaped body with crisp straight crease lines, two small folded front legs, two long Z-folded back legs, a darker golden-yellow shaded fold along the belly, thin dark-teal outline. matte bright yellow origami paper with crisp creases and a darker golden belly fold State CREASED. Pip stands left of centre in three-quarter view toward camera, face tilted up to the sky, one hand raised in a small wave. A tiny bright leaf-green sprout with a short stem and two round leaves stands at the centre beside a planted dandelion seed with its fluff shut. small tan snail with a big round soft-coral spiral shell and two thin feelers with round dot eyes, big round soft-coral spiral shell with one darker coral swirl line and a white highlight dot, sits right of centre in three-quarter view with her face tilted up, feelers waving. A small cream folded paper boat with pointed ends and crisp creases is beached at far left. Grass blades behind, a pale warm glow at the upper right. wide pale grey-blue puddle, green leaf and grey pebble on the left bank, bare brown soil patch and grass on the right. Lit by clearing overcast with a pale warm glow from the upper right, a soft warm edge light on the right side of subjects, long soft cel shadow falling to the lower left, rain thinning, morning. Palette: leaf green #7DBB5A, shell coral #F2866B, paper yellow #FFC93C. Hand-painted 2D cel animation: clean uniform dark-teal outlines, flat color fills with a single hard-edged shadow tone, soft painted watercolor background washes, subtle paper grain, even soft overcast light, gentle contrast, saturated friendly colors from a limited palette of pale grey-blue, warm yellow, leaf green and soft coral, simple shapes, storybook picture-book charm.'
  motion: 'Camera static. 0-0.4 s: both look down at the sprout. 0.4-1.1 s: both look up, eyes first. 1.1-1.7 s: Pip waves a small wave and Mo''s feelers wave. 1.7-2 s: hold. The fade-out is added in the edit, not generated.'
  clip_length_s: 5
  risks:
  - 'two characters moving together: keep movement slight'
```


## 7. Generation plan

No generation budget, so nothing has been generated and nothing is queued to run. This plan fixes the order for when the user decides to generate. Kling's version and features are unconfirmed, so every shot is planned as plain image-to-video from a start frame, with first-last-frame as an upgrade where marked.

## Order (each step feeds the next)
1. Style frames SF-01 (SC01) and SF-02 (SC05), Midjourney V7, using the STYLE lock. Approve the look first.
2. Character sheets: CH-PIP (turnaround + 7 expressions), CH-MO (turnaround), CH-DROP (falling / squash / splash poses). Midjourney V7 `--oref` with the approved front view for later views; check identity drift against the locks.
3. Location plates for LOC-PUDDLE: P1 wide, P2 far shore.
4. Prop sheets: PR-BOAT (NEW, FLAT, REFOLDED, CREASED), PR-SEED (CLOSED, OPEN, PLANTED), PR-SPROUT.
5. Keyframes, in shot order, from each shot's `start_frame` (and `end_frame` where the mode is first-last-frame). 34 stills for 17 shots.
6. Video: one image-to-video clip per shot (5 s assumed), 2-3 takes for the risky shots below.

## Mode per shot
| Shot | Mode | Upgrade or fallback |
|---|---|---|
| SC01-SH010, SC01-SH020, SC02-SH010 | image-to-video | none |
| SC02-SH020, SC03-SH010 | image-to-video | first-last-frame if supported; fallback: two clips (hit, sink) |
| SC02-SH030, SC03-SH020 | image-to-video | two clips each (surface + shake/refold, then pop + salute / shadow + ears) |
| SC04-SH010, SC04-SH020 | image-to-video | easy |
| SC04-SH030 | image-to-video | first-last-frame preferred (fluff ball to parasol) |
| SC04-SH040 | image-to-video | riskiest: 3 takes; fallback 1 s clips per bounce |
| SC04-SH050 | image-to-video | fallback: 180 degree turn then slide, or smear crossfade |
| SC05-SH010, SC05-SH030, SC05-SH050 | image-to-video | none |
| SC05-SH020 | image-to-video | first-last-frame preferred (seed hand-off) |
| SC05-SH040 | image-to-video | fallback: composite the sprout in post |

## Credits estimate
Unknown until the Kling plan is confirmed. Count: 17 shots x about 2 takes = about 34 video generations, plus about 34 keyframes and about 12 sheets/plates in Midjourney. Ask before starting any of it.

## Questions that change this plan
Kling version; image-to-video and first-last-frame availability; clip lengths (5 s assumed); native audio (not planned for); whether Midjourney V7 `--oref` is available on the user's plan.


## 8. Storyboard
Source: `09_storyboard/storyboard.md`

### Storyboard: Frog Ferry

Aspect ratio: 16:9 (STYLE). Level of finish: rough (text boards; no images generated, no budget). Sheet: `09_storyboard/storyboard.html`.
Sketch prompts are for Midjourney V7 rough boards; they keep identity to silhouettes and colour anchors (yellow frog, coral-shelled snail, aqua teardrop). Finished keyframes with pasted locks are made later from the shot records.


#### SC01 — EXT. PUDDLE - NEAR SHORE - DAY

```yaml
record: panel
id: SB-SC01-SH010-P1
shot: SC01-SH010
frame_moment: start
description: WS from water level. Pip stands upright in profile on the left bank beside the green leaf and grey pebble, eyes down at the water, closed-fluff seed under her left arm, boat at her feet, oar in her hand. Tiny Mo sits far right beside the bare soil, feelers drooping. Light rain dimples on the puddle.
composition: Pip on the left vertical third, lower third line; Mo on the right vertical third, lower third line; wide empty puddle between; grey sky fills the top third.
camera_notes: Camera static. No arrows; Pip's eyeline arrow points right across the puddle.
duration_s: 3.0
dialogue: none
sound: 'light rain patter on the puddle; a tiny hopeful squeak from Pip (screenplay cue: rain)'
transition_out: cut to SC01-SH020
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS from water level. Pip stands upright in profile on the left bank beside the green leaf and grey pebble, eyes down at the water, closed-fluff seed under her left arm, boat at her feet, oar in her hand. Tiny Mo sits far right beside the bare soil, feelers drooping. Light rain dimples on the puddle.
image: ''
```

```yaml
record: panel
id: SB-SC01-SH020-P1
shot: SC01-SH020
frame_moment: start
description: WS. Pip crouched at the left-centre water's edge in profile facing right, oar in hand, seed under her arm, the cream boat afloat beside her. Leaf and pebble lower left.
composition: Pip on the left vertical third; boat on the left third line; water open to the right.
camera_notes: 'Camera static. Thin arrow: Pip hops up and right into the boat.'
duration_s: 1.5
dialogue: none
sound: 'small splash and paper crinkle as the boat lands; paddle dips (screenplay: paddle)'
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Pip crouched at the left-centre water's edge in profile facing right, oar in hand, seed under her arm, the cream boat afloat beside her. Leaf and pebble lower left.
image: ''
```

```yaml
record: panel
id: SB-SC01-SH020-P2
shot: SC01-SH020
frame_moment: end
description: WS. Pip seated in the cream boat a quarter of the way into the puddle, oar dipping, chin up, determined smile; ripple rings behind the boat.
composition: Boat centre-left, on the lower third line; open water ahead on the right.
camera_notes: 'Camera static. Thin arrow: boat drifts right.'
duration_s: 1.5
dialogue: none
sound: 'small splash and paper crinkle as the boat lands; paddle dips (screenplay: paddle)'
transition_out: cut to SC02-SH010
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Pip seated in the cream boat a quarter of the way into the puddle, oar dipping, chin up, determined smile; ripple rings behind the boat.
image: ''
```


#### SC02 — EXT. PUDDLE - MID-WATER - DAY

```yaml
record: panel
id: SB-SC02-SH010-P1
shot: SC02-SH010
frame_moment: start
description: WS mid-water. Boat left of centre, Pip seated paddling, seed under her arm; ripple rings ahead of the bow; empty grey sky above.
composition: Boat on the left vertical third, lower third line; empty sky upper two thirds.
camera_notes: 'Camera static. Thin arrow: boat glides right to centre.'
duration_s: 1.5
dialogue: none
sound: 'soft paddle dips, rain patter (screenplay: boat glides)'
transition_out: cut to SC02-SH020
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS mid-water. Boat left of centre, Pip seated paddling, seed under her arm; ripple rings ahead of the bow; empty grey sky above.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH020-P1
shot: SC02-SH020
frame_moment: start
description: WS. The aqua drop, stretched tall, hangs at the top centre directly above the intact boat with Pip seated in it; ripple rings below.
composition: Drop on the centre vertical line in the top third; boat on the centre in the lower third.
camera_notes: 'Camera static. Thin arrow: drop falls straight down onto the boat''s middle.'
duration_s: 1.0
dialogue: none
sound: PLIP on contact, then a bloop as the boat sinks (screenplay cues)
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The aqua drop, stretched tall, hangs at the top centre directly above the intact boat with Pip seated in it; ripple rings below.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH020-P2
shot: SC02-SH020
frame_moment: end
description: WS. Empty mid-water with wide ripple rings and three small bubbles; a faint cream shape under the surface; sky empty.
composition: Ripple rings centred on the lower third line, centre.
camera_notes: 'Camera static. Thin arrows: ripples spread outward.'
duration_s: 1.0
dialogue: none
sound: PLIP on contact, then a bloop as the boat sinks (screenplay cues)
transition_out: cut on the sink to SC02-SH030
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Empty mid-water with wide ripple rings and three small bubbles; a faint cream shape under the surface; sky empty.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH030-P1
shot: SC02-SH030
frame_moment: start
description: MS. Pip's soggy head and shoulders break the surface at the centre, limp mustard, flat ears, wide eyes, both arms holding the closed-fluff seed high above her head; a flat cream shape floats under her.
composition: Pip on the centre vertical line; seed in the top third; water line on the lower third.
camera_notes: 'Camera static. Thin arrow: seed held up; droplets fly off Pip.'
duration_s: 1.75
dialogue: none
sound: water drips, paper crinkle and a pop as the boat refolds, a tiny proud squeak
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip's soggy head and shoulders break the surface at the centre, limp mustard, flat ears, wide eyes, both arms holding the closed-fluff seed high above her head; a flat cream shape floats under her.
image: ''
```

```yaml
record: panel
id: SB-SC02-SH030-P2
shot: SC02-SH030
frame_moment: end
description: MS. Pip seated in the repopped cream boat, bright yellow again, right hand raised in a salute to the sky, proud smile, seed under her left arm.
composition: Pip on the centre vertical line; salute hand on the upper third line.
camera_notes: 'Camera static. Thin arrow: hand up to a salute.'
duration_s: 1.75
dialogue: none
sound: water drips, paper crinkle and a pop as the boat refolds, a tiny proud squeak
transition_out: cut to SC03-SH010
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip seated in the repopped cream boat, bright yellow again, right hand raised in a salute to the sky, proud smile, seed under her left arm.
image: ''
```


#### SC03 — EXT. PUDDLE - MID-WATER - DAY

```yaml
record: panel
id: SB-SC03-SH010-P1
shot: SC03-SH010
frame_moment: start
description: WS, same framing as SC02-SH020 under a slightly darker sky. The drop hangs at the top centre above the refolded boat; Pip glances up with a relaxed smile.
composition: Drop top centre; boat centre on the lower third line.
camera_notes: 'Camera static. Thin arrow: drop falls onto the same spot, boat sinks.'
duration_s: 2.5
dialogue: none
sound: PLIP, a quicker bloop (screenplay cue)
transition_out: cut to SC03-SH020
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS, same framing as SC02-SH020 under a slightly darker sky. The drop hangs at the top centre above the refolded boat; Pip glances up with a relaxed smile.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH020-P1
shot: SC03-SH020
frame_moment: start
description: MS. Pip's soggy scowling head breaks the surface at centre-left, brows down, puffed cheeks, seed raised in one arm; flat cream shape floating under her.
composition: Pip on the left vertical third; water line on the lower third.
camera_notes: 'Camera static. Thin arrow: Pip rises.'
duration_s: 1.75
dialogue: none
sound: 'quick crinkle and pop, a low worried hum (screenplay: ears go flat)'
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip's soggy scowling head breaks the surface at centre-left, brows down, puffed cheeks, seed raised in one arm; flat cream shape floating under her.
image: ''
```

```yaml
record: panel
id: SB-SC03-SH020-P2
shot: SC03-SH020
frame_moment: end
description: MS. Pip seated in the lopsided creased boat at centre-left, ears flat, worried mouth line, seed under her arm; a small round soft grey shadow on the water at the lower right.
composition: Pip on the left vertical third; shadow at the lower right intersection of thirds.
camera_notes: 'Camera static. Thin arrow: Pip''s eyes slide to the shadow.'
duration_s: 1.75
dialogue: none
sound: 'quick crinkle and pop, a low worried hum (screenplay: ears go flat)'
transition_out: cut to SC04-SH010
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip seated in the lopsided creased boat at centre-left, ears flat, worried mouth line, seed under her arm; a small round soft grey shadow on the water at the lower right.
image: ''
```


#### SC04 — EXT. PUDDLE - MID-WATER - DAY

```yaml
record: panel
id: SB-SC04-SH010-P1
shot: SC04-SH010
frame_moment: start
description: MCU. Pip's head level, three-quarter facing right, round worried eyes, ears flat, small worried mouth. Soft grey-blue wash behind.
composition: Pip's eyes on the upper third line, head on the centre vertical line.
camera_notes: 'Camera static. Thin arrow: eyeline rises to the upper right.'
duration_s: 1.0
dialogue: none
sound: a quiet pause; one rain plip nearby
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MCU. Pip's head level, three-quarter facing right, round worried eyes, ears flat, small worried mouth. Soft grey-blue wash behind.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH010-P2
shot: SC04-SH010
frame_moment: end
description: MCU. Same framing; chin up, eyes narrowed in a determined squint, ears pricked up, firm mouth.
composition: Pip's eyes on the upper third line.
camera_notes: Camera static. No arrows.
duration_s: 1.0
dialogue: none
sound: a quiet pause; one rain plip nearby
transition_out: cut to SC04-SH020
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MCU. Same framing; chin up, eyes narrowed in a determined squint, ears pricked up, firm mouth.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH020-P1
shot: SC04-SH020
frame_moment: start
description: POV looking straight up. Flat grey-blue sky; one tiny aqua drop at the top centre.
composition: Drop on the centre vertical line, upper third line; the rest sky.
camera_notes: 'Camera static. Thin arrow: drop falls toward camera, growing.'
duration_s: 0.75
dialogue: none
sound: 'a rising whistle-like rain hiss (screenplay: drop getting bigger)'
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; POV looking straight up. Flat grey-blue sky; one tiny aqua drop at the top centre.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH020-P2
shot: SC04-SH020
frame_moment: end
description: POV looking up. The same drop, now large and glossy, stretched slightly tall, filling about a third of the frame height at the centre.
composition: Drop centred, spanning the middle third.
camera_notes: Camera static.
duration_s: 0.75
dialogue: none
sound: 'a rising whistle-like rain hiss (screenplay: drop getting bigger)'
transition_out: cut to SC04-SH030
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; POV looking up. The same drop, now large and glossy, stretched slightly tall, filling about a third of the frame height at the centre.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH030-P1
shot: SC04-SH030
frame_moment: start
description: MS. Pip seated in the lopsided boat at lower centre, both arms raised, holding the seed with its fluff still a closed ball above her head; oar on the boat floor; determined squint.
composition: Pip on the centre vertical line; seed in the upper third.
camera_notes: 'Camera static. Thin arrow: seed rises.'
duration_s: 0.75
dialogue: none
sound: 'a soft poof as the fluff opens (screenplay: pops open)'
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Pip seated in the lopsided boat at lower centre, both arms raised, holding the seed with its fluff still a closed ball above her head; oar on the boat floor; determined squint.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH030-P2
shot: SC04-SH030
frame_moment: end
description: MS. The fluff is fully open and spread wide like a parasol above Pip, the brightest white in the frame; she grips the stem in both hands, confident grin.
composition: Fluff centred in the upper third, Pip lower centre.
camera_notes: 'Camera static. Thin arrows: fluff bursts outward.'
duration_s: 0.75
dialogue: none
sound: 'a soft poof as the fluff opens (screenplay: pops open)'
transition_out: cut to SC04-SH040
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. The fluff is fully open and spread wide like a parasol above Pip, the brightest white in the frame; she grips the stem in both hands, confident grin.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH040-P1
shot: SC04-SH040
frame_moment: start
description: WS. Pip at centre-left in the creased boat under the open fluff; the aqua drop hangs directly above the fluff, high in the frame.
composition: Fluff on the left-of-centre vertical line, upper third; drop above it.
camera_notes: 'Camera static. Thin arrow: drop falls onto the fluff.'
duration_s: 1.0
dialogue: none
sound: 'a boing on each bounce, then a splash (screenplay cue: bounces, splash)'
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. Pip at centre-left in the creased boat under the open fluff; the aqua drop hangs directly above the fluff, high in the frame.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH040-P2
shot: SC04-SH040
frame_moment: end
description: WS. A splash crown of small aqua droplets rises from the water at the lower right beside the boat, wide ripple rings; the fluff still open above Pip; sky empty.
composition: Splash at the lower right intersection of thirds; boat at centre-left.
camera_notes: 'Camera static. Thin arrows: drop bounces up and down twice (vertical), then splashes right.'
duration_s: 1.0
dialogue: none
sound: 'a boing on each bounce, then a splash (screenplay cue: bounces, splash)'
transition_out: cut to SC04-SH050
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. A splash crown of small aqua droplets rises from the water at the lower right beside the boat, wide ripple rings; the fluff still open above Pip; sky empty.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH050-P1
shot: SC04-SH050
frame_moment: start
description: WS. The boat at the centre with Pip under the open fluff, relieved smile; splash ripples at the left.
composition: Boat on the centre vertical line, lower third line.
camera_notes: 'Camera static. Thin arrow: circular arrow, the boat spins once.'
duration_s: 1.0
dialogue: none
sound: 'a whoosh of water and a happy squeak (screenplay: speeding forward)'
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat at the centre with Pip under the open fluff, relieved smile; splash ripples at the left.
image: ''
```

```yaml
record: panel
id: SB-SC04-SH050-P2
shot: SC04-SH050
frame_moment: end
description: WS. The boat at the right third of the frame heading right with a small V wake, Pip grinning under the open fluff.
composition: Boat on the right vertical third, lower third line.
camera_notes: 'Camera static. Thin arrow: boat speeds right and nearly exits.'
duration_s: 1.0
dialogue: none
sound: 'a whoosh of water and a happy squeak (screenplay: speeding forward)'
transition_out: cut to SC05-SH010
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat at the right third of the frame heading right with a small V wake, Pip grinning under the open fluff.
image: ''
```


#### SC05 — EXT. PUDDLE - FAR SHORE - DAY

```yaml
record: panel
id: SB-SC05-SH010-P1
shot: SC05-SH010
frame_moment: start
description: WS of the far shore. The creased boat slides in from the left toward the bank; Mo sits right of centre in profile facing left beside the bare soil patch, feelers drooping; grass behind; a pale warm glow at the upper right.
composition: Boat on the left vertical third; Mo on the right vertical third, lower third line.
camera_notes: 'Camera static. Thin arrow: boat slides right to the bank.'
duration_s: 1.25
dialogue: none
sound: 'soft bump of paper on the bank (screenplay: soft bump), a happy hum from Mo'
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS of the far shore. The creased boat slides in from the left toward the bank; Mo sits right of centre in profile facing left beside the bare soil patch, feelers drooping; grass behind; a pale warm glow at the upper right.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH010-P2
shot: SC05-SH010
frame_moment: end
description: WS. The boat stopped on the bank at left-centre with Pip seated holding the open fluff; Mo's two feelers upright, small smile.
composition: Boat left third; Mo right third.
camera_notes: 'Camera static. Thin arrows: Mo''s feelers rise.'
duration_s: 1.25
dialogue: none
sound: 'soft bump of paper on the bank (screenplay: soft bump), a happy hum from Mo'
transition_out: cut to SC05-SH020
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; WS. The boat stopped on the bank at left-centre with Pip seated holding the open fluff; Mo's two feelers upright, small smile.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH020-P1
shot: SC05-SH020
frame_moment: start
description: Two-shot MS. Pip left of centre on the far shore in profile facing right, holding the open-fluff seed out with both hands; Mo right of centre in profile facing left, feelers up; a small gap between them; boat beached at far left.
composition: Pip on the left vertical third; Mo on the right vertical third; seed on the centre vertical line.
camera_notes: 'Camera static. Thin arrow: seed held out toward Mo.'
duration_s: 1.5
dialogue: none
sound: a soft happy squeak from Pip and a low hum from Mo
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; Two-shot MS. Pip left of centre on the far shore in profile facing right, holding the open-fluff seed out with both hands; Mo right of centre in profile facing left, feelers up; a small gap between them; boat beached at far left.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH020-P2
shot: SC05-SH020
frame_moment: end
description: Two-shot MS. Mo holds the seed's stem in her curled feelers, head tilted, happy; Pip's hands are empty and open, big grin.
composition: Same positions; seed at the centre of Mo's side.
camera_notes: 'Camera static. Thin arrow: Mo''s feelers curl around the stem.'
duration_s: 1.5
dialogue: none
sound: a soft happy squeak from Pip and a low hum from Mo
transition_out: cut to SC05-SH030
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; Two-shot MS. Mo holds the seed's stem in her curled feelers, head tilted, happy; Pip's hands are empty and open, big grin.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH030-P1
shot: SC05-SH030
frame_moment: start
description: MS. Mo right of centre in profile facing left, holding the open-fluff seed in her feelers just above the bare soil patch at the centre; grass behind.
composition: Mo on the right vertical third; soil on the centre vertical line.
camera_notes: 'Camera static. Thin arrow: seed lowers to the soil.'
duration_s: 1.25
dialogue: none
sound: a soft thump of soil, a poof as the fluff folds
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. Mo right of centre in profile facing left, holding the open-fluff seed in her feelers just above the bare soil patch at the centre; grass behind.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH030-P2
shot: SC05-SH030
frame_moment: end
description: MS. The seed stands planted upright in the soil, fluff folded shut into a ball; a small puff of soil; Mo's feelers upright beside it.
composition: Seed on the centre vertical line; Mo on the right third.
camera_notes: 'Camera static. Thin arrows: fluff folds shut.'
duration_s: 1.25
dialogue: none
sound: a soft thump of soil, a poof as the fluff folds
transition_out: cut to SC05-SH040
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MS. The seed stands planted upright in the soil, fluff folded shut into a ball; a small puff of soil; Mo's feelers upright beside it.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH040-P1
shot: SC05-SH040
frame_moment: start
description: INSERT, high angle about 30 degrees down. Bare dark soil at the centre with the planted seed (closed fluff); the aqua drop at the top centre, falling; no sprout yet.
composition: Seed on the centre-left vertical line; drop top centre; soil fills the lower two thirds.
camera_notes: 'Camera static. Thin arrow: drop falls beside the seed.'
duration_s: 1.0
dialogue: none
sound: 'a plip and a boing (screenplay: boing)'
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; INSERT, high angle about 30 degrees down. Bare dark soil at the centre with the planted seed (closed fluff); the aqua drop at the top centre, falling; no sprout yet.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH040-P2
shot: SC05-SH040
frame_moment: end
description: INSERT. The soil is wet where the drop landed; a bright green sprout with two round leaves stands centre-right beside the planted seed.
composition: Seed centre-left, sprout centre-right, on the lower third line.
camera_notes: 'Camera static. Thin arrow: sprout pops upward with an overshoot.'
duration_s: 1.0
dialogue: none
sound: 'a plip and a boing (screenplay: boing)'
transition_out: cut to SC05-SH050
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; INSERT. The soil is wet where the drop landed; a bright green sprout with two round leaves stands centre-right beside the planted seed.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH050-P1
shot: SC05-SH050
frame_moment: start
description: MWS. Pip left of centre and Mo right of centre, both in three-quarter view toward camera and looking down at the sprout at the centre; planted seed beside it; boat beached far left; warm glow upper right.
composition: Pip on the left vertical third; sprout on the centre vertical line; Mo on the right vertical third.
camera_notes: 'Camera static. Thin arrows: eyelines down to the sprout.'
duration_s: 1.0
dialogue: none
sound: 'soft rain and a gentle warm hum, ends on a plip (screenplay: closing image)'
transition_out: none (continues in the next panel of this shot)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MWS. Pip left of centre and Mo right of centre, both in three-quarter view toward camera and looking down at the sprout at the centre; planted seed beside it; boat beached far left; warm glow upper right.
image: ''
```

```yaml
record: panel
id: SB-SC05-SH050-P2
shot: SC05-SH050
frame_moment: end
description: MWS. Both face up to the sky; Pip's hand raised in a small wave, Mo's feelers waving; the sprout between them. The film fades out after this frame.
composition: Same positions; Pip's hand on the upper third line.
camera_notes: 'Camera static. Thin arrow: eyelines up; hand waves. FADE OUT after this frame.'
duration_s: 1.0
dialogue: none
sound: 'soft rain and a gentle warm hum, ends on a plip (screenplay: closing image)'
transition_out: fade-out (end of film)
sketch_prompt: rough greyscale storyboard sketch, pencil lines, simple tones, 2D cel animation staging, flat side-on view --ar 16:9 --v 7; MWS. Both face up to the sky; Pip's hand raised in a small wave, Mo's feelers waving; the sprout between them. The film fades out after this frame.
image: ''
```


#### Continuity check log
| Cut | Check | Result |
|---|---|---|
| SC01-SH010 → SH020 | axis, positions, props | PASS: Pip stays left of frame facing right; boat NEW; seed CLOSED; oar HELD. |
| SC01-SH020 → SC02-SH010 | travel direction | PASS: boat heads right, enters SC02 left of centre. |
| SC02-SH010 → SH020 | framing, boat position | PASS: boat moves from left of centre to centre; the drop path is above the boat. |
| SC02-SH020 → SH030 | state change | PASS: boat FLAT under water → Pip surfaces centre; Pip DRY → SOGGY. |
| SC02-SH030 → SC03-SH010 | boat/Pip state, light | PASS: REFOLDED boat, Pip DRY; sky one step darker (setup A → B). |
| SC03-SH010 → SH020 | state | PASS: boat FLAT → CREASED; Pip SOGGY → CREASED. |
| SC03-SH020 → SC04-SH010 | Pip state, ears | PASS: CREASED, ears flat in both; MCU starts with flat ears. |
| SC04-SH010 → SH020 | eyeline | PASS: Pip's upward eyeline cuts to the sky POV. |
| SC04-SH020 → SH030 | drop continuity | PASS: large drop → Pip lifts the seed (oar HELD → STOWED, lies on the boat floor). |
| SC04-SH030 → SH040 | fluff state | PASS: fluff OPEN in both; drop above. |
| SC04-SH040 → SH050 | boat position | PASS: boat centre-left → centre; splash at left in SH050 start. |
| SC04-SH050 → SC05-SH010 | direction, boat | PASS: boat exits right and arrives from the left on the far shore; PR-SEED OPEN; CREASED. |
| SC05-SH010 → SH020 | positions | PASS: boat left, Mo right; Pip steps out right; seed OPEN. |
| SC05-SH020 → SH030 | seed | PASS: seed in Mo's feelers, fluff open; she turns to the soil. |
| SC05-SH030 → SH040 | seed state | PASS: seed PLANTED, fluff shut; sprout HIDDEN. |
| SC05-SH040 → SH050 | sprout, light | PASS: sprout centre in both; seed PLANTED; glow upper right throughout. |

#### Conflicts raised
None. (SC05_animation@1 vs screenplay was already resolved as CR-002.)

#### Handoff
- Produced: storyboard@1 (31 panels: SC01 3, SC02 5, SC03 3, SC04 10, SC05 10; 17 shots, 14 with start and end panels)
- Conflicts raised: none
- Panels with approved images: none (no generation budget)
- Next: user approval → image-prompt-engineer (keyframes), film-editor (animatic/paper edit)


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

#### Story timeline
| Scene | Story day | Time of day | Elapsed since previous | Weather |
|---|---|---|---|---|
| SC01 | D1 | morning | start | light rain |
| SC02 | D1 | morning | continuous | light rain |
| SC03 | D1 | morning | continuous (seconds) | light rain, slightly heavier |
| SC04 | D1 | morning | continuous | light rain |
| SC05 | D1 | morning | continuous (about 10 s of crossing) | rain thinning, pale warm glow upper right |

#### State changes
| Item | From → to | Cause | Starts at shot |
|---|---|---|---|
| CH-PIP (CO-PIP-01) | DRY → SOGGY | first drop sinks the boat | SC02-SH020 |
| CH-PIP | SOGGY → DRY | she shakes off water | SC02-SH030 |
| CH-PIP | DRY → SOGGY | second drop | SC03-SH010 |
| CH-PIP | SOGGY → CREASED | quick refold leaves extra wrinkles (stays CREASED to the end) | SC03-SH020 |
| PR-BOAT | NEW → FLAT | drop 1 | SC02-SH020 |
| PR-BOAT | FLAT → REFOLDED | Pip refolds | SC02-SH030 |
| PR-BOAT | REFOLDED → FLAT | drop 2 | SC03-SH010 |
| PR-BOAT | FLAT → CREASED | second refold | SC03-SH020 |
| PR-SEED | CLOSED → OPEN | Pip pops the fluff | SC04-SH030 |
| PR-SEED | OPEN → PLANTED (fluff shut) | Mo plants it | SC05-SH030 |
| PR-OAR | HELD → STOWED | Pip needs both hands | SC04-SH030 |
| PR-SPROUT | HIDDEN → SPROUT | last drop | SC05-SH040 |

#### Per-shot states (start → end)
| Shot | Pip | Boat | Seed | Oar | Mo / other |
|---|---|---|---|---|---|
| SC01-SH010 | DRY → DRY | NEW, on the bank | CLOSED, under left arm | HELD | Mo feelers drooping |
| SC01-SH020 | DRY → DRY | NEW, afloat | CLOSED | HELD | Mo off-screen right (tiny) |
| SC02-SH010 | DRY → DRY | NEW | CLOSED | HELD | — |
| SC02-SH020 | DRY → SOGGY | NEW → FLAT | CLOSED | HELD | — |
| SC02-SH030 | SOGGY → DRY | FLAT → REFOLDED | CLOSED, held high then under arm | HELD | — |
| SC03-SH010 | DRY → SOGGY | REFOLDED → FLAT | CLOSED | HELD | — |
| SC03-SH020 | SOGGY → CREASED | FLAT → CREASED | CLOSED | HELD | grey shadow lower right at the end |
| SC04-SH010 | CREASED | CREASED | CLOSED | HELD | — |
| SC04-SH020 | n/a (POV, sky) | n/a | n/a | n/a | drop only |
| SC04-SH030 | CREASED | CREASED | CLOSED → OPEN | HELD → STOWED | — |
| SC04-SH040 | CREASED | CREASED | OPEN | STOWED | — |
| SC04-SH050 | CREASED | CREASED | OPEN | STOWED | — |
| SC05-SH010 | CREASED | CREASED, beached | OPEN | STOWED | Mo feelers droop → up |
| SC05-SH020 | CREASED | CREASED | OPEN (offered), then in Mo's feelers | STOWED | Mo feelers up |
| SC05-SH030 | CREASED | CREASED | OPEN → PLANTED (fluff shut) | STOWED | — |
| SC05-SH040 | CREASED | — | PLANTED | — | sprout HIDDEN → SPROUT |
| SC05-SH050 | CREASED | CREASED | PLANTED | STOWED | feelers waving |

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
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "Pip's hand"}
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
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: SOGGY, hair: "none", injuries: "none", props_carried: "PR-SEED:CLOSED; PR-OAR:HELD", end_position: "seated in the refolded boat at centre-right, saluting; state DRY after shaking"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:REFOLDED", location: "afloat, centre-right"}
  - {id: PR-SEED, state: "PR-SEED:CLOSED", location: "under Pip's arm"}
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "Pip's hand"}
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
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:CLOSED; PR-OAR:HELD", end_position: "seated in the lopsided boat, ears flat"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:CREASED", location: "afloat, centre-right"}
  - {id: PR-SEED, state: "PR-SEED:CLOSED", location: "under Pip's arm"}
  - {id: PR-OAR, state: "PR-OAR:HELD", location: "Pip's hand"}
time_of_day: morning
weather: "light rain, slightly heavier"
carry_over: "from SC02: boat REFOLDED, Pip DRY"
```

```yaml
record: continuity
id: CONT-SC04
scene: SC04
axis: "left to right travel; camera on the south bank"
screen_direction: "boat exits screen right at speed"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:OPEN overhead in both hands; PR-OAR:STOWED lies in the boat", end_position: "seated in the boat at the right third, grinning"}
prop_states:
  - {id: PR-BOAT, state: "PR-BOAT:CREASED", location: "afloat, moving right"}
  - {id: PR-SEED, state: "PR-SEED:OPEN", location: "overhead in Pip's hands"}
  - {id: PR-OAR, state: "PR-OAR:STOWED", location: "across the boat floor"}
time_of_day: morning
weather: "light rain; one large hero drop"
carry_over: "from SC03: boat CREASED, Pip CREASED, ears flat"
```

```yaml
record: continuity
id: CONT-SC05
scene: SC05
axis: "Pip (left) to Mo (right) facing each other; camera on the south bank"
screen_direction: "boat arrives from the left; Pip steps out to the right; Pip left of the sprout, Mo right; both end looking up"
character_states:
  - {id: CH-PIP, costume: CO-PIP-01, costume_state: CREASED, hair: "none", injuries: "none", props_carried: "PR-SEED:OPEN offered to Mo, then empty hands", end_position: "on the far shore left of the sprout, waving at the sky"}
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
| SC01 sets the boat on the water, hops in, paddles | SC01-SH020 | |
| SC02 boat glides, ripple rings at the bow | SC02-SH010 | |
| SC02 drop lands on the boat, boat folds and sinks | SC02-SH020 | |
| SC02 Pip bobs up with the seed held high | SC02-SH030 | |
| SC02 shakes, refolds, boat pops, salutes, paddles on | SC02-SH030 | "paddles on" is carried into SC03-SH010 |
| SC03 rings widen, Pip glances up | SC03-SH010 | |
| SC03 second drop on the same spot, sinks faster | SC03-SH010 | |
| SC03 Pip surfaces, scowls, refolds lopsided | SC03-SH020 | |
| SC03 small round shadow, ears flat | SC03-SH020 | |
| SC04 Pip looks up, third drop above, growing | SC04-SH010, SC04-SH020 | |
| SC04 Pip squints, pops the fluff open | SC04-SH010, SC04-SH030 | |
| SC04 drop lands on the fluff, bounces, splash beside the boat | SC04-SH040 | |
| SC04 splash wave spins the boat, speeds forward, Pip grins | SC04-SH050 | |
| SC05 boat slides ashore, bump, Mo's feelers lift | SC05-SH010 | |
| SC05 Pip steps out, offers the seed; Mo takes it | SC05-SH020 | |
| SC05 Mo plants the stem; the fluff folds shut | SC05-SH030 | |
| SC05 last drop; sprout pops | SC05-SH040 | |
| SC05 Mo's feelers wave; both look at the sprout, then up; Pip waves; FADE OUT | SC05-SH050 | fade-out is an editing transition |

No dialogue lines in the film. 0 uncovered beats. 0 shots add story events.

#### Continuity report
| ID | Severity | Where | Issue | Sources | Owner | Status |
|---|---|---|---|---|---|---|
| CR-ISSUE-01 | MAJOR | SC05-SH020/SH030 | CONFLICT: SC05_animation@1 starts the hand-off with a *closed* seed, but PR-SEED stays OPEN from SC04-SH030 and the screenplay says the fluff folds shut only when Mo plants it (SC05 action 2). | screenplay@1 (SC05), props@1, SC04/SC05 shots vs SC05_animation@1 | animation-director | FIXED in SC05_animation@2 (seed OPEN in SH020 start pose, closes in SH030) |
| CR-ISSUE-02 | MINOR | SC02-SH030 end | SC02_animation@1 end pose says "bright yellow again"; CO-PIP-01 has no damp-recovered state, only DRY/SOGGY/CREASED. | CH-PIP@2 vs SC02_animation@1 | character-designer | OPEN, proposal: treat as DRY (shaken off) |
| CR-ISSUE-03 | MINOR | SC01-SH010 | scene card said Pip and Mo do not share a shot; direction puts tiny Mo in the wide. | scene_index@1 production_flags vs SC01_direction@1 | film-director | accepted: wide establishing is the point; Mo uses the short lock |
| CR-ISSUE-04 | MINOR | SC02-SC04 | PR-OAR: sunk boat and the oar are not described; assumed Pip keeps the oar throughout. | props@1 | production-designer | OPEN, ASSUMPTION |
| CR-ISSUE-05 | MINOR | SC04-SH030 | PR-OAR:STOWED begins at SH030 (props says from SC04). | props@1 | production-designer | accepted |

No BLOCKER. Axis: held everywhere (travel left to right, Pip left of Mo in SC05). SC05-SH040 is a high-angle insert on the soil: it does not cross the axis.

#### Handoff
- Produced: continuity@1 (REVIEW)
- BLOCKER 0 / MAJOR 1 (fixed) / MINOR 4
- Uncovered lines: none
- Next: production-manager (compile shot records)


## 12. Open issues

| Where | Marker | Text |
|---|---|---|
| 00_brief.md:28 | ASSUMPTION | decided at stage 10 \| |
| 00_brief.md:43 | OPEN-QUESTION | Which Kling version and which modes does the user's plan support (image-to-video, first-last-frame, multi-reference, native audio, max clip length)? Plans must work with plain image-to-video until confirmed. |
| 00_brief.md:44 | OPEN-QUESTION | Confirm no-dialogue approach (ASSUMPTION). |
| 07_camera/continuity.md:179 | CONFLICT | SC05_animation@1 starts the hand-off with a *closed* seed, but PR-SEED stays OPEN from SC04-SH030 and the screenplay says the fluff folds shut only when Mo plants it (SC05 action 2). \| screenplay@1 (SC05), props@1, SC04/SC05 shots vs SC05_animation@1 \| animation-director \| FIXED in SC05_animation@2 (seed OPEN in SH020 start pose, closes in SH030) \| |
| 04_world/props.md:105 | ASSUMPTION | oar is stowed in SC04 (Pip needs both hands for the seed); boat color cream to stay distinct from Pip's yellow |
| 05_look/style_bible.md:80 | ASSUMPTION | style frames not generated (no generation budget); the Midjourney V7 look test is deferred to the user |
| 01_story/story.md:75 | ASSUMPTION | names Pip and Mo are working names |
| 03_characters/CH-DROP.md:77 | ASSUMPTION | the drop has no face |
| 03_characters/CH-PIP.md:105 | ASSUMPTION | Pip has no clothes; her "costume" is the paper itself. Soggy and creased states drive continuity. |
