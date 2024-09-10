import { ProjectData } from '@/types/project-data';
import Image from 'next/image';
import styles from './project.module.css';

export default function Project({
    name,
    image,
    link,
}: ProjectData) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={styles.project}>
            <div className={styles.projectImage}>
                <Image src={`/images/projects/${image}`} alt={name} fill />
            </div>
            <div className={styles.projectTitle}>{name}</div>
        </a>
    );
}
