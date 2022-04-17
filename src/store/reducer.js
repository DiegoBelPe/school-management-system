/* const initialState = {
  tasks: [],
<<<<<<< HEAD
}; */

/* function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload,
        ],
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              ...action.payload,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
} */
=======
};

function reducer(state = initialState, action) {
};
>>>>>>> develop

/* export default reducer; */
