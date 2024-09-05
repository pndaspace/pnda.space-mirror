import getHtmlFromMd from '@/utils/get-html-from-md';

export default async function About() {
    const pageContent = await getHtmlFromMd('./page-content/about.md');

    return (
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    );
}
