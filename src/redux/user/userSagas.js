import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import userConstants from './userConstants';
import  { signUpSuccessAction, signUpFailureAction, signInSuccessAction, signInFailureAction, signOutSuccessAction, signOutFailureAction } from './userActions';
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

export function* signIn({ payload }) {
    try {
        const usersData = yield select(selectUsersData);
        const validUser = usersData.filter(({ email, password }) => (email === payload.email && password === payload.password));
        if (validUser.length) {
            yield put(signInSuccessAction(payload));
            yield put(push('/'));     
        }
        else {
            yield put(signInFailureAction('Failed! Invalid email or password'));
        }
    } catch (error) {
        yield put(signInFailureAction(error));
    }
};

export function* signOut() {
    try {
        yield put(signOutSuccessAction());
    } catch (error) {
        yield put(signOutFailureAction(error));
    }
};


export function* onSignUpStart() {
    yield takeLatest(userConstants.SIGN_UP_START, signUp);
};

export function* onSignInStart() {
    yield takeLatest(userConstants.SIGN_IN_START, signIn);
};

export function* onSignOutStart() {
    yield takeLatest(userConstants.SIGN_OUT_START, signOut);
};


export function* userSagas() {
    yield all([
        call(onSignUpStart), 
        call(onSignInStart), 
        call(onSignOutStart)
    ]);
};

