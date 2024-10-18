import { linkTo } from "@storybook/addon-links";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Header } from "./header";

const meta: Meta<typeof Header> = {
	title: "Example/Header",
	component: Header,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		onLogin: fn(),
		onLogout: fn(),
		onCreateAccount: linkTo("Example/Button", "Test Button"),
	},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
	args: {
		user: {
			name: "Jane Doe",
		},
	},
};

export const LoggedOut: Story = {};
