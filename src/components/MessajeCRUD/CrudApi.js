import React, { useEffect, useReducer, useState } from 'react';
import { methodHTTP } from '../../Methods/methodhHTTP';
import {
  messageInitialState,
  messageReducer,
} from '../../store/reducerMessage';
import MessajeCRUDform from './MessajeCRUDform';
import MessajeCRUDtable from './MessajeCRUDtable';
import Loader from './Loader';
import MessageCRUD from './MessageCRUD';
import { TYPES } from '../../store/actionsMessage';

function CrudApi() {
  const [state, dispatch] = useReducer(messageReducer, messageInitialState);
  const { db } = state;
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = methodHTTP();
  const url = 'https://backend-school-management.herokuapp.com/api/message';

  useEffect(() => {
    setLoading(true);
    methodHTTP()
      .get(url)
      .then((res) => {
        if (!res.err) {
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          dispatch({ type: TYPES.ERROR_DATA });
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    const date = data;
    date.id = Date.now();

    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    // eslint-disable-next-line no-underscore-dangle
    const endpoint = `${url}/${data._id}`;
    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.patch(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    // eslint-disable-next-line no-alert
    const isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con el ID '${id}'?`,
    );

    if (isDelete) {
      const endpoint = `${url}/${id}`;
      const options = {
        headers: { 'content-type': 'application/json' },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
        } else {
          setError(res);
        }
      });
    } else {
      // eslint-disable-next-line no-console
      console.log('No se elimino el registro');
    }
  };

  return (
    <div>
      <h2>CRUD Messaje</h2>
      <MessajeCRUDform
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && (
        <MessageCRUD
          msg={`Error ${error.status}:${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {db && (
        <MessajeCRUDtable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
}

export default CrudApi;
