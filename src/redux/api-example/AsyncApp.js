import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from './actions'
import Picker from './Picker'
import Posts from './Posts'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = this.props
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    dropDownChangge = (nextSubreddit) => {
        this.props.dispatch(selectSubreddit(nextSubreddit))
        this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
    }

    handleRefreshClick = (e) => {
        e.preventDefault()
        // const { dispatch, selectedSubreddit } = this.props;
        // dispatch(invalidateSubreddit(selectedSubreddit))
        // dispatch(fetchPostsIfNeeded(selectedSubreddit)) 
        // can replace by followed :
        this.props.dispatch(invalidateSubreddit(this.props.selectedSubreddit));
        this.props.dispatch(fetchPostsIfNeeded(this.props.selectedSubreddit));
    }

    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
        console.log('props', this.props);
        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    onChange={this.dropDownChangge}
                    options={['reactjs', 'frontend', 'javascript', 'angularjs', 'rubyonrails', 'php']}
                />
                <p>
                    {lastUpdated &&
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
                        </span>}
                    {!isFetching &&
                        <a href="#" onClick={this.handleRefreshClick}>
                            Refresh
            </a>}
                </p>
                {isFetching && posts.length === 0 && <h2>Loading...</h2>}
                {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
                {posts.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts} />
                    </div>}
            </div>
        )
    }
}

AsyncApp.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
      items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(AsyncApp)