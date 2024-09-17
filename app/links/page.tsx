import { LinkSection } from '@/types/links-data';
import getHtmlFromMd from '@/lib/get-html-from-md';
import { promises } from 'fs';

export default async function Links() {
    const pageContent = await getHtmlFromMd('./page-content/links.md');

    const file = await promises.readFile(`${process.cwd()}/data/links.json`, 'utf8');
    const linkSections: LinkSection[] = JSON.parse(file);

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
