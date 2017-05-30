import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// Hello World 1
ReactDOM.render(
  <div>
    <span className="ex-title"> Ex - Hello </span>
    <h1>Hello, world!</h1>
  </div>,
  document.getElementById('hello-world-1')
);

// Hello world 2

function Welcome(props) {
  return <div>
     <span className="ex-title"> Ex - element attribute </span>
    <h3> Welcome React </h3>
    <h4> Name: {props.name} </h4>
    <h5> Age: {props.age} </h5>
    <h5> Phone: {props.phone} </h5>
  </div>
}

const element = <Welcome name="Sara" age="12" phone="090.123.456"/>;
ReactDOM.render(
  element,
  document.getElementById('custom-element')
);
