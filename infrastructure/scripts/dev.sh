#!/bin/bash
set -e

echo "Starting development server..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  pnpm install
fi

# Start GUI dev server
cd gui && pnpm run dev
