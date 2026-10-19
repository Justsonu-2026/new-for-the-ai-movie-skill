#!/usr/bin/env python3
"""Structural lint for every skill in plugins/film-crew/skills.

Checks the Agent Skills rules from the official authoring guidance plus this repo's own contract:
  - frontmatter: only portable keys; name = folder name, <=64 chars, [a-z0-9-], no reserved words;
    description non-empty, <=1024 chars, no XML tags, third person
  - SKILL.md body under 500 lines; required sections present
  - every local link resolves; every file in references/ and templates/ is linked from SKILL.md
    (one level deep); reference files over 100 lines start with a Contents list
  - shared copies are in sync with shared/
  - evals/evals.json: valid, skill_name matches, >=3 cases, each with >=3 expectations

Usage: python tools/validate_skills.py   (exit 1 on any error)
Requires PyYAML: pip install pyyaml
"""
import json
import os
import re
import subprocess
import sys

try:
    import yaml
except ImportError:
    print("ERROR: PyYAML is required. Install it with: pip install pyyaml", file=sys.stderr)
    sys.exit(2)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKILLS_DIR = os.path.join(ROOT, "plugins", "film-crew", "skills")
PORTABLE_KEYS = {"name", "description", "license", "compatibility", "metadata", "allowed-tools"}
RESERVED = ("anthropic", "claude")
MAX_BODY_LINES = 500
TOC_THRESHOLD = 100
REQUIRED_SECTIONS = ["Inputs", "Outputs", "Workflow", "Boundaries", "Quality checks", "Failure handling"]
LINK_RE = re.compile(r"\[[^\]]*\]\(([^)#\s]+)(?:#[^)]*)?\)")


def lint_skill(skill, errors, warnings):
    sdir = os.path.join(SKILLS_DIR, skill)
    path = os.path.join(sdir, "SKILL.md")
    text = open(path, encoding="utf-8").read()
    m = re.match(r"\A---\n(.*?)\n---\n", text, re.S)
    if not m:
        errors.append(f"{skill}: SKILL.md has no YAML frontmatter")
        return
    fm = yaml.safe_load(m.group(1)) or {}
    body = text[m.end():]
    extra = set(fm) - PORTABLE_KEYS
    if extra:
        errors.append(f"{skill}: non-portable frontmatter keys {sorted(extra)}")
    name, desc = str(fm.get("name", "")), str(fm.get("description", "")).strip()
    if name != skill:
        errors.append(f"{skill}: name '{name}' does not match folder")
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", name) or len(name) > 64:
        errors.append(f"{skill}: invalid name '{name}'")
    if any(r in name for r in RESERVED):
        errors.append(f"{skill}: name contains a reserved word")
    if not desc or len(desc) > 1024:
        errors.append(f"{skill}: description length {len(desc)} (must be 1-1024)")
    if re.search(r"<[^>]+>", desc):
        errors.append(f"{skill}: description contains XML/HTML tags")
    if re.match(r"(?i)^(i |you |we |use this)", desc):
        warnings.append(f"{skill}: description should be third person ('Writes...', 'Turns...')")
    if "use when" not in desc.lower():
        warnings.append(f"{skill}: description should say when to use it ('Use when ...')")
    n = body.count("\n")
    if n >= MAX_BODY_LINES:
        errors.append(f"{skill}: SKILL.md body is {n} lines (limit {MAX_BODY_LINES})")
    headings = re.findall(r"^##\s+(.+?)\s*$", body, re.M)
    for sec in REQUIRED_SECTIONS:
        if not any(h.lower().startswith(sec.lower()) for h in headings):
            errors.append(f"{skill}: missing section '## {sec}'")
    linked = set()
    for target in LINK_RE.findall(body):
        if re.match(r"^[a-z]+://", target):
            continue
        full = os.path.normpath(os.path.join(sdir, target))
        if not os.path.exists(full):
            errors.append(f"{skill}: broken link '{target}'")
        linked.add(os.path.relpath(full, sdir))
    for sub in ("references", "templates"):
        d = os.path.join(sdir, sub)
        if not os.path.isdir(d):
            continue
        for fn in sorted(os.listdir(d)):
            rel = f"{sub}/{fn}"
            if rel not in linked:
                errors.append(f"{skill}: {rel} is not linked from SKILL.md (keep references one level deep)")
            fp = os.path.join(d, fn)
            if fn.endswith(".md"):
                lines = open(fp, encoding="utf-8").read().splitlines()
                if len(lines) > TOC_THRESHOLD and not any(l.strip().lower() in ("## contents", "## table of contents")
                                                          for l in lines[:20]):
                    errors.append(f"{skill}: {rel} has {len(lines)} lines but no '## Contents' near the top")
                for t in LINK_RE.findall("\n".join(lines)):
                    if not re.match(r"^[a-z]+://", t) and not os.path.exists(os.path.normpath(os.path.join(d, t))):
                        errors.append(f"{skill}: broken link '{t}' in {rel}")
    for scr in re.findall(r"scripts/[A-Za-z0-9_\-]+\.py", body):
        if not os.path.exists(os.path.join(sdir, scr)):
            errors.append(f"{skill}: SKILL.md mentions {scr}, which does not exist")
    ev = os.path.join(sdir, "evals", "evals.json")
    if not os.path.exists(ev):
        errors.append(f"{skill}: evals/evals.json missing")
    else:
        try:
            data = json.load(open(ev, encoding="utf-8"))
            if data.get("skill_name") != skill:
                errors.append(f"{skill}: evals skill_name '{data.get('skill_name')}' mismatch")
            cases = data.get("evals", [])
            if len(cases) < 3:
                errors.append(f"{skill}: only {len(cases)} eval cases (need >= 3)")
            for c in cases:
                if not c.get("prompt") or not c.get("expected_output") or len(c.get("expectations", [])) < 3:
                    errors.append(f"{skill}: eval {c.get('id')} needs prompt, expected_output, >=3 expectations")
        except json.JSONDecodeError as exc:
            errors.append(f"{skill}: evals.json invalid JSON: {exc}")
    return n, len(desc)


def main():
    errors, warnings, rows = [], [], []
    skills = sorted(d for d in os.listdir(SKILLS_DIR) if os.path.isdir(os.path.join(SKILLS_DIR, d)))
    for skill in skills:
        if not os.path.exists(os.path.join(SKILLS_DIR, skill, "SKILL.md")):
            errors.append(f"{skill}: no SKILL.md")
            continue
        res = lint_skill(skill, errors, warnings)
        if res:
            rows.append((skill, *res))
    for f in (".claude-plugin/marketplace.json", "plugins/film-crew/.claude-plugin/plugin.json"):
        try:
            json.load(open(os.path.join(ROOT, f), encoding="utf-8"))
        except (OSError, json.JSONDecodeError) as exc:
            errors.append(f"{f}: {exc}")
    sync = subprocess.run([sys.executable, os.path.join(ROOT, "tools", "sync_shared.py"), "--check"],
                          capture_output=True, text=True)
    if sync.returncode:
        errors.extend(sync.stdout.strip().splitlines())
    print(f"{'skill':24} {'body lines':>10} {'desc chars':>10}")
    for skill, n, d in rows:
        print(f"{skill:24} {n:>10} {d:>10}")
    for w in warnings:
        print(f"WARNING {w}")
    for e in errors:
        print(f"ERROR {e}")
    print(f"\n{len(rows)} skills, {len(errors)} error(s), {len(warnings)} warning(s)")
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
