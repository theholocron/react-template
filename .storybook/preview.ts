import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { type Preview } from "@storybook/react";

const preview: Preview = {
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
};

export default preview;
