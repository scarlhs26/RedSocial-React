import "../styles/home.css";
import { NavIzquierda } from "../components/NavIzquierda.jsx";
import { NavSuperior } from "../components/NavSuperior.jsx";
import { NavDerecha } from "../components/NavDerecha.jsx";
import React, { useState, useEffect } from "react";

export function Home() {
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
            <div className="seccion-general">
              <div className="texto-home">
              <h1>Lorem ipsum dolor sit.</h1>
              <p className="texto-p-home">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                nesciunt veniam iure dignissimos itaque consequuntur earum odio
                perferendis cumque, accusamus maxime, iste pariatur rem quia
                provident quaerat praesentium quae. Consequuntur.
              </p>
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
