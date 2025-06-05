import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COLORS } from '../../utils/constants';
import { NAVIGATIONS } from '../../utils/constants';
interface NavigationProps {
  isScrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<nav className="flex justify-between items-center w-full transition-all duration-300">
  <div className="flex-1 hidden lg:flex space-x-8">
    {NAVIGATIONS.map(nav => (
      <a 
        key={nav.id} 
        href={nav.link}
        className="text-white hover:text-gray-200 transition-colors"
      >
        {nav.title}
      </a>
    ))}
  </div>

  <div className="flex items-center justify-end flex-1">
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-white">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-600 z-10 p-4 rounded-b-lg shadow-lg" style={{ backgroundColor: COLORS.background }}>
      <div className="flex flex-col space-y-4">
        {NAVIGATIONS.map(nav => (
            <a 
              key={nav.id} 
              href={nav.link}
              className="text-white hover:text-gray-200 transition-colors py-2 border-b border-blue-500"
            >
            {nav.title}
          </a>
        ))}
      </div>
    </div>
  )}
</nav>

  );
};

export default Navigation;