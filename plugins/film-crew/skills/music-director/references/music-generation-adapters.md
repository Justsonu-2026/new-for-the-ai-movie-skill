# Music Generation Adapters

Research date 2026-10-19. Official music-tool documentation could not be read from the research
environment; everything tool-specific here is [THIRD-PARTY] or [UNVERIFIED]. Check the user's tool.

## Contents
1. Universal prompt shape
2. Song-generation tools (style field + lyrics with section tags)
3. Instrumental/score tools
4. Editing to picture
5. Rights

## 1. Universal prompt shape
Describe, in this order: genre/style (by qualities, not artists) → instrumentation → mood and function →
tempo (BPM) → key/mode → structure and duration → dynamics shape → production feel (intimate, roomy,
lo-fi, orchestral hall) → vocals (none / voice type / language). Example:
"Cinematic tension cue, low pulsing analog-synth ostinato with processed hand percussion and high string
harmonics, anxious and propulsive, 128 BPM, D minor, 45 seconds, starts very quiet and builds steadily to a
loud peak at 38 seconds, then stops dead. Instrumental, no vocals."

## 2. Song-generation tools — [THIRD-PARTY] practitioner guides (e.g. for Suno)
- A separate **style** field (genre, instruments, mood, vocal type, tempo) and a **lyrics** field.
- Section tags in square brackets in the lyrics: `[Intro]`, `[Verse]`, `[Pre-Chorus]`, `[Chorus]`,
  `[Bridge]`, `[Outro]`; guides report `[Verse]`/`[Chorus]` as the most dependable and `[Bridge]` as less
  reliable (one guide suggests `[Instrumental Bridge]`).
- Specific details (genre, instruments, vocal type, BPM) work better than vague moods; one guide reports the
  front of the style prompt carries the most weight.
- Generate several versions; pick by the review checklist; lyrics may be altered by the model — check every word.

## 3. Instrumental/score tools — [UNVERIFIED]
Tools differ in maximum length, stems export, and duration control. Ask for: exact duration, instrumental
only, stems (or at least instrumental + percussion separated) for the mix, and loopable/non-loopable ending.

## 4. Editing to picture
Generated music will not hit picture events on its own. Plan edits at phrase or bar boundaries (at a known
BPM, one 4/4 bar = 240/BPM seconds), crossfades on downbeats, and button endings added or cut in the edit.
Give the film-editor the BPM so cuts can land on beats when wanted.

## 5. Rights
Terms of use differ by tool and plan (commercial use, ownership, attribution). Record the tool, plan and
date for each cue; flag commercial release questions for the user. Never request imitation of a named
artist or recording.
