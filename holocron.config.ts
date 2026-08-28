import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { react } from "@theholocron/holocron-config";

const { repo, workflows, providers, org, domain } = react();
export default defineConfig({
	description:
		"A modern React template with pre-configured tools, best practices, and CI/CD setup for rapid project development.",
	homepage: "https://docs.theholocron.dev/react-template/",
	org,
	domain,
	repo: {
		name: "theholocron/react-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["react", "template", "typescript", "vite"],
		...repo,
		requiredChecks: [
			...(repo.requiredChecks ?? []),
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
		...workflows,
		{
			name: "test",
			with: {
				"run-chromatic": {
					projects: [{ tokenName: "default", workingDir: ".", buildScript: "build:storybook:chromatic" }],
				},
			},
		},
		{ name: "release", with: { "run-build": true } },
		"sync",
		{ name: "deploy", with: { docs: true, storybook: [{ name: "" }] } },
	],
	providers,
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
} satisfies HolocronConfig);
