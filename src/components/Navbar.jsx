import { useState } from "react"
import { Link, Links } from 'react-router-dom';
import '../styles/Navbar.css';

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleDownload = () => {
        const resumeUrl = '#';
        window.open(resumeUrl, '_blank');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-brand">
                    <a href="/">Brajsundari</a>
                </div>

                {/* Hamburger Menu Button */}
                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">

                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation Links */}
                <div className={`nav-elements ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            {/* <Link to='/' className='nav-link'>Home</Link>
                            <Link to='/about' className='nav-link'>About</Link>
                            <Link to='/contact' className='nav-link'>Contact</Link> */}

                            <a href="#home" onClick={closeMenu}>Home</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={closeMenu}>Projects</a>
                        </li>
                        <li>
                            <a href="#experience" onClick={closeMenu}>Experience</a>
                        </li>
                        <li>
                            <a href="#about" onClick={closeMenu}>About</a>
                        </li>
                        <button className="resume-btn" onClick={() => {handleDownload(); closeMenu();}}>Resume</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}