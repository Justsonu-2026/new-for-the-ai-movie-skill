#!/usr/bin/env python3
"""Validate a film-crew project folder against the production schema.

Usage:
    python validate_production.py <project_dir> [--json] [--strict]

Checks record blocks (```yaml blocks whose first key is `record:`) and artifact headers
(YAML front matter) in every .md and .fountain file under <project_dir>. See
production-schema.md section 7 for the list of checks.

Exit code: 0 = no errors (warnings allowed), 1 = errors found (or warnings with --strict),
2 = could not run (bad arguments or PyYAML missing).

Requires PyYAML: pip install pyyaml
"""
import argparse
import json
import os
import re
import sys

try:
    import yaml
except ImportError:  # explicit, actionable failure instead of a traceback
    print("ERROR: PyYAML is required. Install it with: pip install pyyaml", file=sys.stderr)
    sys.exit(2)

ID_PATTERNS = {
    "character": r"CH-[A-Z0-9]+(?:-[A-Z0-9]+)*",
    "costume": r"CO-[A-Z0-9]+(?:-[A-Z0-9]+)*-\d{2}",
    "location": r"LOC-[A-Z0-9]+(?:-[A-Z0-9]+)*",
    "prop": r"PR-[A-Z0-9]+(?:-[A-Z0-9]+)*",
    "style": r"STYLE",
    "scene": r"SC\d{2}",
    "shot": r"SC\d{2}-SH\d{3}",
    "panel": r"SB-SC\d{2}-SH\d{3}-P\d+",
    "continuity": r"CONT-SC\d{2}",
    "image_prompt": r"IMG-[A-Z0-9-]+",
    "video_prompt": r"VID-SC\d{2}-SH\d{3}-\d{2}",
    "voice_line": r"VL-SC\d{2}-\d{3}",
    "music_cue": r"(?:M\d{2}|SONG-[A-Z0-9-]+)",
    "sfx_cue": r"SFX-SC\d{2}-\d{3}",
    "vfx": r"VFX-SC\d{2}-SH\d{3}",
    "qc_item": r"QC-\d{3}",
}

REQUIRED = {
    "character": ["name", "role", "age", "height_cm", "build", "identity_lock", "face", "hair", "skin",
                  "eyes", "silhouette", "distinguishing_features", "default_costume", "costumes",
                  "expression_range"],
    "costume": ["character", "name", "garments", "materials", "colors", "accessories",
                "condition_states", "identity_lock"],
    "location": ["name", "int_ext", "description", "layout", "landmarks", "light_sources", "palette",
                 "set_dressing", "identity_lock"],
    "prop": ["name", "description", "size", "materials", "colors", "states", "identity_lock"],
    "style": ["medium", "aspect_ratio", "palette", "contrast", "texture", "lighting_philosophy",
              "lens_philosophy", "style_lock", "avoid"],
    "scene": ["heading", "location", "time_of_day", "characters", "summary", "purpose", "value_change",
              "est_duration_s"],
    "shot": ["scene", "status", "version", "purpose", "screenplay_ref", "duration_s", "characters", "props",
             "location", "frame", "camera", "lighting", "screen_direction", "start_state", "end_state",
             "action_timeline", "dialogue", "sound", "music", "vfx", "transition_in", "transition_out",
             "continuity", "generation"],
    "panel": ["shot", "frame_moment", "description", "composition", "camera_notes", "duration_s"],
    "continuity": ["scene", "axis", "screen_direction", "character_states", "prop_states", "time_of_day",
                   "weather", "carry_over"],
    "image_prompt": ["target", "model", "prompt", "references", "parameters"],
    "video_prompt": ["shot", "model", "mode", "prompt", "references", "clip_length_s", "parameters"],
    "voice_line": ["shot", "character", "line", "delivery", "timing"],
    "music_cue": ["start", "end", "function", "description"],
    "sfx_cue": ["shot", "sound", "sync_point", "layer"],
    "vfx": ["shot", "problem", "method", "elements"],
    "qc_item": ["target", "check", "verdict", "evidence"],
}

