import React from "react";
import { motion } from "framer-motion";
import "./principalEscenario.css";
import fuyenEscenario from "./imgs/fuyenEscenario.png";
import fuyenEscenarioMobile from "./imgs/fuyenEscenarioMobile.png";

function PrincipalEscenario() {
  return (
    <div className="body-img-principal">
      <motion.picture
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Imagen mobile */}
        <source media="(max-width: 768px)" srcSet={fuyenEscenarioMobile} />

        {/* Imagen desktop */}
        <motion.img
          src={fuyenEscenario}
          alt="Fuyen Escenario"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.picture>
    </div>
  );
}

export default PrincipalEscenario;
