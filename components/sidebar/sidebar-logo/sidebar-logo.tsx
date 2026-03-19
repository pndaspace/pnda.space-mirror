import Link from 'next/link';
import styles from './sidebar-logo.module.css';

export default function SidebarLogo() {
    return (
        <Link href="/" className={styles.sidebarLogo}>
            <pre className="green">     ,d88b.d88b,</pre>
            <pre className="green">     88888888888</pre>
            <pre className="green">     `Y8888888Y&apos;</pre>
            <pre className="green">       `Y888Y&apos;</pre>
            <pre className="green">         `Y&apos;</pre>
        </Link>
    );
}
