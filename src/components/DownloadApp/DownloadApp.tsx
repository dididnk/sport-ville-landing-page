import React from 'react';
import { COLORS } from '../../utils/constants';
import { CheckCircle2 } from 'lucide-react';
import appImage from '../../assets/images/app-screen.png'

const DownloadApp: React.FC = () => {

  return (
<section id="download" className="py-20 px-6" style={{ backgroundColor: COLORS.background }}>
  <div className="container mx-auto max-w-6xl">
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: COLORS.secondary }}>
          Rejoignez notre communauté de passionnés de sport
        </h2>

        <p className="mb-6 text-lg" style={{ color: COLORS.soft }}>
          Créez vos propres événements, participez à des activités près de chez vous, et vivez le sport autrement.
          Notre équipe vous accompagne pour faire de chaque rencontre un moment unique.
        </p>

        <ul className="space-y-4">
          {[
            'Activités sportives accessibles à tous niveaux',
            'Créez, organisez ou rejoignez des événements en quelques clics',
            'Rencontrez des partenaires de jeu autour de chez vous',
            'Tournois, défis et événements communautaires toute l’année',
          ].map((item, idx) => (
            <li key={idx} className="flex items-start" style={{ color: COLORS.main }}>
              <CheckCircle2 
                size={20} 
                className="mr-3 mt-1 flex-shrink-0" 
                style={{ color: COLORS.secondary }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:w-1/2 w-full flex flex-col items-center">
        {/* <img 
          src={appImage} 
          alt="Aperçu de l'application" 
          className="rounded-xl shadow-lg max-w-xs h-auto mb-6 mx-auto"
        /> */}
        <img 
          src={appImage} 
          alt="Aperçu de l'application" 
          className="rounded-xl shadow-lg mb-6"
          style={{
            maxHeight: '350px',
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />

        <div className="flex space-x-4">
          {/* <a 
            href="#" // => https://apps.apple.com/app/idXXXXXXXXX
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='btn-download' src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-fr?size=250x83" alt="Télécharger sur l'App Store" />
          </a> */}
          <a
            href="#" // => https://play.google.com/store/apps/details?id=com.example.app
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='btn-download' src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png" alt="Disponible sur Google Play" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default DownloadApp;