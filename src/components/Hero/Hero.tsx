import React from 'react';
import { COLORS } from '../../utils/constants';
import { ArrowRight, Star } from 'lucide-react';
import bannerVideo from "../../assets/video/banner.mp4";

const Hero: React.FC = () => {
  return (
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute min-w-full min-h-full object-cover"
          >
            <source
                src={bannerVideo}
                type="video/mp4"
            />
            Votre navigateur ne prend pas en charge la balise vidéo.
          </video>
        </div>

        {/* Gradient overlay */}
        <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(135deg, rgba(0, 34, 85, 0.85), rgba(31, 83, 255, 0.85))`,
            }}
        ></div>

        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="lg:w-2/3">
            {/* Featured badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm mb-6 animate-fade-in">
              <Star size={16} className="text-yellow-400" />
              <span className="text-white text-sm font-medium">Classé #1 complexe sportif de la ville</span>
            </div>

            <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in"
                style={{ color: COLORS.main }}
            >
              Transformez votre passion en excellence
            </h1>

            <p
                className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in-delayed"
                style={{ color: COLORS.soft }}
            >
                Rejoignez notre communauté sportive de classe mondiale où les champions sont formés.
                Des installations ultramodernes, des entraîneurs experts et un environnement favorable vous attendent à SportCity.
                vous attendent à SportCity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-more-delayed">
              <button
                  className="group px-8 py-4 rounded-md text-gray-900 font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 flex items-center justify-center gap-2"
                  style={{ backgroundColor: COLORS.secondary }}
              >
                Commencez votre voyage
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                  className="group px-8 py-4 rounded-md font-semibold text-lg border-2 text-white transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:shadow-lg hover:shadow-white/10 flex items-center justify-center gap-2"
                  style={{ borderColor: COLORS.secondary }}
              >
                  Visite guidée
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 animate-fade-in-more-delayed">
              {[
                { number: '50+', label: 'Coachs experts' },
                { number: '1000+', label: 'Membres actifs' },
                { number: '20+', label: 'Programmes sportifs' },
                { number: '15+', label: 'Années d\'expérience' }
              ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: COLORS.secondary }}>
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base" style={{ color: COLORS.soft }}>
                      {stat.label}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
            <div className="w-2 h-3 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>
  );
};

export default Hero;