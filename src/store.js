import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createLogger } from 'redux-logger';
import reducers from './reducers/reducers';
const loggerMiddleware = createLogger();

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleWare, loggerMiddleware)
);
const store = createStore(combineReducers(reducers), composedEnhancer);

export default store;
