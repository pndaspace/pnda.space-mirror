import React, {type FC} from 'react';
import Release from './release';

const Music: FC = () => {
	return (
		<>
			<p>
				I produce electronic music under my pseudonym {' '}
				<span className='highlight'>collarbone</span>. My music typically falls under
				the <span className='highlight'>jungle</span>/
				<span className='highlight'>breakcore</span> genres. 
			</p>
			<p>
				Currently I am drawing a lot of influence from artists like {' '} 
				<a href="https://squarepusher.bandcamp.com/" target='_blank' rel='noreferrer'>
					Squarepusher
				</a>, {' '}
				<a href="https://domandroland.bandcamp.com/" target='_blank' rel='noreferrer'>
					Dom & Roland
				</a>, {' '}
				<a href="https://machinegirl.bandcamp.com/" target='_blank' rel='noreferrer'>
					Machine Girl
				</a>, {' '}
				<a href="https://blksmiith.bandcamp.com" target='_blank' rel='noreferrer'>
					BLKSMIITH
				</a>, {' '}
				<a href="https://thorhighheels.bandcamp.com/" target='_blank' rel='noreferrer'>
					ThorHighHeels
				</a>, and a bunch of {' '}
				<a 
					href="https://open.spotify.com/playlist/1TY2kXTpcaxlGoBJZMFTMG?si=3778c20fcd284ad9"
					target='_blank'
					rel='noreferrer'
				>
					others
				</a>.
			</p>
			<p>Heres some tunes I have made:</p>
			<div className="release-grid">
				<Release
					imageAddress="https://i1.sndcdn.com/artworks-Lxb0vy3zJIy40C28-wN4rqA-t500x500.jpg"
					name="Altima"
					year={2024}
					link="https://soundcloud.com/collarbone1/altima"
				/>
				<Release
					imageAddress="https://i1.sndcdn.com/artworks-KEKRbzaazlwObCWf-sFUzUw-t500x500.jpg"
					name="Pink Lemonade"
					year={2024}
					link="https://soundcloud.com/collarbone1/pink-lemonade"
				/>
				<Release
					imageAddress="https://i1.sndcdn.com/artworks-oQQF32xxtama09aN-PQi8pw-t500x500.jpg"
					name="Morning Fields"
					year={2024}
					link="https://soundcloud.com/collarbone1/morning-fields"
				/>
				<Release
					imageAddress="https://i1.sndcdn.com/artworks-UWLTOixuLVEDbsIK-fEBL3w-t500x500.jpg"
					name="summertime"
					year={2024}
					link="https://soundcloud.com/collarbone1/summertime"
				/>
				<Release 
					imageAddress="https://i1.sndcdn.com/artworks-Ry9ydUG1jD1uD3iM-tRsRMQ-t500x500.jpg"
					name="mima"
					year={2023}
					link="https://soundcloud.com/collarbone1/mima"
				/>
			</div>
		</>
	);
};

export default Music;