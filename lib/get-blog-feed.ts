import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function getBlogFeed() {
    type PostMetaData = {
        title: string;
        date: string;
        description: string;
    };

    const directory = path.join(process.cwd(), 'posts');

    const fileNames = fs.readdirSync(directory);
    const posts = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const postPath = path.join(directory, fileName);
        const contents = fs.readFileSync(postPath, 'utf8');
        const matterResult = matter(contents);
        const metadata = matterResult.data as PostMetaData;

        return {
            id,
            title: metadata.title,
            date: metadata.date,
            description: metadata.description,
        };
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
