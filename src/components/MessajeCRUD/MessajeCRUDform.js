import React, { useEffect, useState } from 'react';

const initialForm = {
  remitente: '',
  asunto: '',
  mensaje: '',
  id: null,
};

function MessajeCRUDform({
  // eslint-disable-next-line react/prop-types
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

    // eslint-disable-next-line no-use-before-define
    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
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

export default MessajeCRUDform;
