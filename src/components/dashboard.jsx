import React from 'react';

function Dashboard() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-8 " id="div-userdashboard">
                <div className="card">
                    <div className="row">
                        <div className="col-md-2">
                            <img src="/src/assets/images/icons/profile.png"  alt="Imagen de perfil" className="img-fluid dashboard-profile-img"/>
                        </div>
                        <div className="col-md-10 dashboard-banner-profile-info" style={{ marginTop: "auto", marginBottom: "auto" }}>
                            {/*pendiente!! Verificar la personalización del h3 span para ponerlo en el css*/}
                            <h3 style={{ marginTop: "auto", marginBottom: "auto" }}>Nombre Usuario</h3>
                            <span style={{ marginTop: "auto", marginBottom: "auto" }}>Ocupación</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4" id='div-userdashboard-info'>
                <div className="card">
                    <p>Encuestas publicadas</p>
                    <p>Encuestas publicadas</p>
                    <p>Encuestas publicadas</p>
                </div>
            </div>

            <div className="col-md-12">
                <div className="row">
                    {/*Espacio posible seccion de modulos*/}
                    <div className="col-md-3">
                        <div className="card">
                            <p>hola</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
