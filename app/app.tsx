import { Inbox, Login, useAuth } from "../src/";
import "./app.css";

export function App () {
	const [user, logIn] = useAuth();

	if (user?.token) {
		return <Inbox />;
	}

	return <Login onLogIn={logIn} />;
}
