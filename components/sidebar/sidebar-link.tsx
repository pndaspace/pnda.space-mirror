'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import routeColors from '@/classes/route-colors';
import { useEffect, useState } from 'react';

type SidebarLinkProperties = {
    route: string;
    text: string;
};

export default function SidebarLink({ route, text }: SidebarLinkProperties) {
    const [linkClass, setLinkClass] = useState('');

    const routeColor = routeColors[text.toLowerCase()];
    const invertedColor = `${routeColor}-inverted`;
    const pathName = usePathname();

    useEffect(() => {
        if (pathName === route) {
            setLinkClass(invertedColor);
        } else {
            setLinkClass(routeColor);
        }
    }, [pathName, route, routeColor, invertedColor]);

    return (
        <Link
            href={route}
            className={linkClass}
            onMouseOver={() => setLinkClass(`${routeColor}-inverted`)}
        >
            {text}
        </Link>
    );
}
