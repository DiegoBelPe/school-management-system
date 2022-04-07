import React from 'react';

function MessajeCRUDtrow({ el, setDataToEdit, deleteData }) {
  const { name, messaje, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{messaje}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
}

MessajeCRUDtrow.propTypes = {};

export default MessajeCRUDtrow;
