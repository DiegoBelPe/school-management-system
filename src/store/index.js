import { createStore } from 'redux';
<<<<<<< HEAD
import { composeWithDevTools } from 'redux-devtools-extension';
=======
import reducer  from './reducer';
>>>>>>> develop

/* import reducer from './reducer'; */

const store = createStore(() => {}, composeWithDevTools());

export default store;
