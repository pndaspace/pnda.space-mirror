import Image from 'next/image';
import { ReleaseData } from '@/types/release-data';
import styles from './release.module.css';

export default function Release({
    soundCloud,
    image,
    name,
    year,
}: ReleaseData) {
    return (
        <a href={soundCloud} target="_blank" rel="noreferrer" className={styles.release}>
            <div className={styles.cover}>
                <Image src={`/images/releases/${image}`} alt={name} fill />
            </div>
            <div className={styles.releaseTitle}>{`${name} (${year})`}</div>
        </a>
    );
}
