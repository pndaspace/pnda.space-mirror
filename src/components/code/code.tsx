import React, {type FC} from 'react';
import Project from './project';
import './code.scss';

const Code: FC = () => {
	return (
		<>
			<p>
				Here are some small hobby projects I have been working on. I mainly work with React 
				for web projects. For my Linux stuff I mainly use C and POSIX shell scripts. I 
				currently use C#/.NET for my day job.
			</p>
			<div className='project-grid'>
				<Project
					name='roundy-fish'
					imageAddress='https://codeberg.org/pndaspace/roundy-fish/media/branch/main/screenshot.png'
					description='A clone of the roundy prompt for fish'
					link='https://codeberg.org/pndaspace/roundy-fish'
				/>
				<Project
					name="pnda.space"
					imageAddress='https://codeberg.org/avatars/9d5394c5db6390459bf892db94c8b2a1b11b9d2bd4267aeda924fdf2a92023de?size=512'
					description='This website'
					link='https://codeberg.org/pndaspace/pnda.space'
				/>
				<Project
					name="dwm-bar"
					imageAddress='https://raw.githubusercontent.com/hollystandring/dwm-bar/master/sshot.png'
					description='A modular status bar for dwm'
					link='https://codeberg.org/pndaspace/dwm-bar'
				/>
				<Project
					name='lily58-aliens'
					imageAddress='https://codeberg.org/pndaspace/lily58-aliens/media/branch/main/full.jpg'
					description='Aliens themed OLED displays for Lily58 R2G'
					link='https://codeberg.org/pndaspace/lily58-aliens'
				/>
				<Project
					name='nmenu'
					imageAddress='https://raw.githubusercontent.com/hollystandring/nmenu/master/test1.png'
					description='Menu system for ncurses'
					link='https://codeberg.org/pndaspace/nmenu'
				/>
			</div>
		</>
	);
};

export default Code;