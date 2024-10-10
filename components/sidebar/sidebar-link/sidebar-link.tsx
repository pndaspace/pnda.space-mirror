import Link from 'next/link';
import routeColors from '@/classes/route-colors';

type SidebarLinkProperties = {
    route: string;
    text: string;
};

export default function SidebarLink({ route, text }: SidebarLinkProperties) {
    const routeColor = routeColors[text.toLowerCase()];

    if (route.startsWith('http')) {
        return <a href={route} className={routeColor} target="_blank">{text}</a>;
    }
    return <Link href={route} className={routeColor}>{text}</Link>;
}
