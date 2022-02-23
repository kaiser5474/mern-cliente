import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  CREAR_PROYECTO,
  OBTENER_PROYECTO,
  PROYECTO_ACTUAL,
} from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { nombre: "Tienda Virtual", id: 1 },
    { nombre: "Intranet", id: 2 },
    { nombre: "Diseño de sitio web", id: 3 },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    proyecto: null,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };
  const obtenerProyecto = () => {
    dispatch({
      type: OBTENER_PROYECTO,
      payload: proyectos,
    });
  };
  //Crea un nuevo proyecto
  const crearProyecto = (proyecto) => {
    dispatch({
      type: CREAR_PROYECTO,
      payload: proyecto,
    });
  };
  //Selecciona el proyecto que el cliente dio click
  const proyectoActual = (proyecto) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyecto,
    });
  };
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyecto,
        crearProyecto,
        proyectoActual,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
