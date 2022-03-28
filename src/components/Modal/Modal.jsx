import "./Modal.css"


const Modal = ({children, isOpen, closedModal}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-container">
            <div className="title">Información del evento</div>
            <div className="input-container ic1">
                <label for="firstname" className="placeholder">Título del evento</label>
                <input id="firstname" className="event-input" type="text" placeholder=" " />
            </div>
            <div className="input-container ic2">
                <label for="lastname" className="placeholder">Fecha</label>
                <input id="lastname" className="event-input" type="text" placeholder="AAAA-MM-DD " />
            </div>
            <button className="modal-close" onClick={closedModal}>Crear</button>
        </div>
        
    </article>
  )
}

export default Modal;