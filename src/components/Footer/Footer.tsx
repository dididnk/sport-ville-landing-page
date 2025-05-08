import React from 'react';
import { COLORS } from '../../utils/constants';
import { Trophy, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: COLORS.background }} className="text-white pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Trophy size={24} color={COLORS.secondary} />
              <span className="text-white font-bold text-xl">SportCity</span>
            </div>
            
            <p className="mb-4 text-gray-300">
              Un complexe sportif de classe mondiale dédié à l'excellence dans l'athlétisme,
              l'entraînement et l'engagement communautaire.
            </p>
            
            <div className="flex space-x-4 mt-6">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white hover:bg-opacity-10"
                  style={{ color: COLORS.primary }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Liens utiles</h3>
            <ul className="space-y-2">
              {[
                'A propos', 'Nos infrastructures', 'Programmes sportifs',
                'Événements', 'Adhésion', 'Galerie'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Sports */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Sports</h3>
            <ul className="space-y-2">
              {[
                'Natation', 'Basket-ball', 'Football',
                'Tennis', 'Athlétisme', 'Cyclisme'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Nous contacter</h3>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: '123 Sports Avenue Strasbourg, Olympia City' },
                { icon: Phone, text: '+33 7 77 77 77 77' },
                { icon: Mail, text: 'info@sportcity.com' },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon size={18} className="mr-3 mt-1 flex-shrink-0" style={{ color: COLORS.secondary }} />
                  <span className="text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SportCity. Tous droits réservés.
          </p>
          
          <div className="flex space-x-6 justify-center md:justify-end">
            {['Politique de confidentialité', 'Conditions d\'utilisation', 'Politique en matière de cookies'].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;