SHOT_SUB_REQUIRED = {
    "frame": ["foreground", "midground", "background", "composition"],
    "camera": ["shot_size", "angle", "lens_mm", "depth_of_field", "movement", "support", "position"],
    "lighting": ["key", "palette"],
    "generation": ["mode"],
}
SHOT_CHAR_REQUIRED = ["id", "costume", "position", "facing", "action", "expression_start", "expression_end"]

SHOT_SIZES = {"EWS", "WS", "FS", "MWS", "MS", "MCU", "CU", "ECU", "INSERT", "TWO-SHOT", "OTS", "POV"}
MOVES = {"static", "pan-left", "pan-right", "tilt-up", "tilt-down", "dolly-in", "dolly-out", "push-in",
         "pull-out", "truck-left", "truck-right", "pedestal-up", "pedestal-down", "crane-up", "crane-down",
         "arc-left", "arc-right", "follow", "lead", "handheld", "zoom-in", "zoom-out", "rack-focus"}
MODES = {"text-to-image", "image-edit", "text-to-video", "image-to-video", "first-last-frame",
         "reference-to-video", "video-extend", "video-edit", "lip-sync", "text-to-speech",
         "music-generation", "sfx-generation", "none"}
VIDEO_MODES = {"text-to-video", "image-to-video", "first-last-frame", "reference-to-video", "video-extend",
               "video-edit"}
STATUSES = {"DRAFT", "REVIEW", "APPROVED", "LOCKED", "STALE", "SUPERSEDED"}
# Word limits for lock texts (production-schema section 3). Outside the range is a warning, not an error.
LOCK_WORDS = {"character": (40, 80), "costume": (25, 60), "location": (25, 60), "prop": (25, 60), "style": (30, 70)}
GARMENT_WORDS = re.compile(r"\b(apron|shirt|trousers|pants|jacket|coat|raincoat|dress|skirt|hoodie|shoes|boots|"
                           r"sneakers|hat|scarf|uniform|jeans|sweater|blouse|robe|cloak|sandals)\b", re.I)
ASPECT_RE = re.compile(r"\b\d{1,2}(?:\.\d+)?:\d{1,2}\b")
SHORT_LOCK_WORDS = (10, 25)
NEGATION_RE = re.compile(r"\b(?:no|without)\s+[a-z]+", re.I)
# Frame texts above this length dilute the prompt and may exceed tool limits (schema section 4).
MAX_FRAME_WORDS = 350
EMPTY_VALUES = {"", "tbd", "todo", "?", "none yet", "n/a?"}
MARKERS = ["MISSING:", "ASSUMPTION:", "CONFLICT:", "OPEN-QUESTION:", "PROPOSAL:"]
# Duration tolerance between a scene estimate and its shots (schema section 7, rule 6).
SCENE_DURATION_TOLERANCE = 0.25

YAML_BLOCK_RE = re.compile(r"^```ya?ml[ \t]*\n(.*?)^```[ \t]*$", re.S | re.M)
FRONT_MATTER_RE = re.compile(r"\A(?:/\*\s*\n)?---\s*\n(.*?)\n---\s*\n", re.S)
DEP_RE = re.compile(r"^(?P<name>[A-Za-z0-9_.\-]+)@(?P<ver>\d+)$")
ANY_ID_RE = re.compile(r"(?<![A-Za-z0-9-])(" + "|".join(
    ID_PATTERNS[k] for k in ["panel", "video_prompt", "vfx", "shot", "costume", "character", "location",
                             "prop", "voice_line", "sfx_cue", "continuity", "qc_item"]) + r")(?![A-Za-z0-9])")


class Report:
    def __init__(self):
        self.errors, self.warnings, self.info = [], [], []

    def err(self, where, msg):
        self.errors.append(f"{where}: {msg}")

    def warn(self, where, msg):
        self.warnings.append(f"{where}: {msg}")


def is_empty(value):
    if value is None:
        return True
    if isinstance(value, str):
        return value.strip().lower() in EMPTY_VALUES
    if isinstance(value, (list, dict)):
        return False  # an explicit empty list/dict (e.g. props: []) is a valid "none"
    return False


