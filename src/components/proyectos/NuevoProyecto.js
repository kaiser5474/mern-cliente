import React, { useState } from "react";

const NuevoProyecto = () => {
  //hooks
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });
  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre } = proyecto;

  const onSubmitProyecto = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
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
      </form>
    </>
  );
};

export default NuevoProyecto;
