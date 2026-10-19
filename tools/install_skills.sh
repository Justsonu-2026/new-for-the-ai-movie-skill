#!/bin/sh
# Copy the film-crew skills into a Claude Code skills folder (alternative to installing the plugin).
#
# Usage:
#   tools/install_skills.sh personal            # -> ~/.claude/skills/<skill>/   (all your projects)
#   tools/install_skills.sh project <repo_dir>  # -> <repo_dir>/.claude/skills/<skill>/ (one repository)
#   add --only "story-writer screenwriter" to install a subset
#
# Existing skill folders with the same name are NOT overwritten unless --force is given.
set -eu
SRC=$(cd "$(dirname "$0")/.." && pwd)/plugins/film-crew/skills
MODE=${1:-}; shift || true
case "$MODE" in
  personal) DEST="$HOME/.claude/skills" ;;
  project) DEST="$(cd "${1:?project dir required}" && pwd)/.claude/skills"; shift ;;
  *) echo "usage: $0 personal|project <dir> [--only \"a b\"] [--force]"; exit 2 ;;
esac
ONLY=""; FORCE=0
while [ $# -gt 0 ]; do
  case "$1" in
    --only) ONLY=$2; shift 2 ;;
    --force) FORCE=1; shift ;;
    *) echo "unknown option $1"; exit 2 ;;
  esac
done
mkdir -p "$DEST"
for dir in "$SRC"/*/; do
  name=$(basename "$dir")
  if [ -n "$ONLY" ] && ! echo " $ONLY " | grep -q " $name "; then continue; fi
  if [ -e "$DEST/$name" ] && [ "$FORCE" -ne 1 ]; then
    echo "skip   $name (exists in $DEST; use --force to replace)"; continue
  fi
  rm -rf "$DEST/$name"; cp -R "$dir" "$DEST/$name"; echo "copied $name -> $DEST/$name"
done
echo "Done. Restart Claude Code or start a new session to load the skills."
