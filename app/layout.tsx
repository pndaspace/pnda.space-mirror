import type {Metadata} from 'next';
import {JetBrains_Mono as jetBrainsMono} from 'next/font/google';
import {type ReactNode} from 'react';
import './global.css';
import './layout.module.css';
import Sidebar from '@/components/sidebar/sidebar.tsx';

const font = jetBrainsMono({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'pnda.space ‧₊˚❀༉‧₊˚.',
};

class RootLayoutProperties {
	children: ReactNode;
}

export default function RootLayout({children}: Readonly<RootLayoutProperties>) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<div className='layout'>
					<Sidebar />
					<div className='content'>
						<div className='contentBlock'>{children}</div>
					</div>
				</div>
			</body>
		</html>
	);
}
