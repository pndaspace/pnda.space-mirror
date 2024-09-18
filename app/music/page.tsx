import Release from '@/components/release/release';
import releases from '@/data/releases.json';
import Highlight from '@/components/highlight';
import styles from './page.module.css';

export default async function Music() {
    return (
        <div>
            <p>
                I release music under <Highlight>collarbone</Highlight>. Typically these tracks
                fall under the <Highlight>jungle</Highlight>, <Highlight>DnB</Highlight>, or {' '}
                <Highlight>breakcore</Highlight> genres - although I have released tunes that fall
                outside of those classifications. I also play <Highlight>bass</Highlight>.
            </p>
            <p>
                Here&apos;s some tunes I&apos;ve made:
            </p>
            <div className={styles.releasesGrid}>
                {releases.map((release) => {
                    const {
                        name,
                        year,
                        soundCloud,
                        image,
                    } = release;

                    return (
                        <div key={name} className={styles.releaseContainer}>
                            <Release
                                name={name}
                                year={year}
                                soundCloud={soundCloud}
                                image={image}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
