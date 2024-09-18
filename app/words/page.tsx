import getBlogFeed from '@/lib/get-blog-feed';
import getHtmlFromMd from '@/lib/get-html-from-md';
import Link from 'next/link';

export default async function Words() {
    const pageContent = await getHtmlFromMd('/page-content/words.md');
    const posts = await getBlogFeed();

    if (posts == null) return <div>Loading...</div>;
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
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
