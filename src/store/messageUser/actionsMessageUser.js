import {
  READ_ALL_DATA_USER,
  ERROR_DATA_USER,
} from './typesMessageUser';

export const readAllAction = (data) => ({ type: READ_ALL_DATA_USER, payload: data });
export const errorAction = () => ({ type: ERROR_DATA_USER });
