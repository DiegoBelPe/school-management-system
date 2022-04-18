import React, { useEffect, useReducer, useState } from 'react';
import { methodHTTP } from '../../Methods/methodhHTTP';
import { messageInitialState, messageReducer } from '../../store/reducerMessage';
import MessajeCRUDform from './MessajeCRUDform';
import MessajeCRUDtable from './MessajeCRUDtable';
import Loader from './Loader';
import MessageCRUD from './MessageCRUD';
import { TYPES } from '../../store/actionsMessage';

function CrudApi() {
  // const [db, setDb] = useState(null);
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
          // setDb(res);
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          // setDb(null);
          dispatch({ type: TYPES.ERROR_DATA });
          setError(res);
        }

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.id = Date.now();

    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        // setDb([...db, res]);
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
      } else {
        setError(res);
      }
    });
    // setDb([...db, data]);
  };

  const updateData = (data) => {
    const endpoint = `${url}/${data.id}}`;
    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        // const newData = db.map((el) => (el.id === data.id ? data : el));
        // setDb(newData);
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    // eslint-disable-next-line no-alert
    const isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el ID '${id}'?`);

    if (isDelete) {
      const endpoint = `${url}/${id}`;
      const options = {
        headers: { 'content-type': 'application/json' },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          // const newData = db.filter((el) => el.id !== id);
          // setDb(newData);
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
