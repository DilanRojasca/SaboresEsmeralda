import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-800">
      <div className="bg-white p-8 rounded-xl w-96 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-800">
          Iniciar Sesión
        </h1>

        <input
          type="email"
          placeholder="Correo"
          className="w-full p-2 border rounded-full mb-4"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="w-full p-2 border rounded-full"
          />
          <span
            className="absolute right-4 top-2 cursor-pointer text-green-800"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button className="w-full bg-green-800 text-white mt-6 p-2 rounded-full hover:bg-green-900 transition">
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
