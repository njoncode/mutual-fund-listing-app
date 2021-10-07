import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import userConstants from './userConstants';
import  { signUpSuccessAction, signUpFailureAction } from './userActions';
import { selectUsersData } from './userSelectors';


export function* signUp({ payload }) {
    try {
        const users = yield select(selectUsersData);
        const doesUserExist = users.filter(({ email }) => email === payload.email);
        if(doesUserExist.length) {
            yield put(signUpFailureAction('This email is already registered.'));
        } else {
            yield put(signUpSuccessAction(payload));  
            // Report success to our store and redirect to another page
            yield put(push('/'));     
        }
    } catch (error) {
        yield put(signUpFailureAction(error));
    }
};

export function* onSignUpStart() {
    yield takeLatest(userConstants.SIGN_UP_START, signUp);
};


export function* userSagas() {
    yield all([
        call(onSignUpStart), 
    ]);
};

