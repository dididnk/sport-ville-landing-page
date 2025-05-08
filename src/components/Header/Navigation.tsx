import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COLORS } from '../../utils/constants';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`flex justify-between items-center w-full transition-all duration-300`}>
      <div className="hidden md:flex space-x-8">
        {['Accueil', 'Infrastructures', 'Sports', 'Evenements', 'A propos de nous'].map((item, index) => (
          <a 
            key={index} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-white hover:text-gray-200 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      
      <button 
        className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-400 transition-colors font-medium"
        style={{ backgroundColor: COLORS.secondary }}
      >
          S'inscrire
      </button>
      
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-600 z-10 p-4 rounded-b-lg shadow-lg" style={{ backgroundColor: COLORS.primary }}>
          <div className="flex flex-col space-y-4">
            {['Accueil', 'Infrastructures', 'Sports', 'Evenements', 'A propos de nous'].map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-gray-200 transition-colors py-2 border-b border-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            
            <button 
              className="w-full px-4 py-2 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-400 transition-colors font-medium mt-2"
              style={{ backgroundColor: COLORS.secondary }}
              onClick={() => setIsMenuOpen(false)}
            >
                S'inscrire
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;