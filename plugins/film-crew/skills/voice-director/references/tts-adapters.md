# TTS Adapters

Research date 2026-10-19. Trust labels as in the film-crew adapters: [OFFICIAL] read in vendor docs;
[OFFICIAL-SNIPPET] vendor docs seen only as a search excerpt; [THIRD-PARTY]; [UNVERIFIED]. Check the
user's tool before relying on any syntax.

## Contents
1. Universal practice
2. ElevenLabs Eleven v3
3. SSML-capable engines
4. Video models with native dialogue
5. Consent and likeness

## 1. Universal practice
- Fix one voice (voice ID/preset) and one set of settings per character; record them; never change them
  mid-film without re-generating all of that character's lines.
- Give the engine enough context: very short prompts tend to give inconsistent results in some engines
  (ElevenLabs advises experimenting with prompts over 250 characters for v3 [OFFICIAL-SNIPPET]). Where the
  tool allows, generate a line together with its neighbours and trim.
- Punctuation shapes delivery: commas and ellipses add pauses, question marks lift, exclamation adds energy.
  Avoid overusing capitals and exclamation marks.
- Generate several takes of key lines; choose by the review checklist.

## 2. ElevenLabs Eleven v3 — [OFFICIAL-SNIPPET] elevenlabs.io/docs/best-practices/prompting
- **Audio tags** in square brackets steer delivery, e.g. `[whispers]`, `[sighs]`, `[laughs]`,
  `[laughs harder]`, `[sarcastic]`; tags can be combined (`[happily][shouts] We did it!` — ElevenLabs blog).
- Voice choice matters most: a tag like `[whispering]` may not work on a voice designed for shouting.
- Stability setting: "Creative" or "Natural" for the most expressive results with tags; "Robust" reduces
  responsiveness to directional prompts.
- Professional Voice Clones were described as not yet fully optimized for v3 (blog) — check current status.
- The full tag list was not read; test any tag before relying on it.

Script format example:
```
MAYA — voice: <voice ID>, model: eleven_v3, stability: Natural
VL-SC03-004: [whispers] That's my... street.
```

## 3. SSML-capable engines — [UNVERIFIED per engine]
Many cloud TTS engines accept SSML (Speech Synthesis Markup Language, a W3C standard): `<break time="300ms"/>`
for pauses, `<emphasis>` for stress, `<prosody rate="slow" pitch="-2st">` for pace and pitch. Support varies
by engine and voice; check the engine's SSML reference before use.

## 4. Video models with native dialogue
Some video models generate speech with the picture (e.g. Veo 3.1 [OFFICIAL]: dialogue in quotation marks with
the speaker; Sora 2 [OFFICIAL]: a dialogue block with consistent speaker labels). Voice identity across
clips is less controllable there; for recurring characters, consider generating dialogue with a TTS voice
and lip-syncing, or replacing the generated voice in post. Coordinate with the video-prompt-engineer.

## 5. Consent and likeness
Never clone or imitate a real, identifiable person's voice without their documented consent. Do not ask
engines for "the voice of <celebrity>". Designed (synthetic) voices are the default.
