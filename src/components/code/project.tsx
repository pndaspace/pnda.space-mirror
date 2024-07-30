import React, {type FC} from 'react';

type ProjectProps = {
	name: string;
	imageAddress: string;
	description: string;
	link: string;
};

const Project: FC<ProjectProps> = ({name, imageAddress, description, link}) => (
	<>
		<a href={link} target='_blank' rel='noreferrer' className='project'>
			<img src={imageAddress} alt={name} className='project-image' />
			<div className='project-title'>{name}</div>
			<div className='overlay'>
				<div className='overlay-text'>{description}</div>
			</div>
		</a>
	</>
);

export default Project;