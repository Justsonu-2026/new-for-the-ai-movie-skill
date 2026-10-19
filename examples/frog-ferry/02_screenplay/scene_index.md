---
artifact: scene-index
id: screenplay
version: 1
status: LOCKED
owner: screenwriter
depends_on: [story@1, brief@2]
updated: 2026-10-19
---
# Scene Index: Frog Ferry

Screenplay file: `02_screenplay/screenplay.fountain` — version 1 (this header).
Estimated runtime: 40 s (target 40 s). Scenes: 5. No dialogue (brief ASSUMPTION).

## Diagnosis of the source
- Works (protected): the repeated gag, the dandelion fluff as parasol, the last drop watering the seed.
- Problems fixed: none structural. Compressed the story's B1 to a single image of intent.

## Changes from source
| Element | Decision | Reason | Impact |
|---|---|---|---|
| B1-B5 | keep, one scene each | beats already one location, one change each | none |
| Story's final "wave to the cloud" | keep, shortened to a small wave at the sky | fits 12 s | none |
| Location | all scenes in one place (puddle), split by area | producibility | LOC-PUDDLE areas: near shore, mid-water, far shore |

## Scenes

```yaml
record: scene
id: SC01
heading: "EXT. PUDDLE - NEAR SHORE - DAY"
location: LOC-PUDDLE
time_of_day: morning
characters: [CH-PIP, CH-MO]
summary: "Pip spots Mo across the puddle holding a dandelion seed, launches her paper boat, and paddles off."
purpose: "Establishes want, geography and the seed."
value_change: "not started -> under way"
est_duration_s: 6
scene_card:
  who_speaks: "no one"
  what_happens: "Pip sees Mo, sets the boat on the water, climbs in with the seed, paddles."
  audience_sees: "puddle, near and far shore, Mo's drooping feelers and bare soil; key image: Pip with the fluffy seed gazing across the puddle"
  audience_learns_or_feels: "Pip has a gift for the lonely snail"
  production_flags: ["seed fluff must read as closed ball; Mo and Pip not in the same shot"]
```

```yaml
record: scene
id: SC02
heading: "EXT. PUDDLE - MID-WATER - DAY"
location: LOC-PUDDLE
time_of_day: morning
characters: [CH-PIP, CH-DROP]
summary: "A raindrop lands on the boat; it folds flat and sinks; Pip surfaces and refolds it."
purpose: "First gag; sets the rule that the drop always lands on the boat."
value_change: "on course -> sunk, then restored"
est_duration_s: 7
scene_card:
  who_speaks: "no one"
  what_happens: "Ripple rings, drop lands PLIP, boat folds and sinks, Pip surfaces with seed held high, refolds, salutes, paddles."
  audience_sees: "key image: boat folded flat on the water with Pip's soggy head and the dry seed above"
  audience_learns_or_feels: "giggle; the drop is a nuisance"
  production_flags: ["paper folding gag: cartoon smear then pop, not literal origami steps", "boat sinking and refold: split into short clips"]
```

```yaml
record: scene
id: SC03
heading: "EXT. PUDDLE - MID-WATER - DAY"
location: LOC-PUDDLE
time_of_day: morning
characters: [CH-PIP, CH-DROP]
summary: "Second drop sinks the boat faster; Pip refolds a lopsided boat and notices a shadow for a third drop."
purpose: "Escalates the gag and the worry."
value_change: "confident -> worried"
est_duration_s: 6
scene_card:
  who_speaks: "no one"
  what_happens: "Ripples, drop lands, boat sinks quickly, Pip scowls and refolds, small shadow grows, ears flatten."
  audience_sees: "key image: lopsided creased boat and Pip's flat ears under a growing shadow"
  audience_learns_or_feels: "anticipation of the third drop"
  production_flags: ["lopsided boat must be a consistent prop state PR-BOAT:CREASED"]
```

```yaml
record: scene
id: SC04
heading: "EXT. PUDDLE - MID-WATER - DAY"
location: LOC-PUDDLE
time_of_day: morning
characters: [CH-PIP, CH-DROP]
summary: "Pip opens the seed's fluff as a parasol; the drop bounces off it and the splash spins the boat forward."
purpose: "Climax: Pip's decisive new idea."
value_change: "beaten -> cleverly protected"
est_duration_s: 9
scene_card:
  who_speaks: "no one"
  what_happens: "Pip squints at the drop above, pops the fluff open overhead, drop bounces twice and splashes, wave spins the boat forward."
  audience_sees: "key image: Pip under the open white fluff parasol with a drop bouncing off it"
  audience_learns_or_feels: "delight at Pip's cleverness"
  production_flags: ["fluff closed ball to open parasol transform: keyframe both states", "drop bounce on fluff is a risky interaction"]
```

```yaml
record: scene
id: SC05
heading: "EXT. PUDDLE - FAR SHORE - DAY"
location: LOC-PUDDLE
time_of_day: morning
characters: [CH-PIP, CH-MO, CH-DROP]
summary: "The boat reaches the far shore; Mo plants the seed; a last drop waters it and a sprout pops up."
purpose: "Delivery, payoff of the drop turning helpful, and the closing image."
value_change: "undelivered, alone -> delivered, together"
est_duration_s: 12
scene_card:
  who_speaks: "no one"
  what_happens: "Boat bumps shore, Mo's feelers lift, Pip hands the seed, Mo plants it, last drop falls, sprout pops, both look up, Pip waves."
  audience_sees: "key image: Pip and Mo side by side with a tiny sprout between them in the rain"
  audience_learns_or_feels: "warmth; the nuisance was helping"
  production_flags: ["two characters touching: hand-off of the seed, keep simple", "sprout pop is a small effect"]
```

## Handoff
- Produced: screenplay@1 (APPROVED by autonomy-policy): 5 scenes, ~40 s
- Built from: story@1
- Proposals awaiting approval: none
- For designers: characters Pip (yellow origami frog), Mo (snail), the raindrop (faceless glossy teardrop); location LOC-PUDDLE (near shore leaf and pebble, mid-water, far shore with bare soil patch); props: PR-BOAT (new, flat/sunk, refolded, creased), PR-SEED (closed fluff, open parasol, planted), PR-OAR, PR-SPROUT
- Next: character-designer, production-designer, visual-style-designer
