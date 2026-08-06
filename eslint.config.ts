import { reactApp } from "@theholocron/eslint-config/bundles/react-app";
import { cypress } from "@theholocron/eslint-config/cypress";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
	...reactApp(),
	...cypress(),
	{
		settings: {
			react: { version: "19" },
		},
		rules: {
			"react/react-in-jsx-scope": "off",
			"n/no-missing-import": "off",
		},
	},
];

export default config;
