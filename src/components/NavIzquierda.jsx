import HomeSvg from "../assets/home.svg";
import UserSvg from "../assets/user.svg";
import gameSvg from "../assets/game.svg";
import outSvg from "../assets/out.svg";
import "../styles/NavIzquierda.css";
import adminSvg from "../assets/admin.svg";
import { NavLink } from "react-router-dom";

export function NavIzquierda() {
  const handleCerrarSesion = () => {
    localStorage.removeItem("info");
    window.location.href = "/"; // Botón de cerrar que elimina el token y cierra sesión
  };

  const usuario = JSON.parse(localStorage.getItem("info"));

  return (
    <>
      <section className="lateral-izquierda-opciones">
        <ul className="Menu-lateral">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "li-press" : "")}
          >
            <li className="li-navIzquerdo">
              <img src={HomeSvg} alt="" /> Home
            </li>
          </NavLink>
          <NavLink
            to="/user"
            className={({ isActive }) => (isActive ? "li-press" : "")}
          >
            <li className="li-navIzquerdo">
              <img src={UserSvg} alt="" />
              Tu Usuario
            </li>
          </NavLink>
          <NavLink
            to="/game"
            className={({ isActive }) => (isActive ? "li-press" : "")}
          >
            <li className="li-navIzquerdo">
              <img src={gameSvg} alt="" />
              Game
            </li>
          </NavLink>
          {usuario && usuario.rol === "admin" && (
            <NavLink
              to="/Admin"
              className={({ isActive }) => (isActive ? "li-press" : "")}
            >
              <li className="li-navIzquerdo">
                <img src={adminSvg} alt="" />
                Admin
              </li>
            </NavLink>
          )}
          <NavLink
            onClick={handleCerrarSesion}
          >
            <li className="li-navIzquerdo">
              <img src={outSvg} alt="" />
              Cerrar sesión
            </li>
          </NavLink>
        </ul>
      </section>
    </>
  );
}
