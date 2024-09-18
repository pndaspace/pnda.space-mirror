import linkSections from '@/data/links.json';

export default async function Links() {
    return (
        <>
            <p>
                Here are some neat things loosely related to this site/that I like that I think you
                should check out! Always looking to expand this list with more stuff so please do
                get in touch! I try to keep this list up to date with some lesser-known stuff that I
                genuinley would like to get more attention :)
            </p>
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
