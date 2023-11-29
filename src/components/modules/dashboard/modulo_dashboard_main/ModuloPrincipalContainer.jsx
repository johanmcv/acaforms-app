import React, { useState, useEffect } from 'react';
import ModuloComponent from "../modulo_dashboard_componentePrincipal/ModuloComponent";
import ModuloPrincipalContainer_Contador from "../modulo_dashboard_main_estadisticas/ModuloPrincipalContainer_Contador";

// === Imports del MenuLateral ===
import MenuLateral from "./extras/menuLateral";
import PageInformacion from "./extras/pages/pageInformacion";
import PageHome from './extras/pages/pageHome';
// =======================================================

const ModuloPrincipalContainer = () => {
  const [contenido, setContenido] = useState(null);
  
  const handleMenuClick = (opcion) => {
    switch (opcion) {
      case 'inicio':
        setContenido(<PageHome />);
        break;
      case 'creacionEncuestas':
        setContenido(<ModuloComponent />);
        break;
      case 'resultados':
        // Agrega el componente correspondiente a 'resultados' si es necesario
        break;
      case 'informacion':
        setContenido(<PageInformacion />);
        break;
      default:
        setContenido(null);
    }
  };

  useEffect(() => {
    // Este efecto se ejecuta al montar el componente
    // Aquí puedes establecer el contenido inicial, por ejemplo, PageHome
    setContenido(<PageHome />);
  }, []);

  
  return (
    <div className="col-md-12">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <MenuLateral onMenuClick={handleMenuClick} />
              </div>
            </div>
            <div className="col-md-9">
              <ModuloPrincipalContainer_Contador />
              {contenido}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuloPrincipalContainer;
