import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { useReducer } from 'react';

const ProyectoState = (props) => {
  const initialState = {
    formulario: false,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //serie de funciones para el CRUD
  return (
    <proyectoContext.Provider value={{ formulario: state.formulario }}>
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
