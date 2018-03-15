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

SayHello.defaultProps = {
	defaultClassName: 'defaultClassName',
};

export default SayHello;