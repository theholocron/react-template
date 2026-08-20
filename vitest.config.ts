import { coverage, storybook } from "@theholocron/vitest-config";
import { defineConfig } from "vitest/config";

/*
 * @see https://vitest.dev/config/
 */
export default defineConfig(async () => ({
	test: {
		reporters: ["default", "junit"],
		outputFile: {
			junit: "./test-report.junit.xml",
		},
		coverage: {
			...coverage,
			exclude: [...coverage.exclude, "**/handlers.*", "**/*.{mock}.*", "**/*.css"],
		},
		projects: [await storybook(".storybook", { setupFiles: ["./vitest.setup.ts"] })],
	},
}));
