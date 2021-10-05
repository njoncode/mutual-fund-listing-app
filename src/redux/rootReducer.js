import { combineReducers } from 'redux';

import mutualFundReducer from './mutualFund/mutualFundReducer';


const rootReducer = combineReducers({
    mutualFund: mutualFundReducer,
});

export default rootReducer;

