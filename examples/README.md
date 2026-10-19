# Example Productions

Both folders were produced by the film-crew skills in real headless Claude Code sessions during testing
(2026-10-19). They are kept exactly as the skills wrote them, including their open questions, assumptions
and QC findings, so you can see real output rather than a polished demo. No images, video or audio were
generated (no budget was authorized), so `assets/` is empty.

| Example | Medium | Runtime | What it shows | Skill version |
|---|---|---|---|---|
| [the-two-knocks/](the-two-knocks/) | photoreal live action | 96 s planned | Gated run, stage by stage: concepts → story → screenplay → bibles → direction (+ action-director chase) → camera → continuity → 38 shot records → master document → 55-panel storyboard → paper edit → voice, music, SFX, VFX plans → image and video prompts → QC preflight | first version (before the fixes listed in docs/TEST-RESULTS.md) |
| [frog-ferry/](frog-ferry/) | 2D cel animation | 40 s | One autonomous run from idea to storyboard, with animation-director and an independent QC subagent | after round-1 fixes |

Note on the-two-knocks: it was produced before several fixes, so the validator (current version) now
reports warnings on it that were the reason for those fixes — character locks containing names and
garments, negative phrasing, missing short locks, and frame texts of 350-830 words. frog-ferry shows the
corrected locks and 215-330-word frame texts; its own warnings (motion timed to the cut instead of the
clip, shots with 5 action beats) are the round-2 findings that led to the next fixes. Both pass the
validator with 0 errors.

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
