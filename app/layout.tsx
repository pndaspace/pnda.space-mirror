import type { Metadata } from 'next';
import { JetBrains_Mono as jetBrainsMono } from 'next/font/google';
import { type ReactNode } from 'react';
import './global.css';
import Sidebar from '@/components/sidebar/sidebar';
import Logo from '@/components/logo/logo';
import Script from 'next/script';
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
                <Script src="scripts/oneko.js" strategy="lazyOnload" />
                <div className={styles.layout}>
                    <Sidebar />
                    <div className={styles.content}>
                        <div className={styles.logoContainer}>
                            <Logo />
                        </div>
                        <div className={styles.contentBlock}>{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
