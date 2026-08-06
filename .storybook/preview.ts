import "../app/app.css";

import { type Preview } from "@storybook/react";
import { createPreviewAnnotations } from "msw-storybook-addon/preview";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const mswAnnotations = createPreviewAnnotations();

const preview: Preview = {
	...mswAnnotations,
	// Re-implement parameters.msw.handlers support — msw-storybook-addon v3
	// starts the worker with no handlers and exposes it via context.msw.
	// This beforeEach reads per-story handlers and applies them before render.
	beforeEach: async (context) => {
		const cleanup = await mswAnnotations.beforeEach(context);
		const handlers = context.parameters?.msw?.handlers;
		if (handlers && context.msw) {
			const list = Array.isArray(handlers) ? handlers : [handlers];
			context.msw.use(...list);
		}
		return cleanup;
	},
	layout: "centered",
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		html: {
			prettier: {
				tabWidth: 4,
				useTabs: true,
			},
		},
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
	tags: ["autodocs"],
};

export default preview;
