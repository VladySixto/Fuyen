import React from "react";
import { motion } from "framer-motion";
import "./nosotros-grupo.css";
import GrupoImg from "./imgs/duo.png";

function Grupo() {
    return (
        <div className="grupo-container">
            <motion.div
                className="grupo-img-container"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img src={GrupoImg} alt="Grupo" className="grupo-img" />

                <motion.div
                    className="grupo-overlay"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p>
                        Somos un grupo musical que fusiona estilos y emociones en cada show.
                        Nos mueve la pasión por conectar con el público a través de la música
                        y generar experiencias únicas, ya sea en espacios íntimos o en grandes
                        escenarios.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Grupo;
