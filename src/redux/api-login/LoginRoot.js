import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Login from './Login';

const store = configureStore();
console.log('store', store.getState());
class LoginRoot extends Component {
    render() {
        console.log('store render', store.getState());
        return (
            <Provider store={store}>
                <Login />
            </Provider>
        )
    }
};
export default LoginRoot;