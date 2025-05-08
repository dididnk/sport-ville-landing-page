import React from 'react';
import EventCard from './EventCard';
import { EVENTS } from '../../utils/constants';
import { COLORS } from '../../utils/constants';

const Events: React.FC = () => {
  return (
    <section id="evenements" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Événements à venir</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Participez à nos prochains événements sportifs, tournois et compétitions.
            Inscrivez-vous rapidement pour garantir votre place !
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EVENTS.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            className="px-6 py-3 rounded-md text-white font-medium transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: COLORS.primary }}
          >
            Voir tous les événements
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;