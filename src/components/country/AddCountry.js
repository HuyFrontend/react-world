import React, { Component } from 'react';
class AddCountry extends Component {
	constructor() {
		super();
	}
	handleClick =() => {
		console.log(this.props, this.props.country);
		if (this.props.country) {
			this.props.addCountry(this.props.country);
		}
	}
	render() {
		return (
			<div className="AddCountry">
				<div>
					<input type="text" placeholder="Country" onChange={this.props.countryChange}/>
					<button className="add-item" onClick={this.handleClick}>Add Country</button>
				</div>
				<p> I want to travel in "<strong>{this.props.country === '' ? 'country': this.props.country}</strong>"</p>
			</div>
		)
	}
}
export default AddCountry;