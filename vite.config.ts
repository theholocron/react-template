import { fileURLToPath } from "node:url";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { reactLibrary } from "@theholocron/vite-config/react-library";
import { coverageConfigDefaults } from "vitest/config";

/*
 * @see https://vitejs.dev/config/
 */
export default reactLibrary({
	name: "react-template",
	overrides: {
		publicDir: "public",
		plugins: [storybookTest()],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
		test: {
			browser: {
				enabled: true,
				provider: "playwright",
				headless: true,
				instances: [{ browser: "chromium" }],
			},
			coverage: {
				all: false,
				exclude: [...coverageConfigDefaults.exclude, "**/handlers.*", "**/*.{mock}.*"],
				provider: "v8",
				reporter: ["text", "lcov"],
			},
			environment: "jsdom",
			globals: true,
			setupFiles: ["./vitest.setup.ts"],
		},
	},
});
