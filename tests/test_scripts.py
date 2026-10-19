#!/usr/bin/env python3
"""Tests for the deterministic film-crew scripts.

Run: python -m unittest discover -s tests -v      (needs PyYAML; media test needs ffmpeg)
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import textwrap
import unittest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SK = os.path.join(ROOT, "plugins", "film-crew", "skills")
VALIDATE = os.path.join(SK, "production-manager", "scripts", "validate_production.py")
ASSEMBLE = os.path.join(SK, "production-manager", "scripts", "assemble_master.py")
STORYBOARD = os.path.join(SK, "storyboard-artist", "scripts", "build_storyboard.py")
BUILD_CUT = os.path.join(SK, "film-editor", "scripts", "build_cut.py")
INSPECT = os.path.join(SK, "quality-control", "scripts", "inspect_media.py")

HEADER = "---\nartifact: {a}\nid: {i}\nversion: {v}\nstatus: APPROVED\nowner: {o}\ndepends_on: [{d}]\nupdated: 2026-10-19\n---\n"

SHOT = """```yaml
record: shot
id: SC01-SH010
scene: SC01
status: REVIEW
version: 1
depends_on: [screenplay@1]
purpose: "Ana sees the lamp is out"
screenplay_ref: "SC01 action 1"
duration_s: 4
characters:
  - {id: CH-ANA, costume: CO-ANA-01, position: "left third", facing: "camera right", action: "looks up and stops", expression_start: "neutral", expression_end: "brows pinched"}
props:
  - {id: PR-LAMP, state: PR-LAMP:OFF, position: "top of tower"}
location: {id: LOC-TOWER, area: "base", time_of_day: dusk, weather: wind}
frame: {foreground: grass, midground: Ana, background: tower, composition: "Ana left third"}
camera: {shot_size: WS, angle: low, lens_mm: 35, depth_of_field: deep, movement: static, support: tripod, position: "south of tower"}
lighting: {key: "low sun camera left", palette: ["slate", "amber"]}
screen_direction: "Ana faces camera right"
start_state: "Ana walking"
end_state: "Ana stopped, looking up"
action_timeline: ["0-4 s: walks, stops, looks up"]
dialogue: []
sound: "wind"
music: none
vfx: none
transition_in: "fade-in"
transition_out: "cut"
continuity: []
generation:
  mode: image-to-video
  start_frame: "Wide low-angle shot of a woman at the base of a lighthouse at dusk"
  motion: "She walks two steps, stops and looks up; camera static"
  clip_length_s: 5
```
"""


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(text)


def make_project(root, shot_text=SHOT, extra=None):
    write(os.path.join(root, "00_brief.md"), HEADER.format(a="brief", i="brief", v=1, o="production-manager", d="")
          + "# Brief: Lamp\n")
    write(os.path.join(root, "02_screenplay", "scene_index.md"),
          HEADER.format(a="scene-index", i="screenplay", v=1, o="screenwriter", d="brief@1") + textwrap.dedent("""
          ```yaml
          record: scene
          id: SC01
          heading: "EXT. LIGHTHOUSE - DUSK"
          location: LOC-TOWER
          time_of_day: dusk
          characters: [CH-ANA]
          summary: "Ana finds the lamp dark"
          purpose: "inciting incident"
          value_change: "routine -> alarm"
          est_duration_s: 4
          ```
          """))
    write(os.path.join(root, "03_characters", "CH-ANA.md"),
          HEADER.format(a="character-bible", i="CH-ANA", v=1, o="character-designer", d="screenplay@1") + textwrap.dedent("""
          ```yaml
          record: character
          id: CH-ANA
          name: Ana
          role: protagonist
          age: 30
          height_cm: 168
          build: lean
          identity_lock: "A 30-year-old woman with a long face, olive skin, dark eyes and a grey-streaked braid."
          face: long
          hair: "dark braid with grey streak"
          skin: olive
          eyes: dark brown
          silhouette: "long coat triangle"
          distinguishing_features: ["grey streak on the left"]
          default_costume: CO-ANA-01
          costumes: [CO-ANA-01]
          expression_range: [neutral, worried]
          ```
          ```yaml
          record: costume
          id: CO-ANA-01
          character: CH-ANA
          name: keeper coat
          garments: ["navy wool coat"]
          materials: [wool]
          colors: ["navy #1F2A44"]
          accessories: []
          condition_states: [{id: DRY, description: dry}]
          identity_lock: "Navy double-breasted wool coat to the knee, brass buttons, black rubber boots."
          ```
          """))
    write(os.path.join(root, "04_world", "LOC-TOWER.md"),
          HEADER.format(a="location", i="LOC-TOWER", v=1, o="production-designer", d="screenplay@1") + textwrap.dedent("""
          ```yaml
          record: location
          id: LOC-TOWER
          name: Lighthouse
          int_ext: EXT
          description: "White stone lighthouse on a cliff"
          layout: "tower north, path south"
          landmarks: ["tower", "bent pine"]
          light_sources: ["sun", "lamp"]
          palette: ["slate", "amber"]
          set_dressing: ["fence"]
          identity_lock: "A white stone lighthouse with a red iron gallery on a grassy cliff, a bent pine to the west."
          ```
          ```yaml
          record: prop
          id: PR-LAMP
          name: lamp
          description: "the lighthouse lamp"
          size: "1 m"
          materials: [glass, brass]
          colors: [brass]
          states: [{id: "PR-LAMP:OFF", description: dark}, {id: "PR-LAMP:ON", description: lit}]
          identity_lock: "A large brass-framed Fresnel lens lamp in the lantern room."
          ```
          """))
    write(os.path.join(root, "08_master", "shots", "SC01.md"), "# SC01 shots\n\n" + shot_text)
    for rel, text in (extra or {}).items():
        write(os.path.join(root, rel), text)


def read(path):
    with open(path, encoding="utf-8") as fh:
        return fh.read()


def run(*args):
    return subprocess.run([sys.executable, *args], capture_output=True, text=True)


class ValidatorTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.mkdtemp()

    def tearDown(self):
        shutil.rmtree(self.tmp)

    def validate(self):
        res = run(VALIDATE, self.tmp, "--json")
        return res.returncode, json.loads(res.stdout)

    def test_valid_project_passes(self):
        make_project(self.tmp)
        code, rep = self.validate()
        self.assertEqual(rep["errors"], [], rep["errors"])
        self.assertEqual(code, 0)
        self.assertEqual(rep["record_counts"]["shot"], 1)

    def test_missing_required_field(self):
        make_project(self.tmp, SHOT.replace('end_state: "Ana stopped, looking up"\n', ""))
        code, rep = self.validate()
        self.assertEqual(code, 1)
        self.assertTrue(any("end_state" in e for e in rep["errors"]))

    def test_tbd_is_rejected(self):
        make_project(self.tmp, SHOT.replace('purpose: "Ana sees the lamp is out"', "purpose: TBD"))
        _, rep = self.validate()
        self.assertTrue(any("'purpose'" in e for e in rep["errors"]))

    def test_unknown_reference(self):
        make_project(self.tmp, SHOT.replace("location: {id: LOC-TOWER", "location: {id: LOC-BEACH"))
        _, rep = self.validate()
        self.assertTrue(any("LOC-BEACH" in e for e in rep["errors"]))

    def test_undefined_prop_state(self):
        make_project(self.tmp, SHOT.replace("PR-LAMP:OFF", "PR-LAMP:BROKEN"))
        _, rep = self.validate()
        self.assertTrue(any("PR-LAMP:BROKEN" in e for e in rep["errors"]))

    def test_bad_vocabulary(self):
        make_project(self.tmp, SHOT.replace("shot_size: WS", "shot_size: HUGE").replace("movement: static", "movement: swoosh"))
        _, rep = self.validate()
        self.assertTrue(any("shot_size" in e for e in rep["errors"]))
        self.assertTrue(any("movement" in e for e in rep["errors"]))

    def test_video_mode_needs_motion(self):
        make_project(self.tmp, SHOT.replace('  motion: "She walks two steps, stops and looks up; camera static"\n', ""))
        _, rep = self.validate()
        self.assertTrue(any("generation.motion" in e for e in rep["errors"]))

    def test_costume_change_within_scene(self):
        second = SHOT.replace("SC01-SH010", "SC01-SH020").replace("CO-ANA-01, position", "CO-ANA-02, position")
        extra = {"03_characters/CO-extra.md": "```yaml\nrecord: costume\nid: CO-ANA-02\ncharacter: CH-ANA\nname: x\n"
                 "garments: [a]\nmaterials: [a]\ncolors: [a]\naccessories: []\ncondition_states: [a]\n"
                 "identity_lock: \"x\"\n```\n"}
        make_project(self.tmp, SHOT + "\n" + second, extra)
        _, rep = self.validate()
        self.assertTrue(any("costume_change" in e for e in rep["errors"]), rep["errors"])

    def test_stale_dependency_warns(self):
        make_project(self.tmp, SHOT.replace("depends_on: [screenplay@1]", "depends_on: [screenplay@0]"))
        _, rep = self.validate()
        self.assertTrue(any("STALE" in w for w in rep["warnings"]))

    def test_lock_checks_warn(self):
        make_project(self.tmp)
        path = os.path.join(self.tmp, "03_characters", "CH-ANA.md")
        text = read(path).replace(
            'identity_lock: "A 30-year-old woman with a long face, olive skin, dark eyes and a grey-streaked braid."',
            'identity_lock: "Ana, a 30-year-old woman in a navy coat."')
        write(path, text)
        _, rep = self.validate()
        joined = "\n".join(rep["warnings"])
        self.assertIn("contains the name 'Ana'", joined)
        self.assertIn("mentions garments ['coat']", joined)
        self.assertIn("identity_lock has 8 words", joined)

    def test_duplicate_id(self):
        make_project(self.tmp, SHOT + "\n" + SHOT)
        _, rep = self.validate()
        self.assertTrue(any("duplicate id" in e for e in rep["errors"]))


class AssemblerTests(unittest.TestCase):
    def test_assemble_and_revalidate(self):
        tmp = tempfile.mkdtemp()
        try:
            make_project(tmp)
            res = run(ASSEMBLE, tmp)
            self.assertEqual(res.returncode, 0, res.stderr)
            master = read(os.path.join(tmp, "08_master", "MASTER_PRODUCTION_DOCUMENT.md"))
            for needle in ("## 0. Status dashboard", "CH-ANA", "LOC-TOWER", "SC01-SH010", "## 12. Open issues"):
                self.assertIn(needle, master)
            # the assembled copy must not create duplicate-ID errors
            res = run(VALIDATE, tmp, "--json")
            self.assertEqual(json.loads(res.stdout)["errors"], [])
            # version increments on re-assembly
            run(ASSEMBLE, tmp)
            self.assertIn("version: 2", read(os.path.join(tmp, "08_master", "MASTER_PRODUCTION_DOCUMENT.md")))
        finally:
            shutil.rmtree(tmp)


class StoryboardTests(unittest.TestCase):
    def test_build_sheet_with_placeholder(self):
        tmp = tempfile.mkdtemp()
        try:
            make_project(tmp, extra={"09_storyboard/storyboard.md": textwrap.dedent("""
                ```yaml
                record: panel
                id: SB-SC01-SH010-P1
                shot: SC01-SH010
                frame_moment: start
                description: "Ana walks toward the tower"
                composition: "Ana left third, tower right"
                camera_notes: "static"
                duration_s: 4
                ```
                """)})
            res = run(STORYBOARD, tmp)
            self.assertEqual(res.returncode, 0, res.stderr)
            html = read(os.path.join(tmp, "09_storyboard", "storyboard.html"))
            self.assertIn("SC01-SH010-P1", html)
            self.assertIn("<svg", html)  # placeholder drawn when no image exists
            self.assertIn("WS · low · static", html)  # caption pulled from the shot record
        finally:
            shutil.rmtree(tmp)


class CutTests(unittest.TestCase):
    def test_edl_and_script(self):
        tmp = tempfile.mkdtemp()
        try:
            csv = os.path.join(tmp, "cutlist.csv")
            write(csv, "event,shot,file,src_in,src_out,transition,notes\n"
                       "1,SC01-SH010,a.mp4,0.5,4.5,cut,\n2,SC01-SH020,b.mp4,00:00:00:12,00:00:03:12,dissolve:12,soft\n")
            edl, sh = os.path.join(tmp, "cut.edl"), os.path.join(tmp, "assemble.sh")
            res = run(BUILD_CUT, csv, "--fps", "24", "--edl", edl, "--ffmpeg", sh)
            self.assertEqual(res.returncode, 0, res.stderr)
            text = read(edl)
            self.assertIn("001  AX       V     C        00:00:00:12 00:00:04:12 01:00:00:00 01:00:04:00", text)
            self.assertIn("002  AX       V     C        00:00:00:12 00:00:03:12 01:00:04:00 01:00:07:00", text)
            self.assertIn("TRANSITION REQUESTED: dissolve:12", text)
            self.assertIn("runtime 00:00:07:00", res.stdout)
            self.assertIn("ffmpeg -y -ss 0.500 -to 4.500", read(sh))
        finally:
            shutil.rmtree(tmp)

    def test_rejects_reversed_range(self):
        tmp = tempfile.mkdtemp()
        try:
            csv = os.path.join(tmp, "cutlist.csv")
            write(csv, "event,shot,file,src_in,src_out\n1,SC01-SH010,a.mp4,3,1\n")
            res = run(BUILD_CUT, csv)
            self.assertNotEqual(res.returncode, 0)
            self.assertIn("src_out must be after src_in", res.stderr + res.stdout)
        finally:
            shutil.rmtree(tmp)


@unittest.skipUnless(shutil.which("ffmpeg") and shutil.which("ffprobe"), "ffmpeg not installed")
class InspectMediaTests(unittest.TestCase):
    def test_inspect_generated_clip(self):
        tmp = tempfile.mkdtemp()
        try:
            clip = os.path.join(tmp, "test.mp4")
            subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "lavfi", "-i", "testsrc=size=640x360:rate=24:duration=2",
                            "-f", "lavfi", "-i", "sine=frequency=440:duration=2", "-shortest", "-c:v", "libx264",
                            "-c:a", "aac", clip], check=True)
            res = run(INSPECT, clip, "--every", "0.5", "--out", os.path.join(tmp, "qc"))
            self.assertEqual(res.returncode, 0, res.stderr)
            rep = json.loads(res.stdout)
            video = next(s for s in rep["streams"] if s["type"] == "video")
            self.assertEqual((video["width"], video["height"], video["aspect"], video["fps"]), (640, 360, "16:9", 24.0))
            self.assertGreaterEqual(len(rep["frames"]), 4)
            self.assertTrue(rep["contact_sheet"] and os.path.exists(rep["contact_sheet"]))
            self.assertIsNotNone(rep["loudness"]["integrated_lufs"])
        finally:
            shutil.rmtree(tmp)


if __name__ == "__main__":
    unittest.main()
