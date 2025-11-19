import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Void Modding",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
				<meta name="og:title" content="Void modding" />
				<meta name="og:description" content="The new home of modding (maybe)" />
				<meta name="og:url" content="https://voidmodding.org" />
				<meta name="og:image" content="/preview.png" />

				<meta name="twitter:title" content="Void modding" />
				<meta
					name="twitter:description"
					content="The new home of modding (maybe)"
				/>
				<meta name="twitter:image" content="/preview.png" />
				<meta name="twitter:url" content="https://voidmodding.org" />
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
