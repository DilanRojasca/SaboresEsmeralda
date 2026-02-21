from sqlalchemy import Column, Integer, String, ForeignKey, Text, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.config.database import Base

class User(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True)
    nombre = Column(String(100))
    correo = Column(String(100), unique=True)
    password = Column(Text)
    direccion = Column(Text)
    edad = Column(Integer)
    rol_id = Column(Integer, ForeignKey("roles.id"))
    google_id = Column(Text, nullable=True)
    creado_en = Column(DateTime, default=datetime.utcnow)
    
    # Relación con Role (sin backref, se define en Role)
    role = relationship("Role")
