from fastapi.responses import JSONResponse

def success(data):
    """Retorna una respuesta exitosa"""
    if isinstance(data, dict) and "error" in data:
        return JSONResponse(
            content={"success": False, "error": data["error"]},
            status_code=400
        )
    
    response_data = {"success": True}
    if isinstance(data, dict):
        response_data.update(data)
    else:
        response_data["data"] = data
    
    return JSONResponse(content=response_data, status_code=200)

def error(msg, status_code=400):
    """Retorna una respuesta con error"""
    return JSONResponse(
        content={"success": False, "error": msg},
        status_code=status_code
    )
