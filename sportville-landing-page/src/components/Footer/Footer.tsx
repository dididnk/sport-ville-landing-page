import React from 'react';
import { NAVIGATIONS, LEGALS } from '../../utils/constants';
import { COLORS } from '../../utils/constants';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
  <footer style={{ backgroundColor: COLORS.background }} className="text-white pt-16 pb-8">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Colonne 1 - Logo */}
        <div className="flex flex-col items-start">
          <div className="w-16 h-16 mb-4">
            <svg width="64px" height="64px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"/>

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"/> <path d="M36 15C38.7614 15 41 12.7614 41 10C41 7.23858 38.7614 5 36 5C33.2386 5 31 7.23858 31 10C31 12.7614 33.2386 15 36 15Z" fill="#fffffffffff" stroke="#ffffff" stroke-width="4"/> <path d="M12 16.7691L20.0031 13.998L31 19.2466L20.0031 27.4442L31 34.6834L24.0083 43.998" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> <path d="M35.3198 21.6434L38.0015 23.1018L43.9998 17.4658" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.849 31.5454L13.8793 35.4572L4.00391 40.9964" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> </g>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">SportVille</h2>
          <p className="text-gray-400 leading-relaxed">
            Le sport à portée de main, la passion en commun.
          </p>
        </div>

        {/* Colonne 2 - Raccourcis ou infos */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">À propos</h3>
          <p className="text-gray-400 mb-4">
            SportVille connecte les passionnés de sport autour d’activités locales, conviviales et notées entre participants.
          </p>
          <div className="flex space-x-4 mt-6">
            {[Instagram].map((Icon, index) => (
              <a
                key={index}
                target="_blank"
                href="https://www.instagram.com/sportville.app/"
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-colors"
                style={{ color: COLORS.primary }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 3 - Navigation */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Navigation</h3>

          

          <ul className="space-y-3 text-gray-300">
            {NAVIGATIONS.map(nav => (
              <li key={nav.id}>
                <a href={nav.link} className="hover:text-white transition-colors">{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 4 - Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Nous contacter</h3>
          <ul className="space-y-4">
            {[
              { icon: Mail, text: 'contact@sport-ville.fr' },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <item.icon size={18} className="mr-3 mt-1 flex-shrink-0" style={{ color: COLORS.secondary }} />
                <span className="text-gray-300">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
        <p className="text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} SportVille. Tous droits réservés.
        </p>
        {/*
        <div className="flex space-x-6 justify-center md:justify-end text-sm">
          {LEGALS.map(value => (
              <li key={value.id}>
                <a href={value.link} target='_blank' className="text-gray-400 hover:text-white transition-colors">{value.title}</a>
              </li>
            ))}
        </div>
        */}
      </div>
    </div>
  </footer>
  );
};

export default Footer;