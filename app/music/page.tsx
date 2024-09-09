import ReleasesGrid from '@/components/releases/releases-grid';
import getHtmlFromMd from '@/utils/get-html-from-md';

export default async function Music() {
    const pageContent = await getHtmlFromMd('./page-content/music.md');

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
            <ReleasesGrid />
        </>
    );
}
