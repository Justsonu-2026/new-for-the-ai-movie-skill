---
type: llm
---

PASS if the reply gives a start-frame and an end-frame prompt, each pasting the character's and
location's fixed lock text verbatim from the project files, listing at most 3 reference images each with
a stated role, and describing only what the shot record specifies (no added props, people or weather).
FAIL if locks are paraphrased, references exceed 3 or lack roles, or content not in the shot record is added.
