import { useModal } from '../hooks/useModal';
import Modal from '../components/Modal/Modal'

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)

  return (
    <div>
        <button onClick={openModal1}> 
            <h2>Agrega nuevos eventos</h2>
        </button>
        <Modal isOpen={isOpenModal1} closedModal={closeModal1}>
        </Modal>
    </div>
  )
}

export default Modals;
