import RSS from 'rss';
import fs from 'fs';
import getBlogFeed from './get-blog-feed';

export default async function generateRss() {
    const posts = getBlogFeed();

    const siteUrl = process.env.NODE_ENV === 'production'
        ? 'https://pnda.space'
        : 'http://localhost:3000';

    const date = new Date();

    const feedOptions = {
        title: 'pnda.space',
        site_url: siteUrl,
        feed_url: `${siteUrl}/rss.xml`,
        pubDate: date,
        copyright: `All rights reserved ${date.getFullYear()}`,
    };

    const rss = new RSS(feedOptions);

    posts.forEach((post) => {
        rss.item({
            title: post.title,
            description: post.description,
            url: `${siteUrl}/words/${post.id}`,
            date: post.date,
        });
    });

    fs.writeFileSync('./public/rss.xml', rss.xml({ indent: true }));
}
