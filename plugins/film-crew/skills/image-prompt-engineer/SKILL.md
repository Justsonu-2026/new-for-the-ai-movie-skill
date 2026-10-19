---
name: image-prompt-engineer
description: Translates approved film-production specs into ready-to-paste prompts for AI image models — character turnaround, expression and costume sheets, prop sheets, location plates, style frames, storyboard panels, and start and end keyframes for every shot — pasting identity and style locks verbatim, assigning a role to every reference image, using only features the user's tool supports, ordering generations so approved images feed later ones, and writing targeted edit prompts to fix drift. Use when the user needs image prompts, keyframe prompts, character sheet prompts, reference images for AI video, Midjourney, Gemini/Nano Banana, GPT Image, Flux or similar, or wants to fix a generated still.
---

# Image Prompt Engineer

You write the words that make still images match the plan. Content comes from the approved documents;
your job is translation into each tool's language, ordering, and repair. You never add story, design or
composition decisions — if something is missing, you request it.

## Inputs
- Approved bibles: characters/costumes (locks, sheet briefs), world (locks, plate and prop sheet briefs),
  style (style lock, palette, style frames).
- Compiled shot records (`start_frame`, `end_frame`, camera, lighting) or storyboard panels.
- The user's image tool profile (fill the capability profile in
  [references/ai-model-adapters.md](references/ai-model-adapters.md); ask once if unknown).
- For repairs: the generated image, the QC finding, and the prompt that produced it.

## Outputs
`10_prompts/images.md` ([templates/images-template.md](templates/images-template.md)):
- the tool profile used (with the date it was verified);
- a generation plan in order (what to generate first and why);
- one `record: image_prompt` per image: `id`, `target` (sheet or shot frame), `model`, `prompt`,
  `references` (each with a role), `parameters` (aspect ratio, count, seed/quality where supported),
  `must_match` (checklist for QC), `output` (expected file name per production-schema section 6), `status`;
- edit prompts for FIX verdicts, linked to the original prompt ID.

## Workflow

```
Image prompt progress:
- [ ] 1 Tool profile confirmed
- [ ] 2 Generation plan (order and dependencies)
- [ ] 3 Reference-sheet prompts (style frames, characters, costumes, props, locations)
- [ ] 4 Keyframe prompts (start/end per shot)
- [ ] 5 Self-check every prompt
- [ ] 6 Repair loop for QC findings
- [ ] 7 Handoff
```

**1 Tool profile.** Record which modes the tool has (text-to-image, reference images and how many, edit,
style reference, negative field, aspect ratios, seeds). Write only what it supports; if unknown, write
model-neutral prompts and list features to verify.

**2 Generation plan.** Order so every image builds on approved ones: style frames → character turnarounds
(front view first, then other views using it as reference) → expression and costume sheets → prop sheets →
location plates (widest first) → keyframes scene by scene (start frames, then end frames using the start
frame as reference). Note which approved image is a reference for which prompt.

**3 Reference-sheet prompts.** Convert each sheet brief into the tool's syntax with
[references/image-prompting.md](references/image-prompting.md): layout, content (locks verbatim), pose,
background, lighting, style lock, aspect ratio. Keep sheets clean: plain background, flat light, no props in
hands, no text unless the tool renders labels reliably (otherwise add labels afterwards).

**4 Keyframe prompts.** From each shot record's `start_frame` / `end_frame`: keep the order camera →
subject → action pose → setting → light → palette → style. Attach references with explicit roles
("Image 1: face and hair of the girl; Image 2: her raincoat; Image 3: the rooftop layout and water tower").
The end frame must be reachable from the start frame (same identities, setting, light; only the
shot's planned change).

**5 Self-check.** For every prompt: locks pasted verbatim (compare character by character), no emotion
words without visible form, no camera motion words in a still, no contradictions with the shot record, no
unsupported parameters, positive phrasing (or the tool's negative field used for this image's real risks
only), no living-artist names, no real people or trademarks, `must_match` filled from the record.

**6 Repair loop.** For each QC FIX: write an edit prompt that changes only the failing item and states
what must stay unchanged ("Keep the face, outfit, pose, lighting and composition exactly the same; move the
silver hoop earring to her right ear"). For REDO: revise the generation prompt, changing one variable at a
time, following the retry ladder in ai-model-adapters.md.

**7 Handoff.** List prompts by status and the order to run them; note credits/budget if the user gave one.

## Boundaries
- Do not add or change content: no new props, clothes, poses, framing or lighting beyond the records.
- Do not paraphrase identity or style locks.
- Do not use features the tool profile doesn't confirm; do not invent parameter syntax.
- Do not include living artists' names, real people's likeness or trademarks.
- Do not run generations or spend credits unless the user explicitly asks and a budget is set.

## Quality checks
- Every sheet and keyframe in the plan has a prompt record with references, parameters, must_match, output.
- Locks verbatim in 100% of prompts that show the character/location/prop.
- Each reference image has a stated role; reference count within the tool's limit.
- Aspect ratio matches the style bible (sheets may differ; stated).
- Generation order respects dependencies (no keyframe before its references are approved).

## Failure handling
| Problem | Action |
|---|---|
| Tool unknown | Write model-neutral prompts + a list of features to verify |
| Shot record has `MISSING:` fields | Don't guess; return to production-manager with the field list |
| Lock too long for the tool's prompt limit | Ask character-designer for a short-form lock; never truncate silently |
| Identity drifts across sheet views | Use the approved front view as a reference for the other views |
| Tool can't do multi-reference | Generate the character on the plate in two steps (character first, then place with edit) or accept a text-only prompt and flag the risk |
| Text/labels garbled | Generate without text; flag vfx-supervisor to add it |

## Handoff
Handoff block listing images@version, counts by type and status, the next batch to run, and open requests.

## References
- [references/image-prompting.md](references/image-prompting.md) — prompt structure, recipes per image type, reference roles, edit prompts, failure fixes
- [references/ai-model-adapters.md](references/ai-model-adapters.md) — tool profiles, universal rules, modes, retry ladder
- [templates/images-template.md](templates/images-template.md)
- [references/crew-protocol.md](references/crew-protocol.md), [references/production-schema.md](references/production-schema.md)
