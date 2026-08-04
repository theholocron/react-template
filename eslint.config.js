import { reactApp } from "@theholocron/eslint-config/bundles/react-app";
import { cypress } from "@theholocron/eslint-config/cypress";

export default [
	...reactApp(),
	...cypress(),
	{
		settings: {
			react: { version: "detect" },
		},
		rules: {
			"react/react-in-jsx-scope": "off",
			"n/no-missing-import": "off",
		},
	},
];
