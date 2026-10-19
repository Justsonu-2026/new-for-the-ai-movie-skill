# AI Model Adapters

How to turn a model-neutral shot record into a prompt for a specific image or video model. The canonical
copy lives in `shared/ai-model-adapters.md`.

**Research date: 2026-10-19.** Products change monthly. Every model-specific line carries a trust label:
- **[OFFICIAL]** read directly in vendor documentation (source and date given)
- **[OFFICIAL-SNIPPET]** vendor documentation seen only as a search excerpt, not read in full
- **[THIRD-PARTY]** hosting platform, reseller or practitioner guide
- **[UNVERIFIED]** sources conflict or were not read

Before writing prompts for a named model, check the user's tool for its current limits. If you can browse,
re-read the vendor's prompting guide and update the profile. If a feature is not confirmed for the user's
tool, write the model-neutral version and say which feature needs checking.

## Contents
1. Capability profile (fill this first)
2. Universal rules (all models)
3. Video model profiles: Veo 3.1, Sora 2, Runway Gen-4 family, Kling 3.x, Seedance 2.x
4. Image model profiles: Gemini image (Nano Banana), GPT Image, Midjourney V7
5. Choosing a generation mode
6. Retry ladder

## 1. Capability profile

Record the user's actual tool before writing prompts. Ask once if unknown; otherwise write model-neutral.

```yaml
model_profile:
  name: "<tool + model version as shown in the UI>"
  modes: [text-to-video, image-to-video, first-last-frame, reference-to-video]   # what the UI offers
  clip_lengths_s: [4, 6, 8]
  aspect_ratios: ["16:9", "9:16"]
  max_reference_images: 3
  reference_syntax: "<how references are named in the prompt, if any>"
  native_audio: true            # generates dialogue/SFX itself
  negative_prompt_field: false
  prompt_char_limit: null
  verified_on: 2026-10-19
  verified_by: "user's UI | vendor docs URL"
```

## 2. Universal rules (all models)

These hold across every guide read for this research (Veo 3.1 [OFFICIAL, Google Cloud, 2025-10-16];
Sora 2 [OFFICIAL, OpenAI Cookbook, updated 2026-03]; Runway Gen-4 [OFFICIAL-SNIPPET]).

1. **One shot, one camera move, one primary action.** Sora 2: "Each shot should have one clear camera move
   and one clear subject action." Several cuts in one generation only when the model supports multi-shot
   prompting, each block with its own camera, action and light.
2. **Write actions as timed beats with an end state.** Sora 2's example: "Actor takes four steps to the
   window, pauses, and pulls the curtain in the final second." Not "actor walks across the room."
3. **Concrete nouns and visible verbs, not adjectives.** "Wet asphalt, zebra crosswalk, neon reflections"
   beats "a beautiful street"; "anamorphic 2.0x lens, shallow DOF" beats "cinematic look" (Sora 2).
4. **Order:** camera/framing → subject (with identity lock) → action → setting → light and palette →
   style → audio. Veo 3.1's formula: [Cinematography] + [Subject] + [Action] + [Context] + [Style & Ambiance].
5. **Light as sources and directions**, plus 3-5 named palette colors (Sora 2 advises naming three to five
   colors to keep the palette stable across shots).
6. **Phrase constraints positively.** Veo 3.1: write "a desolate landscape with no buildings or roads"
   rather than "no man-made structures". Runway Gen-4: negative phrasing is not supported and can produce
   the opposite [OFFICIAL-SNIPPET]; write "the camera remains still", not "the camera doesn't move".
   Use a negative-prompt field only where the tool has one, and keep it to this shot's real risks.
7. **With a start image, describe the change, not the picture.** The image fixes composition, identity and
   wardrobe; the text says what moves (Sora 2: the image anchors the first frame, the prompt defines what
   happens next).
8. **Repeat identity and style locks verbatim** across every prompt of a scene. Sora 2: "Keep descriptions
   consistent across shots, reuse phrasing for continuity."
9. **Shorter clips follow instructions more reliably.** Sora 2: stitching two 4 s clips may beat one 8 s
   clip. Generate 1-2 s longer than the cut needs for trim handles.
10. **Dialogue: short lines that fit the clip.** Sora 2: a 4 s shot holds one or two short exchanges.
11. **Iterate one variable at a time.** Sora 2: "same shot, switch to 85 mm". When a shot keeps failing,
    lock the camera, simplify the action, clear the background, then add complexity back.

## 3. Video model profiles

### Veo 3.1 (Google) — [OFFICIAL] Google Cloud blog "The ultimate prompting guide for Veo 3.1", 2025-10-16
- Clip length 4, 6 or 8 s; 720p or 1080p; 16:9 or 9:16. Outputs carry SynthID.
- Audio is generated from the prompt. Dialogue in quotes with a speaker (`A woman says, "We have to
  leave now."`); sound effects with `SFX:`; ambience with `Ambient noise:`.
- **First and last frame**: supply start and end images, describe the transition and audio.
- **Ingredients to video**: reference images for each character and the setting; refer to them by role
  ("Using the provided images for the detective, the woman, and the office setting, ...").
- **Timestamp prompting**: `[00:00-00:02] shot..., [00:02-00:04] shot...` to direct several shots in one
  8 s generation.
