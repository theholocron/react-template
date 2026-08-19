import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, workflows, providers } = node();
export default defineConfig({
	description:
		"A modern React template with pre-configured tools, best practices, and CI/CD setup for rapid project development.",
	homepage: "https://docs.theholocron.dev/react-template/",
	repo: {
		name: "theholocron/react-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["react", "template", "typescript", "vite"],
		...repo,
		protection: "strict",
		requiredChecks: [
			"Test / Run Storybook interaction tests",
			"Test / Test Interactions and Accessibility",
			"Test / Test User Flow",
			"Test / Test Visual and Composition (default)",
			"audit / Audit the bundle size",
			"audit / Audit the performance",
			"audit / Knip",
		],
		properties: {
			...repo.properties,
			runtime_environment: "browser",
			open_source: true,
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		{
			name: "audit",
			with: { "run-knip": true, "run-performance": true, "lighthouse-config": "lighthouse.config.cjs" },
		},
		{
			name: "test",
			with: {
				"run-unit": false,
				"run-storybook": true,
				"run-interaction": true,
				"run-user-flow": true,
				"run-chromatic": {
					projects: [{ tokenName: "", workingDir: ".", buildScript: "build:storybook:chromatic" }],
				},
			},
		},
		{ name: "release", with: { "run-build": true } },
		{ name: "deploy", with: { docs: true, storybook: [{ name: "app" }] } },
	],
	providers: {
		...providers,
		secrets: "github",
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
} satisfies HolocronConfig);
