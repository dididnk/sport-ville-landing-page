// Color constants
export const COLORS = {
    primary: '#1f53ff',
    primaryScroll: '#021245',
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
import type { Feature, Link, Statistique } from "../types";

export const FEATURES: Feature[] = [
    {
      id: 1,
      title: 'Activités sportives entre voisins',
      description: 'Trouvez ou proposez facilement des matchs, défis ou sorties sportives autour de chez vous, quel que soit votre niveau.',
      icon: 'map-pin',
    },
    {
      id: 2,
      title: 'Système de notation fiable',
      description: 'Chaque activité est notée par les participants pour garantir une ambiance respectueuse et motivante.',
      icon: 'star',
    },
    {
      id: 3,
      title: 'Communauté engagée',
      description: 'Échangez avec d’autres passionnés, créez des liens et formez des équipes durables à travers l’application.',
      icon: 'users',
    },
    {
      id: 4,
      title: 'Interface simple et rapide',
      description: 'Créez, rejoignez et gérez vos activités sportives en quelques clics via une application fluide et intuitive.',
      icon: 'smartphone',
    },
  ];

export const NAVIGATIONS: Link[] = [
    {
        id: 1,
        title: 'Accueil',
        link: '#',
    },
    {
        id: 2,
        title: 'Découvrir l’app',
        link: '#about',
    },
    {
        id: 3,
        title: 'Télécharger l’app',
        link: '#download',
    },
];

export const LEGALS: Link[] = [
    {
        id: 1,
        title: 'Politique de confidentialité',
        link: '/privacy-policy',
    },
    {
        id: 2,
        title: 'Conditions d’utilisation',
        link: '/terms-of-use',
    },
];

export const STATS: Statistique[] = [
    {
        id: 1,
        title: '1 200+',
        description: 'Utilisateurs actifs chaque mois',
    },
    {
        id: 2,
        title: '2 500+',
        description: 'Activités sportives créées',
    },
    {
        id: 3,
        title: '4.8/5',
        description: 'Note moyenne des activités',
    },
    {
        id: 4,
        title: '90%',
        description: 'Taux de participation confirmé',
    },
];