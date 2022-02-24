import { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import { OBTENER_TAREA, CREAR_TAREA, ELIMINAR_TAREA } from "../../types";

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

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareaXProyecto: state.tareaXProyecto,
        obtenerTareas,
        crearTareas,
        eliminarTareas,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
