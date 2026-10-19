#!/usr/bin/env python3
"""Copy canonical shared files into each skill so every skill works when installed alone.

Usage:
    python tools/sync_shared.py          # write copies
    python tools/sync_shared.py --check  # exit 1 if any copy differs (used by validate_skills.py and CI)

Edit files in shared/, never the copies inside skills/. The mapping lives in MANIFEST below.
"""
import argparse
import filecmp
import os
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKILLS_DIR = os.path.join(ROOT, "plugins", "film-crew", "skills")

ALL = "__all__"
# canonical file (relative to shared/) -> (destination inside each skill, list of skills or ALL)
MANIFEST = [
    ("crew-protocol.md", "references/crew-protocol.md", ALL),
    ("production-schema.md", "references/production-schema.md", ALL),
    ("ai-model-adapters.md", "references/ai-model-adapters.md",
     ["image-prompt-engineer", "video-prompt-engineer", "storyboard-artist", "quality-control"]),
    ("scripts/validate_production.py", "scripts/validate_production.py",
     ["production-manager", "script-supervisor", "quality-control"]),
]


def targets():
    skills = sorted(d for d in os.listdir(SKILLS_DIR) if os.path.isfile(os.path.join(SKILLS_DIR, d, "SKILL.md")))
    for src, dest, who in MANIFEST:
        for skill in (skills if who == ALL else who):
            yield os.path.join(ROOT, "shared", src), os.path.join(SKILLS_DIR, skill, dest)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()
    stale = []
    for src, dst in targets():
        if args.check:
            if not os.path.exists(dst) or not filecmp.cmp(src, dst, shallow=False):
                stale.append(os.path.relpath(dst, ROOT))
        else:
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            shutil.copyfile(src, dst)
            if dst.endswith(".py"):
                os.chmod(dst, 0o755)
    if args.check:
        for s in stale:
            print(f"OUT OF SYNC: {s} (run python tools/sync_shared.py)")
        sys.exit(1 if stale else 0)
    print("shared files synced")


if __name__ == "__main__":
    main()
