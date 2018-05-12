import React, { Component } from 'react';
class CountryList extends Component {
	constructor() {
		super();
	}
	/** 
	 * events
	 */
	editClick = (e) => {
		this.props.editCountry(e.target.value);
	}
	saveClick = (e) => {
		const { value, parentNode } = e.target;
		const newCountry = parentNode.previousSibling.firstChild.value ? parentNode.previousSibling.firstChild.value : value;
		this.props.saveCountry(value, newCountry);
	}
	doneClick = (e) => {
		const { value } = e.target;
		this.props.doneCountry(value);
	}
	deleteClick = (e) => {
		const { value } = e.target;
		this.props.deleteCountry(value);
	}
	render() {
		return (
			<div className="CountryList">
				<h3> List of countries that I want to travle</h3>
				<ul>
				{
					this.props.countries.filter( (coun) => {
						return coun.done === false;
					}).map( (coun, index) => {
						return (
							<li key={coun.name + index}>
								<span>{coun.edit ? <input type="text" placeholder={coun.name} /> : coun.name}</span>
								<span>
									<button value={coun.name} className="Edit" onClick={coun.edit ? this.saveClick : this.editClick}>{coun.edit ? 'Save' : 'Edit'}</button>
									
									<button value={coun.name} onClick={this.deleteClick} className="Delete">Delete</button>
									<button value={coun.name} onClick={this.doneClick} className="Done">Done</button>
								</span>
							</li>
						)
					})
				}
				</ul>
			</div>
		)
	}
}
export default CountryList;
