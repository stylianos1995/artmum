import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" onClick={handleLinkClick}>ArtMum</a>
        </div>
        
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={handleLinkClick}>Αρχική</a>
          <a href="#work" className="nav-link" onClick={handleLinkClick}>Έργα</a>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>Σχετικά</a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>Επικοινωνία</a>
        </div>

        <button 
          className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            if (!isMenuOpen) {
              document.body.classList.add('menu-open');
            } else {
              document.body.classList.remove('menu-open');
            }
          }}
          aria-label="Toggle menu"
        >
          <div className="burger-line line1"></div>
          <div className="burger-line line2"></div>
          <div className="burger-line line3"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
