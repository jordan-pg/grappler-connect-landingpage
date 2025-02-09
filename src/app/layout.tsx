// layout.tsx
import type { Metadata } from "next";
import { Raleway, Sofia_Sans_Extra_Condensed } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const ralewayFont = Raleway({
	variable: "--font-raleway",
	subsets: ["latin"],
});
const sofiaFont = Sofia_Sans_Extra_Condensed({
	subsets: ["latin"],
	variable: "--font-sofia",
	weight: "700",
});

export const metadata: Metadata = {
	title: "Grapplers Connect",
	description: "Connecting Elite Coaches & Grapplers",
	keywords: ["grappling", "coaching", "martial arts", "BJJ", "wrestling", "judo", "connect", "training"],
	robots: "index, follow",
	metadataBase: new URL("https://grapplersconnect.com"),
	openGraph: {
		title: "Grapplers Connect",
		description: "Connecting Elite Coaches & Grapplers",
		url: "https://grapplersconnect.com",
		images: [
			{
				url: "https://grapplersconnect.com/logo-center.png",
				width: 800,
				height: 600,
			},
		],
		siteName: "Grapplers Connect",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Link to the manifest file */}
				<link rel="manifest" href="/manifest.json" />
				{/* Apple touch icons (optional, but recommended for iOS support) */}
				<link rel="apple-touch-icon" sizes="192x192" href="/icons/192.png" />
				<link rel="apple-touch-icon" sizes="512x512" href="/icons/512.png" />
				{/* Theme color for browsers */}
				<meta name="theme-color" content="#000000" />
				{/* The rest of your metadata is injected by Next.js */}
			</head>
			<body className={`${ralewayFont.variable} ${sofiaFont.variable}`}>
				{children}
			</body>
		</html>
	);
}
