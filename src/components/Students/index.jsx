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
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent,
} from '../../services/student';
import {
  getAllStudents,
  postStudent,
  patchStudent,
  deleteStudents,
} from '../../store/student/actionStudent';

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

function index() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.studentReducer.students);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [studentSeleccionado, setStudentSeleccionado] = useState({
    name: '',
    lastName: '',
    identification: '',
    grade: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentSeleccionado((prevState) => ({
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

  const seleccionarStudent = (student, caso) => {
    setStudentSeleccionado(student);
    // eslint-disable-next-line no-unused-expressions
    caso === 'Editar' ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };
  useEffect(() => {
    const fetchTasks = async () => {
      const results = await getStudent();
      dispatch(getAllStudents(results));
    };
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await createStudent(studentSeleccionado);
    dispatch(postStudent([...data, results]));
    abrirCerrarModalInsertar();
  };

  const handleSubmitEdit = async () => {
    const results = await updateStudent(studentSeleccionado);
    dispatch(
      patchStudent(
        data.map((student) => (student.id === results.id ? results : student)),
      ),
    );
    abrirCerrarModalEditar();
  };

  const handleSubmitDelete = async () => {
    const results = await deleteStudent(studentSeleccionado.id);
    dispatch(
      deleteStudents(data.filter((student) => student.id !== results.id)),
    );
    abrirCerrarModalEliminar();
  };

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar nuevo estudiante</h3>
      <TextField
        name="name"
        className={styles.inputMaterial}
        label="Nombres"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="lastName"
        className={styles.inputMaterial}
        label="Apellidos"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="identification"
        className={styles.inputMaterial}
        label="Identificación"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="grade"
        className={styles.inputMaterial}
        label="Grado"
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
      <h3>Editar Estudiante</h3>
      <TextField
        name="name"
        className={styles.inputMaterial}
        label="Nombres"
        onChange={handleChange}
        value={studentSeleccionado && studentSeleccionado.name}
      />
      <br />
      <TextField
        name="lastName"
        className={styles.inputMaterial}
        label="Apellidos"
        onChange={handleChange}
        value={studentSeleccionado && studentSeleccionado.lastName}
      />
      <br />
      <TextField
        name="identification"
        className={styles.inputMaterial}
        label="Identificación"
        onChange={handleChange}
        value={studentSeleccionado && studentSeleccionado.identification}
      />
      <br />
      <TextField
        name="grade"
        className={styles.inputMaterial}
        label="Grado"
        onChange={handleChange}
        value={studentSeleccionado && studentSeleccionado.grade}
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
        <b>{studentSeleccionado && studentSeleccionado.name}</b>
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
      <h1>Estudiantes</h1>
      <br />
      <Button onClick={abrirCerrarModalInsertar}>Insertar</Button>
      <br />
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>Identificacion</TableCell>
              <TableCell>Grado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              && data.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.lastName}</TableCell>
                  <TableCell>{student.identification}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>
                    <Edit
                      className={styles.iconos}
                      onClick={() => seleccionarStudent(student, 'Editar')}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <Delete
                      className={styles.iconos}
                      onClick={() => seleccionarStudent(student, 'Eliminar')}
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

export default index;
