import "../styles/home.css";
import { NavIzquierda } from "../components/NavIzquierda.jsx";
import { NavSuperior } from "../components/NavSuperior.jsx";
import { NavDerecha } from "../components/NavDerecha.jsx";
import React, { useState } from "react";
import piedraImage from "../img/piedra.webp";
import papelImage from "../img/papel.webp";
import tijerasImage from "../img/tijeras.webp";
import "../styles/game.css";

export function Game() {
  const opciones = [
    { nombre: "piedra", imagen: piedraImage },
    { nombre: "papel", imagen: papelImage },
    { nombre: "tijera", imagen: tijerasImage },
  ];

  const [jugador, setJugador] = useState(null);
  const [computadora, setComputadora] = useState(null);
  const [resultado, setResultado] = useState(null);

  const elegirOpcion = (opcion) => {
    const opcionComputadora = opciones[Math.floor(Math.random() * 3)];

    setJugador(opcion);
    setComputadora(opcionComputadora);

    if (opcion.nombre === opcionComputadora.nombre) {
      setResultado("Empate");
    } else if (
      (opcion.nombre === "piedra" && opcionComputadora.nombre === "tijera") ||
      (opcion.nombre === "papel" && opcionComputadora.nombre === "piedra") ||
      (opcion.nombre === "tijera" && opcionComputadora.nombre === "papel")
    ) {
      setResultado("Ganaste");
    } else {
      setResultado("Perdiste");
    }
  };

  return (
    <>
      <div>
        {/*------------------------ SECCION SUPERIOR---------------*/}
        <NavSuperior />

        <section className="seccion-principal">
          {/*------------------------ SECCION LATERAL IZQUIERDA-------------------*/}
          <NavIzquierda />

          {/*------------------------ SECCION JUEGO------------------------*/}
          <section className="central-opciones">
            <div className="seccion-general">
              <div className="seccion-juego">
                <h1 className="title-pag-game">Piedra, Papel o Tijera</h1>
                <div className="opcions-pag-game">
                  <div>
                    <div className="imagen-pag-game">
                      {jugador && (
                        <img src={jugador.imagen} alt={jugador.nombre} />
                      )}
                    </div>
                    <p className="p-pag-game">Tu elección: </p>
                  </div>
                  <div>
                    <div className="imagen-pag-game">
                      {computadora && (
                        <img
                          src={computadora.imagen}
                          alt={computadora.nombre}
                        />
                      )}
                    </div>
                    <p className="p-pag-game">Elección de la computadora: </p>
                  </div>
                </div>
                <p className={resultado === 'Ganaste' ? 'ganaste' : resultado === 'Perdiste' ? 'perdiste' : resultado === 'Empate' ? 'empate' : ''}>
              Resultado: {resultado}</p>
                <div className="seccion-botones-game">
                  {opciones.map((opcion) => (
                    <button className="botones-pag-game"
                      key={opcion.nombre}
                      onClick={() => elegirOpcion(opcion)}
                    >
                      <img src={opcion.imagen} alt={opcion.nombre} />
                    </button>
                  ))}
                </div>
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
