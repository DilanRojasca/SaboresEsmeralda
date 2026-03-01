import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Coffee, Gem } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Coffee className="w-8 h-8 text-emerald-400" />
                <Gem className="w-4 h-4 text-gold absolute -top-1 -right-1" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Sabores Esmeralda
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Llevando lo mejor de Colombia al mundo. Café, esmeraldas y cultura en un solo lugar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Explorar</h4>
            <ul className="space-y-3">
              {['Inicio', 'Nuestros Productos', 'Servicios', 'Historias', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <span>Calle 93 # 11-45, Bogotá, Colombia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>+57 313 5220444</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>saboresES@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Síguenos</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 Sabores Esmeralda. Todos los derechos reservados. Orgullo Colombiano 🇨🇴</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

