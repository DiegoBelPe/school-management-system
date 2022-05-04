import {
  READ_ALL_DATA_USER,
  ERROR_DATA_USER,
} from './typesMessageUser';

export const initialState = {
  db: [],
};

// eslint-disable-next-line default-param-last
function messageReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_DATA_USER:
      console.log('action.payload', action.payload.mensajes);
      return {
        ...state,
        db: action.payload.mensajes,
      };

    case ERROR_DATA_USER: {
      return initialState;
    }

    default:
      return state;
  }
}
export default messageReducer;
