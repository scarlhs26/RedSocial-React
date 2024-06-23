import "../styles/Loginregister.css";
import { useState, useEffect } from "react";
import "../img/gis.gif";
import bcrypt from "bcryptjs";

export function Loginregister() {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterActive(true);
  };

  const handleLoginClick = () => {
    setIsRegisterActive(false);
  };

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [registradoExitosamente, setRegistradoExitosamente] = useState(false);
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorCampos, setErrorCampos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorCampos(false);
    setErrorNombre(false);
    // Validar que todos los campos estén llenos
    if (!nombre || !email || !contrasena) {
      setErrorCampos(true);
      return;
    }

    // Obtener usuarios registrados del localStorage
    const usuariosRegistrados =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si ya existe un usuario con el mismo nombre
    const usuarioExistente = usuariosRegistrados.find(
      (usuario) => usuario.nombre === nombre
    );

    if (usuarioExistente) {
      setErrorNombre(true);
      return;
    }
    // Generar un hash para la contraseña utilizando bcrypt
    const saltRounds = 10; // Número de rondas de hashing
    const hashedPassword = bcrypt.hashSync(contrasena, saltRounds);

    // Crear un objeto con la información del nuevo usuario
    const nuevoUsuario = {
      nombre,
      email,
      rol: "user",
      contrasena: hashedPassword,
    };

    // Almacenar el nuevo usuario junto con los usuarios existentes en localStorage
    localStorage.setItem(
      "usuarios",
      JSON.stringify([...usuariosRegistrados, nuevoUsuario])
    );
    // Mostrar la advertencia de registro exitoso
    setRegistradoExitosamente(true);

    // Limpiar los campos del formulario
    setNombre("");
    setEmail("");
    setContrasena("");
  };

  const handleCerrarAdvertencia = () => {
    // Cerrar la advertencia después de un tiempo
    setRegistradoExitosamente(false);
  };
//------------------Logica del login

  const [code, setCode] = useState("");
  useEffect(()=>{
    setCode(Math.floor(Math.random() * 100000));
},[email, contrasena])

const handleLoginSubmit = (e)=>{
  e.preventDefault();
  const data = JSON.parse(localStorage.getItem('usuarios'));
  if(data){
      const usuario = data.find((e)=> e.email === email)
      if(usuario){
          if(usuario.contrasena === contrasena){
              const dataNueva = data.map((e)=>{
                  if(e.email === email){
                      e.token = code;
                      return e;
                  }
                  return e;
              })
              localStorage.setItem('usuarios', JSON.stringify(dataNueva))
              localStorage.setItem('token', JSON.stringify(code))
              window.location.href = '/home'
              
          }else{
              console.log('La contrasena es incorrecta')
          }
      }else{
          console.log('El correo no existe en nuestra base de datos')
      }
  }
}




  return (
    <>
      <div className="body-login">
        <div className="contenido-seccion">
          <div
            id="container"
            className={isRegisterActive ? "right-panel-active" : ""}
          >
            <div className="form-container register-container">
              <form onSubmit={handleSubmit}>
                <h1>Registrate Aqui.</h1>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input
                  type="password"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  placeholder="Contraseña"
                />
                <button>Register</button>
                <div>
                  {errorCampos && !errorNombre && (
                    <div style={{ color: "red", marginTop: "10px" }}>
                      Por favor, complete todos los campos.
                    </div>
                  )}

                  {errorNombre && !errorCampos && (
                    <div style={{ color: "red", marginTop: "10px" }}>
                      ¡Ya existe un usuario con ese nombre!
                    </div>
                  )}

                  {registradoExitosamente && !errorCampos && !errorNombre && (
                    <div style={{ color: "green", marginTop: "10px" }}>
                      Se ha registrado exitosamente.
                    </div>
                  )}
                </div>
                <div className="social-container">
                  <a href="#" className="social">
                    {" "}
                  </a>
                </div>
              </form>
            </div>

            <div className="form-container login-container">
              <form onSubmit={handleLoginSubmit}>
                <h1>Login hire</h1>
                <input type="email" name="correo" id="correo" onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                <input type="password" name="clave" id="clave" onChange={(e)=> setContrasena(e.target.value)} placeholder="Password" />
                <div className="content">
                  <div className="checkbox">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="Remember me"></label>
                  </div>
                  <div className="pass-link"></div>
                </div>
                <button><input type="submit" /></button>
                <span>or use your account</span>
                <div className="social-container"></div>
              </form>
            </div>

            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="title">
                    Hello <br />
                    friends
                  </h1>
                  <p>if Yout have an account.login here and have fun</p>
                  <button
                    className="ghost"
                    id="login"
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                </div>

                <div className="overlay-panel overlay-right">
                  <h1 className="title">
                    Start yout <br />
                    journy now
                  </h1>
                  <p>
                    if you don't have an account yet,jofn us and start your
                    journey.
                  </p>
                  <button
                    className="ghost"
                    id="register"
                    onClick={handleRegisterClick}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
