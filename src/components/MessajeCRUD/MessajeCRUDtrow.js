import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessageTRow.module.css';

function MessajeCRUDtrow({ el, setDataToEdit, deleteData }) {
  const { remitente, asunto, mensaje, _id: id } = el;
  return (
    <tr>
      <td className={styles.table_files}>{remitente}</td>
      <td className={styles.table_files}>{asunto}</td>
      <td className={styles.table_files}>{mensaje}</td>
      <td>
        <button
          className={styles.button_edit}
          type="button"
          onClick={() => setDataToEdit(el)}
          onKeyDown={() => setDataToEdit(el)}
          tabIndex={0}
        >
          Editar
        </button>
        <button
          className={styles.button_edit}
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
    remitente: PropTypes.string,
    asunto: PropTypes.string,
    mensaje: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  setDataToEdit: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
};

export default MessajeCRUDtrow;
