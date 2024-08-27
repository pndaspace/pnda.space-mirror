import type { Metadata } from 'next';
import { JetBrains_Mono as jetBrainsMono } from 'next/font/google';
import { type ReactNode } from 'react';
import './global.css';
import Sidebar from '@/components/sidebar/sidebar';
import Logo from '@/components/logo/logo';
import styles from './layout.module.css';

const font = jetBrainsMono({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'pnda.space ‧₊˚❀༉‧₊˚.',
};

class RootLayoutProperties {
    children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProperties>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <div className={styles.layout}>
                    <Sidebar />
                    <div className={styles.content}>
                        <Logo />
                        <div className={styles.contentBlock}>{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
