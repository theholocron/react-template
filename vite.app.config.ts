import { reactApp } from "@theholocron/vite-config/react-app";

/*
 * Vite config for the smoke-test app harness (app/main.tsx + index.html).
 * Used by `pnpm preview` to build and serve the app in production mode.
 * The library build (vite.config.ts) remains separate.
 *
 * @see https://vitejs.dev/config/
 */
export default reactApp({ build: { outDir: "dist-app" } });
