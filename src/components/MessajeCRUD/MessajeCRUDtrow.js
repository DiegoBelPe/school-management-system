import React from 'react';

// eslint-disable-next-line react/prop-types
function MessajeCRUDtrow({ el, setDataToEdit, deleteData }) {
  // eslint-disable-next-line react/prop-types
  const { remitente, asunto, mensaje, _id: id } = el;
  return (
    <tr>
      <td>{remitente}</td>
      <td>{asunto}</td>
      <td>{mensaje}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
}

MessajeCRUDtrow.propTypes = {};

export default MessajeCRUDtrow;
