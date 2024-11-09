import { Suspense } from "react";

export type WithChildren = Readonly<{
	children: React.ReactNode;
}>;

export function Provider (props: WithChildren) {
	if (import.meta.env.MODE === 'development') {
		import("./browser").then(({ worker }) => worker.start());
	}

	return (
		<Suspense fallback={null}>
			{props.children}
		</Suspense>
	);
}
