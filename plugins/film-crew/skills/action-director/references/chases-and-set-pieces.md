# Chases and Set Pieces

## Contents
1. Chase design
2. Falls, jumps and stunts
3. Vehicles
4. Destruction and effects
5. Shot patterns

## 1. Chase design
- **Route map:** draw the route through the location(s) as segments: S1 corridor → S2 stairwell → S3 roof.
  Each segment has a distinct look and a distinct obstacle.
- **Gap curve:** track the distance between pursuer and pursued per segment (e.g. 10 m → 4 m → 1 m →
  escape). The gap is the tension; make it change.
- **Obstacles and choices:** each segment forces a choice (left or right, jump or hide) that reveals
  character.
- **Near misses** escalate; the final segment contains the biggest risk (the jump).
- **Screen direction:** pursuer and pursued travel the same screen direction; cutting between them with
  opposite directions reads as running toward each other.
- **Ending:** capture, escape, or reversal (the pursued turns on the pursuer). It must change the story.

## 2. Falls, jumps and stunts
- Break into: preparation (look, decision), commitment (the run-up/launch), the air/peak (often the hero
  shot), the landing, the aftermath (pain, cost). Each is its own shot for AI production.
- State the distances and heights from the floor plan (a 1.5 m gap between roofs) so the move is plausible.
- The landing reaction tells the audience how hard it was.

## 3. Vehicles
- Vehicle identity is a prop record (make it generic, distinctive color/shape, no real trademarks).
- Specify direction of travel on screen and keep it consistent.
- Interior shots (driver reactions) are cheaper and more reliable than complex exterior stunts.

## 4. Destruction and effects
- Every broken object becomes a new prop state; debris persists in later shots.
- Fire, smoke, water, glass shattering: flag for vfx-supervisor (generate as separate elements or rely on
  the model, depending on the tool).

## 5. Shot patterns
| Pattern | Use |
|---|---|
| Wide → medium → insert → reaction | standard readable exchange |
| Point of view of the pursued looking back | gap and threat |
| Low angle on the launch, high angle on the drop | height and danger |
| Static camera, subject crosses frame | clean, AI-friendly speed |
| Tracking alongside (truck) | sustained running; keep short for AI |
