import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { compose, react, wikiCapability as wiki } from "@theholocron/holocron-config";

const preset = compose(
	react({
		test: {
			"run-user-flow": true,
			"run-chromatic": {
				projects: [{ tokenName: "default", workingDir: ".", buildScript: "build:storybook:chromatic" }],
			},
		},
	}),
	wiki()
);
export default defineConfig({
	...preset,
	description:
		"A modern React template with pre-configured tools, best practices, and CI/CD setup for rapid project development.",
	homepage: "https://docs.theholocron.dev/react-template/",
	repo: {
		...preset.repo,
		name: "theholocron/react-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["react", "template", "typescript", "vite"],
		requiredChecks: [
			...preset.repo.requiredChecks,
			"Test / Run Storybook interaction tests",
			"Test / Test Interactions and Accessibility",
			"Test / Test User Flow (1)",
			"Test / Test User Flow (2)",
			"Test / Test Visual and Composition (default)",
			"audit / Audit the bundle size",
			"audit / Audit the performance",
			"cypress: default-group (merge)",
		],
	},
	workflows: [
		...preset.workflows,
		{ name: "release", with: { "run-build": true } },
		"sync",
		{ name: "deploy", with: { docs: true, storybook: [{ name: "" }] } },
	],
	providers: { ...preset.providers },
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
} satisfies HolocronConfig);
