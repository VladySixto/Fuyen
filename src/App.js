import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Discografia from "./pages/discografia";  
import Nosotros from "./pages/nosotros";
import FechasYeventos from "./pages/fechasYeventos";
import ContactoForm from "./components/contactoForm";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discografia" element={<Discografia />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/fechasYeventos" element={<FechasYeventos />} />
        <Route path="/contacto" element={<ContactoForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
