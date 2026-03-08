import { motion } from 'framer-motion';

import { ProductCardProps } from '../../types';
import Button from './Button';
import Image from './Image';

const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(product.price);

  return (
    <motion.div
      whileHover={{ y: -12 }}
      layout
      className="bg-[var(--bg-card)] rounded-2xl overflow-hidden shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-500 group h-full flex flex-col border border-[var(--border-color)]"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          containerClassName="w-full h-full"
          className="group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[var(--primary-color)]/95 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg shadow-lg">
            {product.category}
          </span>
        </div>
        
        {/* Overlay con gradiente más fuerte para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <p className="text-white text-sm font-medium leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-shadow-sm">
            {product.description}
          </p>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow text-center bg-white">
        <h3 className="text-2xl font-black text-[var(--secondary-color)] mb-4 group-hover:text-[var(--primary-color)] transition-colors duration-300 leading-tight">
          {product.name}
        </h3>
        <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-1">Precio</span>
            <span className="text-xl font-black text-[var(--primary-color)] tracking-tight">
              {formattedPrice}
            </span>
          </div>
          <Button variant="primary" size="sm" className="rounded-xl px-6 py-2.5 text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all">
            Agregar
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
