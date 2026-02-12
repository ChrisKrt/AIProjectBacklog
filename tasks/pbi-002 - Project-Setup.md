---
id: PBI-002
title: Project Setup
status: Refinement
assignee: []
created_date: '2026-02-11 20:43'
updated_date: '2026-02-12 19:59'
labels: []
dependencies: []
references:
  - .\backlog\assets\pbi-002-mackup.drawio
ordinal: 2000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Setup the project infrastructure according to all ADRs. Establish monorepo structure, build tooling, domain architecture, PWA, plugin system, and workflows. Follow ADR-008, ADR-009, ADR-019, ADR-022, ADR-002, ADR-003, ADR-010, ADR-014, ADR-015, ADR-017. Ensure all critical directories, configs, and dependencies are present. Use Svelte as the main UI framework. Verify setup with dev/build/test commands.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Monorepo directory structure created as per ADR-008 and ADR-019
- [ ] #2 pnpm workspace and package.json configured
- [ ] #3 Vite and TypeScript configs present in gui and shared packages
- [ ] #4 All required npm dependencies installed (Svelte, WebAwesome, Nanostores, OPA, etc.)
- [ ] #5 PWA manifest and service worker implemented
- [ ] #6 i18n files for English and German created
- [ ] #7 Ports & Adapters domain scaffolding exists
- [ ] #8 Docker and CI/CD setup completed
- [ ] #9 Minimal Svelte shell app runs in dev mode
- [ ] #10 Setup verified with dev/build/test commands
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. Initialize git submodules
2. Install pnpm and create workspace config
3. Create monorepo directory structure (shared, gui, plugins, docker, scripts)
4. Add TypeScript and Vite configs
5. Install dependencies (Svelte, WebAwesome, Nanostores, OPA, etc.)
6. Setup environment config templates (.env, config.js.template)
7. Add PWA manifest and icons
8. Add i18n structure (en.json, de.json)
9. Scaffold Ports & Adapters domain interfaces
10. Setup code quality tooling (ESLint, Prettier, EditorConfig)
11. Add test infrastructure (Vitest, Playwright)
12. Setup Docker containerization
13. Add build automation scripts
14. Create GitHub Actions CI/CD workflows
15. Create minimal Svelte shell app
16. Verify setup with dev/build/test commands
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
## Final Directory Structure

```
AIProject/
├── README.md
├── package.json (root workspace)
├── pnpm-workspace.yaml
├── tsconfig.json (base config)
├── vite.config.ts (root config)
├── .editorconfig
├── .gitmodules
├── .github/
│   ├── workflows/ (ci.yml, build.yml, test.yml)
│   ├── instructions/
│   ├── skills/
│   └── copilot-instructions.md
│
├── shared/                          # Workspace: shared libraries
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── types/ (domain.types.ts, plugin.contract.ts)
│       ├── ports/ (authentication.port.ts, storage.port.ts, policy-engine.port.ts)
│       ├── adapters/ (oidc-client.adapter.ts, storage.adapter.ts, rego-policy.adapter.ts)
│       ├── use-cases/
│       └── utils/
```

## GUI Package Structure

```
├── gui/                             # Workspace: main Svelte app (Host/Shell)
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── vitest.config.ts
│   ├── playwright.config.ts
│   ├── .env.example
│   │
│   ├── public/
│   │   ├── manifest.webmanifest     # PWA manifest
│   │   ├── service-worker.js        # PWA service worker
│   │   ├── icons/ (icon-192x192.png, icon-512x512.png, favicon.ico)
│   │   └── locales/ (en.json, de.json)
│   │
│   ├── src/
│   │   ├── main.ts
│   │   ├── App.svelte
│   │   ├── app.css
│   │   │
│   │   ├── domains/                 # Domain-driven (Ports & Adapters)
│   │   │   ├── auth/
│   │   │   │   ├── ports/ (authentication.port.ts, identity-provider.port.ts)
│   │   │   │   ├── adapters/ (oidc-client.adapter.ts, http-auth-controller.adapter.ts)
│   │   │   │   ├── use-cases/ (login, logout, refresh-token)
│   │   │   │   ├── store/ (auth.store.ts)
│   │   │   │   └── components/ (LoginForm.svelte, LogoutButton.svelte)
│   │   │   │
│   │   │   ├── files/
│   │   │   │   ├── ports/ (file-service.port.ts)
│   │   │   │   ├── adapters/ (cloud-storage.adapter.ts)
│   │   │   │   ├── use-cases/ (upload, download, list-files)
│   │   │   │   ├── store/ (files.store.ts)
│   │   │   │   └── components/
```

