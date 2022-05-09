import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CREATE_TASK,
  CREATE_MESSAGE,
} from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

// eslint-disable-next-line default-param-last
export default function loginUser(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case CREATE_TASK:
      return {
        ...state,
        user: {
          ...state.user,
          gradeId: [
            {
              ...state.user.gradeId[0],
              homeWorks: [...state.user.gradeId[0].homeWorks, payload.task],
            },
          ],
        },
      };

    case CREATE_MESSAGE:
      return {
        ...state,
        user: {
          ...state.user,
          gradeId: [
            {
              ...state.user.gradeId[0],
              mensajes: [...state.user.gradeId[0].mensajes, payload.message],
            },
          ],
        },
      };

    default:
      return state;
  }
}
