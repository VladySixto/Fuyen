import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logoFuyen from "./imgs/logo_Fuyen.png";     //  logo
import menuIcon from "./imgs/menuMobile.png"; //  ícono de hamburguesa

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoFuyen} alt="Logo Fuyen" />
      </div>

      {/* Menú normal (desktop) */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/discografia">Discografia</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/fechasyeventos">Fechas y Eventos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      {/* Botón hamburguesa (mobile) */}
      <div className="burger" onClick={toggleMenu}>
        <img src={menuIcon} alt="menu" />
      </div>
    </nav>
  );
};

export default Navbar;
