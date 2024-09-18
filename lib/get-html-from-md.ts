import rehypeStringify from 'rehype-stringify';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkClassDirective from 'remark-class-directive';
import { unified } from 'unified';
import matter from 'gray-matter';
import getSiteUrl from './get-site-url';

export default async function getHtmlFromMd(path: string) {
    const siteUrl = getSiteUrl();

    const response = await fetch(`${siteUrl}${path}`);

    const file = await response.text();

    const { content, data } = matter(file);

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkDirective)
        .use(remarkClassDirective)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(content);

    const htmlContent = processedContent.toString();

    return {
        content: htmlContent,
        data,
    };
}
