import React, { useEffect, useState } from 'react';
import { methodHTTP } from '../../Methods/methodhHTTP';
import MessajeCRUDform from './MessajeCRUDform';
import MessajeCRUDtable from './MessajeCRUDtable';
import Loader from './Loader';
import MessageCRUD from './MessageCRUD';

function CrudApi() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = methodHTTP();
  const url = 'http://localhost:8080/api/messajeDb';

  useEffect(() => {
    setLoading(true);
    methodHTTP()
      .get(url)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
    setDb([...db, data]);
  };

  const updateData = (data) => {
    const endpoint = `${url}/${data.id}`;
    console.log(endpoint);

    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        const newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
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
          const newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {

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
