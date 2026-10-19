# Writing Identity Locks

An identity lock is a short, fixed description pasted verbatim into every prompt that shows the character
(or costume). Image and video models do not remember earlier generations; repeating the same words is one of
the main text-side controls for consistency (Sora 2's official guide: "Keep descriptions consistent across
shots, reuse phrasing for continuity"). Reference images are the other control — use both.

## Contents
1. Rules
2. Order of information
3. Examples
4. Common mistakes

## 1. Rules
- **Length:** character lock 40-80 words; costume lock 25-60 words.
- **Only visual facts** that never change across the film. Things that change (expression, wet hair, hood
  up) are states, written per shot, not in the lock.
- **Specific over general:** "shoulder-length black hair, blunt-cut bangs to the eyebrows" — not "dark hair".
- **Fixed vocabulary:** once you call it a "rust-orange waxed raincoat", never call it "orange jacket".
- **No names inside the lock** (models do not know who "Maya" is) except as a label the tool supports.
- **No emotions, story, personality or quality words** ("brave", "beautiful", "masterpiece").
- **Separate character and costume locks**, so the same face can wear different looks; never repeat a
  detail in both (it doubles prompt length and can conflict).
- **Positive phrasing:** describe what is there, not what is absent. "Bare neck and wrists" — not "no
  collar, no jewelry". Several video tools handle negation poorly (Runway's guide: negative phrasing may
  produce the opposite; Veo's guide: describe what you want instead).
- **Short lock as well:** also write a `short_lock` of 10-25 words — the most recognizable features only —
  for shots where the character is small, soft or secondary, and for multi-character prompts. It is owned by
  you like the full lock and is also pasted verbatim, never improvised by others.

Short lock example: "slight 17-year-old East African girl, close-cropped black curls, scar through the
left eyebrow, silver hoop in the right ear".

## 2. Order of information
Character lock: age + presentation · build and height impression · face shape · skin tone · eyes ·
brows/nose/mouth only if distinctive · hair (cut, length, color, texture) · one or two distinguishing marks ·
color anchor if it is part of the body (e.g. dyed streak).

Costume lock: main garment with material and color · second layer · lower body · footwear · accessories ·
condition baseline.

## 3. Examples

Character (photoreal):
> A 17-year-old East African girl, slight and wiry, about 160 cm, oval face with high cheekbones, deep brown
> skin with warm undertones, large dark-brown almond eyes, thick straight brows, a small scar through the
> left eyebrow, short tight black curls cropped close at the sides and longer on top, small silver hoop in
> the right ear only.

Costume:
> Oversized rust-orange waxed-cotton courier raincoat reaching mid-thigh, black reflective strip across the
> back, hood attached; charcoal hoodie underneath; black cargo trousers; scuffed white high-top sneakers;
> yellow canvas messenger bag worn cross-body on the left hip.

Character (stylized 3D):
> A small boxy maintenance robot, knee height to an adult, rounded-square body of dented sea-green painted
> metal, one large circular optic lens in the center of the head with a crack across the upper left, two
> short antenna stubs, three-fingered rubber-tipped claws, tank-tread feet, rust streaks running down from
> every rivet.

## 4. Common mistakes
| Mistake | Fix |
|---|---|
| "Young woman with dark hair and a jacket" | Too generic: add age, face, hair cut, garment material/color |
| Lock includes "wet hair" | Move to per-shot state |
| Lock paraphrased in later prompts | Paste verbatim; the validator and QC check this |
| Two characters share a color anchor | Change one anchor |
| Lock exceeds 100 words | Cut details that don't help recognition at medium-shot size |
| Uses brand names or celebrity comparisons | Describe the features instead |
