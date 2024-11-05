'use client';

import { useState } from 'react';
import styles from './theme-toggle.module.css';

export default function ThemeToggle() {
    const [isLight, setIsLight] = useState(false);

    function toggleTheme() {
        document.documentElement.setAttribute('data-theme', !isLight ? 'light' : 'dark');
        setIsLight(!isLight);
    }

    return (
        <a onClick={() => toggleTheme()} type="button" className={styles.themeToggle}>
            {isLight ? '🌙 Go dark' : '☀️ Brighten up'}
        </a>
    );
}
