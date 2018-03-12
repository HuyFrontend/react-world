import React, { Component}  from 'react';

function Welcome (props) {
    return <div>
      <h3> Welcome React </h3>
      <h4> Name: {props.name} </h4>
      <h5> Age: {props.age} </h5>
      <h5> Phone: {props.phone} </h5>
    </div>
}
export default Welcome;