import matter from 'gray-matter';
import getSiteUrl from './get-site-url';

export default async function getBlogFeed() {
    type PostMetaData = {
        title: string;
        date: string;
        description: string;
    };

    const siteUrl = `${getSiteUrl()}/posts`;

    const fileNames = [
        'welcome.md',
    ];

    const posts = await Promise.all(fileNames.map(async (fileName) => {
        const filePath = `${siteUrl}/${fileName}`;
        const response = await fetch(filePath);
        const contents = await response.text();
        const matterResult = matter(contents);
        const metadata = matterResult.data as PostMetaData;

        return {
            id: fileName.replace(/\.md$/, ''),
            title: metadata.title,
            date: metadata.date,
            description: metadata.description,
        };
    }));

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
