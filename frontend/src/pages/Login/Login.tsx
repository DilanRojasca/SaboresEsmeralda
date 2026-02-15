import { useState } from "react";
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
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button className="login-button">
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
