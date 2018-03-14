import React from 'react';
// var createReactClass = require('create-react-class');

/** BEST way to create CLASS
 * dont need to bind event,  to create component in REACT */
class SayHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Hello!' };
    }
    // WARNING: this syntax is experimental!
    // Using an arrow here binds the method:
    handleClick = () => {
        alert(this.state.message);
    }
    arlertName = () => {
        alert(this.props.propName);
    }
    render() {
        return (
            <div className="btn-group">
                <button onClick={this.handleClick}>
                    Say hello
                </button>
                    <button onClick={this.arlertName}>
                        Show name
                </button>
            </div>
        );
    }
}

/** Option 2: Create class and have to binding event */
// class SayHello extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { message: 'Hello!' };
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         alert(this.state.message);
//     }
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 Say hello
//             </button>
//         );
//     }
// }

/** Option 3: create class function - usingcreate-react-class, 
 * no need to binding event BUT - Bad perfomance */
// var SayHello2 = createReactClass({
//     getInitialState: function() {
//         return { message: 'Hello!'};
//     },
//     handleClick: function() {
//         alert(this.state.message);
//     },
//     arlertName: function() {
//         console.log('this props', this.props, this.state);
//         alert(this.props.propName);
//     },
//     render: function() {
//         return (
//             <div className="btn-group">
//                 <button onClick={this.handleClick}>
//                     Say hello
//                 </button>
//                     <button onClick={this.arlertName}>
//                         Show name
//                 </button>
//             </div>
//         );
//     }
// });

export default SayHello;