---
title: Testing
description: The testing strategy used in the React template.
---

The template uses three complementary testing layers.

## Unit and interaction tests (Vitest + Storybook)

Interaction tests run inside Storybook via `@storybook/addon-vitest`. They test component behaviour using Testing Library:

```bash
pnpm test:storybook
```

Unit tests run with Vitest directly:

```bash
pnpm test
```

## User flow tests (Cypress)

End-to-end tests run against the smoke-test app using Cypress:

```bash
pnpm test:cypress
```

The app is served from `app/main.tsx` and exercises the full component integration.

## Visual regression (Chromatic)

Chromatic captures and compares component screenshots on every PR. It is triggered automatically in CI via the `test` workflow.

## Coverage

Coverage is collected from Storybook interaction tests using `@storybook/addon-coverage`. The threshold is enforced in CI via Codecov.
