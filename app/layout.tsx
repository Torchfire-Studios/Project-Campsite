import type { Metadata } from "next";
import {
	Geist,
	Geist_Mono,
	Montserrat,
	Anta,
	Castoro_Titling,
	Castoro,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
});

const anta = Anta({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-anta",
});

const castoroTitling = Castoro_Titling({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-castoro-titling",
});

const castoro = Castoro({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-castoro",
});

export const metadata: Metadata = {
	title: "Torchfire Studios",
	description: "Game Development Studio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${anta.variable} ${castoroTitling.variable} ${castoro.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
