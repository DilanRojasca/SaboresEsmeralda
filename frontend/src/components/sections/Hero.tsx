import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-coffee-800">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-400/50 backdrop-blur-sm text-emerald-300 text-sm font-semibold mb-6 tracking-wide"
          >
            🇨🇴 100% Orgullo Colombiano
          </motion.span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Los sabores auténticos de <span className="text-emerald-400">Colombia</span> en tu hogar
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Café de altura • Esmeraldas de Boyacá • Experiencias culturales • Productos que cuentan historias
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#products" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-emerald-900/20">
                Conoce Colombia
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full text-white border-white hover:bg-white hover:text-coffee-800"
              >
                Ver Servicios
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
