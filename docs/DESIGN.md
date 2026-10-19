# Design

How the film-crew system is put together and why. Research behind these decisions, including the review
of existing skill repositories: [research/RESEARCH.md](research/RESEARCH.md).

## Contents
1. Goals and constraints
2. Architecture
3. Skill roster and the split decisions
4. Pipeline order and gates
5. Data flow: the shot record
6. Change control
7. What was deliberately left out

## 1. Goals and constraints

- **Function like a crew.** One owner per decision, like departments on a film. A skill may propose
  outside its area but never decide outside it (`shared/crew-protocol.md` section 4).
- **Every stage's output is the next stage's input.** Outputs are Markdown for people plus YAML record
  blocks for machines, defined once in `shared/production-schema.md`.
- **No guessing downstream.** Unknown values are written `MISSING:` and routed to the owner, never
  left blank or invented by a later department.
- **Protect approved work.** Approved/locked content changes only through a change request with an
  impact list; dependents become STALE automatically (via `depends_on` versions).
- **Platform rules** (Agent Skills, verified 2026-10-19): `name` <= 64 chars, lowercase/digits/hyphens, no
  "claude"/"anthropic"; `description` <= 1024 chars, third person, says what and when; SKILL.md body
  < 500 lines; references one level deep; Contents list on reference files > 100 lines. Frontmatter is
  limited to `name` and `description` so skills also upload to claude.ai and the Skills API, which reject
  Claude-Code-only keys.
- **Independently installable.** Each skill carries its own copy of the shared protocol and schema
  (synced from `shared/` by `tools/sync_shared.py`, checked by `tools/validate_skills.py`).

## 2. Architecture

```
            user brief
                │
        production-manager  ◄──────────── PRODUCTION_LOG.md (approvals, CRs)
                │ routes work, tracks versions, compiles MASTER_PRODUCTION_DOCUMENT.md
  ┌─────────────┼───────────────────────────────────────────────────────────────┐
  story-writer → screenwriter → ┬ character-designer ┐                          │
                                ├ production-designer ├→ film-director ┬→ cinematographer → script-supervisor
                                └ visual-style-designer┘  (+ action-director, animation-director)
                                                         │
                     production-manager compiles shot records (validate_production.py)
                                                         │
          storyboard-artist → image-prompt-engineer → [generate stills] → quality-control
                            → video-prompt-engineer → [generate video]  → quality-control
          voice-director, music-director, sound-designer, vfx-supervisor (from approved shots)
                            → film-editor → quality-control (final) → delivery
```

## 3. Skill roster and the split decisions

20 skills. A role became its own skill when it has a distinct professional discipline **and** a distinct
workflow or output. Otherwise it became a reference file inside the closest skill.

| Skill | Owns | Why separate |
|---|---|---|
| production-manager | order of work, approvals, conflicts, master document, asset registry | central coordinator (requested) |
| story-writer | concepts, premise, characters' psychology, plot, ending | requested; ideation is a different task from rewriting |
| screenwriter | screenplay text, dialogue, scene purpose | requested; refinement + formatting + dialogue craft |
| character-designer | identity, model sheets, costume looks, identity locks | requested; identity lock is the core consistency control |
| production-designer | locations, environments, props, set dressing | different department and assets (sets, props) |
| visual-style-designer | look bible, palette, color script, style lock | look is shared by every image; needs one owner |
| film-director | blocking, performance, shot breakdown, transitions | requested |
| action-director | fight/stunt choreography, action geography | distinct discipline (fight coordinator) and output (move-by-move phrases) |
| animation-director | animation acting, key poses, timing charts | distinct workflow (poses, frame timing, principles of animation) |
| cinematographer | lens, camera, DOF, lighting per shot | DP is a separate department from the director |
| script-supervisor | continuity bible, axis, states | distinct role; most-cited failure in AI film is continuity drift |
| storyboard-artist | panels and storyboard sheets | requested |
| image-prompt-engineer | still prompts (sheets, plates, keyframes) | model-specific wording; must not invent content |
| video-prompt-engineer | video prompts per model and mode | different rules from stills (motion budget, end states, modes) |
| voice-director | voice profiles, delivery, TTS scripts | voice casting and performance direction is its own craft |
| music-director | spotting, cue list, themes, songs and lyrics | composer/music supervisor role; songwriting included |
| sound-designer | SFX, ambience, Foley, mix intent | separate post-sound department |
| vfx-supervisor | VFX method, elements, AI-gen limitations workarounds | separate department; handles what models cannot render |
| film-editor | paper edit, pacing, assembly, cut list | separate post department; also feeds timing back pre-generation |
| quality-control | PASS/FIX/REDO verdicts on documents and media | independent check; never grades its own work |

