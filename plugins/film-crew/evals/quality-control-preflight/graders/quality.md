---
type: llm
---

PASS if the reply reports the specific defects in the shot records (it must mention the shot whose
end state is missing and the undefined prop state), says generation is blocked until they are fixed,
and names who should fix each.
FAIL if it says the production is ready, or misses either defect.
