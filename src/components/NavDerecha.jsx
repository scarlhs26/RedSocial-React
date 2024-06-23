// NavDerecha.jsx

import React, { useEffect, useState } from "react";
import "../styles/home.css";
import UserImage from "../img/user.webp";

export function NavDerecha() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Recupera la información de usuarios almacenada en el localStorage
    const usuariosLocalStorage =
      JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(usuariosLocalStorage);
  }, []);

  return (
    <>
      <section className="lateral-derecha-opciones">
        {usuarios.map((usuario) => (
          <div key={usuario.token} className="usuarios-registrados">
            <p className="rol-user">{usuario.rol}:</p>
            <div className="user-regis-div">
            <img className="image-user" src={UserImage} alt="" />
            <h3>{usuario.nombre}</h3>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
