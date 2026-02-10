from sqlalchemy import Column, Integer, String, ForeignKey
from app.config.database import Base

class User(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True)
    nombre = Column(String)
    correo = Column(String, unique=True)
    password = Column(String)
    direccion = Column(String)
    edad = Column(Integer)
    rol_id = Column(Integer, ForeignKey("roles.id"))
