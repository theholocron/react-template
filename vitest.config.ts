import { coverage, storybook } from "@theholocron/vitest-config";
import { defineConfig } from "vitest/config";

/*
 * @see https://vitest.dev/config/
 */
export default defineConfig(async () => ({
	test: {
		coverage: {
			...coverage,
			exclude: [...coverage.exclude, "**/handlers.*", "**/*.{mock}.*", "**/*.css"],
		},
		projects: [await storybook(".storybook", { setupFiles: ["./vitest.setup.ts"] })],
	},
}));
