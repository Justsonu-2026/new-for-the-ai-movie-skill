# Test Results

All tests ran on 2026-10-19 in a cloud container with Claude Code 2.1.303. Agent sessions used the
`sonnet` model alias (served as claude-sonnet-5-5); LLM graders used `haiku` (eval round 1) and `sonnet`
(later rounds). Costs are the list-price estimates Claude Code reported.

**What was not tested:** no image, video or audio was generated — no generation budget was authorized —
so prompt effectiveness on real image/video/audio models is unverified. Haiku was tested as the agent only
in a 3-case spot check and Opus not at all (the authoring guidance recommends testing every target model;
see "Remaining gaps").

## Contents
1. Summary
2. Structural checks
3. Script unit tests
4. End-to-end productions
5. Plugin eval suite (with vs without the plugin)
6. Issues found and fixed
7. Completion criteria
8. Remaining gaps
9. How to reproduce

## 1. Summary

| Check | Result |
|---|---|
| Skill structure lint (`tools/validate_skills.py`) | 20 skills, 0 errors, 0 warnings |
| Official validation (`claude plugin validate`) | marketplace and plugin: passed |
| Skills load in Claude Code (`--plugin-dir`) | all 20 listed as `film-crew:*` |
| Script unit tests | 17/17 pass |
| End-to-end production 1 (photoreal, gated, stage by stage) | idea → 38 shot records → master document → storyboard → prompts → QC; validator 0 errors |
| End-to-end production 2 (2D animation, autonomous, after fixes) | idea → 17 shot records → storyboard → independent QC; validator 0 errors |
| Skill triggering (eval suite, prompts never name the skill) | 20/20 correct skill fired; 0 skills fired on an unrelated request (2 suite runs) |
| Eval suite, with plugin | round 1: 0.80 score, 13/21 cases · round 2: **0.89, 17/21** |
| Eval suite, mean improvement over no plugin (Δ) | round 1: +0.29 · round 2: **+0.45** |
| Issues found by testing and fixed | 19 (section 6) |
| Haiku as the agent (3-case spot check) | production-manager 1.00, character-designer 1.00, film-director 0.67 |
| Total test spend | ≈ $45 (productions and retests ≈ $22, eval suites ≈ $19, other ≈ $4) |

## 2. Structural checks
`tools/validate_skills.py` enforces the official authoring rules (frontmatter limits, portable keys only,
third-person description with "Use when", body < 500 lines, Contents list on references > 100 lines,
every reference linked one level deep from SKILL.md) plus this repo's contract (required sections, synced
shared files, ≥ 3 skill-creator evals per skill). Largest SKILL.md body: production-manager, under 200 lines.
`claude plugin validate .` and `claude plugin validate plugins/film-crew`: "Validation passed".

## 3. Script unit tests
`python -m unittest discover -s tests` — 17 tests covering: validator (valid project passes; missing
fields, TBD values, unknown references, undefined prop states, bad vocabulary, video mode without motion,
costume change within a scene, staleness, duplicate IDs, lock rules, motion budget and clip-time
warnings), master-document assembly (and that the assembled copy does not create duplicate-ID errors),
storyboard sheet build, cut list → CMX3600 EDL and ffmpeg script (frame-exact timecodes), media inspection
on a generated test clip (resolution, aspect, fps, frames, contact sheet, loudness).

## 4. End-to-end productions
Each stage ran in a **fresh headless Claude Code session** with only the plugin loaded (`tools/run_stage.sh`),
so information could pass between skills only through the project files — the same way the skills work for
a user. Outputs are in `examples/`.

### Production 1 — "The Two Knocks" (photoreal, 90 s target, gated mode)

