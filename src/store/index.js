import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import taskReducer from './tasks/reducer';
import auth from '../auth/reducers/auth';
import message from '../auth/reducers/message';

const reducers = combineReducers({
  auth,
  message,
  taskReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
