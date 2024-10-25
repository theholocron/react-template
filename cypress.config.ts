import { defineConfig } from "cypress";

/*
 * @see https://docs.cypress.io/app/references/configuration
 */
export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:5173/", // this is the default port for `vite` that runs a server
		specPattern: "src/**/*.{cy.js,cy.ts}",
		supportFile: false,
		retries: 2,
	},
	projectId: "6dsxao",
});
