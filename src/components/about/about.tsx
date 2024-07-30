import React, {type FC} from 'react';
import ListItem from '../common/list-item';
import Pronouns from '../common/pronouns';
import {Link} from 'react-router-dom';

const About: FC = () => (
	<>
		<h1>Me!</h1>
		<p>
            I&apos;m <span className='green'>Holly</span>! I&apos;m a transfeminine <Pronouns />
			{' '} <span className='highlight'>programmmer</span> and electronic {' '}
			<span className='highlight'>musician</span> from the UK. I also have a bunch of other
            interests including:
		</p>
		<ListItem>Bass guitar</ListItem>
		<ListItem>Linux</ListItem>
		<ListItem>Digital photography</ListItem>
		<ListItem>Model kits</ListItem>
		<ListItem>Mecha anime</ListItem>
		<ListItem>Sci-fi literature</ListItem>
		<ListItem>Coffee</ListItem>
		<p>
            I release <span className='highlight'>music</span> under {' '}
			<Link to="music">collarbone</Link>. Typically these tracks are {' '} 
			<span className='highlight'>jungle</span>/<span className='highlight'>dnb</span> tunes 
            but I also love experementing with new sounds - I love chopping breaks in fun ways and
            making interesting soundscapes. I also play <span className='highlight'>bass</span>, 
            mostly punk, hardcore, shoegaze and alt rock stuff. I have been a professional {' '} 
			<span className='highlight'>full stack dev</span> since 2020, but I&apos;ve been 
			fucking around with programming and tech since I was a teenager.
		</p>
		<h1>This Site</h1>
		<p>
            This is a silly little <span className='highlight'>personal project</span> I&apos;ve 
			been working on in my free time. I wanted to make something that&apos;s more 
			interesting to look at than a Twitter page I can send people to if they want to check 
			out my stuff.
		</p>
		<p>
            I used <span className='highlight'>React</span> as the base for this just because it&apos;s 
            what I use professionaly and it&apos;s what I&apos;m the most comfortable with. I&apos;m using the 
			{' '}<span className='highlight'>SoundCloud</span> API to get the music player working 
            and to show my work on my music page.
		</p>
		<p>
            The design of this site is heavily inspired by those made for the {' '}
			<span className='highlight'>Gemini/Gopher</span> protocols, as well as {' '} 
			<span className='highlight'>BBS</span> - obviously this site is far heavier than what 
            is possible on both. I think a personal site can be a wonderful way of expressing
            yourself to the world, and I&apos;d love to see more people get into it. I have a {' '} 
			<Link to='links'>links</Link> page where I have some of my aesthetic inspirations that
            you may be interested in checking out :). 
		</p>
		<p>
            The sick <span className='highlight'>ASCII art</span> text uses samuelwechtrom&apos;s {' '}
			<a href="https://github.com/samuelweckstrom/react-ascii-text" target="_blank" rel="noreferrer">
                react-ascii-text
			</a> package with the Elite font, The color scheme is {' '}
			<a href="https://draculatheme.com/" target='_blank' rel="noreferrer">Dracula</a>.
		</p>
	</>
);

export default About;