## GUI Package Structure (cont.)

```
│   │   │   ├── policies/
│   │   │   │   ├── ports/ (policy-engine.port.ts)
│   │   │   │   ├── adapters/ (rego-engine.adapter.ts)
│   │   │   │   └── use-cases/
│   │   │   │
│   │   │   └── plugin/               # Plugin management domain
│   │   │       ├── ports/ (plugin-loader.port.ts)
│   │   │       ├── adapters/ (module-federation.adapter.ts)
│   │   │       ├── use-cases/ (load-plugin, unload-plugin)
│   │   │       └── store/ (plugins.store.ts)
│   │   │
│   │   ├── shared/                  # Shared across domains
│   │   │   ├── components/ (WebAwesome components, reusable UI)
│   │   │   ├── layouts/
│   │   │   ├── services/
│   │   │   └── config/
│   │   │       ├── env.config.ts    # 12-Factor Principle
│   │   │       ├── feature-flags.ts
│   │   │       └── constants.ts
│   │   │
│   │   ├── routes/ (+page.svelte, auth/, files/, settings/)
│   │   ├── lib/ (i18n.ts)
│   │   └── styles/ (design-tokens.css, themes.css, globals.css)
│   │
│   ├── tests/
│   │   ├── unit/domains/
│   │   ├── integration/
│   │   └── e2e/features/ (auth.feature)
│   │
│   └── dist/
```

## Plugins & Infrastructure

```
├── plugins/                         # Workspace: plugin development
│   ├── example-plugin/
│   │   ├── package.json
│   │   ├── vite.config.ts          # Module Federation for remote
│   │   ├── src/
│   │   │   ├── remote-entry.ts
│   │   │   └── Plugin.svelte
│   │   └── dist/
│   │
│   └── manifest.json               # Local registry of available plugins
│
├── infrastructure/
│   ├── docker/ (Dockerfile, docker-compose.yml, nginx.conf)
│   ├── kubernetes/
│   └── scripts/ (build.sh, dev.sh, test.sh, lint.sh, deploy.sh)
│
├── backlog/ (tasks/, decisions/, docs/, completed/, config.yml)
├── Architecture/ (arc42 template docs)
├── Guides/ (User/Admin guides)
├── DesignSystem/ (tokens/, components/)
└── .gitignore
```

## Key Implementation Notes

**Architecture Alignment:**
- Monorepo (ADR-008): Three workspace packages - shared/, gui/, plugins/
- Ports & Adapters (ADR-019): Each domain has ports/, adapters/, use-cases/
- Plugin System (ADR-022): Module Federation via vite.config.ts
- PWA (ADR-002): Service worker, manifest, icons in gui/public/
- i18n (ADR-015): en.json and de.json in public/locales/
- Design System (ADR-011, 012): Tokens in gui/src/styles/ and DesignSystem/
- Config (ADR-014): .env.example and env.config.ts (12-Factor)
- Build (ADR-009): vite.config.ts in gui/ and root
- Testing: Unit, integration, BDD features in gui/tests/
<!-- SECTION:NOTES:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 Unit Tests written
- [ ] #2 Code reviewed
- [ ] #3 Unit Tests pass
- [ ] #4 ATDD / BDD scenarios pass
- [ ] #5 Documentation updated
- [ ] #6 User Guide updated
- [ ] #7 Admin Guide updated
- [ ] #8 No regressions introduced
<!-- DOD:END -->
