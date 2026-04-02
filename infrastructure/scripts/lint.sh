#!/bin/bash
set -e

echo "Running linters..."

# Lint root
echo "Linting root..."
pnpm run lint

echo "Linting completed successfully!"
