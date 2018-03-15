import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'Gopinath'
        }
    }
    render() {
        return (
            <div className={`footer ${this.props.defaultClassName}`}>
                <div className="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
                    <ul className="list-style-none d-flex flex-wrap ">
                        <li className="mr-3">© 2018 <span title="0.36853s from unicorn-1961529401-hq9v5">GitHub</span>, Inc.</li>
                        <li className="mr-3"><a href="https://help.github.com/articles/github-terms-of-service/" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

Footer.defaultProps = {
	defaultClassName: 'Footer',
};
export default Footer;
