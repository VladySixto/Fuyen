import React from "react";
import NosotrosMusicosHernan from "../components/nosotros-hernan"; 
import NosotrosMusicosFernando from "../components/nosotros-fernando";

import Grupo from "../components/nosotros-grupo";

const Nosotros = () => {
    return (
        <>
            <NosotrosMusicosHernan />
            <NosotrosMusicosFernando />
            <Grupo />
        </>
    );
};

export default Nosotros;
