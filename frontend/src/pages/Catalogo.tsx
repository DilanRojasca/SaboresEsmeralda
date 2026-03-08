import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProducts } from "../context/ProductContext";
import { PRODUCTS as STATIC_PRODUCTS } from '../utils/constants';
import ProductCard from '../components/ui/ProductCard';

const CATEGORIES = ['Todos', 'Café', 'Joyería', 'Cultura', 'Tradición', 'Gastronomía', 'Artesanías'];

const Catalogo = () => {
  const { products: dynamicProducts } = useProducts();
  const [activeCategory, setActiveCategory] = useState('Todos');

  const allProducts = useMemo(() => {
    return [...STATIC_PRODUCTS, ...dynamicProducts];
  }, [dynamicProducts]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todos') return allProducts;
    return allProducts.filter(p => p.category === activeCategory);
  }, [allProducts, activeCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)]">
      {/* Hero Section del Catálogo */}
      <section className="relative py-20 overflow-hidden bg-[var(--secondary-color)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--primary-color)] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-color)] rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[var(--primary-color)] font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
          >
            Nuestra Colección Excelsa
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight"
          >
            Tesoros de <span className="text-[var(--primary-color)] italic">Colombia</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed"
          >
            Cada pieza cuenta una historia de herencia y pasión. Descubre la esencia de nuestra tierra a través de productos seleccionados con rigor y orgullo patrio.
          </motion.p>
        </div>
      </section>

      {/* Filtros */}
      <div className="sticky top-0 z-40 bg-[var(--bg-main)]/80 backdrop-blur-md border-b border-[var(--border-color)] py-6">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[var(--primary-color)] text-white shadow-lg'
                  : 'bg-white text-[var(--secondary-color)] hover:bg-gray-100 border border-[var(--border-color)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Productos */}
      <main className="container mx-auto px-4 py-16">
        {filteredProducts.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-[var(--secondary-color)]">No encontramos productos en esta categoría</h3>
            <p className="text-gray-500 mt-2">Prueba con otra categoría o regresa más tarde.</p>
            <button 
              onClick={() => setActiveCategory('Todos')}
              className="mt-6 text-[var(--primary-color)] font-bold underline"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Catalogo;