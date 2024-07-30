import React, {type FC} from 'react';
import {type Root, createRoot} from 'react-dom/client';
import Layout from './components/layout/layout';
import '@fontsource/jetbrains-mono';
import './index.scss';

const App: FC = () => (
	<Layout />
);

const container = document.getElementById('app');
const root: Root = createRoot(container!);
root.render(<App />);
