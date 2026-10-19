#!/usr/bin/env python3
"""Build a printable HTML storyboard sheet from panel records.

Usage:
    python build_storyboard.py <project_dir> [--per-row 3] [--scene SC02] [--out PATH]

Reads `record: panel` blocks from 09_storyboard/storyboard.md, shot records from 08_master/shots/*.md
(for size/angle/movement captions) and the style record (aspect ratio). For each panel it uses the
highest-version image at assets/storyboard/<PANEL_ID>_v<N>.(png|jpg|jpeg|webp) if one exists, else the
panel's `image` field, else draws a placeholder frame with a rule-of-thirds grid and the composition text.
Writes 09_storyboard/storyboard.html (open in a browser; print to PDF).

Requires PyYAML: pip install pyyaml
"""
import argparse
import glob
import html
import os
import re
import sys

try:
    import yaml
except ImportError:
    print("ERROR: PyYAML is required. Install it with: pip install pyyaml", file=sys.stderr)
    sys.exit(2)

BLOCK_RE = re.compile(r"^```ya?ml[ \t]*\n(.*?)^```[ \t]*$", re.S | re.M)
VERSION_RE = re.compile(r"_v(\d+)\.(?:png|jpe?g|webp)$", re.I)
DEFAULT_ASPECT = "16:9"
MOVE_GLYPHS = [("PUSH", "⇲ push in"), ("PULL", "⇱ pull out"), ("PAN L", "← pan L"), ("PAN R", "→ pan R"),
               ("TILT U", "↑ tilt up"), ("TILT D", "↓ tilt down"), ("TRUCK L", "⇐ truck L"),
               ("TRUCK R", "⇒ truck R"), ("CRANE UP", "⤒ crane up"), ("CRANE DOWN", "⤓ crane down"),
               ("ARC", "↻ arc"), ("FOLLOW", "⇢ follow"), ("HANDHELD", "≈ handheld")]


def records(path, kind):
    if not os.path.exists(path):
        return []
    text = open(path, encoding="utf-8").read()
    out = []
    for m in BLOCK_RE.finditer(text):
        body = m.group(1)
        if not body.lstrip().startswith("record:"):
            continue
        try:
            rec = yaml.safe_load(body)
        except yaml.YAMLError as exc:
            print(f"WARNING: skipped unparseable block in {path}: {exc}", file=sys.stderr)
            continue
        if isinstance(rec, dict) and rec.get("record") == kind:
            out.append(rec)
    return out


def aspect_of(root):
    for f in glob.glob(os.path.join(root, "05_look", "*.md")):
        for rec in records(f, "style"):
            if rec.get("aspect_ratio"):
                return str(rec["aspect_ratio"])
    return DEFAULT_ASPECT


def ratio(aspect):
    try:
        w, h = (float(x) for x in aspect.split(":"))
        return h / w
    except ValueError:
        return 9 / 16


def best_image(root, panel):
    cands = glob.glob(os.path.join(root, "assets", "storyboard", f"{panel['id']}_v*.*"))
    cands = [c for c in cands if VERSION_RE.search(c)]
    if cands:
        best = max(cands, key=lambda c: int(VERSION_RE.search(c).group(1)))
        return os.path.relpath(best, os.path.join(root, "09_storyboard"))
    img = panel.get("image")
    if img and os.path.exists(os.path.join(root, img)):
        return os.path.relpath(os.path.join(root, img), os.path.join(root, "09_storyboard"))
    return None


