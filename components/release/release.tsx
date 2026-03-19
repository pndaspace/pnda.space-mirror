import Image from 'next/image';
import styles from './release.module.css';

type ReleaseProperties = {
    image: string,
    name: string,
    year: number,
    format: string,
    label: string,
    bandcamp?: string,
    spotify?: string,
    soundcloud?: string,
    apple?: string,
    youtube?: string;
};

export default function Release({
    image,
    name,
    year,
    format,
    label,
    bandcamp,
    spotify,
    soundcloud,
    apple,
    youtube,
}: ReleaseProperties) {
    return (
        <div className={styles.release}>
            <Image src={`/images/releases/${image}`} alt={name} width={170} height={170} />
            <div>
                <div><b><i>{name}</i></b></div>
                <br />
                <div className="green">{format}</div>
                <div className="cyan">{year}</div>
                <div className="pink">{label}</div>
                <br />
                <div>
                    {bandcamp != null && <span><a href={bandcamp} className="cyan">BC</a> </span>}
                    {spotify != null && <span><a href={spotify} className="green">SP</a> </span>}
                    {soundcloud != null && <span><a href={soundcloud} className="orange">SC</a> </span>}
                    {apple != null && <span><a href={apple} className="foreground">AM</a> </span>}
                    {youtube != null && <span><a href={youtube} className="red">YT</a></span>}
                </div>
            </div>
        </div>
    );
}
