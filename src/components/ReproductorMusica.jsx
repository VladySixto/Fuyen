import React, { useRef, useState, useEffect } from 'react';
import './ReproductorMusica.css';
import portadaDisco from './imgs/portadaDisco.jpg';

import guitarra from './audio/cuandolloramiguitarra.mp3';
import calle from './audio/calleangosta.mp3';
import morir from './audio/morirdeamor.mp3';

const canciones = [
    {
        id: 1,
        titulo: 'Cuando llora mi guitarra',
        artista: 'Fuyen',
        duracion: '3:22',
        src: guitarra,
        portada: portadaDisco,
    },
    {
        id: 2,
        titulo: 'Calle Angosta',
        artista: 'Fuyen',
        duracion: '3:05',
        src: calle,
        portada: portadaDisco,
    },
    {
        id: 3,
        titulo: 'Morir de amor',
        artista: 'Fuyen',
        duracion: '2:54',
        src: morir,
        portada: portadaDisco,
    },
];

const ReproductorMusica = () => {
    const audioRef = useRef(null);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const currentSong = canciones[currentSongIndex];

    /* ---------------- AUDIO EVENTS ---------------- */

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration || 0);
        const handleEnded = () => siguiente();

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [currentSongIndex]);

    /* -------- FORCE RELOAD & PLAY ON SONG CHANGE -------- */

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.load();
        audio.play().catch(() => {});
        setIsPlaying(true);
    }, [currentSongIndex]);

    /* ---------------- CONTROLS ---------------- */

    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const cambiarCancion = (index) => {
        const audio = audioRef.current;
        if (audio) audio.pause();

        setCurrentSongIndex(index);
    };

    const siguiente = () => {
        setCurrentSongIndex((prev) => (prev + 1) % canciones.length);
    };

    const anterior = () => {
        setCurrentSongIndex((prev) =>
            prev === 0 ? canciones.length - 1 : prev - 1
        );
    };

    const handleProgressChange = (e) => {
        const audio = audioRef.current;
        const newTime = Number(e.target.value);

        if (!audio) return;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    /* ---------------- RENDER ---------------- */

    return (
        <div className="reproductor-container">
            <header className="header">
                <h1>Fuyen (Disco 2011)</h1>
            </header>

            <div className="album-section">
                <img
                    src={currentSong.portada}
                    alt="Portada"
                    className="album-cover"
                />
                <div className="album-info">
                    <h2>{currentSong.titulo}</h2>
                    <p className="artist">{currentSong.artista}</p>
                </div>
            </div>

            <div className="playlist">
                <h3>Lista de canciones</h3>
                {canciones.map((song, index) => (
                    <div
                        key={song.id}
                        className={`playlist-item ${
                            index === currentSongIndex ? 'active' : ''
                        }`}
                        onClick={() => cambiarCancion(index)}
                    >
                        <span>{song.titulo}</span>
                        <span>{song.duracion}</span>
                    </div>
                ))}
            </div>

            <div className="mini-player">
                <button onClick={anterior}>⏮</button>
                <button onClick={togglePlayPause}>
                    {isPlaying ? '⏸' : '▶'}
                </button>
                <button onClick={siguiente}>⏭</button>

                <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleProgressChange}
                />

                <span>
                    {formatTime(currentTime)} / {formatTime(duration)}
                </span>
            </div>

            {/* 🔑 CLAVE ABSOLUTA */}
            <audio
                key={currentSong.src}
                ref={audioRef}
                src={currentSong.src}
                preload="metadata"
            />
        </div>
    );
};

export default ReproductorMusica;
