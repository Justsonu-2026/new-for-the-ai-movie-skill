---
artifact: scene-index
id: screenplay
version: 1
status: LOCKED
owner: screenwriter
depends_on: [story@1, brief@1]
updated: 2026-10-19
---
# Scene Index: The Two Knocks

Screenplay file: `02_screenplay/screenplay.fountain` — version 1 (this header).
Estimated runtime: 90 s (target 90 s, range 81-99). Scenes: 4.

## Diagnosis of the source
- Works (protected): the two-finger touch → two knocks echo; the motive twist with clues planted in B1; Lan's decisive choice to open the tin; the mirrored final image; no villain, no harm to the animal; tiny cast.
- Problems fixed:
  - Saucer logic (story B1/B6 PROPOSAL): a single saucer that must be both under Lan's counter in B1 and inside the tin / on the alley stool in B6 required a pickup. Fixed with two matching saucers, below.
  - B6 listed "the chipped saucer's twin-sized lid-plate" as tin contents; unclear and unfilmable. Removed; tin holds card, spoon, dried fruit.
  - Dried fruit was in the tin but the saucer fed it at the stool; now the stool already holds the saucer, so Lan never has to carry one.
  - Dialogue: story is silent on speech. Kept to three Lan lines total (the customer and macaque are silent).

