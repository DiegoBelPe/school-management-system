/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { errorAction, readAllAction } from '../../store/messageUser/actionsMessageUser';
import methodHTTP from '../../Methods/methodhHTTP';
import MessajeCRUDtable from './MessajeCRUDtable';
import Loader from './Loader';
import MessageCRUD from './MessageCRUD';
import styles from './CrudApi.module.css';

function CrudUser() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.messageUserReducer;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = 'https://backend-school-management.herokuapp.com/api/grade/messages';
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    methodHTTP()
      .get(`${url}/${id}`)
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

  return (
    <div className={styles.fondo}>
      <h2 className={styles.form_input}>Buzon de Estudiantes</h2>
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

        />
      )}
    </div>
  );
}
export default CrudUser;
