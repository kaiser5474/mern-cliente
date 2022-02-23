import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "Tienda" },
    { nombre: "Juegos" },
    { nombre: "Axie" },
  ];
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto, index) => (
        <Proyecto proyecto={proyecto} key={index} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
