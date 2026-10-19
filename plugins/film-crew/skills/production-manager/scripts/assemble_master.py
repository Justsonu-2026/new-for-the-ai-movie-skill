#!/usr/bin/env python3
"""Assemble 08_master/MASTER_PRODUCTION_DOCUMENT.md from a film-crew project folder.

Usage:
    python assemble_master.py <project_dir> [--out PATH]

Copies the department documents verbatim (front matter removed, headings nested under the master
sections), generates registry and breakdown tables from the record blocks, adds a status dashboard and
an open-issues list. Sections whose source does not exist yet say so explicitly.

Requires PyYAML (pip install pyyaml) and validate_production.py in the same folder.
"""
import argparse
import datetime
import glob
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import validate_production as vp  # noqa: E402  (same folder; provides parsing and checks)

MASTER_REL = os.path.join("08_master", "MASTER_PRODUCTION_DOCUMENT.md")
MARKER_LINE_RE = re.compile(r"(MISSING:|ASSUMPTION:|CONFLICT:|OPEN-QUESTION:)(.*)")


def read(path):
    with open(path, encoding="utf-8") as fh:
        return fh.read()


def strip_front_matter(text):
    m = vp.FRONT_MATTER_RE.match(text)
    if not m:
        return text
    rest = text[m.end():]
    if text.startswith("/*"):  # fountain header lives inside a leading boneyard comment
        rest = rest.split("*/", 1)[-1] if "*/" in rest[:200] else rest
    return rest


def nest_headings(text, levels):
    """Push every Markdown heading down by `levels`, ignoring fenced code blocks."""
    out, fenced = [], False
    for line in text.splitlines():
        if line.lstrip().startswith("```"):
            fenced = not fenced
        if not fenced and re.match(r"^#{1,6} ", line):
            line = "#" * levels + line
        out.append(line)
    return "\n".join(out).strip() + "\n"


def include(root, rel, levels, missing_note):
    path = os.path.join(root, rel)
    if not os.path.exists(path):
        return f"_Not produced yet: `{rel}` — {missing_note}._\n"
    body = strip_front_matter(read(path))
    if rel.endswith(".fountain"):
        return f"Source: `{rel}`\n\n```fountain\n{body.strip()}\n```\n"
    return f"Source: `{rel}`\n\n" + nest_headings(body, levels)


def cell(value, limit=None):
    s = " ".join(str(value).split()) if value is not None else ""
    if limit and len(s) > limit:
        s = s[: limit - 1] + "…"
    return s.replace("|", "\\|")


