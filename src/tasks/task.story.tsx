import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";

import { Task, type TaskProps } from "./task";

const meta = {
	component: Task,
	title: "Task",
	argTypes: {
		onArchiveTask: { action: "onArchiveTask" },
		onTogglePinTask: { action: "onTogglePinTask" },
		onEditTitle: { action: "onEditTitle" },
		onDeleteTask: { action: "onDeleteTask" },
	},
} satisfies Meta<typeof Task>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args: TaskProps) => (
		<ul>
			<Task {...args} />
		</ul>
	),
	args: {
		task: {
			id: "1",
			title: "Buy milk",
			state: "TASK_INBOX",
		},
		onArchiveTask: () => {},
		onTogglePinTask: () => {},
		onEditTitle: () => {},
		onDeleteTask: () => {},
	},
	play: async ({ canvas }) => {
		const task = await canvas.findByRole("listitem", { name: "task-1" });
		await expect(task).toBeInTheDocument();

		const titleInput = within(task).getByRole("textbox");
		await expect(titleInput).toHaveValue("Buy milk");

		const pinButton = within(task).getByRole("button", { name: "pin" });
		await expect(pinButton).toBeInTheDocument();

		const deleteButton = within(task).getByRole("button", { name: "delete" });
		await expect(deleteButton).toBeInTheDocument();

		const archiveButton = within(task).getByRole("button", { name: "archiveButton-1" });
		await expect(archiveButton).toBeInTheDocument();
	},
} satisfies Story;

export const Pinned = {
	render: (args: TaskProps) => (
		<ul>
			<Task {...args} />
		</ul>
	),
	args: {
		...Default.args,
		task: {
			id: "2",
			title: "QA dropdown",
			state: "TASK_PINNED",
		},
	},
	play: async ({ canvas }) => {
		const task = await canvas.findByRole("listitem", { name: "task-2" });
		await expect(task).toBeInTheDocument();

		const unpinButton = within(task).getByRole("button", { name: "unpin" });
		await expect(unpinButton).toBeInTheDocument();

		await expect(within(task).queryByRole("button", { name: "pin" })).not.toBeInTheDocument();
	},
} satisfies Story;

export const Archived = {
	render: (args: TaskProps) => (
		<ul>
			<Task {...args} />
		</ul>
	),
	args: {
		...Default.args,
		task: {
			id: "3",
			title: "Write schema for account menu",
			state: "TASK_ARCHIVED",
		},
	},
	play: async ({ canvas }) => {
		const task = await canvas.findByRole("listitem", { name: "task-3" });
		await expect(task).toBeInTheDocument();

		const archiveCheckbox = within(task).getByRole("checkbox", { hidden: true });
		await expect(archiveCheckbox).toBeChecked();

		await expect(within(task).queryByRole("button", { name: "pin" })).not.toBeInTheDocument();
		await expect(within(task).queryByRole("button", { name: "unpin" })).not.toBeInTheDocument();
	},
} satisfies Story;

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = {
	render: (args: TaskProps) => (
		<ul>
			<Task {...args} />
		</ul>
	),
	args: {
		...Default.args,
		task: {
			id: "4",
			title: longTitleString,
			state: "TASK_INBOX",
		},
	},
	play: async ({ canvas }) => {
		const task = await canvas.findByRole("listitem", { name: "task-4" });
		await expect(task).toBeInTheDocument();

		const titleInput = within(task).getByRole("textbox");
		await expect(titleInput).toHaveValue(longTitleString);
		await expect(titleInput).toHaveStyle({ textOverflow: "ellipsis" });
	},
} satisfies Story;
