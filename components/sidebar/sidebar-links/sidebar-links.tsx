import SidebarLink from '../sidebar-link/sidebar-link';

export default function SidebarLinks() {
    return (
        <>
            <SidebarLink route="/" text="Home" />
            <SidebarLink route="/about" text="About" />
            <SidebarLink route="/music" text="Music" />
            <SidebarLink route="/code" text="Code" />
            <SidebarLink route="https://pndaspace.bearblog.dev/blog/" text="Words" />
            <SidebarLink route="/links" text="Links" />
        </>
    );
}
