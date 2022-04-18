import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

import { getTask } from '../../services/task';
import { getAllTasks } from '../../store/actions';

function DataTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTodos = async () => {
      const result = await getTask();
      dispatch(getAllTasks(result));
    };
    fetchTodos();
  }, []);

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
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataTable;
