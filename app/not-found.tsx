import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/logo/logo.module.css';

function Ghost() {
    return (
        <Image src="/images/spooked.gif" alt="A scary ghost!" width={50} height={50} unoptimized />
    );
}

export default function NotFound() {
    return (
        <>
            <pre className={`${styles.logo} red`}>
                {`
·▄▄▄      ▄• ▄▌▄▄▄             ▄ .▄    ·▄▄▄      ▄• ▄▌▄▄▄  ▄▄
▐▄▄·▪     █▪██▌▀▄ █·    ▪     ██▪▐█    ▐▄▄·▪     █▪██▌▀▄ █·██▌
██▪  ▄█▀▄ █▌▐█▌▐▀▀▄      ▄█▀▄ ██▀▐█    ██▪  ▄█▀▄ █▌▐█▌▐▀▀▄ ▐█·
██▌.▐█▌.▐▌▐█▄█▌▐█•█▌    ▐█▌.▐▌██▌▐▀    ██▌.▐█▌.▐▌▐█▄█▌▐█•█▌.▀
▀▀▀  ▀█▄▀▪ ▀▀▀ .▀  ▀     ▀█▄▀▪▀▀▀ ·    ▀▀▀  ▀█▄▀▪ ▀▀▀ .▀  ▀ ▀
                `}
            </pre>
            <span>
                <Ghost />
                <Ghost />
                <Ghost />
                <Ghost />
                <Ghost />
                <Ghost />
            </span>
            <p>Uh oh, its a g-g-ghost!! scary!!!</p>
            <Link href="/">You decide to run away</Link>
        </>
    );
}
