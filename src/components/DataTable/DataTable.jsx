import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import 'styled-components';

createTheme('solarized', {
  text: {
    primary: '#FEFEFE',
    secondary: '#FEFEFE',
  },
  background: {
    default: '#2C327D',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#FEFEFE',
  },
  action: {
    button: '#FEFEFE',
    hover: '#FEFEFE',
    disabled: '#FEFEFE',
  },
}, 'dark');

const data = [
  {
    id: 1,
    asignatura: 'Matematicas',
    descripcion: 'Tarea de conjuntos...',
    Observaciones: 'Ninguna',
    fecha_entrega: '22/03/2022',
    Estado: '✅',
    action: ''
  },
  {
    id: 2,
    asignatura: 'Sociales',
    descripcion: 'Tarea de ...',
    Observaciones: 'Ninguna',
    fecha_entrega: '22/03/2022',
    Estado: '✅',
    action: ''
  },
  {
    id: 3,
    asignatura: 'React',
    descripcion: 'Tarea de...',
    Observaciones: 'Ninguna',
    fecha_entrega: '22/03/2022',
    Estado: '✅',
    action: ''
  },
  {
    id: 4,
    asignatura: 'Matematicas',
    descripcion: 'Tarea de conjuntos...',
    Observaciones: 'Ninguna',
    fecha_entrega: '22/03/2022',
    Estado: '✅',
    action: ''
  },
  {
    id: 5,
    asignatura: 'Programacion',
    descripcion: 'Tarea de conjuntos...',
    Observaciones: 'Ninguna',
    fecha_entrega: '22/03/2022',
    Estado: '✅',
    action: ''
  },
  {
    id: 6,
    asignatura: 'Sociales',
    descripcion: 'Tarea de ...',
    Observaciones: 'Ninguna',
    fecha_entrega: '22/03/2022',
    Estado: '✅',
    action: ''
  },
  {
    id: 7,
    asignatura: 'Religion',
    descripcion: 'Tarea de conjuntos...',
    Observaciones: '',
    fecha_entrega: '22/03/2022',
    Estado: '✅',
    action: ''
  },
];

const columns = [
  {
    name: 'ID',
    selector: (row) => row.id,
  },
  {
    name: 'ASIGNATURA',
    selector: (row) => row.asignatura,
  },
  {
    name: 'DESCRIPCION',
    selector: (row) => row.descripcion,
  },
  {
    name: 'OBSERVACIONES',
    selector: (row) => row.observaciones,
  },
  {
    name: 'FECHA ENTREGA',
    selector: (row) => row.fecha_entrega,
  },
  {
    name: 'ESTADO',
    selector: (row) => row.estado,
  },
  {
    name: 'ACTION',
    selector: (row) => row.action,
  },
];

const Table = () => {
  /*configurar los hooks
  const [users, setUsers] = useState([]);
  funcion para mostrar los DialogActions
  const URL = ''
  const showdata = async ()=>{
    const response = await fetch(URL)
    const data = await response.json

  }
  */
  return (
    <>
      <DataTable 
      columns={columns} 
      data={data} 
      pagination 
      theme='solarized'
      />
    </>
  );
};

export default Table;
