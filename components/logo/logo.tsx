'use client';

import routeColors from '@/classes/route-colors';
import { usePathname } from 'next/navigation';
import { LegacyRef } from 'react';
import { elite, useAsciiText } from 'react-ascii-text';
import styles from './logo.module.css';

export default function Logo() {
    const pathName = usePathname();

    const logo = useAsciiText({
        font: elite,
        text: 'pnda.space',
        animationLoop: false,
        fadeInOnly: true,
    });

    return (
        <div className={`${routeColors[pathName.substring(1)]} ${styles.logo}`}>
            <pre ref={logo as LegacyRef<HTMLPreElement>} />
        </div>
    );
}
