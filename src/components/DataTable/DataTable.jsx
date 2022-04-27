import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
  Modal,
  TextField,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import {
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from '../../services/task';
import {
  getAllTasks,
  postTask,
  patchTask,
  deleteTasks,
} from '../../store/tasks/actions';

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
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tasks.task);
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
    // eslint-disable-next-line no-unused-expressions
    caso === 'Editar' ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const results = await getTask();
      dispatch(getAllTasks(results));
    };
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createTask(consolaSeleccionada);
    dispatch(postTask([...data, result]));
    abrirCerrarModalInsertar();
  };

  const handleSubmitEdit = async () => {
    const result = await updateTask(consolaSeleccionada);
    dispatch(
      patchTask(
        data.map((task) => (task.id === result.tarea.id ? result.tarea : task)),
      ),
    );
    abrirCerrarModalEditar();
  };

  const handleSubmitDelete = async (e) => {
    e.preventDefault();
    await deleteTask(consolaSeleccionada.id);
    dispatch(
      deleteTasks(data.filter((task) => task.id !== consolaSeleccionada.id)),
    );
    abrirCerrarModalEliminar();
  };
  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar nueva tarea</h3>
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
        <Button color="primary" onClick={handleSubmit}>
          Insertar
        </Button>
        <Button onClick={abrirCerrarModalInsertar}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Tarea</h3>
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
        <Button color="primary" onClick={handleSubmitEdit}>
          Editar
        </Button>
        <Button onClick={abrirCerrarModalEditar}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyEliminar = (
    <div className={styles.modal}>
      <p>
        Estás seguro que deseas eliminar
        <br />
        <b>{consolaSeleccionada && consolaSeleccionada.course}</b>
        ?
      </p>
      <div align="right">
        <Button color="secondary" onClick={handleSubmitDelete}>
          Sí
        </Button>
        <Button onClick={abrirCerrarModalEliminar}>No</Button>
      </div>
    </div>
  );
  return (
    <div>
      <h1>DataTable Tareas</h1>
      <br />
      <Button onClick={abrirCerrarModalInsertar}>Insertar</Button>
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
            {data
              && data.map((tarea) => (
                <TableRow key={tarea.id}>
                  <TableCell>{tarea.course}</TableCell>
                  <TableCell>{tarea.description}</TableCell>
                  <TableCell>{tarea.observations}</TableCell>
                  <TableCell>{tarea.endDate}</TableCell>
                  <TableCell>
                    <Edit
                      className={styles.iconos}
                      onClick={() => seleccionarConsola(tarea, 'Editar')}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <Delete
                      className={styles.iconos}
                      onClick={() => seleccionarConsola(tarea, 'Eliminar')}
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
