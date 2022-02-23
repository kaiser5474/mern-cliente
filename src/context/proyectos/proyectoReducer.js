import {
  FORMULARIO_PROYECTO,
  CREAR_PROYECTO,
  OBTENER_PROYECTO,
  PROYECTO_ACTUAL,
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
    default:
      return state;
  }
};
