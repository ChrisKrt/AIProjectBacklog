#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/../.."
echo "Linting..."
pnpm lint
echo "Lint complete."