| Session | Skills invoked | Turns | Cost | Time | Result |
|---|---|---|---|---|---|
| Brief + story | production-manager → story-writer | 11 | $0.34 | 109 s | 4 concepts, story with causal beats, stopped at gate |
| Screenplay | → screenwriter | 10 | $0.34 | 98 s | Fountain screenplay, 4 scene records, saucer logic resolved |
| Design | → visual-style, character, production designers | 22 | $0.89 | 325 s | 26 records, validator 0 errors |
| Direction → master doc (autonomous) | → film-director, action-director, cinematographer, script-supervisor | 40 | $2.74 | 977 s | 38 shot records, 0 MISSING, master document; continuity pass caught and fixed 3 errors in direction/camera plans |
| Downstream (autonomous) | → storyboard, editor, voice, sound, music, VFX, image prompts, video prompts, QC | 77 | $3.40 | 955 s | 55-panel storyboard sheet, all plans, 23 image + 12 video prompts; QC preflight NOT PASSED (6 FIX, 3 not verifiable) with real cross-department conflicts |

### Production 2 — "Frog Ferry" (2D cel animation, 40 s, one autonomous session, after round-1 fixes)

| Skills invoked | Turns | Cost | Time | Result |
|---|---|---|---|---|
| story-writer, screenwriter, style, character, production designers, film-director, animation-director, cinematographer, script-supervisor, storyboard-artist, quality-control (via an independent subagent) | 71 | $3.70 | 821 s | 17 shot records, 31-panel storyboard, validator 0 errors; QC by a fresh subagent: 3 blockers, 13 fixes |

Follow-up sessions on a copy of production 2 (to verify the round-2 fixes):

| Session | Turns | Cost | Result |
|---|---|---|---|
| Act on QC: split overloaded shots, recompile, independent QC rerun | — | $5.87 | 17 → 25 shots; clip-time motion with keep ranges; 9 first-last-frame shots; QC rerun cleared the 3 blockers and raised new owner-routed items |
| Clear validator lock warnings | 11 | $0.28 | missing-lock warnings 50 → 0; frames all < 350 words |

Verification of round-1 fixes in production 2 (measured on the files):

| Fix | Production 1 | Production 2 |
|---|---|---|
| Character locks without names or garments | 2 of 3 characters violated | 0 violations |
| `short_lock` on characters, costumes, locations, props | 0 of 21 | 11 of 11 |
| Negative phrasing in locks | 19 locks | 0 |
| Style lock free of places and aspect ratio | no | yes |
| `start_frame` length | 352-830 words | 215-330 words |
| QC independence | same agent (self-reported "not independent") | separate subagent |
| Specialist after director's file | action plan written before direction file | each animation plan written after its direction file |

## 5. Plugin eval suite (with vs without the plugin)
`plugins/film-crew/evals/`: 21 cases for `claude plugin eval` — one per skill with a user-style prompt
that never names the skill, plus one unrelated request that must not trigger any skill. Each case runs
twice: with the plugin and without it (baseline). Graders: whether the skill fired (indicator, not scored),
deterministic regex/file/tool checks, and an LLM rubric written so the baseline is judged fairly. Four
cases run on fixtures copied from production 1 (storyboard, image prompts, film editor, QC preflight with
two planted defects).

| Case | Round 1 with / without | Round 2 with / without | Refined reruns (2 runs each) |
|---|---|---|---|
| action-director-fight | 1.00 / 0.00 | 1.00 / 0.00 | |
| animation-director-timing | 1.00 / 1.00 | 1.00 / 1.00 | |
| character-designer-sheet | 0.67 / 0.33 ‡ | 1.00 / 0.33 | |
| cinematographer-dp-pass | 0.50 / 1.00 † | 1.00 / 0.50 | |
| film-director-scene | 1.00 / 0.00 | 1.00 / 0.50 | |
| film-editor-edl | 0.67 / 0.33 | 1.00 / 0.33 | |
| image-prompts-keyframe | 1.00 / 0.00 | 0.00 / 0.00 | 0.50 and 1.00 / 0.50 and 0.50 |
| music-director-spotting | 0.50 / 0.00 ‡ | 1.00 / 0.50 | |
| negative-unrelated-request | 1.00 / 1.00 | 1.00 / 1.00 | |
| production-designer-location | 1.00 / 1.00 | 1.00 / 0.00 | |
| production-manager-start | 1.00 / 0.00 | 1.00 / 0.00 | |
| quality-control-preflight | 0.00 / 0.00 | 1.00 / 0.00 | |
| screenwriter-rewrite | 0.50 / 0.50 | 0.50 / 0.50 | 0.67 and 0.67 / 0.33 and 0.33 § |
| script-supervisor-continuity | 1.00 / 1.00 | 1.00 / 1.00 | |
| sound-designer-chase | 1.00 / 1.00 | 1.00 / 1.00 | |
| story-writer-ideas | 0.50 / 0.50 ‡ | 1.00 / 0.50 | |
| storyboard-from-shots | 1.00 / 0.00 | 0.67 / 0.00 | 1.00 and 1.00 / 0.14 and 0.14 |
| vfx-supervisor-plan | 1.00 / 1.00 | 1.00 / 1.00 | |
| video-prompt-veo | 0.50 / 0.50 | 0.50 / 0.50 | 1.00 and 1.00 / 0.50 and 0.50 |
| visual-style-look | 1.00 / 0.50 | 1.00 / 0.50 | |
| voice-director-casting | 1.00 / 1.00 | 1.00 / 0.00 | |
| **Overall (with plugin)** | **0.80, 13/21 passed** | **0.89, 17/21 passed** | |
| **Mean Δ** | **+0.29** | **+0.45** | |

