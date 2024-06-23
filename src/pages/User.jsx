import "../styles/home.css";
import { NavIzquierda } from "../components/NavIzquierda.jsx";
import { NavSuperior } from "../components/NavSuperior.jsx";
import { NavDerecha } from "../components/NavDerecha.jsx";
import User from "../img/user.webp";
import "../styles/user.css"


const token = JSON.parse(localStorage.getItem("info"));

export function Userio() {
  return (
    <>
      <div>
        {/*------------------------ SECCION SUPERIOR---------------*/}
        <NavSuperior />

        <section className="seccion-principal">
          {/*------------------------ SECCION LATERAL IZQUIERDA-------------------*/}
          <NavIzquierda />
          {/*------------------------ SECCION USUARIO------------------------*/}
          <section className="central-opciones">
            <div className="seccion-general">
              <div className="seccion-user">
                <img className="imge-pag-user" src={User} alt="" />
                <h1 className="title-pag-user">{token ? token.usuario : "User"}</h1>
                <p className="p-pag-user">{token ? token.rol: "email"}</p>
                <p className="p-pag-user">{token ? token.email: "email"}</p>
                <button>Editar</button>
              </div>
            </div>
          </section>
          {/*------------------------ SECCION LATERAL DERECHA---------------*/}
          <NavDerecha />
        </section>
      </div>
    </>
  );
}
