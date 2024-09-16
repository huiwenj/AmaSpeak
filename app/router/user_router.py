from urllib import request

from flask import Blueprint, render_template, abort

from app.util import string

user_router = Blueprint('user_router', __name__, url_prefix='/api/v1/user')

@user_router.route('login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if string.isBlank(username) and string.isBlank(password):
        return {'message': 'username or password is empty'}, 400

    # 查数据库


    return {'username': username, 'password': password}

# update
