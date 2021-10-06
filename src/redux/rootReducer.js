import { combineReducers } from 'redux';

import mutualFundReducer from './mutualFund/mutualFundReducer';
import userReducer from './user/userReducer';


const rootReducer = combineReducers({
    mutualFund: mutualFundReducer,
    user: userReducer
});

export default rootReducer;

