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
          Fuyén es un dúo musical oriundo de Dolores, provincia de Buenos Aires, 
          dedicado al folclore argentino. Nuestra propuesta recorre géneros como el chamamé,
           la chacarera y otras expresiones populares del interior del país, combinando
            el respeto por la tradición con una mirada actual.
        </p>
      </div>
    </div>
  );
}

export default DuoPrincipal;
