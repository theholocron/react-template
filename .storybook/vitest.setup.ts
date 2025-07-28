import "@testing-library/jest-dom";
import { beforeAll } from "vitest";

// 👇 If you're using Next.js, import from @storybook/nextjs
//   If you"re using Next.js with Vite, import from @storybook/experimental-nextjs-vite
import { setProjectAnnotations } from "@storybook/react";
// 👇 Import the exported annotations, if any, from the addons you're using; otherwise remove this
// import * as addonAnnotations from "my-addon/preview";
import * as previewAnnotations from "./preview";

const annotations = setProjectAnnotations([previewAnnotations]);

// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);
