import SidebarLinks from './sidebar-links';
import SidebarLogo from './sidebar-logo';
import SidebarPlayer from './sidebar-player';
import styles from './sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarLogo />
            <SidebarPlayer />
            <SidebarLinks />
        </div>
    );
}
