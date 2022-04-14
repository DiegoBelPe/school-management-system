import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Modal,
  Button,
  TextField,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const baseUrl = 'http://localhost:8080/api/chores/';

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
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%',
  },
}));

function DataTable() {
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    course: '',
    description: '',
    observations: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsolaSeleccionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(consolaSeleccionada);
  };

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  const peticionPost = async () => {
    await axios.post(baseUrl, consolaSeleccionada).then((response) => {
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    });
  };

  const peticionPut = async () => {
    await axios
      .put(baseUrl + consolaSeleccionada.id, consolaSeleccionada)
      .then((response) => {
        const dataNueva = data;
        dataNueva.map((consola) => {
          if (consolaSeleccionada.id === consola.id) {
            consola.course = consolaSeleccionada.course;
            consola.description = consolaSeleccionada.description;
            consola.observations = consolaSeleccionada.observations;
            consola.endDate = consolaSeleccionada.endDate;
          }
        });
        setData(dataNueva);
        abrirCerrarModalEditar();
      });
  };

  const peticionDelete = async () => {
    await axios.delete(baseUrl + consolaSeleccionada.id).then((response) => {
      setData(data.filter((consola) => consola.id !== consolaSeleccionada.id));
      abrirCerrarModalEliminar();
    });
  };

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const seleccionarConsola = (consola, caso) => {
    setConsolaSeleccionada(consola);
    caso === 'Editar' ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  useEffect(async () => {
    await peticionGet();
  }, []);

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Nueva Consola</h3>
      <TextField
        name="course"
        className={styles.inputMaterial}
        label="Asignatura"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="description"
        className={styles.inputMaterial}
        label="Descripcion"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="observations"
        className={styles.inputMaterial}
        label="Observaciones"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="endDate"
        className={styles.inputMaterial}
        label="Fecha de entrega"
        onChange={handleChange}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPost()}>
          Insertar
        </Button>
        <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Consola</h3>
      <TextField
        name="course"
        className={styles.inputMaterial}
        label="Asignatura"
        onChange={handleChange}
        value={consolaSeleccionada && consolaSeleccionada.course}
      />
      <br />
      <TextField
        name="description"
        className={styles.inputMaterial}
        label="Descripcion"
        onChange={handleChange}
        value={consolaSeleccionada && consolaSeleccionada.description}
      />
      <br />
      <TextField
        name="observations"
        className={styles.inputMaterial}
        label="Observaciones"
        onChange={handleChange}
        value={consolaSeleccionada && consolaSeleccionada.observations}
      />
      <br />
      <TextField
        name="endDate"
        className={styles.inputMaterial}
        label="Fecha de entrega"
        onChange={handleChange}
        value={consolaSeleccionada && consolaSeleccionada.endDate}
        ondition
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPut()}>
          Editar
        </Button>
        <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyEliminar = (
    <div className={styles.modal}>
      <p>
        Estás seguro que deseas eliminar
        {' '}
        <b>{consolaSeleccionada && consolaSeleccionada.course}</b>
        {' '}
        ?
        {' '}
      </p>
      <div align="right">
        <Button color="secondary" onClick={() => peticionDelete()}>
          Sí
        </Button>
        <Button onClick={() => abrirCerrarModalEliminar()}>No</Button>
      </div>
    </div>
  );

  return (
    <div className="App">
      <h1>DataTable Tareas</h1>
      <br />
      <Button onClick={() => abrirCerrarModalInsertar()}>Insertar</Button>
      <br />
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Asignatura</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Observaciones</TableCell>
              <TableCell>Fecha de entrega</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((consola) => (
              <TableRow key={consola.id}>
                <TableCell>{consola.course}</TableCell>
                <TableCell>{consola.description}</TableCell>
                <TableCell>{consola.observations}</TableCell>
                <TableCell>{consola.endDate}</TableCell>
                <TableCell>
                  <Edit
                    className={styles.iconos}
                    onClick={() => seleccionarConsola(consola, 'Editar')}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <Delete
                    className={styles.iconos}
                    onClick={() => seleccionarConsola(consola, 'Eliminar')}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={modalInsertar} onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>

      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>

      <Modal open={modalEliminar} onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
      </Modal>
    </div>
  );
}

export default DataTable;
