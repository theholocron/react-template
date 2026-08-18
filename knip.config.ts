import type { KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			// src/index.ts, vitest.config.ts auto-detected by Knip plugins
			entry: [
				"holocron.config.ts",
				// MSW handler files — public API for consumers; not imported by app code
				"src/**/handlers.ts",
			],
			project: ["src/**/*.{ts,tsx,mdx}", "*.config.ts", "*.config.cjs"],
			// standalone tool configs — not imported by project code
			ignoreFiles: ["devmoji.config.cjs", "lighthouse.config.cjs", "stylelint.config.ts"],
			// astro.config.ts is the docs build config, not an Astro workspace — disable plugin
			astro: false,
		},
	},
	ignoreDependencies: [
		// commitlint "extends" uses string shorthand
		"@theholocron/commitlint-config",
		"@theholocron",
		// passed as --config arg to lint-staged binary in .husky/pre-commit
		"@theholocron/lint-staged-config",
		// loaded at runtime by the holocron plugin system — not a static import
		"@theholocron/holocron-plugin-github",
		// skills referenced as strings in holocron.config.ts
		"@theholocron/skills",
		// config packages loaded via config file resolution — not static imports
		"@theholocron/lighthouse-config",
		"@theholocron/storybook-config",
		"@theholocron/stylelint-config",
		// pinned as a pnpm override; not directly imported by root code
		"@commitlint/config-conventional",
		// storybook addon referenced as a string in main.ts addons array
		"storybook-addon-pseudo-states",
		// binary tools — invoked via CLI or hooks, not module imports
		"alex",
		"sort-package-json",
		"tsc-files",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
