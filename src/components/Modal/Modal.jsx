import { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const initialForm = {
  title: '',
  date: '',
};

function Modal({ isOpen, closedModal }) {
  const [form] = useState({ initialForm });
  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <div className="modal-container">
        <form className="calendar-form-container" onSubmit={handleSubmit}>
          <div className="title">Información del evento</div>
          <div className="input-container ic1">
            <label htmlFor="title" className="placeholder">
              Título del evento
              <input
                name="title"
                className="event-input"
                type="text"
                onChange={handleChange}
                value={form.title}
                placeholder=" "
              />
            </label>
          </div>
          <div className="input-container ic2">
            <label htmlFor="date" className="placeholder">
              Fecha
              <input
                name="date"
                className="event-input"
                type="text"
                onChange={handleChange}
                value={form.date}
                placeholder="AAAA-MM-DD "
              />
            </label>
          </div>
          <button
            type="submit"
            className="modal-close"
            onClick={closedModal}
            onKeyDown={closedModal}
            tabIndex={0}
          >
            Crear
          </button>
        </form>
      </div>
    </article>
  );
}
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closedModal: PropTypes.func.isRequired,
};

export default Modal;
