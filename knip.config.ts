import type { KnipConfig } from "knip";

const config: KnipConfig = {
	entry: ["src/index.ts", "vite.config.ts", "holocron.config.ts"],
	project: ["src/**/*.ts", "src/**/*.tsx", "*.config.ts"],
	ignoreDependencies: [
		"@theholocron/tsconfig",
		"@theholocron/commitlint-config",
		"@theholocron/lint-staged-config",
		"husky",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
