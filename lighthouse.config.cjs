/** @type {import('@lhci/cli').LighthouseConfig} */
module.exports = {
	ci: {
		collect: {
			url: ["http://localhost:5173/"],
			startServerCommand: "pnpm dev",
		},
		assert: {
			assertions: {
				"bf-cache": ["warn", { minScore: 0.9 }],
				"errors-in-console": ["warn", { minScore: 0.9 }],
				"font-display": ["warn", { minScore: 0.9 }],
				label: ["warn", { minScore: 0.9 }],
				"largest-contentful-paint": ["warn", { minScore: 0.9 }],
				"lcp-lazy-loaded": ["warn", { minScore: 0.9 }],
				"non-composited-animations": ["warn", { minScore: 0.9 }],
				"prioritize-lcp-image": ["warn", { minScore: 0.9 }],
				"unused-javascript": ["warn", { maxLength: 0 }],
				"uses-long-cache-ttl": ["warn", { maxLength: 0 }],
			},
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
