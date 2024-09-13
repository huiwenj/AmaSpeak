from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from app.router.user_router import user_router

app = Flask("instance")
db = SQLAlchemy()

app.register_blueprint(user_router)
