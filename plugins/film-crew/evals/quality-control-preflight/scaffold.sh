set -eu
HERE="$(cd "$(dirname "$0")" && pwd)"
cp -R "$HERE/../_fixtures/base/." .
if [ -d "$HERE/fixture" ]; then cp -R "$HERE/fixture/." .; fi
