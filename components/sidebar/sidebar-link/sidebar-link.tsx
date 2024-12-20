import Link from 'next/link';
import routeColors from '@/classes/route-colors';

type SidebarLinkProperties = {
    route: string;
    text: string;
};

export default function SidebarLink({ route, text }: SidebarLinkProperties) {
    const routeColor = routeColors[text.toLowerCase()];

    return (
        <div>
            {route.startsWith('http')
                ? <a href={route} className={routeColor} target="_blank">{text}</a>
                : <Link href={route} className={routeColor}>{text}</Link>}
        </div>
    );
}
