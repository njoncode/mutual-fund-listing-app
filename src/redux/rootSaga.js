import { all, call } from 'redux-saga/effects';

import { mutualFundSagas } from './mutualFund/mutulaFundSagas';
import { userSagas } from './user/userSagas';

export default function* rootSaga () {
    yield all([call(mutualFundSagas), call(userSagas)]);
};
