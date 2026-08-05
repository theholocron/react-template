import "../app/app.css";

import { type Preview } from "@storybook/react";
import { createPreviewAnnotations } from "msw-storybook-addon/preview";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const preview: Preview = {
	...createPreviewAnnotations(),
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
