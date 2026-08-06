import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";

import TaskStories from "./task.story";
import { TaskList } from "./task-list";

const meta = {
	component: TaskList,
	title: "TaskList",
	argTypes: {
		...TaskStories.argTypes,
	},
} satisfies Meta<typeof TaskList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	play: async ({ canvas }) => {
		const list = await canvas.findByRole("list", { name: "tasks" });
		await expect(list).toBeInTheDocument();

		const tasks = within(list).getAllByRole("listitem");
		await expect(tasks).toHaveLength(6);
	},
	args: {
		tasks: [
			{ id: "1", state: "TASK_INBOX", title: "Build a date picker" },
			{ id: "2", state: "TASK_INBOX", title: "QA dropdown" },
			{
				id: "3",
				state: "TASK_INBOX",
				title: "Write a schema for account avatar component",
			},
			{ id: "4", state: "TASK_INBOX", title: "Export logo" },
			{ id: "5", state: "TASK_INBOX", title: "Fix bug in input error state" },
			{
				id: "6",
				state: "TASK_INBOX",
				title: "Draft monthly blog to customers",
			},
		],
		onTogglePinTask: () => {},
		onArchiveTask: () => {},
		onEditTitle: () => {},
		onDeleteTask: () => {},
	},
} satisfies Story;

export const WithPinnedTasks = {
	args: {
		...Default.args,
		tasks: [
			{
				id: "6",
				title: "Draft monthly blog to customers",
				state: "TASK_PINNED",
			},
			...Default.args.tasks.slice(0, 5),
		],
	},
	play: async ({ canvas }) => {
		const tasks = await canvas.findAllByRole("listitem");
		await expect(tasks).toHaveLength(6);

		// Pinned task sorts to the top
		await expect(tasks[0]).toHaveAttribute("aria-label", "task-6");

		// Pinned task shows unpin button
		const unpinButton = within(tasks[0]).getByRole("button", { name: "unpin" });
		await expect(unpinButton).toBeInTheDocument();
	},
} satisfies Story;

export const Loading = {
	args: {
		...Default.args,
		tasks: [],
		loading: true,
	},
	play: async ({ canvas }) => {
		// Assert the loading state container is rendered
		const loadingContainer = await canvas.findByTestId("loading");
		await expect(loadingContainer).toBeInTheDocument();

		// Check that there are exactly 6 loading items
		const loadingItems = await canvas.findAllByTestId("loading-item");
		await expect(loadingItems.length).toBe(6);
	},
} satisfies Story;

export const Empty = {
	args: {
		...Loading.args,
		loading: false,
	},
	play: async ({ canvas }) => {
		const emptyContainer = await canvas.findByTestId("empty");
		await expect(emptyContainer).toBeInTheDocument();

		await expect(canvas.getByText("You have no tasks")).toBeInTheDocument();
		await expect(canvas.queryByRole("listitem")).not.toBeInTheDocument();
	},
} satisfies Story;
