import Link from 'next/link';
import styles from './sidebar.module.css';

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Link href='/' className={styles.sidebarLogo}>
				<pre className='cyan'>     ,d88b.d88b,</pre>
				<pre className='pink'>     88888888888</pre>
				<pre className='foreground'>     `Y8888888Y&apos;</pre>
				<pre className='cyan'>       `Y888Y&apos;</pre>
				<pre className='pink'>         `Y&apos;</pre>
			</Link>
			<div className={styles.player}>
				<div className={styles.tickerContainer}>
					<span className={styles.ticker}>collarbone - SLLUUUDGE</span>
				</div>
				<div>{'<<============O===>>'}</div>
				&nbsp;&nbsp;&nbsp;
				<a href='https://soundcloud.com/collarbone1' className='orange'>SC</a>
				-
				<a href='https://collarbone.bandcamp.com/' className='cyan'>BC</a>
				-
				<a href='https://open.spotify.com/artist/670j8C5WNz2mHbiHDUeV6I?si=63d0b936da624812' className='green'>Sp</a>
				-
				<a href='https://www.youtube.com/channel/UCxLAUM5qF376aW_M4Cqg6cg' className='red'>YT</a>
				-
				<a href='https://music.apple.com/gb/artist/collarbone/' className='white'>AM</a>
				&nbsp;&nbsp;&nbsp;
			</div>
		</div>
	);
}
