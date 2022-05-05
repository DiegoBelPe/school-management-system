import { combineReducers } from 'redux';
import auth from '../auth/reducers/auth';
import message from '../auth/reducers/message';
import taskReducer from '../tasks/reducer';
import studentReducer from '../student/reducerStudent';
import messageReducer from '../message/reducerMessage';
import messageUserReducer from '../messageUser/reducerMessageUser';
import taskUserReducer from '../tasksUser/reducerUserTask';

export default combineReducers({
  auth,
  message,
  taskReducer,
  studentReducer,
  messageReducer,
  messageUserReducer,
  taskUserReducer,
});
