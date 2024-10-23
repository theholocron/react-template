import { Default as TaskListDefault } from "../tasks/task-list.story";

describe("The Login Page", () => {
	beforeEach(() => {
		// Mock the authentication request
		cy.intercept("POST", "/authenticate", {
			statusCode: 201,
			body: {
				user: {
					name: "Alice Carr",
					token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", // gitleaks:allow
				},
			},
		});

		// Mock the tasks fetch request
		cy.intercept("GET", "/tasks", {
			statusCode: 201,
			body: TaskListDefault.args,
		});
	});

	it("user can authenticate using the login form", () => {
		const email: string = "alice.carr@test.com";
		const password: string = "k12h1k0$5;lpa@Afn"; // gitleaks:allow

		// Visit the home page
		cy.visit("/");

		// Fill out the form with typed values
		cy.get("input[name=email]").type(email);
		cy.get("input[name=password]").type(password);

		// Click the sign-in button
		cy.get("button[type=submit]").click();

		// Assert the task list is rendered with 6 tasks
		cy.get('[aria-label="tasks"] div').should("have.length", 6);
	});
});
