from fastapi import APIRouter, Form, Depends
from sqlalchemy.orm import Session

from app.config.database import SessionLocal
from app.controllers.auth_controller import register_user, login_user
from app.views.responsive_view import success, error

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(
    nombre: str = Form(...),
    correo: str = Form(...),
    password: str = Form(...),
    direccion: str = Form(...),
    edad: int = Form(...),
    rol: str = Form(...),
    db: Session = Depends(get_db)
):
    roles = {"invitado": 1, "usuario": 2, "admin": 3}
    data = {
        "nombre": nombre,
        "correo": correo,
        "password": password,
        "direccion": direccion,
        "edad": edad,
        "rol_id": roles[rol]
    }
    return success(register_user(data, db))

@router.post("/login")
def login(
    correo: str = Form(...),
    password: str = Form(...),
    db: Session = Depends(get_db)
):
    result = login_user(correo, password, db)
    if "error" in result:
        return error(result["error"])
    return success(result)
