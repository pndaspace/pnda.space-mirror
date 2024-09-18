import Image from 'next/image';
import styles from './release.module.css';

type ReleaseProperties = {
    soundCloud: string,
    image: string,
    name: string,
    year: number,
};

export default function Release({
    soundCloud,
    image,
    name,
    year,
}: ReleaseProperties) {
    return (
        <a href={soundCloud} target="_blank" rel="noreferrer" className={styles.release}>
            <div className={styles.cover}>
                <Image src={`/images/releases/${image}`} alt={name} fill />
            </div>
            <div className={styles.releaseTitle}>{`${name} (${year})`}</div>
        </a>
    );
}
