import { useState } from 'react';

function useModal(initialValue = false) {
  const [isOpen, setisOpen] = useState(initialValue);

  const openModal = () => setisOpen(true);
  const closedModal = () => setisOpen(false);

  return [isOpen, openModal, closedModal];
}

export default useModal;
