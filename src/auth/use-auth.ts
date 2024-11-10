"use client";

import * as React from "react";

export interface AuthOptions {
	headers?: { [key: string]: string };
	body?: string;
}

export interface User {
	id: string;
	name: string;
	[key: string]: any; // Allow any additional user properties
}

export interface AuthResponse {
	user: User;
}

function authenticate(options: AuthOptions): Promise<AuthResponse> {
	return fetch("/authenticate", {
		method: "POST",
		...options,
	}).then((res) => res.json());
}

// Define the action type for the reducer
type AuthAction = { type: "LOG_IN"; user: User } | { type: "LOG_OUT" };

// Reducer function for managing user state
function reducer(user: User | null, action: AuthAction): User | null {
	switch (action.type) {
		case "LOG_IN":
			return action.user;
		case "LOG_OUT":
			return null;
		default:
			return user;
	}
}

// Define the credentials type for login
export interface Credentials {
	username: string;
	password: string;
}

export function useAuth(): [User | null, (credentials: Credentials) => void] {
	const [user, dispatch] = React.useReducer(reducer, null);

	const logIn = ({ username, password }: Credentials) => {
		authenticate({ body: JSON.stringify({ username, password }) })
			.then(({ user }) => {
				dispatch({ type: "LOG_IN", user });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return [user, logIn];
}
