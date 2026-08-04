import { react, storybook } from "@theholocron/vitest-config";
import { coverageConfigDefaults, defineConfig } from "vitest/config";

/*
 * @see https://vitest.dev/config/
 */
export default defineConfig(async () => ({
	test: {
		coverage: {
			all: false,
			exclude: [...coverageConfigDefaults.exclude, "**/handlers.*", "**/*.{mock}.*"],
			provider: "v8",
			reporter: ["text", "lcov"],
		},
		projects: [
			react({ name: "unit" }),
			await storybook(".storybook", {
				setupFiles: ["./vitest.setup.ts"],
			}),
		],
	},
}));
