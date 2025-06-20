import React from 'react';
import { COLORS } from '../../utils/constants';
import { ArrowRight, Star } from 'lucide-react';
import { STATS } from '../../utils/constants';
// import BackgroundImage from '../../assets/images/background.png'
import './hero.css'

const Hero: React.FC = () => {
  return (
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        {/* Gradient overlay */}
        <div className="hero-container absolute inset-0 z-0"></div>

        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="lg:w-2/3">
            {/* Featured badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm mb-6 animate-fade-in">
              <Star size={16} className="text-yellow-400" />
              <span className="text-white text-sm font-medium">La référence des applications sportives locales</span>
            </div>

            <h1
                className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in"
                style={{ color: COLORS.secondary }}
            >
              Trouve et crée des activités sportives près de chez toi
            </h1>

            <p
                className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in-delayed"
                style={{ color: COLORS.soft }}
            >
                SportVille connecte les passionnés de sport autour d'événements locaux. Organise, participe, évalue et partage ta passion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-more-delayed">
              <a  href="#download"
                  className="group px-8 py-4 rounded-md text-gray-900 font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 flex items-center justify-center gap-2"
                  style={{ backgroundColor: COLORS.secondary }}
              >
                Télécharger l'application mobile
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Stats */}
            {/*
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 animate-fade-in-more-delayed">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: COLORS.secondary }}>
                    {stat.title}
                  </div>
                  <div className="text-sm sm:text-base" style={{ color: COLORS.soft }}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
            */}
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