# AI Project

A Progressive Web Application built with Svelte, Vite, and TypeScript following a clean Ports & Adapters architecture.

## Prerequisites

- Node.js >= 20
- pnpm >= 9

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Preview production build
pnpm preview
```

## Architecture

This project follows the Ports & Adapters (Hexagonal) architecture pattern as defined in ADR-019. See the `decisions/` folder for all Architecture Decision Records.

## Project Structure

```
├── Application/
│   ├── gui/                  # Main Svelte PWA
│   └── infrastructure/       # Docker, scripts
├── decisions/                # Architecture Decision Records
├── tasks/                    # Project backlog
└── docs/                     # Documentation
```
