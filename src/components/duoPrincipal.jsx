import React from "react";
import "./duoPrincipal.css";
import fuyenDuoPrincipal from "./imgs/duo.png";

function DuoPrincipal() {
  return (
    <div className="duo-container">
      <div className="duo-img">
        <img src={fuyenDuoPrincipal} alt="Fuyen Duo Rostros" />
      </div>
      <div className="duo-text">
        <h2>QUIENES SOMOS</h2>
        <p>
          Fuyén es un dúo o grupo de músicos oriundos de Dolores, Provincia de
          Buenos Aires, especializado en folclore tradicional argentino. Su
          repertorio incluye chamamé, chacareras y estilos populares urbanos del
          interior, adaptados a los gustos contemporáneos.
        </p>
      </div>
    </div>
  );
}

export default DuoPrincipal;
