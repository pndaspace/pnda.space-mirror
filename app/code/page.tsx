import getHtmlFromMd from '@/utils/get-html-from-md';
import { promises } from 'fs';
import { ProjectData } from '@/types/project-data';
import Project from '@/components/project/project';
import styles from './code.module.css';

export default async function Code() {
    const pageContent = await getHtmlFromMd('./page-content/code.md');

    const file = await promises.readFile(`${process.cwd()}/data/projects.json`, 'utf8');
    const projects: ProjectData[] = JSON.parse(file);

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
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
