import * as path from "node:path";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

/*
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"), // Entry point of your library
			name: "react-template",
			formats: ["es", "cjs"], // Specify formats (ESM and CommonJS)
			fileName: (format) => `react-template.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"], // Externalize peer dependencies
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
	optimizeDeps: {
		include: ["react/jsx-dev-runtime", "@storybook/react", "react-dom", "react-is"],
	},
	publicDir: "public",
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"), // Example alias, adjust as needed
			"@/app": path.resolve(__dirname, "./app"), // new alias for your app folder
		},
	},
	test: {
		extends: true,
		// environment: "jsdom", // Use jsdom for testing React components
		projects: [
			{
				plugins: [
					storybookTest({
						// The location of your Storybook config, main.js|ts
						configDir: path.join(__dirname, ".storybook"),
						// This should match your package.json script to run Storybook
						// The --ci flag will skip prompts and not open a browser
						storybookScript: "npm start --ci",
					}),
				],
				test: {
					name: "storybook",
					// Enable browser mode
					browser: {
						enabled: true,
						// Make sure to install Playwright
						provider: "playwright",
						headless: true,
						instances: [{ browser: "chromium" }],
					},
					coverage: {
						provider: "v8",
						reportsDirectory: "./coverage",
						reporter: ["text", "lcov"],
					},
					globals: true,
					setupFiles: ["./.storybook/vitest.setup.ts"],
				},
			},
		],
	},
});
