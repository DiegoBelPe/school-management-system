import { TYPES } from './actionsMessage';

export const messageInitialState = {
  db: null,
};

export function messageReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_ALL_DATA: {
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case TYPES.CREATE_DATA: {
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    // case TYPES.READ_ONE_DATA: {
    //   break;
    // }
    case TYPES.UPDATE_DATA: {
      console.log(action.payload);
      // eslint-disable-next-line max-len
      const newData = state.db.map(({ _id: id }) => (id === action.payload.id ? action.payload : id));
      return {
        ...state,
        db: newData,
      };
    }
    case TYPES.DELETE_DATA: {
      const newData = state.db.filter(({ _id: id }) => id !== action.payload);
      return {
        ...state,
        db: newData,
      };
    }
    // eslint-disable-next-line no-fallthrough
    case TYPES.ERROR_DATA: {
      return messageInitialState;
    }

    default:
      return state;
  }
}
