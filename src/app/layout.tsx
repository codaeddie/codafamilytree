import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import {ThemeProvider } from './theme-provider'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadta = {
	title: 'Coda Family Tree',
	description: 'Eddie Coda-My Family Tree',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<main className="min-h-screen bg-white dark:bg-gray-900">
					{children}
					</main>
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	)
}
	
