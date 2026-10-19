# Shot Grammar

## Contents
1. Shot sizes and what they do
2. Angles
3. Camera movement and motivation
4. Composition
5. Lens feel (intent for the cinematographer)
6. Coverage strategies
7. Axis, eyelines and the 30-degree rule
8. AI-feasibility risks
9. Transitions
10. Shot list row format

## 1. Shot sizes and what they do
Vocabulary is fixed by the production schema (EWS, WS, FS, MWS, MS, MCU, CU, ECU, INSERT, TWO-SHOT, OTS, POV).
- **EWS/WS:** geography, scale, isolation; establish or re-establish.
- **FS/MWS:** body language, movement, two people's relationship in space.
- **MS:** conversation baseline; gesture plus face.
- **MCU/CU:** emotion, decision, reaction; the audience is close to the character.
- **ECU:** a detail that is the whole beat (eyes deciding, a trembling finger).
- **INSERT:** an object that carries story information.
- **OTS:** relationship and point of view in dialogue; ties two characters.
- **POV:** we see what the character sees; puts the audience in their head.
Rule of thumb: the closer the shot, the more it must earn its place; save the tightest size for the turn.

## 2. Angles
Eye-level (neutral, equal), low (power, threat, heroism), high (vulnerability, being watched), overhead
(pattern, fate, clinical distance), dutch (unease — use rarely), profile (observing, separation), frontal
(confrontation, direct address).

## 3. Camera movement and motivation
Move the camera when something motivates it: a character's movement (follow, lead), revealing information
(push to a detail, crane up to reveal scale), an emotional shift (slow push-in as realization lands), or
point of view. Otherwise stay static — a still frame is a strong, generatable choice.
- **Push-in (dolly-in):** growing importance or realization. **Pull-out:** isolation, reveal of context.
- **Pan/tilt:** connect two things in one space; follow a glance.
- **Truck/arc:** reveal depth and dimension; energy.
- **Handheld:** urgency, instability, documentary; motivated by panic or chaos.
- **Crane/drone:** scale, transition between worlds; often at openings and endings.
Every move has a start, a speed and an end ("slow push-in from MS to MCU over 4 s, ends when she looks up").

## 4. Composition
- Place the eye where the beat is: subject on a third, or centered for confrontation/symmetry.
- **Looking room:** space in front of the face in the direction of the eyeline.
- **Headroom:** tighter headroom for tension; generous for calm.
- **Depth:** foreground, midground, background layers; use foreground framing (doorways, railings).
- **Leading lines** (roads, railings, light streaks) toward the subject.
- **Negative space** for isolation or threat (horror: the empty part of the frame).
- **Balance:** a small bright element can balance a large dark mass.

## 5. Lens feel (intent for the cinematographer)
Give the feel and why; the cinematographer picks millimeters:
- **wide** — space, energy, closeness with distortion, the environment matters;
- **normal** — natural, honest, conversation;
- **long** — compression, isolation, voyeurism, faces against soft backgrounds.
Add depth-of-field intent (shallow to isolate / deep to stage in layers).

## 6. Coverage strategies
- **Master + coverage:** wide master of the whole scene, then mediums, singles, inserts. Safe; flexible in
  the edit; for AI production, generate only what the edit will use.
- **Designed sequence:** each shot planned for one beat, no redundancy — efficient for AI films.
- **Oner / long take:** one continuous shot; powerful but very risky for current video models (identity and
  layout drift over time; length limits).
- **Shot-reverse-shot:** for dialogue; keep sizes matched between the two sides until a beat breaks it.
Choose per scene and say why.

## 7. Axis, eyelines and the 30-degree rule
- **180-degree rule:** draw the line between the two characters (or along the direction of movement); keep
  the camera on one side so screen positions and directions stay stable. Cross only on screen (camera move),
  via a neutral shot on the axis, or after a cutaway/re-establishing wide.
- **Eyelines:** if A looks screen right at B, B looks screen left at A. Match eyeline height to the lineup
  heights (a taller character looks down).
- **30-degree rule:** consecutive shots of the same subject should change angle by ~30° or more (or change size
  clearly) to avoid a jump cut — unless a jump cut is intended.
- **Screen direction across scenes:** a journey keeps a consistent direction (e.g. left → right) until a
  story reason reverses it.

## 8. AI-feasibility risks
Plan around what current video models often get wrong:
| Risk | Mitigation |
|---|---|
| Two or more actions in one clip | one primary action; split the shot |
| Complex camera move + complex action together | lock the camera or simplify the action |
| Small faces turning or far from camera in key emotional beats | go closer for the emotional beat |
| Several characters touching, grappling, dancing | keep brief and wide, or cover with inserts/reactions |
| Long fine-hand tasks | show start and result; keep the hands shot short |
| Readable text, screens, signs | plan a clean shot; flag VFX to add text in post |
| Long takes past the tool's clip length | split into shots or plan an extend with a motivated cut point |
| Exact continuity of a moving object across cuts | cut on action with the object clearly placed |

## 9. Transitions
Default is a straight cut. Use others for meaning: match cut (connect two ideas by shape or motion),
cut on action (smooth continuity), J-cut/L-cut (sound leads/trails, smooth emotional flow), smash cut
(contrast), dissolve (time passing, memory), fade to black (ending, big time jump), whip pan (energy).
State the cut point ("cut on her look-up").

## 10. Shot list row format
| ID | Size | Angle | Move | Subject | Action (with end state) | Composition | Lens feel | Light mood | Dur | Purpose | Out |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SC03-SH020 | MCU | high | static | Maya | turns parcel over, wipes label; ends looking up at the window | Maya left third, label center | normal, shallow | hard neon key, no fill | 4 s | she realizes it is her address | cut on look-up |
