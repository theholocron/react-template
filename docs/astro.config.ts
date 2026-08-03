import starlight from "@astrojs/starlight";
import { docsTheme } from "@theholocron/docs-theme";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://theholocron.github.io",
	base: "/react-template",
	integrations: [
		starlight({
			title: "React Template",
			plugins: [docsTheme()],
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/theholocron/react-template",
				},
			],
			sidebar: [{ label: "Overview", slug: "" }],
		}),
	],
});
