import { reactApp } from "@theholocron/eslint-config/bundles/react-app";
import { cypress } from "@theholocron/eslint-config/cypress";

/**
 * @see https://eslint.org/docs/latest/use/configure/
 * @type {import("eslint").Linter.Config}
 */
const config = [
	...reactApp(),
	...cypress(),
	{
		settings: {
			react: { version: "detect" },
		},
	},
];

export default config;
