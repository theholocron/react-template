---
title: Getting Started
description: How to use the React template to start a new project.
---

## Use this template

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

### Manual clone

If you prefer to set things up yourself:

```bash
git clone https://github.com/theholocron/react-template.git my-project
cd my-project
pnpm install
```

## Development

Start Storybook for interactive component development:

```bash
pnpm start
```

Run the smoke-test app:

```bash
pnpm dev
```

## Scripts

| Script                | Description                             |
| --------------------- | --------------------------------------- |
| `pnpm start`          | Start Storybook dev server on port 6006 |
| `pnpm dev`            | Start the Vite app dev server           |
| `pnpm build`          | Build the component library             |
| `pnpm preview`        | Serve the production build locally      |
| `pnpm test`           | Run all tests                           |
| `pnpm test:coverage`  | Run tests with coverage                 |
| `pnpm test:storybook` | Run Storybook interaction tests         |
| `pnpm test:cypress`   | Open Cypress for user flow tests        |
| `pnpm typecheck`      | Run TypeScript type-checking            |
| `pnpm lint`           | Run ESLint                              |
