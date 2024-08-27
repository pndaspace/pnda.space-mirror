'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import routeColors from '@/classes/route-colors';

type SidebarLinkProperties = {
    route: string;
    text: string;
};

export default function SidebarLink({ route, text }: SidebarLinkProperties) {
    const routeColor = routeColors[text.toLowerCase()];

    const pathname = usePathname();

    let className = routeColor;
    if (pathname === route) {
        className += ' selected';
    }

    return (
        <Link href={route} className={className}>
            {text}
        </Link>
    );
}
