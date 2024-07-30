import React, {type FC, type ReactNode} from 'react';
 
type ListItemProps = {
	children: ReactNode;
	link?: string;
	subtext?: string;
};

const ListItem: FC<ListItemProps> = ({children, link, subtext}) => (
	<div>
		&nbsp;&nbsp;*{' '}
		{link ?
			<a href={link} target='_blank' rel='noreferrer'>{children}</a> :
			<span>{children}</span>
		}
		{subtext && 
			<span> - {subtext}</span>
		}
	</div>
);

export default ListItem;