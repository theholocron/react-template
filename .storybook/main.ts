import * as path from "node:path";
import { type StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-coverage",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-links",
		"@chromatic-com/storybook",
		"@whitespace/storybook-addon-html",
	],
	docs: {
	    defaultName: "Documentation",
	},
	framework: {
		name: "@storybook/react-vite",
		// https://storybook.js.org/docs/api/main-config/main-config-framework
		options: {},
	},
	staticDirs: ["../public"],
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
