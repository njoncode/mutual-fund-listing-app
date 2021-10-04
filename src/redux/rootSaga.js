import { all, call } from 'redux-saga/effects';

import { mutualFundSagas } from './mutualFund/mutulaFundSagas';

export default function* rootSaga () {
    yield all([call(mutualFundSagas)]);
};
