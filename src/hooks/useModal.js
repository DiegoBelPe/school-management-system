import { Modal } from "@material-ui/core";
import { useState } from "react";

export const useModal = (initialValue = false) => {
    const [isOpen, setisOpen] = useState(initialValue);

    const openModal = () => setisOpen(true);
    const closedModal = () => setisOpen(false);

    return [isOpen, openModal, closedModal]
}


