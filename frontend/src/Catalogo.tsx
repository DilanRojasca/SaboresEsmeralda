import { useProducts } from "../context/ProductContext";

const Catalogo = () => {
  const { products } = useProducts();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Catálogo</h1>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover"
            />
            <h3 className="font-bold mt-2">{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
        <h1>CATALOGO FUNCIONANDO</h1>
    </div>
    
  );
  
};

export default Catalogo;