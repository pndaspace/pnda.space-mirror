import React, {type FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Music from '../music/music';
import Code from '../code/code';
import Links from '../links/links';

const Router: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="music" element={<Music />} />
			<Route path="code" element={<Code />} />
			<Route path="words" element={<p>Nothing here just yet!</p>} />
			<Route path="links" element={<Links />} />
		</Routes>
	);
};

export default Router;