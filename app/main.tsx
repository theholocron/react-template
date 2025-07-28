import * as React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import MSW from "./mocks";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<MSW.Provider>
			<App />
		</MSW.Provider>
	</React.StrictMode>
);
