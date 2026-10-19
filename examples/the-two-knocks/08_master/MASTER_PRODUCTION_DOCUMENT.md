---
artifact: master-production-document
id: master
version: 4
status: REVIEW
owner: production-manager
depends_on: [CH-AHMA@1, CH-LAN@1, CH-MACAQUE@1, LOC-BACK-ALLEY@1, LOC-NIGHT-MARKET@1, QC_preflight_20261019@1, SC01_camera@1, SC01_direction@1, SC01_shots@4, SC02_action@1, SC02_camera@1, SC02_direction@1, SC02_shots@3, SC03_camera@1, SC03_direction@1, SC03_shots@3, SC04_camera@1, SC04_direction@1, SC04_shots@4, brief@1, concepts@1, continuity@1, edit_plan@2, generation_plan@2, images@1, lineup@1, music@1, production-log@3, props@1, screenplay@1, sfx@1, story@1, storyboard@1, style_bible@1, vfx_plan@1, video@1, voice@1]
updated: 2026-10-19
---

# Master Production Document: The Two Knocks

> Assembled by `assemble_master.py`. Edit the source documents, not this file, then re-assemble.

## 0. Status dashboard

| Artifact | Version | Status | Owner | File |
|---|---|---|---|---|
| CH-AHMA | 1 | APPROVED | character-designer | 03_characters/CH-AHMA.md |
| CH-LAN | 1 | APPROVED | character-designer | 03_characters/CH-LAN.md |
| CH-MACAQUE | 1 | APPROVED | character-designer | 03_characters/CH-MACAQUE.md |
| LOC-BACK-ALLEY | 1 | APPROVED | production-designer | 04_world/LOC-BACK-ALLEY.md |
| LOC-NIGHT-MARKET | 1 | APPROVED | production-designer | 04_world/LOC-NIGHT-MARKET.md |
| QC_preflight_20261019 | 1 | REVIEW | quality-control | 14_qc/QC_preflight_2026-10-19.md |
| SC01_camera | 1 | APPROVED | cinematographer | 07_camera/SC01_camera.md |
| SC01_direction | 1 | APPROVED | film-director | 06_direction/SC01_direction.md |
| SC01_shots | 4 | REVIEW | production-manager | 08_master/shots/SC01.md |
| SC02_action | 1 | APPROVED | action-director | 06_direction/SC02_action.md |
| SC02_camera | 1 | APPROVED | cinematographer | 07_camera/SC02_camera.md |
| SC02_direction | 1 | APPROVED | film-director | 06_direction/SC02_direction.md |
| SC02_shots | 3 | REVIEW | production-manager | 08_master/shots/SC02.md |
| SC03_camera | 1 | APPROVED | cinematographer | 07_camera/SC03_camera.md |
| SC03_direction | 1 | APPROVED | film-director | 06_direction/SC03_direction.md |
| SC03_shots | 3 | REVIEW | production-manager | 08_master/shots/SC03.md |
| SC04_camera | 1 | APPROVED | cinematographer | 07_camera/SC04_camera.md |
| SC04_direction | 1 | APPROVED | film-director | 06_direction/SC04_direction.md |
| SC04_shots | 4 | REVIEW | production-manager | 08_master/shots/SC04.md |
| brief | 1 | APPROVED | production-manager | 00_brief.md |
| concepts | 1 | REVIEW | story-writer | 01_story/concepts.md |
| continuity | 1 | APPROVED | script-supervisor | 07_camera/continuity.md |
| edit_plan | 2 | APPROVED | film-editor | 13_edit/edit_plan.md |
| generation_plan | 2 | REVIEW | production-manager | 08_master/generation_plan.md |
| images | 1 | REVIEW | image-prompt-engineer | 10_prompts/images.md |
| lineup | 1 | APPROVED | character-designer | 03_characters/lineup.md |
| music | 1 | APPROVED | music-director | 11_sound/music.md |
| production-log | 3 | DRAFT | production-manager | PRODUCTION_LOG.md |
| props | 1 | APPROVED | production-designer | 04_world/props.md |
| screenplay | 1 | LOCKED | screenwriter | 02_screenplay/scene_index.md |
| sfx | 1 | APPROVED | sound-designer | 11_sound/sfx.md |
| story | 1 | APPROVED | story-writer | 01_story/story.md |
| storyboard | 1 | APPROVED | storyboard-artist | 09_storyboard/storyboard.md |
| style_bible | 1 | APPROVED | visual-style-designer | 05_look/style_bible.md |
| vfx_plan | 1 | APPROVED | vfx-supervisor | 12_vfx/vfx_plan.md |
| video | 1 | REVIEW | video-prompt-engineer | 10_prompts/video.md |
| voice | 1 | APPROVED | voice-director | 11_sound/voice.md |


Validator: **0 error(s), 0 warning(s)**. Scenes: 4. Shots: 38. Planned runtime: 96.0 s.


## 1. Project specs

Source: `00_brief.md`

### Brief: The Two Knocks

#### Request
"A street-food vendor at a night market chases a monkey that stole her late grandmother's recipe tin, and discovers why it took it. About 90 seconds, 16:9, photoreal live action look. I'll use Veo 3.1 for video and a Gemini image model for stills. Gated mode."

#### Specs
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

#### Production implications (from specs)
- 90 s at Veo clip lengths of 4-8 s means roughly 15-25 shots; keep shot count sized to that.
- A real monkey in photoreal: animal motion and a hand-held tin prop are the highest-risk elements for identity drift. Story should keep the monkey and tin visible in few simultaneous-interaction shots.
- Night market: dense background crowds and signage text are risky in AI video; favor shallow depth of field, few readable signs.

#### Must keep
- Street-food vendor (a woman) at a night market
- A monkey steals her late grandmother's recipe tin
- She chases it
- She discovers why it took it (the reason is the story's reveal)

#### Must avoid
- Real people, real brands, trademarked logos
- Animal harm or cruelty

#### References supplied
None.

#### Open questions
- OPEN-QUESTION: Budget/credit limit for image and video generation (needed before stage 11; none set, no spend).
- Resolved 2026-10-19: image model = Gemini 2.5 Flash Image; setting = Southeast Asian night market; no music tool (music in post).


## 2. Story

Source: `01_story/story.md`

### Story: The Two Knocks

#### Logline
A grieving noodle vendor chases a monkey that steals her late grandmother's recipe tin, and discovers the monkey is answering a signal her grandmother used to feed it every night.

#### Premise and theme
- Premise: Lan has kept her grandmother's tin sealed on a shelf since the funeral and keeps her stall running on habit. When a macaque snatches the tin, she chases it through the night market and finds it carrying the tin to the place her grandmother secretly sat each closing time.
- Theme (as an argument): Grief sealed away leaves the people who need you waiting; carrying on the small ritual is how love continues.
- Tone and genre: warm magical-realist adventure, quiet emotional discovery, family-safe.
- World rules: the real world. A wild long-tailed macaque lives in the market's rooftops and is a familiar sight. ASSUMPTION: the macaque is not trained and not magical; it only responds to a learned sound and smell.

#### Setting
ASSUMPTION: A Southeast Asian night market (lanterns, string lights, steam, awnings), with the English-language film using one or two soft words of the grandmother's tongue ("Ah Ma" for grandmother). OPEN-QUESTION: confirm or change the country and cultural setting; it affects names, food, wardrobe and set design.

#### Characters
| ID (proposed) | Name | Role | Want | Need | Flaw/wound | Lie they believe | Visible trait | Voice (5 words) | Arc from → to |
|---|---|---|---|---|---|---|---|---|---|
| CH-LAN | Lan (ASSUMPTION: name; user may change) | protagonist, noodle vendor, late 20s-30s | the tin back, safe | to open the tin and continue what her grandmother did | she cannot open the tin; she works on habit to avoid feeling | "If I leave it sealed, she isn't gone yet." | Passes the tin and touches the lid with two fingers each time, without looking | Quiet, tired, brisk, few words | numb and closed → open and carrying on |
| CH-MACAQUE | the macaque (no name) | the "thief" | the nightly meal and the person who gave it | none (animal) | none | n/a | Tilts its head and watches the stall from the lantern wire; has a notched left ear for identification | no speech | waiting at a distance → fed and answered |
| CH-AHMA | Ah Ma (grandmother, in photo and memory only) | absent presence | n/a | n/a | n/a | n/a | In the framed photo she is mid-laugh, one hand tapping a tin | no lines | n/a |

Opposing force: the chase itself (a fast animal in a dense night market) and Lan's own avoidance. The macaque is reasonable from its side: it was fed at the same moment every night, and the signal has stopped coming.

#### Structure
Chosen structure: five-beat short, because 90 s supports one inciting incident, one escalation, one motive reveal and one decisive choice.

#### Beat outline
| Beat | What happens (who does what) | Connector to next | Value before → after | Audience feels | Est. s |
|---|---|---|---|---|---|
| B1 Setup | Night market, Lan cooks at her stall. Passing the shelf she touches the tin lid with two fingers without looking. She nudges a small chipped saucer under the counter with her foot, irritated. On a lantern wire above, a macaque watches the tin. A customer is served. | BUT the macaque drops in and takes it | numb routine → routine disturbed | warmth, a hint of loss | 14 |
| B2 Inciting incident | The macaque leaps onto the shelf, grabs the tin with both hands and runs along the counter. Lan reacts. The pot is left boiling. | THEREFORE she runs after it | stable → alarmed | surprise | 8 |
| B3 Escalation | Chase through the market: under tables, past crowds and steam, over crates. She nearly loses it at a blocked lane, takes a short risky route through a gap between stalls, and scrapes her arm on a crate edge (minor). The tin rattles as the macaque runs. | BUT she loses sight of it | confident pursuit → doubt | tension, humor | 22 |
| B4 Pursuit ends | Lan, out of breath, hears a faint metallic knock, two slow taps, from a quiet back alley beyond the lights. She goes toward it. | THEREFORE she finds the source | doubt → curiosity | hush, shift in mood | 10 |
| B5 Reveal and choice | In the alley, the macaque sits on a low stool under a single paper lantern, the tin in front of it. It taps the worn bright spots on the lid twice with one palm and looks at Lan. She sees her own two-finger habit on the same spots. She understands: her grandmother sat here every closing, knocked twice, and fed it. Decisive choice: Lan could snatch the tin and go. She crouches, takes it gently, and for the first time opens it. | THEREFORE she acts on what she learned | closed, wanting it back → open, understanding | surprise, tenderness | 22 |
| B6 Resolution | Inside the tin: a folded recipe card, a wooden spoon, a twist of paper holding dried fruit, and the chipped saucer's twin-sized lid-plate (the small chipped saucer fits flat inside). Lan sets the saucer on the stool, pours out the dried fruit, and knocks twice on the lid. The macaque eats. Cut to her stall at closing: she knocks twice on the open tin on the shelf and sets the saucer under the counter. The macaque watches from the wire, then drops down to it. | (end) | grief sealed → grief shared | bittersweet warmth | 14 |

ASSUMPTION: the chipped saucer is the one from B1. PROPOSAL (for the screenwriter): to avoid a pickup action in the chase, Lan finds the saucer inside the tin in B6, so B1 should show a different chipped saucer under the counter (a second one) or the screenwriter may simplify to one saucer that lives in the tin and is only glimpsed in B1 on the shelf next to it.

#### Setups and payoffs
| Setup (beat) | Payoff (beat) |
|---|---|
| Lan touches the lid with two fingers (B1) | Monkey taps the same spots (B5); Lan's final knock (B6) |
| The chipped saucer is nudged aside under the counter (B1) | The saucer is put out for the macaque (B6) |
| Macaque watches the tin from the wire (B1) | The macaque has been waiting for the signal (B5) |
| Photo of Ah Ma mid-laugh, hand on the tin (B1) | Lan recognizes the ritual (B5) |
| Tin rattles during the chase (B3) | Two knocks heard in the alley (B4) |
| Worn bright spots on the lid (B1, B3) | Monkey taps them (B5) |

#### Twist
- Hidden fact: the "theft" is the monkey carrying the tin to where it was always fed. It was answering the knock-on-the-tin signal, which Lan (touching, not knocking) never gave.
- Clues: B1 the macaque watching the tin and the worn spots; B1 the saucer she moves aside; B3 the monkey runs with deliberate direction (does not flee up and away).
- What it recontextualizes: the monkey's watching in B1 (waiting, not scheming) and Lan's two-finger touch (a faint echo of the knock).
- What the protagonist does because of it: opens the tin and takes up the ritual.

#### Ending
- Decisive choice: Lan lets go of the want (get the tin back and keep it sealed) and opens it.
- Final image: Lan at the closing stall shelf, knocking twice on the lid of the open tin, the macaque on the wire. Mirrors the opening image: her unthinking two-finger touch on the closed tin.

#### Runtime plan
Beats total: 14 + 8 + 22 + 10 + 22 + 14 = 90 s vs target 90 s. Roughly 16-20 shots at 4-6 s.

#### Producibility notes
- Characters: Lan and the macaque, plus a few soft-focus background extras and one customer in B1. No named background characters.
- Locations: LOC-NIGHT-MARKET (stall and lanes), LOC-BACK-ALLEY (stool, paper lantern).
- Risks for Veo 3.1: animal identity drift (notched left ear, size) and animal hands on a prop; keep macaque-on-tin shots short and image-to-video. Crowd chase: keep extras sparse and soft-focus. The recipe card in B6 must not need readable handwriting (flag for VFX or keep out of focus). No on-screen text or signs needed.
- Audio: lantern buzz, wok sizzle, the two metallic knocks are the sound motif (sound-designer), music optional.
- OPEN-QUESTION: Real-macaque welfare and realism are not a concern for generation, but the story deliberately avoids any harm to the animal.

#### Rubric
| Hook | Stakes | Causality | Agency | Emotional turn | Twist fairness | Payoff | Originality | Producibility |
|---|---|---|---|---|---|---|---|---|
| 4 | 4 | 5 | 5 | 5 | 5 | 5 | 4 | 4 |

#### Handoff
- Produced: story@1 (REVIEW), concepts@1 (REVIEW)
- Built from: brief@1
- Open items:
  - OPEN-QUESTION: Choose a concept (C1 recommended) and confirm the title ("The Two Knocks" vs "The Recipe Tin").
  - OPEN-QUESTION: Confirm the country/culture of the market and the protagonist's name.
  - ASSUMPTION: the macaque is a wild, untrained animal; no magic.
  - PROPOSAL: keep the saucer inside the tin (see B6 note) so no pickup is needed in the chase; screenwriter resolves the exact object logic.
- Conflicts: none
- Designers' notes: visible traits: Lan (two-finger touch on the lid, a tired but quick walk), macaque (notched left ear, head tilt). Location story functions: market stall = routine and loss kept busy; lanes = obstacle course; back alley = the quiet place where the ritual lived.
- Next: screenwriter, after you approve story@1


## 3. Screenplay

Screenplay version: **1 (LOCKED)**, file `02_screenplay/scene_index.md`.


| Scene | Heading | Purpose | Value change | Est. s |
|---|---|---|---|---|
| SC01 | EXT. NIGHT MARKET - LAN'S NOODLE STALL - NIGHT | Establishes Lan's numb routine, the tin, the saucer, the photo, and the macaque's watching; the theft is the inciting incident. | numb routine -> routine broken | 22 |
| SC02 | EXT. NIGHT MARKET - LANES - CONTINUOUS | Escalates the pursuit, plants the clue that the macaque runs with direction, and turns want into curiosity with the knock. | confident pursuit -> doubt -> curiosity | 32 |
| SC03 | EXT. BACK ALLEY - NIGHT | The motive reveal and Lan's decisive choice: she lets go of 'get it back sealed' and opens the tin. | closed, wanting it back -> open, understanding | 26 |
| SC04 | EXT. NIGHT MARKET - LAN'S NOODLE STALL - LATER | Mirrors the opening: touch becomes knock; the ritual continues. | grief sealed -> grief shared | 10 |


### 3.1 Full screenplay text

Source: `02_screenplay/screenplay.fountain`

```fountain
Title: The Two Knocks
Credit: Written by
Author: film-crew screenwriter
Draft date: 2026-10-19

EXT. NIGHT MARKET - LAN'S NOODLE STALL - NIGHT

Lanterns and string lights. Steam rolls off a wide pot. A wok hisses.

LAN (30s), apron stained with broth, tired and quick, ladles noodles into a bowl. She works without looking at her hands.

A shelf above the counter. A dented tin, its lid worn bright in two spots. Beside it, a framed photo: AH MA (70s) mid-laugh, one hand tapping that same tin. Beside the photo, a chipped saucer.

Lan passes the shelf. Two fingers touch the tin's lid on the worn spots. She doesn't look. She doesn't stop.

She sees the chipped saucer. Irritated, she turns it face-down.

A CUSTOMER (40s) takes the bowl and goes. Lan wipes the counter.

On a lantern wire above the stall, a MACAQUE (adult, notched left ear) sits very still. It watches the tin.

LAN (CONT'D)
(to the pot, flat)
Almost closing.

Behind her, the wire dips. The macaque drops onto the shelf. Both hands close on the tin.

Lan turns.

LAN (CONT'D)
Hey!

The macaque is already running along the counter, the tin clutched to its chest. The tin RATTLES. The pot boils over.

Lan abandons the ladle and runs.

EXT. NIGHT MARKET - LANES - CONTINUOUS

The macaque dives under a table. Lan skids around it.

Crowds, steam, awnings. Soft-lit shoppers part and close. The macaque runs low and straight, never up, never away. The tin RATTLES with every stride.

Lan vaults a stack of crates, drags herself over a second. Her forearm scrapes the edge. She hisses and keeps going.

A lane ahead is blocked by a delivery cart. The macaque slips under it. Lan has to go around, through a narrow gap between two stalls, sideways, breath short.

She comes out the other side. The macaque is gone. The rattle is gone.

Lan stops. Chest heaving. Hand on her scraped arm. She turns, searching the lanterns and the crowd.

Nothing.

Then, from somewhere beyond the lights, two slow metallic KNOCKS. Pause. Silence.

Lan follows the sound toward the dark mouth of an alley.

EXT. BACK ALLEY - NIGHT

The market noise falls away. One paper lantern hangs over a low wooden stool. On the stool, a chipped saucer, upright, worn and old.

The tin sits in front of it. The macaque sits beside the tin.

Lan stops at the edge of the light, breathing hard.

The macaque lifts one palm and taps the tin's worn spots. Knock. Knock. Then it looks at her.

Lan stares at the worn spots. At the two fingers of her own hand.

She steps in. She could grab the tin and leave. Her hand reaches. Stops.

Her eyes move to the saucer on the stool: the same chip in the rim as the one she turned face-down.

LAN (CONT'D)
(barely audible)
Ah Ma.

She crouches. She lifts the tin gently. The macaque doesn't flinch. It watches her.

Her thumbs find the lid. It has stayed shut for a long time. It comes open.

INSERT - THE OPEN TIN

A folded recipe card. A wooden spoon. A twist of paper holding dried fruit.

[[VFX: recipe card must stay folded or out of focus; no readable handwriting]]

Lan shakes the dried fruit onto the saucer on the stool. She sets the lid back on the tin and, with two knuckles, knocks twice.

Knock. Knock.

The macaque shuffles forward and eats.

Lan sits on the cold ground beside it, the open tin in her lap. She almost smiles.

EXT. NIGHT MARKET - LAN'S NOODLE STALL - LATER

Closing. Lanterns dimmed. Most stalls dark.

The open tin sits on the shelf, beside the photo. Lan turns the chipped saucer face-up and sets it on the counter edge.

She knocks twice on the tin's lid.

Knock. Knock.

On the lantern wire above, the macaque tilts its head. It drops down to the saucer.

Lan turns off the last light.
```


## 4. Registries
### 4.1 Characters

| ID | Name | Role | Age | Height cm | Identity lock |
|---|---|---|---|---|---|
| CH-AHMA | Ah Ma | Lan's late grandmother, seen only in a framed photograph | mid 70s | 150 | Ah Ma, a Southeast Asian woman in her mid 70s, round face with deep laugh lines, mid-laugh with eyes crinkled nearly shut and a wide open smile, silver-white hair pulled back in a low bun, warm light-tan weathered skin, pale blue-grey collarless cotton blouse. Her right hand taps the lid of a dented round tin. Faded color photograph look. |
| CH-LAN | Lan | protagonist; noodle-stall vendor | early 30s | 160 | Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. |
| CH-MACAQUE | The macaque | the 'thief'; a wild long-tailed macaque that Ah Ma used to feed | adult, about 8-10 years old | 35 | A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer's right when it faces the camera). Dark grey-pink hands. No collar, no clothing. |


### 4.2 Costumes

| ID | Character | Name | Lock |
|---|---|---|---|
| CO-AHMA-01 | CH-AHMA | Photo blouse | Pale blue-grey collarless short-sleeve washed cotton blouse, thin plain gold hoop earrings, silver-white hair pulled back in a low bun, shown in a faded print. No patterns, no text, no badge, no other jewelry. |
| CO-LAN-01 | CH-LAN | Stall working clothes | Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. |
| CO-MACAQUE-01 | CH-MACAQUE | Natural coat | Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. |


### 4.3 Locations

| ID | Name | INT/EXT | Lock |
|---|---|---|---|
| LOC-BACK-ALLEY | Back alley behind the market | EXT | Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere. |
| LOC-NIGHT-MARKET | Night market lane and Lan's noodle stall | EXT | Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. |


### 4.4 Props

| ID | Name | States | Lock |
|---|---|---|---|
| PR-CARD | Recipe card | PR-CARD:FOLDED | A stiff cream card folded in thirds into a 10 by 6 cm rectangle, soft worn edges, faint brown fingerprint stains, the outside completely blank with no writing, no lines and no printing visible. |
| PR-CART | Hand cart | PR-CART:PARKED | A two-wheel wooden hand cart, 120 by 70 cm flat bed raised 40 cm off the ground, two long handles, bagged goods under a plain sand-coloured cloth. No writing, no painted marks. |
| PR-CRATES | Crate stacks | PR-CRATES:STACKED | Slatted pale wooden crates, each 50 by 35 by 30 cm, in one stack three high and one four high, the taller stack with a rough splintered slat at its top edge. No stencils, no writing. |
| PR-FRUIT | Twist of dried fruit | PR-FRUIT:TWISTED, PR-FRUIT:POURED | A small 8 cm twist of waxed brown paper, closed at the top, holding about a dozen chewy amber-brown dried fruit slices, each about 3 cm wide, that spill out when opened. Plain paper, no printing. |
| PR-LADLE | Ladle | PR-LADLE:HELD, PR-LADLE:ABANDONED | A 35 cm long steel ladle with a deep round bowl, slightly dented, and a plain straight brown wooden handle with a hole at the end. No decoration, no writing. |
| PR-LANTERN-ALLEY | Alley paper lantern | PR-LANTERN-ALLEY:LIT | A round 30 cm amber paper lantern with thin bamboo ribs, hung from an iron wall bracket by a short wire. Plain, no characters, no pattern. |
| PR-PHOTO | Framed photo of Ah Ma | PR-PHOTO:STANDING | A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption. |
| PR-POT | Noodle stockpot | PR-POT:BOILING, PR-POT:BOIL-OVER | A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label. |
| PR-SAUCER-ALLEY | Alley saucer | PR-SAUCER-ALLEY:EMPTY, PR-SAUCER-ALLEY:FRUIT, PR-SAUCER-ALLEY:EATEN | A small 12 cm cream-glazed ceramic saucer, slightly aged, with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o'clock position, matching the stall saucer. Plain, no pattern, no writing. |
| PR-SAUCER-STALL | Stall saucer | PR-SAUCER-STALL:UPRIGHT, PR-SAUCER-STALL:FACEDOWN, PR-SAUCER-STALL:FACEUP | A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o'clock position. Plain, no pattern, no writing. |
| PR-SPOON | Wooden spoon | PR-SPOON:IN-TIN | A small 14 cm hand-carved honey-brown hardwood cooking spoon with a rounded bowl darkened by years of use and a short plain handle, smooth worn surface. No decoration, no carving, no writing. |
| PR-STOOL | Alley stool | PR-STOOL:STANDING | A low four-legged hardwood stool, 28 cm tall, seat worn into a shallow dish, legs slightly splayed, dark honey-brown with pale wear marks. Plain, no paint. |
| PR-TIN | Ah Ma's recipe tin | PR-TIN:SEALED, PR-TIN:OPEN, PR-TIN:LID-ON | A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. |


### 4.5 Style

**Style lock:** Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.

**Aspect ratio:** 16:9


### 4.6 Full design documents


Source: `03_characters/CH-AHMA.md`

#### CH-AHMA — Ah Ma (Lan's late grandmother)

##### Evidence from the script
| Scene | What they do | Costume/state needs |
|---|---|---|
| SC01 | Appears only in the framed photo on the shelf beside the tin: mid-laugh, one hand tapping the same tin | Face readable in a close shot without any text; photo must look like a real, slightly faded print |

She never speaks and never appears in person. This file designs her as she looks in the photograph; CH-AHMA is a "photo-only" character. The framed photo prop is owned by the production-designer.

##### Design rationale
- Role and personality: warm, amused, patient; the opposite of Lan's numbness. Her laugh is the emotional counterweight in the film.
- Shape language: round, soft, relaxed shapes; open posture.
- Silhouette: small round shoulders and a low silver bun, seen only in head-and-shoulders.
- Color anchor (hex): soft pale blue-grey blouse #A9B6BE, which does not clash with the amber background and does not touch Lan's indigo-grey.
- Proportions: head and shoulders only; about 150 cm if ever described.

```yaml
record: character
id: CH-AHMA
name: "Ah Ma"
role: "Lan's late grandmother, seen only in a framed photograph"
age: "mid 70s"
height_cm: 150
build: "small, round-shouldered, sturdy"
identity_lock: >-
  Ah Ma, a Southeast Asian woman in her mid 70s, round face with deep laugh lines, mid-laugh with eyes crinkled nearly shut and a wide open smile, silver-white hair pulled back in a low bun, warm light-tan weathered skin, pale blue-grey collarless cotton blouse. Her right hand taps the lid of a dented round tin. Faded color photograph look.
face: "round face, deep laugh lines at eyes and mouth, high soft cheeks, small nose, wide open smile with a few gaps in the teeth, eyes crinkled nearly shut"
hair: "silver-white (#D9D6D0), pulled back in a low bun, flyaways at the temples"
skin: "light-tan weathered (#C79C78), age spots on hands, lines"
eyes: "dark brown, almost closed in the laugh"
silhouette: "small and round, low bun, shoulders curved forward over the tin"
distinguishing_features:
  - "Right hand tapping the tin lid, fingers relaxed and slightly curled"
  - "Thin plain gold hoop earrings; no other jewelry"
default_costume: CO-AHMA-01
costumes: [CO-AHMA-01]
expression_range: [mid-laugh]
invariants:
  - "Mid-laugh expression with eyes crinkled shut"
  - "Right hand on the dented tin lid"
  - "Faded color photo, no text or date stamp on it"
allowed_variation:
  - "Photo crop: head and shoulders or waist up"
reference_images: []
```

```yaml
record: costume
id: CO-AHMA-01
character: CH-AHMA
name: "Photo blouse"
garments: ["pale blue-grey collarless cotton blouse, short sleeves"]
materials: ["soft washed cotton"]
colors: ["blouse pale blue-grey #A9B6BE"]
accessories: ["thin plain gold hoop earrings"]
condition_states:
  - {id: PHOTO, description: "As seen in the faded framed photograph, never changes", from: SC01}
scenes: [SC01]
identity_lock: >-
  Pale blue-grey collarless short-sleeve washed cotton blouse, thin plain gold hoop earrings, silver-white hair pulled back in a low bun, shown in a faded print. No patterns, no text, no badge, no other jewelry.
```

##### Sheets
| Sheet | Status | Notes |
|---|---|---|
| Photo portrait | spec written, not generated | One head-and-shoulders portrait as a faded print, mid-laugh, hand tapping the tin |
| Turnaround | not required | Appears only in the photo |

```yaml
sheet_brief: AHMA-PHOTO
type: portrait
subject: CH-AHMA, CO-AHMA-01
layout: "single head-and-shoulders portrait, flat front lighting, faded warm color print look with soft grain, plain wall behind, no frame; tin lid and her right hand visible at the bottom of the frame"
content: "<CH-AHMA identity_lock> <CO-AHMA-01 identity_lock>"
notes: "No writing, no date stamp. The tin must match the production-designer's tin sheet once approved."
```

##### Reference image review log
| Image | Verdict | Notes |
|---|---|---|

Reference-image checklist: laughing, eyes crinkled; low silver bun; right hand on the tin; faded print look; no text; she does not resemble Lan so closely that the photo reads as Lan.

##### Handoff
- Produced: CH-AHMA@1, CO-AHMA-01@1 (status REVIEW)
- Built from: screenplay@1 LOCKED, story@1, style_bible@1 (REVIEW)
- Open items: ASSUMPTION: age mid 70s ("70s" in the script); the photo uses one still of her. ASSUMPTION: a family resemblance to Lan (round face, same brow) is hinted but not identical.
- Conflicts: none
- Next: production-designer (frame and photo-print look), vfx-supervisor (photo is a small, mostly out-of-focus prop, but her face must hold in SC01 closeups)


Source: `03_characters/CH-LAN.md`

#### CH-LAN — Lan

##### Evidence from the script
| Scene | What they do | Costume/state needs |
|---|---|---|
| SC01 | Ladles noodles at the stall, touches tin lid with two fingers without looking, turns saucer face-down, speaks "Almost closing.", turns and shouts "Hey!", drops the ladle and runs | Apron with broth stains; sleeves must stay out of the pot and allow reach to the shelf; shoes that run |
| SC02 | Skids around a table, vaults two crate stacks, scrapes forearm on a crate edge, squeezes sideways through a stall gap, stops breathing hard with hand on scraped arm | Graze appears mid-scene; apron and clothes must survive sideways squeeze and vaulting; hair may loosen |
| SC03 | Walks to alley edge, hand reaches then stops short, speaks "Ah Ma." barely audible, crouches, lifts and opens the tin with both thumbs, shakes fruit, knocks twice with knuckles, sits on cold ground | Graze visible on right forearm (the knocking hand); crouch and sit-on-ground friendly clothing |
| SC04 | Sets tin on shelf, turns saucer face-up, knocks twice, turns off the last light | Same graze, dusty apron, loosened strand of hair |

##### Design rationale
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

##### Sheets
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

##### Reference image review log
| Image | Verdict | Notes |
|---|---|---|

Reference-image checklist (to run when sheets exist): knot of hair at the nape in all views; apron stays indigo-grey with no print or logo; sleeves rolled the same height; graze on the RIGHT forearm only after SC02; no jewelry; hands have five fingers; no text on clothing.

##### Handoff
- Produced: CH-LAN@1, CO-LAN-01@1 (status REVIEW)
- Built from: screenplay@1 LOCKED, story@1, style_bible@1 (REVIEW)
- Open items: OPEN-QUESTION: user to confirm the graze is on Lan's RIGHT forearm (chosen so it shows on her knocking hand). ASSUMPTION: age early 30s ("30s" in the script). ASSUMPTION: skin and features follow a general Southeast Asian presentation with no specific country.
- Conflicts: none
- Next: script-supervisor (states BASE -> GRAZED at SC02 crate vault), voice-director (Lan: low, quiet, brisk), cinematographer and director (160 cm, right-forearm graze)


Source: `03_characters/CH-MACAQUE.md`

#### CH-MACAQUE — The macaque

##### Evidence from the script
| Scene | What it does | Costume/state needs |
|---|---|---|
| SC01 | Sits very still on a lantern wire watching the tin; drops onto the shelf; grabs the tin with both hands; runs along the counter with it against its chest | Notched left ear must be visible in a wide shot; hands wrap a round tin |
| SC02 | Dives under a table, runs low and straight, slips under a cart; rattling tin | Runs on four limbs with the tin held in one arm or hands; low horizontal silhouette |
| SC03 | Sits beside the tin on a stool; taps worn spots twice with one palm; looks at Lan; does not flinch; shuffles forward and eats dried fruit | Calm posture; one palm tapping; eating with fingers |
| SC04 | On the lantern wire, tilts its head, drops to the saucer | Head tilt; short drop |

##### Design rationale
- Role and personality: a wild adult long-tailed macaque that is a familiar sight in the market. It is patient, deliberate and gentle, not cute or comical. It reads as a creature answering a habit, not a thief.
- Shape language: round head, low sturdy body, long curved tail; compact horizontal silhouette that is opposite to Lan's upright A-shape.
- Silhouette: low, long, tail curling in a question-mark shape; at rest, hunched with the tail hanging; the notch in the left ear shows in head-on views.
- Color anchor (hex): olive-brown fur #7A6A4F (reserved by style_bible@1). Distinct from every other color in the frame.
- Proportions: body length about 45 cm (head to rump), tail about 50 cm, about 4 kg; sits about 35 cm tall. Realistic wild animal proportions, no anthropomorphising.
- Gender: unspecified; the script calls it "it". ASSUMPTION: adult, grey-flecked muzzle to show age and familiarity.

```yaml
record: character
id: CH-MACAQUE
name: "The macaque"
role: "the 'thief'; a wild long-tailed macaque that Ah Ma used to feed"
age: "adult, about 8-10 years old"
height_cm: 35
build: "compact and sturdy, long arms, slim waist, body about 45 cm plus tail about 50 cm"
identity_lock: >-
  A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer's right when it faces the camera). Dark grey-pink hands. No collar, no clothing.
face: "bare pinkish-grey face (#B89A8A), flat nose, heavy brow ridge, grey-flecked muzzle, pale whisker tufts at the cheeks, calm watchful expression"
hair: "olive-brown fur (#7A6A4F), crown fur swept back, paler cream-grey (#CBBFA4) on chest, belly and inner limbs"
skin: "bare skin of face and palms pinkish grey-brown (#A78578), darker grey-brown palms"
eyes: "amber-brown (#7B4F2A), round, steady, wet highlight"
silhouette: "low, long, horizontal body with a long tail curving in a question mark; round head with a visible ear notch"
distinguishing_features:
  - "Small V-shaped notch in the top rim of its own LEFT ear (viewer's RIGHT when it faces camera, viewer's LEFT when seen from behind); this is the identification mark"
  - "Grey-flecked muzzle"
  - "Tail has a slight kink about 10 cm from the tip"
default_costume: CO-MACAQUE-01
costumes: [CO-MACAQUE-01]
expression_range: [watchful-still, head-tilt, intent-running, calm-looking-at-Lan, eating-content]
invariants:
  - "Notch in its own LEFT ear, always the same ear"
  - "Olive-brown fur, cream-grey underparts, grey-flecked muzzle"
  - "Single animal, never two macaques in a frame"
  - "No collar, clothing or accessories; wild, untrained, not magical"
allowed_variation:
  - "Fur slightly wet-looking or dusty in SC02-SC03"
  - "Crouch, run, sit, stand on hind legs briefly"
reference_images: []
```

```yaml
record: costume
id: CO-MACAQUE-01
character: CH-MACAQUE
name: "Natural coat"
garments: ["none; natural fur only"]
materials: ["fur"]
colors: ["olive-brown #7A6A4F", "cream-grey underparts #CBBFA4", "bare face and palms #B89A8A"]
accessories: []
condition_states:
  - {id: BASE, description: "Dry, slightly dusty fur, alert, notched left ear visible", from: SC01}
scenes: [SC01, SC02, SC03, SC04]
identity_lock: >-
  Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
```

##### Sheets
| Sheet | Status | Notes |
|---|---|---|
| Turnaround | spec written, not generated | Standing on all fours on a plain surface: front, three-quarter, side, back; a close-up of the head from the front with the notched LEFT ear (viewer's right) |
| Expression | spec written, not generated | 5 head studies listed above |
| Pose | spec written, not generated | Crouched on a wire, running low, sitting beside a tin, one palm tapping, head tilt, eating with both hands |

```yaml
sheet_brief: MACAQUE-TURNAROUND
type: turnaround
subject: CH-MACAQUE, CO-MACAQUE-01
layout: "4 full-body views on plain grey: front, three-quarter, side, back, all on four limbs, same scale, plus one front head close-up that clearly shows the V-notch in its own LEFT ear (viewer's right)"
content: "<CH-MACAQUE identity_lock>"
notes: "Single macaque, no props. Realistic wildlife look, not a cartoon."
```
```yaml
sheet_brief: MACAQUE-POSES
type: pose
subject: CH-MACAQUE
layout: "6 poses: sitting still on a thin wire; running low with a round tin clutched against the chest; sitting beside a tin on a stool; one palm raised tapping the lid; head tilted watching; eating dried fruit from a saucer"
content: "<CH-MACAQUE identity_lock>"
notes: "Tin size reference to be supplied by production-designer; until then draw a plain round tin about 16 cm across."
```

##### Reference image review log
| Image | Verdict | Notes |
|---|---|---|

Reference-image checklist: notch on the same ear in every view; tail kink present; single animal; no collar or clothing; hands five-fingered and animal-like, not human-like; face grey-pink with flecked muzzle; fur color stays olive-brown (not golden or grey).

##### Handoff
- Produced: CH-MACAQUE@1, CO-MACAQUE-01@1 (status REVIEW)
- Built from: screenplay@1 LOCKED, story@1, style_bible@1 (REVIEW)
- Open items: ASSUMPTION: "notched left ear" means the animal's own left ear (viewer's right when facing camera); user to confirm. ASSUMPTION: animal is wild-looking, adult, sex unspecified, grey-flecked muzzle. PROPOSAL: production-designer fixes the tin to about 16 cm diameter x 10 cm tall so the macaque can hold it to its chest.
- Conflicts: none
- Next: script-supervisor (mirror rule for the notched ear), film-director (low horizontal silhouette), vfx-supervisor (animal hands on tin)


Source: `03_characters/lineup.md`

#### Lineup and distinctness check

| Character | Height | Silhouette | Color anchor | Hair or fur shape |
|---|---|---|---|---|
| CH-LAN | 160 cm | upright compact A-shape with bib apron | indigo-grey #4A5568 | low black knot |
| CH-MACAQUE | 35 cm sitting; 45 cm body + 50 cm tail | low horizontal, long question-mark tail | olive-brown #7A6A4F | swept-back crown fur |
| CH-AHMA (photo only) | about 150 cm | small round, low silver bun | pale blue-grey #A9B6BE | silver bun |

Lineup sheet brief: Lan standing at 160 cm with the macaque sitting at her feet at the same scale, and Ah Ma shown as a small framed portrait on the right at photo scale (not full height). Plain grey ground, height ruler marked at 50, 100, 150 cm.

Distinctness: all three silhouettes differ strongly (upright, low horizontal, small round). The tin spots (#C9A24B) stay the only brass colour. Lan's apron and the macaque's fur are separate hues, so the pair reads in a wide shot at night.

##### Handoff
- Produced: lineup@1 (REVIEW)
- Next: production-manager gate 3


Source: `04_world/LOC-BACK-ALLEY.md`

#### LOC-BACK-ALLEY — Ah Ma's alley

Scenes: SC03 · Story function: refuge and shrine, the place the ritual lived · Emotion: hush, then tenderness

##### Design rationale
- A narrow plain alley, a few steps from the market's noise. It is the visual opposite of the stall: bare, quiet, almost empty, with one warm pool of light.
- Small and enclosed so the stool, the tin and the three figures are the only story. Plain plastered walls give a calm backdrop and no readable text.
- The stool and its saucer show someone sat here regularly; the worn seat is a clue that Ah Ma sat here every night.
- Regional Southeast Asian utility alley: plastered walls, a drainpipe, a shuttered rear door; no country-identifying features.

```yaml
record: location
id: LOC-BACK-ALLEY
name: "Back alley behind the market"
int_ext: EXT
description: "A 2.5 m wide, 10 m deep dead-end alley running north to south off the west end of the market lane, between two peeling sandy-plaster walls about 3 m high. A low wooden stool stands 7 m in from the mouth on the centre line. A single paper lantern hangs on an iron bracket from the east wall 2.2 m above the stool. The far south end is a blank wall."
layout: "see floor plan: mouth M at the north end; stool L1 on the centre line; lantern L2 on the east wall; shuttered rear door L3 on the west wall; drainpipe L4 on the east wall; blank dead end L5"
landmarks:
  - "L1 low wooden stool on the centre line"
  - "L2 round amber paper lantern on an iron bracket, east wall"
  - "L3 shuttered rear door of green-grey painted planks, west wall, 3 m south of the stool"
  - "L4 vertical grey drainpipe on the east wall"
  - "L5 blank plastered dead-end wall"
light_sources:
  - "L2 paper lantern, warm honey-amber, the only practical in the alley"
  - "Faint amber market glow from the mouth M (behind Lan as she enters)"
  - "Dark night sky above, cool teal ambient"
palette: ["alley teal shadow #1F3B3F", "honey tungsten #F2B35E", "plaster sand #8A7F6E", "umber #2A1D17", "tin brass #C9A24B"]
set_dressing:
  - "Peeling sandy plaster with damp stains, no graffiti and no writing"
  - "A coil of old rope and a dented metal bucket by the west wall near L3"
  - "Cold damp compacted concrete ground, a few leaves"
identity_lock: >-
  Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere.
variants:
  - {time_of_day: night, weather: "dry, still", notes: "SC03 only: lantern is the sole light, market noise and glow fall away behind the mouth"}
reference_images: []
```

##### Floor plan
```
N ↑  (mouth faces the market lane; Lan enters from the north)
          LANE (E-W, market glow)
 =======[ M mouth, 2.5 m ]=========
 |  W wall                E wall  |
 |                         L4 drainpipe
 |                                |
 |            L2 lantern (E wall bracket, 2.2 m up, over L1)
 |            [L1 stool + ALLEY saucer on top, tin on ground in front, north of stool]
 |  L3 shuttered door             |
 |  rope + bucket                 |
 |                                |
 +--------- L5 blank dead end ----+
Stool: 7 m from M. Macaque sits beside the tin, west of the stool. Lan stops 3 m north of the stool at the edge of the light.
```

##### Set dressing by zone
| Zone | Items | Story it tells | Continuity anchor? |
|---|---|---|---|
| Stool | stool, ALLEY saucer, tin in front | Ah Ma's feeding place | yes |
| Lantern | bracket and paper lantern | someone hung it for her | yes: always lit |
| West wall | rope, bucket, shuttered door | ordinary alley life | yes |

##### Plate specifications
| Plate | Camera position on plan | Height | Lens type | Time/weather | Brief |
|---|---|---|---|---|---|
| AL-P1 | at the mouth M looking south | 1.5 m | normal | night | Empty alley, lantern lit over empty stool position, blank dead end |
| AL-P2 | beside the stool looking north to the mouth | 1.0 m | normal | night | Reverse: mouth with faint amber market glow, plaster walls |
| AL-P3 | at the stool, close | 0.5 m | short tele | night | Stool seat worn, wall bracket and lantern above |

##### Handoff
- Produced: LOC-BACK-ALLEY@1 (REVIEW)
- Built from: screenplay@1 LOCKED, style_bible@1 (REVIEW)
- Open items: ASSUMPTION: alley runs north-south and opens onto the lane's west end, south side.
- Next: film-director, cinematographer (single lantern motivation), script-supervisor (axis)


Source: `04_world/LOC-NIGHT-MARKET.md`

#### LOC-NIGHT-MARKET — Lan's noodle stall and the market lanes

Scenes: SC01, SC02, SC04 · Story function: routine and loss kept busy (stall), obstacle course (lanes), emptied and quiet mirror (closing) · Emotion: warm but numb → hectic → tender and still

##### Design rationale
- A covered open-air lane of timber-frame food stalls under a taut wire of paper lanterns and bare bulbs. It is compact (about 3 m wide) so the chase reads as tight and dense, and the lantern wire gives the macaque a believable perch directly above the stall.
- The stall is deliberately small and orderly: one counter, one shelf. The shelf is the emotional centre: tin, photo, saucer together.
- Condition: worn, tidy, lived in for decades; damp swept concrete ground, patched corrugated roofs, faded canvas awnings. Regional Southeast Asian night market; no country-specific architecture, no flags, no scripts.
- Signage: every sign board is blank, painted over, or abstract shapes (no letters, no logos). This avoids readable text and keeps the country unnamed.
- The lane runs east to west; the chase travels west, ending at the dark alley mouth, so the geography itself pulls Lan from light to quiet.

```yaml
record: location
id: LOC-NIGHT-MARKET
name: "Night market lane and Lan's noodle stall"
int_ext: EXT
description: "A 3 m wide covered lane of timber-frame food stalls under corrugated-metal and faded canvas roofs. Lan's stall sits at the east end on the south side of the lane, facing north. Counter 3 m long, 90 cm high; a plank shelf at 140 cm on the rear post holds the tin, photo and saucer. A taut steel wire strung with paper lanterns and bare bulbs crosses the lane about 2.4 m high and passes 70 cm above the shelf. West of the stall the lane runs past a round table, two stacks of wooden crates, a hand cart and a narrow gap between two stalls, ending in an unlit stretch with the alley mouth on its south side."
layout: "see floor plan: stall L1 east end south side; shelf L2 on stall rear post; lantern wire L3 crossing the lane; crate stacks L4; hand cart L5; stall gap L6; alley mouth L7 at the west end, south side"
landmarks:
  - "L1 Lan's stall: wide aluminium stockpot and wok burner at the counter's west end, bare bulb with a wall switch on the east post"
  - "L2 plank shelf at 140 cm holding tin, framed photo and saucer, directly under the lantern wire"
  - "L3 lantern wire with a cluster of three round chili-red paper lanterns above the stall (the only red lanterns in the market)"
  - "L4 two stacks of slatted wooden crates (3 high and 4 high)"
  - "L5 two-wheel wooden hand cart bed at 40 cm, blocking the lane"
  - "L6 55 cm gap between two stalls leading to a short service path"
  - "L7 dark arch-shaped alley mouth between two plain plastered walls, no lights"
light_sources:
  - "String-light bulbs, warm tungsten, along the lane wires"
  - "Paper lanterns in amber, three chili-red lanterns above Lan's stall"
  - "Stall bulb over the counter, switched by a wall switch on the east post"
  - "Gas burner flame (orange) and pot steam, which backlights from the stall"
  - "Other stalls' bulbs and lanterns as a distant amber glow; the west end of the lane is the dimmest"
palette: ["night-market umber #2A1D17", "lantern amber #E0963A", "steam warm white #F1E4CF", "chili red #B8362B", "honey tungsten #F2B35E"]
set_dressing:
  - "Wire racks of blank bowls and chopstick tins at the stall; blank painted sign boards (no letters)"
  - "Neighbouring stalls with piles of produce under bulbs, faceless sparse extras kept soft"
  - "Folding round table with a plain grey cloth hanging to 15 cm above the ground (the macaque dives under it)"
  - "Damp swept concrete ground, a few puddles near the cart"
identity_lock: >-
  Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner.
variants:
  - {time_of_day: night, weather: "dry, warm, humid haze", notes: "SC01 and SC02: all stalls open, lanterns and bulbs on, steam from pots, sparse soft-focus shoppers"}
  - {time_of_day: "late night closing", weather: "dry", notes: "SC04: most stalls shuttered with roll-down corrugated shutters, lane empty, only Lan's stall bulb and a few lanterns lit, then the stall bulb switched off at the end"}
reference_images: []
```

##### Floor plan
```
N ↑  (lane runs E-W; stall faces north onto the lane)
W end                                                                      E end
 .....unlit..................lane (3 m wide)...............................
 [L7 ALLEY MOUTH (south side)]
                    N side stalls: blank boards, produce   [L6 GAP]  (service path, rejoins lane west of L5)
 ==============================================================================
 (west)   L5 cart   L4b crates(4)  L4a crates(3)   TABLE      L1 LAN'S STALL (east end)
          [bed 40 cm]                                          counter 3 m, pot at west end
                                                                shelf L2 on rear post, wire L3 above
 ==============================================================================
 S side: stall rears and back walls
Chase direction in SC02: east → west (stall → table → crates → cart → gap → alley mouth).
Stall interior: Lan stands behind the counter facing north; pot at the counter's west end; shelf on the rear post behind her, to her right when she faces the lane.
```

##### Set dressing by zone
| Zone | Items | Story it tells | Continuity anchor? |
|---|---|---|---|
| Stall counter | pot, wok burner, bowls, cloth, ladle | daily work done by habit | pot position at west end |
| Shelf | tin, framed photo, STALL saucer | the shrine she does not look at | yes: order west to east: saucer, photo, tin (see props.md) |
| Wire above | three red lanterns, bulbs | where the macaque waits | red cluster directly above shelf |
| Lane | table, crates, cart, gap | obstacle course | order east to west fixed |
| West end | unlit stretch, alley mouth | the quiet place | alley mouth south side |

##### Plate specifications
| Plate | Camera position on plan | Height | Lens type | Time/weather | Brief |
|---|---|---|---|---|---|
| NM-P1 stall front | in the lane, north of the stall, looking south | 1.5 m | normal | night | Empty stall, counter, shelf with props out of frame or blank; red lanterns above; sparse soft background |
| NM-P2 lane west | at the stall looking west along the lane | 1.5 m | normal to short tele | night | Table, crates, cart in order; the dark alley mouth glimpsed at the far end |
| NM-P3 shelf close | behind the counter, looking north to the lane is not needed; close on shelf | 1.4 m | short tele | night | Empty shelf plank, wall post, wire overhead |
| NM-P4 closing | as NM-P1 | 1.5 m | normal | late night closing | Shuttered stalls, dimmed lanterns, empty lane |

##### Handoff
- Produced: LOC-NIGHT-MARKET@1 (REVIEW)
- Built from: screenplay@1 LOCKED, style_bible@1 (REVIEW)
- Open items: ASSUMPTION: the lane runs east-west and the chase goes west; script-supervisor to confirm the axis. ASSUMPTION: the stall bulb has a wall switch (needed for "turns off the last light"). OPEN-QUESTION: none.
- VFX flags: blank signs only; crowd extras kept sparse and soft-focus.
- Next: film-director (blocking on the plan), cinematographer (light sources), script-supervisor (axis, order of obstacles)


Source: `04_world/props.md`

#### Prop Registry

| ID | Name | Owner | Scenes | Hero? | States |
|---|---|---|---|---|---|
| PR-TIN | Ah Ma's recipe tin | CH-AHMA / CH-LAN | SC01-SC04 | yes | SEALED, OPEN, LID-ON |
| PR-SAUCER-STALL | Stall saucer | CH-LAN | SC01, SC04 | yes | UPRIGHT, FACEDOWN, FACEUP |
| PR-SAUCER-ALLEY | Alley saucer (matching chip) | CH-AHMA | SC03 | yes | EMPTY, FRUIT, EATEN |
| PR-PHOTO | Framed photo of Ah Ma | CH-LAN | SC01, SC04 | yes | STANDING |
| PR-SPOON | Wooden spoon | CH-AHMA | SC03 | no | IN-TIN |
| PR-CARD | Recipe card | CH-AHMA | SC03 | yes | FOLDED |
| PR-FRUIT | Twist of dried fruit | CH-AHMA | SC03 | no | TWISTED, POURED |
| PR-POT | Noodle stockpot | CH-LAN | SC01 | no | BOILING, BOIL-OVER |
| PR-LADLE | Ladle | CH-LAN | SC01 | no | HELD, ABANDONED |
| PR-LANTERN-ALLEY | Alley paper lantern | set | SC03 | no | LIT |
| PR-STOOL | Alley stool | set | SC03 | yes | STANDING |
| PR-CART | Hand cart | set | SC02 | no | PARKED |
| PR-CRATES | Crate stacks | set | SC02 | no | STACKED |

```yaml
record: prop
id: PR-TIN
name: "Ah Ma's recipe tin"
description: "Round dented tin with a friction-fit lid. Dark green lacquer worn at the rim and corners, small dents on the side. Two bright worn brass spots on the lid, each about 2.5 cm across and 5 cm apart, where fingers have rubbed through the lacquer. A faint dust line seals the rim while closed."
size: "16 cm diameter x 10 cm tall"
materials: ["tinplate", "dark green lacquer", "bare brass-coloured metal at worn spots"]
colors: ["lacquer dark green #2F3A33", "worn brass spots #C9A24B", "inside pale tin #B9B5AB"]
owner: CH-AHMA
scenes: [SC01, SC02, SC03, SC04]
states:
  - {id: PR-TIN:SEALED, description: "Lid on, rim dusty, sealed shut; rattles softly (soft contents) when carried", from: SC01, cause: "start"}
  - {id: PR-TIN:OPEN, description: "Lid off in Lan's hands, contents visible: folded card, wooden spoon, paper twist of dried fruit", from: SC03, cause: "Lan opens it with both thumbs"}
  - {id: PR-TIN:LID-ON, description: "Contents emptied of the fruit, lid set back on loosely and slightly offset, rim gap visible, no longer sealed", from: SC03, cause: "Lan sets the lid back before knocking"}
identity_lock: >-
  A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle.
reference_images: []
```

```yaml
record: prop
id: PR-SAUCER-STALL
name: "Stall saucer"
description: "Small cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent-shaped chip in the rim, about 1.2 cm wide, at the 3 o'clock position when upright."
size: "12 cm diameter x 1.5 cm tall"
materials: ["glazed ceramic"]
colors: ["cream glaze #E8DCC4", "rim line blue #31435C"]
owner: CH-LAN
scenes: [SC01, SC04]
states:
  - {id: PR-SAUCER-STALL:UPRIGHT, description: "Standing upright on the shelf beside the photo", from: SC01, cause: "start"}
  - {id: PR-SAUCER-STALL:FACEDOWN, description: "Turned face-down on the shelf, unglazed foot ring and blank underside visible", from: SC01, cause: "Lan turns it with her hand, irritated"}
  - {id: PR-SAUCER-STALL:FACEUP, description: "Face-up, set on the counter edge below the wire", from: SC04, cause: "Lan turns it face-up for the macaque"}
identity_lock: >-
  A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o'clock position. Plain, no pattern, no writing.
reference_images: []
```

```yaml
record: prop
id: PR-SAUCER-ALLEY
name: "Alley saucer"
description: "Twin of the stall saucer: same cream glaze, blue rim line and crescent chip at 3 o'clock, but older, with a hairline crack and darker stains from years of use."
size: "12 cm diameter x 1.5 cm tall"
materials: ["glazed ceramic"]
colors: ["cream glaze, aged #DDCFB3", "rim line blue #31435C"]
owner: CH-AHMA
scenes: [SC03]
states:
  - {id: PR-SAUCER-ALLEY:EMPTY, description: "Upright on the stool seat, empty, chip at 3 o'clock facing the camera side", from: SC03, cause: "start"}
  - {id: PR-SAUCER-ALLEY:FRUIT, description: "Dried fruit pieces poured onto it", from: SC03, cause: "Lan shakes the twist onto it"}
  - {id: PR-SAUCER-ALLEY:EATEN, description: "Fruit gone or nearly gone", from: SC03, cause: "macaque eats"}
identity_lock: >-
  A small 12 cm cream-glazed ceramic saucer, slightly aged, with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o'clock position, matching the stall saucer. Plain, no pattern, no writing.
reference_images: []
```

```yaml
record: prop
id: PR-PHOTO
name: "Framed photo of Ah Ma"
description: "Small standing photo in a plain dark-wood frame with a thin glass front. A faded color print of Ah Ma mid-laugh with one hand tapping the tin. Easel back keeps it upright on the shelf."
size: "13 x 18 cm photo, frame 1.5 cm wide"
materials: ["dark wood", "glass", "faded paper print"]
colors: ["frame dark brown #3A2A22", "print faded warm tones"]
owner: CH-LAN
scenes: [SC01, SC04]
states:
  - {id: PR-PHOTO:STANDING, description: "Standing on the shelf between the saucer and the tin, facing the lane", from: SC01, cause: "start"}
identity_lock: >-
  A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption.
reference_images: []
```

```yaml
record: prop
id: PR-SPOON
name: "Wooden spoon"
description: "Small hand-carved wooden cooking spoon, honey-brown, darkened bowl from years of use, short handle."
size: "14 cm long"
materials: ["hardwood"]
colors: ["honey wood #B07D45", "dark bowl #5C3F25"]
owner: CH-AHMA
scenes: [SC03]
states:
  - {id: PR-SPOON:IN-TIN, description: "Lying diagonally on top of the folded card in the open tin", from: SC03, cause: "revealed when the tin opens"}
identity_lock: >-
  A small 14 cm hand-carved honey-brown hardwood cooking spoon with a rounded bowl darkened by years of use and a short plain handle, smooth worn surface. No decoration, no carving, no writing.
reference_images: []
```

```yaml
record: prop
id: PR-CARD
name: "Recipe card"
description: "Stiff cream index-style card folded in thirds so no writing shows; soft worn edges, faint brown fingerprint stains."
size: "10 x 6 cm folded"
materials: ["card stock"]
colors: ["cream #E6DAC0", "stain brown #8B6B45"]
owner: CH-AHMA
scenes: [SC03]
states:
  - {id: PR-CARD:FOLDED, description: "Folded in thirds, outside blank, lying at the bottom of the tin", from: SC03, cause: "revealed when the tin opens"}
identity_lock: >-
  A stiff cream card folded in thirds into a 10 by 6 cm rectangle, soft worn edges, faint brown fingerprint stains, the outside completely blank with no writing, no lines and no printing visible.
reference_images: []
```
VFX flag: the card must stay folded or out of focus; never show handwriting.

```yaml
record: prop
id: PR-FRUIT
name: "Twist of dried fruit"
description: "Waxed brown paper twisted shut at the top around about a dozen dried fruit slices, amber-brown and chewy."
size: "twist 8 cm tall; slices about 3 cm"
materials: ["waxed paper", "dried fruit"]
colors: ["paper brown #9A7448", "fruit amber-brown #A8602B"]
owner: CH-AHMA
scenes: [SC03]
states:
  - {id: PR-FRUIT:TWISTED, description: "Closed paper twist in the tin", from: SC03, cause: "revealed when the tin opens"}
  - {id: PR-FRUIT:POURED, description: "Twist opened, slices on the alley saucer", from: SC03, cause: "Lan shakes it onto the saucer"}
identity_lock: >-
  A small 8 cm twist of waxed brown paper, closed at the top, holding about a dozen chewy amber-brown dried fruit slices, each about 3 cm wide, that spill out when opened. Plain paper, no printing.
reference_images: []
```

```yaml
record: prop
id: PR-POT
name: "Noodle stockpot"
description: "Wide dented aluminium stockpot with soot on the base and two riveted handles, standing on a gas burner at the west end of the counter."
size: "40 cm diameter x 30 cm tall"
materials: ["aluminium"]
colors: ["dull aluminium #A3A5A5", "soot #2A2523"]
owner: CH-LAN
scenes: [SC01]
states:
  - {id: PR-POT:BOILING, description: "Rolling boil, steam rising, lid off", from: SC01, cause: "start"}
  - {id: PR-POT:BOIL-OVER, description: "Foamy broth rises over the rim and spills down the sides, heavy steam", from: SC01, cause: "Lan leaves it unattended while chasing"}
identity_lock: >-
  A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label.
reference_images: []
```

```yaml
record: prop
id: PR-LADLE
name: "Ladle"
description: "Long steel ladle with a wooden handle."
size: "35 cm long"
materials: ["steel", "wood"]
colors: ["steel #B5B8B8", "handle brown #6B4A2E"]
owner: CH-LAN
scenes: [SC01]
states:
  - {id: PR-LADLE:HELD, description: "In Lan's hand at the pot", from: SC01, cause: "start"}
  - {id: PR-LADLE:ABANDONED, description: "Dropped on the counter beside the pot as Lan runs", from: SC01, cause: "Lan abandons it"}
identity_lock: >-
  A 35 cm long steel ladle with a deep round bowl, slightly dented, and a plain straight brown wooden handle with a hole at the end. No decoration, no writing.
reference_images: []
```

```yaml
record: prop
id: PR-LANTERN-ALLEY
name: "Alley paper lantern"
description: "Round paper lantern with visible thin bamboo ribs, hung from an iron wall bracket by a short wire; a single warm bulb inside."
size: "30 cm diameter"
materials: ["paper", "bamboo", "iron"]
colors: ["amber paper #E0963A", "iron black #1E1C1B"]
owner: set
scenes: [SC03]
states:
  - {id: PR-LANTERN-ALLEY:LIT, description: "Glowing warm amber, steady, no flicker", from: SC03, cause: "start"}
identity_lock: >-
  A round 30 cm amber paper lantern with thin bamboo ribs, hung from an iron wall bracket by a short wire. Plain, no characters, no pattern.
reference_images: []
```

```yaml
record: prop
id: PR-STOOL
name: "Alley stool"
description: "Low four-legged wooden stool, seat dished by years of sitting, legs slightly splayed, dark honey-brown with pale wear marks."
size: "30 cm wide x 28 cm tall"
materials: ["hardwood"]
colors: ["honey-brown #8A5A33", "wear pale #C29C70"]
owner: set
scenes: [SC03]
states:
  - {id: PR-STOOL:STANDING, description: "On the alley centre line with the alley saucer on its seat", from: SC03, cause: "start"}
identity_lock: >-
  A low four-legged hardwood stool, 28 cm tall, seat worn into a shallow dish, legs slightly splayed, dark honey-brown with pale wear marks. Plain, no paint.
reference_images: []
```

```yaml
record: prop
id: PR-CART
name: "Hand cart"
description: "Two-wheel wooden hand cart with a flat bed, two long handles and bagged goods under a plain cloth. The bed sits 40 cm above the ground, leaving a gap the macaque can slip under."
size: "120 x 70 cm bed, 90 cm high at the handles"
materials: ["wood", "iron", "rubber tyres"]
colors: ["weathered wood #6F5A44", "cloth sand #B7A98E"]
owner: set
scenes: [SC02]
states:
  - {id: PR-CART:PARKED, description: "Blocking the lane across its width", from: SC02, cause: "start"}
identity_lock: >-
  A two-wheel wooden hand cart, 120 by 70 cm flat bed raised 40 cm off the ground, two long handles, bagged goods under a plain sand-coloured cloth. No writing, no painted marks.
reference_images: []
```

```yaml
record: prop
id: PR-CRATES
name: "Crate stacks"
description: "Two stacks of slatted wooden crates: one three high (90 cm), one four high (120 cm). The top front-right edge of the taller stack has a rough splintered slat (the source of Lan's graze)."
size: "each crate 50 x 35 x 30 cm"
materials: ["pale weathered wood"]
colors: ["pale wood #B79B73"]
owner: set
scenes: [SC02]
states:
  - {id: PR-CRATES:STACKED, description: "Both stacks standing in the lane", from: SC02, cause: "start"}
identity_lock: >-
  Slatted pale wooden crates, each 50 by 35 by 30 cm, in one stack three high and one four high, the taller stack with a rough splintered slat at its top edge. No stencils, no writing.
reference_images: []
```

##### Set dressing vs props
Set dressing only (no record): market bowls and racks, produce, string lights, folding round table with grey cloth, bucket and rope in the alley, other stalls' goods, wire of lanterns across the lane (red cluster above Lan's stall), drainpipe.

##### Prop sheet briefs
```yaml
sheet_brief: TIN-SHEET
type: prop
subject: PR-TIN
layout: "neutral grey ground; top view with the two brass spots, front, side, and an open view showing folded card, spoon and paper twist; scale rule of 16 cm"
content: "<PR-TIN identity_lock>"
states: [SEALED, OPEN, LID-ON]
```
```yaml
sheet_brief: SAUCERS-SHEET
type: prop
subject: PR-SAUCER-STALL and PR-SAUCER-ALLEY
layout: "side by side: stall saucer upright, face-down, face-up; alley saucer upright; chip at 3 o'clock visible; neutral grey ground; scale rule of 12 cm"
content: "<PR-SAUCER-STALL identity_lock> <PR-SAUCER-ALLEY identity_lock>"
notes: "The two saucers must be clearly twins; same chip shape and position."
```
```yaml
sheet_brief: SHELF-GROUP
type: prop
subject: PR-PHOTO + PR-TIN + PR-SAUCER-STALL
layout: "front view of the shelf group: from west to east saucer, photo, tin on a plank shelf, blank wall behind; photo face shows a laughing elderly woman without writing"
```

##### Handoff
- Produced: props@1 (REVIEW): 13 props
- For script-supervisor: state lists above. Shelf order west to east: saucer, photo, tin. SC03 ends with the tin LID-ON; SC04 "open tin" means the lid is on loosely and offset (unsealed) since the script sets the lid back in SC03. Pot is not shown in SC04 (ASSUMPTION: removed or lidded).
- For vfx-supervisor: recipe card never readable; photo face holds in close-ups; pot boil-over FX; macaque hands on tin.
- Open items: ASSUMPTION: tin colour dark green and sizes as above (user gave 16 x 10 cm). ASSUMPTION: saucer chip at 3 o'clock.
- Conflicts: none
- Next: cinematographer, script-supervisor, prompt engineers


Source: `05_look/style_bible.md`

#### Style Bible: The Two Knocks

##### Look statement
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

##### Palette notes
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

##### Color script
| Scene | Beat | Dominant | Accent | Warm/cool | Saturation | Key | Change vs previous |
|---|---|---|---|---|---|---|---|
| SC01 stall | Numb routine -> routine broken | Lantern amber + umber | Chili red lanterns, steam white | Warm | Medium-high, busy | Medium key, warm practicals, bright steam | Opening reference |
| SC02 lanes | Pursuit -> doubt -> curiosity | Umber + amber streaks in motion, grey steam haze | Chili red flashes, quick cooler pockets | Warm, drifting neutral at the end | Medium, desaturating toward the end | Mixed, uneven, darker at the lane gaps; falls quiet at the stop | Wider, darker, motion-streaked; ends with cooler hush |
| SC03 alley | Closed -> open, understanding | Alley teal shadow with one honey-amber lantern pool | Tin brass spots, saucer cream | Cool surround, warm single pool | Low surround, medium in the lantern pool | Low key, single lantern, deep shadows with detail | Biggest shift: market noise and colour fall away to one warm pool in cool dark |
| SC04 closing | Grief sealed -> grief shared | Honey tungsten + umber | Open-tin brass, saucer cream | Warm, dimmed | Medium-low, gentle | Low-medium key, dimmed lanterns, last light off | Returns to SC01 warmth but quieter and emptier, mirror of SC01 |

##### Texture, lens character, composition tendencies
- Texture: fine grain, soft halation on bulbs, damp market ground with slight sheen; fur and skin natural.
- Lens: spherical, natural softness, round bokeh, mild vignette; no flare streaks.
- Composition: Lan and the macaque always separated from the background by light or colour (apron indigo-grey vs amber; fur olive vs umber). Foreground lantern or steam elements may frame the subject but never block it. Prefer a few large readable shapes over cluttered detail.
- Motion feel (for Veo): natural handheld energy in SC01 and SC02, steadier and still in SC03 and SC04.

##### Graphics, titles and subtitles
- No in-world readable signage: signs blurred, abstract shapes or unlettered; this also avoids naming a country.
- Title card: plain warm-white (#F1E4CF) lettering on umber (#2A1D17), simple serif or humanist face, added in post; no logo.
- Subtitles (if used): warm-white, lower third, no outline-glow effects.

##### Grading intent per scene (for post)
| Scene | Intent |
|---|---|
| SC01 | Warm, slightly lifted blacks, amber highlights, steam bright but not clipped. |
| SC02 | Same warmth but slightly lower exposure and a little more contrast; let lane gaps fall off darker. Last shot cools slightly. |
| SC03 | Teal-leaning shadows, one honey pool at the lantern, skin and brass spots protected; lowest saturation outside the pool. |
| SC04 | Return to honey warmth at lower brightness; highlights soft; final frame falls to umber black. |

##### Style frames
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

##### Checks
- Style lock: 62 words (limit 30-70).
- Aspect ratio 16:9 matches the brief; Veo 3.1 and Gemini 2.5 Flash Image both support 16:9.
- All 4 scenes in the scene index have a color-script row.
- Avoid list: 6 items.

##### Handoff
- Produced: style_bible@1 / STYLE (status REVIEW)
- Built from: brief@1, story@1, screenplay@1
- Reserved anchors: CH-LAN apron indigo-grey #4A5568; CH-MACAQUE olive-brown fur #7A6A4F; PR-TIN worn brass #C9A24B
- Takes by department: character-designer / production-designer (palette anchors, rule that no other brass equals the tin spots); cinematographer (lighting philosophy, color script); prompt engineers (style_lock verbatim); film-editor (grading intent)
- Style frames: SF-01..SF-03 briefs written, not generated (no generation budget yet)
- Open items: OPEN-QUESTION: style frames cost generations; user to confirm whether to generate them after the budget is set. ASSUMPTION: "35 mm film emulation" (grain and halation) is the intended photoreal flavour; brief only says photoreal live action.
- Conflicts: none
- Next: character-designer and production-designer may proceed in parallel using this look; production-manager to present Gate 3 once all three are REVIEW


## 5. Scene breakdown

| Scene | Heading | Time | Characters | Costumes | Props (state) | Est. s | Planned s | Shots | VFX |
|---|---|---|---|---|---|---|---|---|---|
| SC01 | EXT. NIGHT MARKET - LAN'S NOODLE STALL - NIGHT | night | CH-LAN, CH-MACAQUE | CO-LAN-01, CO-MACAQUE-01 | PR-LADLE:ABANDONED, PR-LADLE:HELD, PR-PHOTO:STANDING, PR-POT:BOIL-OVER, PR-POT:BOILING, PR-SAUCER-STALL:FACEDOWN, PR-SAUCER-STALL:UPRIGHT, PR-TIN:SEALED | 22 | 23.5 | 10 | 5 |
| SC02 | EXT. NIGHT MARKET - LANES - CONTINUOUS | night | CH-LAN, CH-MACAQUE | CO-LAN-01, CO-MACAQUE-01 | PR-CART:PARKED, PR-CRATES:STACKED, PR-TIN:SEALED | 32 | 32.0 | 11 | 1 |
| SC03 | EXT. BACK ALLEY - NIGHT | night | CH-LAN, CH-MACAQUE | CO-LAN-01, CO-MACAQUE-01 | PR-CARD:FOLDED, PR-FRUIT:POURED, PR-FRUIT:TWISTED, PR-LANTERN-ALLEY:LIT, PR-SAUCER-ALLEY:EATEN, PR-SAUCER-ALLEY:EMPTY, PR-SAUCER-ALLEY:FRUIT, PR-SPOON:IN-TIN, PR-STOOL:STANDING, PR-TIN:LID-ON, PR-TIN:OPEN, PR-TIN:SEALED | 26 | 29.5 | 12 | 3 |
| SC04 | EXT. NIGHT MARKET - LAN'S NOODLE STALL - LATER | night | CH-LAN, CH-MACAQUE | CO-LAN-01, CO-MACAQUE-01 | PR-PHOTO:STANDING, PR-SAUCER-STALL:FACEDOWN, PR-SAUCER-STALL:FACEUP, PR-TIN:LID-ON | 10 | 11.0 | 5 | 3 |


## 6. Scenes


### SC01 — EXT. NIGHT MARKET - LAN'S NOODLE STALL - NIGHT


#### Direction
Source: `06_direction/SC01_direction.md`

##### SC01 Direction: EXT. NIGHT MARKET - LAN'S NOODLE STALL - NIGHT

Approved under the autonomy policy (see PRODUCTION_LOG.md).

###### Must-see story facts
- Lan cooks and serves without looking at her hands (numb routine).
- Two fingers touch the tin's worn lid spots without looking, without stopping (key image).
- The framed photo of Ah Ma (mid-laugh, hand tapping the same tin) sits beside the tin.
- Lan turns the chipped STALL saucer face-down, irritated.
- A customer takes a bowl and goes; Lan wipes the counter.
- The macaque (notched left ear) sits very still on the lantern wire, watching the tin.
- Lan says "Almost closing." to the pot, flat.
- The wire dips; the macaque drops onto the shelf; both hands close on the tin.
- Lan turns: "Hey!"
- The macaque runs along the counter with the tin against its chest; the tin rattles; the pot boils over.
- Lan abandons the ladle and runs.

###### Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Lan | To get through the night without feeling anything | The shelf: tin, photo, saucer | Habit: touch without looking, turn the saucer away, stay busy |
| Macaque | The tin, and the ritual it belongs to | Lan's hands and attention | Waits perfectly still, picks the moment her back is turned |

- Subtext: Lan's two fingers on the tin are a ritual she will not admit to. The saucer face-down is grief she hides in plain sight. The macaque is watching, not scheming.
- Turn: the wire dips and the macaque drops. Routine is broken.
- Audience position: the audience knows about the macaque before Lan does (suspense, gentle).
- Visual thesis: the shelf is the emotional centre and Lan never looks at it. Every shot of the shelf is close and still; every shot of Lan stays on her work and away from it. The audience looks where she will not. Carried by SH020, SH030 (shelf close), SH010, SH040, SH060 (Lan's work, eyes down).
- Genre playbook: drama, with a light thriller beat at the macaque's wait and drop. Exception: the exit runs on the comic energy of the boil-over.

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | Routine: ladle noodles | Lan | Action lines 1-3 |
| B2 | Habit: fingers on tin, saucer turned face-down | Lan | "Lan passes the shelf..." and "She sees the chipped saucer..." |
| B3 | Customer goes, counter wiped | Lan | "A CUSTOMER..." |
| B4 | The watcher: macaque on the wire | Macaque | "On a lantern wire..." |
| B5 | Pressure: "Almost closing." wire dips, drop | Macaque | "Behind her, the wire dips..." |
| B6 | Turn: Lan turns, "Hey!", the theft, boil-over, she runs | Macaque, then Lan | "Lan turns." to "Lan abandons the ladle and runs." |

###### Blocking
Floor plan: LOC-NIGHT-MARKET (stall L1, shelf L2, wire L3).
- Start: Lan behind the counter facing north (toward the lane and the camera), pot at the counter's west end (screen right), shelf on the rear post behind her at her right (east, screen left). Order on the shelf west to east: STALL saucer, photo, tin. The macaque is not yet in view.
- B1: Lan ladles noodles at the counter, facing the camera, eyes on the bowl.
- B2: Lan turns left (east) toward the shelf as she crosses behind it; her right hand brushes the tin lid with two fingers; then she reads the saucer and turns it face-down with the same hand.
- B3: The customer (extra, soft focus) steps up on the lane side, takes the bowl, walks away screen left (east, away from the chase direction). Lan wipes the counter.
- B4-B5: The macaque sits on the wire above the shelf, body turned toward the tin. Lan stands at the pot, back to the shelf.
- B6: The macaque drops onto the shelf, takes the tin, runs west along the counter (screen right) past Lan and her pot. Lan turns toward the shelf, cries "Hey!", then runs screen right after it, dropping the ladle.
- End positions: macaque and Lan both leaving frame screen right; the pot boiling over behind them.
- Axis of action and camera side: the line of the counter, east to west. The camera stays north of the counter in the lane, looking south.
- Screen direction in/out: east = screen left, west = screen right. Everything that leaves the stall in SC01 leaves screen right. SC02 begins with travel screen right.

###### Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Lan | To keep busy | Eyes on the pot and bowl, quick efficient hands, shoulders slightly forward, face slack |
| B2 | Lan | To not feel it | Two fingers touch the lid and keep moving; her eyes are on the ladle or the noodles, not on the tin; then a flick of annoyance at the saucer, one hand turning it, mouth tightening |
| B3 | Lan | To dismiss | Wiping in wide, hard arcs; she does not look up at the customer |
| B4 | Macaque | To wait | Absolute stillness; only the eyes move, tracking Lan's hand and then settling on the tin |
| B5 | Lan | To close the day | The line is flat, to the pot, not to anyone |
| B5 | Macaque | To choose a moment | Weight shifts forward on the wire; the wire dips |
| B6 | Macaque | To take what is its own | Both hands close on the tin quickly, not frantically; it runs low, tin held against its chest |
| B6 | Lan | To stop the theft | Spin, mouth open on "Hey!", arm out toward the shelf, then drops the ladle and runs |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01-SH010 | WS | eye-level | static | Lan at the stall, red lanterns above | Lan ladles noodles into a bowl; steam rolls; ends with the bowl full and the ladle lifting | stall centre, red lantern cluster top, wire crossing above, soft shoppers in background | normal, deep-ish | warm amber practicals, bright steam | 3.0 | Establish the stall and the numb routine | cut |
| SC01-SH020 | CU | eye-level | static | Lan's hand and the tin | Two fingers of her right hand brush the worn brass spots on the lid as she passes; the photo of Ah Ma beside the tin is soft; ends with the hand leaving frame | tin lid centre, photo soft at the right edge (Ah Ma's laugh half-visible, never readable; from the north the shelf reads east to west, screen left to right: tin, photo, saucer) | short telephoto, shallow | warm tungsten from the stall bulb, steam backlight | 2.5 | The key image: touch without looking | cut |
| SC01-SH030 | CU | eye-level | static | The STALL saucer on the shelf | Lan's right hand enters, turns the saucer face-down; ends with the underside showing | saucer centre, photo soft at its left (shelf order from the north: tin, photo, saucer) | short telephoto, shallow | same as SH020 | 2.5 | Her irritation; the grief she hides | cut |
| SC01-SH040 | MS | eye-level | static | Customer and Lan across the counter | A customer takes the bowl and walks away screen left; Lan wipes the counter with hard arcs, eyes down; ends wiping | Lan centre-right, customer left, faceless and soft | normal, shallow | warm amber | 2.5 | Routine, no connection | cut |
| SC01-SH050 | CU | low | static | The macaque on the lantern wire | Perfectly still, looking down at the tin; only its eyes move to settle on it; notched ear visible; ends with its eyes locked on the tin | macaque upper right, red lanterns soft behind | medium telephoto, shallow | warm lantern rim, dark above | 2.5 | The watcher; plant the notched ear and the intent | cut |
| SC01-SH060 | MS | eye-level | static | Lan at the pot | "Almost closing." said flat to the pot; ends with her eyes on the pot, ladle in hand | Lan screen right of centre, pot right, shelf blurred at the left edge | normal, medium DOF | warm steam backlight | 2.5 | Her line; the macaque is behind her | cut |
| SC01-SH070 | WS | slightly low | static | Shelf and wire | The wire dips; the macaque drops onto the shelf and both hands close on the tin; ends with the macaque crouched on the shelf holding the tin; Lan small, back turned, at the pot about 2.5 m from the shelf | shelf left, Lan right with back turned | normal, deep | warm amber, steam | 2.0 | The theft | cut |
| SC01-SH080 | MS | eye-level | static | Lan turning | Lan spins toward the shelf and shouts "Hey!"; ends with her arm out and mouth open | Lan centre, shelf blurred at left | normal | warm | 1.5 | Her reaction and the turn of the scene | cut on action |
| SC01-SH090 | WS | eye-level | follow | The macaque on the counter | The macaque runs west along the counter with the tin against its chest, tin rattling; the pot boils over at the counter's west end; ends with the macaque exiting screen right | counter along the lower third, pot at right | normal | warm, steam | 2.5 | The chase begins; the pot's boil-over shows what she has abandoned | cut on action |
| SC01-SH100 | MS | eye-level | static | Lan at the pot | Lan drops the ladle on the counter and runs, exiting screen right past the boiling-over pot | pot foreground right, Lan centre | normal | warm, heavy steam | 2.0 | She abandons her routine | cut on action to SC02 |

Total: 23.5 s vs estimate 22 s (+7%).

###### Coverage and rhythm
Slow and close for the shelf (SH020, SH030), medium and unhurried for the routine (SH010, SH040), stillness for the macaque (SH050), then the pace breaks at SH070. Shots shorten from 2.5 s to 1.5 s through the theft, so the cut itself accelerates. Every must-see fact is covered; no event is added. Lan does not appear in a frame with the macaque in contact: in SH070 she is small in the same frame but turned away and about 2.5 m from the shelf.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH020 | Photo face and its content must hold in a close shot; no readable text | Photo soft and half in frame; CH-AHMA lock pasted verbatim in the keyframe; face never the focus |
| SH030 | Saucer chip must stay at 3 o'clock; face-down state | Saucer shown upright in the start frame, face-down in the end frame (first-last-frame) |
| SH050 | Notch must stay on the animal's own LEFT ear | The macaque faces screen left in three-quarter view so its left ear is the one nearest the camera |
| SH070 | Wire dip, animal drop and tin in hands in one shot | One action (the drop); tin hands kept short; wide so no detail is needed |
| SH090 | Boil-over steam VFX; the animal running along a counter with a prop | Pot at the edge; the macaque is the only moving subject; the boil-over is the environmental motion |
| SH100 | Dropped ladle | Drop shown by the sound and the ladle landing on the counter; no fine hand work |

###### Specialist and VFX flags
- action-director: none for SC01 (the chase starts in SC02).
- animation-director: not applicable (live action).
- vfx: boil-over foam and steam (SH090, SH100); photo face stays soft (SH020); no readable signs.

###### Handoff
- Produced: SC01_direction@1 (APPROVED under autonomy policy), 10 shots, 23.5 s
- Built from: screenplay@1, style_bible@1, LOC-NIGHT-MARKET@1, CH-LAN@1, CH-MACAQUE@1, CH-AHMA@1, props@1
- For cinematographer: warm busy amber with bright steam backlight; shelf shots are the stillest; SH050 low and long; light direction: stall bulb and steam from behind and above the counter, motivated.
- For script-supervisor: axis east to west, camera north of the counter; exits screen right; the saucer ends FACEDOWN; the tin ends in the macaque's arms (SEALED); the ladle ends ABANDONED on the counter.
- Open items: wire height (LOC-NIGHT-MARKET says 2.4 m in the description but "70 cm above the shelf" at 140 cm = 2.1 m): production-designer to settle; the director's shots do not depend on it. ASSUMPTION: the customer is an unnamed extra, faceless and soft.
- Next: cinematographer, script-supervisor


#### Camera and lighting
Source: `07_camera/SC01_camera.md`

##### SC01 Camera and Lighting: EXT. NIGHT MARKET - LAN'S NOODLE STALL - NIGHT

Approved under the autonomy policy (see PRODUCTION_LOG.md).

Color script row: dominant lantern amber + umber; accent chili red and steam white; warm; medium-high saturation; medium key. Time/weather: night, dry. Format: 16:9, 24 fps, 180-degree shutter feel (natural motion blur), spherical prime look, 35 mm film emulation (fine grain, soft halation), mild natural vignette, round warm bokeh.

###### Lighting setups

####### Setup SC01-L1: Stall at work: warm, busy, steam-backlit
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | Bare tungsten stall bulb on the east post above the counter | From the east, 45 degrees above eye line: camera-left, high, slightly behind the subject plane | Hard-ish, small source, falls off fast | 2700 K warm tungsten (honey #F2B35E) | Motivated by the bulb with the wall switch (LOC-NIGHT-MARKET L1) |
| Fill | Bounce from the counter, steam and the paper lanterns | Camera-right, low, wrapping | Soft, large | 2900 K amber | About 3:1 key to fill; no added fill unit |
| Rim | Gas burner flame and steam backlight at the counter's west end | Behind and to camera-right, low | Soft glow with steam scatter | 2000 K orange flame into warm-white steam #F1E4CF | Separates Lan's indigo-grey apron from the umber background |
| Practicals | Three chili-red paper lanterns on the wire, string-light bulbs | Overhead, in frame | Soft, bloom with 35 mm halation | Red #B8362B, amber #E0963A, bulbs 2700 K | Round warm bokeh in the background |
| Atmosphere | Steam from the stockpot and wok | Drifts up and left from camera-right | Visible volumetric haze, backlit | Warm white | Heavy on the boil-over (SH090, SH100) |

Contrast feel: Medium-high: shadows deep with detail near #14100E, highlights bloom softly. Lifted blacks, no crushing.
Changes during scene: Steam density rises at the boil-over (SH090-SH100). Otherwise constant: light direction does not change.

```
camera (N of counter, looking S)
            ^ N
 screen-L (E)                         screen-R (W)
 [E post: stall bulb KEY] ... [shelf: saucer, photo, tin] ... [counter] ... [burner + pot: RIM/steam]
        red lanterns + wire overhead (practical)         bounce FILL from counter, camera-right
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement | Movement execution | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC01-SH010 | SC01-L1 | 28 | f/4, medium-deep | Lan at the counter, sharp; red lantern cluster and wire softly sharp; shoppers soft | 1.5 | 4.5 | In the lane, 4.5 m north of the counter, on the stall's centre line, looking south | tripod | static | Locked off. | 28 mm wide: the whole stall in one frame, red lanterns at the top, background shoppers soft |
| SC01-SH020 | SC01-L1 | 85 | f/2, shallow | The two brass spots on the tin lid sharp; the photo to the left falls off soft; steam behind | 1.4 | 2.5 | In the lane, 2.5 m north-west of the stall, 20 degrees off axis, aimed at the east end of the shelf (tin); Lan passes below and in front of the lid without hiding it | tripod | static | Locked off. Lan's right hand enters from the right, touches the lid and leaves to the left. | 85 mm, tight and compressed, razor-thin focus on the brass spots, creamy amber background |
| SC01-SH030 | SC01-L1 | 85 | f/2, shallow | Saucer rim and the chip at 3 o'clock sharp; photo soft behind | 1.4 | 2.5 | Same off-axis position as SH020, aimed at the west (saucer) end of the shelf | tripod | static | Locked off. The saucer turns face-down in the frame. | 85 mm close, shallow focus, saucer chip crisp, warm blur behind |
| SC01-SH040 | SC01-L1 | 50 | f/2.8, shallow-medium | Lan's face and wiping hand sharp; the customer soft in the left of frame | 1.4 | 3.0 | In the lane, 3 m north of the counter, centre of the stall | tripod | static | Locked off. | 50 mm natural perspective, Lan sharp, customer soft and faceless |
| SC01-SH050 | SC01-L1 | 135 | f/2.8, shallow | The macaque's eyes and notched ear sharp; lanterns behind are soft red and amber discs | 1.0 | 5.0 | In the lane, 5 m north-east of the stall, camera at 1.0 m looking up about 25 degrees at the wire | tripod | static | Locked off. Only the macaque's eyes move. | 135 mm long lens, compressed, macaque isolated against round warm bokeh, low looking-up angle |
| SC01-SH060 | SC01-L1 | 50 | f/2.8, shallow-medium | Lan's face; pot steam and shelf soft | 1.5 | 3.0 | In the lane, 3 m north of the counter, centred on the pot end (screen right) | tripod | static | Locked off. | 50 mm, Lan sharp at screen right of centre, blurred shelf at the left edge |
| SC01-SH070 | SC01-L1 | 35 | f/4, medium-deep | Shelf plane sharp, Lan small and slightly soft at the pot | 1.2 | 4.0 | In the lane, 4 m north-east of the stall, slightly low, looking south-west at shelf and pot | tripod | static | Locked off. The macaque drops from the top edge onto the shelf at screen left. | 35 mm, slight low angle, shelf left and Lan small at right, red lanterns top |
| SC01-SH080 | SC01-L1 | 50 | f/2.8, shallow-medium | Lan's face and raised arm sharp | 1.5 | 3.0 | In the lane, 3 m north of the counter, centred | handheld | static | Handheld with a slight natural shake, no re-framing; Lan spins into the frame. | 50 mm, slightly handheld energy, Lan's open mouth and extended arm |
| SC01-SH090 | SC01-L1 | 35 | f/4, medium | The macaque and tin sharp throughout; pot steam soft at screen right | 1.1 | 3.0 | In the lane, 3 m north of the counter, tracking west | steadicam/gimbal | follow | Tracks west (screen right) about 6 m in 2.5 s at the macaque's pace, ending as it leaves frame right; steam rises in the right of the frame. | 35 mm tracking beside the macaque, tin clutched to its chest, steam boiling over at the right |
| SC01-SH100 | SC01-L1 | 35 | f/4, medium | Lan; the pot's foam in the foreground right slightly soft | 1.4 | 3.5 | In the lane, 3.5 m north of the counter, centred on the pot end | handheld | static | Handheld; Lan drops the ladle and exits frame right. | 35 mm, boil-over foam and heavy steam foreground right, Lan running out of frame right |

###### Consistency notes
- Key side: the stall bulb stays camera-left (east) in every shot of the setup, so Lan's face is lit from screen left and the shelf sits at screen left. Steam and burner rim from screen right.
- Matched pair: SC01-SH010 and SC04-SH010 are the same camera, lens and position (the mirror). SC01-SH020/SH030 and SC04-SH030/SH020 are matched insert positions.
- Eyeline heights: Lan's eye height 1.5 m (160 cm); counter 0.9 m; shelf 1.4 m; macaque on the wire 2.1 m (wire height inconsistency noted in the direction handoff).

###### Proposals to the director and production-designer
- PROPOSAL (production-designer): confirm wire height 2.1 m or 2.4 m (LOC-NIGHT-MARKET describes both).

###### Handoff
- Produced: SC01_camera@1 (APPROVED under autonomy policy), 1 lighting setup (SC01-L1), 10 shots specified
- Built from: SC01_direction@1, LOC-NIGHT-MARKET@1, style_bible@1
- Open items: see proposals above (no new light sources added to any set)
- Conflicts: none
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC01` in section 11.


#### Shot records
Source: `08_master/shots/SC01.md`

##### SC01 Shot Records: EXT. NIGHT MARKET - LAN'S NOODLE STALL - NIGHT

Compiled by the production-manager from the direction, camera and continuity documents. 10 shots, 23.5 s. Frame text pastes the identity, costume, prop, location and style locks verbatim.

###### SC01-SH010

```yaml
record: shot
id: SC01-SH010
scene: SC01
status: REVIEW
version: 2
depends_on:
- SC01_direction@1
- SC01_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: Establish the stall and Lan's numb routine
screenplay_ref: SC01, action lines 1-3 (steam, wok, Lan ladles noodles)
duration_s: 3.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state BASE: hair neat in the low knot with two short strands framing the face, a few small broth
    stains on the apron front, sleeves rolled to the elbow, forearms unmarked'
  position: centre of frame behind the counter, midground, about 4.5 m from camera, full figure
  facing: toward camera, head bowed to the bowl
  action: ladles noodles into a bowl with her right hand
  expression_start: slack, neutral, eyes down
  expression_end: slack, neutral, eyes down
  eyeline: down to the bowl
props:
- id: PR-POT
  state: PR-POT:BOILING
  position: on the burner at the counter's west end, frame right of Lan, steaming
- id: PR-LADLE
  state: PR-LADLE:HELD
  position: in Lan's right hand over the bowl
- id: PR-TIN
  state: PR-TIN:SEALED
  position: on the shelf behind Lan at frame left, small
- id: PR-PHOTO
  state: PR-PHOTO:STANDING
  position: on the shelf between the tin and the saucer
- id: PR-SAUCER-STALL
  state: PR-SAUCER-STALL:UPRIGHT
  position: on the shelf at the west end, frame right of the photo
location:
  id: LOC-NIGHT-MARKET
  area: 'Lan''s stall front: counter, shelf on the rear post at frame left, lantern wire above'
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: out-of-focus counter edge with blank bowls, lower frame
  midground: Lan at the counter, pot at frame right, shelf with tin, photo and saucer at frame left
  background: soft-focus lane, a few faceless shoppers, string-light bulbs
  composition: stall centred, red lantern cluster and wire across the top third
camera:
  shot_size: WS
  angle: eye-level
  height_m: 1.5
  distance_m: 4.5
  position: In the lane, 4.5 m north of the counter, on the stall's centre line, looking south
  lens_mm: 28
  aperture: f/4
  depth_of_field: medium-deep
  focus: Lan at the counter, sharp; red lantern cluster and wire softly sharp; shoppers soft
  movement: static
  movement_execution: Locked off.
  support: tripod
  setup: SC01-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K tungsten stall bulb from camera-left (east), high, hard
  fill: Soft amber bounce from counter and steam, camera-right, about 3:1
  rim: Orange burner flame through warm-white steam behind and camera-right
  practicals: Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs
  shadows: 'Soft-edged, falling to camera-right and down, detail kept near #14100E'
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'steam warm white #F1E4CF'
  - 'chili red #B8362B'
screen_direction: Camera north of the counter looking south; east = frame left (shelf, tin), west = frame right
  (pot)
start_state: Lan holds the ladle over an empty bowl, shelf props in place
end_state: the bowl is full and the ladle is lifting clear
action_timeline:
- '0.0-1.5 s: Lan ladles noodles into the bowl'
- '1.5-3.0 s: she lifts the ladle clear; the bowl is full'
dialogue: []
sound: 'sfx.md@1: SFX-SC01-001, SFX-SC01-002, SFX-SC01-003; ambience bed SC01. Wok and burner hiss under the noodle pot, rolling boil, steam release; Lan''s ladle dips into broth and lands noodles in the bowl, slosh; Wet cloth and apron rustle as she lifts the ladle clear'
music: 'none: silence or market source sound only (music.md@1)'
vfx: none
transition_in: fade-in (film opening; derived, film-editor may change)
transition_out: cut
continuity:
- 'Saucer UPRIGHT, tin SEALED on the shelf; shelf order from the north, frame left to right: tin, photo, saucer'
- 'Lan BASE: no graze, hair neat'
- Pot BOILING, lid off
generation:
  mode: image-to-video
  start_frame: 'Wide shot, eye-level angle, 28 mm lens at f/4, camera 1.5 m high, medium-deep depth of field, 28
    mm wide: the whole stall in one frame, red lanterns at the top, background shoppers soft. Lan, a Southeast Asian
    woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes,
    straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey
    cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on
    shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot
    with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the
    elbow, forearms unmarked. Position: centre of frame behind the counter, midground, about 4.5 m from camera,
    full figure; toward camera, head bowed to the bowl; standing behind the counter with the ladle in her right
    hand over an empty bowl; expression: slack, neutral, eyes down. A wide dented aluminium stockpot, 40 cm across
    and 30 cm tall, soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a
    wooden counter. No lid, no label. State BOILING: on the burner at the counter''s west end, frame right of Lan,
    steaming. A 35 cm long steel ladle with a deep round bowl, slightly dented, and a plain straight brown wooden
    handle with a hole at the end. No decoration, no writing. State HELD: in Lan''s right hand over the bowl. A
    round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit
    lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing,
    no handle. State SEALED: on the shelf behind Lan at frame left, small. A small 13 by 18 cm faded color photograph
    in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly
    woman tapping a tin. No writing, no date, no caption. State STANDING: on the shelf between the tin and the saucer.
    A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip
    in the rim at the 3 o''clock position. Plain, no pattern, no writing. State UPRIGHT: on the shelf at the west
    end, frame right of the photo. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with
    corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire
    strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf,
    steel stockpot and wok burner. Area: Lan''s stall front: counter, shelf on the rear post at frame left, lantern
    wire above. Foreground: out-of-focus counter edge with blank bowls, lower frame. Midground: Lan at the counter,
    pot at frame right, shelf with tin, photo and saucer at frame left. Background: soft-focus lane, a few faceless
    shoppers, string-light bulbs. Composition: stall centred, red lantern cluster and wire across the top third.
    Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from
    counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right;
    practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows
    Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette:
    night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action
    cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Wide shot, eye-level angle, 28 mm lens at f/4, camera 1.5 m high, medium-deep depth of field, 28 mm
    wide: the whole stall in one frame, red lanterns at the top, background shoppers soft. Lan, a Southeast Asian
    woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes,
    straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey
    cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on
    shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot
    with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the
    elbow, forearms unmarked. Position: centre of frame behind the counter, midground, about 4.5 m from camera,
    full figure; toward camera, head bowed to the bowl; standing behind the counter lifting the ladle clear of a
    full bowl; expression: slack, neutral, eyes down. A wide dented aluminium stockpot, 40 cm across and 30 cm tall,
    soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter.
    No lid, no label. State BOILING: on the burner at the counter''s west end, frame right of Lan, steaming. A 35
    cm long steel ladle with a deep round bowl, slightly dented, and a plain straight brown wooden handle with a
    hole at the end. No decoration, no writing. State HELD: in Lan''s right hand over the bowl. A round dented tin,
    16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly
    two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State
    SEALED: on the shelf behind Lan at frame left, small. A small 13 by 18 cm faded color photograph in a plain
    dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping
    a tin. No writing, no date, no caption. State STANDING: on the shelf between the tin and the saucer. A small
    12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the
    rim at the 3 o''clock position. Plain, no pattern, no writing. State UPRIGHT: on the shelf at the west end,
    frame right of the photo. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal
    and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper
    lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and
    wok burner. Area: Lan''s stall front: counter, shelf on the rear post at frame left, lantern wire above. Foreground:
    out-of-focus counter edge with blank bowls, lower frame. Midground: Lan at the counter, pot at frame right,
    shelf with tin, photo and saucer at frame left. Background: soft-focus lane, a few faceless shoppers, string-light
    bulbs. Composition: stall centred, red lantern cluster and wire across the top third. Light: key Warm 2700 K
    tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right,
    about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on
    the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to
    camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17,
    lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film
    grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns,
    string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep
    teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture,
    clean frame without text, logos or watermarks.'
  motion: '0-1.5 s: Lan ladles noodles into the bowl with her right hand. 1.5-3.0 s: she lifts the ladle clear;
    the bowl is full. Camera static. Steam rolls up from the pot.'
  clip_length_s: 4
  risks:
  - sparse faceless shoppers; keep signs blank
```

###### SC01-SH020

```yaml
record: shot
id: SC01-SH020
scene: SC01
status: REVIEW
version: 3
depends_on:
- SC01_direction@1
- SC01_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: 'The key image: two fingers touch the tin without looking'
screenplay_ref: SC01, action line 'Two fingers touch the tin's lid on the worn spots. She doesn't look.'
duration_s: 2.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state BASE: hair neat in the low knot with two short strands framing the face, a few small broth
    stains on the apron front, sleeves rolled to the elbow, forearms unmarked'
  position: only her right hand and wrist enter from the lower right of frame; body out of frame
  facing: n/a (hand only)
  action: two fingers of her right hand brush the two brass spots on the lid and move on
  expression_start: out of frame (hand only)
  expression_end: out of frame (hand only)
  eyeline: none (her eyes are elsewhere)
props:
- id: PR-TIN
  state: PR-TIN:SEALED
  position: frame centre on the shelf, lid facing up toward camera, the two brass spots catching light
- id: PR-PHOTO
  state: PR-PHOTO:STANDING
  position: soft and out of focus at the right edge of frame
location:
  id: LOC-NIGHT-MARKET
  area: the shelf on the rear post, east end
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: none
  midground: the tin lid, centre
  background: soft photo frame at the right edge, steam and warm bokeh behind
  composition: tin lid centre, photo soft at the right edge (from the north the shelf reads tin, photo, saucer left
    to right)
camera:
  shot_size: CU
  angle: eye-level
  height_m: 1.4
  distance_m: 2.5
  position: In the lane, 2.5 m north-west of the stall, 20 degrees off axis, aimed at the east end of the shelf
    (tin); Lan passes below and in front of the lid without hiding it
  lens_mm: 85
  aperture: f/2
  depth_of_field: shallow
  focus: The two brass spots on the tin lid sharp; the photo to the left falls off soft; steam behind
  movement: static
  movement_execution: Locked off. Lan's right hand enters from the right, touches the lid and leaves to the left.
  support: tripod
  setup: SC01-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K tungsten stall bulb from camera-left (east), high, hard
  fill: Soft amber bounce from counter and steam, camera-right, about 3:1
  rim: Orange burner flame through warm-white steam behind and camera-right
  practicals: Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs
  shadows: 'Soft-edged, falling to camera-right and down, detail kept near #14100E'
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'steam warm white #F1E4CF'
  - 'chili red #B8362B'
screen_direction: Camera 20 degrees off axis north-west of the stall; Lan's hand moves right to left (east)
start_state: hand entering with two fingers extended, a hand's width from the lid
end_state: hand gone, the tin lid alone with its two brass spots
action_timeline:
- '0.0-1.0 s: the hand approaches from the right'
- '1.0-1.6 s: two fingers brush the two brass spots without stopping'
- '1.6-2.5 s: the hand leaves the frame to the left'
dialogue: []
sound: 'sfx.md@1: SFX-SC01-004; ambience bed SC01. Soft fingertip tick on the tin lid, two light taps of skin on lacquered metal (not the kno'
music: 'none: silence or market source sound only (music.md@1)'
vfx: 'flag for vfx-supervisor: the photo of Ah Ma must stay soft; no readable detail'
transition_in: cut from SC01-SH010
transition_out: cut
continuity:
- Right hand only; no graze on the right forearm yet
- Tin SEALED
- Fingers touch the worn spots, as in the key image repeated in SC04-SH030
generation:
  mode: image-to-video
  start_frame: 'Close-up, eye-level angle, 85 mm lens at f/2, camera 1.4 m high, shallow depth of field, 85 mm,
    tight and compressed, razor-thin focus on the brass spots, creamy amber background. Lan, a Southeast Asian woman
    in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight
    thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton
    work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes.
    No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot
    with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the
    elbow, forearms unmarked. Position: only her right hand and wrist enter from the lower right of frame; body out of frame; only the hand and wrist are in frame, no face and no body; her right hand entering from the lower right, two fingers extended, a hand''s
    width from the lid. A round dented tin, 16 cm across and 10 cm tall, dark
    green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side
    by side on top, small dents on the side. No label, no writing, no handle. State SEALED: frame centre on the
    shelf, lid facing up toward camera, the two brass spots catching light. A small 13 by 18 cm faded color photograph
    in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly
    woman tapping a tin. No writing, no date, no caption. State STANDING: soft and out of focus at the right edge
    of frame. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and
    faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper
    lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and
    wok burner. Area: the shelf on the rear post, east end. Foreground: none. Midground: the tin lid, centre. Background:
    soft photo frame at the right edge, steam and warm bokeh behind. Composition: tin lid centre, photo soft at
    the right edge (from the north the shelf reads tin, photo, saucer left to right). Light: key Warm 2700 K tungsten
    stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right,
    about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on
    the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to
    camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17,
    lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film
    grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns,
    string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep
    teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture,
    clean frame without text, logos or watermarks.'
  end_frame: 'Close-up, eye-level angle, 85 mm lens at f/2, camera 1.4 m high, shallow depth of field, 85 mm, tight
    and compressed, razor-thin focus on the brass spots, creamy amber background. Lan, a Southeast Asian woman in
    her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight
    thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton
    work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes.
    No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot
    with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the
    elbow, forearms unmarked. Position: only her right hand and wrist enter from the lower right of frame; body out of frame; only the hand and wrist are in frame, no face and no body; the hand has left the frame to the left; the lid sits alone. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and
    corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the
    side. No label, no writing, no handle. State SEALED: frame centre on the shelf, lid facing up toward camera,
    the two brass spots catching light. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden
    frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing,
    no date, no caption. State STANDING: soft and out of focus at the right edge of frame. Covered open-air night
    market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered
    sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns
    above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the shelf on the rear post,
    east end. Foreground: none. Midground: the tin lid, centre. Background: soft photo frame at the right edge,
    steam and warm bokeh behind. Composition: tin lid centre, photo soft at the right edge (from the north the shelf
    reads tin, photo, saucer left to right). Light: key Warm 2700 K tungsten stall bulb from camera-left (east),
    high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame
    through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper
    lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept
    near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam
    warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9.
    Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall
    steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth
    of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos
    or watermarks.'
  motion: '0-1.0 s: Lan''s right hand enters from the lower right toward the lid. 1.0-1.6 s: two fingers brush the
    two brass spots without pausing. 1.6-2.5 s: the hand exits left. Camera static; steam drifts behind.'
  clip_length_s: 4
  risks:
  - 'only two fingers touch: keep the hand to five fingers'
  - photo face stays soft
```

###### SC01-SH030

```yaml
record: shot
id: SC01-SH030
scene: SC01
status: REVIEW
version: 3
depends_on:
- SC01_direction@1
- SC01_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: 'Lan''s irritation: she hides the saucer'
screenplay_ref: SC01, action line 'She sees the chipped saucer. Irritated, she turns it face-down.'
duration_s: 2.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state BASE: hair neat in the low knot with two short strands framing the face, a few small broth
    stains on the apron front, sleeves rolled to the elbow, forearms unmarked'
  position: only her right hand and wrist enter from the lower right; body out of frame
  facing: n/a (hand only)
  action: turns the saucer over onto its face
  expression_start: out of frame (hand only)
  expression_end: out of frame (hand only)
  eyeline: none
props:
- id: PR-SAUCER-STALL
  state: PR-SAUCER-STALL:FACEDOWN
  position: frame centre on the shelf; starts UPRIGHT with the chip at 3 o'clock, ends face-down with the unglazed
    foot ring showing
- id: PR-PHOTO
  state: PR-PHOTO:STANDING
  position: soft behind at frame left
location:
  id: LOC-NIGHT-MARKET
  area: the shelf on the rear post, west end
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: none
  midground: the saucer, centre
  background: soft photo frame at the left, warm bokeh
  composition: saucer centre, photo soft at its left
camera:
  shot_size: CU
  angle: eye-level
  height_m: 1.4
  distance_m: 2.5
  position: Same off-axis position as SH020, aimed at the west (saucer) end of the shelf
  lens_mm: 85
  aperture: f/2
  depth_of_field: shallow
  focus: Saucer rim and the chip at 3 o'clock sharp; photo soft behind
  movement: static
  movement_execution: Locked off. The saucer turns face-down in the frame.
  support: tripod
  setup: SC01-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K tungsten stall bulb from camera-left (east), high, hard
  fill: Soft amber bounce from counter and steam, camera-right, about 3:1
  rim: Orange burner flame through warm-white steam behind and camera-right
  practicals: Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs
  shadows: 'Soft-edged, falling to camera-right and down, detail kept near #14100E'
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'steam warm white #F1E4CF'
  - 'chili red #B8362B'
screen_direction: Camera 20 degrees off axis north-west; hand enters from the right
start_state: the saucer stands upright, its chip at 3 o'clock, a hand arriving
end_state: the saucer lies face-down, blank underside and foot ring showing
action_timeline:
- '0.0-0.8 s: the hand reaches the saucer'
- '0.8-1.8 s: she turns it over onto its face'
- '1.8-2.5 s: the hand withdraws'
dialogue: []
sound: 'sfx.md@1: SFX-SC01-005; ambience bed SC01. Saucer lifted and turned: ceramic scrape, then a small clack as it lands face-down'
music: 'none: silence or market source sound only (music.md@1)'
vfx: VFX-SC01-SH030
transition_in: cut from SC01-SH020
transition_out: cut
continuity:
- PR-SAUCER-STALL goes UPRIGHT to FACEDOWN here
- Right hand, no graze
generation:
  mode: first-last-frame
  start_frame: 'Close-up, eye-level angle, 85 mm lens at f/2, camera 1.4 m high, shallow depth of field, 85 mm close,
    shallow focus, saucer chip crisp, warm blur behind. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim
    and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm
    medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow
    off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton
    bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to
    the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or
    text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face,
    a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: only
    her right hand and wrist enter from the lower right; body out of frame; only the hand and wrist are in frame, no face and no body; her right hand reaching
    the upright saucer. A small 12 cm cream-glazed ceramic saucer with a thin
    dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern,
    no writing. State UPRIGHT: frame centre on the shelf, standing on its rim with the chip at 3 o''clock visible. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden
    frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing,
    no date, no caption. State STANDING: soft behind at frame left. Covered open-air night market lane, 3 m wide,
    of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp
    swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small
    noodle stall with a plank shelf, steel stockpot and wok burner. Area: the shelf on the rear post, west end.
    Foreground: none. Midground: the saucer, centre. Background: soft photo frame at the left, warm bokeh. Composition:
    saucer centre, photo soft at its left. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high,
    hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through
    warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns
    on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E.
    Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF,
    chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast
    Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey
    tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus
    crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Close-up, eye-level angle, 85 mm lens at f/2, camera 1.4 m high, shallow depth of field, 85 mm close,
    shallow focus, saucer chip crisp, warm blur behind. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim
    and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm
    medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow
    off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton
    bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to
    the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or
    text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face,
    a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: only
    her right hand and wrist enter from the lower right; body out of frame; only the hand and wrist are in frame, no face and no body; her hand withdrawing,
    fingers curling away from the face-down saucer. A small 12 cm cream-glazed
    ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock
    position. Plain, no pattern, no writing. State FACEDOWN: frame centre on the shelf, lying face-down with the blank unglazed foot ring showing. A small 13 by 18 cm faded color photograph
    in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly
    woman tapping a tin. No writing, no date, no caption. State STANDING: soft behind at frame left. Covered open-air
    night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank
    unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three
    red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the shelf on
    the rear post, west end. Foreground: none. Midground: the saucer, centre. Background: soft photo frame at the
    left, warm bokeh. Composition: saucer centre, photo soft at its left. Light: key Warm 2700 K tungsten stall
    bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about
    3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the
    east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right
    and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern
    amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with
    soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light
    bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows.
    Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without
    text, logos or watermarks.'
  motion: '0-0.8 s: Lan''s right hand reaches the upright saucer. 0.8-1.8 s: she flips it face-down. 1.8-2.5 s:
    the hand withdraws. Camera static.'
  clip_length_s: 4
  clip_length_note: 'TO-VERIFY: Veo 3.1 first-last-frame clip lengths are not confirmed (user, 2026-10-19); this value is the plan, not a fact'
  risks:
  - saucer must stay a plain 12 cm saucer with the chip; flipped state in the end frame
```

###### SC01-SH040

```yaml
record: shot
id: SC01-SH040
scene: SC01
status: REVIEW
version: 2
depends_on:
- SC01_direction@1
- SC01_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: 'Routine without connection: the customer goes, Lan wipes'
screenplay_ref: SC01, action lines 'A CUSTOMER (40s) takes the bowl and goes. Lan wipes the counter.'
duration_s: 2.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state BASE: hair neat in the low knot with two short strands framing the face, a few small broth
    stains on the apron front, sleeves rolled to the elbow, forearms unmarked'
  position: centre-right behind the counter, midground, waist-up
  facing: toward camera, head down
  action: wipes the counter with a folded cloth in wide hard arcs
  expression_start: tight mouth, eyes down
  expression_end: tight mouth, eyes down
  eyeline: down to the counter
props: []
location:
  id: LOC-NIGHT-MARKET
  area: stall counter, lane side
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: out-of-focus counter edge
  midground: Lan at the counter; a faceless soft-focus customer in a plain dark shirt at frame left
  background: soft-focus lane lights and steam
  composition: Lan centre-right, customer left and soft
camera:
  shot_size: MS
  angle: eye-level
  height_m: 1.4
  distance_m: 3.0
  position: In the lane, 3 m north of the counter, centre of the stall
  lens_mm: 50
  aperture: f/2.8
  depth_of_field: shallow-medium
  focus: Lan's face and wiping hand sharp; the customer soft in the left of frame
  movement: static
  movement_execution: Locked off.
  support: tripod
  setup: SC01-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K tungsten stall bulb from camera-left (east), high, hard
  fill: Soft amber bounce from counter and steam, camera-right, about 3:1
  rim: Orange burner flame through warm-white steam behind and camera-right
  practicals: Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs
  shadows: 'Soft-edged, falling to camera-right and down, detail kept near #14100E'
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'steam warm white #F1E4CF'
  - 'chili red #B8362B'
screen_direction: Customer leaves frame left (east); Lan stays; camera north looking south
start_state: a faceless customer takes the bowl at frame left while Lan wipes
end_state: the customer has left frame left; Lan keeps wiping, eyes down
action_timeline:
- '0.0-1.0 s: the customer takes the bowl and turns away'
- '1.0-2.0 s: the customer walks out of frame left'
- '2.0-2.5 s: Lan keeps wiping, eyes down'
dialogue: []
sound: 'sfx.md@1: SFX-SC01-006, SFX-SC01-007; ambience bed SC01. Bowl handed over, chopstick tick; cloth wipe in wide arcs, damp squeak on wood; Customer''s footsteps leave to frame left, soft and short'
music: 'none: silence or market source sound only (music.md@1)'
vfx: none
transition_in: cut from SC01-SH030
transition_out: cut
continuity:
- Customer is an unnamed extra, faceless and soft
- Lan BASE
generation:
  mode: image-to-video
  start_frame: 'Medium shot, eye-level angle, 50 mm lens at f/2.8, camera 1.4 m high, shallow-medium depth of field,
    50 mm natural perspective, Lan sharp, customer soft and faceless. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two
    short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms
    unmarked. Position: centre-right behind the counter, midground, waist-up; toward camera, head down; wiping the
    counter with eyes down while a faceless customer at frame left holds the bowl; expression: tight mouth, eyes
    down. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded
    canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns
    and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner.
    Area: stall counter, lane side. Foreground: out-of-focus counter edge. Midground: Lan at the counter; a faceless
    soft-focus customer in a plain dark shirt at frame left. Background: soft-focus lane lights and steam. Composition:
    Lan centre-right, customer left and soft. Light: key Warm 2700 K tungsten stall bulb from camera-left (east),
    high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame
    through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper
    lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept
    near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam
    warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9.
    Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall
    steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth
    of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos
    or watermarks.'
  end_frame: 'Medium shot, eye-level angle, 50 mm lens at f/2.8, camera 1.4 m high, shallow-medium depth of field,
    50 mm natural perspective, Lan sharp, customer soft and faceless. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two
    short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms
    unmarked. Position: centre-right behind the counter, midground, waist-up; toward camera, head down; wiping the
    counter with eyes down; the customer has left frame; expression: tight mouth, eyes down. Covered open-air night
    market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered
    sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns
    above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: stall counter, lane side.
    Foreground: out-of-focus counter edge. Midground: Lan at the counter; a faceless soft-focus customer in a plain
    dark shirt at frame left. Background: soft-focus lane lights and steam. Composition: Lan centre-right, customer
    left and soft. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber
    bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind
    and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light
    bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid
    haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B.
    Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night
    market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against
    umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round
    warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-1.0 s: the customer takes the bowl and turns away while Lan wipes the counter. 1.0-2.0 s: the customer
    walks out of frame left. 2.0-2.5 s: Lan keeps wiping with wide hard arcs, eyes down. Camera static.'
  clip_length_s: 4
  risks:
  - customer face must stay soft and unreadable
```

###### SC01-SH050

```yaml
record: shot
id: SC01-SH050
scene: SC01
status: REVIEW
version: 2
depends_on:
- SC01_direction@1
- SC01_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: 'The watcher: plant the notched ear and the macaque''s intent'
screenplay_ref: SC01, action line 'On a lantern wire above the stall, a MACAQUE (adult, notched left ear) sits very
  still. It watches the tin.'
duration_s: 2.5
characters:
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: upper right of frame, seated on the lantern wire, head and shoulders
  facing: three-quarter, facing frame left, notched LEFT ear toward the camera at the right side of its head
  action: sits perfectly still, only its eyes moving to settle on the tin below
  expression_start: watchful, still
  expression_end: eyes locked on the tin, unblinking
  eyeline: down and to frame left toward the tin
props: []
location:
  id: LOC-NIGHT-MARKET
  area: the lantern wire above the shelf, looking up from the lane
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: none
  midground: the macaque on the wire
  background: soft red and amber paper lanterns as round bokeh, dark night above
  composition: macaque upper right, empty dark at left to give the eyeline room
camera:
  shot_size: CU
  angle: low
  height_m: 1.0
  distance_m: 5.0
  position: In the lane, 5 m north-east of the stall, camera at 1.0 m looking up about 25 degrees at the wire
  lens_mm: 135
  aperture: f/2.8
  depth_of_field: shallow
  focus: The macaque's eyes and notched ear sharp; lanterns behind are soft red and amber discs
  movement: static
  movement_execution: Locked off. Only the macaque's eyes move.
  support: tripod
  setup: SC01-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K tungsten stall bulb from camera-left (east), high, hard
  fill: Soft amber bounce from counter and steam, camera-right, about 3:1
  rim: Orange burner flame through warm-white steam behind and camera-right
  practicals: Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs
  shadows: 'Soft-edged, falling to camera-right and down, detail kept near #14100E'
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'steam warm white #F1E4CF'
  - 'chili red #B8362B'
screen_direction: Camera north-east looking up at the wire; the macaque faces frame left (east, toward the tin)
start_state: the macaque seated on the wire looking down-left
end_state: eyes locked on the tin, body unmoved
action_timeline:
- '0.0-1.5 s: perfectly still; the eyes track and settle'
- '1.5-2.5 s: held, eyes locked on the tin'
dialogue: []
sound: 'sfx.md@1: SFX-SC01-008; ambience bed SC01. Wire creaks faintly under the macaque''s weight; paper lanterns shift, a very low tone of n'
music: 'none: silence or market source sound only (music.md@1)'
vfx: none
transition_in: cut from SC01-SH040
transition_out: cut
continuity:
- Notch is the macaque's own LEFT ear; facing frame left, that is the ear nearest the camera
- Single macaque
generation:
  mode: image-to-video
  start_frame: 'Close-up, low angle, 135 mm lens at f/2.8, camera 1.0 m high, shallow depth of field, 135 mm long
    lens, compressed, macaque isolated against round warm bokeh, low looking-up angle. A wild adult long-tailed
    macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare
    face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: upper right of frame, seated on the lantern wire,
    head and shoulders; three-quarter, facing frame left, notched LEFT ear toward the camera at the right side of
    its head; seated on the wire looking down-left, eyes just settling; expression: watchful, still. Covered open-air
    night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank
    unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three
    red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the lantern
    wire above the shelf, looking up from the lane. Foreground: none. Midground: the macaque on the wire. Background:
    soft red and amber paper lanterns as round bokeh, dark night above. Composition: macaque upper right, empty
    dark at left to give the eyeline room. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high,
    hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through
    warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns
    on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E.
    Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF,
    chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast
    Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey
    tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus
    crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Close-up, low angle, 135 mm lens at f/2.8, camera 1.0 m high, shallow depth of field, 135 mm long
    lens, compressed, macaque isolated against round warm bokeh, low looking-up angle. A wild adult long-tailed
    macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare
    face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: upper right of frame, seated on the lantern wire,
    head and shoulders; three-quarter, facing frame left, notched LEFT ear toward the camera at the right side of
    its head; seated on the wire, eyes locked down-left on the tin; expression: eyes locked on the tin, unblinking.
    Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas
    roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and
    bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner.
    Area: the lantern wire above the shelf, looking up from the lane. Foreground: none. Midground: the macaque on
    the wire. Background: soft red and amber paper lanterns as round bokeh, dark night above. Composition: macaque
    upper right, empty dark at left to give the eyeline room. Light: key Warm 2700 K tungsten stall bulb from camera-left
    (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner
    flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red
    paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail
    kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A,
    steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation,
    16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and
    stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow
    depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text,
    logos or watermarks.'
  motion: '0-1.5 s: the macaque sits perfectly still on the wire; only its eyes move, tracking down and settling
    on the tin. 1.5-2.5 s: held. Camera static, low, looking up.'
  clip_length_s: 4
  risks:
  - notch must stay on the animal's own left ear
  - keep a single macaque
```

###### SC01-SH060

```yaml
record: shot
id: SC01-SH060
scene: SC01
status: REVIEW
version: 2
depends_on:
- SC01_direction@1
- SC01_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: Lan's flat line; the macaque is behind her
screenplay_ref: 'SC01, dialogue: LAN (to the pot, flat) ''Almost closing.'''
duration_s: 2.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state BASE: hair neat in the low knot with two short strands framing the face, a few small broth
    stains on the apron front, sleeves rolled to the elbow, forearms unmarked'
  position: frame right of centre behind the counter, midground, waist-up
  facing: turned toward the pot at frame right, three-quarter to camera
  action: speaks to the pot while holding the ladle over it
  expression_start: tired, flat, mouth closed
  expression_end: mouth closed after the line, eyes on the pot
  eyeline: to the pot at frame right
props:
- id: PR-POT
  state: PR-POT:BOILING
  position: frame right on the burner, steaming
- id: PR-LADLE
  state: PR-LADLE:HELD
  position: in Lan's right hand over the pot
location:
  id: LOC-NIGHT-MARKET
  area: the west end of the counter, at the pot
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: none
  midground: Lan and the pot
  background: the shelf blurred at the left edge, lane lights soft
  composition: Lan right of centre, pot right, shelf out of focus at the left edge
camera:
  shot_size: MS
  angle: eye-level
  height_m: 1.5
  distance_m: 3.0
  position: In the lane, 3 m north of the counter, centred on the pot end (screen right)
  lens_mm: 50
  aperture: f/2.8
  depth_of_field: shallow-medium
  focus: Lan's face; pot steam and shelf soft
  movement: static
  movement_execution: Locked off.
  support: tripod
  setup: SC01-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K tungsten stall bulb from camera-left (east), high, hard
  fill: Soft amber bounce from counter and steam, camera-right, about 3:1
  rim: Orange burner flame through warm-white steam behind and camera-right
  practicals: Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs
  shadows: 'Soft-edged, falling to camera-right and down, detail kept near #14100E'
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'steam warm white #F1E4CF'
  - 'chili red #B8362B'
screen_direction: Lan faces west (frame right); shelf behind her at frame left, unseen by her
start_state: Lan with the ladle over the pot, mouth closed
end_state: ladle lifting, mouth closed, eyes on the pot
action_timeline:
- '0.6-1.8 s: Lan says ''Almost closing.'' flatly to the pot'
- '1.8-2.5 s: she lifts the ladle and keeps looking at the pot'
dialogue:
- line_id: VL-SC01-001
  character: CH-LAN
  text: Almost closing.
  timing: 0.6-1.8 s
  delivery: flat, to the pot, tired
sound: 'sfx.md@1: SFX-SC01-009; ambience bed SC01. Ladle taps the pot rim once, boil continues'
music: 'none: silence or market source sound only (music.md@1)'
vfx: none
transition_in: cut from SC01-SH050
transition_out: cut
continuity:
- Lan BASE
- Ladle HELD
- Macaque not visible but on the wire above the shelf
generation:
  mode: image-to-video
  start_frame: 'Medium shot, eye-level angle, 50 mm lens at f/2.8, camera 1.5 m high, shallow-medium depth of field,
    50 mm, Lan sharp at screen right of centre, blurred shelf at the left edge. Lan, a Southeast Asian woman in
    her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight
    thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton
    work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes.
    No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot
    with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the
    elbow, forearms unmarked. Position: frame right of centre behind the counter, midground, waist-up; turned toward
    the pot at frame right, three-quarter to camera; ladle over the pot, mouth closed, eyes on the pot; expression:
    tired, flat, mouth closed. A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base,
    two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label. State
    BOILING: frame right on the burner, steaming. A 35 cm long steel ladle with a deep round bowl, slightly dented,
    and a plain straight brown wooden handle with a hole at the end. No decoration, no writing. State HELD: in Lan''s
    right hand over the pot. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal
    and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper
    lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and
    wok burner. Area: the west end of the counter, at the pot. Foreground: none. Midground: Lan and the pot. Background:
    the shelf blurred at the left edge, lane lights soft. Composition: Lan right of centre, pot right, shelf out
    of focus at the left edge. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill
    Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white
    steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the
    wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night,
    dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF,
    chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast
    Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey
    tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus
    crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Medium shot, eye-level angle, 50 mm lens at f/2.8, camera 1.5 m high, shallow-medium depth of field,
    50 mm, Lan sharp at screen right of centre, blurred shelf at the left edge. Lan, a Southeast Asian woman in
    her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight
    thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton
    work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes.
    No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot
    with two short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the
    elbow, forearms unmarked. Position: frame right of centre behind the counter, midground, waist-up; turned toward
    the pot at frame right, three-quarter to camera; ladle lifting from the pot after the line, mouth closed; expression:
    mouth closed after the line, eyes on the pot. A wide dented aluminium stockpot, 40 cm across and 30 cm tall,
    soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter.
    No lid, no label. State BOILING: frame right on the burner, steaming. A 35 cm long steel ladle with a deep round
    bowl, slightly dented, and a plain straight brown wooden handle with a hole at the end. No decoration, no writing.
    State HELD: in Lan''s right hand over the pot. Covered open-air night market lane, 3 m wide, of timber-frame
    food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete
    ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall
    with a plank shelf, steel stockpot and wok burner. Area: the west end of the counter, at the pot. Foreground:
    none. Midground: Lan and the pot. Background: the shelf blurred at the left edge, lane lights soft. Composition:
    Lan right of centre, pot right, shelf out of focus at the left edge. Light: key Warm 2700 K tungsten stall bulb
    from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1;
    rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the east
    post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right
    and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern
    amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with
    soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light
    bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows.
    Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without
    text, logos or watermarks.'
  motion: '0-0.6 s: Lan looks at the pot. 0.6-1.8 s: she says ''Almost closing.'' flatly, mouth moving. 1.8-2.5
    s: she lifts the ladle and stays looking at the pot. Camera static.'
  clip_length_s: 4
  risks:
  - short line lip sync is native Veo audio; keep mouth readable
```

###### SC01-SH070

```yaml
record: shot
id: SC01-SH070
scene: SC01
status: REVIEW
version: 3
depends_on:
- SC01_direction@1
- SC01_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: The theft
screenplay_ref: SC01, action lines 'Behind her, the wire dips. The macaque drops onto the shelf. Both hands close
  on the tin.'
duration_s: 2.0
characters:
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: frame left, dropping from the wire onto the shelf
  facing: three-quarter, facing frame right, notched LEFT ear on the far side of its head
  action: drops from the wire onto the shelf and closes both hands on the tin
  expression_start: intent, calm
  expression_end: intent, tin clutched
  eyeline: down to the tin
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state BASE: hair neat in the low knot with two short strands framing the face, a few small broth
    stains on the apron front, sleeves rolled to the elbow, forearms unmarked'
  position: small, frame right at the pot, about 2.5 m from the shelf, full figure, back turned to the shelf
  facing: away from the shelf toward the pot
  action: stands at the pot, unaware
  expression_start: neutral, eyes on the pot
  expression_end: neutral, eyes on the pot
  eyeline: to the pot
props:
- id: PR-TIN
  state: PR-TIN:SEALED
  position: on the shelf at the start; clutched in the macaque's hands at the end
- id: PR-PHOTO
  state: PR-PHOTO:STANDING
  position: on the shelf between tin and saucer
- id: PR-SAUCER-STALL
  state: PR-SAUCER-STALL:FACEDOWN
  position: on the shelf at the west end, face-down
- id: PR-POT
  state: PR-POT:BOILING
  position: frame right on the burner, steaming
location:
  id: LOC-NIGHT-MARKET
  area: the shelf on the rear post and the wire above, with the pot at the counter's west end
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: out-of-focus counter edge, lower frame
  midground: shelf at frame left, Lan small at frame right
  background: soft-focus lane, red lanterns on the wire above
  composition: shelf left, Lan right, red lantern cluster at the top
camera:
  shot_size: WS
  angle: low
  height_m: 1.2
  distance_m: 4.0
  position: In the lane, 4 m north-east of the stall, slightly low, looking south-west at shelf and pot
  lens_mm: 35
  aperture: f/4
  depth_of_field: medium-deep
  focus: Shelf plane sharp, Lan small and slightly soft at the pot
  movement: static
  movement_execution: Locked off. The macaque drops from the top edge onto the shelf at screen left.
  support: tripod
  setup: SC01-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K tungsten stall bulb from camera-left (east), high, hard
  fill: Soft amber bounce from counter and steam, camera-right, about 3:1
  rim: Orange burner flame through warm-white steam behind and camera-right
  practicals: Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs
  shadows: 'Soft-edged, falling to camera-right and down, detail kept near #14100E'
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'steam warm white #F1E4CF'
  - 'chili red #B8362B'
screen_direction: Camera north-east, slightly low; the macaque moves from the wire down to the shelf; Lan stays
  at the pot
start_state: the macaque crouched on the wire above the shelf, the wire dipping
end_state: the macaque crouched on the shelf holding the tin, Lan small at the pot with her back turned
action_timeline:
- '0.0-0.8 s: the wire dips; the macaque drops'
- '0.8-1.4 s: it lands on the shelf'
- '1.4-2.0 s: both hands close on the tin; it holds'
dialogue: []
sound: 'sfx.md@1: SFX-SC01-010; ambience bed SC01. Wire twang and a soft thud of the macaque landing on the plank shelf; tin lid scrape as bo'
music: 'none: silence or market source sound only (music.md@1)'
vfx: VFX-SC01-SH070
transition_in: cut from SC01-SH060
transition_out: cut
continuity:
- 'PR-TIN leaves the shelf: SEALED in the macaque''s hands from here'
- Saucer FACEDOWN
- Lan BASE
generation:
  mode: first-last-frame
  start_frame: 'Wide shot, low angle, 35 mm lens at f/4, camera 1.2 m high, medium-deep depth of field, 35 mm, slight
    low angle, shelf left and Lan small at right, red lanterns top. A wild adult long-tailed macaque, about 45 cm
    body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked
    muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim
    of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing.
    Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly
    dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state
    BASE: dry, slightly dusty fur. Position: frame left, dropping from the wire onto the shelf; three-quarter, facing
    frame right, notched LEFT ear on the far side of its head; crouched on the lantern wire above the shelf, weight
    forward, the wire dipping; expression: intent, calm. Lan, a Southeast Asian woman in her early 30s, 160 cm,
    slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose,
    warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow
    off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton
    bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to
    the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or
    text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face,
    a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: small,
    frame right at the pot, about 2.5 m from the shelf, full figure, back turned to the shelf; away from the shelf
    toward the pot; standing at the pot with her back to the shelf; expression: neutral, eyes on the pot. A round
    dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid
    with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing,
    no handle. State SEALED: on the shelf at frame left, lid up with the two brass spots. A small 13
    by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind,
    showing a laughing elderly woman tapping a tin. No writing, no date, no caption. State STANDING: on the shelf
    between tin and saucer. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim
    and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. State FACEDOWN:
    on the shelf at the west end, face-down. A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened
    base, two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label.
    State BOILING: frame right on the burner, steaming. Covered open-air night market lane, 3 m wide, of timber-frame
    food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete
    ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall
    with a plank shelf, steel stockpot and wok burner. Area: the shelf on the rear post and the wire above, with
    the pot at the counter''s west end. Foreground: out-of-focus counter edge, lower frame. Midground: shelf at
    frame left, Lan small at frame right. Background: soft-focus lane, red lanterns on the wire above. Composition:
    shelf left, Lan right, red lantern cluster at the top. Light: key Warm 2700 K tungsten stall bulb from camera-left
    (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner
    flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red
    paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail
    kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A,
    steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation,
    16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and
    stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow
    depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text,
    logos or watermarks.'
  end_frame: 'Wide shot, low angle, 35 mm lens at f/4, camera 1.2 m high, medium-deep depth of field, 35 mm, slight
    low angle, shelf left and Lan small at right, red lanterns top. A wild adult long-tailed macaque, about 45 cm
    body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked
    muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim
    of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing.
    Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly
    dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state
    BASE: dry, slightly dusty fur. Position: frame left, dropping from the wire onto the shelf; three-quarter, facing
    frame right, notched LEFT ear on the far side of its head; crouched on the shelf with both hands closed round
    the tin; expression: intent, tin clutched. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry,
    oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small nose, warm medium-tan
    skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow
    off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton
    bib apron with waist ties and small broth stains, over an off-white collarless shirt with sleeves rolled to
    the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or
    text on any garment. Condition: state BASE: hair neat in the low knot with two short strands framing the face,
    a few small broth stains on the apron front, sleeves rolled to the elbow, forearms unmarked. Position: small,
    frame right at the pot, about 2.5 m from the shelf, full figure, back turned to the shelf; away from the shelf
    toward the pot; still standing at the pot with her back to the shelf; expression: neutral, eyes on the pot.
    A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit
    lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing,
    no handle. State SEALED: clutched in the macaque''s two hands against its chest. A small 13
    by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass front, an easel stand behind,
    showing a laughing elderly woman tapping a tin. No writing, no date, no caption. State STANDING: on the shelf
    between tin and saucer. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim
    and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. State FACEDOWN:
    on the shelf at the west end, face-down. A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened
    base, two riveted side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label.
    State BOILING: frame right on the burner, steaming. Covered open-air night market lane, 3 m wide, of timber-frame
    food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete
    ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall
    with a plank shelf, steel stockpot and wok burner. Area: the shelf on the rear post and the wire above, with
    the pot at the counter''s west end. Foreground: out-of-focus counter edge, lower frame. Midground: shelf at
    frame left, Lan small at frame right. Background: soft-focus lane, red lanterns on the wire above. Composition:
    shelf left, Lan right, red lantern cluster at the top. Light: key Warm 2700 K tungsten stall bulb from camera-left
    (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner
    flame through warm-white steam behind and camera-right; practicals Stall bulb on the east post; three chili-red
    paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail
    kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A,
    steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation,
    16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and
    stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow
    depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text,
    logos or watermarks.'
  motion: '0-0.8 s: the wire dips and the macaque drops from it. 0.8-1.4 s: it lands on the shelf. 1.4-2.0 s: both
    hands close on the tin and it holds it. Camera static. Lan stays at the pot, back turned.'
  clip_length_s: 4
  clip_length_note: 'TO-VERIFY: Veo 3.1 first-last-frame clip lengths are not confirmed (user, 2026-10-19); this value is the plan, not a fact'
  risks:
  - 'animal drop plus prop in one shot: one action only'
  - Lan stays still and small
```

###### SC01-SH080

```yaml
record: shot
id: SC01-SH080
scene: SC01
status: REVIEW
version: 2
depends_on:
- SC01_direction@1
- SC01_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: Lan sees the theft and shouts
screenplay_ref: SC01, action 'Lan turns.' and dialogue LAN 'Hey!'
duration_s: 1.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state BASE: hair neat in the low knot with two short strands framing the face, a few small broth
    stains on the apron front, sleeves rolled to the elbow, forearms unmarked'
  position: centre behind the counter, midground, waist-up
  facing: spinning to face frame left toward the shelf
  action: spins toward the shelf and shouts, arm out
  expression_start: startled
  expression_end: startled shout, mouth open
  eyeline: toward the shelf at frame left
props:
- id: PR-LADLE
  state: PR-LADLE:HELD
  position: in Lan's right hand
location:
  id: LOC-NIGHT-MARKET
  area: behind the counter, facing the shelf
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: none
  midground: Lan
  background: the shelf blurred at the left, lane lights soft
  composition: Lan centre, shelf out of focus at the left
camera:
  shot_size: MS
  angle: eye-level
  height_m: 1.5
  distance_m: 3.0
  position: In the lane, 3 m north of the counter, centred
  lens_mm: 50
  aperture: f/2.8
  depth_of_field: shallow-medium
  focus: Lan's face and raised arm sharp
  movement: static
  movement_execution: Handheld with a slight natural shake, no re-framing; Lan spins into the frame.
  support: handheld
  setup: SC01-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K tungsten stall bulb from camera-left (east), high, hard
  fill: Soft amber bounce from counter and steam, camera-right, about 3:1
  rim: Orange burner flame through warm-white steam behind and camera-right
  practicals: Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs
  shadows: 'Soft-edged, falling to camera-right and down, detail kept near #14100E'
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'steam warm white #F1E4CF'
  - 'chili red #B8362B'
screen_direction: Lan turns from west to east (frame right to frame left)
start_state: Lan half-turned from the pot
end_state: Lan facing the shelf, arm out, mouth open
action_timeline:
- '0.0-0.5 s: Lan spins toward the shelf'
- '0.5-1.1 s: she shouts ''Hey!'''
- '1.1-1.5 s: arm out, mouth open'
dialogue:
- line_id: VL-SC01-002
  character: CH-LAN
  text: Hey!
  timing: 0.5-1.0 s
  delivery: startled shout
sound: 'sfx.md@1: SFX-SC01-011; ambience bed SC01. Quick apron-and-shoe turn; ladle knocks the counter'
music: 'none: silence or market source sound only (music.md@1)'
vfx: none
transition_in: cut-on-action from SC01-SH070
transition_out: cut-on-action
continuity:
- Lan BASE, ladle still HELD
- Macaque out of frame, already running
generation:
  mode: image-to-video
  start_frame: 'Medium shot, eye-level angle, 50 mm lens at f/2.8, camera 1.5 m high, shallow-medium depth of field,
    50 mm, slightly handheld energy, Lan''s open mouth and extended arm. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two
    short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms
    unmarked. Position: centre behind the counter, midground, waist-up; spinning to face frame left toward the shelf;
    half-turned from the pot with the ladle in her right hand; expression: startled. A 35 cm long steel ladle with
    a deep round bowl, slightly dented, and a plain straight brown wooden handle with a hole at the end. No decoration,
    no writing. State HELD: in Lan''s right hand. Covered open-air night market lane, 3 m wide, of timber-frame
    food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete
    ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall
    with a plank shelf, steel stockpot and wok burner. Area: behind the counter, facing the shelf. Foreground: none.
    Midground: Lan. Background: the shelf blurred at the left, lane lights soft. Composition: Lan centre, shelf
    out of focus at the left. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill
    Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white
    steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the
    wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night,
    dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF,
    chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast
    Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey
    tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus
    crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Medium shot, eye-level angle, 50 mm lens at f/2.8, camera 1.5 m high, shallow-medium depth of field,
    50 mm, slightly handheld energy, Lan''s open mouth and extended arm. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state BASE: hair neat in the low knot with two
    short strands framing the face, a few small broth stains on the apron front, sleeves rolled to the elbow, forearms
    unmarked. Position: centre behind the counter, midground, waist-up; spinning to face frame left toward the shelf;
    facing frame left, left arm extended toward the shelf, ladle in the right hand, mouth open in a shout; expression:
    startled shout, mouth open. A 35 cm long steel ladle with a deep round bowl, slightly dented, and a plain straight
    brown wooden handle with a hole at the end. No decoration, no writing. State HELD: in Lan''s right hand. Covered
    open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs,
    blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs,
    three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: behind
    the counter, facing the shelf. Foreground: none. Midground: Lan. Background: the shelf blurred at the left,
    lane lights soft. Composition: Lan centre, shelf out of focus at the left. Light: key Warm 2700 K tungsten stall
    bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about
    3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the
    east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right
    and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern
    amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with
    soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light
    bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows.
    Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without
    text, logos or watermarks.'
  motion: '0-0.5 s: Lan spins from the pot to face the shelf at frame left. 0.5-1.1 s: she shouts ''Hey!'' with
    her left arm out. 1.1-1.5 s: held, mouth open. Handheld, slight natural shake.'
  clip_length_s: 4
  risks:
  - 'fast spin: keep the clip short'
```

###### SC01-SH090

```yaml
record: shot
id: SC01-SH090
scene: SC01
status: REVIEW
version: 2
depends_on:
- SC01_direction@1
- SC01_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: The chase begins; the pot boils over
screenplay_ref: SC01, action lines 'The macaque is already running along the counter, the tin clutched to its chest.
  The tin RATTLES. The pot boils over.'
duration_s: 2.5
characters:
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: lower third of frame, running on the counter top along the lane edge
  facing: side view, running toward frame right, its right side toward the camera
  action: runs west along the counter with the tin clutched to its chest
  expression_start: intent
  expression_end: intent
  eyeline: straight ahead, frame right
props:
- id: PR-TIN
  state: PR-TIN:SEALED
  position: clutched to the macaque's chest, on its camera side
- id: PR-POT
  state: PR-POT:BOIL-OVER
  position: frame right on the burner, foamy broth spilling over the rim, heavy steam
location:
  id: LOC-NIGHT-MARKET
  area: the counter top, running east to west toward the pot
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: out-of-focus counter edge, lower frame
  midground: the macaque on the counter, the pot boiling over at frame right
  background: soft lane lights and steam
  composition: counter along the lower third, pot at frame right
camera:
  shot_size: WS
  angle: eye-level
  height_m: 1.1
  distance_m: 3.0
  position: In the lane, 3 m north of the counter, tracking west
  lens_mm: 35
  aperture: f/4
  depth_of_field: medium
  focus: The macaque and tin sharp throughout; pot steam soft at screen right
  movement: follow
  movement_execution: Tracks west (screen right) about 6 m in 2.5 s at the macaque's pace, ending as it leaves frame
    right; steam rises in the right of the frame.
  support: steadicam/gimbal
  setup: SC01-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K tungsten stall bulb from camera-left (east), high, hard
  fill: Soft amber bounce from counter and steam, camera-right, about 3:1
  rim: Orange burner flame through warm-white steam behind and camera-right
  practicals: Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs
  shadows: 'Soft-edged, falling to camera-right and down, detail kept near #14100E'
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'steam warm white #F1E4CF'
  - 'chili red #B8362B'
screen_direction: West = frame right; the macaque exits frame right
start_state: the macaque running on the counter at frame left of centre, tin clutched
end_state: the macaque at the right edge of frame leaving it, the pot foaming over
action_timeline:
- '0.0-2.0 s: the macaque runs along the counter; the tin rattles'
- '1.2-2.5 s: the pot foams over, steam billows'
- '2.0-2.5 s: the macaque leaves frame right'
dialogue: []
sound: 'sfx.md@1: SFX-SC01-012, SFX-SC01-013, SFX-SC01-014; ambience bed SC01. Tin RATTLES in the macaque''s grip: contents shift, a dry, light, knocking shake (the scrip; Macaque paws pattering on the plank counter, fast; Pot boils over: foam surge and sizzle on the burner flame, heavy steam hiss'
music: 'M01 chase (music.md@1)'
vfx: 'flag for vfx-supervisor: boil-over foam and steam'
transition_in: cut-on-action from SC01-SH080
transition_out: cut-on-action
continuity:
- Pot goes BOILING to BOIL-OVER here
- Tin SEALED in the macaque's arms
- Lan not in this frame
generation:
  mode: image-to-video
  start_frame: 'Wide shot, eye-level angle, 35 mm lens at f/4, camera 1.1 m high, medium depth of field, 35 mm tracking
    beside the macaque, tin clutched to its chest, steam boiling over at the right. A wild adult long-tailed macaque,
    about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face
    with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: lower third of frame, running on the counter top along
    the lane edge; side view, running toward frame right, its right side toward the camera; running on the counter
    at frame left of centre with the tin against its chest; expression: intent. A round dented tin, 16 cm across
    and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn
    brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED: clutched
    to the macaque''s chest, on its camera side. A wide dented aluminium stockpot, 40 cm across and 30 cm tall,
    soot-blackened base, two riveted side handles, standing on a low gas burner at the end of a wooden counter.
    No lid, no label. State BOIL-OVER: frame right on the burner, foamy broth spilling over the rim, heavy steam.
    Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas
    roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and
    bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner.
    Area: the counter top, running east to west toward the pot. Foreground: out-of-focus counter edge, lower frame.
    Midground: the macaque on the counter, the pot boiling over at frame right. Background: soft lane lights and
    steam. Composition: counter along the lower third, pot at frame right. Light: key Warm 2700 K tungsten stall
    bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right, about
    3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on the
    east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to camera-right
    and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern
    amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with
    soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light
    bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows.
    Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without
    text, logos or watermarks.'
  end_frame: 'Wide shot, eye-level angle, 35 mm lens at f/4, camera 1.1 m high, medium depth of field, 35 mm tracking
    beside the macaque, tin clutched to its chest, steam boiling over at the right. A wild adult long-tailed macaque,
    about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face
    with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: lower third of frame, running on the counter top along
    the lane edge; side view, running toward frame right, its right side toward the camera; at the right edge of
    frame, nearly leaving it; expression: intent. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer
    worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top,
    small dents on the side. No label, no writing, no handle. State SEALED: clutched to the macaque''s chest, on
    its camera side. A wide dented aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base, two riveted
    side handles, standing on a low gas burner at the end of a wooden counter. No lid, no label. State BOIL-OVER:
    frame right on the burner, foamy broth spilling over the rim, heavy steam. Covered open-air night market lane,
    3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards,
    damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above
    a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the counter top, running east
    to west toward the pot. Foreground: out-of-focus counter edge, lower frame. Midground: the macaque on the counter,
    the pot boiling over at frame right. Background: soft lane lights and steam. Composition: counter along the
    lower third, pot at frame right. Light: key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard;
    fill Soft amber bounce from counter and steam, camera-right, about 3:1; rim Orange burner flame through warm-white
    steam behind and camera-right; practicals Stall bulb on the east post; three chili-red paper lanterns on the
    wire; string-light bulbs; shadows Soft-edged, falling to camera-right and down, detail kept near #14100E. Night,
    dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF,
    chili red #B8362B. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast
    Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey
    tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus
    crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-2.0 s: the macaque runs west along the counter top with the tin clutched to its chest. 1.2-2.5 s: broth
    foams over the pot rim at frame right and steam billows. 2.0-2.5 s: the macaque exits frame right. Camera tracks
    right at the macaque''s pace.'
  clip_length_s: 4
  risks:
  - animal running with a prop
  - boil-over is the one environmental motion
```

###### SC01-SH100

```yaml
record: shot
id: SC01-SH100
scene: SC01
status: REVIEW
version: 2
depends_on:
- SC01_direction@1
- SC01_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: She abandons her routine and runs
screenplay_ref: SC01, action line 'Lan abandons the ladle and runs.'
duration_s: 2.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state BASE, flushed: hair neat, a few small broth stains on the apron front, flushed cheeks and
    a light sweat sheen, forearms unmarked'
  position: centre, behind the counter at the pot, waist-up becoming full as she moves
  facing: turning to run toward frame right
  action: drops the ladle onto the counter and runs off to frame right
  expression_start: startled, jaw set
  expression_end: determined, breathless
  eyeline: ahead, frame right
props:
- id: PR-LADLE
  state: PR-LADLE:ABANDONED
  position: on the counter beside the pot
- id: PR-POT
  state: PR-POT:BOIL-OVER
  position: foreground right, foam spilling, heavy steam
location:
  id: LOC-NIGHT-MARKET
  area: the pot end of the counter
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: foam and steam, foreground right
  midground: Lan at the counter beside the pot
  background: soft lane lights
  composition: pot foreground right, Lan centre
camera:
  shot_size: MS
  angle: eye-level
  height_m: 1.4
  distance_m: 3.5
  position: In the lane, 3.5 m north of the counter, centred on the pot end
  lens_mm: 35
  aperture: f/4
  depth_of_field: medium
  focus: Lan; the pot's foam in the foreground right slightly soft
  movement: static
  movement_execution: Handheld; Lan drops the ladle and exits frame right.
  support: handheld
  setup: SC01-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K tungsten stall bulb from camera-left (east), high, hard
  fill: Soft amber bounce from counter and steam, camera-right, about 3:1
  rim: Orange burner flame through warm-white steam behind and camera-right
  practicals: Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs
  shadows: 'Soft-edged, falling to camera-right and down, detail kept near #14100E'
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'steam warm white #F1E4CF'
  - 'chili red #B8362B'
screen_direction: Lan exits frame right (west), matching SC02
start_state: the ladle leaving Lan's hand beside the foaming pot
end_state: Lan nearly out of frame right, the ladle on the counter
action_timeline:
- '0.0-0.7 s: she drops the ladle on the counter'
- '0.7-2.0 s: she runs out of frame right'
dialogue: []
sound: 'sfx.md@1: SFX-SC01-015, SFX-SC01-016; ambience bed SC01. Ladle drops: steel clatter and a short ring, then rests; the boil-over keeps hissing; Lan''s running footsteps start and pull right off screen'
music: 'M01 chase (music.md@1)'
vfx: 'flag for vfx-supervisor: boil-over foam and steam'
transition_in: cut-on-action from SC01-SH090
transition_out: cut-on-action
continuity:
- Ladle ABANDONED on the counter
- Lan becomes flushed; no graze yet
generation:
  mode: image-to-video
  start_frame: 'Medium shot, eye-level angle, 35 mm lens at f/4, camera 1.4 m high, medium depth of field, 35 mm,
    boil-over foam and heavy steam foreground right, Lan running out of frame right. Lan, a Southeast Asian woman
    in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight
    thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton
    work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes.
    No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE, flushed: hair neat, a few
    small broth stains on the apron front, flushed cheeks and a light sweat sheen, forearms unmarked. Position:
    centre, behind the counter at the pot, waist-up becoming full as she moves; turning to run toward frame right;
    the ladle leaving her right hand beside the foaming pot; expression: startled, jaw set. A 35 cm long steel ladle
    with a deep round bowl, slightly dented, and a plain straight brown wooden handle with a hole at the end. No
    decoration, no writing. State ABANDONED: on the counter beside the pot. A wide dented aluminium stockpot, 40
    cm across and 30 cm tall, soot-blackened base, two riveted side handles, standing on a low gas burner at the
    end of a wooden counter. No lid, no label. State BOIL-OVER: foreground right, foam spilling, heavy steam. Covered
    open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs,
    blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs,
    three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the pot
    end of the counter. Foreground: foam and steam, foreground right. Midground: Lan at the counter beside the pot.
    Background: soft lane lights. Composition: pot foreground right, Lan centre. Light: key Warm 2700 K tungsten
    stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter and steam, camera-right,
    about 3:1; rim Orange burner flame through warm-white steam behind and camera-right; practicals Stall bulb on
    the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows Soft-edged, falling to
    camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17,
    lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action cinema, 35 mm film
    grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns,
    string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep
    teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture,
    clean frame without text, logos or watermarks.'
  end_frame: 'Medium shot, eye-level angle, 35 mm lens at f/4, camera 1.4 m high, medium depth of field, 35 mm,
    boil-over foam and heavy steam foreground right, Lan running out of frame right. Lan, a Southeast Asian woman
    in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight
    thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton
    work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes.
    No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state BASE, flushed: hair neat, a few
    small broth stains on the apron front, flushed cheeks and a light sweat sheen, forearms unmarked. Position:
    centre, behind the counter at the pot, waist-up becoming full as she moves; turning to run toward frame right;
    only her back and trailing arm at the right edge of the frame as she leaves; expression: determined, breathless.
    A 35 cm long steel ladle with a deep round bowl, slightly dented, and a plain straight brown wooden handle with
    a hole at the end. No decoration, no writing. State ABANDONED: on the counter beside the pot. A wide dented
    aluminium stockpot, 40 cm across and 30 cm tall, soot-blackened base, two riveted side handles, standing on
    a low gas burner at the end of a wooden counter. No lid, no label. State BOIL-OVER: foreground right, foam spilling,
    heavy steam. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal
    and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper
    lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and
    wok burner. Area: the pot end of the counter. Foreground: foam and steam, foreground right. Midground: Lan at
    the counter beside the pot. Background: soft lane lights. Composition: pot foreground right, Lan centre. Light:
    key Warm 2700 K tungsten stall bulb from camera-left (east), high, hard; fill Soft amber bounce from counter
    and steam, camera-right, about 3:1; rim Orange burner flame through warm-white steam behind and camera-right;
    practicals Stall bulb on the east post; three chili-red paper lanterns on the wire; string-light bulbs; shadows
    Soft-edged, falling to camera-right and down, detail kept near #14100E. Night, dry, warm, humid haze. Palette:
    night-market umber #2A1D17, lantern amber #E0963A, steam warm white #F1E4CF, chili red #B8362B. Photoreal live-action
    cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-0.7 s: Lan drops the ladle onto the counter beside the pot. 0.7-2.0 s: she runs out of frame right
    past the foaming pot. Handheld.'
  clip_length_s: 4
  risks:
  - 'dropped ladle: sold by sound and landing'
```


### SC02 — EXT. NIGHT MARKET - LANES - CONTINUOUS


#### Direction
Source: `06_direction/SC02_direction.md`

##### SC02 Direction: EXT. NIGHT MARKET - LANES - CONTINUOUS

Approved under the autonomy policy (see PRODUCTION_LOG.md). The chase choreography is in `SC02_action.md` (action-director); this document owns the scene's purpose, the shot list and the coverage.

###### Must-see story facts
- The macaque dives under a table; Lan skids around it.
- The macaque runs low and straight, never up, never away; the tin rattles with every stride.
- Lan vaults a stack of crates and drags herself over a second; her forearm scrapes the edge; she hisses and keeps going.
- A delivery cart blocks the lane; the macaque slips under; Lan goes around through a narrow gap between two stalls, sideways, breath short.
- She comes out; the macaque is gone, the rattle is gone.
- Lan stops, chest heaving, hand on her scraped arm, searches the lanterns and the crowd. Nothing.
- Two slow metallic knocks, a pause, silence.
- Lan follows the sound toward the dark mouth of an alley.

###### Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Lan | The tin back, now | Obstacles that fit a monkey and not her | Speed, hands first, shoulders first |
| Macaque | To reach the alley | Lan | Straight line, under everything, no hurry beyond what it needs |

- Subtext: the macaque is not escaping, it is going somewhere. Lan only notices this when she has lost it.
- Turn: the knock. Pursuit becomes curiosity.
- Audience position: same as Lan, with a half-step ahead from SC01.
- Visual thesis: the chase has a direction. Everything travels screen right, west, toward the dark; the light falls away behind them lane by lane. The audience senses a destination before Lan does. Carried by: every shot travelling screen right (SH010-SH070), the dimming lights toward SH080-SH110, and the last shot walking into the dark arch.
- Genre playbook: comedy-adventure for the chase (clear obstacles, clear costs), turning to drama at the stop. Exception: SH080-SH110 hold stillness.

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | Pursuit opens: table | Macaque, Lan | "The macaque dives under a table. Lan skids around it." |
| B2 | Straight line | Macaque | "The macaque runs low and straight..." |
| B3 | Cost: crates and the graze | Lan | "Lan vaults a stack of crates..." |
| B4 | Reversal: cart and gap | Macaque | "A lane ahead is blocked by a delivery cart..." |
| B5 | Loss | Lan | "She comes out the other side..." to "Nothing." |
| B6 | Turn: the knock | Off-screen | "Then, from somewhere beyond the lights..." |

###### Blocking
Floor plan: LOC-NIGHT-MARKET lane. East to west: stall, table, 3-high crates, 4-high crates, cart, gap (north side), unlit stretch, alley mouth (south side). Detailed moves are in SC02_action.md (phrases P1 to P4).
- Start: the macaque is running west from the stall; Lan is one or two strides behind it (SC01 ended with both leaving frame screen right).
- End positions: Lan standing in the unlit western stretch, facing the alley mouth on the south side; the macaque already inside the alley.
- Axis of action and camera side: the east-west line of travel. The camera stays on the north side of the lane looking south for the whole scene.
- Screen direction in/out: in screen right (from SC01), out toward the alley mouth (away from camera, slightly right).
- SC02-SH070 is a deliberate NEUTRAL shot: the gap is on the north side of the lane, so a camera in the lane (north side, looking south) cannot see it, and a camera south of it would flip travel to screen left. The camera therefore waits ahead of Lan inside the service path and she moves toward it. This avoids crossing the line. (Resolved after a script-supervisor CONFLICT, see continuity.md issue CR-01.)

###### Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Lan | To cut it off | Shoulders ahead of her feet, one hand on the table, skid |
| B2 | Macaque | To get there | Low run, head forward, tin clutched, no glance back |
| B3 | Lan | To keep going whatever it costs | Hauls herself over with her forearms, hisses at the scrape, does not stop |
| B4 | Lan | To find a way through | Looks at the cart, then the gap, turns her shoulders and shuffles in sideways, lips tight |
| B5 | Lan | To find it | Stops dead, hand on the scraped arm, chest heaving, head turning slowly, eyes sweeping lanterns |
| B6 | Lan | To listen | Freezes mid-breath; head turns toward the dark; first step is slow |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC02-SH010 | MWS | low | follow | Macaque at the table | Dives under the grey table cloth screen right; ends with the cloth swinging and the macaque out of sight | table centre, soft lanterns behind | normal | warm amber with motion streaks | 3.0 | The chase is on; low and straight | cut on action |
| SC02-SH020 | WS | eye-level | follow | Lan at the table | Lan runs in from screen left and skids around the table; ends running on past it, screen right | Lan mid-frame, table, soft shoppers | normal | warm amber | 3.0 | Her speed and her first cost of time | cut on action |
| SC02-SH030 | MWS | low | follow | Macaque running | Runs low and straight with the tin against its chest, rattling; ends reaching the foot of the crates | macaque lower third, long lane of lights receding right | normal | warm amber | 3.0 | Direction clue: never up, never away | cut on action |
| SC02-SH040 | WS | eye-level | follow | Lan at the 3-high stack | Plants both hands and vaults the stack; ends landing on both feet and running on | crates centre, Lan crossing left to right | normal | slightly darker than SH020 | 3.0 | Her best moment: closing the gap | cut on action |
| SC02-SH050 | MS | eye-level | follow | Lan at the 4-high stack | Hauls herself over on her forearms; the outer right forearm scrapes the splintered slat; ends landing with a red graze visible, hissing | Lan centre, stack at left, graze on the camera-side arm | normal | darker, uneven | 3.5 | The cost: the graze (continuity) | cut on action |
| SC02-SH060 | MWS | very low | static | Macaque at the cart | Slips under the cart bed without slowing; ends emerging on the far side, tin still clutched | cart bed as a dark slot, macaque in it | wide, deep | dim amber, cooler pocket | 2.0 | The reversal: it fits, she will not | cut on action |
| SC02-SH070 | MS | eye-level | lead | Lan in the gap | The camera waits ahead of her inside the service path, looking east back at her; Lan turns her shoulders and shuffles sideways between two stalls toward camera; ends with her half through, face tight | Lan centre, plain walls close at each side | normal | dark, narrow, a spill of amber behind her | 3.0 | Cost and comedy; the macaque is out of sight | cut |
| SC02-SH080 | WS | eye-level | static | Lan, out the other side | Lan stops, holds her right forearm, chest heaving; ends still, no macaque, no rattle | Lan small in the unlit stretch, lantern glow behind | normal | desaturating, quieter | 3.0 | Loss and silence | cut |
| SC02-SH090 | MCU | eye-level | pan-right | Lan searching | Her head turns slowly, scanning lanterns and crowd; ends with her eyes still, nothing found | Lan left third, blurred lanterns right | medium telephoto | cooler pockets | 2.5 | Nothing: space to breathe | cut |
| SC02-SH100 | MCU | eye-level | static | Lan hearing the knock | Two slow metallic knocks, a pause; she freezes then turns her head toward the dark; ends facing screen right toward the unlit stretch | Lan left third, dark right | medium telephoto | cool, hushed | 3.0 | The turn: curiosity | cut |
| SC02-SH110 | WS | eye-level | static | Lan and the alley mouth | Lan walks toward the dark arch of the alley mouth and stops at its threshold; ends with her small at the edge of the dark | arch centre, lights dim behind | normal, deep | deep umber and teal, almost no practicals | 3.0 | Lead into SC03 | cut to SC03 |

Total: 32.0 s vs estimate 32 s.

###### Coverage and rhythm
Shots run 3.0 s in the pursuit so each obstacle is read, then 2.0 s for the cart (the fastest cut, the reversal), then grow again to 3.0 s for the hush. The first seven shots (SH070 neutral, toward camera) alternate the macaque and Lan, never together: one subject per shot, always screen right. Light and colour fall away shot by shot toward SH110, following the color script (SC02: warm, desaturating, cooler at the end).

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH010, SH030, SH060 | Animal with prop in motion | Macaque alone; near-profile view; tin on the near side; short clips |
| SH020, SH040, SH050 | Vaults and skids | One move per clip; side-on; the graze is an end-frame state |
| SH070 | Body between walls | Medium shot; plain walls; no hands in detail |
| SH090 | Pan in a dark area | Slow pan; background lanterns as soft bokeh |
| SH100 | Sound cue (two knocks) carried by audio only | Veo native audio or post SFX; picture shows only her reaction |
| All | Crowd | Sparse, soft, never touching the runners |

###### Specialist and VFX flags
- action-director: done, see SC02_action.md. All 11 shots map to its phrases. PROPOSAL: none.
- animation-director: not applicable.
- vfx: none required. Graze painted in the end frame, not composited.

###### Handoff
- Produced: SC02_direction@1 (APPROVED under autonomy policy), 11 shots, 32.0 s
- Built from: screenplay@1, style_bible@1, LOC-NIGHT-MARKET@1, CH-LAN@1, CH-MACAQUE@1, props@1, SC02_action@1
- For cinematographer: warm to cool across the scene; SH060 is the lowest camera; SH090, SH100 longer lenses; SH110 almost no practicals.
- For script-supervisor: axis east to west, camera north; everything screen right except SH070 (neutral, toward camera) and SH110; graze starts at the end of SH050 on the outer RIGHT forearm; dust and loose hair from SH050.
- Open items: ASSUMPTION: the gap is a 55 cm service path parallel to the lane behind the north-side stalls, about 4 m long, wide enough for a gimbal operator walking backwards ahead of Lan (carried from SC02_action).
- Next: cinematographer, script-supervisor


#### Action plan
Source: `06_direction/SC02_action.md`

##### SC02 Action Plan: the chase through the lanes

Approved under the autonomy policy (see PRODUCTION_LOG.md).

###### Story of the action
- Objective: Lan wants the tin back. The macaque wants to reach the alley with it.
- Stakes: low and human. Lan could lose the last thing of Ah Ma's she touches every day; the macaque is never in danger and never threatens anyone.
- Three sentences: Lan chases at full speed and is plainly faster at obstacles than at ground. The lane's obstacles cost her (crate edge, a squeeze through a gap), while the macaque goes under every one of them in a straight line. She loses it, stops, and the macaque's direction becomes the clue when two knocks call her to the alley.
- Rating check: family-safe. The only injury is a surface graze with no blood drip. No contact between Lan and the macaque at any point.

###### Characters in action
| | Moves like | Limits |
|---|---|---|
| CH-LAN | Fast, practical, uses her hands first: skids, plants a hand, vaults the way a stall worker would, shoulder-first through gaps | 160 cm, slim; apron ties and loose trousers; slip-on shoes: she skids on damp concrete; not an athlete, so she drags herself over the second stack |
| CH-MACAQUE | Low, straight, deliberate. Never climbs, never leaps up, never doubles back. Runs on three limbs with the tin clutched in one arm against its chest | 35 cm tall, 45 cm body; tin is 16 cm and nearly a third of its body length, so it runs slightly lopsided |

###### Phases and momentum
| Phase | Shots | Momentum | Situation at the end |
|---|---|---|---|
| 1 Dive and skid | SH010-SH030 | Macaque ahead, Lan reacts | Macaque is straight ahead of Lan, tin rattling; Lan is gaining on open ground |
| 2 Crates | SH040-SH050 | Lan closes the gap (her best moment) | Over both stacks, she is wounded (graze) but nearly on it |
| 3 Cart and gap (the reversal) | SH060-SH070 | Macaque wins: it passes under the cart and Lan must detour | Lan is squeezing sideways through a 55 cm gap, losing sight of it |
| 4 Loss and hush | SH080-SH110 | Nobody has momentum; the scene turns | Lan stops, alone; two knocks; she walks toward the alley |

###### Geography
Floor plan: LOC-NIGHT-MARKET. The lane runs east to west; the chase travels west. Order of obstacles (east to west): STALL, TABLE with grey cloth, 3-high crate stack (L4a), 4-high crate stack (L4b), CART (L5), GAP (L6) on the north side, then the unlit stretch and the ALLEY MOUTH (L7) on the south side.
- Axis of action: the line of travel, east to west. The camera stays on the north side of the lane, looking south, so travel reads screen right in every shot. This continues SC01 (macaque ran screen right).
- Both characters travel screen right in every shot except SH070, a neutral shot (Lan moves toward a camera waiting ahead of her in the service path). No reversal.
- The only change is in SH110 where Lan turns toward the alley mouth (south) and walks away from camera into the dark.
- ASSUMPTION: the gap (L6) is a 55 cm service path running parallel to the lane behind the north-side stalls. Because the camera lives on the north side of the lane looking south, it cannot see the path; the shot is taken from inside the path, ahead of Lan, looking east (neutral direction).

###### Choreography (action, reaction, consequence)
| Ph | Move | Action | Reaction | Consequence | Tempo |
|---|---|---|---|---|---|
| P1 | 1 | Macaque, tin clutched to its chest, dives under the grey table cloth (cloth swings) | Shoppers nearby (soft background) turn their heads, do not move | Macaque out of sight for one beat | fast |
| P1 | 2 | Lan runs in from screen left and, seeing the macaque go under, plants her left hand on the table edge and skids round the outside, slip-ons sliding | Table rocks, a bowl wobbles but stays | Lan loses one stride, keeps running | fast |
| P1 | 3 | Macaque emerges on the far side and runs low and straight along the lane, tin rattling with every stride | None | Straight line toward the crates | steady |
| P2 | 4 | Lan reaches the 3-high stack, puts both hands on top and vaults it, legs swinging over to her right | Crates shift slightly, settle | She lands on both feet, still running | fast |
| P2 | 5 | Lan reaches the 4-high stack (120 cm, too tall to vault). She plants her forearms on the top, hauls herself over, and her outer right forearm drags across the splintered slat | She hisses, pulls the arm in, keeps going | A red graze appears on the outer right forearm, about 12 cm, no dripping. Light dust on apron hem and trouser knees | medium, effortful |
| P3 | 6 | Macaque reaches the parked cart across the lane and slips under the bed (40 cm) without slowing | None | Cart blocks Lan: she cannot go under | steady |
| P3 | 7 | Lan arrives, sees the cart handles block the lane, turns her shoulders and shuffles sideways into the 55 cm gap between two stalls | Her apron brushes both walls, she breathes hard | She disappears into the gap, out of sight of the macaque | slow, tight |
| P4 | 8 | Lan comes out of the gap west of the cart and stops. The macaque and the rattle are gone | She holds her right forearm, chest heaving, turns her head | Stillness; the crowd noise is behind her | hold |
| P4 | 9 | Two slow metallic knocks from somewhere past the lights | Lan freezes, then turns her head toward the dark | Curiosity replaces pursuit | hold |
| P4 | 10 | Lan walks toward the dark arch of the alley mouth | None | Scene ends | slow |

###### Shot mapping
| Phrase | Shot | One decisive move | Why this shot |
|---|---|---|---|
| P1.1 | SC02-SH010 | Macaque dives under the table | Animal alone: no human contact in the frame |
| P1.2 | SC02-SH020 | Lan skids around the table | Human alone: wide enough to read the skid |
| P1.3 | SC02-SH030 | Macaque runs low and straight with the rattling tin | The "never up, never away" clue is a clean low profile |
| P2.4 | SC02-SH040 | Lan vaults the 3-high stack | One vault, one landing |
| P2.5 | SC02-SH050 | Lan hauls herself over the 4-high stack; graze | Cost shown on her body; graze is the end state |
| P3.6 | SC02-SH060 | Macaque slips under the cart | Low-angle, no Lan in frame |
| P3.7 | SC02-SH070 | Lan squeezes sideways through the gap | Tight, claustrophobic, comic |
| P4.8 | SC02-SH080 | Lan stops and holds her arm | Hold after the run |
| P4.8 | SC02-SH090 | Lan searches, nothing there | Space to breathe |
| P4.9 | SC02-SH100 | Two knocks; she turns | The turn of the scene |
| P4.10 | SC02-SH110 | Lan walks into the alley mouth | Leads into SC03 |

###### AI-execution notes
| Shot | Risk | Choreography answer |
|---|---|---|
| SH010, SH030, SH060 | Animal running with a prop in its arms: the tin may vanish, merge into the body or be dropped | Macaque alone in frame, profile view, tin always on the near side held against its chest; short clips; retry ladder in the video prompt |
| SH020, SH040, SH050 | Human vaults are the most failure-prone motion (limbs through crates) | One vault per clip, side-on view on the horizontal plane, crates are static, no contact detail on the graze, graze added in the end frame |
| SH050 | Forearm graze must appear mid-clip | Start frame has an unmarked arm, end frame has the graze; first-last-frame mode |
| SH070 | Body squeezed between walls, hands and wall merge | Medium shot, no hands in detail, walls are plain |
| All | Crowds | Sparse, soft-focus, kept in the background; none touch the runners |
| All | Lan and macaque in the same shot | Never. Every shot has exactly one of them |

###### Continuity output (for the script supervisor)
| Item | Starts at | Detail |
|---|---|---|
| Right forearm graze | SC02-SH050 (end) | Outer right forearm, about 12 cm, red surface graze, no drip; never on the left arm; stays through SC04 |
| Dust | SC02-SH050 | Light dust on apron hem and trouser knees |
| Loose hair | SC02-SH050 | Two to three loose strands from the knot |
| Flushed face, sweat sheen | SC02-SH020 onward | Increases to SH080 |
| Tin | throughout | PR-TIN:SEALED, lid on, in the macaque's arms; the rattle never stops until SH080 |
| Table, crates, cart | SC02-SH010 to SH060 | Same order east to west, undamaged. Crates shift but nothing falls |

###### Proposals for the film-director
- PROPOSAL: none. The director's shot slots are used as written (11 shots, 32.0 s).

###### Handoff
- Produced: SC02_action@1 (APPROVED under autonomy policy), 10 phrases, 11 mapped shots
- Built from: SC02_direction@1, CH-LAN@1, CH-MACAQUE@1, LOC-NIGHT-MARKET@1, props@1
- Open items: ASSUMPTION: the gap is a service path parallel to the lane with open stall fronts (resolved: neutral shot from inside the path)
- Conflicts: none
- Next: cinematographer, script-supervisor


#### Camera and lighting
Source: `07_camera/SC02_camera.md`

##### SC02 Camera and Lighting: EXT. NIGHT MARKET - LANES - CONTINUOUS

Approved under the autonomy policy (see PRODUCTION_LOG.md).

Color script row: umber + amber streaks, grey steam haze; chili red flashes, cooler pockets; warm drifting to neutral; medium desaturating; mixed, darker at gaps. Time/weather: night, dry. Format: 16:9, 24 fps, 180-degree shutter feel (natural motion blur), spherical prime look, 35 mm film emulation (fine grain, soft halation), mild natural vignette, round warm bokeh.

###### Lighting setups

####### Setup SC02-L1: Lane run: warm string lights behind the runners, darkness ahead
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | String-light bulbs and lanterns along the lane wires | From the east (behind the runners) and above, camera-left | Hard bulbs, soft where paper lanterns diffuse | 2700 K warm tungsten, falling in intensity toward the west | Light literally falls behind the runners as they move screen right |
| Fill | Bounce from awnings, canvas roofs and produce piles | Camera-right, low, weak | Soft, uneven | 2900 K amber, 1 stop under SC01 and falling | About 4:1 at the table, 6:1 at the cart, 8:1 at the stop |
| Rim | The same bulbs from behind | Behind and camera-left, high | Hard edge on shoulders and fur | 2700 K | Edge light is what keeps Lan and the macaque readable against umber |
| Practicals | Lane bulbs, red lantern flashes, stall bulbs | In frame, soft focus | Round bokeh | Amber #E0963A, red #B8362B | Fewer in frame each shot toward the west |
| Atmosphere | Steam haze from the stalls, grey-white | Hangs at head height | Light haze, scattered | Grey-white #C9C2B8 | Thins out to almost none at SH110 |
| Ambient | Night sky edge in the unlit stretch | From above, low level | Soft, dim | 5000 K cool pocket, deep teal-leaning #1F3B3F | The only cool source; first appears at SH060-SH070 gaps and grows to SH110 |

Contrast feel: Medium, uneven: bright pockets by the stalls, dark lane gaps. Darker overall than SC01 by one stop, a further stop by SH110.
Changes during scene: Exposure falls about 2 stops from SH010 to SH110; colour temperature drifts from 2700 K warm toward neutral with a cool pocket from SH080 onward.

```
camera (N side of lane, looking S, tracking W = screen right)
 E (screen-L)  stall ... table ... crates ... cart ... gap ... unlit stretch ... alley mouth  W (screen-R)
 bulbs strong -------------------------------------------------------> bulbs sparse, then dark
 KEY/RIM from behind (E) and above           cool ambient pocket grows at the western end
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement | Movement execution | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC02-SH010 | SC02-L1 | 35 | f/2.8, medium | The macaque and table cloth sharp; soft lanterns behind | 0.5 | 2.5 | North edge of the lane, 2.5 m from the table, camera at 0.5 m looking slightly up | steadicam/gimbal | follow | Tracks west (screen right) about 5 m with the macaque, ending as the table cloth settles. | 35 mm low tracking shot, macaque diving under a grey table cloth, warm lights streaking behind |
| SC02-SH020 | SC02-L1 | 28 | f/4, medium-deep | Lan sharp; table and shoppers softly sharp | 1.4 | 4.0 | North edge of the lane, 4 m from the table | steadicam/gimbal | follow | Tracks west about 6 m with Lan, from the skid to her running past the table. | 28 mm, Lan skids around a table with a grey cloth, soft-focus shoppers part |
| SC02-SH030 | SC02-L1 | 35 | f/2.8, medium | The macaque sharp; lane lights recede into bokeh at screen right | 0.4 | 2.5 | North edge of the lane, ground-level tracking, 2.5 m from the macaque | steadicam/gimbal | follow | Tracks west about 8 m at the macaque's speed, ending as it reaches the crates. | 35 mm ground-level tracking, macaque in profile running low, tin held to its chest, rattling |
| SC02-SH040 | SC02-L1 | 28 | f/4, medium-deep | Lan and the 3-high crate stack | 1.3 | 4.0 | North edge of the lane, 4 m from the crates | steadicam/gimbal | follow | Tracks west about 5 m; Lan vaults the stack and lands, camera ending with her mid-frame running on. | 28 mm side-on, Lan vaulting a stack of pale wooden crates, warm bulbs behind |
| SC02-SH050 | SC02-L1 | 35 | f/2.8, medium | Lan's face and right forearm (camera side) sharp | 1.3 | 3.0 | North edge of the lane, 3 m from the 4-high crates | steadicam/gimbal | follow | Tracks west about 3 m; ends as Lan lands on the far side and the graze on her right forearm is visible. | 35 mm side-on, Lan hauls herself over a tall stack of crates, red graze on her right forearm |
| SC02-SH060 | SC02-L1 | 24 | f/4, deep | The slot under the cart bed and the macaque emerging; wheels and handles sharp | 0.2 | 1.5 | Ground level at the north edge of the lane, 1.5 m from the cart, looking along the lane west | locked-off | static | Locked off at ground level; the macaque crosses the dark slot under the bed left to right. | 24 mm at ground level, the cart bed as a dark slot, macaque slipping through |
| SC02-SH070 | SC02-L1 | 50 | f/2, shallow | Lan's face; the plain walls at both sides soft | 1.4 | 2.0 | Inside the 55 cm service path, 2 m west of Lan, looking east back at her; the gap's mouth and amber lane light are behind her | steadicam/gimbal | lead | Backs west about 2.5 m ahead of Lan, matching her sideways shuffle toward camera; ends as she is half through. | 50 mm, Lan squeezing sideways between two plain stall walls toward camera, tight and close, warm amber light behind her |
| SC02-SH080 | SC02-L1 | 35 | f/2.8, medium | Lan; lanterns far behind soft | 1.5 | 7.0 | In the unlit stretch, north edge, 7 m from Lan | tripod | static | Locked off; Lan stops and holds her arm. | 35 mm wide, Lan small and still, dim lanterns behind in soft bokeh, hush |
| SC02-SH090 | SC02-L1 | 85 | f/2, shallow | Lan's eyes sharp; lanterns at screen right melt into bokeh | 1.5 | 3.5 | In the unlit stretch, 3.5 m north of Lan | tripod | pan-right | Pans right about 25 degrees over 2.5 s to follow her head turn; ends with her eyes still. | 85 mm close-up, slow pan, Lan's eyes searching, lanterns dissolving to bokeh |
| SC02-SH100 | SC02-L1 | 85 | f/2, shallow | Lan's eyes | 1.5 | 3.5 | Same as SH090, no pan | tripod | static | Locked off. She freezes, then turns her head to screen right. | 85 mm close-up, Lan frozen, face turning toward the dark at screen right |
| SC02-SH110 | SC02-L1 | 28 | f/4, deep | Alley mouth arch and Lan, both in focus | 1.5 | 8.0 | North edge of the lane, 8 m from the alley mouth, looking south | tripod | static | Locked off. Lan walks away from camera to the arch and stops. | 28 mm wide, the dark arched alley mouth at centre, Lan small at its threshold |

###### Consistency notes
- Key side: string-light bulbs from the east (behind the runners, camera-left) throughout; every shot tracks west with the camera on the north side, so light always comes from behind and to the left of the runners and falls away ahead of them.
- Matched pair: SH090/SH100 are the same position and lens (85 mm), SH090 pans, SH100 locks.
- Eyeline heights: Lan 1.5 m; macaque shots at 0.2-0.5 m.

###### Proposals to the director and production-designer
- Continuity fix applied (CR-01): SH070 is shot from inside the service path, ahead of Lan, so it is a neutral shot; light there is the lane bulbs spilling in behind her (no new source). PROPOSAL (production-designer): confirm the service path is about 4 m long and a gimbal operator fits.
- PROPOSAL: none to the director. All 11 shots are executable within their durations.

###### Handoff
- Produced: SC02_camera@1 (APPROVED under autonomy policy), 1 lighting setup (SC02-L1), 11 shots specified
- Built from: SC02_direction@1, LOC-NIGHT-MARKET@1, style_bible@1
- Open items: see proposals above (no new light sources added to any set)
- Conflicts: none
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC02` in section 11.


#### Shot records
Source: `08_master/shots/SC02.md`

##### SC02 Shot Records: EXT. NIGHT MARKET - LANES - CONTINUOUS

Compiled by the production-manager from the direction, camera and continuity documents. 11 shots, 32.0 s. Frame text pastes the identity, costume, prop, location and style locks verbatim.

###### SC02-SH010

```yaml
record: shot
id: SC02-SH010
scene: SC02
status: REVIEW
version: 2
depends_on:
- SC02_direction@1
- SC02_camera@1
- continuity@1
- style_bible@1
- screenplay@1
- SC02_action@1
purpose: The chase is on; low and straight
screenplay_ref: SC02, action line 'The macaque dives under a table.'
duration_s: 3.0
characters:
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: lower frame, entering from the left and diving under the table at frame centre
  facing: side view, running toward frame right, its right side toward the camera
  action: dives under the grey table cloth with the tin held against its chest
  expression_start: intent
  expression_end: gone under the cloth
  eyeline: straight ahead, frame right
props:
- id: PR-TIN
  state: PR-TIN:SEALED
  position: held against the macaque's chest on its camera side, rattling
location:
  id: LOC-NIGHT-MARKET
  area: 'the lane just west of the stall: a folding round table with a plain grey cloth hanging to 15 cm above the
    ground'
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: damp concrete ground, lower frame
  midground: the table with its grey cloth, centre
  background: soft lanterns, string-light bulbs and sparse faceless shoppers
  composition: table centre, long warm lane receding to frame right
camera:
  shot_size: MWS
  angle: low
  height_m: 0.5
  distance_m: 2.5
  position: North edge of the lane, 2.5 m from the table, camera at 0.5 m looking slightly up
  lens_mm: 35
  aperture: f/2.8
  depth_of_field: medium
  focus: The macaque and table cloth sharp; soft lanterns behind
  movement: follow
  movement_execution: Tracks west (screen right) about 5 m with the macaque, ending as the table cloth settles.
  support: steadicam/gimbal
  setup: SC02-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject
  fill: Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1
  rim: Hard bulb edge light on shoulders and fur from behind and camera-left
  practicals: String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs
  shadows: Long, soft, falling forward (west) and to camera-right, deeper toward the west
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'chili red #B8362B'
  - 'steam grey-white #C9C2B8'
screen_direction: Travel west = frame right
start_state: the macaque running at frame left toward the table
end_state: the table cloth swinging, the macaque out of sight
action_timeline:
- '0.0-1.5 s: the macaque runs toward the table'
- '1.5-2.3 s: it dives under the cloth'
- '2.3-3.0 s: the cloth swings closed and settles'
dialogue: []
sound: 'sfx.md@1: SFX-SC02-001, SFX-SC02-002; ambience bed SC02. Macaque pattering on concrete; tin rattles against its chest; Cloth flap as the macaque dives under the table cloth, then settles'
music: 'M01 chase (music.md@1)'
vfx: none
transition_in: cut-on-action from SC01-SH100
transition_out: cut-on-action
continuity:
- Tin SEALED in the arms; table with grey cloth first in the order east to west
- Single macaque
generation:
  mode: image-to-video
  start_frame: 'Medium wide shot, low angle, 35 mm lens at f/2.8, camera 0.5 m high, medium depth of field, 35 mm
    low tracking shot, macaque diving under a grey table cloth, warm lights streaking behind. A wild adult long-tailed
    macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare
    face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: lower frame, entering from the left and diving under
    the table at frame centre; side view, running toward frame right, its right side toward the camera; running
    at frame left toward the table with the tin against its chest; expression: intent. A round dented tin, 16 cm
    across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright
    worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED:
    held against the macaque''s chest on its camera side, rattling. Covered open-air night market lane, 3 m wide,
    of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp
    swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small
    noodle stall with a plank shelf, steel stockpot and wok burner. Area: the lane just west of the stall: a folding
    round table with a plain grey cloth hanging to 15 cm above the ground. Foreground: damp concrete ground, lower
    frame. Midground: the table with its grey cloth, centre. Background: soft lanterns, string-light bulbs and sparse
    faceless shoppers. Composition: table centre, long warm lane receding to frame right. Light: key Warm 2700 K
    string-light bulbs from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings
    and produce, camera-right, low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind
    and camera-left; practicals String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs;
    shadows Long, soft, falling forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid
    haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8.
    Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night
    market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against
    umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round
    warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Medium wide shot, low angle, 35 mm lens at f/2.8, camera 0.5 m high, medium depth of field, 35 mm
    low tracking shot, macaque diving under a grey table cloth, warm lights streaking behind. A wild adult long-tailed
    macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare
    face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: lower frame, entering from the left and diving under
    the table at frame centre; side view, running toward frame right, its right side toward the camera; under the
    table; no animal visible, the cloth swinging; expression: gone under the cloth. A round dented tin, 16 cm across
    and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn
    brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED: held
    against the macaque''s chest on its camera side, rattling. Covered open-air night market lane, 3 m wide, of
    timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept
    concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle
    stall with a plank shelf, steel stockpot and wok burner. Area: the lane just west of the stall: a folding round
    table with a plain grey cloth hanging to 15 cm above the ground. Foreground: damp concrete ground, lower frame.
    Midground: the table with its grey cloth, centre. Background: soft lanterns, string-light bulbs and sparse faceless
    shoppers. Composition: table centre, long warm lane receding to frame right. Light: key Warm 2700 K string-light
    bulbs from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings and produce,
    camera-right, low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left;
    practicals String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long,
    soft, falling forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette:
    night-market umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action
    cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-1.5 s: the macaque runs toward the table at frame left. 1.5-2.3 s: it dives under the cloth. 2.3-3.0
    s: the cloth swings closed and settles. Camera tracks right at low height.'
  clip_length_s: 4
  risks:
  - animal with prop; no human in frame
```

###### SC02-SH020

```yaml
record: shot
id: SC02-SH020
scene: SC02
status: REVIEW
version: 2
depends_on:
- SC02_direction@1
- SC02_camera@1
- continuity@1
- style_bible@1
- screenplay@1
- SC02_action@1
purpose: Lan's speed and a skid round the table
screenplay_ref: SC02, action line 'Lan skids around it.'
duration_s: 3.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state BASE, flushed: hair neat, a few small broth stains on the apron front, flushed cheeks and
    a light sweat sheen, forearms unmarked'
  position: entering from frame left, midground, full figure, about 4 m from camera
  facing: running toward frame right, left hand reaching to the table edge
  action: skids round the outside of the table and runs on
  expression_start: intent, breathing hard
  expression_end: intent, breathing hard
  eyeline: ahead, frame right
props: []
location:
  id: LOC-NIGHT-MARKET
  area: the lane at the round table with the grey cloth
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: damp concrete ground
  midground: the table centre, Lan crossing it left to right
  background: soft-focus shoppers part, lanterns and string-light bulbs
  composition: table centre, Lan crossing
camera:
  shot_size: WS
  angle: eye-level
  height_m: 1.4
  distance_m: 4.0
  position: North edge of the lane, 4 m from the table
  lens_mm: 28
  aperture: f/4
  depth_of_field: medium-deep
  focus: Lan sharp; table and shoppers softly sharp
  movement: follow
  movement_execution: Tracks west about 6 m with Lan, from the skid to her running past the table.
  support: steadicam/gimbal
  setup: SC02-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject
  fill: Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1
  rim: Hard bulb edge light on shoulders and fur from behind and camera-left
  practicals: String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs
  shadows: Long, soft, falling forward (west) and to camera-right, deeper toward the west
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'chili red #B8362B'
  - 'steam grey-white #C9C2B8'
screen_direction: Lan travels west = frame right
start_state: Lan at frame left, left hand on the table edge, mid-skid
end_state: Lan right of the table, running on
action_timeline:
- '0.0-1.2 s: she plants her left hand on the table edge and skids round'
- '1.2-3.0 s: she runs on to frame right'
dialogue: []
sound: 'sfx.md@1: SFX-SC02-003; ambience bed SC02. Lan''s running footsteps, breath, a shoe skid on damp concrete, hand slap on the table edge'
music: 'M01 chase (music.md@1)'
vfx: none
transition_in: cut-on-action from SC02-SH010
transition_out: cut-on-action
continuity:
- Lan BASE becoming flushed; no graze
- Table undamaged
generation:
  mode: image-to-video
  start_frame: 'Wide shot, eye-level angle, 28 mm lens at f/4, camera 1.4 m high, medium-deep depth of field, 28
    mm, Lan skids around a table with a grey cloth, soft-focus shoppers part. Lan, a Southeast Asian woman in her
    early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick
    brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work
    apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No
    jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state BASE, flushed: hair neat, a few small broth
    stains on the apron front, flushed cheeks and a light sweat sheen, forearms unmarked. Position: entering from
    frame left, midground, full figure, about 4 m from camera; running toward frame right, left hand reaching to
    the table edge; at frame left, left hand reaching for the table edge, slip-ons sliding; expression: intent,
    breathing hard. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal
    and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper
    lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and
    wok burner. Area: the lane at the round table with the grey cloth. Foreground: damp concrete ground. Midground:
    the table centre, Lan crossing it left to right. Background: soft-focus shoppers part, lanterns and string-light
    bulbs. Composition: table centre, Lan crossing. Light: key Warm 2700 K string-light bulbs from camera-left (east),
    above and behind the subject; fill Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling
    to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left; practicals String-light bulbs
    on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling forward (west)
    and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17,
    lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema, 35 mm film
    grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns,
    string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep
    teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture,
    clean frame without text, logos or watermarks.'
  end_frame: 'Wide shot, eye-level angle, 28 mm lens at f/4, camera 1.4 m high, medium-deep depth of field, 28 mm,
    Lan skids around a table with a grey cloth, soft-focus shoppers part. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state BASE, flushed: hair neat, a few small broth
    stains on the apron front, flushed cheeks and a light sweat sheen, forearms unmarked. Position: entering from
    frame left, midground, full figure, about 4 m from camera; running toward frame right, left hand reaching to
    the table edge; right of the table, running on toward frame right; expression: intent, breathing hard. Covered
    open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs,
    blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs,
    three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the lane
    at the round table with the grey cloth. Foreground: damp concrete ground. Midground: the table centre, Lan crossing
    it left to right. Background: soft-focus shoppers part, lanterns and string-light bulbs. Composition: table
    centre, Lan crossing. Light: key Warm 2700 K string-light bulbs from camera-left (east), above and behind the
    subject; fill Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1; rim Hard bulb
    edge light on shoulders and fur from behind and camera-left; practicals String-light bulbs on the lane wires,
    red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling forward (west) and to camera-right,
    deeper toward the west. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A,
    chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema, 35 mm film grain with soft halation,
    16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and
    stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow
    depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text,
    logos or watermarks.'
  motion: '0-1.2 s: Lan plants her left hand on the table edge and skids round it. 1.2-3.0 s: she runs on toward
    frame right. Camera tracks right with her.'
  clip_length_s: 4
  risks:
  - 'skid on a human: keep it side-on'
```

###### SC02-SH030

```yaml
record: shot
id: SC02-SH030
scene: SC02
status: REVIEW
version: 2
depends_on:
- SC02_direction@1
- SC02_camera@1
- continuity@1
- style_bible@1
- screenplay@1
- SC02_action@1
purpose: 'Direction clue: never up, never away'
screenplay_ref: SC02, action line 'The macaque runs low and straight, never up, never away. The tin RATTLES with
  every stride.'
duration_s: 3.0
characters:
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: lower third, ground level, left of centre
  facing: side view, running toward frame right, its right side toward the camera
  action: runs low and straight with the tin against its chest
  expression_start: intent
  expression_end: intent
  eyeline: straight ahead, frame right
props:
- id: PR-TIN
  state: PR-TIN:SEALED
  position: against the macaque's chest on its camera side
- id: PR-CRATES
  state: PR-CRATES:STACKED
  position: soft at the right edge of frame in the distance
location:
  id: LOC-NIGHT-MARKET
  area: the lane between the table and the crates
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: damp concrete ground
  midground: the macaque running
  background: a long lane of lights receding to frame right, crate stacks soft at the right edge
  composition: macaque lower third, lights receding right
camera:
  shot_size: MWS
  angle: low
  height_m: 0.4
  distance_m: 2.5
  position: North edge of the lane, ground-level tracking, 2.5 m from the macaque
  lens_mm: 35
  aperture: f/2.8
  depth_of_field: medium
  focus: The macaque sharp; lane lights recede into bokeh at screen right
  movement: follow
  movement_execution: Tracks west about 8 m at the macaque's speed, ending as it reaches the crates.
  support: steadicam/gimbal
  setup: SC02-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject
  fill: Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1
  rim: Hard bulb edge light on shoulders and fur from behind and camera-left
  practicals: String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs
  shadows: Long, soft, falling forward (west) and to camera-right, deeper toward the west
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'chili red #B8362B'
  - 'steam grey-white #C9C2B8'
screen_direction: West = frame right
start_state: the macaque running at frame left of centre
end_state: the macaque at the foot of the crate stacks
action_timeline:
- '0.0-3.0 s: the macaque runs low and straight; the tin rattles'
dialogue: []
sound: 'sfx.md@1: SFX-SC02-004; ambience bed SC02. Macaque pattering, tin rattle, steady and low; shoppers murmur softly in the distance'
music: 'M01 chase (music.md@1)'
vfx: none
transition_in: cut-on-action from SC02-SH020
transition_out: cut-on-action
continuity:
- 'Order east to west: table, 3-high crates, 4-high crates, cart'
- Tin SEALED
generation:
  mode: image-to-video
  start_frame: 'Medium wide shot, low angle, 35 mm lens at f/2.8, camera 0.4 m high, medium depth of field, 35 mm
    ground-level tracking, macaque in profile running low, tin held to its chest, rattling. A wild adult long-tailed
    macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare
    face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: lower third, ground level, left of centre; side view,
    running toward frame right, its right side toward the camera; running at frame left of centre; expression: intent.
    A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit
    lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing,
    no handle. State SEALED: against the macaque''s chest on its camera side. Slatted pale wooden crates, each 50
    by 35 by 30 cm, in one stack three high and one four high, the taller stack with a rough splintered slat at
    its top edge. No stencils, no writing. State STACKED: soft at the right edge of frame in the distance. Covered
    open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs,
    blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs,
    three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the lane
    between the table and the crates. Foreground: damp concrete ground. Midground: the macaque running. Background:
    a long lane of lights receding to frame right, crate stacks soft at the right edge. Composition: macaque lower
    third, lights receding right. Light: key Warm 2700 K string-light bulbs from camera-left (east), above and behind
    the subject; fill Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1; rim Hard
    bulb edge light on shoulders and fur from behind and camera-left; practicals String-light bulbs on the lane
    wires, red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling forward (west) and to camera-right,
    deeper toward the west. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A,
    chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema, 35 mm film grain with soft halation,
    16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and
    stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow
    depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text,
    logos or watermarks.'
  end_frame: 'Medium wide shot, low angle, 35 mm lens at f/2.8, camera 0.4 m high, medium depth of field, 35 mm
    ground-level tracking, macaque in profile running low, tin held to its chest, rattling. A wild adult long-tailed
    macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare
    face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: lower third, ground level, left of centre; side view,
    running toward frame right, its right side toward the camera; at frame right of centre, reaching the foot of
    the crates; expression: intent. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at
    the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small
    dents on the side. No label, no writing, no handle. State SEALED: against the macaque''s chest on its camera
    side. Slatted pale wooden crates, each 50 by 35 by 30 cm, in one stack three high and one four high, the taller
    stack with a rough splintered slat at its top edge. No stencils, no writing. State STACKED: soft at the right
    edge of frame in the distance. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with
    corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire
    strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf,
    steel stockpot and wok burner. Area: the lane between the table and the crates. Foreground: damp concrete ground.
    Midground: the macaque running. Background: a long lane of lights receding to frame right, crate stacks soft
    at the right edge. Composition: macaque lower third, lights receding right. Light: key Warm 2700 K string-light
    bulbs from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings and produce,
    camera-right, low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left;
    practicals String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long,
    soft, falling forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette:
    night-market umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action
    cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-3.0 s: the macaque runs low and straight toward frame right with the tin against its chest. Camera
    tracks right at ground level at its pace. Lights streak softly behind.'
  clip_length_s: 4
  risks:
  - animal with prop
```

###### SC02-SH040

```yaml
record: shot
id: SC02-SH040
scene: SC02
status: REVIEW
version: 2
depends_on:
- SC02_direction@1
- SC02_camera@1
- continuity@1
- style_bible@1
- screenplay@1
- SC02_action@1
purpose: 'Her best moment: the vault closes the gap'
screenplay_ref: SC02, action line 'Lan vaults a stack of crates'
duration_s: 3.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state BASE, flushed: hair neat, a few small broth stains on the apron front, flushed cheeks and
    a light sweat sheen, forearms unmarked'
  position: frame left, midground, full figure at the foot of the stack, about 4 m from camera
  facing: toward frame right, both hands on the top of the stack
  action: vaults the three-high crate stack, legs swinging over to her right, and lands
  expression_start: intent, breathless
  expression_end: intent, breathless
  eyeline: ahead, frame right
props:
- id: PR-CRATES
  state: PR-CRATES:STACKED
  position: frame centre, the three-high stack (90 cm) with the four-high stack beyond it
location:
  id: LOC-NIGHT-MARKET
  area: the lane at the three-high crate stack
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: damp concrete ground
  midground: the three-high stack centre, Lan crossing it
  background: the four-high stack and soft lanterns
  composition: crates centre, Lan crossing left to right
camera:
  shot_size: WS
  angle: eye-level
  height_m: 1.3
  distance_m: 4.0
  position: North edge of the lane, 4 m from the crates
  lens_mm: 28
  aperture: f/4
  depth_of_field: medium-deep
  focus: Lan and the 3-high crate stack
  movement: follow
  movement_execution: Tracks west about 5 m; Lan vaults the stack and lands, camera ending with her mid-frame running
    on.
  support: steadicam/gimbal
  setup: SC02-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject
  fill: Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1
  rim: Hard bulb edge light on shoulders and fur from behind and camera-left
  practicals: String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs
  shadows: Long, soft, falling forward (west) and to camera-right, deeper toward the west
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'chili red #B8362B'
  - 'steam grey-white #C9C2B8'
screen_direction: West = frame right
start_state: Lan at the foot of the stack, both hands going to the top
end_state: Lan landed on the far side, running on
action_timeline:
- '0.0-1.0 s: both hands on top, legs swing over'
- '1.0-2.0 s: she lands'
- '2.0-3.0 s: she runs on to frame right'
dialogue: []
sound: 'sfx.md@1: SFX-SC02-005; ambience bed SC02. Lan''s hands hit the crate top: wood thud; legs swing over; landing thud and a shoe scuff'
music: 'M01 chase (music.md@1)'
vfx: none
transition_in: cut-on-action from SC02-SH030
transition_out: cut-on-action
continuity:
- Lan still without graze
- Crates shift slightly but nothing falls
generation:
  mode: image-to-video
  start_frame: 'Wide shot, eye-level angle, 28 mm lens at f/4, camera 1.3 m high, medium-deep depth of field, 28
    mm side-on, Lan vaulting a stack of pale wooden crates, warm bulbs behind. Lan, a Southeast Asian woman in her
    early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick
    brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work
    apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No
    jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state BASE, flushed: hair neat, a few small broth
    stains on the apron front, flushed cheeks and a light sweat sheen, forearms unmarked. Position: frame left,
    midground, full figure at the foot of the stack, about 4 m from camera; toward frame right, both hands on the
    top of the stack; at the foot of the three-high stack with both hands going to the top crate; expression: intent,
    breathless. Slatted pale wooden crates, each 50 by 35 by 30 cm, in one stack three high and one four high, the
    taller stack with a rough splintered slat at its top edge. No stencils, no writing. State STACKED: frame centre,
    the three-high stack (90 cm) with the four-high stack beyond it. Covered open-air night market lane, 3 m wide,
    of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp
    swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small
    noodle stall with a plank shelf, steel stockpot and wok burner. Area: the lane at the three-high crate stack.
    Foreground: damp concrete ground. Midground: the three-high stack centre, Lan crossing it. Background: the four-high
    stack and soft lanterns. Composition: crates centre, Lan crossing left to right. Light: key Warm 2700 K string-light
    bulbs from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings and produce,
    camera-right, low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left;
    practicals String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long,
    soft, falling forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette:
    night-market umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action
    cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Wide shot, eye-level angle, 28 mm lens at f/4, camera 1.3 m high, medium-deep depth of field, 28 mm
    side-on, Lan vaulting a stack of pale wooden crates, warm bulbs behind. Lan, a Southeast Asian woman in her
    early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick
    brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work
    apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No
    jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state BASE, flushed: hair neat, a few small broth
    stains on the apron front, flushed cheeks and a light sweat sheen, forearms unmarked. Position: frame left,
    midground, full figure at the foot of the stack, about 4 m from camera; toward frame right, both hands on the
    top of the stack; landed on both feet to the right of the stack, running on; expression: intent, breathless.
    Slatted pale wooden crates, each 50 by 35 by 30 cm, in one stack three high and one four high, the taller stack
    with a rough splintered slat at its top edge. No stencils, no writing. State STACKED: frame centre, the three-high
    stack (90 cm) with the four-high stack beyond it. Covered open-air night market lane, 3 m wide, of timber-frame
    food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete
    ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall
    with a plank shelf, steel stockpot and wok burner. Area: the lane at the three-high crate stack. Foreground:
    damp concrete ground. Midground: the three-high stack centre, Lan crossing it. Background: the four-high stack
    and soft lanterns. Composition: crates centre, Lan crossing left to right. Light: key Warm 2700 K string-light
    bulbs from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings and produce,
    camera-right, low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left;
    practicals String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long,
    soft, falling forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette:
    night-market umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action
    cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-1.0 s: Lan puts both hands on the top crate and swings her legs over. 1.0-2.0 s: she lands on both
    feet. 2.0-3.0 s: she runs on toward frame right. Camera tracks right.'
  clip_length_s: 4
  risks:
  - 'vault through crates: side-on, one vault, crates static'
```

###### SC02-SH050

```yaml
record: shot
id: SC02-SH050
scene: SC02
status: REVIEW
version: 2
depends_on:
- SC02_direction@1
- SC02_camera@1
- continuity@1
- style_bible@1
- screenplay@1
- SC02_action@1
purpose: 'The cost: the graze'
screenplay_ref: SC02, action lines 'drags herself over a second. Her forearm scrapes the edge. She hisses and keeps
  going.'
duration_s: 3.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: centre, midground, waist-up, the stack at frame left
  facing: toward frame right, right side to the camera
  action: hauls herself over the four-high stack on her forearms, her outer right forearm dragging over a splintered
    slat, and lands hissing
  expression_start: strained, teeth gritted
  expression_end: wincing hiss, teeth showing
  eyeline: ahead, frame right
props:
- id: PR-CRATES
  state: PR-CRATES:STACKED
  position: frame left, the four-high stack (120 cm) with a rough splintered slat at its top edge
location:
  id: LOC-NIGHT-MARKET
  area: the lane at the four-high crate stack
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: damp concrete ground
  midground: Lan and the stack
  background: soft lanterns and darker lane gaps
  composition: Lan centre, stack at frame left, the camera-side right forearm clear
camera:
  shot_size: MS
  angle: eye-level
  height_m: 1.3
  distance_m: 3.0
  position: North edge of the lane, 3 m from the 4-high crates
  lens_mm: 35
  aperture: f/2.8
  depth_of_field: medium
  focus: Lan's face and right forearm (camera side) sharp
  movement: follow
  movement_execution: Tracks west about 3 m; ends as Lan lands on the far side and the graze on her right forearm
    is visible.
  support: steadicam/gimbal
  setup: SC02-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject
  fill: Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1
  rim: Hard bulb edge light on shoulders and fur from behind and camera-left
  practicals: String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs
  shadows: Long, soft, falling forward (west) and to camera-right, deeper toward the west
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'chili red #B8362B'
  - 'steam grey-white #C9C2B8'
screen_direction: West = frame right; Lan's right side is toward the camera (north)
start_state: Lan hauling herself over the stack, the forearm touching the slat, no graze
end_state: Lan landed on the far side with the red graze visible and a wincing hiss
action_timeline:
- '0.0-1.5 s: Lan hauls herself up on her forearms'
- '1.5-2.3 s: the outer right forearm drags over the slat'
- '2.3-3.5 s: she drops to the far side, hisses and keeps moving'
dialogue: []
sound: 'sfx.md@1: SFX-SC02-006, SFX-SC02-007; ambience bed SC02. Crate slat creak under her weight; a dry drag of cloth and skin over splintered wood; Wincing hiss of pain, teeth, breath in; landing scuff'
music: 'M01 chase (music.md@1)'
vfx: VFX-SC02-SH050
transition_in: cut-on-action from SC02-SH040
transition_out: cut-on-action
continuity:
- 'GRAZED begins at the end of this shot: red graze about 12 cm on the outer RIGHT forearm, no blood drips'
- Dust on apron hem and trouser knees; two to three loose strands
generation:
  mode: first-last-frame
  start_frame: 'Medium shot, eye-level angle, 35 mm lens at f/2.8, camera 1.3 m high, medium depth of field, 35
    mm side-on, Lan hauls herself over a tall stack of crates, red graze on her right forearm. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: centre, midground,
    waist-up, the stack at frame left; toward frame right, right side to the camera; forearms planted on top of
    the four-high stack, hauling herself up; the outer right forearm unmarked, touching the splintered slat; expression:
    strained, teeth gritted. Slatted pale wooden crates, each 50 by 35 by 30 cm, in one stack three high and one
    four high, the taller stack with a rough splintered slat at its top edge. No stencils, no writing. State STACKED:
    frame left, the four-high stack (120 cm) with a rough splintered slat at its top edge. Covered open-air night
    market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered
    sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns
    above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the lane at the four-high
    crate stack. Foreground: damp concrete ground. Midground: Lan and the stack. Background: soft lanterns and darker
    lane gaps. Composition: Lan centre, stack at frame left, the camera-side right forearm clear. Light: key Warm
    2700 K string-light bulbs from camera-left (east), above and behind the subject; fill Weak amber bounce from
    awnings and produce, camera-right, low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from
    behind and camera-left; practicals String-light bulbs on the lane wires, red paper lanterns in soft focus, stall
    bulbs; shadows Long, soft, falling forward (west) and to camera-right, deeper toward the west. Night, dry, warm,
    humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white
    #C9C2B8. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian
    night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten
    against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds,
    round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Medium shot, eye-level angle, 35 mm lens at f/2.8, camera 1.3 m high, medium depth of field, 35 mm
    side-on, Lan hauls herself over a tall stack of crates, red graze on her right forearm. Lan, a Southeast Asian
    woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes,
    straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey
    cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on
    shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about
    12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the
    apron hem and trouser knees, flushed face with a light sweat sheen. Position: centre, midground, waist-up, the
    stack at frame left; toward frame right, right side to the camera; landed on the far side, the red graze visible
    on the camera-side outer right forearm, dust on the apron hem and knees; expression: wincing hiss, teeth showing.
    Slatted pale wooden crates, each 50 by 35 by 30 cm, in one stack three high and one four high, the taller stack
    with a rough splintered slat at its top edge. No stencils, no writing. State STACKED: frame left, the four-high
    stack (120 cm) with a rough splintered slat at its top edge. Covered open-air night market lane, 3 m wide, of
    timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept
    concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle
    stall with a plank shelf, steel stockpot and wok burner. Area: the lane at the four-high crate stack. Foreground:
    damp concrete ground. Midground: Lan and the stack. Background: soft lanterns and darker lane gaps. Composition:
    Lan centre, stack at frame left, the camera-side right forearm clear. Light: key Warm 2700 K string-light bulbs
    from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings and produce, camera-right,
    low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left; practicals
    String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling
    forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette: night-market
    umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema,
    35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-1.5 s: Lan hauls herself up onto the four-high stack on her forearms. 1.5-2.3 s: her outer right forearm
    drags over the splintered slat. 2.3-3.5 s: she drops to the far side, hisses and runs on. Camera tracks right.'
  clip_length_s: 6
  clip_length_note: 'TO-VERIFY: Veo 3.1 first-last-frame clip lengths are not confirmed (user, 2026-10-19); this value is the plan, not a fact'
  risks:
  - graze must appear only in the end frame
  - no blood drips
```

###### SC02-SH060

```yaml
record: shot
id: SC02-SH060
scene: SC02
status: REVIEW
version: 2
depends_on:
- SC02_direction@1
- SC02_camera@1
- continuity@1
- style_bible@1
- screenplay@1
- SC02_action@1
purpose: 'The reversal: it fits, she will not'
screenplay_ref: SC02, action lines 'A lane ahead is blocked by a delivery cart. The macaque slips under it.'
duration_s: 2.0
characters:
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: lower frame, entering from the left and passing through the slot under the cart
  facing: side view, running toward frame right, its right side toward the camera
  action: slips under the cart bed without slowing, the tin held to its chest
  expression_start: intent
  expression_end: intent
  eyeline: straight ahead, frame right
props:
- id: PR-CART
  state: PR-CART:PARKED
  position: across the frame, bed 40 cm above the ground forming a dark slot
- id: PR-TIN
  state: PR-TIN:SEALED
  position: against the macaque's chest
location:
  id: LOC-NIGHT-MARKET
  area: the lane at the hand cart, west of the crates
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: damp concrete ground at ground level
  midground: the cart bed as a dark slot
  background: dim lane, a cooler pocket of light further west
  composition: cart bed as a dark horizontal slot, macaque crossing it
camera:
  shot_size: MWS
  angle: low
  height_m: 0.2
  distance_m: 1.5
  position: Ground level at the north edge of the lane, 1.5 m from the cart, looking along the lane west
  lens_mm: 24
  aperture: f/4
  depth_of_field: deep
  focus: The slot under the cart bed and the macaque emerging; wheels and handles sharp
  movement: static
  movement_execution: Locked off at ground level; the macaque crosses the dark slot under the bed left to right.
  support: locked-off
  setup: SC02-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject
  fill: Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1
  rim: Hard bulb edge light on shoulders and fur from behind and camera-left
  practicals: String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs
  shadows: Long, soft, falling forward (west) and to camera-right, deeper toward the west
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'chili red #B8362B'
  - 'steam grey-white #C9C2B8'
screen_direction: West = frame right
start_state: the macaque entering the slot under the cart
end_state: the macaque emerging on the far side
action_timeline:
- '0.0-1.0 s: it slips under the bed'
- '1.0-2.0 s: it emerges on the far side and runs on'
dialogue: []
sound: 'sfx.md@1: SFX-SC02-008; ambience bed SC02. Macaque scrabbles under the cart bed: light claw ticks, then out; cart chassis does not mo'
music: 'M01 chase (music.md@1)'
vfx: none
transition_in: cut-on-action from SC02-SH050
transition_out: cut-on-action
continuity:
- Cart PARKED across the lane; the macaque fits under it
- Tin SEALED
generation:
  mode: image-to-video
  start_frame: 'Medium wide shot, low angle, 24 mm lens at f/4, camera 0.2 m high, deep depth of field, 24 mm at
    ground level, the cart bed as a dark slot, macaque slipping through. A wild adult long-tailed macaque, about
    45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a
    grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch
    in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: lower frame, entering from the left and passing through
    the slot under the cart; side view, running toward frame right, its right side toward the camera; entering the
    dark slot under the cart bed at frame left; expression: intent. A two-wheel wooden hand cart, 120 by 70 cm flat
    bed raised 40 cm off the ground, two long handles, bagged goods under a plain sand-coloured cloth. No writing,
    no painted marks. State PARKED: across the frame, bed 40 cm above the ground forming a dark slot. A round dented
    tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly
    two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State
    SEALED: against the macaque''s chest. Covered open-air night market lane, 3 m wide, of timber-frame food stalls
    with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut
    wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf,
    steel stockpot and wok burner. Area: the lane at the hand cart, west of the crates. Foreground: damp concrete
    ground at ground level. Midground: the cart bed as a dark slot. Background: dim lane, a cooler pocket of light
    further west. Composition: cart bed as a dark horizontal slot, macaque crossing it. Light: key Warm 2700 K string-light
    bulbs from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings and produce,
    camera-right, low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left;
    practicals String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long,
    soft, falling forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette:
    night-market umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action
    cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Medium wide shot, low angle, 24 mm lens at f/4, camera 0.2 m high, deep depth of field, 24 mm at ground
    level, the cart bed as a dark slot, macaque slipping through. A wild adult long-tailed macaque, about 45 cm
    body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked
    muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim
    of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing.
    Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly
    dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state
    BASE: dry, slightly dusty fur. Position: lower frame, entering from the left and passing through the slot under
    the cart; side view, running toward frame right, its right side toward the camera; emerging at frame right from
    under the cart; expression: intent. A two-wheel wooden hand cart, 120 by 70 cm flat bed raised 40 cm off the
    ground, two long handles, bagged goods under a plain sand-coloured cloth. No writing, no painted marks. State
    PARKED: across the frame, bed 40 cm above the ground forming a dark slot. A round dented tin, 16 cm across and
    10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn
    brass spots side by side on top, small dents on the side. No label, no writing, no handle. State SEALED: against
    the macaque''s chest. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal
    and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper
    lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and
    wok burner. Area: the lane at the hand cart, west of the crates. Foreground: damp concrete ground at ground
    level. Midground: the cart bed as a dark slot. Background: dim lane, a cooler pocket of light further west.
    Composition: cart bed as a dark horizontal slot, macaque crossing it. Light: key Warm 2700 K string-light bulbs
    from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings and produce, camera-right,
    low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left; practicals
    String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling
    forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette: night-market
    umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema,
    35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-1.0 s: the macaque slips under the cart bed without slowing. 1.0-2.0 s: it emerges on the far side
    and runs on toward frame right. Camera locked off at ground level.'
  clip_length_s: 4
  risks:
  - 'animal passes under an object: keep the slot clear'
```

###### SC02-SH070

```yaml
record: shot
id: SC02-SH070
scene: SC02
status: REVIEW
version: 2
depends_on:
- SC02_direction@1
- SC02_camera@1
- continuity@1
- style_bible@1
- screenplay@1
- SC02_action@1
purpose: Cost and comedy; the macaque is out of sight
screenplay_ref: SC02, action line 'Lan has to go around, through a narrow gap between two stalls, sideways, breath
  short.'
duration_s: 3.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: centre, midground, waist-up, in the 55 cm service path
  facing: shoulders square to the walls, head turned toward camera
  action: shuffles sideways between two plain stall walls toward the camera
  expression_start: tight, strained
  expression_end: tight, strained, eyes wide
  eyeline: ahead, toward the camera
props: []
location:
  id: LOC-NIGHT-MARKET
  area: the 55 cm service path between two stalls on the north side of the lane
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: a plain stall wall edge, out of focus at each side
  midground: Lan in the gap
  background: warm amber lane light spilling from the gap's mouth behind her
  composition: Lan centre, plain walls close at each side
camera:
  shot_size: MS
  angle: eye-level
  height_m: 1.4
  distance_m: 2.0
  position: Inside the 55 cm service path, 2 m west of Lan, looking east back at her; the gap's mouth and amber
    lane light are behind her
  lens_mm: 50
  aperture: f/2
  depth_of_field: shallow
  focus: Lan's face; the plain walls at both sides soft
  movement: lead
  movement_execution: Backs west about 2.5 m ahead of Lan, matching her sideways shuffle toward camera; ends as
    she is half through.
  support: steadicam/gimbal
  setup: SC02-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject
  fill: Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1
  rim: Hard bulb edge light on shoulders and fur from behind and camera-left
  practicals: String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs
  shadows: Long, soft, falling forward (west) and to camera-right, deeper toward the west
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'chili red #B8362B'
  - 'steam grey-white #C9C2B8'
screen_direction: 'Neutral: Lan moves toward the camera inside the service path (camera east-looking, ahead of her);
  keeps the line'
start_state: Lan entering the far end of the gap, shoulders turned
end_state: Lan half through, apron brushing both walls, face tight
action_timeline:
- '0.0-1.0 s: she turns her shoulders into the gap'
- '1.0-3.0 s: she shuffles sideways toward camera, breath short'
dialogue: []
sound: 'sfx.md@1: SFX-SC02-009; ambience bed SC02. Lan''s sideways shuffle: apron brushes both plastered walls, shoes scuff; breath tight, wit'
music: 'M01 chase (music.md@1)'
vfx: none
transition_in: cut from SC02-SH060
transition_out: cut
continuity:
- GRAZED; graze may be hidden in this shot
- Neutral direction shot after CR-01
generation:
  mode: image-to-video
  start_frame: 'Medium shot, eye-level angle, 50 mm lens at f/2, camera 1.4 m high, shallow depth of field, 50 mm,
    Lan squeezing sideways between two plain stall walls toward camera, tight and close, warm amber light behind
    her. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired
    dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low
    knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose
    trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and
    small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers,
    dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state
    GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips, two to three loose
    hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position:
    centre, midground, waist-up, in the 55 cm service path; shoulders square to the walls, head turned toward camera;
    entering the far end of the gap, shoulders turned; expression: tight, strained. Covered open-air night market
    lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign
    boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns
    above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the 55 cm service path between
    two stalls on the north side of the lane. Foreground: a plain stall wall edge, out of focus at each side. Midground:
    Lan in the gap. Background: warm amber lane light spilling from the gap''s mouth behind her. Composition: Lan
    centre, plain walls close at each side. Light: key Warm 2700 K string-light bulbs from camera-left (east), above
    and behind the subject; fill Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1;
    rim Hard bulb edge light on shoulders and fur from behind and camera-left; practicals String-light bulbs on
    the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling forward (west) and
    to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17,
    lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema, 35 mm film
    grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns,
    string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep
    teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture,
    clean frame without text, logos or watermarks.'
  end_frame: 'Medium shot, eye-level angle, 50 mm lens at f/2, camera 1.4 m high, shallow depth of field, 50 mm,
    Lan squeezing sideways between two plain stall walls toward camera, tight and close, warm amber light behind
    her. Lan, a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired
    dark brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low
    knot at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose
    trousers, dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and
    small broth stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers,
    dark canvas slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state
    GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips, two to three loose
    hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position:
    centre, midground, waist-up, in the 55 cm service path; shoulders square to the walls, head turned toward camera;
    half through the gap, apron brushing both walls, near the camera; expression: tight, strained, eyes wide. Covered
    open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs,
    blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs,
    three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the 55
    cm service path between two stalls on the north side of the lane. Foreground: a plain stall wall edge, out of
    focus at each side. Midground: Lan in the gap. Background: warm amber lane light spilling from the gap''s mouth
    behind her. Composition: Lan centre, plain walls close at each side. Light: key Warm 2700 K string-light bulbs
    from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings and produce, camera-right,
    low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left; practicals
    String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling
    forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette: night-market
    umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema,
    35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-1.0 s: Lan turns her shoulders into the gap. 1.0-3.0 s: she shuffles sideways toward the camera with
    short breath, apron brushing both walls. Camera backs away ahead of her inside the path.'
  clip_length_s: 4
  risks:
  - 'body between walls: medium shot, plain walls, no hands in detail'
```

###### SC02-SH080

```yaml
record: shot
id: SC02-SH080
scene: SC02
status: REVIEW
version: 2
depends_on:
- SC02_direction@1
- SC02_camera@1
- continuity@1
- style_bible@1
- screenplay@1
- SC02_action@1
purpose: Loss and silence
screenplay_ref: SC02, action lines 'She comes out the other side. The macaque is gone. The rattle is gone. Lan stops.
  Chest heaving. Hand on her scraped arm.'
duration_s: 3.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: centre, small, full figure, about 7 m from camera
  facing: toward frame right, then still
  action: stops, holds her right forearm with her left hand, chest heaving
  expression_start: breathless, searching
  expression_end: breathless, still, shaken
  eyeline: scanning the empty lane ahead
props: []
location:
  id: LOC-NIGHT-MARKET
  area: the unlit western stretch of the lane before the alley mouth
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: damp concrete ground
  midground: Lan, small and still
  background: dim lanterns far behind in soft bokeh
  composition: Lan small at centre, dim lights behind
camera:
  shot_size: WS
  angle: eye-level
  height_m: 1.5
  distance_m: 7.0
  position: In the unlit stretch, north edge, 7 m from Lan
  lens_mm: 35
  aperture: f/2.8
  depth_of_field: medium
  focus: Lan; lanterns far behind soft
  movement: static
  movement_execution: Locked off; Lan stops and holds her arm.
  support: tripod
  setup: SC02-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject
  fill: Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1
  rim: Hard bulb edge light on shoulders and fur from behind and camera-left
  practicals: String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs
  shadows: Long, soft, falling forward (west) and to camera-right, deeper toward the west
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'chili red #B8362B'
  - 'steam grey-white #C9C2B8'
screen_direction: Lan has stopped; the dark alley mouth is ahead at frame right
start_state: Lan decelerating into a stop
end_state: Lan standing still, holding her right forearm
action_timeline:
- '0.0-1.0 s: she slows and stops'
- '1.0-3.0 s: she stands, left hand on her right forearm, chest heaving'
dialogue: []
sound: 'sfx.md@1: SFX-SC02-010; ambience bed SC02. Footsteps decelerate and stop; breath heaving; market sound drops by half and goes distant'
music: 'none: silence or market source sound only (music.md@1)'
vfx: none
transition_in: cut from SC02-SH070
transition_out: cut
continuity:
- GRAZED, loose strands, dust
- Left hand on the right forearm
generation:
  mode: image-to-video
  start_frame: 'Wide shot, eye-level angle, 35 mm lens at f/2.8, camera 1.5 m high, medium depth of field, 35 mm
    wide, Lan small and still, dim lanterns behind in soft bokeh, hush. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm
    long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron
    hem and trouser knees, flushed face with a light sweat sheen. Position: centre, small, full figure, about 7
    m from camera; toward frame right, then still; decelerating into a stop at the centre of the unlit stretch;
    expression: breathless, searching. Covered open-air night market lane, 3 m wide, of timber-frame food stalls
    with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut
    wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf,
    steel stockpot and wok burner. Area: the unlit western stretch of the lane before the alley mouth. Foreground:
    damp concrete ground. Midground: Lan, small and still. Background: dim lanterns far behind in soft bokeh. Composition:
    Lan small at centre, dim lights behind. Light: key Warm 2700 K string-light bulbs from camera-left (east), above
    and behind the subject; fill Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1;
    rim Hard bulb edge light on shoulders and fur from behind and camera-left; practicals String-light bulbs on
    the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling forward (west) and
    to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17,
    lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema, 35 mm film
    grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns,
    string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep
    teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture,
    clean frame without text, logos or watermarks.'
  end_frame: 'Wide shot, eye-level angle, 35 mm lens at f/2.8, camera 1.5 m high, medium depth of field, 35 mm wide,
    Lan small and still, dim lanterns behind in soft bokeh, hush. Lan, a Southeast Asian woman in her early 30s,
    160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small
    nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over
    a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no
    makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt
    with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic.
    No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm long on
    the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron hem and
    trouser knees, flushed face with a light sweat sheen. Position: centre, small, full figure, about 7 m from camera;
    toward frame right, then still; standing still, left hand cupped round her right forearm below the elbow, chest
    rising; expression: breathless, still, shaken. Covered open-air night market lane, 3 m wide, of timber-frame
    food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete
    ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall
    with a plank shelf, steel stockpot and wok burner. Area: the unlit western stretch of the lane before the alley
    mouth. Foreground: damp concrete ground. Midground: Lan, small and still. Background: dim lanterns far behind
    in soft bokeh. Composition: Lan small at centre, dim lights behind. Light: key Warm 2700 K string-light bulbs
    from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings and produce, camera-right,
    low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left; practicals
    String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling
    forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette: night-market
    umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema,
    35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-1.0 s: Lan slows and stops. 1.0-3.0 s: she stands with her left hand cupped round her right forearm,
    chest heaving. Camera locked off; distant lanterns shimmer.'
  clip_length_s: 4
  risks:
  - 'hand on arm: keep it simple'
```

###### SC02-SH090

```yaml
record: shot
id: SC02-SH090
scene: SC02
status: REVIEW
version: 2
depends_on:
- SC02_direction@1
- SC02_camera@1
- continuity@1
- style_bible@1
- screenplay@1
- SC02_action@1
purpose: 'Nothing: space to breathe'
screenplay_ref: SC02, action line 'She turns, searching the lanterns and the crowd. Nothing.'
duration_s: 2.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: left third of frame, chest up
  facing: three-quarter to camera, head turning toward frame right
  action: turns her head slowly, scanning
  expression_start: alert, searching
  expression_end: blank, nothing found
  eyeline: sweeping across lanterns at frame right
props: []
location:
  id: LOC-NIGHT-MARKET
  area: the unlit western stretch
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: none
  midground: Lan, chest up
  background: blurred lanterns at frame right melting into bokeh
  composition: Lan left third, lanterns right
camera:
  shot_size: MCU
  angle: eye-level
  height_m: 1.5
  distance_m: 3.5
  position: In the unlit stretch, 3.5 m north of Lan
  lens_mm: 85
  aperture: f/2
  depth_of_field: shallow
  focus: Lan's eyes sharp; lanterns at screen right melt into bokeh
  movement: pan-right
  movement_execution: Pans right about 25 degrees over 2.5 s to follow her head turn; ends with her eyes still.
  support: tripod
  setup: SC02-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject
  fill: Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1
  rim: Hard bulb edge light on shoulders and fur from behind and camera-left
  practicals: String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs
  shadows: Long, soft, falling forward (west) and to camera-right, deeper toward the west
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'chili red #B8362B'
  - 'steam grey-white #C9C2B8'
screen_direction: Her gaze sweeps from camera-left to frame right
start_state: face toward the camera, eyes searching
end_state: head turned to frame right, eyes still
action_timeline:
- '0.0-2.5 s: slow head turn from camera-left to frame right, eyes searching'
dialogue: []
sound: 'sfx.md@1: SFX-SC02-011; ambience bed SC02. Near silence: breath only, market a faint far murmur, one string-light bulb buzzes'
music: 'none: silence or market source sound only (music.md@1)'
vfx: none
transition_in: cut from SC02-SH080
transition_out: cut
continuity:
- GRAZED; left hand may still hold the right forearm out of frame
generation:
  mode: image-to-video
  start_frame: 'Medium close-up, eye-level angle, 85 mm lens at f/2, camera 1.5 m high, shallow depth of field,
    85 mm close-up, slow pan, Lan''s eyes searching, lanterns dissolving to bokeh. Lan, a Southeast Asian woman
    in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight
    thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton
    work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes.
    No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about
    12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the
    apron hem and trouser knees, flushed face with a light sweat sheen. Position: left third of frame, chest up;
    three-quarter to camera, head turning toward frame right; face toward the camera-left, eyes searching; expression:
    alert, searching. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal
    and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper
    lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and
    wok burner. Area: the unlit western stretch. Foreground: none. Midground: Lan, chest up. Background: blurred
    lanterns at frame right melting into bokeh. Composition: Lan left third, lanterns right. Light: key Warm 2700
    K string-light bulbs from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings
    and produce, camera-right, low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind
    and camera-left; practicals String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs;
    shadows Long, soft, falling forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid
    haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8.
    Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night
    market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against
    umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round
    warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Medium close-up, eye-level angle, 85 mm lens at f/2, camera 1.5 m high, shallow depth of field, 85
    mm close-up, slow pan, Lan''s eyes searching, lanterns dissolving to bokeh. Lan, a Southeast Asian woman in
    her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight
    thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton
    work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes.
    No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about
    12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the
    apron hem and trouser knees, flushed face with a light sweat sheen. Position: left third of frame, chest up;
    three-quarter to camera, head turning toward frame right; head turned toward frame right, eyes still, nothing
    found; expression: blank, nothing found. Covered open-air night market lane, 3 m wide, of timber-frame food
    stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground,
    a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a
    plank shelf, steel stockpot and wok burner. Area: the unlit western stretch. Foreground: none. Midground: Lan,
    chest up. Background: blurred lanterns at frame right melting into bokeh. Composition: Lan left third, lanterns
    right. Light: key Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject; fill
    Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1; rim Hard bulb edge light
    on shoulders and fur from behind and camera-left; practicals String-light bulbs on the lane wires, red paper
    lanterns in soft focus, stall bulbs; shadows Long, soft, falling forward (west) and to camera-right, deeper
    toward the west. Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, chili
    red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9.
    Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall
    steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth
    of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos
    or watermarks.'
  motion: '0-2.5 s: Lan turns her head slowly from the camera toward frame right, eyes searching, then still. Camera
    pans right about 25 degrees with her.'
  clip_length_s: 4
  risks:
  - 'slow pan in a dark scene: keep bokeh lanterns'
```

###### SC02-SH100

```yaml
record: shot
id: SC02-SH100
scene: SC02
status: REVIEW
version: 2
depends_on:
- SC02_direction@1
- SC02_camera@1
- continuity@1
- style_bible@1
- screenplay@1
- SC02_action@1
purpose: 'The turn: curiosity'
screenplay_ref: SC02, action lines 'Then, from somewhere beyond the lights, two slow metallic KNOCKS. Pause. Silence.'
duration_s: 3.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: left third of frame, chest up
  facing: facing the camera, then turning toward frame right
  action: freezes at the knocks and turns her head toward the dark at frame right
  expression_start: frozen, eyes wide
  expression_end: alert, turned toward the dark, lips slightly parted
  eyeline: toward the dark at frame right
props: []
location:
  id: LOC-NIGHT-MARKET
  area: the unlit western stretch
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: none
  midground: Lan, chest up
  background: deep dark at frame right
  composition: Lan left third, dark right
camera:
  shot_size: MCU
  angle: eye-level
  height_m: 1.5
  distance_m: 3.5
  position: Same as SH090, no pan
  lens_mm: 85
  aperture: f/2
  depth_of_field: shallow
  focus: Lan's eyes
  movement: static
  movement_execution: Locked off. She freezes, then turns her head to screen right.
  support: tripod
  setup: SC02-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject
  fill: Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1
  rim: Hard bulb edge light on shoulders and fur from behind and camera-left
  practicals: String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs
  shadows: Long, soft, falling forward (west) and to camera-right, deeper toward the west
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'chili red #B8362B'
  - 'steam grey-white #C9C2B8'
screen_direction: She turns to frame right toward the alley mouth
start_state: Lan frozen, eyes wide
end_state: Lan's head turned to frame right toward the dark
action_timeline:
- '0.0-0.8 s: first knock'
- '0.8-1.6 s: pause'
- '1.6-2.4 s: second knock'
- '2.4-3.0 s: she turns her head toward the dark'
dialogue: []
sound: 'sfx.md@1: SFX-SC02-012; ambience bed SC02. TWO KNOCKS, off-screen, from the alley: slow, dull metallic tok, then tok, 1.0 s apart, a '
music: 'none: silence or market source sound only (music.md@1)'
vfx: none
transition_in: cut from SC02-SH090
transition_out: cut
continuity:
- GRAZED
- The knocks are off-screen (the macaque tapping, SC03-SH020)
generation:
  mode: image-to-video
  start_frame: 'Medium close-up, eye-level angle, 85 mm lens at f/2, camera 1.5 m high, shallow depth of field,
    85 mm close-up, Lan frozen, face turning toward the dark at screen right. Lan, a Southeast Asian woman in her
    early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick
    brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work
    apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No
    jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm
    long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron
    hem and trouser knees, flushed face with a light sweat sheen. Position: left third of frame, chest up; facing
    the camera, then turning toward frame right; frozen, face toward the camera, eyes wide; expression: frozen,
    eyes wide. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and
    faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper
    lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and
    wok burner. Area: the unlit western stretch. Foreground: none. Midground: Lan, chest up. Background: deep dark
    at frame right. Composition: Lan left third, dark right. Light: key Warm 2700 K string-light bulbs from camera-left
    (east), above and behind the subject; fill Weak amber bounce from awnings and produce, camera-right, low, 4:1
    falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left; practicals String-light
    bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling forward
    (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette: night-market umber
    #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema, 35
    mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper
    lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents,
    deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture,
    clean frame without text, logos or watermarks.'
  end_frame: 'Medium close-up, eye-level angle, 85 mm lens at f/2, camera 1.5 m high, shallow depth of field, 85
    mm close-up, Lan frozen, face turning toward the dark at screen right. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm
    long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron
    hem and trouser knees, flushed face with a light sweat sheen. Position: left third of frame, chest up; facing
    the camera, then turning toward frame right; head turned to frame right toward the dark, lips slightly parted;
    expression: alert, turned toward the dark, lips slightly parted. Covered open-air night market lane, 3 m wide,
    of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp
    swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small
    noodle stall with a plank shelf, steel stockpot and wok burner. Area: the unlit western stretch. Foreground:
    none. Midground: Lan, chest up. Background: deep dark at frame right. Composition: Lan left third, dark right.
    Light: key Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject; fill Weak amber
    bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders
    and fur from behind and camera-left; practicals String-light bulbs on the lane wires, red paper lanterns in
    soft focus, stall bulbs; shadows Long, soft, falling forward (west) and to camera-right, deeper toward the west.
    Night, dry, warm, humid haze. Palette: night-market umber #2A1D17, lantern amber #E0963A, chili red #B8362B,
    steam grey-white #C9C2B8. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in
    Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber
    and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field,
    soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-0.8 s: Lan freezes at the first knock. 0.8-2.4 s: pause then the second knock; she stays frozen. 2.4-3.0
    s: she turns her head toward the dark at frame right. Camera locked off.'
  clip_length_s: 4
  risks:
  - 'audio cue only: the knocks are sound design, not picture'
```

###### SC02-SH110

```yaml
record: shot
id: SC02-SH110
scene: SC02
status: REVIEW
version: 2
depends_on:
- SC02_direction@1
- SC02_camera@1
- continuity@1
- style_bible@1
- screenplay@1
- SC02_action@1
purpose: Lead into the alley
screenplay_ref: SC02, action line 'Lan follows the sound toward the dark mouth of an alley.'
duration_s: 3.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: foreground centre-left, small figure from behind, full figure about 8 m from camera, then smaller
  facing: away from the camera toward the dark arch ahead
  action: walks toward the dark arch and stops at its threshold
  expression_start: searching, drawn
  expression_end: quiet, drawn
  eyeline: the dark arch ahead
props: []
location:
  id: LOC-NIGHT-MARKET
  area: the west end of the lane with the dark arch-shaped alley mouth on the south side
  time_of_day: night
  weather: dry, warm, humid haze
frame:
  foreground: damp concrete ground
  midground: Lan walking away
  background: the dark arched alley mouth at centre between two plain plastered walls, no lights
  composition: arch at centre, Lan small below it, lights dimming behind the camera
camera:
  shot_size: WS
  angle: eye-level
  height_m: 1.5
  distance_m: 8.0
  position: North edge of the lane, 8 m from the alley mouth, looking south
  lens_mm: 28
  aperture: f/4
  depth_of_field: deep
  focus: Alley mouth arch and Lan, both in focus
  movement: static
  movement_execution: Locked off. Lan walks away from camera to the arch and stops.
  support: tripod
  setup: SC02-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Warm 2700 K string-light bulbs from camera-left (east), above and behind the subject
  fill: Weak amber bounce from awnings and produce, camera-right, low, 4:1 falling to 8:1
  rim: Hard bulb edge light on shoulders and fur from behind and camera-left
  practicals: String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs
  shadows: Long, soft, falling forward (west) and to camera-right, deeper toward the west
  palette:
  - 'night-market umber #2A1D17'
  - 'lantern amber #E0963A'
  - 'chili red #B8362B'
  - 'steam grey-white #C9C2B8'
screen_direction: Lan walks south, away from the camera toward the alley mouth
start_state: Lan walking away from the camera left of centre
end_state: Lan at the threshold of the arch
action_timeline:
- '0.0-2.2 s: she walks toward the arch'
- '2.2-3.0 s: she stops at the threshold'
dialogue: []
sound: 'sfx.md@1: SFX-SC02-013, SFX-SC02-014; ambience bed SC02. Lan''s footsteps walking, slow, now alone on the stones; J-cut: market ambience falls away; alley room tone and a distant paper-lantern creak enter'
music: 'M02 held low note, enters at +2.5 s (music.md@1)'
vfx: none
transition_in: cut from SC02-SH100
transition_out: cut
continuity:
- GRAZED
- Alley mouth is on the south side of the lane at its west end
generation:
  mode: image-to-video
  start_frame: 'Wide shot, eye-level angle, 28 mm lens at f/4, camera 1.5 m high, deep depth of field, 28 mm wide,
    the dark arched alley mouth at centre, Lan small at its threshold. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm
    long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron
    hem and trouser knees, flushed face with a light sweat sheen. Position: foreground centre-left, small figure
    from behind, full figure about 8 m from camera, then smaller; away from the camera toward the dark arch ahead;
    walking away from the camera, left of centre in the lane; expression: searching, drawn. Covered open-air night
    market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered
    sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns
    above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the west end of the lane
    with the dark arch-shaped alley mouth on the south side. Foreground: damp concrete ground. Midground: Lan walking
    away. Background: the dark arched alley mouth at centre between two plain plastered walls, no lights. Composition:
    arch at centre, Lan small below it, lights dimming behind the camera. Light: key Warm 2700 K string-light bulbs
    from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings and produce, camera-right,
    low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left; practicals
    String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling
    forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette: night-market
    umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema,
    35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Wide shot, eye-level angle, 28 mm lens at f/4, camera 1.5 m high, deep depth of field, 28 mm wide,
    the dark arched alley mouth at centre, Lan small at its threshold. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm
    long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron
    hem and trouser knees, flushed face with a light sweat sheen. Position: foreground centre-left, small figure
    from behind, full figure about 8 m from camera, then smaller; away from the camera toward the dark arch ahead;
    standing small at the threshold of the dark arch; expression: quiet, drawn. Covered open-air night market lane,
    3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards,
    damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above
    a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the west end of the lane with
    the dark arch-shaped alley mouth on the south side. Foreground: damp concrete ground. Midground: Lan walking
    away. Background: the dark arched alley mouth at centre between two plain plastered walls, no lights. Composition:
    arch at centre, Lan small below it, lights dimming behind the camera. Light: key Warm 2700 K string-light bulbs
    from camera-left (east), above and behind the subject; fill Weak amber bounce from awnings and produce, camera-right,
    low, 4:1 falling to 8:1; rim Hard bulb edge light on shoulders and fur from behind and camera-left; practicals
    String-light bulbs on the lane wires, red paper lanterns in soft focus, stall bulbs; shadows Long, soft, falling
    forward (west) and to camera-right, deeper toward the west. Night, dry, warm, humid haze. Palette: night-market
    umber #2A1D17, lantern amber #E0963A, chili red #B8362B, steam grey-white #C9C2B8. Photoreal live-action cinema,
    35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-2.2 s: Lan walks away from the camera toward the dark arch. 2.2-3.0 s: she stops at its threshold.
    Camera locked off.'
  clip_length_s: 4
  risks:
  - 'dark scene: arch edges lit by the faint market glow'
```


### SC03 — EXT. BACK ALLEY - NIGHT


#### Direction
Source: `06_direction/SC03_direction.md`

##### SC03 Direction: EXT. BACK ALLEY - NIGHT

Approved under the autonomy policy (see PRODUCTION_LOG.md).

###### Must-see story facts
- The market noise falls away. One paper lantern over a low wooden stool; on the stool the chipped ALLEY saucer, upright, worn and old.
- The tin sits in front of the stool; the macaque sits beside the tin.
- Lan stops at the edge of the light, breathing hard.
- The macaque taps the tin's worn spots with one palm: Knock. Knock. Then it looks at her.
- Lan stares at the worn spots, and at the two fingers of her own hand.
- She steps in; her hand reaches for the tin and stops.
- Her eyes move to the saucer on the stool: the same chip as the one she turned face-down.
- "Ah Ma." (barely audible).
- She crouches, lifts the tin gently; the macaque does not flinch, it watches her.
- Her thumbs find the lid; it has stayed shut a long time; it comes open.
- Insert: the open tin: a folded recipe card, a wooden spoon, a twist of paper holding dried fruit. The card stays folded or out of focus.
- Lan shakes the dried fruit onto the saucer, sets the lid back on, knocks twice with two knuckles.
- The macaque shuffles forward and eats.
- Lan sits on the cold ground beside it, the open tin in her lap. She almost smiles.

###### Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Lan | Her tin back, sealed | The macaque's ritual, which she recognises | Stops, stares, tries to reach, then gives up taking and starts giving |
| Macaque | To have the ritual finished (the knock and the feeding) | It cannot open the tin | Taps, looks, waits |

- Subtext: Ah Ma sat on this stool every night. The macaque has been waiting for the knock that did not come.
- Turn: the hand that reaches and stops. She stops trying to take and opens instead.
- Audience position: slightly ahead of Lan at the tap (they see the ritual before she names it), then with her at "Ah Ma."
- Visual thesis: one warm pool in a cool, empty dark, and everything in it is small and close. As Lan comes into the lantern light the camera comes closer, and the frame loses the market entirely. Carried by SH010 (wide, empty dark) and SH020-SH120 (progressively closer and stiller).
- Genre playbook: drama, with fable quiet. Exception: none.

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | Arrival: hush | Setting, Lan | "The market noise falls away..." to "Lan stops at the edge of the light, breathing hard." |
| B2 | The signal: the macaque taps and looks | Macaque | "The macaque lifts one palm..." |
| B3 | Recognition | Lan | "Lan stares at the worn spots..." |
| B4 | Decision: hand reaches, stops | Lan | "She steps in..." to "Ah Ma." |
| B5 | Opening the tin | Lan | "She crouches..." to "...it comes open." |
| B6 | Contents and gift | Lan | Insert, "Lan shakes the dried fruit...", "The macaque shuffles forward and eats." |
| B7 | Rest | Lan | "Lan sits on the cold ground..." |

###### Blocking
Floor plan: LOC-BACK-ALLEY. The alley runs north to south. The mouth is at the north end; the stool sits on the centre line 7 m in; the lantern is on the east wall above the stool; the tin is on the ground north of the stool; the macaque sits beside the tin on its west side.
- Start: Lan enters from the mouth, north of the stool, and stops 3 m north of it at the edge of the lantern light, facing south. The macaque sits at the tin facing north (toward her).
- B2: the macaque taps the lid with its left palm (camera side), then turns its head to Lan.
- B4: Lan walks 2 m south into the light and stops beside the tin; her right hand reaches toward it and stops; her eyes go to the saucer on the stool.
- B5: she crouches west of the tin (camera side), the macaque to her south side, one body length away.
- B6: she kneels on one knee, tin on her raised thigh, takes the twist, pours the fruit on the saucer on the stool, closes the lid, knocks.
- B7: she sits on the ground against the west wall beside the macaque, tin in her lap.
- End positions: Lan seated on the cold ground, the macaque eating at the saucer beside her.
- Axis of action and camera side: the north-south line from Lan to the stool. The camera stays on the west side of the alley looking east (the lantern side wall is in the background, its drainpipe and lantern in shot). North is screen left, south is screen right: Lan moves screen right as she did in SC02.
- Screen direction in/out: in from screen left (north). No exit.

###### Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B1 | Lan | To catch her breath and see | Hands on thighs or one hand on her arm, chest rising, eyes tracking from the lantern to the stool to the tin |
| B2 | Macaque | To call her | Two measured taps with the flat of its palm, then a steady look, no blinking |
| B3 | Lan | To understand | Stillness; her eyes go to the brass spots, then to her own right hand where two fingers twitch together |
| B4 | Lan | To take it back, then to not | Hand reaches, fingers open, stops a hand's width from the lid; her eyes move to the saucer; breath out: "Ah Ma." |
| B5 | Lan | To be gentle | Slow crouch, both hands under the tin, thumbs at the lid; she pauses before pressing |
| B5 | Macaque | To let her | Does not move; watches her hands |
| B6 | Lan | To give | She pours the fruit carefully; the knocks are light and even |
| B6 | Macaque | To answer | Shuffles forward two steps, takes a slice with its fingers, eats |
| B7 | Lan | To stay | Sits down heavily; shoulders drop; a small softening of the mouth |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC03-SH010 | WS | eye-level | static | The alley, stool, macaque, Lan at the north edge | Lan steps into frame at screen left and stops at the edge of the light, breathing hard; the macaque sits by the tin; ends with Lan still at the edge of the light | stool and lantern right of centre, Lan screen left, dark around | normal, deep | single honey-amber lantern, teal shadows | 3.5 | Arrival and the hush; the whole picture | cut |
| SC03-SH020 | CU | eye-level | static | The macaque's palm on the tin | Taps the worn spots twice with its left palm, then turns its head toward Lan; ends looking straight at her | tin lid and palm centre, notched ear at the edge of the frame | medium telephoto, shallow | lantern from above, brass spots glinting | 2.5 | The signal | cut |
| SC03-SH030 | MCU | eye-level | static | Lan | Her eyes move from the tin to her own right hand; two fingers curl together; ends with her hand still | Lan right of centre, looking down screen right | medium telephoto | lantern rim from camera right behind, face in soft shade | 2.5 | Recognition | cut |
| SC03-SH040 | MWS | eye-level | static | Lan, tin, macaque | Lan steps in and her right hand reaches toward the tin and stops short; ends with her hand hovering | Lan left, tin centre, macaque right | normal | lantern pool, teal around | 2.5 | Decision point | cut |
| SC03-SH050 | INSERT | eye-level | static | The ALLEY saucer on the stool | The saucer on the stool seat, chip at 3 o'clock facing camera; ends held on the chip | saucer centre, stool seat worn | short telephoto, shallow | lantern directly above | 1.5 | The matching chip | cut |
| SC03-SH060 | CU | eye-level | dolly-in | Lan | "Ah Ma." barely audible; ends with her eyes wet and fixed on the saucer | Lan centre, soft dark behind | medium telephoto | warm lantern on one side, teal on the other | 2.0 | The recognition said aloud | cut |
| SC03-SH070 | MS | slightly low | static | Lan crouching with the tin | Crouches, lifts the tin gently in both hands, thumbs find the lid and press; the lid comes open; ends with the lid lifted a hand's width | Lan centre, macaque soft at screen right | normal | lantern from above | 3.5 | The decisive choice | cut |
| SC03-SH080 | INSERT | high | static | The open tin | The open tin seen from above: a folded recipe card, a wooden spoon on it, a paper twist of dried fruit; ends held | tin fills frame, card folded, no writing | short telephoto, shallow | lantern warmth inside the tin | 2.0 | Reveal of contents | cut |
| SC03-SH090 | CU | eye-level | static | Lan's hands and the saucer | She shakes the dried fruit from the paper twist onto the saucer on the stool; ends with the fruit on the saucer | hands and saucer, graze visible on her right forearm | short telephoto, shallow | lantern above | 2.0 | The gift | cut |
| SC03-SH100 | CU | eye-level | static | Lan's hands and the tin lid | She sets the lid back on the tin and knocks twice with two knuckles; ends with her hand resting on the lid | tin and knuckles centre | short telephoto | lantern above, brass spots glint | 2.0 | The knock is Lan's | cut |
| SC03-SH110 | MS | eye-level | static | The macaque at the saucer | The macaque shuffles forward and eats with its fingers; ends chewing, content | macaque centre, saucer, tin edge | medium telephoto | lantern above | 2.5 | The ritual answered | cut |
| SC03-SH120 | WS | eye-level | static | Lan and the macaque | Lan sits on the cold ground beside it with the open tin in her lap; she almost smiles; ends still | stool and lantern right, Lan left, small in the dark | normal, deep | single lantern, teal | 3.0 | Rest and closure | cut |

Total: 29.5 s vs estimate 26 s (+13.5%). The excess is carried by the quiet holds in SH010 and SH120; the film-editor may trim them.

###### Coverage and rhythm
The scene begins on one wide, ends on one wide, and moves in steadily between. Close inserts carry the story objects (palm, saucer, open tin, fruit, lid); Lan's face is in only four shots (SH030, SH060, SH070, SH120) so each one counts. The macaque and Lan share a frame only in the wides and in SH040 and SH070, always calm and apart. No cut is faster than 1.5 s.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH020 | Animal palm tapping: keep it to two taps | One action; 2 s of tapping flagged |
| SH040, SH070 | Lan and macaque in one frame | They do not touch; the macaque is static in SH040, soft background in SH070 |
| SH070 | Hands opening a lid | Thumbs and lid only, a short clip; the lid's final position is in the end frame |
| SH080 | The card must not show handwriting | Card folded, outside blank; flag for VFX; shallow focus |
| SH090 | Pouring dried fruit | Slow, small amount, short clip; fruit pieces added in the end frame |
| SH110 | Animal eating | Fingers to mouth only; close but not an ECU |
| SH050 | Chip must match the stall saucer | Chip at 3 o'clock, same shape; PR-SAUCER-STALL and PR-SAUCER-ALLEY locks pasted verbatim |

###### Specialist and VFX flags
- action-director: not required.
- animation-director: not applicable.
- vfx: recipe card never readable (SH080); photo not used here.

###### Handoff
- Produced: SC03_direction@1 (APPROVED under autonomy policy), 12 shots, 29.5 s
- Built from: screenplay@1, style_bible@1, LOC-BACK-ALLEY@1, CH-LAN@1, CH-MACAQUE@1, props@1
- For cinematographer: the lantern is the only light; keep faces readable in soft shade; teal shadows; the brass spots must glint; the dolly-in on SH060 is the one move.
- For script-supervisor: axis north-south, camera on the west side looking east, north = screen left; Lan's right forearm graze visible on the camera side; the tin ends LID-ON loosely and lies in her lap at the end; the alley saucer goes EMPTY to FRUIT to EATEN.
- Open items: ASSUMPTION: the macaque taps with its left (camera-side) palm; ASSUMPTION: Lan kneels with the tin on her thigh for SH090-SH100 (the script says she shakes the fruit and sets the lid back without saying where the tin rests).
- Next: cinematographer, script-supervisor


#### Camera and lighting
Source: `07_camera/SC03_camera.md`

##### SC03 Camera and Lighting: EXT. BACK ALLEY - NIGHT

Approved under the autonomy policy (see PRODUCTION_LOG.md).

Color script row: alley teal shadow with one honey-amber lantern pool; tin brass and saucer cream accents; cool surround, warm single pool; low saturation outside the pool; low key. Time/weather: night, dry. Format: 16:9, 24 fps, 180-degree shutter feel (natural motion blur), spherical prime look, 35 mm film emulation (fine grain, soft halation), mild natural vignette, round warm bokeh.

###### Lighting setups

####### Setup SC03-L1: Alley: one lantern, one warm pool in a cool dark
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | Round amber paper lantern on the iron bracket, east wall, 2.2 m up, over the stool | From the east and above: the far side of the set from camera, high, edge-lighting subjects as three-quarter backlight from camera-far-left | Soft, large paper source, steady, no flicker | 2400 K honey-amber (#F2B35E) | The only practical in the alley; faces turned east catch it, faces turned west fall to shade |
| Fill | Faint amber market glow from the alley mouth | From the north (screen-left), low, very weak | Soft | 2700 K amber, about 1/8 of the key | Keeps Lan's face readable as she stands at the edge of the light |
| Rim | Lantern from above | Top and back | Soft | 2400 K | Rim on fur, hair and the tin lid |
| Practicals | The paper lantern itself, in frame in wides | East wall, upper frame | Glowing paper with visible bamboo ribs | Amber #E0963A | Always lit, steady |
| Ambient | Dark night sky above the alley, teal shadows | From above, wraparound | Very soft | Cool 6500 K into teal #1F3B3F | Shadows keep detail near #14100E, never pure black |
| Atmosphere | None; still, dry air | - | - | - | No haze, no fog bank (style avoid list) |

Contrast feel: High: about 8:1 lantern pool to shadow side; surround low saturation; brass spots and saucer glaze protected from clipping.
Changes during scene: No change in light during the scene. As Lan moves into the pool her face goes from shade (SH010, SH030) to lit (SH060 onward).

```
N (screen-L) ^ alley mouth (market glow, weak FILL)
 ..............
 Lan enters at the edge of light
 [stool + saucer + tin + macaque]   <-- lantern KEY above, on the E wall (far side of camera)
 [W wall: camera sits here, looking E]   rope + bucket, door L3 (not in shot)
 S (screen-R) = blank dead end
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement | Movement execution | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC03-SH010 | SC03-L1 | 35 | f/2.8, medium | Stool, saucer and macaque sharp; Lan at screen left slightly soft; east wall lantern bokeh | 1.2 | 4.5 | West side of the alley, 4 m west of the centre line, looking east; stool right of centre | tripod | static | Locked off. | 35 mm wide, a small warm lantern pool in a cool dark alley, Lan at the edge of the light at screen left |
| SC03-SH020 | SC03-L1 | 100 | f/2.8, shallow | The macaque's palm and the brass spots; the head turn stays inside the focus | 0.35 | 1.5 | West of the tin, low, 1.5 m, looking east | tripod | static | Locked off. Two taps, then the head turns to screen left. | 100 mm macro-feeling close-up, palm tapping two brass spots, shallow focus, lantern glint |
| SC03-SH030 | SC03-L1 | 85 | f/2, shallow | Lan's eyes, then the hand stays soft | 1.5 | 3.0 | West of Lan, 3 m, looking east | tripod | static | Locked off. Her eyes drop to her right hand. | 85 mm, Lan's face in soft shade with lantern rim on her right cheek, eyes going down |
| SC03-SH040 | SC03-L1 | 50 | f/2.8, medium | Lan's hand and the tin; macaque soft | 1.0 | 4.0 | West side, 4 m west of the centre line | tripod | static | Locked off. Lan steps in from screen left. | 50 mm medium-wide, Lan's hand hovering over the tin, macaque still at screen right |
| SC03-SH050 | SC03-L1 | 100 | f/2.8, shallow | The chip at the saucer's 3 o'clock | 0.4 | 1.2 | West of the stool, low, 1.2 m | tripod | static | Locked off. | 100 mm insert, saucer on a worn wooden stool, chip crisp, lantern glow above |
| SC03-SH060 | SC03-L1 | 85 | f/1.8, very shallow | Lan's eyes | 1.5 | 2.5 | West of Lan, 2.5 m, looking east | dolly | dolly-in | Pushes in about 0.4 m over 2 s to a tight close-up; ends fixed on her eyes. | 85 mm slow push-in, Lan's eyes glistening, lantern rim on her hair |
| SC03-SH070 | SC03-L1 | 50 | f/2.8, medium | Lan's hands and the tin; macaque soft at screen right | 0.7 | 2.5 | West of Lan, 2.5 m, slightly low | tripod | static | Locked off. She crouches into the frame, lifts the tin, thumbs open the lid. | 50 mm, slightly low, Lan crouching to lift a small green tin, thumbs on the lid |
| SC03-SH080 | SC03-L1 | 50 | f/4, shallow-medium | The spoon and the twist; the folded card slightly soft | 1.2 | 0.6 | Directly above the tin, looking down about 70 degrees | locked-off | static | Locked off. | 50 mm overhead insert, inside a dented green tin: wooden spoon, folded blank card, paper twist |
| SC03-SH090 | SC03-L1 | 100 | f/2.8, shallow | The fruit slices and the saucer; her right forearm graze softly sharp | 0.5 | 1.5 | West of the stool, 1.5 m, looking east | tripod | static | Locked off. | 100 mm close-up of hands pouring dried fruit slices onto a chipped saucer |
| SC03-SH100 | SC03-L1 | 100 | f/2.8, shallow | The lid and knuckles | 0.5 | 1.5 | West of Lan, 1.5 m, looking east | tripod | static | Locked off. Two knocks. | 100 mm close-up, a hand setting a lid and knocking twice on a dented green tin with two brass spots |
| SC03-SH110 | SC03-L1 | 85 | f/2.5, shallow | The macaque's face and fingers | 0.3 | 2.0 | West of the stool, low, 2 m | tripod | static | Locked off. The macaque shuffles forward into the focus plane. | 85 mm low, the macaque eating dried fruit with its fingers, lantern from above |
| SC03-SH120 | SC03-L1 | 35 | f/2.8, medium | Lan and the macaque; the stool and the lantern soft | 0.9 | 4.5 | West side, 4 m west of the centre line (mirror of SH010) | tripod | static | Locked off. Lan sits down at screen left. | 35 mm wide, Lan seated on the cold ground with the open tin in her lap, macaque eating beside, one lantern |

###### Consistency notes
- Key side: the lantern is always on the far east wall; the camera is always on the west side, so subjects are three-quarter backlit. Faces turned to the lantern (east) catch the rim; Lan's face turned south or east is in soft shade; fill is the weak mouth glow from screen left.
- Matched pair: SC03-SH010 and SC03-SH120 are the same camera position and lens (35 mm, 4 m west of the centre line), the second lower (0.9 m) to the seated Lan.
- Eyeline heights: Lan standing 1.5 m; crouching about 0.8 m; seated about 0.9 m; macaque sitting about 0.35 m.

###### Proposals to the director and production-designer
- PROPOSAL (production-designer, director): the camera sits 4 m west of the alley centre line, but the west wall is 1.25 m from it. The wall is treated as flown-out (virtual) for SH010, SH040, SH070 and SH120, so the generated image shows the east wall, lantern and drainpipe behind the subjects and no west wall. No new light source is added.
- PROPOSAL: none to the director on shot sizes or angles.

###### Handoff
- Produced: SC03_camera@1 (APPROVED under autonomy policy), 1 lighting setup (SC03-L1), 12 shots specified
- Built from: SC03_direction@1, LOC-BACK-ALLEY@1, style_bible@1
- Open items: see proposals above (no new light sources added to any set)
- Conflicts: none
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC03` in section 11.


#### Shot records
Source: `08_master/shots/SC03.md`

##### SC03 Shot Records: EXT. BACK ALLEY - NIGHT

Compiled by the production-manager from the direction, camera and continuity documents. 12 shots, 29.5 s. Frame text pastes the identity, costume, prop, location and style locks verbatim.

###### SC03-SH010

```yaml
record: shot
id: SC03-SH010
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: Arrival and the hush
screenplay_ref: SC03, action lines 1-5 ('The market noise falls away...' to 'Lan stops at the edge of the light,
  breathing hard.')
duration_s: 3.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: frame left, entering the frame at the edge of the lantern light, full figure, small, about 5 m from
    camera
  facing: south toward the stool (frame right)
  action: steps into frame and stops at the edge of the light, breathing hard
  expression_start: breathless, wary
  expression_end: breathless, still, wary
  eyeline: to the stool and the tin
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: right of centre beside the tin, south-west of it, seated, small
  facing: facing frame left (north) toward Lan, notched LEFT ear toward the camera
  action: sits still beside the tin
  expression_start: calm, watchful
  expression_end: calm, watchful
  eyeline: toward Lan at frame left
props:
- id: PR-STOOL
  state: PR-STOOL:STANDING
  position: frame centre-right on the alley centre line
- id: PR-SAUCER-ALLEY
  state: PR-SAUCER-ALLEY:EMPTY
  position: upright on the stool seat, chip at 3 o'clock
- id: PR-TIN
  state: PR-TIN:SEALED
  position: on the ground north of the stool (frame left of it), lid up, two brass spots
- id: PR-LANTERN-ALLEY
  state: PR-LANTERN-ALLEY:LIT
  position: on the iron bracket on the east wall above the stool, glowing, in the upper right of frame
location:
  id: LOC-BACK-ALLEY
  area: the alley, mouth at frame left (north), stool 7 m in, lantern on the east wall
  time_of_day: night
  weather: dry, still
frame:
  foreground: damp compacted concrete, lower frame
  midground: stool, saucer, tin and macaque in the lantern pool at centre-right, Lan at frame left
  background: peeling sandy-plaster east wall, grey drainpipe, deep dark beyond
  composition: stool and lantern right of centre, Lan at frame left, dark around
camera:
  shot_size: WS
  angle: eye-level
  height_m: 1.2
  distance_m: 4.5
  position: West side of the alley, 4 m west of the centre line, looking east; stool right of centre
  lens_mm: 35
  aperture: f/2.8
  depth_of_field: medium
  focus: Stool, saucer and macaque sharp; Lan at screen left slightly soft; east wall lantern bokeh
  movement: static
  movement_execution: Locked off.
  support: tripod
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Camera on the west side looking east; north = frame left, south = frame right; Lan moves right
start_state: Lan stepping into frame at frame left, the macaque seated by the tin
end_state: Lan standing still at the edge of the lantern light
action_timeline:
- '0.0-1.5 s: Lan steps into frame from the left'
- '1.5-3.5 s: she stops at the edge of the light, breathing hard'
dialogue: []
sound: 'sfx.md@1: SFX-SC03-001; ambience bed SC03 (alley room tone). Lan steps in and stops; heavy breath slowing; a lantern paper flutter; the tin sits silent'
music: 'M02 held low note, fades out by the end of SH050 (music.md@1)'
vfx: none
transition_in: cut from SC02-SH110
transition_out: cut
continuity:
- Alley saucer EMPTY, upright; tin SEALED on the ground north of the stool
- Lan GRAZED, graze toward the camera on her right arm
- The west wall is treated as flown-out for this camera
generation:
  mode: image-to-video
  start_frame: 'Wide shot, eye-level angle, 35 mm lens at f/2.8, camera 1.2 m high, medium depth of field, 35 mm
    wide, a small warm lantern pool in a cool dark alley, Lan at the edge of the light at screen left. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame left, entering
    the frame at the edge of the lantern light, full figure, small, about 5 m from camera; south toward the stool
    (frame right); stepping into the frame at frame left; expression: breathless, wary. A wild adult long-tailed
    macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare
    face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: right of centre beside the tin, south-west of it,
    seated, small; facing frame left (north) toward Lan, notched LEFT ear toward the camera; seated beside the tin,
    looking toward Lan; expression: calm, watchful. A low four-legged hardwood stool, 28 cm tall, seat worn into
    a shallow dish, legs slightly splayed, dark honey-brown with pale wear marks. Plain, no paint. State STANDING:
    frame centre-right on the alley centre line. A small 12 cm cream-glazed ceramic saucer, slightly aged, with
    a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position, matching
    the stall saucer. Plain, no pattern, no writing. State EMPTY: upright on the stool seat, chip at 3 o''clock.
    A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit
    lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing,
    no handle. State SEALED: on the ground north of the stool (frame left of it), lid up, two brass spots. A round
    30 cm amber paper lantern with thin bamboo ribs, hung from an iron wall bracket by a short wire. Plain, no characters,
    no pattern. State LIT: on the iron bracket on the east wall above the stool, glowing, in the upper right of
    frame. Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster walls, damp compacted
    concrete ground, one low worn wooden stool on the centre line, an iron wall bracket with a round paper lantern,
    a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere. Area: the alley,
    mouth at frame left (north), stool 7 m in, lantern on the east wall. Foreground: damp compacted concrete, lower
    frame. Midground: stool, saucer, tin and macaque in the lantern pool at centre-right, Lan at frame left. Background:
    peeling sandy-plaster east wall, grey drainpipe, deep dark beyond. Composition: stool and lantern right of centre,
    Lan at frame left, dark around. Light: key Single honey-amber 2400 K paper lantern on the east wall, high, soft,
    three-quarter back-top light; fill Faint amber market glow from the north mouth (screen-left), about 1/8 key,
    plus teal sky ambient; rim Lantern top-back light on fur, hair, tin rim and brass spots; practicals Round paper
    lantern on the iron bracket, the only practical in the alley; shadows Deep teal, soft-edged, detail kept near
    #14100E, falling west toward camera and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten
    #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft halation,
    16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and
    stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow
    depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text,
    logos or watermarks.'
  end_frame: 'Wide shot, eye-level angle, 35 mm lens at f/2.8, camera 1.2 m high, medium depth of field, 35 mm wide,
    a small warm lantern pool in a cool dark alley, Lan at the edge of the light at screen left. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame left, entering
    the frame at the edge of the lantern light, full figure, small, about 5 m from camera; south toward the stool
    (frame right); standing still at the edge of the light, right forearm graze toward the camera; expression: breathless,
    still, wary. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler
    cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown
    of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer''s right
    when it faces the camera). Dark grey-pink hands. No collar, no clothing. Natural olive-brown fur with cream-grey
    chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink
    near the tip. No collar, no clothing, no accessories. Condition: state BASE: dry, slightly dusty fur. Position:
    right of centre beside the tin, south-west of it, seated, small; facing frame left (north) toward Lan, notched
    LEFT ear toward the camera; seated beside the tin, looking toward Lan; expression: calm, watchful. A low four-legged
    hardwood stool, 28 cm tall, seat worn into a shallow dish, legs slightly splayed, dark honey-brown with pale
    wear marks. Plain, no paint. State STANDING: frame centre-right on the alley centre line. A small 12 cm cream-glazed
    ceramic saucer, slightly aged, with a thin dark-blue line around the rim and one small crescent chip in the
    rim at the 3 o''clock position, matching the stall saucer. Plain, no pattern, no writing. State EMPTY: upright
    on the stool seat, chip at 3 o''clock. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn
    at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small
    dents on the side. No label, no writing, no handle. State SEALED: on the ground north of the stool (frame left
    of it), lid up, two brass spots. A round 30 cm amber paper lantern with thin bamboo ribs, hung from an iron
    wall bracket by a short wire. Plain, no characters, no pattern. State LIT: on the iron bracket on the east wall
    above the stool, glowing, in the upper right of frame. Narrow dead-end back alley, 2.5 m wide, between two tall
    peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the centre line, an
    iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank end
    wall. No writing anywhere. Area: the alley, mouth at frame left (north), stool 7 m in, lantern on the east wall.
    Foreground: damp compacted concrete, lower frame. Midground: stool, saucer, tin and macaque in the lantern pool
    at centre-right, Lan at frame left. Background: peeling sandy-plaster east wall, grey drainpipe, deep dark beyond.
    Composition: stool and lantern right of centre, Lan at frame left, dark around. Light: key Single honey-amber
    2400 K paper lantern on the east wall, high, soft, three-quarter back-top light; fill Faint amber market glow
    from the north mouth (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern top-back light on fur,
    hair, tin rim and brass spots; practicals Round paper lantern on the iron bracket, the only practical in the
    alley; shadows Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down. Night,
    dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal
    live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit
    only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber
    shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh,
    natural skin and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-1.5 s: Lan steps into frame from the left. 1.5-3.5 s: she stops at the edge of the lantern light, breathing
    hard. The macaque stays seated. Camera locked off.'
  clip_length_s: 6
  risks:
  - 'two subjects in one wide: keep both still'
  - 'dark: lantern pool must read'
```

###### SC03-SH020

```yaml
record: shot
id: SC03-SH020
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: The signal
screenplay_ref: SC03, action 'The macaque lifts one palm and taps the tin's worn spots. Knock. Knock. Then it looks
  at her.'
duration_s: 2.5
characters:
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: frame centre, head and shoulders and left arm, low
  facing: profile facing frame left, notched LEFT ear at the edge of the frame toward the camera
  action: taps the worn spots twice with its left palm, then turns its head to Lan
  expression_start: intent, patient
  expression_end: looking straight at Lan, calm
  eyeline: toward Lan at frame left, then straight on
props:
- id: PR-TIN
  state: PR-TIN:SEALED
  position: frame centre-bottom on the ground, lid up with the two brass spots
location:
  id: LOC-BACK-ALLEY
  area: the ground north of the stool, in the lantern pool
  time_of_day: night
  weather: dry, still
frame:
  foreground: none
  midground: the macaque's palm on the tin lid
  background: soft stool leg and dark alley
  composition: lid and palm centre, notched ear at the edge
camera:
  shot_size: CU
  angle: eye-level
  height_m: 0.35
  distance_m: 1.5
  position: West of the tin, low, 1.5 m, looking east
  lens_mm: 100
  aperture: f/2.8
  depth_of_field: shallow
  focus: The macaque's palm and the brass spots; the head turn stays inside the focus
  movement: static
  movement_execution: Locked off. Two taps, then the head turns to screen left.
  support: tripod
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Camera west, looking east; the macaque turns its head to frame left (north, toward Lan)
start_state: left palm raised above the lid
end_state: palm on the lid, face turned to Lan
action_timeline:
- '0.0-0.6 s: first tap'
- '0.6-1.2 s: second tap'
- '1.2-2.5 s: head turns toward Lan and holds'
dialogue: []
sound: 'sfx.md@1: SFX-SC03-002; ambience bed SC03 (alley room tone). TWO TAPS of the macaque''s palm on the lid: soft slap of a hand on lacquered metal, with th'
music: 'M02 held low note, fades out by the end of SH050 (music.md@1)'
vfx: VFX-SC03-SH020
transition_in: cut from SC03-SH010
transition_out: cut
continuity:
- Tap with the LEFT palm (camera side)
- Tin SEALED
- These are the two knocks heard in SC02-SH100
generation:
  mode: image-to-video
  start_frame: 'Close-up, eye-level angle, 100 mm lens at f/2.8, camera 0.35 m high, shallow depth of field, 100
    mm macro-feeling close-up, palm tapping two brass spots, shallow focus, lantern glint. A wild adult long-tailed
    macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare
    face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: frame centre, head and shoulders and left arm, low;
    profile facing frame left, notched LEFT ear at the edge of the frame toward the camera; left palm raised above
    the lid, head toward the tin; expression: intent, patient. A round dented tin, 16 cm across and 10 cm tall,
    dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots
    side by side on top, small dents on the side. No label, no writing, no handle. State SEALED: frame centre-bottom
    on the ground, lid up with the two brass spots. Narrow dead-end back alley, 2.5 m wide, between two tall peeling
    sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the centre line, an iron wall
    bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No
    writing anywhere. Area: the ground north of the stool, in the lantern pool. Foreground: none. Midground: the
    macaque''s palm on the tin lid. Background: soft stool leg and dark alley. Composition: lid and palm centre,
    notched ear at the edge. Light: key Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter
    back-top light; fill Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky
    ambient; rim Lantern top-back light on fur, hair, tin rim and brass spots; practicals Round paper lantern on
    the iron bracket, the only practical in the alley; shadows Deep teal, soft-edged, detail kept near #14100E,
    falling west toward camera and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E,
    tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm
    lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam:
    amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of
    field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or
    watermarks.'
  end_frame: 'Close-up, eye-level angle, 100 mm lens at f/2.8, camera 0.35 m high, shallow depth of field, 100 mm
    macro-feeling close-up, palm tapping two brass spots, shallow focus, lantern glint. A wild adult long-tailed
    macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare
    face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: frame centre, head and shoulders and left arm, low;
    profile facing frame left, notched LEFT ear at the edge of the frame toward the camera; left palm resting on
    the lid, head turned toward frame left, looking at Lan; expression: looking straight at Lan, calm. A round dented
    tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly
    two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State
    SEALED: frame centre-bottom on the ground, lid up with the two brass spots. Narrow dead-end back alley, 2.5
    m wide, between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool
    on the centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey
    drainpipe, a blank end wall. No writing anywhere. Area: the ground north of the stool, in the lantern pool.
    Foreground: none. Midground: the macaque''s palm on the tin lid. Background: soft stool leg and dark alley.
    Composition: lid and palm centre, notched ear at the edge. Light: key Single honey-amber 2400 K paper lantern
    on the east wall, high, soft, three-quarter back-top light; fill Faint amber market glow from the north mouth
    (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern top-back light on fur, hair, tin rim and brass
    spots; practicals Round paper lantern on the iron bracket, the only practical in the alley; shadows Deep teal,
    soft-edged, detail kept near #14100E, falling west toward camera and down. Night, dry, still. Palette: alley
    teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm
    film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper
    lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents,
    deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture,
    clean frame without text, logos or watermarks.'
  motion: '0-0.6 s: the macaque''s left palm taps the lid. 0.6-1.2 s: it taps a second time. 1.2-2.5 s: it turns
    its head toward frame left and looks at Lan, palm resting. Camera static.'
  clip_length_s: 4
  risks:
  - 'animal tapping: exactly two taps'
```

###### SC03-SH030

```yaml
record: shot
id: SC03-SH030
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: Recognition
screenplay_ref: SC03, action line 'Lan stares at the worn spots. At the two fingers of her own hand.'
duration_s: 2.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: frame right of centre, chest up, in soft shade
  facing: facing frame right (south) toward the tin, three-quarter to the camera
  action: lowers her eyes from the tin to her own right hand raised at her chest; two fingers curl together
  expression_start: stunned, still
  expression_end: stunned recognition, eyes on her hand
  eyeline: from the tin down to her right hand
props: []
location:
  id: LOC-BACK-ALLEY
  area: the edge of the lantern light, north of the stool
  time_of_day: night
  weather: dry, still
frame:
  foreground: none
  midground: Lan, chest up
  background: soft dark alley, the lantern as an amber disc at the upper right
  composition: Lan right of centre, looking down screen right
camera:
  shot_size: MCU
  angle: eye-level
  height_m: 1.5
  distance_m: 3.0
  position: West of Lan, 3 m, looking east
  lens_mm: 85
  aperture: f/2
  depth_of_field: shallow
  focus: Lan's eyes, then the hand stays soft
  movement: static
  movement_execution: Locked off. Her eyes drop to her right hand.
  support: tripod
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Lan looks south, frame right
start_state: Lan looking down-right at the tin
end_state: Lan looking at her raised right hand, two fingers curled
action_timeline:
- '0.0-1.2 s: eyes on the tin'
- '1.2-2.5 s: her eyes drop to her raised right hand; two fingers curl together'
dialogue: []
sound: 'sfx.md@1: SFX-SC03-003; ambience bed SC03 (alley room tone). Her breath catches; a small cloth rustle as her hand rises; fingertips curl, tiny skin sou'
music: 'M02 held low note, fades out by the end of SH050 (music.md@1)'
vfx: none
transition_in: cut from SC03-SH020
transition_out: cut
continuity:
- Right hand raised; graze on the right forearm visible at the bottom of frame
generation:
  mode: image-to-video
  start_frame: 'Medium close-up, eye-level angle, 85 mm lens at f/2, camera 1.5 m high, shallow depth of field,
    85 mm, Lan''s face in soft shade with lantern rim on her right cheek, eyes going down. Lan, a Southeast Asian
    woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes,
    straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey
    cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on
    shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about
    12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the
    apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame right of centre, chest up,
    in soft shade; facing frame right (south) toward the tin, three-quarter to the camera; looking down-right at
    the tin, hands at her sides; expression: stunned, still. Narrow dead-end back alley, 2.5 m wide, between two
    tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the centre line,
    an iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank
    end wall. No writing anywhere. Area: the edge of the lantern light, north of the stool. Foreground: none. Midground:
    Lan, chest up. Background: soft dark alley, the lantern as an amber disc at the upper right. Composition: Lan
    right of centre, looking down screen right. Light: key Single honey-amber 2400 K paper lantern on the east wall,
    high, soft, three-quarter back-top light; fill Faint amber market glow from the north mouth (screen-left), about
    1/8 key, plus teal sky ambient; rim Lantern top-back light on fur, hair, tin rim and brass spots; practicals
    Round paper lantern on the iron bracket, the only practical in the alley; shadows Deep teal, soft-edged, detail
    kept near #14100E, falling west toward camera and down. Night, dry, still. Palette: alley teal #1F3B3F, honey
    tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft
    halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light
    bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows.
    Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without
    text, logos or watermarks.'
  end_frame: 'Medium close-up, eye-level angle, 85 mm lens at f/2, camera 1.5 m high, shallow depth of field, 85
    mm, Lan''s face in soft shade with lantern rim on her right cheek, eyes going down. Lan, a Southeast Asian woman
    in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight
    thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton
    work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes.
    No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about
    12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the
    apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame right of centre, chest up,
    in soft shade; facing frame right (south) toward the tin, three-quarter to the camera; looking down at her right
    hand raised at chest height, two fingers curled together; expression: stunned recognition, eyes on her hand.
    Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster walls, damp compacted concrete
    ground, one low worn wooden stool on the centre line, an iron wall bracket with a round paper lantern, a green-grey
    shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere. Area: the edge of the lantern
    light, north of the stool. Foreground: none. Midground: Lan, chest up. Background: soft dark alley, the lantern
    as an amber disc at the upper right. Composition: Lan right of centre, looking down screen right. Light: key
    Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light; fill Faint
    amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern top-back
    light on fur, hair, tin rim and brass spots; practicals Round paper lantern on the iron bracket, the only practical
    in the alley; shadows Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.
    Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal
    live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit
    only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber
    shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh,
    natural skin and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-1.2 s: Lan looks down-right at the tin. 1.2-2.5 s: her eyes drop to her right hand, raised at her chest;
    two fingers curl together. Camera static.'
  clip_length_s: 4
  risks:
  - 'hand with curled fingers: five fingers'
```

###### SC03-SH040

```yaml
record: shot
id: SC03-SH040
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: 'Decision point: reach and stop'
screenplay_ref: SC03, action lines 'She steps in. She could grab the tin and leave. Her hand reaches. Stops.'
duration_s: 2.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: frame left, midground, knees up
  facing: facing frame right (south) toward the tin
  action: steps in and reaches her right hand toward the tin, stopping a hand's width short
  expression_start: wary, intent
  expression_end: torn, hand hovering
  eyeline: to the tin
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: frame right, seated south-west of the tin
  facing: facing frame left (north), notched LEFT ear toward the camera
  action: sits still and watches her hand
  expression_start: calm
  expression_end: calm
  eyeline: to Lan's hand
props:
- id: PR-TIN
  state: PR-TIN:SEALED
  position: frame centre on the ground, lid up
location:
  id: LOC-BACK-ALLEY
  area: the lantern pool north of the stool
  time_of_day: night
  weather: dry, still
frame:
  foreground: damp concrete
  midground: Lan at frame left, tin centre, macaque at frame right
  background: the stool and dark beyond, lantern top right
  composition: Lan left, tin centre, macaque right
camera:
  shot_size: MWS
  angle: eye-level
  height_m: 1.0
  distance_m: 4.0
  position: West side, 4 m west of the centre line
  lens_mm: 50
  aperture: f/2.8
  depth_of_field: medium
  focus: Lan's hand and the tin; macaque soft
  movement: static
  movement_execution: Locked off. Lan steps in from screen left.
  support: tripod
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Lan moves right (south) into the light
start_state: Lan stepping into the light, hand at her side
end_state: Lan's hand hovering over the tin
action_timeline:
- '0.0-1.2 s: she steps into the light'
- '1.2-2.0 s: her right hand reaches toward the tin'
- '2.0-2.5 s: it stops short and hovers'
dialogue: []
sound: 'sfx.md@1: SFX-SC03-004; ambience bed SC03 (alley room tone). One careful step; a tiny rustle as her hand hovers; no breath'
music: 'M02 held low note, fades out by the end of SH050 (music.md@1)'
vfx: none
transition_in: cut from SC03-SH030
transition_out: cut
continuity:
- Tin SEALED
- Lan GRAZED; graze toward camera
generation:
  mode: image-to-video
  start_frame: 'Medium wide shot, eye-level angle, 50 mm lens at f/2.8, camera 1.0 m high, medium depth of field,
    50 mm medium-wide, Lan''s hand hovering over the tin, macaque still at screen right. Lan, a Southeast Asian
    woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes,
    straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey
    cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on
    shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about
    12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the
    apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame left, midground, knees up;
    facing frame right (south) toward the tin; stepping into the lantern light, right hand at her side; expression:
    wary, intent. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown fur with paler
    cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a swept-back crown
    of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the viewer''s right
    when it faces the camera). Dark grey-pink hands. No collar, no clothing. Natural olive-brown fur with cream-grey
    chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long tail with a small kink
    near the tip. No collar, no clothing, no accessories. Condition: state BASE: dry, slightly dusty fur. Position:
    frame right, seated south-west of the tin; facing frame left (north), notched LEFT ear toward the camera; seated
    beside the tin, watching; expression: calm. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer
    worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top,
    small dents on the side. No label, no writing, no handle. State SEALED: frame centre on the ground, lid up.
    Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster walls, damp compacted concrete
    ground, one low worn wooden stool on the centre line, an iron wall bracket with a round paper lantern, a green-grey
    shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere. Area: the lantern pool north
    of the stool. Foreground: damp concrete. Midground: Lan at frame left, tin centre, macaque at frame right. Background:
    the stool and dark beyond, lantern top right. Composition: Lan left, tin centre, macaque right. Light: key Single
    honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light; fill Faint amber
    market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern top-back light
    on fur, hair, tin rim and brass spots; practicals Round paper lantern on the iron bracket, the only practical
    in the alley; shadows Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.
    Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal
    live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit
    only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber
    shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh,
    natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Medium wide shot, eye-level angle, 50 mm lens at f/2.8, camera 1.0 m high, medium depth of field,
    50 mm medium-wide, Lan''s hand hovering over the tin, macaque still at screen right. Lan, a Southeast Asian
    woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes,
    straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey
    cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on
    shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white
    collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain
    dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about
    12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the
    apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame left, midground, knees up;
    facing frame right (south) toward the tin; standing 1 m from the tin, right arm extended, fingers open, hovering
    above the lid; expression: torn, hand hovering. A wild adult long-tailed macaque, about 45 cm body and a 50
    cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle,
    amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its
    own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing.
    Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly
    dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state
    BASE: dry, slightly dusty fur. Position: frame right, seated south-west of the tin; facing frame left (north),
    notched LEFT ear toward the camera; seated beside the tin, watching her hand; expression: calm. A round dented
    tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly
    two bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State
    SEALED: frame centre on the ground, lid up. Narrow dead-end back alley, 2.5 m wide, between two tall peeling
    sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the centre line, an iron wall
    bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No
    writing anywhere. Area: the lantern pool north of the stool. Foreground: damp concrete. Midground: Lan at frame
    left, tin centre, macaque at frame right. Background: the stool and dark beyond, lantern top right. Composition:
    Lan left, tin centre, macaque right. Light: key Single honey-amber 2400 K paper lantern on the east wall, high,
    soft, three-quarter back-top light; fill Faint amber market glow from the north mouth (screen-left), about 1/8
    key, plus teal sky ambient; rim Lantern top-back light on fur, hair, tin rim and brass spots; practicals Round
    paper lantern on the iron bracket, the only practical in the alley; shadows Deep teal, soft-edged, detail kept
    near #14100E, falling west toward camera and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten
    #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft halation,
    16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and
    stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow
    depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text,
    logos or watermarks.'
  motion: '0-1.2 s: Lan steps into the lantern light. 1.2-2.0 s: her right hand reaches toward the tin. 2.0-2.5
    s: it stops a hand''s width short and hovers. The macaque stays still. Camera static.'
  clip_length_s: 4
  risks:
  - Lan and macaque in one frame, no contact
```

###### SC03-SH050

```yaml
record: shot
id: SC03-SH050
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: The matching chip
screenplay_ref: 'SC03, action line ''Her eyes move to the saucer on the stool: the same chip in the rim as the one
  she turned face-down.'''
duration_s: 1.5
characters: []
props:
- id: PR-SAUCER-ALLEY
  state: PR-SAUCER-ALLEY:EMPTY
  position: centre on the stool seat, chip at 3 o'clock (frame right)
- id: PR-STOOL
  state: PR-STOOL:STANDING
  position: seat worn into a shallow dish, below the saucer
location:
  id: LOC-BACK-ALLEY
  area: the stool, close
  time_of_day: night
  weather: dry, still
frame:
  foreground: none
  midground: the saucer on the stool seat
  background: dark alley, amber glow of the lantern above
  composition: saucer centre, chip on the right rim
camera:
  shot_size: INSERT
  angle: eye-level
  height_m: 0.4
  distance_m: 1.2
  position: West of the stool, low, 1.2 m
  lens_mm: 100
  aperture: f/2.8
  depth_of_field: shallow
  focus: The chip at the saucer's 3 o'clock
  movement: static
  movement_execution: Locked off.
  support: tripod
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Static insert; no direction
start_state: the saucer held in frame, chip crisp
end_state: the same, held
action_timeline:
- '0.0-1.5 s: held on the chip'
dialogue: []
sound: 'sfx.md@1: SFX-SC03-005; ambience bed SC03 (alley room tone). Nearly nothing: the lantern''s faint paper flutter and a very low room-tone hum; a distant '
music: 'M02 held low note, fades out by the end of SH050 (music.md@1)'
vfx: none
transition_in: cut from SC03-SH040
transition_out: cut
continuity:
- Alley saucer EMPTY; same chip shape and 3 o'clock position as PR-SAUCER-STALL
generation:
  mode: image-to-video
  start_frame: 'Insert close shot, eye-level angle, 100 mm lens at f/2.8, camera 0.4 m high, shallow depth of field,
    100 mm insert, saucer on a worn wooden stool, chip crisp, lantern glow above. A small 12 cm cream-glazed ceramic
    saucer, slightly aged, with a thin dark-blue line around the rim and one small crescent chip in the rim at the
    3 o''clock position, matching the stall saucer. Plain, no pattern, no writing. State EMPTY: centre on the stool
    seat, chip at 3 o''clock (frame right). A low four-legged hardwood stool, 28 cm tall, seat worn into a shallow
    dish, legs slightly splayed, dark honey-brown with pale wear marks. Plain, no paint. State STANDING: seat worn
    into a shallow dish, below the saucer. Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster
    walls, damp compacted concrete ground, one low worn wooden stool on the centre line, an iron wall bracket with
    a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere.
    Area: the stool, close. Foreground: none. Midground: the saucer on the stool seat. Background: dark alley, amber
    glow of the lantern above. Composition: saucer centre, chip on the right rim. Light: key Single honey-amber
    2400 K paper lantern on the east wall, high, soft, three-quarter back-top light; fill Faint amber market glow
    from the north mouth (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern top-back light on fur,
    hair, tin rim and brass spots; practicals Round paper lantern on the iron bracket, the only practical in the
    alley; shadows Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down. Night,
    dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal
    live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit
    only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber
    shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh,
    natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Insert close shot, eye-level angle, 100 mm lens at f/2.8, camera 0.4 m high, shallow depth of field,
    100 mm insert, saucer on a worn wooden stool, chip crisp, lantern glow above. A small 12 cm cream-glazed ceramic
    saucer, slightly aged, with a thin dark-blue line around the rim and one small crescent chip in the rim at the
    3 o''clock position, matching the stall saucer. Plain, no pattern, no writing. State EMPTY: centre on the stool
    seat, chip at 3 o''clock (frame right). A low four-legged hardwood stool, 28 cm tall, seat worn into a shallow
    dish, legs slightly splayed, dark honey-brown with pale wear marks. Plain, no paint. State STANDING: seat worn
    into a shallow dish, below the saucer. Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster
    walls, damp compacted concrete ground, one low worn wooden stool on the centre line, an iron wall bracket with
    a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere.
    Area: the stool, close. Foreground: none. Midground: the saucer on the stool seat. Background: dark alley, amber
    glow of the lantern above. Composition: saucer centre, chip on the right rim. Light: key Single honey-amber
    2400 K paper lantern on the east wall, high, soft, three-quarter back-top light; fill Faint amber market glow
    from the north mouth (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern top-back light on fur,
    hair, tin rim and brass spots; practicals Round paper lantern on the iron bracket, the only practical in the
    alley; shadows Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down. Night,
    dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal
    live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit
    only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber
    shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh,
    natural skin and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-1.5 s: held close on the saucer on the stool; the chip is crisp; the lantern glow shifts very slightly.
    Camera static.'
  clip_length_s: 4
  risks:
  - chip must be at 3 o'clock with the same crescent shape
```

###### SC03-SH060

```yaml
record: shot
id: SC03-SH060
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: The recognition said aloud
screenplay_ref: SC03, dialogue LAN (barely audible) 'Ah Ma.'
duration_s: 2.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: frame centre, face fills the frame
  facing: facing frame right (south) toward the saucer
  action: speaks 'Ah Ma.' in a whisper
  expression_start: stunned, lips closed
  expression_end: eyes wet, lips parted after the name
  eyeline: to the saucer on the stool
props: []
location:
  id: LOC-BACK-ALLEY
  area: the lantern pool north of the stool
  time_of_day: night
  weather: dry, still
frame:
  foreground: none
  midground: Lan's face
  background: soft dark alley, lantern glow behind
  composition: face centre, dark behind
camera:
  shot_size: CU
  angle: eye-level
  height_m: 1.5
  distance_m: 2.5
  position: West of Lan, 2.5 m, looking east
  lens_mm: 85
  aperture: f/1.8
  depth_of_field: very shallow
  focus: Lan's eyes
  movement: dolly-in
  movement_execution: Pushes in about 0.4 m over 2 s to a tight close-up; ends fixed on her eyes.
  support: dolly
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Lan looks south (frame right)
start_state: Lan's face in soft shade, lips closed
end_state: closer, eyes wet, lips parted
action_timeline:
- '0.5-1.3 s: she whispers ''Ah Ma.'''
- '1.3-2.0 s: eyes wet, lips parted'
dialogue:
- line_id: VL-SC03-001
  character: CH-LAN
  text: Ah Ma.
  timing: 0.5-1.3 s
  delivery: barely audible, whispered
sound: 'sfx.md@1: ambience only; ambience bed SC03 (alley room tone)'
music: 'none: silence or market source sound only (music.md@1)'
vfx: none
transition_in: cut from SC03-SH050
transition_out: cut
continuity:
- Lan GRAZED
generation:
  mode: image-to-video
  start_frame: 'Close-up, eye-level angle, 85 mm lens at f/1.8, camera 1.5 m high, very shallow depth of field,
    85 mm slow push-in, Lan''s eyes glistening, lantern rim on her hair. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm
    long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron
    hem and trouser knees, flushed face with a light sweat sheen. Position: frame centre, face fills the frame;
    facing frame right (south) toward the saucer; face toward the saucer, lips closed; expression: stunned, lips
    closed. Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster walls, damp compacted
    concrete ground, one low worn wooden stool on the centre line, an iron wall bracket with a round paper lantern,
    a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere. Area: the lantern
    pool north of the stool. Foreground: none. Midground: Lan''s face. Background: soft dark alley, lantern glow
    behind. Composition: face centre, dark behind. Light: key Single honey-amber 2400 K paper lantern on the east
    wall, high, soft, three-quarter back-top light; fill Faint amber market glow from the north mouth (screen-left),
    about 1/8 key, plus teal sky ambient; rim Lantern top-back light on fur, hair, tin rim and brass spots; practicals
    Round paper lantern on the iron bracket, the only practical in the alley; shadows Deep teal, soft-edged, detail
    kept near #14100E, falling west toward camera and down. Night, dry, still. Palette: alley teal #1F3B3F, honey
    tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft
    halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light
    bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows.
    Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without
    text, logos or watermarks.'
  end_frame: 'Close-up, eye-level angle, 85 mm lens at f/1.8, camera 1.5 m high, very shallow depth of field, 85
    mm slow push-in, Lan''s eyes glistening, lantern rim on her hair. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm
    long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron
    hem and trouser knees, flushed face with a light sweat sheen. Position: frame centre, face fills the frame;
    facing frame right (south) toward the saucer; closer, eyes wet and fixed on the saucer, lips parted; expression:
    eyes wet, lips parted after the name. Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster
    walls, damp compacted concrete ground, one low worn wooden stool on the centre line, an iron wall bracket with
    a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere.
    Area: the lantern pool north of the stool. Foreground: none. Midground: Lan''s face. Background: soft dark alley,
    lantern glow behind. Composition: face centre, dark behind. Light: key Single honey-amber 2400 K paper lantern
    on the east wall, high, soft, three-quarter back-top light; fill Faint amber market glow from the north mouth
    (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern top-back light on fur, hair, tin rim and brass
    spots; practicals Round paper lantern on the iron bracket, the only practical in the alley; shadows Deep teal,
    soft-edged, detail kept near #14100E, falling west toward camera and down. Night, dry, still. Palette: alley
    teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm
    film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper
    lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents,
    deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture,
    clean frame without text, logos or watermarks.'
  motion: '0-0.5 s: Lan''s face still, lips closed. 0.5-1.3 s: she whispers ''Ah Ma.'' 1.3-2.0 s: eyes wet, lips
    parted. Camera pushes in about 0.4 m.'
  clip_length_s: 4
  risks:
  - 'whispered line: native audio may be too loud; voice-director to check'
```

###### SC03-SH070

```yaml
record: shot
id: SC03-SH070
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: 'The decisive choice: she opens the tin'
screenplay_ref: SC03, action lines 'She crouches. She lifts the tin gently... Her thumbs find the lid. It has stayed
  shut for a long time. It comes open.'
duration_s: 3.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: frame centre, midground, crouching, knees to head
  facing: facing frame right (south), tin in both hands
  action: crouches, lifts the tin in both hands, thumbs press the lid, the lid comes open
  expression_start: tender, careful
  expression_end: tender, open, eyes on the tin
  eyeline: down to the tin
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: frame right, soft, seated one body length from Lan
  facing: facing frame left (north), notched LEFT ear toward the camera
  action: watches her hands without flinching
  expression_start: calm
  expression_end: calm
  eyeline: to Lan's hands
props:
- id: PR-TIN
  state: PR-TIN:OPEN
  position: in Lan's hands at chest height; starts SEALED, ends with the lid lifted a hand's width
location:
  id: LOC-BACK-ALLEY
  area: the lantern pool north of the stool
  time_of_day: night
  weather: dry, still
frame:
  foreground: none
  midground: Lan crouching with the tin, macaque soft at frame right
  background: the stool and dark alley
  composition: Lan centre, tin in her hands, macaque soft right
camera:
  shot_size: MS
  angle: low
  height_m: 0.7
  distance_m: 2.5
  position: West of Lan, 2.5 m, slightly low
  lens_mm: 50
  aperture: f/2.8
  depth_of_field: medium
  focus: Lan's hands and the tin; macaque soft at screen right
  movement: static
  movement_execution: Locked off. She crouches into the frame, lifts the tin, thumbs open the lid.
  support: tripod
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Lan faces south; no direction change
start_state: Lan crouching with both hands under the sealed tin, thumbs on the lid
end_state: the lid lifted a hand's width, the tin open
action_timeline:
- '0.0-1.2 s: she crouches'
- '1.2-2.0 s: both hands lift the tin'
- '2.0-3.5 s: her thumbs press and the lid comes open'
dialogue: []
sound: 'sfx.md@1: SFX-SC03-006, SFX-SC03-007; ambience bed SC03 (alley room tone). Knees crack lightly as she crouches; cloth and shoe on concrete; tin lifted from the groun; Lid sticks, then comes free with a dry pop and a tiny metallic scrape: it has been closed '
music: 'M03 theme T1 (music.md@1)'
vfx: VFX-SC03-SH070
transition_in: cut from SC03-SH060
transition_out: cut
continuity:
- PR-TIN goes SEALED to OPEN here
- The macaque does not flinch
generation:
  mode: first-last-frame
  start_frame: 'Medium shot, low angle, 50 mm lens at f/2.8, camera 0.7 m high, medium depth of field, 50 mm, slightly
    low, Lan crouching to lift a small green tin, thumbs on the lid. Lan, a Southeast Asian woman in her early 30s,
    160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small
    nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over
    a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no
    makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt
    with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic.
    No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm long on
    the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron hem and
    trouser knees, flushed face with a light sweat sheen. Position: frame centre, midground, crouching, knees to
    head; facing frame right (south), tin in both hands; crouching beside the tin with both hands under it, thumbs
    at the lid; expression: tender, careful. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail,
    olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown
    eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear
    (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing. Natural olive-brown
    fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long
    tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state BASE: dry, slightly
    dusty fur. Position: frame right, soft, seated one body length from Lan; facing frame left (north), notched
    LEFT ear toward the camera; seated, watching; expression: calm. A round dented tin, 16 cm across and 10 cm tall,
    dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots
    side by side on top, small dents on the side. No label, no writing, no handle. State OPEN: in Lan''s hands at
    chest height; starts SEALED, ends with the lid lifted a hand''s width. Narrow dead-end back alley, 2.5 m wide,
    between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the
    centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe,
    a blank end wall. No writing anywhere. Area: the lantern pool north of the stool. Foreground: none. Midground:
    Lan crouching with the tin, macaque soft at frame right. Background: the stool and dark alley. Composition:
    Lan centre, tin in her hands, macaque soft right. Light: key Single honey-amber 2400 K paper lantern on the
    east wall, high, soft, three-quarter back-top light; fill Faint amber market glow from the north mouth (screen-left),
    about 1/8 key, plus teal sky ambient; rim Lantern top-back light on fur, hair, tin rim and brass spots; practicals
    Round paper lantern on the iron bracket, the only practical in the alley; shadows Deep teal, soft-edged, detail
    kept near #14100E, falling west toward camera and down. Night, dry, still. Palette: alley teal #1F3B3F, honey
    tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft
    halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light
    bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows.
    Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without
    text, logos or watermarks.'
  end_frame: 'Medium shot, low angle, 50 mm lens at f/2.8, camera 0.7 m high, medium depth of field, 50 mm, slightly
    low, Lan crouching to lift a small green tin, thumbs on the lid. Lan, a Southeast Asian woman in her early 30s,
    160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small
    nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over
    a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no
    makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt
    with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic.
    No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm long on
    the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron hem and
    trouser knees, flushed face with a light sweat sheen. Position: frame centre, midground, crouching, knees to
    head; facing frame right (south), tin in both hands; crouched, the tin held in both hands with the lid lifted
    a hand''s width; expression: tender, open, eyes on the tin. A wild adult long-tailed macaque, about 45 cm body
    and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked
    muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim
    of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing.
    Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly
    dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state
    BASE: dry, slightly dusty fur. Position: frame right, soft, seated one body length from Lan; facing frame left
    (north), notched LEFT ear toward the camera; seated, watching; expression: calm. A round dented tin, 16 cm across
    and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn
    brass spots side by side on top, small dents on the side. No label, no writing, no handle. State OPEN: in Lan''s
    hands at chest height; starts SEALED, ends with the lid lifted a hand''s width. Narrow dead-end back alley,
    2.5 m wide, between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden
    stool on the centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank door,
    a grey drainpipe, a blank end wall. No writing anywhere. Area: the lantern pool north of the stool. Foreground:
    none. Midground: Lan crouching with the tin, macaque soft at frame right. Background: the stool and dark alley.
    Composition: Lan centre, tin in her hands, macaque soft right. Light: key Single honey-amber 2400 K paper lantern
    on the east wall, high, soft, three-quarter back-top light; fill Faint amber market glow from the north mouth
    (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern top-back light on fur, hair, tin rim and brass
    spots; practicals Round paper lantern on the iron bracket, the only practical in the alley; shadows Deep teal,
    soft-edged, detail kept near #14100E, falling west toward camera and down. Night, dry, still. Palette: alley
    teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm
    film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper
    lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents,
    deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture,
    clean frame without text, logos or watermarks.'
  motion: '0-1.2 s: Lan crouches. 1.2-2.0 s: she lifts the tin gently in both hands. 2.0-3.5 s: her thumbs press
    and the lid lifts a hand''s width. The macaque stays still. Camera static, slightly low.'
  clip_length_s: 6
  clip_length_note: 'TO-VERIFY: Veo 3.1 first-last-frame clip lengths are not confirmed (user, 2026-10-19); this value is the plan, not a fact'
  risks:
  - 'hands opening a lid: thumbs and lid only; lid state in the end frame'
```

###### SC03-SH080

```yaml
record: shot
id: SC03-SH080
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: Reveal of the tin's contents
screenplay_ref: SC03, 'INSERT - THE OPEN TIN' A folded recipe card. A wooden spoon. A twist of paper holding dried
  fruit.
duration_s: 2.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: only her hands holding the tin at the sides of frame
  facing: n/a (hands only)
  action: holds the open tin still
  expression_start: out of frame (hands only)
  expression_end: out of frame (hands only)
  eyeline: none
props:
- id: PR-TIN
  state: PR-TIN:OPEN
  position: frame filling, seen from above
- id: PR-CARD
  state: PR-CARD:FOLDED
  position: at the bottom of the tin, folded, outside blank
- id: PR-SPOON
  state: PR-SPOON:IN-TIN
  position: diagonally on the card
- id: PR-FRUIT
  state: PR-FRUIT:TWISTED
  position: the closed paper twist beside the card
location:
  id: LOC-BACK-ALLEY
  area: above the open tin, held in Lan's hands
  time_of_day: night
  weather: dry, still
frame:
  foreground: Lan's fingers at the frame edges
  midground: the open tin and its contents
  background: dark
  composition: tin fills the frame, card folded, no writing
camera:
  shot_size: INSERT
  angle: high
  height_m: 1.2
  distance_m: 0.6
  position: Directly above the tin, looking down about 70 degrees
  lens_mm: 50
  aperture: f/4
  depth_of_field: shallow-medium
  focus: The spoon and the twist; the folded card slightly soft
  movement: static
  movement_execution: Locked off.
  support: locked-off
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Static overhead insert
start_state: the open tin seen from above
end_state: held, same
action_timeline:
- '0.0-2.0 s: held on the contents'
dialogue: []
sound: 'sfx.md@1: SFX-SC03-008; ambience bed SC03 (alley room tone). Contents settle: card paper rustle and a spoon tink in the tin;'
music: 'M03 theme T1 (music.md@1)'
vfx: 'flag for vfx-supervisor: the card must stay folded and blank; never any handwriting'
transition_in: cut from SC03-SH070
transition_out: cut
continuity:
- Card FOLDED, spoon IN-TIN, fruit TWISTED
generation:
  mode: image-to-video
  start_frame: 'Insert close shot, high angle, 50 mm lens at f/4, camera 1.2 m high, shallow-medium depth of field,
    50 mm overhead insert, inside a dented green tin: wooden spoon, folded blank card, paper twist. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: only her hands holding
    the tin at the sides of frame; n/a (hands only); hands holding the open tin; expression: out of frame (hands
    only). A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit
    lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing,
    no handle. State OPEN: frame filling, seen from above. A stiff cream card folded in thirds into a 10 by 6 cm
    rectangle, soft worn edges, faint brown fingerprint stains, the outside completely blank with no writing, no
    lines and no printing visible. State FOLDED: at the bottom of the tin, folded, outside blank. A small 14 cm
    hand-carved honey-brown hardwood cooking spoon with a rounded bowl darkened by years of use and a short plain
    handle, smooth worn surface. No decoration, no carving, no writing. State IN-TIN: diagonally on the card. A
    small 8 cm twist of waxed brown paper, closed at the top, holding about a dozen chewy amber-brown dried fruit
    slices, each about 3 cm wide, that spill out when opened. Plain paper, no printing. State TWISTED: the closed
    paper twist beside the card. Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster
    walls, damp compacted concrete ground, one low worn wooden stool on the centre line, an iron wall bracket with
    a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere.
    Area: above the open tin, held in Lan''s hands. Foreground: Lan''s fingers at the frame edges. Midground: the
    open tin and its contents. Background: dark. Composition: tin fills the frame, card folded, no writing. Light:
    key Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light; fill
    Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern
    top-back light on fur, hair, tin rim and brass spots; practicals Round paper lantern on the iron bracket, the
    only practical in the alley; shadows Deep teal, soft-edged, detail kept near #14100E, falling west toward camera
    and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17.
    Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night
    market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against
    umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round
    warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Insert close shot, high angle, 50 mm lens at f/4, camera 1.2 m high, shallow-medium depth of field,
    50 mm overhead insert, inside a dented green tin: wooden spoon, folded blank card, paper twist. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: only her hands holding
    the tin at the sides of frame; n/a (hands only); hands holding the open tin; expression: out of frame (hands
    only). A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit
    lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing,
    no handle. State OPEN: frame filling, seen from above. A stiff cream card folded in thirds into a 10 by 6 cm
    rectangle, soft worn edges, faint brown fingerprint stains, the outside completely blank with no writing, no
    lines and no printing visible. State FOLDED: at the bottom of the tin, folded, outside blank. A small 14 cm
    hand-carved honey-brown hardwood cooking spoon with a rounded bowl darkened by years of use and a short plain
    handle, smooth worn surface. No decoration, no carving, no writing. State IN-TIN: diagonally on the card. A
    small 8 cm twist of waxed brown paper, closed at the top, holding about a dozen chewy amber-brown dried fruit
    slices, each about 3 cm wide, that spill out when opened. Plain paper, no printing. State TWISTED: the closed
    paper twist beside the card. Narrow dead-end back alley, 2.5 m wide, between two tall peeling sandy-plaster
    walls, damp compacted concrete ground, one low worn wooden stool on the centre line, an iron wall bracket with
    a round paper lantern, a green-grey shuttered plank door, a grey drainpipe, a blank end wall. No writing anywhere.
    Area: above the open tin, held in Lan''s hands. Foreground: Lan''s fingers at the frame edges. Midground: the
    open tin and its contents. Background: dark. Composition: tin fills the frame, card folded, no writing. Light:
    key Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light; fill
    Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern
    top-back light on fur, hair, tin rim and brass spots; practicals Round paper lantern on the iron bracket, the
    only practical in the alley; shadows Deep teal, soft-edged, detail kept near #14100E, falling west toward camera
    and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17.
    Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night
    market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against
    umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round
    warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-2.0 s: held on the open tin: the folded card, the wooden spoon across it, the paper twist. Lantern
    light warms the inside. Camera locked off.'
  clip_length_s: 4
  risks:
  - card must not show writing
```

###### SC03-SH090

```yaml
record: shot
id: SC03-SH090
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: The gift
screenplay_ref: SC03, action line 'Lan shakes the dried fruit onto the saucer on the stool.'
duration_s: 2.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: hands and forearms in the lower frame, the right forearm toward the camera
  facing: facing frame right (south)
  action: shakes the dried fruit from the paper twist onto the saucer
  expression_start: out of frame (hands only)
  expression_end: out of frame (hands only)
  eyeline: none
props:
- id: PR-SAUCER-ALLEY
  state: PR-SAUCER-ALLEY:FRUIT
  position: centre on the stool seat, starts EMPTY
- id: PR-FRUIT
  state: PR-FRUIT:POURED
  position: slices falling from the twist onto the saucer
- id: PR-TIN
  state: PR-TIN:OPEN
  position: in her left hand at the frame edge
location:
  id: LOC-BACK-ALLEY
  area: the stool, close
  time_of_day: night
  weather: dry, still
frame:
  foreground: none
  midground: hands, twist and saucer
  background: dark stool leg and alley
  composition: saucer centre, hands above it, graze visible on the right forearm
camera:
  shot_size: CU
  angle: eye-level
  height_m: 0.5
  distance_m: 1.5
  position: West of the stool, 1.5 m, looking east
  lens_mm: 100
  aperture: f/2.8
  depth_of_field: shallow
  focus: The fruit slices and the saucer; her right forearm graze softly sharp
  movement: static
  movement_execution: Locked off.
  support: tripod
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Static close
start_state: the twist above the empty saucer
end_state: the fruit slices lying on the saucer
action_timeline:
- '0.0-0.8 s: the twist tilts'
- '0.8-2.0 s: slices fall and settle on the saucer'
dialogue: []
sound: 'sfx.md@1: SFX-SC03-009; ambience bed SC03 (alley room tone). Paper twist crinkles; dried fruit slices patter onto the ceramic saucer, soft'
music: 'M03 theme T1 (music.md@1)'
vfx: none
transition_in: cut from SC03-SH080
transition_out: cut
continuity:
- Alley saucer EMPTY to FRUIT; PR-FRUIT TWISTED to POURED
- Tin on her thigh, lid off
generation:
  mode: first-last-frame
  start_frame: 'Close-up, eye-level angle, 100 mm lens at f/2.8, camera 0.5 m high, shallow depth of field, 100
    mm close-up of hands pouring dried fruit slices onto a chipped saucer. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm
    long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron
    hem and trouser knees, flushed face with a light sweat sheen. Position: hands and forearms in the lower frame,
    the right forearm toward the camera; facing frame right (south); the opened paper twist held above the empty
    saucer; expression: out of frame (hands only). A small 12 cm cream-glazed ceramic saucer, slightly aged, with
    a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position, matching
    the stall saucer. Plain, no pattern, no writing. State FRUIT: centre on the stool seat, starts EMPTY. A small
    8 cm twist of waxed brown paper, closed at the top, holding about a dozen chewy amber-brown dried fruit slices,
    each about 3 cm wide, that spill out when opened. Plain paper, no printing. State POURED: slices falling from
    the twist onto the saucer. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim
    and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on
    the side. No label, no writing, no handle. State OPEN: in her left hand at the frame edge. Narrow dead-end back
    alley, 2.5 m wide, between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn
    wooden stool on the centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank
    door, a grey drainpipe, a blank end wall. No writing anywhere. Area: the stool, close. Foreground: none. Midground:
    hands, twist and saucer. Background: dark stool leg and alley. Composition: saucer centre, hands above it, graze
    visible on the right forearm. Light: key Single honey-amber 2400 K paper lantern on the east wall, high, soft,
    three-quarter back-top light; fill Faint amber market glow from the north mouth (screen-left), about 1/8 key,
    plus teal sky ambient; rim Lantern top-back light on fur, hair, tin rim and brass spots; practicals Round paper
    lantern on the iron bracket, the only practical in the alley; shadows Deep teal, soft-edged, detail kept near
    #14100E, falling west toward camera and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten
    #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft halation,
    16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and
    stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow
    depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text,
    logos or watermarks.'
  end_frame: 'Close-up, eye-level angle, 100 mm lens at f/2.8, camera 0.5 m high, shallow depth of field, 100 mm
    close-up of hands pouring dried fruit slices onto a chipped saucer. Lan, a Southeast Asian woman in her early
    30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows,
    small nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron
    over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry,
    no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless
    shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair
    elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm
    long on the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron
    hem and trouser knees, flushed face with a light sweat sheen. Position: hands and forearms in the lower frame,
    the right forearm toward the camera; facing frame right (south); the twist tilted, the fruit slices lying on
    the saucer; expression: out of frame (hands only). A small 12 cm cream-glazed ceramic saucer, slightly aged,
    with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position,
    matching the stall saucer. Plain, no pattern, no writing. State FRUIT: centre on the stool seat, starts EMPTY.
    A small 8 cm twist of waxed brown paper, closed at the top, holding about a dozen chewy amber-brown dried fruit
    slices, each about 3 cm wide, that spill out when opened. Plain paper, no printing. State POURED: slices falling
    from the twist onto the saucer. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at
    the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small
    dents on the side. No label, no writing, no handle. State OPEN: in her left hand at the frame edge. Narrow dead-end
    back alley, 2.5 m wide, between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low
    worn wooden stool on the centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered
    plank door, a grey drainpipe, a blank end wall. No writing anywhere. Area: the stool, close. Foreground: none.
    Midground: hands, twist and saucer. Background: dark stool leg and alley. Composition: saucer centre, hands
    above it, graze visible on the right forearm. Light: key Single honey-amber 2400 K paper lantern on the east
    wall, high, soft, three-quarter back-top light; fill Faint amber market glow from the north mouth (screen-left),
    about 1/8 key, plus teal sky ambient; rim Lantern top-back light on fur, hair, tin rim and brass spots; practicals
    Round paper lantern on the iron bracket, the only practical in the alley; shadows Deep teal, soft-edged, detail
    kept near #14100E, falling west toward camera and down. Night, dry, still. Palette: alley teal #1F3B3F, honey
    tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft
    halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light
    bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows.
    Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without
    text, logos or watermarks.'
  motion: '0-0.8 s: Lan tilts the paper twist over the saucer. 0.8-2.0 s: about a dozen dried fruit slices fall
    and settle on the saucer. Camera static.'
  clip_length_s: 4
  clip_length_note: 'TO-VERIFY: Veo 3.1 first-last-frame clip lengths are not confirmed (user, 2026-10-19); this value is the plan, not a fact'
  risks:
  - 'falling objects: small amount, slow pour'
```

###### SC03-SH100

```yaml
record: shot
id: SC03-SH100
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: The knock is Lan's now
screenplay_ref: SC03, action line 'She sets the lid back on the tin and, with two knuckles, knocks twice. Knock.
  Knock.'
duration_s: 2.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: hands in the lower frame, the right forearm toward the camera
  facing: facing frame right (south)
  action: sets the lid on loosely and knocks twice with two knuckles of her right hand
  expression_start: out of frame (hands only)
  expression_end: out of frame (hands only)
  eyeline: none
props:
- id: PR-TIN
  state: PR-TIN:LID-ON
  position: centre in her left hand; lid set back loosely and offset, not sealed
location:
  id: LOC-BACK-ALLEY
  area: above the tin, in Lan's hands
  time_of_day: night
  weather: dry, still
frame:
  foreground: none
  midground: the tin and her hands
  background: dark alley
  composition: tin and knuckles centre, brass spots visible
camera:
  shot_size: CU
  angle: eye-level
  height_m: 0.5
  distance_m: 1.5
  position: West of Lan, 1.5 m, looking east
  lens_mm: 100
  aperture: f/2.8
  depth_of_field: shallow
  focus: The lid and knuckles
  movement: static
  movement_execution: Locked off. Two knocks.
  support: tripod
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Static close
start_state: the lid above the open tin
end_state: the lid on, offset, her knuckles resting on it
action_timeline:
- '0.0-0.6 s: she sets the lid back loosely'
- '0.6-1.0 s: first knock'
- '1.0-1.4 s: second knock'
- '1.4-2.0 s: knuckles rest'
dialogue: []
sound: 'sfx.md@1: SFX-SC03-010; ambience bed SC03 (alley room tone). Lid set back with a light clink; THE SECOND KNOCK PAIR: two knuckle knocks on the lid, the'
music: 'none: music steps out for the two knocks (music.md@1)'
vfx: none
transition_in: cut from SC03-SH090
transition_out: cut
continuity:
- PR-TIN goes OPEN to LID-ON, lid loose and offset
generation:
  mode: first-last-frame
  start_frame: 'Close-up, eye-level angle, 100 mm lens at f/2.8, camera 0.5 m high, shallow depth of field, 100
    mm close-up, a hand setting a lid and knocking twice on a dented green tin with two brass spots. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: hands in the lower
    frame, the right forearm toward the camera; facing frame right (south); the right hand holding the lid above
    the open tin, left hand under the tin; expression: out of frame (hands only). A round dented tin, 16 cm across
    and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn
    brass spots side by side on top, small dents on the side. No label, no writing, no handle. State LID-ON: centre
    in her left hand; lid set back loosely and offset, not sealed. Narrow dead-end back alley, 2.5 m wide, between
    two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the centre
    line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe,
    a blank end wall. No writing anywhere. Area: above the tin, in Lan''s hands. Foreground: none. Midground: the
    tin and her hands. Background: dark alley. Composition: tin and knuckles centre, brass spots visible. Light:
    key Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light; fill
    Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern
    top-back light on fur, hair, tin rim and brass spots; practicals Round paper lantern on the iron bracket, the
    only practical in the alley; shadows Deep teal, soft-edged, detail kept near #14100E, falling west toward camera
    and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17.
    Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night
    market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against
    umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round
    warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Close-up, eye-level angle, 100 mm lens at f/2.8, camera 0.5 m high, shallow depth of field, 100 mm
    close-up, a hand setting a lid and knocking twice on a dented green tin with two brass spots. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: hands in the lower
    frame, the right forearm toward the camera; facing frame right (south); the lid on, offset, her right knuckles
    resting on it after two knocks; expression: out of frame (hands only). A round dented tin, 16 cm across and
    10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn
    brass spots side by side on top, small dents on the side. No label, no writing, no handle. State LID-ON: centre
    in her left hand; lid set back loosely and offset, not sealed. Narrow dead-end back alley, 2.5 m wide, between
    two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the centre
    line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe,
    a blank end wall. No writing anywhere. Area: above the tin, in Lan''s hands. Foreground: none. Midground: the
    tin and her hands. Background: dark alley. Composition: tin and knuckles centre, brass spots visible. Light:
    key Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light; fill
    Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern
    top-back light on fur, hair, tin rim and brass spots; practicals Round paper lantern on the iron bracket, the
    only practical in the alley; shadows Deep teal, soft-edged, detail kept near #14100E, falling west toward camera
    and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17.
    Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night
    market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against
    umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round
    warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-0.6 s: Lan sets the lid back on loosely. 0.6-1.4 s: she knocks twice with two knuckles of her right
    hand. 1.4-2.0 s: the knuckles rest on the lid. Camera static.'
  clip_length_s: 4
  clip_length_note: 'TO-VERIFY: Veo 3.1 first-last-frame clip lengths are not confirmed (user, 2026-10-19); this value is the plan, not a fact'
  risks:
  - two knocks only; lid position in the end frame
```

###### SC03-SH110

```yaml
record: shot
id: SC03-SH110
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: The ritual answered
screenplay_ref: SC03, action line 'The macaque shuffles forward and eats.'
duration_s: 2.5
characters:
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: frame centre, low, seated at the stool
  facing: three-quarter, facing frame left toward the saucer, notched LEFT ear toward the camera
  action: shuffles forward and eats the dried fruit with its fingers
  expression_start: wary, hopeful
  expression_end: content, chewing
  eyeline: down to the saucer
props:
- id: PR-SAUCER-ALLEY
  state: PR-SAUCER-ALLEY:EATEN
  position: on the stool seat, starts with fruit, ends nearly empty
- id: PR-STOOL
  state: PR-STOOL:STANDING
  position: worn seat
location:
  id: LOC-BACK-ALLEY
  area: the stool, with the macaque at its foot
  time_of_day: night
  weather: dry, still
frame:
  foreground: none
  midground: the macaque at the saucer
  background: dark alley
  composition: macaque centre, saucer beside
camera:
  shot_size: MS
  angle: eye-level
  height_m: 0.3
  distance_m: 2.0
  position: West of the stool, low, 2 m
  lens_mm: 85
  aperture: f/2.5
  depth_of_field: shallow
  focus: The macaque's face and fingers
  movement: static
  movement_execution: Locked off. The macaque shuffles forward into the focus plane.
  support: tripod
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Static
start_state: the macaque reaching for the fruit
end_state: chewing with the saucer nearly empty
action_timeline:
- '0.0-1.0 s: it shuffles forward'
- '1.0-2.5 s: it eats with its fingers'
dialogue: []
sound: 'sfx.md@1: SFX-SC03-011; ambience bed SC03 (alley room tone). L-cut: the knock''s ring trails 0.4 s; macaque shuffles forward, paws on concrete; soft che'
music: 'M03 resumes after the knock ring (music.md@1)'
vfx: none
transition_in: cut from SC03-SH100
transition_out: cut
continuity:
- Saucer FRUIT to EATEN
generation:
  mode: image-to-video
  start_frame: 'Medium shot, eye-level angle, 85 mm lens at f/2.5, camera 0.3 m high, shallow depth of field, 85
    mm low, the macaque eating dried fruit with its fingers, lantern from above. A wild adult long-tailed macaque,
    about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face
    with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: frame centre, low, seated at the stool; three-quarter,
    facing frame left toward the saucer, notched LEFT ear toward the camera; just in front of the saucer, reaching
    a hand toward it; expression: wary, hopeful. A small 12 cm cream-glazed ceramic saucer, slightly aged, with
    a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position, matching
    the stall saucer. Plain, no pattern, no writing. State EATEN: on the stool seat, starts with fruit, ends nearly
    empty. A low four-legged hardwood stool, 28 cm tall, seat worn into a shallow dish, legs slightly splayed, dark
    honey-brown with pale wear marks. Plain, no paint. State STANDING: worn seat. Narrow dead-end back alley, 2.5
    m wide, between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool
    on the centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey
    drainpipe, a blank end wall. No writing anywhere. Area: the stool, with the macaque at its foot. Foreground:
    none. Midground: the macaque at the saucer. Background: dark alley. Composition: macaque centre, saucer beside.
    Light: key Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light;
    fill Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient; rim Lantern
    top-back light on fur, hair, tin rim and brass spots; practicals Round paper lantern on the iron bracket, the
    only practical in the alley; shadows Deep teal, soft-edged, detail kept near #14100E, falling west toward camera
    and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E, tin brass #C9A24B, umber #2A1D17.
    Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night
    market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against
    umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round
    warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Medium shot, eye-level angle, 85 mm lens at f/2.5, camera 0.3 m high, shallow depth of field, 85 mm
    low, the macaque eating dried fruit with its fingers, lantern from above. A wild adult long-tailed macaque,
    about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face
    with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: frame centre, low, seated at the stool; three-quarter,
    facing frame left toward the saucer, notched LEFT ear toward the camera; chewing, a fruit slice in its hand,
    the saucer nearly empty; expression: content, chewing. A small 12 cm cream-glazed ceramic saucer, slightly aged,
    with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position,
    matching the stall saucer. Plain, no pattern, no writing. State EATEN: on the stool seat, starts with fruit,
    ends nearly empty. A low four-legged hardwood stool, 28 cm tall, seat worn into a shallow dish, legs slightly
    splayed, dark honey-brown with pale wear marks. Plain, no paint. State STANDING: worn seat. Narrow dead-end
    back alley, 2.5 m wide, between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low
    worn wooden stool on the centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered
    plank door, a grey drainpipe, a blank end wall. No writing anywhere. Area: the stool, with the macaque at its
    foot. Foreground: none. Midground: the macaque at the saucer. Background: dark alley. Composition: macaque centre,
    saucer beside. Light: key Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter
    back-top light; fill Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky
    ambient; rim Lantern top-back light on fur, hair, tin rim and brass spots; practicals Round paper lantern on
    the iron bracket, the only practical in the alley; shadows Deep teal, soft-edged, detail kept near #14100E,
    falling west toward camera and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E,
    tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm
    lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam:
    amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of
    field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or
    watermarks.'
  motion: '0-1.0 s: the macaque shuffles forward to the saucer. 1.0-2.5 s: it takes slices and eats with its fingers.
    Camera static.'
  clip_length_s: 4
  risks:
  - 'animal eating: fingers to mouth only'
```

###### SC03-SH120

```yaml
record: shot
id: SC03-SH120
scene: SC03
status: REVIEW
version: 2
depends_on:
- SC03_direction@1
- SC03_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: Rest and closure
screenplay_ref: SC03, action lines 'Lan sits on the cold ground beside it, the open tin in her lap. She almost smiles.'
duration_s: 3.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: frame left, seated low, full figure, about 4.5 m from camera
  facing: facing frame right (south), toward the macaque
  action: lowers herself to sit on the cold ground with the tin in her lap and almost smiles
  expression_start: tired, soft
  expression_end: an almost smile
  eyeline: to the macaque and the saucer
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: frame right of Lan, seated at the stool
  facing: three-quarter, facing frame left toward the saucer, notched LEFT ear toward the camera
  action: eats beside her
  expression_start: content
  expression_end: content
  eyeline: down to the saucer
props:
- id: PR-TIN
  state: PR-TIN:LID-ON
  position: in Lan's lap, lid loose and offset
- id: PR-STOOL
  state: PR-STOOL:STANDING
  position: frame right of centre with the saucer on its seat
- id: PR-SAUCER-ALLEY
  state: PR-SAUCER-ALLEY:EATEN
  position: on the stool seat, nearly empty
- id: PR-LANTERN-ALLEY
  state: PR-LANTERN-ALLEY:LIT
  position: on the east wall above the stool
location:
  id: LOC-BACK-ALLEY
  area: the alley, mirror of the opening wide
  time_of_day: night
  weather: dry, still
frame:
  foreground: damp compacted concrete
  midground: Lan seated at frame left, the stool and macaque at frame right
  background: east wall with the drainpipe, the lantern glowing, deep dark beyond
  composition: stool and lantern right of centre, Lan left, small in the dark
camera:
  shot_size: WS
  angle: eye-level
  height_m: 0.9
  distance_m: 4.5
  position: West side, 4 m west of the centre line (mirror of SH010)
  lens_mm: 35
  aperture: f/2.8
  depth_of_field: medium
  focus: Lan and the macaque; the stool and the lantern soft
  movement: static
  movement_execution: Locked off. Lan sits down at screen left.
  support: tripod
  setup: SC03-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter back-top light
  fill: Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky ambient
  rim: Lantern top-back light on fur, hair, tin rim and brass spots
  practicals: Round paper lantern on the iron bracket, the only practical in the alley
  shadows: 'Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down'
  palette:
  - 'alley teal #1F3B3F'
  - 'honey tungsten #F2B35E'
  - 'tin brass #C9A24B'
  - 'umber #2A1D17'
screen_direction: Camera west looking east, same as SC03-SH010
start_state: Lan lowering toward the ground
end_state: Lan seated with the tin in her lap
action_timeline:
- '0.0-1.5 s: she lowers herself to the ground'
- '1.5-3.0 s: she settles with the tin in her lap and an almost-smile'
dialogue: []
sound: 'sfx.md@1: SFX-SC03-012; ambience bed SC03 (alley room tone). Lan sits down: cloth, a small exhale, tin settles in her lap; the macaque chews beside her'
music: 'M03 resumes after the knock ring (music.md@1)'
vfx: none
transition_in: cut from SC03-SH110
transition_out: cut
continuity:
- 'Tin LID-ON in her lap, loose and offset (script: ''the open tin'')'
- Dust on her knees
generation:
  mode: image-to-video
  start_frame: 'Wide shot, eye-level angle, 35 mm lens at f/2.8, camera 0.9 m high, medium depth of field, 35 mm
    wide, Lan seated on the cold ground with the open tin in her lap, macaque eating beside, one lantern. Lan, a
    Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown
    almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the
    nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers,
    dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth
    stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas
    slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED:
    a red surface graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair
    strands, light dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame
    left, seated low, full figure, about 4.5 m from camera; facing frame right (south), toward the macaque; lowering
    herself toward the ground at frame left; expression: tired, soft. A wild adult long-tailed macaque, about 45
    cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked
    muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim
    of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing.
    Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly
    dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state
    BASE: dry, slightly dusty fur. Position: frame right of Lan, seated at the stool; three-quarter, facing frame
    left toward the saucer, notched LEFT ear toward the camera; eating at the saucer; expression: content. A round
    dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid
    with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing,
    no handle. State LID-ON: in Lan''s lap, lid loose and offset. A low four-legged hardwood stool, 28 cm tall,
    seat worn into a shallow dish, legs slightly splayed, dark honey-brown with pale wear marks. Plain, no paint.
    State STANDING: frame right of centre with the saucer on its seat. A small 12 cm cream-glazed ceramic saucer,
    slightly aged, with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock
    position, matching the stall saucer. Plain, no pattern, no writing. State EATEN: on the stool seat, nearly empty.
    A round 30 cm amber paper lantern with thin bamboo ribs, hung from an iron wall bracket by a short wire. Plain,
    no characters, no pattern. State LIT: on the east wall above the stool. Narrow dead-end back alley, 2.5 m wide,
    between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the
    centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe,
    a blank end wall. No writing anywhere. Area: the alley, mirror of the opening wide. Foreground: damp compacted
    concrete. Midground: Lan seated at frame left, the stool and macaque at frame right. Background: east wall with
    the drainpipe, the lantern glowing, deep dark beyond. Composition: stool and lantern right of centre, Lan left,
    small in the dark. Light: key Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter
    back-top light; fill Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky
    ambient; rim Lantern top-back light on fur, hair, tin rim and brass spots; practicals Round paper lantern on
    the iron bracket, the only practical in the alley; shadows Deep teal, soft-edged, detail kept near #14100E,
    falling west toward camera and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E,
    tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm
    lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam:
    amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of
    field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or
    watermarks.'
  end_frame: 'Wide shot, eye-level angle, 35 mm lens at f/2.8, camera 0.9 m high, medium depth of field, 35 mm wide,
    Lan seated on the cold ground with the open tin in her lap, macaque eating beside, one lantern. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame left, seated
    low, full figure, about 4.5 m from camera; facing frame right (south), toward the macaque; seated on the ground,
    the tin in her lap, a hint of a smile; expression: an almost smile. A wild adult long-tailed macaque, about
    45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a
    grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch
    in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: frame right of Lan, seated at the stool; three-quarter,
    facing frame left toward the saucer, notched LEFT ear toward the camera; eating at the saucer; expression: content.
    A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit
    lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing,
    no handle. State LID-ON: in Lan''s lap, lid loose and offset. A low four-legged hardwood stool, 28 cm tall,
    seat worn into a shallow dish, legs slightly splayed, dark honey-brown with pale wear marks. Plain, no paint.
    State STANDING: frame right of centre with the saucer on its seat. A small 12 cm cream-glazed ceramic saucer,
    slightly aged, with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock
    position, matching the stall saucer. Plain, no pattern, no writing. State EATEN: on the stool seat, nearly empty.
    A round 30 cm amber paper lantern with thin bamboo ribs, hung from an iron wall bracket by a short wire. Plain,
    no characters, no pattern. State LIT: on the east wall above the stool. Narrow dead-end back alley, 2.5 m wide,
    between two tall peeling sandy-plaster walls, damp compacted concrete ground, one low worn wooden stool on the
    centre line, an iron wall bracket with a round paper lantern, a green-grey shuttered plank door, a grey drainpipe,
    a blank end wall. No writing anywhere. Area: the alley, mirror of the opening wide. Foreground: damp compacted
    concrete. Midground: Lan seated at frame left, the stool and macaque at frame right. Background: east wall with
    the drainpipe, the lantern glowing, deep dark beyond. Composition: stool and lantern right of centre, Lan left,
    small in the dark. Light: key Single honey-amber 2400 K paper lantern on the east wall, high, soft, three-quarter
    back-top light; fill Faint amber market glow from the north mouth (screen-left), about 1/8 key, plus teal sky
    ambient; rim Lantern top-back light on fur, hair, tin rim and brass spots; practicals Round paper lantern on
    the iron bracket, the only practical in the alley; shadows Deep teal, soft-edged, detail kept near #14100E,
    falling west toward camera and down. Night, dry, still. Palette: alley teal #1F3B3F, honey tungsten #F2B35E,
    tin brass #C9A24B, umber #2A1D17. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm
    lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam:
    amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of
    field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or
    watermarks.'
  motion: '0-1.5 s: Lan lowers herself to sit on the ground at frame left. 1.5-3.0 s: she settles with the tin in
    her lap and almost smiles. The macaque keeps eating. Camera locked off.'
  clip_length_s: 4
  risks:
  - 'two subjects in one wide: still and calm'
```


### SC04 — EXT. NIGHT MARKET - LAN'S NOODLE STALL - LATER


#### Direction
Source: `06_direction/SC04_direction.md`

##### SC04 Direction: EXT. NIGHT MARKET - LAN'S NOODLE STALL - LATER

Approved under the autonomy policy (see PRODUCTION_LOG.md).

###### Must-see story facts
- Closing: lanterns dimmed, most stalls dark.
- The open tin sits on the shelf beside the photo.
- Lan turns the chipped saucer face-up and sets it on the counter edge.
- She knocks twice on the tin's lid.
- On the lantern wire the macaque tilts its head, then drops down to the saucer.
- Lan turns off the last light.

###### Analysis
| Character | Wants | Obstacle | Tactics |
|---|---|---|---|
| Lan | To keep the ritual, now openly | Nothing: she has accepted it | Sets the saucer, knocks |
| Macaque | The ritual | Nothing | Waits on the wire, answers the knock |

- Subtext: the numb routine has become a shared one. Grief is shared, not gone.
- Turn: the drop. The ritual works.
- Audience position: same as Lan; the audience knows the knock will bring the macaque.
- Visual thesis: SC01 mirrored with the shelf now open. Same camera position, same frame, same lanterns, quieter and emptier, and this time Lan looks at the shelf. Carried by SH010 (matches SC01-SH010), SH020 and SH030 (Lan's eyes on the saucer and the tin).
- Genre playbook: drama (quiet resolution). Exception: a brief comic beat in the head tilt.

###### Beats
| Beat | Change | Driven by | Screenplay lines |
|---|---|---|---|
| B1 | The stall at closing, the open tin | Setting | "Closing. Lanterns dimmed..." and "The open tin sits on the shelf..." |
| B2 | The saucer face-up | Lan | "Lan turns the chipped saucer face-up..." |
| B3 | The knock | Lan | "She knocks twice on the tin's lid." |
| B4 | The answer | Macaque | "On the lantern wire above, the macaque tilts its head. It drops down to the saucer." |
| B5 | Lights out | Lan | "Lan turns off the last light." |

###### Blocking
Floor plan: LOC-NIGHT-MARKET, stall L1, shelf L2, wire L3, closing variant.
- Start: Lan at the shelf on the east end of the stall (screen left), facing south toward the shelf. The pot is not on the burner (ASSUMPTION carried from props: removed). The macaque is not visible.
- B2: Lan turns the STALL saucer face-up and carries it the short way to the counter edge below the wire.
- B3: she turns back to the shelf and knocks on the tin lid with two knuckles of her right hand.
- B4: the macaque appears on the wire above the counter edge, tilts its head, and drops down to the saucer.
- B5: Lan reaches to the wall switch on the east post (screen left) and switches off the bulb.
- End positions: the macaque at the saucer on the counter edge, Lan at the east post; the frame goes dark.
- Axis of action and camera side: the counter line, east to west; the camera is in the lane, north of the counter, looking south (as SC01).
- Screen direction in/out: Lan stays within the stall; nothing leaves the frame.

###### Performance
| Beat | Character | Playable action | Visible behavior |
|---|---|---|---|
| B2 | Lan | To make room | Turns the saucer slowly, looks at its chip, sets it down on the counter edge with care |
| B3 | Lan | To call | Two even knocks with her knuckles; she waits |
| B4 | Macaque | To check, then to come | Tilts its head to one side, then drops lightly onto the counter beside the saucer |
| B5 | Lan | To close the day | Reaches to the switch without hurry; the end of her routine is not numb |

###### Shot list
| ID | Size | Angle | Move | Subject | Action (end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC04-SH010 | WS | eye-level | static | The dimmed stall, mirror of SC01-SH010 | Closing: stalls dark, few lanterns lit; Lan at the shelf; the open tin on the shelf beside the photo; ends still | same composition as SC01-SH010: stall centre, red lanterns above, empty lane | normal | honey tungsten, dimmed | 2.5 | The mirror; the tin is open | cut |
| SC04-SH020 | CU | eye-level | static | The saucer | Lan's right hand turns the saucer face-up and sets it on the counter edge; ends with the saucer face-up, chip at 3 o'clock | saucer centre, tin soft behind | short telephoto, shallow | honey tungsten | 2.0 | Counterpart of SC01-SH030 | cut |
| SC04-SH030 | CU | eye-level | static | Lan's knuckles and the tin | She knocks twice on the tin's lid; ends with her hand resting on the lid | tin lid centre, photo soft beside | short telephoto, shallow | warm, dim | 2.0 | Counterpart of SC01-SH020: touch becomes knock | cut |
| SC04-SH040 | MS | slightly low | static | The macaque on the wire | Tilts its head, then drops to the counter edge by the saucer; ends sitting beside the saucer | wire top, saucer bottom, macaque in between | normal | warm lantern rim, dark above | 2.5 | The answer | cut |
| SC04-SH050 | WS | eye-level | static | Lan at the east post | Lan reaches for the switch on the east post and turns off the last light; ends with the frame falling to black | stall centre, macaque at the saucer, Lan at the left | normal | the stall bulb goes out, last glow in the lanterns | 2.0 | Close | cut-to-black |

Total: 11.0 s vs estimate 10 s (+10%).

###### Coverage and rhythm
The first three shots repeat SC01's shelf pattern in the same order (wide, hand on tin, saucer), in a different order of action but the same frames, so the audience feels the mirror. Rhythm is slower and the holds longer than SC01. The macaque appears once, in SH040, and does not share a frame with Lan until the final wide.

###### AI risks and mitigations
| Shot | Risk | Mitigation |
|---|---|---|
| SH010 | Matching SC01-SH010 composition | Use the SC01-SH010 keyframe as a reference image; same camera |
| SH020 | Saucer state flip (face-up) | Face-down in the start frame, face-up in the end frame (first-last-frame) |
| SH040 | Drop from a wire | Short drop; only the macaque in frame; landing at the saucer |
| SH050 | Light going out | Light change as the end frame; a fade-to-black in post if needed |

###### Specialist and VFX flags
- action-director: not required.
- animation-director: not applicable.
- vfx: light-out and final fade (SH050), may be done in grade.

###### Handoff
- Produced: SC04_direction@1 (APPROVED under autonomy policy), 5 shots, 11.0 s
- Built from: screenplay@1, style_bible@1, LOC-NIGHT-MARKET@1, CH-LAN@1, CH-MACAQUE@1, props@1, SC01_direction@1
- For cinematographer: same camera position as SC01; honey tungsten dimmed; SH050 the bulb is the last motivated light.
- For script-supervisor: tin OPEN (lid set back loosely, unsealed, offset); STALL saucer ends FACEUP on the counter edge; graze on right forearm; the pot is absent; the macaque is the same animal.
- Open items: ASSUMPTION: the pot is not on the burner in SC04 (props@1).
- Next: cinematographer, script-supervisor


#### Camera and lighting
Source: `07_camera/SC04_camera.md`

##### SC04 Camera and Lighting: EXT. NIGHT MARKET - LAN'S NOODLE STALL - LATER

Approved under the autonomy policy (see PRODUCTION_LOG.md).

Color script row: honey tungsten + umber; open-tin brass and saucer cream accents; warm, dimmed; medium-low saturation; low-medium key. Time/weather: night, dry. Format: 16:9, 24 fps, 180-degree shutter feel (natural motion blur), spherical prime look, 35 mm film emulation (fine grain, soft halation), mild natural vignette, round warm bokeh.

###### Lighting setups

####### Setup SC04-L1: Closing: dimmed honey warmth, last light
| Light | Source (set) | Direction (plan + camera-relative) | Quality | Color / K | Notes |
|---|---|---|---|---|---|
| Key | Stall bulb on the east post, dimmed (low wattage) | As SC01: east, 45 degrees above eye line, camera-left, high | Hard-ish, small source | 2400 K warm, about 1.5 stops under SC01 | The wall switch that Lan turns off in SH050 |
| Fill | Bounce from the empty counter and the few lit lanterns | Camera-right, low | Soft, weak | 2600 K amber, about 4:1 | No steam: the pot is gone |
| Rim | The three red lanterns dimmed on the wire | Top-back | Soft | Red #B8362B warm into 2400 K | Edge light on the macaque on the wire |
| Practicals | Stall bulb, three dimmed red lanterns, a few distant lanterns | In frame | Round bokeh | Amber, honey, red | Neighbouring stalls shuttered: roll-down shutters, no bulbs |
| Atmosphere | Almost none; clear air | - | - | - | Lane empty, damp ground with slight sheen |

Contrast feel: Medium: gentle, soft highlights; shadow side falls to umber, detail near #14100E.
Changes during scene: SH050: the stall bulb goes out; the shot falls to the last glow of the red lanterns, then black.

```
camera (N of counter, looking S) - same position as SC01
 screen-L (E post: dimmed bulb KEY, switch)   shelf: tin (open), photo   counter edge: saucer   wire: macaque
 dimmed red lanterns overhead = rim; shuttered stalls dark
```

###### Shots
| Shot | Setup | Lens (mm FF) | Aperture / DOF | Focus plan | Height m | Distance m | Position on plan | Support | Movement | Movement execution | Generator wording |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC04-SH010 | SC04-L1 | 28 | f/4, medium-deep | Lan and the shelf | 1.5 | 4.5 | Same as SC01-SH010: lane, 4.5 m north of the counter, on the stall's centre line | tripod | static | Locked off. | 28 mm wide, the same frame as the opening but quieter: dimmed lanterns, empty lane, an open tin on the shelf |
| SC04-SH020 | SC04-L1 | 85 | f/2, shallow | Saucer rim and chip | 1.4 | 2.5 | Same as SC01-SH030 | tripod | static | Locked off. The saucer turns face-up and is set on the counter edge. | 85 mm close, the chipped saucer turning face-up, honey tungsten glow |
| SC04-SH030 | SC04-L1 | 85 | f/2, shallow | Knuckles and the tin lid | 1.4 | 2.5 | Same as SC01-SH020 | tripod | static | Locked off. Two knocks. | 85 mm close, knuckles knocking twice on a green tin lid with two brass spots, framed photo soft beside it |
| SC04-SH040 | SC04-L1 | 50 | f/2.8, medium | The macaque | 1.0 | 4.5 | In the lane, 4.5 m north of the counter edge, slightly low | tripod | static | Locked off. The macaque drops about 1.2 m to the counter edge. | 50 mm, the macaque on the lantern wire tilting its head then dropping to a face-up saucer |
| SC04-SH050 | SC04-L1 | 35 | f/4, medium-deep | Lan at the east post and the stall bulb | 1.5 | 4.5 | Same as SC04-SH010 | tripod | static | Locked off. The bulb goes out; the frame falls to black over the last 0.5 s. | 35 mm wide, the last bulb switched off, the macaque at the saucer in the final glow, then darkness |

###### Consistency notes
- Key side: the dimmed stall bulb stays camera-left (east), the same side as SC01. The final shot goes dark by the bulb switching off at the east post.
- Matched pair: SC04-SH010/SH050 = SC01-SH010 camera; SC04-SH020 = SC01-SH030; SC04-SH030 = SC01-SH020.
- Eyeline heights: as SC01.

###### Proposals to the director and production-designer
- PROPOSAL: none.

###### Handoff
- Produced: SC04_camera@1 (APPROVED under autonomy policy), 1 lighting setup (SC04-L1), 5 shots specified
- Built from: SC04_direction@1, LOC-NIGHT-MARKET@1, style_bible@1
- Open items: see proposals above (no new light sources added to any set)
- Conflicts: none
- Next: script-supervisor, production-manager


#### Continuity
See `CONT-SC04` in section 11.


#### Shot records
Source: `08_master/shots/SC04.md`

##### SC04 Shot Records: EXT. NIGHT MARKET - LAN'S NOODLE STALL - LATER

Compiled by the production-manager from the direction, camera and continuity documents. 5 shots, 11.0 s. Frame text pastes the identity, costume, prop, location and style locks verbatim.

###### SC04-SH010

```yaml
record: shot
id: SC04-SH010
scene: SC04
status: REVIEW
version: 2
depends_on:
- SC04_direction@1
- SC04_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: 'The mirror: the tin is open'
screenplay_ref: SC04, action lines 'Closing. Lanterns dimmed. Most stalls dark. The open tin sits on the shelf,
  beside the photo.'
duration_s: 2.5
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: frame left of centre at the shelf, full figure, about 4.5 m from camera
  facing: toward the shelf at frame left
  action: stands at the shelf and looks at it
  expression_start: calm
  expression_end: calm, lifting her hand to the saucer
  eyeline: to the shelf
props:
- id: PR-TIN
  state: PR-TIN:LID-ON
  position: on the shelf at frame left, lid loose and offset
- id: PR-PHOTO
  state: PR-PHOTO:STANDING
  position: on the shelf beside the tin
- id: PR-SAUCER-STALL
  state: PR-SAUCER-STALL:FACEDOWN
  position: on the shelf at the west end, face-down
location:
  id: LOC-NIGHT-MARKET
  area: 'Lan''s stall at closing: shelf, counter and lantern wire; neighbouring stalls shuttered'
  time_of_day: night
  weather: dry
frame:
  foreground: out-of-focus counter edge
  midground: Lan at the shelf, stall bulb dimmed
  background: shuttered corrugated stalls, an empty lane, a few dimmed lanterns
  composition: 'same composition as SC01-SH010: stall centred, red lanterns across the top, empty lane'
camera:
  shot_size: WS
  angle: eye-level
  height_m: 1.5
  distance_m: 4.5
  position: 'Same as SC01-SH010: lane, 4.5 m north of the counter, on the stall''s centre line'
  lens_mm: 28
  aperture: f/4
  depth_of_field: medium-deep
  focus: Lan and the shelf
  movement: static
  movement_execution: Locked off.
  support: tripod
  setup: SC04-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Dimmed warm 2400 K stall bulb from camera-left (east), high, same side as SC01
  fill: Weak amber bounce from the counter, camera-right, about 4:1
  rim: Dimmed red lanterns top-back on the wire
  practicals: Stall bulb on the east post, three dimmed red lanterns, a few distant lanterns; other stalls shuttered
  shadows: Soft, falling to camera-right and down, umber detail
  palette:
  - 'honey tungsten #F2B35E'
  - 'night-market umber #2A1D17'
  - 'tin brass #C9A24B'
  - 'steam warm white #F1E4CF'
screen_direction: Camera north looking south, same as SC01; shelf at frame left
start_state: Lan at the shelf, looking at it
end_state: Lan's right hand lifting toward the saucer
action_timeline:
- '0.0-1.5 s: Lan stands at the shelf'
- '1.5-2.5 s: her right hand lifts toward the saucer'
dialogue: []
sound: 'sfx.md@1: SFX-SC04-001; ambience bed SC04. Lane is quiet: a few distant shutter rattles, a bulb hum; Lan''s soft step'
music: 'none: silence or market source sound only (music.md@1)'
vfx: none
transition_in: cut from SC03-SH120
transition_out: cut
continuity:
- Pot absent from the burner (ASSUMPTION from props@1)
- Saucer still FACEDOWN
- Lan GRAZED, dust, loose strands
- Tin LID-ON, loose, 'open tin'
generation:
  mode: image-to-video
  start_frame: 'Wide shot, eye-level angle, 28 mm lens at f/4, camera 1.5 m high, medium-deep depth of field, 28
    mm wide, the same frame as the opening but quieter: dimmed lanterns, empty lane, an open tin on the shelf. Lan,
    a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark
    brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot
    at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers,
    dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth
    stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas
    slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED:
    a red surface graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair
    strands, light dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame
    left of centre at the shelf, full figure, about 4.5 m from camera; toward the shelf at frame left; standing
    at the shelf, looking at it; expression: calm. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer
    worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top,
    small dents on the side. No label, no writing, no handle. State LID-ON: on the shelf at frame left, lid loose
    and offset. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden frame with a thin glass
    front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing, no date, no caption.
    State STANDING: on the shelf beside the tin. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue
    line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no
    writing. State FACEDOWN: on the shelf at the west end, face-down. Covered open-air night market lane, 3 m wide,
    of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp
    swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small
    noodle stall with a plank shelf, steel stockpot and wok burner. Area: Lan''s stall at closing: shelf, counter
    and lantern wire; neighbouring stalls shuttered. Foreground: out-of-focus counter edge. Midground: Lan at the
    shelf, stall bulb dimmed. Background: shuttered corrugated stalls, an empty lane, a few dimmed lanterns. Composition:
    same composition as SC01-SH010: stall centred, red lanterns across the top, empty lane. Light: key Dimmed warm
    2400 K stall bulb from camera-left (east), high, same side as SC01; fill Weak amber bounce from the counter,
    camera-right, about 4:1; rim Dimmed red lanterns top-back on the wire; practicals Stall bulb on the east post,
    three dimmed red lanterns, a few distant lanterns; other stalls shuttered; shadows Soft, falling to camera-right
    and down, umber detail. Night, dry. Palette: honey tungsten #F2B35E, night-market umber #2A1D17, tin brass #C9A24B,
    steam warm white #F1E4CF. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in
    Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber
    and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field,
    soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Wide shot, eye-level angle, 28 mm lens at f/4, camera 1.5 m high, medium-deep depth of field, 28 mm
    wide, the same frame as the opening but quieter: dimmed lanterns, empty lane, an open tin on the shelf. Lan,
    a Southeast Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark
    brown almond eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot
    at the nape. Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers,
    dark canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth
    stains, over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas
    slip-on shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED:
    a red surface graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair
    strands, light dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame
    left of centre at the shelf, full figure, about 4.5 m from camera; toward the shelf at frame left; standing
    at the shelf, her right hand lifting toward the saucer; expression: calm, lifting her hand to the saucer. A
    round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit
    lid with exactly two bright worn brass spots side by side on top, small dents on the side. No label, no writing,
    no handle. State LID-ON: on the shelf at frame left, lid loose and offset. A small 13 by 18 cm faded color photograph
    in a plain dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly
    woman tapping a tin. No writing, no date, no caption. State STANDING: on the shelf beside the tin. A small 12
    cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the
    rim at the 3 o''clock position. Plain, no pattern, no writing. State FACEDOWN: on the shelf at the west end,
    face-down. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and
    faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper
    lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and
    wok burner. Area: Lan''s stall at closing: shelf, counter and lantern wire; neighbouring stalls shuttered. Foreground:
    out-of-focus counter edge. Midground: Lan at the shelf, stall bulb dimmed. Background: shuttered corrugated
    stalls, an empty lane, a few dimmed lanterns. Composition: same composition as SC01-SH010: stall centred, red
    lanterns across the top, empty lane. Light: key Dimmed warm 2400 K stall bulb from camera-left (east), high,
    same side as SC01; fill Weak amber bounce from the counter, camera-right, about 4:1; rim Dimmed red lanterns
    top-back on the wire; practicals Stall bulb on the east post, three dimmed red lanterns, a few distant lanterns;
    other stalls shuttered; shadows Soft, falling to camera-right and down, umber detail. Night, dry. Palette: honey
    tungsten #F2B35E, night-market umber #2A1D17, tin brass #C9A24B, steam warm white #F1E4CF. Photoreal live-action
    cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-1.5 s: Lan stands at the shelf, calm, looking at it. 1.5-2.5 s: her right hand lifts toward the saucer.
    Camera locked off. Dimmed red lanterns sway slightly.'
  clip_length_s: 4
  risks:
  - match the SC01-SH010 composition by using its keyframe as a reference
```

###### SC04-SH020

```yaml
record: shot
id: SC04-SH020
scene: SC04
status: REVIEW
version: 3
depends_on:
- SC04_direction@1
- SC04_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: Counterpart of the opening saucer shot
screenplay_ref: SC04, action line 'Lan turns the chipped saucer face-up and sets it on the counter edge.'
duration_s: 2.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: only her right hand and wrist enter from the lower right; the graze visible on the forearm
  facing: n/a (hand only)
  action: turns the saucer face-up and sets it on the counter edge
  expression_start: out of frame (hand only)
  expression_end: out of frame (hand only)
  eyeline: none
props:
- id: PR-SAUCER-STALL
  state: PR-SAUCER-STALL:FACEUP
  position: centre; starts FACEDOWN, ends face-up on the counter edge with the chip at 3 o'clock
- id: PR-TIN
  state: PR-TIN:LID-ON
  position: soft behind at frame left
location:
  id: LOC-NIGHT-MARKET
  area: the east end of the counter below the wire
  time_of_day: night
  weather: dry
frame:
  foreground: none
  midground: the saucer
  background: soft tin and photo
  composition: saucer centre
camera:
  shot_size: CU
  angle: eye-level
  height_m: 1.4
  distance_m: 2.5
  position: Same as SC01-SH030
  lens_mm: 85
  aperture: f/2
  depth_of_field: shallow
  focus: Saucer rim and chip
  movement: static
  movement_execution: Locked off. The saucer turns face-up and is set on the counter edge.
  support: tripod
  setup: SC04-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Dimmed warm 2400 K stall bulb from camera-left (east), high, same side as SC01
  fill: Weak amber bounce from the counter, camera-right, about 4:1
  rim: Dimmed red lanterns top-back on the wire
  practicals: Stall bulb on the east post, three dimmed red lanterns, a few distant lanterns; other stalls shuttered
  shadows: Soft, falling to camera-right and down, umber detail
  palette:
  - 'honey tungsten #F2B35E'
  - 'night-market umber #2A1D17'
  - 'tin brass #C9A24B'
  - 'steam warm white #F1E4CF'
screen_direction: Camera 20 degrees off axis north-west; hand enters from the right
start_state: the saucer face-down, a hand on it
end_state: the saucer face-up on the counter edge, chip at 3 o'clock
action_timeline:
- '0.0-1.0 s: she turns it face-up'
- '1.0-2.0 s: she sets it on the counter edge and withdraws'
dialogue: []
sound: 'sfx.md@1: SFX-SC04-002; ambience bed SC04. Saucer turned face-up and set down: a clean ceramic scrape and a small click on the counte'
music: 'none: silence or market source sound only (music.md@1)'
vfx: VFX-SC04-SH020
transition_in: cut from SC04-SH010
transition_out: cut
continuity:
- PR-SAUCER-STALL FACEDOWN to FACEUP; graze visible on the right forearm
generation:
  mode: first-last-frame
  start_frame: 'Close-up, eye-level angle, 85 mm lens at f/2, camera 1.4 m high, shallow depth of field, 85 mm close,
    the chipped saucer turning face-up, honey tungsten glow. Lan, a Southeast Asian woman in her early 30s, 160
    cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small
    nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over
    a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no
    makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt
    with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic.
    No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm long on
    the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron hem and
    trouser knees, flushed face with a light sweat sheen. Position: only her right hand and wrist enter from the
    lower right; the graze visible on the forearm; only the hand and wrist are in frame, no face and no body; her hand on the face-down saucer. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim
    and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. State FACEUP:
    centre; starts FACEDOWN, ends face-up on the counter edge with the chip at 3 o''clock. A round dented tin, 16
    cm across and 10 cm tall, dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two
    bright worn brass spots side by side on top, small dents on the side. No label, no writing, no handle. State
    LID-ON: soft behind at frame left. Covered open-air night market lane, 3 m wide, of timber-frame food stalls
    with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut
    wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf,
    steel stockpot and wok burner. Area: the east end of the counter below the wire. Foreground: none. Midground:
    the saucer. Background: soft tin and photo. Composition: saucer centre. Light: key Dimmed warm 2400 K stall
    bulb from camera-left (east), high, same side as SC01; fill Weak amber bounce from the counter, camera-right,
    about 4:1; rim Dimmed red lanterns top-back on the wire; practicals Stall bulb on the east post, three dimmed
    red lanterns, a few distant lanterns; other stalls shuttered; shadows Soft, falling to camera-right and down,
    umber detail. Night, dry. Palette: honey tungsten #F2B35E, night-market umber #2A1D17, tin brass #C9A24B, steam
    warm white #F1E4CF. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast
    Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber and honey
    tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field, soft-focus
    crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Close-up, eye-level angle, 85 mm lens at f/2, camera 1.4 m high, shallow depth of field, 85 mm close,
    the chipped saucer turning face-up, honey tungsten glow. Lan, a Southeast Asian woman in her early 30s, 160
    cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond eyes, straight thick brows, small
    nose, warm medium-tan skin. Straight black hair in a low knot at the nape. Indigo-grey cotton work apron over
    a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark canvas slip-on shoes. No jewelry, no
    makeup. Indigo-grey cotton bib apron with waist ties and small broth stains, over an off-white collarless shirt
    with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on shoes, plain dark hair elastic.
    No patterns, logos or text on any garment. Condition: state GRAZED: a red surface graze about 12 cm long on
    the outer right forearm with no blood drips, two to three loose hair strands, light dust on the apron hem and
    trouser knees, flushed face with a light sweat sheen. Position: only her right hand and wrist enter from the
    lower right; the graze visible on the forearm; only the hand and wrist are in frame, no face and no body; her hand withdrawing from the face-up saucer
    set on the counter edge. A small 12 cm cream-glazed ceramic saucer with
    a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain,
    no pattern, no writing. State FACEUP: centre; starts FACEDOWN, ends face-up on the counter edge with the chip
    at 3 o''clock. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and corners,
    a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the side. No
    label, no writing, no handle. State LID-ON: soft behind at frame left. Covered open-air night market lane, 3
    m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards,
    damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above
    a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the east end of the counter below
    the wire. Foreground: none. Midground: the saucer. Background: soft tin and photo. Composition: saucer centre.
    Light: key Dimmed warm 2400 K stall bulb from camera-left (east), high, same side as SC01; fill Weak amber bounce
    from the counter, camera-right, about 4:1; rim Dimmed red lanterns top-back on the wire; practicals Stall bulb
    on the east post, three dimmed red lanterns, a few distant lanterns; other stalls shuttered; shadows Soft, falling
    to camera-right and down, umber detail. Night, dry. Palette: honey tungsten #F2B35E, night-market umber #2A1D17,
    tin brass #C9A24B, steam warm white #F1E4CF. Photoreal live-action cinema, 35 mm film grain with soft halation,
    16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and
    stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow
    depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text,
    logos or watermarks.'
  motion: '0-1.0 s: Lan''s right hand turns the saucer face-up. 1.0-2.0 s: she sets it on the counter edge and withdraws
    her hand. Camera static.'
  clip_length_s: 4
  clip_length_note: 'TO-VERIFY: Veo 3.1 first-last-frame clip lengths are not confirmed (user, 2026-10-19); this value is the plan, not a fact'
  risks:
  - saucer flip in end frame
```

###### SC04-SH030

```yaml
record: shot
id: SC04-SH030
scene: SC04
status: REVIEW
version: 3
depends_on:
- SC04_direction@1
- SC04_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: Touch becomes knock
screenplay_ref: SC04, action line 'She knocks twice on the tin's lid. Knock. Knock.'
duration_s: 2.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: only her right hand and wrist enter from the lower right; the graze on the forearm
  facing: n/a (hand only)
  action: knocks twice on the lid with two knuckles
  expression_start: out of frame (hand only)
  expression_end: out of frame (hand only)
  eyeline: none
props:
- id: PR-TIN
  state: PR-TIN:LID-ON
  position: frame centre on the shelf, lid loose and offset, the two brass spots visible
- id: PR-PHOTO
  state: PR-PHOTO:STANDING
  position: soft at the right edge
location:
  id: LOC-NIGHT-MARKET
  area: the shelf, east end
  time_of_day: night
  weather: dry
frame:
  foreground: none
  midground: the tin lid
  background: soft photo at the right edge, dimmed lanterns
  composition: lid centre, photo soft at the right edge
camera:
  shot_size: CU
  angle: eye-level
  height_m: 1.4
  distance_m: 2.5
  position: Same as SC01-SH020
  lens_mm: 85
  aperture: f/2
  depth_of_field: shallow
  focus: Knuckles and the tin lid
  movement: static
  movement_execution: Locked off. Two knocks.
  support: tripod
  setup: SC04-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Dimmed warm 2400 K stall bulb from camera-left (east), high, same side as SC01
  fill: Weak amber bounce from the counter, camera-right, about 4:1
  rim: Dimmed red lanterns top-back on the wire
  practicals: Stall bulb on the east post, three dimmed red lanterns, a few distant lanterns; other stalls shuttered
  shadows: Soft, falling to camera-right and down, umber detail
  palette:
  - 'honey tungsten #F2B35E'
  - 'night-market umber #2A1D17'
  - 'tin brass #C9A24B'
  - 'steam warm white #F1E4CF'
screen_direction: Camera 20 degrees off axis; hand enters from the right
start_state: knuckles above the lid
end_state: hand resting on the lid
action_timeline:
- '0.0-0.6 s: first knock'
- '0.6-1.2 s: second knock'
- '1.2-2.0 s: hand rests on the lid'
dialogue: []
sound: 'sfx.md@1: SFX-SC04-003; ambience bed SC04. TWO KNOCKS of Lan''s knuckles on the lid: same sound as SC03-SH100, now dry and calm in the'
music: 'none: silence or market source sound only (music.md@1)'
vfx: 'flag for vfx-supervisor: the photo stays soft'
transition_in: cut from SC04-SH020
transition_out: cut
continuity:
- Tin LID-ON, loose
generation:
  mode: image-to-video
  start_frame: 'Close-up, eye-level angle, 85 mm lens at f/2, camera 1.4 m high, shallow depth of field, 85 mm close,
    knuckles knocking twice on a green tin lid with two brass spots, framed photo soft beside it. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: only her right hand
    and wrist enter from the lower right; the graze on the forearm; only the hand and wrist are in frame, no face and no body; right knuckles raised above
    the lid. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer
    worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side by side on top,
    small dents on the side. No label, no writing, no handle. State LID-ON: frame centre on the shelf, lid loose
    and offset, the two brass spots visible. A small 13 by 18 cm faded color photograph in a plain dark-brown wooden
    frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping a tin. No writing,
    no date, no caption. State STANDING: soft at the right edge. Covered open-air night market lane, 3 m wide, of
    timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign boards, damp swept
    concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns above a small noodle
    stall with a plank shelf, steel stockpot and wok burner. Area: the shelf, east end. Foreground: none. Midground:
    the tin lid. Background: soft photo at the right edge, dimmed lanterns. Composition: lid centre, photo soft
    at the right edge. Light: key Dimmed warm 2400 K stall bulb from camera-left (east), high, same side as SC01;
    fill Weak amber bounce from the counter, camera-right, about 4:1; rim Dimmed red lanterns top-back on the wire;
    practicals Stall bulb on the east post, three dimmed red lanterns, a few distant lanterns; other stalls shuttered;
    shadows Soft, falling to camera-right and down, umber detail. Night, dry. Palette: honey tungsten #F2B35E, night-market
    umber #2A1D17, tin brass #C9A24B, steam warm white #F1E4CF. Photoreal live-action cinema, 35 mm film grain with
    soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light
    bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows.
    Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without
    text, logos or watermarks.'
  end_frame: 'Close-up, eye-level angle, 85 mm lens at f/2, camera 1.4 m high, shallow depth of field, 85 mm close,
    knuckles knocking twice on a green tin lid with two brass spots, framed photo soft beside it. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: only her right hand
    and wrist enter from the lower right; the graze on the forearm; only the hand and wrist are in frame, no face and no body; the hand resting on the lid
    after two knocks. A round dented tin, 16 cm across and 10 cm tall, dark
    green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots side
    by side on top, small dents on the side. No label, no writing, no handle. State LID-ON: frame centre on the
    shelf, lid loose and offset, the two brass spots visible. A small 13 by 18 cm faded color photograph in a plain
    dark-brown wooden frame with a thin glass front, an easel stand behind, showing a laughing elderly woman tapping
    a tin. No writing, no date, no caption. State STANDING: soft at the right edge. Covered open-air night market
    lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign
    boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns
    above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the shelf, east end. Foreground:
    none. Midground: the tin lid. Background: soft photo at the right edge, dimmed lanterns. Composition: lid centre,
    photo soft at the right edge. Light: key Dimmed warm 2400 K stall bulb from camera-left (east), high, same side
    as SC01; fill Weak amber bounce from the counter, camera-right, about 4:1; rim Dimmed red lanterns top-back
    on the wire; practicals Stall bulb on the east post, three dimmed red lanterns, a few distant lanterns; other
    stalls shuttered; shadows Soft, falling to camera-right and down, umber detail. Night, dry. Palette: honey tungsten
    #F2B35E, night-market umber #2A1D17, tin brass #C9A24B, steam warm white #F1E4CF. Photoreal live-action cinema,
    35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  motion: '0-0.6 s: Lan''s right knuckles knock the lid once. 0.6-1.2 s: a second knock. 1.2-2.0 s: her hand rests
    on the lid. Camera static.'
  clip_length_s: 4
  risks:
  - exactly two knocks
```

###### SC04-SH040

```yaml
record: shot
id: SC04-SH040
scene: SC04
status: REVIEW
version: 2
depends_on:
- SC04_direction@1
- SC04_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: The answer
screenplay_ref: SC04, action lines 'On the lantern wire above, the macaque tilts its head. It drops down to the
  saucer.'
duration_s: 2.5
characters:
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: frame centre-top on the wire, then dropping to the counter edge at the lower frame
  facing: three-quarter facing frame left, notched LEFT ear toward the camera
  action: tilts its head, then drops lightly to the counter edge beside the saucer
  expression_start: curious, head tilted
  expression_end: sitting beside the saucer, calm
  eyeline: down to the saucer
props:
- id: PR-SAUCER-STALL
  state: PR-SAUCER-STALL:FACEUP
  position: on the counter edge at the lower frame, chip at 3 o'clock
location:
  id: LOC-NIGHT-MARKET
  area: the wire above the east end of the counter
  time_of_day: night
  weather: dry
frame:
  foreground: none
  midground: the macaque and the saucer
  background: dimmed red lanterns, dark above
  composition: wire at the top, saucer at the bottom, the macaque between
camera:
  shot_size: MS
  angle: low
  height_m: 1.0
  distance_m: 4.5
  position: In the lane, 4.5 m north of the counter edge, slightly low
  lens_mm: 50
  aperture: f/2.8
  depth_of_field: medium
  focus: The macaque
  movement: static
  movement_execution: Locked off. The macaque drops about 1.2 m to the counter edge.
  support: tripod
  setup: SC04-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Dimmed warm 2400 K stall bulb from camera-left (east), high, same side as SC01
  fill: Weak amber bounce from the counter, camera-right, about 4:1
  rim: Dimmed red lanterns top-back on the wire
  practicals: Stall bulb on the east post, three dimmed red lanterns, a few distant lanterns; other stalls shuttered
  shadows: Soft, falling to camera-right and down, umber detail
  palette:
  - 'honey tungsten #F2B35E'
  - 'night-market umber #2A1D17'
  - 'tin brass #C9A24B'
  - 'steam warm white #F1E4CF'
screen_direction: Static, vertical move
start_state: the macaque on the wire, head tilted
end_state: the macaque sitting beside the saucer
action_timeline:
- '0.0-1.2 s: head tilt'
- '1.2-1.8 s: it drops'
- '1.8-2.5 s: it settles beside the saucer'
dialogue: []
sound: 'sfx.md@1: SFX-SC04-004; ambience bed SC04. Macaque lands lightly on the counter, paw taps; a quiet chirp-like murmur (non-speech)'
music: 'M04 close (music.md@1)'
vfx: none
transition_in: cut from SC04-SH030
transition_out: cut
continuity:
- Same macaque, notch on its own left ear
- Saucer FACEUP on the counter edge
generation:
  mode: first-last-frame
  start_frame: 'Medium shot, low angle, 50 mm lens at f/2.8, camera 1.0 m high, medium depth of field, 50 mm, the
    macaque on the lantern wire tilting its head then dropping to a face-up saucer. A wild adult long-tailed macaque,
    about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face
    with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: frame centre-top on the wire, then dropping to the
    counter edge at the lower frame; three-quarter facing frame left, notched LEFT ear toward the camera; on the
    wire, head tilted to one side; expression: curious, head tilted. A small 12 cm cream-glazed ceramic saucer with
    a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain,
    no pattern, no writing. State FACEUP: on the counter edge at the lower frame, chip at 3 o''clock. Covered open-air
    night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank
    unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three
    red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the wire above
    the east end of the counter. Foreground: none. Midground: the macaque and the saucer. Background: dimmed red
    lanterns, dark above. Composition: wire at the top, saucer at the bottom, the macaque between. Light: key Dimmed
    warm 2400 K stall bulb from camera-left (east), high, same side as SC01; fill Weak amber bounce from the counter,
    camera-right, about 4:1; rim Dimmed red lanterns top-back on the wire; practicals Stall bulb on the east post,
    three dimmed red lanterns, a few distant lanterns; other stalls shuttered; shadows Soft, falling to camera-right
    and down, umber detail. Night, dry. Palette: honey tungsten #F2B35E, night-market umber #2A1D17, tin brass #C9A24B,
    steam warm white #F1E4CF. Photoreal live-action cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in
    Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and stall steam: amber
    and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow depth of field,
    soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Medium shot, low angle, 50 mm lens at f/2.8, camera 1.0 m high, medium depth of field, 50 mm, the
    macaque on the lantern wire tilting its head then dropping to a face-up saucer. A wild adult long-tailed macaque,
    about 45 cm body and a 50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face
    with a grey-flecked muzzle, amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped
    notch in the top rim of its own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands.
    No collar, no clothing. Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark
    grey-pink palms, slightly dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories.
    Condition: state BASE: dry, slightly dusty fur. Position: frame centre-top on the wire, then dropping to the
    counter edge at the lower frame; three-quarter facing frame left, notched LEFT ear toward the camera; sitting
    on the counter edge beside the face-up saucer; expression: sitting beside the saucer, calm. A small 12 cm cream-glazed
    ceramic saucer with a thin dark-blue line around the rim and one small crescent chip in the rim at the 3 o''clock
    position. Plain, no pattern, no writing. State FACEUP: on the counter edge at the lower frame, chip at 3 o''clock.
    Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas
    roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper lanterns and
    bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and wok burner.
    Area: the wire above the east end of the counter. Foreground: none. Midground: the macaque and the saucer. Background:
    dimmed red lanterns, dark above. Composition: wire at the top, saucer at the bottom, the macaque between. Light:
    key Dimmed warm 2400 K stall bulb from camera-left (east), high, same side as SC01; fill Weak amber bounce from
    the counter, camera-right, about 4:1; rim Dimmed red lanterns top-back on the wire; practicals Stall bulb on
    the east post, three dimmed red lanterns, a few distant lanterns; other stalls shuttered; shadows Soft, falling
    to camera-right and down, umber detail. Night, dry. Palette: honey tungsten #F2B35E, night-market umber #2A1D17,
    tin brass #C9A24B, steam warm white #F1E4CF. Photoreal live-action cinema, 35 mm film grain with soft halation,
    16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and
    stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow
    depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text,
    logos or watermarks.'
  motion: '0-1.2 s: the macaque tilts its head on the wire. 1.2-1.8 s: it drops lightly to the counter edge. 1.8-2.5
    s: it settles beside the saucer. Camera static.'
  clip_length_s: 4
  clip_length_note: 'TO-VERIFY: Veo 3.1 first-last-frame clip lengths are not confirmed (user, 2026-10-19); this value is the plan, not a fact'
  risks:
  - short drop; one animal only
```

###### SC04-SH050

```yaml
record: shot
id: SC04-SH050
scene: SC04
status: REVIEW
version: 2
depends_on:
- SC04_direction@1
- SC04_camera@1
- continuity@1
- style_bible@1
- screenplay@1
purpose: Close
screenplay_ref: SC04, action line 'Lan turns off the last light.'
duration_s: 2.0
characters:
- id: CH-LAN
  costume: CO-LAN-01
  costume_state: 'state GRAZED: a red surface graze about 12 cm long on the outer right forearm with no blood drips,
    two to three loose hair strands, light dust on the apron hem and trouser knees, flushed face with a light sweat
    sheen'
  position: frame left at the east post, full figure, about 4.5 m from camera
  facing: toward the post at frame left
  action: reaches to the wall switch and turns off the last light
  expression_start: calm
  expression_end: calm, in silhouette
  eyeline: to the switch
- id: CH-MACAQUE
  costume: CO-MACAQUE-01
  costume_state: 'state BASE: dry, slightly dusty fur'
  position: frame centre-right, sitting beside the saucer on the counter edge
  facing: three-quarter facing frame left, notched LEFT ear toward the camera
  action: sits by the saucer
  expression_start: content
  expression_end: content, in silhouette
  eyeline: down to the saucer
props:
- id: PR-SAUCER-STALL
  state: PR-SAUCER-STALL:FACEUP
  position: on the counter edge, chip at 3 o'clock
- id: PR-TIN
  state: PR-TIN:LID-ON
  position: on the shelf at frame left
location:
  id: LOC-NIGHT-MARKET
  area: the stall at closing
  time_of_day: night
  weather: dry
frame:
  foreground: none
  midground: Lan at the east post, the macaque at the saucer
  background: shuttered stalls, dimmed red lanterns
  composition: same wide as SC04-SH010
camera:
  shot_size: WS
  angle: eye-level
  height_m: 1.5
  distance_m: 4.5
  position: Same as SC04-SH010
  lens_mm: 35
  aperture: f/4
  depth_of_field: medium-deep
  focus: Lan at the east post and the stall bulb
  movement: static
  movement_execution: Locked off. The bulb goes out; the frame falls to black over the last 0.5 s.
  support: tripod
  setup: SC04-L1
  frame_rate: 24 fps, 180-degree shutter feel (natural motion blur)
lighting:
  key: Dimmed warm 2400 K stall bulb from camera-left (east), high, same side as SC01
  fill: Weak amber bounce from the counter, camera-right, about 4:1
  rim: Dimmed red lanterns top-back on the wire
  practicals: Stall bulb on the east post, three dimmed red lanterns, a few distant lanterns; other stalls shuttered
  shadows: Soft, falling to camera-right and down, umber detail
  palette:
  - 'honey tungsten #F2B35E'
  - 'night-market umber #2A1D17'
  - 'tin brass #C9A24B'
  - 'steam warm white #F1E4CF'
screen_direction: Camera north looking south, same as SC01
start_state: Lan's hand on the switch, the stall bulb lit and dim
end_state: the frame nearly black, the last glow of the red lanterns, two silhouettes
action_timeline:
- '0.0-1.2 s: she turns the switch'
- '1.2-1.5 s: the bulb goes out'
- '1.5-2.0 s: the frame falls to black'
dialogue: []
sound: 'sfx.md@1: SFX-SC04-005; ambience bed SC04. Wall switch click, bulb hum cuts off; a last quiet breath of the lane; ambience held into '
music: 'M04 close (music.md@1)'
vfx: 'flag for vfx-supervisor: final fade to black may be a grade or editor fade'
transition_in: cut from SC04-SH040
transition_out: cut-to-black
continuity:
- Stall bulb ON to OFF at the east-post wall switch
- Macaque at the saucer
generation:
  mode: first-last-frame
  start_frame: 'Wide shot, eye-level angle, 35 mm lens at f/4, camera 1.5 m high, medium-deep depth of field, 35
    mm wide, the last bulb switched off, the macaque at the saucer in the final glow, then darkness. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame left at the
    east post, full figure, about 4.5 m from camera; toward the post at frame left; her hand on the switch, the
    bulb lit and dim; expression: calm. A wild adult long-tailed macaque, about 45 cm body and a 50 cm tail, olive-brown
    fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle, amber-brown eyes, a
    swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its own LEFT ear (on the
    viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing. Natural olive-brown
    fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly dusty coat, long
    tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state BASE: dry, slightly
    dusty fur. Position: frame centre-right, sitting beside the saucer on the counter edge; three-quarter facing
    frame left, notched LEFT ear toward the camera; sitting beside the saucer in the dim warm light; expression:
    content. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue line around the rim and one small crescent
    chip in the rim at the 3 o''clock position. Plain, no pattern, no writing. State FACEUP: on the counter edge,
    chip at 3 o''clock. A round dented tin, 16 cm across and 10 cm tall, dark green lacquer worn at the rim and
    corners, a friction-fit lid with exactly two bright worn brass spots side by side on top, small dents on the
    side. No label, no writing, no handle. State LID-ON: on the shelf at frame left. Covered open-air night market
    lane, 3 m wide, of timber-frame food stalls with corrugated-metal and faded canvas roofs, blank unlettered sign
    boards, damp swept concrete ground, a taut wire strung with paper lanterns and bare bulbs, three red lanterns
    above a small noodle stall with a plank shelf, steel stockpot and wok burner. Area: the stall at closing. Foreground:
    none. Midground: Lan at the east post, the macaque at the saucer. Background: shuttered stalls, dimmed red lanterns.
    Composition: same wide as SC04-SH010. Light: key Dimmed warm 2400 K stall bulb from camera-left (east), high,
    same side as SC01; fill Weak amber bounce from the counter, camera-right, about 4:1; rim Dimmed red lanterns
    top-back on the wire; practicals Stall bulb on the east post, three dimmed red lanterns, a few distant lanterns;
    other stalls shuttered; shadows Soft, falling to camera-right and down, umber detail. Night, dry. Palette: honey
    tungsten #F2B35E, night-market umber #2A1D17, tin brass #C9A24B, steam warm white #F1E4CF. Photoreal live-action
    cinema, 35 mm film grain with soft halation, 16:9. Warm lived-in Southeast Asian night market lit only by practical
    paper lanterns, string-light bulbs and stall steam: amber and honey tungsten against umber shadows, chili-red
    accents, deep teal alley shadows. Shallow depth of field, soft-focus crowds, round warm bokeh, natural skin
    and fur texture, clean frame without text, logos or watermarks.'
  end_frame: 'Wide shot, eye-level angle, 35 mm lens at f/4, camera 1.5 m high, medium-deep depth of field, 35 mm
    wide, the last bulb switched off, the macaque at the saucer in the final glow, then darkness. Lan, a Southeast
    Asian woman in her early 30s, 160 cm, slim and wiry, oval face with soft cheekbones, tired dark brown almond
    eyes, straight thick brows, small nose, warm medium-tan skin. Straight black hair in a low knot at the nape.
    Indigo-grey cotton work apron over a sleeves-rolled-to-elbow off-white shirt, charcoal loose trousers, dark
    canvas slip-on shoes. No jewelry, no makeup. Indigo-grey cotton bib apron with waist ties and small broth stains,
    over an off-white collarless shirt with sleeves rolled to the elbow, charcoal loose trousers, dark canvas slip-on
    shoes, plain dark hair elastic. No patterns, logos or text on any garment. Condition: state GRAZED: a red surface
    graze about 12 cm long on the outer right forearm with no blood drips, two to three loose hair strands, light
    dust on the apron hem and trouser knees, flushed face with a light sweat sheen. Position: frame left at the
    east post, full figure, about 4.5 m from camera; toward the post at frame left; a silhouette at the east post
    in the last glow; expression: calm, in silhouette. A wild adult long-tailed macaque, about 45 cm body and a
    50 cm tail, olive-brown fur with paler cream-grey underparts, pinkish-grey bare face with a grey-flecked muzzle,
    amber-brown eyes, a swept-back crown of fur, pale cheek whiskers. Small V-shaped notch in the top rim of its
    own LEFT ear (on the viewer''s right when it faces the camera). Dark grey-pink hands. No collar, no clothing.
    Natural olive-brown fur with cream-grey chest and belly, pinkish-grey bare face, dark grey-pink palms, slightly
    dusty coat, long tail with a small kink near the tip. No collar, no clothing, no accessories. Condition: state
    BASE: dry, slightly dusty fur. Position: frame centre-right, sitting beside the saucer on the counter edge;
    three-quarter facing frame left, notched LEFT ear toward the camera; a silhouette in the last glow of the red
    lanterns; expression: content, in silhouette. A small 12 cm cream-glazed ceramic saucer with a thin dark-blue
    line around the rim and one small crescent chip in the rim at the 3 o''clock position. Plain, no pattern, no
    writing. State FACEUP: on the counter edge, chip at 3 o''clock. A round dented tin, 16 cm across and 10 cm tall,
    dark green lacquer worn at the rim and corners, a friction-fit lid with exactly two bright worn brass spots
    side by side on top, small dents on the side. No label, no writing, no handle. State LID-ON: on the shelf at
    frame left. Covered open-air night market lane, 3 m wide, of timber-frame food stalls with corrugated-metal
    and faded canvas roofs, blank unlettered sign boards, damp swept concrete ground, a taut wire strung with paper
    lanterns and bare bulbs, three red lanterns above a small noodle stall with a plank shelf, steel stockpot and
    wok burner. Area: the stall at closing. Foreground: none. Midground: Lan at the east post, the macaque at the
    saucer. Background: shuttered stalls, dimmed red lanterns. Composition: same wide as SC04-SH010. Light: key
    Dimmed warm 2400 K stall bulb from camera-left (east), high, same side as SC01; fill Weak amber bounce from
    the counter, camera-right, about 4:1; rim Dimmed red lanterns top-back on the wire; practicals Stall bulb on
    the east post, three dimmed red lanterns, a few distant lanterns; other stalls shuttered; shadows Soft, falling
    to camera-right and down, umber detail. Night, dry. Palette: honey tungsten #F2B35E, night-market umber #2A1D17,
    tin brass #C9A24B, steam warm white #F1E4CF. Photoreal live-action cinema, 35 mm film grain with soft halation,
    16:9. Warm lived-in Southeast Asian night market lit only by practical paper lanterns, string-light bulbs and
    stall steam: amber and honey tungsten against umber shadows, chili-red accents, deep teal alley shadows. Shallow
    depth of field, soft-focus crowds, round warm bokeh, natural skin and fur texture, clean frame without text,
    logos or watermarks.'
  motion: '0-1.2 s: Lan reaches the switch and turns it. 1.2-1.5 s: the bulb goes out. 1.5-2.0 s: the frame falls
    to black. Camera locked off.'
  clip_length_s: 4
  clip_length_note: 'TO-VERIFY: Veo 3.1 first-last-frame clip lengths are not confirmed (user, 2026-10-19); this value is the plan, not a fact'
  risks:
  - 'dark end frame: only silhouettes'
```


## 7. Generation plan

Source: `10_prompts/images.md`

### Image Prompts: The Two Knocks

No image has been generated and no credits spent (no budget). Every prompt below is READY to paste once the user sets a budget. Scope: style frames, the reference sheets and plate that SC01 needs, and the ten SC01 start keyframes plus the two end keyframes for the first-last-frame shots. Everything else is listed under "Later" at the end.

#### Tool profile
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

#### Prompt-writing notes (decisions and fixes)
1. The shot records' frame text for SC01-SH030, SC01-SH070 and the hand-only shots (SC01-SH020, SH030, SC04-SH020, SH030) was wrong at the time of reading: it labelled the saucer FACEDOWN in the start frame with "starts UPRIGHT ... ends face-down" in the same sentence, left the tin position at "on the shelf at the start; clutched at the end" in both frames, and carried "n/a (hand only)" and "expression: out of frame" noise. The production-manager corrected them in SC01_shots@2 and SC04_shots@2 before these prompts were built; the prompts use the corrected text.
2. Hand-only shots still carry Lan's full identity lock (the lock is never shortened). The corrected frame text states "only the hand and wrist are in frame, no face and no body". If the model draws a face anyway, use the repair prompt in the Repairs table.
3. The style lock describes a night-market scene, which contradicts a plain-grey reference sheet. The sheets paste the style lock verbatim and add one "Sheet exception" sentence. PROPOSAL to the visual-style-designer: add a short sheet-style lock (film grain, natural texture, no text) so the exception sentence is not needed.
4. The shelf group: the production-designer's brief lists the shelf "from west to east saucer, photo, tin". The camera looks south from the lane, so east is frame left. The prompt therefore reads tin, photo, saucer from frame left to right, as in SC01-SH010's record.
5. NM-P1 asks for a "normal" lens; SC01-SH010 uses 28 mm. The plate uses about 35 mm; it is a layout reference, not a framing match.
6. Variants: one image per attempt (`images: 1`) because there is no budget. Increase to 2 or 4 only when the user sets one.

#### Generation plan
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

#### Prompts
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

#### Repairs
Edit prompts for the likely failures. Each changes one thing and says what stays.
| Original | Finding | Edit prompt ID | Prompt |
|---|---|---|---|
| IMG-SC01-SH020-START | a face appears in a hand-only frame | EDIT-SC01-SH020-A | "Keep the hand, wrist, tin lid, shelf, photo, lighting and composition exactly the same. Remove the face and body: only the right hand and wrist are visible entering from the lower right." |
| IMG-SC01-SH030-START | saucer chip missing or on the wrong side | EDIT-SC01-SH030-A | "Keep everything exactly the same. Make the saucer's single small crescent chip appear in the rim at the 3 o'clock position." |
| IMG-SC01-SH050-START | the notch is in the wrong ear | EDIT-SC01-SH050-A | "Keep the macaque's pose, face, fur, the wire, the lanterns and the lighting exactly the same. Move the small V-shaped notch to the macaque's own left ear, the one on the right side of its head in this image." |
| IMG-SC01-SH090-START | no foam at the pot | EDIT-SC01-SH090-A | "Keep the macaque, the tin, the counter and the lighting exactly the same. Make broth foam spill over the pot rim at frame right, with heavy warm-white steam." |
| IMG-SC01-SH010-START | readable letters on a sign | EDIT-SC01-SH010-A | "Keep everything exactly the same. Make every sign board blank and unlettered." |

#### Later (no prompt yet)
Needed from SC02 on, not for SC01: LAN-EXPRESSIONS, LAN-POSES, Lan costume sheet with the GRAZED state and the graze close-up, MACAQUE expressions, location plates NM-P2 (lane west), NM-P3 (shelf close), NM-P4 (closing), AL-P1 and AL-P2 (alley), props PR-POT, PR-LADLE, PR-STOOL, PR-CART, PR-CRATES, PR-LANTERN-ALLEY sheets as needed, and the SC02 to SC04 keyframes. Counts and order are in `08_master/generation_plan.md`.

#### Handoff
- Produced: images@1 (REVIEW): 23 prompts (3 style frames, 7 sheets, 1 plate, 12 SC01 keyframes: 10 start, 2 end)
- Next batch to run (needs the user's budget): IMG-SF-01 to SF-03, then the sheets in order. 12 SC01 keyframes follow after the sheets are approved. Minimum attempts for this scope at one image per attempt: 23; plan 2 to 3 attempts for the macaque and risk shots, so roughly 40 to 60. This is a count, not a budget.
- Open requests: short-form locks only if the tool rejects long prompts; sheet-style lock (PROPOSAL); confirm the reference-image limit in the UI
- Conflicts: none open; the frame-text fixes were applied to SC01_shots@2 and SC04_shots@2


Source: `10_prompts/video.md`

### Video Prompts: The Two Knocks, SC01

SC01 only (10 shots). Nothing is generated. Every prompt is on HOLD until its keyframe exists and is approved (the keyframe prompts are in images.md; no keyframe is generated). Dialogue and effects are generated by Veo; music is added in post.

#### Tool profile
```yaml
model_profile:
  name: "Veo 3.1"
  modes: [image-to-video, first-last-frame, ingredients-to-video, text-to-video]
  clip_lengths_s: [4, 6, 8]
  aspect_ratios: ["16:9", "9:16"]
  max_reference_images: 3
  native_audio: true
  multi_shot: true
  negative_prompt_field: false
  verified_on: "not verified with the user's UI"
  verified_by: "Google Cloud prompting guide for Veo 3.1, 2025-10-16 (OFFICIAL) for general lengths, audio syntax and modes; reference limit is an ASSUMPTION. First-last-frame clip lengths: TO-VERIFY (the user cannot confirm them yet)"
```
- Syntax used: dialogue as `<speaker> says, "<line>"`, `SFX:` and `Ambient noise:` lines, positive phrasing, "No music" and "No subtitles" at the end.
- Every clip is planned at 4 s, the shortest general length, which is at least the shot duration (1.5 to 3.0 s) plus a handle. Beats inside a prompt assume the first 0.3 s of the clip is skipped in the edit.
- **First-last-frame is TO-VERIFY.** SC01-SH030 and SC01-SH070 use it. Both have an image-to-video fallback record (`-02`) that needs neither the end keyframe nor a first-last-frame length. If first-last-frame turns out to allow only one fixed length, update `clip_length_s` and `trim` for those two records and tell the film-editor; the shot durations (2.5 s and 2.0 s) do not change.
- Voice identity across SC01-SH060, SC01-SH080 and SC03-SH060 is not controllable in Veo (see voice.md).

#### Shot plan
| Shot | Dur (cut) | Mode | Clip length | Keep | Start ref | End ref | Audio | Risk |
|---|---|---|---|---|---|---|---|---|
| SC01-SH010 | 3 | image-to-video | 4 | 0.3-3.3 s | SC01-SH010_start_v1 | none | SFX + ambience, generated | low |
| SC01-SH020 | 2.5 | image-to-video | 4 | 0.3-2.8 s | SC01-SH020_start_v1 | none | SFX + ambience, generated | medium (hand, photo) |
| SC01-SH030 | 2.5 | first-last-frame | 4 (to-verify) | 0.3-2.8 s | SC01-SH030_start_v1 | SC01-SH030_end_v1 | SFX + ambience, generated | high (saucer turn; FLF to-verify) |
| SC01-SH040 | 2.5 | image-to-video | 4 | 0.3-2.8 s | SC01-SH040_start_v1 | none | SFX + ambience, generated | low |
| SC01-SH050 | 2.5 | image-to-video | 4 | 0.3-2.8 s | SC01-SH050_start_v1 | none | SFX + ambience, generated | medium (ear) |
| SC01-SH060 | 2.5 | image-to-video | 4 | 0.3-2.8 s | SC01-SH060_start_v1 | none | dialogue + SFX, generated | medium (lip-sync) |
| SC01-SH070 | 2 | first-last-frame | 4 (to-verify) | 0.3-2.3 s | SC01-SH070_start_v1 | SC01-SH070_end_v1 | SFX + ambience, generated | high (risk batch; FLF to-verify) |
| SC01-SH080 | 1.5 | image-to-video | 4 | 0.3-1.8 s | SC01-SH080_start_v1 | none | dialogue + SFX, generated | medium |
| SC01-SH090 | 2.5 | image-to-video | 4 | 0.3-2.8 s | SC01-SH090_start_v1 | none | SFX + ambience, generated | high (risk batch) |
| SC01-SH100 | 2 | image-to-video | 4 | 0.3-2.3 s | SC01-SH100_start_v1 | none | SFX + ambience, generated | medium |

#### Prompts

```yaml
record: video_prompt
id: VID-SC01-SH010-01
shot: SC01-SH010
model: Veo 3.1
mode: image-to-video
prompt: 'Locked-off wide shot, the camera remains still. Beginning just after a brief still moment, Lan ladles noodles into the bowl with her right hand, then lifts the ladle clear; the bowl is now full. Steam rolls up from the pot at frame right. The background shoppers stay soft and faceless, and the sign boards stay blank. SFX: rolling boil and burner hiss, ladle sloshing into a bowl, soft cotton apron rustle. Ambient noise: busy night-market murmur, wok and burner hiss, steam release, string-light bulb buzz, no readable words. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH010_start_v1.png
  role: start frame (first frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-3.3 s of the 4 s clip (first 0.3 s skipped for settling, 0.7 s tail handle)
audio: 'generated by Veo: effects and ambience (sfx.md, voice.md); music in post'
risks:
- faceless background shoppers may resolve into faces, or signs may show letters (see the VFX plan)
retry_ladder:
- re-roll
- state "the camera remains still" and the end state again
- 'simplify: remove the steam beat from the prompt'
- fix the keyframe (shoppers softer) and re-run
status: REVIEW
gen_state: HOLD (keyframes not generated)
```

```yaml
record: video_prompt
id: VID-SC01-SH020-01
shot: SC01-SH020
model: Veo 3.1
mode: image-to-video
prompt: 'Locked-off close-up, the camera remains still. Lan''s right hand enters from the lower right toward the lid; at about 1.3 s two fingers (exactly two, the hand has five fingers) brush the two brass spots on the tin lid without pausing; the hand leaves to the left, and the lid sits alone. Steam drifts behind; the photograph at the right edge stays soft and out of focus. SFX: two light fingertip ticks on a lacquered lid (soft, no metallic ring), steam hiss. Ambient noise: busy night-market murmur, wok and burner hiss, steam release, string-light bulb buzz, no readable words. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH020_start_v1.png
  role: start frame (first frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-2.8 s of the 4 s clip (first 0.3 s skipped for settling, 1.2 s tail handle)
audio: 'generated by Veo: effects and ambience (sfx.md, voice.md); music in post'
risks:
- hand shape (five fingers)
- 'photo sharpens in motion (VFX-SC01-SH020: blur in post if needed)'
retry_ladder:
- re-roll
- 'slow the hand: "the hand moves slowly and steadily"'
- fix the keyframe photo blur
status: REVIEW
gen_state: HOLD (keyframes not generated)
```

```yaml
record: video_prompt
id: VID-SC01-SH030-01
shot: SC01-SH030
model: Veo 3.1
mode: first-last-frame
prompt: 'Locked-off close-up, the camera remains still. Lan''s right hand reaches the upright saucer, turns it over onto its face, and withdraws. The saucer ends face-down with its blank unglazed foot ring showing, the same saucer throughout. The photograph at frame left stays soft. SFX: ceramic scrape as the saucer turns, then a small clack as it lands face-down. Ambient noise: busy night-market murmur, wok and burner hiss, steam release, string-light bulb buzz, no readable words. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH030_start_v1.png
  role: start frame (first frame)
- file: assets/keyframes/SC01-SH030_end_v1.png
  role: end frame (last frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-2.8 s of the 4 s clip (first 0.3 s skipped for settling, 1.2 s tail handle)
audio: 'generated by Veo: effects and ambience (sfx.md, voice.md); music in post'
risks:
- saucer deforms or loses the chip while turning
- first-last-frame clip length is TO-VERIFY
retry_ladder:
- re-roll
- 'tighten the action: one beat, "the hand turns the saucer over once"'
- fix the end keyframe (foot ring blank)
- switch to image-to-video from the start frame with the end state in prose (record VID-SC01-SH030-02)
- split into an upright insert and a face-down insert (PROPOSAL to the film-director; needs a change request)
status: REVIEW
gen_state: HOLD (keyframes not generated)
clip_length_note: clip_length_s 4 is a planned value; Veo 3.1 first-last-frame lengths are TO-VERIFY
```

```yaml
record: video_prompt
id: VID-SC01-SH040-01
shot: SC01-SH040
model: Veo 3.1
mode: image-to-video
prompt: 'Locked-off medium shot, the camera remains still. A faceless customer at frame left takes the bowl and turns away, then walks out of frame to the left while Lan keeps wiping the counter with a folded cloth in wide hard arcs, her eyes down. SFX: bowl handed over, chopstick tick, damp cloth squeak on timber, the customer''s soft footsteps leaving. Ambient noise: busy night-market murmur, wok and burner hiss, steam release, string-light bulb buzz, no readable words. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH040_start_v1.png
  role: start frame (first frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-2.8 s of the 4 s clip (first 0.3 s skipped for settling, 1.2 s tail handle)
audio: 'generated by Veo: effects and ambience (sfx.md, voice.md); music in post'
risks:
- the customer's face resolving (should stay faceless and soft)
retry_ladder:
- re-roll
- make the customer a dark soft silhouette in the keyframe
status: REVIEW
gen_state: HOLD (keyframes not generated)
```

```yaml
record: video_prompt
id: VID-SC01-SH050-01
shot: SC01-SH050
model: Veo 3.1
mode: image-to-video
prompt: 'Locked-off close-up from low, looking up, the camera remains still. The macaque sits perfectly still on the lantern wire; only its eyes move, tracking down and settling on the tin below, unblinking. Its body does not move. Red and amber paper lanterns glow as soft round bokeh behind. SFX: a faint creak of the wire under its weight, paper lanterns shifting. Ambient noise: the market murmur thinning to a distant hush, wok hiss far away, string-light buzz. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH050_start_v1.png
  role: start frame (first frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-2.8 s of the 4 s clip (first 0.3 s skipped for settling, 1.2 s tail handle)
audio: 'generated by Veo: effects and ambience (sfx.md, voice.md); music in post'
risks:
- the notched left ear drifts to the other ear
- the body moves when only the eyes should
retry_ladder:
- re-roll
- add "the body and head do not move" and check the ear
- fix the keyframe ear (EDIT-SC01-SH050-A)
status: REVIEW
gen_state: HOLD (keyframes not generated)
```

```yaml
record: video_prompt
id: VID-SC01-SH060-01
shot: SC01-SH060
model: Veo 3.1
mode: image-to-video
prompt: 'Locked-off medium shot, the camera remains still. Lan, turned toward the pot with the ladle over it, looks at the pot and speaks flatly with her mouth moving, then lifts the ladle and keeps looking at the pot, mouth closed. Lan says, in a flat, tired, low voice, to the pot: "Almost closing." SFX: the ladle taps the pot rim once, the boil continues. Ambient noise: busy night-market murmur, wok and burner hiss, steam release, string-light bulb buzz, no readable words. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH060_start_v1.png
  role: start frame (first frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-2.8 s of the 4 s clip (first 0.3 s skipped for settling, 1.2 s tail handle)
audio: 'generated by Veo: dialogue, effects and ambience (sfx.md, voice.md); music in post'
risks:
- lip-sync of a two-word line
- voice differs from the other two lines (voice identity is not controllable in Veo)
retry_ladder:
- re-roll
- 'shorten: "she says the two words, then closes her mouth"'
- face more toward the camera in the keyframe
- record the line separately in post (needs an audio tool; no budget)
status: REVIEW
gen_state: HOLD (keyframes not generated)
```

```yaml
record: video_prompt
id: VID-SC01-SH070-01
shot: SC01-SH070
model: Veo 3.1
mode: first-last-frame
prompt: 'Locked-off wide shot from slightly low, the camera remains still. The wire dips and the macaque drops from it onto the shelf at frame left, lands crouched, and both of its hands close on the tin, which it holds. Lan stays small at the pot at frame right with her back turned, unaware. SFX: a wire twang, a soft thud as the macaque lands on the plank shelf, a scrape of the tin lid as both hands close on it. Ambient noise: busy night-market murmur, wok and burner hiss, steam release, string-light bulb buzz, no readable words. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH070_start_v1.png
  role: start frame (first frame)
- file: assets/keyframes/SC01-SH070_end_v1.png
  role: end frame (last frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-2.3 s of the 4 s clip (first 0.3 s skipped for settling, 1.7 s tail handle)
audio: 'generated by Veo: effects and ambience (sfx.md, voice.md); music in post'
risks:
- the drop is fast animal motion
- a second macaque or a second tin may appear
- the notched left ear on the far side
- first-last-frame clip length is TO-VERIFY
retry_ladder:
- 're-roll (risk batch: plan 3 attempts)'
- 'tighten the action: "the macaque drops once and lands"'
- lock the camera and remove the wire-dip beat
- fix the keyframes (edit prompts)
- switch to image-to-video from the start frame with the end state in prose (record VID-SC01-SH070-02)
- 'cut around the drop: wire dip insert then the macaque already holding the tin (PROPOSAL to the film-director, change request)'
status: REVIEW
gen_state: HOLD (keyframes not generated)
clip_length_note: clip_length_s 4 is a planned value; Veo 3.1 first-last-frame lengths are TO-VERIFY
```

```yaml
record: video_prompt
id: VID-SC01-SH080-01
shot: SC01-SH080
model: Veo 3.1
mode: image-to-video
prompt: 'Handheld with a slight natural shake and no re-framing. Lan, half-turned from the pot with the ladle in her right hand, spins to face the shelf at frame left, shouts with her left arm out, and holds with her mouth open. Lan shouts, a loud sharp startled shout: "Hey!" SFX: quick apron and shoe movement, the ladle knocks the counter. Ambient noise: busy night-market murmur, wok and burner hiss, steam release, string-light bulb buzz, no readable words. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH080_start_v1.png
  role: start frame (first frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-1.8 s of the 4 s clip (first 0.3 s skipped for settling, 2.2 s tail handle)
audio: 'generated by Veo: dialogue, effects and ambience (sfx.md, voice.md); music in post'
risks:
- one syllable must stay short (about 0.5 s)
- the spin may blur the face
retry_ladder:
- re-roll
- 'slow the spin: "she turns quickly then holds"'
- start closer to the final pose in the keyframe
status: REVIEW
gen_state: HOLD (keyframes not generated)
```

```yaml
record: video_prompt
id: VID-SC01-SH090-01
shot: SC01-SH090
model: Veo 3.1
mode: image-to-video
prompt: 'The camera tracks right at the macaque''s pace, ending as it leaves the frame. The macaque runs along the counter top at the lower third with the tin clutched to its chest on its camera side and exits at the right edge of the frame. At the same time broth foams over the rim of the pot at frame right and heavy steam billows. SFX: the tin rattles dry and light in the macaque''s grip, fast paw patter on planks, a foam surge and sizzle on the burner flame. Ambient noise: busy night-market murmur, wok and burner hiss, steam release, string-light bulb buzz, no readable words. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH090_start_v1.png
  role: start frame (first frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-2.8 s of the 4 s clip (first 0.3 s skipped for settling, 1.2 s tail handle)
audio: 'generated by Veo: effects and ambience (sfx.md, voice.md); music in post'
risks:
- two motions at once (run and boil-over)
- the foam and steam may not spill over the rim
- the camera track may not follow
retry_ladder:
- re-roll (plan 3 attempts)
- lock the camera and add the track in post (reframe)
- 'remove "tracks": "the macaque runs through the frame to the right", then add the foam as a separate element (ELM-STEAM-FOAM)'
- fix the keyframe (foam at the rim)
- composite ELM-STEAM-FOAM onto the macaque take (VFX-SC01-SH090)
status: REVIEW
gen_state: HOLD (keyframes not generated)
```

```yaml
record: video_prompt
id: VID-SC01-SH100-01
shot: SC01-SH100
model: Veo 3.1
mode: image-to-video
prompt: 'Handheld. Lan drops the ladle onto the counter beside the pot, then turns and runs out of the frame to the right past the foaming pot; foam and steam continue at the right of the frame. SFX: a steel ladle clatters on the timber counter and rings briefly, running shoe steps pulling away to the right, the boil-over keeps hissing. Ambient noise: busy night-market murmur, wok and burner hiss, steam release, string-light bulb buzz, no readable words. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH100_start_v1.png
  role: start frame (first frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-2.3 s of the 4 s clip (first 0.3 s skipped for settling, 1.7 s tail handle)
audio: 'generated by Veo: effects and ambience (sfx.md, voice.md); music in post'
risks:
- the ladle release
- the foam must match SC01-SH090
retry_ladder:
- re-roll
- start with the ladle already falling
- trim before the release and let the sound carry the drop
status: REVIEW
gen_state: HOLD (keyframes not generated)
```

```yaml
record: video_prompt
id: VID-SC01-SH030-02
shot: SC01-SH030
model: Veo 3.1
mode: image-to-video
prompt: 'Locked-off close-up, the camera remains still. Lan''s right hand reaches the upright saucer, turns it over onto its face, and withdraws; the saucer ends lying face-down, its blank unglazed foot ring showing, the same plain cream saucer throughout. The photograph at frame left stays soft. SFX: ceramic scrape, then a small clack. Ambient noise: busy night-market murmur, wok and burner hiss, steam release, string-light bulb buzz, no readable words. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH030_start_v1.png
  role: start frame (first frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-2.8 s of the 4 s clip (first 0.3 s skipped for settling, 1.2 s tail handle)
audio: 'generated by Veo: effects and ambience (sfx.md, voice.md); music in post'
risks:
- the end state is only in prose; the clip may not reach the pose
retry_ladder:
- re-roll
- tighten the end state wording
- fix the start keyframe
status: REVIEW
gen_state: HOLD (keyframes not generated)
```

```yaml
record: video_prompt
id: VID-SC01-SH070-02
shot: SC01-SH070
model: Veo 3.1
mode: image-to-video
prompt: 'Locked-off wide shot from slightly low, the camera remains still. The wire dips and the macaque drops from it onto the shelf at frame left, lands crouched, and both of its hands close on the tin and hold it. Lan stays small at the pot with her back turned. SFX: a wire twang, a soft thud on the plank, a scrape of the tin lid. Ambient noise: busy night-market murmur, wok and burner hiss, steam release, string-light bulb buzz, no readable words. No music. No subtitles, captions or on-screen text.'
references:
- file: assets/keyframes/SC01-SH070_start_v1.png
  role: start frame (first frame)
clip_length_s: 4
parameters:
  aspect_ratio: '16:9'
  audio: generated
trim: keep 0.3-2.3 s of the 4 s clip (first 0.3 s skipped for settling, 1.7 s tail handle)
audio: 'generated by Veo: effects and ambience (sfx.md, voice.md); music in post'
risks:
- the end state is only in prose; the clip may not reach the pose
retry_ladder:
- re-roll
- tighten the end state wording
- fix the start keyframe
status: REVIEW
gen_state: HOLD (keyframes not generated)
```

#### Chaining and extensions
| From take | To shot | Frame used | Notes |
|---|---|---|---|
| SC01-SH070 | SC01-SH080 | none (own keyframe) | Lan turns from the pot; SH080's keyframe is made separately, and the pot and shelf must match the SH070 end frame |
| SC01-SH090 | SC01-SH100 | none | the foam state must match: boil-over, foam at the rim |
| SC01-SH100 | SC02-SH010 | none | cut on action; Lan exits frame right, the SC02 follow shot opens on travel to frame right |

No extensions needed: every SC01 shot is shorter than the shortest clip length.

#### Handoff
- Produced: video@1 (REVIEW): 12 records for 10 shots (10 primary, 2 fallbacks), SC01 only; all on HOLD until the keyframes exist
- For film-editor: no splits or extensions; trims start 0.3 s into each clip; the "Hey!" in SC01-SH080 must stay short (about 0.5 s)
- Open items: first-last-frame clip lengths TO-VERIFY (SC01-SH030, SC01-SH070); reference-image limit unverified; voice mismatch across clips possible
- Conflicts: none
- Next: after the user sets a budget and the keyframes pass QC, run the risk batch (SH070, SH090, SH030), then the rest


## 8. Storyboard
Source: `09_storyboard/storyboard.md`

### Storyboard: The Two Knocks

Aspect ratio: 16:9 (style_bible@1). Level of finish: rough (greyscale composition boards; identity limited to silhouette and colour anchors). Sheet: `09_storyboard/storyboard.html`. No panel images exist; none were generated (no budget). Every panel renders its shot record; no story event, shot or dialogue was added.

#### SC01 — EXT. NIGHT MARKET - LAN'S NOODLE STALL - NIGHT

```yaml
record: panel
id: SB-SC01-SH010-P1
shot: SC01-SH010
frame_moment: start
description: Lan holds the ladle over an empty bowl, shelf props in place
composition: 'WS, eye-level, 28 mm. CH-LAN centre of frame behind the counter, midground, about 4.5 m from camera, full figure, facing toward camera, head bowed to the bowl. PR-POT BOILING on the burner at the counter''s west end, frame right of Lan, steaming; PR-LADLE HELD in Lan''s right hand over the bowl; PR-TIN SEALED on the shelf behind Lan at frame left, small; PR-PHOTO STANDING on the shelf between the tin and the saucer; PR-SAUCER-STALL UPRIGHT on the shelf at the west end, frame right of the photo. Layers: foreground out-of-focus counter edge with blank bowls, lower frame; midground Lan at the counter, pot at frame right, shelf with tin, photo and saucer at frame left; background soft-focus lane, a few faceless shoppers, string-light bulbs. Composition: stall centred, red lantern cluster and wire across the top third. Screen direction: Camera north of the counter looking south; east = frame left (shelf, tin), west = frame right (pot). Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: 'STATIC. Locked off. Subject movement: CH-LAN ladles noodles into a bowl with her right hand'
duration_s: 3
dialogue: ''
sound: 'pending sound plan: market ambience, wok hiss, steam, ladle on bowl'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. Lan holds the ladle over an empty bowl, shelf props in place. WS, eye-level, 28 mm. CH-LAN centre of frame behind the counter, midground, about 4.5 m from camera, full figure, facing toward camera, head bowed to the bowl. PR-POT BOILING on the burner at the counter''s west end, frame right of Lan, steaming; PR-LADLE HELD in Lan''s right hand over the bowl; PR-TIN SEALED on the shelf behind Lan at frame left, small; PR-PHOTO STANDING on the shelf between the tin and the saucer; PR-SAUCER-STALL UPRIGHT on the shelf at the west end, frame right of the photo. Layers: foreground out-of-focus counter edge with blank bowls, lower frame; midground Lan at the counter, pot at frame right, shelf with tin, photo and saucer at frame left; background soft-focus lane, a few faceless shoppers, string-light bulbs. Composition: stall centred, red lantern cluster and wire across the top third. Screen direction: Camera north of the counter looking south; east = frame left (shelf, tin), west = frame right (pot). Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH020-P1
shot: SC01-SH020
frame_moment: start
description: hand entering with two fingers extended, a hand's width from the lid
composition: 'CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right of frame; body out of frame, facing n/a (hand only). PR-TIN SEALED frame centre on the shelf, lid facing up toward camera, the two brass spots catching light; PR-PHOTO STANDING soft and out of focus at the right edge of frame. Layers: foreground none; midground the tin lid, centre; background soft photo frame at the right edge, steam and warm bokeh behind. Composition: tin lid centre, photo soft at the right edge (from the north the shelf reads tin, photo, saucer left to right). Screen direction: Camera 20 degrees off axis north-west of the stall; Lan''s hand moves right to left (east). Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: 'STATIC. Locked off. Lan''s right hand enters from the right, touches the lid and leaves to the left. Subject movement: CH-LAN two fingers of her right hand brush the two brass spots on the lid and move on'
duration_s: 2.5
dialogue: ''
sound: 'pending sound plan: soft fingertip on tin, steam hiss'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. hand entering with two fingers extended, a hand''s width from the lid. CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right of frame; body out of frame, facing n/a (hand only). PR-TIN SEALED frame centre on the shelf, lid facing up toward camera, the two brass spots catching light; PR-PHOTO STANDING soft and out of focus at the right edge of frame. Layers: foreground none; midground the tin lid, centre; background soft photo frame at the right edge, steam and warm bokeh behind. Composition: tin lid centre, photo soft at the right edge (from the north the shelf reads tin, photo, saucer left to right). Screen direction: Camera 20 degrees off axis north-west of the stall; Lan''s hand moves right to left (east). Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH030-P1
shot: SC01-SH030
frame_moment: start
description: the saucer stands upright, its chip at 3 o'clock, a hand arriving
composition: 'CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right; body out of frame, facing n/a (hand only). PR-SAUCER-STALL FACEDOWN frame centre on the shelf; starts UPRIGHT with the chip at 3 o''clock, ends face-down with the unglazed foot ring showing; PR-PHOTO STANDING soft behind at frame left. Layers: foreground none; midground the saucer, centre; background soft photo frame at the left, warm bokeh. Composition: saucer centre, photo soft at its left. Screen direction: Camera 20 degrees off axis north-west; hand enters from the right. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: 'STATIC. Locked off. The saucer turns face-down in the frame. Subject movement: CH-LAN turns the saucer over onto its face'
duration_s: 1.25
dialogue: ''
sound: 'pending sound plan: ceramic scrape and click'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. the saucer stands upright, its chip at 3 o''clock, a hand arriving. CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right; body out of frame, facing n/a (hand only). PR-SAUCER-STALL FACEDOWN frame centre on the shelf; starts UPRIGHT with the chip at 3 o''clock, ends face-down with the unglazed foot ring showing; PR-PHOTO STANDING soft behind at frame left. Layers: foreground none; midground the saucer, centre; background soft photo frame at the left, warm bokeh. Composition: saucer centre, photo soft at its left. Screen direction: Camera 20 degrees off axis north-west; hand enters from the right. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH030-P2
shot: SC01-SH030
frame_moment: end
description: the saucer lies face-down, blank underside and foot ring showing
composition: 'CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right; body out of frame, facing n/a (hand only). PR-SAUCER-STALL FACEDOWN frame centre on the shelf; starts UPRIGHT with the chip at 3 o''clock, ends face-down with the unglazed foot ring showing; PR-PHOTO STANDING soft behind at frame left. Layers: foreground none; midground the saucer, centre; background soft photo frame at the left, warm bokeh. Composition: saucer centre, photo soft at its left. Screen direction: Camera 20 degrees off axis north-west; hand enters from the right. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: STATIC. Locked off. The saucer turns face-down in the frame.
duration_s: 1.25
dialogue: ''
sound: 'pending sound plan: ceramic scrape and click'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. the saucer lies face-down, blank underside and foot ring showing. CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right; body out of frame, facing n/a (hand only). PR-SAUCER-STALL FACEDOWN frame centre on the shelf; starts UPRIGHT with the chip at 3 o''clock, ends face-down with the unglazed foot ring showing; PR-PHOTO STANDING soft behind at frame left. Layers: foreground none; midground the saucer, centre; background soft photo frame at the left, warm bokeh. Composition: saucer centre, photo soft at its left. Screen direction: Camera 20 degrees off axis north-west; hand enters from the right. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH040-P1
shot: SC01-SH040
frame_moment: start
description: a faceless customer takes the bowl at frame left while Lan wipes
composition: 'MS, eye-level, 50 mm. CH-LAN centre-right behind the counter, midground, waist-up, facing toward camera, head down. Layers: foreground out-of-focus counter edge; midground Lan at the counter; a faceless soft-focus customer in a plain dark shirt at frame left; background soft-focus lane lights and steam. Composition: Lan centre-right, customer left and soft. Screen direction: Customer leaves frame left (east); Lan stays; camera north looking south. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: 'STATIC. Locked off. Subject movement: CH-LAN wipes the counter with a folded cloth in wide hard arcs'
duration_s: 2.5
dialogue: ''
sound: 'pending sound plan: cloth wiping, bowl lifted, footsteps leaving'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS eye-level view. a faceless customer takes the bowl at frame left while Lan wipes. MS, eye-level, 50 mm. CH-LAN centre-right behind the counter, midground, waist-up, facing toward camera, head down. Layers: foreground out-of-focus counter edge; midground Lan at the counter; a faceless soft-focus customer in a plain dark shirt at frame left; background soft-focus lane lights and steam. Composition: Lan centre-right, customer left and soft. Screen direction: Customer leaves frame left (east); Lan stays; camera north looking south. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH050-P1
shot: SC01-SH050
frame_moment: start
description: the macaque seated on the wire looking down-left
composition: 'CU, low, 135 mm. CH-MACAQUE upper right of frame, seated on the lantern wire, head and shoulders, facing three-quarter, facing frame left, notched LEFT ear toward the camera at the right side of its head. Layers: foreground none; midground the macaque on the wire; background soft red and amber paper lanterns as round bokeh, dark night above. Composition: macaque upper right, empty dark at left to give the eyeline room. Screen direction: Camera north-east looking up at the wire; the macaque faces frame left (east, toward the tin). Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: 'STATIC. Locked off. Only the macaque''s eyes move. Subject movement: CH-MACAQUE sits perfectly still, only its eyes moving to settle on the tin below'
duration_s: 2.5
dialogue: ''
sound: 'pending sound plan: market murmur dropping, faint wire creak'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU low view. the macaque seated on the wire looking down-left. CU, low, 135 mm. CH-MACAQUE upper right of frame, seated on the lantern wire, head and shoulders, facing three-quarter, facing frame left, notched LEFT ear toward the camera at the right side of its head. Layers: foreground none; midground the macaque on the wire; background soft red and amber paper lanterns as round bokeh, dark night above. Composition: macaque upper right, empty dark at left to give the eyeline room. Screen direction: Camera north-east looking up at the wire; the macaque faces frame left (east, toward the tin). Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH060-P1
shot: SC01-SH060
frame_moment: start
description: Lan with the ladle over the pot, mouth closed
composition: 'MS, eye-level, 50 mm. CH-LAN frame right of centre behind the counter, midground, waist-up, facing turned toward the pot at frame right, three-quarter to camera. PR-POT BOILING frame right on the burner, steaming; PR-LADLE HELD in Lan''s right hand over the pot. Layers: foreground none; midground Lan and the pot; background the shelf blurred at the left edge, lane lights soft. Composition: Lan right of centre, pot right, shelf out of focus at the left edge. Screen direction: Lan faces west (frame right); shelf behind her at frame left, unseen by her. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: 'STATIC. Locked off. Subject movement: CH-LAN speaks to the pot while holding the ladle over it'
duration_s: 2.5
dialogue: 'CH-LAN (0.6-1.8 s): Almost closing. [flat, to the pot, tired]'
sound: 'pending sound plan: boil, steam, ladle on pot rim'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS eye-level view. Lan with the ladle over the pot, mouth closed. MS, eye-level, 50 mm. CH-LAN frame right of centre behind the counter, midground, waist-up, facing turned toward the pot at frame right, three-quarter to camera. PR-POT BOILING frame right on the burner, steaming; PR-LADLE HELD in Lan''s right hand over the pot. Layers: foreground none; midground Lan and the pot; background the shelf blurred at the left edge, lane lights soft. Composition: Lan right of centre, pot right, shelf out of focus at the left edge. Screen direction: Lan faces west (frame right); shelf behind her at frame left, unseen by her. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH070-P1
shot: SC01-SH070
frame_moment: start
description: the macaque crouched on the wire above the shelf, the wire dipping
composition: 'WS, low, 35 mm. CH-MACAQUE frame left, dropping from the wire onto the shelf, facing three-quarter, facing frame right, notched LEFT ear on the far side of its head; CH-LAN small, frame right at the pot, about 2.5 m from the shelf, full figure, back turned to the shelf, facing away from the shelf toward the pot. PR-TIN SEALED on the shelf at the start; clutched in the macaque''s hands at the end; PR-PHOTO STANDING on the shelf between tin and saucer; PR-SAUCER-STALL FACEDOWN on the shelf at the west end, face-down; PR-POT BOILING frame right on the burner, steaming. Layers: foreground out-of-focus counter edge, lower frame; midground shelf at frame left, Lan small at frame right; background soft-focus lane, red lanterns on the wire above. Composition: shelf left, Lan right, red lantern cluster at the top. Screen direction: Camera north-east, slightly low; the macaque moves from the wire down to the shelf; Lan stays at the pot. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: 'STATIC. Locked off. The macaque drops from the top edge onto the shelf at screen left. Subject movement: CH-MACAQUE drops from the wire onto the shelf and closes both hands on the tin; CH-LAN stands at the pot, unaware'
duration_s: 1
dialogue: ''
sound: 'pending sound plan: wire creak, soft landing on planks, tin scrape'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS low view. the macaque crouched on the wire above the shelf, the wire dipping. WS, low, 35 mm. CH-MACAQUE frame left, dropping from the wire onto the shelf, facing three-quarter, facing frame right, notched LEFT ear on the far side of its head; CH-LAN small, frame right at the pot, about 2.5 m from the shelf, full figure, back turned to the shelf, facing away from the shelf toward the pot. PR-TIN SEALED on the shelf at the start; clutched in the macaque''s hands at the end; PR-PHOTO STANDING on the shelf between tin and saucer; PR-SAUCER-STALL FACEDOWN on the shelf at the west end, face-down; PR-POT BOILING frame right on the burner, steaming. Layers: foreground out-of-focus counter edge, lower frame; midground shelf at frame left, Lan small at frame right; background soft-focus lane, red lanterns on the wire above. Composition: shelf left, Lan right, red lantern cluster at the top. Screen direction: Camera north-east, slightly low; the macaque moves from the wire down to the shelf; Lan stays at the pot. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH070-P2
shot: SC01-SH070
frame_moment: end
description: the macaque crouched on the shelf holding the tin, Lan small at the pot with her back turned
composition: 'WS, low, 35 mm. CH-MACAQUE frame left, dropping from the wire onto the shelf, facing three-quarter, facing frame right, notched LEFT ear on the far side of its head; CH-LAN small, frame right at the pot, about 2.5 m from the shelf, full figure, back turned to the shelf, facing away from the shelf toward the pot. PR-TIN SEALED on the shelf at the start; clutched in the macaque''s hands at the end; PR-PHOTO STANDING on the shelf between tin and saucer; PR-SAUCER-STALL FACEDOWN on the shelf at the west end, face-down; PR-POT BOILING frame right on the burner, steaming. Layers: foreground out-of-focus counter edge, lower frame; midground shelf at frame left, Lan small at frame right; background soft-focus lane, red lanterns on the wire above. Composition: shelf left, Lan right, red lantern cluster at the top. Screen direction: Camera north-east, slightly low; the macaque moves from the wire down to the shelf; Lan stays at the pot. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: STATIC. Locked off. The macaque drops from the top edge onto the shelf at screen left.
duration_s: 1
dialogue: ''
sound: 'pending sound plan: wire creak, soft landing on planks, tin scrape'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS low view. the macaque crouched on the shelf holding the tin, Lan small at the pot with her back turned. WS, low, 35 mm. CH-MACAQUE frame left, dropping from the wire onto the shelf, facing three-quarter, facing frame right, notched LEFT ear on the far side of its head; CH-LAN small, frame right at the pot, about 2.5 m from the shelf, full figure, back turned to the shelf, facing away from the shelf toward the pot. PR-TIN SEALED on the shelf at the start; clutched in the macaque''s hands at the end; PR-PHOTO STANDING on the shelf between tin and saucer; PR-SAUCER-STALL FACEDOWN on the shelf at the west end, face-down; PR-POT BOILING frame right on the burner, steaming. Layers: foreground out-of-focus counter edge, lower frame; midground shelf at frame left, Lan small at frame right; background soft-focus lane, red lanterns on the wire above. Composition: shelf left, Lan right, red lantern cluster at the top. Screen direction: Camera north-east, slightly low; the macaque moves from the wire down to the shelf; Lan stays at the pot. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH080-P1
shot: SC01-SH080
frame_moment: start
description: Lan half-turned from the pot
composition: 'MS, eye-level, 50 mm. CH-LAN centre behind the counter, midground, waist-up, facing spinning to face frame left toward the shelf. PR-LADLE HELD in Lan''s right hand. Layers: foreground none; midground Lan; background the shelf blurred at the left, lane lights soft. Composition: Lan centre, shelf out of focus at the left. Screen direction: Lan turns from west to east (frame right to frame left). Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: 'STATIC. Handheld with a slight natural shake, no re-framing; Lan spins into the frame. Subject movement: CH-LAN spins toward the shelf and shouts, arm out'
duration_s: 1.5
dialogue: 'CH-LAN (0.5-1.0 s): Hey! [startled shout]'
sound: 'pending sound plan: ladle and apron movement'
transition_out: cut-on-action
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS eye-level view. Lan half-turned from the pot. MS, eye-level, 50 mm. CH-LAN centre behind the counter, midground, waist-up, facing spinning to face frame left toward the shelf. PR-LADLE HELD in Lan''s right hand. Layers: foreground none; midground Lan; background the shelf blurred at the left, lane lights soft. Composition: Lan centre, shelf out of focus at the left. Screen direction: Lan turns from west to east (frame right to frame left). Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH090-P1
shot: SC01-SH090
frame_moment: start
description: the macaque running on the counter at frame left of centre, tin clutched
composition: 'WS, eye-level, 35 mm. CH-MACAQUE lower third of frame, running on the counter top along the lane edge, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED clutched to the macaque''s chest, on its camera side; PR-POT BOIL-OVER frame right on the burner, foamy broth spilling over the rim, heavy steam. Layers: foreground out-of-focus counter edge, lower frame; midground the macaque on the counter, the pot boiling over at frame right; background soft lane lights and steam. Composition: counter along the lower third, pot at frame right. Screen direction: West = frame right; the macaque exits frame right. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: 'TRUCK R (follow, west): Tracks west (screen right) about 6 m in 2.5 s at the macaque''s pace, ending as it leaves frame right; steam rises in the right of the frame. This panel: start framing. Subject movement: CH-MACAQUE runs west along the counter with the tin clutched to its chest'
duration_s: 1.25
dialogue: ''
sound: 'pending sound plan: tin rattle with each stride, claws on wood, boil-over hiss'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. the macaque running on the counter at frame left of centre, tin clutched. WS, eye-level, 35 mm. CH-MACAQUE lower third of frame, running on the counter top along the lane edge, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED clutched to the macaque''s chest, on its camera side; PR-POT BOIL-OVER frame right on the burner, foamy broth spilling over the rim, heavy steam. Layers: foreground out-of-focus counter edge, lower frame; midground the macaque on the counter, the pot boiling over at frame right; background soft lane lights and steam. Composition: counter along the lower third, pot at frame right. Screen direction: West = frame right; the macaque exits frame right. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH090-P2
shot: SC01-SH090
frame_moment: end
description: the macaque at the right edge of frame leaving it, the pot foaming over
composition: 'WS, eye-level, 35 mm. CH-MACAQUE lower third of frame, running on the counter top along the lane edge, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED clutched to the macaque''s chest, on its camera side; PR-POT BOIL-OVER frame right on the burner, foamy broth spilling over the rim, heavy steam. Layers: foreground out-of-focus counter edge, lower frame; midground the macaque on the counter, the pot boiling over at frame right; background soft lane lights and steam. Composition: counter along the lower third, pot at frame right. Screen direction: West = frame right; the macaque exits frame right. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: 'TRUCK R (follow, west): Tracks west (screen right) about 6 m in 2.5 s at the macaque''s pace, ending as it leaves frame right; steam rises in the right of the frame. This panel: end framing (dashed box).'
duration_s: 1.25
dialogue: ''
sound: 'pending sound plan: tin rattle with each stride, claws on wood, boil-over hiss'
transition_out: cut-on-action
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. the macaque at the right edge of frame leaving it, the pot foaming over. WS, eye-level, 35 mm. CH-MACAQUE lower third of frame, running on the counter top along the lane edge, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED clutched to the macaque''s chest, on its camera side; PR-POT BOIL-OVER frame right on the burner, foamy broth spilling over the rim, heavy steam. Layers: foreground out-of-focus counter edge, lower frame; midground the macaque on the counter, the pot boiling over at frame right; background soft lane lights and steam. Composition: counter along the lower third, pot at frame right. Screen direction: West = frame right; the macaque exits frame right. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

```yaml
record: panel
id: SB-SC01-SH100-P1
shot: SC01-SH100
frame_moment: start
description: the ladle leaving Lan's hand beside the foaming pot
composition: 'MS, eye-level, 35 mm. CH-LAN centre, behind the counter at the pot, waist-up becoming full as she moves, facing turning to run toward frame right. PR-LADLE ABANDONED on the counter beside the pot; PR-POT BOIL-OVER foreground right, foam spilling, heavy steam. Layers: foreground foam and steam, foreground right; midground Lan at the counter beside the pot; background soft lane lights. Composition: pot foreground right, Lan centre. Screen direction: Lan exits frame right (west), matching SC02. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
camera_notes: 'STATIC. Handheld; Lan drops the ladle and exits frame right. Subject movement: CH-LAN drops the ladle onto the counter and runs off to frame right'
duration_s: 2
dialogue: ''
sound: 'pending sound plan: ladle clatter, running footsteps, boil-over hiss'
transition_out: cut-on-action
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS eye-level view. the ladle leaving Lan''s hand beside the foaming pot. MS, eye-level, 35 mm. CH-LAN centre, behind the counter at the pot, waist-up becoming full as she moves, facing turning to run toward frame right. PR-LADLE ABANDONED on the counter beside the pot; PR-POT BOIL-OVER foreground right, foam spilling, heavy steam. Layers: foreground foam and steam, foreground right; midground Lan at the counter beside the pot; background soft lane lights. Composition: pot foreground right, Lan centre. Screen direction: Lan exits frame right (west), matching SC02. Shadow side: Soft-edged, falling to camera-right and down, detail kept near #14100E.'
image: ''
```

#### SC02 — EXT. NIGHT MARKET - LANES - CONTINUOUS

```yaml
record: panel
id: SB-SC02-SH010-P1
shot: SC02-SH010
frame_moment: start
description: the macaque running at frame left toward the table
composition: 'MWS, low, 35 mm. CH-MACAQUE lower frame, entering from the left and diving under the table at frame centre, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED held against the macaque''s chest on its camera side, rattling. Layers: foreground damp concrete ground, lower frame; midground the table with its grey cloth, centre; background soft lanterns, string-light bulbs and sparse faceless shoppers. Composition: table centre, long warm lane receding to frame right. Screen direction: Travel west = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK R (follow, west): Tracks west (screen right) about 5 m with the macaque, ending as the table cloth settles. This panel: start framing. Subject movement: CH-MACAQUE dives under the grey table cloth with the tin held against its chest'
duration_s: 1.5
dialogue: ''
sound: 'pending sound plan: tin rattle, claws on wet concrete, cloth flap'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MWS low view. the macaque running at frame left toward the table. MWS, low, 35 mm. CH-MACAQUE lower frame, entering from the left and diving under the table at frame centre, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED held against the macaque''s chest on its camera side, rattling. Layers: foreground damp concrete ground, lower frame; midground the table with its grey cloth, centre; background soft lanterns, string-light bulbs and sparse faceless shoppers. Composition: table centre, long warm lane receding to frame right. Screen direction: Travel west = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH010-P2
shot: SC02-SH010
frame_moment: end
description: the table cloth swinging, the macaque out of sight
composition: 'MWS, low, 35 mm. CH-MACAQUE lower frame, entering from the left and diving under the table at frame centre, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED held against the macaque''s chest on its camera side, rattling. Layers: foreground damp concrete ground, lower frame; midground the table with its grey cloth, centre; background soft lanterns, string-light bulbs and sparse faceless shoppers. Composition: table centre, long warm lane receding to frame right. Screen direction: Travel west = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK R (follow, west): Tracks west (screen right) about 5 m with the macaque, ending as the table cloth settles. This panel: end framing (dashed box).'
duration_s: 1.5
dialogue: ''
sound: 'pending sound plan: tin rattle, claws on wet concrete, cloth flap'
transition_out: cut-on-action
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MWS low view. the table cloth swinging, the macaque out of sight. MWS, low, 35 mm. CH-MACAQUE lower frame, entering from the left and diving under the table at frame centre, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED held against the macaque''s chest on its camera side, rattling. Layers: foreground damp concrete ground, lower frame; midground the table with its grey cloth, centre; background soft lanterns, string-light bulbs and sparse faceless shoppers. Composition: table centre, long warm lane receding to frame right. Screen direction: Travel west = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH020-P1
shot: SC02-SH020
frame_moment: start
description: Lan at frame left, left hand on the table edge, mid-skid
composition: 'WS, eye-level, 28 mm. CH-LAN entering from frame left, midground, full figure, about 4 m from camera, facing running toward frame right, left hand reaching to the table edge. Layers: foreground damp concrete ground; midground the table centre, Lan crossing it left to right; background soft-focus shoppers part, lanterns and string-light bulbs. Composition: table centre, Lan crossing. Screen direction: Lan travels west = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK R (follow, west): Tracks west about 6 m with Lan, from the skid to her running past the table. This panel: start framing. Subject movement: CH-LAN skids round the outside of the table and runs on'
duration_s: 1.5
dialogue: ''
sound: 'pending sound plan: slip-on skid, running breath, table rocks'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. Lan at frame left, left hand on the table edge, mid-skid. WS, eye-level, 28 mm. CH-LAN entering from frame left, midground, full figure, about 4 m from camera, facing running toward frame right, left hand reaching to the table edge. Layers: foreground damp concrete ground; midground the table centre, Lan crossing it left to right; background soft-focus shoppers part, lanterns and string-light bulbs. Composition: table centre, Lan crossing. Screen direction: Lan travels west = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH020-P2
shot: SC02-SH020
frame_moment: end
description: Lan right of the table, running on
composition: 'WS, eye-level, 28 mm. CH-LAN entering from frame left, midground, full figure, about 4 m from camera, facing running toward frame right, left hand reaching to the table edge. Layers: foreground damp concrete ground; midground the table centre, Lan crossing it left to right; background soft-focus shoppers part, lanterns and string-light bulbs. Composition: table centre, Lan crossing. Screen direction: Lan travels west = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK R (follow, west): Tracks west about 6 m with Lan, from the skid to her running past the table. This panel: end framing (dashed box).'
duration_s: 1.5
dialogue: ''
sound: 'pending sound plan: slip-on skid, running breath, table rocks'
transition_out: cut-on-action
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. Lan right of the table, running on. WS, eye-level, 28 mm. CH-LAN entering from frame left, midground, full figure, about 4 m from camera, facing running toward frame right, left hand reaching to the table edge. Layers: foreground damp concrete ground; midground the table centre, Lan crossing it left to right; background soft-focus shoppers part, lanterns and string-light bulbs. Composition: table centre, Lan crossing. Screen direction: Lan travels west = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH030-P1
shot: SC02-SH030
frame_moment: start
description: the macaque running at frame left of centre
composition: 'MWS, low, 35 mm. CH-MACAQUE lower third, ground level, left of centre, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED against the macaque''s chest on its camera side; PR-CRATES STACKED soft at the right edge of frame in the distance. Layers: foreground damp concrete ground; midground the macaque running; background a long lane of lights receding to frame right, crate stacks soft at the right edge. Composition: macaque lower third, lights receding right. Screen direction: West = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK R (follow, west): Tracks west about 8 m at the macaque''s speed, ending as it reaches the crates. This panel: start framing. Subject movement: CH-MACAQUE runs low and straight with the tin against its chest'
duration_s: 1.5
dialogue: ''
sound: 'pending sound plan: tin rattle each stride, claws on concrete'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MWS low view. the macaque running at frame left of centre. MWS, low, 35 mm. CH-MACAQUE lower third, ground level, left of centre, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED against the macaque''s chest on its camera side; PR-CRATES STACKED soft at the right edge of frame in the distance. Layers: foreground damp concrete ground; midground the macaque running; background a long lane of lights receding to frame right, crate stacks soft at the right edge. Composition: macaque lower third, lights receding right. Screen direction: West = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH030-P2
shot: SC02-SH030
frame_moment: end
description: the macaque at the foot of the crate stacks
composition: 'MWS, low, 35 mm. CH-MACAQUE lower third, ground level, left of centre, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED against the macaque''s chest on its camera side; PR-CRATES STACKED soft at the right edge of frame in the distance. Layers: foreground damp concrete ground; midground the macaque running; background a long lane of lights receding to frame right, crate stacks soft at the right edge. Composition: macaque lower third, lights receding right. Screen direction: West = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK R (follow, west): Tracks west about 8 m at the macaque''s speed, ending as it reaches the crates. This panel: end framing (dashed box).'
duration_s: 1.5
dialogue: ''
sound: 'pending sound plan: tin rattle each stride, claws on concrete'
transition_out: cut-on-action
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MWS low view. the macaque at the foot of the crate stacks. MWS, low, 35 mm. CH-MACAQUE lower third, ground level, left of centre, facing side view, running toward frame right, its right side toward the camera. PR-TIN SEALED against the macaque''s chest on its camera side; PR-CRATES STACKED soft at the right edge of frame in the distance. Layers: foreground damp concrete ground; midground the macaque running; background a long lane of lights receding to frame right, crate stacks soft at the right edge. Composition: macaque lower third, lights receding right. Screen direction: West = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH040-P1
shot: SC02-SH040
frame_moment: start
description: Lan at the foot of the stack, both hands going to the top
composition: 'WS, eye-level, 28 mm. CH-LAN frame left, midground, full figure at the foot of the stack, about 4 m from camera, facing toward frame right, both hands on the top of the stack. PR-CRATES STACKED frame centre, the three-high stack (90 cm) with the four-high stack beyond it. Layers: foreground damp concrete ground; midground the three-high stack centre, Lan crossing it; background the four-high stack and soft lanterns. Composition: crates centre, Lan crossing left to right. Screen direction: West = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK R (follow, west): Tracks west about 5 m; Lan vaults the stack and lands, camera ending with her mid-frame running on. This panel: start framing. Subject movement: CH-LAN vaults the three-high crate stack, legs swinging over to her right, and lands'
duration_s: 1.5
dialogue: ''
sound: 'pending sound plan: hands on slats, crates shift, landing, breath'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. Lan at the foot of the stack, both hands going to the top. WS, eye-level, 28 mm. CH-LAN frame left, midground, full figure at the foot of the stack, about 4 m from camera, facing toward frame right, both hands on the top of the stack. PR-CRATES STACKED frame centre, the three-high stack (90 cm) with the four-high stack beyond it. Layers: foreground damp concrete ground; midground the three-high stack centre, Lan crossing it; background the four-high stack and soft lanterns. Composition: crates centre, Lan crossing left to right. Screen direction: West = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH040-P2
shot: SC02-SH040
frame_moment: end
description: Lan landed on the far side, running on
composition: 'WS, eye-level, 28 mm. CH-LAN frame left, midground, full figure at the foot of the stack, about 4 m from camera, facing toward frame right, both hands on the top of the stack. PR-CRATES STACKED frame centre, the three-high stack (90 cm) with the four-high stack beyond it. Layers: foreground damp concrete ground; midground the three-high stack centre, Lan crossing it; background the four-high stack and soft lanterns. Composition: crates centre, Lan crossing left to right. Screen direction: West = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK R (follow, west): Tracks west about 5 m; Lan vaults the stack and lands, camera ending with her mid-frame running on. This panel: end framing (dashed box).'
duration_s: 1.5
dialogue: ''
sound: 'pending sound plan: hands on slats, crates shift, landing, breath'
transition_out: cut-on-action
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. Lan landed on the far side, running on. WS, eye-level, 28 mm. CH-LAN frame left, midground, full figure at the foot of the stack, about 4 m from camera, facing toward frame right, both hands on the top of the stack. PR-CRATES STACKED frame centre, the three-high stack (90 cm) with the four-high stack beyond it. Layers: foreground damp concrete ground; midground the three-high stack centre, Lan crossing it; background the four-high stack and soft lanterns. Composition: crates centre, Lan crossing left to right. Screen direction: West = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH050-P1
shot: SC02-SH050
frame_moment: start
description: Lan hauling herself over the stack, the forearm touching the slat, no graze
composition: 'MS, eye-level, 35 mm. CH-LAN centre, midground, waist-up, the stack at frame left, facing toward frame right, right side to the camera. PR-CRATES STACKED frame left, the four-high stack (120 cm) with a rough splintered slat at its top edge. Layers: foreground damp concrete ground; midground Lan and the stack; background soft lanterns and darker lane gaps. Composition: Lan centre, stack at frame left, the camera-side right forearm clear. Screen direction: West = frame right; Lan''s right side is toward the camera (north). Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK R (follow, west): Tracks west about 3 m; ends as Lan lands on the far side and the graze on her right forearm is visible. This panel: start framing. Subject movement: CH-LAN hauls herself over the four-high stack on her forearms, her outer right forearm dragging over a splintered slat, and lands hissing'
duration_s: 1.75
dialogue: ''
sound: 'pending sound plan: forearm scrape on splintered wood, a hiss through the teeth, landing'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS eye-level view. Lan hauling herself over the stack, the forearm touching the slat, no graze. MS, eye-level, 35 mm. CH-LAN centre, midground, waist-up, the stack at frame left, facing toward frame right, right side to the camera. PR-CRATES STACKED frame left, the four-high stack (120 cm) with a rough splintered slat at its top edge. Layers: foreground damp concrete ground; midground Lan and the stack; background soft lanterns and darker lane gaps. Composition: Lan centre, stack at frame left, the camera-side right forearm clear. Screen direction: West = frame right; Lan''s right side is toward the camera (north). Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH050-P2
shot: SC02-SH050
frame_moment: end
description: Lan landed on the far side with the red graze visible and a wincing hiss
composition: 'MS, eye-level, 35 mm. CH-LAN centre, midground, waist-up, the stack at frame left, facing toward frame right, right side to the camera. PR-CRATES STACKED frame left, the four-high stack (120 cm) with a rough splintered slat at its top edge. Layers: foreground damp concrete ground; midground Lan and the stack; background soft lanterns and darker lane gaps. Composition: Lan centre, stack at frame left, the camera-side right forearm clear. Screen direction: West = frame right; Lan''s right side is toward the camera (north). Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK R (follow, west): Tracks west about 3 m; ends as Lan lands on the far side and the graze on her right forearm is visible. This panel: end framing (dashed box).'
duration_s: 1.75
dialogue: ''
sound: 'pending sound plan: forearm scrape on splintered wood, a hiss through the teeth, landing'
transition_out: cut-on-action
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS eye-level view. Lan landed on the far side with the red graze visible and a wincing hiss. MS, eye-level, 35 mm. CH-LAN centre, midground, waist-up, the stack at frame left, facing toward frame right, right side to the camera. PR-CRATES STACKED frame left, the four-high stack (120 cm) with a rough splintered slat at its top edge. Layers: foreground damp concrete ground; midground Lan and the stack; background soft lanterns and darker lane gaps. Composition: Lan centre, stack at frame left, the camera-side right forearm clear. Screen direction: West = frame right; Lan''s right side is toward the camera (north). Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH060-P1
shot: SC02-SH060
frame_moment: start
description: the macaque entering the slot under the cart
composition: 'MWS, low, 24 mm. CH-MACAQUE lower frame, entering from the left and passing through the slot under the cart, facing side view, running toward frame right, its right side toward the camera. PR-CART PARKED across the frame, bed 40 cm above the ground forming a dark slot; PR-TIN SEALED against the macaque''s chest. Layers: foreground damp concrete ground at ground level; midground the cart bed as a dark slot; background dim lane, a cooler pocket of light further west. Composition: cart bed as a dark horizontal slot, macaque crossing it. Screen direction: West = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'STATIC. Locked off at ground level; the macaque crosses the dark slot under the bed left to right. Subject movement: CH-MACAQUE slips under the cart bed without slowing, the tin held to its chest'
duration_s: 2
dialogue: ''
sound: 'pending sound plan: tin rattle muffled under the cart, claws on concrete'
transition_out: cut-on-action
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MWS low view. the macaque entering the slot under the cart. MWS, low, 24 mm. CH-MACAQUE lower frame, entering from the left and passing through the slot under the cart, facing side view, running toward frame right, its right side toward the camera. PR-CART PARKED across the frame, bed 40 cm above the ground forming a dark slot; PR-TIN SEALED against the macaque''s chest. Layers: foreground damp concrete ground at ground level; midground the cart bed as a dark slot; background dim lane, a cooler pocket of light further west. Composition: cart bed as a dark horizontal slot, macaque crossing it. Screen direction: West = frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH070-P1
shot: SC02-SH070
frame_moment: start
description: Lan entering the far end of the gap, shoulders turned
composition: 'MS, eye-level, 50 mm. CH-LAN centre, midground, waist-up, in the 55 cm service path, facing shoulders square to the walls, head turned toward camera. Layers: foreground a plain stall wall edge, out of focus at each side; midground Lan in the gap; background warm amber lane light spilling from the gap''s mouth behind her. Composition: Lan centre, plain walls close at each side. Screen direction: Neutral: Lan moves toward the camera inside the service path (camera east-looking, ahead of her); keeps the line. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK (lead, backing west ahead of subject): Backs west about 2.5 m ahead of Lan, matching her sideways shuffle toward camera; ends as she is half through. This panel: start framing. Subject movement: CH-LAN shuffles sideways between two plain stall walls toward the camera'
duration_s: 1.5
dialogue: ''
sound: 'pending sound plan: apron on plaster, short breath, muffled market behind'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS eye-level view. Lan entering the far end of the gap, shoulders turned. MS, eye-level, 50 mm. CH-LAN centre, midground, waist-up, in the 55 cm service path, facing shoulders square to the walls, head turned toward camera. Layers: foreground a plain stall wall edge, out of focus at each side; midground Lan in the gap; background warm amber lane light spilling from the gap''s mouth behind her. Composition: Lan centre, plain walls close at each side. Screen direction: Neutral: Lan moves toward the camera inside the service path (camera east-looking, ahead of her); keeps the line. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH070-P2
shot: SC02-SH070
frame_moment: end
description: Lan half through, apron brushing both walls, face tight
composition: 'MS, eye-level, 50 mm. CH-LAN centre, midground, waist-up, in the 55 cm service path, facing shoulders square to the walls, head turned toward camera. Layers: foreground a plain stall wall edge, out of focus at each side; midground Lan in the gap; background warm amber lane light spilling from the gap''s mouth behind her. Composition: Lan centre, plain walls close at each side. Screen direction: Neutral: Lan moves toward the camera inside the service path (camera east-looking, ahead of her); keeps the line. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'TRUCK (lead, backing west ahead of subject): Backs west about 2.5 m ahead of Lan, matching her sideways shuffle toward camera; ends as she is half through. This panel: end framing (dashed box).'
duration_s: 1.5
dialogue: ''
sound: 'pending sound plan: apron on plaster, short breath, muffled market behind'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS eye-level view. Lan half through, apron brushing both walls, face tight. MS, eye-level, 50 mm. CH-LAN centre, midground, waist-up, in the 55 cm service path, facing shoulders square to the walls, head turned toward camera. Layers: foreground a plain stall wall edge, out of focus at each side; midground Lan in the gap; background warm amber lane light spilling from the gap''s mouth behind her. Composition: Lan centre, plain walls close at each side. Screen direction: Neutral: Lan moves toward the camera inside the service path (camera east-looking, ahead of her); keeps the line. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH080-P1
shot: SC02-SH080
frame_moment: start
description: Lan decelerating into a stop
composition: 'WS, eye-level, 35 mm. CH-LAN centre, small, full figure, about 7 m from camera, facing toward frame right, then still. Layers: foreground damp concrete ground; midground Lan, small and still; background dim lanterns far behind in soft bokeh. Composition: Lan small at centre, dim lights behind. Screen direction: Lan has stopped; the dark alley mouth is ahead at frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'STATIC. Locked off; Lan stops and holds her arm. Subject movement: CH-LAN stops, holds her right forearm with her left hand, chest heaving'
duration_s: 3
dialogue: ''
sound: 'pending sound plan: market falling away, heavy breath, no rattle'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. Lan decelerating into a stop. WS, eye-level, 35 mm. CH-LAN centre, small, full figure, about 7 m from camera, facing toward frame right, then still. Layers: foreground damp concrete ground; midground Lan, small and still; background dim lanterns far behind in soft bokeh. Composition: Lan small at centre, dim lights behind. Screen direction: Lan has stopped; the dark alley mouth is ahead at frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH090-P1
shot: SC02-SH090
frame_moment: start
description: face toward the camera, eyes searching
composition: 'MCU, eye-level, 85 mm. CH-LAN left third of frame, chest up, facing three-quarter to camera, head turning toward frame right. Layers: foreground none; midground Lan, chest up; background blurred lanterns at frame right melting into bokeh. Composition: Lan left third, lanterns right. Screen direction: Her gaze sweeps from camera-left to frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'PAN R: Pans right about 25 degrees over 2.5 s to follow her head turn; ends with her eyes still. This panel: start framing. Subject movement: CH-LAN turns her head slowly, scanning'
duration_s: 1.25
dialogue: ''
sound: 'pending sound plan: distant market murmur, breath'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MCU eye-level view. face toward the camera, eyes searching. MCU, eye-level, 85 mm. CH-LAN left third of frame, chest up, facing three-quarter to camera, head turning toward frame right. Layers: foreground none; midground Lan, chest up; background blurred lanterns at frame right melting into bokeh. Composition: Lan left third, lanterns right. Screen direction: Her gaze sweeps from camera-left to frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH090-P2
shot: SC02-SH090
frame_moment: end
description: head turned to frame right, eyes still
composition: 'MCU, eye-level, 85 mm. CH-LAN left third of frame, chest up, facing three-quarter to camera, head turning toward frame right. Layers: foreground none; midground Lan, chest up; background blurred lanterns at frame right melting into bokeh. Composition: Lan left third, lanterns right. Screen direction: Her gaze sweeps from camera-left to frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'PAN R: Pans right about 25 degrees over 2.5 s to follow her head turn; ends with her eyes still. This panel: end framing (dashed box).'
duration_s: 1.25
dialogue: ''
sound: 'pending sound plan: distant market murmur, breath'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MCU eye-level view. head turned to frame right, eyes still. MCU, eye-level, 85 mm. CH-LAN left third of frame, chest up, facing three-quarter to camera, head turning toward frame right. Layers: foreground none; midground Lan, chest up; background blurred lanterns at frame right melting into bokeh. Composition: Lan left third, lanterns right. Screen direction: Her gaze sweeps from camera-left to frame right. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH100-P1
shot: SC02-SH100
frame_moment: start
description: Lan frozen, eyes wide
composition: 'MCU, eye-level, 85 mm. CH-LAN left third of frame, chest up, facing facing the camera, then turning toward frame right. Layers: foreground none; midground Lan, chest up; background deep dark at frame right. Composition: Lan left third, dark right. Screen direction: She turns to frame right toward the alley mouth. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'STATIC. Locked off. She freezes, then turns her head to screen right. Subject movement: CH-LAN freezes at the knocks and turns her head toward the dark at frame right'
duration_s: 3
dialogue: ''
sound: 'pending sound plan: two slow metallic knocks from off screen, then silence'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MCU eye-level view. Lan frozen, eyes wide. MCU, eye-level, 85 mm. CH-LAN left third of frame, chest up, facing facing the camera, then turning toward frame right. Layers: foreground none; midground Lan, chest up; background deep dark at frame right. Composition: Lan left third, dark right. Screen direction: She turns to frame right toward the alley mouth. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

```yaml
record: panel
id: SB-SC02-SH110-P1
shot: SC02-SH110
frame_moment: start
description: Lan walking away from the camera left of centre
composition: 'WS, eye-level, 28 mm. CH-LAN foreground centre-left, small figure from behind, full figure about 8 m from camera, then smaller, facing away from the camera toward the dark arch ahead. Layers: foreground damp concrete ground; midground Lan walking away; background the dark arched alley mouth at centre between two plain plastered walls, no lights. Composition: arch at centre, Lan small below it, lights dimming behind the camera. Screen direction: Lan walks south, away from the camera toward the alley mouth. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
camera_notes: 'STATIC. Locked off. Lan walks away from camera to the arch and stops. Subject movement: CH-LAN walks toward the dark arch and stops at its threshold'
duration_s: 3
dialogue: ''
sound: 'pending sound plan: market fading behind, footsteps on damp concrete, silence ahead'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. Lan walking away from the camera left of centre. WS, eye-level, 28 mm. CH-LAN foreground centre-left, small figure from behind, full figure about 8 m from camera, then smaller, facing away from the camera toward the dark arch ahead. Layers: foreground damp concrete ground; midground Lan walking away; background the dark arched alley mouth at centre between two plain plastered walls, no lights. Composition: arch at centre, Lan small below it, lights dimming behind the camera. Screen direction: Lan walks south, away from the camera toward the alley mouth. Shadow side: Long, soft, falling forward (west) and to camera-right, deeper toward the west.'
image: ''
```

#### SC03 — EXT. BACK ALLEY - NIGHT

```yaml
record: panel
id: SB-SC03-SH010-P1
shot: SC03-SH010
frame_moment: start
description: Lan stepping into frame at frame left, the macaque seated by the tin
composition: 'WS, eye-level, 35 mm. CH-LAN frame left, entering the frame at the edge of the lantern light, full figure, small, about 5 m from camera, facing south toward the stool (frame right); CH-MACAQUE right of centre beside the tin, south-west of it, seated, small, facing facing frame left (north) toward Lan, notched LEFT ear toward the camera. PR-STOOL STANDING frame centre-right on the alley centre line; PR-SAUCER-ALLEY EMPTY upright on the stool seat, chip at 3 o''clock; PR-TIN SEALED on the ground north of the stool (frame left of it), lid up, two brass spots; PR-LANTERN-ALLEY LIT on the iron bracket on the east wall above the stool, glowing, in the upper right of frame. Layers: foreground damp compacted concrete, lower frame; midground stool, saucer, tin and macaque in the lantern pool at centre-right, Lan at frame left; background peeling sandy-plaster east wall, grey drainpipe, deep dark beyond. Composition: stool and lantern right of centre, Lan at frame left, dark around. Screen direction: Camera on the west side looking east; north = frame left, south = frame right; Lan moves right. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'STATIC. Locked off. Subject movement: CH-LAN steps into frame and stops at the edge of the light, breathing hard; CH-MACAQUE sits still beside the tin'
duration_s: 3.5
dialogue: ''
sound: 'pending sound plan: market noise falling away to near silence, room tone, her breath'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. Lan stepping into frame at frame left, the macaque seated by the tin. WS, eye-level, 35 mm. CH-LAN frame left, entering the frame at the edge of the lantern light, full figure, small, about 5 m from camera, facing south toward the stool (frame right); CH-MACAQUE right of centre beside the tin, south-west of it, seated, small, facing facing frame left (north) toward Lan, notched LEFT ear toward the camera. PR-STOOL STANDING frame centre-right on the alley centre line; PR-SAUCER-ALLEY EMPTY upright on the stool seat, chip at 3 o''clock; PR-TIN SEALED on the ground north of the stool (frame left of it), lid up, two brass spots; PR-LANTERN-ALLEY LIT on the iron bracket on the east wall above the stool, glowing, in the upper right of frame. Layers: foreground damp compacted concrete, lower frame; midground stool, saucer, tin and macaque in the lantern pool at centre-right, Lan at frame left; background peeling sandy-plaster east wall, grey drainpipe, deep dark beyond. Composition: stool and lantern right of centre, Lan at frame left, dark around. Screen direction: Camera on the west side looking east; north = frame left, south = frame right; Lan moves right. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH020-P1
shot: SC03-SH020
frame_moment: start
description: left palm raised above the lid
composition: 'CU, eye-level, 100 mm. CH-MACAQUE frame centre, head and shoulders and left arm, low, facing profile facing frame left, notched LEFT ear at the edge of the frame toward the camera. PR-TIN SEALED frame centre-bottom on the ground, lid up with the two brass spots. Layers: foreground none; midground the macaque''s palm on the tin lid; background soft stool leg and dark alley. Composition: lid and palm centre, notched ear at the edge. Screen direction: Camera west, looking east; the macaque turns its head to frame left (north, toward Lan). Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'STATIC. Locked off. Two taps, then the head turns to screen left. Subject movement: CH-MACAQUE taps the worn spots twice with its left palm, then turns its head to Lan'
duration_s: 2.5
dialogue: ''
sound: 'pending sound plan: two soft metallic knocks, the same pitch as in SC02-SH100'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. left palm raised above the lid. CU, eye-level, 100 mm. CH-MACAQUE frame centre, head and shoulders and left arm, low, facing profile facing frame left, notched LEFT ear at the edge of the frame toward the camera. PR-TIN SEALED frame centre-bottom on the ground, lid up with the two brass spots. Layers: foreground none; midground the macaque''s palm on the tin lid; background soft stool leg and dark alley. Composition: lid and palm centre, notched ear at the edge. Screen direction: Camera west, looking east; the macaque turns its head to frame left (north, toward Lan). Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH030-P1
shot: SC03-SH030
frame_moment: start
description: Lan looking down-right at the tin
composition: 'MCU, eye-level, 85 mm. CH-LAN frame right of centre, chest up, in soft shade, facing facing frame right (south) toward the tin, three-quarter to the camera. Layers: foreground none; midground Lan, chest up; background soft dark alley, the lantern as an amber disc at the upper right. Composition: Lan right of centre, looking down screen right. Screen direction: Lan looks south, frame right. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'STATIC. Locked off. Her eyes drop to her right hand. Subject movement: CH-LAN lowers her eyes from the tin to her own right hand raised at her chest; two fingers curl together'
duration_s: 2.5
dialogue: ''
sound: 'pending sound plan: breath, faint lantern hum, room tone'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MCU eye-level view. Lan looking down-right at the tin. MCU, eye-level, 85 mm. CH-LAN frame right of centre, chest up, in soft shade, facing facing frame right (south) toward the tin, three-quarter to the camera. Layers: foreground none; midground Lan, chest up; background soft dark alley, the lantern as an amber disc at the upper right. Composition: Lan right of centre, looking down screen right. Screen direction: Lan looks south, frame right. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH040-P1
shot: SC03-SH040
frame_moment: start
description: Lan stepping into the light, hand at her side
composition: 'MWS, eye-level, 50 mm. CH-LAN frame left, midground, knees up, facing facing frame right (south) toward the tin; CH-MACAQUE frame right, seated south-west of the tin, facing facing frame left (north), notched LEFT ear toward the camera. PR-TIN SEALED frame centre on the ground, lid up. Layers: foreground damp concrete; midground Lan at frame left, tin centre, macaque at frame right; background the stool and dark beyond, lantern top right. Composition: Lan left, tin centre, macaque right. Screen direction: Lan moves right (south) into the light. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'STATIC. Locked off. Lan steps in from screen left. Subject movement: CH-LAN steps in and reaches her right hand toward the tin, stopping a hand''s width short; CH-MACAQUE sits still and watches her hand'
duration_s: 2.5
dialogue: ''
sound: 'pending sound plan: footsteps on cold concrete, breath'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MWS eye-level view. Lan stepping into the light, hand at her side. MWS, eye-level, 50 mm. CH-LAN frame left, midground, knees up, facing facing frame right (south) toward the tin; CH-MACAQUE frame right, seated south-west of the tin, facing facing frame left (north), notched LEFT ear toward the camera. PR-TIN SEALED frame centre on the ground, lid up. Layers: foreground damp concrete; midground Lan at frame left, tin centre, macaque at frame right; background the stool and dark beyond, lantern top right. Composition: Lan left, tin centre, macaque right. Screen direction: Lan moves right (south) into the light. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH050-P1
shot: SC03-SH050
frame_moment: start
description: the saucer held in frame, chip crisp
composition: 'INSERT, eye-level, 100 mm. PR-SAUCER-ALLEY EMPTY centre on the stool seat, chip at 3 o''clock (frame right); PR-STOOL STANDING seat worn into a shallow dish, below the saucer. Layers: foreground none; midground the saucer on the stool seat; background dark alley, amber glow of the lantern above. Composition: saucer centre, chip on the right rim. Screen direction: Static insert; no direction. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'STATIC. Locked off. Subject movement: '
duration_s: 1.5
dialogue: ''
sound: 'pending sound plan: silence, room tone'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: INSERT eye-level view. the saucer held in frame, chip crisp. INSERT, eye-level, 100 mm. PR-SAUCER-ALLEY EMPTY centre on the stool seat, chip at 3 o''clock (frame right); PR-STOOL STANDING seat worn into a shallow dish, below the saucer. Layers: foreground none; midground the saucer on the stool seat; background dark alley, amber glow of the lantern above. Composition: saucer centre, chip on the right rim. Screen direction: Static insert; no direction. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH060-P1
shot: SC03-SH060
frame_moment: start
description: Lan's face in soft shade, lips closed
composition: 'CU, eye-level, 85 mm. CH-LAN frame centre, face fills the frame, facing facing frame right (south) toward the saucer. Layers: foreground none; midground Lan''s face; background soft dark alley, lantern glow behind. Composition: face centre, dark behind. Screen direction: Lan looks south (frame right). Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'PUSH IN: Pushes in about 0.4 m over 2 s to a tight close-up; ends fixed on her eyes. This panel: start framing. Subject movement: CH-LAN speaks ''Ah Ma.'' in a whisper'
duration_s: 1
dialogue: 'CH-LAN (0.5-1.3 s): Ah Ma. [barely audible, whispered]'
sound: 'pending sound plan: room tone, a held breath'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. Lan''s face in soft shade, lips closed. CU, eye-level, 85 mm. CH-LAN frame centre, face fills the frame, facing facing frame right (south) toward the saucer. Layers: foreground none; midground Lan''s face; background soft dark alley, lantern glow behind. Composition: face centre, dark behind. Screen direction: Lan looks south (frame right). Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH060-P2
shot: SC03-SH060
frame_moment: end
description: closer, eyes wet, lips parted
composition: 'CU, eye-level, 85 mm. CH-LAN frame centre, face fills the frame, facing facing frame right (south) toward the saucer. Layers: foreground none; midground Lan''s face; background soft dark alley, lantern glow behind. Composition: face centre, dark behind. Screen direction: Lan looks south (frame right). Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'PUSH IN: Pushes in about 0.4 m over 2 s to a tight close-up; ends fixed on her eyes. This panel: end framing (dashed box).'
duration_s: 1
dialogue: 'CH-LAN (0.5-1.3 s): Ah Ma. [barely audible, whispered]'
sound: 'pending sound plan: room tone, a held breath'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. closer, eyes wet, lips parted. CU, eye-level, 85 mm. CH-LAN frame centre, face fills the frame, facing facing frame right (south) toward the saucer. Layers: foreground none; midground Lan''s face; background soft dark alley, lantern glow behind. Composition: face centre, dark behind. Screen direction: Lan looks south (frame right). Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH070-P1
shot: SC03-SH070
frame_moment: start
description: Lan crouching with both hands under the sealed tin, thumbs on the lid
composition: 'MS, low, 50 mm. CH-LAN frame centre, midground, crouching, knees to head, facing facing frame right (south), tin in both hands; CH-MACAQUE frame right, soft, seated one body length from Lan, facing facing frame left (north), notched LEFT ear toward the camera. PR-TIN OPEN in Lan''s hands at chest height; starts SEALED, ends with the lid lifted a hand''s width. Layers: foreground none; midground Lan crouching with the tin, macaque soft at frame right; background the stool and dark alley. Composition: Lan centre, tin in her hands, macaque soft right. Screen direction: Lan faces south; no direction change. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'STATIC. Locked off. She crouches into the frame, lifts the tin, thumbs open the lid. Subject movement: CH-LAN crouches, lifts the tin in both hands, thumbs press the lid, the lid comes open; CH-MACAQUE watches her hands without flinching'
duration_s: 1.75
dialogue: ''
sound: 'pending sound plan: cloth and knees, tin lid friction pop, breath'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS low view. Lan crouching with both hands under the sealed tin, thumbs on the lid. MS, low, 50 mm. CH-LAN frame centre, midground, crouching, knees to head, facing facing frame right (south), tin in both hands; CH-MACAQUE frame right, soft, seated one body length from Lan, facing facing frame left (north), notched LEFT ear toward the camera. PR-TIN OPEN in Lan''s hands at chest height; starts SEALED, ends with the lid lifted a hand''s width. Layers: foreground none; midground Lan crouching with the tin, macaque soft at frame right; background the stool and dark alley. Composition: Lan centre, tin in her hands, macaque soft right. Screen direction: Lan faces south; no direction change. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH070-P2
shot: SC03-SH070
frame_moment: end
description: the lid lifted a hand's width, the tin open
composition: 'MS, low, 50 mm. CH-LAN frame centre, midground, crouching, knees to head, facing facing frame right (south), tin in both hands; CH-MACAQUE frame right, soft, seated one body length from Lan, facing facing frame left (north), notched LEFT ear toward the camera. PR-TIN OPEN in Lan''s hands at chest height; starts SEALED, ends with the lid lifted a hand''s width. Layers: foreground none; midground Lan crouching with the tin, macaque soft at frame right; background the stool and dark alley. Composition: Lan centre, tin in her hands, macaque soft right. Screen direction: Lan faces south; no direction change. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: STATIC. Locked off. She crouches into the frame, lifts the tin, thumbs open the lid.
duration_s: 1.75
dialogue: ''
sound: 'pending sound plan: cloth and knees, tin lid friction pop, breath'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS low view. the lid lifted a hand''s width, the tin open. MS, low, 50 mm. CH-LAN frame centre, midground, crouching, knees to head, facing facing frame right (south), tin in both hands; CH-MACAQUE frame right, soft, seated one body length from Lan, facing facing frame left (north), notched LEFT ear toward the camera. PR-TIN OPEN in Lan''s hands at chest height; starts SEALED, ends with the lid lifted a hand''s width. Layers: foreground none; midground Lan crouching with the tin, macaque soft at frame right; background the stool and dark alley. Composition: Lan centre, tin in her hands, macaque soft right. Screen direction: Lan faces south; no direction change. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH080-P1
shot: SC03-SH080
frame_moment: start
description: the open tin seen from above
composition: 'INSERT, high, 50 mm. CH-LAN only her hands holding the tin at the sides of frame, facing n/a (hands only). PR-TIN OPEN frame filling, seen from above; PR-CARD FOLDED at the bottom of the tin, folded, outside blank; PR-SPOON IN-TIN diagonally on the card; PR-FRUIT TWISTED the closed paper twist beside the card. Layers: foreground Lan''s fingers at the frame edges; midground the open tin and its contents; background dark. Composition: tin fills the frame, card folded, no writing. Screen direction: Static overhead insert. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'STATIC. Locked off. Subject movement: CH-LAN holds the open tin still'
duration_s: 2
dialogue: ''
sound: 'pending sound plan: faint paper rustle, silence'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: INSERT high view. the open tin seen from above. INSERT, high, 50 mm. CH-LAN only her hands holding the tin at the sides of frame, facing n/a (hands only). PR-TIN OPEN frame filling, seen from above; PR-CARD FOLDED at the bottom of the tin, folded, outside blank; PR-SPOON IN-TIN diagonally on the card; PR-FRUIT TWISTED the closed paper twist beside the card. Layers: foreground Lan''s fingers at the frame edges; midground the open tin and its contents; background dark. Composition: tin fills the frame, card folded, no writing. Screen direction: Static overhead insert. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH090-P1
shot: SC03-SH090
frame_moment: start
description: the twist above the empty saucer
composition: 'CU, eye-level, 100 mm. CH-LAN hands and forearms in the lower frame, the right forearm toward the camera, facing facing frame right (south). PR-SAUCER-ALLEY FRUIT centre on the stool seat, starts EMPTY; PR-FRUIT POURED slices falling from the twist onto the saucer; PR-TIN OPEN in her left hand at the frame edge. Layers: foreground none; midground hands, twist and saucer; background dark stool leg and alley. Composition: saucer centre, hands above it, graze visible on the right forearm. Screen direction: Static close. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'STATIC. Locked off. Subject movement: CH-LAN shakes the dried fruit from the paper twist onto the saucer'
duration_s: 1
dialogue: ''
sound: 'pending sound plan: paper rustle, fruit slices on ceramic'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. the twist above the empty saucer. CU, eye-level, 100 mm. CH-LAN hands and forearms in the lower frame, the right forearm toward the camera, facing facing frame right (south). PR-SAUCER-ALLEY FRUIT centre on the stool seat, starts EMPTY; PR-FRUIT POURED slices falling from the twist onto the saucer; PR-TIN OPEN in her left hand at the frame edge. Layers: foreground none; midground hands, twist and saucer; background dark stool leg and alley. Composition: saucer centre, hands above it, graze visible on the right forearm. Screen direction: Static close. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH090-P2
shot: SC03-SH090
frame_moment: end
description: the fruit slices lying on the saucer
composition: 'CU, eye-level, 100 mm. CH-LAN hands and forearms in the lower frame, the right forearm toward the camera, facing facing frame right (south). PR-SAUCER-ALLEY FRUIT centre on the stool seat, starts EMPTY; PR-FRUIT POURED slices falling from the twist onto the saucer; PR-TIN OPEN in her left hand at the frame edge. Layers: foreground none; midground hands, twist and saucer; background dark stool leg and alley. Composition: saucer centre, hands above it, graze visible on the right forearm. Screen direction: Static close. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: STATIC. Locked off.
duration_s: 1
dialogue: ''
sound: 'pending sound plan: paper rustle, fruit slices on ceramic'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. the fruit slices lying on the saucer. CU, eye-level, 100 mm. CH-LAN hands and forearms in the lower frame, the right forearm toward the camera, facing facing frame right (south). PR-SAUCER-ALLEY FRUIT centre on the stool seat, starts EMPTY; PR-FRUIT POURED slices falling from the twist onto the saucer; PR-TIN OPEN in her left hand at the frame edge. Layers: foreground none; midground hands, twist and saucer; background dark stool leg and alley. Composition: saucer centre, hands above it, graze visible on the right forearm. Screen direction: Static close. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH100-P1
shot: SC03-SH100
frame_moment: start
description: the lid above the open tin
composition: 'CU, eye-level, 100 mm. CH-LAN hands in the lower frame, the right forearm toward the camera, facing facing frame right (south). PR-TIN LID-ON centre in her left hand; lid set back loosely and offset, not sealed. Layers: foreground none; midground the tin and her hands; background dark alley. Composition: tin and knuckles centre, brass spots visible. Screen direction: Static close. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'STATIC. Locked off. Two knocks. Subject movement: CH-LAN sets the lid on loosely and knocks twice with two knuckles of her right hand'
duration_s: 1
dialogue: ''
sound: 'pending sound plan: lid on tin, two soft metallic knocks'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. the lid above the open tin. CU, eye-level, 100 mm. CH-LAN hands in the lower frame, the right forearm toward the camera, facing facing frame right (south). PR-TIN LID-ON centre in her left hand; lid set back loosely and offset, not sealed. Layers: foreground none; midground the tin and her hands; background dark alley. Composition: tin and knuckles centre, brass spots visible. Screen direction: Static close. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH100-P2
shot: SC03-SH100
frame_moment: end
description: the lid on, offset, her knuckles resting on it
composition: 'CU, eye-level, 100 mm. CH-LAN hands in the lower frame, the right forearm toward the camera, facing facing frame right (south). PR-TIN LID-ON centre in her left hand; lid set back loosely and offset, not sealed. Layers: foreground none; midground the tin and her hands; background dark alley. Composition: tin and knuckles centre, brass spots visible. Screen direction: Static close. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: STATIC. Locked off. Two knocks.
duration_s: 1
dialogue: ''
sound: 'pending sound plan: lid on tin, two soft metallic knocks'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. the lid on, offset, her knuckles resting on it. CU, eye-level, 100 mm. CH-LAN hands in the lower frame, the right forearm toward the camera, facing facing frame right (south). PR-TIN LID-ON centre in her left hand; lid set back loosely and offset, not sealed. Layers: foreground none; midground the tin and her hands; background dark alley. Composition: tin and knuckles centre, brass spots visible. Screen direction: Static close. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH110-P1
shot: SC03-SH110
frame_moment: start
description: the macaque reaching for the fruit
composition: 'MS, eye-level, 85 mm. CH-MACAQUE frame centre, low, seated at the stool, facing three-quarter, facing frame left toward the saucer, notched LEFT ear toward the camera. PR-SAUCER-ALLEY EATEN on the stool seat, starts with fruit, ends nearly empty; PR-STOOL STANDING worn seat. Layers: foreground none; midground the macaque at the saucer; background dark alley. Composition: macaque centre, saucer beside. Screen direction: Static. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'STATIC. Locked off. The macaque shuffles forward into the focus plane. Subject movement: CH-MACAQUE shuffles forward and eats the dried fruit with its fingers'
duration_s: 2.5
dialogue: ''
sound: 'pending sound plan: soft chewing, claws shuffle, fruit on ceramic'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS eye-level view. the macaque reaching for the fruit. MS, eye-level, 85 mm. CH-MACAQUE frame centre, low, seated at the stool, facing three-quarter, facing frame left toward the saucer, notched LEFT ear toward the camera. PR-SAUCER-ALLEY EATEN on the stool seat, starts with fruit, ends nearly empty; PR-STOOL STANDING worn seat. Layers: foreground none; midground the macaque at the saucer; background dark alley. Composition: macaque centre, saucer beside. Screen direction: Static. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

```yaml
record: panel
id: SB-SC03-SH120-P1
shot: SC03-SH120
frame_moment: start
description: Lan lowering toward the ground
composition: 'WS, eye-level, 35 mm. CH-LAN frame left, seated low, full figure, about 4.5 m from camera, facing facing frame right (south), toward the macaque; CH-MACAQUE frame right of Lan, seated at the stool, facing three-quarter, facing frame left toward the saucer, notched LEFT ear toward the camera. PR-TIN LID-ON in Lan''s lap, lid loose and offset; PR-STOOL STANDING frame right of centre with the saucer on its seat; PR-SAUCER-ALLEY EATEN on the stool seat, nearly empty; PR-LANTERN-ALLEY LIT on the east wall above the stool. Layers: foreground damp compacted concrete; midground Lan seated at frame left, the stool and macaque at frame right; background east wall with the drainpipe, the lantern glowing, deep dark beyond. Composition: stool and lantern right of centre, Lan left, small in the dark. Screen direction: Camera west looking east, same as SC03-SH010. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
camera_notes: 'STATIC. Locked off. Lan sits down at screen left. Subject movement: CH-LAN lowers herself to sit on the cold ground with the tin in her lap and almost smiles; CH-MACAQUE eats beside her'
duration_s: 3
dialogue: ''
sound: 'pending sound plan: soft breath, chewing, room tone'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. Lan lowering toward the ground. WS, eye-level, 35 mm. CH-LAN frame left, seated low, full figure, about 4.5 m from camera, facing facing frame right (south), toward the macaque; CH-MACAQUE frame right of Lan, seated at the stool, facing three-quarter, facing frame left toward the saucer, notched LEFT ear toward the camera. PR-TIN LID-ON in Lan''s lap, lid loose and offset; PR-STOOL STANDING frame right of centre with the saucer on its seat; PR-SAUCER-ALLEY EATEN on the stool seat, nearly empty; PR-LANTERN-ALLEY LIT on the east wall above the stool. Layers: foreground damp compacted concrete; midground Lan seated at frame left, the stool and macaque at frame right; background east wall with the drainpipe, the lantern glowing, deep dark beyond. Composition: stool and lantern right of centre, Lan left, small in the dark. Screen direction: Camera west looking east, same as SC03-SH010. Shadow side: Deep teal, soft-edged, detail kept near #14100E, falling west toward camera and down.'
image: ''
```

#### SC04 — EXT. NIGHT MARKET - LAN'S NOODLE STALL - LATER

```yaml
record: panel
id: SB-SC04-SH010-P1
shot: SC04-SH010
frame_moment: start
description: Lan at the shelf, looking at it
composition: 'WS, eye-level, 28 mm. CH-LAN frame left of centre at the shelf, full figure, about 4.5 m from camera, facing toward the shelf at frame left. PR-TIN LID-ON on the shelf at frame left, lid loose and offset; PR-PHOTO STANDING on the shelf beside the tin; PR-SAUCER-STALL FACEDOWN on the shelf at the west end, face-down. Layers: foreground out-of-focus counter edge; midground Lan at the shelf, stall bulb dimmed; background shuttered corrugated stalls, an empty lane, a few dimmed lanterns. Composition: same composition as SC01-SH010: stall centred, red lanterns across the top, empty lane. Screen direction: Camera north looking south, same as SC01; shelf at frame left. Shadow side: Soft, falling to camera-right and down, umber detail.'
camera_notes: 'STATIC. Locked off. Subject movement: CH-LAN stands at the shelf and looks at it'
duration_s: 2.5
dialogue: ''
sound: 'pending sound plan: night market closing ambience, distant shutter, quiet'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. Lan at the shelf, looking at it. WS, eye-level, 28 mm. CH-LAN frame left of centre at the shelf, full figure, about 4.5 m from camera, facing toward the shelf at frame left. PR-TIN LID-ON on the shelf at frame left, lid loose and offset; PR-PHOTO STANDING on the shelf beside the tin; PR-SAUCER-STALL FACEDOWN on the shelf at the west end, face-down. Layers: foreground out-of-focus counter edge; midground Lan at the shelf, stall bulb dimmed; background shuttered corrugated stalls, an empty lane, a few dimmed lanterns. Composition: same composition as SC01-SH010: stall centred, red lanterns across the top, empty lane. Screen direction: Camera north looking south, same as SC01; shelf at frame left. Shadow side: Soft, falling to camera-right and down, umber detail.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH020-P1
shot: SC04-SH020
frame_moment: start
description: the saucer face-down, a hand on it
composition: 'CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right; the graze visible on the forearm, facing n/a (hand only). PR-SAUCER-STALL FACEUP centre; starts FACEDOWN, ends face-up on the counter edge with the chip at 3 o''clock; PR-TIN LID-ON soft behind at frame left. Layers: foreground none; midground the saucer; background soft tin and photo. Composition: saucer centre. Screen direction: Camera 20 degrees off axis north-west; hand enters from the right. Shadow side: Soft, falling to camera-right and down, umber detail.'
camera_notes: 'STATIC. Locked off. The saucer turns face-up and is set on the counter edge. Subject movement: CH-LAN turns the saucer face-up and sets it on the counter edge'
duration_s: 1
dialogue: ''
sound: 'pending sound plan: ceramic turning and setting down, quiet'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. the saucer face-down, a hand on it. CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right; the graze visible on the forearm, facing n/a (hand only). PR-SAUCER-STALL FACEUP centre; starts FACEDOWN, ends face-up on the counter edge with the chip at 3 o''clock; PR-TIN LID-ON soft behind at frame left. Layers: foreground none; midground the saucer; background soft tin and photo. Composition: saucer centre. Screen direction: Camera 20 degrees off axis north-west; hand enters from the right. Shadow side: Soft, falling to camera-right and down, umber detail.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH020-P2
shot: SC04-SH020
frame_moment: end
description: the saucer face-up on the counter edge, chip at 3 o'clock
composition: 'CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right; the graze visible on the forearm, facing n/a (hand only). PR-SAUCER-STALL FACEUP centre; starts FACEDOWN, ends face-up on the counter edge with the chip at 3 o''clock; PR-TIN LID-ON soft behind at frame left. Layers: foreground none; midground the saucer; background soft tin and photo. Composition: saucer centre. Screen direction: Camera 20 degrees off axis north-west; hand enters from the right. Shadow side: Soft, falling to camera-right and down, umber detail.'
camera_notes: STATIC. Locked off. The saucer turns face-up and is set on the counter edge.
duration_s: 1
dialogue: ''
sound: 'pending sound plan: ceramic turning and setting down, quiet'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. the saucer face-up on the counter edge, chip at 3 o''clock. CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right; the graze visible on the forearm, facing n/a (hand only). PR-SAUCER-STALL FACEUP centre; starts FACEDOWN, ends face-up on the counter edge with the chip at 3 o''clock; PR-TIN LID-ON soft behind at frame left. Layers: foreground none; midground the saucer; background soft tin and photo. Composition: saucer centre. Screen direction: Camera 20 degrees off axis north-west; hand enters from the right. Shadow side: Soft, falling to camera-right and down, umber detail.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH030-P1
shot: SC04-SH030
frame_moment: start
description: knuckles above the lid
composition: 'CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right; the graze on the forearm, facing n/a (hand only). PR-TIN LID-ON frame centre on the shelf, lid loose and offset, the two brass spots visible; PR-PHOTO STANDING soft at the right edge. Layers: foreground none; midground the tin lid; background soft photo at the right edge, dimmed lanterns. Composition: lid centre, photo soft at the right edge. Screen direction: Camera 20 degrees off axis; hand enters from the right. Shadow side: Soft, falling to camera-right and down, umber detail.'
camera_notes: 'STATIC. Locked off. Two knocks. Subject movement: CH-LAN knocks twice on the lid with two knuckles'
duration_s: 2
dialogue: ''
sound: 'pending sound plan: two soft metallic knocks, the same as SC03-SH100'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: CU eye-level view. knuckles above the lid. CU, eye-level, 85 mm. CH-LAN only her right hand and wrist enter from the lower right; the graze on the forearm, facing n/a (hand only). PR-TIN LID-ON frame centre on the shelf, lid loose and offset, the two brass spots visible; PR-PHOTO STANDING soft at the right edge. Layers: foreground none; midground the tin lid; background soft photo at the right edge, dimmed lanterns. Composition: lid centre, photo soft at the right edge. Screen direction: Camera 20 degrees off axis; hand enters from the right. Shadow side: Soft, falling to camera-right and down, umber detail.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH040-P1
shot: SC04-SH040
frame_moment: start
description: the macaque on the wire, head tilted
composition: 'MS, low, 50 mm. CH-MACAQUE frame centre-top on the wire, then dropping to the counter edge at the lower frame, facing three-quarter facing frame left, notched LEFT ear toward the camera. PR-SAUCER-STALL FACEUP on the counter edge at the lower frame, chip at 3 o''clock. Layers: foreground none; midground the macaque and the saucer; background dimmed red lanterns, dark above. Composition: wire at the top, saucer at the bottom, the macaque between. Screen direction: Static, vertical move. Shadow side: Soft, falling to camera-right and down, umber detail.'
camera_notes: 'STATIC. Locked off. The macaque drops about 1.2 m to the counter edge. Subject movement: CH-MACAQUE tilts its head, then drops lightly to the counter edge beside the saucer'
duration_s: 1.25
dialogue: ''
sound: 'pending sound plan: wire creak, soft landing on the counter'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS low view. the macaque on the wire, head tilted. MS, low, 50 mm. CH-MACAQUE frame centre-top on the wire, then dropping to the counter edge at the lower frame, facing three-quarter facing frame left, notched LEFT ear toward the camera. PR-SAUCER-STALL FACEUP on the counter edge at the lower frame, chip at 3 o''clock. Layers: foreground none; midground the macaque and the saucer; background dimmed red lanterns, dark above. Composition: wire at the top, saucer at the bottom, the macaque between. Screen direction: Static, vertical move. Shadow side: Soft, falling to camera-right and down, umber detail.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH040-P2
shot: SC04-SH040
frame_moment: end
description: the macaque sitting beside the saucer
composition: 'MS, low, 50 mm. CH-MACAQUE frame centre-top on the wire, then dropping to the counter edge at the lower frame, facing three-quarter facing frame left, notched LEFT ear toward the camera. PR-SAUCER-STALL FACEUP on the counter edge at the lower frame, chip at 3 o''clock. Layers: foreground none; midground the macaque and the saucer; background dimmed red lanterns, dark above. Composition: wire at the top, saucer at the bottom, the macaque between. Screen direction: Static, vertical move. Shadow side: Soft, falling to camera-right and down, umber detail.'
camera_notes: STATIC. Locked off. The macaque drops about 1.2 m to the counter edge.
duration_s: 1.25
dialogue: ''
sound: 'pending sound plan: wire creak, soft landing on the counter'
transition_out: cut
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: MS low view. the macaque sitting beside the saucer. MS, low, 50 mm. CH-MACAQUE frame centre-top on the wire, then dropping to the counter edge at the lower frame, facing three-quarter facing frame left, notched LEFT ear toward the camera. PR-SAUCER-STALL FACEUP on the counter edge at the lower frame, chip at 3 o''clock. Layers: foreground none; midground the macaque and the saucer; background dimmed red lanterns, dark above. Composition: wire at the top, saucer at the bottom, the macaque between. Screen direction: Static, vertical move. Shadow side: Soft, falling to camera-right and down, umber detail.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH050-P1
shot: SC04-SH050
frame_moment: start
description: Lan's hand on the switch, the stall bulb lit and dim
composition: 'WS, eye-level, 35 mm. CH-LAN frame left at the east post, full figure, about 4.5 m from camera, facing toward the post at frame left; CH-MACAQUE frame centre-right, sitting beside the saucer on the counter edge, facing three-quarter facing frame left, notched LEFT ear toward the camera. PR-SAUCER-STALL FACEUP on the counter edge, chip at 3 o''clock; PR-TIN LID-ON on the shelf at frame left. Layers: foreground none; midground Lan at the east post, the macaque at the saucer; background shuttered stalls, dimmed red lanterns. Composition: same wide as SC04-SH010. Screen direction: Camera north looking south, same as SC01. Shadow side: Soft, falling to camera-right and down, umber detail.'
camera_notes: 'STATIC. Locked off. The bulb goes out; the frame falls to black over the last 0.5 s. Subject movement: CH-LAN reaches to the wall switch and turns off the last light; CH-MACAQUE sits by the saucer'
duration_s: 1
dialogue: ''
sound: 'pending sound plan: switch click, a distant shutter, quiet'
transition_out: '- (same shot)'
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. Lan''s hand on the switch, the stall bulb lit and dim. WS, eye-level, 35 mm. CH-LAN frame left at the east post, full figure, about 4.5 m from camera, facing toward the post at frame left; CH-MACAQUE frame centre-right, sitting beside the saucer on the counter edge, facing three-quarter facing frame left, notched LEFT ear toward the camera. PR-SAUCER-STALL FACEUP on the counter edge, chip at 3 o''clock; PR-TIN LID-ON on the shelf at frame left. Layers: foreground none; midground Lan at the east post, the macaque at the saucer; background shuttered stalls, dimmed red lanterns. Composition: same wide as SC04-SH010. Screen direction: Camera north looking south, same as SC01. Shadow side: Soft, falling to camera-right and down, umber detail.'
image: ''
```

```yaml
record: panel
id: SB-SC04-SH050-P2
shot: SC04-SH050
frame_moment: end
description: the frame nearly black, the last glow of the red lanterns, two silhouettes
composition: 'WS, eye-level, 35 mm. CH-LAN frame left at the east post, full figure, about 4.5 m from camera, facing toward the post at frame left; CH-MACAQUE frame centre-right, sitting beside the saucer on the counter edge, facing three-quarter facing frame left, notched LEFT ear toward the camera. PR-SAUCER-STALL FACEUP on the counter edge, chip at 3 o''clock; PR-TIN LID-ON on the shelf at frame left. Layers: foreground none; midground Lan at the east post, the macaque at the saucer; background shuttered stalls, dimmed red lanterns. Composition: same wide as SC04-SH010. Screen direction: Camera north looking south, same as SC01. Shadow side: Soft, falling to camera-right and down, umber detail.'
camera_notes: STATIC. Locked off. The bulb goes out; the frame falls to black over the last 0.5 s.
duration_s: 1
dialogue: ''
sound: 'pending sound plan: switch click, a distant shutter, quiet'
transition_out: cut-to-black
sketch_prompt: 'rough greyscale storyboard sketch, pencil lines, simple tones, 16:9 frame: WS eye-level view. the frame nearly black, the last glow of the red lanterns, two silhouettes. WS, eye-level, 35 mm. CH-LAN frame left at the east post, full figure, about 4.5 m from camera, facing toward the post at frame left; CH-MACAQUE frame centre-right, sitting beside the saucer on the counter edge, facing three-quarter facing frame left, notched LEFT ear toward the camera. PR-SAUCER-STALL FACEUP on the counter edge, chip at 3 o''clock; PR-TIN LID-ON on the shelf at frame left. Layers: foreground none; midground Lan at the east post, the macaque at the saucer; background shuttered stalls, dimmed red lanterns. Composition: same wide as SC04-SH010. Screen direction: Camera north looking south, same as SC01. Shadow side: Soft, falling to camera-right and down, umber detail.'
image: ''
```

#### Continuity check log
Checked on the text of the shot records (screen direction, travel direction, eyelines, prop states, graze, macaque ear side). Panels are not images, so this is a paper check.

| Cut | Check | Result |
|---|---|---|
| SC01-SH010 to SC01-SH020 | screen direction, props, costume state, eyeline | OK |
| SC01-SH020 to SC01-SH030 | screen direction, props, costume state, eyeline | OK; same camera, hand enters from the right, saucer UPRIGHT then FACEDOWN |
| SC01-SH030 to SC01-SH040 | screen direction, props, costume state, eyeline | OK; saucer stays face-down |
| SC01-SH040 to SC01-SH050 | screen direction, props, costume state, eyeline | OK |
| SC01-SH050 to SC01-SH060 | screen direction, props, costume state, eyeline | OK |
| SC01-SH060 to SC01-SH070 | screen direction, props, costume state, eyeline | OK |
| SC01-SH070 to SC01-SH080 | screen direction, props, costume state, eyeline | OK |
| SC01-SH080 to SC01-SH090 | screen direction, props, costume state, eyeline | OK |
| SC01-SH090 to SC01-SH100 | screen direction, props, costume state, eyeline | OK; pot BOIL-OVER in both, exits are frame right |
| SC01-SH100 to SC02-SH010 | screen direction, props, costume state, eyeline | OK; Lan exits frame right (west), macaque travels west = frame right |
| SC02-SH010 to SC02-SH020 | screen direction, props, costume state, eyeline | OK |
| SC02-SH020 to SC02-SH030 | screen direction, props, costume state, eyeline | OK |
| SC02-SH030 to SC02-SH040 | screen direction, props, costume state, eyeline | OK |
| SC02-SH040 to SC02-SH050 | screen direction, props, costume state, eyeline | OK |
| SC02-SH050 to SC02-SH060 | screen direction, props, costume state, eyeline | OK |
| SC02-SH060 to SC02-SH070 | screen direction, props, costume state, eyeline | OK |
| SC02-SH070 to SC02-SH080 | screen direction, props, costume state, eyeline | OK |
| SC02-SH080 to SC02-SH090 | screen direction, props, costume state, eyeline | OK |
| SC02-SH090 to SC02-SH100 | screen direction, props, costume state, eyeline | OK |
| SC02-SH100 to SC02-SH110 | screen direction, props, costume state, eyeline | OK; her head turn to frame right (west, alley mouth) then walk south into the arch from a new set-up |
| SC02-SH110 to SC03-SH010 | screen direction, props, costume state, eyeline | OK; camera flips to the west side of the alley, Lan steps in from frame left (north); axis reset by the arch |
| SC03-SH010 to SC03-SH020 | screen direction, props, costume state, eyeline | OK; macaque faces north with its left ear to the west camera, consistent |
| SC03-SH020 to SC03-SH030 | screen direction, props, costume state, eyeline | OK |
| SC03-SH030 to SC03-SH040 | screen direction, props, costume state, eyeline | OK |
| SC03-SH040 to SC03-SH050 | screen direction, props, costume state, eyeline | OK |
| SC03-SH050 to SC03-SH060 | screen direction, props, costume state, eyeline | OK |
| SC03-SH060 to SC03-SH070 | screen direction, props, costume state, eyeline | OK |
| SC03-SH070 to SC03-SH080 | screen direction, props, costume state, eyeline | OK |
| SC03-SH080 to SC03-SH090 | screen direction, props, costume state, eyeline | OK |
| SC03-SH090 to SC03-SH100 | screen direction, props, costume state, eyeline | OK |
| SC03-SH100 to SC03-SH110 | screen direction, props, costume state, eyeline | NOTE: see CONFLICT-SB-01 (macaque position relative to the stool) |
| SC03-SH110 to SC03-SH120 | screen direction, props, costume state, eyeline | NOTE: see CONFLICT-SB-01 |
| SC03-SH120 to SC04-SH010 | screen direction, props, costume state, eyeline | OK; hard scene change, camera returns to the SC01 north-looking-south set-up |
| SC04-SH010 to SC04-SH020 | screen direction, props, costume state, eyeline | OK |
| SC04-SH020 to SC04-SH030 | screen direction, props, costume state, eyeline | OK |
| SC04-SH030 to SC04-SH040 | screen direction, props, costume state, eyeline | OK |
| SC04-SH040 to SC04-SH050 | screen direction, props, costume state, eyeline | OK |

#### Conflicts raised
- CONFLICT-SB-01 (minor, to film-director / script-supervisor): in SC03-SH010 and SC03-SH040 the macaque sits south-west of the tin, beside it (north of the stool). In SC03-SH110 and SC03-SH120 it sits at the stool facing frame left (north) toward the saucer on the stool seat, which puts it south of the stool. The panels follow the records as written. The macaque's position relative to the stool needs one answer.


#### Handoff
- Produced: storyboard@1 (55 panels: {'SC01': 13, 'SC02': 18, 'SC03': 16, 'SC04': 8})
- Conflicts raised: CONFLICT-SB-01 (minor, macaque position relative to the stool, SC03)
- Next: user approval, then image-prompt-engineer, film-editor


## 9. Audio


Source: `11_sound/voice.md`

### Voice Plan: The Two Knocks

Three spoken lines, all by Lan, all on screen. The macaque makes animal sounds (a sound-designer item, not voice). Ah Ma is a photo and has no lines. Target tool: Veo 3.1 native audio (dialogue in quotation marks in the prompt, speaker named). No audio has been generated.

#### Voice profiles

##### VO-LAN — Lan (CH-LAN)
- Descriptors: early-30s woman · low-to-mid pitch, lower than a bright speaking voice · dry, slightly husky timbre, chest resonance · brisk pace, clipped, little melody · accent: soft Southeast Asian English as a regional speaker, lightly flavoured, no caricature and no country-specific accent (setting is deliberately regional) · low energy, worn out · texture: a little dry and breathy at the end of a long night
- Under stress: pitch rises and the voice opens wide and loud for "Hey!", with a hard onset and no breathiness. In the alley the voice drops below her normal pitch to a whisper: breath carries the sound, no voicing on "Ma".
- Distinct from other voices by: she is the only voice in the film; the macaque has non-speech sounds only.
- Tool settings (once chosen): Veo 3.1 native audio, no voice ID is selectable; voice identity across the three clips is not controllable. See "Consistency risk".
- Consent note: no cloning. Synthetic voice described only by qualities. No celebrity or real-person reference.

#### Pronunciation guide
| Word | Respelling | Stress | Notes |
|---|---|---|---|
| Ah Ma | ah-MAH | second syllable lightly longer | The word for grandmother. Both syllables soft, open "a" (as in "father"). Keep it to a regional reading; no specific dialect is claimed. Avoid "ay-ma" or "ah-MAY". |
| Almost closing | AWL-most CLOH-zing | on "AWL" and "CLOH" | Plain English, even and flat |
| Hey | HEY | one syllable | Shouted, not stretched |

#### Lines

```yaml
record: voice_line
id: VL-SC01-001
shot: SC01-SH060
character: CH-LAN
line: "Almost closing."
delivery: "intention: tell the pot it is nearly over, to nobody, to herself; stress: none, the flat tone is the point, very slight lean on 'closing'; pace: brisk, 2 words in 1.2 s; volume: conversational-low, under the market ambience; pauses: none inside the line, a short breath out through the nose after it; breath: tired exhale before 'Almost'; ends on a falling pitch; mouth closes after the line, eyes stay on the pot"
timing: "0.6-1.8 s"
on_screen: true
lip_sync: true
```

```yaml
record: voice_line
id: VL-SC01-002
shot: SC01-SH080
character: CH-LAN
line: "Hey!"
delivery: "intention: stop the thief, a reflex shout before she thinks; stress: whole word; pace: one short syllable, about 0.4 s; volume: loud, the loudest sound in the film so far; pauses: none; breath: sharp intake just before (0.4 s), none after; pitch jumps from her flat speaking level to a clear shout, hard onset, a little rasp at the top; mouth open wide, jaw dropped, arm out"
timing: "0.5-1.0 s"
on_screen: true
lip_sync: true
```

```yaml
record: voice_line
id: VL-SC03-001
shot: SC03-SH060
character: CH-LAN
line: "Ah Ma."
delivery: "intention: say the name she has not said in a long time, as a recognition, not a call; stress: a light lean on 'Ma', falling; pace: slow, two soft syllables over about 0.8 s; volume: barely audible, near a whisper, closer to breath than voice, just above the alley room tone; pauses: a held beat of silence before it (0.5 s of the shot) and a short silence after as her lips part; breath: a small breath in before, a catch in the throat after 'Ma', no sob; eyes wet, lips parted after the name"
timing: "0.5-1.3 s"
on_screen: true
lip_sync: true
```

#### Timing fit
| Line | Shot | Shot length s | Window | Words | Fits? |
|---|---|---|---|---|---|
| VL-SC01-001 | SC01-SH060 | 2.5 | 0.6-1.8 s (1.2 s) | 2 | Yes. 2 words in 1.2 s is slower than the 2.5 words/s estimate, so room for a tired read. 0.7 s of tail before the cut. |
| VL-SC01-002 | SC01-SH080 | 1.5 | 0.5-1.0 s (0.5 s) | 1 | Yes, if the shout is one short syllable. A held "Heeey" will overrun the cut at 1.5 s. |
| VL-SC03-001 | SC03-SH060 | 2.0 | 0.5-1.3 s (0.8 s) | 2 | Yes. It leaves 0.7 s after for the lips-parted hold. |

No line is over its window. The edit plan (edit_plan@1) does not trim any of these shots. If CR-E01 is accepted it only touches SC02, not these.

#### Consistency risk
Veo 3.1 gives no fixed voice, so the three clips may come out with three slightly different timbres. Order of choice, cheapest first: (1) re-roll the clip until the timbre is close; (2) describe the same voice qualities in each prompt (the descriptors above); (3) record or synthesise the three lines separately in a TTS tool and replace the clip audio in post (all three lines are short and on-screen, so lip-sync is the cost; "Hey!" and "Almost closing." are the easiest to fit). The user has no audio tool budget, so option 3 is not available now. This is flagged for the video-prompt-engineer and quality-control. OPEN-QUESTION: if the voices differ between clips, does the user accept the best-of-takes, or want a replacement pass?

#### TTS scripts
No TTS tool is in the brief. The scripts below are for Veo 3.1 prompt syntax (quotation marks and a speaker label), to be pasted by the video-prompt-engineer:

- SC01-SH060: Lan says, in a flat, tired, low voice, to the pot: "Almost closing."
- SC01-SH080: Lan spins and shouts, a loud sharp startled shout: "Hey!"
- SC03-SH060: Lan whispers, barely audible, breathy, with wet eyes: "Ah Ma."

Per the tts-adapters guidance on Veo 3.1 (labelled OFFICIAL there), dialogue goes in quotation marks with the speaker named; no sound-effect or subtitle text is added to the same line.

#### Take review log
| Line | Take | Verdict | Notes |
|---|---|---|---|
| (no takes exist) | | | Nothing generated. Review checks when takes arrive: correct words, "ah-MAH" pronunciation, same voice as the other two lines, delivery as written, line fits its window, no subtitles burned into the picture |

#### Handoff
- Produced: voice@1 (REVIEW): 1 profile (Lan), 3 lines, pronunciation guide
- Lines over window: none
- Lip-sync lines for the video-prompt-engineer: VL-SC01-001, VL-SC01-002, VL-SC03-001 (all on screen)
- Open items: OPEN-QUESTION on voice mismatch between clips; Veo voice identity not controllable
- Conflicts: none
- Next: sound-designer (levels: "Hey!" is the loudest voice; "Ah Ma." sits just above room tone), music-director


Source: `11_sound/music.md`

### Music Plan: The Two Knocks

There is no music tool and no budget. Nothing is composed or generated. This is the spotting and cue sheet for music added in post later (a composer, a library licensed for the film, or a music tool when one exists). Times are on the 96.0 s paper-edit timeline (edit_plan@1) and are anchored to shot IDs so they re-time with the cut. If CR-E01 (trim four SC02 shots by 0.5 s each) is accepted, every time after SC02-SH040 moves 2.0 s earlier and the cue lengths shorten by the same amount.

#### Concept
- Role of music: the film is told by image, hands and a sound (the knock). Music enters only to carry the chase and, afterwards, the tenderness of the alley and the close. It never speaks over the story's quiet turns.
- Palette: small, close and handmade, no orchestra and no synths: a plucked string instrument, soft tuned wood percussion (marimba or wood-block feel), a low bowed sustained note, a hand drum played with fingers. No named culture is claimed; the setting is deliberately regional.
- Rules (what music never does): it never covers the knock, the three lines or the tin's rattle; it never plays under SC01's routine (the market is the music there); it never announces the reveal before the image shows it; no vocals and no lyrics; no riser or sting.

#### Themes
| Theme | Idea/character | Description (contour, mode, rhythm) | Instrument | Transformations |
|---|---|---|---|---|
| T1 "Two Knocks" | The ritual, the grandmother, the tin | Two notes of equal length, falling a minor third, a short rest, then a rising step to a warmer note that does not resolve fully (open fifth). It mirrors the knock's rhythm: tok... tok. Mode: D dorian | plucked string | Chase: only its rhythm, as muted wood taps with no pitch (the ritual in pieces). Alley: the full melody, slow, with the answer note. Close: the same two notes, once, then the answer arrives and rings out |
| T2 "Chase" | Lan's drive and the macaque's speed | Short repeating figure in 2 bars, off-beat accents, a steady pulse; no melody to speak of | wood percussion, hand drum, pizzicato string | Strips down to the pulse alone, then stops dead at SC02-SH070. Does not return |

#### Spotting
| Scene | Moment | Music / none / source | Function | Reason |
|---|---|---|---|---|
| SC01 | SH010 to SH080 (0.0 to 19.0 s) | none (source: market ambience only) | Show the numb routine | The market is already full of sound; music would soften the numbness. The tin touch, the saucer, the line and "Hey!" all need a bare bed |
| SC01 | SH090 to SH100 (19.0 to 23.5 s) | score M01 begins at SH090 | Chase starts | The pot boils over; the world speeds up |
| SC02 | SH010 to SH070 (23.5 to 44.0 s) | score M01 continues | Drive, comedy of the squeeze | Keeps pace; ends at the apron squeeze button |
| SC02 | SH080 to SH100 (44.0 to 52.5 s) | none | Loss, breath, the two knocks | Silence is the loss; the knocks are the event and must be heard alone |
| SC02 | SH110 (52.5 to 55.5 s) | M02 begins in the last 0.5 s | Lead into the alley | A low held note rides the J-cut from lane to alley |
| SC03 | SH010 to SH050 (55.5 to 68.0 s) | M02 held note only (soft), no melody | Hush | The tin sits in the light; the macaque taps; let the ritual speak by itself |
| SC03 | SH060 (68.0 to 70.0 s) | none | The whispered "Ah Ma." | The line is barely audible: nothing may sit near it |
| SC03 | SH070 to SH090 (70.0 to 77.5 s) | M03 the theme T1, first full statement | Tenderness: she chooses to open the tin | She acts; the music follows her hands, it does not lead |
| SC03 | SH100 (77.5 to 79.5 s) | none (music steps out for the two knocks) | The knock is Lan's now | The knock is the strongest sound; nothing under it |
| SC03 | SH110 to SH120 (79.5 to 85.0 s) | M03 resumes, warmer, answer note arrives | Rest, closure | The macaque eats; she sits; the answer to the question the theme asked |
| SC04 | SH010 to SH020 (85.0 to 89.5 s) | none | The quiet lane | The stall is shuttered; the lane itself is the bed |
| SC04 | SH030 (89.5 to 91.5 s) | none (the two knocks, bare) | The ritual repeated | Same as SC03-SH100 |
| SC04 | SH040 to SH050 (91.5 to 96.0 s) | M04 | Close | Two plucked notes, the answer, then the ring into black |

#### Cues

```yaml
record: music_cue
id: M01
start: "SC01-SH090 +0.0 s (19.0 s)"
end: "SC02-SH070 end (44.0 s)"
function: "Drive the chase from the boil-over to the squeeze; comedy and cost, not menace"
description: "Hand drum and wood percussion pulse with a pizzicato two-bar figure; a plucked string adds a short answering fill after each bar; no melody; T1's rhythm appears once as muted taps in the last bar of SC02-SH060"
tempo_bpm: 128
key: "D dorian (mostly unpitched percussion; the string stays on D, F, A)"
meter: "4/4 (bar = 1.875 s)"
instrumentation: [hand drum, wood percussion, pizzicato string, plucked string]
dynamics: "Enters at mp on the boil-over, builds to mf by SC02-SH040, holds, drops to p under SC02-SH060, stops on a button at the end of SC02-SH070"
hit_points:
  - "SC01-SH090 +1.2 s (20.2 s): boil-over surge, first accent"
  - "SC02-SH040 end (35.5 s): landing of the vault, a bar-end accent"
  - "SC02-SH050 +2.6 s (38.1 s): the graze and her hiss; the percussion drops out for one beat, then returns lighter"
  - "SC02-SH070 end (44.0 s): hard button as she gets through the gap, then silence"
in_out: "Hard start on the boil-over; hard button ending, no tail"
leaves_room_for: "tin rattle, footsteps, Lan's hiss (SFX-SC02), 'Hey!' sits before the cue (19.0 s) and is not covered"
source_or_score: score
prompt: "UNUSED, no music tool. Instrumental, 128 BPM, D dorian: hand drum and wood percussion with a short pizzicato string figure, light and playful, no melody, 25 seconds, hard stop ending, no vocals."
status: REVIEW
gen_state: PLANNED
```

```yaml
record: music_cue
id: M02
start: "SC02-SH110 +2.5 s (55.0 s)"
end: "SC03-SH050 end (68.0 s)"
function: "Carry the move from lane to alley and hold the hush"
description: "A single low bowed note on D, very soft, with a faint harmonic shimmer; no rhythm and no melody. It rises from nothing on the J-cut and stays until the whisper"
tempo_bpm: 0
key: "D (drone)"
meter: "free"
instrumentation: [low bowed string]
dynamics: "ppp rising to pp over 3 s, then flat; fades fully out by the end of SC03-SH050 so the whisper is bare"
hit_points: ["none; stays clear of the palm taps at SC03-SH020 +0.4 s (59.4 s)"]
in_out: "Fade in on the J-cut; fade out over 1.5 s ending at SC03-SH050 end"
leaves_room_for: "alley room tone, the palm taps (SFX-SC03), her breath"
source_or_score: score
prompt: "UNUSED, no music tool. A single very soft low bowed string note on D, no vibrato, no rhythm, 13 seconds, slow fade in and out."
status: REVIEW
gen_state: PLANNED
```

```yaml
record: music_cue
id: M03
start: "SC03-SH070 +0.0 s (70.0 s)"
end: "SC03-SH120 end (85.0 s), with a rest over SC03-SH100 (77.5 to 79.5 s)"
function: "Tenderness: Lan opens the tin and sits with the macaque. First full statement of T1"
description: "Plucked string plays T1 slowly, two falling notes, rest, the answer note; a soft low bowed pedal underneath; at SC03-SH090 the melody thins to the first two notes only. It stops completely for SC03-SH100's two knocks (the only bare stretch), then returns with the answer note in a warmer register while the macaque eats, and settles on an open fifth"
tempo_bpm: 66
key: "D dorian, answer ends on A (open fifth D-A)"
meter: "free time, felt in 4/4 (bar = 3.6 s)"
instrumentation: [plucked string, low bowed string, very soft hand drum on one beat only at the resolution]
dynamics: "p throughout, pp at the lid opening (SC03-SH070 +2.6 s), silent 77.5 to 79.5 s, p to mp at the answer note (SC03-SH110), decays to pp by 85.0 s"
hit_points:
  - "SC03-SH070 +2.6 s (72.6 s): the lid comes free, a held note rather than an accent"
  - "SC03-SH090 end (77.5 s): the phrase ends on the last fruit slice and the music is silent from here to 79.9 s"
  - "SC03-SH110 start (79.5 s): the cue resumes after the second knock's ring (0.4 s L-cut trails, so resume at 79.9 s)"
  - "SC03-SH120 end (85.0 s): the final decay ends as the scene changes"
in_out: "Fade-in over 1.0 s under the lid opening; drops out before the knock (decay of the last note ends at 77.5 s); returns at 79.9 s; fades out over 2.0 s ending 85.0 s"
leaves_room_for: "the lid pop, the saucer patter, the two knocks (bare), the chewing"
source_or_score: score
prompt: "UNUSED, no music tool. Slow, tender, instrumental, 66 BPM, D dorian: a plucked string plays a two-note falling figure then a rising answer, over a very soft low bowed drone, 15 seconds, pause in the middle for 2 seconds, gentle fade at the end, no vocals."
status: REVIEW
gen_state: PLANNED
```

```yaml
record: music_cue
id: M04
start: "SC04-SH040 +0.0 s (91.5 s)"
end: "SC04-SH050 end (96.0 s)"
function: "Close: the ritual is Lan's now and the macaque answers"
description: "The same plucked string plays the two falling notes of T1 once, then the answer note as the macaque sits, resolving to the open fifth on the bulb's click; the low note rings through the fade to black"
tempo_bpm: 60
key: "D dorian, ends on D-A open fifth"
meter: "free"
instrumentation: [plucked string, low bowed string]
dynamics: "p, then pp; the final note rings out into the 0.5 s of black"
hit_points:
  - "SC04-SH040 +0.0 s (91.5 s): first falling note, after the second knock's tail (0.2 s)"
  - "SC04-SH050 +0.6 s (94.6 s): the answer note lands with the switch click (SFX-SC04-005)"
  - "96.0 s: ring decays into black"
in_out: "Soft start after the knock; long ring into the black, no button"
leaves_room_for: "the macaque's landing (SFX-SC04-004), the switch click, the final ambience held into black"
source_or_score: score
prompt: "UNUSED, no music tool. Instrumental, 60 BPM, D dorian: a plucked string plays a two-note falling figure and a single rising answer note, with a low bowed drone, 4.5 seconds, the last note rings out and fades."
status: REVIEW
gen_state: PLANNED
```

#### Songs
None. The story has no song and the screenplay has no lyrics. No vocal cue is planned.

#### Stems for the mix
Plucked strings, bowed strings, percussion each as a separate stem; a single music stem is enough for the 96 s deliverable. Provide M01, M02, M03 and M04 as separate files with 1 s of handle where they fade, so the film-editor can lengthen or shorten a cue at a bar line. The sound-designer sets the level of music under effects (see sfx.md mix intent).

#### Review log
| Cue | Version | Verdict | Notes |
|---|---|---|---|
| (no music exists) | | | Review checks on arrival: tempo and key as written, hits at the listed shot anchors, silent over the knocks and lines, no vocals, no artist imitation, rights recorded |

#### Handoff
- Produced: music@1 (REVIEW), 4 cues, 0 songs, silence marked at SC01-SH010 to SH080, SC02-SH080 to SH100, SC03-SH060, SC03-SH100, SC04-SH010 to SH030
- Re-time after assembly: all cues (anchored to shot IDs); M01 hit points move -2.0 s from SC02-SH040 if CR-E01 is accepted
- Open items: no music source (tool, composer or licensed library) chosen; rights not yet recorded
- Conflicts: none. Refinements to the edit plan's proposals: M02 enters at 55.0 s (not 54.5 s) and the theme enters at 70.0 s after the whispered line, not under it (69.0 s)
- Next: sound-designer (mix), film-editor (assembly), vfx-supervisor


Source: `11_sound/sfx.md`

### Sound Plan: The Two Knocks

Nothing is generated. The plan is built for Veo 3.1 native audio first (per shot `SFX:` and `Ambient noise:` lines for the video-prompt-engineer), with post replacement where the native audio fails.

#### Sound concept
- Sonic world: realistic, close and warm. A busy night market that thins out the further Lan runs, then a hushed alley, then a quiet shuttered lane. Lantern paper, steam, steel, damp concrete.
- Signature sounds: **the knock**, one dull metallic hollow tok on the tin lid. It is heard three times as a pair: first off-screen and unexplained (SC02-SH100), then from the macaque's palm (SC03-SH020), then Lan's knuckles (SC03-SH100) and again in the quiet lane (SC04-SH030). Every instance must use the same pitch and ring, so generate or choose it once and reuse it in post if the video model's version drifts. The second signature is the **tin's rattle** (dry, light: spoon, card and dried fruit inside).
- Silence means: the dropped market at SC02-SH080 to SH090 (loss), the held beat before "Ah Ma." (recognition), and the final black (rest). No score is assumed; music is added in post (no music tool).

#### Ambience beds
| Scene | Bed elements | Density | Changes during scene | Room tone |
|---|---|---|---|---|
| SC01 | Night market crowd murmur, wok and burner hiss, steam release, string-light bulb buzz, far vendor calls with no readable words | high | Narrows to the pot and Lan at SC01-SH050 and SH060 (the quiet before the theft), then bursts at SH090 | open-air; none needed |
| SC02 | Same market, receding: crowd thins with every shot, dampened by the crates and carts; far pans of lantern creak | medium falling to low | Falls to a distant murmur at SC02-SH080; at SH110 it crossfades into alley room tone (J-cut) | none |
| SC03 | Alley: low room tone, faint distant market far behind, lantern paper flutter, occasional drip | very low | Holds almost flat; the market is nearly gone. Only Lan, the macaque and the tin make sound | alley room tone (open-air courtyard) is continuous so dialogue and Foley edits stay seamless |
| SC04 | Shuttered lane: few distant shutter rattles, one stall bulb hum, lanterns creaking | low | The bulb hum ends at SC04-SH050 and the last bed holds into black | none |

#### Sync cues

```yaml
record: sfx_cue
id: SFX-SC01-001
shot: SC01-SH010
sound: Wok and burner hiss under the noodle pot, rolling boil, steam release
sync_point: 0.0 s
layer: hard
perspective: medium
material: steel pot, gas flame
prompt: Wok and burner hiss under the noodle pot, rolling boil, steam release. medium perspective, steel pot, gas flame.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-002
shot: SC01-SH010
sound: Lan's ladle dips into broth and lands noodles in the bowl, slosh
sync_point: 0.2 s
layer: foley
perspective: close
material: steel ladle, ceramic bowl
prompt: Lan's ladle dips into broth and lands noodles in the bowl, slosh. close perspective, steel ladle, ceramic bowl.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-003
shot: SC01-SH010
sound: Wet cloth and apron rustle as she lifts the ladle clear
sync_point: 2.0 s
layer: foley
perspective: close
material: cotton apron
prompt: Wet cloth and apron rustle as she lifts the ladle clear. close perspective, cotton apron.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-004
shot: SC01-SH020
sound: 'Soft fingertip tick on the tin lid, two light taps of skin on lacquered metal (not the knock: no ring)'
sync_point: 0.4 s
layer: foley
perspective: close
material: lacquered tin lid, brass spots
prompt: 'Soft fingertip tick on the tin lid, two light taps of skin on lacquered metal (not the knock: no ring). close perspective, lacquered tin lid, brass spots.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-005
shot: SC01-SH030
sound: 'Saucer lifted and turned: ceramic scrape, then a small clack as it lands face-down'
sync_point: 0.6 s
layer: foley
perspective: close
material: glazed ceramic on plank shelf
prompt: 'Saucer lifted and turned: ceramic scrape, then a small clack as it lands face-down. close perspective, glazed ceramic on plank shelf.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-006
shot: SC01-SH040
sound: Bowl handed over, chopstick tick; cloth wipe in wide arcs, damp squeak on wood
sync_point: 0.3 s
layer: foley
perspective: close
material: damp cloth on timber counter
prompt: Bowl handed over, chopstick tick; cloth wipe in wide arcs, damp squeak on wood. close perspective, damp cloth on timber counter.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-007
shot: SC01-SH040
sound: Customer's footsteps leave to frame left, soft and short
sync_point: 1.8 s
layer: foley
perspective: medium
material: sandal on damp concrete
prompt: Customer's footsteps leave to frame left, soft and short. medium perspective, sandal on damp concrete.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-008
shot: SC01-SH050
sound: 'Wire creaks faintly under the macaque''s weight; paper lanterns shift, a very low tone of nothing else: ambience thins'
sync_point: 0.0 s
layer: designed
perspective: medium
material: wire, paper
prompt: 'Wire creaks faintly under the macaque''s weight; paper lanterns shift, a very low tone of nothing else: ambience thins. medium perspective, wire, paper.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-009
shot: SC01-SH060
sound: Ladle taps the pot rim once, boil continues
sync_point: 0.2 s
layer: foley
perspective: close
material: steel
prompt: Ladle taps the pot rim once, boil continues. close perspective, steel.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-010
shot: SC01-SH070
sound: Wire twang and a soft thud of the macaque landing on the plank shelf; tin lid scrape as both hands close on it
sync_point: 0.2 s
layer: hard
perspective: medium
material: wood shelf, lacquered tin
prompt: Wire twang and a soft thud of the macaque landing on the plank shelf; tin lid scrape as both hands close on it. medium perspective, wood shelf, lacquered tin.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-011
shot: SC01-SH080
sound: Quick apron-and-shoe turn; ladle knocks the counter
sync_point: 0.0 s
layer: foley
perspective: close
material: cotton, steel
prompt: Quick apron-and-shoe turn; ladle knocks the counter. close perspective, cotton, steel.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-012
shot: SC01-SH090
sound: 'Tin RATTLES in the macaque''s grip: contents shift, a dry, light, knocking shake (the script says RATTLES)'
sync_point: 0.0 s
layer: hard
perspective: close
material: tin with spoon, card, dried fruit
prompt: 'Tin RATTLES in the macaque''s grip: contents shift, a dry, light, knocking shake (the script says RATTLES). close perspective, tin with spoon, card, dried fruit.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-013
shot: SC01-SH090
sound: Macaque paws pattering on the plank counter, fast
sync_point: 0.0 s
layer: foley
perspective: medium
material: small bare feet on wood
prompt: Macaque paws pattering on the plank counter, fast. medium perspective, small bare feet on wood.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-014
shot: SC01-SH090
sound: 'Pot boils over: foam surge and sizzle on the burner flame, heavy steam hiss'
sync_point: 1.2 s
layer: hard
perspective: close
material: broth on flame
prompt: 'Pot boils over: foam surge and sizzle on the burner flame, heavy steam hiss. close perspective, broth on flame.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-015
shot: SC01-SH100
sound: 'Ladle drops: steel clatter and a short ring, then rests; the boil-over keeps hissing'
sync_point: 0.5 s
layer: hard
perspective: close
material: steel ladle on timber counter
prompt: 'Ladle drops: steel clatter and a short ring, then rests; the boil-over keeps hissing. close perspective, steel ladle on timber counter.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC01-016
shot: SC01-SH100
sound: Lan's running footsteps start and pull right off screen
sync_point: 1.2 s
layer: foley
perspective: close
material: canvas shoe on damp concrete
prompt: Lan's running footsteps start and pull right off screen. close perspective, canvas shoe on damp concrete.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-001
shot: SC02-SH010
sound: Macaque pattering on concrete; tin rattles against its chest
sync_point: 0.0 s
layer: foley
perspective: medium
material: paws on damp concrete
prompt: Macaque pattering on concrete; tin rattles against its chest. medium perspective, paws on damp concrete.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-002
shot: SC02-SH010
sound: Cloth flap as the macaque dives under the table cloth, then settles
sync_point: 2.0 s
layer: hard
perspective: medium
material: cotton table cloth
prompt: Cloth flap as the macaque dives under the table cloth, then settles. medium perspective, cotton table cloth.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-003
shot: SC02-SH020
sound: Lan's running footsteps, breath, a shoe skid on damp concrete, hand slap on the table edge
sync_point: 0.0 s
layer: foley
perspective: medium
material: canvas shoe, damp concrete, aluminium table
prompt: Lan's running footsteps, breath, a shoe skid on damp concrete, hand slap on the table edge. medium perspective, canvas shoe, damp concrete, aluminium table.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-004
shot: SC02-SH030
sound: Macaque pattering, tin rattle, steady and low; shoppers murmur softly in the distance
sync_point: 0.0 s
layer: foley
perspective: medium
material: paws on concrete
prompt: Macaque pattering, tin rattle, steady and low; shoppers murmur softly in the distance. medium perspective, paws on concrete.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-005
shot: SC02-SH040
sound: 'Lan''s hands hit the crate top: wood thud; legs swing over; landing thud and a shoe scuff'
sync_point: 0.4 s
layer: hard
perspective: medium
material: timber crates
prompt: 'Lan''s hands hit the crate top: wood thud; legs swing over; landing thud and a shoe scuff. medium perspective, timber crates.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-006
shot: SC02-SH050
sound: Crate slat creak under her weight; a dry drag of cloth and skin over splintered wood
sync_point: 0.4 s
layer: foley
perspective: close
material: splintered pine slat, cotton sleeve, skin
prompt: Crate slat creak under her weight; a dry drag of cloth and skin over splintered wood. close perspective, splintered pine slat, cotton sleeve, skin.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-007
shot: SC02-SH050
sound: Wincing hiss of pain, teeth, breath in; landing scuff
sync_point: 2.6 s
layer: foley
perspective: close
material: voice non-verbal (Lan)
prompt: Wincing hiss of pain, teeth, breath in; landing scuff. close perspective, voice non-verbal (Lan).
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-008
shot: SC02-SH060
sound: 'Macaque scrabbles under the cart bed: light claw ticks, then out; cart chassis does not move'
sync_point: 0.2 s
layer: foley
perspective: close
material: paws on concrete, steel cart
prompt: 'Macaque scrabbles under the cart bed: light claw ticks, then out; cart chassis does not move. close perspective, paws on concrete, steel cart.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-009
shot: SC02-SH070
sound: 'Lan''s sideways shuffle: apron brushes both plastered walls, shoes scuff; breath tight, with a half-laugh of strain'
sync_point: 0.0 s
layer: foley
perspective: close
material: cotton on plaster
prompt: 'Lan''s sideways shuffle: apron brushes both plastered walls, shoes scuff; breath tight, with a half-laugh of strain. close perspective, cotton on plaster.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-010
shot: SC02-SH080
sound: Footsteps decelerate and stop; breath heaving; market sound drops by half and goes distant
sync_point: 0.0 s
layer: foley
perspective: medium
material: canvas shoe
prompt: Footsteps decelerate and stop; breath heaving; market sound drops by half and goes distant. medium perspective, canvas shoe.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-011
shot: SC02-SH090
sound: 'Near silence: breath only, market a faint far murmur, one string-light bulb buzzes'
sync_point: 0.0 s
layer: ambience
perspective: far
material: electric bulbs
prompt: 'Near silence: breath only, market a faint far murmur, one string-light bulb buzzes. far perspective, electric bulbs.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-012
shot: SC02-SH100
sound: 'TWO KNOCKS, off-screen, from the alley: slow, dull metallic tok, then tok, 1.0 s apart, a short hollow ring (the same tin and knuckle pair as SC03-SH100)'
sync_point: 0.4 s
layer: designed
perspective: off-screen
material: tin lid struck with knuckle or palm
prompt: 'TWO KNOCKS, off-screen, from the alley: slow, dull metallic tok, then tok, 1.0 s apart, a short hollow ring (the same tin and knuckle pair as SC03-SH100). off-screen perspective,
  tin lid struck with knuckle or palm.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-013
shot: SC02-SH110
sound: Lan's footsteps walking, slow, now alone on the stones
sync_point: 0.0 s
layer: foley
perspective: medium
material: canvas shoe on damp concrete
prompt: Lan's footsteps walking, slow, now alone on the stones. medium perspective, canvas shoe on damp concrete.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC02-014
shot: SC02-SH110
sound: 'J-cut: market ambience falls away; alley room tone and a distant paper-lantern creak enter early'
sync_point: 2.5 s
layer: bridge
perspective: far
material: alley room tone
prompt: 'J-cut: market ambience falls away; alley room tone and a distant paper-lantern creak enter early. far perspective, alley room tone.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-001
shot: SC03-SH010
sound: Lan steps in and stops; heavy breath slowing; a lantern paper flutter; the tin sits silent on the ground
sync_point: 0.0 s
layer: foley
perspective: medium
material: canvas shoe, paper
prompt: Lan steps in and stops; heavy breath slowing; a lantern paper flutter; the tin sits silent on the ground. medium perspective, canvas shoe, paper.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-002
shot: SC03-SH020
sound: 'TWO TAPS of the macaque''s palm on the lid: soft slap of a hand on lacquered metal, with the same hollow ring as SC02-SH100 (the match to the knocks she heard)'
sync_point: 0.4 s
layer: hard
perspective: close
material: palm on tin lid
prompt: 'TWO TAPS of the macaque''s palm on the lid: soft slap of a hand on lacquered metal, with the same hollow ring as SC02-SH100 (the match to the knocks she heard). close perspective, palm on tin lid.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-003
shot: SC03-SH030
sound: Her breath catches; a small cloth rustle as her hand rises; fingertips curl, tiny skin sound
sync_point: 0.5 s
layer: foley
perspective: close
material: skin, cotton
prompt: Her breath catches; a small cloth rustle as her hand rises; fingertips curl, tiny skin sound. close perspective, skin, cotton.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-004
shot: SC03-SH040
sound: One careful step; a tiny rustle as her hand hovers; no breath
sync_point: 0.5 s
layer: foley
perspective: medium
material: canvas shoe on concrete
prompt: One careful step; a tiny rustle as her hand hovers; no breath. medium perspective, canvas shoe on concrete.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-005
shot: SC03-SH050
sound: 'Nearly nothing: the lantern''s faint paper flutter and a very low room-tone hum; a distant drip'
sync_point: 0.0 s
layer: ambience
perspective: medium
material: alley
prompt: 'Nearly nothing: the lantern''s faint paper flutter and a very low room-tone hum; a distant drip. medium perspective, alley.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-006
shot: SC03-SH070
sound: Knees crack lightly as she crouches; cloth and shoe on concrete; tin lifted from the ground, a faint scrape
sync_point: 0.0 s
layer: foley
perspective: close
material: cotton trousers, tin on concrete
prompt: Knees crack lightly as she crouches; cloth and shoe on concrete; tin lifted from the ground, a faint scrape. close perspective, cotton trousers, tin on concrete.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-007
shot: SC03-SH070
sound: 'Lid sticks, then comes free with a dry pop and a tiny metallic scrape: it has been closed a long time'
sync_point: 2.6 s
layer: hard
perspective: close
material: friction-fit tin lid
prompt: 'Lid sticks, then comes free with a dry pop and a tiny metallic scrape: it has been closed a long time. close perspective, friction-fit tin lid.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-008
shot: SC03-SH080
sound: 'Contents settle: card paper rustle and a spoon tink in the tin;'
sync_point: 0.0 s
layer: foley
perspective: close
material: paper, steel spoon
prompt: 'Contents settle: card paper rustle and a spoon tink in the tin;. close perspective, paper, steel spoon.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-009
shot: SC03-SH090
sound: Paper twist crinkles; dried fruit slices patter onto the ceramic saucer, soft
sync_point: 0.2 s
layer: foley
perspective: close
material: dried fruit, glazed ceramic
prompt: Paper twist crinkles; dried fruit slices patter onto the ceramic saucer, soft. close perspective, dried fruit, glazed ceramic.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-010
shot: SC03-SH100
sound: 'Lid set back with a light clink; THE SECOND KNOCK PAIR: two knuckle knocks on the lid, the same pitch and ring as SC02-SH100 and SC03-SH020, the strongest sound in the film'
sync_point: 0.3 s
layer: designed
perspective: close
material: knuckle on lacquered tin lid
prompt: 'Lid set back with a light clink; THE SECOND KNOCK PAIR: two knuckle knocks on the lid, the same pitch and ring as SC02-SH100 and SC03-SH020, the strongest sound in the film. close perspective,
  knuckle on lacquered tin lid.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-011
shot: SC03-SH110
sound: 'L-cut: the knock''s ring trails 0.4 s; macaque shuffles forward, paws on concrete; soft chewing and lip smack'
sync_point: 0.0 s
layer: foley
perspective: close
material: paws, dried fruit
prompt: 'L-cut: the knock''s ring trails 0.4 s; macaque shuffles forward, paws on concrete; soft chewing and lip smack. close perspective, paws, dried fruit.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC03-012
shot: SC03-SH120
sound: 'Lan sits down: cloth, a small exhale, tin settles in her lap; the macaque chews beside her'
sync_point: 0.2 s
layer: foley
perspective: medium
material: cotton, tin on cotton
prompt: 'Lan sits down: cloth, a small exhale, tin settles in her lap; the macaque chews beside her. medium perspective, cotton, tin on cotton.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC04-001
shot: SC04-SH010
sound: 'Lane is quiet: a few distant shutter rattles, a bulb hum; Lan''s soft step'
sync_point: 0.0 s
layer: ambience
perspective: medium
material: shuttered stalls
prompt: 'Lane is quiet: a few distant shutter rattles, a bulb hum; Lan''s soft step. medium perspective, shuttered stalls.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC04-002
shot: SC04-SH020
sound: 'Saucer turned face-up and set down: a clean ceramic scrape and a small click on the counter edge'
sync_point: 0.4 s
layer: foley
perspective: close
material: glazed ceramic on timber
prompt: 'Saucer turned face-up and set down: a clean ceramic scrape and a small click on the counter edge. close perspective, glazed ceramic on timber.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC04-003
shot: SC04-SH030
sound: 'TWO KNOCKS of Lan''s knuckles on the lid: same sound as SC03-SH100, now dry and calm in the quiet lane'
sync_point: 0.4 s
layer: designed
perspective: close
material: knuckle on tin lid
prompt: 'TWO KNOCKS of Lan''s knuckles on the lid: same sound as SC03-SH100, now dry and calm in the quiet lane. close perspective, knuckle on tin lid.'
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC04-004
shot: SC04-SH040
sound: Macaque lands lightly on the counter, paw taps; a quiet chirp-like murmur (non-speech)
sync_point: 0.8 s
layer: foley
perspective: close
material: paws on timber
prompt: Macaque lands lightly on the counter, paw taps; a quiet chirp-like murmur (non-speech). close perspective, paws on timber.
status: REVIEW
gen_state: PLANNED
```

```yaml
record: sfx_cue
id: SFX-SC04-005
shot: SC04-SH050
sound: Wall switch click, bulb hum cuts off; a last quiet breath of the lane; ambience held into black over the last 0.5 s
sync_point: 0.6 s
layer: hard
perspective: medium
material: plastic wall switch, tungsten bulb
prompt: Wall switch click, bulb hum cuts off; a last quiet breath of the lane; ambience held into black over the last 0.5 s. medium perspective, plastic wall switch, tungsten bulb.
status: REVIEW
gen_state: PLANNED
```

#### Transitions and silence
| Cut | Decision (hard / J / L / bridge / silence) | Reason |
|---|---|---|
| Fade in to SC01-SH010 | bridge: ambience rises from silence over 1 s | film opening |
| SC01-SH060 to SH070 | hard | the macaque is behind her: ambience stays thin |
| SC01-SH100 to SC02-SH010 | L-cut: boil-over hiss trails 0.3 s | cut on action, from the stall to the run |
| SC02-SH070 to SH080 | hard + silence | tone drops from comic to still; the footsteps stop with the cut |
| SC02-SH080 to SH090 | silence (market falls to a faint murmur) | loss |
| SC02-SH100 | the two knocks heard before the alley is seen | the turn |
| SC02-SH110 to SC03-SH010 | J-cut (last 0.5 s of SH110) | lane to alley |
| SC03-SH050 to SH060 | hard; room tone only before the line | the held beat before "Ah Ma." |
| SC03-SH100 to SH110 | L-cut: ring trails 0.4 s | the second knock lingers |
| SC03-SH120 to SC04-SH010 | hard; alley room tone trails 0.5 s under the lane sound | scene change (as the edit plan) |
| SC04-SH050 to black | ambience held 0.5 s into black | the close |

Silence moments: SC02-SH080 to SH090 (about 5.5 s of low sound); SC03-SH050 and the half second before "Ah Ma."; last 0.5 s of the film.

#### Mix intent
| Scene / moment | Priority order | Notes |
|---|---|---|
| SC01-SH010 to SH050 | ambience, stall Foley, then tin and saucer details | No music assumed. The brush on the tin lid is a soft skin sound and must not be confused with the knock |
| SC01-SH060 | Lan's line, then the boil | Line sits +6 dB over the bed |
| SC01-SH070 to SH080 | theft thud, then "Hey!" | "Hey!" is the loudest voice so far; the bed ducks 3 dB |
| SC01-SH090 to SC02-SH050 | rattle and footsteps, then ambience | The chase is loud and close, Foley led. Dynamic peak: the boil-over (SC01-SH090) |
| SC02-SH080 to SH090 | breath, then a barely audible bed | The quiet half begins; the bed falls about 12 dB |
| SC02-SH100 | the knocks, above everything | The knocks are the only event; the market does not return |
| SC03-SH010 to SH050 | room tone, tin and palm, breath | Almost no bed; minimum 10 dB below the chase |
| SC03-SH060 | whisper, then room tone | "Ah Ma." only just above room tone: no ducking tricks, keep the whisper natural |
| SC03-SH070 | the lid pop | Delicate, a single detail with room tone around it |
| SC03-SH100 | the knock | The strongest designed sound in the film; peak of the quiet half |
| SC04 | lane bed, the knock, switch click | Quieter than SC01; the last sound is the switch |

Music (post): the music-director's cues sit under the effects; they never cover the knocks (hit points in `music.md`).

#### Delivery spec
- Stems: dialogue, music (added in post), effects (Foley, hard, designed, ambience), full mix, M&E (music and effects, no dialogue; only 3 lines, so the M&E is the full mix minus 3 shots' voice).
- Loudness target: -14 LUFS integrated (common online-video value); confirm with the platform. The user has not named a delivery platform. OPEN-QUESTION: where will the film be delivered?
- True peak ceiling: -1 dBTP (commonly cited; confirm with the platform).
- Veo native audio: the three speech lines and all effects arrive mixed in each clip. Sync Foley is often unreliable in native audio; if a clip's audio is wrong, mute it and rebuild from library or recorded sounds, noting source and licence of each. No sounds are licensed or chosen yet.

#### Audio lines for the video-prompt-engineer
One `SFX:` line per cue above, and an `Ambient noise:` line per scene:
- SC01: Ambient noise: busy night-market murmur, wok hiss, steam release, string-light buzz; no readable words.
- SC02: Ambient noise: the same market, thinner and further away with each shot.
- SC03: Ambient noise: quiet alley room tone, faint far-off market, paper lantern flutter.
- SC04: Ambient noise: quiet shuttered lane, one dimmed bulb hum, distant shutter rattle.
Subtitles and burned-in text are not wanted on any clip.

#### Review log
| Cue | Take | Verdict | Notes |
|---|---|---|---|
| (no takes exist) | | | Review checks on arrival: the knock matches in all four places, tin rattle is dry, ambience continuous across cuts in a scene, "Ah Ma." intelligible but quiet |

#### Handoff
- Produced: sfx@1 (REVIEW), 47 cues in 38 shots (counts by scene: {'SC01': 16, 'SC02': 14, 'SC03': 12, 'SC04': 5}; dialogue lines are voice.md items, not cues); ambience per scene; transitions and silences; delivery spec
- Audio lines for video-prompt-engineer: listed above, plus each cue's `prompt`
- Open items: OPEN-QUESTION delivery platform and loudness target; native-audio sync is unreliable (post rebuild may be needed)
- Conflicts: none
- Next: music-director (hit points near the knocks), film-editor (assembly), quality-control


## 10. VFX and edit

Source: `12_vfx/vfx_plan.md`

### VFX Plan: The Two Knocks

Nothing is generated and there is no budget. Every estimate below counts generations (images and clips), not money. They assume the retry ladder of 2 to 3 attempts per risky shot and are rough until the video-prompt-engineer fixes clip lengths. **Veo 3.1 first-last-frame clip lengths are to-verify** (the user cannot confirm them yet); each estimate that uses first-last-frame depends on that. Tools in the brief: Gemini 2.5 Flash Image for stills (including keyframe edits), Veo 3.1 for video. The user has no compositing tool named, so compositing steps (tracked overlays, blur masks, grade fades) are marked "post" and need an editor; each has a generator-only fallback.

#### Classification
| Shot | Flag / risk | Native or VFX | Reason |
|---|---|---|---|
| SC01-SH020 | photo of Ah Ma stays soft (flag) | VFX (light) | see its VFX record below |
| SC01-SH030 | saucer flip, chip at 3 o'clock | VFX (keyframe edit) | see its VFX record below |
| SC01-SH050 | macaque notched left ear (identity) | Native + identity control | The notched left ear is the highest-drift item; handled by the macaque sheet and keyframes, no VFX record |
| SC01-SH070 | drop from wire, hands close on tin | VFX (risk batch) | see its VFX record below |
| SC01-SH090 | boil-over foam and steam (flag) | VFX (element fallback) | see its VFX record below |
| SC01-SH100 | boil-over, ladle drop (flag) | VFX (element fallback) | see its VFX record below |
| SC02-SH050 | graze appears (state change) | VFX (risk batch) | see its VFX record below |
| SC03-SH020 | two taps; notched ear | VFX (light) | see its VFX record below |
| SC03-SH050 | saucer chip insert | Native; keyframe controls the chip | The chip is on a static insert and the keyframe fixes it; no motion to fail |
| SC03-SH070 | lid opens | VFX (risk batch) | see its VFX record below |
| SC03-SH080 | card folded and blank (flag, [[VFX:]]) | VFX (paint-out fallback) | see its VFX record below |
| SC04-SH020 | saucer turn | VFX (keyframe edit) | see its VFX record below |
| SC04-SH030 | photo soft (flag); knocks | VFX (light) | see its VFX record below |
| SC04-SH050 | bulb out, fade to black (flag) | VFX (post fade) | see its VFX record below |
| all other shots | none flagged | Native | Single action, no state change in the clip; covered by the retry ladder. SC02-SH010 (table cloth), SC02-SH040 (crate vault) and SC02-SH070 (service path) are generation risks for the video-prompt-engineer, not VFX |

#### VFX shots

```yaml
record: vfx
id: VFX-SC01-SH020
shot: SC01-SH020
problem: The photo of Ah Ma sits soft at the frame edge; a generated photo may show readable faces, writing or a different woman than the laughing elderly woman tapping a tin.
method: Native generation from a keyframe with the photo already defocused, plus a post defocus on the photo region if needed.
elements:
- keyframe with the photo at the right edge out of focus
- photo prop sheet (reference)
steps:
- Make the keyframe in Gemini 2.5 Flash Image with the photo as a soft blur
- Generate the clip image-to-video
- If photo detail sharpens in motion, add a tracked blur mask over the photo region in post
tools: image tool + video tool; 2D compositing (blur mask) only if needed
estimate: 1 extra generation (2 attempts) per shot
fallback: 'PROPOSAL: Move the photo further out of frame (a PROPOSAL to the film-director; this is a camera/framing change)'
review:
- photo reads as a soft rectangle with warm colours, no readable detail
- tin lid and two brass spots stay sharp
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC01-SH030
shot: SC01-SH030
problem: 'The saucer flips face-down in the frame. Object turning in a hand is a weak spot: the saucer may change shape, lose the chip at 3 o''clock, or end with the wrong face.'
method: Native first-last-frame generation between a keyframe of the upright saucer and a keyframe of it face-down; keyframe edits to fix the chip.
elements:
- 'start keyframe: saucer UPRIGHT, chip at 3 o''clock'
- 'end keyframe: saucer FACEDOWN, foot ring showing'
- saucer prop sheet
steps:
- Generate and approve both keyframes (the chip is visible only in the start frame)
- Run first-last-frame; clip length TO-VERIFY
- Check the saucer is the same size and glaze at both ends
tools: image tool (keyframe edit), video tool first-last-frame
estimate: 3 to 5 extra generations (keyframes and 2 to 3 clip attempts)
fallback: 'PROPOSAL: Split into an upright insert and a face-down insert joined by a cut on the hand (PROPOSAL to the film-director)'
review:
- chip at 3 o'clock before the turn
- same saucer after the turn
- no extra fingers
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC01-SH070
shot: SC01-SH070
problem: 'The macaque drops from the wire onto the shelf and grips the tin: fast animal motion, hands closing on a prop, wire dip.'
method: Native first-last-frame (wire to shelf); the start keyframe has the macaque crouched on the wire, the end keyframe has it on the shelf with the tin in both hands. Risk batch item.
elements:
- macaque turnaround (ear and face)
- start and end keyframes
- tin sheet
steps:
- Lock the macaque's notched left ear in both keyframes
- Run first-last-frame in the risk batch
- 'Check the tin: two brass spots, dark green, lid on'
tools: image tool, video tool first-last-frame
estimate: 4 to 6 extra generations (risk batch)
fallback: 'PROPOSAL: Cover the drop with a cut: wire dip insert then the macaque already holding the tin (PROPOSAL to the film-director, changes the shot list, so not applied)'
review:
- one macaque, notched left ear visible when facing right
- tin unchanged and intact
- Lan still turned away at the pot
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC01-SH090
shot: SC01-SH090
problem: 'The pot boils over and the macaque runs on a counter: foam and steam are hard to keep stable, and the macaque and the foam move at the same time.'
method: Native image-to-video from a keyframe where the pot already foams at the right edge; steam as a reusable element if the native steam fails.
elements:
- start keyframe with the foam at the pot rim
- reusable element ELM-STEAM-FOAM
steps:
- Make the keyframe with the pot half-foaming and steam at frame right
- Generate; accept steam that rises, reject foam that clips through the camera
- If the foam is unusable, generate ELM-STEAM-FOAM on the pot plate and composite it onto the macaque take
tools: image tool, video tool; 2D compositing for the fallback
estimate: 3 to 4 extra generations
fallback: 'PROPOSAL: Show the boil-over only as steam rising (less foam) in the keyframe (PROPOSAL to the film-director)'
review:
- foam and steam stay at frame right and spill over the rim
- the macaque keeps the tin on its camera side
- no extra macaque
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC01-SH100
shot: SC01-SH100
problem: 'Same boil-over foam and steam in the foreground right, while Lan drops the ladle and runs: hand release is a weak spot.'
method: Native image-to-video; reuse ELM-STEAM-FOAM as in SC01-SH090; the ladle drop is carried by audio.
elements:
- ELM-STEAM-FOAM
- start keyframe with the ladle leaving her hand
steps:
- Match the foam state from the end of SC01-SH090
- Generate; accept a ladle that falls to the counter
- If the hand release is wrong, trim before the release and let the sound carry the drop
tools: image tool, video tool
estimate: 2 to 3 extra generations
fallback: 'PROPOSAL: Start with the ladle already on the counter (PROPOSAL to the film-director)'
review:
- pot state BOIL-OVER matches SC01-SH090
- ladle ends on the counter, one ladle only
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC02-SH050
shot: SC02-SH050
problem: 'The graze appears on the right forearm during the shot: a state change inside a clip, and Veo may show the graze from the start or not at all.'
method: First-last-frame with a start frame without graze and an end frame with the graze; if the graze does not appear, add it with a tracked 2D overlay in post.
elements:
- 'start keyframe: forearm unmarked'
- 'end keyframe: forearm with the red graze (right forearm, outer side)'
- graze overlay (generated still, tracked)
steps:
- Generate both keyframes; the graze is made once by a keyframe edit on the end frame
- Run first-last-frame; clip length TO-VERIFY (this shot has `clip_length_s` 6 in the records)
- If the graze is early or missing, generate a graze plate and track it onto the forearm from the moment of the slat contact
tools: image tool (keyframe edit), video tool, 2D compositing (tracking)
estimate: 4 to 6 extra generations; the compositing path adds 1 element
fallback: 'PROPOSAL: Cut to an insert of the forearm for the graze (PROPOSAL to the film-director; adds a shot, so not applied)'
review:
- no graze before the slat contact
- graze is red, right forearm, outer side
- the same graze position as SC02-SH080 and SC03-SH090
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC03-SH020
shot: SC03-SH020
problem: The macaque taps the lid twice with its left palm; the count and the palm hit may be wrong (one, three, or a fist).
method: Native image-to-video; the tap sound is rebuilt in post, so the picture only needs two clear palm movements.
elements:
- macaque turnaround
- tin sheet
- 'start keyframe: palm raised above the lid'
steps:
- Generate with the palm taps described as two slow slaps
- Choose the take with two palm contacts; trim the rest
- Audio is replaced in post (sfx.md SFX-SC03-003)
tools: video tool; audio tool or library in post
estimate: 2 to 3 extra generations
fallback: 'PROPOSAL: Show one tap in picture and place the second by sound (PROPOSAL to the film-director)'
review:
- two palm contacts on the lid
- notched left ear visible at the frame edge
- two brass spots on the lid
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC03-SH070
shot: SC03-SH070
problem: 'The lid comes open under her thumbs: opening a friction-fit lid is a weak spot; the tin may change size or the lid may float.'
method: Native first-last-frame between a keyframe of the sealed tin in her hands and a keyframe of the lid lifted a hand's width. Risk batch item.
elements:
- start and end keyframes
- tin sheet (lid with two brass spots)
steps:
- Generate and approve both keyframes
- Run first-last-frame; clip length TO-VERIFY (records say 6 s)
- Check the tin keeps its size and the brass spots
tools: image tool, video tool first-last-frame
estimate: 4 to 6 extra generations (risk batch)
fallback: 'PROPOSAL: Start with the lid already lifted and use SC03-SH080 for the contents (PROPOSAL to the film-director)'
review:
- lid lifts, not floats
- both thumbs on the lid
- the tin has no label or writing
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC03-SH080
shot: SC03-SH080
problem: The recipe card must stay folded and blank, and the paper must carry no writing; image models like to add handwriting.
method: Native image-to-video from a keyframe with the card folded, outside blank; paint out any writing in post.
elements:
- 'keyframe: overhead tin with card, spoon, fruit twist'
- prop sheet for the card
steps:
- Make the keyframe with the folded card and a blank outer face
- Generate; reject any take with readable marks
- If the marks are faint, paint them out with a tracked patch or blur
tools: image tool, video tool; 2D compositing
estimate: 2 to 3 extra generations
fallback: 'PROPOSAL: Defocus the card slightly in the keyframe (PROPOSAL to the film-director/cinematographer)'
review:
- card folded and blank
- spoon, card and twist are all present
- no writing anywhere in the tin
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC04-SH020
shot: SC04-SH020
problem: The saucer turns face-up and is set on the counter edge, the mirror of SC01-SH030; same risk of changing the chip or the shape.
method: Native first-last-frame between face-down and face-up keyframes; reuse the saucer approvals from SC01-SH030.
elements:
- 'start keyframe: saucer FACEDOWN'
- 'end keyframe: saucer FACEUP, chip at 3 o''clock'
- saucer prop sheet
steps:
- Reuse the SC01-SH030 keyframes for the saucer look
- Run first-last-frame; clip length TO-VERIFY
- Check the chip is at 3 o'clock at the end
tools: image tool, video tool first-last-frame
estimate: 3 to 5 extra generations
fallback: 'PROPOSAL: Split into face-down and face-up inserts (PROPOSAL to the film-director)'
review:
- chip at 3 o'clock at the end
- saucer matches SC01-SH030
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC04-SH030
shot: SC04-SH030
problem: Two knocks with the knuckles, and the photo must stay soft at the right edge.
method: Native image-to-video; photo handled as in SC01-SH020; the knock sound is rebuilt in post.
elements:
- keyframe with the soft photo
- tin sheet
steps:
- Generate with two slow knuckle knocks
- Choose the take with two contacts
- Audio from sfx.md SFX-SC04-003
tools: image tool, video tool
estimate: 2 to 3 extra generations
fallback: 'PROPOSAL: Hand rests on the lid for the whole shot and the sound carries the knocks (PROPOSAL)'
review:
- two knuckle contacts
- photo soft
status: REVIEW
gen_state: PLANNED
```

```yaml
record: vfx
id: VFX-SC04-SH050
shot: SC04-SH050
problem: The bulb goes out and the frame falls to black over the last 0.5 s; a model often keeps the bulb lit or cuts the lights too early, and the "fade" is an editing effect.
method: First-last-frame from the lit wide to a nearly black frame with two silhouettes; the last 0.5 s fade to black is applied by the editor in post so the timing is exact.
elements:
- start keyframe (same wide as SC04-SH010)
- 'end keyframe: nearly black, last red-lantern glow, two silhouettes'
steps:
- Approve the end keyframe first
- Run first-last-frame; clip length TO-VERIFY
- If the bulb does not go out, grade down with an animated exposure drop on the stall area, then the editor's fade to black
tools: image tool, video tool first-last-frame; grade/editor fade
estimate: 3 to 4 extra generations
fallback: 'PROPOSAL: Film ends on a cut to black after a held lit frame (PROPOSAL to the film-director)'
review:
- bulb off at the end
- two silhouettes, the macaque on the counter
- black by 96.0 s
status: REVIEW
gen_state: PLANNED
```

#### Global notes (no per-shot record)
- **Title card:** the style bible asks for plain warm-white lettering (#F1E4CF) on umber (#2A1D17), simple serif or humanist face, added in post, no logo. The shot list has no title shot and the screenplay gives no title text position. Method: motion graphics in post; never generated. OPEN-QUESTION: is there a title card, and where (open or end)? It would change the 96.0 s timeline.
- **Readable text:** every sign board is blank and unlettered (location lock). If any generated clip shows letters, paint out or blur in post, or regenerate. Check SC01 and SC02 backgrounds first.
- **Background shoppers:** faceless and soft. If a face resolves in a background figure, blur or regenerate; do not let an extra stand in sharp focus.
- **Macaque identity:** keep the macaque sheet as a reference in every macaque shot. Take selection should favour clips where the notched left ear is visible and on the correct side (listed per shot in the shot records). A drifted ear cannot be fixed in post at this budget; the fix is a retake.
- **Prop identity:** tin with exactly two brass spots on the lid; saucer chip at 3 o'clock. Check on every tin and saucer shot (SC01-SH010, SH020, SH030, SH070; SC03-SH010, SH040, SH050 to SH100; SC04-SH010 to SH050).
- **West wall (SC03):** the wall is flown out (virtual) in the wide shots; no VFX needed, but a generated clip must not invent a lit west wall.

#### Reusable elements
| Element | Spec | Used in |
|---|---|---|
| ELM-STEAM-FOAM | Foam spilling over a dented steel stockpot rim on a low flame, warm-white steam, 4 s, locked off, on the pot plate NM-P1 | SC01-SH090, SC01-SH100 |
| ELM-GRAZE | Red graze on the outer right forearm, about 10 cm long, matched to Lan's skin tone, still image with alpha, tracked | SC02-SH050 (fallback) |
| ELM-FADE | Animated exposure drop to black over the last 0.5 s (editor/grade) | SC04-SH050 |
| ELM-TITLE | Title card per the style bible, added in post | pending OPEN-QUESTION |

#### Shot record updates (for production-manager)
The `vfx` field in these shot records should change from `none` to the VFX ID:
| Shot | vfx field → |
|---|---|

| SC01-SH020 | VFX-SC01-SH020 |
| SC01-SH030 | VFX-SC01-SH030 |
| SC01-SH070 | VFX-SC01-SH070 |
| SC01-SH090 | VFX-SC01-SH090 |
| SC01-SH100 | VFX-SC01-SH100 |
| SC02-SH050 | VFX-SC02-SH050 |
| SC03-SH020 | VFX-SC03-SH020 |
| SC03-SH070 | VFX-SC03-SH070 |
| SC03-SH080 | VFX-SC03-SH080 |
| SC04-SH020 | VFX-SC04-SH020 |
| SC04-SH030 | VFX-SC04-SH030 |
| SC04-SH050 | VFX-SC04-SH050 |

#### Totals
- VFX shots: 12. By method: first-last-frame with a state change (keyframe edits): 6 (SC01-SH030, SC01-SH070, SC02-SH050, SC03-SH070, SC04-SH020, SC04-SH050); element fallback (steam and foam): 2 (SC01-SH090, SC01-SH100); defocus or paint-out fallback: 3 (SC01-SH020, SC03-SH080, SC04-SH030); native with a retake for count: 1 (SC03-SH020).
- Estimated extra generations (on top of one pass per shot): about 33 to 50 across the 12 records, mostly the risk batch (SC01-SH070, SC02-SH050, SC03-SH070) and the first-last-frame shots. They depend on the first-last-frame length (to-verify) and are not a budget.
- Tools needed that the brief does not name: a compositor or editor with tracking, masks and an exposure fade (needed for the fallbacks only).

#### Handoff
- Produced: vfx_plan@1 (REVIEW): 12 VFX records, 4 reusable elements, global notes
- Proposals to the director (none applied; each is a PROPOSAL in its record): cut around SC01-SH070, show the boil-over as steam only, one tap in picture for SC03-SH020, graze insert for SC02-SH050, split saucer turns into inserts, end on a held frame for SC04-SH050
- Open items: OPEN-QUESTION title card; first-last-frame clip lengths to-verify; no compositor named
- Conflicts: none
- Next: image/video prompt engineers (elements, keyframes), quality-control (review criteria)


Source: `13_edit/edit_plan.md`

### Edit Plan: The Two Knocks

Cut version: v1 paper edit (nothing generated, no takes, so no take selection, cut list, EDL or ffmpeg script yet; those need generated clips and are built at assembly).

User decision (2026-10-19): the 38-shot coverage stays. This paper edit proposes no shot cuts, only trims, cut points, transitions and sound overlaps.

#### Paper edit
| # | Shot | Size | Dur s | Cut point | Transition out | Running total s | Note |
|---|---|---|---|---|---|---|---|
| 1 | SC01-SH010 | WS | 3 | on a look or a settle | cut | 3 | film opens: fade-in from black (derived by production-manager; kept) |
| 2 | SC01-SH020 | CU | 2.5 | on a look or a settle | cut | 5.5 | cut on the hand leaving frame left; hand exit carries the eye to SH030 |
| 3 | SC01-SH030 | CU | 2.5 | on a look or a settle | cut | 8 | cut on the saucer settling face-down |
| 4 | SC01-SH040 | MS | 2.5 | on a look or a settle | cut | 10.5 | cut on the customer leaving frame left, a look-away cut |
| 5 | SC01-SH050 | CU | 2.5 | on a look or a settle | cut | 13 | cut on the macaque's eyes settling on the tin; its eyeline (east, down) points at the shelf |
| 6 | SC01-SH060 | MS | 2.5 | on a look or a settle | cut | 15.5 | line VL-SC01-001 at 0.6-1.8 s; cut at 2.5 s, 0.7 s after the line, no clipping |
| 7 | SC01-SH070 | WS | 2 | on a look or a settle | cut | 17.5 | cut on the tin clutched; Lan still unaware |
| 8 | SC01-SH080 | MS | 1.5 | on action | cut-on-action | 19 | cut on the spin; "Hey!" at 0.5-1.0 s lands inside the shot |
| 9 | SC01-SH090 | WS | 2.5 | on action | cut-on-action | 21.5 | cut on the macaque leaving frame right, to Lan running right |
| 10 | SC01-SH100 | MS | 2 | on action | cut-on-action | 23.5 | cut on Lan exiting frame right; SC02-SH010 opens on travel to frame right |
| 11 | SC02-SH010 | MWS | 3 | on action | cut-on-action | 26.5 | cut on the cloth settling |
| 12 | SC02-SH020 | WS | 3 | on action | cut-on-action | 29.5 | cut on Lan running past the table, travel right |
| 13 | SC02-SH030 | MWS | 3 | on action | cut-on-action | 32.5 | cut on the macaque reaching the crates |
| 14 | SC02-SH040 | WS | 3 | on action | cut-on-action | 35.5 | cut on Lan landing |
| 15 | SC02-SH050 | MS | 3.5 | on action | cut-on-action | 39 | cut on the wincing hiss, graze visible |
| 16 | SC02-SH060 | MWS | 2 | on action | cut-on-action | 41 | cut on the macaque emerging |
| 17 | SC02-SH070 | MS | 3 | on a look or a settle | cut | 44 | cut on Lan half through; tone shifts to cost and comedy |
| 18 | SC02-SH080 | WS | 3 | on a look or a settle | cut | 47 | plain cut on the stop; silence begins |
| 19 | SC02-SH090 | MCU | 2.5 | on a look or a settle | cut | 49.5 | cut on eyes still |
| 20 | SC02-SH100 | MCU | 3 | on a look or a settle | cut | 52.5 | two knocks heard first; cut on her turned head |
| 21 | SC02-SH110 | WS | 3 | on a look or a settle | cut | 55.5 | last 0.5 s: market sound falls away (J-cut of the alley hush into SC03-SH010) |
| 22 | SC03-SH010 | WS | 3.5 | on a look or a settle | cut | 59 | cut on Lan standing still at the edge of the light |
| 23 | SC03-SH020 | CU | 2.5 | on a look or a settle | cut | 61.5 | cut on the macaque looking at Lan |
| 24 | SC03-SH030 | MCU | 2.5 | on a look or a settle | cut | 64 | cut on her hand, two fingers curled |
| 25 | SC03-SH040 | MWS | 2.5 | on a look or a settle | cut | 66.5 | cut on the hovering hand to the saucer insert |
| 26 | SC03-SH050 | INSERT | 1.5 | on a look or a settle | cut | 68 | insert held 1.5 s so the chip at 3 o'clock registers |
| 27 | SC03-SH060 | CU | 2 | on a look or a settle | cut | 70 | line VL-SC03-001 at 0.5-1.3 s; cut at 2.0 s |
| 28 | SC03-SH070 | MS | 3.5 | on a look or a settle | cut | 73.5 | cut on the lid lifting a hand's width |
| 29 | SC03-SH080 | INSERT | 2 | on a look or a settle | cut | 75.5 | hold on the contents; no writing visible |
| 30 | SC03-SH090 | CU | 2 | on a look or a settle | cut | 77.5 | cut on the last slice landing |
| 31 | SC03-SH100 | CU | 2 | on a look or a settle | cut | 79.5 | second knock is the strongest sound in the film; cut 0.3 s after it settles |
| 32 | SC03-SH110 | MS | 2.5 | on a look or a settle | cut | 82 | cut on chewing; contentment |
| 33 | SC03-SH120 | WS | 3 | on a look or a settle | cut | 85 | scene end; hold on the seated pair, then scene change |
| 34 | SC04-SH010 | WS | 2.5 | on a look or a settle | cut | 87.5 | return to SC01 framing; cut as her hand lifts |
| 35 | SC04-SH020 | CU | 2 | on a look or a settle | cut | 89.5 | cut on the saucer face-up |
| 36 | SC04-SH030 | CU | 2 | on a look or a settle | cut | 91.5 | cut on the knuckles resting |
| 37 | SC04-SH040 | MS | 2.5 | on a look or a settle | cut | 94 | cut on the macaque sitting by the saucer |
| 38 | SC04-SH050 | WS | 2 | on a look or a settle | cut-to-black | 96 | last 0.5 s fades to black |

Runtime: **96.0 s** against a target of 90 s (range 81 to 99 s): +6.7%, inside the ±10% rule. With the edit trims proposed in CR-E01 below it is 94.0 s (+4.4%).

#### Rhythm
| Scene | Shots | Total s | ASL s | Fits the scene's job? |
|---|---|---|---|---|
| SC01 routine, theft | 10 | 23.5 | 2.35 | Yes for the theft. The routine half (SH010 to SH060, 15.5 s, 6 shots) cuts as fast as the chase, so the "numb routine" does not contrast with the chase that follows (see CR-E01). |
| SC02 chase and loss | 11 | 32.0 | 2.91 | The chase half (SH010 to SH060, 17.5 s, 6 shots, ASL 2.9) is slower than it needs to be at 3.0 s per follow shot. The quiet half (SH070 to SH110, 14.5 s, 5 shots, ASL 2.9) fits: silence, breath, the knocks. |
| SC03 alley | 12 | 29.5 | 2.46 | Yes. It holds on emotion (SH060, SH070, SH120) and uses 1.5 to 2.0 s inserts for the objects. |
| SC04 mirror | 5 | 11.0 | 2.20 | Yes. It repeats SC01's shapes in a shorter time, then closes. |
| Film | 38 | 96.0 | 2.53 | The film has one speed; the plan below adds a gentle acceleration into the chase and a release into the alley. |

Variety of sizes: WS 11, CU 9, MS 9, MWS 4, MCU 3, INSERT 2. Every scene uses at least three sizes. Consecutive same-size pairs (for example SC01-SH020 to SH030, SC03-SH090 to SH100, SC04-SH020 to SH030) are deliberate object or hand pairs on the same set-up, each cutting on a different action, not jump cuts.

#### Problems and change requests
| CR | Target | Change | Reason | Timing impact |
|---|---|---|---|---|
| CR-E01 (PROPOSAL, to film-director) | SC02-SH010, SH020, SH030, SH040 | Trim each follow shot from 3.0 s to 2.5 s in the edit | Chase pacing: the chase should be faster than the routine, and the follow shots fill 3 s with travel that can be cut late. Clips are generated at 4 s, so the trim costs no extra generation | -2.0 s, total 94.0 s |
| CR-E02 (PROPOSAL, to film-director) | SC01-SH010 | Hold 3.5 s instead of 3.0 s, only if CR-E01 is accepted | Establish the stall's routine; the opening shot is the film's slowest moment | +0.5 s, total 94.5 s (optional) |
| CR-E03 (note, to video-prompt-engineer) | the nine first-last-frame shots | Clip length to verify | See "To verify" below | none yet |

No shot is added, cut or merged. No missing coverage found: every scripted beat has a shot, reactions exist at the turns (SC01-SH050, SC02-SH100, SC03-SH030), the geography is re-established at SC04-SH010 and SC04-SH050.

#### To verify
- **Veo 3.1 first-last-frame clip lengths: to-verify.** The user cannot confirm them yet. The generation plan assumes 4, 6 or 8 s for first-last-frame shots, and the shot records carry `clip_length_s` 4 (6 for SC02-SH050 and SC03-SH070). If first-last-frame is limited to one fixed length, every number below that depends on a clip length changes: the generated seconds, the handle after each trim, and the credits. The paper edit's own timeline does not change (it uses planned durations). It matters for the nine shots SC01-SH030, SC01-SH070, SC02-SH050, SC03-SH070, SC03-SH090, SC03-SH100, SC04-SH020, SC04-SH040, SC04-SH050.
- Generated length for image-to-video shots (4 s for most) is likewise unconfirmed against the tool until generation.

#### Take selection (after generation)
Not started: no clips exist. Rules for assembly: skip the first 0.3 s and last 0.3 s of every take, keep the dialogue shots' lines whole (VL-SC01-001, VL-SC01-002, VL-SC03-001), and prefer the take that keeps the macaque's notched left ear and the tin's two brass spots.

#### Cut list
Not built yet. `13_edit/cutlist.csv`, `13_edit/cut.edl` and `13_edit/assemble.sh` need generated files (`scripts/build_cut.py`). Header for assembly:
```
event,shot,file,src_in,src_out,transition,notes
```

#### Transitions, J/L cuts, music sync
All cuts are straight cuts except the film open and close. Each non-straight item has a reason.
| Cut | Type | Reason | Audio overlap | Music hit (proposal for the music-director) |
|---|---|---|---|---|
| open to SC01-SH010 | fade-in from black | film opening | market ambience rises over 1 s | none; no music tool, music in post, so the opening may stay bare |
| SC01-SH060 to SH070 | straight | the macaque is behind her: keep the quiet | ambience only | silence under the theft |
| SC01-SH080 to SH100 | cut on action | the chase starts | "Hey!" ends before the cut; no L-cut over the pot | chase cue may enter at SC01-SH090 (about 19.0 s) |
| SC01-SH100 to SC02-SH010 | cut on action | match the exit right to the entry right | pot hiss L-cuts 0.3 s into SC02-SH010, fading | chase cue continues |
| SC02-SH050 to SH060 | cut on action | the graze is the cost of the chase | the hiss of pain ends before the cut | accent on the graze (about 39.0 s) |
| SC02-SH070 to SH080 | straight | tone drops from comic to still | footsteps stop with the cut | chase cue ends by SC02-SH080 (about 44.0 s): silence from 44.0 s |
| SC02-SH100 | straight in, straight out | two knocks are the turn | the two knocks begin at about 0.4 s in the shot and are heard before the alley is seen | none: the knocks are the music's cue; the pair is generated to match SC03-SH020 |
| SC02-SH110 to SC03-SH010 | J-cut | from lane to alley | last 0.5 s of SH110: market sound falls, alley room tone enters early | music.md M02: a held low note begins at 55.0 s (SC02-SH110 +2.5 s) |
| SC03-SH050 to SH060 | straight | the saucer chip leads to her name for Ah Ma | none | music.md M03: silence over the whispered line (68.0 to 70.0 s); the theme enters at 70.0 s, SC03-SH070 |
| SC03-SH100 to SH110 | L-cut | the second knock lingers | knock ring trails 0.4 s over the macaque | music.md M03: music steps out for the two knocks (silent 77.5 to 79.9 s) and resumes after the ring |
| SC03-SH120 to SC04-SH010 | straight cut, scene change | the director kept a cut; a dissolve for time passing is a PROPOSAL, not applied | alley room tone trails 0.5 s under the lane sound | cue ends before SC04-SH010 (about 85.0 s) |
| SC04-SH030 to SH040 | straight | knock answers; the macaque drops | knock tail trails 0.2 s | final cue figure begins about 91.5 s |
| SC04-SH050 to end | fade to black over the last 0.5 s (director's cut-to-black) | the close | bulb click, last ambience held into black 0.5 s | last note rings out into black |

Music times assume the 96.0 s timeline and move with CR-E01 (-2.0 s from SC02 on).

#### Post order
1. Picture lock (user approval; not before generation and QC)
2. Conform (24 fps, 1920x1080 16:9 per brief)
3. Grade (style bible color script per scene)
4. Sound mix (stems, loudness from the sound-designer's plan)
5. Titles (title card text is a VFX/motion-graphics item, per the vfx plan)
6. Exports

#### Handoff
- Produced: edit_plan@1 (REVIEW), paper edit of 38 shots, 96.0 s
- Built from: SC01_shots@1 to SC04_shots@1, screenplay@1, style_bible@1
- Open items: CR-E01, CR-E02 (proposals to film-director); first-last-frame clip lengths to-verify
- Conflicts: none
- Next: stage 10 (voice, music, sound, VFX); cut list, EDL and ffmpeg script after generation


## 11. Continuity tracker
Source: `07_camera/continuity.md`

### Continuity Bible: The Two Knocks

Approved under the autonomy policy (see PRODUCTION_LOG.md).

#### Story timeline
| Scene | Story time | Elapsed | Weather | Notes |
|---|---|---|---|---|
| SC01 | N1, night, market open | start | dry, warm, humid haze | Steam, all stalls open |
| SC02 | N1, night | CONTINUOUS (seconds) | dry | Lights fall away toward the west |
| SC03 | N1, night | minutes after SC02 | dry, still | Only the alley lantern |
| SC04 | N1, late night | about an hour or more after SC03 (market closing) | dry | Stalls shuttered; same night, so the graze is still fresh |

#### State changes (cause and starting shot)
| Item | Change | Cause | Starts at |
|---|---|---|---|
| CH-LAN costume | BASE to GRAZED (CO-LAN-01) | Crate vault in SC02 | SC02-SH050 (end) |
| CH-LAN right forearm | Red surface graze, about 12 cm, outer RIGHT forearm, no drip | Splintered slat on the 4-high crate stack | SC02-SH050 |
| CH-LAN hair | Two to three loose strands | The run and the squeeze | SC02-SH050 (increasing to SH080) |
| CH-LAN dust | Light dust on apron hem and trouser knees | Dragging over the second crate stack | SC02-SH050 |
| CH-LAN face | Flushed, sweat sheen | The run | SC02-SH020 (heaviest at SC02-SH080, fading through SC03) |
| PR-SAUCER-STALL | UPRIGHT to FACEDOWN | Lan turns it with her right hand | SC01-SH030 |
| PR-SAUCER-STALL | FACEDOWN to FACEUP (set on the counter edge) | Lan turns it for the macaque | SC04-SH020 |
| PR-TIN | SEALED, on the shelf to SEALED, in the macaque's arms | Theft | SC01-SH070 |
| PR-TIN | SEALED to OPEN | Lan's thumbs open the lid | SC03-SH070 |
| PR-TIN | OPEN to LID-ON (lid set back loosely, offset, unsealed) | Lan sets the lid back | SC03-SH100 |
| PR-FRUIT | TWISTED to POURED | Lan shakes it onto the alley saucer | SC03-SH090 |
| PR-SAUCER-ALLEY | EMPTY to FRUIT to EATEN | Lan pours; the macaque eats | SC03-SH090 / SC03-SH110 |
| PR-POT | BOILING to BOIL-OVER | Lan leaves it | SC01-SH090 |
| PR-LADLE | HELD to ABANDONED | Lan drops it | SC01-SH100 |
| Stall bulb | ON to OFF | Lan uses the east-post wall switch | SC04-SH050 |

#### Per-shot states (key items only)
| Shot | Lan | Macaque / tin | Other |
|---|---|---|---|
| SC01-SH010 to SH060 | BASE, hair neat, no graze, ladle HELD then set down, tin SEALED on the shelf | on the wire from SH050 | Saucer UPRIGHT (SH010, SH020) then FACEDOWN (SH030 on); pot BOILING |
| SC01-SH070 | BASE | on the shelf with the tin SEALED | |
| SC01-SH080 to SH100 | BASE, flushed from SH100 | runs with the tin SEALED; rattle | Pot BOIL-OVER from SH090; ladle ABANDONED in SH100 |
| SC02-SH010 to SH030 | BASE becoming flushed, hair neat | tin SEALED in its arms | |
| SC02-SH040 | BASE, flushed | | Crates STACKED |
| SC02-SH050 | GRAZED from the landing | | Graze on the camera-side (right) forearm |
| SC02-SH060 | n/a (macaque only) | tin SEALED | |
| SC02-SH070 to SH110 | GRAZED, loose strands, dust, flushed | not seen | |
| SC03-SH010 to SH060 | GRAZED, flushed fading | tin SEALED on the ground, north of the stool; macaque south-west of the tin | ALLEY saucer EMPTY on the stool |
| SC03-SH070 | GRAZED | tin SEALED then OPEN at the end | |
| SC03-SH080 | | tin OPEN | Card FOLDED, spoon IN-TIN, fruit TWISTED |
| SC03-SH090 | GRAZED | | Fruit POURED; saucer FRUIT |
| SC03-SH100 | GRAZED | tin LID-ON | |
| SC03-SH110 | | | Saucer EATEN by the end |
| SC03-SH120 | GRAZED, dust on knees, seated | tin LID-ON in her lap | |
| SC04-SH010 to SH050 | GRAZED, dust, loose strands, calm | tin LID-ON on the shelf; macaque on the wire then at the saucer | STALL saucer FACEDOWN (SH010) then FACEUP (SH020 on); pot absent; stalls shuttered; stall bulb ON then OFF (SH050) |

#### Continuity records

```yaml
record: continuity
id: CONT-SC01
scene: SC01
axis: "East-west line of the counter; camera north of the counter in the lane, looking south"
screen_direction: "East = screen left, west = screen right. Shelf, tin and bulb at screen left; pot at screen right. The macaque faces screen left (toward the tin) on the wire. Macaque and Lan both exit screen right (west)."
character_states:
  - {id: CH-LAN, costume: CO-LAN-01, state: BASE, notes: "Hair neat, no graze, broth stains on apron, sleeves rolled to the elbow. Right hand touches the tin and turns the saucer. Ends flushed, running screen right."}
  - {id: CH-MACAQUE, costume: CO-MACAQUE-01, state: BASE, notes: "Notch in its own LEFT ear. On the wire facing screen left in three-quarter, so the left (notched) ear is toward the camera. Ends running west with the tin in its arms."}
prop_states:
  - "PR-TIN:SEALED: on the shelf (east end) until SC01-SH070, then in the macaque's arms"
  - "PR-SAUCER-STALL:UPRIGHT then PR-SAUCER-STALL:FACEDOWN at SC01-SH030, on the shelf (west end)"
  - "PR-PHOTO:STANDING between the saucer and the tin; PR-POT:BOILING then PR-POT:BOIL-OVER; PR-LADLE:HELD then PR-LADLE:ABANDONED"
time_of_day: night
weather: "dry, warm, humid haze; steam"
carry_over: "none (opening scene). Leaves: Lan BASE flushed running screen right; macaque with the tin running screen right; saucer facedown; pot boiling over; ladle abandoned."
```

```yaml
record: continuity
id: CONT-SC02
scene: SC02
axis: "East-west line of travel; camera on the north side of the lane looking south and tracking west"
screen_direction: "Travel west reads screen right in every shot except SC02-SH070 (neutral: Lan moves toward a camera waiting inside the service path) and SC02-SH110 (Lan walks away from camera to the alley mouth on the south side)."
character_states:
  - {id: CH-LAN, costume: CO-LAN-01, state: GRAZED, notes: "BASE until SC02-SH050, graze appears on the outer RIGHT forearm as she lands. Then loose strands, dust on hem and knees, flushed, sweat sheen. Hand on the graze in SC02-SH080."}
  - {id: CH-MACAQUE, costume: CO-MACAQUE-01, state: BASE, notes: "Runs low, tin in one arm on the side nearest camera (its right side is toward the camera when it runs west). Slightly dusty coat. Never in a shot with Lan."}
prop_states:
  - "PR-TIN:SEALED in the macaque's arms, rattling, until it is out of sight after SC02-SH060"
  - "PR-CRATES:STACKED undamaged, 3-high stack east of the 4-high stack; PR-CART:PARKED across the lane"
time_of_day: night
weather: "dry, steam haze thinning toward the west"
carry_over: "From SC01: Lan BASE flushed, macaque with the tin, both travelling screen right. Leaves: Lan GRAZED at the alley mouth threshold; macaque and the tin already in the alley."
```

```yaml
record: continuity
id: CONT-SC03
scene: SC03
axis: "North-south line from Lan (north) to the stool (south); camera on the west side of the alley, looking east, 4 m west of the centre line (west wall treated as flown-out)"
screen_direction: "North = screen left, south = screen right. Lan enters from screen left and moves screen right, the same as SC02. Lantern, drainpipe and east wall in the background."
character_states:
  - {id: CH-LAN, costume: CO-LAN-01, state: GRAZED, notes: "Graze visible on the camera-side right forearm when facing south. Loose strands, dust on knees, flushed fading. Crouches, then kneels, then sits on the cold ground at screen left of the macaque."}
  - {id: CH-MACAQUE, costume: CO-MACAQUE-01, state: BASE, notes: "Sits south-west of the tin facing north (screen left); notched left ear toward the camera. Taps with its left palm. Shuffles forward to the saucer and eats with its fingers."}
prop_states:
  - "PR-TIN:SEALED on the ground north of the stool until SC03-SH070, PR-TIN:OPEN in SC03-SH070 to SH090, PR-TIN:LID-ON from SC03-SH100 (lid set back loosely, offset)"
  - "PR-SAUCER-ALLEY:EMPTY on the stool seat with the chip at 3 o'clock toward the camera, PR-SAUCER-ALLEY:FRUIT after SC03-SH090, PR-SAUCER-ALLEY:EATEN by the end of SC03-SH110"
  - "PR-FRUIT:TWISTED in the tin, PR-FRUIT:POURED after SC03-SH090; PR-CARD:FOLDED and PR-SPOON:IN-TIN seen in SC03-SH080; PR-STOOL:STANDING; PR-LANTERN-ALLEY:LIT, steady"
time_of_day: night
weather: "dry, still"
carry_over: "From SC02: Lan GRAZED, flushed, loose strands; macaque and tin already in the alley. Leaves: Lan seated with the tin LID-ON in her lap; macaque beside her; saucer EATEN."
```

```yaml
record: continuity
id: CONT-SC04
scene: SC04
axis: "East-west line of the counter; camera at the SC01 position (north of the counter in the lane, looking south)"
screen_direction: "Same as SC01: east = screen left (shelf, east post and switch), west = screen right. Nobody exits."
character_states:
  - {id: CH-LAN, costume: CO-LAN-01, state: GRAZED, notes: "Same night, so the graze is fresh. Loose strands, dust on the apron hem. Calm. Right hand turns the saucer and knocks; reaches to the east-post switch."}
  - {id: CH-MACAQUE, costume: CO-MACAQUE-01, state: BASE, notes: "Appears on the lantern wire in SC04-SH040, tilts its head, drops to the counter edge beside the saucer. Notch on its own left ear."}
prop_states:
  - "PR-TIN:LID-ON on the shelf (east end), lid set back loosely and offset; 'open tin' in the script"
  - "PR-SAUCER-STALL:FACEDOWN at SC04-SH010, PR-SAUCER-STALL:FACEUP from SC04-SH020, set on the counter edge below the wire at the east end"
  - "PR-PHOTO:STANDING beside the tin; the pot is absent (ASSUMPTION carried from props@1)"
time_of_day: night
weather: "dry"
carry_over: "From SC03: Lan GRAZED with dust; the tin LID-ON, returned to the shelf off-screen between scenes; the macaque follows her back to the wire (off-screen). Leaves: the market dark."
```

#### Coverage map (lined script)
| Screenplay beat or line | Shots |
|---|---|
| SC01 Steam, lanterns, wok; Lan ladles noodles | SC01-SH010 |
| Two fingers touch the tin without looking; photo beside | SC01-SH020 |
| Chipped saucer turned face-down | SC01-SH030 |
| Customer takes the bowl; Lan wipes the counter | SC01-SH040 |
| Macaque on the wire watches the tin | SC01-SH050 |
| "Almost closing." | SC01-SH060 (VL-SC01-001) |
| Wire dips; macaque drops; both hands on the tin | SC01-SH070 |
| Lan turns; "Hey!" | SC01-SH080 (VL-SC01-002) |
| Macaque runs along the counter; tin rattles; pot boils over | SC01-SH090 |
| Lan abandons the ladle and runs | SC01-SH100 |
| SC02 macaque dives under a table; Lan skids around it | SC02-SH010, SC02-SH020 |
| Runs low and straight; tin rattles | SC02-SH030 |
| Vaults crates, drags over a second, forearm scrapes | SC02-SH040, SC02-SH050 |
| Cart blocks; macaque slips under; Lan through the gap sideways | SC02-SH060, SC02-SH070 |
| Out the other side; macaque and rattle gone; Lan stops, hand on arm | SC02-SH080 |
| Searches lanterns and crowd; nothing | SC02-SH090 |
| Two slow metallic knocks; silence | SC02-SH100 |
| Lan follows the sound to the alley mouth | SC02-SH110 |
| SC03 noise falls away; lantern, stool, saucer; tin and macaque; Lan at the edge of the light | SC03-SH010 |
| Macaque taps Knock. Knock. and looks at her | SC03-SH020 |
| Lan stares at the worn spots and at her own two fingers | SC03-SH030 |
| She steps in; hand reaches and stops | SC03-SH040 |
| Her eyes go to the matching chip | SC03-SH050 |
| "Ah Ma." | SC03-SH060 (VL-SC03-001) |
| Crouches, lifts the tin, thumbs, it comes open | SC03-SH070 |
| Insert: open tin, card, spoon, fruit twist | SC03-SH080 |
| Shakes the fruit onto the saucer | SC03-SH090 |
| Sets the lid back and knocks twice with two knuckles | SC03-SH100 |
| The macaque shuffles forward and eats | SC03-SH110 |
| Lan sits on the ground with the open tin in her lap; almost smiles | SC03-SH120 |
| SC04 closing, dimmed lanterns, tin on the shelf by the photo | SC04-SH010 |
| Saucer turned face-up and set on the counter edge | SC04-SH020 |
| Two knocks on the lid | SC04-SH030 |
| Macaque tilts its head and drops to the saucer | SC04-SH040 |
| Lan turns off the last light | SC04-SH050 |

All 3 dialogue lines and all action beats are covered. No shot adds a story event. Uncovered lines: none.

#### Continuity report
| ID | Severity | Sources | Issue | Owner | Status |
|---|---|---|---|---|---|
| CR-01 | MAJOR | SC02_direction@1 (SH070 follow, camera on the north side), LOC-NIGHT-MARKET@1 (gap L6 on the north side) | The camera cannot see the gap from the north side of the lane; moving it to the south side would flip travel to screen left and cross the line | film-director, cinematographer | RESOLVED: SH070 is a neutral shot taken from inside the service path ahead of Lan; direction, action plan and camera updated before approval |
| CR-02 | MINOR | screenplay@1 (SC03 'open tin' in her lap after the lid is set back) vs props@1 (LID-ON) | The script calls it 'the open tin' while the lid is back on. Treated as LID-ON, loosely set, unsealed | production-designer, screenwriter | ACCEPTED as recorded in props@1; user to confirm (ASSUMPTION already open) |
| CR-03 | MINOR | LOC-NIGHT-MARKET@1 | Wire height written as 2.4 m and as 70 cm above a 140 cm shelf (2.1 m) | production-designer | OPEN; no shot depends on it |
| CR-04 | MINOR | SC01_direction@1 SH090 | The macaque runs west along the counter toward the pot where Lan stands. Block it along the far (lane) edge of the counter; Lan has just turned from the pot and is not in reach | film-director | ACCEPTED; blocking note for the video prompt |
| CR-05 | MINOR | screenplay@1 SC03 | Where the empty fruit twist goes after the pour is not stated | screenwriter | OPEN; ASSUMPTION: Lan drops it into the tin when she sets the lid back; not shown |
| CR-06 | MINOR | SC03_camera@1 | Camera 4 m west of the alley centre line implies the west wall is flown-out; the identity lock says the alley is 2.5 m wide | production-designer | ACCEPTED; wide shots show the east wall only |
| CR-08 | MINOR | SC01_direction@1 (SH020 'photo left edge'), props@1 (shelf order west to east: saucer, photo, tin) | Seen from the north, east is screen left, so the order left to right is tin, photo, saucer; the photo is right of the tin, not left | film-director | RESOLVED: SC01_direction corrected before approval; SH020 hand enters from the right |
| CR-07 | MINOR | SC04_direction@1 | The macaque must follow Lan back to the wire between SC03 and SC04 (off-screen) | none | ACCEPTED; implied by the ritual |

Cuts checked: all 37 cut points across scenes. Light direction, screen direction, props and costume state agree across each cut after CR-01. Blockers: 0. Major: 1 (resolved). Minor: 7 (2 open, none blocks assembly).

#### Handoff
- Produced: continuity@1 (APPROVED under autonomy policy): 4 continuity records, 38 shots covered, 3 of 3 lines covered
- Built from: screenplay@1, the four direction and camera documents, SC02_action@1, bibles@1, props@1
- Open items: CR-03 (wire height) and CR-05 (fruit twist) are open and minor; CR-02 depends on the user's confirmation of the ASSUMPTION about the tin lid
- Conflicts: none unresolved
- Next: production-manager compiles shot records


## 12. Open issues

| Where | Marker | Text |
|---|---|---|
| 00_brief.md:52 | OPEN-QUESTION | Budget/credit limit for image and video generation (needed before stage 11; none set, no spend). |
| 12_vfx/vfx_plan.md:325 | OPEN-QUESTION | is there a title card, and where (open or end)? It would change the 96.0 s timeline. |
| 06_direction/SC01_direction.md:112 | ASSUMPTION | the customer is an unnamed extra, faceless and soft. |
| 06_direction/SC02_action.md:39 | ASSUMPTION | the gap (L6) is a 55 cm service path running parallel to the lane behind the north-side stalls. Because the camera lives on the north side of the lane looking south, it cannot see the path; the shot is taken from inside the path, ahead of Lan, looking east (neutral direction). |
| 06_direction/SC02_action.md:96 | ASSUMPTION | the gap is a service path parallel to the lane with open stall fronts (resolved: neutral shot from inside the path) |
| 06_direction/SC02_direction.md:104 | ASSUMPTION | the gap is a 55 cm service path parallel to the lane behind the north-side stalls, about 4 m long, wide enough for a gimbal operator walking backwards ahead of Lan (carried from SC02_action). |
| 06_direction/SC03_direction.md:120 | ASSUMPTION | the macaque taps with its left (camera-side) palm; ASSUMPTION: Lan kneels with the tin on her thigh for SH090-SH100 (the script says she shakes the fruit and sets the lid back without saying where the tin rests). |
| 06_direction/SC04_direction.md:94 | ASSUMPTION | the pot is not on the burner in SC04 (props@1). |
| 07_camera/continuity.md:182 | ASSUMPTION | Lan drops it into the tin when she sets the lid back; not shown \| |
| 11_sound/sfx.md:725 | OPEN-QUESTION | where will the film be delivered? |
| 11_sound/voice.md:78 | OPEN-QUESTION | if the voices differ between clips, does the user accept the best-of-takes, or want a replacement pass? |
| 04_world/LOC-BACK-ALLEY.md:83 | ASSUMPTION | alley runs north-south and opens onto the lane's west end, south side. |
| 04_world/LOC-NIGHT-MARKET.md:93 | ASSUMPTION | the lane runs east-west and the chase goes west; script-supervisor to confirm the axis. ASSUMPTION: the stall bulb has a wall switch (needed for "turns off the last light"). OPEN-QUESTION: none. |
| 04_world/props.md:288 | ASSUMPTION | removed or lidded). |
| 04_world/props.md:290 | ASSUMPTION | tin colour dark green and sizes as above (user gave 16 x 10 cm). ASSUMPTION: saucer chip at 3 o'clock. |
| 05_look/style_bible.md:140 | OPEN-QUESTION | style frames cost generations; user to confirm whether to generate them after the budget is set. ASSUMPTION: "35 mm film emulation" (grain and halation) is the intended photoreal flavour; brief only says photoreal live action. |
| 01_story/story.md:19 | ASSUMPTION | the macaque is not trained and not magical; it only responds to a learned sound and smell. |
| 01_story/story.md:22 | ASSUMPTION | A Southeast Asian night market (lanterns, string lights, steam, awnings), with the English-language film using one or two soft words of the grandmother's tongue ("Ah Ma" for grandmother). OPEN-QUESTION: confirm or change the country and cultural setting; it affects names, food, wardrobe and set design. |
| 01_story/story.md:27 | ASSUMPTION | name; user may change) \| protagonist, noodle vendor, late 20s-30s \| the tin back, safe \| to open the tin and continue what her grandmother did \| she cannot open the tin; she works on habit to avoid feeling \| "If I leave it sealed, she isn't gone yet." \| Passes the tin and touches the lid with two fingers each time, without looking \| Quiet, tired, brisk, few words \| numb and closed → open and carrying on \| |
| 01_story/story.md:46 | ASSUMPTION | the chipped saucer is the one from B1. PROPOSAL (for the screenwriter): to avoid a pickup action in the chase, Lan finds the saucer inside the tin in B6, so B1 should show a different chipped saucer under the counter (a second one) or the screenwriter may simplify to one saucer that lives in the tin and is only glimpsed in B1 on the shelf next to it. |
| 01_story/story.md:76 | OPEN-QUESTION | Real-macaque welfare and realism are not a concern for generation, but the story deliberately avoids any harm to the animal. |
| 01_story/story.md:87 | OPEN-QUESTION | Choose a concept (C1 recommended) and confirm the title ("The Two Knocks" vs "The Recipe Tin"). |
| 01_story/story.md:88 | OPEN-QUESTION | Confirm the country/culture of the market and the protagonist's name. |
| 01_story/story.md:89 | ASSUMPTION | the macaque is a wild, untrained animal; no magic. |
| 03_characters/CH-AHMA.md:96 | ASSUMPTION | age mid 70s ("70s" in the script); the photo uses one still of her. ASSUMPTION: a family resemblance to Lan (round face, same brow) is hinted but not identical. |
| 03_characters/CH-LAN.md:126 | OPEN-QUESTION | user to confirm the graze is on Lan's RIGHT forearm (chosen so it shows on her knocking hand). ASSUMPTION: age early 30s ("30s" in the script). ASSUMPTION: skin and features follow a general Southeast Asian presentation with no specific country. |
| 03_characters/CH-MACAQUE.md:26 | ASSUMPTION | adult, grey-flecked muzzle to show age and familiarity. |
| 03_characters/CH-MACAQUE.md:110 | ASSUMPTION | "notched left ear" means the animal's own left ear (viewer's right when facing camera); user to confirm. ASSUMPTION: animal is wild-looking, adult, sex unspecified, grey-flecked muzzle. PROPOSAL: production-designer fixes the tin to about 16 cm diameter x 10 cm tall so the macaque can hold it to its chest. |
