import React from 'react';

class Welcome extends React.Component {
	render() {
		return (
			<div>
				<h3> Welcome React </h3>
				<h4> My Name: {this.props.name} </h4>
				<h5> My Age: {this.props.age} </h5>
				<h5> My Phone: {this.props.phone} </h5>
			</div>
		)
	}
}

Welcome.defaultProps = {
	defaultClassName: 'defaultClassName',
	name: 'Vo Xuan Huy',
	phone: '017 264 2108',
	age: 29
};
export default Welcome;