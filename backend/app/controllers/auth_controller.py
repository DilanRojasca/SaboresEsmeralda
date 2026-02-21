from sqlalchemy.orm import Session
from passlib.hash import bcrypt
from app.models.user_model import User
import hashlib

def _hash_password(password: str) -> str:
    """
    Hashea la contraseña primero con SHA256 y luego con bcrypt.
    Esto evita el límite de 72 bytes de bcrypt.
    """
    # Primero hashear con SHA256 para evitar el límite de 72 bytes
    sha256_hash = hashlib.sha256(password.encode('utf-8')).hexdigest()
    # Luego hashear con bcrypt
    return bcrypt.hash(sha256_hash)

def _verify_password(password: str, hashed_password: str) -> bool:
    """
    Verifica la contraseña contra el hash.
    """
    sha256_hash = hashlib.sha256(password.encode('utf-8')).hexdigest()
    return bcrypt.verify(sha256_hash, hashed_password)

def register_user(data, db: Session):
    try:
        # Verificar si el usuario ya existe
        existing_user = db.query(User).filter(User.correo == data["correo"]).first()
        if existing_user:
            return {"error": "El correo ya está registrado"}
        
        user = User(
            nombre=data["nombre"],
            correo=data["correo"],
            password=_hash_password(data["password"]),
            direccion=data["direccion"],
            edad=data["edad"],
            rol_id=data["rol_id"]
        )
        db.add(user)
        db.commit()
        db.refresh(user)
        return {
            "success": True,
            "message": "Usuario registrado correctamente",
            "user": {
                "id": user.id,
                "nombre": user.nombre,
                "correo": user.correo,
                "rol_id": user.rol_id
            }
        }
    except Exception as e:
        db.rollback()
        return {"error": f"Error al registrar usuario: {str(e)}"}

def login_user(correo, password, db: Session):
    try:
        user = db.query(User).filter(User.correo == correo).first()

        if not user or not _verify_password(password, user.password):
            return {"error": "Credenciales inválidas"}

        user_data = {
            "id": user.id,
            "nombre": user.nombre,
            "correo": user.correo,
            "rol_id": user.rol_id
        }

        if user.rol_id == 3:
            return {
                "success": True,
                "redirect": "/admin",
                "user": user_data
            }

        return {
            "success": True,
            "redirect": "/dashboard",
            "user": user_data
        }
    except Exception as e:
        return {"error": f"Error al iniciar sesión: {str(e)}"}
