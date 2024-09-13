from flask import Flask

from app.router.user_router import user_router
from flask_sqlalchemy import SQLAlchemy

app = Flask("instance")
db = SQLAlchemy()


app.register_blueprint(user_router)