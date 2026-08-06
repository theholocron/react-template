# `@theholocron/react-template`

<!-- holocron:description -->

A modern React template with pre-configured tools, best practices, and CI/CD setup for rapid project development.

<!-- /holocron:description -->

## Getting Started

Use the [Holocron CLI](https://github.com/theholocron/holocron) to scaffold a new React project. It clones the template, renames all placeholder references, wires up your vault provider, and runs `holocron setup` in one step:

```bash
npx @theholocron/cli new react my-app \
  --description "My app description" \
  --homepage "https://my-app.example.com" \
  --vault doppler \
  --agent claude
```

This will:

1. Create `theholocron/my-app` from this template on GitHub
2. Replace all `react-template` references with `my-app` throughout the repo
3. Run `pnpm install` (including Playwright browser download)
4. Run `holocron setup` to configure branch protection, labels, workflows, and repo settings

## Development

This repo uses [pnpm workspaces](https://pnpm.io/workspaces).

```bash
pnpm dev           # start dev server
pnpm build         # production build
pnpm preview       # serve production build locally
pnpm test          # run Storybook interaction tests
pnpm test:coverage # run tests with coverage
pnpm typecheck     # tsc --noEmit
pnpm lint          # lint via super-linter (Docker)
```

## What's Included

| Tool                                                    | Purpose                                       |
| ------------------------------------------------------- | --------------------------------------------- |
| [React 19](https://react.dev)                           | UI framework                                  |
| [Vite](https://vite.dev)                                | Build tool and dev server                     |
| [TypeScript](https://www.typescriptlang.org)            | Type safety                                   |
| [Storybook](https://storybook.js.org)                   | Component development and interaction testing |
| [Vitest](https://vitest.dev)                            | Test runner with browser mode                 |
| [Playwright](https://playwright.dev)                    | Browser automation for play tests             |
| [MSW](https://mswjs.io)                                 | API mocking                                   |
| [ESLint](https://eslint.org)                            | Linting                                       |
| [Stylelint](https://stylelint.io)                       | CSS linting                                   |
| [Prettier](https://prettier.io)                         | Formatting                                    |
| [semantic-release](https://semantic-release.gitbook.io) | Automated releases                            |

## Releases

Releases are automated via [semantic-release](https://semantic-release.gitbook.io) on push to `main`. See [CHANGELOG.md](CHANGELOG.md) for the release history.
