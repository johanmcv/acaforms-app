
import './assets/css/style.css';
import { fechasTiempo } from "../../../utils/fechasTiempo";
      

// Obtén la fecha actual  
const fechaActual = new Date();
const { dia, mes, año } = fechasTiempo(fechaActual);
const ModuloHeaderPrincipal =  () => (
    <div className="col-md-12">
        <div className="dashboard-miniBanner">
            <div className="row">
                <div className="col-md-8">
                    Bienvenido hoy es {`${dia} de ${mes}, ${año}`}
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center justify-content">
                        <img
                            src="/src/assets/images/icons/profile.png"
                            alt="Imagen de perfil"
                            className=" img-fluid dashboard-miniBanner-img-profile"
                        />
                        <span><b>Nombre de Usuario</b><br />Ocupación</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ModuloHeaderPrincipal;