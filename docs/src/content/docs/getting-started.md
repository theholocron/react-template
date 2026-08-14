---
title: Getting Started
description: How to use the React template to start a new project.
---

## Use this template

Click **Use this template** on GitHub, or clone it directly:

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
| `pnpm test`           | Run all tests                           |
| `pnpm test:storybook` | Run Storybook interaction tests         |
| `pnpm test:cypress`   | Open Cypress for user flow tests        |
| `pnpm typecheck`      | Run TypeScript type-checking            |
| `pnpm lint`           | Run ESLint                              |
