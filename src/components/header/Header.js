import React, { PureComponent } from 'react';
import './Header.scss';

class Header extends PureComponent {
	render() {
		return (
			<header className={`component-header ${this.props.defaultClassName}`}>
				<h1>Header Application</h1>
				<img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" width="32" height="32" alt=""/>
			</header>
		);
	}
}
Header.defaultProps = {
	defaultClassName: 'Header',
};
export default Header;