---
type: llm
focus: { source: file, path: 13_edit/cutlist.csv }
---

PASS if the cut list has one row per SC01 shot in order, uses usable in/out points that trim the
start and end of each take rather than the full take, and total length is close to the planned scene length.
FAIL if shots are missing or out of order, or every take is used from 0 to its full length.
