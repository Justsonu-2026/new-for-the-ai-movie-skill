# Installation

The film-crew skills follow the Agent Skills format (a folder per skill with a `SKILL.md`). They can be
installed four ways. Requirements for the bundled scripts: **Python 3.9+**, **PyYAML** (`pip install
pyyaml`) for the validator, master-document assembler and storyboard builder; **ffmpeg/ffprobe** for media
inspection and the rough-cut script. The skills work without these, but the deterministic checks will not run.

## 1. Claude Code plugin from GitHub (recommended)

The repository is a plugin marketplace (`.claude-plugin/marketplace.json`) containing the `film-crew` plugin.

In Claude Code:
```
/plugin marketplace add Justsonu-2026/new-for-the-ai-movie-skill
/plugin install film-crew@ai-film-crew
```
or from your shell:
```bash
claude plugin marketplace add Justsonu-2026/new-for-the-ai-movie-skill
claude plugin install film-crew@ai-film-crew
```
Skills then appear as `/film-crew:production-manager`, `/film-crew:story-writer`, and so on, and Claude also
loads them automatically when a request matches their description. If the repository is private, your
GitHub account needs access to it.

## 2. Load the plugin for one session (no install)

```bash
git clone https://github.com/Justsonu-2026/new-for-the-ai-movie-skill
claude --plugin-dir ./new-for-the-ai-movie-skill/plugins/film-crew
```

## 3. Copy skills into a skills folder

```bash
tools/install_skills.sh personal                 # ~/.claude/skills  (all your projects)
tools/install_skills.sh project /path/to/repo    # /path/to/repo/.claude/skills (commit it for your team)
tools/install_skills.sh personal --only "story-writer screenwriter"   # a subset
```
Existing folders with the same name are skipped unless you pass `--force`. Copied skills are invoked
without the plugin prefix (`/story-writer`).

Each skill is self-contained (it carries its own copy of the shared protocol and schema), so any subset
works. The production-manager can perform a missing department's step itself from its contract file.

## 4. claude.ai or the Skills API

```bash
python tools/package_skills.py            # writes dist/<skill>.zip for each skill
```
Upload the zips you want (claude.ai: Settings → Capabilities → Skills; or the Skills API). The frontmatter
uses only `name` and `description`, which both accept. Scripts need a code-execution environment; without
one, the skills fall back to manual checks and say so.

## Verify the installation

```bash
python tools/validate_skills.py           # structure lint of all skills (needs PyYAML)
claude plugin validate .                  # official marketplace/plugin validation
python -m unittest discover -s tests      # tests for the bundled scripts
```

## Start a production

```
/film-crew:production-manager Start a new production in this folder: <your idea>. <runtime>, <aspect ratio>,
<look>. I'll use <video tool> and <image tool>. Gated mode.
```
The manager writes the brief, runs each department in order and stops at every approval gate. Say
"autonomous mode for stages N to M" to let it approve on your behalf (it records those approvals in
`PRODUCTION_LOG.md`).

## Updating

- Plugin: `/plugin marketplace update ai-film-crew` (or `claude plugin marketplace update ai-film-crew`),
  then update the plugin.
- Copied skills: re-run `tools/install_skills.sh ... --force`.
- Contributors: edit shared files only in `shared/`, then run `python tools/sync_shared.py` and
  `python tools/validate_skills.py`.
