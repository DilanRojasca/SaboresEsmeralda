import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS, FALLBACK_AVATAR } from '../../utils/constants';
import Image from '../ui/Image';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-800 mt-2">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-emerald-100 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fallbackSrc={FALLBACK_AVATAR}
                  containerClassName="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-coffee-800 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-emerald-600 font-medium">{testimonial.city}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
