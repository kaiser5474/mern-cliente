import React, { useState, useContext, useEffect } from "react";
import tareaContext from "../../context/tareas/tareaContext";
import { paraId } from "../../Helpers";

const FormTareas = ({ proyecto }) => {
  const [error, setError] = useState(false);
  const [editando, setEditando] = useState(false);
  const { id } = proyecto;

  const [tarea, setTarea] = useState({
    nombre: "",
    estado: false,
    proyectoId: id,
    id: paraId(),
  });

  const { nombre } = tarea;

  const { crearTareas, obtenerTareas, tareaActual, editTareas } =
    useContext(tareaContext);

  useEffect(() => {
    if (tareaActual) {
      setTarea(tareaActual);
      setEditando(true);
    }
  }, [tareaActual]);

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
    if (editando) {
      editTareas(tarea);
      obtenerTareas(id);
    } else {
      crearTareas(tarea);
      obtenerTareas(id);
    }
    setTarea({
      nombre: "",
      estado: false,
      proyectoId: id,
      id: paraId(),
    });
    setEditando(false);
    setError(false);
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
            value={editando ? "Editar Tarea" : "Agregar Tarea"}
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
