import { fileURLToPath } from "node:url";

import { reactLibrary } from "@theholocron/vite-config/react-library";

/*
 * @see https://vitejs.dev/config/
 */
export default reactLibrary({
	name: "react-template",
	overrides: {
		publicDir: "public",
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
	},
});
