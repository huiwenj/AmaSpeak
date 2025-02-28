from flask import Blueprint, request

auth_router = Blueprint('auth_router', __name__, url_prefix='/api/v1/auth')

@auth_router.route('login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if string.isBlank(username) and string.isBlank(password):
        return {'message': 'username or password is empty'}, 400

    # 查数据库
    user = User.query.filter_by(email=username).first()
    if user is None:
        return {'message': 'user not found'}, 400

    if not user.check_password(password):
        return {'message': 'password is wrong'}, 400

    token = get_jwt_manager().generate_jwt(username)
    return {'token': token, "expire": 3600}