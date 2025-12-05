import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from './_components/Navigation';
import ReduxProvider from './_components/ReduxProvider';
import ShoopingBarIcon from './_components/ShoopingBarIcon';
import { auth } from './_lib/auth';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'pizza-delivery',
	description: 'Get Your pizza at your doorstep',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	const fullName = session?.user?.name || '';
	const firstName = fullName.split(' ')[0] || 'guest';
	
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
				<ReduxProvider>
					<Navigation session={session}/>
					<div className='text-center pt-2 flex items-center justify-center  '>
				
						<p> welcome</p>
						<span className='ml-2 text-2xl font-bold text-red-700'>{firstName}🎋</span>
					</div>
					{children}

					<div className='fixed bottom-6 right-6 md:bottom-10 md:right-[200px] hover:-translate-y-2 transition-all'>
						<ShoopingBarIcon />
					</div>
				</ReduxProvider>
			</body>
		</html>
	);
}
