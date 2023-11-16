import ModuloHeaderPrincipal from "./modules/dashboard/module_header_dashboard/ModuloHeaderPrincipal";
import ModuloPrincipalContainer from "./modules/dashboard/modulo_principalContainer_dashboard/ModuloPrincipalContainer";

function Dashboard() {
  return (
    <div className="container-fluid">
        <div className="row">
            <ModuloHeaderPrincipal />
            <ModuloPrincipalContainer />
        </div>
    </div>
  );
}

export default Dashboard;
