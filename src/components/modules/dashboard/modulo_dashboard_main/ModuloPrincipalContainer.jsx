
import React, { useState } from 'react';
import ModuloComponent from "../modulo_dashboard_componentePrincipal/ModuloComponent";
import ModuloPrincipalContainer_Contador from "../modulo_dashboard_main_estadisticas/ModuloPrincipalContainer_Contador";
import MenuLateral from "./extras/menuLateral";

const ModuloPrincipalContainer = () =>(
  // Sin funcionar
    const [componenteActual, setComponenteActual] = useState(<Inicio />);

  const manejarClicEnMenu = (opcion) => {
    switch (opcion) {
      case 'Inicio':
        setComponenteActual(<Inicio />);
        break;
      case 'CreacionEncuestas':
        setComponenteActual(<CreacionEncuestas />);
        break;
      case 'Resultados':
        setComponenteActual(<Resultados />);
        break;
      case 'Configuracion':
        setComponenteActual(<Configuracion />);
        break;
      case 'Salir':
        setComponenteActual(<Salir />);
        break;
      default:
        setComponenteActual(null);
    }
  };
    <div className="col-md-12">
        <div className="row justify-content-center">
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <MenuLateral />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <ModuloPrincipalContainer_Contador />
                        <ModuloComponent />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ModuloPrincipalContainer;