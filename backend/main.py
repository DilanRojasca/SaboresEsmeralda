import os
import sys

# Asegura que el directorio `backend` esté en sys.path cuando se ejecute desde la raíz
sys.path.insert(0, os.path.dirname(__file__))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.auth_routes import router
from app.config.database import engine, Base
from app.models.user_model import User
from app.models.role_model import Role

# Crear las tablas si no existen (aunque ya existan en Neon)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Sabores Esmeralda API", version="1.0.0")

# Configurar CORS para permitir solicitudes desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, especifica los orígenes permitidos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api/auth", tags=["auth"])

@app.get("/")
def root():
    return {"status": "Backend funcionando correctamente", "version": "1.0.0"}

@app.get("/health")
def health():
    return {"status": "OK", "service": "Sabores Esmeralda API"}