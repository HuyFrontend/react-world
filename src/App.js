import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Welcome from './components/welcome/Welcome';
import InputSearch from './components/input-search/InputSearch';
import SayHello from './components/hello/SayHello';
// form
import CustomInput from './components/forms/CustomInput';
import CustomTextArea from './components/forms/TextArea';
import CustomSelect from './components/forms/CustomSelect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '017 264 2108'
    };
  }
  handleSearchChange = (event) => {
    console.log('event.target.value', event.target.value);
    this.state.phone = event;
    console.log('this.state.phone', this.state.phone);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <InputSearch textChange={this.handleSearchChange}/>
        </div>
        <Welcome name="Sara" age="29" phone={this.state.phone}/>
        <SayHello propName="Huy"/>
        
        <div className="form-fields">
          <CustomInput/>
          {/* TextArea */}
          <CustomTextArea/>

           <CustomSelect/>
        </div>
        
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
