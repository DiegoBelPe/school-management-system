import { useModal } from '../hooks/useModal';
import Modal from '../components/Modal/Modal'

export const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)

  return (
    <div>
        <h2>Modal</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closedModal={closeModal1}>
          <h3>Modal 1</h3>
          <p>Hola este es el contenido de mi modal</p>
          <h2>Más Children para mi modal</h2> 
        </Modal>
    </div>
  )
}

export default Modals;
