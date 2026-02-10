from sqlalchemy.orm import Session
from passlib.hash import bcrypt
from app.models.user_model import User

def register_user(data, db: Session):
    user = User(
        nombre=data["nombre"],
        correo=data["correo"],
        password=bcrypt.hash(data["password"]),
        direccion=data["direccion"],
        edad=data["edad"],
        rol_id=data["rol_id"]
    )
    db.add(user)
    db.commit()
    return {"redirect": "/login"}

def login_user(correo, password, db: Session):
    user = db.query(User).filter(User.correo == correo).first()

    if not user or not bcrypt.verify(password, user.password):
        return {"error": "Credenciales inválidas"}

    if user.rol_id == 3:
        return {"redirect": "/admin"}

    return {"redirect": "/dashboard"}
