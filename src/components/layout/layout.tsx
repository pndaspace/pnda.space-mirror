import React, {type FC} from 'react';
import './layout.scss';
import Logo from './logo';
import Sidebar from '../sidebar/sidebar';
import Router from '../router/router';
import {BrowserRouter} from 'react-router-dom';

const Layout: FC = () => (
	<div className="layout">
		<BrowserRouter>
			<Sidebar />
			<div className="content">
				<Logo />
				<div className="content-block">
					<Router />
				</div>
			</div>
		</BrowserRouter>
	</div>
);

export default Layout;
