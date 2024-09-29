from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from app.config.config import create_jwt_manager
from app.router.user_router import user_router

app = Flask("instance")
app.config[
    "SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:mysql_KMmwMw@34.169.24.14/instance_ai"
app.config["SECRET_KEY"] = "secret_key"
create_jwt_manager(app.config["SECRET_KEY"])

db = SQLAlchemy()
db.init_app(app)

app.register_blueprint(user_router)
