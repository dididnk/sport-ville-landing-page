import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Event } from '../../types';
import { COLORS } from '../../utils/constants';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const statusColor = event.status === 'available' ? COLORS.green : COLORS.red;
  const statusText = event.status === 'available' ? 'Ouverture des inscriptions' : 'Déjà Complet';
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      {/* Date Badge */}
      <div 
        className="p-3 text-center text-sm font-semibold"
        style={{ backgroundColor: COLORS.yellow, color: '#000' }}
      >
        {event.date}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
        
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="flex items-center mb-3 text-gray-500">
          <MapPin size={18} className="mr-2" />
          <span>{event.location}</span>
        </div>
        
        <div className="flex items-center mb-5 text-gray-500">
          <Calendar size={18} className="mr-2" />
          <span>{event.date}</span>
        </div>
        
        {/* Status and CTA */}
        <div className="flex flex-col justify-between">
          <span 
            className="text-sm font-medium px-3 py-1 rounded-full mb-2"
            style={{ 
              backgroundColor: `${statusColor}15`,
              color: statusColor 
            }}
          >
            {statusText}
          </span>
          
          <button 
            className={`px-4 py-2 rounded-md text-white text-sm font-medium transition-transform hover:scale-105 ${
              event.status === 'full' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            style={{ backgroundColor: event.status === 'available' ? COLORS.primary : 'gray' }}
            disabled={event.status === 'full'}
          >
            {event.status === 'available' ? 'S\'enregistrer' : 'liste d\'attente'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;