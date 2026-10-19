---
artifact: scene-index
id: screenplay              # one version number for screenplay.fountain and this index
version: 1
status: REVIEW
owner: screenwriter
depends_on: [story@1, brief@1]
updated: YYYY-MM-DD
---
# Scene Index: <title>

Screenplay file: `02_screenplay/screenplay.fountain` — version 1 (this header).
Estimated runtime: <n> s (target <n> s). Scenes: <n>.

## Diagnosis of the source
- Works (protected): ...
- Problems fixed: ...

## Changes from source
| Element | Decision (keep/cut/merge/add/change) | Reason | Impact |
|---|---|---|---|

## Scenes

```yaml
record: scene
id: SC01
heading: "EXT. ROOFTOP - NIGHT"
location: LOC-ROOFTOP            # proposed ID; production-designer adopts or renames via CR
time_of_day: night
characters: [CH-MAYA]
summary: "Maya ..."
purpose: "Establishes ..."
value_change: "safe -> hunted"
est_duration_s: 20
scene_card:
  who_speaks: "Maya (one line); Owen silent"
  what_happens: "..."
  audience_sees: "...; key image: ..."
  audience_learns_or_feels: "..."
  production_flags: ["VFX: readable sign", "fine hand action: lock picking 2 s"]
```

## Handoff
- Produced: screenplay@1 (REVIEW): <n> scenes, ~<n> s
- Built from: story@1
- Proposals awaiting approval: ...
- For designers: new characters ..., locations ..., props with state changes ...
- Next: character-designer, production-designer, visual-style-designer
