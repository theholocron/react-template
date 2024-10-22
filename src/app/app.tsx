import * as React from "react";
import { Inbox } from "../inbox";
import { Login } from "../login";
import { useAuth } from "./use-auth";

export function App () {
	const [user, logIn] = useAuth();

	if (user?.token) {
		return <Inbox />;
	}

	return <Login onLogIn={logIn} />;
}
