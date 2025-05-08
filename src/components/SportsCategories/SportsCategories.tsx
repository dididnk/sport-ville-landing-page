import React from 'react';
import SportCard from './SportCard';
import { SPORTS } from '../../utils/constants';

const SportsCategories: React.FC = () => {
  return (
    <section id="sports" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Catégories de sport</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            De la natation de compétition au tennis de loisir, nous proposons des installations et des programmes pour une grande variété de sports adaptés à tous les âges et à tous les niveaux de compétence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPORTS.map(sport => (
            <SportCard key={sport.id} sport={sport} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsCategories;