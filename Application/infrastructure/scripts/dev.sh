#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/../.."
echo "Starting AI Project in development mode..."
pnpm dev
