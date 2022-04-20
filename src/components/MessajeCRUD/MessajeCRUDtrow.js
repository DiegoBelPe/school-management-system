import React from 'react';
import PropTypes from 'prop-types';

function MessajeCRUDtrow({ el, setDataToEdit, deleteData }) {
  const { remitente, asunto, mensaje, _id: id } = el;
  return (
    <tr>
      <td>{remitente}</td>
      <td>{asunto}</td>
      <td>{mensaje}</td>
      <td>
        <button
          type="button"
          onClick={() => setDataToEdit(el)}
          onKeyDown={() => setDataToEdit(el)}
          tabIndex={0}
        >
          Editar
        </button>
        <button
          type="button"
          onClick={() => deleteData(id)}
          onKeyDown={() => deleteData(id)}
          tabIndex={0}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

MessajeCRUDtrow.propTypes = {};

MessajeCRUDtrow.propTypes = {
  el: PropTypes.shape({
    remitente: PropTypes.string.isRequired,
    asunto: PropTypes.string.isRequired,
    mensaje: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  setDataToEdit: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
};

export default MessajeCRUDtrow;
