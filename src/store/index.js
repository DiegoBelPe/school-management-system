import { combineReducers } from 'redux';
import { messageReducer } from './reducerMessage';

const reducer = combineReducers({
  message: messageReducer,
});

export default reducer;
