import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username,
        password,
      });

      console.log(response.data);
      // Aquí puedes manejar la respuesta del servidor, por ejemplo, redirigir al dashboard si el inicio de sesión es exitoso.
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data.error);
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-6  align-self-center mx-auto">
          <div className="card">
            <div className="card-header">
              <h1>Login</h1>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group-prepend">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <div className="col text-center">
                <button className="btn btn-primary" onClick={handleLogin}>
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
