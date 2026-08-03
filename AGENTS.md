# theholocron/react-template — agent operating contract

`CLAUDE.md` is a symlink to this file, so Claude, Codex, and every other agent
read the same rules. Put durable, repo-wide agent guidance here.

@../github-private/AGENTS.md

## What this repo is

<description>

## Architecture

- Single published npm package (`@theholocron/react-template`) — a React component library.
- TypeScript source in `src/`, compiled to `dist/` via Vite.
- Components developed and documented with Storybook.
- Tested with vitest and Cypress.

## Quality

- `pnpm build` — Vite library build
- `pnpm test` — vitest
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm lint` — ESLint + Stylelint
- `pnpm start` — Storybook dev server
