import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from '@material-ui/core';

import { useParams } from 'react-router-dom';
import { getTasks } from '../../services/taskUser';
import { getAllTasksUser } from '../../store/tasksUser/actionsUserTask';

function DataTable() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.taskUserReducer.tasks);

  useEffect(() => {
    const fetchTasks = async () => {
      const results = await getTasks(id);
      dispatch(getAllTasksUser(results));
    };
    fetchTasks();
  }, []);

  /*   const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(consolaSeleccionada);
    dispatch(postTask(consolaSeleccionada));
    abrirCerrarModalInsertar();
  }; */

  /*  const handleSubmitEdit = async () => {
    await updateTask(consolaSeleccionada);
    dispatch(
      patchTask(
        consolaSeleccionada,
      ),
    );
    abrirCerrarModalEditar();
  }; */

  /*   const handleSubmitDelete = async (e) => {
    e.preventDefault();
    await deleteTask(consolaSeleccionada.id);
    dispatch(
      deleteTasks(consolaSeleccionada.id),
    );
    abrirCerrarModalEliminar();
  }; */

  return (
    <div>
      <h1>DataTable Tareas</h1>
      <br />
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
                  <TableCell>&nbsp;&nbsp;&nbsp;</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataTable;
