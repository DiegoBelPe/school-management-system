import React from 'react';
import PropTypes from 'prop-types';
import MessajeCRUDtrow from './MessajeCRUDtrow';
import styles from './MessageTable.module.css';

function MessajeCRUDtable({ data, setDataToEdit, deleteData }) {
  return (
    <div>
      <h3 className={styles.title_form}>Mensajes de Entrada</h3>
      <table className={styles.table_form}>
        <thead>
          <tr>
            <th>Remitente</th>
            <th>Asunto</th>
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
MessajeCRUDtable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      remitente: PropTypes.string.isRequired,
      asunto: PropTypes.string.isRequired,
      mensaje: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setDataToEdit: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
};
export default MessajeCRUDtable;
