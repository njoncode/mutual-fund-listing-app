import { takeLatest, put, all, call, select, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import userConstants from './userConstants';
import  { signUpSuccessAction, signUpFailureAction, signInSuccessAction, signInFailureAction, signOutSuccessAction, signOutFailureAction, editUserSuccessAction, editUserFailureAction, editUserPasswordSuccessAction, editUserPasswordFailureAction  } from './userActions';
import { selectUsersData } from './userSelectors';



export function* signUp({ payload }) {
    try {
        const users = yield select(selectUsersData);
        console.log('users: ', users)
        if(!users.length) {
            yield put(signUpSuccessAction(payload));  
        }
        else {
            const doesUserExist = users.filter(({ email }) => email === payload.email);
            if(doesUserExist.length) {
                yield put(signUpFailureAction('This email is already registered.'));
        } else {
            yield put(signUpSuccessAction(payload));  
            // Report success to our store and redirect to another page
            yield put(push('/'));     
        }
        } 
    } catch (error) {
        yield put(signUpFailureAction(error));
    }
};

export function* signIn({ payload }) {
    try {
        const usersData = yield select(selectUsersData);
        if (usersData.length) {
            const validUser = usersData.filter(({ email, password }) => (email === payload.email && password === payload.password));
            if (validUser.length) {
                yield delay(2000);
                yield put(signInSuccessAction(validUser[0]));
                yield put(push('/'));     
            } else yield put(signInFailureAction('Failed! Invalid email or password'));
        }
        else {
            yield delay(2000);
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


export function* editUser({ payload }) {
    try {
        yield put(editUserSuccessAction(payload));
    } catch (error) {
        yield put(editUserFailureAction(error));
    }
};

export function* editUserPassword({ payload }) {
    try {
        yield put(editUserPasswordSuccessAction(payload));
    } catch (error) {
        yield put(editUserPasswordFailureAction(error));
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

export function* onEditUserStart() {
    yield takeLatest(userConstants.EDIT_USER_START, editUser);
};


export function* onEditUserPasswordStart() {
    yield takeLatest(userConstants.EDIT_USER_PASSWORD_START, editUserPassword);
};



export function* userSagas() {
    yield all([
        call(onSignUpStart), 
        call(onSignInStart), 
        call(onSignOutStart),
        call(onEditUserStart),
        call(onEditUserPasswordStart)
    ]);
};

