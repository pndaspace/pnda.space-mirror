import Image from 'next/image';
import styles from './project.module.css';

type ProjectProperties = {
    name: string,
    image: string,
    link: string,
};

export default function Project({
    name,
    image,
    link,
}: ProjectProperties) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={styles.project}>
            <div className={styles.projectImage}>
                <Image src={`/images/projects/${image}`} alt={name} fill />
            </div>
            <div className={styles.projectTitle}>{name}</div>
        </a>
    );
}
