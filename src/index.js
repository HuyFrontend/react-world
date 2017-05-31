import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// ====================================================================

ReactDOM.render(
  <div>
    <span className="ex-title"> Ex - Hello </span>
    <h1>Hello, world!</h1>
  </div>,
  document.getElementById('hello-element')
);


// ====================================================================

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

// ====================================================================

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
const commentElement = <Comment date={comment.date} text={comment.text} author={comment.author}/>
// cach 1
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />,
//   document.getElementById('comment-element')
// );
// cach 2
ReactDOM.render(
  commentElement,
  document.getElementById('comment-element')
);

// ====================================================================
// Converting a Function to a Class#
/*
  step 1: add extends - class ClassName extends React.Component
  step 2: add reder function in body of class - render()
  step 3: change props.attributeName -> this.props.attributeName
  step 4: trong Class ta co the tao contructor ex:
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
*/

// function Clock(props) {
//   return (
//     <div>
//       <h1>Convert Function to Class ReactJS</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// -> Class
class Clock extends React.Component {

  render() {
    return (
      <div>
        <h1>Convert Function to Class ReactJS</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
function tick() {
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('clock-element')
  );
}
setInterval(tick, 1000);

// ====================================================================
// Cach su dung State trong React

// Wrong
//this.state.comment = 'Hello';
// Correct
// this.setState({comment: 'Hello'});

// Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });
// Correct
// this.setState((prevState, props) => ({
//   counter: prevState.counter + props.increment
// }));
// Correct
// this.setState(function(prevState, props) {
//   return {
//     counter: prevState.counter + props.increment
//   };
// });


function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Set State in React!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

ReactDOM.render(
  <Clock2 />,
  document.getElementById('clock-element-2')
);
