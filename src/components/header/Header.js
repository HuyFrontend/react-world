import React, { PureComponent } from 'react';
import './Header.scss';

class Header extends PureComponent {
  render() {
    return (
      <header className="component-header 123-4">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
        />
        Emoji Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
export default Header;