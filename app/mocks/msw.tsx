import React, { Suspense } from "react";

export type WithChildren = Readonly<{
	children: React.ReactNode;
}>;

// Module-level flag so StrictMode double-renders don't trigger a second start().
let started = false;

export function Provider(props: WithChildren) {
	if (import.meta.env.MODE === "development" && !started) {
		started = true;
		import("./browser").then(({ worker }) => worker.start());
	}

	return <Suspense fallback={null}>{props.children}</Suspense>;
}
