import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  CREATE_TASK,
} from './types';
import AuthService from '../services/auth.service';
import { createTask } from '../../../services/task';

export const login = (email, password) => (dispatch) =>
  AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};

export const postTask = (id, task) => (dispatch) => {
  createTask(id, task).then(() => {
    dispatch({
      type: CREATE_TASK,
      payload: { task },
    });
  });
};
