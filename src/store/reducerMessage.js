import TYPES from './actionsMessage';

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
    case TYPES.UPDATE_DATA: {
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
    case TYPES.DELETE_DATA: {
      const newData = state.db.filter(({ _id: id }) => id !== action.payload);
      return {
        ...state,
        db: newData,
      };
    }
    case TYPES.ERROR_DATA: {
      return messageInitialState;
    }

    default:
      return state;
  }
}
