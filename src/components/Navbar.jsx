import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'COURSES', href: '#courses' },
    { name: 'EVENTS', href: '#events' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'UPDATES', href: '#updates' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-serif font-bold text-cream tracking-wider">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="Suswara Arts Foundation Logo" className="h-12 w-12 object-contain rounded-full bg-cream p-1" />
            <span className="hidden sm:inline-block">Suswara Arts Foundation</span>
          </a>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-sans tracking-widest font-light text-cream/80">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors duration-200">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-cream focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-burgundy_dark">
          <div className="flex flex-col items-center py-8 space-y-6 text-sm font-sans tracking-widest text-cream">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
