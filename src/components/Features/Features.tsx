import React from 'react';
import FeatureCard from './FeatureCard';
import { FEATURES } from '../../utils/constants';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Pourquoi choisir SportVille ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rejoignez une communauté dynamique où le sport rime avec partage, proximité et engagement. 
            SportVille vous permet de créer, découvrir et participer à des activités sportives près de chez vous, tout en échangeant avec d'autres passionnés.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;