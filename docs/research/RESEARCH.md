# Research Log

Research date: **2026-10-19**. This file records what was read, what was learned, and how much to trust
it. It distinguishes facts read directly in a source from facts seen only in search excerpts, and both
from general domain knowledge that was not re-verified in this session.

## Contents
1. Method and trust labels
2. Environment limits during research
3. Target platform: Agent Skills and Claude Code plugins
4. Existing filmmaking skills studied
5. AI image and video model guidance
6. Voice and music tools
7. Professional filmmaking practice
8. Findings that shaped the design
9. Known gaps

## 1. Method and trust labels

| Label | Meaning |
|---|---|
| **READ** | Page or repository read directly in full during this session |
| **SNIPPET** | Seen only as a search-engine excerpt; page not opened |
| **KNOWLEDGE** | Standard craft knowledge (books, industry practice) used without re-reading a source in this session |
| **UNVERIFIED** | Sources conflict or are low quality; used only with that label in the skills |

Every repository listed in section 4 was cloned and inspected; existence and last commit date are recorded.

## 2. Environment limits during research
The research container's network policy blocked many vendor domains (fountain.io, studiobinder.com,
help.runwayml.com, runway.com, docs.midjourney.com, elevenlabs.io, developers.googleblog.com, ai.google.dev,
en.wikipedia.org, agentskills.io, cookbook.openai.com). Where possible, the same material was read from an
allowed mirror (the OpenAI Cookbook's GitHub source). Otherwise facts are labeled SNIPPET or UNVERIFIED
and the skills tell the user to check the vendor's current documentation.

## 3. Target platform: Agent Skills and Claude Code plugins

| Source | Label | Key facts used |
|---|---|---|
| platform.claude.com — "Skill authoring best practices" | READ | `name` ≤ 64 chars, lowercase letters/numbers/hyphens, no XML tags, no "anthropic"/"claude"; `description` non-empty ≤ 1024 chars, no XML, third person, says what and when; SKILL.md body under 500 lines; references one level deep; Contents list for reference files > 100 lines; workflows with copyable checklists; validator feedback loops; "build evaluations first"; at least three evaluations; test with all target models |
| code.claude.com — "Skills" | READ | load locations (personal, project, plugin); plugin skills are namespaced `/plugin:skill`; frontmatter fields; claude.ai and the Skills API accept only `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools` (others are a hard error on upload) |
| code.claude.com — "Plugin manifest reference" | READ | `.claude-plugin/plugin.json` schema (`name` required, kebab-case, reserved prefixes); `skills/<name>/SKILL.md` default layout; `claude plugin validate` |
| code.claude.com — "Marketplace reference" | READ | `.claude-plugin/marketplace.json` (`name`, `owner`, `plugins` required); relative `./` plugin sources; reserved marketplace names |
| github.com/anthropics/skills (commit dbd4588, 2026-10-09) | READ | official example skills; skill-creator's `evals/evals.json` schema (`skill_name`, `evals[].id/prompt/expected_output/files/expectations`) — adopted here |
| Claude Code CLI 2.1.303 in the container | READ (executed) | `claude plugin validate` passes for this marketplace and plugin; `claude -p --plugin-dir` loads all 20 skills as `film-crew:*` |

## 4. Existing filmmaking skills studied
All cloned on 2026-10-19 (shallow) and inspected. None of their text was copied into this system; patterns
were re-implemented in this repository's own words.

| Repository (last commit) | License | What it does | Strengths adopted (re-implemented) | Weaknesses observed |
|---|---|---|---|---|
| DenisHumen/cinema-skills (2026-09-26) | MIT | Pipeline layout across 10 disciplines | Department-per-folder idea, style bible, Fountain screenplays | README states "structure first": discipline folders contain only READMEs, no SKILL.md files yet |
| zhangzhangco/film-production-skills (2026-07-30) | MIT | 7 short skills with request/result envelopes, JSON schemas, `workflow.yaml` | Stable IDs, statuses (completed/partial/blocked), "do not invent", start/action/end state per segment, provider capability profiles, targeted retries | Starts from an existing screenplay (no story creation, no character sheets); envelopes are JSON-heavy for human review |
| wuwangzhang1216/DirectorSKILL (2026-08-31) | MIT | One large director skill (420-line SKILL.md + many references, 57 evals) | Motion budget, explicit end states, behavior-not-emotion, verbatim invariant clauses, keyframe as control point, response-size discipline, evals graded only from response text | Single monolithic skill covering every role; style overlays of named real directors |
| dunkeyyfong/ai-film-director (2026-10-07) | MIT | One skill: script → bible → image QA → per-model video prompts | Identity blocks pasted verbatim, image QA with diff table and PASS/FIX/REDO, dated model files with trust labels, `sources.md` | One skill holds every department; limited direction/cinematography depth |
| leynos/visual-storytelling-skills (2026-10-10) | ISC | Scene inventory → shot specifier → video generator, model deep dives | Per-shot start/end frame prompts, frame roles, asset naming, generation manifest | Tied to specific tools/models; very long skills (up to 771 lines) |
| smixs/visual-skills (2026-09-16) | CC-BY-4.0 | Two skills (image, video) with mandatory reading order | Strict reading order, dramaturgy check before output | Attribution-required license (not copied); prompt-centric, no production management |
| Gregory-Esman/ai-film-pipeline (2026-06-12) | MIT | 4 skills: worldbuilder, image director, video director, video QA | QA skill separate from generation | SKILL.md files of 652-1268 lines, well past the 500-line guidance |

Also surfaced by search (not cloned, not used): RainLib/AI-Storyboard, danjdewhurst/story-skills,
0xhughs/director-skills, zenstory-ai/drama-skills, OSideMedia/higgsfield-ai-prompt-skill, AShan0227/seedance-director,
Emily2040/seedance-2.0, jnMetaCode/ai-shortfilm-prompts, a screenwriter gist. Their existence was seen in
search results only.

**Gap this system fills:** no studied repository covers idea → story → screenplay → character sheets →
direction → camera → continuity → compiled shot records → storyboard → prompts → sound → edit → QC as
separate cooperating skills with one data contract, versioned approvals, change requests, and a
deterministic validator.

## 5. AI image and video model guidance

| Source | Label | Facts used |
|---|---|---|
| Google Cloud blog, "The ultimate prompting guide for Veo 3.1" (2025-10-16) | READ | formula [Cinematography] + [Subject] + [Action] + [Context] + [Style & Ambiance]; camera vocabulary; dialogue in quotes, `SFX:`, `Ambient noise:`; positive phrasing for exclusions; first/last frame; ingredients-to-video with role-named references; timestamp prompting; 4/6/8 s, 720p/1080p, 16:9/9:16; SynthID |
| OpenAI Cookbook, "Sora 2: Prompting Guide" (updated 2026-03; read from the GitHub source) | READ | one camera move + one subject action per shot; actions in beats/counts; concrete nouns/verbs; 3-5 palette colors; image input anchors the first frame and must match size; dialogue block with speaker labels; short clips follow instructions better; `seconds` 4-20; sizes per model; Characters API (2-4 s clip, ≤ 2 per generation); extensions up to 6 × 20 s; iterate one change at a time |
| Runway Help Center, Gen-4 prompting guide | SNIPPET | focus on motion; negative phrasing unsupported and may produce the opposite; "the camera remains still" |
| Runway Resources, Seedance 2.0 prompt guide | SNIPPET | label references (`@Image 1`, `@Video 1`, `@Audio 1`) and state each one's purpose |
| Third-party Kling 3.x and Seedance guides (magichour, atlabs, morphic, cliprise, others) | UNVERIFIED | Elements from 2-4 images; multi-shot limits; reference limits — sources conflict |
| Midjourney Omni Reference (`--oref`, `--ow` 1-1000, default 100, V7) | SNIPPET (third-party) | used with that label |
| Practitioner guides on character consistency (2026) | SNIPPET | drift compounds per hop; profile views break references; outfits drift more than faces; locked reference images + repeated text |

## 6. Voice and music tools

| Source | Label | Facts used |
|---|---|---|
| ElevenLabs docs, "Prompting Eleven v3" + blog | SNIPPET | audio tags in brackets (`[whispers]`, `[sighs]`, `[laughs]`); combine tags; Creative/Natural stability for expressiveness; prompts over ~250 characters for consistency; PVCs not fully optimized for v3 at the time of the post |
| Suno practitioner guides | UNVERIFIED | style field + lyrics with `[Verse]`/`[Chorus]` tags; `[Bridge]` less reliable |

## 7. Professional filmmaking practice

| Topic | Label | Notes |
|---|---|---|
| Script breakdown and color codes | SNIPPET | red = cast, purple = props, green = background extras are well supported; wardrobe color varies between sources, so the system uses element categories, not colors |
| Page ≈ one minute; page eighths | SNIPPET + KNOWLEDGE | used for runtime scaling |
| Script supervisor duties (continuity logs, positions, screen direction, lens, timing, lined script, daily reports) | SNIPPET (Wikipedia, IATSE descriptions) | basis of script-supervisor skill and coverage map |
| 180-degree rule, crossing via on-screen move / neutral shot / cutaway, eyeline match, 30-degree rule | SNIPPET | basis of shot-grammar and continuity checks |
| Walter Murch, *In the Blink of an Eye*, rule of six (emotion, story, rhythm, eye-trace, 2D plane, 3D space; emotion weighted highest) | SNIPPET + KNOWLEDGE | other percentages not verified, so not quoted |
| Model sheets: turnaround (front, ¾, side, ¾ back, back), expression and pose sheets, on/off-model | SNIPPET | basis of model-sheet spec |
| Storyboard conventions (arrows for camera vs subject movement, scene/shot numbering, notes per panel, level of finish) | SNIPPET | basis of storyboard conventions |
| Spotting sessions, cue sheets, hit points; sound layers; stems and M&E | SNIPPET | basis of music and sound skills |
| Fight previs/stuntvis (J.J. Perry; Kingsman 2 editor prep) | SNIPPET | basis of action-director's "written previs" framing |
| Robert McKee: a scene turns a value; turning points | SNIPPET (mckeestory.com) | basis of scene value-change requirement |
| Pixar color scripts (Lou Romano on *The Incredibles*) | SNIPPET (MoMA audio text) | basis of the color script |
| Twelve principles of animation (Thomas & Johnston, 1981) | KNOWLEDGE | listed by name |
| Save the Cat beats (Blake Snyder), Story Circle (Dan Harmon), kishōtenketsu, "therefore/but" (Parker & Stone) | KNOWLEDGE | structure options |
| Fountain syntax | KNOWLEDGE + SNIPPET | fountain.io unreachable; core syntax listed with a note to verify edge cases |
| Loudness targets (EBU R128 −23 LUFS, ATSC A/85 −24 LKFS) | KNOWLEDGE | the skill says to confirm the platform's current spec |
| Lens focal-length look, color temperatures, lighting setups | KNOWLEDGE | standard cinematography practice |

## 8. Findings that shaped the design
1. **Consistency comes from fixed text plus fixed reference images.** Both official video guides advise
   reusing the same phrasing; practitioners report drift compounding per generation. → identity/style locks
   pasted verbatim; approved reference sheets; validator and QC check locks.
2. **One action, one move, explicit end state.** Sora 2 states it; Veo examples follow it; the studied
   director skill made it a hard rule. → motion budget in direction, compilation and video prompts.
3. **Positive phrasing.** Veo 3.1 and Runway both advise it. → avoid lists written as alternatives;
   "camera remains still".
4. **Short clips are more reliable.** → durations in tens of seconds per scene split into short shots;
   clip length = duration + handles.
5. **Existing skills are mostly monolithic** and several exceed the 500-line guidance. → 20 focused skills,
   largest SKILL.md body 176 lines, depth in one-level references.
6. **Downstream guessing is the main failure.** → `MISSING:` markers and a validator that rejects empty or
   TBD required fields.
7. **Vendor facts age fast and many vendor pages were unreachable.** → capability-first adapter files with
   trust labels and dates; skills ask for the user's tool profile.

## 9. Known gaps
- Kling, Seedance, Runway, Midjourney, Gemini image and GPT Image specifics were not read in official docs
  (blocked or not found); the adapters label them and instruct verification.
- No image, video or audio was generated during testing (no generation budget was authorized), so prompt
  effectiveness on real models is untested here; see docs/TEST-RESULTS.md.
