import "./Register.css";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-card">
        <h1 className="register-title">
          Registro
        </h1>

        <input
          type="text"
          placeholder="Nombre"
          className="register-input"
        />

        <input
          type="email"
          placeholder="Correo"
          className="register-input"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="register-input"
        />
        
        <input 
          type="text"
          placeholder="Dirección"
          className="register-input"
        />

        <button className="register-button">
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Register;
