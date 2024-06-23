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

    if (!nombre || !email || !contrasena) {
      setErrorCampos(true);
      return;
    }

    const usuariosRegistrados =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExistente = usuariosRegistrados.find(
      (usuario) => usuario.nombre === nombre
    );

    if (usuarioExistente) {
      setErrorNombre(true);
      return;
    }

    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(contrasena, saltRounds);

    const nuevoUsuario = {
      nombre,
      email,
      rol: "user",
      contrasena: hashedPassword,
    };
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario) {
      usuario.rol = "admin";
      localStorage.setItem("usuario", JSON.stringify(usuario));
    }

    localStorage.setItem(
      "usuarios",
      JSON.stringify([...usuariosRegistrados, nuevoUsuario])
    );

    setRegistradoExitosamente(true);

    setNombre("");
    setEmail("");
    setContrasena("");
  };

  const handleCerrarAdvertencia = () => {
    setRegistradoExitosamente(false);
  };

  const [token, setToken] = useState("");
  useEffect(() => {
    if (email && contrasena) {
      setToken(Math.random().toString(36).substring(7)); // Generar un token simple
    }
  }, [email, contrasena]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("usuarios"));

    /* if (data) {
      console.log(data);
      const usuario = data.find((e) => e.email === email);

      if (usuario && usuario.contrasena) {
        console.log(usuario);
        const contrasenaValida = bcrypt.compareSync(
          contrasena,
          usuario.contrasena
        );

        if (contrasenaValida) {
          const info = {
            token: token,
            rol: usuario.rol,
            usuario: usuario.nombre,
            contrasena: usuario.contrasena,
            email: usuario.email,
          };
          console.log(info);

          localStorage.setItem("info", JSON.stringify(info));

          window.location.href = "/home";
        } else {
          console.log("La contraseña es incorrecta");
        }
      } else {
        console.log("El correo no existe en nuestra base de datos");
      }
    }*/
    if (data && data.length > 0) {
      const usuario = data.find((e) => e.email === email);

      if (usuario) {
        const contrasenaValida = bcrypt.compareSync(
          contrasena,
          usuario.contrasena
        );

        if (contrasenaValida) {
          const info = {
            token: token,
            rol: usuario.rol,
            usuario: usuario.nombre,
            contrasena: usuario.contrasena,
            email: usuario.email,
          };

          localStorage.setItem("info", JSON.stringify(info));
          window.location.href = "/home";
        } else {
          alert("Contraseña no válida");
        }
      } else {
        alert("Usuario no encontrado");
      }
    } else {
      alert("No se encontraron datos de usuarios");
    }
  };

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
                <button>Registrate</button>
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
                <h1>Ingresa a tu cuenta</h1>
                <input
                  type="email"
                  name="correo"
                  id="correo"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo"
                />
                <input
                  type="password"
                  name="clave"
                  id="clave"
                  onChange={(e) => setContrasena(e.target.value)}
                  placeholder="Contraseña"
                />
                <div className="content">
                  <div className="checkbox"></div>
                  <div className="pass-link"></div>
                </div>
                <button type="submit"> Entrar</button>
                <div className="social-container"></div>
              </form>
            </div>

            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="title">
                    Bienvenido
                    <br />
                    amigo
                  </h1>
                  <p className="p-texto">
                    Puedes loguearte y entrar en esta pagina que es de prueba{" "}
                  </p>
                  <button
                    className="ghost"
                    id="login"
                    onClick={handleLoginClick}
                  >
                    Entrar
                  </button>
                </div>

                <div className="overlay-panel overlay-right">
                  <h1 className="title">
                    Sino tienes <br />
                    Una cuenta
                  </h1>
                  <p className="p-texto">
                    Puedes crearte una en este momento desde el panel de
                    registro
                  </p>
                  <button
                    className="ghost"
                    id="register"
                    onClick={handleRegisterClick}
                  >
                    Registrarme
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
