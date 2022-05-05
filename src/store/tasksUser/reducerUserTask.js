const initialState = {
  tasksUser: [],
};

// eslint-disable-next-line default-param-last
function todoApp(state = initialState, action) {
  switch (action.type) {
    case 'GET_TASKS_USER':
      return {
        ...state,
        tasksUser: action.payload.homeWorks,
      };
    default:
      return state;
  }
}

export default todoApp;
