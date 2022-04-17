import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/* import reducer from './reducer'; */

const store = createStore(() => {}, composeWithDevTools());

export default store;
