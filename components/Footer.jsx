import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Logo tout à gauche */}
            <div className="logo">
                <Link href="/">
                    <img src="/Logo/logo_avec_nom.png" alt="Logo" />
                </Link>
            </div>

            {/* Texte au centre */}
            <div className="content">
                <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
            </div>

            {/* Liens sociaux à droite */}
            <div className="social-links">
                <a href="https://github.com/GalmicheLucas" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/lucas-galmiche-156b02236/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://www.instagram.com/lucascript70/"  target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;