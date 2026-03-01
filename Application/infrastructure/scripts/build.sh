#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/../.."
echo "Building AI Project..."
pnpm build
echo "Build complete."
