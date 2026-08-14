import starlight from "@astrojs/starlight";
import { defineConfig } from "@theholocron/astro-config";
import { docsTheme } from "@theholocron/docs-theme";

export default defineConfig({
	docs: {
		name: "React Template",
		github: "react-template",
		sidebar: [
			{ label: "Overview", slug: "" },
			{
				label: "Guide",
				items: [
					{ label: "Getting Started", slug: "getting-started" },
					{ label: "Project Structure", slug: "structure" },
					{ label: "Components", slug: "components" },
					{ label: "Testing", slug: "testing" },
				],
			},
		],
	},
	starlight,
	docsTheme,
	srcDir: "./docs/src",
	outDir: "./docs/dist",
	publicDir: "./docs/public",
});
