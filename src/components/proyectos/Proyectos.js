import React, { useContext } from "react";
import Barra from "../layout/Barra";
import Sidebar from "../layout/Sidebar";
import FormTareas from "../tareas/FormTareas";
import ListadoTareas from "../tareas/ListadoTareas";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyectos = () => {
  const { proyecto } = useContext(proyectoContext);
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Barra />
        {!proyecto ? (          
            <div className="contenedor-tareas">
              <h2>Selecciona un proyecto</h2>
            </div>          
        ) : (
          <main>
            <FormTareas />
            <div className="contenedor-tareas">
              <ListadoTareas />
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default Proyectos;
