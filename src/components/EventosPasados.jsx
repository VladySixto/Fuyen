import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./EventosPasados.css"; // estilos personalizados

// Importa tus imágenes
import img1 from "./imgs/352844461_949939643000681_2996977829319719364_n.jpg";
import img2 from "./imgs/452515727_3070598059747155_3257649231652439333_n.jpg";
import img3 from "./imgs/467531140_18453470704065704_8822083031870283967_n.jpg";
import img4 from "./imgs/teatro_Unione2.jpg";

function EventosPasados() {
    const images = [img1, img2, img3, img4];

    return (
        <div className="eventos-container">
            <h2 className="eventos-titulo">EVENTOS PASADOS</h2>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                centeredSlides={true}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="eventos-swiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Evento ${index + 1}`} className="evento-img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default EventosPasados;
