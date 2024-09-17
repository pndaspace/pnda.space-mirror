import Link from 'next/link';
import getHtmlFromMd from '@/lib/get-html-from-md';
import styles from './post.module.css';

export default async function Post({ params }: { params: { id: string; }; }) {
    const file = `${params.id}.md`;
    const pageContent = await getHtmlFromMd(`./posts/${file}`);

    return (
        <>
            <h1>{pageContent.data.title}</h1>
            <div>
                <Link href="/words">&lt;- back</Link>
                {' | '}
                <span className={styles.date}>{pageContent.data.date}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
            <div className={styles.signature}>- Holly</div>
        </>
    );
}
