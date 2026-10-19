#!/usr/bin/env python3
"""Zip each skill for upload to claude.ai (Settings > Capabilities > Skills) or the Skills API.

Usage: python tools/package_skills.py [--out dist] [--include-evals]

Each zip contains one top-level folder named after the skill with SKILL.md, references/, templates/
and scripts/. evals/ is left out unless --include-evals is given. The frontmatter of every skill uses only
`name` and `description`, which both upload targets accept.
"""
import argparse
import os
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKILLS = os.path.join(ROOT, "plugins", "film-crew", "skills")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=os.path.join(ROOT, "dist"))
    ap.add_argument("--include-evals", action="store_true")
    args = ap.parse_args()
    os.makedirs(args.out, exist_ok=True)
    for skill in sorted(os.listdir(SKILLS)):
        base = os.path.join(SKILLS, skill)
        if not os.path.isfile(os.path.join(base, "SKILL.md")):
            continue
        path = os.path.join(args.out, f"{skill}.zip")
        with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as zf:
            for dirpath, dirnames, filenames in os.walk(base):
                dirnames[:] = [d for d in dirnames if d != "__pycache__" and (args.include_evals or d != "evals")]
                for fn in filenames:
                    full = os.path.join(dirpath, fn)
                    zf.write(full, os.path.join(skill, os.path.relpath(full, base)))
        print(f"wrote {path}")


if __name__ == "__main__":
    main()
