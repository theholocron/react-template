import { http, HttpResponse } from "msw";

const authenticate = http.post("/authenticate", async () => {
	const user = {
		user: {
			name: "Alice Carr",
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", // gitleaks:allow
		},
	};

	return HttpResponse.json(user, { status: 201 });
});

export const handlers = [authenticate];
