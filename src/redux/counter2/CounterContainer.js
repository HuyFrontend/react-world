import React, { Component } from 'react';
import { Root, Container } from 'redux';
import { increment, decrement } from './CounterActions';
import counterStore from './CounterStore';
import Counter from './Counter';

@Root
export default class CounterContainer extends Component {
  render() {
    return (
      <Container stores={counterStore}
                 actions={{ increment, decrement }}>
        {props => <Counter {...props} />}
      </Container>
    );
  }
}