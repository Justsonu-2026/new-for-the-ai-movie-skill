---
description: "film-editor: film-editor-edl"
runs: 1
max_turns: 30
timeout_seconds: 900
allowed_tools: [Read, Glob, Grep, Skill, Write, Edit, Bash]
---

The takes for scene SC01 are in takes/ (the list is in takes/README.md). Build the cut list for SC01 and
export an EDL and a rough-cut script into 13_edit/.
