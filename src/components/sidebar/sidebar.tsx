import React, {type FC} from 'react';
import './sidebar.scss';
import Player from './player';
import SideBarLink from './sidebar-link';
import SidebarLogo from './sidebar-logo';

const Sidebar: FC = () => (
	<div className="sidebar">
		<SidebarLogo />
		<Player />
		<SideBarLink route="/" text="Home" />
		<SideBarLink route="/about" text ="About" />
		<SideBarLink route="/music" text="Music" />
		<SideBarLink route="/code" text="Code" />
		<SideBarLink route="/words" text="Words" />
		<SideBarLink route="/links" text="Links" />
	</div>
);

export default Sidebar;