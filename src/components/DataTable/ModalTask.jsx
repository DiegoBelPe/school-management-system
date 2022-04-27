import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  TextField: {
    width: '100%',
  },
  container: {
    textAlign: 'center',
  },
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%',
  },
}));

function ModalTask() {
  const styles = useStyles();
  const [modal, setModal] = useState(false);

  const [modalInsertar, setModalInsertar] = useState(false);
  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    course: '',
    description: '',
    observations: '',
    endDate: '',
  });
  const abrirCerrarModal = () => {
    setModal(!modal);
  };
  const ModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };
  const body = (
    <div className={styles.modal}>
      <div align="center">
        <h2>Agregar Informacion</h2>
      </div>
      <TextField label="Course" className={styles.TextField} />
      <br />
      <TextField label="Description" className={styles.TextField} />
      <br />
      <TextField label="Observations" className={styles.TextField} />
      <br />
      <TextField label="End Date" className={styles.TextField} />
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={abrirCerrarModal}
      >
        Guardar
      </Button>
      <Button variant="contained" color="secondary" onClick={abrirCerrarModal}>
        Cancelar
      </Button>
    </div>
  );
  return (
    <div>
      <div className={styles.container}>
        <Button
          variant="contained"
          color="primary"
          onClick={abrirCerrarModal}
        >
          Nuevo
        </Button>
        <Modal
          open={modal}
          onClose={abrirCerrarModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </div>
  );
}

export default ModalTask;
