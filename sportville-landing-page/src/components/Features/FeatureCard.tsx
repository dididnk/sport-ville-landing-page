import React from 'react';
import { COLORS } from '../../utils/constants';
import type { Feature } from '../../types';
import { Map, Star, Smartphone, Users} from 'lucide-react';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const getIcon = (): React.ReactElement => {
    switch(feature.icon) {
      case 'map-pin':
        return <Map size={48} />;
      case 'star':
        return <Star size={48} />;
      case 'users':
        return <Users size={48} />;
      case 'smartphone':
        return <Smartphone size={48} />;
      default:
        return <Star size={48} />;
    }
  };

  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center"
    >
      <div 
        className="w-16 h-16 flex items-center justify-center rounded-full mb-6 transition-colors duration-300"
        style={{ 
          color: COLORS.primary,
          backgroundColor: `${COLORS.primary}15` 
        }}
      >
        {getIcon()}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
      
      <p className="text-gray-600 mb-4">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;