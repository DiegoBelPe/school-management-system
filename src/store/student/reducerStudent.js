const initialState = {
  students: [],
};

// eslint-disable-next-line default-param-last
function studentReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_STUDENTS':
      return {
        ...state,
        students: action.payload,
      };
    case 'CREATE_STUDENT':
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case 'UPDATE_STUDENT':
      return {
        ...state,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return action.payload;
          }
          return student;
        }),
      };
    case 'DELETE_STUDENT':
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload,
        ),
      };
    default:
      return state;
  }
}

export default studentReducer;
