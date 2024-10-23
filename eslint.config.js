import theHolocron, { theHolocronCypress, theHolocronStorybook } from "@theholocron/eslint-config";

/**
 * @see https://eslint.org/docs/latest/use/configure/
 * @type {import("eslint").Linter.Config}
 */
const config = [...theHolocron, ...theHolocronStorybook, ...theHolocronCypress];

export default config;
