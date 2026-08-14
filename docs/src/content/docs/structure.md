---
title: Project Structure
description: An overview of the files and directories in the React template.
---

```
.
├── app/             # Smoke-test app harness (main.tsx, mocks)
├── docs/            # Documentation site source
│   └── src/
│       └── content/docs/
├── public/          # Static assets served by Vite
├── src/             # Component library source
│   ├── tasks/
│   ├── login/
│   ├── inbox/
│   └── index.ts     # Library entry point
├── .storybook/      # Storybook configuration
├── astro.config.ts  # Docs site configuration
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Library build configuration
└── vite.app.config.ts  # App harness build configuration
```

## `src/`

The component library source. Files here are bundled by `vite build` and published as the package. Each feature is a subdirectory containing components, stories, and tests co-located together.

## `app/`

A minimal React app used for smoke-testing the built library and for Cypress user flow tests. It is built separately by `vite.app.config.ts` and never published.

## `.storybook/`

Storybook configuration. Stories are discovered from `src/**/*.story.tsx`. The Storybook is deployed to `/sandbox/` on GitHub Pages.
