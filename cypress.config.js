import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:5173/", // this is the default port for `vite` that runs a server
		supportFile: false,
	},
	projectId: '6dsxao',
});
