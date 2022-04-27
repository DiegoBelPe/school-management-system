import { combineReducers } from 'redux';
import auth from '../auth/reducers/auth';
import message from '../auth/reducers/message';
import taskReducer from '../tasks/reducer';

export default combineReducers({
  auth,
  message,
  taskReducer,
});
