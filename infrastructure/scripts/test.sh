#!/bin/bash
set -e

echo "Running tests..."

# Run shared tests
echo "Testing shared package..."
cd shared && pnpm run test && cd ..

# Run GUI tests
echo "Testing GUI..."
cd gui && pnpm run test && cd ..

echo "All tests passed!"
