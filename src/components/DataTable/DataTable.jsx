import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';

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
      dispatch(getAllTasks(results));
    };
    fetchTodos();
  }, []);

  return (
    // eslint-disable-next-line no-underscore-dangle
    <DataGrid rows={data} columns={columns} getRowId={(row) => row._id} />
  );
}

export default DataTable;
