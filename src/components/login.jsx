
function Login() {
    return (
      <div className="container">
          <div className="row align-items-center" style={{ minHeight: "100vh" }}>
              <div className="col-6  align-self-center mx-auto">
                  <div className="card" >
                      <div className="card-header">
                          <h1>Login</h1>
                      </div>
                      <div className="card-body">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text" id="basic-addon1">@</span>
                              </div>
                              <input type="text" className="form-control" placeholder="Usuario"/>
                          </div>
                          <div className="input-group-prepend">
                              <input type="password" className="form-control" placeholder="Contraseña"/>
                          </div><br />
                          <div className="col text-center">
                              <button className="btn btn-primary">Iniciar sesión</button>
                          </div>
  
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
    );
  }
  
  export default Login;
  