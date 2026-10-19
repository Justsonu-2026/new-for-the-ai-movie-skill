# Props

## Contents
1. Prop vs set dressing
2. Hero props
3. States
4. Continuity of props
5. Prop sheet spec
6. AI risks

## 1. Prop vs set dressing
- **Prop:** handled by a character, mentioned in dialogue, or needed by the plot. Gets a `record: prop`.
- **Set dressing:** furnishes the set; listed in the location file. If a character starts using an item, it
  becomes a prop (move it to props.md and record when it was picked up).
- **Hand props** are carried; **hero props** are seen close or carry the plot; **practical props** work on
  screen (a lamp that switches on).

## 2. Hero props
Specify to the level an insert shot needs: exact size (cm), shape, materials and finish (matte, glossy,
scratched), colors with hex, markings (handwriting, stickers, dents) with position, weight impression
(how it is held), sound it makes (for sound-designer). Duplicates: if two similar objects exist, make them
visually different (color, size) so the audience never confuses them.

## 3. States
Every visible change is a state with an ID, a description, the scene/shot where it begins, and the cause:

```yaml
states:
  - {id: PR-PARCEL:DRY, description: "brown paper, crisp corners, white label legible", from: SC01, cause: "start"}
  - {id: PR-PARCEL:WET, description: "paper darkened and soft, corners rounded, label ink slightly run", from: SC02-SH030, cause: "rain on rooftop"}
  - {id: PR-PARCEL:TORN, description: "WET plus tape torn at one corner, paper flap lifted", from: SC02-SH050, cause: "snags on railing"}
  - {id: PR-PARCEL:OPENED, description: "paper peeled back, small tin box visible", from: SC04-SH020, cause: "Maya opens it"}
```
States are cumulative unless stated; if a state replaces another, say so. A state cannot reverse without a
cause (a wet parcel does not become dry in the next scene).

## 4. Continuity of props
- Where the prop is (which hand, which pocket, which table) at the end of each scene → script supervisor.
- Props carried between scenes must be accounted for at every scene change.
- Consumables (food eaten, candles burned down, drink levels) need a state per scene.

## 5. Prop sheet spec
- Neutral plain background, flat light, the prop alone, no hands.
- Views: front, back, side, top if relevant; one sheet (or row) per state that matters.
- A scale reference (a ruler line or a common object) noted in the brief.

## 6. AI risks
- Text on props mutates; keep it short or plan to insert it in post (vfx-supervisor).
- Small props in hands may merge with fingers; specify which hand and grip ("held flat on the left palm").
- Props can vanish between frames of a video (object permanence failure); keep hero props large in frame
  during critical shots or keep the action short.
- Transparent, reflective and liquid props (glass, mirrors, water pouring) are high risk.
