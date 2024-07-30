import React, {type FC} from 'react';
import './music.scss';

type ReleaseProps = {
	name: string;
	imageAddress: string;
	year: number;
	link: string;
};

const Release: FC<ReleaseProps> = ({imageAddress, name, year, link}) => (
	<a href={link} target='_blank' rel='noreferrer' className='release'>
		<img src={imageAddress} alt={name} className='release-image' />
		<div>{name} ({year})</div>
	</a>
);

export default Release;