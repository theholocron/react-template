import { type StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-coverage",
		"@storybook/addon-designs",
		"@storybook/addon-docs",
		"@storybook/addon-links",
		"@storybook/addon-themes",
		"@storybook/addon-vitest",
		"@chromatic-com/storybook",
		// "@whitespace/storybook-addon-html",
		// "@codesandbox/storybook-addon",
	],
	core: {
		builder: "@storybook/builder-vite",
		options: {
			viteConfigPath: "../vite.config.ts",
		},
	},
	docs: {
		defaultName: "Documentation",
	},
	framework: "@storybook/react-vite",
	staticDirs: ["../public"],
	stories: ["../src/**/*.mdx", "../src/**/*.story.@(js|jsx|mjs|ts|tsx)"],
	async viteFinal(config) {
		// Merge custom configuration into the default config
		const { mergeConfig } = await import("vite");

		return mergeConfig(config, {
			// Add dependencies to pre-optimization
			optimizeDeps: {
				include: ["react/jsx-dev-runtime", "react-dom/client"],
			},
		});
	},
};

export default config;
