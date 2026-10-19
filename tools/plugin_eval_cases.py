#!/usr/bin/env python3
"""Generate the plugin eval suite for `claude plugin eval` at plugins/film-crew/evals/.

Usage: python tools/plugin_eval_cases.py

One case per skill (prompts phrased the way a user would type them, without naming the skill) plus a
negative case. Graders per case:
  - skill-fired: tool_used Skill (a with-only indicator in two-arm runs)
  - deterministic regex/file/tool checks where the output has a fixed form
  - one llm rubric on craft quality, written format-agnostically so the no-plugin baseline is judged fairly
Fixture cases copy a small project from the case's fixture/ folder with a scaffold script (run with --scaffold).
"""
import os
import shutil
import textwrap

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EVALS = os.path.join(ROOT, "plugins", "film-crew", "evals")
FIXTURES = os.path.join(ROOT, "tests", "eval-fixtures")
# Seed the empty workspace: the shared base project, then this case's overlay (if any).
SCAFFOLD = ('set -eu\nHERE="$(cd "$(dirname "$0")" && pwd)"\ncp -R "$HERE/../_fixtures/base/." .\n'
            'if [ -d "$HERE/fixture" ]; then cp -R "$HERE/fixture/." .; fi\n')

CASES = [
    dict(name="story-writer-ideas", skill="story-writer", turns=15, prompt="""
I want to make a 90-second animated short about a kid and a broken kite. Give me a few different story
ideas, pick the strongest, and develop it into a full beat outline. Put everything in your reply.""",
         regex=[("logline", r"logline", "last_message", "i")],
         llm="""PASS if the reply gives at least three concepts that differ in protagonist, conflict or genre (not
only setting), recommends one, and develops it into beats where each beat causes the next and the ending
is resolved by the protagonist's own choice; the beat timings add up to roughly 90 seconds.
FAIL if concepts are near-duplicates, the outline is a list of events without cause and effect, the
ending is resolved by luck or another character, or no timing is given."""),
    dict(name="screenwriter-rewrite", skill="screenwriter", turns=15, prompt="""
Turn this into a proper screenplay scene. Reply with the scene only plus a short list of what you changed.

Maya gets to the apartment. She is tired and sad because her mom is sick. She knocks and an old man
answers. She says "I have a delivery for apartment 4B, it's very important, I came all the way across the
city in the rain." He says "There's no 4B here, this building only has three floors." She is confused.
She looks at the parcel and sees her own address. She realizes the parcel is for her.""",
         regex=[("scene-heading", r"(INT\.|EXT\.)", "last_message")],
         llm="""PASS if the scene is in screenplay format (scene heading, action, character cues), shows feelings
through visible behavior instead of stating "sad"/"confused", cuts the expository line about crossing the
city, gives the label reveal a moment to land, contains no camera directions like "we see" or "pan to",
and lists the changes with reasons.
FAIL if interior states are stated in action lines, the exposition line is kept, or camera directions appear."""),
    dict(name="character-designer-sheet", skill="character-designer", turns=15, prompt="""
I need a character design I can use to keep a character consistent across AI images: Ana, a 30-year-old
lighthouse keeper in 1950s Portugal who wears a work coat. Give me the full character sheet spec in
your reply, including the text I should paste into every prompt.""",
         regex=[("height", r"\b1[4-9]\d\s?cm\b|height_cm:\s*1[4-9]\d", "last_message"), ("hex", r"#[0-9A-Fa-f]{6}", "last_message")],
         llm="""PASS if the reply gives height in cm, face, hair, eyes, skin, silhouette and distinguishing
features; a fixed paste-in description for the person that contains no clothing and does not depend on
her name, plus a separate fixed description for the costume; colors with hex values; and turnaround views
including front, three-quarter, side and back.
FAIL if the person's fixed description includes the coat or other clothing, if there is only one
combined description, or if turnaround views are missing."""),
    dict(name="production-designer-location", skill="production-designer", turns=15, prompt="""
Design the locations and props for this scene so they stay consistent across AI shots, reply in the
message: EXT./INT. FLOODED SUBWAY STATION - NIGHT. Water knee-deep. Tomas wades to the ticket booth, pries
open the cash drawer with a crowbar, finds a single brass key, and climbs the stopped escalator.""",
         llm="""PASS if the reply gives a layout or floor plan with exits/escalator and the booth placed, named
landmarks for orientation, light sources with direction or color, a fixed paste-in description of the
location without lighting or weather words, and props (drawer, crowbar, key) with their state changes
(e.g. drawer closed then pried open) tied to the moment they change.
FAIL if there is no layout, no light sources, or prop state changes are missing."""),
    dict(name="visual-style-look", skill="visual-style-designer", turns=15, prompt="""
Create the visual look for my 3-minute neo-noir short set in a rainy future Lagos. It has four scenes:
1 a quiet apartment, 2 a chase through a market, 3 a rooftop confrontation, 4 a calm dawn ending.
Reply with the look in the message.""",
         regex=[("hex", r"#[0-9A-Fa-f]{6}", "last_message")],
         llm="""PASS if the reply defines the medium/rendering, a palette with hex values and roles, a per-scene
color plan that changes with each scene's emotional beat (one entry per scene, all four scenes), lighting
and texture rules, and a short fixed style description to paste into every prompt that contains no living
artist names, no character or location names, and no aspect ratio.
FAIL if any scene lacks a color plan, the paste-in style text names an artist, or no hex palette is given."""),
    dict(name="film-director-scene", skill="film-director", turns=15, prompt="""
Direct this scene for an AI-generated film and give me the shot breakdown in your reply:
INT. KITCHEN - NIGHT. RUTH (60s) washes dishes. Her son DANIEL (19) stands in the doorway with a duffel bag.
DANIEL: I leave at six. RUTH: (not turning) There's soup in the fridge. DANIEL: Mum. She keeps washing
the same plate. He waits. He puts his key on the table and goes. She turns off the tap.""",
         regex=[("shot-ids", r"SH\d{2,3}|Shot\s*\d", "last_message")],
         llm="""PASS if the reply states what each character wants and the turn, gives performance direction as
playable actions or visible behavior (not "be sad"), blocks positions and moves, states the axis or
screen direction, and lists shots each with size, angle, camera movement (at most one per shot), an action
with an end state, a duration and a purpose; durations are short enough for AI video clips.
FAIL if direction is emotion-only, any shot has several unrelated actions or camera moves, or durations are missing."""),
    dict(name="action-director-fight", skill="action-director", turns=15, prompt="""
Choreograph a 30-second rooftop fight for my AI film between Kit (small, fast, untrained courier) and
Rook (huge, slow bodyguard). Kit must escape with her bag. Reply with the choreography in the message.""",
         llm="""PASS if moves are written as numbered exchanges with each move's action, the opponent's reaction
and the consequence; the momentum swings at least once; the two fighting styles reflect the characters
(evasion vs power); each exchange is mapped to short shots; and injuries/damage are listed for continuity.
FAIL if the fight is a vague paragraph, has no momentum change, or is not mapped to shots."""),
    dict(name="animation-director-timing", skill="animation-director", turns=15, prompt="""
Animate this shot: a little robot hears a noise, freezes, then hides behind a barrel. 3 seconds, 2D, 24 fps.
Give me key poses and timing in your reply.""",
         regex=[("72-frames", r"\b72\b", "last_message")],
         llm="""PASS if the reply gives key poses with frame numbers, a timing chart that adds up to 72 frames,
an anticipation before the hide, follow-through or settle on loose parts, and describes the start and end
poses clearly enough to use as keyframes.
FAIL if frame numbers are missing, timing does not total 72 frames, or there is no anticipation."""),
    dict(name="cinematographer-dp-pass", skill="cinematographer", turns=15, prompt="""
Do a DP pass on this shot list for a night conversation in a parked car under a streetlight. Reply with
lens, camera and lighting per shot.
1 WS exterior, car under the streetlight, static. 2 MS two-shot through the windshield.
3 CU Lena (driver) looking ahead. 4 CU Sam (passenger) looking at her. 5 INSERT her hand on the key.""",
         regex=[("mm", r"\b\d{2,3}\s?mm\b", "last_message")],
         llm="""PASS if every shot has a focal length in mm and an aperture or depth-of-field statement, camera
height or position, and lighting that is motivated by the streetlight/dashboard/interior sources with
direction and color or color temperature; the two singles (shots 3 and 4) are matched in lens.
FAIL if any shot lacks a lens, lighting is unmotivated or generic ("cinematic lighting"), or the singles are unmatched."""),
    dict(name="script-supervisor-continuity", skill="script-supervisor", turns=15, prompt="""
Check continuity between these consecutive shots and reply with what is wrong, how bad it is, and who
should fix it.
SH040: MS. Ana (hood UP, scar on her LEFT cheek) holds the lantern in her LEFT hand, walking screen right.
SH050: CU. Ana (hood DOWN, scar on her RIGHT cheek) holds the lantern in her RIGHT hand, walking screen left.
Nothing happens between the shots; it is a straight cut.""",
         llm="""PASS if the reply identifies all four problems (hood up/down, scar side, lantern hand, screen
direction reversal), gives each a severity, names an owner or fix for each, and treats the scar side as an
identity/mirror error.
FAIL if any of the four problems is missed."""),
    dict(name="storyboard-from-shots", skill="storyboard-artist", turns=40, timeout=900, fixture=True, prompt="""
Storyboard scene SC01 of the production in this folder from its shot records and build the storyboard
sheet.""",
         files=[("panels-file", "09_storyboard/storyboard.md"), ("sheet", "09_storyboard/storyboard.html")],
         tool=("ran-builder", "Bash", "build_storyboard"),
         llm_target="09_storyboard/storyboard.md",
         llm="""PASS if the file has a panel for every SC01 shot, moving shots have start and end panels, each panel
states composition positions (thirds, foreground/background), camera notes, duration, and no panel adds an
event that is not in the shot records.
FAIL if shots are missing panels or panels invent new story events."""),
    dict(name="image-prompts-keyframe", skill="image-prompt-engineer", turns=30, timeout=900, fixture=True, prompt="""
Write the image prompts for the start and end keyframes of shot SC01-SH010 in this production. My image
tool accepts up to 3 reference images. Reply with the prompts.""",
         llm="""PASS if the reply gives a start-frame and an end-frame prompt, each pasting the character's and
location's fixed lock text verbatim from the project files, listing at most 3 reference images each with
a stated role, and describing only what the shot record specifies (no added props, people or weather).
FAIL if locks are paraphrased, references exceed 3 or lack roles, or content not in the shot record is added."""),
    dict(name="video-prompt-veo", skill="video-prompt-engineer", turns=15, prompt="""
Write a Veo 3.1 image-to-video prompt for this shot. The start keyframe is approved.
Shot SC03-SH020, 4 s in the cut, MCU high angle, static camera, focus racks from the label to her eyes at
2.5 s. Action: she turns the parcel over, wipes the label with her thumb, looks up at the window and holds.
At 3.0 s she says quietly "That's my street." Rain on the window behind her. No music.""",
         regex=[("quoted-line", r"\"That's my street\.\"", "last_message")],
         llm="""Judge only these five points. PASS if all hold:
1. The prompt describes what moves or changes (the parcel turn, the thumb wipe, the look up) rather than
   re-describing the whole picture.
2. It adds no action, character or camera move beyond the ones in the request.
3. The camera instruction is phrased positively (for example "locked off", "remains still").
4. The line "That's my street." appears in quotes with a speaker or attribution.
5. A clip length of 4, 6 or 8 seconds is chosen.
FAIL if any of the five points is not met."""),
    dict(name="voice-director-casting", skill="voice-director", turns=15, prompt="""
Cast voices and give delivery notes for these lines in my AI short.
LAN (30s, tired noodle vendor): "Almost closing." / "Hey!" / "Ah Ma." (the last one barely audible, she
has just realised her late grandmother fed this monkey every night).""",
         llm="""PASS if the reply gives a voice profile with concrete descriptors (pitch, timbre, pace, accent or
energy), and for each line a delivery with intention, stressed word or pacing, volume and any pause or
breath, plus a timing estimate; and it names no celebrity or real person as a voice reference.
FAIL if delivery is only an emotion word, or a real person's voice is used as the reference."""),
    dict(name="music-director-spotting", skill="music-director", turns=15, prompt="""
Plan the music for my 90-second short. Scenes: 1 busy night market stall (22 s), 2 chase through the
market (32 s), 3 quiet alley where she realises her grandmother fed the monkey (26 s), 4 closing time,
she repeats the ritual (10 s). Where should music go and what should it be? Reply in the message.""",
         regex=[("bpm", r"\b\d{2,3}\s?bpm\b", "last_message", "i")],
         llm="""PASS if every scene is decided as music, no music or source music with a reason; cues have a
function, start and end, tempo, key or mode and instrumentation; at least one deliberate silence or
restraint is justified (for example at the realisation); and no artist names are used for the style.
FAIL if a scene is skipped or cues lack tempo/instrumentation."""),
    dict(name="sound-designer-chase", skill="sound-designer", turns=15, prompt="""
Design the sound for this 30-second chase: a vendor chases a monkey through a crowded night market;
it ducks under a cart; she squeezes between stalls, scrapes her arm on a crate, loses it, and hears two
slow metallic knocks from a dark alley. Reply with the sound plan.""",
         llm="""PASS if the reply gives an ambience bed and how it changes, sync sounds tied to specific moments
with a layer (Foley, hard effect, designed), footsteps/cloth Foley, the two knocks treated as a key
cue with space/perspective, a transition or silence decision before the knocks, and mix priorities.
FAIL if it is only a generic list of sounds without timing or perspective."""),
    dict(name="vfx-supervisor-plan", skill="vfx-supervisor", turns=15, prompt="""
Two shots in my AI film worry me: SH040 is a 2-second insert where an address label must be readable,
and SH080 has two recurring characters hugging. How do I get them made? Reply with a plan.""",
         llm="""PASS if the reply adds the label text in post (compositing/tracking) rather than relying on the
model to render text, gives a method for the hug (e.g. element compositing, keyframe editing, or a
restaging proposal), lists steps or elements, and gives a fallback and acceptance criteria for each shot.
FAIL if it relies on prompting the model to render readable text, or gives no fallback."""),
    dict(name="film-editor-edl", skill="film-editor", turns=30, timeout=900, fixture=True, prompt="""
The takes for scene SC01 are in takes/ (the list is in takes/README.md). Build the cut list for SC01 and
export an EDL and a rough-cut script into 13_edit/.""",
         files=[("edl", "13_edit/*.edl"), ("cutlist", "13_edit/cutlist.csv")],
         tool=("ran-build-cut", "Bash", "build_cut"),
         llm_target="13_edit/cutlist.csv",
         llm="""PASS if the cut list has one row per SC01 shot in order, uses usable in/out points that trim the
start and end of each take rather than the full take, and total length is close to the planned scene length.
FAIL if shots are missing or out of order, or every take is used from 0 to its full length."""),
    dict(name="quality-control-preflight", skill="quality-control", turns=30, timeout=900, fixture=True, prompt="""
Before we start generating, check that this production's shot records are ready. Tell me what blocks us.""",
         tool=("ran-validator", "Bash", "validate_production"),
         llm="""PASS if the reply reports the specific defects in the shot records (it must mention the shot whose
end state is missing and the undefined prop state), says generation is blocked until they are fixed,
and names who should fix each.
FAIL if it says the production is ready, or misses either defect."""),
    dict(name="production-manager-start", skill="production-manager", turns=40, timeout=1200, prompt="""
Start a new production in this folder: a lighthouse keeper's cat must relight the lamp during a storm.
60 seconds, 16:9, stylized 3D animation. I'll use Veo 3.1 and a Gemini image model. Gated mode: stop at
the first approval gate.""",
         files=[("brief", "00_brief.md"), ("log", "PRODUCTION_LOG.md")],
         llm="""PASS if the reply records the specs, lists assumptions or questions for missing ones, shows the
staged plan, and stops at the story approval gate asking the user to choose or approve a story; it must not
continue into screenplay, design or shot lists.
FAIL if it writes a screenplay, designs or shots, or does not stop for approval."""),
    dict(name="negative-unrelated-request", skill=None, turns=8, prompt="""
Write a Python function that returns the n-th Fibonacci number iteratively. Reply with just the code.""",
         llm="""PASS if the reply is a correct iterative Python Fibonacci function.
FAIL otherwise."""),
]


