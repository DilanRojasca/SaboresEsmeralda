const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-800">
      <div className="bg-white p-8 rounded-xl w-96 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-800">
          Registro
        </h1>

        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-2 border rounded-full mb-4"
        />

        <input
          type="email"
          placeholder="Correo"
          className="w-full p-2 border rounded-full mb-4"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 border rounded-full mb-4"
        />
        
        <input 
          type="Direction"
          placeholder="Dirección"
          className="w-full p-2 border rounded-full mb-4"
        />

        <button className="w-full bg-green-800 text-white mt-4 p-2 rounded-full hover:bg-green-900 transition">
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Register;
