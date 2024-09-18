import Release from '@/components/release/release';
import getHtmlFromMd from '@/lib/get-html-from-md';
import releases from '@/data/releases.json';
import styles from './page.module.css';

export default async function Music() {
    const pageContent = await getHtmlFromMd('/page-content/music.md');

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
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
        </>
    );
}
