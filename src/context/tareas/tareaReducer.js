import { OBTENER_TAREA, CREAR_TAREA, ELIMINAR_TAREA } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_TAREA:
      return {
        ...state,
        tareaXProyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };
    case CREAR_TAREA:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    default:
      return state;
  }
};
