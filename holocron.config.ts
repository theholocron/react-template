import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, workflows, providers } = node();
export default defineConfig({
	description: "<description>",
	homepage: "<homepage>",
	repo,
	workflows,
	providers,
	agent: "claude",
});
