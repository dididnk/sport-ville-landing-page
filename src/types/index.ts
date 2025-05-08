export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface Sport {
    id: number;
    name: string;
    icon: string;
    description: string;
    image: string;
}

export interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
    status: 'available' | 'full';
    location: string;
}