def walk_strings(value):
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for v in value.values():
            yield from walk_strings(v)
    elif isinstance(value, list):
        for v in value:
            yield from walk_strings(v)


def load_project(root, rep):
    records, headers, marker_counts = [], {}, {}
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if not d.startswith(".") and d != "assets"]
        for fn in sorted(filenames):
            if not fn.endswith((".md", ".fountain")):
                continue
            path = os.path.join(dirpath, fn)
            rel = os.path.relpath(path, root)
            with open(path, encoding="utf-8") as fh:
                text = fh.read()
            counts = {m: text.count(m) for m in MARKERS if text.count(m)}
            if counts:
                marker_counts[rel] = counts
            fm = FRONT_MATTER_RE.match(text)
            assembled = False
            if fm:
                try:
                    header = yaml.safe_load(fm.group(1)) or {}
                    # The assembled master document copies records from source files; skip its records
                    # so they are not counted twice.
                    assembled = isinstance(header, dict) and header.get("artifact") == "master-production-document"
                    if isinstance(header, dict) and header.get("id"):
                        if header["id"] in headers:
                            rep.err(rel, f"artifact id '{header['id']}' also used in {headers[header['id']]['file']}")
                        header["file"] = rel
                        headers[str(header["id"])] = header
                        st = header.get("status")
                        if st and st not in STATUSES:
                            rep.err(rel, f"unknown status '{st}' (use {sorted(STATUSES)})")
                except yaml.YAMLError as exc:
                    rep.err(rel, f"front matter is not valid YAML: {exc}")
            if assembled:
                continue
            for m in YAML_BLOCK_RE.finditer(text):
                body = m.group(1)
                if not body.lstrip().startswith("record:"):
                    continue
                line = text[: m.start()].count("\n") + 1
                where = f"{rel}:{line}"
                try:
                    rec = yaml.safe_load(body)
                except yaml.YAMLError as exc:
                    rep.err(where, f"record block is not valid YAML: {exc}")
                    continue
                if not isinstance(rec, dict) or "id" not in rec:
                    rep.err(where, "record block has no 'id'")
                    continue
                rec["_where"] = where
                records.append(rec)
    return records, headers, marker_counts


def check_records(records, rep):
    by_id = {}
    for rec in records:
        rtype, rid, where = rec.get("record"), str(rec.get("id")), rec["_where"]
        if rtype not in REQUIRED:
            rep.err(where, f"unknown record type '{rtype}' (known: {sorted(REQUIRED)})")
            continue
        if not re.fullmatch(ID_PATTERNS[rtype], rid):
            rep.err(where, f"id '{rid}' does not match the {rtype} pattern {ID_PATTERNS[rtype]}")
        if rid in by_id:
            rep.err(where, f"duplicate id '{rid}' (first defined at {by_id[rid]['_where']})")
            continue
        by_id[rid] = rec
        for field in REQUIRED[rtype]:
            if field not in rec or is_empty(rec[field]):
                rep.err(where, f"{rtype} {rid}: required field '{field}' is missing or empty "
                               f"(write 'MISSING: <what>' if unknown)")
        if rtype == "shot":
            check_shot(rec, rep)
        check_lock(rec, rep)
        if "status" in rec and rec["status"] not in STATUSES:
            rep.err(where, f"{rid}: unknown status '{rec['status']}'")
    return by_id


