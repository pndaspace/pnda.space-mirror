import generateRss from '@/lib/generate-rss';
import getBlogFeed from '@/lib/get-blog-feed';
import getHtmlFromMd from '@/lib/get-html-from-md';
import Link from 'next/link';
import styles from './words.module.css';

export default async function Words() {
    const pageContent = await getHtmlFromMd('./page-content/words.md');
    const posts = getBlogFeed();
    generateRss();

    if (posts == null) return <div>Loading...</div>;
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
            <div className={styles.rss}>
                <a type="application/rss+xml" rel="alternate" href="/rss.xml">RSS</a>
            </div>
            {posts.map(({ id, date, title }) => (
                <div key={id}>
                    [
                    {date}
                    ]
                    {' - '}
                    <Link href={`/words/${id}`}>{title}</Link>
                </div>
            ))}
        </>
    );
}
