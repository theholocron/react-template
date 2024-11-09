import { expect, userEvent, findByRole, within } from "@storybook/test";
import { taskListHandler, taskListErrorHandler } from "../tasks/handlers";
import { Inbox } from "./inbox";

export type CanvasElement = {
	canvasElement: HTMLElement;
}

export type CanvasInputElement = {
	canvasElement: HTMLInputElement | HTMLTextAreaElement;
}

export default {
	component: Inbox,
	title: "Inbox",
};

export const Default = {
	parameters: {
		msw: {
			handlers: [ taskListHandler ],
		},
	},
};

export const Error = {
	args: {
		error: "Something",
	},
	parameters: {
		msw: {
			handlers: [ taskListErrorHandler ],
		},
	},
};

export const PinTask = {
	parameters: {
		...Default.parameters,
	},
	play: async ({ canvasElement }: CanvasElement) => {
		const canvas = within(canvasElement);
		const getTask = (id: string) => canvas.findByRole("listitem", { name: id });

		const itemToPin = await getTask("task-4");
		// Find the pin button
		const pinButton = await findByRole(itemToPin, "button", { name: "pin" });
		// Click the pin button
		await userEvent.click(pinButton);
		// Check that the pin button is now a unpin button
		const unpinButton = within(itemToPin).getByRole("button", {
			name: "unpin",
		});
		await expect(unpinButton).toBeInTheDocument();
	},
};

export const ArchiveTask = {
	parameters: {
		...Default.parameters,
	},
	play: async ({ canvasElement }: CanvasElement) => {
		const canvas = within(canvasElement);
		const getTask = (id: string) => canvas.findByRole("listitem", { name: id });

		const itemToArchive = await getTask("task-2");
		const archiveButton = await findByRole(itemToArchive, "button", {
			name: "archiveButton-2",
		});
		await userEvent.click(archiveButton);
	},
};

export const EditTask = {
	parameters: {
		...Default.parameters,
	},
	play: async ({ canvasElement }: { canvasElement: HTMLTextAreaElement }) => {
		const canvas = within(canvasElement);
		const getTask = (id: string) => canvas.findByRole("listitem", { name: id });

		const itemToEdit = await getTask("task-5");
		const taskInput = await findByRole(itemToEdit, "textbox");
		if (taskInput instanceof HTMLInputElement || taskInput instanceof HTMLTextAreaElement) {
			await userEvent.type(taskInput, " and disabled state");
			await expect(taskInput.value).toBe("Fix bug in input error state and disabled state");
		}
	},
};

export const DeleteTask = {
	parameters: {
		...Default.parameters,
	},
	play: async ({ canvasElement }: CanvasElement) => {
		const canvas = within(canvasElement);
		const getTask = (id: string) => canvas.findByRole("listitem", { name: id });

		const itemToDelete = await getTask("task-1");
		const deleteButton = await findByRole(itemToDelete, "button", {
			name: "delete",
		});

		// Click the pin button
		await userEvent.click(deleteButton);
		await expect(canvas.getAllByRole("listitem").length).toBe(5);
	},
};