def table(headers, rows):
    lines = ["| " + " | ".join(headers) + " |", "|" + "---|" * len(headers)]
    lines += ["| " + " | ".join(cell(c) for c in r) + " |" for r in rows]
    return "\n".join(lines) + "\n"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("project_dir")
    ap.add_argument("--out", default=None)
    args = ap.parse_args()
    root = args.project_dir
    if not os.path.isdir(root):
        print(f"ERROR: '{root}' is not a directory", file=sys.stderr)
        sys.exit(2)

    rep = vp.Report()
    records, headers, markers = vp.load_project(root, rep)
    by_id = vp.check_records(records, rep)
    vp.check_references(by_id, rep)
    vp.check_scenes(by_id, rep)
    vp.check_staleness(records, headers, rep)
    of_type = lambda t: [r for r in by_id.values() if r.get("record") == t]  # noqa: E731
    scenes = sorted(of_type("scene"), key=lambda r: str(r["id"]))
    shots = sorted(of_type("shot"), key=lambda r: str(r["id"]))

    out = []
    title = "Untitled"
    brief_path = os.path.join(root, "00_brief.md")
    if os.path.exists(brief_path):
        m = re.search(r"^# Brief: (.+)$", read(brief_path), re.M)
        title = m.group(1).strip() if m else title
    deps = sorted(f"{k}@{v.get('version')}" for k, v in headers.items()
                  if v.get("artifact") != "master-production-document")
    master_path = args.out or os.path.join(root, MASTER_REL)
    prev_version = 0
    if os.path.exists(master_path):
        fm = vp.FRONT_MATTER_RE.match(read(master_path))
        if fm:
            prev = vp.yaml.safe_load(fm.group(1)) or {}
            prev_version = int(prev.get("version") or 0)
    status = "REVIEW" if not rep.errors else "DRAFT"
    out.append("---\nartifact: master-production-document\nid: master\n"
               f"version: {prev_version + 1}\nstatus: {status}\nowner: production-manager\n"
               f"depends_on: [{', '.join(deps)}]\nupdated: {datetime.date.today().isoformat()}\n---\n")
    out.append(f"# Master Production Document: {title}\n")
    out.append("> Assembled by `assemble_master.py`. Edit the source documents, not this file, then re-assemble.\n")

    # 0 dashboard
    out.append("## 0. Status dashboard\n")
    out.append(table(["Artifact", "Version", "Status", "Owner", "File"],
                     [(k, v.get("version"), v.get("status"), v.get("owner"), v["file"])
                      for k, v in sorted(headers.items()) if v.get("artifact") != "master-production-document"]))
    total = sum(float(s.get("duration_s") or 0) for s in shots)
    out.append(f"\nValidator: **{len(rep.errors)} error(s), {len(rep.warnings)} warning(s)**. "
               f"Scenes: {len(scenes)}. Shots: {len(shots)}. Planned runtime: {total:.1f} s.\n")
    if rep.errors:
        out.append("\n<details><summary>Validator errors</summary>\n\n" +
                   "\n".join(f"- {e}" for e in rep.errors) + "\n\n</details>\n")

    # 1-3
    out.append("\n## 1. Project specs\n")
    out.append(include(root, "00_brief.md", 2, "production-manager writes the brief first"))
    out.append("\n## 2. Story\n")
    out.append(include(root, "01_story/story.md", 2, "story-writer"))
    out.append("\n## 3. Screenplay\n")
    sp = headers.get("screenplay")
    out.append(f"Screenplay version: **{sp.get('version')} ({sp.get('status')})**, file `{sp['file']}`.\n\n"
               if sp else "_No screenplay header found._\n\n")
    out.append(table(["Scene", "Heading", "Purpose", "Value change", "Est. s"],
                     [(s["id"], s.get("heading"), s.get("purpose"), s.get("value_change"), s.get("est_duration_s"))
                      for s in scenes]))
    out.append("\n### 3.1 Full screenplay text\n")
    out.append(include(root, "02_screenplay/screenplay.fountain", 3, "screenwriter"))

    # 4 registries
    out.append("\n## 4. Registries\n### 4.1 Characters\n")
    out.append(table(["ID", "Name", "Role", "Age", "Height cm", "Identity lock"],
                     [(c["id"], c.get("name"), c.get("role"), c.get("age"), c.get("height_cm"), c.get("identity_lock"))
                      for c in sorted(of_type("character"), key=lambda r: r["id"])]))
    out.append("\n### 4.2 Costumes\n")
    out.append(table(["ID", "Character", "Name", "Lock"],
                     [(c["id"], c.get("character"), c.get("name"), c.get("identity_lock"))
                      for c in sorted(of_type("costume"), key=lambda r: r["id"])]))
    out.append("\n### 4.3 Locations\n")
    out.append(table(["ID", "Name", "INT/EXT", "Lock"],
                     [(c["id"], c.get("name"), c.get("int_ext"), c.get("identity_lock"))
                      for c in sorted(of_type("location"), key=lambda r: r["id"])]))
    out.append("\n### 4.4 Props\n")
    out.append(table(["ID", "Name", "States", "Lock"],
                     [(c["id"], c.get("name"),
                       ", ".join(str(s.get("id", s)) if isinstance(s, dict) else str(s) for s in c.get("states") or []),
                       c.get("identity_lock")) for c in sorted(of_type("prop"), key=lambda r: r["id"])]))
    out.append("\n### 4.5 Style\n")
    for s in of_type("style"):
        out.append(f"**Style lock:** {cell(s.get('style_lock'))}\n\n**Aspect ratio:** {s.get('aspect_ratio')}\n")
    out.append("\n### 4.6 Full design documents\n")
    for pattern, note in (("03_characters/*.md", "character-designer"), ("04_world/*.md", "production-designer"),
                          ("05_look/style_bible.md", "visual-style-designer")):
        files = sorted(glob.glob(os.path.join(root, pattern)))
        if not files:
            out.append(f"_Not produced yet: `{pattern}` — {note}._\n")
        for f in files:
            out.append("\n" + include(root, os.path.relpath(f, root), 3, note))

    # 5 breakdown
    out.append("\n## 5. Scene breakdown\n")
    rows = []
    for sc in scenes:
        sc_shots = [s for s in shots if s.get("scene") == sc["id"]]
        chars, costumes, props, vfx = set(), set(), set(), 0
        for s in sc_shots:
            for ch in s.get("characters") or []:
                if isinstance(ch, dict):
                    chars.add(str(ch.get("id")))
                    costumes.add(str(ch.get("costume")))
            for p in s.get("props") or []:
                if isinstance(p, dict):
                    props.add(str(p.get("state") or p.get("id")))
            vfx += 0 if str(s.get("vfx", "none")).lower() == "none" else 1
        planned = sum(float(s.get("duration_s") or 0) for s in sc_shots)
        rows.append((sc["id"], sc.get("heading"), sc.get("time_of_day"), ", ".join(sorted(chars)) or sc.get("characters"),
                     ", ".join(sorted(costumes)), ", ".join(sorted(props)), sc.get("est_duration_s"),
                     f"{planned:.1f}", len(sc_shots), vfx))
    out.append(table(["Scene", "Heading", "Time", "Characters", "Costumes", "Props (state)", "Est. s",
                      "Planned s", "Shots", "VFX"], rows))

    # 6 scenes
    out.append("\n## 6. Scenes\n")
    for sc in scenes:
        sid = sc["id"]
        out.append(f"\n### {sid} — {cell(sc.get('heading'))}\n")
        out.append("\n#### Direction\n" + include(root, f"06_direction/{sid}_direction.md", 4, "film-director"))
        for kind in ("action", "animation"):
            p = f"06_direction/{sid}_{kind}.md"
            if os.path.exists(os.path.join(root, p)):
                out.append(f"\n#### {kind.title()} plan\n" + include(root, p, 4, f"{kind}-director"))
        out.append("\n#### Camera and lighting\n" + include(root, f"07_camera/{sid}_camera.md", 4, "cinematographer"))
        cont = by_id.get(f"CONT-{sid}")
        out.append("\n#### Continuity\n" + (f"See `CONT-{sid}` in section 11.\n" if cont else
                                             "_No continuity record yet — script-supervisor._\n"))
        out.append("\n#### Shot records\n" + include(root, f"08_master/shots/{sid}.md", 4, "production-manager compiles shots"))

    # 7-11
    out.append("\n## 7. Generation plan\n")
    out.append(include(root, "10_prompts/images.md", 2, "image-prompt-engineer"))
    out.append("\n" + include(root, "10_prompts/video.md", 2, "video-prompt-engineer"))
    out.append("\n## 8. Storyboard\n" + include(root, "09_storyboard/storyboard.md", 2, "storyboard-artist"))
    out.append("\n## 9. Audio\n")
    for rel, who in (("11_sound/voice.md", "voice-director"), ("11_sound/music.md", "music-director"),
                     ("11_sound/sfx.md", "sound-designer")):
        out.append("\n" + include(root, rel, 2, who))
    out.append("\n## 10. VFX and edit\n")
    out.append(include(root, "12_vfx/vfx_plan.md", 2, "vfx-supervisor"))
    out.append("\n" + include(root, "13_edit/edit_plan.md", 2, "film-editor"))
    out.append("\n## 11. Continuity tracker\n" + include(root, "07_camera/continuity.md", 2, "script-supervisor"))

    # 12 open issues
    out.append("\n## 12. Open issues\n")
    issues = []
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if not d.startswith(".") and d != "assets"]
        for fn in sorted(filenames):
            p = os.path.join(dirpath, fn)
            rel = os.path.relpath(p, root)
            if not fn.endswith((".md", ".fountain")) or rel == MASTER_REL:
                continue
            for i, line in enumerate(read(p).splitlines(), 1):
                m = MARKER_LINE_RE.search(line)
                if m:
                    issues.append((f"{rel}:{i}", m.group(1)[:-1], m.group(2).strip()))
    out.append(table(["Where", "Marker", "Text"], issues) if issues else "No open markers.\n")

    os.makedirs(os.path.dirname(master_path), exist_ok=True)
    with open(master_path, "w", encoding="utf-8") as fh:
        fh.write("\n".join(out))
    print(f"Wrote {master_path}: {len(scenes)} scenes, {len(shots)} shots, {len(issues)} open markers, "
          f"validator {len(rep.errors)} error(s) / {len(rep.warnings)} warning(s)")


if __name__ == "__main__":
    main()