def placeholder_svg(panel, aspect):
    w, h = 320, round(320 * ratio(aspect))
    words = html.escape(str(panel.get("composition") or panel.get("description") or "")).split()
    lines, cur = [], ""
    for wd in words:
        if len(cur) + len(wd) > 46:
            lines.append(cur)
            cur = wd
        else:
            cur = f"{cur} {wd}".strip()
    if cur:
        lines.append(cur)
    max_lines = max(1, (h - 30) // 13)
    text = "".join(f'<tspan x="8" dy="13">{l}</tspan>' for l in lines[:max_lines])
    notes = str(panel.get("camera_notes", "")).upper()
    glyph = next((g for key, g in MOVE_GLYPHS if key in notes), "")
    return (f'<svg viewBox="0 0 {w} {h}" class="ph" role="img" aria-label="placeholder panel">'
            f'<rect x="0.5" y="0.5" width="{w-1}" height="{h-1}" fill="#f4f4f2" stroke="#222"/>'
            f'<g stroke="#bbb" stroke-dasharray="3 3"><line x1="{w/3}" y1="0" x2="{w/3}" y2="{h}"/>'
            f'<line x1="{2*w/3}" y1="0" x2="{2*w/3}" y2="{h}"/><line x1="0" y1="{h/3}" x2="{w}" y2="{h/3}"/>'
            f'<line x1="0" y1="{2*h/3}" x2="{w}" y2="{h*2/3}"/></g>'
            f'<text font-size="10.5" fill="#333" font-family="sans-serif">{text}</text>'
            f'<text x="{w-8}" y="{h-8}" text-anchor="end" font-size="13" fill="#b33" '
            f'font-family="sans-serif">{html.escape(glyph)}</text></svg>')


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("project_dir")
    ap.add_argument("--per-row", type=int, default=3)
    ap.add_argument("--scene", default=None, help="only this scene, e.g. SC02")
    ap.add_argument("--out", default=None)
    args = ap.parse_args()
    root = args.project_dir
    sb_path = os.path.join(root, "09_storyboard", "storyboard.md")
    panels = records(sb_path, "panel")
    if not panels:
        print(f"ERROR: no panel records found in {sb_path}", file=sys.stderr)
        sys.exit(1)
    shots = {}
    for f in glob.glob(os.path.join(root, "08_master", "shots", "*.md")):
        for s in records(f, "shot"):
            shots[str(s.get("id"))] = s
    aspect = aspect_of(root)
    title = os.path.basename(os.path.abspath(root))
    by_scene = {}
    for p in sorted(panels, key=lambda r: str(r.get("id"))):
        scene = str(p.get("shot", ""))[:4]
        if args.scene and scene != args.scene:
            continue
        by_scene.setdefault(scene, []).append(p)
    missing_images = 0
    parts = [f"""<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Storyboard — {html.escape(title)}</title>
<style>
body{{font-family:system-ui,sans-serif;margin:16px;color:#111;background:#fff}}
h1{{font-size:20px}} h2{{font-size:16px;margin-top:28px;border-bottom:1px solid #222;page-break-before:auto}}
.grid{{display:grid;grid-template-columns:repeat({args.per_row},minmax(0,1fr));gap:14px}}
.panel{{border:1px solid #222;padding:6px;break-inside:avoid}}
.panel img,.panel svg{{width:100%;height:auto;display:block;aspect-ratio:{aspect.replace(':', '/')};object-fit:cover;background:#eee}}
.id{{font-weight:700;font-size:12px;margin-top:4px}} .meta{{font-size:11px;color:#444}}
.cap{{font-size:12px;margin-top:3px}} .dlg{{font-size:12px;font-style:italic}}
@media (max-width:700px){{.grid{{grid-template-columns:1fr}}}}
@media print{{h2{{page-break-before:always}} h2:first-of-type{{page-break-before:avoid}}}}
</style></head><body>
<h1>Storyboard — {html.escape(title)} <span class="meta">({aspect}, {len(panels)} panels)</span></h1>"""]
    for scene, items in by_scene.items():
        parts.append(f"<h2>{html.escape(scene)}</h2><div class='grid'>")
        for p in items:
            shot = shots.get(str(p.get("shot")), {})
            cam = shot.get("camera") or {}
            img = best_image(root, p)
            if img:
                visual = f'<img src="{html.escape(img)}" alt="{html.escape(str(p.get("description", "")))}">'
            else:
                missing_images += 1
                visual = placeholder_svg(p, aspect)
            meta = " · ".join(str(x) for x in (cam.get("shot_size"), cam.get("angle"), cam.get("movement"),
                                               f"{p.get('duration_s', '?')} s") if x)
            pid = str(p.get("id", "")).replace("SB-", "")
            parts.append(
                f"<div class='panel'>{visual}<div class='id'>{html.escape(pid)} "
                f"<span class='meta'>({html.escape(str(p.get('frame_moment', '')))})</span></div>"
                f"<div class='meta'>{html.escape(meta)}</div>"
                f"<div class='cap'>{html.escape(str(p.get('description', '')))}</div>"
                f"<div class='meta'>{html.escape(str(p.get('camera_notes', '')))}</div>"
                + (f"<div class='dlg'>{html.escape(str(p['dialogue']))}</div>" if p.get("dialogue") else "")
                + (f"<div class='meta'>SFX: {html.escape(str(p['sound']))}</div>" if p.get("sound") else "")
                + (f"<div class='meta'>→ {html.escape(str(p['transition_out']))}</div>" if p.get("transition_out") else "")
                + "</div>")
        parts.append("</div>")
    parts.append("</body></html>")
    out = args.out or os.path.join(root, "09_storyboard", "storyboard.html")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as fh:
        fh.write("\n".join(parts))
    shown = sum(len(v) for v in by_scene.values())
    print(f"Wrote {out}: {shown} panels in {len(by_scene)} scene(s); {missing_images} placeholder(s)")


if __name__ == "__main__":
    main()