† Haiku judge split FAIL/FAIL/PASS on an output that met every criterion; later rounds use a Sonnet judge.
‡ Grader bug: inline `(?i)` is not supported by the harness's JavaScript regex engine; fixed with `flags: i`.
§ Manual review: run 2 met all four criteria (judge disagreed); run 1 added a story reinterpretation that
  it disclosed but did not mark `PROPOSAL:` as the skill requires — a remaining weakness.

Reading the numbers honestly:
- Single runs per arm (rounds 1-2) are noisy; some round-to-round changes are variance (image prompts went
  1.00 → 0.00 → 0.50/1.00 with no change to that skill). Treat per-case numbers as indicative.
- Several "without" scores are 1.00: a capable model handles some single-department tasks (continuity
  check, VFX plan, sound plan) well without the skill. The plugin's biggest measured gains are where the
  work depends on the crew's contract and process: production management, storyboarding from shot records,
  QC preflight, action choreography, film direction, image prompts with locks.
- Graders were refined between rounds (bugs fixed, long-file judging replaced by regex); this is recorded
  so the improvement is not attributed only to skill changes.

## 6. Issues found and fixed

| # | Found by | Issue | Fix | Verified |
|---|---|---|---|---|
| I-01 | production 1 | story-writer passed its own object-logic problem downstream as a PROPOSAL | self-review traces every object beat to beat; quality check | rule added (not re-measured) |
| I-02 | production 1 | `(CONT'D)` on a character's first line | format reference explains CONT'D | production 2 / eval output used it correctly |
| I-03 | production 1 | character lock contained the name and garments | SKILL.md rule + validator warnings | production 2: 0 violations |
| I-04 | production 1 | style lock contained a place and the aspect ratio (leaked "night market" into alley shots) | SKILL.md rule + validator warning | production 2: clean |
| I-05 | production 1 | manager read ~650 lines of script source instead of running scripts | "run, don't read" note | not re-measured |
| I-06 | production 1 | action plan written before the director's file existed | ordering rule in manager; stop rule in action-director | production 2: animation plans after direction files |
| I-07 | production 1 | frame texts 350-830 words (full locks for blurred background elements); locks used "no X" phrasing | designer-owned `short_lock`, 150-300-word budget, positive phrasing, validator warnings | production 2: 215-330 words, 0 negations |
| I-08 | production 1 | QC run by the same agent that wrote the material | manager delegates QC to a fresh subagent; QC states independence | production 2: independent subagent |
| I-09 | eval round 1 | film-editor cut every generated take from 0.0 (no head trim) | default trims, never cut from 0.0 | eval round 2: case passes |
| I-10 | eval round 1 | screenwriter invented a plot fact in a rewrite without flagging it | boundary + quality check on new story facts | partially (see § in section 5) |
| I-11 | production 2 (QC) | motion timed to the cut (1.5-3.5 s) while clips are 5 s | motion in clip time with a `keep` range; validator warning | retest: 25/25 motions cover the full 5 s clip, all with keep ranges |
| I-12 | production 2 (QC) | shots with 4-5 action beats per clip | validator warning on > 4 beats; compile rule | retest: director split shots (17 → 25); 0 shots over 4 beats |
| I-13 | production 2 (QC) | all shots image-to-video when end states carried the story | first-last-frame default for story end states, marked to-verify | retest: 9 first-last-frame, 16 image-to-video |
| I-16 | retest validator run | shortening frame texts dropped costume/prop locks instead of swapping in short locks (a regression from the I-07 fix: 50 missing locks in 25 shots) | validator checks every shot subject's lock is in its frame texts; manager must clear these before handoff | second retest: 50 → 0 missing locks, all frames < 350 words |
| I-14 | eval round 2 | video prompt kept 0.0-4.0 s (no head hold), contradicting the editor's rule | hold before action; keep never starts at 0.0 | refined reruns: 2/2 pass |
| I-15 | eval round 2 | screenwriter added readable phone-screen text without a VFX flag | flag every added on-screen text | refined reruns: flags present 2/2 |
| B-01 | storyboard sheet screenshot | "arc" glyph on a static shot (substring match on "arcs") | glyphs from controlled vocabulary, word-boundary fallback | re-rendered sheet |
| B-02 | storyboard sheet screenshot | placeholder text cut mid-sentence | ellipsis | re-rendered sheet |
| B-03 | eval smoke test | eval graders: apostrophe broke YAML; inline `(?i)` unsupported; script-use graders unfair to baseline | quoting, `flags: i`, `arm: with-only` | suite loads; round 2 |

