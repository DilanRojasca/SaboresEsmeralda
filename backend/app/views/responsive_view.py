from fastapi.responses import JSONResponse

def success(data):
    return JSONResponse(content=data)

def error(msg):
    return JSONResponse(content={"error": msg}, status_code=400)
