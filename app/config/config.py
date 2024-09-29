from app.util.jwt import JWTManager

jwt_manager = None


def create_jwt_manager(secret_key):
    global jwt_manager
    jwt_manager = JWTManager(secret_key)
    print("jwt_manager created")


def get_jwt_manager():
    return jwt_manager
