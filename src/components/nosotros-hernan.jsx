import React from "react";
import "./nosotros-hernan.css";
import NosotrosHernan from "./imgs/fuyen_Duo_Hernan.png";

function NosotrosMusicosHernan() {
    return (
        <div className="musico-container">
            <div className="musico-img-container">
                <img src={NosotrosHernan} alt="Hernan" className="Hernan" />
                <div className="musico-nombre-vertical">HERNAN</div>
            </div>

            <p className="musico-descripcion">
                Hernán es guitarrista y parte fundamental del dúo,
                 aportando una guitarra expresiva y precisa que sostiene la 
                 base rítmica y musical del proyecto. Su formación está atravesada
                  por el folclore y la música popular argentina, construyendo un 
                  sonido que equilibra tradición y personalidad.
            </p>
        </div>

    );
}

export default NosotrosMusicosHernan;
