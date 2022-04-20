import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const initialForm = {
  remitente: '',
  asunto: '',
  mensaje: '',
  id: null,
};

function MessajeCRUDform({
  createData, updateData, dataToEdit, setDataToEdit,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.remitente || !form.asunto || !form.mensaje) {
      // eslint-disable-next-line no-alert
      alert('Datos incompletos');
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  return (
    <div>
      <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="remitente"
          placeholder="Remitente"
          onChange={handleChange}
          value={form.remitente}
        />
        <input
          type="text"
          name="asunto"
          placeholder="Asunto"
          onChange={handleChange}
          value={form.asunto}
        />
        <input
          type="text"
          name="mensaje"
          placeholder="Mensaje"
          onChange={handleChange}
          value={form.mensaje}
        />

        <input type="Submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
}

MessajeCRUDform.propTypes = {
  createData: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  setDataToEdit: PropTypes.func.isRequired,
  dataToEdit: PropTypes.func.isRequired,
};

export default MessajeCRUDform;
