import Link from 'next/link';
import styles from './sidebar.module.css';

export default function SidebarLogo() {
    return (
        <Link href="/" className={styles.sidebarLogo}>
            <pre className="cyan">     ,d88b.d88b,</pre>
            <pre className="pink">     88888888888</pre>
            <pre className="foreground">     `Y8888888Y&apos;</pre>
            <pre className="cyan">       `Y888Y&apos;</pre>
            <pre className="pink">         `Y&apos;</pre>
        </Link>
    );
}
