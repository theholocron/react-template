import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { coverage } from "@theholocron/vitest-config";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

/*
 * @see https://vitest.dev/config/
 */
export default defineConfig({
	test: {
		coverage: {
			...coverage,
			exclude: [...coverage.exclude, "**/handlers.*", "**/*.{mock}.*"],
		},
		projects: [
			{
				plugins: [storybookTest({ configDir: ".storybook" })],
				test: {
					name: "storybook",
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [{ browser: "chromium" }],
					},
					setupFiles: ["./vitest.setup.ts"],
				},
			},
		],
	},
});
