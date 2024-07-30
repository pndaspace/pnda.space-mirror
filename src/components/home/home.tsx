import React, {type FC} from 'react';
import {Link} from 'react-router-dom';
import Pronouns from '../common/pronouns';

const Home: FC = () => (
	<>
		<p>Hey you! You&apos;ve found my little space on the net :)</p>
		<p>
			I&apos;m <span className="green">Holly</span> <Pronouns />, I&apos;m a 
			&quot;professional&quot; <span className="highlight">web developer</span>, 
			hobbyist <span className="highlight">musician</span>, and {' '}
			<span className="highlight">Linux dork</span>. I make jungle/dnb tunes under my 
			pseudonym <Link to='music'>collarbone</Link>.
		</p>
		<p>
			You can find my <span className="highlight">words</span> on my {' '}
			<Link to="/words">blog</Link>, links to my <span className="highlight">music</span>
			{' '} over <Link to="/music">here</Link>, and my {' '}
			<span className="highlight">code</span> over <Link to="/code">there</Link>. If 
			you&apos;d like to learn more about me and this website, you can visit my {' '}
			<Link to="/about">About</Link> page.
		</p>
		<p>
			You can <span className="highlight">get in touch</span> with me on Discord at {' '}
			<span className='highlight'>pnda.space</span> or by email at {' '}
			<a>pnda at pnda dot space</a>.
		</p>
	</>
);

export default Home;