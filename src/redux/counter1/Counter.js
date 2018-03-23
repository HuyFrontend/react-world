import React from 'react';
import { connect } from 'react-redux';

class Counter1 extends React.Component {

    increment = () => {
        console.log('step 1 in redux');
        // dispatch
        this.props.dispatch({ type: 'INCREMENT' });
    }
    
    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }
    

    render() {
        console.log('step 3 in redux');
        return (
            <div>
                <h2>Counter 1</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.countProp}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      countProp: state.count
    };
}

export default connect(mapStateToProps)(Counter1);