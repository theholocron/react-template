import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { type Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

import "../src/app/index.css";

// Initialize MSW
initialize();

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
			// defaultViewport: 'ipad',
		},
	},
	tags: ["autodocs"],
};

export default preview;
