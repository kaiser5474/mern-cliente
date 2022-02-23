import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { paraId } from "../../Helpers";

const NuevoProyecto = () => {
  //hooks
  const [proyecto, setProyecto] = useState({
    nombre: "",
    id: "",
  });

  const [error, setError] = useState(false);
  //Obtener el state del proyecto
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario, crearProyecto } = proyectosContext;

  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
      id: paraId(),
    });
  };

  const { nombre } = proyecto;

  const onSubmitProyecto = (e) => {
    e.preventDefault();
    if (nombre === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      return;
    }
    setError(false);
    crearProyecto(proyecto);
    setProyecto({
      nombre: "",
      id: "",
    });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      {formulario && (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            placeholder="Nombre proyecto"
            name="nombre"
            className="input-text"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
          {error && (
            <p className="mensaje error">
              El nombre de proyecto es obligatorio
            </p>
          )}
        </form>
      )}
    </>
  );
};

export default NuevoProyecto;
