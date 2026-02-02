import { Coffee, Gem, Music, Gift, Video } from 'lucide-react';
import CardService from '../ui/CardService';

const SERVICES = [
  {
    icon: <Coffee className="w-8 h-8" />,
    title: 'Café de Origen',
    description: 'Selección exclusiva de los mejores granos de Quindío, Nariño y Huila, tostados a la perfección.'
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: 'Joyería Auténtica',
    description: 'Esmeraldas certificadas de Boyacá y piezas únicas elaboradas por artesanos locales.'
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Clases Culturales',
    description: 'Aprende a bailar salsa caleña y champeta con instructores expertos en clases virtuales.'
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: 'Kits Típicos',
    description: 'Cajas de regalo con arepas, panela, aguardiente y chocolate para sentirte en casa.'
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Experiencias Virtuales',
    description: 'Tours guiados por cafetales y pueblos patrimonio desde la comodidad de tu hogar.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-800 mt-2 mb-4">Lo mejor de nuestra tierra para ti</h2>
          <p className="text-gray-600 text-lg">
            Conectamos la riqueza cultural y natural de Colombia con el mundo a través de productos y experiencias únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <CardService
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
