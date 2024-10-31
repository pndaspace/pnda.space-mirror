'use client';

import { LegacyRef } from 'react';
import { elite, useAsciiText } from 'react-ascii-text';
import Link from 'next/link';
import styles from './logo.module.css';

export default function Logo() {
    const logo = useAsciiText({
        font: elite,
        text: 'pnda!',
        animationLoop: false,
        fadeInOnly: true,
    });

    return (
        <Link href="/" className={styles.logo}>
            <pre ref={logo as LegacyRef<HTMLPreElement>} />
        </Link>
    );
}
