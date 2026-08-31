# `@theholocron/react-template`

<!-- holocron:description -->

A modern React template with pre-configured tools, best practices, and CI/CD setup for rapid project development.

<!-- /holocron:description -->

<!-- holocron:installation -->

## Installation

```bash
pnpm install @theholocron/react-template
```

## Usage

```tsx
import {} from "@theholocron/react-template";

function App() {
  return <></>;
}
```

<!-- /holocron:installation -->

<!-- holocron:template-only -->

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

<!-- /holocron:template-only -->

## Development

<!-- holocron:development -->

| Script                | Command                                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------------------- |
| `pnpm build`          | `vite build`                                                                                                   |
| `pnpm dev`            | `vite`                                                                                                         |
| `pnpm preview`        | `vite preview --config vite.app.config.ts`                                                                     |
| `pnpm start`          | `storybook dev -p 6006`                                                                                        |
| `pnpm docs:dev`       | `astro dev`                                                                                                    |
| `pnpm docs:build`     | `astro build`                                                                                                  |
| `pnpm docs:preview`   | `astro preview`                                                                                                |
| `pnpm lint`           | `docker run -e LOG_LEVEL=DEBUG -e RUN_LOCAL=true -v .:/tmp/lint --rm ghcr.io/super-linter/super-linter:latest` |
| `pnpm test`           | `vitest`                                                                                                       |
| `pnpm test:coverage`  | `vitest run --project storybook --coverage`                                                                    |
| `pnpm test:storybook` | `vitest run --project storybook --coverage`                                                                    |
| `pnpm test:cypress`   | `cypress open`                                                                                                 |
| `pnpm typecheck`      | `tsc --noEmit`                                                                                                 |
| `pnpm audit`          | `knip`                                                                                                         |

<!-- /holocron:development -->

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

<!-- holocron:releases -->

Automated via [semantic-release](https://semantic-release.gitbook.io/semantic-release/).
See the [releases page](https://docs.theholocron.dev/react-template/releases) and [CHANGELOG.md](./CHANGELOG.md).

<!-- /holocron:releases -->
