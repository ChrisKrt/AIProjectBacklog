#!/bin/bash
set -e

echo "Building OneBookshelf..."

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Build shared package
echo "Building shared package..."
cd shared && pnpm run build && cd ..

# Build GUI
echo "Building GUI..."
cd gui && pnpm run build && cd ..

echo "Build completed successfully!"
