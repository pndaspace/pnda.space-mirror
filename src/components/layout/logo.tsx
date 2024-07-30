import React, {type LegacyRef, type FC, type MutableRefObject} from 'react';
import {elite, useAsciiText} from 'react-ascii-text';
import './layout.scss';
import RouteColors from '../router/route-colors';
import {type Location, useLocation} from 'react-router-dom';

const Logo: FC = () => {
	const location: Location = useLocation();
	const name: string = location.pathname.substring(1);

	const logo: MutableRefObject<HTMLPreElement | undefined> = useAsciiText({
		font: elite,
		text: 'pnda.space',
		animationLoop: false,
		fadeInOnly: true,
	});

	return (
		<div className={`logo-container ${RouteColors[name]}`}>
			<pre ref={logo as LegacyRef<HTMLPreElement>}></pre>
		</div>
	);
};

export default Logo;
