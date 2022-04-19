import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from '@material-ui/icons';

import { getTask } from '../../services/task';
import { getAllTasks } from '../../store/actions';

function DataTable() {
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const columns = [
    {
      field: 'course',
      headerName: 'Asignatura',
      minWidth: 200,
    },
    {
      field: 'description',
      headerName: 'Descripcion',
      minWidth: 200,
    },
    {
      field: 'observations',
      headerName: 'Observaciones',
      minWidth: 200,
    },
    {
      field: 'endDate',
      headerName: 'Fecha de finalizacion',
      minWidth: 200,
    },
    {
      field: 'actions',
      headerName: 'Acciones',
    },
  ];
  useEffect(() => {
    const fetchTodos = async () => {
      const results = await getTask();
      setData(results);
      console.log(results);
      dispatch(getAllTasks(results));
    };
    fetchTodos();
  }, []);

  return (
    <>
      <DataGrid rows={data} columns={columns} getRowId={(row) => row._id} />;
    </>
  );
}

export default DataTable;
