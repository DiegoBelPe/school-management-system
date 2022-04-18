import React from 'react';
import MessajeCRUDtrow from './MessajeCRUDtrow';

function MessajeCRUDtable({ data, setDataToEdit, deleteData }) {
  return (
    <div>
      <h3>Mensajes de Entrada</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Mensaje</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <MessajeCRUDtrow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MessajeCRUDtable;
