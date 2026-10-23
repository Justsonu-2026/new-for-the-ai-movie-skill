#!/usr/bin/env python3
"""Build the Robo Film Studio artifact page.

Embeds the film-crew skills (SKILL.md bodies, the references and templates each stage uses, and the shared
contracts) into one self-contained HTML page, so every robot in the studio runs its real skill text.

Usage: python apps/robot-studio/build.py [output.html]
"""
import base64
import gzip
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parents[1]
SKILLS = REPO / "plugins" / "film-crew" / "skills"
SHARED = REPO / "shared"
SRC = HERE / "src"
JS_ORDER = ["md.js", "data.js", "robots.js", "studio.js", "store.js", "brain.js", "world.js", "previz.js", "engine.js", "ui.js", "main.js"]


def strip_frontmatter(text):
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not m:
        return {}, text
    meta = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            meta[k.strip()] = v.strip()
    return meta, text[m.end():]


def load_skills():
    out = {}
    for d in sorted(p for p in SKILLS.iterdir() if p.is_dir()):
        meta, body = strip_frontmatter((d / "SKILL.md").read_text(encoding="utf-8"))
        files = {}
        for sub in ("references", "templates"):
            folder = d / sub
            if not folder.is_dir():
                continue
            for f in sorted(folder.glob("*.md")):
                # shared contracts are embedded once, below
                if f.name in ("crew-protocol.md", "production-schema.md", "ai-model-adapters.md"):
                    continue
                files[f"{sub}/{f.name}"] = f.read_text(encoding="utf-8")
        out[d.name] = {"description": meta.get("description", ""), "body": body.strip(), "files": files}
    return out


def main():
    target = Path(sys.argv[1]) if len(sys.argv) > 1 else HERE / "robot-studio.html"
    data = {
        "skills": load_skills(),
        "shared": {f.name: f.read_text(encoding="utf-8") for f in sorted(SHARED.glob("*.md"))},
    }
    blob = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")
    js = "\n".join((SRC / name).read_text(encoding="utf-8") for name in JS_ORDER)
    page = (SRC / "page.html").read_text(encoding="utf-8")
    page = page.replace("/*__CSS__*/", (SRC / "styles.css").read_text(encoding="utf-8"))
    page = page.replace("__SKILL_DATA__", blob)
    page = page.replace("/*__JS__*/", "(function(){\n'use strict';\n" + js + "\n})();")
    # the "take the studio home" copy: the same page as a standalone file (without a copy of itself)
    home = (
        '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1">\n</head>\n<body>\n'
        + page.replace("__HOME_COPY__", "")
        + "\n</body>\n</html>\n"
    )
    standalone = target.with_name(target.stem + "-standalone.html")
    standalone.write_text(home, encoding="utf-8")
    packed = base64.b64encode(gzip.compress(home.encode("utf-8"), 9)).decode("ascii")
    page = page.replace("__HOME_COPY__", packed)
    target.write_text(page, encoding="utf-8")
    print(f"wrote {target} ({target.stat().st_size // 1024} KB, {len(data['skills'])} skills)")


if __name__ == "__main__":
    main()
