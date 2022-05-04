import React from 'react';
import PropTypes from 'prop-types';

function MessajeCRUDtrow({ el }) {
  const { remitente, asunto, mensaje } = el;
  return (
    <tr>
      <td>{remitente}</td>
      <td>{asunto}</td>
      <td>{mensaje}</td>
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
