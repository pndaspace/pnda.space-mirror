import { getBlogFeed } from '@/utils/blogs';
import getHtmlFromMd from '@/utils/get-html-from-md';
import Link from 'next/link';

export default async function Words() {
    const pageContent = await getHtmlFromMd('./page-content/music.md');
    const posts = getBlogFeed();

    if (posts == null) return <div>Loading...</div>;
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
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
