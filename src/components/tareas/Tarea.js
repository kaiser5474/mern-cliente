import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  const { id, proyectoId, estado } = tarea;
  const { eliminarTareas, obtenerTareas, estadoTareas, selectTareas } =
    useContext(tareaContext);
  const tareaEliminar = () => {
    if (window.confirm("Desea eliminar la tarea?")) {
      eliminarTareas(id);
      obtenerTareas(proyectoId);
    }
  };
  const cambiarEstadoTareas = () => {
    if (estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    estadoTareas(tarea);
  };
  const seleccionarTarea = () => {
    selectTareas(tarea);
  };
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            className="completo"
            type="button"
            onClick={() => cambiarEstadoTareas()}
          >
            Completo
          </button>
        ) : (
          <button
            className="incompleto"
            type="button"
            onClick={() => cambiarEstadoTareas()}
          >
            Pendiente
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea()}
        >
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
