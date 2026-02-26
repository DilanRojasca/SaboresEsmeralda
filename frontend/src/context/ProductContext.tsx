import { createContext, useContext, useEffect, useState, ReactNode } from "react";


// Se define el tipo de producto
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Se define el tipo del contexto
interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Cargar productos al iniciar
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  // Guardar cuando cambien
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook personalizado
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts debe usarse dentro de ProductProvider");
  }
  return context;
};