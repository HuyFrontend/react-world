import React from 'react';
import { connect } from 'react-redux';

const Avatar = ({ user }) => (
  <img src={user.avatar}/>
);

const mapStateToProps = state => ({
  user: state.user
});

export { Avatar };

export default connect(mapStateToProps)(Avatar);