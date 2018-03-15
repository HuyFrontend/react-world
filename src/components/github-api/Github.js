import React, { Component } from 'react';
// import { BaseService } from 'shared/services/base.service';
class Github extends Component {
	
	constructor(props) {
		super(props);
		console.log(this);
		this.state = {
			isRequestFail: false
		};
	}
	componentDidMount() {
		const url = this.getGithubURL(this.props.userName);
		fetch(url).then( (res) => {
			console.log('res',res);
			if (!res.ok) {
				let { status, statusText } = res;
				let message = JSON.stringify({status: status, statusText: statusText}); 
				throw Error( message );
			}
			return res;
		}).then( (data) => {
			return data.json();
		}).then( (data) => {
      this.setState({
      	githubData: data
      });
		}, (data) => {
			// throw case will runin here!! 
			this.setState({
				isRequestFail: true
			})
		})
	}

	getGithubURL(id) {
		let url = `https://api.github.com/users/{id}`;
		url = url.replace('{id}', id);
		// debugger; 
		return url;
	}
	render() {
		if (this.state.isRequestFail) {
			return (
				<p> Failed!</p>
			)
		}
		if (!this.state.githubData) {
			return ( <p>Loading...</p>)
		}
		return (
			<div>
			<h3>Github Account Infomation</h3>
			<p>Github ID: {this.state.githubData.id}</p>
			<p>User Name: {this.state.githubData.login}</p>
			</div>
		)
	}
}
Github.defaultProps = {
	className: 'icon-large',
	userName: 'huyvoxuan'
};

export default Github;