## Changes from source
| Element | Decision | Reason | Impact |
|---|---|---|---|
| Saucer object logic | change (delegated by user) | Two saucers: a STALL saucer on the shelf beside the photo (Lan turns it face-down in SC01, face-up in SC04) and an ALLEY saucer, same chip, already on the stool (Ah Ma's feeding place). No pickup, no carrying in the chase. The matching chip is how Lan reads the alley as Ah Ma's. | Props: 2 chipped saucers with matching chip; story setup/payoff table still satisfied. Not a plot-event change. |
| Saucer "nudged under counter with foot" (B1) | change | Foot action is hard to generate; now she turns it face-down on the shelf with her hand | Prop state: STALL saucer face-down → face-up |
| Saucer inside tin (B6) | cut | Replaced by alley saucer (see above) | Tin contents reduced to card, spoon, fruit |
| B1 customer served | keep | Establishes routine; shortened | Extra: one CUSTOMER |
| B2 pot left boiling | keep | Shown as boil-over; Lan abandons the ladle | Prop/FX: boil-over steam |
| B3 + B4 | merge into SC02 | Same location and continuous action; B4's knock is the scene's turn | Fewer scene changes |
| B5 + B6 feeding | merge into SC03 | Single continuous alley scene | |
| B6 closing stall | split into SC04 | Own time jump and mirror image | |
| Dialogue | add (minimal) | "Almost closing." (flat, establishes her numbness), "Hey!", "Ah Ma." (recognition). Customer silent. | Voice-director: 3 short lines |
| Photo of Ah Ma | keep | Moved next to tin on shelf, mid-laugh, hand on tin | Prop: framed photo |
| Lan scrape on arm | keep | Minor, no blood emphasis; family-safe | Continuity: scrape on forearm (which arm TBD by character-designer/script-supervisor) |
| Recipe card readability | keep, flag | `[[VFX: ...]]` note: card stays folded / out of focus | vfx-supervisor |
| Lan opens tin (decisive choice) | keep | Placed after her hand stops short of grabbing it | |

## Scenes

```yaml
record: scene
id: SC01
heading: "EXT. NIGHT MARKET - LAN'S NOODLE STALL - NIGHT"
location: LOC-NIGHT-MARKET
time_of_day: night
characters: [CH-LAN, CH-MACAQUE, CH-AHMA]
summary: "Lan cooks, touches the sealed tin without looking, turns a chipped saucer face-down. A macaque watches from the wire, then snatches the tin and runs along the counter."
purpose: "Establishes Lan's numb routine, the tin, the saucer, the photo, and the macaque's watching; the theft is the inciting incident."
value_change: "numb routine -> routine broken"
est_duration_s: 22
scene_card:
  who_speaks: "Lan (two short lines: 'Almost closing.', 'Hey!'); customer and macaque silent"
  what_happens: "Lan serves a customer, passes the shelf and touches the tin lid, turns the saucer face-down; the macaque drops from the wire, grabs the tin, runs along the counter; the pot boils over; Lan runs after it."
  audience_sees: "Worn bright spots on the lid; the photo of Ah Ma tapping the tin; the macaque's notched left ear; key image: two fingers touching the tin without looking."
  audience_learns_or_feels: "Lan's grief in her habits; a hint that the monkey is watching, not scheming."
  production_flags: ["animal identity: notched left ear", "animal hands on tin: keep short", "photo must not need readable text", "boil-over steam FX"]
```

```yaml
record: scene
id: SC02
heading: "EXT. NIGHT MARKET - LANES - CONTINUOUS"
location: LOC-NIGHT-MARKET
time_of_day: night
characters: [CH-LAN, CH-MACAQUE]
summary: "Lan chases the macaque through lanes of soft-focus crowds, vaulting crates and squeezing between stalls. She scrapes her arm, loses it, and hears two slow knocks from an alley."
purpose: "Escalates the pursuit, plants the clue that the macaque runs with direction, and turns want into curiosity with the knock."
value_change: "confident pursuit -> doubt -> curiosity"
est_duration_s: 32
scene_card:
  who_speaks: "Nobody; breath and rattle carry the scene"
  what_happens: "Macaque under table; Lan around it; crates vaulted; arm scraped; blocked lane with cart, macaque slips under, Lan takes gap between stalls; macaque lost; two metallic knocks; Lan walks toward the alley."
  audience_sees: "Macaque low and straight, tin rattling; Lan sideways through the gap; key image: Lan stopped in the lights, breathing hard, hearing a knock."
  audience_learns_or_feels: "Tension and humor, then hush; the monkey is not fleeing up and away."
  production_flags: ["crowd: sparse and soft-focus", "motion of animal and human in one shot: split across shots", "minor arm scrape, no gore"]
```

```yaml
record: scene
id: SC03
heading: "EXT. BACK ALLEY - NIGHT"
location: LOC-BACK-ALLEY
time_of_day: night
characters: [CH-LAN, CH-MACAQUE]
summary: "In a quiet alley the macaque sits by the tin on a stool under a paper lantern, taps the worn spots twice and looks at Lan. She recognises the ritual, opens the tin for the first time, feeds the macaque with a knock."
purpose: "The motive reveal and Lan's decisive choice: she lets go of 'get it back sealed' and opens the tin."
value_change: "closed, wanting it back -> open, understanding"
est_duration_s: 26
scene_card:
  who_speaks: "Lan ('Ah Ma.' barely audible); macaque silent"
  what_happens: "Lan arrives; macaque taps tin twice and looks at her; Lan sees her own habit in the worn spots and the alley saucer's matching chip; her hand stops short of grabbing; she crouches, lifts the tin, opens it; tin holds card, spoon, dried fruit; she shakes the fruit on the saucer and knocks twice; macaque eats."
  audience_sees: "Macaque palm on the worn spots; the matching chip; the tin open; key image: Lan's thumbs finding the lid and it opens."
  audience_learns_or_feels: "The monkey was answering a signal; Ah Ma sat here every night; surprise turning to tenderness."
  production_flags: ["VFX: recipe card must not be readable", "animal hands on tin: tapping 2 s", "prop continuity: ALLEY saucer upright on stool", "single lantern as only light"]
```

```yaml
record: scene
id: SC04
heading: "EXT. NIGHT MARKET - LAN'S NOODLE STALL - LATER"
location: LOC-NIGHT-MARKET
time_of_day: night
characters: [CH-LAN, CH-MACAQUE]
summary: "At closing, Lan sets the stall saucer face-up and knocks twice on the open tin. The macaque drops down from the wire."
purpose: "Mirrors the opening: touch becomes knock; the ritual continues."
value_change: "grief sealed -> grief shared"
est_duration_s: 10
scene_card:
  who_speaks: "Nobody"
  what_happens: "Lan turns the stall saucer face-up, knocks twice on the open tin on the shelf; macaque tilts its head, drops to the saucer; Lan turns off the last light."
  audience_sees: "Tin now open on the shelf; saucer face-up; key image: two knocks, monkey dropping from the wire."
  audience_learns_or_feels: "Quiet warmth, bittersweet resolution."
  production_flags: ["props: STALL saucer face-up", "continuity: scrape on Lan's forearm", "monkey drop from wire: keep short"]
```

Runtime: 22 + 32 + 26 + 10 = 90 s.

## Handoff
- Produced: screenplay@1 (REVIEW): 4 scenes, ~90 s
- Built from: story@1, brief@1
- Proposals awaiting approval: PROPOSAL: two matching chipped saucers (stall + alley) as the saucer logic; story@1's single-saucer setup is replaced, plot events unchanged. PROPOSAL: Lan's dialogue limited to 'Almost closing.', 'Hey!', 'Ah Ma.'
- For designers: characters CH-LAN, CH-MACAQUE, CH-AHMA (photo only; customer and crowd are extras); locations LOC-NIGHT-MARKET (stall, lanes), LOC-BACK-ALLEY; props with state changes: tin (closed/dented → open), STALL saucer (upright → face-down → face-up), ALLEY saucer (upright, matching chip), framed photo, wooden spoon, recipe card, dried-fruit twist, pot (boil-over), paper lantern, stool, delivery cart, crates
- Next: production-manager runs GATE 2 (screenplay approval); then character-designer, production-designer, visual-style-designer
