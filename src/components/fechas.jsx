import React from "react";
import "./fechas.css";

const fechasData = {
    agosto: [
        { dia: "02", lugar: 'Cena Show "Dreams" (Pla)', hora: "21:00HS" },
        { dia: "08", lugar: "Colegio de Escribanos Dolores", hora: "21:00HS" },
        { dia: "09", lugar: '"Lo de Pietro" (Chascomús)', hora: "21:00HS" },
        { dia: "30", lugar: "Aniversario Castelli", hora: "21:00HS" },
    ],
    septiembre: [
        { dia: "01", lugar: "Aniversario Lezama", hora: "19:30HS" },
        { dia: "02", lugar: '"Lo de Pietro" (Chascomús)', hora: "21:00HS" },
        { dia: "09", lugar: 'Cena Show "Dreams" (Pla)', hora: "21:00HS" },
        { dia: "24", lugar: "Aniversario Chascomús", hora: "22:00HS" },
    ],
};

function Fechas() {
    return (
        <div className="fechas-container">
            <h2 className="fechas-titulo">PRÓXIMAS FECHAS</h2>

            {Object.entries(fechasData).map(([mes, eventos]) => (
                <div key={mes} className="fechas-mes">
                    <h3 className="mes-titulo">{mes.toUpperCase()}</h3>
                    <div className="mes-eventos">
                        {eventos.map((evento, index) => (
                            <div key={index} className="fecha-card">
                                <div className="fecha-dia">{evento.dia}</div>
                                <div className="fecha-info">
                                    <p className="fecha-lugar">{evento.lugar}</p>
                                    <p className="fecha-hora">{evento.hora}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Fechas;
