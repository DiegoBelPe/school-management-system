const initialState = {
  tasksUser: [],
};

// eslint-disable-next-line default-param-last
function todoApp(state = initialState, action) {
  switch (action.type) {
    case 'GET_TASKS':
      return {
        ...state,
        tasks: action.payload.homeWorks,
      };
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}

export default todoApp;
