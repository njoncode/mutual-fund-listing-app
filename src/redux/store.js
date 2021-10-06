import { createStore, applyMiddleware, compose }  from "redux";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(createBrowserHistory()) ];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga); 

