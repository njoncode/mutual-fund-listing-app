import { takeLatest, call, put, all } from 'redux-saga/effects';

import { fetchMfList, fetchMfDetails } from '../../utils/api';

import mutualFundConstants from './mutualFundConstants';
import { fetchMutualFundsListSuccessAction, fetchMutualFundsFailureAction, fetchMutualFundsDetailsSuccessAction } from './mutualFundActions';


export function* fetchMutualFundsListAsync() {
    yield console.log('I am fired!');

    try {
        const mutualFundsListMap = yield call(fetchMfList);
        yield put(fetchMutualFundsListSuccessAction(mutualFundsListMap.slice(0, 20)));
    } catch (error) {
        yield put(fetchMutualFundsFailureAction(error.message));
    }
};

export function* fetchMutualFundsDetailsAsync( { payload } ) {
    yield console.log('I am fired!');
    console.log('payload: ', payload);

    try {
        const mutualFundsDetailsMap = yield call(fetchMfDetails, payload);
        console.log('mutualFundsDetailsMap: ', mutualFundsDetailsMap)
        yield put(fetchMutualFundsDetailsSuccessAction(mutualFundsDetailsMap.meta));
    } catch (error) {
        yield put(fetchMutualFundsFailureAction(error.message));
    }
};



export function* fetchMutualFundsListStart() {
    yield takeLatest(
        mutualFundConstants.FETCH_MUTUAL_FUNDS_LIST_START, 
        fetchMutualFundsListAsync
    );
};

export function* fetchMutualFundsDetailsStart() {
    yield takeLatest(
        mutualFundConstants.FETCH_MUTUAL_FUNDS_DETAILS_START, 
        fetchMutualFundsDetailsAsync
    );
};


export function* mutualFundSagas() {
    yield all([call(fetchMutualFundsListStart), call(fetchMutualFundsDetailsStart)]);
}

