---
artifact: voice-plan
id: voice
version: 1
status: APPROVED
owner: voice-director
depends_on: [screenplay@1, SC01_shots@4, SC03_shots@3, CH-LAN@1, edit_plan@2]
updated: 2026-10-19
---
# Voice Plan: The Two Knocks

Three spoken lines, all by Lan, all on screen. The macaque makes animal sounds (a sound-designer item, not voice). Ah Ma is a photo and has no lines. Target tool: Veo 3.1 native audio (dialogue in quotation marks in the prompt, speaker named). No audio has been generated.

## Voice profiles

### VO-LAN — Lan (CH-LAN)
- Descriptors: early-30s woman · low-to-mid pitch, lower than a bright speaking voice · dry, slightly husky timbre, chest resonance · brisk pace, clipped, little melody · accent: soft Southeast Asian English as a regional speaker, lightly flavoured, no caricature and no country-specific accent (setting is deliberately regional) · low energy, worn out · texture: a little dry and breathy at the end of a long night
- Under stress: pitch rises and the voice opens wide and loud for "Hey!", with a hard onset and no breathiness. In the alley the voice drops below her normal pitch to a whisper: breath carries the sound, no voicing on "Ma".
- Distinct from other voices by: she is the only voice in the film; the macaque has non-speech sounds only.
- Tool settings (once chosen): Veo 3.1 native audio, no voice ID is selectable; voice identity across the three clips is not controllable. See "Consistency risk".
- Consent note: no cloning. Synthetic voice described only by qualities. No celebrity or real-person reference.

## Pronunciation guide
| Word | Respelling | Stress | Notes |
|---|---|---|---|
| Ah Ma | ah-MAH | second syllable lightly longer | The word for grandmother. Both syllables soft, open "a" (as in "father"). Keep it to a regional reading; no specific dialect is claimed. Avoid "ay-ma" or "ah-MAY". |
| Almost closing | AWL-most CLOH-zing | on "AWL" and "CLOH" | Plain English, even and flat |
| Hey | HEY | one syllable | Shouted, not stretched |

## Lines

```yaml
record: voice_line
id: VL-SC01-001
shot: SC01-SH060
character: CH-LAN
line: "Almost closing."
delivery: "intention: tell the pot it is nearly over, to nobody, to herself; stress: none, the flat tone is the point, very slight lean on 'closing'; pace: brisk, 2 words in 1.2 s; volume: conversational-low, under the market ambience; pauses: none inside the line, a short breath out through the nose after it; breath: tired exhale before 'Almost'; ends on a falling pitch; mouth closes after the line, eyes stay on the pot"
timing: "0.6-1.8 s"
on_screen: true
lip_sync: true
```

```yaml
record: voice_line
id: VL-SC01-002
shot: SC01-SH080
character: CH-LAN
line: "Hey!"
delivery: "intention: stop the thief, a reflex shout before she thinks; stress: whole word; pace: one short syllable, about 0.4 s; volume: loud, the loudest sound in the film so far; pauses: none; breath: sharp intake just before (0.4 s), none after; pitch jumps from her flat speaking level to a clear shout, hard onset, a little rasp at the top; mouth open wide, jaw dropped, arm out"
timing: "0.5-1.0 s"
on_screen: true
lip_sync: true
```

```yaml
record: voice_line
id: VL-SC03-001
shot: SC03-SH060
character: CH-LAN
line: "Ah Ma."
delivery: "intention: say the name she has not said in a long time, as a recognition, not a call; stress: a light lean on 'Ma', falling; pace: slow, two soft syllables over about 0.8 s; volume: barely audible, near a whisper, closer to breath than voice, just above the alley room tone; pauses: a held beat of silence before it (0.5 s of the shot) and a short silence after as her lips part; breath: a small breath in before, a catch in the throat after 'Ma', no sob; eyes wet, lips parted after the name"
timing: "0.5-1.3 s"
on_screen: true
lip_sync: true
```

## Timing fit
| Line | Shot | Shot length s | Window | Words | Fits? |
|---|---|---|---|---|---|
| VL-SC01-001 | SC01-SH060 | 2.5 | 0.6-1.8 s (1.2 s) | 2 | Yes. 2 words in 1.2 s is slower than the 2.5 words/s estimate, so room for a tired read. 0.7 s of tail before the cut. |
| VL-SC01-002 | SC01-SH080 | 1.5 | 0.5-1.0 s (0.5 s) | 1 | Yes, if the shout is one short syllable. A held "Heeey" will overrun the cut at 1.5 s. |
| VL-SC03-001 | SC03-SH060 | 2.0 | 0.5-1.3 s (0.8 s) | 2 | Yes. It leaves 0.7 s after for the lips-parted hold. |

No line is over its window. The edit plan (edit_plan@1) does not trim any of these shots. If CR-E01 is accepted it only touches SC02, not these.

## Consistency risk
Veo 3.1 gives no fixed voice, so the three clips may come out with three slightly different timbres. Order of choice, cheapest first: (1) re-roll the clip until the timbre is close; (2) describe the same voice qualities in each prompt (the descriptors above); (3) record or synthesise the three lines separately in a TTS tool and replace the clip audio in post (all three lines are short and on-screen, so lip-sync is the cost; "Hey!" and "Almost closing." are the easiest to fit). The user has no audio tool budget, so option 3 is not available now. This is flagged for the video-prompt-engineer and quality-control. OPEN-QUESTION: if the voices differ between clips, does the user accept the best-of-takes, or want a replacement pass?

## TTS scripts
No TTS tool is in the brief. The scripts below are for Veo 3.1 prompt syntax (quotation marks and a speaker label), to be pasted by the video-prompt-engineer:

- SC01-SH060: Lan says, in a flat, tired, low voice, to the pot: "Almost closing."
- SC01-SH080: Lan spins and shouts, a loud sharp startled shout: "Hey!"
- SC03-SH060: Lan whispers, barely audible, breathy, with wet eyes: "Ah Ma."

Per the tts-adapters guidance on Veo 3.1 (labelled OFFICIAL there), dialogue goes in quotation marks with the speaker named; no sound-effect or subtitle text is added to the same line.

## Take review log
| Line | Take | Verdict | Notes |
|---|---|---|---|
| (no takes exist) | | | Nothing generated. Review checks when takes arrive: correct words, "ah-MAH" pronunciation, same voice as the other two lines, delivery as written, line fits its window, no subtitles burned into the picture |

## Handoff
- Produced: voice@1 (REVIEW): 1 profile (Lan), 3 lines, pronunciation guide
- Lines over window: none
- Lip-sync lines for the video-prompt-engineer: VL-SC01-001, VL-SC01-002, VL-SC03-001 (all on screen)
- Open items: OPEN-QUESTION on voice mismatch between clips; Veo voice identity not controllable
- Conflicts: none
- Next: sound-designer (levels: "Hey!" is the loudest voice; "Ah Ma." sits just above room tone), music-director
