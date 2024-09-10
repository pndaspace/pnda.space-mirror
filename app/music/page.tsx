import Release from '@/components/release/release';
import { ReleaseData } from '@/types/release-data';
import getHtmlFromMd from '@/utils/get-html-from-md';
import { promises } from 'fs';
import styles from './page.module.css';

export default async function Music() {
    const pageContent = await getHtmlFromMd('./page-content/music.md');

    const file = await promises.readFile(`${process.cwd()}/data/releases.json`, 'utf8');
    const releases: ReleaseData[] = JSON.parse(file);

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
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
