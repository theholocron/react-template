import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, within } from "@storybook/test";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
	title: "Example/Button",
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		label: "Button",
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole("button", { name: /Button/i });

		await step("render default props", async () => {
			await expect(button).toBeInTheDocument();
			await expect(button).toHaveAttribute("type", "button");
			await expect(button).toHaveClass("storybook-button");
			await expect(button).toHaveClass("storybook-button--medium");
			await expect(button).toHaveClass("storybook-button--secondary");
		});
	},
};

export const Primary: Story = {
	args: {
		primary: true,
		label: "Button",
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole("button", { name: /Button/i });

		await step("render primary", async () => {
			await expect(button).toHaveClass("storybook-button--primary");
		});
	},
};

export const Sizes: Story = {
	args: {
		label: "Button",
		size: "medium", // Default size
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole("button", { name: /Button/i });

		// Define the sizes you want to test
		const sizes = ["small", "medium", "large", "xlarge"] as const;

		// Loop through each size and test it
		for (const size of sizes) {
			// Modify args dynamically to change the size prop
			args.size = size;

			// Assert the correct class is applied for the given size
			await expect(button).toHaveClass(`storybook-button--${size}`);
		}
	},
};

export const Large: Story = {
	args: {
		size: "large",
		label: "Button",
	},
};

export const Small: Story = {
	args: {
		size: "small",
		label: "Button",
	},
};
