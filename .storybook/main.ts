import { type StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"@whitespace/storybook-addon-html",
		"@storybook/addon-a11y",
		"@storybook/addon-links",
	],
	framework: {
		name: "@storybook/react-vite",
		// https://storybook.js.org/docs/api/main-config/main-config-framework
		options: {},
	},
	stories: [
		"../src/**/*.mdx",
		"../src/**/*.story.@(js|jsx|mjs|ts|tsx)",
	],
};
export default config;
