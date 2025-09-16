import React from "react";
import "./fechasConciertos.css";

const fechas = [
    {
        id: 1,
        mes: "SEP",
        dia: "02",
        ciudad: "Castelli",
        lugar: "La Zona 21:30hs",
        año: 2025,
    },
    {
        id: 2,
        mes: "SEP",
        dia: "04",
        ciudad: "Chascomus",
        lugar: "La Zona 21:30hs",
        año: 2025,
    },
    {
        id: 3,
        mes: "SEP",
        dia: "05",
        ciudad: "Dolores",
        lugar: "La Zona 21:30hs",
        año: 2025,
    },
    {
        id: 4,
        mes: "SEP",
        dia: "12",
        ciudad: "Dolores",
        lugar: "La Zona 21:30hs",
        año: 2025,
    },
];

function FechasConciertos() {
    return (
        <section className="fechas-container">
            <h2 className="titulo">Proximas Fechas</h2>
            <p className="anio">Septiembre</p>

            <div className="lista-fechas">
                {fechas.map((fecha) => (
                    <div key={fecha.id} className="fecha-card">
                        <div className="fecha-dia">
                            <span className="mes">{fecha.mes}</span>
                            <span className="dia">{fecha.dia}</span>
                        </div>
                        <div className="fecha-info">
                            <h3 className="ciudad">{fecha.ciudad}</h3>
                            <p className="lugar">{fecha.lugar}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="btn-fechas">VER TODAS LAS PRÓXIMAS FECHAS!</button>
        </section>
    );
}

export default FechasConciertos;
