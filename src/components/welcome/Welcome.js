import React from 'react';

class Welcome extends React.Component {
  render() {
    return (<div>
      <h3> Welcome React </h3>
      <h4> Name: {this.props.name} </h4>
      <h5> Age: {this.props.age} </h5>
      <h5> Phone: {this.props.phone} </h5>
    </div>
    )
  } 
}
export default Welcome;