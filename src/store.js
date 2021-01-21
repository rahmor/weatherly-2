import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

import { createLogger } from 'redux-logger';
import reducers from './reducers/reducers';
const loggerMiddleware = createLogger();

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleWare, loggerMiddleware)
);
const store = createStore(
  combineReducers({ ...reducers, form: formReducer }),
  composedEnhancer
);

export default store;
