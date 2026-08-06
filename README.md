# `@theholocron/react-template`

<!-- holocron:description -->

A modern React template with pre-configured tools, best practices, and CI/CD setup for rapid project development.

<!-- /holocron:description -->

## Getting Started

Use this template to scaffold a new React project:

```bash
gh repo create my-app --template theholocron/react-template --clone
cd my-app
pnpm install
```

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
