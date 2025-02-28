from flask import Blueprint, request

from app.config.config import get_jwt_manager
from app.model.user import User
from app.util import string

user_router = Blueprint('user_router', __name__, url_prefix='/api/v1/user')


@user_router.route('login', methods=['POST'])
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


@user_router.route('test-jwt', methods=['POST'])
def test_jwt():

    try:
        # 获取请求中的 token 或 user_id
        user_id = request.json.get('user_id')
        token = request.json.get('token')

        if user_id:
            # 生成 JWT
            jwt_token = get_jwt_manager().generate_jwt(user_id)
            return {'token': jwt_token}, 200

        if token:
            # 验证 JWT
            decoded_payload = get_jwt_manager().verify_jwt(token)
            if not decoded_payload:
                return {'message': 'Invalid or expired token'}, 401
            return {'decoded': decoded_payload}, 200

        return {'message': 'Please provide either user_id or token'}, 400

    except Exception as e:
        print(f"Error occurred: {e}")
        return {'message': 'Internal server error'}, 500
