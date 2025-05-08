import React from 'react';
import { COLORS } from '../../utils/constants';
import { Feature } from '../../types';
import { SwissFranc as Swim, Radius as Stadium, Trophy, Users, Bird} from 'lucide-react';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const getIcon = (): React.ReactElement => {
    switch(feature.icon) {
      case 'swim':
        return <Swim size={48} />;
      case 'stadium':
        return <Stadium size={48} />;
      case 'trophy':
        return <Trophy size={48} />;
      case 'users':
        return <Users size={48} />;
      default:
        return <Bird size={48} />;
    }
  };

  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
      
      <a 
        href="#" 
        className="inline-flex items-center font-medium transition-colors duration-300 hover:underline"
        style={{ color: COLORS.primary }}
      >
        En savoir plus
      </a>
    </div>
  );
};

export default FeatureCard;