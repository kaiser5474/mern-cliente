import React, { useState, useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";

const FormTareas = ({ proyecto }) => {
  const [error, setError] = useState(false);
  const { id } = proyecto;

  const [tarea, setTarea] = useState({
    nombre: "",
    estado: false,
    proyectoId: id,
  });

  const { nombre } = tarea;

  const { crearTareas, obtenerTareas } = useContext(tareaContext);

  const onChangeTarea = (e) => {
    e.preventDefault();
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      return;
    }
    setError(false);
    crearTareas(tarea);
    obtenerTareas(id);
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={onChangeTarea}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Tarea"
          ></input>
        </div>
      </form>
      {error && (
        <p className="mensaje error">
          Inserte un nombre de tarea para agregar al proyecto.
        </p>
      )}
    </div>
  );
};

export default FormTareas;
