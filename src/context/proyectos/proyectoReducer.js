import {
  FORMULARIO_PROYECTO,
  CREAR_PROYECTO,
  OBTENER_PROYECTO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    case CREAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
      };
    case OBTENER_PROYECTO:
      return {
        ...state,
        proyectos: action.payload,
      };
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: action.payload,
      };
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyecto: null,
        proyectos: state.proyectos.filter(
          (proyecto) => proyecto.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
