import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">
          Iniciar Sesión
        </h1>

        <input
          type="email"
          placeholder="Correo"
          className="login-input"
        />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="login-input"
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
          </button>
        </div>

        <button className="login-button">
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
