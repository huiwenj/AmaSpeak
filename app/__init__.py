from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from app.router.user_router import user_router

app = Flask("instance")
app.config[
    'SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:mysql_KMmwMw@34.169.24.14/instance_ai'
db = SQLAlchemy()
db.init_app(app)

app.register_blueprint(user_router)
