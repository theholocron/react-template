import { defineConfig } from "@theholocron/cli";
import type { HolocronConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, workflows, providers } = node();
export default defineConfig({
	description: "React starter template for @theholocron repos.",
	homepage: "https://docs.theholocron.dev/react-template/",
	repo: {
		name: "theholocron/react-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["react", "template", "typescript", "vite"],
		...repo,
		protection: "balanced",
		properties: {
			...repo.properties,
			runtime_environment: "browser",
			open_source: true,
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		{ name: "release", with: { "run-build": true } },
		{
			name: "deploy-docs",
			with: { name: "react-template" },
			paths: ["docs/**"],
		},
	],
	providers: {
		...providers,
		secrets: "github",
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
} satisfies HolocronConfig);
