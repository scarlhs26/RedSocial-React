import React, { useState, useEffect } from "react";
import { NavIzquierda } from "../components/NavIzquierda.jsx";
import { NavSuperior } from "../components/NavSuperior.jsx";
import { NavDerecha } from "../components/NavDerecha.jsx";
import "../styles/admin.css";
export function Admin() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [edicionUsuario, setEdicionUsuario] = useState(null);

  useEffect(() => {
    // Obtén la lista de usuarios del localStorage al cargar la página
    const usuariosGuardados =
      JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(usuariosGuardados);
  }, []);

  const handleClickUsuario = (nombreUsuario) => {
    // Encuentra la información del usuario correspondiente
    const usuario = usuarios.find((u) => u.nombre === nombreUsuario);

    // Crea un nuevo objeto de usuario
    const usuarioSeleccionado = {
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
    };

    setUsuarioSeleccionado(usuarioSeleccionado);
    setEdicionUsuario(null); // Limpia el estado de edición al seleccionar un usuario
  };

  const handleEditarUsuario = () => {
    // Establece el estado de edición para el usuario seleccionado
    setEdicionUsuario({
      nombre: usuarioSeleccionado.nombre,
      email: usuarioSeleccionado.email,
      rol: usuarioSeleccionado.rol,
    });
  };

  const handleGuardarEdicion = () => {
    // Actualiza la información del usuario en el estado
    const nuevosUsuarios = usuarios.map((u) =>
      u.nombre === usuarioSeleccionado.nombre ? edicionUsuario : u
    );
    setUsuarios(nuevosUsuarios);

    // Actualiza la información en el localStorage
    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));

    // Limpia los estados después de guardar la edición
    setUsuarioSeleccionado(null);
    setEdicionUsuario(null);
  };

  const handleClickEliminarUsuario = () => {
    // Filtra los usuarios para excluir al usuario seleccionado
    const nuevosUsuarios = usuarios.filter(
      (u) => u.nombre !== usuarioSeleccionado.nombre
    );

    // Actualiza el estado de usuarios y el localStorage
    setUsuarios(nuevosUsuarios);
    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));

    // Limpia los estados después de eliminar al usuario
    setUsuarioSeleccionado(null);
    setEdicionUsuario(null);
  };

  return (
    <>
      <div>
        {/*------------------------ SECCION SUPERIOR---------------*/}
        <NavSuperior />

        <section className="seccion-principal">
          {/*------------------------ SECCION LATERAL IZQUIERDA-------------------*/}
          <NavIzquierda />

          {/*------------------------ SECCION CENTRO API------------------------*/}
          <section className="central-opciones">
            <div className="seccion-general seccion-admin">
              <h1 className="nombre-admin">Usuarios registrados</h1>
              <ul>
                {usuarios.map((usuario) => (
                  <li className="li-admin" key={usuario.email}>
                    <button onClick={() => handleClickUsuario(usuario.nombre)}>
                      {usuario.nombre}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Mostrar la información completa del usuario seleccionado */}
              {usuarioSeleccionado && (
                <div>
                  <h2>Información del Usuario</h2>
                  <p className="nombre-admin" >Nombre: {usuarioSeleccionado.nombre}</p>
                  <p className="nombre-admin" >Email: {usuarioSeleccionado.email}</p>
                  <p className="nombre-admin">Rol: {usuarioSeleccionado.rol}</p>

                  {/* Botones de edición y guardar edición */}
                  <button
                    className="boton-editar"
                    onClick={handleEditarUsuario}
                  >
                    Editar
                  </button>
                  {edicionUsuario && (
                    <button
                      className="boton-guardar"
                      onClick={handleGuardarEdicion}
                    >
                      Guardar
                    </button>
                  )}
                  <button
                    className="boton-eliminar"
                    onClick={handleClickEliminarUsuario}
                  >
                    Eliminar
                  </button>
                </div>
              )}

              {/* Formulario de edición */}
              {edicionUsuario && (
                <div>
                  <h2>Editar Información</h2>
                  <form>
                    <label>
                      Nombre:
                      <input
                        type="text"
                        value={edicionUsuario.nombre}
                        onChange={(e) =>
                          setEdicionUsuario({
                            ...edicionUsuario,
                            nombre: e.target.value,
                          })
                        }
                      />
                    </label>
                    <label>
                      Email:
                      <input
                        type="text"
                        value={edicionUsuario.email}
                        onChange={(e) =>
                          setEdicionUsuario({
                            ...edicionUsuario,
                            email: e.target.value,
                          })
                        }
                      />
                    </label>
                    <label>
                      Rol:
                      <input
                        type="text"
                        value={edicionUsuario.rol}
                        onChange={(e) =>
                          setEdicionUsuario({
                            ...edicionUsuario,
                            rol: e.target.value,
                          })
                        }
                      />
                    </label>
                  </form>
                </div>
              )}
            </div>
          </section>

          {/*------------------------ SECCION LATERAL DERECHA---------------*/}
          <NavDerecha />
        </section>
      </div>
    </>
  );
}
