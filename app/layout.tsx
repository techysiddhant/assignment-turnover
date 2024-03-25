import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Banner from "./_components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ECOMMERCE",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<Banner />
				<main>{children}</main>
			</body>
		</html>
	);
}
