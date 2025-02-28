from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from app.config.config import create_jwt_manager
from app.config.db import db
from app.router.user_router import user_router
from app.router.auth_router import auth_router
# 在Python shell中测试
from app import app, db
with app.app_context():
    db.create_all()  # 应成功创建数据表
app = Flask("instance")

CORS(app)

app.config[
    "SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:mysql_KMmwMw@34.169.24.14/instance_ai"
app.config["SECRET_KEY"] = "secret_key"
create_jwt_manager(app.config["SECRET_KEY"])

db.init_app(app)

app.register_blueprint(user_router)
app.register_blueprint(auth_router)  # 新增注册
