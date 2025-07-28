import cypress from "@theholocron/eslint-config/cypress.eslint.config.js";
import holocron from "@theholocron/eslint-config/eslint.config.js";
import storybook from "@theholocron/eslint-config/storybook.eslint.config.js";

/**
 * @see https://eslint.org/docs/latest/use/configure/
 * @type {import("eslint").Linter.Config}
 */
const config = [...holocron, ...storybook, ...cypress];

export default config;
