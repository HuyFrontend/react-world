import fetch from 'cross-fetch';
// import { Observable } from 'rxjs';
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

export function invalidateSubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}

function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

function fetchPosts(postCategory) {
    return dispatch => {
        dispatch(requestPosts(postCategory))
        return fetch(`https://www.reddit.com/r/${postCategory}.json`)
            .then(response => response.json())
            .then((json) => {
                return dispatch(receivePosts(postCategory, json))
            });
    }
}

function shouldFetchPosts(state, postCategory) {
    const posts = state.postsBySubreddit[postCategory]
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
};

export function postLoad(postCategory) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), postCategory)) {
            return dispatch(fetchPosts(postCategory))
        }
    }
};

export function showAlert(state) {
    console.log('123');
    return (dispatch, getState) => {
        console.log('dispatch', dispatch , getState);
    }
};

/** observable */

// action creators
const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const fetchUser = (username) => ({ type: FETCH_USER, payload: username });
const fetchUserFulfilled = (payload) => ({ type: FETCH_USER_FULFILLED, payload });
 
const fetchUserEpic = (action$) => {
    debugger;
    return 
        action$.ofType(FETCH_USER)
            .mergeMap((action) =>
                fetch(`https://api.github.com/users/${action.payload}`)
                    .map(response => fetchUserFulfilled(response))
            );    
};
 
// later... 
// dispatch(fetchUser('huyvoxuan'));


// const fetchMe = (session) => {
//     return fetch(`https://www.reddit.com/r/${session}.json`)
//       .then((response) => response.json());
// }
// export const fetchMeEpic = (action$) => {
//     console.log('action', action$);
//       action$.ofType(actionTypes.SESSION_SET)
//         .mergeMap((action) =>
//           Observable.from(fetchMe(action.session))
//             .map()
//     ); 
// }