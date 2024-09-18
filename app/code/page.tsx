import Project from '@/components/project/project';
import projects from '@/data/projects.json';
import Highlight from '@/components/highlight';
import Link from 'next/link';
import styles from './code.module.css';

export default async function Code() {
    return (
        <>
            <p>
                Here are some small hobby projects I have been working on. For my Linux stuff I
                mostly use <Highlight>C</Highlight> and <Highlight>POSIX shell</Highlight> scripts.
                I work with <Highlight>Typescript</Highlight>, <Highlight>React</Highlight>, and
                {' '}<Highlight>C#</Highlight> for my day job. My main repository host is on {' '}
                <Link href="https://codeberg.org/pndaspace/">CodeBerg</Link>, and I have a secondary
                {' '}<Link href="https://github.com/pndaspace">GitHub</Link> account for
                contributing.
            </p>
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
