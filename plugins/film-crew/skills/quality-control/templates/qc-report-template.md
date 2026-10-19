---
artifact: qc-report
id: QC_<stage>_<YYYYMMDD>
version: 1
status: REVIEW
owner: quality-control
depends_on: [master@N]
updated: YYYY-MM-DD
---
# QC Report — <stage> — <date>

## Summary
| PASS | FIX | REDO | NOT-VERIFIABLE | Blockers |
|---|---|---|---|---|

Stage verdict: PASS / NOT PASSED. Next action: ...
Coverage: <files inspected; frames every n s; validator run yes/no>

## Blockers
- QC-0NN ...

## Findings

```yaml
record: qc_item
id: QC-001
target: "assets/keyframes/SC01-SH010_start_v1.png"
check: "identity vs CH-<SLUG> turnaround v1"
verdict: FIX
severity: MAJOR
evidence: "scar appears on the RIGHT eyebrow (image left side of face); sheet has LEFT"
spec: "CH-<SLUG>@N distinguishing_features"
owner: image-prompt-engineer
repair: "edit: keep everything, move the scar to her LEFT eyebrow"
```

## Technical measurements
| File | Duration | Resolution | Aspect | FPS | LUFS | True peak |
|---|---|---|---|---|---|---|

## Handoff
- Stage verdict:
- Owners to act:
