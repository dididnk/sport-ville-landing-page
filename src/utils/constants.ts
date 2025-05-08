// Color constants
export const COLORS = {
    primary: '#1f53ff',
    secondary: '#ffc107',
    background: '#002255',
    main: '#ffffff',
    soft: 'rgba(239,246,255,0.7)',
    blue: '#2196f3',
    green: '#388e3c',
    red: '#e34234',
    yellow: '#ffc107',
    error: '#ba1a1a',
};

// Sample data
import {Feature, Sport, Event} from '../types';

export const FEATURES: Feature[] = [
    {
        id: 1,
        title: 'Piscine olympique',
        description: 'Installation de natation de classe mondiale avec 10 couloirs et un équipement d\'entraînement professionnel',
        icon: 'swim',
    },
    {
        id: 2,
        title: 'Stade multisports',
        description: 'Stade moderne d\'une capacité de 35 000 personnes avec des installations pour différents sports',
        icon: 'stadium',
    },
    {
        id: 3,
        title: 'Académie de formation',
        description: 'Programmes professionnels d\'entraînement et de formation pour les athlètes de tous niveaux',
        icon: 'trophy',
    },
    {
        id: 4,
        title: 'Programmes communautaires',
        description: 'Des initiatives sportives inclusives pour les membres de la communauté de tous âges et de toutes capacités',
        icon: 'users',
    },
];

export const SPORTS: Sport[] = [
    {
        id: 1,
        name: 'Natation',
        icon: 'swim',
        description: 'Piscines olympiques et encadrement professionnel',
        image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
        id: 2,
        name: 'Basketball',
        icon: 'basketball',
        description: 'Courts intérieurs et extérieurs avec compétitions de ligue',
        image: 'https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
        id: 3,
        name: 'Football',
        icon: 'futbol',
        description: 'Terrains de taille normale avec des programmes pour les jeunes et les adultes',
        image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
        id: 4,
        name: 'Tennis',
        icon: 'tennis',
        description: 'Terrains en terre battue et en dur avec installations pour les tournois',
        image: 'https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
        id: 5,
        name: 'Athlétisme',
        icon: 'running',
        description: 'Installations d\'athlétisme pour toutes les disciplines',
        image: 'https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
        id: 6,
        name: 'Cyclisme',
        icon: 'bike',
        description: 'Vélodrome et pistes d\'entraînement pour cyclistes',
        image: 'https://images.pexels.com/photos/248559/pexels-photo-248559.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
];

export const EVENTS: Event[] = [
    {
        id: 1,
        title: 'Championnat Natation',
        date: '15 juin 2025',
        description: 'Championnat annuel réunissant les meilleurs nageurs de tout le pays',
        status: 'available',
        location: 'Complexe de la piscine',
    },
    {
        id: 2,
        title: 'Tournoi de basket-ball',
        date: '8-10 juillet 2025',
        description: 'Tournoi de trois jours avec des équipes en compétition pour le trophée de la ville',
        status: 'available',
        location: 'Courts du stade central',
    },
    {
        id: 3,
        title: 'Course de Marathon',
        date: '22 août 2025',
        description: 'Marathon annuel de la ville à travers des routes pittoresques',
        status: 'full',
        location: 'Centre ville',
    },
    {
        id: 4,
        title: 'Open de tennis',
        date: '5-12 septembre 2025',
        description: 'Tournoi de tennis professionnel avec des participants internationaux',
        status: 'available',
        location: 'Complexe de tennis',
    },
];