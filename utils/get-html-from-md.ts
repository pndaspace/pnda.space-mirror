import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { read } from 'to-vfile';
import { unified } from 'unified';

export default async function getHtmlFromMd(path: string) {
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeDocument)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(await read(path));

    const htmlContent = processedContent.toString();

    return htmlContent;
}
