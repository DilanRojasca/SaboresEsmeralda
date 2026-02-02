import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import FeaturedProducts from './components/sections/FeaturedProducts';
import Testimonials from './components/sections/Testimonials';
import WhyChooseUs from './components/sections/WhyChooseUs';

function App() {
  return (
    <div className="min-h-screen font-sans bg-cream selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