def check_lock(rec, rep):
    rtype, rid, where = rec.get("record"), rec["id"], rec["_where"]
    field = "style_lock" if rtype == "style" else "identity_lock"
    lock = rec.get(field)
    if rtype not in LOCK_WORDS or not isinstance(lock, str) or is_empty(lock):
        return
    n = len(lock.split())
    lo, hi = LOCK_WORDS[rtype]
    if not lo <= n <= hi:
        rep.warn(where, f"{rid}: {field} has {n} words (expected {lo}-{hi})")
    if rtype == "character":
        name = str(rec.get("name") or "").split()
        if name and re.search(r"\b" + re.escape(name[0]) + r"\b", lock):
            rep.warn(where, f"{rid}: identity_lock contains the name '{name[0]}' (models don't know names)")
        garments = sorted(set(m.lower() for m in GARMENT_WORDS.findall(lock)))
        if garments:
            rep.warn(where, f"{rid}: identity_lock mentions garments {garments}; move them to the costume lock")
    if rtype == "style" and ASPECT_RE.search(lock):
        rep.warn(where, f"{rid}: style_lock contains an aspect ratio; set it as a generation parameter instead")
    neg = NEGATION_RE.findall(lock)
    if neg and rtype != "style":
        rep.warn(where, f"{rid}: {field} uses negative phrasing {neg[:3]}; describe what is present instead")
    if rtype in ("character", "costume", "location", "prop"):
        short = rec.get("short_lock")
        if not isinstance(short, str) or is_empty(short):
            rep.warn(where, f"{rid}: no short_lock (10-25 words) for small or soft-focus appearances")
        elif not SHORT_LOCK_WORDS[0] <= len(short.split()) <= SHORT_LOCK_WORDS[1]:
            rep.warn(where, f"{rid}: short_lock has {len(short.split())} words (expected 10-25)")


def check_shot(rec, rep):
    rid, where = rec["id"], rec["_where"]
    if not str(rid).startswith(str(rec.get("scene", "")) + "-"):
        rep.err(where, f"shot {rid} is filed under scene '{rec.get('scene')}'")
    try:
        if float(rec.get("duration_s", 0)) <= 0:
            rep.err(where, f"shot {rid}: duration_s must be > 0")
    except (TypeError, ValueError):
        rep.err(where, f"shot {rid}: duration_s is not a number")
    for sub, fields in SHOT_SUB_REQUIRED.items():
        block = rec.get(sub)
        if not isinstance(block, dict):
            if block is not None:
                rep.err(where, f"shot {rid}: '{sub}' must be a mapping")
            continue
        for f in fields:
            if f not in block or is_empty(block[f]):
                rep.err(where, f"shot {rid}: '{sub}.{f}' is missing or empty")
    cam = rec.get("camera") or {}
    size = str(cam.get("shot_size", "")).upper()
    if size and size not in SHOT_SIZES and not size.startswith("MISSING"):
        rep.err(where, f"shot {rid}: shot_size '{cam.get('shot_size')}' not in vocabulary {sorted(SHOT_SIZES)}")
    move = str(cam.get("movement", ""))
    if move and not move.startswith("MISSING"):
        parts = [p.strip().lower() for p in move.split("+")]
        bad = [p for p in parts if p not in MOVES]
        if bad:
            rep.err(where, f"shot {rid}: movement '{move}' uses unknown term(s) {bad}")
        if len(parts) > 2:
            rep.warn(where, f"shot {rid}: {len(parts)} combined camera moves; at most two are allowed")
    gen = rec.get("generation") or {}
    for f in ("start_frame", "end_frame"):
        n = len(str(gen.get(f) or "").split())
        if n > MAX_FRAME_WORDS:
            rep.warn(where, f"shot {rid}: generation.{f} has {n} words (aim for 150-300; use short locks for "
                            f"background elements)")
    mode = str(gen.get("mode", ""))
    if mode and mode not in MODES and not mode.startswith("MISSING"):
        rep.err(where, f"shot {rid}: generation.mode '{mode}' unknown (use {sorted(MODES)})")
    if mode in VIDEO_MODES:
        for f in ("start_frame", "motion", "clip_length_s"):
            if f not in gen or is_empty(gen[f]):
                rep.err(where, f"shot {rid}: video mode '{mode}' needs generation.{f}")
        if mode == "first-last-frame" and is_empty(gen.get("end_frame")):
            rep.err(where, f"shot {rid}: first-last-frame needs generation.end_frame")
        try:
            if float(gen.get("clip_length_s", 0)) < float(rec.get("duration_s", 0)):
                rep.warn(where, f"shot {rid}: clip_length_s is shorter than duration_s (no trim handles)")
        except (TypeError, ValueError):
            pass
    beats = rec.get("action_timeline")
    if isinstance(beats, list) and len(beats) > 4:
        rep.warn(where, f"shot {rid}: {len(beats)} action beats; check the motion budget (one primary action)")
    if mode in VIDEO_MODES:
        try:
            if float(gen.get("clip_length_s", 0)) - float(rec.get("duration_s", 0)) > 1.5 and not gen.get("keep"):
                rep.warn(where, f"shot {rid}: clip is much longer than the cut; time 'motion' in clip time and "
                                f"record generation.keep")
        except (TypeError, ValueError):
            pass
    chars = rec.get("characters")
    if isinstance(chars, list):
        for i, ch in enumerate(chars):
            if not isinstance(ch, dict):
                rep.err(where, f"shot {rid}: characters[{i}] must be a mapping")
                continue
            for f in SHOT_CHAR_REQUIRED:
                if f not in ch or is_empty(ch[f]):
                    rep.err(where, f"shot {rid}: characters[{i}].{f} is missing or empty")


