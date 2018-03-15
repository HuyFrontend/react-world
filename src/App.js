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
// Router
import BasicExample from './routers/HeaderRouter';
import AuthRedirect from './routers/AuthRedirect';
import CustomLink from './routers/CustomLink';
import RouterConfig from './routers/RouterConfig';

// Api
import Github from './components/github-api/Github';

//Handle Events
import ManageCountry from './components/country/ManageCountry';

// List
import WelcomeList from './components/welcome/WelcomeList';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phone: '017 264 2108',
			gihubUserName: 'huyvoxuan8489'
		};
	}
	handleSearchChange = (event) => {
		console.log('event.target.value', event.target.value);
		//this.state.phone = event;
		this.setState({
			phone: event.target.value
		});
		console.log('this.state.phone', this.state.phone);

	}

	render() {
		return (
			<div className="App">
				<Header></Header>
				<div className="router">
					<AuthRedirect/>
					<BasicExample/>
					<CustomLink/>
					<RouterConfig/>
				</div>

				<div className="container">
					<InputSearch textChange={this.handleSearchChange} />
				</div>
				<Welcome name="Sara" age="29" phone={this.state.phone} />
				<Welcome />
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
				<div className="api">
					<Github userName={this.state.gihubUserName}/>
					<Github />
				</div>
				<div>
					<ManageCountry/>
				</div>
				<div className="list">
					<WelcomeList/>
				</div>
				<Footer></Footer>
			</div>
		);
	}
}

App.defaultProps = {
	defaultClassName: 'defaultClassName',
};
export default App;
