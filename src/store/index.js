import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import taskReducer from './tasks/reducer';
// import auth from './auth/reducers/auth';
// import message from './auth/reducers/message';
import rootReducer from './reducers';

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
