const initialState = {
  tasks: [],
};

// eslint-disable-next-line default-param-last
function todoApp(state = initialState, action) {
  switch (action.type) {
    case 'GET_TASKS':
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
}

export default todoApp;
