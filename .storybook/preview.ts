import "../app/app.css";

import { type Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

// Initialize MSW
initialize({ onUnhandledRequest: "bypass" });

const preview: Preview = {
	layout: "centered",
	loaders: [mswLoader],
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
