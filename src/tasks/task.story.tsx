import type { Meta, StoryObj } from "@storybook/react-vite";
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
} satisfies Story;
