import {
  READ_ALL_DATA,
  UPDATE_DATA,
  DELETE_DATA,
  ERROR_DATA,
} from './typesMessage';

// export const createAction = (data) => ({ type: CREATE_DATA, payload: data });
export const readAllAction = (data) => ({ type: READ_ALL_DATA, payload: data });
export const updateAction = (data) => ({ type: UPDATE_DATA, payload: data });
export const deleteAction = (id) => ({ type: DELETE_DATA, payload: id });
export const errorAction = () => ({ type: ERROR_DATA });
