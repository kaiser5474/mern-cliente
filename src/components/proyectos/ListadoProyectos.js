import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  //Extraer proyectos de state inicial en context
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyecto } = proyectosContext;

  useEffect(() => {
    obtenerProyecto();
  }, []);

  //revisar si proyecto tiene contenido
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
