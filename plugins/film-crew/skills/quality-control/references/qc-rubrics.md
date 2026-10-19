# QC Rubrics

## Contents
1. Verdict rules
2. Preflight (documents)
3. Reference sheets (characters, costumes, props, locations)
4. Keyframes
5. Video clips
6. Audio
7. Final cut
8. Artifact catalogue

## 1. Verdict rules
- **PASS:** all checks pass at the inspected coverage.
- **FIX:** one or two localized failures with a one-step repair (edit, cleanup, retry rung).
- **REDO:** identity, composition, action or story content wrong; regenerate with a changed prompt.
- **NOT-VERIFIABLE:** spec missing/unapproved or the detail can't be seen; state what is needed.
Severity of each finding: BLOCKER / MAJOR / MINOR (as in the continuity checklist).

## 2. Preflight (documents)
- [ ] Validator 0 errors; warnings reviewed
- [ ] Every scene has shots; every screenplay line covered (coverage map)
- [ ] No `MISSING:` in shot records; `ASSUMPTION:`s listed in the production log
- [ ] Locks verbatim in shot frame text (spot-check ≥ 20% of shots, all hero shots)
- [ ] Durations sum to target runtime ±10%
- [ ] Video-mode shots have start/end states and motion within budget
- [ ] Stale dependencies resolved

## 3. Reference sheets
Use the character-designer's drift checklist (model sheets) and for props/locations:
- [ ] Every item in the record present: colors (vs hex), materials, marks on the correct side
- [ ] All views consistent with each other (scale, details)
- [ ] Clean background and flat light (no contamination for later references)
- [ ] No extra items, text or logos
- [ ] Style matches the style frames

## 4. Keyframes
- [ ] Identity: face, hair, marks, proportions match the approved sheet
- [ ] Costume and state per continuity record
- [ ] Props and states; correct hand
- [ ] Composition: shot size, angle, subject positions per shot record; headroom/looking room
- [ ] Location landmarks and layout; time of day; weather
- [ ] Lighting direction and palette per shot record
- [ ] Style match
- [ ] End frame reachable from start frame (same identity, setting, light)
- [ ] Artifacts (section 8)

## 5. Video clips
Inspect frames across the whole clip (default every 0.5 s) and the contact sheet:
- [ ] Action performed as specified, in the right order, reaching the end state
- [ ] Camera behavior as specified (static means static)
- [ ] Identity stable in every inspected frame (watch for mid-clip morphing and head turns)
- [ ] Costume/props stable; no object vanishing or appearing
- [ ] No extra people; background architecture stable
- [ ] Lighting and palette stable
- [ ] Usable range ≥ shot duration (note in/out)
- [ ] Audio (if generated): correct words, lip-sync, SFX plausible, no music if "no music" specified
- [ ] Technical: resolution, aspect, fps per brief

## 6. Audio
- [ ] Voice: words exact, pronunciation, identity consistent, delivery as directed, fits timing
- [ ] Music: function, tempo/key as specified, no artifacts or abrupt loops, room for dialogue
- [ ] SFX: right source, in sync, perspective matches
- [ ] Loudness and true peak measured vs target

## 7. Final cut
- [ ] Story: every scene and story fact present; order matches the locked edit
- [ ] Continuity across every cut (spot-check all scene transitions)
- [ ] Runtime, aspect, resolution, fps per delivery spec
- [ ] Loudness per platform spec; no clipping
- [ ] Titles/subtitles spelled correctly and in sync
- [ ] Delivery checklist complete

## 8. Artifact catalogue
| Artifact | Look for |
|---|---|
| Identity morph | face shape/age/ethnicity shifting between frames |
| Mirror flip | marks/accessories switching sides |
| Hand errors | extra/missing/fused fingers, impossible grips |
| Object permanence | props disappearing, duplicating, changing shape |
| Text garbling | unreadable or misspelled signs/labels |
| Background drift | architecture or landmarks changing |
| Flicker / boiling | texture shimmering frame to frame |
| Physics | liquids, cloth, hair moving impossibly; feet sliding |
| Extra people | figures appearing in background |
| Camera ignored | moving when static was specified, or vice versa |
| Loop/seam | visible repeat or jump at an extension point |
| Lip-sync | mouth out of sync or wrong speaker moving |
