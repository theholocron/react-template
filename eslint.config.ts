import { reactApp } from "@theholocron/eslint-config/bundles/react-app";
import { cypress } from "@theholocron/eslint-config/cypress";
import type { Linter } from "eslint";

export default [
	...reactApp(),
	...cypress(),
	{
		settings: {
			react: { version: "detect" },
		},
	},
] satisfies Linter.Config[];
