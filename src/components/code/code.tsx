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
			<p>
				Theres not a lot here at the moment as this is my secondary GitHub account, but there 
				will hopefully be more soon!
			</p>
			<div className='project-grid'>
				<Project
					name='lily58-weyyu'
					imageAddress='https://github.com/pndaspace/lily58-weyyu/blob/main/full.jpg?raw=true'
					description='Weyland-Yutani themed oled displays for the Lily58 R2G keyboard.'
					link='https://github.com/pndaspace/lily58-weyyu'
				/>
			</div>
		</>
	);
};

export default Code;