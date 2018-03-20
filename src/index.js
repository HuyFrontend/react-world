import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Root from './redux/api-example/Root';

// ReactDOM.render(<App />, document.getElementById('root'));


// test from react redux api
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();