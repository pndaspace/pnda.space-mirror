import styles from './sidebar-links.module.css';

export default function SidebarLinks() {
    return (
        <div className={styles.sidebarLinksContainer}>
            <div><a href="https://surfnet.live" className='green'>🌊 SURFNET</a></div>
            <div><a href="https://null.earth" className='purple'>🌍 null.earth</a></div>
            <br />
            <div><a href="https://collarbone.bandcamp.com/" className='cyan'>🫐 Bandcamp</a></div>
            <div><a href="https://soundcloud.com/collarbone1" className='orange'>🍊 SoundCloud</a></div>
            <div><a href="https://open.spotify.com/artist/670j8C5WNz2mHbiHDUeV6I" className='green'>🍏 Spotify</a></div>
            <div><a href="https://music.apple.com/us/artist/collarbone/1719884762" className='foreground'>🥥 Apple Music</a></div>
            <div><a href="https://www.youtube.com/channel/UCxLAUM5qF376aW_M4Cqg6cg" className='red'>🍓 YouTube</a></div>
            <div><a href="https://www.instagram.com/collarbone_music/" className='purple'>🍇 Instagram</a></div>
        </div >
    );
}