## 7. Completion criteria

| Criterion | Status |
|---|---|
| Every requested skill exists with SKILL.md, inputs, outputs, workflow, boundaries, quality checks, failure handling, references | met (lint enforces sections) |
| Official format and loading verified | met (`claude plugin validate`, load test) |
| ≥ 3 eval cases per skill | defined: 60 skill-creator cases (3 per skill, in `skills/*/evals/evals.json`); **executed**: the 21-case plugin suite (1 case per skill + 1 negative). The 60 skill-creator cases were not run in this session |
| Sample film taken through the pipeline in the real platform; handoffs work through files | met (two productions, fresh session per stage in production 1) |
| Issues found → fixed → re-tested | met for I-03, I-04, I-06, I-07, I-08, I-09, I-11-I-16, B-01-B-03; I-01, I-05 fixed but not re-measured; I-10 partially |
| Skills trigger correctly and not on unrelated requests | met (20/20, 0 false triggers) |
| Plugin measurably improves results over no plugin | met (mean Δ +0.45 in round 2) |
| Image/video/audio generation quality | **not tested** (no budget) |

## 8. Remaining gaps
- No real generations: whether the prompts produce consistent characters and correct motion on Veo, Sora,
  Kling, Seedance, Runway, Midjourney or Gemini image models is unverified.
- Agent model coverage: Sonnet throughout; Haiku only in a 3-case spot check (2 pass, film-director 0.67);
  Opus untested.
- In the lock-fix retest the manager changed shot content without bumping record versions (the protocol
  requires a bump); it flagged the choice to the user instead. Version discipline on mechanical fixes is
  not yet reliable.
- Eval rounds used one run per arm (refined reruns used two); scores carry run-to-run variance.
- The screenwriter sometimes discloses a story reinterpretation without the `PROPOSAL:` marker (I-10).
- Vendor-specific syntax for Kling, Seedance, Runway and Midjourney comes from third-party sources (see
  docs/research/RESEARCH.md); the skills ask users to confirm their tool's features.

## 9. How to reproduce
```bash
python tools/validate_skills.py
claude plugin validate .
python -m unittest discover -s tests
# end-to-end (writes to a project folder; costs a few dollars per stage)
tools/run_stage.sh <project_dir> <log_name> sonnet <budget_usd> "/film-crew:production-manager ..."
# eval suite (needs bubblewrap and socat for sandboxed Bash; costs ≈ $5-6 per full run)
claude plugin eval plugins/film-crew --runs 1 -j 3 --judge-model sonnet --scaffold \
  --allow-tools Bash Write Edit --trust-plugin --no-publish
```
