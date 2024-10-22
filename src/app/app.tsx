import * as React from "react";
import { InboxScreen } from "../inbox";
import { LoginScreen } from "../login";
import { useAuth } from "./use-auth";

export function App () {
	const [user, logIn] = useAuth();

	if (user?.token) {
		return <InboxScreen />;
	}

	return <LoginScreen onLogIn={logIn} />;
}
