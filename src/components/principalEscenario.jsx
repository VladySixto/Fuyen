import React from "react";
import "./principalEscenario.css";
import fuyenEscenario from "./imgs/fuyenEscenario.png";        // Imagen desktop
import fuyenEscenarioMobile from "./imgs/fuyenEscenarioMobile.png"; // Imagen mobile

function PrincipalEscenario() {
  return (
    <div className="body-img-principal">
      <picture>
        {/* Imagen para mobile */}
        <source media="(max-width: 768px)" srcSet={fuyenEscenarioMobile} />
        {/* Imagen por defecto (desktop) */}
        <img src={fuyenEscenario} alt="Fuyen Escenario" />
      </picture>
    </div>
  );
}

export default PrincipalEscenario;
