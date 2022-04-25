import { CREATE_DATA, DELETE_DATA, ERROR_DATA, READ_ALL_DATA, UPDATE_DATA } from './index.Message';

export const initialState = {
  db: [],
};

// eslint-disable-next-line default-param-last
export function messageReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_DATA:
      return {
        ...state,
        db: action.payload.map((data) => data),
      };

    case CREATE_DATA: {
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case UPDATE_DATA: {
      const { _id: id } = action.payload;
      const newData = state.db.map((item) => {
        const { _id: idUpdate } = item;
        if (idUpdate === id) {
          return action.payload;
        }
        return item;
      });

      return {
        ...state,
        db: newData,
      };
    }
    case DELETE_DATA: {
      const newData = state.db.filter(({ _id: id }) => id !== action.payload);
      return {
        ...state,
        db: newData,
      };
    }
    case ERROR_DATA: {
      return initialState;
    }

    default:
      return state;
  }
}
