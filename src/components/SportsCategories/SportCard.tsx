import React from 'react';
import { SwissFranc as Swim, ShoppingBasket as Basketball, FishSymbol as Futbol, Tent as Tennis, FileWarning as Running, Bike, Bird } from 'lucide-react';
import { Sport } from '../../types';
import { COLORS } from '../../utils/constants';

interface SportCardProps {
  sport: Sport;
}

const SportCard: React.FC<SportCardProps> = ({ sport }) => {
  const getIcon = (): React.ReactElement => {
    switch(sport.icon) {
      case 'swim':
        return <Swim size={36} />;
      case 'basketball':
        return <Basketball size={36} />;
      case 'futbol':
        return <Futbol size={36} />;
      case 'tennis':
        return <Tennis size={36} />;
      case 'running':
        return <Running size={36} />;
      case 'bike':
        return <Bike size={36} />;
      default:
        return <Bird size={36} />;
    }
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
      style={{ minHeight: '250px' }}
    >
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${sport.image})`,
        }}
      ></div>
      
      <div 
        className="absolute inset-0 z-10 transition-opacity duration-300"
        style={{ 
          background: `linear-gradient(to top, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 100%)`,
        }}
      ></div>
      
      {/* Content */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300 transform group-hover:scale-110 bg-white bg-opacity-10"
          style={{ color: COLORS.blue }}
        >
          {getIcon()}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 transition-transform duration-300 group-hover:translate-x-2">
          {sport.name}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 transition-transform duration-300 opacity-80 group-hover:translate-x-2">
          {sport.description}
        </p>
        
        <div className="transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button 
            className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
            style={{ backgroundColor: COLORS.blue, color: 'white' }}
          >
            Explorer les programmes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportCard;