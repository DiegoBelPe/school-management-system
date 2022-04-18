import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from '@material-ui/icons';

import { getTask } from '../../services/task';
import { getAllTasks } from '../../store/actions';

function DataTable() {
  const dispatch = useDispatch();
  const clases = {
    _id: '6256fb64810952aff49d8ebb',
    course: 'Programacion',
    description: 'react',
    endDate: '14/04/2022',
    __v: 0,
  };
  const [data, setData] = React.useState([]);
  const columns = [
    {
      field: 'course',
      headerName: 'Asignatura',
    },
    {
      field: 'description',
      headerName: 'Descripcion',
    },
    {
      field: 'endDate',
      headerName: 'Fecha de finalizacion',
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
    <div className="App">
      <h1>DataTable Tareas</h1>
      <br />
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row._id}
      />
    </div>
  );
}

export default DataTable;
