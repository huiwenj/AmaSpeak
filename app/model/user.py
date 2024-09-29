from datetime import datetime

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    last_name = db.Column(db.String(100), nullable=False)
    first_name = db.Column(db.String(100), unique=True)
    gender = db.Column(db.Integer, default=0)
    email = db.Column(db.String(100), nullable=False)
    avatar = db.Column(db.String(255), nullable=True)
    xp = db.Column(db.Integer, nullable=False, default=0)
    create_time = db.Column(db.DateTime, default=datetime.utcnow)
    update_time = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    active = db.Column(db.Boolean, default=True)
    deleted = db.Column(db.Boolean, default=False)
    password = db.Column(db.String(255), nullable=False)

    def __repr__(self) -> str:
        return super().__repr__()

    def check_password(self, password):
        return self.password == password
