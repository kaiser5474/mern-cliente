import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    password2: "",
  });
  const { nombre, email, password, password2 } = usuario;
  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e);
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear Cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Tu nombre"
              onChange={onChange}
              value={nombre}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu email"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Tu Contraseña"
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password2">Confirmar Password</label>
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="Repetir contraseña"
              onChange={onChange}
              value={password2}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Crear Cuenta"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Volver a iniciar sessión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
