import React from 'react';
import PropTypes from 'prop-types';

function MessageCRUD({ msg, bgColor }) {
  const styles = {
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: bgColor,
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
      {/* <h2>Datos sin cargar </h2> */}
    </div>
  );
}
MessageCRUD.propTypes = {
  msg: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default MessageCRUD;
