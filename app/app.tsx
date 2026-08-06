import "./app.css";

import { Inbox, Login, useAuth } from "../src/";

export function App() {
	const [user, logIn] = useAuth();

	if (user?.token) {
		return <Inbox />;
	}

	return <Login onLogIn={logIn} />;
}
