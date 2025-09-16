import React from "react";
import "./nosotros-grupo.css";
import GrupoImg from "./imgs/duo.png";

function Grupo() {
    return (
        <div className="grupo-container">
            <div className="grupo-img-container">
                <img src={GrupoImg} alt="Grupo" className="grupo-img" />
            </div>
            <div className="grupo-descripcion">
                <p>
                    Somos un grupo musical dedicado a fusionar estilos y emociones en cada
                    presentación. Nuestra pasión es conectar con el público a través de
                    la música, creando experiencias únicas tanto en escenarios íntimos
                    como en grandes festivales.
                </p>
            </div>
        </div>
    );
}

export default Grupo;
