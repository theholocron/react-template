import * as path from "path";
import { type StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

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
		"@storybook/addon-coverage",
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
	// @TODO: abstract out to shared vite.config.ts
	async viteFinal (config, options) {
		return mergeConfig(config, {
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "../src"), // Adjust the path based on your project structure
				},
			},
		});
	},
};

export default config;
