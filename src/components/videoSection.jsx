import React, { useState } from "react";
import "./videoSection.css";
import portadaDisco from "./imgs/portadaDisco.jpg";



function VideoSection() {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/UjTxgpTbBBs?si=ZOTd0qN9rzgFK_DB");

    const videos = [
        {
            id: 1,
            title: "Morir de Amor",
            url: "https://www.youtube.com/embed/C9NKrekxXcE?si=3mX2q-qTBprpew01",
            img: portadaDisco
        },
        {
            id: 2,
            title: "Calle Angosta",
            url: "https://www.youtube.com/embed/XPGTn8rbe7Y?si=OKk4H-6f6iy_oftF",
            img: portadaDisco
        },
        {
            id: 3,
            title: "Tiempo",
            url: "https://www.youtube.com/embed/UjTxgpTbBBs?si=VwFpXbSApD_83jkR",
            img: portadaDisco
        }
    ];

    return (
        <section className="video-section">
            <h2 className="section-title">Más de nosotros</h2>

            {/* Reproductor principal */}
            <div className="video-player">
                <iframe
                    src={currentVideo}
                    title="Reproductor de Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Cards */}
            <div className="video-cards">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="video-card"
                        onClick={() => setCurrentVideo(video.url)}
                    >
                        <img src={video.img} alt={video.title} />
                        <h3>{video.title}</h3>
                        <div className="Spotify-icon-card">
                        
                        </div>
                    </div>
                ))}

                {/* Botón "Escucha más!" */}

            </div>
            <div
                className="video-card"
                onClick={() => window.open("https://open.spotify.com/intl-es/artist/7EgKGZpzKQgIEFTrMUDxVf", "_blank")}
                style={{ cursor: "pointer" }}
            >
                <h3>Escucha más!</h3>
            </div>
        </section>
    );
}

export default VideoSection;
