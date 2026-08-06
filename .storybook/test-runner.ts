import { checkA11y, injectAxe } from "axe-playwright";
import { type Page } from "playwright";

export default {
	async preVisit(page: Page): Promise<void> {
		await injectAxe(page);
	},
	async postVisit(page: Page): Promise<void> {
		await checkA11y(page, "#storybook-root", {
			detailedReport: true,
			detailedReportOptions: {
				html: true,
			},
		});

		// snapshot testing
		// the #storybook-root element wraps the story.
		const elementHandler = await page.$("#storybook-root");
		const innerHTML = await elementHandler.innerHTML();
		expect(innerHTML).toMatchSnapshot();
	},
};
