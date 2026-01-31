import { Coffee, Gem, Music, Globe, Award, Leaf, Truck, MapPin } from 'lucide-react';
import { Product, Testimonial } from '../types';

export const FALLBACK_IMAGE = 'https://placehold.co/600x400/046c47/FFF?text=Sabores+Esmeralda';
export const FALLBACK_AVATAR = 'https://placehold.co/200x200/046c47/FFF?text=Usuario';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Cultura', href: '#products' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Café Supremo',
    description: 'Cultivado en las altas montañas andinas, este café representa la tradición y el alma de nuestros cafeteros.',
    image: '/images/cafe.png',
    category: 'Café'
  },
  {
    id: '2',
    name: 'Esmeraldas Colombianas',
    description: 'Piedras preciosas únicas en el mundo por su color y pureza, extraídas del corazón de Boyacá.',
    image: '/images/esmeraldas.png',
    category: 'Joyería'
  },
  {
    id: '3',
    name: 'Ritmo y Sabor',
    description: 'La salsa no solo se escucha, se vive. Una expresión cultural que mueve a todo un país.',
    image: '/images/salsa.png',
    category: 'Cultura'
  },
  {
    id: '4',
    name: 'Licores Tradicionales',
    description: 'El aguardiente es más que una bebida, es el acompañante de nuestras celebraciones y alegrías.',
    image: '/images/aguardiente.png',
    category: 'Tradición'
  },
  {
    id: '5',
    name: 'Cacao de Origen',
    description: 'Chocolate fino de aroma, fruto del trabajo de comunidades campesinas que transforman el campo.',
    image: '/images/cacao.png',
    category: 'Gastronomía'
  },
  {
    id: '6',
    name: 'Artesanías Vueltiao',
    description: 'El símbolo cultural de la nación, tejido con caña flecha por maestros artesanos del caribe.',
    image: '/images/sombrero.png',
    category: 'Artesanías'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'María Fernanda',
    city: 'Medellín',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    text: 'El café es espectacular, realmente me transporta a las montañas de mi tierra. Una experiencia auténtica.'
  },
  {
    id: '2',
    name: 'Carlos Andrés',
    city: 'Barranquilla',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    text: 'Compartir la historia de nuestra cultura con amigos del exterior ha sido increíble. ¡Es un orgullo!'
  },
  {
    id: '3',
    name: 'Laura Camila',
    city: 'Bogotá',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    text: 'Las esmeraldas son preciosas y auténticas. Me siento orgullosa de llevar un pedacito de Colombia siempre.'
  },
  {
    id: '4',
    name: 'Juan David',
    city: 'Cali',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    text: 'Excelente información y curaduría de nuestra herencia. Recomiendo totalmente sumergirse en Sabores Esmeralda.'
  }
];

export const FEATURES = [
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Productos seleccionados con los más altos estándares.'
  },
  {
    icon: Leaf,
    title: 'Origen 100% Colombiano',
    description: 'Apoyamos a los productores locales y artesanos.'
  },
  {
    icon: Globe,
    title: 'Sostenibilidad',
    description: 'Comprometidos con el medio ambiente y el comercio justo.'
  },
  {
    icon: Truck,
    title: 'Envíos Nacionales',
    description: 'Llevamos el sabor de Colombia a la puerta de tu casa.'
  }
];
