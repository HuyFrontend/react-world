import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AsyncApp from './AsyncApp'

const store = configureStore()
console.log('store', store.getState());
export default class Root extends Component {
    render() {
        console.log('store render', store.getState());
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        )
    }
}