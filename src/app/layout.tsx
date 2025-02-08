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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${ralewayFont.variable} ${sofiaFont.variable}`}>
				{children}
			</body>
		</html>
	);
}
