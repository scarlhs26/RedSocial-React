import React from "react";
import { useModoOscuro } from "../components/ModoOscuroContext";
import User from "../img/user.webp";
import "../styles/home.css";

export function NavSuperior() {
  const { modoOscuro, toggleModoOscuro } = useModoOscuro();
  
  const handleToggleModoOscuro = () => {
    toggleModoOscuro();
    if (!modoOscuro) {
      document.body.classList.add('modo-oscuro');
    } else {
      document.body.classList.remove('modo-oscuro');
    }
  };

  const token = JSON.parse(localStorage.getItem("info"));

  return (
    <>
      <section className="superior">
        <div className="User">
          <img className="image-user" src={User} alt="" />
          <h3>{token ? token.usuario : "User"}</h3>
        </div>
        <div className="superior2">
        <h1>
          {token ? `Bienvenido ${token.usuario}` : "Bienvenido"}
        </h1>
        <label >
          Modo Oscuro
          <input
            type="checkbox"
            checked={modoOscuro}
            onChange={handleToggleModoOscuro}
          />
        </label>
        </div>

      </section>
    </>
  );
}
