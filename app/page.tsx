import Bucket from '@/components/webring/bucket';
import getHtmlFromMd from '@/utils/get-html-from-md';
import styles from './home.module.css';

export default async function Home() {
    const pageContent = await getHtmlFromMd('./page-content/home.md');

    return (
        <div className={styles.container}>
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
            <Bucket />
        </div>
    );
}
