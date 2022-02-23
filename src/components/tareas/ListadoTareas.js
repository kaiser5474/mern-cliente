import React from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareas = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Plataforma de pago", estado: true },
    { nombre: "Elegir Hosting", estado: false },
  ];
  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {tareas.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareas.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <div className="mt-2 text-center">
        <button type="button" className="btn btn-eliminar 2">
          Eliminar Proyecto &times;
        </button>
      </div>
    </>
  );
};

export default ListadoTareas;
