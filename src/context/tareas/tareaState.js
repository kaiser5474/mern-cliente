import { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {
  OBTENER_TAREA,
  CREAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  EDITAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 1, id: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 1, id: 2 },
      {
        nombre: "Elegir Plataforma de pago",
        estado: true,
        proyectoId: 2,
        id: 3,
      },
      { nombre: "Elegir Hosting", estado: false, proyectoId: 3, id: 4 },
    ],
    tareaXProyecto: null,
    tareaActual: null,
  };
  //Crear dispath y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //Funciones de tareas
  //Obtener las tareas cuando el usuario seleccione un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: OBTENER_TAREA,
      payload: proyectoId,
    });
  };
  //Obtener las tareas cuando el usuario seleccione un proyecto
  const crearTareas = (tarea) => {
    dispatch({
      type: CREAR_TAREA,
      payload: tarea,
    });
  };
  //Eliminar tareas
  const eliminarTareas = (tareaId) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: tareaId,
    });
  };
  //Cambiar el estado de la tarea
  const estadoTareas = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  //Cambiar el estado de la tarea
  const selectTareas = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  //Cambiar el estado de la tarea
  const editTareas = (tarea) => {
    dispatch({
      type: EDITAR_TAREA,
      payload: tarea,
    });
  };
  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareaXProyecto: state.tareaXProyecto,
        tareaActual: state.tareaActual,
        obtenerTareas,
        crearTareas,
        eliminarTareas,
        estadoTareas,
        selectTareas,
        editTareas,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
