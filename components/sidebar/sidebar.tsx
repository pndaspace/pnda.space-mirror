import ThemeToggle from '../theme-toggle/theme-toggle';
import SidebarButtons from './sidebar-buttons/sidebar-buttons';
import SidebarLinks from './sidebar-links/sidebar-links';
import SidebarLogo from './sidebar-logo/sidebar-logo';
import styles from './sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarLogo />
            <ThemeToggle />
            <SidebarLinks />
            <SidebarButtons />
        </div>
    );
}
