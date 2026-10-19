# Film Crew — an AI filmmaking skill team

Twenty cooperating [Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
that work like a film production crew, from a one-line idea to a generation-ready master production
document, storyboard, AI image and video prompts, sound plan, edit and final QC. Packaged as a Claude Code
plugin marketplace; each skill also works on its own.

**Start here:** [INSTALL.md](INSTALL.md) · [INDEX.md](INDEX.md) (every skill's purpose, inputs, outputs,
dependencies) · [docs/DESIGN.md](docs/DESIGN.md) (why it is split this way) ·
[docs/research/RESEARCH.md](docs/research/RESEARCH.md) (sources and trust levels) ·
[docs/TEST-RESULTS.md](docs/TEST-RESULTS.md) (what was tested, what failed, what was fixed) ·
[examples/](examples/) (a sample film taken through the pipeline).

## The crew

| Department | Skills |
|---|---|
| Production office | **production-manager** — coordinates everything, compiles the master document |
| Story | **story-writer** · **screenwriter** |
| Design | **character-designer** · **production-designer** · **visual-style-designer** |
| Direction | **film-director** (drama, comedy, horror, romance, thriller playbooks) · **action-director** · **animation-director** |
| Camera and continuity | **cinematographer** · **script-supervisor** |
| Visualization | **storyboard-artist** · **image-prompt-engineer** · **video-prompt-engineer** |
| Sound | **voice-director** · **music-director** · **sound-designer** |
| Post | **vfx-supervisor** · **film-editor** · **quality-control** |

## How it works

1. **One project folder, one data contract.** Every department writes Markdown documents with YAML
   `record:` blocks defined in [shared/production-schema.md](shared/production-schema.md): characters,
   costumes, locations, props, style, scenes, shots, panels, prompts, cues, QC items. People can read
   them; scripts can check them.
2. **One owner per decision.** The ownership table in [shared/crew-protocol.md](shared/crew-protocol.md)
   says who decides what. Departments propose outside their area; they never silently change another
   department's work.
3. **Approvals and change control.** Artifacts carry versions and statuses (DRAFT → REVIEW → APPROVED →
   LOCKED). Each artifact records which upstream versions it was built from, so a change marks dependents
   STALE. Changes to approved work go through change requests with an impact list.
4. **Nothing left to guess.** Unknown values are written `MISSING: <what, from whom>` and routed to the
   owner, never left blank or invented downstream.
5. **Complete shot records.** The production-manager compiles each shot from its owners — blocking and
   performance (director), lens and light (cinematographer), states and screen direction (script supervisor),
   identity locks (designers), palette (style) — into a record with self-contained start frame, end frame
   and motion text for image and video models.
6. **Deterministic checks.** `validate_production.py` checks IDs, required fields, references, prop
   states, costume continuity, vocabulary, durations, lock rules and staleness. Other scripts assemble the
   master document, build a printable storyboard sheet, turn a cut list into an EDL plus an ffmpeg rough
   cut, and extract frames, contact sheets and loudness from generated media for QC.

## Quick start

```
/plugin marketplace add Justsonu-2026/new-for-the-ai-movie-skill
/plugin install film-crew@ai-film-crew
/film-crew:production-manager Start a new production in this folder: a lighthouse keeper's cat must
relight the lamp during a storm. 60 seconds, 16:9, stylized 3D animation. I use Veo 3.1 and a Gemini
image model. Gated mode.
```

Or ask any single department directly: "Design the main character and write a turnaround sheet",
"Direct this scene", "Write Veo prompts for scene 2", "QC this clip against shot SC02-SH030".

## What is and isn't verified

- Verified in this environment: skill structure against the official rules (`tools/validate_skills.py`,
  `claude plugin validate`), all 20 skills loading in Claude Code, script behavior (18 unit tests), two
  sample films taken from idea to master document and storyboard in real headless Claude Code sessions,
  correct skill triggering (20/20, no false triggers) and a with/without-plugin eval suite (score 0.89 with
  the plugin, mean improvement +0.45). See [docs/TEST-RESULTS.md](docs/TEST-RESULTS.md) for numbers,
  failures and fixes.
- Not verified: image, video or audio generation quality. No generation budget was authorized, so no
  prompts were run on real image or video models. Model-specific syntax for Kling, Seedance, Runway and
  Midjourney comes from third-party sources and is labeled as such.

## Repository layout

```
.claude-plugin/marketplace.json     marketplace "ai-film-crew"
plugins/film-crew/                  the plugin
  .claude-plugin/plugin.json
  skills/<skill>/SKILL.md           20 skills (+ references/, templates/, scripts/, evals/)
  evals/                            plugin eval suite for `claude plugin eval`
shared/                             canonical shared files (synced into each skill)
tools/                              lint, sync, eval cases, install, package, stage runner
tests/                              unit tests for the scripts
docs/                               design, research, test results
examples/                           sample production
```

## License

MIT — see [LICENSE](LICENSE).
