import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";
import logoFuyen from "./imgs/logo_Fuyen.png";
import menuIcon from "./imgs/menuMobile.png";

const navContainer = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
};

const mobileMenu = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      variants={navContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={logoFuyen} alt="Logo Fuyen" />
      </motion.div>

      {/* Desktop menu */}
      <ul className="nav-links">
        {["Inicio", "Discografia", "Nosotros", "Fechas y Eventos", "Contacto"].map(
          (item, index) => (
            <motion.li
              key={item}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to={item === "Inicio" ? "/" : `/${item.toLowerCase().replace(/ /g, "")}`}>
                {item}
              </Link>
            </motion.li>
          )
        )}
      </ul>

      {/* Burger */}
      <motion.div
        className="burger"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
      >
        <img src={menuIcon} alt="menu" />
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="nav-links active"
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
            <li><Link to="/discografia" onClick={() => setOpen(false)}>Discografia</Link></li>
            <li><Link to="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link></li>
            <li><Link to="/fechasyeventos" onClick={() => setOpen(false)}>Fechas y Eventos</Link></li>
            <li><Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
