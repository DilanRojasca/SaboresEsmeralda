from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app.config.database import Base

class Role(Base):
    __tablename__ = "roles"

    id = Column(Integer, primary_key=True)
    nombre = Column(String(100), unique=True)
    
    # Relación con usuarios (aquí debe estar el backref)
    usuarios = relationship("User", backref="rol")
