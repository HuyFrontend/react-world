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
// lifting state
import Calculator from './components/lifting-state/LiftingState';
// React Component as props
import Chat from './components/react-use-as-prop/ReactObjectIsProp';
import Contacts from './components/react-use-as-prop/ReactObjectIsProp';
import SplitPane from './components/react-use-as-prop/ReactObjectIsProp';

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
					<InputSearch textChange={this.handleSearchChange} />
				</div>
				<Welcome name="Sara" age="29" phone={this.state.phone} />
				<SayHello propName="Huy" />

				<div className="form-fields">
					<CustomInput />
					{/* TextArea */}
					<CustomTextArea />

					<CustomSelect />
				</div>
				
				<div className="lifting">
					<Calculator/>
				</div>

				<div className="react-as-prop">
					<SplitPane left={Chat} right={Contacts}/>
				</div>
				<Footer></Footer>
			</div>
		);
	}
}

export default App;