def check_references(by_id, rep):
    defined_types = {r.get("record") for r in by_id.values()}
    type_of_prefix = [(re.compile(r"^" + ID_PATTERNS[t] + r"$"), t) for t in
                      ["panel", "video_prompt", "vfx", "shot", "costume", "character", "location", "prop",
                       "voice_line", "sfx_cue", "continuity", "qc_item"]]
    for rid, rec in by_id.items():
        seen = set()
        for s in walk_strings({k: v for k, v in rec.items() if k not in ("id", "_where")}):
            for tok in ANY_ID_RE.findall(s):
                if tok in seen or tok == rid:
                    continue
                seen.add(tok)
                if tok in by_id:
                    continue
                ttype = next((t for rx, t in type_of_prefix if rx.match(tok)), None)
                if ttype in defined_types:
                    rep.err(rec["_where"], f"{rid} references '{tok}', which is not defined")
                else:
                    rep.warn(rec["_where"], f"{rid} references '{tok}'; no {ttype} records exist yet "
                                            f"(pending department?)")
        # prop states like PR-PARCEL:WET must exist in the prop's states list
        for s in walk_strings(rec):
            for prop_id, state in re.findall(r"(PR-[A-Z0-9-]+):([A-Z0-9_-]+)", s):
                prop = by_id.get(prop_id)
                if not prop:
                    continue
                states = [str(x.get("id", "")) if isinstance(x, dict) else str(x)
                          for x in (prop.get("states") or [])]
                if not any(st == f"{prop_id}:{state}" or st.split(":")[-1] == state for st in states):
                    rep.err(rec["_where"], f"{rid} uses prop state '{prop_id}:{state}', not listed in {prop_id}.states")


def norm(text):
    return " ".join(str(text).split()).lower()


def check_lock_presence(by_id, rep):
    """Each character, costume, prop and location in a shot must appear in its frame texts through its
    identity_lock or short_lock pasted verbatim (whitespace and case ignored) - the main consistency control."""
    for rec in by_id.values():
        if rec.get("record") != "shot":
            continue
        gen = rec.get("generation") or {}
        frames = {f: norm(gen.get(f)) for f in ("start_frame", "end_frame") if not is_empty(gen.get(f))}
        if not frames:
            continue
        wanted = []
        for ch in rec.get("characters") or []:
            if isinstance(ch, dict):
                wanted += [ch.get("id"), ch.get("costume")]
        for pr in rec.get("props") or []:
            if isinstance(pr, dict):
                wanted.append(pr.get("id"))
        loc = rec.get("location")
        if isinstance(loc, dict):
            wanted.append(loc.get("id"))
        for wid in [w for w in wanted if w in by_id]:
            target = by_id[wid]
            locks = [norm(target.get(k)) for k in ("identity_lock", "short_lock") if isinstance(target.get(k), str)]
            locks = [l for l in locks if l]
            if not locks:
                continue
            for fname, text in frames.items():
                if not any(l in text for l in locks):
                    rep.warn(rec["_where"], f"shot {rec['id']}: generation.{fname} does not contain the "
                                            f"identity_lock or short_lock of {wid} verbatim")


