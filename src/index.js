import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// test redux
import Root from './redux/api-example/Root';
// import LoginRoot from './redux/api-login/LoginRoot';

// build app default
// ReactDOM.render(<App />, document.getElementById('root'));


// build redux api
ReactDOM.render(<Root />, document.getElementById('root'));

// build login redux
// ReactDOM.render(<LoginRoot/>, document.getElementById('root'));
registerServiceWorker();