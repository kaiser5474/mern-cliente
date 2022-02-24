import React from "react";
import { Link } from "react-router-dom";

const Barra = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Jarvis</span>
      </p>
      <nav className="nav-principal">
        <Link to="/">
          <a>Cerrar Sesión</a>
        </Link>
      </nav>
    </header>
  );
};

export default Barra;
