import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Clock } from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const testRoot = ReactDOM.createRoot(document.getElementById('test'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// testRoot.render(
// 	<>
// 		<Clock />
// 		<Clock />
// 		<Clock />
// 	</>
// );
