import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from '../pages/Experience';
import Project from '../pages/Project';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }

        // clean up when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const handleLinkClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = './braj_resume.pdf';
        link.download = 'Brajsundari_Rathor_Resume.pdf';
        window.open(link, '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
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

                                {/* <a href="#home" onClick={closeMenu}>Home</a> */}
                                <Link to='/' className="nav-link" onClick={() => handleLinkClick('home')}>Home</Link>
                            </li>
                            <li>
                                {/* <a href="#projects" onClick={closeMenu}>Projects</a> */}
                                <Link to='/about' className="nav-link" onClick={() => handleLinkClick('about')}>About</Link>
                            </li>
                            <li>
                                {/* <a href="#experience" onClick={closeMenu}>Experience</a> */}
                                <Link to='/experience' className="nav-link" onClick={() => handleLinkClick('experience')}>Experience</Link>
                            </li>
                            <li>
                                {/* <a href="#about" onClick={closeMenu}>About</a> */}
                                <Link to='/projects' className="nav-link" onClick={() => handleLinkClick('projects')}>Projects</Link>
                            </li>
                            <li>
                                <Link to='/skills' className="nav-link" onClick={() => handleLinkClick('skills')}>Skills</Link>
                            </li>
                            <li>
                                <Link to='/contact' className="nav-link" onClick={() => handleLinkClick('contact')}>Contact</Link>
                            </li>
                            <button className="resume-btn" onClick={() => { handleDownload(); closeMenu(); }}>Resume</button>
                        </ul>
                    </div>
                </div>
            </nav>

            <Home />
            <About />
            <Experience />
            <Project />
            <Skills />
            <Contact />
        </>


        // ClaudeAI code for Navbar
        // <>
        //     <nav className="navbar">
        //         <Link to='/' className="navbar-logo">Brajsundari</Link>

        //         {/* Desktop Navigation */}
        //         <div className="nav-links">
        //             <Link to='/' className="nav-link" onClick={() => handleLinkClick('home')}>Home</Link>
        //             <Link to='/about' className="nav-link" onClick={() => handleLinkClick('about')}>About</Link>
        //             <Link to='/experience' className="nav-link" onClick={() => handleLinkClick('experience')}>Experience</Link>
        //             <Link to='/projects' className="nav-link" onClick={() => handleLinkClick('projects')}>Projects</Link>
        //             <Link to='/skills' className="nav-link" onClick={() => handleLinkClick('skills')}>Skills</Link>
        //             <Link to='/contact' className="nav-link" onClick={() => handleLinkClick('contact')}>Contact</Link>
        //             <button className="resume-btn" onClick={handleDownload}>Resume</button>
        //         </div>

        //         {/* Hamburger Menu Button */}
        //         <div className={`humburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} >
        //             <span className="hamburger-line"></span>
        //             <span className="hamburger-line"></span>
        //             <span className="hamburger-line"></span>
        //         </div>
        //     </nav>

        //     {/* Mobile Menu */}
        //     <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} >
        //         <Link to="/" className="mobile-nav-link" onClick={() => handleLinkClick('home')}>Home</Link>
        //         <Link to="/about" className="mobile-nav-link" onClick={() => handleLinkClick('about')}>About</Link>
        //         <Link to="/experience" className="mobile-nav-link" onClick={() => handleLinkClick('experience')}>Experience</Link>
        //         <Link to="/projects" className="mobile-nav-link" onClick={() => handleLinkClick('projects')}>Projects</Link>
        //         <Link to="/skills" className="mobile-nav-link" onClick={() => handleLinkClick('skills')}>Skills</Link>
        //         <Link to="/contact" className="mobile-nav-link" onClick={() => handleLinkClick('contact')}>Contact</Link>
        //         <div className="mobile-resume-btn" onClick={handleDownload}>Resume</div>
        //     </div>

        //     {/* Overlay to close menu when clicking outside */}
        //     <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
        // </>
    );
}