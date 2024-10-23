import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:5173/", // this is the default port for `vite` that runs a server
		specPattern: "src/**/*.{cy.js,cy.ts}",
		supportFile: false,
	},
	projectId: "6dsxao",
});
