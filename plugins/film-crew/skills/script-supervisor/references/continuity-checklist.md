# Continuity Checklist

On a live-action set the script supervisor logs each take's action, actor positions, screen direction and
lens so scenes can be matched and recreated, and marks a lined script showing what each setup covered. This
file adapts that practice to AI production, where every shot is generated separately and nothing carries
over unless it is written down.

## Contents
1. What to track
2. The cut checklist
3. Common AI-production continuity errors
4. Severity
5. Issue format

## 1. What to track
| Category | Track |
|---|---|
| Wardrobe | costume ID, condition state, hood/sleeves/buttons, items removed or added |
| Hair and makeup | style, wetness, disarray, makeup smudges, sweat |
| Injuries | location (side!), size, freshness; progression over story time |
| Props | in which hand, where placed, state; consumables (drink level, cigarette length) |
| Positions | where each character is at the start and end of every shot and scene |
| Screen direction | facing and travel direction; entrances/exits per side |
| Axis | line of action per exchange; camera side |
| Eyelines | direction and height |
| Light | key side per setup, time of day, practicals on/off |
| Weather and environment | rain, wind, puddles, smoke, debris persisting after events |
| Set | landmarks in background, doors open/closed, objects moved |
| Time | story day/night, clock faces, elapsed time |

## 2. The cut checklist
For every outgoing → incoming shot pair:
- [ ] Same characters present who should be (nobody appears/vanishes without cause)
- [ ] Positions and spacing consistent (allowing for movement during the cut)
- [ ] Screen direction and facing consistent with the axis
- [ ] Eyelines meet (A looks right ↔ B looks left), heights match the lineup
- [ ] Props: same hand, same state, same position
- [ ] Costume state and hair identical
- [ ] Light direction and color consistent with the setup
- [ ] Background landmarks where they should be
- [ ] Weather and atmosphere match
- [ ] Cut on action: the motion's phase matches (arm halfway up → continues from halfway)
- [ ] Size/angle change ≥ ~30° or a clear size change (no unintended jump cut)

## 3. Common AI-production continuity errors
- Mirror flips: a scar, earring or bag on the wrong side.
- Costume details drifting (buttons, logo, strip color) between shots.
- Props appearing or vanishing mid-clip (object permanence).
- Background architecture changing between angles of the same set.
- Light flipping sides between shots of one setup.
- Time of day drifting (sky brighter in the reverse shot).
- Characters' relative heights changing.
- Weather inconsistency (rain in one angle only).

## 4. Severity
- **BLOCKER:** breaks story comprehension or identity (wrong character, missing story beat, impossible
  geography, line not covered). Must be fixed before handoff/generation continues.
- **MAJOR:** clearly noticeable (prop in the wrong hand, costume detail wrong, light flip).
- **MINOR:** noticeable only on close inspection (small background item moved).

## 5. Issue format
```yaml
id: CI-012
severity: MAJOR
where: "SC02-SH040 → SC02-SH050"
issue: "Parcel in Maya's left hand in SH040, right hand in SH050"
sources: ["SC02_direction@2 (SH050 action: 'right hand')", "CONT-SC02 prop_states"]
owner: film-director
proposed_fix: "SH050: switch to left hand (matches SC02-SH060 too)"
status: OPEN
```
