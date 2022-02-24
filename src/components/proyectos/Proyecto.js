import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  const { proyectoActual } = useContext(proyectoContext);
  const { obtenerTareas } = useContext(tareaContext);

  //metodo que se ejecuta cuando selecciono un proyecto
  const handleOnClick = () => {
    proyectoActual(proyecto);
    obtenerTareas(proyecto.id);
  };

  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={handleOnClick}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
