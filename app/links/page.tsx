import getHtmlFromMd from '@/lib/get-html-from-md';
import linkSections from '@/data/links.json';

export default async function Links() {
    const pageContent = await getHtmlFromMd('/page-content/links.md');

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
            {linkSections.map((linkSection) => {
                const {
                    name,
                    links,
                } = linkSection;

                return (
                    <>
                        <h1>{name}</h1>
                        {links.map((linkItem) => {
                            const {
                                title,
                                link,
                                description,
                            } = linkItem;

                            return (
                                <div key={title}>
                                    &nbsp;&nbsp;*
                                    {' '}
                                    <span>
                                        <a href={link} target="_blank" rel="noreferrer">{title}</a>
                                        {' - '}
                                        {description}
                                    </span>
                                </div>
                            );
                        })}
                    </>
                );
            })}
        </>
    );
}
