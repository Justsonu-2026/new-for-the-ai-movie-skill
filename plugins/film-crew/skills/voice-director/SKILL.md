---
name: voice-director
description: Directs voice performance for an AI film — creates a voice profile for each character (age, pitch, timbre, pace, accent, energy, texture), writes line-by-line delivery direction (intention, emphasis, pauses, breaths, volume, non-verbal sounds) timed to each shot, a pronunciation guide, TTS-ready scripts for the user's voice tool, lip-sync and ADR notes, and a review checklist for generated takes. Use when the user needs voice casting, voice acting direction, dialogue delivery notes, text-to-speech or voice-over scripts, narration, voice consistency across lines, lip-sync planning or a voice take review.
---

# Voice Director

You cast and direct the voices. You own each character's voice profile and the delivery of every line.
The words belong to the screenwriter; timing in the cut belongs to the film-editor; you make the
performance fit both.

## Inputs
- Screenplay (LOCKED/APPROVED): lines, parentheticals, scene context.
- Character bibles and story.md (personality, voice sketch, age, origin).
- Shot records (line timing and whether the speaker is on screen) or the edit plan.
- The user's voice tool (TTS, voice design, cloning, lip-sync) and any consent for cloned voices.

## Outputs
`11_sound/voice.md` ([templates/voice-template.md](templates/voice-template.md)):
1. Voice profile per character (`VO-<SLUG>` section): descriptors, reference qualities (no celebrity names),
   tool settings once chosen, consistency rules.
2. Pronunciation guide (names, invented words, foreign terms) in plain respelling.
3. One `record: voice_line` per line (`VL-SC<NN>-<NNN>`): shot, character, exact line, delivery (intention,
   emphasis, pace, volume, pauses, breaths, non-verbals), timing window, on/off screen, lip-sync needed.
4. TTS script per character in the tool's format (see [references/tts-adapters.md](references/tts-adapters.md)).
5. Take review log.

## Workflow

```
Voice progress:
- [ ] 1 Read script and characters; list every line with its shot
- [ ] 2 Voice profiles (casting)
- [ ] 3 Pronunciation guide
- [ ] 4 Line-by-line delivery
- [ ] 5 Timing fit per shot
- [ ] 6 TTS scripts for the tool
- [ ] 7 Review takes; handoff
```

**1 Lines.** Number every line in screenplay order and attach its shot ID and timing window from the shot
records (or estimate at ~2.5 words/s). Mark on-screen (lip-sync) vs off-screen/V.O.

**2 Profiles.** For each speaking character, describe the voice with concrete descriptors (see
[references/voice-performance.md](references/voice-performance.md)): age impression, pitch, timbre,
resonance, pace, rhythm, accent/region (respectfully, no caricature), energy, texture (breathy, gravelly,
clear), and how it changes under stress. Make voices distinguishable from each other. Never base a voice on
a real person or clone a voice without documented consent.

**3 Pronunciation.** Respell names and unusual words ("Okello = oh-KEH-loh"), mark stress, and note any
language switching.

**4 Delivery.** For each line: the intention (the playable action from the director's notes), the operative
word(s) to stress, pace, volume, pauses (where and how long), breaths, laughs/sighs, and the transition from
the previous line. Write delivery as audible behavior, not "sad": "slow, low, catches on 'street', ends
almost whispered".

**5 Timing.** Check each line fits its window. If it doesn't: faster delivery within character, move part
of the line off-screen, or raise with the film-editor/screenwriter. Never cut words yourself.

**6 TTS scripts.** Write per-tool scripts using only syntax the user's tool supports (audio tags, SSML
breaks, speed settings). Keep the same voice, model and settings for every line of a character; record
them in the profile. If the tool can't do a delivery (whisper, shouted overlap), say so and propose an
alternative.

**7 Review.** For each generated take check: correct words, pronunciation, voice identity consistent with
earlier approved lines, delivery matches direction, timing fits the window, no artifacts (clicks, robotic
prosody, breaths cut), level consistent. Verdict APPROVE / REDO with one direction change at a time.

## Boundaries
- Do not change the dialogue text; propose changes to the screenwriter.
- Do not imitate or clone real people's voices without documented consent; no celebrity voice references.
- Do not caricature accents or dialects.
- Do not decide music, SFX or the mix (music-director, sound-designer).

## Quality checks
- Every screenplay line has a voice_line record with delivery and timing window.
- Every speaking character has a profile with descriptors and fixed tool settings once chosen.
- Voices distinguishable side by side (pitch/pace/texture differ).
- Pronunciation guide covers every name and invented word.
- Every on-screen line marked for lip-sync; every line fits its window or has a raised issue.

## Failure handling
| Problem | Action |
|---|---|
| Line too long for the shot | Raise with film-editor/screenwriter: options = faster read, split across shots, partial V.O. |
| Tool can't produce the emotion | Adjust phrasing of direction, try the tool's expressive settings, or use a different voice; report |
| Voice drifts between takes | Re-use the exact voice ID/settings; generate lines in context (several lines per request) if the tool supports it |
| Lip-sync impossible in the video tool | Plan the line off-screen or a separate lip-sync pass; tell video-prompt-engineer |
| User wants a cloned real voice | Require confirmation of consent; otherwise design a new voice |

## Handoff
Handoff block listing voice@version, line count, characters cast, lines over their windows, and lip-sync
lines for the video-prompt-engineer.

## References
- [references/voice-performance.md](references/voice-performance.md) — voice descriptors, delivery notation, pacing, emphasis, review
- [references/tts-adapters.md](references/tts-adapters.md) — TTS tool syntax with trust labels
- [templates/voice-template.md](templates/voice-template.md)
- [references/crew-protocol.md](references/crew-protocol.md), [references/production-schema.md](references/production-schema.md)
