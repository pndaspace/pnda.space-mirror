import SidebarLink from '../sidebar-link/sidebar-link';
import styles from './sidebar-links.module.css';

export default function SidebarLinks() {
    return (
        <div className={styles.sidebarLinksContainer}>
            <SidebarLink route="/" text="Home" />
            <SidebarLink route="/about" text="About" />
            <SidebarLink route="/music" text="Music" />
            <SidebarLink route="/code" text="Code" />
            <SidebarLink route="https://pndaspace.bearblog.dev/blog/" text="Words" />
            <SidebarLink route="/links" text="Links" />
        </div>
    );
}
