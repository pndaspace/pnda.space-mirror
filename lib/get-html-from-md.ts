import rehypeStringify from 'rehype-stringify';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkClassDirective from 'remark-class-directive';
import fs from 'fs';
import { unified } from 'unified';
import matter from 'gray-matter';

export default async function getHtmlFromMd(path: string) {
    // Read the markdown file
    const file = fs.readFileSync(path, 'utf8');

    // Use gray-matter to separate front matter from content
    const { content, data } = matter(file);

    // Process the markdown content to HTML
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkDirective)
        .use(remarkClassDirective)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(content); // Pass only the content without front matter

    // Convert the processed content to string (HTML)
    const htmlContent = processedContent.toString();

    return {
        content: htmlContent,
        data,
    };
}
