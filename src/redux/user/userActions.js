import userConstants from './userConstants';

export const signUpStartAction = (userCredentials) => ({
    type: userConstants.SIGN_UP_START,
    payload: userCredentials
});

export const signUpSuccessAction = (payload) => ({
    type: userConstants.SIGN_UP_SUCCESS,
    payload
});
 
export const signUpFailureAction = error => ({
    type: userConstants.SIGN_UP_FAILURE,
    payload: error
});
