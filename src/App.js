import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Welcome from './components/welcome/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome name="Sara" age="12" phone="090.123.456"/>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
