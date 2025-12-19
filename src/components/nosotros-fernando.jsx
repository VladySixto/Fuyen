import React from "react";
import "./nosotros-fernando.css";
import NosotrosFernando from "./imgs/fuyen_Duo_Fer.png";

export default function NosotrosMusicosFernando() {
    return (
        <section className="musico-grid">
            <div className="nombre">FERNANDO</div>
            <p className="descripcion">
                Fernando es un músico y compositor cuya identidad se construye a 
                partir de la guitarra y una voz profunda y expresiva. Nacido en Buenos Aires, 
                comenzó su recorrido musical 
                a temprana edad, marcado por el folclore y la música popular de su país.
            </p>
            <img className="foto" src={NosotrosFernando} alt="Fernando" />
        </section>
    );
}
