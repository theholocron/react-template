import { fileURLToPath } from "node:url";

import { docsSchema } from "@astrojs/starlight/schema";
import { createDocsLoader } from "@theholocron/docs-theme/loader";
import { defineCollection } from "astro:content";

export const collections = {
	docs: defineCollection({
		loader: createDocsLoader([
			{
				dir: fileURLToPath(new URL("../content", import.meta.url)),
				slug: "",
			},
		]),
		schema: docsSchema(),
	}),
};