def check_scenes(by_id, rep):
    shots_by_scene = {}
    for rec in by_id.values():
        if rec.get("record") == "shot":
            shots_by_scene.setdefault(str(rec.get("scene")), []).append(rec)
    for sid, shots in shots_by_scene.items():
        scene = by_id.get(sid)
        total = 0.0
        for s in shots:
            try:
                total += float(s.get("duration_s", 0))
            except (TypeError, ValueError):
                pass
        if scene and scene.get("est_duration_s"):
            try:
                est = float(scene["est_duration_s"])
                if est > 0 and abs(total - est) / est > SCENE_DURATION_TOLERANCE:
                    rep.warn(scene["_where"], f"scene {sid}: shots sum to {total:.1f}s vs estimate {est:.1f}s")
            except (TypeError, ValueError):
                pass
        rep.info.append(f"scene {sid}: {len(shots)} shots, {total:.1f}s")
        # costume continuity within a scene
        costume_of = {}
        for s in sorted(shots, key=lambda r: str(r["id"])):
            for ch in s.get("characters") or []:
                if not isinstance(ch, dict):
                    continue
                cid, co = ch.get("id"), ch.get("costume")
                if cid in costume_of and co != costume_of[cid] and not s.get("costume_change"):
                    rep.err(s["_where"], f"{s['id']}: {cid} wears {co} but wore {costume_of[cid]} earlier in "
                                         f"{sid} (set costume_change: true if intended)")
                costume_of[cid] = co


def check_staleness(records, headers, rep):
    current = {k: v.get("version") for k, v in headers.items()}
    holders = [(h["file"], h) for h in headers.values()] + [(r["_where"], r) for r in records]
    for where, item in holders:
        for dep in item.get("depends_on") or []:
            m = DEP_RE.match(str(dep))
            if not m:
                rep.warn(where, f"depends_on entry '{dep}' is not 'name@version'")
                continue
            name, ver = m.group("name"), int(m.group("ver"))
            if name not in current:
                rep.warn(where, f"depends_on '{dep}': no artifact header with id '{name}' found")
            elif current[name] is not None and int(current[name]) != ver:
                rep.warn(where, f"STALE: built from {name}@{ver} but {name} is now @{current[name]}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("project_dir")
    ap.add_argument("--json", action="store_true", help="print a JSON report")
    ap.add_argument("--strict", action="store_true", help="treat warnings as errors")
    args = ap.parse_args()
    if not os.path.isdir(args.project_dir):
        print(f"ERROR: '{args.project_dir}' is not a directory", file=sys.stderr)
        sys.exit(2)
    rep = Report()
    records, headers, markers = load_project(args.project_dir, rep)
    by_id = check_records(records, rep)
    check_references(by_id, rep)
    check_lock_presence(by_id, rep)
    check_scenes(by_id, rep)
    check_staleness(records, headers, rep)
    counts = {}
    for r in by_id.values():
        counts[r.get("record")] = counts.get(r.get("record"), 0) + 1
    if args.json:
        print(json.dumps({"errors": rep.errors, "warnings": rep.warnings, "info": rep.info,
                          "record_counts": counts, "artifacts": {k: {"version": v.get("version"),
                          "status": v.get("status"), "file": v["file"]} for k, v in headers.items()},
                          "markers": markers}, indent=2))
    else:
        print(f"Records: {sum(counts.values())} {dict(sorted(counts.items()))}")
        print(f"Artifacts with headers: {len(headers)}")
        for line in rep.info:
            print(f"  {line}")
        if markers:
            print("Markers:")
            for f, c in sorted(markers.items()):
                print(f"  {f}: " + ", ".join(f"{k[:-1]}={v}" for k, v in c.items()))
        for w in rep.warnings:
            print(f"WARNING {w}")
        for e in rep.errors:
            print(f"ERROR {e}")
        print(f"\n{len(rep.errors)} error(s), {len(rep.warnings)} warning(s)")
    failed = bool(rep.errors) or (args.strict and bool(rep.warnings))
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
