import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import mutualFundReducer from './mutualFund/mutualFundReducer';
// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['cart']
// }

const rootReducer = combineReducers({
    mutualFund: mutualFundReducer,
});

export default rootReducer;

// export default persistReducer(persistConfig, rootReducer);