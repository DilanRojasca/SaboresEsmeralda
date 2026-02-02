import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PRODUCTS } from '../../utils/constants';
import ProductCard from '../ui/ProductCard';


const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Nuestra Riqueza</span>
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-800 mt-2">Tesoros de Colombia</h2>
          </div>
          <p className="text-gray-600 max-w-md md:text-right">
            Descubre la magia, el sabor y el arte que hacen de nuestro país un lugar único en el mundo.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="pb-12 !px-4 -mx-4 md:!px-0 md:mx-0"
        >
          {PRODUCTS.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <div className="h-full py-2">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
