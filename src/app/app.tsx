import { useAuth } from "./useAuth";
import InboxScreen from "../inbox/inbox";
import LoginScreen from "../login/login";
import "./index.css";
function App() {
  const [user, logIn] = useAuth();

  return <>{user?.token ? <InboxScreen /> : <LoginScreen onLogIn={logIn} />}</>;
}

export default App;
