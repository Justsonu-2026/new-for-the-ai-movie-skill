# Example Productions

Both folders were produced by the film-crew skills in real headless Claude Code sessions during testing
(2026-10-19). They are kept exactly as the skills wrote them, including their open questions, assumptions
and QC findings, so you can see real output rather than a polished demo. No images, video or audio were
generated (no budget was authorized), so `assets/` is empty.

| Example | Medium | Runtime | What it shows | Skill version |
|---|---|---|---|---|
| [the-two-knocks/](the-two-knocks/) | photoreal live action | 96 s planned | Gated run, stage by stage: concepts → story → screenplay → bibles → direction (+ action-director chase) → camera → continuity → 38 shot records → master document → 55-panel storyboard → paper edit → voice, music, SFX, VFX plans → image and video prompts → QC preflight | first version (before the fixes listed in docs/TEST-RESULTS.md) |
| [frog-ferry/](frog-ferry/) | 2D cel animation | 40 s target, 49.5 s planned | One autonomous run from idea to storyboard (animation-director, independent QC subagent), then two follow-up sessions: overloaded shots split by the director (17 → 25 shots) and recompiled with clip-time motion, then missing locks restored after the validator flagged them. 25 shot records, 52-panel storyboard, two QC reports | after all fixes |

Note on the-two-knocks: it was produced by the first version of the skills, so the current validator
reports warnings on it that motivated later fixes — character locks containing names and garments,
negative phrasing, missing short locks, and frame texts of 350-830 words. frog-ferry shows the corrected
output: short locks, 209-298-word frame texts, motion timed over the whole clip with keep ranges, and every
shot subject's lock present in its frames. Its 3 remaining warnings are open items it reported itself (SC04
runs 11.5 s against a 9 s estimate; two QC reports are stale against the newest master version). Both pass
the validator with 0 errors.

Where to look first:
- `08_master/MASTER_PRODUCTION_DOCUMENT.md` — the assembled master document
- `08_master/shots/SC01.md` — compiled shot records with start/end frames
- `09_storyboard/storyboard.html` — open in a browser
- `14_qc/` — QC preflight reports
- `PRODUCTION_LOG.md` — approvals, assumptions and change requests

Validate either example yourself:
```bash
python plugins/film-crew/skills/production-manager/scripts/validate_production.py examples/frog-ferry
```
