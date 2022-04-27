import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import messageReducer from './message/reducerMessage';
import taskReducer from './tasks/reducer';
import auth from '../auth/reducers/auth';
import message from '../auth/reducers/message';

const reducers = combineReducers({
  auth,
  message,
  taskReducer,
  messageReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
