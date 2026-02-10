from sqlalchemy import Column, Integer, String
from app.config.database import Base

class Role(Base):
    __tablename__ = "roles"

    id = Column(Integer, primary_key=True)
    nombre = Column(String, unique=True)
