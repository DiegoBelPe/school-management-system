import "./Modal.css"


const Modal = ({children, isOpen, closedModal}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-container">
            <button className="modal-close" onClick={closedModal}>x</button>
            {children}
        </div>
    </article>
  )
}

export default Modal