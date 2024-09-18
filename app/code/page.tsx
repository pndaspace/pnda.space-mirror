import getHtmlFromMd from '@/lib/get-html-from-md';
import Project from '@/components/project/project';
import projects from '@/data/projects.json';
import styles from './code.module.css';

export default async function Code() {
    const pageContent = await getHtmlFromMd('/page-content/code.md');

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
            <div className={styles.projectGrid}>
                {projects.map((project) => {
                    const {
                        name,
                        image,
                        link,
                    } = project;

                    return (
                        <div key={name} className={styles.projectContainer}>
                            <Project
                                name={name}
                                image={image}
                                link={link}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
