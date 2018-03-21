import { LOGIN_ATTEMPT, LOGGED_FAILED, LOGGED_SUCCESSFULLY } from './actionTypes';


export function loginError(error) { 
    return { error, type: LOGGED_FAILED };
}
// You'll have a side effect here so (dispatch) => {} form is a good idea
export function loginSuccess(response) { 
    return (dispatch) => {
        dispatch({ response, type: LOGGED_SUCCESSFULLY });
    }; 
}
export function loginRequest(email, password) { 
    const user = {email: email, password: password}; 
    return { user, type: LOGIN_ATTEMPT };
}

export function login(userData) { 
    return (dispatch) =>
        // fetch('https://api.github.com/users/huyvoxuan', { 
        //     method: 'post',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content‐Type': 'application/json', },
        //     body: JSON.stringify({
        //         email: userData.email, password: userData.password,
        //     }), 
        // })
        fetch('https://api.github.com/users/huyvoxuan')
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                console.log(response);
                dispatch(loginSuccess(response)); 
            } else {
                const error = new Error(response.statusText); 
                error.response = response; 
                dispatch(loginError(error));
                throw error;
            } 
        })
        .catch((error) => { 
            console.log('request failed', error); 
        }); 
};