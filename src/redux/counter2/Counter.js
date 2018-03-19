import React from 'react';
import PropTypes from 'prop-types';
export default class Counter {
    static propTypes = {
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        counter: PropTypes.number.isRequired
    };

    render() {
        const { increment, decrement, counter } = this.props;
        return (
            <div>
                <h3>Counter 2</h3>
                <p>
                    Clicked: {counter} times
                    {' '}
                    <button onClick={() => increment()}>+</button>
                    {' '}
                    <button onClick={() => decrement()}>-</button>
                </p>
            </div>
        );
    }
}