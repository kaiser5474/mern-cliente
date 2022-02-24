import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  const { id, proyectoId } = tarea;
  const { eliminarTareas, obtenerTareas } = useContext(tareaContext);
  const tareaEliminar = () => {
    eliminarTareas(id);
    obtenerTareas(proyectoId);
  };
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button className="completo" type="button">
            Completo
          </button>
        ) : (
          <button className="incompleto" type="button">
            Pendiente
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={tareaEliminar}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
