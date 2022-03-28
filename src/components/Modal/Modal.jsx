import { useState } from "react"
import "./Modal.css"

const initialForm = {
    title:"",
    date: ""
}


const Modal = ({children, isOpen, closedModal}) => {

    const [form, setForm] = useState({initialForm});
    const handleChange = (e) => {};
    const handleSubmit = (e) => {};
    const handleReset = (e) => {};

  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-container">
            <form className="calendar-form-container" onSubmit={handleSubmit}>
                <div className="title">Información del evento</div>
                <div className="input-container ic1">
                    <label for="title" className="placeholder">Título del evento</label>
                    <input name="title" className="event-input" type="text" onChange={handleChange} value={form.title} placeholder=" "  />
                </div>
                <div className="input-container ic2">
                    <label for="date" className="placeholder">Fecha</label>
                    <input name="date" className="event-input" type="text" onChange={handleChange} value={form.date} placeholder="AAAA-MM-DD " />
                </div>
                <button className="modal-close" onClick={closedModal}>Crear</button>
            </form>
        </div>
        
    </article>
  )
}

export default Modal;