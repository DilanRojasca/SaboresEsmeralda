import os
import sys

# Asegura que el directorio `backend` esté en sys.path cuando se ejecute desde la raíz
sys.path.insert(0, os.path.dirname(__file__))

from fastapi import FastAPI
from app.routes.auth_routes import router

app = FastAPI()

app.include_router(router)

@app.get("/")
def root():
    return {"status": "Backend funcionando correctamente"}