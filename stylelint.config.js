import theholocron from "@theholocron/stylelint-config";

/**
 * @see https://stylelint.io/user-guide/configure/
 * @type {import("stylelint").Config}
 */
const config = {
	extends: [...theholocron],
};

export default config;
