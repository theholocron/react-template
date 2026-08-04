import { coverage, react, storybook } from "@theholocron/vitest-config";
import { defineConfig } from "vitest/config";

/*
 * @see https://vitest.dev/config/
 */
export default defineConfig(async () => ({
	test: {
		coverage: {
			...coverage,
			exclude: [...coverage.exclude, "**/handlers.*", "**/*.{mock}.*"],
		},
		projects: [
			react({ name: "unit" }),
			await storybook(".storybook", {
				setupFiles: ["./vitest.setup.ts"],
			}),
		],
	},
}));
