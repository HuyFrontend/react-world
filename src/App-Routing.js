import { pushStateLocationPlugin } from '@uirouter/react';
import App from './App';
import Github from './components/github-api/Github';
// import Home from './components/Home';

// define your states
export const states = [
	{ name: 'home', url: '/home', component: App },
	{ name: 'main', url: '/', component: App },
	{ name: 'github', url: '/github', component: Github },
	{ name: 'person', url: '/people/:personId', component: Github }
];

// select your plugins
export const plugins = [
  pushStateLocationPlugin
];