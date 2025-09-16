// src/components/ReproductorMusica.js
import React, { useRef, useState, useEffect } from 'react';
import './ReproductorMusica.css';
import portadaDisco from "./imgs/portadaDisco.jpg";

const ReproductorMusica = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    // Lista de canciones (puedes cargarla desde una API o JSON)
    const canciones = [
        {
            id: 1,
            titulo: 'Cuando llora mi guitarra',
            artista: 'Fuyen',
            duracion: '3:22',
            src: '/audio/Cuando-Llora-Mi-Guitarra.mp3',
            portada: portadaDisco,
        },
        {
            id: 2,
            titulo: 'Calle Angosta',
            artista: 'Fuyen',
            duracion: '3:05',
            src: '/audio/Calle-angosta.mp3',
            portada: portadaDisco,
        },
        {
            id: 3,
            titulo: 'Morir de amor',
            artista: 'Fuyen',
            duracion: '2:54',
            src: '/audio/Cuando-llora-mi-guitarra.mp3',
            portada: portadaDisco,
        },
    ];

    const currentSong = canciones[currentSongIndex];

    // Actualizar tiempo y duración del audio
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration || 0);
        const handleEnded = () => siguiente(); // siguiente al terminar

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [currentSongIndex]);

    // Play / Pause
    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Cambiar canción
    const cambiarCancion = (index) => {
        const audio = audioRef.current;
        audio.pause();
        setCurrentSongIndex(index);
        setIsPlaying(false);
    };

    // Siguiente y anterior
    const siguiente = () => {
        const nextIndex = (currentSongIndex + 1) % canciones.length;
        cambiarCancion(nextIndex);
    };

    const anterior = () => {
        const prevIndex = (currentSongIndex - 1 + canciones.length) % canciones.length;
        cambiarCancion(prevIndex);
    };

    // Control de progreso
    const handleProgressChange = (e) => {
        const newTime = parseFloat(e.target.value);
        const audio = audioRef.current;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    // Formato de tiempo: 2:30
    const formatTime = (time) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="reproductor-container">
            {/* Encabezado */}
            <header className="header">
                <h1>Fuyen (Disco 2011)</h1>
            </header>

            {/* Sección principal: portada + info */}
            <div className="album-section">
                <img src={currentSong.portada} alt="Portada del álbum" className="album-cover" />
                <div className="album-info">
                    <h2>{currentSong.titulo}</h2>
                    <p className="artist">{currentSong.artista}</p>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

            {/* Lista de canciones */}
            <div className="playlist">
                <h3>Lista de canciones</h3>
                {canciones.map((song, index) => (
                    <div
                        key={song.id}
                        className={`playlist-item ${index === currentSongIndex ? 'active' : ''}`}
                        onClick={() => cambiarCancion(index)}
                    >
                        <img src={song.portada} alt="Portada" className="playlist-cover" />
                        <div className="playlist-details">
                            <span className="title">{song.titulo}</span>
                            <span className="artist">{song.artista}</span>
                        </div>
                        <span className="duration">{song.duracion}</span>
                    </div>
                ))}
            </div>

            {/* Mini player fijo en la parte inferior (responsivo) */}
            <div className="mini-player">
                <img src={currentSong.portada} alt="Mini portada" className="mini-cover" />
                <div className="mini-info">
                    <p className="mini-title">{currentSong.titulo}</p>
                    <p className="mini-artist">{currentSong.artista}</p>
                </div>

                <div className="mini-controls">
                    <button onClick={anterior} className="control-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M15 19L9 13L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button onClick={togglePlayPause} className="play-btn">
                        {isPlaying ? (
                            <svg width="20" height="20" viewBox="0 0 24 24">
                                <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
                                <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24">
                                <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
                            </svg>
                        )}
                    </button>
                    <button onClick={siguiente} className="control-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M9 7L15 13L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Barra de progreso y volumen (ocultos en mobile pequeño, visibles en tablets+) */}
                <div className="mini-progress">
                    <input
                        type="range"
                        min="0"
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleProgressChange}
                        className="progress-bar"
                    />
                    <div className="time">
                        <span>{formatTime(currentTime)}</span>
                        <span> / {formatTime(duration)}</span>
                    </div>
                </div>
            </div>

            {/* Audio oculto */}
            <audio ref={audioRef} src={currentSong.src} />
        </div>
    );
};

export default ReproductorMusica;