import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const instrumentSerif = Instrument_Serif({
	subsets: ["latin"],
	weight: "400",
	style: ["normal", "italic"],
	variable: "--font-instrument-serif",
});

const manrope = Manrope({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-manrope",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-geist-mono",
});

export const metadata: Metadata = {
	title: "Torchfire Studios",
	description:
		"An independent game studio in Boise, Idaho, building its first games by hand.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${instrumentSerif.variable} ${manrope.variable} ${geistMono.variable} antialiased`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
