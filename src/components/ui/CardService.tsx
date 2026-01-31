import { motion } from 'framer-motion';
import { ServiceCardProps } from '../../types';

const CardService: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group border border-gray-100"
    >
      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-coffee-800 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default CardService;
