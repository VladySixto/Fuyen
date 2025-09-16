import React, { useState } from "react";
import "./contactoForm.css";

const data = {
    Argentina: {
        "Buenos Aires": ["La Plata", "Mar del Plata", "Bahía Blanca"],
        Córdoba: ["Córdoba Capital", "Villa Carlos Paz", "Río Cuarto"],
        Mendoza: ["Mendoza Capital", "San Rafael", "Godoy Cruz"],
    },
    España: {
        Madrid: ["Madrid Capital", "Alcalá de Henares", "Getafe"],
        Cataluña: ["Barcelona", "Girona", "Tarragona"],
        Andalucía: ["Sevilla", "Granada", "Málaga"],
    },
};

function ContactoForm() {
    const [pais, setPais] = useState("");
    const [provincia, setProvincia] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handlePaisChange = (e) => {
        setPais(e.target.value);
        setProvincia("");
        setCiudad("");
    };

    const handleProvinciaChange = (e) => {
        setProvincia(e.target.value);
        setCiudad("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 👉 acá iría la lógica real de enviar el form
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // se cierra solo a los 3s
    };

    return (
        <div>
            <form className="contacto-form" onSubmit={handleSubmit}>
                <h2>Formulario de contacto</h2>

                <label>Nombre</label>
                <input type="text" placeholder="Nombre" />

                <label>Apellido</label>
                <input type="text" placeholder="Apellido" />

                <label>Email*</label>
                <input type="email" placeholder="ejemplo@email.com" required />

                <label>Compañía</label>
                <input type="text" placeholder="Empresa/Organización" />

                <label>País</label>
                <select value={pais} onChange={handlePaisChange}>
                    <option value="">Seleccionar</option>
                    {Object.keys(data).map((pais) => (
                        <option key={pais} value={pais}>
                            {pais}
                        </option>
                    ))}
                </select>

                <label>Provincia/Región</label>
                <select
                    value={provincia}
                    onChange={handleProvinciaChange}
                    disabled={!pais}
                >
                    <option value="">Seleccionar</option>
                    {pais &&
                        Object.keys(data[pais]).map((prov) => (
                            <option key={prov} value={prov}>
                                {prov}
                            </option>
                        ))}
                </select>

                <label>Ciudad</label>
                <select
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    disabled={!provincia}
                >
                    <option value="">Seleccionar</option>
                    {provincia &&
                        data[pais][provincia].map((ciudad) => (
                            <option key={ciudad} value={ciudad}>
                                {ciudad}
                            </option>
                        ))}
                </select>

                <label>Mensaje / Motivo</label>
                <textarea placeholder="Escriba su mensaje aquí..."></textarea>

                <button type="submit">Enviar</button>
            </form>

            {/* Popup */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>✅ Tu mensaje ya fue enviado a la banda</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactoForm;
