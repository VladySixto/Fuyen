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
                Hernan es un talentoso músico y compositor argentino, conocido por su
                habilidad en la guitarra y su voz cautivadora. Nacido en Buenos Aires,
                comenzó su carrera musical a una edad temprana, influenciado por el
                folclore tradicional y la música popular de su país...
            </p>
        </div>

    );
}

export default NosotrosMusicosHernan;
