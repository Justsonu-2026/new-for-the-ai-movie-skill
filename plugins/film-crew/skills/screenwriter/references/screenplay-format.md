# Screenplay Format (Fountain)

Fountain is a plain-text screenplay markup readable by screenwriting apps and by people. Syntax below is
the Fountain 1.1 core; the official page (fountain.io/syntax) could not be opened from the research
environment, so verify edge cases there if a parser disagrees.

## Contents
1. Title page
2. Elements
3. Layout conventions
4. A complete short example

## 1. Title page

Must be the first thing in the file. `Key: value` lines, then a blank line.

```
Title: The Last Delivery
Credit: Written by
Author: <name>
Draft date: 2026-10-19
```

## 2. Elements

| Element | How to write it | Force it |
|---|---|---|
| Scene heading | Line starting `INT.`, `EXT.`, `INT./EXT.`, `I/E` + location + ` - ` + time: `EXT. ROOFTOP - NIGHT` | start with `.` : `.FLASHBACK - SUMMER 1999` |
| Scene number (optional) | `#3#` at the end of the heading | — |
| Action | Any plain paragraph | start with `!` |
| Character cue | Line in ALL CAPS followed directly by dialogue | start with `@` (for names with lowercase) |
| Extensions | `MAYA (V.O.)`, `MAYA (O.S.)`, `MAYA (CONT'D)` | — |
| Dialogue | Lines directly under the character cue | — |
| Parenthetical | `(barely audible)` on its own line under the cue or inside dialogue | — |
| Dual dialogue | add `^` after the second character's cue | — |
| Transition | ALL CAPS line ending in `TO:` (e.g. `MATCH CUT TO:`), on its own | start with `>` |
| Centered text | `> THE END <` | — |
| Emphasis | `*italic*`, `**bold**`, `_underline_` | — |
| Lyrics | start the line with `~` | — |
| Page break | `===` on its own line | — |
| Section (outline only, not printed) | `# Act One`, `## Sequence 2` | — |
| Synopsis (not printed) | `= Maya realises the parcel is hers.` | — |
| Note (not printed) | `[[VFX: label must be readable]]` | — |
| Boneyard (not printed) | `/* ... */` | — |

## 3. Layout conventions

- **Present tense, active verbs.** "Maya vaults the railing." Not "Maya is vaulting" or "Maya vaulted".
- **Scene headings** name a real place the designers can build: `INT. STAIRWELL - TOP LANDING - NIGHT`.
  Use `CONTINUOUS` or `MOMENTS LATER` when time flows directly between scenes.
- **First appearance:** NAME in caps, age, one detail that defines them:
  `MAYA (17), courier jacket two sizes too big, counts her steps under her breath.`
- **Action paragraphs:** 1-3 lines; white space reads as time. One paragraph ≈ one image or beat.
- **Sounds that matter** may be in caps: `A DOOR SLAMS somewhere below.`
- **No camera language** (`we see`, `pan to`, `close on`) except `INSERT -` for a story-critical detail.
- **Parentheticals** describe delivery or a small action, never long business. Prefer action lines.
- **(V.O.)** voice-over from outside the scene's time/space; **(O.S.)** off screen but present.
- **Transitions** are rare: the default between scenes is a cut, which needs no notation.
- **Montage/Series of shots:** use a heading `.MONTAGE - MAYA'S ROUTE` then short action lines.

## 4. A complete short example

```
Title: Two Notes
Credit: Written by
Author: Example
Draft date: 2026-10-19

EXT. JUNKYARD - DUSK

Rust mountains under an orange sky. Wind lifts plastic sheeting like slow breathing.

BOLT (an old maintenance robot, one optic cracked) sorts scrap into perfect piles. It stops at a small
music box, winds it with a careful claw.

Two notes. A click. Silence.

Bolt winds it again. Two notes. It sets the box on its pile like something sacred.

INT. BOLT'S SHELTER - NIGHT

A car shell lined with salvaged lamps. Bolt fits a tiny brass comb into the music box.

BOLT
(to the box)
Almost.

Its chest panel RATTLES as it leans in. It presses the panel flat. Keeps working.

SMASH CUT TO:

EXT. JUNKYARD - LATER

Piles toppled. Bolt digs through the last one, frantic. Nothing.

It sits. The chest panel rattles again. Bolt looks down at it.

[[VFX: chest glow must read in silhouette]]
```
