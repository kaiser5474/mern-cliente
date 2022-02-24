import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTareas = () => {
  const { proyecto, eliminarProyecto } = useContext(proyectoContext);
  const { tareaXProyecto } = useContext(tareaContext);

  return (
    <>
      <h2>Proyecto: {proyecto.nombre}</h2>
      <ul className="listado-tareas">
        {tareaXProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareaXProyecto.map((tarea) => <Tarea tarea={tarea} key={tarea.id} />)
        )}
      </ul>
      <div className="mt-2 text-center">
        <button
          type="button"
          className="btn btn-eliminar"
          onClick={() => eliminarProyecto(proyecto.id)}
        >
          &times; Eliminar Proyecto
        </button>
      </div>
    </>
  );
};

export default ListadoTareas;
