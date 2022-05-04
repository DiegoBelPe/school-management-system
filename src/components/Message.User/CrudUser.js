/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAction, errorAction, readAllAction } from '../../store/message/actionsMessage';
import methodHTTP from '../../Methods/methodhHTTP';
import MessajeCRUDtable from './MessajeCRUDtable';
import Loader from './Loader';
import MessageCRUD from './MessageCRUD';

function CrudApi() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.messageReducer;
  const [setDataToEdit] = useState(null);
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
      <h2>Buzon de Mensajes Estudiante</h2>
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
