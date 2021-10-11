import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createFilter } from "redux-persist-transform-filter";


import history from '../utils/history';

import mutualFundReducer from './mutualFund/mutualFundReducer';
import userReducer from './user/userReducer';

const saveUserLoginSubsetFilter = createFilter('user', ['usersData', 'currentUser']);


const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['user'],
    transforms: [saveUserLoginSubsetFilter]
}

const rootReducer = combineReducers({
    router: connectRouter(history),
    mutualFund: mutualFundReducer,
    user: userReducer
});


export default persistReducer(persistConfig, rootReducer);

