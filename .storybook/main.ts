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
	async viteFinal(config, { configType }) {
		const { mergeConfig } = await import("vite");

		return mergeConfig(config, {
			// Chromatic serves assets at root — only use /sandbox/ for the deployed docs site
			base: configType === "PRODUCTION" && !process.env["CHROMATIC"] ? "/sandbox/" : "/",
			optimizeDeps: {
				include: ["react/jsx-dev-runtime", "react-dom/client"],
			},
		});
	},
};

export default config;