**Genre directing** (drama, comedy, horror, romance, thriller): one reference playbook each inside
film-director (`references/genre-playbooks.md`), not separate skills. Reason: the workflow and the output
(the scene direction document) are identical; only the decisions change. Separate skills would duplicate the
whole workflow and drift apart. Action/fight and animation were split out because they add new outputs
(choreography phrases; pose and timing charts) and a different working method. This matches how the
studied DirectorSKILL repository handles genres (one playbook file per genre).

**Dialogue and character development** live in screenwriter (dialogue reference) and story-writer
(character psychology). **Costume design** lives in character-designer (costume looks are part of each
character's identity sheet, as in animation studios); props and sets live in production-designer.
**Shot-list creation and scene breakdown**: the director decides shots; the production-manager performs the
element breakdown and compiles complete shot records. **Asset management and production planning**:
production-manager. **Color grading**: intent in visual-style-designer, order of operations in film-editor.

## 4. Pipeline order and gates

| # | Stage | Skill(s) | Gate to leave |
|---|---|---|---|
| 0 | Brief | production-manager | specs recorded (runtime, aspect, style, target models) |
| 1 | Story | story-writer | user picks/approves a concept and story |
| 2 | Screenplay | screenwriter | screenplay APPROVED then LOCKED |
| 3 | Design | character-designer, production-designer, visual-style-designer (parallel) | bibles APPROVED |
| 4 | Direction | film-director (+ action-director, animation-director where needed) | direction APPROVED |
| 5 | Camera and light | cinematographer | camera docs APPROVED |
| 6 | Continuity | script-supervisor | no blocking continuity errors |
| 7 | Master document | production-manager (+ validate_production.py) | 0 validator errors, 0 MISSING in shots |
| 8 | Storyboard | storyboard-artist | storyboard APPROVED |
| 9 | Pacing check | film-editor (paper edit) | durations confirmed or CRs raised |
| 10 | Sound and VFX plans | voice-director, music-director, sound-designer, vfx-supervisor | plans APPROVED |
| 11 | Reference stills | image-prompt-engineer → generate → quality-control | every reference PASS |
| 12 | Keyframes | image-prompt-engineer → generate → quality-control | every keyframe PASS |
| 13 | Video | video-prompt-engineer → generate → quality-control | every shot PASS |
| 14 | Assembly | film-editor (+ audio) | cut assembled |
| 15 | Final QC | quality-control | delivery checklist PASS |

## 5. Data flow: the shot record

Departments write their own documents. The production-manager compiles one `record: shot` per shot,
pulling each field from its owner (`shared/production-schema.md` section 4): story function from the
screenplay, positions and actions from direction, lens and light from camera, costume states and screen
direction from continuity, palette from the style bible, identity locks from the character and world
bibles. It then writes self-contained `start_frame`, `end_frame` and `motion` text. Prompt engineers only
translate that text into model syntax; they never add story content.

## 6. Change control

Versions are integers in each artifact header; `depends_on` lists `name@version`. The validator flags any
dependency whose version moved (STALE). Change requests (`CR-NNN`) record target, reason and impact; the
production-manager applies them in dependency order and re-runs the validator.

## 7. What was deliberately left out

- **Calling generation APIs.** Skills write prompts and plans; generation runs in whatever tool the user has
  (or an MCP connector they choose). The prompt and QC skills support a generate → review → fix loop.
- **Legal clearance.** Skills flag likeness, trademark and copyright risks but give no legal advice.
- **Shooting schedules, budgets and call sheets** for live-action crews: out of scope for AI production.
- **A separate colorist skill.** Grade intent and shot matching are covered by visual-style-designer and
  film-editor; a colorist skill would add little without footage-analysis tools.
