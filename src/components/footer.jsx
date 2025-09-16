import React from "react";
import spotifyIcon from "./imgs/spotify-icon.png";
import facebookIcon from "./imgs/facebook-icon.png";
import instagramIcon from "./imgs/instagram-icon.png";
import youtubeIcon from "./imgs/youtube-icon.png";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Columna izquierda */}
                <div className="footer-section">
                    <h4>SEGUINOS</h4>
                    <div className="footer-icons">
                        <a
                            href="https://www.facebook.com/fuyen.folcloreurbano"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a
                            href="https://www.instagram.com/fuyenduo/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                    </div>
                </div>

                {/* Columna derecha */}
                <div className="footer-section">
                    <h4>ESCUCHANOS</h4>
                    <div className="footer-icons">
                        <a
                            href="https://open.spotify.com/intl-es/artist/7EgKGZpzKQgIEFTrMUDxVf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={spotifyIcon} alt="Spotify" />
                        </a>
                        <a
                            href="https://www.youtube.com/watch?v=Q7ExjfU08fc&list=OLAK5uy_kGVbNvVE38JwZaJ4re78CoiSn9C4K6Y74"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={youtubeIcon} alt="YouTube" />
                        </a>
                    </div>
                </div>
            </div>

            <p className="footer-text">© Fuyen TODOS LOS DERECHOS RESERVADOS</p>
        </footer>
    );
};

export default Footer;