- The guide calls these features experimental; check whether the user's surface (Vertex AI, Gemini app,
  Flow) exposes each one.

### Sora 2 (OpenAI) — [OFFICIAL] OpenAI Cookbook "Sora 2: Prompting Guide", updated 2026-03
- API models `sora-2`, `sora-2-pro`. `seconds`: 4, 8, 12, 16, 20 (default 4). Sizes: 1280x720 / 720x1280;
  pro also 1792x1024, 1024x1792, 1920x1080, 1080x1920. Duration and size are set by parameters, not prose.
- **Image input** (`input_reference`) anchors the first frame and must match the output size.
- **Characters API**: reusable character from a 2-4 s MP4 clip; reference up to two characters per
  generation and name them in the prompt.
- **Extend**: up to 20 s per extension, up to 6 extensions (120 s total), using the full clip as context.
- **Edit**: change one thing per edit, state what changes.
- Descriptive template: prose scene description, then `Cinematography:` (camera shot, lens, lighting,
  mood), `Actions:` bullet list, `Dialogue:` block with consistent speaker labels, `Background Sound:`.

### Runway Gen-4 / Gen-4.5 — [OFFICIAL-SNIPPET] Runway Help Center Gen-4 prompting guide
- Text prompt focuses on motion (subject, camera, scene motion); the input image supplies the look.
- Positive phrasing only; refer to subjects in general terms ("the subject", "the woman").
- Durations and current features: [UNVERIFIED] — sources disagree; check the UI.

### Kling 3.x (Kuaishou) — [THIRD-PARTY]
- Reusable "Elements" built from several reference images (sources say 2-4) for character consistency.
- Multi-shot generation with per-shot duration and framing; sources disagree on limits (around 15 s total,
  up to six cuts) [UNVERIFIED].
- Start and end frame control exists in some modes; whether it combines with Elements depends on the mode.
- A dedicated negative-prompt field exists in some versions [THIRD-PARTY].

### Seedance 2.x (ByteDance) — [OFFICIAL-SNIPPET via Runway's Seedance 2.0 guide] + [THIRD-PARTY]
- Multimodal references labeled in the prompt (e.g. `@Image 1`, `@Video 1`, `@Audio 1`), each with a stated
  role: "explicitly stating what purpose each reference serves" [OFFICIAL-SNIPPET].
- Common roles: image = identity, outfit, product, environment; video = camera movement or motion;
  audio = music or rhythm [THIRD-PARTY].
- Numbered shots in one prompt (`Shot 1: ... Shot 2: ...`) for multi-shot output [THIRD-PARTY].
- Reference limits: sources conflict (for example 9 images / 3 videos / 3 audio vs 12 total) [UNVERIFIED].

## 4. Image model profiles

### Gemini image models ("Nano Banana") — [UNVERIFIED in this research; vendor page unreachable]
- Widely reported practice: describe the scene in sentences rather than keyword lists; use photographic
  terms; edit iteratively with conversational instructions; supply reference images for identity.
- Veo 3.1's official guide uses Gemini 2.5 Flash Image to make first/last frames and ingredient images.

### GPT Image (OpenAI) — [UNVERIFIED in this research]
- The Sora 2 guide recommends OpenAI image generation to make reference frames for `input_reference`.

### Midjourney V7 — [THIRD-PARTY]
- Omni Reference `--oref <image URL>` with weight `--ow 1-1000` (default 100) for a character or object;
  V7 only. Style reference is a separate parameter (`--sref`). Practitioners report inconsistent identity
  holding; check every result against the character sheet.

### Prompt shapes for stills (all image models)
- **Character turnaround sheet**: one character, neutral A-pose or relaxed stance, same scale in every view,
  plain light-grey background, even flat studio lighting, views left to right: front, three-quarter front,
  side (profile), three-quarter back, back; full body, head to toe in frame; no props in hands.
- **Expression sheet**: head and shoulders only, same angle and lighting in every cell, grid with labels.
- **Location plate**: empty of characters unless needed, camera height and lens stated, time of day and
  light sources stated.
- **Keyframe**: the shot's `start_frame` (or `end_frame`) text from the shot record, plus the style lock.

## 5. Choosing a generation mode

| Situation | Mode |
|---|---|
| Recurring character, controlled composition | image-to-video from an approved keyframe |
| Shot must land on a precise final composition (reveal, match cut, hand-off to next shot) | first-last-frame |
| Several recurring characters/settings, framing less critical | reference-to-video (ingredients/elements) |
| Establishing shot, no recurring identity | text-to-video |
| Continuous take longer than one clip | video-extend from the previous take |
| Fix one region or attribute of an otherwise good take | video-edit or image-edit, one change per pass |
| Text, logos, readable signs, UI screens | generate clean plate, add in post (vfx-supervisor) |

## 6. Retry ladder

Change one thing per retry, cheapest first:
1. Re-roll the same prompt (variance is expected).
2. Tighten the action: fewer beats, explicit end state, slower pace.
3. Lock the camera (`static`) or simplify the move.
4. Fix the input still (keyframe) instead of the video prompt.
5. Remove competing elements: extra characters, busy background, second action.
6. Shorten the clip length.
7. Switch mode (text-to-video → image-to-video → first-last-frame).
8. Split the shot into two shots (needs a change request to film-director and film-editor).
