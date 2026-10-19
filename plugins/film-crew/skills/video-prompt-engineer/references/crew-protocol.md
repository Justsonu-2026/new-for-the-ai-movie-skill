# Film Crew Protocol

Shared operating rules for every skill in the film-crew system. Each skill carries a copy of this file
so it works when installed alone. The canonical copy lives in `shared/crew-protocol.md`.

## Contents
1. Project folder layout
2. Artifact header
3. Status lifecycle
4. Decision ownership
5. Precedence of sources
6. Markers
7. Change requests
8. Handoff block
9. Standalone mode
10. Approvals when running autonomously

## 1. Project folder layout

All departments read and write one project folder. Use these paths exactly; create folders as needed.

```
<project>/
  00_brief.md                      production-manager   project specs, runtime, aspect, targets
  01_story/story.md                story-writer         approved story (treatment + beat outline)
  01_story/concepts.md             story-writer         alternative concepts (not canon)
  02_screenplay/screenplay.fountain screenwriter        the screenplay (canon once LOCKED), pure Fountain
  02_screenplay/scene_index.md     screenwriter         header id `screenplay` (versions both files) + scene records
  03_characters/CH-<SLUG>.md       character-designer   one character bible per character
  04_world/LOC-<SLUG>.md           production-designer  one file per location
  04_world/props.md                production-designer  prop registry
  05_look/style_bible.md           visual-style-designer look, palette, color script, style lock
  06_direction/SC<NN>_direction.md film-director (or action-/animation-director)
  06_direction/SC<NN>_action.md    action-director      choreography (only action scenes)
  06_direction/SC<NN>_animation.md animation-director   acting/timing (only animated work)
  07_camera/SC<NN>_camera.md       cinematographer      lens, camera, lighting per shot
  07_camera/continuity.md          script-supervisor    continuity bible + per-scene states
  08_master/MASTER_PRODUCTION_DOCUMENT.md production-manager  compiled master document
  08_master/shots/SC<NN>.md        production-manager   compiled shot records per scene
  09_storyboard/storyboard.md      storyboard-artist    panels (+ storyboard.html sheet)
  10_prompts/images.md             image-prompt-engineer
  10_prompts/video.md              video-prompt-engineer
  11_sound/voice.md                voice-director
  11_sound/music.md                music-director
  11_sound/sfx.md                  sound-designer
  12_vfx/vfx_plan.md               vfx-supervisor
  13_edit/edit_plan.md             film-editor
  14_qc/QC_<stage>_<date>.md       quality-control
  assets/                          generated or supplied media (see asset naming in production-schema.md)
  PRODUCTION_LOG.md                production-manager   approvals, change requests, decisions
```

## 2. Artifact header

Every artifact file starts with YAML front matter:

```yaml
---
artifact: character-bible          # kind of document
id: CH-MAYA                        # stable ID (see production-schema.md)
version: 2                         # integer, +1 on every content change
status: APPROVED                   # see lifecycle
owner: character-designer          # the skill that owns the content
depends_on: [screenplay@3, style_bible@1]   # upstream artifact@version actually used
updated: 2026-10-19
---
```

`depends_on` records the exact upstream versions the content was built from. It is how staleness is
detected: if `screenplay` is now at version 4, this artifact is STALE until reviewed.

## 3. Status lifecycle

| Status | Meaning | Who may set it |
|---|---|---|
| DRAFT | Work in progress, not for downstream use | owner |
| REVIEW | Complete, waiting for approval | owner |
| APPROVED | Accepted; downstream may build on it | user, or production-manager under an autonomy policy |
| LOCKED | Approved and frozen; changes only through a change request | production-manager |
| STALE | An upstream dependency changed after approval; must be re-checked | production-manager or any skill that detects it |
| SUPERSEDED | Replaced by a newer version; kept for history | owner |

Downstream skills build only on APPROVED or LOCKED inputs. If an input is DRAFT or STALE, say so
and either stop or continue with every dependent decision marked `ASSUMPTION:`.

## 4. Decision ownership

One owner per decision. A skill may *propose* outside its area but never *decide* outside it.

