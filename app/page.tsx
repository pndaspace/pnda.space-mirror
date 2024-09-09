import Bucket from '@/components/webring/bucket';
import getHtmlFromMd from '@/utils/get-html-from-md';

export default async function Home() {
    const pageContent = await getHtmlFromMd('./page-content/home.md');

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
            <Bucket />
        </>
    );
}
