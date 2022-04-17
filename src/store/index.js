import { createStore } from 'redux';

/* import reducer from './reducer'; */

const store = createStore(() => {}, composeWithDevTools());

export default store;
