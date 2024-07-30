import React, {type FC} from 'react';
import {Link} from 'react-router-dom';

const SidebarLogo: FC = () => (
	<Link className="sidebar-logo" to="/">
		<pre className="cyan">     ,d88b.d88b,</pre>
		<pre className="pink">     88888888888</pre>
		<pre className="white">     `Y8888888Y&apos;</pre>
		<pre className="cyan">       `Y888Y&apos;</pre>
		<pre className="pink">         `Y&apos;</pre>
	</Link>
);

export default SidebarLogo;