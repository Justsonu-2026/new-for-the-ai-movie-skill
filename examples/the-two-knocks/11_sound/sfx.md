---
artifact: sound-plan
id: sfx
version: 1
status: APPROVED
owner: sound-designer
depends_on: [SC01_shots@4, SC02_shots@3, SC03_shots@3, SC04_shots@4, edit_plan@2, voice@1, LOC-NIGHT-MARKET@1, LOC-BACK-ALLEY@1]
updated: 2026-10-19
---
# Sound Plan: The Two Knocks

Nothing is generated. The plan is built for Veo 3.1 native audio first (per shot `SFX:` and `Ambient noise:` lines for the video-prompt-engineer), with post replacement where the native audio fails.

## Sound concept
- Sonic world: realistic, close and warm. A busy night market that thins out the further Lan runs, then a hushed alley, then a quiet shuttered lane. Lantern paper, steam, steel, damp concrete.
- Signature sounds: **the knock**, one dull metallic hollow tok on the tin lid. It is heard three times as a pair: first off-screen and unexplained (SC02-SH100), then from the macaque's palm (SC03-SH020), then Lan's knuckles (SC03-SH100) and again in the quiet lane (SC04-SH030). Every instance must use the same pitch and ring, so generate or choose it once and reuse it in post if the video model's version drifts. The second signature is the **tin's rattle** (dry, light: spoon, card and dried fruit inside).
- Silence means: the dropped market at SC02-SH080 to SH090 (loss), the held beat before "Ah Ma." (recognition), and the final black (rest). No score is assumed; music is added in post (no music tool).

## Ambience beds
| Scene | Bed elements | Density | Changes during scene | Room tone |
|---|---|---|---|---|
| SC01 | Night market crowd murmur, wok and burner hiss, steam release, string-light bulb buzz, far vendor calls with no readable words | high | Narrows to the pot and Lan at SC01-SH050 and SH060 (the quiet before the theft), then bursts at SH090 | open-air; none needed |
| SC02 | Same market, receding: crowd thins with every shot, dampened by the crates and carts; far pans of lantern creak | medium falling to low | Falls to a distant murmur at SC02-SH080; at SH110 it crossfades into alley room tone (J-cut) | none |
| SC03 | Alley: low room tone, faint distant market far behind, lantern paper flutter, occasional drip | very low | Holds almost flat; the market is nearly gone. Only Lan, the macaque and the tin make sound | alley room tone (open-air courtyard) is continuous so dialogue and Foley edits stay seamless |
| SC04 | Shuttered lane: few distant shutter rattles, one stall bulb hum, lanterns creaking | low | The bulb hum ends at SC04-SH050 and the last bed holds into black | none |

## Sync cues

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

## Transitions and silence
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

## Mix intent
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

## Delivery spec
- Stems: dialogue, music (added in post), effects (Foley, hard, designed, ambience), full mix, M&E (music and effects, no dialogue; only 3 lines, so the M&E is the full mix minus 3 shots' voice).
- Loudness target: -14 LUFS integrated (common online-video value); confirm with the platform. The user has not named a delivery platform. OPEN-QUESTION: where will the film be delivered?
- True peak ceiling: -1 dBTP (commonly cited; confirm with the platform).
- Veo native audio: the three speech lines and all effects arrive mixed in each clip. Sync Foley is often unreliable in native audio; if a clip's audio is wrong, mute it and rebuild from library or recorded sounds, noting source and licence of each. No sounds are licensed or chosen yet.

## Audio lines for the video-prompt-engineer
One `SFX:` line per cue above, and an `Ambient noise:` line per scene:
- SC01: Ambient noise: busy night-market murmur, wok hiss, steam release, string-light buzz; no readable words.
- SC02: Ambient noise: the same market, thinner and further away with each shot.
- SC03: Ambient noise: quiet alley room tone, faint far-off market, paper lantern flutter.
- SC04: Ambient noise: quiet shuttered lane, one dimmed bulb hum, distant shutter rattle.
Subtitles and burned-in text are not wanted on any clip.

## Review log
| Cue | Take | Verdict | Notes |
|---|---|---|---|
| (no takes exist) | | | Review checks on arrival: the knock matches in all four places, tin rattle is dry, ambience continuous across cuts in a scene, "Ah Ma." intelligible but quiet |

## Handoff
- Produced: sfx@1 (REVIEW), 47 cues in 38 shots (counts by scene: {'SC01': 16, 'SC02': 14, 'SC03': 12, 'SC04': 5}; dialogue lines are voice.md items, not cues); ambience per scene; transitions and silences; delivery spec
- Audio lines for video-prompt-engineer: listed above, plus each cue's `prompt`
- Open items: OPEN-QUESTION delivery platform and loudness target; native-audio sync is unreliable (post rebuild may be needed)
- Conflicts: none
- Next: music-director (hit points near the knocks), film-editor (assembly), quality-control