| Decision | Owner |
|---|---|
| Runtime, aspect ratio, frame rate, delivery specs, target AI models, budget | user, recorded by production-manager |
| Concept, premise, plot events, ending, character psychology (want, need, flaw, arc) | story-writer |
| Screenplay text: scenes, action lines, dialogue, transitions | screenwriter |
| Character identity and appearance: face, body, hair, costume looks, accessories | character-designer |
| Locations, sets, environments, props, set dressing, vehicles | production-designer |
| Look: rendering style, palette, color script, texture, lighting philosophy, style lock | visual-style-designer |
| Blocking, performance, shot breakdown (count, size, angle, movement intent, duration), transitions | film-director |
| Fight and stunt choreography, action geography | action-director |
| Animation acting, key poses, timing charts | animation-director |
| Lens, camera position/height/support, depth of field, lighting setup per shot | cinematographer |
| Continuity record: axis, screen direction, states of costume/props/injuries/time per shot | script-supervisor |
| Storyboard panel drawings/descriptions (render existing decisions) | storyboard-artist |
| Image prompt wording per model | image-prompt-engineer |
| Video prompt wording per model | video-prompt-engineer |
| Voice casting profiles, line delivery, TTS scripts | voice-director |
| Score, themes, songs, music cues | music-director |
| Sound effects, ambience, Foley, mix intent | sound-designer |
| VFX method per shot, element lists | vfx-supervisor |
| Cut order, trims, pacing, transitions in the edit | film-editor |
| QC verdicts (PASS / FIX / REDO) | quality-control |
| Order of work, approvals, master document, asset registry, conflict routing | production-manager |

## 5. Precedence of sources

When two sources disagree, the higher one wins and the conflict is reported:

1. Explicit user instruction in the current conversation
2. LOCKED/APPROVED screenplay (story facts, dialogue)
3. APPROVED character bibles, world files, style bible (identity and look)
4. APPROVED direction and camera documents
5. Continuity bible
6. Everything downstream (storyboard, prompts, sound, edit)

A downstream skill never "fixes" an upstream document silently. It raises a CONFLICT and, when the fix is
clear, attaches a change request.

## 6. Markers

Use these exact prefixes so other skills and the validator can find them:

- `ASSUMPTION:` a decision made without an approved source. Must be confirmed before LOCK.
- `PROPOSAL:` a suggested change to someone else's decision. Not canon.
- `OPEN-QUESTION:` information only the user or another owner can supply.
- `CONFLICT:` two sources disagree. Name both sources and versions.
- `MISSING:` a required field has no source. Never leave a required field blank or "TBD".

## 7. Change requests

Any change to APPROVED or LOCKED content goes through a change request recorded in `PRODUCTION_LOG.md`:

```yaml
id: CR-007
requested_by: film-editor
target: screenplay@4            # what changes
change: "Cut lines 3-4 of SC03; scene runs long and repeats SC02"
reason: "Pacing: SC03 holds the same beat as SC02"
impact: [SC03_direction@2, SC03 shots, voice.md lines L031-L032, edit_plan@1]
status: PROPOSED                 # PROPOSED | APPROVED | REJECTED | APPLIED
```

When a CR is APPLIED, the owner bumps the version and every artifact listed in `impact` becomes STALE
until its owner reviews it. The production-manager traces the impact list using `depends_on`.

## 8. Handoff block

Every deliverable ends with a handoff block:

```markdown
## Handoff
- Produced: CH-MAYA@2, CH-OWEN@1 (status REVIEW)
- Built from: screenplay@3, style_bible@1
- Open items: OPEN-QUESTION: Owen's age (script says "teen"; 15 assumed)
- Conflicts: none
- Next: production-designer, film-director may proceed once approved
```

## 9. Standalone mode

If there is no project folder, work from what the user gave you. Still assign IDs, still use the markers,
still end with a handoff block, and output in the same formats so the work can be dropped into a project
folder later without rewriting.

## 10. Approvals when running autonomously

If the user asked for an end-to-end run without stopping, the production-manager may set APPROVED on
their behalf. It must record each such approval in `PRODUCTION_LOG.md` as `approved_by: autonomy-policy`
and list every `ASSUMPTION:` that was accepted, so the user can review them in one place. Never mark
anything LOCKED under autonomy without telling the user.