def sq(text):
    """Single-quoted YAML scalar (an apostrophe is written as two)."""
    return "'" + str(text).replace("'", "''") + "'"


def front(d):
    return "---\n" + "".join(f"{k}: {v}\n" for k, v in d.items()) + "---\n"


def main():
    if os.path.isdir(EVALS):
        for entry in os.listdir(EVALS):
            if entry != "results":
                shutil.rmtree(os.path.join(EVALS, entry)) if os.path.isdir(os.path.join(EVALS, entry)) else None
    os.makedirs(EVALS, exist_ok=True)
    shutil.copytree(os.path.join(FIXTURES, "base"), os.path.join(EVALS, "_fixtures", "base"))
    for c in CASES:
        d = os.path.join(EVALS, c["name"])
        g = os.path.join(d, "graders")
        os.makedirs(g, exist_ok=True)
        tools = "[Read, Glob, Grep, Skill, Write, Edit, Bash]"
        fm = {"description": f"\"{c['skill'] or 'none'}: {c['name']}\"", "runs": 1, "max_turns": c["turns"],
              "timeout_seconds": c.get("timeout", 600), "allowed_tools": tools}
        with open(os.path.join(d, "prompt.md"), "w") as fh:
            fh.write(front(fm) + "\n" + textwrap.dedent(c["prompt"]).strip() + "\n")
        if c.get("fixture"):
            with open(os.path.join(d, "case.yaml"), "w") as fh:
                fh.write(f'schema_version: "1.1"\nname: {c["name"]}\ncontext:\n  scaffold_script: scaffold.sh\n')
            with open(os.path.join(d, "scaffold.sh"), "w") as fh:
                fh.write(SCAFFOLD)
            src = os.path.join(FIXTURES, c["name"])
            if os.path.isdir(src):  # optional per-case overlay on top of the shared base project
                shutil.copytree(src, os.path.join(d, "fixture"))
        if c["skill"]:
            with open(os.path.join(g, "skill-fired.md"), "w") as fh:
                fh.write(front({"type": "tool_used", "tool": "Skill",
                                "input_match": f"'\"skill\"\\s*:\\s*\"(?:[\\w-]+:)?{c['skill']}\"'"}))
        else:
            with open(os.path.join(g, "no-skill.md"), "w") as fh:
                fh.write(front({"type": "tool_used", "tool": "Skill", "min": 0, "max": 0, "arm": "both"}))
        for name, pattern, target, *flags in c.get("regex", []):  # JS regex: case-insensitivity via flags, not (?i)
            fm = {"type": "regex", "pattern": sq(pattern), "target": target}
            if flags:
                fm["flags"] = flags[0]
            with open(os.path.join(g, f"{name}.md"), "w") as fh:
                fh.write(front(fm))
        for name, path in c.get("files", []):
            with open(os.path.join(g, f"{name}.md"), "w") as fh:
                fh.write(front({"type": "file_exists", "path": sq(path)}))
        if c.get("tool"):
            name, tool, match = c["tool"]
            with open(os.path.join(g, f"{name}.md"), "w") as fh:
                # the script only exists inside the plugin, so this is an indicator, not a fair baseline comparison
                fh.write(front({"type": "tool_used", "tool": tool, "input_match": sq(match), "arm": "with-only"}))
        llm_fm = {"type": "llm"}
        if c.get("llm_target"):
            llm_fm["focus"] = "{ source: file, path: " + c["llm_target"] + " }"
        with open(os.path.join(g, "quality.md"), "w") as fh:
            fh.write(front(llm_fm) + "\n" + textwrap.dedent(c["llm"]).strip() + "\n")
    print(f"wrote {len(CASES)} cases to {EVALS}")


if __name__ == "__main__":
    main()
