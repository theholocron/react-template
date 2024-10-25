/**
 * @see https://textlint.github.io/docs/configuring.html
 * @type {import(@textlint/types).TextlintConfig}
 */
const config = {
	filters: {
		comments: true,
	},
	rules: {
		"preset-ja-technical-writing": true,
		"common-misspellings": true,
		prh: {
			rules: [
				{
					expected: JavaScript,
					pattern: /javascript/i,
				},
			],
		},
		"en-spell": true,
		"no-dead-link": true,
		terminology: {
			terms: [
				{ term: frontend, suggestion: front-end }
			],
		},
		"no-empty-section": true,
		"spellcheck-tech-word": true,
	},
};

export default config;
