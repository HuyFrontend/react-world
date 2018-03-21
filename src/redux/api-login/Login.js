import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginRequest, login } from './actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    componentDidMount() {
        //const { dispatch, selectedSubreddit } = this.props
        //dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentDidUpdate(prevProps) {
        //if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
        //    const { dispatch, selectedSubreddit } = this.props
        //    dispatch(fetchPostsIfNeeded(selectedSubreddit))
        //}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const { dispatch, selectedSubreddit } = this.props;
        // dispatch(invalidateSubreddit(selectedSubreddit))
        // dispatch(fetchPostsIfNeeded(selectedSubreddit)) 
        // can replace by followed :
        // this.props.dispatch(invalidateSubreddit(this.props.selectedSubreddit));
        // this.props.dispatch(fetchPostsIfNeeded(this.props.selectedSubreddit));
        this.props.dispatch(login({email: 'huyvoxuan@mail.com', password: '123'}));
    }

    render() {
        // const { loginRequest, login, userName, password } = this.props;
        console.log('props', this.props);
        const { email, password } = this.props.user;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.userName} />
                    </label>
                    <label>
                        Password:
                        <input type="text" value={this.state.password}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

Login.propTypes = {
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user,
    }
}

export default connect(mapStateToProps)(Login)