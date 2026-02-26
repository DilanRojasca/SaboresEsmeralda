import { useState, ChangeEvent, FormEvent } from "react";
import { useProducts } from "../context/ProductContext";

const CrearProducto = () => {
  const { addProduct } = useProducts();

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price,
      image,
    };

    addProduct(newProduct);

    alert("Producto creado correctamente");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Crear Producto</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border"
          required
        />

        <input
          type="number"
          placeholder="Precio"
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full p-2 border"
          required
        />

        <input type="file" onChange={handleImageUpload} required />

        <button className="bg-green-700 text-white px-4 py-2 rounded">
          Publicar
        </button>
      </form>
    </div>
  );
};

export default CrearProducto;