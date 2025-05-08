import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import { COLORS } from '../../utils/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-opacity-95 shadow-md' : 'bg-opacity-0'
      }`}
      style={{ backgroundColor: isScrolled ? COLORS.primary : 'transparent' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <Navigation isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default Header;