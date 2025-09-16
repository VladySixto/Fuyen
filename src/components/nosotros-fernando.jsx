import React from "react";
import "./nosotros-fernando.css";
import NosotrosFernando from "./imgs/fuyen_Duo_Fer.png";

export default function NosotrosMusicosFernando() {
    return (
        <section className="musico-grid">
            <div className="nombre">FERNANDO</div>
            <p className="descripcion">
                Fernando es un talentoso músico y compositor argentino, conocido por su
                habilidad en la guitarra y su voz cautivadora. Nacido en Buenos Aires,
                comenzó su carrera musical a una edad temprana, influenciado por el
                folclore tradicional y la música popular de su país...
            </p>
            <img className="foto" src={NosotrosFernando} alt="Fernando" />
        </section>
    );
}
