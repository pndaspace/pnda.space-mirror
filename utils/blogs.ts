import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type PostMetaData = {
    title: string;
    date: string;
};

const directory = path.join(process.cwd(), 'posts');

const fileNames = fs.readdirSync(directory);

function getIdFromFileName(fileName: string) {
    return fileName.replace(/\.md$/, '')
}

export function getBlogFeed() {
    const posts = fileNames.map((fileName) => {
        const id = getIdFromFileName(fileName);
        const postPath = path.join(directory, fileName);
        const contents = fs.readFileSync(postPath, 'utf8');
        const matterResult = matter(contents);
        const metadata = matterResult.data as PostMetaData;

        return {
            id,
            title: metadata.title,
            date: metadata.date,
            ...matterResult.data,
        };
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostIds() {
    return fileNames.map((fileName) => (
        params: {
            id: getIdFromFileName(fileName),
        }
    ))
}
