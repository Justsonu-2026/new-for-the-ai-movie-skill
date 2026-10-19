---
artifact: continuity
id: continuity
version: 1
status: DRAFT
owner: script-supervisor
depends_on: [screenplay@N, SC01_direction@N, SC01_camera@N]
updated: YYYY-MM-DD
---
# Continuity Bible

## Story timeline
| Scene | Story day | Time of day | Elapsed since previous | Weather |
|---|---|---|---|---|

## State changes
| Item | From → to | Cause | Starts at shot |
|---|---|---|---|

## Scene records

```yaml
record: continuity
id: CONT-SC01
scene: SC01
axis: "<line between A and B / direction of travel>; camera on <side>"
screen_direction: "<who faces/travels which way>; exits <side>"
character_states:
  - {id: CH-<SLUG>, costume: CO-<SLUG>-01, costume_state: "", hair: "", injuries: "", props_carried: "", end_position: ""}
prop_states:
  - {id: PR-<SLUG>, state: "PR-<SLUG>:BASE", location: ""}
time_of_day: night
weather: ""
carry_over: "from previous scene: ..."
```

## Coverage map
| Screenplay element (scene, beat/line) | Covered by shots | Note |
|---|---|---|

## Continuity report
| ID | Severity | Where | Issue | Sources | Owner | Status |
|---|---|---|---|---|---|---|

## Handoff
- Produced:
- BLOCKER/MAJOR/MINOR:
- Next:
