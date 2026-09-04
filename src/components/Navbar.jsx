import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', to: '/#home' },
    { name: 'ABOUT US', to: '/#about' },
    { name: 'COURSES', to: '/#courses' },
    { name: 'GALLERY', to: '/gallery' },
    { name: 'CONTACT US', to: '/#contact' },
  ];

  const handleNavClick = (linkTo) => {
    setIsOpen(false);
    if (linkTo.startsWith('/#') && location.pathname === '/') {
      const targetId = linkTo.replace('/#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname === '/gallery' ? 'bg-black/90 backdrop-blur-md py-2 md:py-2.5' : 'bg-transparent py-3 md:py-3.5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo & Title */}
        <div className="text-base sm:text-lg md:text-xl font-serif font-bold text-cream tracking-wider flex-shrink-0">
          <Link to="/#home" onClick={() => handleNavClick('/#home')} className="flex items-center gap-2.5 whitespace-nowrap">
            <img src="/logo.png" alt="Suswara Arts Foundation Logo" className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-full bg-cream p-1 flex-shrink-0" />
            <span className="hidden sm:inline-block whitespace-nowrap">Suswara Arts Foundation</span>
          </Link>
        </div>
        
        {/* Desktop Nav & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-sans tracking-widest font-light text-cream/80">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className={`hover:text-white transition-colors duration-200 ${
                (link.to === '/gallery' && location.pathname === '/gallery') ? 'text-burgundy font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle Button (Desktop) */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-all duration-300 border border-cream/20 hover:scale-105 flex items-center justify-center ml-2"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-indigo-400" />
            )}
          </button>
        </div>

        {/* Mobile Right Controls: Theme Toggle & Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-cream/10 hover:bg-cream/20 text-cream border border-cream/20 transition-transform active:scale-95"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-amber-400" />
            ) : (
              <Moon size={20} className="text-indigo-400" />
            )}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="text-cream focus:outline-none p-1">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-burgundy_dark">
          <div className="flex flex-col items-center py-8 space-y-6 text-sm font-sans tracking-widest text-cream">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                onClick={() => handleNavClick(link.to)}
                className="hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
