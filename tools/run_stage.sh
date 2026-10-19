#!/bin/sh
# Run one pipeline stage in a fresh headless Claude Code session with only the film-crew plugin loaded.
#
# Usage: tools/run_stage.sh <project_dir> <log_name> <model> <max_budget_usd> "<prompt>"
#
# Writes <project_dir>/../logs/<log_name>.jsonl (stream-json transcript) and prints the final result,
# cost, turns and which skills were invoked. Used for the end-to-end tests in docs/TEST-RESULTS.md.
set -eu
PROJECT=$1; NAME=$2; MODEL=$3; BUDGET=$4; PROMPT=$5
REPO=$(cd "$(dirname "$0")/.." && pwd)
LOGDIR=$(cd "$PROJECT/.." && pwd)/logs
mkdir -p "$LOGDIR"
cd "$PROJECT"
claude -p "$PROMPT" \
  --plugin-dir "$REPO/plugins/film-crew" \
  --model "$MODEL" \
  --max-budget-usd "$BUDGET" \
  --no-session-persistence \
  --permission-mode acceptEdits \
  --allowedTools "Read,Write,Edit,Glob,Grep,Bash,Skill" \
  --output-format stream-json --verbose > "$LOGDIR/$NAME.jsonl" 2> "$LOGDIR/$NAME.err" || true
python3 - "$LOGDIR/$NAME.jsonl" <<'EOF'
import json, sys
skills, result = [], None
for line in open(sys.argv[1], encoding="utf-8"):
    try:
        ev = json.loads(line)
    except json.JSONDecodeError:
        continue
    if ev.get("type") == "assistant":
        for c in ev.get("message", {}).get("content", []):
            if c.get("type") == "tool_use" and c.get("name") == "Skill":
                skills.append(c.get("input", {}).get("skill"))
    if ev.get("type") == "result":
        result = ev
print("skills invoked:", skills)
if result:
    print("turns:", result.get("num_turns"), "cost_usd:", round(result.get("total_cost_usd", 0), 3),
          "duration_s:", round(result.get("duration_ms", 0) / 1000), "subtype:", result.get("subtype"))
    print("---- final message ----")
    print((result.get("result") or "")[-3000:])
else:
    print("no result event; see .err log")
EOF
