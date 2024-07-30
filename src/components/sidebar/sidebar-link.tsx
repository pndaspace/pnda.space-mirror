import React, {type FC} from 'react';
import useKeyDown from '../../hooks/useKeyDown';
import {Link, type NavigateFunction, useMatch, useNavigate} from 'react-router-dom';
import RouteColors from '../router/route-colors';

type SideBarLinkProps = {
	route: string;
	text: string;
};

const SideBarLink: FC<SideBarLinkProps> = ({route, text}) => {
	const colorClassName: string = RouteColors[text.toLowerCase()];
	const navigate: NavigateFunction = useNavigate();

	const isSelected = useMatch(route);

	const firstLetter: string = text.substring(0, 1);
	const remainingLetters: string = text.substring(1);

	useKeyDown(() => {
		navigate(route);
	}, [firstLetter.toLowerCase()]);

	let className = colorClassName;
	if (isSelected) {
		className += ` selected ${colorClassName}}`;
	}

	return (
		<Link to={route} className={className}>
			({firstLetter}){remainingLetters}
		</Link>
	);
};

export default SideBarLink;