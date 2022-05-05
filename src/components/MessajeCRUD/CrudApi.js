/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createAction, deleteAction, errorAction, readAllAction, updateAction } from '../../store/message/actionsMessage';
import methodHTTP from '../../Methods/methodhHTTP';
import MessajeCRUDform from './MessajeCRUDform';
import MessajeCRUDtable from './MessajeCRUDtable';
import Loader from './Loader';
import MessageCRUD from './MessageCRUD';

function CrudApi() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.messageReducer;
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
          dispatch(readAllAction(res));
          setError(null);
        } else {
          dispatch(errorAction(res));
          setError(res);
        }
        setLoading(false);
      });
  }, [url, dispatch]);

  const createData = (data) => {
    const date = data;
    date.id = Date.now();

    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch(createAction(res));
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
        dispatch(updateAction(res));
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
          dispatch(deleteAction(id));
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
      <h2>Buzon de Mensajes ADMIN</h2>
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
