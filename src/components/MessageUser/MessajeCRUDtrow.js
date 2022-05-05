import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessageTRow.module.css';

function MessajeCRUDtrow({ el }) {
  const { remitente, asunto, mensaje } = el;
  return (
    <tr>
      <td className={styles.table_files}>{remitente}</td>
      <td className={styles.table_files}>{asunto}</td>
      <td className={styles.table_files}>{mensaje}</td>
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
};

export default MessajeCRUDtrow;
