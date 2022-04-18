<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
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
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';


=======
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete } from '@material-ui/icons';
>>>>>>> f9fbbd23a862a031a3b575163398aac508d71e95

import { getTask } from '../../services/task';
import { getAllTasks } from '../../store/actions';

function DataTable() {
<<<<<<< HEAD
  
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  

  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    course: "",
    description: "",
    observations: "",
    endDate: "",
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
        var dataNueva = data;
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
    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  useEffect(async () => {
    await peticionGet();
=======
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
>>>>>>> f9fbbd23a862a031a3b575163398aac508d71e95
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
