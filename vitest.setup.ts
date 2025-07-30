import "@testing-library/jest-dom";
// 👇 If you're using Next.js, import from @storybook/nextjs
//   If you"re using Next.js with Vite, import from @storybook/experimental-nextjs-vite
import { setProjectAnnotations } from "@storybook/react";
import { afterAll, afterAll, beforeAll } from "vitest";
import { server } from "./app/mocks/node";
// 👇 Import the exported annotations, if any, from the addons you're using; otherwise remove this
// import * as addonAnnotations from "my-addon/preview";
import * as previewAnnotations from "./.storybook/preview";

const annotations = setProjectAnnotations([previewAnnotations]);

beforeAll(async () => {
	// Run Storybook's beforeAll hook
	await annotations?.beforeAll?.();
	// Then start MSW server
	server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
