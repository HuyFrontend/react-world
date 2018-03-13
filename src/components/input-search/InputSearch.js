import React from 'react';
import './InputSearch.scss';

class InputSearch extends React.Component {
   
    handleChange = (event) => {
        this.props.textChange(event);
    }
    
    render() {
        return (
          <div className="component-search-input">
            <div>
              <input
                onChange={this.handleChange}
              />
            </div>
          </div>
        );
    };
}
export default InputSearch;