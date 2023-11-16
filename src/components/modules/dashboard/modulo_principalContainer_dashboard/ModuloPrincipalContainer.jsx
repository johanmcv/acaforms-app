import ModuloComponent from "../modulo_componentePrincipal_dashboard/ModuloComponent";
import ModuloPrincipalContainer_Contador from "../modulo_principalContainer_contador_dashboard/ModuloPrincipalContainer_Contador";

const ModuloPrincipalContainer = () =>(
    <div className="col-md-12">
        <div className="row justify-content-center">
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                        <ul className="list-group">
                            <li className="list-group-item">Inicio</li>
                            <li className="list-group-item">Creación de encuestas</li>
                            <li className="list-group-item">Resultados</li>
                            <li className="list-group-item">Configuración</li>
                            <li className="list-group-item list-group-item-danger">Salir</li>
                        </ul>
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