---
title: Components
description: How to build and document components with this template.
---

## File conventions

Each component lives in a feature directory under `src/` with its source, story, and tests co-located:

```
src/tasks/
├── TaskList.tsx
├── TaskList.story.tsx
└── TaskList.test.tsx
```

## Writing stories

Stories use the `.story.tsx` extension and follow the [Component Story Format](https://storybook.js.org/docs/writing-stories):

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { TaskList } from "./TaskList";

const meta: Meta<typeof TaskList> = {
	component: TaskList,
};

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
	args: { tasks: [] },
};
```

## Exporting

Export components from `src/index.ts` to include them in the published library:

```ts
export { TaskList } from "./tasks/TaskList";
```
