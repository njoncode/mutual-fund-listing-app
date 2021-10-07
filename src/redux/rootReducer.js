import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';

import mutualFundReducer from './mutualFund/mutualFundReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    router: connectRouter(history),
    mutualFund: mutualFundReducer,
    user: userReducer
});

export default rootReducer;

