import rehypeStringify from 'rehype-stringify';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkClassDirective from 'remark-class-directive';
import { read } from 'to-vfile';
import { unified } from 'unified';

export default async function getHtmlFromMd(path: string) {
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkDirective)
        .use(remarkClassDirective)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(await read(path));

    const htmlContent = processedContent.toString();

    return htmlContent;
}
