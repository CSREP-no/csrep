import '@styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const title = 'CSREP.no';
const description =
	'This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.';

export const metadata: Metadata = {
	title,
	description,
	twitter: {
		card: 'summary_large_image',
		title,
		description,
	},
	metadataBase: new URL('https://www.csrep.no/'),
	themeColor: '#000',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.variable}>{children}</body>
		</html>
	);
}
