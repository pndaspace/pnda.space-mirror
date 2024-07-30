import React, {type FC} from 'react';

const Player: FC = () => {
	return (
		<div className="player">
			<div><a>collarbone</a> - <a>Altima</a></div>
			<div>{'<<============O===>>'}</div>
			&nbsp;&nbsp;&nbsp;
			<a href="https://soundcloud.com/collarbone1" className="orange">SC</a>
			-
			<a href="https://collarbone.bandcamp.com/" className="cyan">BC</a>
			-
			<a href="https://open.spotify.com/artist/670j8C5WNz2mHbiHDUeV6I?si=63d0b936da624812" className="green">Sp</a>
			-
			<a href="https://www.youtube.com/channel/UCxLAUM5qF376aW_M4Cqg6cg" className="red">YT</a>
			-
			<a href="https://music.apple.com/gb/artist/collarbone/" className="white">AM</a>
			&nbsp;&nbsp;&nbsp;
		</div>
	);
};

export default Player;