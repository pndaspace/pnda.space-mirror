import styles from './sidebar.module.css';

export default function SidebarPlayer() {
    return (
        <div className={styles.player}>
            <div className={styles.tickerContainer}>
                <span className={styles.ticker}>collarbone - SLLUUUDGE</span>
            </div>
            <div>{'<<============O===>>'}</div>
            &nbsp;&nbsp;&nbsp;
            <a href="https://soundcloud.com/collarbone1" className="orange">SC</a>
            -
            <a href="https://collarbone.bandcamp.com/" className="cyan">BC</a>
            -
            <a
                href="https://open.spotify.com/artist/670j8C5WNz2mHbiHDUeV6I?si=63d0b936da624812"
                className="green"
            >
                Sp
            </a>
            -
            <a
                href="https://www.youtube.com/channel/UCxLAUM5qF376aW_M4Cqg6cg"
                className="red"
            >
                YT
            </a>
            -
            <a href="https://music.apple.com/gb/artist/collarbone/" className="white">AM</a>
            &nbsp;&nbsp;&nbsp;
        </div>
    );
}
