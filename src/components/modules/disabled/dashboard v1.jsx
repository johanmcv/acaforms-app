
function Dashboard() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-8 " id="div-userdashboard">
                <div className="card ">
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
                    <p className="survey-text" >
                        Encuestas publicadas: (n)<br />
                        : (n)<br />
                    </p>
                    <br></br>
                </div>
            </div>

            <div className="col-md-12">
                <div className="row" >
                    <div className="col-md-3">
                        <div className="card">
                            <p>Titulo del modulo <br /> texto del modulo</p>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <p>Titulo del modulo <br /> texto del modulo</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis nisi eligendi eos nam aspernatur fugiat suscipit porro voluptatum et. Aut, architecto? Quis perferendis porro animi voluptate? Pariatur, assumenda aperiam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi ratione minima ipsam eum magni cum doloribus sapiente, delectus quibusdam deserunt excepturi! Ratione ullam at magnam officia! Labore, sint in?
                                Id nisi enim sapiente totam blanditiis animi saepe excepturi debitis est. Earum atque temporibus mollitia harum! Ipsam praesentium ipsum vel. Sint, repellat placeat. Cumque, ipsa labore earum numquam corporis rerum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card t_div_form">
                    <div className="row">
                        <div className="col-md-10">
                            <h5>Formulario nombreFormulario</h5>
                            <p>
                                Respuestas recibidas <br />
                                Fecha de publicacion <br />
                                Fecha de cierre <br />
                                Estado <br />
                            </p>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark">Publicar</button>
                            <button className="btn btn-dark">Editar</button>
                            <button className="btn btn-dark">Duplicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
