import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { ProductCardProps } from '../../types';
import Button from './Button';
import Image from './Image';

const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          containerClassName="w-full h-full"
          className="group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <p className="text-white text-center text-sm font-medium leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {product.description}
          </p>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow text-center">
        <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-2">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-coffee-800 mb-2">
          {product.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProductCard;
