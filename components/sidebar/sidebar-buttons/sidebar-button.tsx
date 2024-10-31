import Image from 'next/image';
import styles from './sidebar-buttons.module.css';

type SidebarButtonProperties = {
    fileName: string;
    link: string;
    alt: string;
};

export default function SidebarButton({ fileName, link, alt }: SidebarButtonProperties) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={styles.sidebarButton}>
            <Image src={`/images/8831-buttons/${fileName}`} alt={alt} width={88} height={31} />
        </a>
    );
}
