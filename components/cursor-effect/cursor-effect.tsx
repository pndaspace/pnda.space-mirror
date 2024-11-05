'use client';

import { useEffect } from 'react';
import { characterCursor } from 'cursor-effects';

// cursor-effects: https://github.com/tholman/cursor-effects

function initialCharacterVelocity() {
    return {
        x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
        y: 1,
    };
}

export default function CursorEffect() {
    useEffect(() => {
        const cursorEffect = characterCursor({
            element: document.getElementById('cursorEffect')!,
            font: '6px monospace',
            colors: ['#8be9fd', '#50fa7b', '#ffb86c', '#ff79c6', '#bd93f9', '#ff5555', '#f1fa8c'],
            characters: ['☻', '♫', '♥', '❀', '☀', '☠', ''],
            characterLifeSpanFunction: () => 120,
            initialCharacterVelocityFunction: initialCharacterVelocity,
        });

        return () => {
            cursorEffect.destroy();
        };
    }, []);

    return null;
}
