from flask import Flask
from flask_cors import CORS

from app.config.config import create_jwt_manager
from app.config.db import db
from app.router.user_router import user_router


def init_config(app):
    app.config[
        "SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:mysql_KMmwMw@34.169.24.14/instance_ai"
    app.config["SECRET_KEY"] = "secret_key"


def create_app():
    app = Flask("instance")

    init_config(app)

    create_jwt_manager(app.config["SECRET_KEY"])

    CORS(app)

    db.init_app(app)

    app.register_blueprint(user_router)

    return app


