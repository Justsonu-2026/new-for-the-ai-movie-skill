# Fight Choreography

## Contents
1. The story inside a fight
2. Fighting styles from character
3. Phrase notation
4. Impacts and reactions
5. Weapons and props
6. Readability on camera
7. AI-execution notes

## 1. The story inside a fight
A fight is a conversation in which each move is a line. It has objectives, tactics that fail and change, a
turn and a cost. Professional action designers plan it before the shoot through previs or "stuntvis" (video
of the choreography shot and cut before production), so the director can approve the action as a cut
sequence — this plan is the written equivalent.

## 2. Fighting styles from character
| Character type | Style | Tells |
|---|---|---|
| Trained professional | economical, few wasted moves, controls distance | calm breathing, finishes quickly |
| Desperate amateur | wild swings, grabs, uses whatever is near | off-balance, eyes on the exit |
| Brawler | power over precision, absorbs hits | advances, crowds the opponent |
| Small and fast | evasion, uses environment, hits and runs | changes levels, keeps moving |
| Reluctant | defends, tries to end it, hesitates at the finishing move | looks away after hitting |
A style can change during the fight; that change is often the character's arc in miniature.

## 3. Phrase notation
Write in numbered phrases; each phrase is a short exchange that ends with a changed situation.

```
P3 (escalation, momentum: Rook)  ~4 s
 3.1 Rook steps in, right hook at Maya's head.
     → Maya ducks under it (level change), stumbling back two steps toward the parapet.
     ⇒ She is now cornered, parapet behind her.
 3.2 Rook grabs the strap of her messenger bag with his left hand, yanks her toward him.
     → Maya lets the bag strap slide off her shoulder; she spins free, out of frame left.
     ⇒ Rook holds the empty bag; Maya has space but lost the bag.
```
`→` reaction, `⇒` consequence. Directions are the character's own left/right; add screen direction when it
matters ("exits frame left").

## 4. Impacts and reactions
- The reaction sells the hit: head snaps, body folds, a step back, a breath out, a stumble into scenery.
- Escalate damage: early hits glance off; later ones cost. Exhaustion shows (slower guards, heavy breathing).
- For lower ratings: cut on the impact, show the reaction or the aftermath (a fallen object, the winner's
  hand shaking).

## 5. Weapons and props
- State the weapon's grip hand and where it is when not in use; weapon swaps are continuity events.
- Environmental props: anything the location has can be used (laundry line, chair, door); check with the
  production-designer's set dressing; breaking a prop creates a new prop state.

## 6. Readability on camera
- Geography first: open each phase with a shot that shows both fighters and the space.
- Keep the camera on one side of the line of action; cross only with a visible move.
- One idea per shot: an attack, a reaction, a decision.
- Cut on action: the start of a move ends one shot, its completion opens the next.
- Vary rhythm: a flurry, then a breath (hold), then a decisive move.
- Show the eyes before key decisions (the moment a character chooses to fight or flee).

## 7. AI-execution notes
Current video models (as reported by practitioners; varies by tool) tend to fail on: limbs passing through
each other, extra or missing fingers on grips, weapons changing hands or vanishing, fast spins scrambling
identity, more than one contact per second. Design around it:
- 2-4 s clips with one decisive move; reactions in their own shots.
- Moves across the frame (lateral) read better than moves toward or away from camera.
- Silhouettes separated (fighters not overlapping in frame) except at the moment of contact.
- Use speed changes (slow-motion on the decisive move) to give the model fewer frames of complex motion.
- If the tool supports motion reference (a reference video of the move) or start/end frames, use them for
  the hardest moves; describe the end pose precisely.
