import ModuloHeaderPrincipal from "./modules/dashboard/module_dashboard_header/ModuloHeaderPrincipal";
import ModuloPrincipalContainer from "./modules/dashboard/modulo_dashboard_main/ModuloPrincipalContainer";

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
